<template>
    <div>
        <page-header title="Dashboard" :breadcrumbs="breadcrumbs"></page-header>
        <section class="content">
            <div class="box">
                <div class="box-header">
                    <h3 class="box-title">Scouting Menu</h3>
                </div>
                <div class="box-body">
                    <router-link :to="{ name: 'scoutings.list'}" class="btn btn-app"><i class="fa fa-edit"></i> Scouting
                        List
                    </router-link>
                    <a class="btn btn-app">
                        <i class="fa fa-play"></i> Reports
                    </a>
                    <router-link :to="{ name: 'athletes.list'}" class="btn btn-app"><i class="fa fa-edit"></i> Athletes
                        List
                    </router-link>
                </div>
            </div>
        </section>
    </div>
</template>

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
            pageHeader
        }
    }
</script>
