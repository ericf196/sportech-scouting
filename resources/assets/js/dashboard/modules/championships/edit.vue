<template>
    <div>
        <admin-header :title="$t('admin.championships')" :breadcrumbs="breadcrumbs"></admin-header>
        <section class="content">
            <form class="form" id="championship-form">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="box">
                            <div class="box-header with-border">
                                <h3 class="box-title">{{$t('admin.championships')}}</h3>
                            </div><!-- /.box-header -->
                            <div class="box-body">
                                <div class="row">
                                    <div class="col-xs-12 col-md-6">
                                        <div class="form-group"
                                             :class="{'has-error': errors.has('nameen') }">
                                            <label for="nameen" data-error="">{{$t('championships.name')}}
                                            </label>
                                            <div class="input-group">
                                                <div class="input-group-addon">
                                                    <i
                                                            class="fa fa-user"></i>
                                                </div>
                                                <input id="nameen" name="nameen"
                                                       type="text"
                                                       :placeholder="$t('championships.name')"
                                                       v-model="championship.translation.name.en"
                                                       v-validate.initial
                                                       data-vv-rules="required"
                                                       :data-vv-as="$t('championships.name')"
                                                       class="form-control">
                                            </div>
                                            <span class="text-danger"
                                                  v-show="errors.has('nameen')">{{
                                                errors.first('nameen') }}
                                            </span>
                                        </div>
                                        <div class="form-group"
                                             :class="{'has-error': errors.has('descriptionen') }">
                                            <label for="descriptionen" data-error="">
                                                {{$t('championships.description')}}
                                            </label>
                                            <div class="input-group">
                                                <div class="input-group-addon">
                                                    <i
                                                            class="fa fa-user"></i>
                                                </div>
                                                <textarea id="descriptionen"
                                                          name="descriptionen"
                                                          type="text"
                                                          :placeholder="$t('championships.description')"
                                                          v-model="championship.translation.description.en"
                                                          v-validate.initial
                                                          data-vv-rules="required"
                                                          :data-vv-as="$t('championships.description')"
                                                          class="form-control"></textarea>
                                            </div>
                                            <span class="text-danger"
                                                  v-show="errors.has('descriptionen')">{{
                                                errors.first('descriptionen') }}
                                            </span>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-md-6 text-center">
                                        <dnc-image-uploader :btn-text="$t('championships.upload_image')"
                                                            :error-validation-msg="$t('validation.image',{attribute:$t('championships.upload_image')})"
                                                            :image="championship.image"
                                                            default-image="/images/missing/championship/missing.png"
                                                            ref="uploader"></dnc-image-uploader>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-xs-12">
                                        <div class="form-group"
                                             :class="{'has-error': errors.has('sport') }">
                                            <label for="sports" data-error="">{{$t('championships.sport')}}</label>
                                            <v-select :value="championship.sport" label="name"
                                                      :on-change="sportChanged"
                                                      :placeholder="$t('championships.select_option')"
                                                      :options="sports"></v-select>
                                            <input id="sport_input"
                                                   type="hidden"
                                                   name="championship.sport"
                                                   v-model="championship.sport"
                                                   v-validate.initial
                                                   data-vv-rules="required"
                                                   :data-vv-as="$t('championships.sport')"
                                                   class="form-control">
                                            <span class="text-danger"
                                                  v-show="errors.has('sport')">{{
                                                errors.first('sport') }}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-12 col-md-6">
                                        <div class="form-group"
                                             :class="{'has-error': errors.has('init_date') }">
                                            <label for="init_date" data-error="">{{$t('championships.init_date')}}
                                            </label>
                                            <vue-datetime-picker class="vue-picker2" name="init_date"
                                                                 :model="championship.init_date"
                                                                 :on-change="initDateChanged"
                                                                 type="datetime"
                                                                 language="en"
                                                                 datetime-format="LLL">
                                            </vue-datetime-picker>
                                            <input id="init_input" type="hidden"
                                                   v-model="championship.init_date"
                                                   name="championship.init_date"
                                                   v-validate.initial
                                                   data-vv-rules="required"
                                                   :data-vv-as="$t('championships.init_date')"
                                                   class="form-control">
                                            <span class="text-danger"
                                                  v-show="errors.has('init_date')">{{
                                                errors.first('init_date') }}
                                            </span>

                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-md-6">
                                        <div class="form-group"
                                             :class="{'has-error': errors.has('end_date') }">
                                            <label for="end_date" data-error="">{{$t('championships.end_date')}}</label>
                                            <vue-datetime-picker class="vue-picker3" name="end_date"
                                                                 :model="championship.end_date"
                                                                 type="datetime"
                                                                 language="en"
                                                                 :on-change="endDateChanged"
                                                                 datetime-format="LLL">
                                            </vue-datetime-picker>
                                            <input id="end_input" type="hidden"
                                                   v-model="championship.end_date"
                                                   name="championship.end_date"
                                                   v-validate.initial
                                                   data-vv-rules="required"
                                                   :data-vv-as="$t('championships.end_date')"
                                                   class="form-control">
                                            <span class="text-danger"
                                                  v-show="errors.has('end_date')">{{
                                                errors.first('end_date') }}
                                            </span>

                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-12 text-center">
                                        <button class="btn btn-danger"
                                                @click="onBack">
                                            {{$t('forms.back')}}
                                        </button>
                                        <button type="submit" href="#!"
                                                class="btn btn-success"
                                                :class="{'disabled':updating}"
                                                @click="onSubmit">
                                            {{$t('forms.save')}}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    </div>
