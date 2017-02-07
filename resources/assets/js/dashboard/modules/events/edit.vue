<template>
    <div>
        <admin-header :title="$t('admin.events')" :breadcrumbs="breadcrumbs"></admin-header>
        <section class="content">
            <form class="form" id="event-form">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="box">
                            <div class="box-header with-border">
                                <h3 class="box-title">{{$t('admin.events')}}</h3>
                            </div><!-- /.box-header -->
                            <div class="box-body">
                                <div class="row">
                                    <div class="col-xs-12 col-md-6">
                                        <div class="form-group"
                                             :class="{'has-error': errors.has('event.translation.name.en') }">
                                            <label for="nameen" data-error="">{{$t('events.name')}}
                                            </label>
                                            <div class="input-group">
                                                <div class="input-group-addon">
                                                    <i
                                                            class="fa fa-user"></i>
                                                </div>
                                                <input id="nameen" name="event.translation.name.en"
                                                       type="text"
                                                       :placeholder="$t('events.name')"
                                                       v-model="event.translation.name.en"
                                                       v-validate.initial
                                                       data-vv-rules="required"
                                                       :data-vv-as="$t('events.name')"
                                                       class="form-control">
                                            </div>
                                            <span class="text-danger"
                                                  v-show="errors.has('event.translation.name.en')">{{
                                                errors.first('event.translation.name.en') }}
                                            </span>
                                        </div>
                                        <div class="form-group"
                                             :class="{'has-error': errors.has('event.translation.description.en') }">
                                            <label for="descriptionen" data-error="">
                                                {{$t('events.description')}}
                                            </label>
                                            <div class="input-group">
                                                <div class="input-group-addon">
                                                    <i
                                                            class="fa fa-user"></i>
                                                </div>
                                                <textarea id="descriptionen"
                                                          name="event.translation.description.en"
                                                          type="text"
                                                          :placeholder="$t('events.description')"
                                                          v-model="event.translation.description.en"
                                                          v-validate.initial
                                                          data-vv-rules="required"
                                                          :data-vv-as="$t('events.description')"
                                                          class="form-control"></textarea>
                                            </div>
                                            <span class="text-danger"
                                                  v-show="errors.has('event.translation.description.en')">{{
                                                errors.first('event.translation.description.en') }}
                                            </span>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-md-6 text-center">
                                        <dnc-image-uploader :btn-text="$t('events.upload_image')"
                                                            :error-validation-msg="$t('validation.image',{attribute:$t('events.upload_image')})"
                                                            :image="event.image"
                                                            default-image="/images/missing/event/missing.png"
                                                            ref="uploader"></dnc-image-uploader>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-xs-12 col-md-6">
                                        <div class="form-group"
                                             :class="{'has-error': errors.has('event.championship') }">
                                            <label for="sports" data-error="">{{$t('events.championship')}}</label>
                                            <v-select :value="event.championship" label="name"
                                                      :on-change="championshipChanged"
                                                      :placeholder="$t('events.select_option')"
                                                      :options="championships"></v-select>
                                            <input id="championship_input"
                                                   type="hidden"
                                                   name="event.championship"
                                                   v-model="event.championship"
                                                   v-validate.initial
                                                   data-vv-rules="required"
                                                   :data-vv-as="$t('events.championship')"
                                                   class="form-control">
                                            <span class="text-danger"
                                                  v-show="errors.has('event.championship')">{{
                                                errors.first('event.championship') }}
                                            </span>
                                        </div>
                                    </div>
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
                                                   v-validate.initial
                                                   data-vv-rules="required"
                                                   :data-vv-as="$t('events.specialty')"
                                                   class="form-control">
                                            <span class="text-danger"
                                                  v-show="errors.has('event.specialty')">{{
                                                errors.first('event.specialty') }}
                                            </span>


                                        </div>
                                    </div>
                                </div>

                                <div class="row">
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
                                                   v-validate.initial
                                                   data-vv-rules="required"
                                                   :data-vv-as="$t('events.category')"
                                                   class="form-control">
                                            <span class="text-danger"
                                                  v-show="errors.has('event.category')">{{
                                                errors.first('event.category') }}
                                            </span>

                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-md-6">
                                        <div class="form-group"
                                             :class="{'has-error': errors.has('event.gender') }">
                                            <label for="sports" data-error="">{{$t('events.gender')}}</label>
                                            <v-select :value="event.gender" label="name"
                                                      :on-change="genderChanged"
                                                      :placeholder="$t('events.select_option')"
                                                      :options="genders"></v-select>
                                            <input id="gender_input" type="hidden"
                                                   name="event.gender"
                                                   field="gender_input" initial="off" v-model="event.gender"
                                                   v-validate.initial
                                                   data-vv-rules="required"
                                                   :data-vv-as="$t('events.gender')"
                                                   class="form-control">
                                            <span class="text-danger"
                                                  v-show="errors.has('event.gender')">{{ errors.first('event.gender') }}
                                            </span>

                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-12 col-md-6">
                                        <div class="form-group"
                                             :class="{'has-error': errors.has('event.type') }">
                                            <label for="sports" data-error="">{{$t('events.type')}}</label>
                                            <v-select :value="event.type" label="type"
                                                      :on-change="typeChanged"
                                                      :placeholder="$t('events.select_option')"
                                                      :options="types"></v-select>
                                            <input id="type_input" type="hidden"
                                                   v-model="event.type"
                                                   name="event.type"
                                                   v-validate.initial
                                                   data-vv-rules="required"
                                                   :data-vv-as="$t('events.type')"
                                                   class="form-control">
                                            <span class="text-danger"
                                                  v-show="errors.has('event.type')">{{ errors.first('event.type') }}
                                            </span>

                                        </div>

                                    </div>
                                    <div class="col-xs-12 col-md-6">
                                        <div class="form-group"
                                             :class="{'has-error': errors.has('event.reach') }">
                                            <label for="reaches" data-error="">{{$t('events.reach')}}</label>
                                            <v-select :value="event.reach" label="reach"
                                                      :on-change="reachChanged"
                                                      :placeholder="$t('events.select_option')"
                                                      :options="reaches"></v-select>
                                            <input id="reach_input"
                                                   type="hidden"
                                                   name="event.reach"
                                                   v-model="event.reach"
                                                   v-validate.initial
                                                   data-vv-rules="required"
                                                   :data-vv-as="$t('events.reach')"
                                                   class="form-control">
                                            <span class="text-danger"
                                                  v-show="errors.has('event.reach')">{{ errors.first('event.reach') }}
                                            </span>


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
                                                   v-validate.initial
                                                   data-vv-rules="required"
                                                   :data-vv-as="$t('events.init_date')"
                                                   class="form-control">
                                            <span class="text-danger"
                                                  v-show="errors.has('event.init_date')">{{
                                                errors.first('event.init_date') }}
                                            </span>

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
                                                   v-validate.initial
                                                   data-vv-rules="required"
                                                   :data-vv-as="$t('events.end_date')"
                                                   class="form-control">
                                            <span class="text-danger"
                                                  v-show="errors.has('event.end_date')">{{
                                                errors.first('event.end_date') }}
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
    import eventLocales from 'base/lang/admin/events/events.js';
    import formDataObjectParser from 'base/mixins/ajax/formDataParser'
    import {mapActions} from 'vuex'
    import dncImageUploader from 'base/components/upload/dnc-image-upload.vue';
    import vSelect from "base/components/forms/select/select.vue"
    import adminHeader from 'base/components/header/pageHeader.vue'
    import eventService from 'base/dashboard/services/events/eventService'

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
                event: {
                    init_date: null,
                    end_date: null,
                    translation: {
                        name: {},
                        description: {}
                    },
                    athletes: [],
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
                        href: '/events',
                        title: 'admin.events'
                    },
                    {
                        href: '/events/' + this.event.id + '/update',
                        title: 'admin.update'
                    }
                ]
            },
            specialties() {
                return this.$store.state.common.specialties
            },
            categories() {
                return this.$store.state.common.categories
            },
            types() {
                return this.$store.state.common.types
            },
            reaches() {
                return this.$store.state.common.reaches
            },
            championships() {
                return this.$store.state.common.championships
            },
            genders() {
                return this.$store.state.common.genders
            }
        },
        locales: eventLocales,
        created(){
            if (!this.categories.length)
                this.getCategories();

            if (!this.championships.length)
                this.getChampionships();

            if (!this.types.length)
                this.getTypes();

            if (!this.reaches.length)
                this.getReaches();

            if (!this.genders.length)
                this.getGenders();
            eventService.show(this.$route.params.id,
                    (response)=> {
                        this.event = response.data;
                        this.event.init_date = moment(this.event.init_date);
                        this.event.end_date = moment(this.event.end_date);
                        this.getSpecialties(this.event.championship.sport.id);
                    },
                    (error)=> {
                        console.log(error);
                    })
        },
        methods: {
            ...mapActions({
                getSports: 'common:getSports',
                getCategories: 'common:getCategories',
                getChampionships: 'common:getChampionships',
                getSpecialties: 'common:getSpecialties',
                getGenders: 'common:getGenders',
                getTypes: 'common:getTypes',
                getReaches: 'common:getReaches',
            }),
            championshipChanged(){
                var self = this;
                if (this.event.championship) {
                    this.getSpecialties(this.event.championship.sport.id, (data)=> {
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

            },
            specialtyChanged(specialty){
                this.event.specialty = specialty
            },
            categoryChanged(category){
                this.event.category = category
            },
            reachChanged(reach){
                this.event.reach = reach
            },
            typeChanged(type){
                this.event.type = type
            },
            genderChanged(gender){
                this.event.gender = gender
            },
            endDateChanged(date){
                this.event.end_date = date;
            },
            initDateChanged(date){
                this.event.init_date = date;
            },
            onBack(evt){
                evt.preventDefault();
                this.$router.push({
                    name: 'events.list'
                })
            },
            onSubmit(evt){
                evt.preventDefault();
                var self = this;
                this.$validator.validateAll().then(()=> {

                    let file = self.$refs.uploader.getFile();
                    var formData = new FormData();

                    if (file)
                        formData.append('poster', self.$refs.uploader.getFile());
                    formData = self.parseObjFormData(self.event.translation, formData, 'translation');
                    if (self.event.championship)
                        formData.append('championship_id', self.event.championship.id);
                    if (self.event.specialty)
                        formData.append('specialty_id', self.event.specialty.id);
                    if (self.event.category)
                        formData.append('category_id', self.event.category.id);
                    if (self.event.gender.hasOwnProperty('gender')) {
                        formData.append('gender', self.event.gender.gender);
                    } else {
                        formData.append('gender', self.event.gender.substr(0, 1).toLowerCase());
                    }
                    if (self.event.type)
                        formData.append('event_type_id', self.event.type.id);
                    if (self.event.reach)
                        formData.append('event_reach_id', self.event.reach.id);
                    formData = self.parseObjFormData(self.event.athletes, formData, 'athletes');

                    formData.append('init_date', self.event.init_date.format('DD-MM-YYYY HH:mm:ss'));
                    formData.append('end_date', self.event.end_date.format('DD-MM-YYYY HH:mm:ss'));

                    eventService.update(self.event.id,
                            formData,
                            (response)=> {
                                self.$root.successToast(response.message);
                                self.$router.push({
                                    name: 'events.list'
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

