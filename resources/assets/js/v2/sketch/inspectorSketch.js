import {getState, dispatch} from 'mockstate';
import InspectorStage from './components/ui/inspector/InspectorStage'
import InspectorTimeline from './components/ui/inspector/InspectorTimeline'

export default function sketch(inspector) {
    let state = null;
    inspector.setup = function () {
        var width = document.getElementById('inspectorBox').offsetWidth;
        var canvas = inspector.createCanvas(width - 20, 190);
        dispatch('setInspectorCanvas', canvas);
        dispatch('setInspectorCanvasHeight', inspector.height);
        dispatch('setInspectorCanvasWidth', inspector.width);
        state = getState('*');
        state.touchManager.inspector.canvas.instance.parent('inspector');
        var stage = new InspectorStage();
        dispatch('setInspectorStage', stage);
        var timeline = new InspectorTimeline(0, 180);
        dispatch('setInspectorTimeline', timeline);
        inspector.colorMode(p.RGB, 255, 255, 255, 100);

        inspector.frameRate(10);
        inspector.noLoop();
    };

    inspector.draw = function () {
        state.touchManager.inspector.stage.instance.draw();
        if(state.touchManager.selectedTouch){
            state.touchManager.inspector.timeline.instance.draw();
        }
    };


    inspector.mouseMoved = function () {

    };

    inspector.mouseDragged = function (event) {

    };

    inspector.mousePressed = function () {

    }

    inspector.mouseReleased = function () {

    };

    inspector.stop = function () {
        inspector.noLoop();
    }

    inspector.start = function () {
        inspector.loop();
    }
}

