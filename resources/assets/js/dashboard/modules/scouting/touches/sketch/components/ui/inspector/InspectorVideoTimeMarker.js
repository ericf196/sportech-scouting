import TimeConverter from '../../utils/TimeConverter'
import {getState} from 'mockstate';

export default class InspectorVideoTimeMarker {
    constructor() {
        this.state = getState('*');
    }

    draw() {
        var currentTime = Math.floor(this.state.player.currentTime)
        var currentX = (currentTime - this.state.touchManager.selectedTouch.start) * this.state.touchManager.inspector.timeline.secondWidth + this.state.touchManager.inspector.timeline.startX;
        inspector.stroke('blue');
        inspector.strokeWeight(2)
        inspector.line(currentX, this.state.touchManager.inspector.timeline.startY + 30, currentX, this.state.touchManager.inspector.timeline.startY + 60);
        inspector.line(currentX, this.state.touchManager.inspector.timeline.startY + 60, currentX, this.state.touchManager.inspector.timeline.endY);
        inspector.strokeWeight(0);
        inspector.textSize(12);
        inspector.textStyle(inspector.NORMAL);
        inspector.text(TimeConverter.toHHMMSS(currentTime), currentX - 20, this.state.touchManager.inspector.timeline.startY + 15, 40, 20);
        inspector.textAlign(inspector.CENTER);
    }

    drag(x, y) {

    }
}

