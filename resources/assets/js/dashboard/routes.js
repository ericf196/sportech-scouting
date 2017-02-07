export default {
    routes: [
        {
            path: '/',
            name: 'index',
            component: function (resolve) {
                require(['./modules/index.vue'], resolve)
            },
            meta: {auth: false}
        },
        {
            path: '/login',
            name: 'login',
            component: function (resolve) {
                require(['./modules/auth/login.vue'], resolve)
            },
            meta: {auth: false}
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: function (resolve) {
                require(['./modules/dashboard/dashboard.vue'], resolve)
            },
            meta: {auth: true}
        },
        {
            path: '/my-profile',
            component: function (resolve) {
                require(['./modules/profile/profile.vue'], resolve)
            },
            meta: {auth: true},
            children: [
                {
                    path: 'update',
                    name: 'user.update',
                    component: function (resolve) {
                        require(['./modules/profile/edit.vue'], resolve)
                    }
                },
                {
                    path: '/',
                    name: 'user.view',
                    component: function (resolve) {
                        require(['./modules/profile/view.vue'], resolve)
                    }
                }
            ]
        },
        {
            path: '/scoutings',
            component: function (resolve) {
                require(['./modules/scouting/scouting.vue'], resolve)
            },
            meta: {auth: true},
            children: [
                {
                    path: ':id/update',
                    name: 'scoutings.update',
                    component: function (resolve) {
                        require(['./modules/scouting/edit.vue'], resolve)
                    }
                }, {
                    path: 'create',
                    name: 'scoutings.create',
                    component: function (resolve) {
                        require(['./modules/scouting/create.vue'], resolve)
                    }
                }, {
                    path: 'list',
                    name: 'scoutings.list',
                    component: function (resolve) {
                        require(['./modules/scouting/list.vue'], resolve)
                    }
                },
            ]
        },
        {
            path: '/athletes',
            component: function (resolve) {
                require(['./modules/athletes/athletes.vue'], resolve)
            },
            meta: {auth: true},
            children: [
                {
                    path: ':id/update',
                    name: 'athletes.update',
                    component: function (resolve) {
                        require(['./modules/athletes/edit.vue'], resolve)
                    }
                }, {
                    path: 'create',
                    name: 'athletes.create',
                    component: function (resolve) {
                        require(['./modules/athletes/create.vue'], resolve)
                    }
                }, {
                    path: '/',
                    name: 'athletes.list',
                    component: function (resolve) {
                        require(['./modules/athletes/list.vue'], resolve)
                    }
                },
                {
                    path: ':id/touches',
                    name: 'scoutings.touch',
                    component: function (resolve) {
                        require(['./modules/scouting/touches/edit.vue'], resolve)
                    }
                }
            ]
        },
        {
            path: '/events',
            component: function (resolve) {
                require(['./modules/events/events.vue'], resolve)
            },
            meta: {auth: true},
            children: [
                {
                    path: ':id/update',
                    name: 'events.update',
                    component: function (resolve) {
                        require(['./modules/events/edit.vue'], resolve)
                    }
                }, {
                    path: 'create',
                    name: 'events.create',
                    component: function (resolve) {
                        require(['./modules/events/create.vue'], resolve)
                    }
                }, {
                    path: '/',
                    name: 'events.list',
                    component: function (resolve) {
                        require(['./modules/events/list.vue'], resolve)
                    }
                },
            ]
        },
        {
            path: '/championships',
            component: function (resolve) {
                require(['./modules/championships/championships.vue'], resolve)
            },
            meta: {auth: true},
            children: [
                {
                    path: ':id/update',
                    name: 'championships.update',
                    component: function (resolve) {
                        require(['./modules/championships/edit.vue'], resolve)
                    }
                }, {
                    path: 'create',
                    name: 'championships.create',
                    component: function (resolve) {
                        require(['./modules/championships/create.vue'], resolve)
                    }
                }, {
                    path: '/',
                    name: 'championships.list',
                    component: function (resolve) {
                        require(['./modules/championships/list.vue'], resolve)
                    }
                },
            ]
        }
    ]
}