<template>
    <div id="app">
        <div class="skin-blue sidebar-collapse" id="sidebar"
             :class="{'sidebar-mini':$auth.check(),'layout-top-nav':!$auth.check()}">
            <div class="wrapper">
                <vue-toastr ref="toastr"></vue-toastr>
                <header class="main-header">
                    <a href="/" class="logo" v-if="$auth.check()">
                        <span class="logo-mini">
                            <b>SC</b>37
                        </span>
                        <span class="logo-lg">
                            <b>Scouting</b>37
                        </span>
                    </a>
                    <nav class="navbar navbar-static-top">
                        <div class="navbar-header" v-if="!$auth.check()">
                            <a href="/" class="navbar-brand"><b>Scouting</b>37</a>
                        </div>
                        <a href="#" class="sidebar-toggle" v-on:click.prevent="toggleSidebar"
                           role="button" v-if="$auth.check()">
                            <span class="sr-only">Toggle navigation</span>
                        </a>

                        <div class="navbar-custom-menu">
                            <ul class="nav navbar-nav">
                                <li v-show="!$auth.check()">
                                    <router-link :to="{name: 'login'}">login</router-link>
                                </li>
                                <li class="dropdown user user-menu" v-show="$auth.check()">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                        <span class="hidden-xs">{{$auth.user().full_name}}</span>
                                        <span class="caret"></span>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <!-- User image -->
                                        <li class="user-header">
                                            <p>
                                                {{$auth.user().full_name}}
                                            </p>
                                        </li>
                                        <!-- Menu Footer-->
                                        <li class="user-footer">
                                            <div class="pull-right">
                                                <button class="btn btn-default btn-flat" v-on:click="logout">Sign out
                                                </button>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
                <aside class="main-sidebar" v-if="$auth.check()">
                    <!-- sidebar: style can be found in sidebar.less -->
                    <section class="sidebar">
                        <!-- Sidebar user panel -->
                        <div class="user-panel">
                            <div class="pull-left image">
                                <img :src="$auth.user().image" class="img-circle" alt="User Image">
                            </div>
                            <div class="pull-left info">
                                <p>{{$auth.user().full_name}}</p>
                                <a href="#">
                                    <i class="fa fa-circle text-success"></i>
                                    Online
                                </a>
                            </div>
                        </div>
                        <!-- /.search form -->
                        <!-- sidebar menu: : style can be found in sidebar.less -->
                        <ul class="sidebar-menu">
                            <li class="header">MAIN NAVIGATION</li>
                            <li v-for="menuItem in sideMenu.items"
                                :class="{'active':isActive(menuItem),'treeview':menuItem.dropdown}">
                                <router-link v-if="!menuItem.dropdown && !menuItem.divider"
                                             :to="{path:'/'+menuItem.url}"
                                             active-class="active" class="truncate">
                                    <i v-if="menuItem.icon" :class="['fa',menuItem.icon]"></i>
                                    <span>{{$t(menuItem.title)}}</span>
                                </router-link>
                                <div class="divider" v-if="menuItem.divider"></div>
                                <a v-if="menuItem.dropdown && !menuItem.divider"
                                   class="truncate">
                                    <i v-if="menuItem.icon" :class="['fa',menuItem.icon]"></i>
                                    <span>{{$t(menuItem.title)}}</span>
                                    <span class="pull-right-container">
                                        <i class="fa fa-angle-left pull-right"></i>
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </section>
                    <!-- /.sidebar -->
                </aside>
                <div class="content-wrapper">
                    <router-view></router-view>
                </div>
                <footer class="main-footer">
                    <div class="pull-right hidden-xs">
                        <b>Version</b> 1.0 RC1
                    </div>
                    <strong>Copyright © 2016
                        <a href="http://sportech37.com">Sportech37</a>
                        .</strong> All rights
                    reserved.
                </footer>
            </div>
        </div>
    </div>
</template>
<style>
    #app, #sidebar {
        height: 100%;
    }

    .content-wrapper {
        min-height: calc(100vh - 53px - 52px);
    }
</style>
<script>
    import vueToastr from 'vue-toastr';
    import store from '../vuex/store';

    export default{
        components: {
            vueToastr
        },
        data(){
            return {
                sideMenu: {
                    items: [
                        {
                            url: 'my-profile',
                            dropdown: false,
                            divider: false,
                            icon: 'fa-user',
                            title: 'admin.my_profile'
                        },
                        {
                            url: 'scoutings/list',
                            dropdown: false,
                            divider: false,
                            icon: 'fa-list',
                            title: 'admin.scoutings'
                        },
                        {
                            url: 'athletes',
                            dropdown: false,
                            divider: false,
                            icon: 'fa-users',
                            title: 'admin.athletes'
                        },
                        {
                            url: 'events',
                            dropdown: false,
                            divider: false,
                            icon: 'fa-calendar',
                            title: 'admin.events'
                        },
                        {
                            url: 'championships',
                            dropdown: false,
                            divider: false,
                            icon: 'fa-trophy',
                            title: 'admin.championships'
                        }
                    ]
                }
            }
        },
        store,
        methods: {
            toggleSidebar(){
                $('#sidebar').toggleClass('sidebar-collapse').toggleClass('sidebar-open');
            },
            errorToast(msg, title){
                this.$refs.toastr.Add({
                    title: title,
                    msg: msg,
                    type: 'error',
                    position: 'toast-bottom-right',
                    timeout: 5000
                });
            },
            successToast(msg, title){
                this.$refs.toastr.Add({
                    title: title,
                    msg: msg,
                    type: 'success',
                    position: 'toast-bottom-right',
                    timeout: 5000
                });
            },
            warningToast(msg, title){
                this.$refs.toastr.Add({
                    title: title,
                    msg: msg,
                    type: 'warning',
                    position: 'toast-bottom-right',
                    timeout: 5000
                });
            },
            logout() {
                this.$auth.logout({
                    makeRequest: true,
                    success() {
                        console.log('logout');
                    },
                    error(err) {
                        console.log(err);
                    }
                });
            },
            isActive(menuItem)
            {

                if (menuItem.url == this.$router.currentRoute.path)
                    return true;
            }
        }
    }
</script>
