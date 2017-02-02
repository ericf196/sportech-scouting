<template>
    <div>
        <admin-header :title="title" :breadcrumbs="breadcrumbs"></admin-header>
        <section class="content overlay-wrapper">
            <div class="row is-flex">
                <div class="col-xs-12 col-md-6 player-container">
                    <dnc-player v-if="initialized" :source="source" ref="player"></dnc-player>
                </div>
                <div class="col-xs-12 col-md-6 touches-container">
                    <touches-list></touches-list>
                </div>
            </div>
            <div class="row" v-show="playerReady">
                <div class="col-xs-12">
                    <div class="mailbox-controls control-menu">
                        <div class="btn-group">
                            <button type="button" class="btn btn-success btn-sm" v-on:click="startTouch"
                                    :disabled="started">
                                <i
                                        class="fa" :class="{'fa-play':!started,'fa-circle text-danger':started}"></i>
                                {{started?$t('scoutings.recording'):$t('scoutings.start_touch')}}
                            </button>
                            <button type="button" class="btn btn-danger btn-sm" :disabled="!started"
                                    v-on:click="endTouch">
                                <i
                                        class="fa fa-stop"></i>
                                {{$t('scoutings.end_touch')}}
                            </button>
                        </div>

                        <div class="pull-right">
                            <div class="btn-group">
                                <button type="button" class="btn btn-default btn-sm" v-on:click="toogleTimeline">
                                    <i
                                            class="fa fa-calendar"></i>
                                    {{$t('scoutings.toogle_timeline')}}
                                </button>
                                <button type="button" class="btn btn-default btn-sm" v-on:click="toogleInspector">
                                    <i
                                            class="fa fa-eye"></i>
                                    {{$t('scoutings.toogle_inspector')}}

                                </button>
                            </div>
                            <!-- /.btn-group -->
                        </div>
                    </div>
                </div>
            </div>
            <edit-touch-form v-if="edit"
                             v-on:cancel-new-touch="cancelEditTouch"
                             :init-touch="touch"
                             v-on:add-new-touch="saveEditTouch" :duration="duration"></edit-touch-form>
            <div class="row">
                <div class="col-xs-12">
                    <inspector v-if="playerReady" ref="inspector" :playing="playing"></inspector>
                </div>
            </div>

            <div class="row">
                <div class="col-xs-12">
                    <timeline v-if="playerReady"></timeline>
                </div>
            </div>

            <div class="row" v-show="playerReady">
                <div class="col-xs-6">
                    <button v-on:click="save" class="btn btn-success btn-block"> {{$t('forms.save')}}</button>
                </div>
                <div class="col-xs-6">
                    <button v-on:click="cancel" class="btn btn-danger btn-block">{{$t('forms.back')}}</button>
                </div>
            </div>
            <div class="overlay" v-if="!playerReady">
                <i class="fa fa-refresh fa-spin"></i>
            </div>

        </section>
    </div>
