import UuidUtil from '../utils/UuidUtil'
import SecondsUtil from '../utils/SecondsUtil'
import TimeConverter from '../utils/TimeConverter'
import {getState, dispatch} from 'mockstate';

export default class Action {
    constructor(start, end, color) {
        this.state = getState('*');
        var uuid = new UuidUtil();
        this.id = uuid.generateUUID();
        this.start = start;
        this.end = end;
        this.color = color;
        this.mouseIsOver = false;
        this.isSelected = false;
        this.x = null;
        this.y = null;
        this.width = 0;
        this.height = 0;
        this.limitTextY = 30 + this.state.touchManager.inspector.timeline.startY;
        this.secondsUtil = new SecondsUtil();
        this.canvaContainer = null;
        this.leftTags = []
        this.rightTags = []
    }

    draw() {
        this.x = this.calculateX();
        this.y = this.y ? this.y : this.calculateY();
        this.width = this.calculateWidth();
        this.height = this.calculateHeight();

        if (this.isSelected) {
            this.color.rgba.alpha = 100;
            inspector.noStroke();
            inspector.textSize(12);
            inspector.textStyle(inspector.NORMAL);
            inspector.fill(this.color.rgba.r, this.color.rgba.g, this.color.rgba.b, 100);
            inspector.rect(this.x + this.width - 30, this.limitTextY, 60, 15);
            inspector.rect(this.x - 30, this.limitTextY, 60, 15);
            inspector.fill(255, 255, 255, 100);
            inspector.textStyle(inspector.BOLD);
            inspector.text(TimeConverter.toHHMMSS(this.start), this.x - 30, this.limitTextY, 60, 20);
            inspector.text(TimeConverter.toHHMMSS(this.end), this.x - 30 + this.width, this.limitTextY, 60, 20);
            inspector.textAlign(inspector.CENTER);
            inspector.stroke(inspector.color(this.color.rgba.r, this.color.rgba.g, this.color.rgba.b))
            inspector.strokeWeight(2)
            inspector.line(this.x, this.limitTextY + 20, this.x, this.state.touchManager.inspector.timeline.endY);
            inspector.line(this.x + this.width, this.limitTextY + 20, this.x + this.width, this.state.touchManager.inspector.timeline.endY);
        }

        if (this.end - this.state.touchManager.inspector.timeline.startTime > 0) {
            inspector.fill(255);
            inspector.fill(this.color.rgba.r, this.color.rgba.g, this.color.rgba.b, this.color.rgba.alpha);  // Use color variable 'c' as fill color
            inspector.strokeWeight(1);
            inspector.stroke(51);
            inspector.stroke(this.color.rgba.r * 0.75, this.color.rgba.g * 0.75, this.color.rgba.b * 0.75);
            inspector.rect(this.x, this.y, this.width, this.height);  // Draw rectangle
            inspector.rect(this.x, this.y + 60, this.width, this.height);  // Draw rectangle

            inspector.fill(0, 0, 0, 100);
        }
    }

    editPressed(action, event) {
        event.preventDefault();
        dispatch('setSelectedAction', action);
        vm.editTouch(event, action);
    }

    isMouseOver(x, y) {
        if (x >= this.x && x <= (this.x + this.width) && y >= this.y && y <= (this.y + this.height * 2)) {
            this.color.rgba.alpha = 100;
            this.mouseIsOver = true;
        } else {
            this.color.rgba.alpha = 50;
            this.mouseIsOver = false;
        }
        return this.mouseIsOver;
    }

    isMousePresssedOver(x, y) {
        if (!this.state.touchManager.recordingAction && !this.state.touchManager.recordingTouch) {
            if (y >= this.state.touchManager.inspector.timeline.startY) {
                if (x >= this.x && x <= (this.x + this.width) && y >= this.y && y <= (this.y + this.height * 2)) {
                    this.isSelected = true;
                    vm.$refs.player.api().abLoopPlugin.setStart(this.start).setEnd(this.end).enable();
                    vm.$refs.player.api().abLoopPlugin.goToStart();
                    dispatch('setSelectedAction', this)
                } else {
                    this.isSelected = false;
                }
            }
        }
    }


    calculateX() {
        var start = (this.start - this.state.touchManager.inspector.timeline.startTime) * this.state.touchManager.inspector.timeline.secondWidth;
        return start + this.state.touchManager.inspector.timeline.startX;
    }

    calculateY() {
        return 61 + this.state.touchManager.inspector.timeline.startY;
    }

    calculateWidth() {
        var start = (this.start - this.state.touchManager.inspector.timeline.startTime) * this.state.touchManager.inspector.timeline.secondWidth;
        if (start < 0) {
            return (this.end - this.state.touchManager.inspector.timeline.startTime) * this.state.touchManager.inspector.timeline.secondWidth;
        }
        return (this.end - this.start) * this.state.touchManager.inspector.timeline.secondWidth;
    }

    calculateHeight() {
        return 60;
    }
}


