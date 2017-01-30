// define a mixin object
import {getState} from 'mockstate';

export default  {
    methods: {
        checkCollide(touch){
            var touches = _.reject(getState('touchManager').touches, function (o) {
                return touch.id == o.id;
            });
            touches.push(touch);
            var overlap = this.overlap(touches);
            return {
                collide: overlap.overlap,
                collideTouches: overlap.ranges
            }
        },
        checkCollideActions(action){
            if (getState('touchManager').selectedTouch) {
                var selectedTouch = getState('touchManager').selectedTouch;
                var overlap = null;
                if (selectedTouch) {
                    var actions = _.reject(selectedTouch.actions, function (o) {
                        return action.id == o.id;
                    });
                    actions.push(action);
                    overlap = this.overlap(actions);
                } else {
                    overlap = {overlap: false, ranges: []}
                }
            } else {
                overlap = {overlap: false, ranges: []}
            }

            return {
                collide: overlap.overlap,
                collideActions: overlap.ranges
            }
        },
        overlap(touches){
            var sortedRanges = touches.sort((previous, current) => {

                var previousTime = parseInt(previous.start);
                var currentTime = parseInt(current.start);

                // if the previous is earlier than the current
                if (previousTime < currentTime) {
                    return -1;
                }

                /* if the previous time is the same as the current time
                 if (previousTime === currentTime) {
                 return 0;
                 }*/

                // if the previous time is later than the current time
                return 1;
            });

            // return the final results
            return sortedRanges.reduce((result, current, idx, arr) => {
                // get the previous range
                if (idx === 0) {
                    return result;
                }
                var previous = arr[idx - 1];

                // check for any overlap
                var previousEnd = parseInt(previous.end);
                var currentStart = parseInt(current.start);
                var overlap = (previousEnd > currentStart);

                // store the result
                if (overlap) {
                    // yes, there is overlap
                    result.overlap = true;
                    // store the specific ranges that overlap
                    result.ranges.push({
                        previous: previous,
                        current: current
                    })
                }

                return result;

                // seed the reduce
            }, {overlap: false, ranges: []});
        },
    }
}