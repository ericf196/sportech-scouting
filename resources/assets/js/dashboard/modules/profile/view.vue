<template>
    <div>
        <page-header :title="$t('users.my_profile')" :breadcrumbs="breadcrumbs"></page-header>
        <section class="content">
            <div class="row">
                <div class="col-md-3">
                    <div class="box box-primary">
                        <div class="box-body box-profile">
                            <img class="profile-user-img img-responsive img-circle"
                                 :src="$auth.user().image" alt="User profile picture">

                            <h3 class="profile-username text-center">{{$auth.user().full_name}}</h3>

                            <p class="text-muted text-center">{{userTitle}}</p>
                            <router-link :to="{name:'user.update'}" class="btn btn-primary btn-block">
                                <b>
                                    <i class="fa fa-pencil"></i>
                                    {{$t('users.update_profile')}}
                                </b>
                            </router-link>
                        </div>
                    </div>
                    <div class="box box-primary">
                        <div class="box-header with-border">
                            <h3 class="box-title"> {{$t('users.about_me')}}</h3>
                        </div>
                        <div class="box-body">
                            <p class="text-muted">
                                <strong>
                                    <i class="fa fa-soccer-ball-o margin-r-5"></i>
                                    {{$t('users.sport')}}</strong>
                                {{userSport}}
                            </p>
                            <p class="text-muted"><strong>
                                <i class="fa fa-star margin-r-5"></i>
                                {{$t('users.specialty')}}</strong> {{userSpecialty}}
                            </p>
                            <p>
                                <strong>
                                    <i class="fa fa-map-marker margin-r-5"></i>
                                    {{$t('users.country')}}</strong>

                                <img v-if="userCountryFlag" class="athlete-country-flag" :src="userCountryFlag" alt="">
                                {{userCountry}}
                            </p>
                            <p>
                                <strong>
                                    <i class="fa fa-map-marker margin-r-5"></i>
                                    {{$t('users.category')}}</strong>

                                {{userCategory}}
                            </p>
                            <p>
                                <strong>
                                    <i class="fa fa-map-marker margin-r-5"></i>
                                    {{$t('users.gender')}}</strong>

                                {{userGender}}
                            </p>

                        </div>
                    </div>
                </div>
                <div class="col-md-9">
                    <div class="row">
                        <div class="col-xs-12 col-md-3">
                            <div class="small-box bg-aqua">
                                <div class="inner">
                                    <h3>{{summary.ranking}}</h3>
                                    <h5>{{summary.points}}pts</h5>

                                    <p>{{$t('users.overall_ranking')}}</p>
                                </div>
                                <div class="icon">
                                    <i class="fa fa-trophy"></i>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-md-3">
                            <div class="small-box bg-green">
                                <div class="inner">
                                    <h3>{{summary.completedChallenges}}</h3>
                                    <h5>&nbsp;</h5>
                                    <p>{{$t('challenges.completed_challenges')}}</p>
                                </div>
                                <div class="icon">
                                    <i class="fa fa-star"></i>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-md-3">
                            <div class="small-box bg-yellow">
                                <div class="inner">
                                    <h3>{{summary.scoutings}}</h3>
                                    <h5>&nbsp;</h5>
                                    <p>{{$t('users.scoutings')}}</p>
                                </div>
                                <div class="icon">
                                    <i class="fa fa-video-camera"></i>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-md-3">
                            <div class="small-box bg-blue">
                                <div class="inner">
                                    <h3>{{summary.reports}}</h3>
                                    <h5>&nbsp;</h5>
                                    <p>{{$t('users.reports')}}</p>
                                </div>
                                <div class="icon">
                                    <i class="fa fa-pie-chart"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="box box-primary">
                                        <div class="box-header with-border">
                                            <h3 class="box-title">{{$t('challenges.in_progress_challenges')}}
                                                {{inProgress.length}}/5</h3>
                                        </div>
                                        <!-- /.box-header -->
                                        <div class="box-body">
                                            <ul class="products-list product-list-in-box">
                                                <li class="item" v-for="challenge in inProgress">
                                                    <div class="product-info">
                                                        <a href="javascript:void(0)" class="product-title">
                                                            {{challenge.name}}
                                                            <span class="label"
                                                                  :class="'bg-'+challenge.difficultyColor">
                                                                {{challenge.difficulty}}
                                                            </span>
                                                            <span class="label pull-right"
                                                                  :class="'bg-'+challenge.difficultyColor">
                                                                +{{challenge.points}}Pts
                                                            </span>
                                                        </a>
                                                        <span class="product-description">
                                                            <div class="progress-group">
                                                                <span class="progress-text">&nbsp;</span>
                                                                <span class="progress-number"><b>{{challenge.completion_percentage}}</b>/100%
                                                                </span>
                                                                <div class="progress sm">
                                                                    <div class="progress-bar"
                                                                         :class="'progress-bar-'+challenge.difficultyColor"
                                                                         :style="{width: challenge.completion_percentage+'%'}"></div>
                                                                </div>
                                                            </div>
                                                        </span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <div class="box box-primary">
                                        <div class="box-header with-border">
                                            <h3 class="box-title">{{$t('challenges.completed_challenges')}}</h3>
                                        </div>
                                        <div class="box-body">
                                            <ul class="products-list product-list-in-box">
                                                <li class="item" v-for="challenge in completed">
                                                    <div class="product-info">
                                                        <a href="javascript:void(0)" class="product-title">
                                                            {{challenge.name}}
                                                            <span class="label"
                                                                  :class="'bg-'+challenge.difficultyColor">
                                                                {{challenge.difficulty}}
                                                            </span>
                                                            <span class="label pull-right"
                                                                  :class="'bg-'+challenge.difficultyColor">
                                                                +{{challenge.points}}Pts
                                                            </span>
                                                        </a>
                                                        <span class="product-description">
                                                            <div class="progress-group">
                                                                <span class="progress-text">&nbsp;</span>
                                                                <span class="progress-number"><b>{{challenge.completion_percentage}}</b>/100%
                                                                </span>
                                                                <div class="progress sm">
                                                                    <div class="progress-bar progress-bar-green"
                                                                         :style="{width: challenge.completion_percentage+'%'}"></div>
                                                                </div>
                                                            </div>
                                                        </span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="box box-primary">
                                        <div class="box-header with-border">
                                            <h3 class="box-title">{{$t('challenges.available_challenges')}}</h3>
                                        </div>
                                        <div class="box-body">
                                            <div class="responsive-table">
                                                <dnc-table ref="table" v-on:data-loaded="dataLoaded" :ajax="ajax"
                                                           :columns="columns"></dnc-table>
                                            </div>
                                        </div>
                                    </div>
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
    .products-list .product-info {
        margin-left: 0 !important;
    }
