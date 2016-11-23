require('../bootstrap');
import sketch from './sketch/sketch'
import {setState, setActions, getState} from 'mockstate';
import {actions} from './stores/actions'
import {state} from './stores/store'
setState(state);

setActions(actions);

window.p = new p5(sketch);
window.getSt = function () {
    return getState('*');
}
