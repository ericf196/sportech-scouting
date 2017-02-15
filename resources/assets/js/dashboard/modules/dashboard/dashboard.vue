<template>
    <div>
        <page-header title="Dashboard" :breadcrumbs="breadcrumbs"></page-header>
        <section class="content">
            <div class="row">
                <div class="col-xs-12 col-md-3">

                    <div class="box box-widget widget-user-2">
                        <!-- Add the bg color to the header using any of the bg-* classes -->
                        <div class="widget-user-header bg-blue">
                            <div class="widget-user-image">
                                <img class="img-circle" :src="$auth.user().image" alt="User Avatar">
                            </div>
                            <!-- /.widget-user-image -->
                            <h3 class="widget-user-username">{{$auth.user().full_name}}</h3>
                            <h5 class="widget-user-desc">{{userTitle}}</h5>
                        </div>
                        <router-link :to="{ name: 'user.view'}" class="btn btn-primary btn-block btn-flat">
                            {{$t('dashboard.go_to_ptofile')}}
                        </router-link>
                    </div>
                    <div class="box box-primary">
                        <div class="box-header">
                            <h3 class="box-title">{{$t('dashboard.latest_scouting')}}</h3>
                        </div>
                        <div class="box-body latest-box-body">
                            <ul class="products-list product-list-in-box" v-if="latestScouting">
                                <li class="item product-item">
                                    <div class="latest-product">
                                        <router-link
                                                :to="{ name: 'scoutings.touch', params: { id: latestScouting.id }}">
                                            {{latestScouting.name}}
                                        </router-link>
                                        <span class="product-description">
                                            {{latestScouting.description}}
                                        </span>
                                    </div>
                                </li>
                            </ul>
                            <h4 v-else>{{$t('dashboard.no_scouting')}}</h4>
                            <router-link :to="{ name: 'scoutings.create'}"
                                         class="btn btn-success btn-block">
                                {{$t('dashboard.create_scouting')}}

                            </router-link>

                        </div>
                    </div>
                    <div class="box box-primary">
                        <div class="box-header">
                            <h3 class="box-title">{{$t('dashboard.latest_report')}}</h3>
                        </div>
                        <div class="box-body">
                            <ul class="products-list product-list-in-box" v-if="latestReport">
                                <li class="item product-item">
                                    <div class="latest-product">
                                        <router-link :to="{ name: 'reports.view', params: { id: latestReport.id }}">
                                            {{latestReport.name}}
                                        </router-link>
                                        <span class="product-description">
                                            {{latestReport.description}}
                                        </span>
                                    </div>
                                </li>
                            </ul>
                            <h4 v-else>{{$t('dashboard.no_report')}}</h4>
                            <router-link :to="{ name: 'reports.create'}"
                                         class="btn btn-success btn-block">
                                {{$t('dashboard.create_report')}}
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-md-9">
                    <div class="row">
                        <div class="col-xs-12 col-md-10">
                            <div class="box box-primary">
                                <div class="box-header">
                                    <h3 class="box-title">{{$t('dashboard.global_ranking')}}</h3>
                                </div>
                                <div class="box-body">
                                    <ul class="products-list product-list-in-box">
                                        <li class="item" v-for="rank in ranking">
                                            <div class="product-rank pull-left">
                                                {{rank.rank}}
                                            </div>
                                            <div class="product-img">
                                                <img :src="rank.user.image" alt="Product Image">
                                            </div>
                                            <div class="product-info">
                                                <h4 class="pull-left">{{rank.user.full_name}}</h4>
                                                <img :src="rank.user.athlete.country.flag" class="product-flag" alt="">
                                                <span class="product-points pull-right">{{rank.points}} pts
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-md-2">
                            <div class="box box-primary">
                                <div class="box-header">
                                    <h3 class="box-title text-center">{{$t('admin.quick_navigation')}}</h3>
                                </div>
                                <div class="box-body text-center">
                                    <router-link :to="{ name: 'scoutings.list'}" class="btn btn-app btn-primary">
                                        <i class="fa fa-list"></i>
                                        {{$t('admin.scoutings')}}
                                    </router-link>
                                    <a class="btn btn-app">
                                        <i class="fa fa-file-text"></i>
                                        {{$t('admin.reports')}}
                                    </a>
                                    <router-link :to="{ name: 'athletes.list'}" class="btn btn-app">
                                        <i class="fa fa-users"></i>
                                        {{$t('admin.athletes')}}

                                    </router-link>
                                    <router-link :to="{ name: 'events.list'}" class="btn btn-app">
                                        <i class="fa fa-calendar"></i>
                                        {{$t('admin.events')}}

                                    </router-link>
                                    <router-link :to="{ name: 'championships.list'}" class="btn btn-app">
                                        <i class="fa fa-trophy"></i>
                                        {{$t('admin.championships')}}

                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<style>
    .product-rank {
        font-size: 31px;
        width: 70px;
        text-align: center;
        color: #AAA;
    }

    .product-points {
        font-size: 20px;
        background: #00c0ef;
        margin: 9px;
        padding: 0 5px;
        min-width: 61px;
        text-align: center;
        color: white;
    }

    .product-img {
        padding-right: 5px;
    }

    .products-list .latest-product {
        margin-left: 0 !important;
    }

    .latest-product a {
        font-size: 20px;
        font-weight: bold;
    }

    .product-item {
        border: 1px solid #f4f4f4;
        padding: 5px !important;
        margin-bottom: 10px !important;
        background: #f7f7f7 !important
    }

    .latest-box-body {
        padding-top: 0 !important;
    }

    .product-flag {
        padding: 10px;
    }
</style>
<script>
    import pageHeader from 'base/components/header/pageHeader.vue'
    import userStatisticsService from 'base/dashboard/services/user/userStatisticsService'
    import rankingService from 'base/dashboard/services/ranking/rankingService'
    import scoutingService from 'base/dashboard/services/scoutings/scoutingService'
    import reportsService from 'base/dashboard/services/reports/reportService'
    import dashboardLocales from 'base/lang/admin/dashboard/dashboard.js';

    export default{
        locales: dashboardLocales,
        data(){
            return {
                breadcrumbs: [
                    {
                        href: '/',
                        title: 'Home'
                    },
                ],
                latestScouting: null,
                latestReport: null,
                summary: {
                    scountings: 0,
                    reports: 0,
                    completedChallenges: 0,
                    rank: 0,
                    points: 0
                },
                ranking: []
            }
        },
        components: {
            pageHeader
        },
        computed: {
            userTitle(){
                return this.$auth.user().athlete ? this.$auth.user().athlete.sport.name + ' ' + this.$auth.user().athlete.specialty.name : ''
            },
        },
        mounted(){
            this.loadRanking();
            this.loadLatestReport();
            this.loadLatestScouting();
        },
        methods: {
            loadRanking(){
                rankingService.ranking((response)=> {
                    this.ranking = response.data;
                }, (response)=> {

                })
            },
            loadLatestReport(){
                reportsService.latest((response)=> {
                    this.latestReport = response.data;
                }, (response)=> {

                })
            },
            loadLatestScouting(){
                scoutingService.latest((response)=> {
                    this.latestScouting = response.data;
                }, (response)=> {

                })
            },
        }
    }
</script>
