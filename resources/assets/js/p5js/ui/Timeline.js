import TimeUtil from '../utils/TimeUtil'
import TimeConverter from '../utils/TimeConverter'

export default class Timeline {
    constructor(canvasWidth, canvasHeight, endTime, zoomFactor) {
        this.canvasHeight = canvasHeight;
        this.canvasWidth = canvasWidth;
        this.zoomFactor = zoomFactor;
        this.timelineWidth = canvasWidth - 30;
        this.showSecondsInterval = this.colWidth > 60;
        this.showSeconds = this.colWidth > 90;
        this.startY = 30;
        this.endY = canvasHeight - 4;
        this.minutesY = this.startY + 5;
        this.secondsY = this.startY + 55;
        this.axisY = this.startY + 60;
        this.isBeingDragged = false;
        this.start = 0;
        this.end = endTime;
        this.timeUtil = new TimeUtil(0);
        this.startDelta = 0;
    }

    draw(actionManager, videoCurrentTime) {
        this.colWidth = this.calculateColWidth();
        this.secondWidth = this.colWidth / 10;
        var endX = (this.end - this.start) * this.secondWidth + 30;
        this.timeUtil.setColWidth(this.colWidth);
        p.strokeWeight(0);
        p.stroke(1);
        p.fill(0, 0, 0);
        p.textSize(12);
        p.textStyle(p.NORMAL);
        p.text(TimeConverter.toHHMMSS(this.end), endX - 20, this.startY + 30, 40, 20);
        p.textAlign(p.CENTER);

        p.stroke(0);
        p.strokeWeight(1);
        p.line(30, this.axisY, this.timelineWidth, this.axisY);
        for (var i = 0; i <= this.timelineWidth + this.start * this.secondWidth - 30; i += this.colWidth) {
            var x = i + 30;
            var newX = x - this.start * this.secondWidth;
            if (i == 0) {
                this.drawStartSecondLabel(this.start, x);
                this.drawMinuteLine(x);
            } else if (i % (this.colWidth * 6) == 0) {
                if (newX >= 30) {
                    this.drawMinuteLabel(i, newX);
                    this.drawMinuteLine(newX);
                }
            } else {
                if (newX >= 30) {
                    if (this.showSecondsInterval) {
                        this.drawMiddleSecondLabel(i, newX);
                    }
                    this.drawMiddleSecondLine(newX);
                }
            }


            if (this.showSeconds) {
                this.drawSecondLine(x);
            }
        }

        var mouseOverAction = false;
        for (var j = 0; j < actionManager.actions.length; j++) {
            if (actionManager.actions[j].mouseIsOver) {
                mouseOverAction = true;
            }
        }
        if (p.mouseX >= 30 && p.mouseX <= this.canvasWidth - 30 && p.mouseY >= this.startY && p.mouseY <= this.endY) {
            if (!mouseOverAction) {
                p.cursor(p.HAND);
            }
        } else {
            if (!mouseOverAction) {
                p.cursor(p.ARROW);
            }
        }

        p.stroke('red');
        p.strokeWeight(2)
        p.line(endX, this.startY + 45, endX, this.axisY);
        p.line(endX, this.axisY, endX, this.endY);
    }

    drag(x, y, actionManager) {
        var mouseOverAction = false;
        for (var j = 0; j < actionManager.actions.length; j++) {
            if (actionManager.actions[j].mouseIsOver) {
                mouseOverAction = true;
            }
        }
        if (!mouseOverAction) {
            if (p.mouseX >= 30 && p.mouseX <= this.canvasWidth - 30 && p.mouseY >= this.startY && p.mouseY <= this.endY) {
                this.isBeingDragged = true;
                var startDelta = (p.pmouseX - p.mouseX);
                if (this.startDelta != startDelta) {
                    this.start += (startDelta) / this.secondWidth;
                    if (this.start < 0) {
                        this.start = 0;
                    } else {
                        this.start = Math.floor(this.start);
                    }
                    this.startDelta = startDelta;
                }

            } else {
                this.isBeingDragged = false;
            }
        }
    }

    drawSecondLine(x) {
        for (var j = 0; j < this.colWidth; j += this.colWidth / 10) {
            if ((x + j) < this.timelineWidth && j) {
                p.stroke(0);
                p.strokeWeight(1);
                p.line(x + j, this.secondsY + 5, x + j, this.axisY);
                p.stroke(230);
                p.strokeWeight(1);
                p.line(x + j, this.secondsY, x + j, this.endY);
            }
        }
        return j;
    }

    drawMiddleSecondLine(x) {
        p.stroke(0);
        p.strokeWeight(1)
        p.line(x, this.secondsY, x, this.axisY);
        p.stroke(230);
        p.strokeWeight(1)
        p.line(x, this.axisY, x, this.endY);
    }

    drawMiddleSecondLabel(i, x) {
        p.stroke(230);
        p.strokeWeight(0);
        p.textSize(10);
        p.textStyle(p.NORMAL);
        p.text(this.timeUtil.getFormattedMiddleTime(i), x - 20, this.secondsY, 40, 20);
        p.textAlign(p.CENTER);
    }

    drawStartSecondLabel(i, x) {
        p.strokeWeight(0);
        p.textSize(12);
        p.textStyle(p.NORMAL);
        p.text(this.timeUtil.getFormattedStartTime(i), x - 20, this.minutesY, 40, 20);
        p.textAlign(p.CENTER);
    }

    drawMinuteLine(x) {
        p.stroke(0);
        p.strokeWeight(2)
        p.line(x, this.startY + 20, x, this.axisY);
        p.stroke(230);
        p.strokeWeight(2)
        p.line(x, this.axisY, x, this.endY);
    }

    drawMinuteLabel(i, x) {
        p.strokeWeight(0);
        p.textSize(12);
        p.textStyle(p.NORMAL);
        p.text(this.timeUtil.getFormattedTime(i), x - 20, this.minutesY, 40, 20);
        p.textAlign(p.CENTER);
    }

    setZoomFactor(zoomFactor) {
        this.zoomFactor = zoomFactor;
    }

    calculateColWidth() {
        var minutes = ( this.end + 30) / 60;
        return Math.floor((this.canvasWidth / minutes) / 6) * this.zoomFactor;
    }

    getStartTime() {
        return this.start;
    }

    setEndTime(endTime) {
        this.end = endTime;
    }
}

