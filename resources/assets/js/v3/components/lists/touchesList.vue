<template>
    <div class="box box-solid ">
        <div class="box-header">
            <i class="fa fa-map-marker"></i>
            <h3 class="box-title">
                Touches
            </h3>
        </div>
        <div class="box-body">
            <ul class="todo-list ui-sortable" v-if="touches.length">
                <li v-for="touch in touches">
                    <div class="pull-left"
                         :style="'background:'+touch.color.hex+'; height:20px; width:20px;margin-top: 1px;'"></div>
                    <span class="text">{{touch.text}}</span>
                    <!-- Emphasis label -->
                    <small class="label label-success"><i class="fa fa-clock-o"></i> Start at {{toHHMMSS(touch.start)}}
                    </small>
                    <small class="label label-danger"><i class="fa fa-clock-o"></i> End at {{toHHMMSS(touch.end)}}
                    </small>
                    <!-- General tools such as edit or delete-->
                    <div class="tools">
                        <i class="fa fa-edit" v-on:click="editTouch(touch)"></i>
                        <i class="fa fa-trash-o" v-on:click="removeTouch(touch)"></i>
                    </div>
                </li>
            </ul>
            <h3 v-if="!touches.length" class="text-center">There are no touches</h3>
        </div>
    </div>
</template>
<style>

</style>
<script>
    import {getState, subscribe} from 'mockstate';
    import TimeConverter from '../../sketch/components/utils/TimeConverter'
    export default{
        data(){
            return {
                touches: getState('*').touchManager.touches
            }
        },
        created(){
            subscribe(this, (data) => {
                if (data.action == 'addTouch' || data.action == 'removeTouch' || data.action == 'editTouch') {
                    this.touches = getState('*').touchManager.touches
                }
            })
        },
        methods: {
            editTouch(touch){
                bus.$emit('edit-touch', touch)
            },
            removeTouch(touch){
                bus.$emit('remove-touch', touch)
            },
            toHHMMSS(secs){
                return TimeConverter.toHHMMSS(secs)
            }
        }
    }
</script>
