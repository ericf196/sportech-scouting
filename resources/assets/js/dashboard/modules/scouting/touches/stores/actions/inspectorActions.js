import {dispatch} from 'mockstate';

export const inspectorActions = {
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
}