<template>
    <div class="dropdown tag-dropdown">
        <a class="dropdown-toggle btn tag"
           data-toggle="dropdown" aria-expanded="false" :id="id">{{tag.name}}
            <span class="fa fa-caret-down"></span></a>
        <ul class="dropdown-menu" :aria-labelledby="id">
            <li v-for="opt in tag.options">
                <a href="#" v-on:click.prevent="clickOpt(opt)">{{opt.name}}</a>
            </li>
        </ul>
    </div>
</template>
<style>
    .tag-dropdown {
        display: inline-block !important;
    }
</style>
<script>
    import uuid from '../../mixins/uuid'
    export default{
        props: {
            tag: {},
        },
        data(){
            return {
                id: ''
            }
        },
        mixins: [uuid],
        mounted(){
            this.id = this.generateUUID();
        },
        methods: {
            clickOpt(opt){
                this.$emit('option-clicked', {tag: this.tag, option: opt})
            }
        }
    }
</script>
