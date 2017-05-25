import {dispatch} from 'mockstate';

export const globalTimelineActions = {
    setGlobalTimeline(state, instance){
        state.globalTimeline.instance = instance;
        return instance;
    },
    setGlobalTimelineWidth(state, width){
        state.globalTimeline.width = width;
        return width;
    },
    setGlobalTimelineHeight(state, height){
        state.globalTimeline.height = height;
        dispatch('setGlobalTimelineEndY', state.touchManager.globalTimeline.startY + height);

        return height;
    },
    setGlobalTimelineCanvas(state, canvas){
        state.globalTimeline.canvas.instance = canvas;
        return canvas;
    },
    setGlobalTimelineVideoMarker(state, videoMarker){
        state.globalTimeline.videoMarker.instance = videoMarker;
        return videoMarker;
    },
    setGlobalTimelineCanvasWidth(state, width){
        state.globalTimeline.canvas.width = width;
        return width;
    },
    setGlobalTimelineCanvasHeight(state, height){
        state.globalTimeline.canvas.height = height;
        return height;
    },
    setGlobalTimelineStage(state, stage){
        state.globalTimeline.stage.instance = stage;
        return stage;
    },
    setGlobalTimelineTimeline(state, timeline){
        state.globalTimeline.instance = timeline;
        return timeline;
    },
    setGlobalTimelineStartTime(state, startTime){
        state.globalTimeline.startTime = startTime;
        return startTime;
    },
    setGlobalTimelineStartY(state, startY){
        state.globalTimeline.startY = startY;
        dispatch('setGlobalTimelineMinutesY', startY + 5);
        dispatch('setGlobalTimelineSecondsY', startY + 55);
        dispatch('setGlobalTimelineAxisY', startY + 60);
        return startY;
    },
    setGlobalTimelineAxisY(state, axisY){
        state.globalTimeline.axisY = axisY;
        return axisY;
    },
    setGlobalTimelineEndY(state, endY){
        state.globalTimeline.endY = endY;
        return endY;
    },
    setGlobalTimelineStartX(state, startX){
        state.globalTimeline.startX = startX;
        return startX;
    },
    setGlobalTimelineEndX(state, endX){
        state.globalTimeline.endX = endX;
        return endX;
    },
    setGlobalTimelineMinutesY(state, minutesY){
        state.globalTimeline.minutesY = minutesY;
        return minutesY;
    },
    setGlobalTimelineSecondsY(state, secondsY){
        state.globalTimeline.secondsY = secondsY;
        return secondsY;
    },
    setGlobalTimelineSecondWidth(state, secondWidth){
        state.globalTimeline.secondWidth = secondWidth;
        return secondWidth;
    },
    setGlobalTimelineColWidth(state, colWidth){
        state.globalTimeline.colWidth = colWidth;
        dispatch('setGlobalTimelineSecondWidth', colWidth / 10);
        return colWidth;
    },
    setGlobalTimelineZoom(state, zoom){
        if (state.player.duration > 420) {
            state.globalTimeline.initialZoomFactor = Math.floor(state.player.duration / 420);
        }
        if (state.globalTimeline.zoomFactor != zoom) {
            state.globalTimeline.zoomFactorChange = true;
        }
        if (zoom < state.globalTimeline.initialZoomFactor) {
            state.globalTimeline.zoomFactor = state.globalTimeline.initialZoomFactor;
        } else {
            state.globalTimeline.zoomFactor = zoom;
        }
        return zoom;
    },
    setGlobalTimelineInitialized(state, initialized){
        state.globalTimeline.initialized = initialized;
        return initialized;
    },
}