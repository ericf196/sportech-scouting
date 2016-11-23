import TimeConverter from '../utils/TimeConverter'
import {getState} from 'mockstate';

export default class VideoTimeMarker {
    constructor() {
        this.state = getState('*');
    }

    draw() {
        var currentX = (this.state.player.currentTime - this.state.timeline.startTime) * this.state.timeline.secondWidth + 30;
        currentX = currentX >= 30 ? currentX : 30;
        if ((this.state.player.currentTime - this.state.timeline.startTime) > 0) {
            p.stroke('blue');
            p.strokeWeight(2)
            p.line(currentX, this.state.timeline.startY + 30, currentX, this.state.timeline.startY + 60);
            p.line(currentX, this.state.timeline.startY + 60, currentX, this.state.timeline.endY);
            p.strokeWeight(0);
            p.textSize(12);
            p.textStyle(p.NORMAL);
            p.text(TimeConverter.toHHMMSS(Math.floor(this.state.player.currentTime)), currentX - 20, this.state.timeline.startY + 15, 40, 20);
            p.textAlign(p.CENTER);
        }
    }

    drag(x, y) {

    }
}

