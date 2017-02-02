<template>
    <div>
        <page-header title="Scoutings List" :breadcrumbs="breadcrumbs"></page-header>
        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <div class="box">
                        <div class="box-header with-border">
                            <h3 class="box-title">Scoutings</h3>
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
                                            Create Scouting
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
    import scoutingsLocales from 'base/lang/admin/scoutings/scoutings.js';

    export default{
        locales: scoutingsLocales,
        data(){
            return {
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
                        render: this.renderActions
                    },
                ]
            },
            ajax() {
                return {
                    url: 'api/scoutings?token=' + this.$auth.token()
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
                return `<div class="action-buttons"><a class="btn btn-sm btn-warning"  v-on:click="$parent.goToUpdate"><i class="fa fa-pencil"></i></a>
<a class="btn btn-sm btn-primary"  v-on:click="$parent.goToScouting">${make}</a></div>`
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
            }
        }
    }
</script>
