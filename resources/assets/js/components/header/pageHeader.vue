<template>
    <section class="content-header">
        <h1>
            {{title}}
        </h1>
        <ol class="breadcrumb">
            <router-link :to="breadcrumb.href" active-class="active" tag="li" v-for="breadcrumb in breadcrumbs">
                {{$t(breadcrumb.title)}}
            </router-link>
        </ol>
    </section>
</template>
<style lang="scss" rel="stylesheet/scss">
    .admin-header {
        height: 97px;
        margin-bottom: 20px;
        .row {
            margin-bottom: 0;
        }
    }
</style>
<script>
    export default{
        props: {
            title: {
                type: String,
                required: true
            },
            breadcrumbs: {
                type: Array,
                default: function () {
                    return []
                }
            }
        }
    }
</script>
