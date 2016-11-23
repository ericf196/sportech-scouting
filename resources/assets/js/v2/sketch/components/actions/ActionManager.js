import {getState, dispatch} from 'mockstate';

export default class ActionManager {
    constructor(actions) {
        this.state = getState('*');
        dispatch('setActions', actions ? actions : []);
    }

    add(action) {
        dispatch('addAction', action);
    }

    remove(action) {
        dispatch('removeAction', action);
    }

    draw() {
        for (var j = 0; j < this.state.actionManager.actions.length; j++) {
            this.state.actionManager.actions[j].draw();
        }
    }

    mouseOverAction(x, y) {
        for (var j = 0; j < this.state.actionManager.actions.length; j++) {
            this.state.actionManager.actions[j].isMouseOver(x, y);
        }
    }

    mousePressedAction(x, y) {
        var anActionIsSelected = false;
        for (var j = 0; j < this.state.actionManager.actions.length; j++) {
            this.state.actionManager.actions[j].isMousePresssedOver(x, y);
            if (this.state.actionManager.actions[j].isSelected) {
                anActionIsSelected = true;
                this.state.actionManager.selectedAction = this.state.actionManager.actions[j];
            }
        }

        if (!anActionIsSelected) {
            this.state.actionManager.selectedAction = null;
        }
    }

    endMouseDraggedAction() {
        for (var j = 0; j < this.state.actionManager.actions.length; j++) {
            this.state.actionManager.actions[j].isDragged = false;
            this.state.actionManager.actions[j].isLocked = false;
            this.state.actionManager.actions[j].initstart = this.state.actionManager.actions[j].start;
            this.state.actionManager.actions[j].initDuration = this.state.actionManager.actions[j].end - this.state.actionManager.actions[j].start;
        }
    }
}


