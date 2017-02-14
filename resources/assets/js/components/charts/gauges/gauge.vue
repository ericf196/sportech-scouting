<template>
    <div :id="containerId" class="gauge">
        <h4 class="text-center"><b>{{title}}</b></h4>
        <canvas :id="elementId"></canvas>
        <div class="goal-wrapper clearfix">
            <span :id="textId" class="gauge-value pull-left"></span>
            <span class="gauge-value pull-left">%</span>
            <span id="goal-text" class="goal-value pull-right">100%</span>
        </div>
    </div>
</template>

<style>
    .gauge {
        background-color: white;
    }

    .goal-wrapper {
        font-size: 16px;
        font-weight: bold;
    }
</style>
<script>
    import uuidMixin from 'base/mixins/uuid'
    import {opts} from './stubs/gaugeOptsStub'
    export default{

        props: {
            value: {required: true},
            title: {default: ''},
            color: {required: true}
        },
        watch: {
            value: function (val) {
                this.gauge.set(val);
            }
        },
        data(){
            return {
                gauge: null,
                opts: {},
                timeoutHandle: null
            }
        },
        computed: {
            elementId(){
                return this.generateUUID()
            },
            containerId(){
                return this.generateUUID()
            },
            textId(){
                return this.generateUUID()
            }
        },
        mixins: [uuidMixin],
        mounted(){
            this.draw();
            window.addEventListener('resize', this.redraw);
        },
        methods: {
            draw() {
                var gaugeLib = require('gauge.js');
                var width = document.getElementById(this.containerId).offsetWidth;
                var height = width / 2;
                document.getElementById(this.elementId).setAttribute('width', width + 'px');
                document.getElementById(this.elementId).setAttribute('height', height + 'px');
                this.opts = _.cloneDeep(opts);
                this.opts.colorStart = this.color;
                this.gauge = new gaugeLib.Gauge(document.getElementById(this.elementId)).setOptions(this.opts);
                this.gauge.maxValue = 100; // set max gauge value
                this.gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
                this.gauge.animationSpeed = 65; // set animation speed (32 is default value)
                this.gauge.set(this.value); // set actual value
                this.gauge.setTextField(document.getElementById(this.textId));
            },
            redraw() {
                document.getElementById(this.elementId).getContext('2d').save();
                document.getElementById(this.elementId).getContext('2d').setTransform(1, 0, 0, 1, 0, 0);
                document.getElementById(this.elementId).getContext('2d').clearRect(0, 0, document.getElementById(this.elementId).getContext('2d').canvas.width, document.getElementById(this.elementId).getContext('2d').canvas.height);
                document.getElementById(this.elementId).getContext('2d').restore();

                if (this.timeoutHandle)
                    window.clearTimeout(this.timeoutHandle);

                this.timeoutHandle = window.setTimeout(this.draw, 250);
            }
        }
    }
</script>