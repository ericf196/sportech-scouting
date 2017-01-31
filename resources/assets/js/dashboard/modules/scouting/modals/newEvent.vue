<template>
    <div>
        <modal :open="open" :complete-callback="close" size="lg" fixed-footer :dismissible="false">
            <modal-header :title="$t('events.new')"></modal-header>
            <form class="form" id="event-form">
                <modal-content>
                    <div slot="content">
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group"
                                     :class="{'has-error': errors.has('event.translation.name.en') }">
                                    <label for="nameen" data-error="">{{$t('events.name')}}
                                    </label>
                                    <div class="input-group">
                                        <div class="input-group-addon"><i
                                                class="fa fa-user"></i></div>
                                        <input id="nameen" name="event.translation.name.en"
                                               type="text"
                                               :placeholder="$t('events.name')"
                                               v-model="event.translation.name.en"
                                               v-validate.initial="event.translation.name.en"
                                               data-vv-rules="required"
                                               :data-vv-as="$t('events.name')"
                                               class="form-control">
                                    </div>
                                    <span class="text-danger"
                                          v-show="errors.has('event.translation.name.en')">{{ errors.first('event.translation.name.en') }}</span>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-xs-12 col-md-6">
                                <div class="form-group"
                                     :class="{'has-error': errors.has('event.specialty') }">
                                    <label for="sports" data-error="">{{$t('events.specialty')}}</label>
                                    <v-select :value="event.specialty" label="name"
                                              :on-change="specialtyChanged"
                                              :placeholder="$t('events.select_option')"
                                              :options="specialties"></v-select>
                                    <input id="specialty_input" type="hidden"
                                           name="event.specialty"
                                           field="specialty_input" initial="off" v-model="event.specialty"
                                           v-validate.initial="event.specialty"
                                           data-vv-rules="required"
                                           :data-vv-as="$t('events.specialty')"
                                           class="form-control">
                                    <span class="text-danger"
                                          v-show="errors.has('event.specialty')">{{ errors.first('event.specialty') }}</span>
                                </div>

                            </div>
                            <div class="col-xs-12 col-md-6">
                                <div class="form-group"
                                     :class="{'has-error': errors.has('event.category') }">
                                    <label for="sports" data-error="">{{$t('events.category')}}</label>
                                    <v-select :value="event.category" label="name"
                                              :on-change="categoryChanged"
                                              :placeholder="$t('events.select_option')"
                                              :options="categories"></v-select>
                                    <input id="category_input" type="hidden"
                                           name="event.category"
                                           v-model="event.category"
                                           v-validate.initial="event.category"
                                           data-vv-rules="required"
                                           :data-vv-as="$t('events.category')"
                                           class="form-control">
                                    <span class="text-danger"
                                          v-show="errors.has('event.category')">{{ errors.first('event.category') }}</span>

                                </div>
                            </div>
                        </div>


                        <div class="row">
                            <div class="col-xs-12 col-md-6">
                                <div class="form-group"
                                     :class="{'has-error': errors.has('event.init_date') }">
                                    <label for="init_date" data-error="">{{$t('events.init_date')}}</label>
                                    <vue-datetime-picker class="vue-picker2" name="init_date"
                                                         :model="event.init_date"
                                                         :on-change="initDateChanged"
                                                         type="datetime"
                                                         language="en"
                                                         datetime-format="LLL">
                                    </vue-datetime-picker>
                                    <input id="init_input" type="hidden"
                                           v-model="event.init_date"
                                           name="event.init_date"
                                           v-validate.initial="event.init_date"
                                           data-vv-rules="required"
                                           :data-vv-as="$t('events.init_date')"
                                           class="form-control">
                                    <span class="text-danger"
                                          v-show="errors.has('event.init_date')">{{ errors.first('event.init_date') }}</span>

                                </div>
                            </div>
                            <div class="col-xs-12 col-md-6">
                                <div class="form-group"
                                     :class="{'has-error': errors.has('event.end_date') }">
                                    <label for="end_date" data-error="">{{$t('events.end_date')}}</label>
                                    <vue-datetime-picker class="vue-picker3" name="end_date"
                                                         :model="event.end_date"
                                                         type="datetime"
                                                         language="en"
                                                         :on-change="endDateChanged"
                                                         datetime-format="LLL">
                                    </vue-datetime-picker>
                                    <input id="end_input" type="hidden"
                                           v-model="event.end_date"
                                           name="event.end_date"
                                           v-validate.initial="event.end_date"
                                           data-vv-rules="required"
                                           :data-vv-as="$t('events.end_date')"
                                           class="form-control">
                                    <span class="text-danger"
                                          v-show="errors.has('event.end_date')">{{ errors.first('event.end_date') }}</span>

                                </div>
                            </div>
                        </div>
                    </div>
                </modal-content>
            </form>
            <modal-footer>
                <button class="btn btn-danger"
                        @click="close">
                    {{$t('forms.back')}}
                </button>
                <button type="submit" href="#!"
                        class="btn btn-success"
                        :class="{'disabled':updating}"
                        @click="onSubmit">
                    {{$t('forms.save')}}
                </button>
            </modal-footer>
        </modal>
    </div>
