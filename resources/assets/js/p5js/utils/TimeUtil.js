import TimeConverter from './TimeConverter'

export default class TimeUtil {
    constructor(colWidth) {
        this.colWidth = colWidth;
    }

    setColWidth(colWidth) {
        this.colWidth = colWidth;
    }

    getFormattedTime(iteration) {
        if (iteration == 0) {
            return TimeConverter.toHHMMSS(0);
        }
        if (iteration == this.colWidth * 6) {
            return TimeConverter.toHHMMSS(60);
        }

        if (iteration > this.colWidth) {
            return TimeConverter.toHHMMSS((((iteration - this.colWidth * 6) / (this.colWidth * 6) + 1)) * 60);
        }
    }

    getFormattedMiddleTime(iteration) {
        if (iteration / this.colWidth == 1) {
            return TimeConverter.toSS(10) + ' s';
        }

        if (iteration > this.colWidth) {
            var sec = (((iteration - this.colWidth * 6) / (this.colWidth * 6) + 1)) * scale;
            return TimeConverter.toSS(Math.round(sec)) + ' s';
        }
    }

    getFormattedStartTime(start) {
        return TimeConverter.toHHMMSS(Math.round(start));
    }
}


