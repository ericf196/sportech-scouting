import TimeConverter from '../utils/TimeConverter'
import {getState, dispatch} from 'mockstate';

export default class Timeline {
    constructor(startY, height) {
        this.state = getState('*');
        dispatch('setTimelineStartY', startY);
        dispatch('setTimelineStartX', 30);
        dispatch('setTimelineHeight', height);
        this.startDelta = 0;
        var menu = p.select('#toolbar');
        this.menuEl = p.createDiv(menu.html());
        this.canvaContainer = p.select('#timeline');
        this.canvaContainer.child(this.menuEl);
        this.menuEl.position(this.canvaContainer.position().x, this.state.timeline.startY - 30);
        this.menuEl.size(p.width, 30)
    }

    draw() {
        if (!this.state.timeline.hide) {
            dispatch('setColWidth', this.calculateColWidth());
            dispatch('setTimelineEndX', 0);
            this.menuEl.position(this.canvaContainer.position().x, this.state.timeline.startY - 30);
            p.strokeWeight(0);
            p.stroke(1);
            p.fill(0, 0, 0);
            p.textSize(12);
            p.textStyle(p.NORMAL);
            p.text(TimeConverter.toHHMMSS(this.state.player.duration), this.state.timeline.endX - 20, this.state.timeline.startY + 30, 40, 20);
            p.textAlign(p.CENTER);

            p.stroke(0);
            p.strokeWeight(1);
            p.line(this.state.timeline.startX, this.state.timeline.axisY, this.state.timeline.width, this.state.timeline.axisY);
            for (var i = 0; i <= this.state.timeline.width + this.state.timeline.startTime * this.state.timeline.secondWidth - 30; i += this.state.timeline.colWidth) {
                var x = i + this.state.timeline.startX;
                var newX = x - this.state.timeline.startTime * this.state.timeline.secondWidth;

                if (i == 0) {
                    this.drawMinuteLabel(this.state.timeline.startTime, x);
                    this.drawMinuteLine(x);
                } else if (i % (this.state.timeline.colWidth * 6) == 0) {
                    if (newX >= 30) {
                        this.drawMinuteLabel(i, newX);
                        this.drawMinuteLine(newX);
                    }
                } else {
                    if (newX >= 30) {
                        if (this.state.timeline.showSecondsInterval) {
                            this.drawMiddleSecondLabel(i, newX);
                        }
                        this.drawMiddleSecondLine(newX);
                    }
                }


                if (this.state.timeline.showSeconds) {
                    this.drawMiddleSecondLabel(i, newX);
                    this.drawSecondLine(x);
                }
            }
            p.stroke('red');
            p.strokeWeight(2)
            p.line(this.state.timeline.endX, this.state.timeline.startY + 45, this.state.timeline.endX, this.state.timeline.axisY);
            p.line(this.state.timeline.endX, this.state.timeline.axisY, this.state.timeline.endX, this.state.timeline.endY);
        }
    }

    mouseOver() {
        if (!this.state.timeline.hide) {
            if (p.mouseX >= 30 && p.mouseX <= this.state.canvas.width - 30 && p.mouseY >= this.state.timeline.startY && p.mouseY <= this.state.timeline.endY) {
                p.cursor(p.HAND);
                dispatch('setTimelineMouseOver', true);
            } else {
                p.cursor(p.ARROW);
                dispatch('setTimelineMouseOver', false);
            }
        }
    }

    drag() {
        if (!this.state.timeline.hide) {

            var startDelta = (p.pmouseX - p.mouseX);
            if (this.startDelta != startDelta) {
                var start = this.state.timeline.startTime + (startDelta) / this.state.timeline.secondWidth;
                if (start < 0) {
                    dispatch('setTimelineStartTime', 0)
                } else {
                    dispatch('setTimelineStartTime', Math.floor(start))
                }
                this.startDelta = startDelta;
            }
        }
    }

    drawSecondLine(x) {
        for (var j = 0; j < this.state.timeline.colWidth; j += this.state.timeline.colWidth / 10) {
            if ((x + j) < this.state.timeline.width && j) {
                p.stroke(0);
                p.strokeWeight(1);
                p.line(x + j, this.state.timeline.secondsY + 5, x + j, this.state.timeline.axisY);
                p.stroke(230);
                p.strokeWeight(1);
                p.line(x + j, this.state.timeline.secondsY, x + j, this.state.timeline.endY);
            }
        }
        return j;
    }

    drawMiddleSecondLine(x) {
        p.stroke(0);
        p.strokeWeight(1)
        p.line(x, this.state.timeline.secondsY, x, this.state.timeline.axisY);
        p.stroke(230);
        p.strokeWeight(1)
        p.line(x, this.state.timeline.axisY, x, this.state.timeline.endY);
    }

    drawMiddleSecondLabel(i, x) {
        p.stroke(230);
        p.strokeWeight(0);
        p.textSize(10);
        p.textStyle(p.NORMAL);
        p.text(TimeConverter.toSS(i / this.state.timeline.secondWidth) + ' s', x - 20, this.state.timeline.secondsY - 10, 40, 20);
        p.textAlign(p.CENTER);
    }

    drawMinuteLine(x) {
        p.stroke(0);
        p.strokeWeight(2)
        p.line(x, this.state.timeline.startY + 20, x, this.state.timeline.axisY);
        p.stroke(230);
        p.strokeWeight(2)
        p.line(x, this.state.timeline.axisY, x, this.state.timeline.endY);
    }

    drawMinuteLabel(i, x) {
        p.strokeWeight(0);
        p.textSize(12);
        p.textStyle(p.NORMAL);
        p.text(TimeConverter.toHHMMSS(Math.round(i / this.state.timeline.secondWidth)), x - 20, this.state.timeline.minutesY, 40, 20);
        p.textAlign(p.CENTER);
    }

    calculateColWidth() {
        var minutes = ( this.state.player.duration + 30) / 60;
        return Math.floor((this.state.canvas.width / minutes) / 6) * this.state.timeline.zoomFactor;
    }

    getStartTime() {
        return this.state.timeline.startTime;
    }
}

