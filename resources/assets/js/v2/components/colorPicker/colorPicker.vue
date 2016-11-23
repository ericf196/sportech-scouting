<template>
    <div>
        <compact-picker v-model="colors" @change-color="changeColor"></compact-picker>
    </div>
</template>
<style>

</style>
<script>
    import Compact from 'vue-color';

    export default{
        props: {
            color: Object
        },
        watch: {
            color(val){
                this.colors = val;
            }
        },
        data(){
            return {
                colors: {}
            }
        },
        components: {
            'compact-picker': Compact,
        },
        methods: {
            changeColor(val){
                this.colors = val;
                this.$emit('change-color', val)
            },
        }
    }
</script>
