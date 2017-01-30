<template>
    <div>
        <modal :open="open" :complete-callback="close" fixed-footer :dismissible="false">
            <modal-header title="Edit Action"></modal-header>
            <form class="form">
                <modal-content>
                    <div slot="content">
                        <p class="padding-top padding-bottom">Edit Action</p>
                        <div class="container-fluid">
                            <div class="form-group" :class="{'has-error': errors.has('action.text') }">
                                <label for="new-title" class="control-label">
                                    Title
                                </label>
                                <div class="input-group">
                                    <div class="input-group-addon"><i class="fa fa-envelope"></i></div>
                                    <input id="new-title" name="new-title" type="text"
                                           v-validate.initial="action.text"
                                           data-rules="required"
                                           data-as="Title"
                                           class="form-control"
                                           placeholder="Title"
                                           v-model="action.text">
                                </div>
                                <span class="text-danger"
                                      v-show="errors.has('action.text')">{{ errors.first('action.text') }}</span>
                            </div>

                            <div class="form-group" :class="{'has-error': errors.has('action.start') }">
                                <label for="new-start" class="control-label">
                                    Start (sec)
                                </label>
                                <div class="input-group">
                                    <div class="input-group-addon"><i class="fa fa-envelope"></i></div>
                                    <input id="new-start" name="new-start" type="text"
                                           v-validate.initial="action.start"
                                           data-rules="required"
                                           data-as="Start"
                                           class="form-control"
                                           placeholder="Start"
                                           v-model="action.start">
                                </div>
                                <span class="text-danger"
                                      v-show="errors.has('action.start')">{{ errors.first('action.start') }}</span>
                            </div>
                            <div class="form-group" :class="{'has-error': errors.has('action.end') }">
                                <label for="new-end" class="control-label">
                                    End(sec)
                                </label>
                                <div class="input-group">
                                    <div class="input-group-addon"><i class="fa fa-envelope"></i></div>
                                    <input id="new-end" name="new-end" type="text"
                                           v-validate.initial="action.end"
                                           data-rules="required"
                                           data-as="End"
                                           class="form-control"
                                           placeholder="End"
                                           v-model="action.end">
                                </div>
                                <span class="text-danger"
                                      v-show="errors.has('action.end')">{{ errors.first('action.end') }}</span>
                            </div>
                            <div class="form-group">
                                <label for="">Color</label>
                                <compact-picker v-model="action.color" @change-color="onChangeColor"></compact-picker>
                            </div>
                        </div>
                    </div>
                </modal-content>
                <modal-footer>

                    <button class="btn btn-success"
                            v-on:click.prevent="onSubmit()">
                        Save
                    </button>
                    <button class="btn btn-danger"
                            v-on:click.prevent="close()">
                        Close
                    </button>
                </modal-footer>
            </form>
        </modal>
    </div>
</template>

<script type="text/babel">
    import {Compact} from 'vue-color';
    const defaultAction = {
        text: '',
        start: 0,
        end: 100,
        color: {
            hex: '#194d33',
            hsl: {
                h: 150,
                s: 0.5,
                l: 0.2,
                a: 1
            },
            hsv: {
                h: 150,
                s: 0.66,
                v: 0.30,
                a: 1
            },
            rgba: {
                r: 25,
                g: 77,
                b: 51,
                a: 1
            },
            a: 1
        }
    }

    export default{
        props: {
            open: {
                type: Boolean,
                required: true
            },
            selectedAction: {
                type: Object,
                default: function () {
                    return defaultAction
                }
            }
        },
        watch: {
            selectedAction(newVal){
                this.action = newVal
            }
        },
        data(){
            return {
                action: defaultAction
            }
        },
        components: {
            'modal': require('base/components/global/modals/modal.vue'),
            'modal-content': require('base/components/global/modals/modal-content.vue'),
            'modal-footer': require('base/components/global/modals/modal-footer.vue'),
            'modal-header': require('base/components/global/modals/modal-header.vue'),
            'compact-picker': Compact,
        },
        computed: {},
        methods: {
            close(){
                this.$emit('modal-close');
            },
            onChangeColor(val){
                this.action.color = val
            },
            onChangeTextColor(val){
                this.action.textColor = val
            },
            onSubmit(){
                this.$validator.validateAll();
                if (this.errors.any()) {

                } else {
                    this.$emit('modal-close', this.action);
                }
            }
        }
    }
</script>
