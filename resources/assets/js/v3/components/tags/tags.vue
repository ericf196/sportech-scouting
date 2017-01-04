<template>
    <div>
        <div class="tags">
            <div class="btn-group" role="group" aria-label="...">
                <tag :tag="tag" v-for="tag in tags" v-on:tag-clicked="tagSelected"></tag>
            </div>
        </div>
        <div class="tags-selected">
            <ul class="list-inline">
                <li v-for="tag in selected">
                    <div class="label label-info">
                        <span v-if="tag.tag">{{tag.tag.name}}</span>
                        <span v-else>{{tag.name}}</span>
                        <span v-if="tag.option">({{tag.option.name}})</span>
                    </div>
                </li>
        </div>
    </div>
</template>
<style lang="sass" rel="stylesheet/scss">
    .tags {
        a {
            border-radius: 0 !important;
            margin: 0 !important;
        }
    }
</style>
<script>

    import tag from './tag.vue'
    export default{
        props: {
            selected: {
                type: Array,
                default: function () {
                    return [];
                }
            },
            tags: {
                type: Array,
                default: function () {
                    return [];
                }
            }
        },
        components: {
            tag
        },
        methods: {
            tagSelected(tag){
                this.$emit('tag-selected', tag);
            }
        }
    }
</script>
