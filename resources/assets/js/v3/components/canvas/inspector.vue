<template>
    <div id="inspectorBox" class="box box-solid collapsed-box">
        <div class="box-header">
            <!-- tools box -->
            <div class="pull-right box-tools">
                <button type="button" class="btn btn-primary btn-sm" id="inspectorToogler" v-on:click="toogleOpen"
                        data-widget="collapse"
                        data-toggle="tooltip" title=""
                        data-original-title="Collapse">
                    <i class="fa fa-plus"></i></button>
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
                     :style="'background:'+background+'; height:20px; width:20px;margin-top: 1px;'"></div>
                <div class="pull-left inspector-info--title">{{title}}</div>
                <span class="label label-success">{{start}}</span>
                <span class="label label-danger">{{end}}</span>
            </div>
        </div>
        <div class="box-body">
            <div class="row" v-if="touch">
                <div class="col-xs-12">

                </div>
            </div>
            <div class="row" v-if="touch">
                <div class="col-xs-12">
                    <div class="mailbox-controls control-inspector-menu">
                        <div class="btn-group">
                            <button type="button" class="btn btn-success btn-sm" v-on:click="startAction"
                                    :disabled="started"><i
                                    class="fa" :class="{'fa-play':!started,'fa-circle text-danger':started}"></i>
                                {{started?'Recording Action':'Start Action'}}
                            </button>
                            <button type="button" class="btn btn-danger btn-sm" :disabled="!started"
                                    v-on:click="endAction"><i
                                    class="fa fa-stop"></i> End Action
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="athlete-menu">
                <div class="row" v-if="touch">
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

                <div class="row" v-if="touch">
                    <div class="col-xs-6 no-padding-right">
                        <div class="athlete-menu-left">
                            <tags :tags="tagsLeft" v-on:tag-selected="tagSelectedLeft"></tags>
                        </div>
                    </div>
                    <div class="col-xs-6 no-padding-left">
                        <div class="athlete-menu-left">
                            <tags :tags="tagsRight" v-on:tag-selected="tagSelectedRight"></tags>
                        </div>
                    </div>
                </div>

            </div>

            <div id='inspector'></div>
        </div>
    </div>
</template>
<style lang="sass" rel="stylesheet/scss">
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
        }

        .athlete-menu-right {
            border-right: 1px solid #d3e0e9;
        }
    }
</style>
<script>
    import {dispatch, getState, subscribe} from 'mockstate';
    import inspectorSketch from '../../sketch/inspectorSketch'
    import TimeConverter from '../../sketch/components/utils/TimeConverter'
    import collideMixin from '../../mixins/collide'
    import Action from '../../sketch/components/touches/Action'
    import tags from '../tags/tags.vue'
    import defaultTags from '../tags/tagList'

    export default{
        data(){
            return {
                open: false,
                touch: null,
                actions: [],
                started: false,
                edit: false,
                action: {
                    initialized: false,
                    edit: false,
                    text: '',
                    start: 0,
                    end: 100,
                    color: {
                        "hsl": {"h": 61.0762331838565, "s": 1, "l": 0.4372549019607843, "a": 1},
                        "hex": "#DBDF00",
                        "rgba": {"r": 219, "g": 223, "b": 0, "a": 1, "alpha": 50},
                        "hsv": {"h": 61.0762331838565, "s": 1, "v": 0.8745098039215686, "a": 1},
                    }
                },
                tagsLeft: _.cloneDeep(defaultTags),
                tagsRight: _.cloneDeep(defaultTags)
            }
        },
        mixins: [collideMixin],
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
            console.log(window.inspector);
        },
        methods: {
            toogleOpen(){
                this.open = !this.open;
            },
            startAction(){
                var collideResult = this.checkCollideActions({
                    start: Math.floor(this.$parent.$refs.player.api().currentTime()),
                    end: Math.floor(this.$parent.$refs.player.api().currentTime()) + 1
                });
                if (collideResult.collide) {
                    console.log('collide');
                } else {
                    this.$parent.$refs.player.api().play();
                    this.$parent.$refs.player.api().disableProgress.disable();
                    console.log(_.cloneDeep(this.touch.color), this.touch.color);
                    var act = new Action(Math.floor(this.$parent.$refs.player.api().currentTime()), Math.floor(this.$parent.$refs.player.api().currentTime()), _.cloneDeep(this.touch.color));
                    dispatch('addAction', act);
                    dispatch('recordingAction', true);
                    this.action = act;
                    this.$parent.$refs.player.api().on('timeupdate', this.onStartAction);
                    this.edit = false;
                    this.started = true;
                }
            },
            tagSelectedLeft(tag){
                console.log('left', tag)
            },
            tagSelectedRight(tag){
                console.log('right', tag)
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
                } else if (Math.floor(this.$parent.$refs.player.api().currentTime()) >= this.touch.end) {
                    this.edit = true;
                    this.started = false;
                    this.$parent.$refs.player.api().off('timeupdate', this.onStartAction);
                    dispatch('recordingAction', false);
                    this.action.end = Math.floor(this.touch.end);
                    this.$parent.$refs.player.api().disableProgress.enable();
                    this.$parent.$refs.player.api().pause();
                }
            },
            endAction(){
                this.edit = true;
                this.started = false;
                dispatch('recordingAction', false);
                this.$parent.$refs.player.api().off('timeupdate', this.onStartAction);
                this.$parent.$refs.player.api().pause()
                this.$parent.$refs.player.api().disableProgress.enable();
                this.$parent.$refs.player.api().pause();
            }
        }
    }
</script>
