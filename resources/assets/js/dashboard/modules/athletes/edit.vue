<template>
    <div>
        <admin-header :title="$t('admin.athletes')" :breadcrumbs="breadcrumbs"></admin-header>
        <section class="content">
            <form class="form" id="athlete-form">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="box">
                            <div class="box-header with-border">
                                <h3 class="box-title">{{$t('admin.athletes')}}</h3>
                            </div><!-- /.box-header -->
                            <div class="box-body">
                                <div class="row">
                                    <div class="col-xs-12 col-md-6">
                                        <div class="form-group"
                                             :class="{'has-error': errors.has('first_name') }">
                                            <label for="first_name" data-vv-error="">{{$t('athletes.first_name')}}
                                            </label>
                                            <div class="input-group">
                                                <div class="input-group-addon">
                                                    <i class="fa fa-user"></i>
                                                </div>
                                                <input id="first_name"
                                                       type="text"
                                                       name="first_name"
                                                       :placeholder="$t('athletes.first_name')"
                                                       v-validate.initial
                                                       data-vv-rules="required"
                                                       :data-vv-as="$t('athletes.first_name')"
                                                       v-model="athlete.first_name"
                                                       class="form-control">
                                            </div>
                                            <span class="text-danger"
                                                  v-show="errors.has('first_name')">{{
                                                errors.first('first_name') }}
                                            </span>
                                        </div>
                                        <div class="form-group"
                                             :class="{'has-error': errors.has('last_name') }">
                                            <label for="last_name" data-vv-error="">{{$t('athletes.last_name')}}
                                            </label>
                                            <div class="input-group">
                                                <div class="input-group-addon">
                                                    <i class="fa fa-user"></i>
                                                </div>
                                                <input id="last_name" type="text"
                                                       name="last_name"
                                                       :placeholder="$t('athletes.last_name')"
                                                       v-model="athlete.last_name"
                                                       v-validate.initial
                                                       data-vv-rules="required"
                                                       :data-vv-as="$t('athletes.last_name')"
                                                       class="form-control">
                                            </div>
                                            <span class="text-danger"
                                                  v-show="errors.has('last_name')">{{
                                                errors.first('last_name') }}
                                            </span>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-md-6 text-center">
                                        <dnc-image-uploader :btn-text="$t('athletes.upload_image')"
                                                            :error-validation-msg="$t('validation.image',{attribute:$t('athletes.upload_image')})"
                                                            :image="athlete.image"
                                                            default-image="/images/missing/athlete/missing.png"
                                                            ref="uploader"></dnc-image-uploader>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-xs-12 col-md-6">
                                        <div class="form-group">
                                            <label for="federation_code" data-vv-error="">
                                                {{$t('athletes.federation_code')}}
                                            </label>
                                            <div class="input-group">
                                                <div class="input-group-addon">
                                                    <i class="fa fa-credit-card"></i>
                                                </div>
                                                <input id="federation_code" name="federation_code" type="text"
                                                       :placeholder="$t('athletes.federation_code')"
                                                       v-model="athlete.federation_code"
                                                       class="form-control">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-md-6">
                                        <div class="form-group">
                                            <label for="national_code" data-vv-error="">
                                                {{$t('athletes.national_code')}}
                                            </label>
                                            <div class="input-group">
                                                <div class="input-group-addon">
                                                    <i class="fa fa-credit-card"></i>
                                                </div>
                                                <input id="national_code" name="national_code" type="text"
                                                       :placeholder="$t('athletes.national_code')"
                                                       v-model="athlete.national_code"
                                                       class="form-control">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-12 col-md-6">
                                        <div class="form-group" :class="{'has-error': errors.has('sport') }">
                                            <label for="sports" data-vv-error="">{{$t('athletes.sport')}}</label>
                                            <v-select :value="athlete.sport" label="name"
                                                      :on-change="sportChanged"
                                                      :placeholder="$t('athletes.select_option')"
                                                      :options="sports"></v-select>
                                            <input id="sport_input" type="hidden"
                                                   v-model="athlete.sport"
                                                   name="sport"
                                                   v-validate.initial
                                                   data-vv-rules="required"
                                                   :data-vv-as="$t('athletes.sport')"
                                                   class="form-control">
                                            <span class="text-danger" v-show="errors.has('sport')">{{
                                                errors.first('sport') }}
                                            </span>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-md-6">
                                        <div class="form-group"
                                             :class="{'has-error': errors.has('specialty') }">
                                            <label for="sports" data-vv-error="">{{$t('athletes.specialty')}}</label>
                                            <v-select :value="athlete.specialty" label="name"
                                                      :placeholder="$t('athletes.select_option')"
                                                      :on-change="specialtyChanged"
                                                      :options="specialties"></v-select>
                                            <input id="specialty_input" type="hidden"
                                                   v-model="athlete.specialty"
                                                   name="specialty"
                                                   v-validate.initial
                                                   data-vv-rules="required"
                                                   :data-vv-as="$t('athletes.specialty')"
                                                   class="form-control">
                                            <span class="text-danger" v-show="errors.has('specialty')">{{
                                                errors.first('specialty') }}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-12 col-md-6">
                                        <div class="form-group"
                                             :class="{'has-error': errors.has('category') }">
                                            <label for="sports" data-vv-error="">{{$t('athletes.category')}}</label>
                                            <v-select :value="athlete.category" label="name"
                                                      :placeholder="$t('athletes.select_option')"
                                                      :on-change="categoryChanged"
                                                      :options="categories"></v-select>
                                            <input id="category_input" type="hidden"
                                                   v-model="athlete.category"
                                                   name="category"
                                                   v-validate.initial
                                                   data-vv-rules="required"
                                                   :data-vv-as="$t('athletes.category')"
                                                   class="form-control">
                                            <span class="text-danger" v-show="errors.has('category')">{{
                                                errors.first('category') }}
                                            </span>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-md-6">
                                        <div class="form-group"
                                             :class="{'has-error': errors.has('country') }">
                                            <label for="sports" data-vv-error="">{{$t('athletes.country')}}</label>
                                            <v-select :value="athlete.country" label="name"
                                                      :on-change="countryChanged"
                                                      :placeholder="$t('athletes.select_option')"
                                                      :options="countries"></v-select>
                                            <input id="country_input" type="hidden"
                                                   v-model="athlete.country"
                                                   name="country"
                                                   v-validate.initial
                                                   data-vv-rules="required"
                                                   :data-vv-as="$t('athletes.country')"
                                                   class="form-control">
                                            <span class="text-danger" v-show="errors.has('country')">{{
                                                errors.first('country') }}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-12">
                                        <div class="form-group"
                                             :class="{'has-error': errors.has('gender') }">
                                            <label for="sports" data-vv-error="">{{$t('athletes.gender')}}</label>
                                            <v-select :value="athlete.gender" label="name"
                                                      :placeholder="$t('athletes.select_option')"
                                                      :on-change="genderChanged"
                                                      :options="genders"></v-select>
                                            <input id="gender_input"
                                                   type="hidden"
                                                   v-model="athlete.gender"
                                                   name="gender"
                                                   v-validate.initial
                                                   data-vv-rules="required"
                                                   :data-vv-as="$t('athletes.gender')"
                                                   class="form-control">
                                            <span class="text-danger" v-show="errors.has('gender')">{{
                                                errors.first('gender') }}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-12 col-md-6">
                                        <div class="form-group">
                                            <label for="height" data-vv-error="">{{$t('athletes.height')}}</label>
                                            <div class="input-group">
                                                <div class="input-group-addon">
                                                    <i class="fa fa-arrows-v"></i>
                                                </div>
                                                <input id="height" name="height" type="text"
                                                       :placeholder="$t('athletes.height')"
                                                       field="height" initial="off" v-model="athlete.height"
                                                       class="form-control">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-md-6">
                                        <div class="form-group">
                                            <label for="weight" data-vv-error="">{{$t('athletes.weight')}}</label>
                                            <div class="input-group">
                                                <div class="input-group-addon">
                                                    <i class="fa fa-tachometer"></i>
                                                </div>
                                                <input id="weight" name="weight" type="text"
                                                       :placeholder="$t('athletes.weight')"
                                                       field="weight" initial="off" v-model="athlete.weight"
                                                       class="form-control">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-12">
                                        <div class="form-group">
                                            <label for="ranking" data-vv-error="">{{$t('athletes.ranking')}}</label>
                                            <div class="input-group">
                                                <div class="input-group-addon">
                                                    <i class="fa fa-signal"></i>
                                                </div>
                                                <input id="ranking" name="ranking" type="text"
                                                       :placeholder="$t('athletes.ranking')"
                                                       field="ranking" initial="off" v-model="athlete.ranking"
                                                       class="form-control">
                                            </div>
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
                            </div><!-- /.box-body -->
                        </div><!-- /.box -->
                    </div>
                </div>
            </form>
        </section>
    </div>
