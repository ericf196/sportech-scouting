import {dispatch} from 'mockstate';

export const actions = {
    playerReady(state, ready){
        console.log('playerReady');
        state.playerReady = ready;
        return ready;
    },
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
        dispatch('setInspectorWidth', width);
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
        var i;
        for (i = 0; i < state.touchManager.touches[index].actions.length; i++) {
            state.touchManager.touches[index].actions[i].color = _.cloneDeep(touch.color);
        }
        return touch;
    },
    removeTouch(state, touch){
        var index = _.findIndex(state.touchManager.touches, function (o) {
            return o.id == touch.id
        });
        if (index > -1) {
            state.touchManager.touches.splice(index, 1);
        }
        return touch;
    },


    //inspector
    setInspector(state, inspector){
        state.touchManager.inspector.instance = inspector;
        return inspector;
    },
    setInspectorWidth(state, width){
        state.touchManager.inspector.timeline.width = width;
        return width;
    },
    setInspectorHeight(state, height){
        state.touchManager.inspector.timeline.height = height;
        dispatch('setInspectorEndY', state.touchManager.inspector.timeline.startY + height);

        return height;
    },
    setInspectorCanvas(state, canvas){
        state.touchManager.inspector.canvas.instance = canvas;
        return canvas;
    },
    setInspectorVideoMarker(state, videoMarker){
        state.touchManager.inspector.videoMarker.instance = videoMarker;
        return videoMarker;
    },
    setInspectorCanvasWidth(state, width){
        state.touchManager.inspector.canvas.width = width;
        return width;
    },
    setInspectorCanvasHeight(state, height){
        state.touchManager.inspector.canvas.height = height;
        return height;
    },
    setInspectorStage(state, stage){
        state.touchManager.inspector.stage.instance = stage;
        return stage;
    },
    setInspectorTimeline(state, timeline){
        state.touchManager.inspector.timeline.instance = timeline;
        return timeline;
    },
    setInspectorStartTime(state, startTime){
        state.touchManager.inspector.timeline.startTime = startTime;
        return startTime;
    },
    setInspectorStartY(state, startY){
        state.touchManager.inspector.timeline.startY = startY;
        dispatch('setInspectorMinutesY', startY + 5);
        dispatch('setInspectorSecondsY', startY + 55);
        dispatch('setInspectorAxisY', startY + 60);
        return startY;
    },
    setInspectorAxisY(state, axisY){
        state.touchManager.inspector.timeline.axisY = axisY;
        return axisY;
    },
    setInspectorEndY(state, endY){
        state.touchManager.inspector.timeline.endY = endY;
        return endY;
    },
    setInspectorStartX(state, startX){
        state.touchManager.inspector.timeline.startX = startX;
        return startX;
    },
    setInspectorEndX(state, endX){
        state.touchManager.inspector.timeline.endX = endX;
        return endX;
    },
    setInspectorMinutesY(state, minutesY){
        state.touchManager.inspector.timeline.minutesY = minutesY;
        return minutesY;
    },
    setInspectorSecondsY(state, secondsY){
        state.touchManager.inspector.timeline.secondsY = secondsY;
        return secondsY;
    },
    setInspectorSecondWidth(state, secondWidth){
        state.touchManager.inspector.timeline.secondWidth = secondWidth;
        return secondWidth;
    },
    setInspectorColWidth(state, colWidth){
        state.touchManager.inspector.timeline.colWidth = colWidth;
        dispatch('setInspectorSecondWidth', colWidth / 10);
        return colWidth;
    },
    setSelectedAction(state, action){
        state.touchManager.selectedAction = action;
        return action;
    },
    recordingTouch(state, recording){
        state.touchManager.recordingTouch = recording;
        return recording;
    },
    recordingAction(state, recording){
        state.touchManager.recordingAction = recording;
        return recording;
    },
    addAction(state, action){
        state.touchManager.selectedTouch.actions.push(action);
        return action;
    },
    addLeftTag(state, tag){
        state.touchManager.selectedAction.leftTags.push(tag);
        return tag;
    },
    addRightTag(state, tag){
        state.touchManager.selectedAction.rightTags.push(tag);
        return tag;
    },
    editAction(state, action){
        var index = _.findIndex(state.touchManager.selectedTouch.actions, function (o) {
            return o.id == action.id
        });
        state.touchManager.selectedTouch.actions[index].start = action.start;
        state.touchManager.selectedTouch.actions[index].end = action.end;
        state.touchManager.selectedTouch.actions[index].color = action.color;
        return action;
    },
    removeAction(state, action){
        var index = _.findIndex(state.touchManager.selectedTouch.actions, function (o) {
            return o.id == action.id
        });
        if (index > -1) {
            state.touchManager.selectedTouch.actions.splice(index, 1);
        }
        return action;
    },
};

