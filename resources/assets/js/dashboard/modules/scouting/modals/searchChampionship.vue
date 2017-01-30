<template>
    <div>
        <modal :open="open" :complete-callback="close" size="lg" fixed-footer :dismissible="false">
            <modal-header :title="$t('championships.search_championship')"></modal-header>
            <modal-content>
                <div slot="content">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="responsive-table">
                                <dnc-table ref="table" v-on:data-loaded="dataLoaded" :ajax="ajax"
                                           :columns="columns" :created-row="createdRow"></dnc-table>
                            </div>
                        </div>
                    </div>
                </div>
            </modal-content>
            <modal-footer>
                <a href="#!" class="btn btn-danger" v-on:click.prevent="close">
                    {{$t('forms.close')}}
                </a>
            </modal-footer>
        </modal>
    </div>
</template>
<style>

    .event-country-flag {
        vertical-align: middle;
    }
</style>
<script>
    import dncTable from 'base/components/table/dnc-datatable.vue';
    import championshipLocales from 'base/lang/admin/championships/championships.js';
    import {mapActions} from 'vuex'
    export default{
        components: {
            dncTable,
            'modal': require('base/components/global/modals/modal.vue'),
            'modal-content': require('base/components/global/modals/modal-content.vue'),
            'modal-footer': require('base/components/global/modals/modal-footer.vue'),
            'modal-header': require('base/components/global/modals/modal-header.vue'),
        },
        locales: championshipLocales,
        props: {
            open: {
                type: Boolean,
                required: true
            }
        },
        data(){
            return {
                selectedChampionship: null
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
                return `<div class="action-buttons">
<a class="btn btn-sm btn-success"  v-on:click="$parent.selectChampionship">${this.$t('championships.select')}</a>
</div>`;
            },
            selectChampionship(){
                const selected = JSON.parse(JSON.stringify(this.$refs.table.table.row(event.currentTarget.parentElement.parentElement.parentElement).data()));
                this.$emit('championship-selected', selected);
            },
            close(){
                this.$emit('championship-close');
            },
            createdRow(row, data, dataIndex) {
                var action = $(row).find('.action-buttons');
                new Vue({
                    el: action[0],
                    template: '<div class="action-buttons">' + $(action[0]).html() + '</div>',
                    parent: this
                })
            }
        }
    }
</script>
