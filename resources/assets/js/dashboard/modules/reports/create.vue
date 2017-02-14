<template>
    <div>
        <admin-header :title="$t('admin.reports')" :breadcrumbs="breadcrumbs"></admin-header>
        <section class="content">
            <form class="form" id="reports-form">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="box">
                            <div class="box-header with-border">
                                <h3 class="box-title">{{$t('admin.reports')}}</h3>
                            </div><!-- /.box-header -->
                            <div class="box-body">
                                <div class="row">
                                    <div class="col-xs-12 col-md-6">
                                        <div class="form-group"
                                             :class="{'has-error': errors.has('nameen') }">
                                            <label for="nameen" data-error="">{{$t('reports.name')}}
                                            </label>
                                            <div class="input-group">
                                                <div class="input-group-addon">
                                                    <i
                                                            class="fa fa-user"></i>
                                                </div>
                                                <input id="nameen" name="nameen"
                                                       type="text"
                                                       :placeholder="$t('reports.name')"
                                                       v-model="report.translation.name.en"
                                                       v-validate.initial
                                                       data-vv-rules="required"
                                                       :data-vv-as="$t('reports.name')"
                                                       class="form-control">
                                            </div>
                                            <span class="text-danger"
                                                  v-show="errors.has('nameen')">{{
                                                errors.first('nameen') }}
                                            </span>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-md-6">
                                        <div class="form-group"
                                             :class="{'has-error': errors.has('descriptionen') }">
                                            <label for="descriptionen" data-error="">
                                                {{$t('reports.description')}}
                                            </label>
                                            <div class="input-group">
                                                <div class="input-group-addon">
                                                    <i
                                                            class="fa fa-user"></i>
                                                </div>
                                                <textarea id="descriptionen"
                                                          name="descriptionen"
                                                          type="text"
                                                          :placeholder="$t('reports.description')"
                                                          v-model="report.translation.description.en"
                                                          v-validate.initial
                                                          data-vv-rules="required"
                                                          :data-vv-as="$t('reports.description')"
                                                          class="form-control"></textarea>
                                            </div>
                                            <span class="text-danger"
                                                  v-show="errors.has('descriptionen')">{{
                                                errors.first('translation.description.en') }}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-xs-12">
                                        <h3>{{$t('reports.reports_scoutings')}}</h3>
                                        <table class="table table-striped">
                                            <thead>
                                            <tr>
                                                <th>{{$t('reports.name')}}</th>
                                                <th>{{$t('reports.description')}}</th>
                                                <th>{{$t('reports.action')}}</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr v-for="(scouting,index) in report.scoutings">
                                                <td>{{scouting.name}}</td>
                                                <td>{{scouting.description}}</td>
                                                <td width="100px">
                                                    <a v-on:click="deleteScouting($event,index)"
                                                       class="btn btn-danger">
                                                        <i class="fa fa-trash"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr v-if="!report.scoutings.length">
                                                <td colspan="3" class="center">
                                                    <h4>{{$t('reports.no_scoutings')}}</h4>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-12 text-right">
                                        <a v-on:click="addScoutingModal($event)" class="btn btn-success">
                                            {{$t('reports.add_scouting')}}
                                        </a>
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
            <scoutings-list ref="scoutings" v-on:scouting-added="addScouting"></scoutings-list>
        </section>
    </div>
</template>

<script type="text/babel">
    import reportsLocales from 'base/lang/admin/reports/reports.js';
    import adminHeader from 'base/components/header/pageHeader.vue'
    import reportService from 'base/dashboard/services/reports/reportService'
    import scoutingsList from './modals/scoutingsList.vue';

    export default{
        components: {
            adminHeader,
            scoutingsList
        },
        data(){
            return {
                report: {
                    translation: {
                        name: {
                            es: '',
                            en: ''
                        },
                        description: {
                            es: '',
                            en: ''
                        }
                    },
                    scoutings: []
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
                        href: '/reports',
                        title: 'admin.reports'
                    },
                    {
                        href: '/reports/create',
                        title: 'admin.new'
                    }
                ]
            },
        },
        locales: reportsLocales,
        created(){

        },
        methods: {
            addScoutingModal(evt){
                evt.preventDefault();
                let excepts = '';
                for (var i = 0, len = this.report.scoutings.length; i < len; i++) {
                    var char = this.report.scoutings.length - 1 == i ? '' : ',';
                    excepts += this.report.scoutings[i].id + char
                }
                this.$refs.scoutings.openModal(excepts);
            },
            addScouting(athlete){
                this.report.scoutings.push(athlete);
            },
            deleteScouting(evt, index){
                evt.preventDefault();
                this.report.scoutings.splice(index, 1);
            },
            onBack(evt){
                evt.preventDefault();
                this.$router.push({
                    name: 'reports.list'
                })
            },
            onSubmit(evt){
                evt.preventDefault();
                var self = this;
                if (!this.report.scoutings.length) {
                    self.$root.errorToast(this.$t('reports.no_scoutings'))
                } else {
                    this.$validator.validateAll().then(()=> {
                        let scoutingsIds = _.map(this.report.scoutings, function (scouting) {
                            return scouting.id;
                        });
                        let data = {
                            translation: this.report.translation,
                            scoutings: scoutingsIds
                        };
                        reportService.create(data,
                                (response)=> {
                                    self.$root.successToast(response.message);
                                    self.$router.push({
                                        name: 'reports.list'
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
                                }
                        );
                    }).catch(bag => {
                        this.$root.errorToast(this.$t('admin.validation_error'));
                    });
                }

            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">

</style>
