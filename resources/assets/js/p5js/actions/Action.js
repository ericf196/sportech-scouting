import UuidUtil from '../utils/UuidUtil'
import SecondsUtil from '../utils/SecondsUtil'
import TimeConverter from '../utils/TimeConverter'
export default class Action {
    constructor(start, end, text, color) {
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
        this.startY = 30;
        this.limitTextY = 30 + this.startY;
        this.isResizeLeft = false;
        this.isResizeRight = false;
        this.secondsUtil = new SecondsUtil(0);
        this.actionMenu = null
    }

    draw(secondWidth, actions, zoomFactorChange, startTime, canvasHeight) {
        this.secondsUtil.setSecondWidth(secondWidth);
        this.x = this.calculateX(secondWidth, startTime);
        this.startTime = startTime;
        this.secondWidth = secondWidth;
        this.y = this.y ? this.y : this.calculateY();
        this.width = this.calculateWidth(secondWidth, startTime);
        this.height = this.calculateHeight();
        if (!this.actionMenu) {
            var actionTemplate = p.select('#action-dropdown');
            this.actionMenu = p.createDiv(actionTemplate.html());
            this.actionMenu.id('edit-action-' + this.id);
            var canvaContainer = p.select('#timeline');
            canvaContainer.child(this.actionMenu);
            var editBtn = p.select('.editAction', this.actionMenu);
            var addSubActionBtn = p.select('.addSubAction', this.actionMenu);
            var loopVideoBtn = p.select('.loopVideo', this.actionMenu);
            var action = this;
            editBtn.mousePressed((event)=> {
                action.editPressed(action, event)
            });
        }

        this.actionMenu.position(this.x + this.width - 11, this.y);

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
            p.line(this.x, this.limitTextY + 20, this.x, canvasHeight - 4);
            p.line(this.x + this.width, this.limitTextY + 20, this.x + this.width, canvasHeight - 4);
        }

        if (this.end - startTime > 0) {
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

    editPressed(action, event) {
        event.preventDefault();
        vm.startTouch(event, action);
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
        if (y >= this.startY) {
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
            this.end = this.secondsUtil.getSeconds(this.end * this.secondWidth - delta);
            if (this.end <= this.start) {
                this.end = this.start + 1;
            }
            if (this.end > endVideo) {
                this.end = endVideo;
            }
        }

        if (this.isResizeLeft) {
            this.start = this.secondsUtil.getSeconds(this.start * this.secondWidth - delta);
            if (this.start < 0) {
                this.start = 0;
            }
            if (this.start >= this.end) {
                this.start = this.end - 1;
            }
        }

        if (this.isDragged) {


            if (y < this.startY + 60 + 61) {
                this.newY = this.startY + 61;
            } else if (y < this.startY + 60 * 2 + 61) {
                this.newY = this.startY + 60 * 2 + 2;
            } else if (y < this.startY + 60 * 3 + 61) {
                this.newY = this.startY + 60 * 3 + 3;
            } else if (y < this.startY + 60 * 4 + 61) {
                this.newY = this.startY + 60 * 4 + 4;
            } else if (y < this.startY + 60 * 5 + 61) {
                this.newY = this.startY + 60 * 5 + 5;
            }

            this.start = this.secondsUtil.getSeconds(this.start * this.secondWidth - delta);
            this.end = this.secondsUtil.getSeconds(this.end * this.secondWidth - delta);
            if (this.start < 0) {
                this.start = 0;
                this.end = this.initDuration;
            }

            if (this.end > endVideo) {
                this.end = endVideo
                this.start = this.end - this.initDuration;
            }

            this.newX = this.calculateX(this.secondWidth, this.startTime);
        }

        return this.isDragged || this.isResizeRight || this.isResizeLeft;
    }

    updatePosition(x, y, width) {
        this.x = x;
        this.y = y;
        this.width = width;
    }

    calculateX(secondWidth, startTime) {
        var start = (this.start - startTime) * secondWidth;
        if (start < 0) {
            return 30;
        }

        return start + 30
    }

    calculateY() {
        return 61 + this.startY;
    }

    calculateWidth(secondWidth, startTime) {
        var start = (this.start - startTime) * secondWidth;
        if (start < 0) {
            return (this.end - startTime) * secondWidth;
        }
        return (this.end - this.start) * secondWidth;
    }

    calculateHeight() {
        return 60;
    }

    getFormatedStart() {
        TimeConverter.toHHMMSS(this.start)
    }
}


