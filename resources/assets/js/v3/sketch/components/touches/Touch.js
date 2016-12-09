import UuidUtil from '../utils/UuidUtil'
import SecondsUtil from '../utils/SecondsUtil'
import TimeConverter from '../utils/TimeConverter'
import Action from './Action'
import {getState, dispatch} from 'mockstate';

export default class Touch {
    constructor(start, end, text, color, actions) {
        this.state = getState('*');
        var uuid = new UuidUtil();
        this.id = uuid.generateUUID();
        this.start = start;
        this.end = end;
        this.color = color;
        this.text = text;
        this.mouseIsOver = false;
        this.isSelected = false;
        this.x = null;
        this.y = null;
        this.width = 0;
        this.height = 0;
        this.limitTextY = 30 + this.state.timeline.startY;
        this.actions = actions ? actions : []
    }

    draw() {
        this.x = this.calculateX();
        this.y = this.y ? this.y : this.calculateY();
        this.width = this.calculateWidth();
        this.height = this.calculateHeight();

        if (this.isSelected) {
            this.color.rgba.alpha = 100;
            p.noStroke();
            p.textSize(12);
            p.textStyle(p.NORMAL);
            p.fill(this.color.rgba.r, this.color.rgba.g, this.color.rgba.b, 100);
            p.rect(this.x + this.width - 30, this.limitTextY, 60, 15);
            p.rect(this.x - 30, this.limitTextY, 60, 15);
            p.fill(255, 255, 255, 100);
            p.textStyle(p.BOLD);
            p.text(TimeConverter.toHHMMSS(this.start), this.x - 30, this.limitTextY, 60, 20);
            p.text(TimeConverter.toHHMMSS(this.end), this.x - 30 + this.width, this.limitTextY, 60, 20);
            p.textAlign(p.CENTER);
            p.stroke(p.color(this.color.rgba.r, this.color.rgba.g, this.color.rgba.b))
            p.strokeWeight(2)
            p.line(this.x, this.limitTextY + 20, this.x, this.state.timeline.endY);
            p.line(this.x + this.width, this.limitTextY + 20, this.x + this.width, this.state.timeline.endY);
        }

        if (this.end - this.state.timeline.startTime > 0) {
            p.fill(255);
            p.fill(this.color.rgba.r, this.color.rgba.g, this.color.rgba.b, this.color.rgba.alpha);  // Use color variable 'c' as fill color
            p.noStroke();  // Don't draw a stroke around shapes
            p.rect(this.x, this.y, this.width, this.height);  // Draw rectangle
            p.strokeWeight(0);
            p.textSize(12);
            p.textStyle(p.NORMAL);
            p.fill(255, 255, 255, this.color.rgba.alpha);  // Use color variable 'c' as fill color
            p.rect(this.x + 2, this.y + 1, this.width - 4, 20);  // Draw rectangle
            p.fill(0, 0, 0, this.color.rgba.alpha);
            p.text(this.text, this.x + 2, this.y + 1, this.width - 4, 20);
            p.textAlign(p.CENTER);
            p.fill(0, 0, 0, 100);
        }
    }

    drawActions() {
        for (var j = 0; j < this.actions.length; j++) {
            this.actions[j].draw();
        }
    }

    editPressed(touch, event) {
        event.preventDefault();
        dispatch('setSelectedTouch', touch);
        vm.editTouch(event, touch);
    }

    isMouseOver(x, y) {
        if (x >= this.x && x <= (this.x + this.width) && y >= this.y && y <= (this.y + this.height)) {
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
            if (y >= this.state.timeline.startY) {
                if (x >= this.x && x <= (this.x + this.width) && y >= this.y && y <= (this.y + this.height)) {
                    this.isSelected = true;
                    vm.toogleInspector(true);
                    vm.$refs.player.api().abLoopPlugin.setStart(this.start).setEnd(this.end).enable();
                    vm.$refs.player.api().abLoopPlugin.goToStart();
                    vm.$refs.player.api().play();
                    dispatch('setSelectedTouch', this)
                } else {
                    this.isSelected = false;
                }
            }
        }
    }


    calculateX() {
        var start = (this.start - this.state.timeline.startTime) * this.state.timeline.secondWidth;
        if (start < 0) {
            return 30;
        }

        return start + 30
    }

    calculateY() {
        return 61 + this.state.timeline.startY;
    }

    calculateWidth() {
        var start = (this.start - this.state.timeline.startTime) * this.state.timeline.secondWidth;
        if (start < 0) {
            return (this.end - this.state.timeline.startTime) * this.state.timeline.secondWidth;
        }
        return (this.end - this.start) * this.state.timeline.secondWidth;
    }

    calculateHeight() {
        return 60;
    }

    getFormatedStart() {
        TimeConverter.toHHMMSS(this.start)
    }
}


