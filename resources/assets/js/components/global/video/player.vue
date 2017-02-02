<template>
    <div>
        <video ref="player"
               class="video-js vjs-default-skin"
               controls preload="auto"
               :poster="poster"
               :data-setup="strSource"
        ></video>
    </div>
</template>
<style>
    #video-canvas {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        padding-right: 15px;
    }
</style>
<script>
    import {dispatch, getState} from 'mockstate';

    export default{
        data(){
            return {
                player: {}
            }
        },
        props: {
            source: {
                type: Object
            },
            poster: {
                type: String
            },
            offset: {
                type: Object,
                default: function () {
                    return {
                        start: false,
                        end: false
                    }
                }
            }
        },
        components: {},
        computed: {
            strSource(){
                return JSON.stringify(this.source)
            }
        },
        mounted(){
            this.initPlayer(this.source);
        },
        methods: {
            api(){
                return this.player
            },
            initPlayer(source){
                var self = this;
                console.log(self.source);
                let config = {
                    fluid: true,
                    source: source.sources[0],
                    techOrder: ['youtube'],
                    playbackRates: [0.25, 0.5, 1, 1.5, 2],
                    plugins: {
                        disableProgress: {},
                        abLoopPlugin: {
                            enabled: false,
                            loopIfBeforeStart: false, //allow video to play normally before the loop section? defaults to true
                            looopIfAfterEnd: true, // defaults to true
                            pauseAfterLooping: false,       //if true, after looping video will pause. Defaults to false
                            pauseBeforeLooping: false,      //if true, before looping video will pause. Defaults to false
                            createButtons: false,  //defaults to true
                        }
                    }
                };
                if (this.offset.start) {
                    config.plugins.dncoffset = {
                        startOffset: this.offset.start,
                        endOffset: this.offset.end
                    }
                }
                this.player = videojs(this.$refs.player, config);
                dispatch('setPlayer', this.player);
                this.player.play();
                this.player.on('timeupdate', function durationSetter(event) {
                    var state = getState('*');
                    if (!state.player.duration) {
                        dispatch('setDuration', state.player.instance.duration());
                        dispatch('setZoom', 1);
                        if (state.player.duration) {
                            dispatch('playerReady', true);
                            state.player.instance.off('timeupdate', durationSetter)
                        }
                    } else {
                        dispatch('playerReady', true);
                        state.player.instance.off('timeupdate', durationSetter)
                    }
                });
                this.player.playbackRate(1);
                this.player.on('timeupdate', ()=> {
                    dispatch('setCurrentTime', this.player.currentTime());
                });
            }
        }
    }
</script>
