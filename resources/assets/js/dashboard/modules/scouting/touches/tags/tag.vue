<template>
    <tag-dropdown v-if="tag.dropdown" v-on:option-clicked="dropdownOptionClicked" :tag="tag"></tag-dropdown>
    <div v-else class="tag-dropdown">
        <a class=" btn tag" v-on:click.prevent="tagClicked" :class="'bg-'+tag.color">{{tag.name}}</a>
    </div>
</template>
<style>
    .tag {
        display: inline-block;
        color: #717171;
        background: #FFF;
        -webkit-box-shadow: 0 1px 1px 0 rgba(180, 180, 180, 0.1);
        box-shadow: 0 1px 1px 0 rgba(180, 180, 180, 0.1);
        -webkit-transition: all .1s ease-in-out;
        -moz-transition: all .1s ease-in-out;
        -o-transition: all .1s ease-in-out;
        -ms-transition: all .1s ease-in-out;
        transition: all .1s ease-in-out;
        border-radius: 2px;
        margin: 0 3px 6px 0;
        padding: 5px 10px;
        text-decoration: none;
        cursor: pointer;
    }

    .tags .tag:hover {
        border-color: #08C;
    }

    .tags .tag.primary {
        color: #FFF;
        background-color: #428BCA;
        border-color: #357EBD
    }

    .tags .tag.success {
        color: #FFF;
        background-color: #5CB85C;
        border-color: #4CAE4C
    }

    .tags .tag.info {
        color: #FFF;
        background-color: #5BC0DE;
        border-color: #46B8DA
    }

    .tags .tag.warning {
        color: #FFF;
        background-color: #F0AD4E;
        border-color: #EEA236
    }

    .tags .tag.danger {
        color: #FFF;
        background-color: #D9534F;
        border-color: #D43F3A
    }
</style>
<script>
    import tagDropdown from './tagDropdown.vue'

    export default{
        props: {
            tag: {}
        },
        components: {
            tagDropdown
        },
        methods: {
            dropdownOptionClicked(tag){
                this.$emit('tag-clicked', tag)
            },
            tagClicked(){
                this.$emit('tag-clicked', this.tag)
            }
        }
    }
</script>
