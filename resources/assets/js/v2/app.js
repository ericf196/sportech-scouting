require('./bootstrap');
import dncPlayer from './components/global/video/player.vue';
import Touch from './sketch/components/touches/Touch';
import sketch from './sketch/sketch'
import {setState, setActions, getState, dispatch} from 'mockstate';
import {actions} from './stores/actions'
import {state} from './stores/store'
import VeeValidate, {Validator} from 'vee-validate';
import newTouchForm from './components/forms/newTouchForm.vue';
import editTouchForm from './components/forms/editTouchForm.vue';
import {Compact} from 'vue-color';


Vue.use(VeeValidate);

window.vm = new Vue({
    el: '#app-layout',
    components: {
        dncPlayer,
        newTouchForm,
        editTouchForm,
        'compact-picker': Compact,
    },
    data: {
        source: {},
        duration: 0,
        touch: {
            initialized: false,
            edit: false,
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
    },
    created()
    {
        this.source = window['source'];
        setState(state);
        setActions(actions);
        window.p = new p5(sketch);
        window.getSt = function () {
            return getState('*');
        }
    },
    mounted(){
        this.$refs.player.api().play();
    },
    methods: {
        onChangeColor(val){
            this.touch.color = val
        },
        startTouch(){
            this.touch.initialized = true;
            this.duration = Math.floor(this.$refs.player.api().duration());
            this.touch.start = Math.floor(this.$refs.player.api().currentTime());
        },
        endTouch(){
            if (this.touch.initialized) {
                this.touch.end = Math.floor(this.$refs.player.api().currentTime());
            }
        },
        editTouch(event, touch){
            this.touch = touch;
            this.touch.edit = true;
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
            this.resetTouch();
        },
        cancelEditTouch(){
            this.resetTouch();
        },
        resetTouch(){
            this.touch = {
                initialized: false,
                edit: false,
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
            };
        },
        forward(s){
            var forward = this.$refs.player.api().currentTime() + s;
            if (forward <= this.$refs.player.api().duration()) {
                this.$refs.player.api().currentTime(forward);
            } else {
                this.$refs.player.api().currentTime(this.$refs.player.api().duration());
            }
        },
        backward(s){
            var backward = this.$refs.player.api().currentTime() - s;
            if (backward >= 0) {
                this.$refs.player.api().currentTime(backward);
            } else {
                this.$refs.player.api().currentTime(0);
            }
        },
        moveTl(){
            dispatch('setTimelineStartY', 30);
        },
        toogleTl(){
            dispatch('setTimelineHide', !getState('timeline').hide);
        },
        removeAction(touch){
            if (touch) {
                dispatch('removeTouch', touch);
            }
        }
    }
})
;