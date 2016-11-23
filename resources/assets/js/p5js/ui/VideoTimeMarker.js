import TimeConverter from '../utils/TimeConverter'

export default class VideoTimeMarker {
    constructor(canvasWidth, canvasHeight, endTime, zoomFactor) {
        this.canvasHeight = canvasHeight;
        this.canvasWidth = canvasWidth;
        this.zoom = zoomFactor;
        this.timelineWidth = canvasWidth - 30;
        this.end = endTime;
        this.startY = 30;
        this.endY = canvasHeight - 4;
    }

    draw(videoCurrentTime, secondWidth, colWidth, startTime, actionManager) {
        var currentX = (videoCurrentTime - startTime) * secondWidth + 30;
        currentX = currentX >= 30 ? currentX : 30;
        if ((videoCurrentTime - startTime) > 0) {
            p.stroke('blue');
            p.strokeWeight(2)
            p.line(currentX, this.startY + 30, currentX, this.startY + 60);
            p.line(currentX, this.startY + 60, currentX, this.endY);
            p.strokeWeight(0);
            p.textSize(12);
            p.textStyle(p.NORMAL);
            p.text(TimeConverter.toHHMMSS(Math.floor(videoCurrentTime)), currentX - 20, this.startY + 15, 40, 20);
            p.textAlign(p.CENTER);
        }
    }

    drag(x, y) {

    }
}

