<template>
    <div>
        <page-header :title="$t('scoutings.list')" :breadcrumbs="breadcrumbs"></page-header>
        <section class="content overlay-wrapper">
            <div class="row">
                <div class="col-xs-12">
                    <div class="box">
                        <div class="box-header with-border">
                            <h3 class="box-title">{{$t('scoutings.scoutings')}}</h3>
                        </div><!-- /.box-header -->
                        <div class="box-body">
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="responsive-table">
                                        <dnc-table ref="table" v-on:data-loaded="dataLoaded" :ajax="ajax"
                                                   :columns="columns"></dnc-table>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 text-right">
                                    <div class="container-fluid">
                                        <router-link :to="{name:'scoutings.create'}" class="btn btn-success">
                                            {{$t('scoutings.create')}}
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="box">
                        <div class="box-header with-border">
                            <h3 class="box-title">{{$t('scoutings.results')}}</h3>
                        </div><!-- /.box-header -->
                        <div class="box-body">
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="responsive-table">
                                        <dnc-table ref="table-results" v-on:data-loaded="dataLoaded" :ajax="ajaxResults"
                                                   :columns="columns"></dnc-table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="box">
                        <div class="box-header with-border">
                            <h3 class="box-title">{{$t('scoutings.app_mobile')}}</h3>
                        </div><!-- /.box-header -->
                        <div class="box-body">
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="responsive-table">
                                        <dnc-table ref="table-app" v-on:data-loaded="dataLoaded" :ajax="ajaxApp"
                                                   :columns="columns"></dnc-table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="box">
                        <div class="box-header with-border">
                            <h3 class="box-title">{{$t('scoutings.other_sources')}}</h3>
                        </div><!-- /.box-header -->
                        <div class="box-body">
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="responsive-table">
                                        <dnc-table ref="table-other" v-on:data-loaded="dataLoaded" :ajax="ajaxOther"
                                                   :columns="columns"></dnc-table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="overlay" v-if="loading">
                <i class="fa fa-refresh fa-spin"></i>
                {{$t('scoutings.making_report')}}
            </div>
        </section>
    </div>
</template>

<script>
    import pageHeader from 'base/components/header/pageHeader.vue'
    import dncTable from 'base/components/table/dnc-datatable.vue';
    import scoutingsLocales from 'base/lang/admin/scoutings/scoutings.js';
    import scoutingService from 'base/dashboard/services/scoutings/scoutingService'

    export default{
        locales: scoutingsLocales,
        data(){
            return {
                loading: false,
                breadcrumbs: [
                    {
                        href: '/dashboard',
                        title: 'Home'
                    },
                    {
                        href: '/scoutings/list',
                        title: 'Scoutings'
                    }
                ],
            }
        },
        computed: {
            columns(){
                return [
                    {data: 'name', name: 'name', title: 'Name'},
                    {data: 'description', name: 'description', title: 'Description'},
                    {data: 'videoSrc', name: 'video_src', title: 'Video Source'},
                    {
                        title: 'Actions',
                        orderable: false,
                        searchable: false,
                        width: '230px',
                        render: this.renderActions
                    },
                ]
            },
            ajax() {
                return {
                    url: 'api/scoutings?token=' + this.$auth.token()
                }
            },
            ajaxResults() {
                return {
                    url: 'api/scoutings/results?token=' + this.$auth.token()
                }
            },
            ajaxApp() {
                return {
                    url: 'api/scoutings/app?token=' + this.$auth.token()
                }
            },
            ajaxOther() {
                return {
                    url: 'api/scoutings/other-sources?token=' + this.$auth.token()
                }
            },
        },
        components: {
            pageHeader,
            dncTable
        },
        methods: {
            dataLoaded(data){
                console.log(data);
            },
            renderActions(data, type, full, meta)
            {
                var make = this.$t('scoutings.make');
                var report = this.$t('scoutings.report');
                return `<div class="action-buttons"><a class="btn btn-sm btn-warning"  v-on:click="$parent.goToUpdate"><i class="fa fa-pencil"></i></a>
<a class="btn btn-sm btn-primary"  v-on:click="$parent.goToScouting">${make}</a>
<a class="btn btn-sm btn-success"  v-on:click="$parent.goToReport">${report}</a></div>`
            },
            goToUpdate(){
                const selected = JSON.parse(JSON.stringify(this.$refs.table.table.row(event.currentTarget.parentElement.parentElement.parentElement).data()));

                this.$router.push({
                    name: 'scoutings.update',
                    params: {id: selected.id}
                })
            },
            goToScouting(){
                const selected = JSON.parse(JSON.stringify(this.$refs.table.table.row(event.currentTarget.parentElement.parentElement.parentElement).data()));
                this.$router.push({
                    name: 'scoutings.touch',
                    params: {id: selected.id}
                })
            },
            goToReport(){
                if (this.$auth.user().superUser) {
                    this.loading = true;
                    const selected = JSON.parse(JSON.stringify(this.$refs.table.table.row(event.currentTarget.parentElement.parentElement.parentElement).data()));
                    scoutingService.report(selected.id, (response)=> {
                        this.loading = false;
                        this.$router.push({
                            name: 'reports.view',
                            params: {id: response.data.id}
                        })
                    }, (response)=> {
                        this.loading = false;
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
                } else {
                    this.$root.errorToast('No tienes permiso para ver el informe');
                }
            }
        }
    }

</script>
