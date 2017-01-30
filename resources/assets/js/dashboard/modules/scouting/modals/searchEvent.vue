<template>
    <div>
        <modal :open="open" :complete-callback="close" size="lg" fixed-footer :dismissible="false">
            <modal-header :title="$t('events.search_event')"></modal-header>
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

<script>
    import dncTable from 'base/components/table/dnc-datatable.vue';
    import eventLocales from 'base/lang/admin/events/events.js';
    import {mapActions} from 'vuex'
    export default{
        components: {
            dncTable,
            'modal': require('base/components/global/modals/modal.vue'),
            'modal-content': require('base/components/global/modals/modal-content.vue'),
            'modal-footer': require('base/components/global/modals/modal-footer.vue'),
            'modal-header': require('base/components/global/modals/modal-header.vue'),
        },
        locales: eventLocales,
        props: {
            open: {
                type: Boolean,
                required: true
            },
            championshipId: {}
        },
        watch: {
            championshipId: function (val) {
                if (val) {
                    this.$refs.table.url('api/championships/' + val + '/events?include=type,specialty,category,reach&datatable=true&token=' + this.$auth.token());
                }
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
                    {data: 'name', name: 'name', title: this.$t('events.name')},
                    {data: 'specialty.name', name: 'specialty.name', title: this.$t('events.specialty')},
                    {data: 'category.name', name: 'category.name', title: this.$t('events.category')},
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
                    url: 'api/championships/' + this.championshipId + '/events?include=type,specialty,category,reach&datatable=true&token=' + this.$auth.token()
                }
            },
        },
        methods: {
            dataLoaded(data){

            },
            renderActions(data, type, full, meta){
                return `<div class="action-buttons">
<a class="btn btn-sm btn-success"  v-on:click="$parent.selectEvent">${this.$t('events.select')}</a>
</div>`;
            },
            selectEvent(){
                const selected = JSON.parse(JSON.stringify(this.$refs.table.table.row(event.currentTarget.parentElement.parentElement.parentElement).data()));
                this.$emit('event-selected', selected);
            },
            close(){
                this.$emit('event-close');
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
