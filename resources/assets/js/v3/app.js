require('./bootstrap');
import dncPlayer from './components/global/video/player.vue';
import Touch from './sketch/components/touches/Touch';
import {setState, setActions, getState, dispatch} from 'mockstate';
import {actions} from './stores/actions'
import {state} from './stores/store'
import VeeValidate, {Validator} from 'vee-validate';
import newTouchForm from './components/forms/newTouchForm.vue';
import editTouchForm from './components/forms/editTouchForm.vue';
import touchesList from './components/lists/touchesList.vue';
import timeline from './components/canvas/timeline.vue';
import inspector from './components/canvas/inspector.vue';
import collideMixin from './mixins/collide'

var VueDragula = require('vue-dragula');

Vue.use(VueDragula);
Vue.vueDragula.options('first-bag', {
    direction: 'horizontal'
})
window.bus = new Vue();
Vue.use(VeeValidate);

window.vm = new Vue({
    el: '#app-layout',
    components: {
        dncPlayer,
        newTouchForm,
        editTouchForm,
        touchesList,
        timeline,
        inspector
    },
    mixins: [collideMixin],
    data: {
        source: {},
        duration: 0,
        edit: false,
        playing: false,
        started: false,
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
    },
    created()
    {
        this.source = window['source'];
        setState(state);
        setActions(actions);
        window.getSt = function () {
            return getState('*');
        };
        bus.$on('edit-touch', (touch)=> {
            this.resetTouch();
            this.editTouch(null, touch)
        })

        bus.$on('remove-touch', (touch)=> {
            this.removeTouch(touch)
        })
    },
    mounted(){
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
                        dispatch('setSelectedTouch', collideResult.collideTouches[0].previous);
                    } else if (collideResult.collideTouches[0].current instanceof Touch) {
                        dispatch('setSelectedTouch', collideResult.collideTouches[0].current);
                    }
                } else if (!this.started) {
                    dispatch('setSelectedTouch', null);
                }
            }
        });
    },
    methods: {
        onChangeColor(val){
            this.touch.color = val
        },
        startTouch(){
            var collideResult = this.checkCollide({
                start: Math.floor(this.$refs.player.api().currentTime()),
                end: Math.floor(this.$refs.player.api().currentTime()) + 1
            });
            if (collideResult.collide) {
                console.log('collide');
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
                console.log('collide');
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
            if (touch) {
                dispatch('removeTouch', touch);
            }
            this.resetTouch();
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

        guardar(){

        },
        cerrar(){

        }

    }
});