<template>
    <div>
        <form action="" v-on:submit.prevent="onSubmit" class="form-horizontal form-touch">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group" :class="{'has-error': errors.has('touch.text') }">
                        <label for="new-title" class="control-label col-xs-2">
                            {{$t('scoutings.title')}}
                        </label>
                        <div class="col-xs-10">
                            <input id="new-title"
                                   name="touch.text"
                                   type="text"
                                   v-validate.initial="touch.text"
                                   data-vv-rules="required"
                                   data-vv-as="Title"
                                   class="form-control"
                                   placeholder="Title"
                                   v-model="touch.text">
                            <span class="text-danger"
                                  v-show="errors.has('touch.text')">{{ errors.first('touch.text') }}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="new-title" class="control-label col-xs-2">
                            {{$t('scoutings.color')}}
                        </label>
                        <div class="col-xs-10">
                            <compact-picker v-model="touch.color" @change-color="onChangeColor"></compact-picker>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group" :class="{'has-error': errors.has('touch.start') }">
                        <label for="new-start" class="control-label col-xs-2">
                            {{$t('scoutings.start')}}
                        </label>
                        <div class="col-xs-10">
                            <div class="row">
                                <div class="col-xs-6">
                                    <input id="new-start"
                                           name="touch.start"
                                           type="text"
                                           v-validate.initial="touch.start"
                                           data-vv-rules="required|numeric"
                                           data-vv-as="Start"
                                           class="form-control"
                                           placeholder="Start"
                                           v-model="touch.start">
                                </div>
                                <div class="col-xs-6">
                                    <input id="new-start-fmt" name="new-start-fmt" type="text"
                                           class="form-control"
                                           placeholder="Start"
                                           disabled
                                           v-model="startFmt">
                                </div>
                            </div>
                            <span class="text-danger"
                                  v-show="errors.has('touch.start')">{{ errors.first('touch.start') }}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group" :class="{'has-error': errors.has('touch.end') }">
                        <label for="new-end" class="control-label col-xs-2">
                            {{$t('scoutings.end')}}
                        </label>
                        <div class="col-xs-10">
                            <div class="row">
                                <div class="col-xs-6">
                                    <input id="new-end"
                                           name="touch.end"
                                           type="text"
                                           v-validate.initial="touch.end"
                                           data-vv-rules="required|numeric"
                                           data-vv-as="End"
                                           class="form-control"
                                           placeholder="End"
                                           v-model="touch.end">
                                </div>
                                <div class="col-xs-6">
                                    <input id="new-end-fmt" name="new-end-fmt" type="text"
                                           class="form-control"
                                           placeholder="Start"
                                           disabled
                                           v-model="endFmt">
                                </div>
                            </div>
                            <span class="text-danger"
                                  v-show="errors.has('touch.end')">{{ errors.first('touch.end') }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row" v-if="collide">
                <div class="col-xs-12">
                    <div class="alert alert-danger">
                        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                        <h4>
                            <i class="icon fa fa-ban"></i>
                            {{$t('scoutings.touches_cant_overlap')}}
                        </h4>
                        {{$t('scoutings.touch_overlap_with')}}:
                        <ul>
                            <li v-for="collideTouch in collideTouches">
                                <strong v-if="collideTouch.previous.id != touch.id">
                                    {{$t('scoutings.touch_overlap_msg',{ title:
                                    collideTouch.previous.text,start:toHHMMSS(collideTouch.previous.start),end:
                                    toHHMMSS(collideTouch.previous.end)})}}
                                </strong>
                                <strong v-if="collideTouch.current.id != touch.id">
                                    {{$t('scoutings.touch_overlap_msg',{ title:
                                    collideTouch.current.text,start:toHHMMSS(collideTouch.current.start),end:
                                    toHHMMSS(collideTouch.current.end)})}}
                                </strong>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row" v-if="endInvalid">
                <div class="col-xs-12">
                    <div class="alert alert-danger">
                        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                        <h4>
                            <i class="icon fa fa-ban"></i>
                            {{$t('scoutings.validation_error')}}
                        </h4>
                        {{$t('scoutings.validation_end_greater')}}
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 text-right">
                    <button type="submit" class="btn btn-success">{{$t('scoutings.save')}}</button>
                    <button class="btn btn-danger" v-on:click.prevent="close">{{$t('scoutings.cancel')}}</button>
                </div>
            </div>
        </form>
    </div>
</template>
<style>

</style>
<script>
    import {getState} from 'mockstate';
    import {Compact} from 'vue-color';
    import TimeConverter from '../sketch/components/utils/TimeConverter'
    import collideMixin from 'base/mixins/collide'
    import scoutingsLocales from 'base/lang/admin/scoutings/scoutings.js';

    export default{
        locales: scoutingsLocales,
        props: {
            initTouch: {
                default: function () {
                    return {
                        initialized: false,
                        text: null,
                        start: 0,
                        end: 100,
                        color: {
                            rgba: {
                                r: 25,
                                g: 77,
                                b: 51,
                                a: 1
                            },
                        }
                    }
                }
            },
            duration: {},
        },
        mixins: [collideMixin],
        created(){
            this.touch = Object.assign({}, this.initTouch);
        },
        watch: {
            'touch.start': function () {
                var collideResult = this.checkCollide(this.touch);
                this.collide = collideResult.collide;
                this.collideTouches = collideResult.collideTouches;
            },
            'touch.end': function () {
                var collideResult = this.checkCollide(this.touch);
                this.collide = collideResult.collide;
                this.collideTouches = collideResult.collideTouches;
                this.endInvalid = parseInt(this.touch.start) >= parseInt(this.touch.end);
            }
        },
        data(){
            return {
                collide: false,
                collideTouches: [],
                endInvalid: false,
                touch: {
                    text: null,
                    start: 0,
                    end: 0,
                    color: {
                        rgba: {
                            r: 25,
                            g: 77,
                            b: 51,
                            a: 1
                        },
                    }
                }
            }
        },
        computed: {
            startFmt(){
                return TimeConverter.toHHMMSS(this.touch.start)
            },
            endFmt(){
                return TimeConverter.toHHMMSS(this.touch.end)
            },
            validationEnd(){
                return parseInt(this.touch.start) + 1;
            }
        },
        components: {
            'compact-picker': Compact,
        },
        methods: {
            close(){
                this.$emit('cancel-new-touch', this.touch);
            },
            toHHMMSS(secs) {
                return TimeConverter.toHHMMSS(secs)
            },
            onChangeColor(val){
                this.touch.color = val
            },
            onSubmit(){
                this.$validator.validateAll();
                if (this.errors.any()) {

                } else {
                    if (this.touch.start >= this.touch.end) {
                        this.endInvalid = true;
                    } else {
                        this.endInvalid = false;
                        if (!this.collide) {
                            this.$emit('add-new-touch', this.touch);
                        }
                    }
                }
            }
        }
    }
</script>
<style>
    .vue-color__compact {
        width: 100% !important;
    }
</style>