<template>
    <video ref="player"
           class="video-js vjs-default-skin"
           controls preload="auto"
           :poster="poster"
           :data-setup="strSource"
    ></video>
</template>

<script>
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
            var self = this;
            let config = {
                fluid: true,
                source: self.source.sources[0],
                techOrder: ['youtube'],
                playbackRates: [0.5, 1, 1.5, 2],
                plugins: {
                    videoJsResolutionSwitcher: {
                        default: 'low',
                        dynamicLabel: true
                    }
                }
            };
            if (this.offset.start) {
                config.plugins.dncoffset = {
                    startOffset: this.offset.start,
                    endOffset: this.offset.end
                }
            }
            this.player = videojs(this.$refs.player, config)
        },
        methods: {
            api(){
                return this.player
            }
        }
    }
</script>
