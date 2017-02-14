<template>
    <div>
        <page-header :title="$t('reports.list')" :breadcrumbs="breadcrumbs"></page-header>
        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <div class="box">
                        <div class="box-header with-border">
                            <h3 class="box-title">{{$t('reports.list')}}</h3>
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
                                        <router-link :to="{name:'reports.create'}" class="btn btn-success">
                                            {{$t('reports.create')}}
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    </div>
</template>

<script>
    import pageHeader from 'base/components/header/pageHeader.vue'
    import dncTable from 'base/components/table/dnc-datatable.vue';
    import reportsLocales from 'base/lang/admin/reports/reports.js';

    export default{
        locales: reportsLocales,
        data(){
            return {}
        },
        computed: {
            breadcrumbs(){
                return [
                    {
                        href: '/dashboard',
                        title: 'Home'
                    },
                    {
                        href: '/reports',
                        title: this.$t('reports.list')
                    }
                ]
            },
            columns(){
                return [
                    {data: 'name', name: 'name', title: 'Name'},
                    {data: 'description', name: 'description', title: 'Description'},
                    {
                        title: 'Actions',
                        orderable: false,
                        searchable: false,
                        render: this.renderActions
                    },
                ]
            },
            ajax() {
                return {
                    url: 'api/reports?token=' + this.$auth.token()
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
                return `<div class="action-buttons"><a class="btn btn-sm btn-success"  v-on:click="$parent.goToView"><i class="fa fa-eye"></i></a>`
            },
            goToView(){
                const selected = JSON.parse(JSON.stringify(this.$refs.table.table.row(event.currentTarget.parentElement.parentElement.parentElement).data()));

                this.$router.push({
                    name: 'reports.view',
                    params: {id: selected.id}
                })
            }
        }
    }
</script>
