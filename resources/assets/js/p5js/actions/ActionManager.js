export default class ActionManager {
    constructor(actions, endTime, height) {
        this.actions = actions ? actions : [];
        this.endVideo = endTime;
        this.canvasHeight = height;
        this.selectedAction = null
    }

    add(action) {
        this.actions.push(action);
    }

    remove(action) {

        var actionIndex = this.actions.indexOf(action)
        if (actionIndex > -1) {
            this.actions.splice(actionIndex, 1);
        }
    }

    setTimelineWidth(timelineWidth) {
        this.timelineWidth = timelineWidth
    }

    setSecondWidth(secondWidth) {
        this.secondWidth = secondWidth
    }

    setStartTime(startTime) {
        this.startTime = startTime
    }

    setEndVideo(endVideo) {
        this.endVideo = endVideo
    }


    draw(zoomFactorChange, isDragged) {
        this.actions = this.actions.sort(this.dynamicSort('y'));
        for (var j = 0; j < this.actions.length; j++) {
            this.actions[j].draw(this.secondWidth, this.actions, zoomFactorChange, this.startTime, this.canvasHeight);
        }
        if (!zoomFactorChange) {
            for (var j = 0; j < this.actions.length; j++) {
                for (var i = 0; i < this.actions.length; i++) {
                    if (this.actions[j].id != this.actions[i].id) { //dont do the check if it is looking at itself
                        var hit = p.collideRectRect(this.actions[j].x, this.actions[j].y, this.actions[j].width, this.actions[j].height,
                            this.actions[i].x, this.actions[i].y, this.actions[i].width, this.actions[i].height)
                        if (hit && !this.actions[j].isLocked && !this.actions[j].isDragged) { // if we ever get a true we have to try again, this works since we iterate down through the objects one by one.
                            this.actions[j].y = this.actions[j].y + 61
                            i = 0;
                        }
                    }
                }
            }
        }
    }

    mouseOverAction(x, y) {
        for (var j = 0; j < this.actions.length; j++) {
            this.actions[j].isMouseOver(x, y);
            this.actions[j].isMouseResize(x, y);
        }
    }

    mousePressedAction(x, y) {
        var anActionIsSelected = false;
        for (var j = 0; j < this.actions.length; j++) {
            this.actions[j].isMousePresssedOver(x, y);
            this.actions[j].isBeingDragged(x, y);
            if (this.actions[j].isSelected) {
                anActionIsSelected = true;
                this.selectedAction = this.actions[j];
            }
        }

        if (!anActionIsSelected) {
            this.selectedAction = null;
        }
    }

    mouseDraggedAction(x, y) {
        var objDragged = false;
        for (var j = 0; j < this.actions.length; j++) {
            objDragged = this.actions[j].newPosition(x, y, this.endVideo);
            if (objDragged) {
                objDragged = this.actions[j];
                break;
            }
        }
        if (objDragged) {
            objDragged.updatePosition(objDragged.newX, objDragged.newY, objDragged.newWidth);
            return true;
        } else {
            return false;
        }
    }

    endMouseDraggedAction() {
        for (var j = 0; j < this.actions.length; j++) {
            this.actions[j].isDragged = false;
            this.actions[j].isLocked = false;
            this.actions[j].initstart = this.actions[j].start;
            this.actions[j].initDuration = this.actions[j].end - this.actions[j].start;
        }
    }

    dynamicSort(property) {
        var sortOrder = 1;
        if (property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a, b) {
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    }

}