</template>
<script>
    import dncPlayer from 'base/components/global/video/player.vue';
    import Touch from './sketch/components/touches/Touch';
    import {setState, setActions, getState, dispatch, subscribe} from 'mockstate';
    import {actions} from './stores/actions'
    import {state} from './stores/store'
    import VeeValidate, {Validator} from 'vee-validate';
    import newTouchForm from './forms/newTouchForm.vue';
    import editTouchForm from './forms/editTouchForm.vue';
    import touchesList from './lists/touchesList.vue';
    import timeline from './canvas/timeline.vue';
    import inspector from './canvas/inspector.vue';
    import collideMixin from 'base/mixins/collide';
    import adminHeader from 'base/components/header/pageHeader.vue'
    import scoutingService from 'base/dashboard/services/scoutings/scoutingService'
    import scoutingTouchService from 'base/dashboard/services/scoutings/scoutingTouchService'
    import Action from './sketch/components/touches/Action'
    import uuidMixin from 'base/mixins/uuid'
    import errorPresenter from 'base/mixins/ajax/errorPresenter'
    import scoutingsLocales from 'base/lang/admin/scoutings/scoutings.js';

    export default{
        components: {
            dncPlayer,
            newTouchForm,
            editTouchForm,
            touchesList,
            timeline,
            inspector,
            adminHeader
        },
        mixins: [collideMixin, uuidMixin, errorPresenter],
        locales: scoutingsLocales,
        data() {
            return {
                scouting: {},
                source: {},
                initialized: false,
                duration: 0,
                edit: false,
                playing: false,
                started: false,
                playerReady: false,
                touch: {
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
                }
            }
        },
        computed: {
            breadcrumbs(){
                return [
                    {
                        href: '/',
                        title: 'admin.home'
                    },
                    {
                        href: '/scoutings/list',
                        title: 'admin.scoutings'
                    },
                    {
                        href: '/scoutings/' + this.$route.params.id + '/touches',
                        title: 'admin.touches'
                    }
                ]
            },
            title(){
                return this.$t('admin.scoutings') + ' ' + this.scouting.name
            }
        },
        created()
        {
            window.vm = this;
            this.source = window['source'];
            setState(state);
            setActions(actions);
            window.getSt = function () {
                return getState('*');
            };
            subscribe(this, (data) => {
                if (data.action == 'playerReady') {
                    console.log('playerReady subscript', this.playerReady);
                    if (getState('*').playerReady && !this.playerReady) {
                        this.playerReady = getState('*').playerReady;
                        this.$nextTick(function () {
                            this.init();
                            this.loadScouting();
                        })
                    }
                }
            });
            scoutingService.show(this.$route.params.id,
                    (response)=> {
                        this.scouting = response.data;
                        this.source = {
                            'techOrder': ['youtube'],
                            'sources': [
                                {
                                    'type': "video/youtube",
                                    'src': response.data.videoSrc
                                }
                            ]
                        }
                        this.initialized = true;
                    },
                    (error)=> {
                        console.log(error);
                    })
            bus.$on('edit-touch', (touch)=> {
                this.resetTouch();
                this.editTouch(null, touch)
            });
            bus.$on('remove-touch', (touch)=> {
                this.removeTouch(touch)
            })
        },
        mounted(){

        },
        beforeDestroy(){
            console.log('destroy hook');
            this.$refs.player.api().off();
        },
        methods: {
            loadScouting(){
                var self = this;
                _.each(this.scouting.touches, function (touch) {
                    var act = new Touch(touch.start, touch.end, touch.title, touch.color);
                    dispatch('addTouch', act);
                    dispatch('setSelectedTouch', act);
                    _.each(touch.actions, function (action) {
                        var act = new Action(action.start, action.end, action.color);
                        dispatch('addAction', act);
                        dispatch('setSelectedAction', act);
                        _.each(action.leftTags, function (tag) {
                            tag.uuid = self.generateUUID();
                            dispatch('addLeftTag', tag);
                        })

                        _.each(action.rightTags, function (tag) {
                            tag.uuid = self.generateUUID();
                            dispatch('addRightTag', tag);
                        })
                        dispatch('setSelectedAction', null);
                    })
                });
                dispatch('setSelectedTouch', null);
            },
            init(){
                this.$refs.player.api().on('play', ()=> {
                    this.playing = true;
                });

                this.$refs.player.api().on('pause', ()=> {
                    this.playing = false;
                });
                this.$refs.player.api().play();
                this.$refs.player.api().on('timeupdate', ()=> {
                    if (!this.started) {
                        var collideResult = this.checkCollide({
                            start: Math.floor(this.$refs.player.api().currentTime()),
                            end: Math.floor(this.$refs.player.api().currentTime()) + 1,
                            id: 0
                        });
                        if (collideResult.collide) {
                            if (collideResult.collideTouches[0].previous instanceof Touch) {
                                var touch = collideResult.collideTouches[0].previous;
                                dispatch('setSelectedTouch', touch);
                            } else if (collideResult.collideTouches[0].current instanceof Touch) {
                                var touch = collideResult.collideTouches[0].current;
                                dispatch('setSelectedTouch', touch);
                            }
                        } else if (!this.started) {
                            dispatch('setSelectedTouch', null);
                        }

                        var collideActionResult = this.checkCollideActions({
                            start: Math.floor(this.$refs.player.api().currentTime()),
                            end: Math.floor(this.$refs.player.api().currentTime()) + 1,
                            id: 0
                        });
                        if (collideActionResult.collide) {
                            if (collideActionResult.collideActions[0].previous instanceof Action) {
                                var action = collideActionResult.collideActions[0].previous;
                                dispatch('setSelectedAction', action);
                            } else if (collideActionResult.collideActions[0].current instanceof Action) {
                                var action = collideActionResult.collideActions[0].current;
                                dispatch('setSelectedAction', action);
                            }
                        } else if (!this.started) {
                            dispatch('setSelectedAction', null);
                        }
                    }
                });
            },
            onChangeColor(val){
                this.touch.color = val
            },
            startTouch(){
                var collideResult = this.checkCollide({
                    start: Math.floor(this.$refs.player.api().currentTime()),
                    end: Math.floor(this.$refs.player.api().currentTime()) + 1
                });
                if (collideResult.collide) {
                    this.$root.errorToast(this.$t('scoutings.touches_cant_overlap'))
                } else {
                    this.$refs.player.api().play();
                    this.$refs.player.api().disableProgress.disable();
                    var act = new Touch(Math.floor(this.$refs.player.api().currentTime()), Math.floor(this.$refs.player.api().currentTime()), this.touch.text, this.touch.color);
                    dispatch('addTouch', act);
                    dispatch('recordingTouch', true);
                    this.toogleInspector(true);
                    dispatch('setSelectedTouch', act);
                    this.$refs.inspector.startAction();
                    this.duration = Math.floor(this.$refs.player.api().duration());
                    var self = this
                    this.touch = act;
                    this.$refs.player.api().on('timeupdate', self.onStartTouch);
                    this.edit = false;
                    this.started = true;
                }
            },
            onStartTouch(){
                this.touch.end = Math.floor(this.$refs.player.api().currentTime());
                var collideResult = this.checkCollide(this.touch);
                if (collideResult.collide) {
                    this.edit = true;
                    this.started = false;
                    dispatch('recordingTouch', false);
                    this.$refs.player.api().off('timeupdate', this.onStartTouch);
                    this.touch.end = Math.floor(this.$refs.player.api().currentTime() - 1);
                    this.$refs.player.api().pause()
                    this.$root.errorToast(this.$t('scoutings.touches_cant_overlap'))
                    this.$refs.player.api().disableProgress.enable();
                    this.$refs.player.api().pause();
                }
            },
            endTouch(){
                this.edit = true;
                this.started = false;
                dispatch('recordingTouch', false);
                this.$refs.player.api().off('timeupdate', this.onStartTouch);
                this.$refs.player.api().pause()
                this.$refs.player.api().disableProgress.enable();
                this.$refs.player.api().pause();
                this.$refs.inspector.endAction();
            },
            editTouch(event, touch){
                this.touch = touch;
                this.edit = true;
            },
            saveNewTouch(touch){
                var act = new Touch(touch.start, touch.end, touch.text, touch.color);
                dispatch('addTouch', act);
                this.resetTouch();
            },
            cancelNewTouch(){
                this.resetTouch();
            },
            saveEditTouch(touch){
                dispatch('editTouch', touch);
                this.edit = false;
                this.resetTouch();
            },
            cancelEditTouch(touch){
                this.edit = false;
            },
            resetTouch(){
                this.touch = {
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
                };
            },
            toogleTimeline(){
                bus.$emit('toogle-timeline');
            },
            toogleInspector(isOpen){
                bus.$emit('toogle-inspector', isOpen);
            },
            removeTouch(touch)
            {
                if (touch) {
                    dispatch('removeTouch', touch);
                }
            },

            save(){
                var touches = getState('*').touchManager.touches;
                var self = this;
                touches = this.formatSocuting(touches);
                scoutingTouchService.update(this.$route.params.id, {touches: touches}, (response)=> {
                    self.$root.successToast(response.message);
                    self.$router.push({
                        name: 'scoutings.list'
                    })
                }, (response)=> {
                    this.showError(response)
                })
            },
            cancel(){
                this.$router.push({
                    name: 'scoutings.list'
                })
            },
            formatSocuting(touches){
                var data = [];
                _.each(touches, (touch)=> {
                    var dataTouch = {
                        title: {'es': touch.text, 'en': touch.text},
                        start: touch.start,
                        end: touch.end,
                        color: touch.color,
                        duration: touch.end - touch.start,
                        actions: []
                    }

                    _.each(touch.actions, (action)=> {
                        var dataAction = {
                            start: action.start,
                            end: action.end,
                            color: action.color,
                            duration: action.end - action.start,
                            leftTags: [],
                            rightTags: []
                        }
                        _.each(action.leftTags, (tag)=> {
                            var dataTag = {};
                            dataTag.id = tag.id;
                            dataTag.dropdown = tag.dropdown;
                            if (tag.dropdown) {
                                dataTag.option = {id: tag.option.id}
                            }
                            dataAction.leftTags.push(dataTag);
                        });

                        _.each(action.rightTags, (tag)=> {
                            var dataTag = {};
                            dataTag.id = tag.id;
                            dataTag.dropdown = tag.dropdown;
                            if (tag.dropdown) {
                                dataTag.option = {id: tag.option.id}
                            }
                            dataAction.rightTags.push(dataTag);
                        });
                        dataTouch.actions.push(dataAction);
                    });
                    data.push(dataTouch);
                })

                return data;

            }


        }
    }
</script>
