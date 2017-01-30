<template>
    <div>
        <admin-header :title="$t('admin.athletes')" :breadcrumbs="breadcrumbs"></admin-header>
        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <div class="box">
                        <div class="box-header with-border">
                            <h3 class="box-title">{{$t('admin.athletes')}}</h3>
                        </div><!-- /.box-header -->
                        <div class="box-body">
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="table-responsive">
                                        <dnc-table ref="table" v-on:data-loaded="dataLoaded" :ajax="ajax"
                                                   :columns="columns"></dnc-table>
                                    </div>

                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 text-right">
                                    <div class="container-fluid">
                                        <router-link :to="{name:'athletes.create'}" class="btn btn-success">
                                            {{$t('athletes.new')}}
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <delete-athlete-modal :open="removeModalOpen" :athlete-id="selectedAthleteId"
                                  v-on:delete-yes="athleteDeleted" v-on:delete-no="modalDismiss"></delete-athlete-modal>
        </section>
    </div>
</template>
<style>

    .athlete-country-flag {
        vertical-align: middle;
    }
</style>
<script>
    import adminHeader from 'base/components/header/pageHeader.vue'
    import dncTable from 'base/components/table/dnc-datatable.vue';
    import athleteLocales from 'base/lang/admin/athletes/athletes.js';
    import deleteAthleteModal from './modals/delete.vue';

    export default{
        components: {
            adminHeader,
            dncTable,
            deleteAthleteModal
        },
        locales: athleteLocales,
        data(){
            return {
                breadcrumbs: [
                    {
                        href: '/',
                        title: 'admin.home'
                    },
                    {
                        href: '/athletes/list',
                        title: 'admin.athletes'
                    }
                ],
                selectedAthleteId: null,
                removeModalOpen: false
            }
        },
        computed: {
            columns() {
                return [
                    {data: 'id', name: 'athletes.id', title: this.$t('athletes.code')},
                    {data: 'first_name', name: 'first_name', title: this.$t('athletes.first_name')},
                    {data: 'last_name', name: 'last_name', title: this.$t('athletes.last_name')},
                    {
                        data: 'country.name',
                        name: 'country.name',
                        title: this.$t('athletes.country'),
                        render: this.renderCountry
                    },
                    {data: 'sport.name', name: 'sport.name', title: this.$t('athletes.sport')},
                    {data: 'specialty.name', name: 'specialty.name', title: this.$t('athletes.specialty')},
                    {data: 'category.name', name: 'category.name', title: this.$t('athletes.category')},
                    {
                        title: this.$t('athletes.actions'),
                        orderable: false,
                        searchable: false,
                        render: this.renderActions
                    },
                ]
            },
            ajax() {
                return {
                    url: 'api/athletes?include=sport,specialty,category,country&token=' + this.$auth.token()
                }
            }
        },
        methods: {
            dataLoaded(data){

            },
            renderActions(data, type, full, meta){
                return `<div class="action-buttons"><a class="btn  btn-warning"  v-on:click="$parent.goToUpdate(${full.id})"><i class="fa fa-pencil"></i></a>
                        <a class="btn btn-danger" v-on:click="$parent.openRemove(${full.id})"> <i class="fa fa-trash"></i></a>`
            },
            renderCountry(data, type, full, meta){
                if (full.country.name)
                    return `<span><img class="athlete-country-flag" src="${full.country.flag}" alt=""> ${full.country.name} </span>`
            },
            goToUpdate(id){
                this.$router.push({
                    name: 'athletes.update',
                    params: {id: id}
                })
            },
            openRemove(id){
                this.selectedAthleteId = id;
                this.removeModalOpen = true;
            },
            athleteDeleted(){
                this.selectedAthleteId = null;
                this.removeModalOpen = false;
                this.$refs.table.reload();
            },
            modalDismiss(){
                this.selectedAthleteId = null;
                this.removeModalOpen = false;
            }
        }
    }
</script>
