<template>
    <div>
        <modal :open="open" :complete-callback="close" fixed-footer :dismissible="false">
            <modal-header :title="$t('scoutings.select')"></modal-header>
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
    import scoutingsLocales from 'base/lang/admin/scoutings/scoutings.js';
    import dncTable from 'base/components/table/dnc-datatable.vue';

    export default{
        data() {
            return {
                open: false,
                excepts: ''
            }
        },
        locales: scoutingsLocales,
        components: {
            'modal': require('base/components/global/modals/modal.vue'),
            'modal-content': require('base/components/global/modals/modal-content.vue'),
            'modal-footer': require('base/components/global/modals/modal-footer.vue'),
            'modal-header': require('base/components/global/modals/modal-header.vue'),
            dncTable
        },
        computed: {
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
                    url: 'api/scoutings?token=' + this.$auth.token()
                }
            },
        },
        methods: {
            openModal(excepts){
                this.open = true;
                this.excepts = excepts;
                this.$refs.table.url('api/scoutings?except=' + excepts + '&token=' + this.$auth.token());
            },
            close(evt)
            {
                evt.preventDefault();
                this.open = false;
            },
            dataLoaded(data){
                console.log(data);
            },
            renderActions(data, type, full, meta)
            {
                var make = this.$t('scoutings.make');
                return `<div class="action-buttons"><a class="btn btn-sm btn-warning"  v-on:click="$parent.$parent.$parent.select"><i class="fa fa-plus"></i></a></div>`
            },
            select(){
                const selected = JSON.parse(JSON.stringify(this.$refs.table.table.row(event.currentTarget.parentElement.parentElement.parentElement).data()));
                this.$emit('scouting-added', selected);
                this.excepts += this.excepts == '' ? selected.id : ',' + selected.id;
                this.$refs.table.url('api/scoutings?except=' + this.excepts + '&token=' + this.$auth.token());
                this.$refs.table.reload();
                this.$root.successToast(this.$t('reports.scouting_added'));
            },
        }
    }
</script>
