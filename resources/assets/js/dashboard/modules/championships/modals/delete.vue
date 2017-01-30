<template>
    <div>
        <modal :open="open" :complete-callback="close" fixed-footer :dismissible="false">
            <modal-header :title="$t('championships.delete_championship')"></modal-header>
            <modal-content>
                <div slot="content">

                    <h3 class="text-center">{{$t('championships.delete_message')}}</h3>
                    <h5><strong>{{$t('championships.championship_info')}}</strong></h5>
                    <table class="table">
                        <thead>
                        <tr>
                            <th>{{$t('championships.name')}}</th>
                            <th>{{$t('championships.sport')}}</th>
                            <th>{{$t('championships.init_date')}}</th>
                            <th>{{$t('championships.end_date')}}</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{{championship.name}}</td>
                            <td>{{championship.sport ? championship.sport.name:''}}</td>
                            <td>
                                {{championship.init_date}}
                            </td>
                            <td> {{championship.end_date}}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </modal-content>
            <modal-footer>
                <button type="submit" href="#!"
                        class="btn btn-danger"
                        @click="onSubmit">
                    {{$t('forms.delete')}}
                </button>
                <a href="#!" class="btn btn-danger" @click="close">
                    {{$t('forms.close')}}
                </a>
            </modal-footer>
        </modal>
    </div>
</template>

<script type="text/babel">
    import championshipLocales from 'base/lang/admin/championships/championships.js';
    import championshipService from 'base/dashboard/services/championships/championshipService'

    export default{
        props: {
            open: {
                type: Boolean,
                required: true
            },
            championshipId: {
                required: true
            }
        },
        data(){
            return {
                championship: {}
            }
        },
        watch: {
            open: function (value) {
                if (value && this.championshipId)
                    championshipService.show(this.championshipId,
                            (response)=> {
                                this.championship = response.data;
                            }, (error)=> {
                            })
            }
        },
        locales: championshipLocales,
        components: {
            'modal': require('base/components/global/modals/modal.vue'),
            'modal-content': require('base/components/global/modals/modal-content.vue'),
            'modal-footer': require('base/components/global/modals/modal-footer.vue'),
            'modal-header': require('base/components/global/modals/modal-header.vue'),
        },
        methods: {
            close(evt)
            {
                evt.preventDefault();
                this.$emit('delete-no');
            },
            onSubmit(evt)
            {
                evt.preventDefault();
                championshipService.remove(this.championship.id,
                        (response)=> {
                            this.$emit('delete-yes');
                            this.$root.successToast(response.message);
                        }, (response)=> {
                            this.$emit('delete-no');
                        });
            }
        }
    }
</script>
