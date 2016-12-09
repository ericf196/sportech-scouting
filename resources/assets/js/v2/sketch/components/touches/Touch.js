import UuidUtil from '../utils/UuidUtil'
import SecondsUtil from '../utils/SecondsUtil'
import TimeConverter from '../utils/TimeConverter'
import {getState, dispatch} from 'mockstate';

export default class Touch {
    constructor(start, end, text, color) {
        this.state = getState('*');
        var uuid = new UuidUtil();
        this.id = uuid.generateUUID();
        this.start = start;
        this.initDuration = end - start;
        this.end = end;
        this.color = color;
        this.text = text;
        this.isDragged = false;
        this.isLocked = false;
        this.mouseIsOver = false;
        this.isSelected = false;
        this.x = null;
        this.y = null;
        this.width = 0;
        this.height = 0;
        this.newX = 0;
        this.newY = 0;
        this.widthX = 0;
        this.newWidth = 0;
        this.offsetX = 0;
        this.offsetY = 0;
        this.limitTextY = 30 + this.state.timeline.startY;
        this.isResizeLeft = false;
        this.isResizeRight = false;
        this.secondsUtil = new SecondsUtil();
        this.touchMenu = null
        this.canvaContainer = null
    }

    draw() {
        this.x = this.calculateX();
        this.y = this.y ? this.y : this.calculateY();
        this.width = this.calculateWidth();
        this.height = this.calculateHeight();
        if (!this.touchMenu) {
            var touchTemplate = p.select('#touch-dropdown');
            this.touchMenu = p.createDiv(touchTemplate.html());
            this.touchMenu.id('edit-touch-' + this.id);
            this.canvaContainer = p.select('#timeline');
            this.canvaContainer.child(this.touchMenu);
            var editBtn = p.select('.editTouch', this.touchMenu);
            var touch = this;
            editBtn.mousePressed((event)=> {
                touch.editPressed(touch, event)
            });
        }
        var touchMenuPosition = this.x + this.width - 11;
        this.touchMenu.position(touchMenuPosition, this.canvaContainer.position().y + this.y);

        if (touchMenuPosition - 14 < this.state.timeline.startX || touchMenuPosition > this.state.canvas.width) {
            this.touchMenu.hide();
        } else {
            this.touchMenu.show();
        }

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

    editPressed(touch, event) {
        event.preventDefault();
        dispatch('setSelectedTouch', touch);
        vm.editTouch(event, touch);
    }

    isMouseOver(x, y) {
        if (x >= this.x - 13 && x <= (this.x + this.width + 13) && y >= this.y && y <= (this.y + this.height)) {
            this.color.rgba.alpha = 100;
            this.mouseIsOver = true;
            this.offsetX = x - this.x
            this.offsetY = y - this.y
        } else {
            this.color.rgba.alpha = 50;
            this.mouseIsOver = false;
            this.offsetX = 0
            this.offsetY = 0
        }
        return this.mouseIsOver;
    }

    isMouseResize(x, y) {
        if (x >= this.x + this.width - 13 && x <= (this.x + this.width) && y >= this.y && y <= (this.y + this.height)) {
            p.cursor('/images/resize.png', x);
            this.isResizeRight = true;
        } else if (x >= this.x - 13 && x <= (this.x) && y >= this.y && y <= (this.y + this.height)) {
            p.cursor('/images/resize.png', x - 13);
            this.isResizeLeft = true;
            this.widthX = this.x + this.width;
        } else {
            p.cursor(p.ARROW);
            this.widthX = 0;
            this.isResizeLeft = false;
            this.isResizeRight = false;
        }
    }

    isMousePresssedOver(x, y) {
        if (y >= this.state.timeline.startY) {
            if (x >= this.x - 13 && x <= (this.x + this.width) + 13 && y >= this.y && y <= (this.y + this.height)) {
                this.isLocked = false;
                this.isSelected = true;
                this.initDuration = this.end - this.start;
            } else {
                this.isLocked = true;
                this.isSelected = false;
            }
        }
    }

    isBeingDragged(x, y) {
        this.isDragged = !!(x >= this.x + 13 && x <= (this.x + this.width - 13) && y >= this.y && y <= (this.y + this.height));
        return this.isDragged;
    }

    newPosition(x, y, endVideo) {
        var delta = (p.pmouseX - p.mouseX);

        if (this.isResizeRight) {
            this.end = this.secondsUtil.getSeconds(this.end * this.state.timeline.secondWidth - delta);
            if (this.end <= this.start) {
                this.end = this.start + 1;
            }
            if (this.end > this.state.player.duration) {
                this.end = this.state.player.duration;
            }
        }

        if (this.isResizeLeft) {
            this.start = this.secondsUtil.getSeconds(this.start * this.state.timeline.secondWidth - delta);
            if (this.start < 0) {
                this.start = 0;
            }
            if (this.start >= this.end) {
                this.start = this.end - 1;
            }
        }

        if (this.isDragged) {


            if (y < this.state.timeline.startY + 60 + 61) {
                this.newY = this.state.timeline.startY + 61;
            } else if (y < this.state.timeline.startY + 60 * 2 + 61) {
                this.newY = this.state.timeline.startY + 60 * 2 + 2;
            } else if (y < this.state.timeline.startY + 60 * 3 + 61) {
                this.newY = this.state.timeline.startY + 60 * 3 + 3;
            } else if (y < this.state.timeline.startY + 60 * 4 + 61) {
                this.newY = this.state.timeline.startY + 60 * 4 + 4;
            } else if (y < this.state.timeline.startY + 60 * 5 + 61) {
                this.newY = this.state.timeline.startY + 60 * 5 + 5;
            }

            this.start = this.secondsUtil.getSeconds(this.start * this.state.timeline.secondWidth - delta);
            this.end = this.secondsUtil.getSeconds(this.end * this.state.timeline.secondWidth - delta);
            if (this.start < 0) {
                this.start = 0;
                this.end = this.initDuration;
            }

            if (this.end > endVideo) {
                this.end = endVideo
                this.start = this.end - this.initDuration;
            }

            this.newX = this.calculateX();
        }

        return this.isDragged || this.isResizeRight || this.isResizeLeft;
    }

    updatePosition(x, y, width) {
        this.x = x;
        this.y = y;
        this.width = width;
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


