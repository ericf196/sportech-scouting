<!--suppress ALL -->
<template>
    <div>
        <admin-header :title="$t('admin.my_profile')" :breadcrumbs="breadcrumbs"></admin-header>
        <section class="content">
            <form class="form" id="athlete-form">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="box">
                            <div class="box-header with-border">
                                <h3 class="box-title">{{$t('admin.my_profile')}}</h3>
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
                                                       v-model="user.first_name"
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
                                                       v-model="user.last_name"
                                                       v-validate.initial data-vv-rules="required"
                                                       :data-vv-as="$t('athletes.last_name')"
                                                       class="form-control">
                                            </div>
                                            <span class="text-danger"
                                                  v-show="errors.has('last_name')">{{
                                                errors.first('last_name') }}
                                            </span>
                                        </div>
                                        <div class="form-group"
                                             :class="{'has-error': errors.has('email') }">
                                            <label for="email" data-vv-error="">{{$t('athletes.email')}}
                                            </label>
                                            <div class="input-group">
                                                <div class="input-group-addon">
                                                    <i class="fa fa-user"></i>
                                                </div>
                                                <input id="email" type="text"
                                                       name="email"
                                                       :placeholder="$t('athletes.email')"
                                                       v-model="user.email"
                                                       v-validate.initial data-vv-rules="required|email"
                                                       :data-vv-as="$t('athletes.email')"
                                                       class="form-control">
                                            </div>
                                            <span class="text-danger"
                                                  v-show="errors.has('email')">{{
                                                errors.first('email') }}
                                            </span>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-md-6 text-center">
                                        <dnc-image-uploader :btn-text="$t('athletes.upload_image')"
                                                            :error-validation-msg="$t('validation.image',{attribute:$t('athletes.upload_image')})"
                                                            :image="user.image"
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
                                                       v-model="user.athlete.federation_code"
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
                                                       v-model="user.athlete.national_code"
                                                       class="form-control">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-12 col-md-6">
                                        <div class="form-group" :class="{'has-error': errors.has('athletesport') }">
                                            <label for="athletesport" data-vv-error="">{{$t('athletes.sport')}}</label>
                                            <v-select :value="user.athlete.sport" label="name"
                                                      :on-change="sportChanged"
                                                      :placeholder="$t('athletes.select_option')"
                                                      :options="sports"></v-select>
                                            <input id="athletesport" type="hidden"
                                                   v-model="user.athlete.sport"
                                                   name="athletesport"
                                                   v-validate.initial data-vv-rules="required"
                                                   :data-vv-as="$t('athletes.sport')"
                                                   class="form-control">
                                            <span class="text-danger" v-show="errors.has('athletesport')">{{
                                                errors.first('athletesport') }}
                                            </span>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-md-6">
                                        <div class="form-group"
                                             :class="{'has-error': errors.has('specialty') }">
                                            <label for="specialty_input" data-vv-error="">{{$t('athletes.specialty')}}
                                            </label>
                                            <v-select :value="user.athlete.specialty" label="name"
                                                      :placeholder="$t('athletes.select_option')"
                                                      :on-change="specialtyChanged"
                                                      :options="specialties"></v-select>
                                            <input id="specialty_input" type="hidden"
                                                   v-model="user.athlete.specialty"
                                                   name="specialty"
                                                   v-validate.initial data-vv-rules="required"
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
                                            <label for="category_input" data-vv-error="">{{$t('athletes.category')}}
                                            </label>
                                            <v-select :value="user.athlete.category" label="name"
                                                      :placeholder="$t('athletes.select_option')"
                                                      :on-change="categoryChanged"
                                                      :options="categories"></v-select>
                                            <input id="category_input" type="hidden"
                                                   v-model="user.athlete.category"
                                                   name="category"
                                                   v-validate.initial data-vv-rules="required"
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
                                            <label for="country_input" data-vv-error="">{{$t('athletes.country')}}
                                            </label>
                                            <v-select :value="user.athlete.country" label="name"
                                                      :on-change="countryChanged"
                                                      :placeholder="$t('athletes.select_option')"
                                                      :options="countries"></v-select>
                                            <input id="country_input" type="hidden"
                                                   v-model="user.athlete.country"
                                                   name="country"
                                                   v-validate.initial data-vv-rules="required"
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
                                            <label for="gender_input" data-vv-error="">{{$t('athletes.gender')}}</label>
                                            <v-select :value="user.athlete.gender" label="name"
                                                      :placeholder="$t('athletes.select_option')"
                                                      :on-change="genderChanged"
                                                      :options="genders"></v-select>
                                            <input id="gender_input"
                                                   type="hidden"
                                                   v-model="user.athlete.gender"
                                                   name="gender"
                                                   v-validate.initial data-vv-rules="required"
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
                                                       field="height" initial="off"
                                                       v-model="user.athlete.height"
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
                                                       field="weight" initial="off"
                                                       v-model="user.athlete.weight"
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
                                                       field="ranking" initial="off"
                                                       v-model="user.athlete.ranking"
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
    import userService from 'base/dashboard/services/user/userService'

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
                user: {
                    athlete: {
                        sport: null
                    }
                },
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
                        href: '/my-profile',
                        title: 'admin.my_profile'
                    },
                    {
                        href: '/my-profile/update',
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
            userService.show(this.$auth.user().id,
                    (response)=> {
                        response.data.athlete = response.data.athlete ? response.data.athlete : {
                            sport: null,
                            specialty: null,
                            category: null,
                            country: null,
                            gender: null,
                        };
                        this.user = response.data;
                        this.getSpecialties(this.user.athlete.sport.id);
                        if (this.user.athlete.championship)
                            this.getChampionshipEvents(this.user.athlete.championship.id);
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
                this.user.athlete.sport = sport;
                this.user.sport = sport;
                var self = this;
                if (this.user.athlete.sport) {
                    this.getSpecialties(this.user.athlete.sport.id, (data)=> {
                        if (!data.filter((specialty)=> {
                                    return specialty.id == self.user.athlete.specialty.id
                                }).length) {
                            self.user.athlete.specialty = null;
                        }
                    });
                } else {
                    this.setSpecialties([]);
                    this.user.athlete.specialty = null;
                }

            },
            specialtyChanged(specialty){
                this.user.athlete.specialty = specialty
            },
            categoryChanged(category){
                this.user.athlete.category = category
            },
            countryChanged(country){
                this.user.athlete.country = country
            },
            genderChanged(gender){
                this.user.athlete.gender = gender
            },
            eventChanged(events){
                this.user.athlete.events = events
            },
            onBack(evt){
                evt.preventDefault();
                this.$router.push({
                    name: 'user.view'
                })
            },
            championshipChanged(championship){
                this.user.athlete.championship = championship;

                var self = this;
                if (this.user.athlete.championship) {
                    this.getChampionshipEvents(this.user.athlete.championship.id, (data)=> {
                        if (!data.filter((event)=> {
                                    return event.id == self.user.athlete.event.id
                                }).length) {
                            self.user.athlete.event = null;
                        }
                    });
                } else {
                    this.$store.commit('common:SET_SPECIALTIES', []);
                    this.event.specialty = null;
                }
            },
            onSubmit(evt){
                evt.preventDefault();
                var self = this;
                evt.preventDefault();
                this.$validator.validateAll().then(()=> {
                    let file = self.$refs.uploader.getFile();
                    var formData = new FormData();

                    if (file)
                        formData.append('profile_picture', self.$refs.uploader.getFile());
                    formData.append('first_name', self.user.first_name);
                    formData.append('last_name', self.user.last_name);
                    formData.append('email', self.user.email);
                    if (self.user.athlete.federation_code)
                        formData.append('federation_code', self.user.athlete.federation_code);
                    if (self.user.athlete.national_code)
                        formData.append('national_code', self.user.athlete.national_code);
                    formData.append('sport_id', self.user.athlete.sport.id);
                    formData.append('specialty_id', self.user.athlete.specialty.id);
                    formData.append('category_id', self.user.athlete.category.id);
                    formData.append('country_id', self.user.athlete.country.id);
                    formData.append('gender', self.user.athlete.gender.gender);
                    if (self.user.athlete.height)
                        formData.append('height', self.user.athlete.height);
                    if (self.user.athlete.weight)
                        formData.append('weight', self.user.athlete.weight);
                    if (self.user.athlete.ranking)
                        formData.append('ranking', self.user.athlete.ranking);

                    userService.update(self.user.id, formData,
                            (response) => {
                                this.$auth.fetch()
                                self.$root.successToast(response.message);
                                self.$router.push({
                                    name: 'user.view'
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
                }).catch(() => {
                    this.$root.errorToast(this.$t('admin.validation_error'));
                });
            }
        }
    }
</script>

