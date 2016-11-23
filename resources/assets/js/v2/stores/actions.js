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
    setActionManager(state, instance){
        state.actionManager.instance = instance;
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
        dispatch('setActionInspectorWidth', width);
        return width;
    },
    setHeight(state, height){
        state.canvas.height = height;
        dispatch('setTimelineEndY', 151);
        dispatch('setActionInspectorStartY', 151);
        dispatch('setActionInspectorTimelineStartY', 151 + 50);
        dispatch('setActionInspectorHeight', 300 - 4 - 50);
        dispatch('setActionInspectorTimelineEndY', height - 4);
        return height;
    },
    setTimelineWidth(state, width){
        state.timeline.width = width;
        return width;
    },
    setTimelineHeight(state, height){
        state.timeline.height = height;
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
    setActions(state, actions){
        state.actionManager.actions = actions;
        return actions;
    },
    setSelectedAction(state, action){
        state.actionManager.selectedAction = action;
        return action;
    },
    setActionInspector(state, actionInspector){
        state.actionManager.actionInspector.instance = actionInspector;
        return actionInspector;
    },
    setActionInspectorWidth(state, width){
        state.actionManager.actionInspector.width = width;
        return width;
    },
    setActionInspectorHeight(state, height){
        state.actionManager.actionInspector.height = height;
        return height;
    },
    setActionInspectorStartY(state, startY){
        state.actionManager.actionInspector.startY = startY;
        return startY;
    },
    addAction(state, action){
        state.actionManager.actions.push(action);
        return action;
    },
    editAction(state, action){
        var index = _.findIndex(state.actionManager.actions, function (o) {
            return o.id == action.id
        });
        state.actionManager.actions[index].start = action.start;
        state.actionManager.actions[index].end = action.end;
        state.actionManager.actions[index].color = action.color;
        state.actionManager.actions[index].text = action.text;
        return action;
    },
    removeAction(state, action){
        var actionIndex = state.actionManager.actions.indexOf(action);
        if (actionIndex > -1) {
            state.actionManager.actions[actionIndex].actionMenu.remove();
            state.actionManager.actions.splice(actionIndex, 1);
        }
        return action;
    },

    setActionInspectorTimelineStartTime(state, startTime){
        state.actionManager.actionInspector.timeline.startTime = startTime;
        return startTime;
    },
    setActionInspectorTimelineStartY(state, startY){
        state.actionManager.actionInspector.timeline.startY = startY;
        dispatch('setActionInspectorTimelineMinutesY', startY + 5);
        dispatch('setActionInspectorTimelineSecondsY', startY + 55);
        dispatch('setActionInspectorTimelineAxisY', startY + 60);
        return startY;
    },
    setActionInspectorTimelineAxisY(state, axisY){
        state.actionManager.actionInspector.timeline.axisY = axisY;
        return axisY;
    },
    setActionInspectorTimelineEndY(state, endY){
        state.actionManager.actionInspector.timeline.endY = endY;
        return endY;
    },
    setActionInspectorTimelineStartX(state, startX){
        state.actionManager.actionInspector.timeline.startX = startX;
        return startX;
    },
    setActionInspectorTimelineEndX(state, endX){
        endX = (state.player.duration - state.actionManager.actionInspector.timeline.startTime) * state.actionManager.actionInspector.timeline.secondWidth + 30;
        state.actionManager.actionInspector.timeline.endX = endX;
        return endX;
    },
    setActionInspectorTimelineMinutesY(state, minutesY){
        state.actionManager.actionInspector.timeline.minutesY = minutesY;
        return minutesY;
    },
    setActionInspectorTimelineSecondsY(state, secondsY){
        state.actionManager.actionInspector.timeline.secondsY = secondsY;
        return secondsY;
    },
    setActionInspectorTimelineSecondWidth(state, secondWidth){
        state.timeline.secondWidth = secondWidth;
        return secondWidth;
    },
    setActionInspectorTimelineColWidth(state, colWidth){
        state.timeline.colWidth = colWidth;
        return colWidth;
    },
};