</template>

<script type="text/babel">
    import championshipLocales from 'base/lang/admin/championships/championships.js';
    import formDataObjectParser from 'base/mixins/ajax/formDataParser'
    import {mapActions} from 'vuex'
    import dncImageUploader from 'base/components/upload/dnc-image-upload.vue';
    import vSelect from "base/components/forms/select/select.vue"
    import adminHeader from 'base/components/header/pageHeader.vue'
    import championshipService from 'base/dashboard/services/championships/championshipService'

    import moment from 'moment';

    export default{
        components: {
            vSelect,
            adminHeader,
            dncImageUploader,
            "vue-datetime-picker": require("base/components/datetime/vue-datetime-picker.js"),
        },
        mixins: [formDataObjectParser],
        data(){
            return {
                championship: {
                    init_date: null,
                    end_date: null,
                    translation: {
                        name: {},
                        description: {}
                    },
                },
                exceptAthletes: '',
                updating: false
            }
        },
        computed: {
            breadcrumbs(){
                return [
                    {
                        href: '/dashboard',
                        title: 'admin.home'
                    },
                    {
                        href: '/championships',
                        title: 'admin.championships'
                    },
                    {
                        href: '/championships/' + this.championship.id + '/update',
                        title: 'admin.update'
                    }
                ]
            },
            sports() {
                return this.$store.state.common.sports
            },
        },
        locales: championshipLocales,
        created(){
            if (!this.sports.length)
                this.getSports();
            championshipService.show(this.$route.params.id,
                    (response)=> {
                        this.championship = response.data;
                        this.championship.init_date = moment(this.championship.init_date);
                        this.championship.end_date = moment(this.championship.end_date);
                    },
                    (error)=> {
                        console.log(error);
                    })
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
            onBack(evt){
                evt.preventDefault();
                this.$router.push({
                    name: 'championships.list'
                })
            },
            onSubmit(evt){
                evt.preventDefault();
                var self = this
                this.$validator.validateAll().then(()=> {

                    let file = self.$refs.uploader.getFile();
                    var formData = new FormData();

                    if (file)
                        formData.append('poster', self.$refs.uploader.getFile());
                    formData = self.parseObjFormData(self.championship.translation, formData, 'translation');
                    if (self.championship.sport)
                        formData.append('sport_id', self.championship.sport.id);
                    formData.append('init_date', self.championship.init_date.format('DD-MM-YYYY HH:mm:ss'));
                    formData.append('end_date', self.championship.end_date.format('DD-MM-YYYY HH:mm:ss'));

                    championshipService.update(self.championship.id,
                            formData,
                            (response)=> {
                                self.$root.successToast(response.message);
                                self.$router.push({
                                    name: 'championships.list'
                                })
                            },
                            (response)=> {
                                if (response.validation) {
                                    for (var error in response.errors) {
                                        if (response.errors.hasOwnProperty(error)) {
                                            response.errors[error].forEach((validationError)=> {
                                                self.$root.errorToast(validationError)
                                            })
                                        }
                                    }
                                } else {
                                    self.$root.errorToast(response.errors)
                                }
                            });
                }).catch(bag => {
                    this.$root.errorToast(this.$t('admin.validation_error'));
                });
            }
        }
    }
</script>