</style>
<script>
    import usersLocales from 'base/lang/admin/users/users.js';
    import pageHeader from 'base/components/header/pageHeader.vue'
    import dncTable from 'base/components/table/dnc-datatable.vue';
    import userChallengeService from 'base/dashboard/services/user/userChallengeService'
    import userStatisticsService from 'base/dashboard/services/user/userStatisticsService'

    export default{
        locales: usersLocales,
        components: {
            pageHeader,
            dncTable
        },
        data(){
            return {
                completed: [],
                inProgress: [],
                summary: {
                    scountings: 0,
                    reports: 0,
                    completedChallenges: 0,
                    rank: 0,
                    points: 0
                }
            }
        },
        computed: {
            breadcrumbs(){
                return [
                    {
                        href: '/dashboard',
                        title: this.$t('admin.home')
                    },
                    {
                        href: '/my-profile',
                        title: this.$t('users.my_profile')
                    }
                ]
            },
            userTitle(){
                return this.$auth.user().athlete ? this.$auth.user().athlete.sport.name + ' ' + this.$auth.user().athlete.specialty.name : ''
            },
            userSport(){
                return this.$auth.user().athlete ? this.$auth.user().athlete.sport.name : 'Not specified';
            },
            userSpecialty(){
                return this.$auth.user().athlete ? this.$auth.user().athlete.specialty.name : 'Not specified';
            },
            userCategory(){
                return this.$auth.user().athlete ? this.$auth.user().athlete.category.name : 'Not specified';
            },
            userCountry(){
                return this.$auth.user().athlete ? this.$auth.user().athlete.country.name : 'Not specified';
            },
            userCountryFlag(){
                return this.$auth.user().athlete ? this.$auth.user().athlete.country.flag : null;
            },
            userGender(){
                return this.$auth.user().athlete ? this.$auth.user().athlete.gender.name : 'Not specified';
            },
            columns(){
                return [
                    {data: 'name', name: 'name', title: this.$t('challenges.name')},
                    {data: 'points', name: 'points', title: this.$t('challenges.points')},
                    {
                        title: this.$t('challenges.difficulty'),
                        data: 'difficulty',
                        render: this.renderDifficulty
                    },
                    {
                        title: this.$t('challenges.actions'),
                        orderable: false,
                        searchable: false,
                        render: this.renderActions
                    },
                ]
            },
            ajax(){
                return {
                    url: 'api/user/challenges/available?token=' + this.$auth.token()
                }
            },
        },
        mounted(){
            this.loadInProgress();
            this.loadCompleted();
            this.loadStatistics();
        },
        methods: {
            dataLoaded(data){

            },
            renderActions(data, type, full, meta){
                const blockedClass = !full.blocked ? "red" : "green"
                return `<div class="action-buttons"><a class="btn btn-sm btn-success"  v-on:click="$parent.acceptChallenge(${full.id})">Accept Challenge</a>`
            },
            renderDifficulty(data, type, full, meta){
                return `<span class="label bg-${full.difficultyColor}">${full.difficulty} </span>`
            },
            loadInProgress(){
                userChallengeService.inProgress((response)=> {
                    this.inProgress = response.data;
                }, (response)=> {

                })
            },
            loadCompleted(){
                userChallengeService.completed((response)=> {
                    this.completed = response.data;
                }, (response)=> {

                })
            },
            loadStatistics(){
                userStatisticsService.summary((response)=> {
                    this.summary = response.data;
                }, (response)=> {

                })
            },
            acceptChallenge(challengeId){
                userChallengeService.acceptChallenge(challengeId,
                        (response)=> {
                            this.$root.successToast(response.message);
                            this.$refs.table.reload();
                            this.loadInProgress();
                        },
                        (response)=> {
                            if (response.validation) {
                                for (var error in response.errors) {
                                    if (response.errors.hasOwnProperty(error)) {
                                        response.errors[error].forEach((validationError) => {
                                            self.$root.errorToast(validationError)
                                        })
                                    }
                                }
                            } else {
                                self.$root.errorToast(response.errors)
                            }
                        })
            }
        }
    }
</script>