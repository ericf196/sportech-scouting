import {getState, dispatch} from 'mockstate';

export default class TouchManager {
    constructor(touches) {
        this.state = getState('*');
        dispatch('setTouches', touches ? touches : []);
    }

    add(touch) {
        dispatch('addTouch', touch);
    }

    remove(touch) {
        dispatch('removeTouch', touch);
    }

    draw() {
        for (var j = 0; j < this.state.touchManager.touches.length; j++) {
            this.state.touchManager.touches[j].draw();
        }
    }

    mouseOverTouch(x, y) {
        for (var j = 0; j < this.state.touchManager.touches.length; j++) {
            this.state.touchManager.touches[j].isMouseOver(x, y);
        }
    }

    mouseOverAction(x, y) {
        if (this.state.touchManager.selectedTouch) {

            for (var j = 0; j < this.state.touchManager.selectedTouch.actions.length; j++) {
                this.state.touchManager.selectedTouch.actions[j].isMouseOver(x, y);
            }
        }
    }

    mousePressedTouch(x, y) {
        var aTouchIsSelected = false;
        for (var j = 0; j < this.state.touchManager.touches.length; j++) {
            this.state.touchManager.touches[j].isMousePresssedOver(x, y);
            if (this.state.touchManager.touches[j].isSelected) {
                aTouchIsSelected = true;
            }
        }

        if (!aTouchIsSelected) {
            dispatch('setSelectedTouch', null)
            vm.$refs.player.api().abLoopPlugin.disable();
        }
    }

    mousePressedAction(x, y) {
        var anActionIsSelected = false;
        if (this.state.touchManager.selectedTouch) {
            for (var j = 0; j < this.state.touchManager.selectedTouch.actions.length; j++) {
                this.state.touchManager.selectedTouch.actions[j].isMousePresssedOver(x, y);
                if (this.state.touchManager.selectedTouch.actions[j].isSelected) {
                    anActionIsSelected = true;
                }
            }

            if (!anActionIsSelected) {
                dispatch('setSelectedAction', null)
                vm.$refs.player.api().abLoopPlugin.disable();
            }
        }
    }
}


