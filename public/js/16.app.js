webpackJsonp([16,31],{

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(443)

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(276),
  /* template */
  __webpack_require__(406),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\laragon\\www\\sportech-scouting\\resources\\assets\\js\\dashboard\\modules\\dashboard\\dashboard.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] dashboard.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a222eb72", Component.options)
  } else {
    hotAPI.reload("data-v-a222eb72", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    props: {
        title: {
            type: String,
            required: true
        },
        breadcrumbs: {
            type: Array,
            default: function _default() {
                return [];
            }
        }
    }
};

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\n.admin-header {\n  height: 97px;\n  margin-bottom: 20px;\n}\n.admin-header .row {\n    margin-bottom: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(200)

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(196),
  /* template */
  __webpack_require__(199),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\laragon\\www\\sportech-scouting\\resources\\assets\\js\\components\\header\\pageHeader.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] pageHeader.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-66f85e7d", Component.options)
  } else {
    hotAPI.reload("data-v-66f85e7d", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "content-header"
  }, [_c('h1', [_vm._v("\n        " + _vm._s(_vm.title) + "\n    ")]), _vm._v(" "), _c('ol', {
    staticClass: "breadcrumb"
  }, _vm._l((_vm.breadcrumbs), function(breadcrumb) {
    return _c('router-link', {
      attrs: {
        "to": breadcrumb.href,
        "active-class": "active",
        "tag": "li"
      }
    }, [_vm._v("\n            " + _vm._s(_vm.$t(breadcrumb.title)) + "\n        ")])
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-66f85e7d", module.exports)
  }
}

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(197);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(136)("20461418", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-66f85e7d!./../../../../../node_modules/sass-loader/index.js!./../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./pageHeader.vue", function() {
     var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-66f85e7d!./../../../../../node_modules/sass-loader/index.js!./../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./pageHeader.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(2);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    show: function show(id, successCalback, errorCallback) {
        return _vue2.default.http.get('/api/scoutings/' + id + '?include=championship.sport,event,leftAthlete,rightAthlete,touches.actions.leftTags,touches.actions.rightTags').then(function (response) {
            return successCalback(response.body);
        }).catch(function (error) {
            return errorCallback(error);
        });
    },
    create: function create(scouting, successCalback, errorCallback) {
        return _vue2.default.http.post('/api/scoutings', scouting).then(function (response) {
            return successCalback(response.body);
        }).catch(function (error) {
            return errorCallback(error);
        });
    },
    update: function update(id, scouting, successCalback, errorCallback) {
        return _vue2.default.http.put('/api/scoutings/' + id, scouting, { emulateHTTP: true }).then(function (response) {
            return successCalback(response.body);
        }).catch(function (error) {
            return errorCallback(error.body);
        });
    },
    remove: function remove(id, successCalback, errorCallback) {
        return _vue2.default.http.delete('/api/scoutings/' + id).then(function (response) {
            return successCalback(response.body);
        }).catch(function (error) {
            return errorCallback(error.body);
        });
    },
    report: function report(id, successCalback, errorCallback) {
        return _vue2.default.http.get('/api/scoutings/' + id + '/report').then(function (response) {
            return successCalback(response.body);
        }).catch(function (error) {
            return errorCallback(error);
        });
    },
    latest: function latest(successCalback, errorCallback) {
        return _vue2.default.http.get('/api/scoutings/latest').then(function (response) {
            return successCalback(response.body);
        }).catch(function (error) {
            return errorCallback(error);
        });
    }
};

/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(2);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    show: function show(id, successCalback, errorCallback) {
        return _vue2.default.http.get('/api/reports/' + id).then(function (response) {
            return successCalback(response.body);
        }).catch(function (error) {
            return errorCallback(error);
        });
    },
    create: function create(athlete, successCalback, errorCallback) {
        return _vue2.default.http.post('/api/reports', athlete).then(function (response) {
            return successCalback(response.body);
        }).catch(function (error) {
            return errorCallback(error);
        });
    },
    latest: function latest(successCalback, errorCallback) {
        return _vue2.default.http.get('/api/reports/latest').then(function (response) {
            return successCalback(response.body);
        }).catch(function (error) {
            return errorCallback(error);
        });
    }
};

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(2);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    summary: function summary(successCalback, errorCallback) {
        return _vue2.default.http.get('/api/user/statistics/summary').then(function (response) {
            return successCalback(response.body);
        }).catch(function (error) {
            return errorCallback(error);
        });
    }
};

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _pageHeader = __webpack_require__(198);

var _pageHeader2 = _interopRequireDefault(_pageHeader);

var _userStatisticsService = __webpack_require__(250);

var _userStatisticsService2 = _interopRequireDefault(_userStatisticsService);

var _rankingService = __webpack_require__(320);

var _rankingService2 = _interopRequireDefault(_rankingService);

var _scoutingService = __webpack_require__(224);

var _scoutingService2 = _interopRequireDefault(_scoutingService);

var _reportService = __webpack_require__(246);

var _reportService2 = _interopRequireDefault(_reportService);

var _dashboard = __webpack_require__(324);

var _dashboard2 = _interopRequireDefault(_dashboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    locales: _dashboard2.default,
    data: function data() {
        return {
            breadcrumbs: [{
                href: '/',
                title: 'Home'
            }],
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
        };
    },

    components: {
        pageHeader: _pageHeader2.default
    },
    computed: {
        userTitle: function userTitle() {
            return this.$auth.user().athlete ? this.$auth.user().athlete.sport.name + ' ' + this.$auth.user().athlete.specialty.name : '';
        }
    },
    mounted: function mounted() {
        this.loadRanking();
        this.loadLatestReport();
        this.loadLatestScouting();
    },

    methods: {
        loadRanking: function loadRanking() {
            var _this = this;

            _rankingService2.default.ranking(function (response) {
                _this.ranking = response.data;
            }, function (response) {});
        },
        loadLatestReport: function loadLatestReport() {
            var _this2 = this;

            _reportService2.default.latest(function (response) {
                _this2.latestReport = response.data;
            }, function (response) {});
        },
        loadLatestScouting: function loadLatestScouting() {
            var _this3 = this;

            _scoutingService2.default.latest(function (response) {
                _this3.latestScouting = response.data;
            }, function (response) {});
        }
    }
};

/***/ }),

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(2);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    ranking: function ranking(successCalback, errorCallback) {
        return _vue2.default.http.get('/api/ranking?include=user.athlete.country').then(function (response) {
            return successCalback(response.body);
        }).catch(function (error) {
            return errorCallback(error);
        });
    }
};

/***/ }),

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    "en": {
        "dashboard": {
            "global_ranking": "Global Ranking",
            "menu": "Menu",
            "overall_ranking": "Overall Ranking",
            "scoutings": "Scoutings",
            "reports": "Reports",
            "completed_challenges": "Completed Challenges",
            "latest_report": "Latest Report",
            "no_report": "Create a new report",
            "no_scouting": "Create a new scouting",
            "latest_scouting": "Latest Scouting",
            "create_report": "Create Report",
            "create_scouting": "Create Scouting",
            "go_to_ptofile": "Go to My Profile"
        }
    },
    "es": {
        "dashboard": {
            "global_ranking": "Ranking Global",
            "menu": "Menu",
            "overall_ranking": "Ranking",
            "scoutings": "Scoutings",
            "reports": "Reportes",
            "completed_challenges": "Desafios Completados",
            "latest_report": "Último Reporte",
            "no_report": "Crea un nuevo report",
            "no_scouting": "Crea un nuevo scouting",
            "latest_scouting": "Último Scouting",
            "create_report": "Crear Reporte",
            "create_scouting": "Crear Scouting",
            "go_to_ptofile": "Ir a mi Perfil"
        }
    }
};

