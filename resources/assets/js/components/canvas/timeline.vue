<template>
    <div id="timelineBox" class="box box-solid">
        <div class="box-header">
            <!-- tools box -->
            <div class="pull-right box-tools">
                <button v-on:click.prevent="zoomIn" type="button"
                        class="btn btn-success btn-sm" data-toggle="tooltip"
                        title="Zoom In">
                    <i class="fa fa-search-plus"></i></button>
                <button v-on:click.prevent="zoomOut" type="button"
                        class="btn btn-danger btn-sm"
                        data-toggle="tooltip" title="Zoom Out">
                    <i class="fa fa-search-minus"></i></button>
                <button type="button" class="btn btn-primary btn-sm" id="timelineToogler" v-on:click="toogleOpen"
                        data-widget="collapse"
                        data-toggle="tooltip" title=""
                        data-original-title="Collapse">
                    <i class="fa fa-minus"></i></button>
            </div>
            <!-- /. tools -->

            <i class="fa fa-calendar"></i>

            <h3 class="box-title">
                Timeline
            </h3>
        </div>
        <div class="box-body">
            <div id='timeline'></div>
        </div>
    </div>
</template>
<style>

</style>
<script>
    import {dispatch, getState} from 'mockstate';
    import timelineSketch from '../../sketch/timelineSketch'
    export default{
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
            bus.$on('toogle-timeline', ()=> {
                this.open = !this.open;
                $.AdminLTE.boxWidget.collapse($('#timelineToogler'));
            })
        },
        mounted(){
            window.p = new p5(timelineSketch);
        },
        methods: {
            toogleOpen(){
                this.open = !this.open;
            },
            zoomIn()
            {
                var state = getState('*');
                dispatch('setZoom', state.timeline.zoomFactor + 1);
                dispatch('setInitialized', false);
            },
            zoomOut()
            {
                var state = getState('*');
                if (state.timeline.zoomFactor > state.timeline.initialZoomFactor) {
                    dispatch('setZoom', state.timeline.zoomFactor - 1);
                    dispatch('setInitialized', false);
                }
            },
        }
    }
</script>
