import {dispatch} from 'mockstate';

export const actions = {
    setCanvas(state, instance){
        state.canvas.instance = instance;
        return instance;
    },
    setTimeline(state, instance){
        state.timeline.instance = instance;
        return instance;
    },
    setTouchManager(state, instance){
        state.touchManager.instance = instance;
        return instance;
    },
    setStage(state, instance){
        state.stage.instance = instance;
        return instance;
    },
    setPlayer(state, instance){
        state.player.instance = instance;
        return instance;
    },
    setVideoMarker(state, instance){
        state.videoMarker.instance = instance;
        return instance;
    },
    setWidth(state, width){
        state.canvas.width = width;
        dispatch('setTimelineWidth', width);
        dispatch('setTouchInspectorWidth', width);
        return width;
    },
    setHeight(state, height){
        state.canvas.height = height;
        return height;
    },
    setTimelineWidth(state, width){
        state.timeline.width = width;
        return width;
    },
    setTimelineHide(state, hide){
        state.timeline.hide = hide;
        return hide;
    },
    setTimelineHeight(state, height){
        state.timeline.height = height;
        dispatch('setTimelineEndY', state.timeline.startY + height);
        return height;
    },
    setTimelineMouseOver(state, mouseOver){
        state.timeline.isMouseOver = mouseOver;
        return mouseOver;
    },
    setTimelineStartTime(state, startTime){
        state.timeline.startTime = startTime;
        return startTime;
    },
    setTimelineStartY(state, startY){
        state.timeline.startY = startY;
        dispatch('setTimelineMinutesY', startY + 5);
        dispatch('setTimelineSecondsY', startY + 55);
        dispatch('setTimelineAxisY', startY + 60);
        dispatch('setTimelineEndY', startY + state.timeline.height);
        return startY;
    },
    setTimelineAxisY(state, axisY){
        state.timeline.axisY = axisY;
        return axisY;
    },
    setTimelineEndY(state, endY){
        state.timeline.endY = endY;
        return endY;
    },
    setTimelineStartX(state, startX){
        state.timeline.startX = startX;
        return startX;
    },
    setTimelineEndX(state, endX){
        endX = (state.player.duration - state.timeline.startTime) * state.timeline.secondWidth + 30;
        state.timeline.endX = endX;
        return endX;
    },
    setTimelineMinutesY(state, minutesY){
        state.timeline.minutesY = minutesY;
        return minutesY;
    },
    setTimelineSecondsY(state, secondsY){
        state.timeline.secondsY = secondsY;
        return secondsY;
    },
    setShowSeconds(state, showSeconds){
        state.timeline.showSeconds = showSeconds;
        return showSeconds;
    },
    setShowSecondsInterval(state, showSecondsInterval){
        state.timeline.showSecondsInterval = showSecondsInterval;
        return showSecondsInterval;
    },
    setZoom(state, zoom){
        if (state.player.duration > 420) {
            state.timeline.initialZoomFactor = Math.floor(state.player.duration / 420);
        }
        if (state.timeline.zoomFactor != zoom) {
            state.timeline.zoomFactorChange = true;
        }
        if (zoom < state.timeline.initialZoomFactor) {
            state.timeline.zoomFactor = state.timeline.initialZoomFactor;
        } else {
            state.timeline.zoomFactor = zoom;
        }
        return zoom;
    },
    setSecondWidth(state, secondWidth){
        state.timeline.secondWidth = secondWidth;
        return secondWidth;
    },
    setColWidth(state, colWidth){
        state.timeline.colWidth = colWidth;
        dispatch('setShowSecondsInterval', colWidth > 60);
        dispatch('setShowSeconds', colWidth > 90);
        dispatch('setSecondWidth', colWidth / 10)
        return colWidth;
    },
    setDuration(state, duration){
        state.player.duration = duration;
        dispatch('setTimelineEndX', 0);
        return duration;
    },
    setCurrentTime(state, currentTime){
        state.player.currentTime = currentTime;
        return currentTime;
    },

    setInitialized(state, initialized){
        state.initialized = initialized;
        return initialized;
    },
    setTouches(state, touches){
        state.touchManager.touches = touches;
        return touches;
    },
    setSelectedTouch(state, touch){
        state.touchManager.selectedTouch = touch;
        return touch;
    },
    setTouchInspector(state, touchInspector){
        state.touchManager.touchInspector.instance = touchInspector;
        return touchInspector;
    },
    setTouchInspectorWidth(state, width){
        state.touchManager.touchInspector.width = width;
        return width;
    },
    setTouchInspectorHeight(state, height){
        state.touchManager.touchInspector.height = height;
        return height;
    },
    setTouchInspectorStartY(state, startY){
        state.touchManager.touchInspector.startY = startY;
        dispatch('setTouchInspectorTimelineStartY', startY + 151 + 50);
        dispatch('setTouchInspectorHeight', startY + 300 - 4 - 50);
        dispatch('setTouchInspectorTimelineEndY', startY + 300 - 4);
        return startY;
    },
    addTouch(state, touch){
        state.touchManager.touches.push(touch);
        return touch;
    },
    editTouch(state, touch){
        var index = _.findIndex(state.touchManager.touches, function (o) {
            return o.id == touch.id
        });
        state.touchManager.touches[index].start = touch.start;
        state.touchManager.touches[index].end = touch.end;
        state.touchManager.touches[index].color = touch.color;
        state.touchManager.touches[index].text = touch.text;
        return touch;
    },
    removeTouch(state, touch){
        var touchIndex = state.touchManager.touches.indexOf(touch);
        if (touchIndex > -1) {
            state.touchManager.touches[touchIndex].touchMenu.remove();
            state.touchManager.touches.splice(touchIndex, 1);
        }
        return touch;
    },

    setTouchInspectorTimelineStartTime(state, startTime){
        state.touchManager.touchInspector.timeline.startTime = startTime;
        return startTime;
    },
    setTouchInspectorTimelineStartY(state, startY){
        state.touchManager.touchInspector.timeline.startY = startY;
        dispatch('setTouchInspectorTimelineMinutesY', startY + 5);
        dispatch('setTouchInspectorTimelineSecondsY', startY + 55);
        dispatch('setTouchInspectorTimelineAxisY', startY + 60);
        return startY;
    },
    setTouchInspectorTimelineAxisY(state, axisY){
        state.touchManager.touchInspector.timeline.axisY = axisY;
        return axisY;
    },
    setTouchInspectorTimelineEndY(state, endY){
        state.touchManager.touchInspector.timeline.endY = endY;
        return endY;
    },
    setTouchInspectorTimelineStartX(state, startX){
        state.touchManager.touchInspector.timeline.startX = startX;
        return startX;
    },
    setTouchInspectorTimelineEndX(state, endX){
        endX = (state.player.duration - state.touchManager.touchInspector.timeline.startTime) * state.touchManager.touchInspector.timeline.secondWidth + 30;
        state.touchManager.touchInspector.timeline.endX = endX;
        return endX;
    },
    setTouchInspectorTimelineMinutesY(state, minutesY){
        state.touchManager.touchInspector.timeline.minutesY = minutesY;
        return minutesY;
    },
    setTouchInspectorTimelineSecondsY(state, secondsY){
        state.touchManager.touchInspector.timeline.secondsY = secondsY;
        return secondsY;
    },
    setTouchInspectorTimelineSecondWidth(state, secondWidth){
        state.timeline.secondWidth = secondWidth;
        return secondWidth;
    },
    setTouchInspectorTimelineColWidth(state, colWidth){
        state.timeline.colWidth = colWidth;
        return colWidth;
    },
};

