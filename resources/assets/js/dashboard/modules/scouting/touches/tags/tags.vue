<template>
    <div>
        <div class="tags">
            <div class="btn-group" role="group" aria-label="...">
                <tag :tag="tag" v-for="tag in tags" v-on:tag-clicked="tagSelected"></tag>
            </div>
        </div>
        <div class="tags-selected">
            <div class="tags-list" v-dragula="selected" bag="first-bag">
                <div v-for="tag in selected" :key="tag.id">
                    <div class="label" :class="'bg-'+tag.color">
                        <span>{{tag.name}}</span>
                        <span v-if="tag.option"> {{tag.option.name}}</span>
                        <button type="button" @click="deleteTag(tag)" class="close" data-dismiss="modal"
                                aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
</template>
<style lang="scss" rel="stylesheet/scss">
    .tags {
        a {
            border-radius: 0 !important;
            margin: 0 !important;
        }
    }

    .tags-selected {
    }

    .close {
        color: #ffffff !important;
        opacity: 0.8 !important;
    }

    .tags-list {
        display: block;
        width: 100%;
    }

    .tags-list {
        .label {
            padding: 10px;
            font-size: 12px;
            margin-left: 5px;
            margin-top: 5px;
            .close {
                font-size: 16px;
                margin-left: 5px;
            }
        }
    }

    .tags-list div,
    .gu-mirror {
        .label {
            padding: 10px;
            line-height: 1.4;
            font-size: 12px;
            margin-left: 5px;
            margin-top: 5px;
        }
        transition: opacity 0.4s ease-in-out;
    }

    .tags-list div {
        cursor: move;
        cursor: grab;
        cursor: -moz-grab;
        cursor: -webkit-grab;
        display: inline-block;
    }

    .tags-list div:last-child {
        margin-bottom: 0;
    }

    .gu-mirror {
        position: fixed !important;
        margin: 0 !important;
        z-index: 9999 !important;
        opacity: 0.8;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=80)";
        filter: alpha(opacity=80);
        cursor: grabbing;
        cursor: -moz-grabbing;
        cursor: -webkit-grabbing;
        .label {
            .close {
                display: none;
            }
        }
    }

    .gu-hide {
        display: none !important;
    }

    .gu-unselectable {
        -webkit-user-select: none !important;
        -moz-user-select: none !important;
        -ms-user-select: none !important;
        user-select: none !important;
    }

    .gu-transit {
        opacity: 0.2;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=20)";
        filter: alpha(opacity=20);
        .close {
            display: none;
        }
    }

    .tags-list .ex-moved {
        background-color: #e74c3c;
    }

    .tags-list.ex-over {
        background-color: rgba(255, 255, 255, 0.3);
    }

    .handle {
        padding: 0 5px;
        margin-right: 5px;
        background-color: rgba(0, 0, 0, 0.4);
        cursor: move;
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
            },
            deleteTag(tag){
                this.$emit('tag-deleted', tag);
            }
        }
    }
</script>
