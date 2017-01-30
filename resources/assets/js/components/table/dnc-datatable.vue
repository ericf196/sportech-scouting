<template>
    <div>
        <table :id="tableId" style="width: 100%"
               :class="{'table':true, 'table-striped':stripped, 'table-bordered':bordered}">

        </table>
    </div>
</template>

<script>
    import dt from 'datatables.net';
    import 'datatables.net-bs';
    import "datatables.net-select";
    import Vue from 'vue'
    export default{
        props: {
            ajax: {
                type: Object,
                required: true
            },
            stripped: {
                type: Boolean,
                default: true
            },
            bordered: {
                type: Boolean,
                default: true
            },
            columns: {
                type: Array,
                required: true
            },
            ordering: {
                type: Boolean,
                default: true
            },
            paging: {
                type: Boolean,
                default: true
            },
            info: {
                type: Boolean,
                default: true
            },
            order: {
                type: Array,
                default: function () {
                    return []
                }
            },
            select: {
                type: Boolean,
                default: false
            },
            pageLenght: {
                type: Boolean,
                default: true
            },
            search: {
                type: Boolean,
                default: true
            },
            emptyMessage: {
                type: String,
                default: ''
            },
            parent: {
                type: Object,
            },
            createdRow: {}
        },
        data(){
            return {
                tableId: '',
                table: null
            }
        },
        mounted(){
            $.fn.dataTable.ext.errMode = 'none';
            this.tableId = this.makeid();
            var that = this;

            var config = {
                dom: "<'container-fluid'<'row'<'col-xs-6'l><'col-xs-6'f>>" +
                "<'row'<'col-xs-12'tr>>" +
                "<'row'<'col-xs-5'i><'col-xs-7'p>>>",
                processing: true,
                serverSide: true,
                ajax: this.ajax,
                select: this.select,
                paging: this.paging,
                ordering: this.ordering,
                info: this.info,
                order: this.order,
                columns: this.columns,
                bLengthChange: this.pageLenght,
                bFilter: this.search,
            };

            if (!this.createdRow) {
                config.createdRow = function (row, data, dataIndex) {
                    var action = $(row).find('.action-buttons');
                    new Vue({
                        el: action[0],
                        template: '<div class="action-buttons">' + $(action[0]).html() + '</div>',
                        parent: that.$parent
                    })
                }
            } else {
                config.createdRow = this.createdRow
            }
            let self = this
            this.$nextTick(function () {
                self.table = $('#' + self.tableId).DataTable(config);

                if (self.emptyMessage)
                    self.table.i18n('emptyTable', self.emptyMessage)

                self.table.on('xhr', function (e, settings, json) {
                            self.$emit('data-loaded', json);
                        }
                );
                self.table.on('error', function (e, settings, techNote, message) {
                    var data = settings.jqXHR.responseJSON;
                    if (data.hasOwnProperty('app_error')) {
                        self.$root.errorToast(self.$t('admin.unexpected_error'));
                        console.log(data);
                    } else if (data.hasOwnProperty('error')) {
                        self.$auth.logout({
                            makeRequest: false,
                            success() {
                            },
                            error(err) {
                            }
                        });
                        self.$root.errorToast(self.$t('admin.' + data.error));
                    }
                });
                var select = $('.dataTables_length select');
                select.addClass('browser-default');
            })
        },
        methods: {
            makeid()
            {
                var text = "";
                var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

                for (var i = 0; i < 5; i++)
                    text += possible.charAt(Math.floor(Math.random() * possible.length));

                return text;
            },
            reload(){
                this.table.ajax.reload();
            },
            url(url){
                this.table.ajax.url(url).load();
            }
        }
    }
</script>