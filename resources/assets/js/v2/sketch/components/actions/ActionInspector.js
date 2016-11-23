import {getState, dispatch} from 'mockstate';
import TimeUtil from '../utils/TimeUtil'
import TimeConverter from '../utils/TimeConverter'
export default class ActionInspector {
    constructor(actions) {
        this.state = getState('*');
        var menu = p.select('#action-inspector-toolbar');
        var menuEl = p.createDiv(menu.html());
        var canvaContainer = p.select('#timeline');
        canvaContainer.child(menuEl);
        menuEl.position(canvaContainer.position().x, canvaContainer.position().y + this.state.actionManager.actionInspector.startY);
        menuEl.size(p.width, 30)
    }

    draw() {

        if (this.state.actionManager.selectedAction) {
            var selected = this.state.actionManager.selectedAction;
            p.fill(selected.color.rgba.r, selected.color.rgba.g, selected.color.rgba.b, 50)
            p.rect(this.state.actionManager.actionInspector.timeline.startX + 120,
                this.state.actionManager.actionInspector.timeline.startY,
                p.width - 60, this.state.actionManager.actionInspector.height)
        }

    }

    drawSecondLine(x) {
        for (var j = 0; j < this.state.actionManager.actionInspector.timeline.colWidth; j += this.state.actionManager.actionInspector.timeline.colWidth / 10) {
            if ((x + j) < this.state.actionManager.actionInspector.timeline.width && j) {
                p.stroke(0);
                p.strokeWeight(1);
                p.line(x + j, this.state.actionManager.actionInspector.timeline.secondsY + 5, x + j, this.state.actionManager.actionInspector.timeline.axisY);
                p.stroke(230);
                p.strokeWeight(1);
                p.line(x + j, this.state.actionManager.actionInspector.timeline.secondsY, x + j, this.state.actionManager.actionInspector.timeline.endY);
            }
        }
        return j;
    }

    drawMiddleSecondLine(x) {
        p.stroke(0);
        p.strokeWeight(1)
        p.line(x, this.state.actionManager.actionInspector.timeline.secondsY, x, this.state.actionManager.actionInspector.timeline.axisY);
        p.stroke(230);
        p.strokeWeight(1)
        p.line(x, this.state.actionManager.actionInspector.timeline.axisY, x, this.state.actionManager.actionInspector.timeline.endY);
    }

    drawMiddleSecondLabel(i, x) {
        p.stroke(230);
        p.strokeWeight(0);
        p.textSize(10);
        p.textStyle(p.NORMAL);
        p.text(TimeConverter.toSS(i / this.state.actionManager.actionInspector.timeline.secondWidth) + ' s', x - 20, this.state.actionManager.actionInspector.timeline.secondsY - 10, 40, 20);
        p.textAlign(p.CENTER);
    }

    drawMinuteLine(x) {
        p.stroke(0);
        p.strokeWeight(2)
        p.line(x, this.state.actionManager.actionInspector.timeline.startY + 20, x, this.state.actionManager.actionInspector.timeline.axisY);
        p.stroke(230);
        p.strokeWeight(2)
        p.line(x, this.state.actionManager.actionInspector.timeline.axisY, x, this.state.actionManager.actionInspector.timeline.endY);
    }

    drawMinuteLabel(i, x) {
        p.strokeWeight(0);
        p.textSize(12);
        p.textStyle(p.NORMAL);
        p.text(TimeConverter.toHHMMSS(Math.round(i / this.state.actionManager.actionInspector.timeline.secondWidth)), x - 20, this.state.actionManager.actionInspector.timeline.minutesY, 40, 20);
        p.textAlign(p.CENTER);
    }

    calculateColWidth() {
        var minutes = ( this.state.actionManager.selectedAction.end - this.state.actionManager.selectedAction.start + 30) / 60;
        return Math.floor((this.state.canvas.width / minutes) / 6);
    }

    getStartTime() {
        return this.state.actionManager.actionInspector.timeline.startTime;
    }
}


