<template>
    <div id="globalTimelineBox" class="box box-solid">
        <div class="box-header">
            <!-- tools box -->
            <div class="pull-right box-tools">
                <button v-on:click.prevent="globalZoomIn" type="button"
                        class="btn btn-success btn-sm" data-toggle="tooltip"
                        title="Zoom In">
                    <i class="fa fa-search-plus"></i>
                </button>
                <button v-on:click.prevent="globalZoomOut" type="button"
                        class="btn btn-danger btn-sm"
                        data-toggle="tooltip" title="Zoom Out">
                    <i class="fa fa-search-minus"></i>
                </button>
            </div>
            <!-- /. tools -->

            <i class="fa fa-calendar"></i>

            <h3 class="box-title">
                {{$t('scoutings.globaltimeline')}}
            </h3>
        </div>
        <div class="box-body">
            <div id='globalTimeline'></div>
        </div>
    </div>
</template>
<style>

</style>
<script>
    import {dispatch, getState} from 'mockstate';
    import globalTimelineSketch from '../sketch/globalTimelineSketch'
    import scoutingsLocales from 'base/lang/admin/scoutings/scoutings.js';

    export default{
        locales: scoutingsLocales,
        data(){
            return {
                open: true
            }
        },
        watch: {
            'open': function (open, oldOpen) {
                if (open) {
                    p.start();
                } else {
                    p.stop();
                }
            }
        },
        created(){

        },
        mounted(){
            window.p = new p5(globalTimelineSketch);
        },
        methods: {
            globalZoomIn()
            {
                var state = getState('*');
                dispatch('setGlobalTimelineZoom', state.timeline.zoomFactor + 1);
                dispatch('setGlobalTimelineInitialized', false);
            },
            globalZoomOut()
            {
                var state = getState('*');
                if (state.globalTimeline.zoomFactor > state.globalTimeline.initialZoomFactor) {
                    dispatch('setGlobalTimelineZoom', state.timeline.zoomFactor - 1);
                    dispatch('setGlobalTimelineInitialized', false);
                }
            },
        }
    }
</script>
