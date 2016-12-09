import Touch from '../components/touches/Touch'
import Action from '../components/touches/Action'
export default {
    setup(){

        var action = new Action(0, 60, {
            "hsl": {"h": 61.0762331838565, "s": 1, "l": 0.4372549019607843, "a": 1},
            "hex": "#DBDF00",
            "rgba": {"r": 219, "g": 223, "b": 0, "a": 1, "alpha": 50},
            "hsv": {"h": 61.0762331838565, "s": 1, "v": 0.8745098039215686, "a": 1},
        });

        return new Touch(0, 120, 'Touch Example', {
            "hsl": {"h": 61.0762331838565, "s": 1, "l": 0.4372549019607843, "a": 1},
            "hex": "#DBDF00",
            "rgba": {"r": 219, "g": 223, "b": 0, "a": 1, "alpha": 50},
            "hsv": {"h": 61.0762331838565, "s": 1, "v": 0.8745098039215686, "a": 1},
        }, [action]);

    }
}