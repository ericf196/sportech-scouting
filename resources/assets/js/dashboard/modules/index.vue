<template>
    <div>
        <page-header title="Dashboard" :breadcrumbs="breadcrumbs"></page-header>
        <section class="content">
            <div class="box">
                <div class="box-header">
                    <h3 class="box-title">Scouting Menu</h3>
                </div>
                <div class="box-body">
                    <router-link :to="{ name: 'login'}" class="btn btn-app"><i class="fa fa-lock"></i> Login
                    </router-link>
                </div>
            </div>
        </section>
    </div>
</template>

<style>
    footer {
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
    }
</style>
<script>
    import pageHeader from 'base/components/header/pageHeader.vue'

    export default{
        data(){
            return {
                breadcrumbs: [
                    {
                        href: '/',
                        title: 'Home'
                    },
                ]
            }
        },
        components: {
            pageHeader,
        },

    }
</script>
