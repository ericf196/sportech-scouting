<template>
    <div id="inspectorBox" class="box box-solid collapsed-box">
        <div class="box-header">
            <!-- tools box -->
            <div class="pull-right box-tools">
                <button type="button" class="btn btn-primary btn-sm" id="inspectorToogler" v-on:click="toogleOpen"
                        data-widget="collapse"
                        data-toggle="tooltip" title=""
                        data-original-title="Collapse">
                    <i class="fa fa-plus"></i></button>
            </div>
            <!-- /. tools -->

            <i class="fa fa-calendar"></i>

            <h3 class="box-title">
                Inspector
            </h3>
        </div>
        <div class="box-body">
            <div id='inspector'></div>
        </div>
    </div>
</template>
<style>

</style>
<script>
    import {dispacth, getState} from 'mockstate';
    import inspectorSketch from '../../sketch/inspectorSketch'
    export default{
        data(){
            return {
                open: false
            }
        },
        watch: {
            'open': function (open, oldOpen) {
                if (open) {
                    inspector.start();
                } else {
                    inspector.stop();
                }
            }
        },
        created(){
            bus.$on('toogle-timeline', ()=> {
                this.open = !this.open;
                $.AdminLTE.boxWidget.collapse($('#inspectorToogler'));
            })
        },
        mounted(){
            window.inspector = new p5(inspectorSketch);
            console.log(window.inspector);
        },
        methods: {
            toogleOpen(){
                this.open = !this.open;
            }
        }
    }
</script>
