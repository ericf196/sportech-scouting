import TimeConverter from './TimeConverter'
export default class SecondsUtil {
    constructor(secondWidth) {
        this.secondWidth = secondWidth;
    }

    getFormattedTime(x) {
        return TimeConverter.toHHMMSS(Math.floor(x / this.secondWidth));
    }

    getSeconds(x) {
        return Math.floor(x / this.secondWidth);
    }

    setSecondWidth(secondWidth) {
        this.secondWidth = secondWidth;
    }
}


