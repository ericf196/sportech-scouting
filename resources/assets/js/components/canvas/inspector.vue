<template>
    <div id="inspectorBox" class="box box-solid collapsed-box">
        <div class="box-header">
            <!-- tools box -->
            <div class="pull-right box-tools">
                <button type="button" class="btn btn-primary btn-sm" id="inspectorToogler" v-on:click="toogleOpen"
                        data-widget="collapse"
                        data-toggle="tooltip" title=""
                        data-original-title="Collapse">
                    <i class="fa fa-plus"></i>
                </button>
            </div>
            <!-- /. tools -->

            <div class="pull-left">
                <i class="fa fa-calendar"></i>
                <h3 class="box-title">
                    Inspector
                </h3>
            </div>

            <div class="pull-left inspector-info" v-if="touch">
                <div class="pull-left"
                     :style="'background:'+background+'; height:20px; width:20px;margin-top: 1px; margin-right:5px'"></div>
                <div class="pull-left inspector-info--title">{{title}}</div>
                <span class="label label-success">{{start}}</span>
                <span class="label label-danger">{{end}}</span>
            </div>
        </div>
        <div class="box-body">
            <div class="row" v-if="touch">
                <div class="col-xs-12">
                    <div class="mailbox-controls control-inspector-menu">
                        <div class="btn-group">
                            <button type="button" class="btn btn-danger btn-sm" v-on:click="createAction"
                                    v-if="recordingTouch">
                                End Action
                            </button>
                            <button type="button" class="btn btn-success btn-sm" v-on:click="play">
                                <i
                                        class="fa" :class="{'fa-play':!playing,'fa-pause text-danger':playing}"></i>
                                {{playing?'Pause':'Play'}}
                            </button>
                        </div>
                        <div class="btn-group">
                            <button type="button" class="btn btn-default btn-sm" v-on:click="backward(10)">
                                <i
                                        class="fa fa-fast-backward"></i>
                                10 s
                            </button>
                            <button type="button" class="btn btn-default btn-sm" v-on:click="backward(5)">
                                <i
                                        class="fa fa-backward"></i>
                                5 s
                            </button>
                            <button type="button" class="btn btn-default btn-sm" v-on:click="forward(5)">
                                <i
                                        class="fa fa-forward"></i>
                                5 s
                            </button>
                            <button type="button" class="btn btn-default btn-sm" v-on:click="forward(10)">
                                <i
                                        class="fa fa-fast-forward"></i>
                                10 s
                            </button>
                        </div>
                        <div class="btn-group">
                            <button type="button" class="btn btn-default btn-sm" v-on:click="playbackRate(0.25)">
                                0.25 x
                            </button>
                            <button type="button" class="btn btn-default btn-sm" v-on:click="playbackRate(0.5)">
                                0.5 x
                            </button>
                            <button type="button" class="btn btn-default btn-sm" v-on:click="playbackRate(1)">
                                1 x
                            </button>
                            <button type="button" class="btn btn-default btn-sm" v-on:click="playbackRate(1.5)">
                                1.5 x
                            </button>
                            <button type="button" class="btn btn-default btn-sm" v-on:click="playbackRate(2)">
                                2 x
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="athlete-menu"  v-if="touch && action">
                <div class="row">
                    <div class="col-xs-6 no-padding-right">
                        <div class="athlete-menu-title">
                            Left athlete actions
                        </div>
                    </div>
                    <div class="col-xs-6 no-padding-left">
                        <div class="athlete-menu-title">
                            Right athlete actions
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-xs-6 no-padding-right">
                        <div class="athlete-menu-left">
                            <tags :tags="tagsLeft" :selected="action.leftTags"
                                  v-on:tag-deleted="tagDeletedLeft" v-on:tag-selected="tagSelectedLeft"></tags>
                        </div>
                    </div>
                    <div class="col-xs-6 no-padding-left">
                        <div class="athlete-menu-left">
                            <tags :tags="tagsRight" :selected="action.rightTags"
                                  v-on:tag-deleted="tagDeletedRight" v-on:tag-selected="tagSelectedRight"></tags>
                        </div>
                    </div>
                </div>

            </div>

            <div id='inspector'></div>
        </div>
    </div>
