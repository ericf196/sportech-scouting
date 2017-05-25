<template>
    <div>
        <admin-header :title="$t('admin.scoutings')" :breadcrumbs="breadcrumbs"></admin-header>
        <section class="content">
            <form class="form" id="scouting-form">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="box">
                            <div class="box-header with-border">
                                <h3 class="box-title">{{$t('scoutings.update_scouting')}}</h3>
                            </div><!-- /.box-header -->
                            <div class="box-body">
                                <div class="row">
                                    <div class="col-xs-12 col-md-6">
                                        <div class="form-group"
                                             :class="{'has-error': errors.has('nameen') }">
                                            <label for="nameen" data-error="">{{$t('scoutings.name')}}
                                            </label>
                                            <div class="input-group">
                                                <div class="input-group-addon">
                                                    <i
                                                            class="fa fa-user"></i>
                                                </div>
                                                <input id="nameen" name="nameen"
                                                       type="text"
                                                       :placeholder="$t('scoutings.name')"
                                                       v-model="scouting.translation.name.en"
                                                       v-validate.initial
                                                       data-vv-rules="required"
                                                       :data-vv-as="$t('scoutings.name')"
                                                       class="form-control">
                                            </div>
                                            <span class="text-danger"
                                                  v-show="errors.has('nameen')">{{
                                                errors.first('scouting.translation.name.en') }}
                                            </span>
                                        </div>
                                        <div class="form-group"
                                             :class="{'has-error': errors.has('video_src') }">
                                            <label for="video_src" data-error="">{{$t('scoutings.video_src')}}
                                            </label>
                                            <div class="input-group">
                                                <div class="input-group-addon">
                                                    <i
                                                            class="fa fa-video-camera"></i>
                                                </div>
                                                <input id="video_src" name="video_src"
                                                       type="text"
                                                       :placeholder="$t('scoutings.video_src')"
                                                       v-model="scouting.video_src"
                                                       v-validate.initial
                                                       data-vv-rules="required"
                                                       :data-vv-as="$t('scoutings.video_src')"
                                                       class="form-control">
                                            </div>
                                            <span class="text-danger"
                                                  v-show="errors.has('video_src')">{{
                                                errors.first('video_src') }}
                                            </span>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-md-6">
                                        <div class="form-group"
                                             :class="{'has-error': errors.has('scouting.translation.description.en') }">
                                            <label for="descriptionen" data-error="">
                                                {{$t('scoutings.description')}}
                                            </label>
                                            <div class="input-group">
                                                <div class="input-group-addon">
                                                    <i
                                                            class="fa fa-list"></i>
                                                </div>
                                                <textarea id="descriptionen"
                                                          rows="4"
                                                          name="descriptionen"
                                                          type="text"
                                                          :placeholder="$t('scoutings.description')"
                                                          v-model="scouting.translation.description.en"
                                                          class="form-control"></textarea>
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
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    </div>
</template>

<style>

</style>
<script>
    import scoutingsLocales from 'base/lang/admin/scoutings/scoutings.js';
    import formDataObjectParser from 'base/mixins/ajax/formDataParser'
    import vSelect from "base/components/forms/select/select.vue"
    import adminHeader from 'base/components/header/pageHeader.vue'
    import scoutingService from 'base/dashboard/services/scoutings/scoutingService'

    export default{
        components: {
            vSelect,
            adminHeader,
        },
        mixins: [formDataObjectParser],
        data(){
            return {
                scouting: {
                    video_src: '',
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
            breadcrumbs(){
                return [
                    {
                        href: '/dashboard',
                        title: 'admin.home'
                    },
                    {
                        href: '/scoutings/list',
                        title: 'admin.scoutings'
                    },
                    {
                        href: '/scoutings/' + this.$route.params.id + '/update',
                        title: 'admin.update'
                    }
                ]
            },
        },
        locales: scoutingsLocales,
        created(){
            scoutingService.show(this.$route.params.id,
                    (response)=> {
                        this.scouting = response.data;
                    },
                    (error)=> {
                        console.log(error);
                    })
        },
        methods: {
            onBack(evt){
                evt.preventDefault();
                this.$router.push({
                    name: 'scoutings.list'
                })
            },
            onSubmit(evt){
                evt.preventDefault();
                var self = this;
                this.$validator.validateAll().then(()=> {

                    this.scouting.translation.name.es = this.scouting.translation.name.en;
                    this.scouting.translation.description.es = this.scouting.translation.description.en;
                    scoutingService.update(this.$route.params.id, this.scouting, (response)=> {
                        self.$root.successToast(response.message);
                        self.$router.push({
                            name: 'scoutings.list'
                        })
                    }, (response)=> {
                        response = response.body;
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
                    })
                }).catch(bag => {
                    this.$root.errorToast(this.$t('admin.validation_error'));
                });
            },
        }

    }
</script>
