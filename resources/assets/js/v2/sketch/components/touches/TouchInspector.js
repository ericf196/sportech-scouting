import {getState, dispatch} from 'mockstate';
import TimeConverter from '../utils/TimeConverter'
export default class TouchInspector {
    constructor(touches) {
        this.state = getState('*');
        dispatch('setTouchInspectorStartY', 0);
        var menu = p.select('#touch-inspector-toolbar');
        var menuEl = p.createDiv(menu.html());
        var canvaContainer = p.select('#timeline');
        canvaContainer.child(menuEl);
        menuEl.position(canvaContainer.position().x, canvaContainer.position().y + this.state.touchManager.touchInspector.startY);
        menuEl.size(p.width, 30)
    }

    draw() {

        if (this.state.touchManager.selectedAction) {
            var selected = this.state.touchManager.selectedAction;
            p.fill(selected.color.rgba.r, selected.color.rgba.g, selected.color.rgba.b, 50)
            p.rect(this.state.touchManager.touchInspector.timeline.startX + 120,
                this.state.touchManager.touchInspector.timeline.startY,
                p.width - 60, this.state.touchManager.touchInspector.height)
        }

    }

    drawSecondLine(x) {
        for (var j = 0; j < this.state.touchManager.touchInspector.timeline.colWidth; j += this.state.touchManager.touchInspector.timeline.colWidth / 10) {
            if ((x + j) < this.state.touchManager.touchInspector.timeline.width && j) {
                p.stroke(0);
                p.strokeWeight(1);
                p.line(x + j, this.state.touchManager.touchInspector.timeline.secondsY + 5, x + j, this.state.touchManager.touchInspector.timeline.axisY);
                p.stroke(230);
                p.strokeWeight(1);
                p.line(x + j, this.state.touchManager.touchInspector.timeline.secondsY, x + j, this.state.touchManager.touchInspector.timeline.endY);
            }
        }
        return j;
    }

    drawMiddleSecondLine(x) {
        p.stroke(0);
        p.strokeWeight(1)
        p.line(x, this.state.touchManager.touchInspector.timeline.secondsY, x, this.state.touchManager.touchInspector.timeline.axisY);
        p.stroke(230);
        p.strokeWeight(1)
        p.line(x, this.state.touchManager.touchInspector.timeline.axisY, x, this.state.touchManager.touchInspector.timeline.endY);
    }

    drawMiddleSecondLabel(i, x) {
        p.stroke(230);
        p.strokeWeight(0);
        p.textSize(10);
        p.textStyle(p.NORMAL);
        p.text(TimeConverter.toSS(i / this.state.touchManager.touchInspector.timeline.secondWidth) + ' s', x - 20, this.state.touchManager.touchInspector.timeline.secondsY - 10, 40, 20);
        p.textAlign(p.CENTER);
    }

    drawMinuteLine(x) {
        p.stroke(0);
        p.strokeWeight(2)
        p.line(x, this.state.touchManager.touchInspector.timeline.startY + 20, x, this.state.touchManager.touchInspector.timeline.axisY);
        p.stroke(230);
        p.strokeWeight(2)
        p.line(x, this.state.touchManager.touchInspector.timeline.axisY, x, this.state.touchManager.touchInspector.timeline.endY);
    }

    drawMinuteLabel(i, x) {
        p.strokeWeight(0);
        p.textSize(12);
        p.textStyle(p.NORMAL);
        p.text(TimeConverter.toHHMMSS(Math.round(i / this.state.touchManager.touchInspector.timeline.secondWidth)), x - 20, this.state.touchManager.touchInspector.timeline.minutesY, 40, 20);
        p.textAlign(p.CENTER);
    }

    calculateColWidth() {
        var minutes = ( this.state.touchManager.selectedAction.end - this.state.touchManager.selectedAction.start + 30) / 60;
        return Math.floor((this.state.canvas.width / minutes) / 6);
    }

    getStartTime() {
        return this.state.touchManager.touchInspector.timeline.startTime;
    }
}