</template>
<style lang="scss" rel="stylesheet/scss">
    .inspector-info {
        margin-left: 10px;
        .inspector-info--title {
            margin: 0 10px;
        }
    }

    .athlete-menu {

        .dropdown {
            display: inline-block !important;
        }
        .athlete-menu-title {
            border-top: 1px solid #d3e0e9;
            border-left: 1px solid #d3e0e9;
            border-right: 1px solid #d3e0e9;
            padding: 0 10px;
        }

        .athlete-menu-left {
            border-left: 1px solid #d3e0e9;
            border-right: 1px solid #d3e0e9;
            padding-bottom: 5px;
        }

        .athlete-menu-right {
            border-right: 1px solid #d3e0e9;
            padding-bottom: 5px;
        }
    }
</style>
<script>
    import {dispatch, getState, subscribe} from 'mockstate';
    import inspectorSketch from '../../sketch/inspectorSketch'
    import TimeConverter from '../../sketch/components/utils/TimeConverter'
    import collideMixin from '../../mixins/collide'
    import uuidMixin from '../../mixins/uuid'
    import Action from '../../sketch/components/touches/Action'
    import tags from '../tags/tags.vue'
    import defaultTags from '../tags/tagList'
    export default{
        data(){
            return {
                open: false,
                touch: null,
                actions: [],
                recordingTouch: false,
                started: false,
                edit: false,
                action: {
                    initialized: false,
                    edit: false,
                    text: '',
                    start: 0,
                    end: 100,
                    leftTags: [],
                    rightTags: [],
                    color: {
                        "hsl": {"h": 61.0762331838565, "s": 1, "l": 0.4372549019607843, "a": 1},
                        "hex": "#DBDF00",
                        "rgba": {"r": 219, "g": 223, "b": 0, "a": 1, "alpha": 50},
                        "hsv": {"h": 61.0762331838565, "s": 1, "v": 0.8745098039215686, "a": 1},
                    }
                },
                tagsLeft: _.cloneDeep(defaultTags),
                tagsRight: _.cloneDeep(defaultTags),
            }
        },
        props: {
            playing: {},
        },
        mixins: [collideMixin, uuidMixin],
        watch: {
            'open': function (open, oldOpen) {
                if (open) {
                    inspector.start();
                } else {
                    inspector.stop();
                }
            }
        },
        components: {
            tags
        },
        created(){
            subscribe(this, (data) => {
                if (data.action == 'setSelectedTouch') {
                    this.touch = getState('*').touchManager.selectedTouch;
                    if (this.touch) {
                        this.actions = this.touch.actions.slice(0);
                    } else {
                        this.actions = []
                    }
                }
                if (data.action == 'setSelectedAction') {
                    var action = getState('*').touchManager.selectedAction;
                    if (action) {
                        this.action = action;
                    }
                }
                if (data.action == 'recordingTouch') {
                    this.recordingTouch = getState('*').touchManager.recordingTouch;
                }
            })

            bus.$on('toogle-inspector', (isOpen)=> {
                if (isOpen == undefined) {
                    this.open = !this.open;
                    $.AdminLTE.boxWidget.collapse($('#inspectorToogler'));
                } else {
                    if (this.open != isOpen) {
                        $.AdminLTE.boxWidget.collapse($('#inspectorToogler'));
                    }
                    this.open = isOpen;
                }
            })
        },
        computed: {
            title(){
                return this.touch ? this.touch.text : '';
            },
            start(){
                return this.touch ? TimeConverter.toHHMMSS(this.touch.start) : null;
            },
            end(){
                return this.touch ? TimeConverter.toHHMMSS(this.touch.end) : null;
            },
            background(){
                return this.touch ? this.touch.color.hex : null;
            }
        },
        mounted(){
            window.inspector = new p5(inspectorSketch);

        },
        methods: {
            toogleOpen(){
                this.open = !this.open;
            },
            play(){
                if (this.playing) {
                    this.$parent.$refs.player.api().pause();
                } else {
                    this.$parent.$refs.player.api().play();
                }
            },
            startAction(){
                var collideResult = this.checkCollideActions({
                    start: Math.floor(this.$parent.$refs.player.api().currentTime()),
                    end: Math.floor(this.$parent.$refs.player.api().currentTime()) + 1
                });
                if (collideResult.collide) {
                    console.log('collide');
                } else {
                    if (!this.touch) {
                        this.touch = getState('*').touchManager.selectedTouch;
                    }
                    this.$parent.$refs.player.api().play();
                    this.$parent.$refs.player.api().disableProgress.disable();
                    var start = 0;
                    if (this.touch.actions.length) {
                        start = this.touch.actions[this.touch.actions.length - 1].end
                    } else {
                        start = this.touch.start;
                    }
                    var act = new Action(Math.floor(start), Math.floor(this.$parent.$refs.player.api().currentTime()), _.cloneDeep(this.touch.color));
                    dispatch('addAction', act);
                    dispatch('recordingAction', true);
                    dispatch('setSelectedAction', act);
                    this.action = act;
                    this.$parent.$refs.player.api().on('timeupdate', this.onStartAction);
                    this.edit = false;
                    this.started = true;
                }
            },
            tagSelectedLeft(tag){
                if (!this.action) {
                    this.action = getState('*').touchManager.selectedAction;
                }
                if (this.action) {
                    tag.id = this.generateUUID();
                    this.action.leftTags.push(tag);
                }
            },
            tagSelectedRight(tag){
                if (!this.action) {
                    this.action = getState('*').touchManager.selectedAction;
                }
                if (this.action) {
                    tag.id = this.generateUUID();
                    this.action.rightTags.push(tag);
                }
            },
            tagDeletedRight(tag){
                if (!this.action) {
                    this.action = getState('*').touchManager.selectedAction;
                }
                if (this.action) {
                    var tagIndex = _.findIndex(this.action.rightTags, function (o) {
                        return o.id == tag.id;
                    });
                    this.action.rightTags.splice(tagIndex, 1);
                }
            },
            tagDeletedLeft(tag){
                if (!this.action) {
                    this.action = getState('*').touchManager.selectedAction;
                }
                if (this.action) {
                    var tagIndex = _.findIndex(this.action.leftTags, function (o) {
                        return o.id == tag.id;
                    });
                    this.action.leftTags.splice(tagIndex, 1);
                }
            },
            onStartAction(){
                this.action.end = Math.floor(this.$parent.$refs.player.api().currentTime());
                var collideResult = this.checkCollideActions(this.action);
                if (collideResult.collide) {
                    this.edit = true;
                    this.started = false;
                    dispatch('recordingAction', false);
                    this.$parent.$refs.player.api().off('timeupdate', this.onStartAction);
                    this.action.end = Math.floor(this.$parent.$refs.player.api().currentTime() - 1);
                    this.$parent.$refs.player.api().disableProgress.enable();
                    this.$parent.$refs.player.api().pause();
                }
                /* else if (Math.floor(this.$parent.$refs.player.api().currentTime()) > this.touch.end) {
                 this.edit = true;
                 this.started = false;
                 this.$parent.$refs.player.api().off('timeupdate', this.onStartAction);
                 dispatch('recordingAction', false);
                 this.action.end = Math.floor(this.touch.end);
                 this.$parent.$refs.player.api().disableProgress.enable();
                 this.$parent.$refs.player.api().pause();
                 }*/
            },
            endAction(){
                this.edit = true;
                this.started = false;
                dispatch('recordingAction', false);
                this.$parent.$refs.player.api().off('timeupdate', this.onStartAction);
                this.$parent.$refs.player.api().pause()
                this.$parent.$refs.player.api().disableProgress.enable();
                this.$parent.$refs.player.api().pause();
            },
            createAction(){
                this.startAction();
            },
            playbackRate(rate){
                this.$parent.$refs.player.api().playbackRate(rate);
            },
            forward(s){
                var forward = this.$parent.$refs.player.api().currentTime() + s;
                if (forward <= this.$parent.$refs.player.api().duration()) {
                    this.$parent.$refs.player.api().currentTime(forward);
                } else {
                    this.$parent.$refs.player.api().currentTime(this.$parent.$refs.player.api().duration());
                }
            },
            backward(s){
                var backward = this.$parent.$refs.player.api().currentTime() - s;
                if (backward >= 0) {
                    this.$parent.$refs.player.api().currentTime(backward);
                } else {
                    this.$parent.$refs.player.api().currentTime(0);
                }
            },
        }
    }
</script>
