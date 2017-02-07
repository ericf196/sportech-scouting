<template>
    <div>
        <page-header title="My Profile" :breadcrumbs="breadcrumbs"></page-header>
        <section class="content">
            <div class="row">
                <div class="col-md-3">
                    <!-- Profile Image -->
                    <div class="box box-primary">
                        <div class="box-body box-profile">
                            <img class="profile-user-img img-responsive img-circle"
                                 :src="$auth.user().image" alt="User profile picture">

                            <h3 class="profile-username text-center">{{$auth.user().full_name}}</h3>

                            <p class="text-muted text-center">{{userTitle}}</p>
                        </div>
                        <!-- /.box-body -->
                    </div>
                    <!-- /.box -->

                    <!-- About Me Box -->
                    <div class="box box-primary">
                        <div class="box-header with-border">
                            <h3 class="box-title">About Me</h3>
                        </div>
                        <!-- /.box-header -->
                        <div class="box-body">
                            <p class="text-muted">
                                <strong>
                                    <i class="fa fa-soccer-ball-o margin-r-5"></i>
                                    Sport</strong>
                                {{userSport}}
                            </p>
                            <p class="text-muted"><strong>
                                <i class="fa fa-star margin-r-5"></i>
                                Specialty</strong> {{userSpecialty}}
                            </p>
                            <p>
                                <strong>
                                    <i class="fa fa-map-marker margin-r-5"></i>
                                    Country</strong>

                                <img v-if="userCountryFlag" class="athlete-country-flag" :src="userCountryFlag" alt="">
                                {{userCountry}}
                            </p>
                            <p>
                                <strong>
                                    <i class="fa fa-map-marker margin-r-5"></i>
                                    Category</strong>

                                {{userCategory}}
                            </p>
                            <p>
                                <strong>
                                    <i class="fa fa-map-marker margin-r-5"></i>
                                    Gender</strong>

                                {{userGender}}
                            </p>

                        </div>
                        <!-- /.box-body -->
                    </div>
                    <!-- /.box -->
                </div>
                <!-- /.col -->
                <div class="col-md-9">
                    <div class="row">
                        <div class="col-xs-12 col-md-3">
                            <div class="small-box bg-aqua">
                                <div class="inner">
                                    <h3>1st</h3>
                                    <h5>2500pts</h5>

                                    <p>Overall Ranking</p>
                                </div>
                                <div class="icon">
                                    <i class="fa fa-trophy"></i>
                                </div>
                                <a href="#" class="small-box-footer">More info
                                    <i class="fa fa-arrow-circle-right"></i>
                                </a>
                            </div>
                        </div>
                        <div class="col-xs-12 col-md-3">
                            <div class="small-box bg-green">
                                <div class="inner">
                                    <h3>3</h3>
                                    <h5>of 5</h5>
                                    <p>Completed Challenges</p>
                                </div>
                                <div class="icon">
                                    <i class="fa fa-star"></i>
                                </div>
                                <a href="#" class="small-box-footer">More info
                                    <i class="fa fa-arrow-circle-right"></i>
                                </a>
                            </div>
                        </div>
                        <div class="col-xs-12 col-md-3">
                            <div class="small-box bg-yellow">
                                <div class="inner">
                                    <h3>5</h3>
                                    <h5>&nbsp;</h5>
                                    <p>Scoutings</p>
                                </div>
                                <div class="icon">
                                    <i class="fa fa-video-camera"></i>
                                </div>
                                <a href="#" class="small-box-footer">More info
                                    <i class="fa fa-arrow-circle-right"></i>
                                </a>
                            </div>
                        </div>
                        <div class="col-xs-12 col-md-3">
                            <div class="small-box bg-blue">
                                <div class="inner">
                                    <h3>6</h3>
                                    <h5>&nbsp;</h5>
                                    <p>Reports</p>
                                </div>
                                <div class="icon">
                                    <i class="fa fa-pie-chart"></i>
                                </div>
                                <a href="#" class="small-box-footer">More info
                                    <i class="fa fa-arrow-circle-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <div class="box box-primary">
                                        <div class="box-header with-border">
                                            <h3 class="box-title">Challenges in Progress</h3>
                                        </div>
                                        <!-- /.box-header -->
                                        <div class="box-body">
                                            <ul class="products-list product-list-in-box">
                                                <li class="item">
                                                    <div class="product-info">
                                                        <a href="javascript:void(0)" class="product-title">Challenge 4
                                                            <span class="label label-info pull-right">+500Pts
                                                            </span>
                                                        </a>
                                                        <span class="product-description">
                                                            <div class="progress-group">
                                                                <span class="progress-text">&nbsp;</span>
                                                                <span class="progress-number"><b>55</b>/100%</span>
                                                                <div class="progress sm">
                                                                    <div class="progress-bar progress-bar-aqua"
                                                                         style="width: 55%"></div>
                                                                </div>
                                                            </div>
                                                        </span>
                                                    </div>
                                                </li>
                                                <!-- /.item -->
                                                <li class="item">
                                                    <div class="product-info">
                                                        <a href="javascript:void(0)" class="product-title">Challenge 5
                                                            <span class="label label-danger pull-right">+500Pts
                                                            </span>
                                                        </a>
                                                        <span class="product-description">
                                                            <div class="progress-group">
                                                                <span class="progress-text">&nbsp;</span>
                                                                <span class="progress-number"><b>43</b>/100%</span>
                                                                <div class="progress sm">
                                                                    <div class="progress-bar progress-bar-red"
                                                                         style="width: 43%"></div>
                                                                </div>
                                                            </div>
                                                        </span>
                                                    </div>
                                                </li>
                                                <!-- /.item -->
                                                <li class="item">
                                                    <div class="product-info">
                                                        <a href="javascript:void(0)" class="product-title">Challenge 6
                                                            <span class="label label-warning pull-right">+500Pts
                                                            </span>
                                                        </a>
                                                        <span class="product-description">
                                                            <div class="progress-group">
                                                                <span class="progress-text">&nbsp;</span>
                                                                <span class="progress-number"><b>20</b>/100%</span>
                                                                <div class="progress sm">
                                                                    <div class="progress-bar progress-bar-yellow"
                                                                         style="width: 20%"></div>
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
                                            <h3 class="box-title">Completed Challenges</h3>
                                        </div>
                                        <!-- /.box-header -->
                                        <div class="box-body">
                                            <ul class="products-list product-list-in-box">
                                                <li class="item">
                                                    <div class="product-info">
                                                        <a href="javascript:void(0)" class="product-title">Challenge 1
                                                            <span class="label label-success pull-right">+1000Pts
                                                            </span>
                                                        </a>
                                                        <span class="product-description">
                                                            <div class="progress-group">
                                                                <span class="progress-text">&nbsp;</span>
                                                                <span class="progress-number"><b>100</b>/100%</span>
                                                                <div class="progress sm">
                                                                    <div class="progress-bar progress-bar-green"
                                                                         style="width: 100%"></div>
                                                                </div>
                                                            </div>
                                                        </span>
                                                    </div>
                                                </li>
                                                <!-- /.item -->
                                                <li class="item">
                                                    <div class="product-info">
                                                        <a href="javascript:void(0)" class="product-title">Challenge 2
                                                            <span class="label label-success pull-right">+500Pts
                                                            </span>
                                                        </a>
                                                        <span class="product-description">
                                                            <div class="progress-group">
                                                                <span class="progress-text">&nbsp;</span>
                                                                <span class="progress-number"><b>100</b>/100%</span>
                                                                <div class="progress sm">
                                                                    <div class="progress-bar progress-bar-green"
                                                                         style="width: 100%"></div>
                                                                </div>
                                                            </div>
                                                        </span>
                                                    </div>
                                                </li>
                                                <!-- /.item -->
                                                <li class="item">
                                                    <div class="product-info">
                                                        <a href="javascript:void(0)" class="product-title">Challenge 3
                                                            <span class="label label-success pull-right">+1000Pts
                                                            </span>
                                                        </a>
                                                        <span class="product-description">
                                                            <div class="progress-group">
                                                                <span class="progress-text">&nbsp;</span>
                                                                <span class="progress-number"><b>100</b>/100%</span>
                                                                <div class="progress sm">
                                                                    <div class="progress-bar progress-bar-green"
                                                                         style="width: 100%"></div>
                                                                </div>
                                                            </div>
                                                        </span>
                                                    </div>
                                                </li>
                                                <!-- /.item -->

                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="box box-primary">
                                        <div class="box-header with-border">
                                            <h3 class="box-title">Available Challenges</h3>
                                        </div>
                                        <!-- /.box-header -->
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
    import scoutingsLocales from 'base/lang/admin/scoutings/scoutings.js';
    import pageHeader from 'base/components/header/pageHeader.vue'
    import dncTable from 'base/components/table/dnc-datatable.vue';

    export default{
        locales: scoutingsLocales,
        data(){
            return {
                breadcrumbs: [
                    {
                        href: '/dashboard',
                        title: 'Home'
                    },
                    {
                        href: '/my-profile',
                        title: 'My Profile'
                    }
                ],
            }
        },
        components: {
            pageHeader,
            dncTable
        },
        computed: {
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
                    {data: 'name', name: 'name', title: this.$t('challenge.name')},
                    {data: 'points', name: 'points', title: this.$t('challenge.points')},
                    {
                        title: this.$t('challenge.difficulty'),
                        render: this.renderDifficulty
                    },
                    {
                        title: this.$t('user.actions'),
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
        methods: {
            dataLoaded(data){

            },
            renderActions(data, type, full, meta){
                const blockedClass = !full.blocked ? "red" : "green"
                return `<div class="action-buttons"><a class="btn btn-sm btn-success"  v-on:click="$parent.acceptChallenge(${full.id})">Accept Challenge</a>`
            },
            renderDifficulty(data, type, full, meta){
                return `<span class="label label-${full.difficultyColor}">${full.difficulty} </span>`
            },
            acceptChallenge(challengeId){

            }
        }
    }
</script>