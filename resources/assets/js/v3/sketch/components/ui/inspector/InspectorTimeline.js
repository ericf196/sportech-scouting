import TimeConverter from '../../utils/TimeConverter'
import {getState, dispatch} from 'mockstate';

export default class InspectorTimeline {
    constructor(startY, height) {
        this.state = getState('*');
        dispatch('setInspectorStartY', startY);
        dispatch('setInspectorStartX', 120);
        dispatch('setInspectorHeight', height);
        this.startDelta = 0;
    }

    draw() {
        dispatch('setInspectorColWidth', this.calculateColWidth());
        dispatch('setInspectorEndX', (this.state.touchManager.selectedTouch.end - this.state.touchManager.selectedTouch.start) * this.state.touchManager.inspector.timeline.secondWidth + this.state.touchManager.inspector.timeline.startX);
        dispatch('setInspectorStartTime', this.state.touchManager.selectedTouch.start)
        inspector.strokeWeight(0);
        inspector.stroke(1);
        inspector.fill(0, 0, 0);
        inspector.textSize(12);
        inspector.textStyle(p.NORMAL);
        inspector.text(TimeConverter.toHHMMSS(this.state.touchManager.selectedTouch.end), this.state.touchManager.inspector.timeline.endX - 20, this.state.touchManager.inspector.timeline.startY + 30, 40, 20);
        inspector.textAlign(p.CENTER);

        inspector.stroke(0);
        inspector.strokeWeight(1);
        inspector.line(this.state.touchManager.inspector.timeline.startX, this.state.touchManager.inspector.timeline.axisY, this.state.touchManager.inspector.timeline.width, this.state.touchManager.inspector.timeline.axisY);
        for (var i = 0; i <= this.state.touchManager.inspector.timeline.width + this.state.touchManager.selectedTouch.start * this.state.touchManager.inspector.timeline.secondWidth - 30; i += this.state.touchManager.inspector.timeline.colWidth) {
            var x = i + this.state.touchManager.inspector.timeline.startX;
            var newX = x - this.state.touchManager.inspector.timeline.startTime * this.state.touchManager.inspector.timeline.secondWidth;

            if (i == 0) {
                this.drawStartLabel(this.state.touchManager.inspector.timeline.startTime, x);
                this.drawMinuteLine(x);
            } else if (i % (this.state.touchManager.inspector.timeline.colWidth * 6) == 0) {
                if (newX >= 120) {
                    this.drawMinuteLabel(i, newX);
                    this.drawMinuteLine(newX);
                }
            } else {
                if (newX >= 120) {
                    if (this.state.touchManager.inspector.timeline.showSecondsInterval) {
                        this.drawMiddleSecondLabel(i, newX);
                    }
                    this.drawMiddleSecondLine(newX);
                }
            }


            if (this.state.touchManager.inspector.timeline.showSeconds) {
                this.drawMiddleSecondLabel(i, newX);
                this.drawSecondLine(x);
            }
        }
        inspector.stroke('red');
        inspector.strokeWeight(2)
        inspector.line(this.state.touchManager.inspector.timeline.endX, this.state.touchManager.inspector.timeline.startY + 45, this.state.touchManager.inspector.timeline.endX, this.state.touchManager.inspector.timeline.axisY);
        inspector.line(this.state.touchManager.inspector.timeline.endX, this.state.touchManager.inspector.timeline.axisY, this.state.touchManager.inspector.timeline.endX, this.state.touchManager.inspector.timeline.endY);
    }

    mouseOver() {
        if (!this.state.touchManager.inspector.timeline.hide) {
            if (inspector.mouseX >= 30 && inspector.mouseX <= this.state.canvas.width - 30 && inspector.mouseY >= this.state.touchManager.inspector.timeline.startY && inspector.mouseY <= this.state.touchManager.inspector.timeline.endY) {
                inspector.cursor(inspector.HAND);
                // dispatch('setTimelineMouseOver', true);
            } else {
                inspector.cursor(inspector.ARROW);
                //  dispatch('setTimelineMouseOver', false);
            }
        }
    }

