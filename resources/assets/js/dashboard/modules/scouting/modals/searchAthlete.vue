<template>
    <div>
        <modal :open="open" :complete-callback="close" size="lg" fixed-footer :dismissible="false">
            <modal-header :title="$t('athletes.search_athlete')"></modal-header>
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
    import athleteLocales from 'base/lang/admin/athletes/athletes.js';
    import {mapActions} from 'vuex'
    export default{
        components: {
            dncTable,
            'modal': require('base/components/global/modals/modal.vue'),
            'modal-content': require('base/components/global/modals/modal-content.vue'),
            'modal-footer': require('base/components/global/modals/modal-footer.vue'),
            'modal-header': require('base/components/global/modals/modal-header.vue'),
        },
        locales: athleteLocales,
        props: {
            open: {
                type: Boolean,
                required: true
            },
            except: {},
            type: {
                type: String,
                required: true
            }
        },
        watch: {
            except: function (val) {
                if (val) {
                    this.$refs.table.url('api/athletes?except=' + val + '&include=sport,specialty,category,country&datatable=true&token=' + this.$auth.token());
                } else {
                    this.$refs.table.url('api/athletes?include=sport,specialty,category,country&datatable=true&token=' + this.$auth.token());
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
                    {data: 'first_name', name: 'first_name', title: this.$t('athletes.first_name')},
                    {data: 'last_name', name: 'last_name', title: this.$t('athletes.last_name')},
                    {
                        data: 'country.name',
                        name: 'country.name',
                        title: this.$t('athletes.country'),
                        render: this.renderCountry
                    },
                    {
                        title: this.$t('athletes.actions'),
                        orderable: false,
                        searchable: false,
                        render: this.renderActions
                    },
                ]
            },
            ajax(){
                return {
                    url: 'api/athletes?include=sport,specialty,category,country&token=' + this.$auth.token()
                }
            },
        },
        methods: {
            dataLoaded(data){

            },
            renderActions(data, type, full, meta){
                return `<div class="action-buttons">
<a class="btn btn-sm btn-success"  v-on:click="$parent.selectAthlete">${this.$t('athletes.select')}</a>
</div>`;
            },
            selectAthlete(){
                const selected = JSON.parse(JSON.stringify(this.$refs.table.table.row(event.currentTarget.parentElement.parentElement.parentElement).data()));
                this.$emit(this.type + '-athlete-selected', selected);
            },
            close(){
                this.$emit('athlete-close');
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
