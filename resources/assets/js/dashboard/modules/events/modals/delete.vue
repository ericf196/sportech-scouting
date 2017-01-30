<template>
    <div>
        <modal :open="open" :complete-callback="close" fixed-footer :dismissible="false">
            <modal-header :title="$t('events.delete_event')"></modal-header>
            <modal-content>
                <div slot="content">

                    <h3 class="text-center">{{$t('events.delete_message')}}</h3>
                    <h5><strong>{{$t('events.event_info')}}</strong></h5>
                    <table class="table">
                        <thead>
                        <tr>
                            <th>{{$t('events.name')}}</th>
                            <th>{{$t('events.gender')}}</th>
                            <th>{{$t('events.specialty')}}</th>
                            <th>{{$t('events.category')}}</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{{event.name}}</td>
                            <td>{{event.gender ? event.gender.name:''}}</td>
                            <td>
                                {{event.specialty?event.specialty.name:''}}
                            </td>
                            <td> {{event.category?event.category.name:''}}</td>
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
    import eventLocales from 'base/lang/admin/events/events.js';
    import eventService from 'base/dashboard/services/events/eventService'

    export default{
        props: {
            open: {
                type: Boolean,
                required: true
            },
            eventId: {
                required: true
            }
        },
        data(){
            return {
                event: {}
            }
        },
        watch: {
            open: function (value) {
                if (value && this.eventId)
                    eventService.show(this.eventId,
                            (response)=> {
                                this.event = response.data;
                            }, (error)=> {
                            })
            }
        },
        locales: eventLocales,
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
                eventService.remove(this.event.id,
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
