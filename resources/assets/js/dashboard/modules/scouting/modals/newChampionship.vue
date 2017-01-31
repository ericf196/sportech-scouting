<template>
    <div>
        <modal :open="open" :complete-callback="close" size="lg" fixed-footer :dismissible="false">
            <modal-header :title="$t('championships.new')"></modal-header>
            <form class="form" id="championship-form">
                <modal-content>
                    <div slot="content">
                        <div class="row">
                            <div class="col-xs-12 col-md-6">
                                <div class="form-group"
                                     :class="{'has-error': errors.has('championship.translation.name.en') }">
                                    <label for="nameen" data-error="">{{$t('championships.name')}}
                                    </label>
                                    <div class="input-group">
                                        <div class="input-group-addon"><i
                                                class="fa fa-user"></i></div>
                                        <input id="nameen" name="championship.translation.name.en"
                                               type="text"
                                               :placeholder="$t('championships.name')"
                                               v-model="championship.translation.name.en"
                                               v-validate.initial="championship.translation.name.en"
                                               data-vv-rules="required"
                                               :data-vv-as="$t('championships.name')"
                                               class="form-control">
                                    </div>
                                    <span class="text-danger"
                                          v-show="errors.has('championship.translation.name.en')">{{ errors.first('championship.translation.name.en') }}</span>
                                </div>
                            </div>
                            <div class="col-xs-12 col-md-6">
                                <div class="form-group"
                                     :class="{'has-error': errors.has('championship.sport') }">
                                    <label for="sports" data-error="">{{$t('championships.sport')}}</label>
                                    <v-select :value="championship.sport" label="name"
                                              :on-change="sportChanged"
                                              :placeholder="$t('championships.select_option')"
                                              :options="sports"></v-select>
                                    <input id="sport_input"
                                           type="hidden"
                                           name="championship.sport"
                                           v-model="championship.sport"
                                           v-validate.initial="championship.sport"
                                           data-vv-rules="required"
                                           :data-vv-as="$t('championships.sport')"
                                           class="form-control">
                                    <span class="text-danger"
                                          v-show="errors.has('championship.sport')">{{ errors.first('championship.sport') }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-md-6">
                                <div class="form-group"
                                     :class="{'has-error': errors.has('championship.init_date') }">
                                    <label for="init_date" data-error="">{{$t('championships.init_date')}}
                                    </label>
                                    <vue-datetime-picker class="vue-picker2" name="init_date"
                                                         :model="championship.init_date"
                                                         :on-change="initDateChanged"
                                                         type="datetime"
                                                         language="en"
                                                         datetime-format="LLL">
                                    </vue-datetime-picker>
                                </div>
                            </div>
                            <div class="col-xs-12 col-md-6">
                                <div class="form-group"
                                     :class="{'has-error': errors.has('championship.end_date') }">
                                    <label for="end_date" data-error="">{{$t('championships.end_date')}}</label>
                                    <vue-datetime-picker class="vue-picker3" name="end_date"
                                                         :model="championship.end_date"
                                                         type="datetime"
                                                         language="en"
                                                         :on-change="endDateChanged"
                                                         datetime-format="LLL">
                                    </vue-datetime-picker>
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
    import championshipLocales from 'base/lang/admin/championships/championships.js';
    import formDataObjectParser from 'base/mixins/ajax/formDataParser'
    import {mapActions} from 'vuex'
    import vSelect from "base/components/forms/select/select.vue"
    import championshipService from 'base/dashboard/services/championships/championshipService'

    import moment from 'moment';

    export default{
        props: {
            open: {
                type: Boolean,
                required: true
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
                championship: {
                    init_date: null,
                    end_date: null,
                    sport: null,
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
            sports() {
                return this.$store.state.common.sports
            },
        },
        locales: championshipLocales,
        created(){
            if (!this.sports.length)
                this.getSports((data)=> {
                    this.championship.sport = data[0];
                });
            this.championship.init_date = moment();
            this.championship.end_date = moment();
        },
        methods: {
            ...mapActions({
                getSports: 'common:getSports',
            }),
            sportChanged(sport){
                this.championship.sport = sport
            },
            endDateChanged(date){
                this.championship.end_date = date;
            },
            initDateChanged(date){
                this.championship.init_date = date;
            },
            close(){
                this.$emit('championship-new-close');
            },
            onSubmit(evt){
                evt.preventDefault();
                this.$validator.validateAll();
                if (this.errors.any()) {
                    this.$root.errorToast(this.$t('admin.validation_error'));
                } else {
                    this.championship.name = this.championship.translation.name.en;
                    this.championship.translation.name.es = this.championship.translation.name.en;
                    this.$emit('championship-created', this.championship);
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
