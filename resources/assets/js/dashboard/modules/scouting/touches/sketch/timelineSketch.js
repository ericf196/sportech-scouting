import Stage from './components/ui/Stage'
import Timeline from './components/ui/Timeline'
import TouchManager from './components/touches/TouchManager'
import VideoTimeMarker from './components/ui/VideoTimeMarker'
import TouchSpec from './specs/touchesSpec'
import {getState, dispatch} from 'mockstate';

export default function sketch(p) {
    let state = null;
    window.p = p;
    p.setup = function () {
        var width = document.getElementById('timelineBox').offsetWidth;
        var canvas = p.createCanvas(width - 20, 130);
        canvas.mouseMoved(mouseMoved);
        canvas.mousePressed(mousePressed);
        state = getState('*');
        dispatch('setCanvas', canvas);
        dispatch('setHeight', p.height);
        dispatch('setWidth', p.width);
        state.canvas.instance.parent('timeline');
        var stage = new Stage();
        dispatch('setStage', stage);
        var timeline = new Timeline(0, 120);
        dispatch('setTimeline', timeline);
        var touchManager = new TouchManager([/*TouchSpec.setup()*/]);
        dispatch('setTouchManager', touchManager);
        var videoTimeMarker = new VideoTimeMarker();
        dispatch('setVideoMarker', videoTimeMarker);

        state.stage.instance.setup();
        p.colorMode(p.RGB, 255, 255, 255, 100)

        configButtons();
        p.frameRate(10);
    };

    p.draw = function () {
        state.stage.instance.draw();
        state.timeline.instance.draw();
        state.touchManager.instance.draw();
        state.videoMarker.instance.draw();
    };

    function configButtons() {

    }

    function zoomIn(event) {
        event.preventDefault();
        dispatch('setZoom', state.timeline.zoomFactor + 1);
        dispatch('setInitialized', false);
    }

    function zoomOut(event) {
        event.preventDefault();
        if (state.timeline.zoomFactor > state.timeline.initialZoomFactor) {
            dispatch('setZoom', state.timeline.zoomFactor - 1);
            dispatch('setInitialized', false);
        }
    }

    function mouseMoved() {
        if (state) {
            if (state.touchManager.instance) {
                state.touchManager.instance.mouseOverTouch(p.mouseX, p.mouseY);
            }
            state.timeline.instance.mouseOver();
        }
    };

    p.mouseDragged = function (event) {
        if (state) {
            state.timeline.instance.drag();
        }
    };

    function mousePressed() {
        if (state) {
            if (state.touchManager.instance) {
                state.touchManager.instance.mousePressedTouch(p.mouseX, p.mouseY)
            }
        }
    }

    p.stop = function () {
        console.log('noloop');
        p.noLoop();
    }

    p.start = function () {
        console.log('loop');
        p.loop();
    }
}

