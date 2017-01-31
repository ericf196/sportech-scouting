<template>
    <div>
        <modal :open="open" :complete-callback="close" size="lg" fixed-footer :dismissible="false">
            <modal-header :title="$t('athletes.new')"></modal-header>
            <form class="form" id="athlete-form">
                <modal-content>
                    <div slot="content">
                        <div class="row">
                            <div class="col-xs-12 col-md-6">
                                <div class="form-group"
                                     :class="{'has-error': errors.has('athlete.first_name') }">
                                    <label for="first_name" data-vv-error="">{{$t('athletes.first_name')}}
                                    </label>
                                    <div class="input-group">
                                        <div class="input-group-addon"><i class="fa fa-user"></i></div>
                                        <input id="first_name"
                                               type="text"
                                               name="athlete.first_name"
                                               :placeholder="$t('athletes.first_name')"
                                               v-validate.initial="athlete.first_name"
                                               data-vv-rules="required"
                                               :data-vv-as="$t('athletes.first_name')"
                                               v-model="athlete.first_name"
                                               class="form-control">
                                    </div>
                                    <span class="text-danger"
                                          v-show="errors.has('athlete.first_name')">{{ errors.first('athlete.first_name') }}</span>
                                </div>
                            </div>
                            <div class="col-xs-12 col-md-6">
                                <div class="form-group"
                                     :class="{'has-error': errors.has('athlete.last_name') }">
                                    <label for="last_name" data-vv-error="">{{$t('athletes.last_name')}}
                                    </label>
                                    <div class="input-group">
                                        <div class="input-group-addon"><i class="fa fa-user"></i></div>
                                        <input id="last_name" type="text"
                                               name="athlete.last_name"
                                               :placeholder="$t('athletes.last_name')"
                                               v-model="athlete.last_name"
                                               v-validate.initial="athlete.last_name" data-vv-rules="required"
                                               :data-vv-as="$t('athletes.last_name')"
                                               class="form-control">
                                    </div>
                                    <span class="text-danger"
                                          v-show="errors.has('athlete.last_name')">{{ errors.first('athlete.last_name') }}</span>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-xs-12 col-md-6">
                                <div class="form-group"
                                     :class="{'has-error': errors.has('athlete.gender') }">
                                    <label for="sports" data-vv-error="">{{$t('athletes.gender')}}</label>
                                    <v-select :value="athlete.gender" label="name"
                                              :placeholder="$t('athletes.select_option')"
                                              :on-change="genderChanged"
                                              :options="genders"></v-select>
                                    <input id="gender_input"
                                           type="hidden"
                                           v-model="athlete.gender"
                                           name="athlete.gender"
                                           v-validate.initial="athlete.gender" data-vv-rules="required"
                                           :data-vv-as="$t('athletes.gender')"
                                           class="form-control">
                                    <span class="text-danger" v-show="errors.has('athlete.gender')">{{ errors.first('athlete.gender') }}</span>
                                </div>
                            </div>
                            <div class="col-xs-12 col-md-6">
                                <div class="form-group"
                                     :class="{'has-error': errors.has('athlete.country') }">
                                    <label for="sports" data-vv-error="">{{$t('athletes.country')}}</label>
                                    <v-select :value="athlete.country" label="name"
                                              :on-change="countryChanged"
                                              :placeholder="$t('athletes.select_option')"
                                              :options="countries"></v-select>
                                    <input id="country_input" type="hidden"
                                           v-model="athlete.country"
                                           name="athlete.country"
                                           v-validate.initial="athlete.country" data-vv-rules="required"
                                           :data-vv-as="$t('athletes.country')"
                                           class="form-control">
                                    <span class="text-danger" v-show="errors.has('athlete.country')">{{ errors.first('athlete.country') }}</span>
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
    import athleteLocales from 'base/lang/admin/athletes/athletes.js';
    import vSelect from "base/components/forms/select/select.vue"
    import formDataObjectParser from 'base/mixins/ajax/formDataParser'
    import {mapActions} from 'vuex'

    export default{
        props: {
            open: {
                type: Boolean,
                required: true
            },
            type: {
                type: String,
                required: true
            }
        },
        components: {
            vSelect,
            'modal': require('base/components/global/modals/modal.vue'),
            'modal-content': require('base/components/global/modals/modal-content.vue'),
            'modal-footer': require('base/components/global/modals/modal-footer.vue'),
            'modal-header': require('base/components/global/modals/modal-header.vue'),
        },
        mixins: [formDataObjectParser],
        data(){
            return {
                athlete: {
                    first_name: '',
                    last_name: '',
                    sport: null,
                    specialty: null,
                    category: null,
                    gender: null,
                    country: null,
                    events: []
                },
                updating: false,
            }
        },
        computed: {
            genders() {
                return this.$store.state.common.genders
            },
            countries() {
                return this.$store.state.common.countries
            },
        },
        locales: athleteLocales,
        created(){
            if (!this.countries.length)
                this.getCountries();
            if (!this.genders.length)
                this.getGenders();
        },
        methods: {
            ...mapActions({
                getCountries: 'common:getCountries',
                getGenders: 'common:getGenders',
            }),
            countryChanged(country){
                this.athlete.country = country
            },
            genderChanged(gender){
                this.athlete.gender = gender
            },
            close(){
                this.$emit('athlete-new-close');
            },
            onSubmit(evt){
                evt.preventDefault();
                this.$validator.validateAll();
                if (this.errors.any()) {
                    this.$root.errorToast(this.$t('admin.validation_error'));
                } else {
                    this.athlete.name = this.athlete.first_name + ' ' + this.athlete.last_name;
                    this.$emit(this.type + '-athlete-created', this.athlete);
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