/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\n.product-rank {\n    font-size: 31px;\n    width: 70px;\n    text-align: center;\n    color: #AAA;\n}\n.product-points {\n    font-size: 20px;\n    background: #00c0ef;\n    margin: 9px;\n    padding: 0 5px;\n    min-width: 61px;\n    text-align: center;\n    color: white;\n}\n.product-img {\n    padding-right: 5px;\n}\n.products-list .latest-product {\n    margin-left: 0 !important;\n}\n.latest-product a {\n    font-size: 20px;\n    font-weight: bold;\n}\n.product-item {\n    border: 1px solid #f4f4f4;\n    padding: 5px !important;\n    margin-bottom: 10px !important;\n    background: #f7f7f7 !important\n}\n.latest-box-body {\n    padding-top: 0 !important;\n}\n.product-flag {\n    padding: 10px;\n}\n", "", {"version":3,"sources":["/../../../resources/assets/js/dashboard/modules/dashboard/dashboard.vue?11a0014c"],"names":[],"mappings":";AA2IA;IACA,gBAAA;IACA,YAAA;IACA,mBAAA;IACA,YAAA;CACA;AAEA;IACA,gBAAA;IACA,oBAAA;IACA,YAAA;IACA,eAAA;IACA,gBAAA;IACA,mBAAA;IACA,aAAA;CACA;AAEA;IACA,mBAAA;CACA;AAEA;IACA,0BAAA;CACA;AAEA;IACA,gBAAA;IACA,kBAAA;CACA;AAEA;IACA,0BAAA;IACA,wBAAA;IACA,+BAAA;IACA,8BAAA;CACA;AAEA;IACA,0BAAA;CACA;AAEA;IACA,cAAA;CACA","file":"dashboard.vue","sourcesContent":["<template>\r\n    <div>\r\n        <page-header title=\"Dashboard\" :breadcrumbs=\"breadcrumbs\"></page-header>\r\n        <section class=\"content\">\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-12 col-md-3\">\r\n\r\n                    <div class=\"box box-widget widget-user-2\">\r\n                        <!-- Add the bg color to the header using any of the bg-* classes -->\r\n                        <div class=\"widget-user-header bg-blue\">\r\n                            <div class=\"widget-user-image\">\r\n                                <img class=\"img-circle\" :src=\"$auth.user().image\" alt=\"User Avatar\">\r\n                            </div>\r\n                            <!-- /.widget-user-image -->\r\n                            <h3 class=\"widget-user-username\">{{$auth.user().full_name}}</h3>\r\n                            <h5 class=\"widget-user-desc\">{{userTitle}}</h5>\r\n                        </div>\r\n                        <router-link :to=\"{ name: 'user.view'}\" class=\"btn btn-primary btn-block btn-flat\">\r\n                            {{$t('dashboard.go_to_ptofile')}}\r\n                        </router-link>\r\n                    </div>\r\n                    <div class=\"box box-primary\">\r\n                        <div class=\"box-header\">\r\n                            <h3 class=\"box-title\">{{$t('dashboard.latest_scouting')}}</h3>\r\n                        </div>\r\n                        <div class=\"box-body latest-box-body\">\r\n                            <ul class=\"products-list product-list-in-box\" v-if=\"latestScouting\">\r\n                                <li class=\"item product-item\">\r\n                                    <div class=\"latest-product\">\r\n                                        <router-link\r\n                                                :to=\"{ name: 'scoutings.touch', params: { id: latestScouting.id }}\">\r\n                                            {{latestScouting.name}}\r\n                                        </router-link>\r\n                                        <span class=\"product-description\">\r\n                                            {{latestScouting.description}}\r\n                                        </span>\r\n                                    </div>\r\n                                </li>\r\n                            </ul>\r\n                            <h4 v-else>{{$t('dashboard.no_scouting')}}</h4>\r\n                            <router-link :to=\"{ name: 'scoutings.create'}\"\r\n                                         class=\"btn btn-success btn-block\">\r\n                                {{$t('dashboard.create_scouting')}}\r\n\r\n                            </router-link>\r\n\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"box box-primary\">\r\n                        <div class=\"box-header\">\r\n                            <h3 class=\"box-title\">{{$t('dashboard.latest_report')}}</h3>\r\n                        </div>\r\n                        <div class=\"box-body\">\r\n                            <ul class=\"products-list product-list-in-box\" v-if=\"latestReport\">\r\n                                <li class=\"item product-item\">\r\n                                    <div class=\"latest-product\">\r\n                                        <router-link :to=\"{ name: 'reports.view', params: { id: latestReport.id }}\">\r\n                                            {{latestReport.name}}\r\n                                        </router-link>\r\n                                        <span class=\"product-description\">\r\n                                            {{latestReport.description}}\r\n                                        </span>\r\n                                    </div>\r\n                                </li>\r\n                            </ul>\r\n                            <h4 v-else>{{$t('dashboard.no_report')}}</h4>\r\n                            <router-link :to=\"{ name: 'reports.create'}\"\r\n                                         class=\"btn btn-success btn-block\">\r\n                                {{$t('dashboard.create_report')}}\r\n                            </router-link>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-xs-12 col-md-9\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12 col-md-10\">\r\n                            <div class=\"box box-primary\">\r\n                                <div class=\"box-header\">\r\n                                    <h3 class=\"box-title\">{{$t('dashboard.global_ranking')}}</h3>\r\n                                </div>\r\n                                <div class=\"box-body\">\r\n                                    <ul class=\"products-list product-list-in-box\">\r\n                                        <li class=\"item\" v-for=\"rank in ranking\">\r\n                                            <div class=\"product-rank pull-left\">\r\n                                                {{rank.rank}}\r\n                                            </div>\r\n                                            <div class=\"product-img\">\r\n                                                <img :src=\"rank.user.image\" alt=\"Product Image\">\r\n                                            </div>\r\n                                            <div class=\"product-info\">\r\n                                                <h4 class=\"pull-left\">{{rank.user.full_name}}</h4>\r\n                                                <img :src=\"rank.user.athlete.country.flag\" class=\"product-flag\" alt=\"\">\r\n                                                <span class=\"product-points pull-right\">{{rank.points}} pts\r\n                                                </span>\r\n                                            </div>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-12 col-md-2\">\r\n                            <div class=\"box box-primary\">\r\n                                <div class=\"box-header\">\r\n                                    <h3 class=\"box-title text-center\">{{$t('admin.quick_navigation')}}</h3>\r\n                                </div>\r\n                                <div class=\"box-body text-center\">\r\n                                    <router-link :to=\"{ name: 'scoutings.list'}\" class=\"btn btn-app btn-primary\">\r\n                                        <i class=\"fa fa-list\"></i>\r\n                                        {{$t('admin.scoutings')}}\r\n                                    </router-link>\r\n                                    <a class=\"btn btn-app\">\r\n                                        <i class=\"fa fa-file-text\"></i>\r\n                                        {{$t('admin.reports')}}\r\n                                    </a>\r\n                                    <router-link :to=\"{ name: 'athletes.list'}\" class=\"btn btn-app\">\r\n                                        <i class=\"fa fa-users\"></i>\r\n                                        {{$t('admin.athletes')}}\r\n\r\n                                    </router-link>\r\n                                    <router-link :to=\"{ name: 'events.list'}\" class=\"btn btn-app\">\r\n                                        <i class=\"fa fa-calendar\"></i>\r\n                                        {{$t('admin.events')}}\r\n\r\n                                    </router-link>\r\n                                    <router-link :to=\"{ name: 'championships.list'}\" class=\"btn btn-app\">\r\n                                        <i class=\"fa fa-trophy\"></i>\r\n                                        {{$t('admin.championships')}}\r\n\r\n                                    </router-link>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n    </div>\r\n</template>\r\n<style>\r\n    .product-rank {\r\n        font-size: 31px;\r\n        width: 70px;\r\n        text-align: center;\r\n        color: #AAA;\r\n    }\r\n\r\n    .product-points {\r\n        font-size: 20px;\r\n        background: #00c0ef;\r\n        margin: 9px;\r\n        padding: 0 5px;\r\n        min-width: 61px;\r\n        text-align: center;\r\n        color: white;\r\n    }\r\n\r\n    .product-img {\r\n        padding-right: 5px;\r\n    }\r\n\r\n    .products-list .latest-product {\r\n        margin-left: 0 !important;\r\n    }\r\n\r\n    .latest-product a {\r\n        font-size: 20px;\r\n        font-weight: bold;\r\n    }\r\n\r\n    .product-item {\r\n        border: 1px solid #f4f4f4;\r\n        padding: 5px !important;\r\n        margin-bottom: 10px !important;\r\n        background: #f7f7f7 !important\r\n    }\r\n\r\n    .latest-box-body {\r\n        padding-top: 0 !important;\r\n    }\r\n\r\n    .product-flag {\r\n        padding: 10px;\r\n    }\r\n</style>\r\n<script>\r\n    import pageHeader from 'base/components/header/pageHeader.vue'\r\n    import userStatisticsService from 'base/dashboard/services/user/userStatisticsService'\r\n    import rankingService from 'base/dashboard/services/ranking/rankingService'\r\n    import scoutingService from 'base/dashboard/services/scoutings/scoutingService'\r\n    import reportsService from 'base/dashboard/services/reports/reportService'\r\n    import dashboardLocales from 'base/lang/admin/dashboard/dashboard.js';\r\n\r\n    export default{\r\n        locales: dashboardLocales,\r\n        data(){\r\n            return {\r\n                breadcrumbs: [\r\n                    {\r\n                        href: '/',\r\n                        title: 'Home'\r\n                    },\r\n                ],\r\n                latestScouting: null,\r\n                latestReport: null,\r\n                summary: {\r\n                    scountings: 0,\r\n                    reports: 0,\r\n                    completedChallenges: 0,\r\n                    rank: 0,\r\n                    points: 0\r\n                },\r\n                ranking: []\r\n            }\r\n        },\r\n        components: {\r\n            pageHeader\r\n        },\r\n        computed: {\r\n            userTitle(){\r\n                return this.$auth.user().athlete ? this.$auth.user().athlete.sport.name + ' ' + this.$auth.user().athlete.specialty.name : ''\r\n            },\r\n        },\r\n        mounted(){\r\n            this.loadRanking();\r\n            this.loadLatestReport();\r\n            this.loadLatestScouting();\r\n        },\r\n        methods: {\r\n            loadRanking(){\r\n                rankingService.ranking((response)=> {\r\n                    this.ranking = response.data;\r\n                }, (response)=> {\r\n\r\n                })\r\n            },\r\n            loadLatestReport(){\r\n                reportsService.latest((response)=> {\r\n                    this.latestReport = response.data;\r\n                }, (response)=> {\r\n\r\n                })\r\n            },\r\n            loadLatestScouting(){\r\n                scoutingService.latest((response)=> {\r\n                    this.latestScouting = response.data;\r\n                }, (response)=> {\r\n\r\n                })\r\n            },\r\n        }\r\n    }\r\n</script>\r\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 406:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('page-header', {
    attrs: {
      "title": "Dashboard",
      "breadcrumbs": _vm.breadcrumbs
    }
  }), _vm._v(" "), _c('section', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-12 col-md-3"
  }, [_c('div', {
    staticClass: "box box-widget widget-user-2"
  }, [_c('div', {
    staticClass: "widget-user-header bg-blue"
  }, [_c('div', {
    staticClass: "widget-user-image"
  }, [_c('img', {
    staticClass: "img-circle",
    attrs: {
      "src": _vm.$auth.user().image,
      "alt": "User Avatar"
    }
  })]), _vm._v(" "), _c('h3', {
    staticClass: "widget-user-username"
  }, [_vm._v(_vm._s(_vm.$auth.user().full_name))]), _vm._v(" "), _c('h5', {
    staticClass: "widget-user-desc"
  }, [_vm._v(_vm._s(_vm.userTitle))])]), _vm._v(" "), _c('router-link', {
    staticClass: "btn btn-primary btn-block btn-flat",
    attrs: {
      "to": {
        name: 'user.view'
      }
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.$t('dashboard.go_to_ptofile')) + "\n                    ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "box box-primary"
  }, [_c('div', {
    staticClass: "box-header"
  }, [_c('h3', {
    staticClass: "box-title"
  }, [_vm._v(_vm._s(_vm.$t('dashboard.latest_scouting')))])]), _vm._v(" "), _c('div', {
    staticClass: "box-body latest-box-body"
  }, [(_vm.latestScouting) ? _c('ul', {
    staticClass: "products-list product-list-in-box"
  }, [_c('li', {
    staticClass: "item product-item"
  }, [_c('div', {
    staticClass: "latest-product"
  }, [_c('router-link', {
    attrs: {
      "to": {
        name: 'scoutings.touch',
        params: {
          id: _vm.latestScouting.id
        }
      }
    }
  }, [_vm._v("\n                                        " + _vm._s(_vm.latestScouting.name) + "\n                                    ")]), _vm._v(" "), _c('span', {
    staticClass: "product-description"
  }, [_vm._v("\n                                        " + _vm._s(_vm.latestScouting.description) + "\n                                    ")])], 1)])]) : _c('h4', [_vm._v(_vm._s(_vm.$t('dashboard.no_scouting')))]), _vm._v(" "), _c('router-link', {
    staticClass: "btn btn-success btn-block",
    attrs: {
      "to": {
        name: 'scoutings.create'
      }
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.$t('dashboard.create_scouting')) + "\n\n                        ")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "box box-primary"
  }, [_c('div', {
    staticClass: "box-header"
  }, [_c('h3', {
    staticClass: "box-title"
  }, [_vm._v(_vm._s(_vm.$t('dashboard.latest_report')))])]), _vm._v(" "), _c('div', {
    staticClass: "box-body"
  }, [(_vm.latestReport) ? _c('ul', {
    staticClass: "products-list product-list-in-box"
  }, [_c('li', {
    staticClass: "item product-item"
  }, [_c('div', {
    staticClass: "latest-product"
  }, [_c('router-link', {
    attrs: {
      "to": {
        name: 'reports.view',
        params: {
          id: _vm.latestReport.id
        }
      }
    }
  }, [_vm._v("\n                                        " + _vm._s(_vm.latestReport.name) + "\n                                    ")]), _vm._v(" "), _c('span', {
    staticClass: "product-description"
  }, [_vm._v("\n                                        " + _vm._s(_vm.latestReport.description) + "\n                                    ")])], 1)])]) : _c('h4', [_vm._v(_vm._s(_vm.$t('dashboard.no_report')))]), _vm._v(" "), _c('router-link', {
    staticClass: "btn btn-success btn-block",
    attrs: {
      "to": {
        name: 'reports.create'
      }
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.$t('dashboard.create_report')) + "\n                        ")])], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-12 col-md-9"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xs-12 col-md-10"
  }, [_c('div', {
    staticClass: "box box-primary"
  }, [_c('div', {
    staticClass: "box-header"
  }, [_c('h3', {
    staticClass: "box-title"
  }, [_vm._v(_vm._s(_vm.$t('dashboard.global_ranking')))])]), _vm._v(" "), _c('div', {
    staticClass: "box-body"
  }, [_c('ul', {
    staticClass: "products-list product-list-in-box"
  }, _vm._l((_vm.ranking), function(rank) {
    return _c('li', {
      staticClass: "item"
    }, [_c('div', {
      staticClass: "product-rank pull-left"
    }, [_vm._v("\n                                            " + _vm._s(rank.rank) + "\n                                        ")]), _vm._v(" "), _c('div', {
      staticClass: "product-img"
    }, [_c('img', {
      attrs: {
        "src": rank.user.image,
        "alt": "Product Image"
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "product-info"
    }, [_c('h4', {
      staticClass: "pull-left"
    }, [_vm._v(_vm._s(rank.user.full_name))]), _vm._v(" "), _c('img', {
      staticClass: "product-flag",
      attrs: {
        "src": rank.user.athlete.country.flag,
        "alt": ""
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "product-points pull-right"
    }, [_vm._v(_vm._s(rank.points) + " pts\n                                            ")])])])
  }))])])]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-12 col-md-2"
  }, [_c('div', {
    staticClass: "box box-primary"
  }, [_c('div', {
    staticClass: "box-header"
  }, [_c('h3', {
    staticClass: "box-title text-center"
  }, [_vm._v(_vm._s(_vm.$t('admin.quick_navigation')))])]), _vm._v(" "), _c('div', {
    staticClass: "box-body text-center"
  }, [_c('router-link', {
    staticClass: "btn btn-app btn-primary",
    attrs: {
      "to": {
        name: 'scoutings.list'
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-list"
  }), _vm._v("\n                                    " + _vm._s(_vm.$t('admin.scoutings')) + "\n                                ")]), _vm._v(" "), _c('a', {
    staticClass: "btn btn-app"
  }, [_c('i', {
    staticClass: "fa fa-file-text"
  }), _vm._v("\n                                    " + _vm._s(_vm.$t('admin.reports')) + "\n                                ")]), _vm._v(" "), _c('router-link', {
    staticClass: "btn btn-app",
    attrs: {
      "to": {
        name: 'athletes.list'
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-users"
  }), _vm._v("\n                                    " + _vm._s(_vm.$t('admin.athletes')) + "\n\n                                ")]), _vm._v(" "), _c('router-link', {
    staticClass: "btn btn-app",
    attrs: {
      "to": {
        name: 'events.list'
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-calendar"
  }), _vm._v("\n                                    " + _vm._s(_vm.$t('admin.events')) + "\n\n                                ")]), _vm._v(" "), _c('router-link', {
    staticClass: "btn btn-app",
    attrs: {
      "to": {
        name: 'championships.list'
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-trophy"
  }), _vm._v("\n                                    " + _vm._s(_vm.$t('admin.championships')) + "\n\n                                ")])], 1)])])])])])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-a222eb72", module.exports)
  }
}

/***/ }),

