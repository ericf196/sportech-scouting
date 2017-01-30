<template>
    <div>
        <header class="main-header">
            <!-- Logo -->
            <a :href="menu.logo.url" class="logo">
                <!-- mini logo for sidebar mini 50x50 pixels -->
                <span class="logo-mini">
            <img width="50px" :src="menu.logo.img" alt="">
        </span>

                <span class="logo-lg">
            <img width="70px" :src="menu.logo.img" alt="">
        </span>
                <!-- logo for regular state and mobile devices -->

            </a>
            <!-- Header Navbar: style can be found in header.less -->
            <nav class="navbar navbar-static-top">
                <!-- Sidebar toggle button-->
                <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
                    <span class="sr-only">Toggle navigation</span>
                </a>

                <div class="navbar-custom-menu">
                    <ul class="nav navbar-nav">
                        <li class="dropdown user user-menu">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                <span class="hidden-xs">{{sideMenu.user.first_name+' '+sideMenu.user.last_name}}</span>
                                <span class="caret"></span>
                            </a>
                            <ul class="dropdown-menu">
                                <!-- User image -->
                                <li class="user-header">
                                    <p>
                                        {{sideMenu.user.first_name+' '+sideMenu.user.last_name}}
                                    </p>
                                </li>
                                <!-- Menu Footer-->
                                <li class="user-footer">
                                    <div class="pull-right">
                                        <a href="#/logout" class="btn btn-default btn-flat">Sign out</a>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        <aside class="main-sidebar">
            <!-- sidebar: style can be found in sidebar.less -->
            <section class="sidebar">
                <!-- Sidebar user panel -->
                <div class="user-panel">
                    <div class="pull-left image">
                        <img :src="'images/missing/athlete/missing.png'" class="img-circle" alt="User Image">
                    </div>
                    <div class="pull-left info">
                        <p>{{sideMenu.user.first_name+' '+sideMenu.user.last_name}}</p>
                        <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
                    </div>
                </div>
                <!-- /.search form -->
                <!-- sidebar menu: : style can be found in sidebar.less -->
                <ul class="sidebar-menu">
                    <li class="header">MAIN NAVIGATION</li>
                    <li v-for="menuItem in sideMenu.items"
                        :class="{'active':isActive(menuItem),'treeview':menuItem.dropdown}">
                        <router-link v-if="!menuItem.dropdown && !menuItem.divider" :to="{path:'/'+menuItem.url}" active-class="active" class="truncate">
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
                        <side-nav-dropdown v-if="menuItem.dropdown" :item="menuItem"></side-nav-dropdown>
                    </li>
                </ul>
            </section>
            <!-- /.sidebar -->
        </aside>
    </div>
</template>

<script>
    import navDropdown from './navs/nav-dropdown.vue'
    import sideNavDropdown from './navs/side-nav-dropdown.vue'
    export default{
        data(){
            return {
                menu: [],
                sideMenu: []
            }
        },
        props: {
            'menuVar': {
                type: String,
                default: 'menu'
            },
            'sideMenuVar': {
                type: String,
                default: 'sideMenu'
            }
        },
        components: {
            navDropdown,
            sideNavDropdown,
        },
        created()
        {
            this.sideMenu = window[this.sideMenuVar];
            this.menu = window[this.menuVar];
        },
        methods: {
            isActive(menuItem)
            {
                if (menuItem.url == this.menu.activeUrl)
                    return true;
            }
        }
    }
</script>

<style lang="sass" rel="stylesheet/scss">


</style>