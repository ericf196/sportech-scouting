import TimeConverter from './TimeConverter'
import {getState, dispatch} from 'mockstate';

export default class TimeUtil {
    constructor() {
        this.state = getState('*');
    }

    getFormattedTime(iteration) {
        if (iteration == 0) {
            return TimeConverter.toHHMMSS(0);
        }
        if (iteration == this.colWidth * 6) {
            return TimeConverter.toHHMMSS(60);
        }

        if (iteration > this.colWidth) {
            return TimeConverter.toHHMMSS((((iteration - this.state.timeline.colWidth * 6) / (this.state.timeline.colWidth * 6) + 1)) * 60);
        }
    }

    getFormattedMiddleTime(iteration) {
        if (iteration / this.state.timeline.colWidth == 1) {
            return TimeConverter.toSS(10) + ' s';
        }

        if (iteration > this.colWidth) {
            var sec = (((iteration - this.state.timeline.colWidth * 6) / (this.state.timeline.colWidth * 6) + 1));
            return TimeConverter.toSS(Math.round(sec)) + ' s';
        }
    }

    getFormattedStartTime(start) {
        return TimeConverter.toHHMMSS(Math.round(start));
    }
}


