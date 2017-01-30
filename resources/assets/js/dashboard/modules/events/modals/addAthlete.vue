<template>
    <div>
        <modal :open="open" :complete-callback="close" fixed-footer :dismissible="false">
            <modal-header :title="$t('athletes.athletes')"></modal-header>

            <modal-content>
                <div slot="content">
                    <div class="row">
                        <div class="col-xs-12">
                            <dnc-table ref="table" v-on:data-loaded="dataLoaded" :ajax="ajax"
                                       :columns="columns"></dnc-table>
                        </div>
                    </div>
                </div>
            </modal-content>
            <modal-footer>
                <a href="#!" class="btn btn-danger" @click="close">
                    {{$t('forms.close')}}
                </a>
            </modal-footer>
        </modal>
    </div>
</template>

<script type="text/babel">
    import clubLocales from 'base/lang/admin/clubs/clubs.js';
    import athleteLocales from 'base/lang/admin/athletes/athletes.js';
    import dncTable from 'base/components/table/dnc-datatable.vue';
    import {mapActions} from 'vuex'
    export default{
        props: {
            open: {
                type: Boolean,
                required: true
            },
            except: {},
        },
        data(){
            return {
                columns: [
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
                ],
                ajax: {
                    url: 'api/athletes?include=sport,specialty,category,country&token=' + this.$auth.token()
                }

            }
        },
        watch: {
            except: function (val) {
                this.ajax = {
                    url: 'api/athletes?except=' + val + '&include=sport,specialty,category,country&token=' + this.$auth.token()
                };
                this.$refs.table.url('api/athletes?except=' + val + '&include=sport,specialty,category,country&token=' + this.$auth.token());
            }
        },
        locales: athleteLocales,
        components: {
            'modal': require('base/components/global/modals/modal.vue'),
            'modal-content': require('base/components/global/modals/modal-content.vue'),
            'modal-footer': require('base/components/global/modals/modal-footer.vue'),
            'modal-header': require('base/components/global/modals/modal-header.vue'),
            dncTable
        },
        methods: {
            close(evt){
                evt.preventDefault();
                this.$emit('add-no');
            },
            dataLoaded(data){

            },
            renderActions(data, type, full, meta){
                return `<div class="action-buttons"><a class="btn btn-success btn-sm"  v-on:click="$parent.$parent.$parent.add">Seleccionar</a>`
            },
            renderCountry(data, type, full, meta){
                return `<span><img class="athlete-country-flag" src="${full.country.flag}" alt=""> ${full.country.name} </span>`
            },
            add(){
                this.$emit('add-yes', JSON.parse(JSON.stringify(this.$refs.table.table.row(event.currentTarget.parentElement.parentElement.parentElement).data())));
            },
        }
    }
</script>
