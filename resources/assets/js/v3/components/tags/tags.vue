<template>
    <div>
        <div class="tags">
            <div class="btn-group" role="group" aria-label="...">
                <tag :tag="tag" v-for="tag in tags" v-on:tag-clicked="tagSelected"></tag>
            </div>
        </div>
        <div class="tags-selected">
            <ul class="list-inline">
                <li v-for="tag in selectedTags">
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
        data(){
            return {
                selectedTags: []
            }
        },
        components: {
            tag
        },
        methods: {
            tagSelected(tag){
                this.$emit('tag-selected', tag);
                this.selectedTags.push(tag);
                var index = _.findIndex(this.tags, function (o) {
                    return o.name == tag.tag ? tag.tag.name : tag.name
                });
                if (index > -1) {
                    this.tags.splice(index, 1);
                }
                console.log('tag selected', tag)
            }
        }
    }
</script>
