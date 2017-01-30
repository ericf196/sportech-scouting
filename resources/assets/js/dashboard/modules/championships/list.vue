<template>
    <div>
        <admin-header :title="$t('admin.championships')" :breadcrumbs="breadcrumbs"></admin-header>
        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <div class="box">
                        <div class="box-header with-border">
                            <h3 class="box-title">{{$t('admin.championships')}}</h3>
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
                                        <router-link :to="{name:'championships.create'}" class="btn btn-success">
                                            {{$t('championships.new')}}
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <delete-championship-modal :open="deleteChampionshipOpen" :championship-id="selectedChampionshipId"
                                       v-on:delete-yes="championshipDeleted"
                                       v-on:delete-no="modalDismiss"></delete-championship-modal>
    </div>
</template>
<style>

    .event-country-flag {
        vertical-align: middle;
    }
</style>
<script>
    import adminHeader from 'base/components/header/pageHeader.vue'
    import dncTable from 'base/components/table/dnc-datatable.vue';
    import championshipLocales from 'base/lang/admin/championships/championships.js';
    import deleteChampionshipModal from './modals/delete.vue';
    import {mapActions} from 'vuex'
    export default{
        components: {
            adminHeader,
            dncTable,
            deleteChampionshipModal
        },
        locales: championshipLocales,
        data(){
            return {
                breadcrumbs: [
                    {
                        href: '/',
                        title: 'admin.home'
                    },
                    {
                        href: 'championships',
                        title: 'admin.championships'
                    }
                ],
                deleteChampionshipOpen: false,
                selectedChampionshipId: null
            }
        },
        computed: {
            columns(){
                return [
                    {data: 'name', name: 'name', title: this.$t('championships.name')},
                    {data: 'sport.name', name: 'sport.name', title: this.$t('championships.sport')},
                    {data: 'init_date', name: 'init_date', title: this.$t('championships.init_date')},
                    {data: 'end_date', name: 'end_date', title: this.$t('championships.end_date')},
                    {
                        title: this.$t('championships.actions'),
                        orderable: false,
                        searchable: false,
                        render: this.renderActions
                    },
                ]
            },
            ajax(){
                return {
                    url: 'api/championships/datatable?include=sport&token=' + this.$auth.token()
                }
            },
        },
        methods: {
            dataLoaded(data){

            },
            renderActions(data, type, full, meta){
                const blockedClass = !full.blocked ? "red" : "green"
                return `<div class="action-buttons"><a class="btn btn-sm btn-warning"  v-on:click="$parent.goToUpdate(${full.id})"><i class="fa fa-pencil"></i></a>
                        <a class="btn btn-danger btn-sm" v-on:click="$parent.openRemove(${full.id})"> <i class="fa fa-trash"></i></a>`
            },
            goToUpdate(id){
                this.$router.push({
                    name: 'championships.update',
                    params: {id: id}
                })
            },
            openRemove(id){
                this.selectedChampionshipId = id;
                this.deleteChampionshipOpen = true;
            },
            championshipDeleted(){
                this.deleteChampionshipOpen = false;
                this.selectedChampionshipId = null;
                this.$refs.table.reload();
            },
            modalDismiss(){
                this.selectedChampionshipId = null;
                this.deleteChampionshipOpen = false;
            }
        }
    }
</script>
