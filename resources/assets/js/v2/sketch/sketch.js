import Stage from './components/ui/Stage'
import Timeline from './components/ui/Timeline'
import TouchManager from './components/touches/TouchManager'
import TouchInspector from './components/touches/TouchInspector'
import VideoTimeMarker from './components/ui/VideoTimeMarker'
import {getState, dispatch} from 'mockstate';

export default function sketch(p) {
    let state = null;
    p.setup = function () {
        var width = document.getElementById('timeline').offsetWidth;
        var canvas = p.createCanvas(width, 700);
        state = getState('*');
        dispatch('setCanvas', canvas);
        dispatch('setHeight', p.height);
        dispatch('setWidth', p.width);
        state.canvas.instance.parent('timeline');
        var stage = new Stage();
        dispatch('setStage', stage);
        var timeline = new Timeline(230, 120);
        dispatch('setTimeline', timeline);
        var touchManager = new TouchManager([]);
        dispatch('setTouchManager', touchManager);
        var videoTimeMarker = new VideoTimeMarker();
        dispatch('setVideoMarker', videoTimeMarker);

        //var touchInspector = new TouchInspector();
        //dispatch('setTouchInspector', touchInspector);

        state.stage.instance.setup();
        p.colorMode(p.RGB, 255, 255, 255, 100)
        state.player.instance.play();
        state.player.instance.on('timeupdate', (event)=> {
            if (!state.player.duration) {
                dispatch('setDuration', state.player.instance.duration())
                dispatch('setZoom', 1);
            }
        });

        configButtons();
        p.frameRate(10);
    };

    p.draw = function () {
        state.stage.instance.draw();
        state.timeline.instance.draw();
        state.touchManager.instance.draw();
       // state.touchManager.touchInspector.instance.draw();
    };

    function configButtons() {
        var zoomInBtn = document.getElementById('zoomIn');
        var zoomOutBtn = document.getElementById('zoomOut');
        zoomInBtn.addEventListener('click', zoomIn);
        zoomOutBtn.addEventListener('click', zoomOut);
    }

    function zoomIn(event) {
        event.preventDefault();
        dispatch('setZoom', state.timeline.zoomFactor + 1);
        dispatch('setInitialized', false);
        p.redraw();
    }

    function zoomOut(event) {
        event.preventDefault();
        if (state.timeline.zoomFactor > state.timeline.initialZoomFactor) {
            dispatch('setZoom', state.timeline.zoomFactor - 1);
            dispatch('setInitialized', false);
            p.redraw();
        }
    }

    p.mouseMoved = function () {
        if (state) {
            if (state.touchManager.instance) {
                state.touchManager.instance.mouseOverTouch(p.mouseX, p.mouseY);
            }
            state.timeline.instance.mouseOver();
            p.redraw();
        }
    };

    p.mouseDragged = function (event) {
        state.timeline.instance.drag();
        p.redraw();
    };

    p.mousePressed = function () {
        if (state.touchManager.instance) {
            state.touchManager.instance.mousePressedTouch(p.mouseX, p.mouseY)
        }
    }

    p.mouseReleased = function () {
        if (state.touchManager.instance) {
            state.touchManager.instance.endMouseDraggedTouch()
        }
    };

    function pRemoveTouch() {
        if (state.touchManager.instance.selectedTouch) {
            vm.removeTouch(state.touchManager.instance.selectedTouch)
        }
    }
}