/***/ 443:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(351);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(136)("ca2e539e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-a222eb72!./../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./dashboard.vue", function() {
     var newContent = require("!!./../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-a222eb72!./../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./dashboard.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL2Rhc2hib2FyZC9kYXNoYm9hcmQudnVlIiwid2VicGFjazovLy9wYWdlSGVhZGVyLnZ1ZT8zZDA3KioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWU/Y2FlMioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZT82YjhlKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlPzVkOTgqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWU/YTYyNyoqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvc2VydmljZXMvc2NvdXRpbmdzL3Njb3V0aW5nU2VydmljZS5qcz8zZDg1KioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvc2VydmljZXMvcmVwb3J0cy9yZXBvcnRTZXJ2aWNlLmpzPzhjMjMqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL3NlcnZpY2VzL3VzZXIvdXNlclN0YXRpc3RpY3NTZXJ2aWNlLmpzPzA5MDYiLCJ3ZWJwYWNrOi8vL2Rhc2hib2FyZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvc2VydmljZXMvcmFua2luZy9yYW5raW5nU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2xhbmcvYWRtaW4vZGFzaGJvYXJkL2Rhc2hib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL2Rhc2hib2FyZC9kYXNoYm9hcmQudnVlPzYwZmYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLnZ1ZT8yNWEyIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC52dWU/ZmMzMSJdLCJuYW1lcyI6WyJzaG93IiwiaWQiLCJzdWNjZXNzQ2FsYmFjayIsImVycm9yQ2FsbGJhY2siLCJodHRwIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiYm9keSIsImNhdGNoIiwiZXJyb3IiLCJjcmVhdGUiLCJzY291dGluZyIsInBvc3QiLCJ1cGRhdGUiLCJwdXQiLCJlbXVsYXRlSFRUUCIsInJlbW92ZSIsImRlbGV0ZSIsInJlcG9ydCIsImxhdGVzdCIsImF0aGxldGUiLCJzdW1tYXJ5IiwicmFua2luZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTs7Ozs7a0JBSUE7c0JBRUE7QUFIQTs7a0JBS0E7eUNBQ0E7dUJBQ0E7QUFHQTtBQU5BO0FBTEE7QUFEQSxFOzs7Ozs7O0FDdkJBO0FBQ0E7OztBQUdBO0FBQ0EsMENBQTJDLGlCQUFpQix3QkFBd0IsR0FBRyxzQkFBc0IsdUJBQXVCLEdB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Q0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDdE1BOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQyIsImZpbGUiOiJqcy8xNi5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtYTIyMmViNzIhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2Rhc2hib2FyZC52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/Y2FjaGVEaXJlY3RvcnkhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2Rhc2hib2FyZC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi1hMjIyZWI3MiEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9kYXNoYm9hcmQudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJDOlxcXFxsYXJhZ29uXFxcXHd3d1xcXFxzcG9ydGVjaC1zY291dGluZ1xcXFxyZXNvdXJjZXNcXFxcYXNzZXRzXFxcXGpzXFxcXGRhc2hib2FyZFxcXFxtb2R1bGVzXFxcXGRhc2hib2FyZFxcXFxkYXNoYm9hcmQudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gZGFzaGJvYXJkLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1hMjIyZWI3MlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWEyMjJlYjcyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC52dWVcbi8vIG1vZHVsZSBpZCA9IDE3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDE2IiwiPHRlbXBsYXRlPlxyXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJjb250ZW50LWhlYWRlclwiPlxyXG4gICAgICAgIDxoMT5cclxuICAgICAgICAgICAge3t0aXRsZX19XHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgICA8b2wgY2xhc3M9XCJicmVhZGNydW1iXCI+XHJcbiAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJicmVhZGNydW1iLmhyZWZcIiBhY3RpdmUtY2xhc3M9XCJhY3RpdmVcIiB0YWc9XCJsaVwiIHYtZm9yPVwiYnJlYWRjcnVtYiBpbiBicmVhZGNydW1ic1wiPlxyXG4gICAgICAgICAgICAgICAge3skdChicmVhZGNydW1iLnRpdGxlKX19XHJcbiAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgPC9vbD5cclxuICAgIDwvc2VjdGlvbj5cclxuPC90ZW1wbGF0ZT5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgcmVsPVwic3R5bGVzaGVldC9zY3NzXCI+XHJcbiAgICAuYWRtaW4taGVhZGVyIHtcclxuICAgICAgICBoZWlnaHQ6IDk3cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAucm93IHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc3R5bGU+XHJcbjxzY3JpcHQ+XHJcbiAgICBleHBvcnQgZGVmYXVsdHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYnJlYWRjcnVtYnM6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEFycmF5LFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHBhZ2VIZWFkZXIudnVlPzRiODkxOTIwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uYWRtaW4taGVhZGVyIHtcXG4gIGhlaWdodDogOTdweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi5hZG1pbi1oZWFkZXIgLnJvdyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNjZmODVlN2QhLi9+L3Nhc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTY2Zjg1ZTdkIXNhc3MtbG9hZGVyIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9wYWdlSGVhZGVyLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj9jYWNoZURpcmVjdG9yeSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vcGFnZUhlYWRlci52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi02NmY4NWU3ZCEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9wYWdlSGVhZGVyLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQzpcXFxcbGFyYWdvblxcXFx3d3dcXFxcc3BvcnRlY2gtc2NvdXRpbmdcXFxccmVzb3VyY2VzXFxcXGFzc2V0c1xcXFxqc1xcXFxjb21wb25lbnRzXFxcXGhlYWRlclxcXFxwYWdlSGVhZGVyLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHBhZ2VIZWFkZXIudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTY2Zjg1ZTdkXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNjZmODVlN2RcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnc2VjdGlvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250ZW50LWhlYWRlclwiXG4gIH0sIFtfYygnaDEnLCBbX3ZtLl92KFwiXFxuICAgICAgICBcIiArIF92bS5fcyhfdm0udGl0bGUpICsgXCJcXG4gICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdvbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJicmVhZGNydW1iXCJcbiAgfSwgX3ZtLl9sKChfdm0uYnJlYWRjcnVtYnMpLCBmdW5jdGlvbihicmVhZGNydW1iKSB7XG4gICAgcmV0dXJuIF9jKCdyb3V0ZXItbGluaycsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwidG9cIjogYnJlYWRjcnVtYi5ocmVmLFxuICAgICAgICBcImFjdGl2ZS1jbGFzc1wiOiBcImFjdGl2ZVwiLFxuICAgICAgICBcInRhZ1wiOiBcImxpXCJcbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KGJyZWFkY3J1bWIudGl0bGUpKSArIFwiXFxuICAgICAgICBcIildKVxuICB9KSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi02NmY4NWU3ZFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNjZmODVlN2QhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWVcbi8vIG1vZHVsZSBpZCA9IDE5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNjZmODVlN2QhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3BhZ2VIZWFkZXIudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjIwNDYxNDE4XCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTY2Zjg1ZTdkIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9wYWdlSGVhZGVyLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi02NmY4NWU3ZCEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcGFnZUhlYWRlci52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNjZmODVlN2QhLi9+L3Nhc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSIsImltcG9ydCBWdWUgZnJvbSAndnVlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgc2hvdyhpZCwgc3VjY2Vzc0NhbGJhY2ssIGVycm9yQ2FsbGJhY2spe1xyXG4gICAgICAgIHJldHVybiBWdWUuaHR0cC5nZXQoJy9hcGkvc2NvdXRpbmdzLycgKyBpZCArICc/aW5jbHVkZT1jaGFtcGlvbnNoaXAuc3BvcnQsZXZlbnQsbGVmdEF0aGxldGUscmlnaHRBdGhsZXRlLHRvdWNoZXMuYWN0aW9ucy5sZWZ0VGFncyx0b3VjaGVzLmFjdGlvbnMucmlnaHRUYWdzJylcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzdWNjZXNzQ2FsYmFjayhyZXNwb25zZS5ib2R5KSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3JDYWxsYmFjayhlcnJvcikpO1xyXG4gICAgfSxcclxuICAgIGNyZWF0ZShzY291dGluZywgc3VjY2Vzc0NhbGJhY2ssIGVycm9yQ2FsbGJhY2spe1xyXG4gICAgICAgIHJldHVybiBWdWUuaHR0cC5wb3N0KCcvYXBpL3Njb3V0aW5ncycsIHNjb3V0aW5nKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHN1Y2Nlc3NDYWxiYWNrKHJlc3BvbnNlLmJvZHkpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvckNhbGxiYWNrKGVycm9yKSk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlKGlkLCBzY291dGluZywgc3VjY2Vzc0NhbGJhY2ssIGVycm9yQ2FsbGJhY2spe1xyXG4gICAgICAgIHJldHVybiBWdWUuaHR0cC5wdXQoJy9hcGkvc2NvdXRpbmdzLycgKyBpZCwgc2NvdXRpbmcsIHtlbXVsYXRlSFRUUDogdHJ1ZX0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc3VjY2Vzc0NhbGJhY2socmVzcG9uc2UuYm9keSkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGVycm9yQ2FsbGJhY2soZXJyb3IuYm9keSkpO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZShpZCwgc3VjY2Vzc0NhbGJhY2ssIGVycm9yQ2FsbGJhY2spe1xyXG4gICAgICAgIHJldHVybiBWdWUuaHR0cC5kZWxldGUoJy9hcGkvc2NvdXRpbmdzLycgKyBpZClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzdWNjZXNzQ2FsYmFjayhyZXNwb25zZS5ib2R5KSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3JDYWxsYmFjayhlcnJvci5ib2R5KSk7XHJcbiAgICB9LFxyXG4gICAgcmVwb3J0KGlkLCBzdWNjZXNzQ2FsYmFjaywgZXJyb3JDYWxsYmFjayl7XHJcbiAgICAgICAgcmV0dXJuIFZ1ZS5odHRwLmdldCgnL2FwaS9zY291dGluZ3MvJyArIGlkICsgJy9yZXBvcnQnKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHN1Y2Nlc3NDYWxiYWNrKHJlc3BvbnNlLmJvZHkpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvckNhbGxiYWNrKGVycm9yKSk7XHJcbiAgICB9LFxyXG4gICAgbGF0ZXN0KHN1Y2Nlc3NDYWxiYWNrLCBlcnJvckNhbGxiYWNrKXtcclxuICAgICAgICByZXR1cm4gVnVlLmh0dHAuZ2V0KCcvYXBpL3Njb3V0aW5ncy9sYXRlc3QnKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHN1Y2Nlc3NDYWxiYWNrKHJlc3BvbnNlLmJvZHkpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvckNhbGxiYWNrKGVycm9yKSk7XHJcbiAgICB9LFxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvc2VydmljZXMvc2NvdXRpbmdzL3Njb3V0aW5nU2VydmljZS5qcyIsImltcG9ydCBWdWUgZnJvbSAndnVlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgc2hvdyhpZCwgc3VjY2Vzc0NhbGJhY2ssIGVycm9yQ2FsbGJhY2spe1xyXG4gICAgICAgIHJldHVybiBWdWUuaHR0cC5nZXQoJy9hcGkvcmVwb3J0cy8nICsgaWQpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc3VjY2Vzc0NhbGJhY2socmVzcG9uc2UuYm9keSkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGVycm9yQ2FsbGJhY2soZXJyb3IpKTtcclxuICAgIH0sXHJcbiAgICBjcmVhdGUoYXRobGV0ZSwgc3VjY2Vzc0NhbGJhY2ssIGVycm9yQ2FsbGJhY2spe1xyXG4gICAgICAgIHJldHVybiBWdWUuaHR0cC5wb3N0KCcvYXBpL3JlcG9ydHMnLCBhdGhsZXRlKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHN1Y2Nlc3NDYWxiYWNrKHJlc3BvbnNlLmJvZHkpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvckNhbGxiYWNrKGVycm9yKSk7XHJcbiAgICB9LFxyXG4gICAgbGF0ZXN0KHN1Y2Nlc3NDYWxiYWNrLCBlcnJvckNhbGxiYWNrKXtcclxuICAgICAgICByZXR1cm4gVnVlLmh0dHAuZ2V0KCcvYXBpL3JlcG9ydHMvbGF0ZXN0JylcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzdWNjZXNzQ2FsYmFjayhyZXNwb25zZS5ib2R5KSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3JDYWxsYmFjayhlcnJvcikpO1xyXG4gICAgfSxcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL3NlcnZpY2VzL3JlcG9ydHMvcmVwb3J0U2VydmljZS5qcyIsImltcG9ydCBWdWUgZnJvbSAndnVlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgc3VtbWFyeShzdWNjZXNzQ2FsYmFjaywgZXJyb3JDYWxsYmFjayl7XHJcbiAgICAgICAgcmV0dXJuIFZ1ZS5odHRwLmdldCgnL2FwaS91c2VyL3N0YXRpc3RpY3Mvc3VtbWFyeScpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc3VjY2Vzc0NhbGJhY2socmVzcG9uc2UuYm9keSkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGVycm9yQ2FsbGJhY2soZXJyb3IpKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL3NlcnZpY2VzL3VzZXIvdXNlclN0YXRpc3RpY3NTZXJ2aWNlLmpzIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8cGFnZS1oZWFkZXIgdGl0bGU9XCJEYXNoYm9hcmRcIiA6YnJlYWRjcnVtYnM9XCJicmVhZGNydW1ic1wiPjwvcGFnZS1oZWFkZXI+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLW1kLTNcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveCBib3gtd2lkZ2V0IHdpZGdldC11c2VyLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBBZGQgdGhlIGJnIGNvbG9yIHRvIHRoZSBoZWFkZXIgdXNpbmcgYW55IG9mIHRoZSBiZy0qIGNsYXNzZXMgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aWRnZXQtdXNlci1oZWFkZXIgYmctYmx1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndpZGdldC11c2VyLWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImltZy1jaXJjbGVcIiA6c3JjPVwiJGF1dGgudXNlcigpLmltYWdlXCIgYWx0PVwiVXNlciBBdmF0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAvLndpZGdldC11c2VyLWltYWdlIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwid2lkZ2V0LXVzZXItdXNlcm5hbWVcIj57eyRhdXRoLnVzZXIoKS5mdWxsX25hbWV9fTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJ3aWRnZXQtdXNlci1kZXNjXCI+e3t1c2VyVGl0bGV9fTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwieyBuYW1lOiAndXNlci52aWV3J31cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2sgYnRuLWZsYXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ2Rhc2hib2FyZC5nb190b19wdG9maWxlJyl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3ggYm94LXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImJveC10aXRsZVwiPnt7JHQoJ2Rhc2hib2FyZC5sYXRlc3Rfc2NvdXRpbmcnKX19PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3gtYm9keSBsYXRlc3QtYm94LWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInByb2R1Y3RzLWxpc3QgcHJvZHVjdC1saXN0LWluLWJveFwiIHYtaWY9XCJsYXRlc3RTY291dGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIml0ZW0gcHJvZHVjdC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYXRlc3QtcHJvZHVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp0bz1cInsgbmFtZTogJ3Njb3V0aW5ncy50b3VjaCcsIHBhcmFtczogeyBpZDogbGF0ZXN0U2NvdXRpbmcuaWQgfX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2xhdGVzdFNjb3V0aW5nLm5hbWV9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJvZHVjdC1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7bGF0ZXN0U2NvdXRpbmcuZGVzY3JpcHRpb259fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCB2LWVsc2U+e3skdCgnZGFzaGJvYXJkLm5vX3Njb3V0aW5nJyl9fTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwieyBuYW1lOiAnc2NvdXRpbmdzLmNyZWF0ZSd9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBidG4tYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdkYXNoYm9hcmQuY3JlYXRlX3Njb3V0aW5nJyl9fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94IGJveC1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3gtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJib3gtdGl0bGVcIj57eyR0KCdkYXNoYm9hcmQubGF0ZXN0X3JlcG9ydCcpfX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJwcm9kdWN0cy1saXN0IHByb2R1Y3QtbGlzdC1pbi1ib3hcIiB2LWlmPVwibGF0ZXN0UmVwb3J0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiaXRlbSBwcm9kdWN0LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxhdGVzdC1wcm9kdWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwieyBuYW1lOiAncmVwb3J0cy52aWV3JywgcGFyYW1zOiB7IGlkOiBsYXRlc3RSZXBvcnQuaWQgfX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2xhdGVzdFJlcG9ydC5uYW1lfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByb2R1Y3QtZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2xhdGVzdFJlcG9ydC5kZXNjcmlwdGlvbn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHYtZWxzZT57eyR0KCdkYXNoYm9hcmQubm9fcmVwb3J0Jyl9fTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwieyBuYW1lOiAncmVwb3J0cy5jcmVhdGUnfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgYnRuLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnZGFzaGJvYXJkLmNyZWF0ZV9yZXBvcnQnKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtbWQtOVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtbWQtMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3ggYm94LXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJib3gtdGl0bGVcIj57eyR0KCdkYXNoYm9hcmQuZ2xvYmFsX3JhbmtpbmcnKX19PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwicHJvZHVjdHMtbGlzdCBwcm9kdWN0LWxpc3QtaW4tYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJpdGVtXCIgdi1mb3I9XCJyYW5rIGluIHJhbmtpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1yYW5rIHB1bGwtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3JhbmsucmFua319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3QtaW1nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cInJhbmsudXNlci5pbWFnZVwiIGFsdD1cIlByb2R1Y3QgSW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cInB1bGwtbGVmdFwiPnt7cmFuay51c2VyLmZ1bGxfbmFtZX19PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVwicmFuay51c2VyLmF0aGxldGUuY291bnRyeS5mbGFnXCIgY2xhc3M9XCJwcm9kdWN0LWZsYWdcIiBhbHQ9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcm9kdWN0LXBvaW50cyBwdWxsLXJpZ2h0XCI+e3tyYW5rLnBvaW50c319IHB0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1tZC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94IGJveC1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiYm94LXRpdGxlIHRleHQtY2VudGVyXCI+e3skdCgnYWRtaW4ucXVpY2tfbmF2aWdhdGlvbicpfX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3gtYm9keSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwieyBuYW1lOiAnc2NvdXRpbmdzLmxpc3QnfVwiIGNsYXNzPVwiYnRuIGJ0bi1hcHAgYnRuLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtbGlzdFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ2FkbWluLnNjb3V0aW5ncycpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4gYnRuLWFwcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1maWxlLXRleHRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdhZG1pbi5yZXBvcnRzJyl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWU6ICdhdGhsZXRlcy5saXN0J31cIiBjbGFzcz1cImJ0biBidG4tYXBwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXVzZXJzXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnYWRtaW4uYXRobGV0ZXMnKX19XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwieyBuYW1lOiAnZXZlbnRzLmxpc3QnfVwiIGNsYXNzPVwiYnRuIGJ0bi1hcHBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2FsZW5kYXJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdhZG1pbi5ldmVudHMnKX19XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwieyBuYW1lOiAnY2hhbXBpb25zaGlwcy5saXN0J31cIiBjbGFzcz1cImJ0biBidG4tYXBwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRyb3BoeVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ2FkbWluLmNoYW1waW9uc2hpcHMnKX19XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c3R5bGU+XHJcbiAgICAucHJvZHVjdC1yYW5rIHtcclxuICAgICAgICBmb250LXNpemU6IDMxcHg7XHJcbiAgICAgICAgd2lkdGg6IDcwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiAjQUFBO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9kdWN0LXBvaW50cyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMwMGMwZWY7XHJcbiAgICAgICAgbWFyZ2luOiA5cHg7XHJcbiAgICAgICAgcGFkZGluZzogMCA1cHg7XHJcbiAgICAgICAgbWluLXdpZHRoOiA2MXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2R1Y3QtaW1nIHtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2R1Y3RzLWxpc3QgLmxhdGVzdC1wcm9kdWN0IHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5sYXRlc3QtcHJvZHVjdCBhIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2R1Y3QtaXRlbSB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2Y0ZjRmNDtcclxuICAgICAgICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2Y3ZjdmNyAhaW1wb3J0YW50XHJcbiAgICB9XHJcblxyXG4gICAgLmxhdGVzdC1ib3gtYm9keSB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZHVjdC1mbGFnIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgfVxyXG48L3N0eWxlPlxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IHBhZ2VIZWFkZXIgZnJvbSAnYmFzZS9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZSdcclxuICAgIGltcG9ydCB1c2VyU3RhdGlzdGljc1NlcnZpY2UgZnJvbSAnYmFzZS9kYXNoYm9hcmQvc2VydmljZXMvdXNlci91c2VyU3RhdGlzdGljc1NlcnZpY2UnXHJcbiAgICBpbXBvcnQgcmFua2luZ1NlcnZpY2UgZnJvbSAnYmFzZS9kYXNoYm9hcmQvc2VydmljZXMvcmFua2luZy9yYW5raW5nU2VydmljZSdcclxuICAgIGltcG9ydCBzY291dGluZ1NlcnZpY2UgZnJvbSAnYmFzZS9kYXNoYm9hcmQvc2VydmljZXMvc2NvdXRpbmdzL3Njb3V0aW5nU2VydmljZSdcclxuICAgIGltcG9ydCByZXBvcnRzU2VydmljZSBmcm9tICdiYXNlL2Rhc2hib2FyZC9zZXJ2aWNlcy9yZXBvcnRzL3JlcG9ydFNlcnZpY2UnXHJcbiAgICBpbXBvcnQgZGFzaGJvYXJkTG9jYWxlcyBmcm9tICdiYXNlL2xhbmcvYWRtaW4vZGFzaGJvYXJkL2Rhc2hib2FyZC5qcyc7XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHR7XHJcbiAgICAgICAgbG9jYWxlczogZGFzaGJvYXJkTG9jYWxlcyxcclxuICAgICAgICBkYXRhKCl7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBicmVhZGNydW1iczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogJy8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0hvbWUnXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsYXRlc3RTY291dGluZzogbnVsbCxcclxuICAgICAgICAgICAgICAgIGxhdGVzdFJlcG9ydDogbnVsbCxcclxuICAgICAgICAgICAgICAgIHN1bW1hcnk6IHtcclxuICAgICAgICAgICAgICAgICAgICBzY291bnRpbmdzOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcG9ydHM6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkQ2hhbGxlbmdlczogMCxcclxuICAgICAgICAgICAgICAgICAgICByYW5rOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50czogMFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJhbmtpbmc6IFtdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICAgICAgcGFnZUhlYWRlclxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICAgICAgdXNlclRpdGxlKCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kYXV0aC51c2VyKCkuYXRobGV0ZSA/IHRoaXMuJGF1dGgudXNlcigpLmF0aGxldGUuc3BvcnQubmFtZSArICcgJyArIHRoaXMuJGF1dGgudXNlcigpLmF0aGxldGUuc3BlY2lhbHR5Lm5hbWUgOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW91bnRlZCgpe1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRSYW5raW5nKCk7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZExhdGVzdFJlcG9ydCgpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRMYXRlc3RTY291dGluZygpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBsb2FkUmFua2luZygpe1xyXG4gICAgICAgICAgICAgICAgcmFua2luZ1NlcnZpY2UucmFua2luZygocmVzcG9uc2UpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmFua2luZyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICB9LCAocmVzcG9uc2UpPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxvYWRMYXRlc3RSZXBvcnQoKXtcclxuICAgICAgICAgICAgICAgIHJlcG9ydHNTZXJ2aWNlLmxhdGVzdCgocmVzcG9uc2UpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGF0ZXN0UmVwb3J0ID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgIH0sIChyZXNwb25zZSk9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbG9hZExhdGVzdFNjb3V0aW5nKCl7XHJcbiAgICAgICAgICAgICAgICBzY291dGluZ1NlcnZpY2UubGF0ZXN0KChyZXNwb25zZSk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXRlc3RTY291dGluZyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICB9LCAocmVzcG9uc2UpPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGRhc2hib2FyZC52dWU/MTFhMDAxNGMiLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHJhbmtpbmcoc3VjY2Vzc0NhbGJhY2ssIGVycm9yQ2FsbGJhY2spe1xyXG4gICAgICAgIHJldHVybiBWdWUuaHR0cC5nZXQoJy9hcGkvcmFua2luZz9pbmNsdWRlPXVzZXIuYXRobGV0ZS5jb3VudHJ5JylcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzdWNjZXNzQ2FsYmFjayhyZXNwb25zZS5ib2R5KSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3JDYWxsYmFjayhlcnJvcikpO1xyXG4gICAgfSxcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL3NlcnZpY2VzL3JhbmtpbmcvcmFua2luZ1NlcnZpY2UuanMiLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBcImVuXCI6IHtcclxuICAgICAgICBcImRhc2hib2FyZFwiOiB7XHJcbiAgICAgICAgICAgIFwiZ2xvYmFsX3JhbmtpbmdcIjogXCJHbG9iYWwgUmFua2luZ1wiLFxyXG4gICAgICAgICAgICBcIm1lbnVcIjogXCJNZW51XCIsXHJcbiAgICAgICAgICAgIFwib3ZlcmFsbF9yYW5raW5nXCI6IFwiT3ZlcmFsbCBSYW5raW5nXCIsXHJcbiAgICAgICAgICAgIFwic2NvdXRpbmdzXCI6IFwiU2NvdXRpbmdzXCIsXHJcbiAgICAgICAgICAgIFwicmVwb3J0c1wiOiBcIlJlcG9ydHNcIixcclxuICAgICAgICAgICAgXCJjb21wbGV0ZWRfY2hhbGxlbmdlc1wiOiBcIkNvbXBsZXRlZCBDaGFsbGVuZ2VzXCIsXHJcbiAgICAgICAgICAgIFwibGF0ZXN0X3JlcG9ydFwiOiBcIkxhdGVzdCBSZXBvcnRcIixcclxuICAgICAgICAgICAgXCJub19yZXBvcnRcIjogXCJDcmVhdGUgYSBuZXcgcmVwb3J0XCIsXHJcbiAgICAgICAgICAgIFwibm9fc2NvdXRpbmdcIjogXCJDcmVhdGUgYSBuZXcgc2NvdXRpbmdcIixcclxuICAgICAgICAgICAgXCJsYXRlc3Rfc2NvdXRpbmdcIjogXCJMYXRlc3QgU2NvdXRpbmdcIixcclxuICAgICAgICAgICAgXCJjcmVhdGVfcmVwb3J0XCI6IFwiQ3JlYXRlIFJlcG9ydFwiLFxyXG4gICAgICAgICAgICBcImNyZWF0ZV9zY291dGluZ1wiOiBcIkNyZWF0ZSBTY291dGluZ1wiLFxyXG4gICAgICAgICAgICBcImdvX3RvX3B0b2ZpbGVcIjogXCJHbyB0byBNeSBQcm9maWxlXCJcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCJlc1wiOiB7XHJcbiAgICAgICAgXCJkYXNoYm9hcmRcIjoge1xyXG4gICAgICAgICAgICBcImdsb2JhbF9yYW5raW5nXCI6IFwiUmFua2luZyBHbG9iYWxcIixcclxuICAgICAgICAgICAgXCJtZW51XCI6IFwiTWVudVwiLFxyXG4gICAgICAgICAgICBcIm92ZXJhbGxfcmFua2luZ1wiOiBcIlJhbmtpbmdcIixcclxuICAgICAgICAgICAgXCJzY291dGluZ3NcIjogXCJTY291dGluZ3NcIixcclxuICAgICAgICAgICAgXCJyZXBvcnRzXCI6IFwiUmVwb3J0ZXNcIixcclxuICAgICAgICAgICAgXCJjb21wbGV0ZWRfY2hhbGxlbmdlc1wiOiBcIkRlc2FmaW9zIENvbXBsZXRhZG9zXCIsXHJcbiAgICAgICAgICAgIFwibGF0ZXN0X3JlcG9ydFwiOiBcIsOabHRpbW8gUmVwb3J0ZVwiLFxyXG4gICAgICAgICAgICBcIm5vX3JlcG9ydFwiOiBcIkNyZWEgdW4gbnVldm8gcmVwb3J0XCIsXHJcbiAgICAgICAgICAgIFwibm9fc2NvdXRpbmdcIjogXCJDcmVhIHVuIG51ZXZvIHNjb3V0aW5nXCIsXHJcbiAgICAgICAgICAgIFwibGF0ZXN0X3Njb3V0aW5nXCI6IFwiw5psdGltbyBTY291dGluZ1wiLFxyXG4gICAgICAgICAgICBcImNyZWF0ZV9yZXBvcnRcIjogXCJDcmVhciBSZXBvcnRlXCIsXHJcbiAgICAgICAgICAgIFwiY3JlYXRlX3Njb3V0aW5nXCI6IFwiQ3JlYXIgU2NvdXRpbmdcIixcclxuICAgICAgICAgICAgXCJnb190b19wdG9maWxlXCI6IFwiSXIgYSBtaSBQZXJmaWxcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2xhbmcvYWRtaW4vZGFzaGJvYXJkL2Rhc2hib2FyZC5qcyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnByb2R1Y3QtcmFuayB7XFxuICAgIGZvbnQtc2l6ZTogMzFweDtcXG4gICAgd2lkdGg6IDcwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6ICNBQUE7XFxufVxcbi5wcm9kdWN0LXBvaW50cyB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgYmFja2dyb3VuZDogIzAwYzBlZjtcXG4gICAgbWFyZ2luOiA5cHg7XFxuICAgIHBhZGRpbmc6IDAgNXB4O1xcbiAgICBtaW4td2lkdGg6IDYxcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4ucHJvZHVjdC1pbWcge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxufVxcbi5wcm9kdWN0cy1saXN0IC5sYXRlc3QtcHJvZHVjdCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XFxufVxcbi5sYXRlc3QtcHJvZHVjdCBhIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLnByb2R1Y3QtaXRlbSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmNGY0ZjQ7XFxuICAgIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XFxuICAgIGJhY2tncm91bmQ6ICNmN2Y3ZjcgIWltcG9ydGFudFxcbn1cXG4ubGF0ZXN0LWJveC1ib2R5IHtcXG4gICAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcXG59XFxuLnByb2R1Y3QtZmxhZyB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi4vLi4vLi4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLnZ1ZT8xMWEwMDE0Y1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBMklBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7SUFDQSxZQUFBO0NBQ0E7QUFFQTtJQUNBLGdCQUFBO0lBQ0Esb0JBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxhQUFBO0NBQ0E7QUFFQTtJQUNBLG1CQUFBO0NBQ0E7QUFFQTtJQUNBLDBCQUFBO0NBQ0E7QUFFQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7Q0FDQTtBQUVBO0lBQ0EsMEJBQUE7SUFDQSx3QkFBQTtJQUNBLCtCQUFBO0lBQ0EsOEJBQUE7Q0FDQTtBQUVBO0lBQ0EsMEJBQUE7Q0FDQTtBQUVBO0lBQ0EsY0FBQTtDQUNBXCIsXCJmaWxlXCI6XCJkYXNoYm9hcmQudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXHJcXG4gICAgPGRpdj5cXHJcXG4gICAgICAgIDxwYWdlLWhlYWRlciB0aXRsZT1cXFwiRGFzaGJvYXJkXFxcIiA6YnJlYWRjcnVtYnM9XFxcImJyZWFkY3J1bWJzXFxcIj48L3BhZ2UtaGVhZGVyPlxcclxcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XFxcImNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtbWQtM1xcXCI+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJib3ggYm94LXdpZGdldCB3aWRnZXQtdXNlci0yXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIEFkZCB0aGUgYmcgY29sb3IgdG8gdGhlIGhlYWRlciB1c2luZyBhbnkgb2YgdGhlIGJnLSogY2xhc3NlcyAtLT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3aWRnZXQtdXNlci1oZWFkZXIgYmctYmx1ZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndpZGdldC11c2VyLWltYWdlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XFxcImltZy1jaXJjbGVcXFwiIDpzcmM9XFxcIiRhdXRoLnVzZXIoKS5pbWFnZVxcXCIgYWx0PVxcXCJVc2VyIEF2YXRhclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIC8ud2lkZ2V0LXVzZXItaW1hZ2UgLS0+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwid2lkZ2V0LXVzZXItdXNlcm5hbWVcXFwiPnt7JGF1dGgudXNlcigpLmZ1bGxfbmFtZX19PC9oMz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVxcXCJ3aWRnZXQtdXNlci1kZXNjXFxcIj57e3VzZXJUaXRsZX19PC9oNT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVxcXCJ7IG5hbWU6ICd1c2VyLnZpZXcnfVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2sgYnRuLWZsYXRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdkYXNoYm9hcmQuZ29fdG9fcHRvZmlsZScpfX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJib3ggYm94LXByaW1hcnlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJveC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XFxcImJveC10aXRsZVxcXCI+e3skdCgnZGFzaGJvYXJkLmxhdGVzdF9zY291dGluZycpfX08L2gzPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJveC1ib2R5IGxhdGVzdC1ib3gtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwicHJvZHVjdHMtbGlzdCBwcm9kdWN0LWxpc3QtaW4tYm94XFxcIiB2LWlmPVxcXCJsYXRlc3RTY291dGluZ1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XFxcIml0ZW0gcHJvZHVjdC1pdGVtXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsYXRlc3QtcHJvZHVjdFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGlua1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp0bz1cXFwieyBuYW1lOiAnc2NvdXRpbmdzLnRvdWNoJywgcGFyYW1zOiB7IGlkOiBsYXRlc3RTY291dGluZy5pZCB9fVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2xhdGVzdFNjb3V0aW5nLm5hbWV9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwicHJvZHVjdC1kZXNjcmlwdGlvblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2xhdGVzdFNjb3V0aW5nLmRlc2NyaXB0aW9ufX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHYtZWxzZT57eyR0KCdkYXNoYm9hcmQubm9fc2NvdXRpbmcnKX19PC9oND5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cXFwieyBuYW1lOiAnc2NvdXRpbmdzLmNyZWF0ZSd9XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImJ0biBidG4tc3VjY2VzcyBidG4tYmxvY2tcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnZGFzaGJvYXJkLmNyZWF0ZV9zY291dGluZycpfX1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYm94IGJveC1wcmltYXJ5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJib3gtaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVxcXCJib3gtdGl0bGVcXFwiPnt7JHQoJ2Rhc2hib2FyZC5sYXRlc3RfcmVwb3J0Jyl9fTwvaDM+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYm94LWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XFxcInByb2R1Y3RzLWxpc3QgcHJvZHVjdC1saXN0LWluLWJveFxcXCIgdi1pZj1cXFwibGF0ZXN0UmVwb3J0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiaXRlbSBwcm9kdWN0LWl0ZW1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxhdGVzdC1wcm9kdWN0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cXFwieyBuYW1lOiAncmVwb3J0cy52aWV3JywgcGFyYW1zOiB7IGlkOiBsYXRlc3RSZXBvcnQuaWQgfX1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tsYXRlc3RSZXBvcnQubmFtZX19XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJwcm9kdWN0LWRlc2NyaXB0aW9uXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7bGF0ZXN0UmVwb3J0LmRlc2NyaXB0aW9ufX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHYtZWxzZT57eyR0KCdkYXNoYm9hcmQubm9fcmVwb3J0Jyl9fTwvaDQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XFxcInsgbmFtZTogJ3JlcG9ydHMuY3JlYXRlJ31cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1ibG9ja1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdkYXNoYm9hcmQuY3JlYXRlX3JlcG9ydCcpfX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyIGNvbC1tZC05XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyIGNvbC1tZC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJveCBib3gtcHJpbWFyeVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJib3gtaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XFxcImJveC10aXRsZVxcXCI+e3skdCgnZGFzaGJvYXJkLmdsb2JhbF9yYW5raW5nJyl9fTwvaDM+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJveC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XFxcInByb2R1Y3RzLWxpc3QgcHJvZHVjdC1saXN0LWluLWJveFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiaXRlbVxcXCIgdi1mb3I9XFxcInJhbmsgaW4gcmFua2luZ1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9kdWN0LXJhbmsgcHVsbC1sZWZ0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3JhbmsucmFua319XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2R1Y3QtaW1nXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XFxcInJhbmsudXNlci5pbWFnZVxcXCIgYWx0PVxcXCJQcm9kdWN0IEltYWdlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvZHVjdC1pbmZvXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XFxcInB1bGwtbGVmdFxcXCI+e3tyYW5rLnVzZXIuZnVsbF9uYW1lfX08L2g0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cXFwicmFuay51c2VyLmF0aGxldGUuY291bnRyeS5mbGFnXFxcIiBjbGFzcz1cXFwicHJvZHVjdC1mbGFnXFxcIiBhbHQ9XFxcIlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInByb2R1Y3QtcG9pbnRzIHB1bGwtcmlnaHRcXFwiPnt7cmFuay5wb2ludHN9fSBwdHNcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtbWQtMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJveCBib3gtcHJpbWFyeVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJib3gtaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XFxcImJveC10aXRsZSB0ZXh0LWNlbnRlclxcXCI+e3skdCgnYWRtaW4ucXVpY2tfbmF2aWdhdGlvbicpfX08L2gzPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJib3gtYm9keSB0ZXh0LWNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cXFwieyBuYW1lOiAnc2NvdXRpbmdzLmxpc3QnfVxcXCIgY2xhc3M9XFxcImJ0biBidG4tYXBwIGJ0bi1wcmltYXJ5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWxpc3RcXFwiPjwvaT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnYWRtaW4uc2NvdXRpbmdzJyl9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImJ0biBidG4tYXBwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWZpbGUtdGV4dFxcXCI+PC9pPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdhZG1pbi5yZXBvcnRzJyl9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVxcXCJ7IG5hbWU6ICdhdGhsZXRlcy5saXN0J31cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWFwcFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS11c2Vyc1xcXCI+PC9pPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdhZG1pbi5hdGhsZXRlcycpfX1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XFxcInsgbmFtZTogJ2V2ZW50cy5saXN0J31cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWFwcFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1jYWxlbmRhclxcXCI+PC9pPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdhZG1pbi5ldmVudHMnKX19XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVxcXCJ7IG5hbWU6ICdjaGFtcGlvbnNoaXBzLmxpc3QnfVxcXCIgY2xhc3M9XFxcImJ0biBidG4tYXBwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXRyb3BoeVxcXCI+PC9pPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdhZG1pbi5jaGFtcGlvbnNoaXBzJyl9fVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L3NlY3Rpb24+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvdGVtcGxhdGU+XFxyXFxuPHN0eWxlPlxcclxcbiAgICAucHJvZHVjdC1yYW5rIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMzFweDtcXHJcXG4gICAgICAgIHdpZHRoOiA3MHB4O1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgY29sb3I6ICNBQUE7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnByb2R1Y3QtcG9pbnRzIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6ICMwMGMwZWY7XFxyXFxuICAgICAgICBtYXJnaW46IDlweDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAgNXB4O1xcclxcbiAgICAgICAgbWluLXdpZHRoOiA2MXB4O1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wcm9kdWN0LWltZyB7XFxyXFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnByb2R1Y3RzLWxpc3QgLmxhdGVzdC1wcm9kdWN0IHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmxhdGVzdC1wcm9kdWN0IGEge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnByb2R1Y3QtaXRlbSB7XFxyXFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZjRmNGY0O1xcclxcbiAgICAgICAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjdmN2Y3ICFpbXBvcnRhbnRcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubGF0ZXN0LWJveC1ib2R5IHtcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnByb2R1Y3QtZmxhZyB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICB9XFxyXFxuPC9zdHlsZT5cXHJcXG48c2NyaXB0PlxcclxcbiAgICBpbXBvcnQgcGFnZUhlYWRlciBmcm9tICdiYXNlL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlJ1xcclxcbiAgICBpbXBvcnQgdXNlclN0YXRpc3RpY3NTZXJ2aWNlIGZyb20gJ2Jhc2UvZGFzaGJvYXJkL3NlcnZpY2VzL3VzZXIvdXNlclN0YXRpc3RpY3NTZXJ2aWNlJ1xcclxcbiAgICBpbXBvcnQgcmFua2luZ1NlcnZpY2UgZnJvbSAnYmFzZS9kYXNoYm9hcmQvc2VydmljZXMvcmFua2luZy9yYW5raW5nU2VydmljZSdcXHJcXG4gICAgaW1wb3J0IHNjb3V0aW5nU2VydmljZSBmcm9tICdiYXNlL2Rhc2hib2FyZC9zZXJ2aWNlcy9zY291dGluZ3Mvc2NvdXRpbmdTZXJ2aWNlJ1xcclxcbiAgICBpbXBvcnQgcmVwb3J0c1NlcnZpY2UgZnJvbSAnYmFzZS9kYXNoYm9hcmQvc2VydmljZXMvcmVwb3J0cy9yZXBvcnRTZXJ2aWNlJ1xcclxcbiAgICBpbXBvcnQgZGFzaGJvYXJkTG9jYWxlcyBmcm9tICdiYXNlL2xhbmcvYWRtaW4vZGFzaGJvYXJkL2Rhc2hib2FyZC5qcyc7XFxyXFxuXFxyXFxuICAgIGV4cG9ydCBkZWZhdWx0e1xcclxcbiAgICAgICAgbG9jYWxlczogZGFzaGJvYXJkTG9jYWxlcyxcXHJcXG4gICAgICAgIGRhdGEoKXtcXHJcXG4gICAgICAgICAgICByZXR1cm4ge1xcclxcbiAgICAgICAgICAgICAgICBicmVhZGNydW1iczogW1xcclxcbiAgICAgICAgICAgICAgICAgICAge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6ICcvJyxcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0hvbWUnXFxyXFxuICAgICAgICAgICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgICAgICBdLFxcclxcbiAgICAgICAgICAgICAgICBsYXRlc3RTY291dGluZzogbnVsbCxcXHJcXG4gICAgICAgICAgICAgICAgbGF0ZXN0UmVwb3J0OiBudWxsLFxcclxcbiAgICAgICAgICAgICAgICBzdW1tYXJ5OiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBzY291bnRpbmdzOiAwLFxcclxcbiAgICAgICAgICAgICAgICAgICAgcmVwb3J0czogMCxcXHJcXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZENoYWxsZW5nZXM6IDAsXFxyXFxuICAgICAgICAgICAgICAgICAgICByYW5rOiAwLFxcclxcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRzOiAwXFxyXFxuICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgIHJhbmtpbmc6IFtdXFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIGNvbXBvbmVudHM6IHtcXHJcXG4gICAgICAgICAgICBwYWdlSGVhZGVyXFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgY29tcHV0ZWQ6IHtcXHJcXG4gICAgICAgICAgICB1c2VyVGl0bGUoKXtcXHJcXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJGF1dGgudXNlcigpLmF0aGxldGUgPyB0aGlzLiRhdXRoLnVzZXIoKS5hdGhsZXRlLnNwb3J0Lm5hbWUgKyAnICcgKyB0aGlzLiRhdXRoLnVzZXIoKS5hdGhsZXRlLnNwZWNpYWx0eS5uYW1lIDogJydcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIG1vdW50ZWQoKXtcXHJcXG4gICAgICAgICAgICB0aGlzLmxvYWRSYW5raW5nKCk7XFxyXFxuICAgICAgICAgICAgdGhpcy5sb2FkTGF0ZXN0UmVwb3J0KCk7XFxyXFxuICAgICAgICAgICAgdGhpcy5sb2FkTGF0ZXN0U2NvdXRpbmcoKTtcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBtZXRob2RzOiB7XFxyXFxuICAgICAgICAgICAgbG9hZFJhbmtpbmcoKXtcXHJcXG4gICAgICAgICAgICAgICAgcmFua2luZ1NlcnZpY2UucmFua2luZygocmVzcG9uc2UpPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yYW5raW5nID0gcmVzcG9uc2UuZGF0YTtcXHJcXG4gICAgICAgICAgICAgICAgfSwgKHJlc3BvbnNlKT0+IHtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgfSlcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIGxvYWRMYXRlc3RSZXBvcnQoKXtcXHJcXG4gICAgICAgICAgICAgICAgcmVwb3J0c1NlcnZpY2UubGF0ZXN0KChyZXNwb25zZSk9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhdGVzdFJlcG9ydCA9IHJlc3BvbnNlLmRhdGE7XFxyXFxuICAgICAgICAgICAgICAgIH0sIChyZXNwb25zZSk9PiB7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIH0pXFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICBsb2FkTGF0ZXN0U2NvdXRpbmcoKXtcXHJcXG4gICAgICAgICAgICAgICAgc2NvdXRpbmdTZXJ2aWNlLmxhdGVzdCgocmVzcG9uc2UpPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXRlc3RTY291dGluZyA9IHJlc3BvbnNlLmRhdGE7XFxyXFxuICAgICAgICAgICAgICAgIH0sIChyZXNwb25zZSk9PiB7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIH0pXFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbjwvc2NyaXB0PlxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtYTIyMmViNzIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL2Rhc2hib2FyZC9kYXNoYm9hcmQudnVlXG4vLyBtb2R1bGUgaWQgPSAzNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAxNiIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdwYWdlLWhlYWRlcicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0aXRsZVwiOiBcIkRhc2hib2FyZFwiLFxuICAgICAgXCJicmVhZGNydW1ic1wiOiBfdm0uYnJlYWRjcnVtYnNcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc2VjdGlvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250ZW50XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1tZC0zXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYm94IGJveC13aWRnZXQgd2lkZ2V0LXVzZXItMlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIndpZGdldC11c2VyLWhlYWRlciBiZy1ibHVlXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwid2lkZ2V0LXVzZXItaW1hZ2VcIlxuICB9LCBbX2MoJ2ltZycsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpbWctY2lyY2xlXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3JjXCI6IF92bS4kYXV0aC51c2VyKCkuaW1hZ2UsXG4gICAgICBcImFsdFwiOiBcIlVzZXIgQXZhdGFyXCJcbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdoMycsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ3aWRnZXQtdXNlci11c2VybmFtZVwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS4kYXV0aC51c2VyKCkuZnVsbF9uYW1lKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2g1Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIndpZGdldC11c2VyLWRlc2NcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0udXNlclRpdGxlKSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncm91dGVyLWxpbmsnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9jayBidG4tZmxhdFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInRvXCI6IHtcbiAgICAgICAgbmFtZTogJ3VzZXIudmlldydcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHQoJ2Rhc2hib2FyZC5nb190b19wdG9maWxlJykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYm94IGJveC1wcmltYXJ5XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYm94LWhlYWRlclwiXG4gIH0sIFtfYygnaDMnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYm94LXRpdGxlXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLiR0KCdkYXNoYm9hcmQubGF0ZXN0X3Njb3V0aW5nJykpKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYm94LWJvZHkgbGF0ZXN0LWJveC1ib2R5XCJcbiAgfSwgWyhfdm0ubGF0ZXN0U2NvdXRpbmcpID8gX2MoJ3VsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInByb2R1Y3RzLWxpc3QgcHJvZHVjdC1saXN0LWluLWJveFwiXG4gIH0sIFtfYygnbGknLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaXRlbSBwcm9kdWN0LWl0ZW1cIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJsYXRlc3QtcHJvZHVjdFwiXG4gIH0sIFtfYygncm91dGVyLWxpbmsnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidG9cIjoge1xuICAgICAgICBuYW1lOiAnc2NvdXRpbmdzLnRvdWNoJyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgaWQ6IF92bS5sYXRlc3RTY291dGluZy5pZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5sYXRlc3RTY291dGluZy5uYW1lKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInByb2R1Y3QtZGVzY3JpcHRpb25cIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5sYXRlc3RTY291dGluZy5kZXNjcmlwdGlvbikgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSldKV0pIDogX2MoJ2g0JywgW192bS5fdihfdm0uX3MoX3ZtLiR0KCdkYXNoYm9hcmQubm9fc2NvdXRpbmcnKSkpXSksIF92bS5fdihcIiBcIiksIF9jKCdyb3V0ZXItbGluaycsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXN1Y2Nlc3MgYnRuLWJsb2NrXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidG9cIjoge1xuICAgICAgICBuYW1lOiAnc2NvdXRpbmdzLmNyZWF0ZSdcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KCdkYXNoYm9hcmQuY3JlYXRlX3Njb3V0aW5nJykpICsgXCJcXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYm94IGJveC1wcmltYXJ5XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYm94LWhlYWRlclwiXG4gIH0sIFtfYygnaDMnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYm94LXRpdGxlXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLiR0KCdkYXNoYm9hcmQubGF0ZXN0X3JlcG9ydCcpKSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveC1ib2R5XCJcbiAgfSwgWyhfdm0ubGF0ZXN0UmVwb3J0KSA/IF9jKCd1bCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwcm9kdWN0cy1saXN0IHByb2R1Y3QtbGlzdC1pbi1ib3hcIlxuICB9LCBbX2MoJ2xpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIml0ZW0gcHJvZHVjdC1pdGVtXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibGF0ZXN0LXByb2R1Y3RcIlxuICB9LCBbX2MoJ3JvdXRlci1saW5rJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRvXCI6IHtcbiAgICAgICAgbmFtZTogJ3JlcG9ydHMudmlldycsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIGlkOiBfdm0ubGF0ZXN0UmVwb3J0LmlkXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLmxhdGVzdFJlcG9ydC5uYW1lKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInByb2R1Y3QtZGVzY3JpcHRpb25cIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5sYXRlc3RSZXBvcnQuZGVzY3JpcHRpb24pICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpXSldKSA6IF9jKCdoNCcsIFtfdm0uX3YoX3ZtLl9zKF92bS4kdCgnZGFzaGJvYXJkLm5vX3JlcG9ydCcpKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3JvdXRlci1saW5rJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc3VjY2VzcyBidG4tYmxvY2tcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0b1wiOiB7XG4gICAgICAgIG5hbWU6ICdyZXBvcnRzLmNyZWF0ZSdcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KCdkYXNoYm9hcmQuY3JlYXRlX3JlcG9ydCcpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1tZC05XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1tZC0xMFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveCBib3gtcHJpbWFyeVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveC1oZWFkZXJcIlxuICB9LCBbX2MoJ2gzJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveC10aXRsZVwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS4kdCgnZGFzaGJvYXJkLmdsb2JhbF9yYW5raW5nJykpKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYm94LWJvZHlcIlxuICB9LCBbX2MoJ3VsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInByb2R1Y3RzLWxpc3QgcHJvZHVjdC1saXN0LWluLWJveFwiXG4gIH0sIF92bS5fbCgoX3ZtLnJhbmtpbmcpLCBmdW5jdGlvbihyYW5rKSB7XG4gICAgcmV0dXJuIF9jKCdsaScsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIml0ZW1cIlxuICAgIH0sIFtfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwicHJvZHVjdC1yYW5rIHB1bGwtbGVmdFwiXG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MocmFuay5yYW5rKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwicHJvZHVjdC1pbWdcIlxuICAgIH0sIFtfYygnaW1nJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJzcmNcIjogcmFuay51c2VyLmltYWdlLFxuICAgICAgICBcImFsdFwiOiBcIlByb2R1Y3QgSW1hZ2VcIlxuICAgICAgfVxuICAgIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJwcm9kdWN0LWluZm9cIlxuICAgIH0sIFtfYygnaDQnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJwdWxsLWxlZnRcIlxuICAgIH0sIFtfdm0uX3YoX3ZtLl9zKHJhbmsudXNlci5mdWxsX25hbWUpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW1nJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwicHJvZHVjdC1mbGFnXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcInNyY1wiOiByYW5rLnVzZXIuYXRobGV0ZS5jb3VudHJ5LmZsYWcsXG4gICAgICAgIFwiYWx0XCI6IFwiXCJcbiAgICAgIH1cbiAgICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJwcm9kdWN0LXBvaW50cyBwdWxsLXJpZ2h0XCJcbiAgICB9LCBbX3ZtLl92KF92bS5fcyhyYW5rLnBvaW50cykgKyBcIiBwdHNcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSldKVxuICB9KSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1tZC0yXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYm94IGJveC1wcmltYXJ5XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYm94LWhlYWRlclwiXG4gIH0sIFtfYygnaDMnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYm94LXRpdGxlIHRleHQtY2VudGVyXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLiR0KCdhZG1pbi5xdWlja19uYXZpZ2F0aW9uJykpKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYm94LWJvZHkgdGV4dC1jZW50ZXJcIlxuICB9LCBbX2MoJ3JvdXRlci1saW5rJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tYXBwIGJ0bi1wcmltYXJ5XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidG9cIjoge1xuICAgICAgICBuYW1lOiAnc2NvdXRpbmdzLmxpc3QnXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtbGlzdFwiXG4gIH0pLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHQoJ2FkbWluLnNjb3V0aW5ncycpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2EnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1hcHBcIlxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtZmlsZS10ZXh0XCJcbiAgfSksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdCgnYWRtaW4ucmVwb3J0cycpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3JvdXRlci1saW5rJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tYXBwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidG9cIjoge1xuICAgICAgICBuYW1lOiAnYXRobGV0ZXMubGlzdCdcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS11c2Vyc1wiXG4gIH0pLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHQoJ2FkbWluLmF0aGxldGVzJykpICsgXCJcXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncm91dGVyLWxpbmsnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1hcHBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0b1wiOiB7XG4gICAgICAgIG5hbWU6ICdldmVudHMubGlzdCdcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1jYWxlbmRhclwiXG4gIH0pLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHQoJ2FkbWluLmV2ZW50cycpKSArIFwiXFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3JvdXRlci1saW5rJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tYXBwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidG9cIjoge1xuICAgICAgICBuYW1lOiAnY2hhbXBpb25zaGlwcy5saXN0J1xuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLXRyb3BoeVwiXG4gIH0pLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHQoJ2FkbWluLmNoYW1waW9uc2hpcHMnKSkgKyBcIlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKV0pXSldKV0pXSldKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LWEyMjJlYjcyXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi1hMjIyZWI3MiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMTYiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWEyMjJlYjcyIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9kYXNoYm9hcmQudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcImNhMmU1MzllXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1hMjIyZWI3MiEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vZGFzaGJvYXJkLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtYTIyMmViNzIhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2Rhc2hib2FyZC52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWEyMjJlYjcyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMTYiXSwic291cmNlUm9vdCI6IiJ9