<template>
    <div>
        <admin-header :title="$t('admin.events')" :breadcrumbs="breadcrumbs"></admin-header>
        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <div class="box">
                        <div class="box-header with-border">
                            <h3 class="box-title">{{$t('admin.events')}}</h3>
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
                                        <router-link :to="{name:'events.create'}" class="btn btn-success">
                                            {{$t('events.new')}}
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <delete-event-modal :open="deleteEventOpen" :event-id="selectedEventId"
                                v-on:delete-yes="eventDeleted" v-on:delete-no="modalDismiss"></delete-event-modal>
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
    import eventLocales from 'base/lang/admin/events/events.js';
    import deleteEventModal from './modals/delete.vue';
    import {mapActions} from 'vuex'
    export default{
        components: {
            adminHeader,
            dncTable,
            deleteEventModal
        },
        locales: eventLocales,
        data(){
            return {
                breadcrumbs: [
                    {
                        href: '/dashboard',
                        title: 'admin.home'
                    },
                    {
                        href: '/events',
                        title: 'admin.events'
                    }
                ],
                deleteEventOpen: false,
                selectedEventId: null
            }
        },
        computed: {
            columns(){
                return [
                    {data: 'name', name: 'name', title: this.$t('events.name')},
                    {data: 'gender.name', name: 'gender', title: this.$t('events.gender')},
                    {data: 'specialty.name', name: 'specialty.name', title: this.$t('events.specialty')},
                    {data: 'category.name', name: 'category.name', title: this.$t('events.category')},
                    {
                        data: 'type.type',
                        name: 'type.type',
                        title: this.$t('events.type'),
                    },
                    {data: 'reach.reach', name: 'reach.reach', title: this.$t('events.reach')},
                    {data: 'init_date', name: 'init_date', title: this.$t('events.init_date')},
                    {data: 'end_date', name: 'end_date', title: this.$t('events.end_date')},
                    {
                        title: this.$t('events.actions'),
                        orderable: false,
                        searchable: false,
                        render: this.renderActions
                    },
                ]
            },
            ajax(){
                return {
                    url: 'api/events?include=championship.sport,specialty,category,type,reach&token=' + this.$auth.token()
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
            renderCountry(data, type, full, meta){
                return `<span><img class="event-country-flag" src="${full.country.flag}" alt=""> ${full.country.name} </span>`
            },
            goToUpdate(id){
                this.$router.push({
                    name: 'events.update',
                    params: {id: id}
                })
            },
            openRemove(id){
                this.selectedEventId = id;
                this.deleteEventOpen = true;
            },
            eventDeleted(){
                this.deleteEventOpen = false;
                this.selectedEventId = null;
                this.$refs.table.reload();
            },
            modalDismiss(){
                this.selectedEventId = null;
                this.deleteEventOpen = false;
            }
        }
    }
</script>
