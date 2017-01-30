<template>
    <div class="vue-color__compact">
        <ul class="vue-color__compact__colors">
            <li class="vue-color__compact__color-item" v-for="c in defaultColors"
                @click="handlerClick(c)"
                :class="{'vue-color__compact__color-item--white': c === '#FFFFFF' }"
                :style="{background: c}">
                <div class="vue-color__compact__dot" v-show="c === pick"></div>
            </li>
        </ul>
    </div>
</template>

<script>
    import editableInput from './common/EditableInput.vue'
    import tinycolor from 'tinycolor2'

    const defaultColors = [
        '#4D4D4D', '#999999', '#FFFFFF', '#F44E3B', '#FE9200', '#FCDC00',
        '#DBDF00', '#A4DD00', '#68CCCA', '#73D8FF', '#AEA1FF', '#FDA1FF',
        '#333333', '#808080', '#CCCCCC', '#D33115', '#E27300', '#FCC400',
        '#B0BC00', '#68BC00', '#16A5A5', '#009CE0', '#7B64FF', '#FA28FF',
        '#000000', '#666666', '#B3B3B3', '#9F0500', '#C45100', '#FB9E00',
        '#808900', '#194D33', '#0C797D', '#0062B1', '#653294', '#AB149E'
    ]

    function _colorChange(data, oldHue) {
        if (data) {
            if (data.a && data.a > 1) {
                data.a = 1
            }
        } else {
            data = {a: 1}
        }


        var color = data.hex ? tinycolor(data.hex) : tinycolor(data)
        var hsl = color.toHsl()
        var hsv = color.toHsv()
        if (hsl.s === 0) {
            hsl.h = data.h || oldHue || 0
            hsv.h = data.h || oldHue || 0
        }
        return {
            hsl: hsl,
            hex: color.toHexString().toUpperCase(),
            rgba: color.toRgb(),
            hsv: hsv,
            oldHue: data.h || oldHue || hsl.h,
            source: data.source,
            a: data.a
        }
    }

    export default {
        name: 'Compact',
        props: ['value'],
        components: {
            'ed-in': editableInput
        },
        computed: {
            pick () {
                return this.val.hex
            },
            colors: {
                get () {
                    return this.val
                },
                set (newVal) {
                    this.val = newVal
                    this.$emit('change-color', newVal)
                }
            }
        },
        data () {
            return {
                defaultColors: defaultColors,
                val: _colorChange(this.value)
            }
        },
        methods: {
            colorChange (data, oldHue) {
                this.colors = _colorChange(data, oldHue || this.oldHue)
                this.oldHue = this.colors.hsl.h
            },
            isValidHex (hex) {
                return tinycolor(hex).isValid()
            },
            simpleCheckForValidColor (data) {
                var keysToCheck = ['r', 'g', 'b', 'a', 'h', 's', 'a', 'v']
                var checked = 0
                var passed = 0

                for (var i = 0; i < keysToCheck.length; i++) {
                    var letter = keysToCheck[i]
                    if (data[letter]) {
                        checked++
                        if (!isNaN(data[letter])) {
                            passed++
                        }
                    }
                }

                if (checked === passed) {
                    return data
                }
            },
            handlerClick (c) {
                this.colorChange({
                    hex: c,
                    source: 'hex'
                })
            },
            onChange (data) {
                if (!data) {
                    return
                }
                if (data.hex) {
                    this.isValidHex(data.hex) && this.colorChange({
                        hex: data.hex,
                        source: 'hex'
                    })
                } else if (data.r || data.g || data.b) {
                    this.colorChange({
                        r: data.r || this.colors.rgba.r,
                        g: data.g || this.colors.rgba.g,
                        b: data.b || this.colors.rgba.b,
                        a: data.a || this.colors.rgba.a,
                        source: 'rgba'
                    })
                }
            }
        }
    }

</script>

<style>
    .vue-color__compact {
        padding-top: 5px;
        padding-left: 5px;
        width: 100%;
    }

    .vue-color__compact__colors {
        overflow: hidden;
        padding: 0;
        margin: 0;
    }

    .vue-color__compact__color-item {
        list-style: none;
        width: 15px;
        height: 15px;
        float: left;
        margin-right: 5px;
        margin-bottom: 5px;
        position: relative;
        cursor: pointer;
    }

    .vue-color__compact__color-item--white {
        box-shadow: inset 0 0 0 1px #ddd

    }

    .vue-color__compact__dot {
        background: #000

    }

    .vue-color__compact__dot {
        position: absolute;
        top: 5px;
        right: 5px;
        bottom: 5px;
        left: 5px;
        border-radius: 50%;
        opacity: 1;
        background: #fff;
    }

    .vue-color__compact__fields {
        display: flex;
        position: relative;
        padding-bottom: 6px;
        padding-right: 5px;
    }

    .vue-color__editable-input__input {
        width: 70%;
        padding-left: 30%;
        background: none;
        font-size: 12px;
        color: #333;
        height: 16px;;
    }

    .vue-color__editable-input__label {
        position: absolute;
        top: 3px;
        left: 0;
        line-height: 16px;
        text-transform: uppercase;
        font-size: 12px;
        color: #999;
    }

    .vue-color__compact__pick-color {
        position: absolute;
        top: 6px;
        left: 5px;
        height: 9px;
        width: 9px;
    }

    .vue-color__compact__col-3 {
        flex: 1

    }

    .vue_color__compact__col-hex {
        flex: 2

    }

    .vue-color__editable-input__input {
        width: 80%;
        padding-left: 20%;
    }

    .vue-color__editable-input__label {
        display: none
    }
</style>
