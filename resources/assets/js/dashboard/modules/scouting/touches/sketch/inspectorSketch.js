import {getState, dispatch} from 'mockstate';
import InspectorStage from './components/ui/inspector/InspectorStage'
import InspectorTimeline from './components/ui/inspector/InspectorTimeline'
import InspectorVideoTimeMarker from './components/ui/inspector/InspectorVideoTimeMarker'

export default function sketch(inspector) {
    let state = null;
    window.inspector = inspector;
    inspector.setup = function () {
        var width = document.getElementById('inspectorBox').offsetWidth;
        var canvas = inspector.createCanvas(width - 20, 190);
        canvas.mouseMoved(mouseMoved);
        canvas.mousePressed(mousePressed);
        dispatch('setInspectorCanvas', canvas);
        dispatch('setInspectorCanvasHeight', inspector.height);
        dispatch('setInspectorCanvasWidth', inspector.width);
        state = getState('*');
        state.touchManager.inspector.canvas.instance.parent('inspector');
        var stage = new InspectorStage();
        dispatch('setInspectorStage', stage);
        var timeline = new InspectorTimeline(0, 180);
        dispatch('setInspectorTimeline', timeline);
        var videoTimeMarker = new InspectorVideoTimeMarker();
        dispatch('setInspectorVideoMarker', videoTimeMarker);

        inspector.colorMode(inspector.RGB, 255, 255, 255, 100);

        inspector.frameRate(10);
        inspector.noLoop();
    };

    inspector.draw = function () {
        state.touchManager.inspector.stage.instance.draw();
        if (state.touchManager.selectedTouch) {
            state.touchManager.inspector.timeline.instance.draw();
            state.touchManager.selectedTouch.drawActions();
            state.touchManager.inspector.videoMarker.instance.draw();
        }
    };

    function mouseMoved() {
        if (state) {
            if (state.touchManager.instance) {
                state.touchManager.instance.mouseOverAction(inspector.mouseX, inspector.mouseY);
            }
        }
    }

    function mousePressed() {
        if (state) {
            if (state.touchManager.instance) {
                state.touchManager.instance.mousePressedAction(inspector.mouseX, inspector.mouseY)
            }
        }
    }

    inspector.stop = function () {
        inspector.noLoop();
    }

    inspector.start = function () {
        inspector.loop();
    }
}