    drag() {
        if (!this.state.touchManager.inspector.timeline.hide) {

            var startDelta = (inspector.pmouseX - inspector.mouseX);
            if (this.startDelta != startDelta) {
                var start = this.state.touchManager.selectedTouch.start + (startDelta) / this.state.touchManager.inspector.timeline.secondWidth;
                if (start < 0) {
                    //      dispatch('setTimelineStartTime', 0)
                } else {
                    //      dispatch('setTimelineStartTime', Math.floor(start))
                }
                this.startDelta = startDelta;
            }
        }
    }

    drawSecondLine(x) {
        for (var j = 0; j < this.state.touchManager.inspector.timeline.colWidth; j += this.state.touchManager.inspector.timeline.colWidth / 10) {
            if ((x + j) < this.state.touchManager.inspector.timeline.width && j) {
                inspector.stroke(0);
                inspector.strokeWeight(1);
                inspector.line(x + j, this.state.touchManager.inspector.timeline.secondsY + 5, x + j, this.state.touchManager.inspector.timeline.axisY);
                inspector.stroke(230);
                inspector.strokeWeight(1);
                inspector.line(x + j, this.state.touchManager.inspector.timeline.secondsY, x + j, this.state.touchManager.inspector.timeline.endY);
            }
        }
        return j;
    }

    drawMiddleSecondLine(x) {
        inspector.stroke(0);
        inspector.strokeWeight(1)
        inspector.line(x, this.state.touchManager.inspector.timeline.secondsY, x, this.state.touchManager.inspector.timeline.axisY);
        inspector.stroke(230);
        inspector.strokeWeight(1)
        inspector.line(x, this.state.touchManager.inspector.timeline.axisY, x, this.state.touchManager.inspector.timeline.endY);
    }

    drawMiddleSecondLabel(i, x) {
        inspector.stroke(230);
        inspector.strokeWeight(0);
        inspector.textSize(10);
        inspector.textStyle(inspector.NORMAL);
        inspector.text(TimeConverter.toSS(i / this.state.touchManager.inspector.timeline.secondWidth) + ' s', x - 20, this.state.touchManager.inspector.timeline.secondsY - 10, 40, 20);
        inspector.textAlign(inspector.CENTER);
    }

    drawMinuteLine(x) {
        inspector.stroke(0);
        inspector.strokeWeight(2)
        inspector.line(x, this.state.touchManager.inspector.timeline.startY + 20, x, this.state.touchManager.inspector.timeline.axisY);
        inspector.stroke(230);
        inspector.strokeWeight(2)
        inspector.line(x, this.state.touchManager.inspector.timeline.axisY, x, this.state.touchManager.inspector.timeline.endY);
    }

    drawMinuteLabel(i, x) {
        inspector.strokeWeight(0);
        inspector.textSize(12);
        inspector.textStyle(inspector.NORMAL);
        inspector.text(TimeConverter.toHHMMSS(Math.round(i / this.state.touchManager.inspector.timeline.secondWidth)), x - 20, this.state.touchManager.inspector.timeline.minutesY, 40, 20);
        inspector.textAlign(inspector.CENTER);
    }

    drawStartLabel(startTime, x) {
        inspector.strokeWeight(0);
        inspector.textSize(12);
        inspector.textStyle(inspector.NORMAL);
        inspector.text(TimeConverter.toHHMMSS(startTime), x - 20, this.state.touchManager.inspector.timeline.minutesY, 40, 20);
        inspector.textAlign(inspector.CENTER);
    }

    calculateColWidth() {
        var minutes = ( this.state.touchManager.selectedTouch.end - this.state.touchManager.selectedTouch.start) / 60;
        return Math.floor(((this.state.canvas.width - this.state.touchManager.inspector.timeline.startX - 30) / minutes) / 6);
    }

    getStartTime() {
        return this.state.touchManager.selectedTouch.start;
    }
}