</template>

<script type="text/babel">
    import athleteLocales from 'base/lang/admin/athletes/athletes.js';
    import dncImageUploader from 'base/components/upload/dnc-image-upload.vue';
    import vSelect from "base/components/forms/select/select.vue"
    import adminHeader from 'base/components/header/pageHeader.vue'
    import formDataObjectParser from 'base/mixins/ajax/formDataParser'
    import {mapActions} from 'vuex'
    import athleteService from 'base/dashboard/services/athletes/athleteService'

    export default{
        components: {
            'vSelect': vSelect,
            'adminHeader': adminHeader,
            'dncImageUploader': dncImageUploader
        },
        mixins: [formDataObjectParser],
        data(){
            return {
                selectedRole: null,
                athlete: {},
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
                        href: '/athletes',
                        title: 'admin.athletes'
                    },
                    {
                        href: '/athletes/' + this.athlete.id + '/update',
                        title: 'admin.update'
                    }
                ]
            },
            sports() {
                return this.$store.state.common.sports
            },
            specialties() {
                return this.$store.state.common.specialties
            },
            categories() {
                return this.$store.state.common.categories
            },
            genders() {
                return this.$store.state.common.genders
            },
            countries() {
                return this.$store.state.common.countries
            },
            championships() {
                return this.$store.state.common.championships
            },
            championshipEvents() {
                return this.$store.state.common.events
            }
        },
        locales: athleteLocales,
        created(){
            if (!this.sports.length)
                this.getSports();
            if (!this.categories.length)
                this.getCategories();
            if (!this.countries.length)
                this.getCountries();
            if (!this.championships.length)
                this.getChampionships();
            if (!this.genders.length)
                this.getGenders();
            athleteService.show(this.$route.params.id,
                    (response)=> {
                        this.athlete = response.data;
                        this.getSpecialties(this.athlete.sport.id);
                        if (this.athlete.championship)
                            this.getChampionshipEvents(this.athlete.championship.id);
                    }, (error)=> {
                        console.log(error);
                    })
        },
        methods: {
            ...mapActions({
                getSports: 'common:getSports',
                getCategories: 'common:getCategories',
                getCountries: 'common:getCountries',
                getChampionships: 'common:getChampionships',
                getSpecialties: 'common:getSpecialties',
                setSpecialties: 'common:setSpecialties',
                getChampionshipEvents: 'common:getChampionshipEvents',
                getGenders: 'common:getGenders',
            }),
            close(evt){
                evt.preventDefault();
                eventHub.$on('modal-close');
            },
            sportChanged(sport){
                this.athlete.sport = sport
                var self = this;
                if (this.athlete.sport) {
                    this.getSpecialties(this.athlete.sport.id, (data)=> {
                        if (!data.filter((specialty)=> {
                                    return specialty.id == self.athlete.specialty.id
                                }).length) {
                            self.athlete.specialty = null;
                        }
                    });
                } else {
                    this.setSpecialties([]);
                    this.athlete.specialty = null;
                }

            },
            specialtyChanged(specialty){
                this.athlete.specialty = specialty
            },
            categoryChanged(category){
                this.athlete.category = category
            },
            countryChanged(country){
                this.athlete.country = country
            },
            genderChanged(gender){
                this.athlete.gender = gender
            },
            eventChanged(events){
                this.athlete.events = events
            },
            onBack(evt){
                evt.preventDefault();
                this.$router.push({
                    name: 'athletes.list'
                })
            },
            championshipChanged(championship){
                this.athlete.championship = championship

                var self = this;
                if (this.athlete.championship) {
                    this.getChampionshipEvents(this.athlete.championship.id, (data)=> {
                        if (!data.filter((event)=> {
                                    return event.id == self.athlete.event.id
                                }).length) {
                            self.athlete.event = null;
                        }
                    });
                } else {
                    this.$store.commit('common:SET_SPECIALTIES', []);
                    this.event.specialty = null;
                }
            },
            onSubmit(evt){
                evt.preventDefault();
                var self = this
                evt.preventDefault();
                this.$validator.validateAll().then(() => {
                    let file = self.$refs.uploader.getFile();
                    var formData = new FormData();

                    if (file)
                        formData.append('profile_picture', self.$refs.uploader.getFile());
                    formData.append('first_name', self.athlete.first_name);
                    formData.append('last_name', self.athlete.last_name);
                    if (self.athlete.federation_code)
                        formData.append('federation_code', self.athlete.federation_code);
                    if (self.athlete.national_code)
                        formData.append('national_code', self.athlete.national_code);
                    formData.append('sport_id', self.athlete.sport.id);
                    formData.append('specialty_id', self.athlete.specialty.id);
                    formData.append('category_id', self.athlete.category.id);
                    formData.append('country_id', self.athlete.country.id);
                    formData.append('gender', self.athlete.gender.gender);
                    if (self.athlete.height)
                        formData.append('height', self.athlete.height);
                    if (self.athlete.weight)
                        formData.append('weight', self.athlete.weight);
                    if (self.athlete.ranking)
                        formData.append('ranking', self.athlete.ranking);

                    athleteService.update(self.athlete.id, formData,
                            (response) => {
                                self.$root.successToast(response.message);
                                self.$router.push({
                                    name: 'athletes.list'
                                })
                            },
                            (response) => {
                                if (response.validation) {
                                    for (var error in response.errors) {
                                        if (response.errors.hasOwnProperty(error)) {
                                            response.errors[error].forEach((validationError) => {
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

