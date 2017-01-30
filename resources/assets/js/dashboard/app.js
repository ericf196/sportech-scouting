require('../bootstrap');

import {setState, setActions, getState, dispatch} from 'mockstate';
import VeeValidate, {Validator} from 'vee-validate';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import messages_es from 'base/lang/forms/es.js';
import messages_en from 'base/lang/forms/en.js';
import adminTranslation from 'base/lang/admin/admin.js';

var VueI18n = require('vue-i18n');
var VueDragula = require('vue-dragula');

Vue.use(VueI18n);
Vue.use(VueDragula);
Vue.use(Vuex);
Vue.use(VueRouter);

Vue.vueDragula.options('first-bag', {
    direction: 'horizontal'
});

Vue.use(VeeValidate, {
    locale: 'es',
    dictionary: { // dictionary object
        en: {  // locale key
            messages: messages_en // English attributes
        },
        es: {   // locale key
            messages: messages_es,   // Arabic messages
        }
    }
});

Vue.config.lang = window['locale'];

Vue.http.options.root = 'api';

window.bus = new Vue();

Object.keys(adminTranslation).forEach(function (lang) {
    Vue.locale(lang, adminTranslation[lang])
});

import App from './modules/app.vue';

const router = new VueRouter({
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
            name: 'championships',
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
});
App.router = router;
Vue.router = router;
Vue.use(require('@websanova/vue-auth'), {
    auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
    http: require('@websanova/vue-auth/drivers/http/vue-resource.1.x.js'),
    router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
    rolesVar: 'role',
    refreshData: {
        enabled: false // true by default.
    }
});

const app = new Vue(App).$mount('#app');
