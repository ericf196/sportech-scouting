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

    mousePressedTouch(x, y) {
        var aTouchIsSelected = false;
        for (var j = 0; j < this.state.touchManager.touches.length; j++) {
            this.state.touchManager.touches[j].isMousePresssedOver(x, y);
            if (this.state.touchManager.touches[j].isSelected) {
                aTouchIsSelected = true;
                vm.$refs.player.api().abLoopPlugin.setStart(this.state.touchManager.touches[j].start).setEnd(this.state.touchManager.touches[j].end).enable();
                vm.$refs.player.api().abLoopPlugin.goToStart();
                this.state.touchManager.selectedTouch = this.state.touchManager.touches[j];
            }
        }

        if (!aTouchIsSelected) {
            this.state.touchManager.selectedTouch = null;
            vm.$refs.player.api().abLoopPlugin.disable();
        }
    }

    endMouseDraggedTouch() {
        for (var j = 0; j < this.state.touchManager.touches.length; j++) {
            this.state.touchManager.touches[j].isDragged = false;
            this.state.touchManager.touches[j].isLocked = false;
            this.state.touchManager.touches[j].initstart = this.state.touchManager.touches[j].start;
            this.state.touchManager.touches[j].initDuration = this.state.touchManager.touches[j].end - this.state.touchManager.touches[j].start;
        }
    }
}


