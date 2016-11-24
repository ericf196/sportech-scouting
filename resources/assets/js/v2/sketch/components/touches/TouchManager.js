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
        var anTouchIsSelected = false;
        for (var j = 0; j < this.state.touchManager.touches.length; j++) {
            this.state.touchManager.touches[j].isMousePresssedOver(x, y);
            if (this.state.touchManager.touches[j].isSelected) {
                anTouchIsSelected = true;
                this.state.touchManager.selectedTouch = this.state.touchManager.touches[j];
            }
        }

        if (!anTouchIsSelected) {
            this.state.touchManager.selectedTouch = null;
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


