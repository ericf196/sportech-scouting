<template>
    <div>
        <modal :open="open" :complete-callback="close" fixed-footer :dismissible="false">
            <modal-header :title="$t('athletes.delete_athlete')"></modal-header>

            <modal-content>
                <div slot="content">
                    <h3 class="text-center">{{$t('athletes.delete_message')}}</h3>
                    <h5><strong>{{$t('athletes.athlete_info')}}</strong></h5>
                    <table class="table">
                        <thead>
                        <tr>
                            <th>{{$t('athletes.first_name')}}</th>
                            <th>{{$t('athletes.last_name')}}</th>
                            <th>{{$t('athletes.country')}}</th>
                            <th>{{$t('athletes.sport')}}</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{{athlete.first_name}}</td>
                            <td>{{athlete.last_name}}</td>
                            <td>
                                <img class="athlete-country-flag" :src="athlete.country?athlete.country.flag:''" alt="">
                                {{athlete.country?athlete.country.name:''}}
                            </td>
                            <td> {{athlete.sport?athlete.sport.name:''}}</td>
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
    import athleteLocales from 'base/lang/admin/athletes/athletes.js';
    import athleteService from 'base/dashboard/services/athletes/athleteService'

    export default{
        props: {
            open: {
                type: Boolean,
                required: true
            },
            athleteId: {
                required: true
            }
        },
        locales: athleteLocales,
        components: {
            'modal': require('base/components/global/modals/modal.vue'),
            'modal-content': require('base/components/global/modals/modal-content.vue'),
            'modal-footer': require('base/components/global/modals/modal-footer.vue'),
            'modal-header': require('base/components/global/modals/modal-header.vue'),
        },
        data() {
            return {
                athlete: {}
            }
        },
        watch: {
            open: function (value) {
                if (value && this.athleteId)
                    athleteService.show(this.athleteId,
                            (response)=> {
                                this.athlete = response.data;
                            }, (error)=> {
                            })
            }
        },
        methods: {
            close(evt){
                evt.preventDefault();
                this.$emit('delete-no');
            },
            onSubmit(evt){
                evt.preventDefault();
                athleteService.remove(this.athlete.id,
                        (response) => {
                            this.$emit('delete-yes');
                            //this.$store.commit(athleteTypes.mutations.OPEN_REMOVE, false);
                            this.$root.successToast(response.message);
                        },
                        (response) => {
                            this.$emit('delete-no');
                            this.$root.errorToast(response.errors)
                            // this.$store.commit(athleteTypes.mutations.OPEN_REMOVE, false);
                        });
            }
        }
    }
</script>
