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
import routes from './routes'
console.log(routes);
const router = new VueRouter(routes);
App.router = router;
Vue.router = router;
Vue.use(require('@websanova/vue-auth'), {
    auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
    http: require('@websanova/vue-auth/drivers/http/vue-resource.1.x.js'),
    router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
    rolesVar: 'role',
    refreshData: {
        enabled: false // true by default.
    },
    fetchData: {url: 'auth/user?include=athlete.sport,athlete.specialty,athlete.country,athlete.category,athlete.gender', method: 'GET', enabled: true}
});

const app = new Vue(App).$mount('#app');