</template>

<script type="text/babel">
    import eventLocales from 'base/lang/admin/events/events.js';
    import formDataObjectParser from 'base/mixins/ajax/formDataParser'
    import {mapActions} from 'vuex'
    import dncImageUploader from 'base/components/upload/dnc-image-upload.vue';
    import vSelect from "base/components/forms/select/select.vue"
    import adminHeader from 'base/components/header/pageHeader.vue'
    import eventService from 'base/dashboard/services/events/eventService'

    import moment from 'moment';


    export default{
        props: {
            open: {
                type: Boolean,
                required: true
            },
            championship: {}
        },
        watch: {
            championship: function (val) {
                var self = this;
                this.event.championship = val;
                this.event.init_date = moment(val.init_date);
                this.event.end_date = moment(val.end_date);
                if (val) {
                    this.getSpecialties(val.sport.id, (data)=> {
                        if (!data.filter((specialty)=> {
                                    return specialty.id == self.event.specialty.id
                                }).length) {
                            self.event.specialty = null;
                        }
                    });
                } else {
                    this.$store.commit('common:SET_SPECIALTIES', []);
                    this.event.specialty = null;
                }
            }
        },
        components: {
            vSelect,
            "vue-datetime-picker": require("base/components/datetime/vue-datetime-picker.js"),
            'modal': require('base/components/global/modals/modal.vue'),
            'modal-content': require('base/components/global/modals/modal-content.vue'),
            'modal-footer': require('base/components/global/modals/modal-footer.vue'),
            'modal-header': require('base/components/global/modals/modal-header.vue'),
        },
        mixins: [formDataObjectParser],
        data(){
            return {
                event: {
                    init_date: null,
                    end_date: null,
                    championship: null,
                    category: null,
                    specialty: null,
                    athletes: [],
                    translation: {
                        name: {
                            es: '',
                            en: ''
                        },
                        description: {
                            es: '',
                            en: ''
                        }
                    }
                },
                updating: false,
            }
        },
        computed: {
            specialties() {
                return this.$store.state.common.specialties
            },
            categories() {
                return this.$store.state.common.categories
            },
        },
        locales: eventLocales,
        created(){
            if (!this.categories.length)
                this.getCategories();
            this.event.init_date = moment();
            this.event.end_date = moment();
        },
        methods: {
            ...mapActions({
                getCategories: 'common:getCategories',
                getSpecialties: 'common:getSpecialties',
            }),
            specialtyChanged(specialty){
                this.event.specialty = specialty
            },
            categoryChanged(category){
                this.event.category = category
            },
            endDateChanged(date){
                this.event.end_date = date;
            },
            initDateChanged(date){
                this.event.init_date = date;
            },
            close(){
                this.$emit('event-new-close');
            },
            onSubmit(evt){
                evt.preventDefault();
                this.$validator.validateAll();
                if (this.errors.any()) {
                    this.$root.errorToast(this.$t('admin.validation_error'));
                } else {
                    this.event.name = this.event.translation.name.en;
                    this.event.translation.name.es = this.event.translation.name.en;
                    this.$emit('event-created', this.event);
                }
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    .select-input {
        margin-top: 0 !important;
    }
</style>
