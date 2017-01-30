import TimeConverter from './TimeConverter'
import {getState, dispatch} from 'mockstate';

export default class SecondsUtil {
    constructor() {
        this.state = getState('*');
    }

    getFormattedTime(x) {
        return TimeConverter.toHHMMSS(Math.floor(x / this.state.timeline.secondWidth));
    }

    getSeconds(x) {
        return Math.floor(x / this.state.timeline.secondWidth);
    }
}


