webpackJsonp([16,30],{

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(458)

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(295),
  /* template */
  __webpack_require__(422),
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

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(199)

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(196),
  /* template */
  __webpack_require__(198),
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

/***/ 199:
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

/***/ 242:
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

/***/ 245:
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

/***/ 255:
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

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _pageHeader = __webpack_require__(195);

var _pageHeader2 = _interopRequireDefault(_pageHeader);

var _userStatisticsService = __webpack_require__(255);

var _userStatisticsService2 = _interopRequireDefault(_userStatisticsService);

var _rankingService = __webpack_require__(340);

var _rankingService2 = _interopRequireDefault(_rankingService);

var _scoutingService = __webpack_require__(242);

var _scoutingService2 = _interopRequireDefault(_scoutingService);

var _reportService = __webpack_require__(245);

var _reportService2 = _interopRequireDefault(_reportService);

var _dashboard = __webpack_require__(344);

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

/***/ 340:
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

/***/ 344:
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

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\n.product-rank {\n    font-size: 31px;\n    width: 70px;\n    text-align: center;\n    color: #AAA;\n}\n.product-points {\n    font-size: 20px;\n    background: #00c0ef;\n    margin: 9px;\n    padding: 0 5px;\n    min-width: 61px;\n    text-align: center;\n    color: white;\n}\n.product-img {\n    padding-right: 5px;\n}\n.products-list .latest-product {\n    margin-left: 0 !important;\n}\n.latest-product a {\n    font-size: 20px;\n    font-weight: bold;\n}\n.product-item {\n    border: 1px solid #f4f4f4;\n    padding: 5px !important;\n    margin-bottom: 10px !important;\n    background: #f7f7f7 !important\n}\n.latest-box-body {\n    padding-top: 0 !important;\n}\n.product-flag {\n    padding: 10px;\n}\n", "", {"version":3,"sources":["/../../../resources/assets/js/dashboard/modules/dashboard/dashboard.vue?11a0014c"],"names":[],"mappings":";AA2IA;IACA,gBAAA;IACA,YAAA;IACA,mBAAA;IACA,YAAA;CACA;AAEA;IACA,gBAAA;IACA,oBAAA;IACA,YAAA;IACA,eAAA;IACA,gBAAA;IACA,mBAAA;IACA,aAAA;CACA;AAEA;IACA,mBAAA;CACA;AAEA;IACA,0BAAA;CACA;AAEA;IACA,gBAAA;IACA,kBAAA;CACA;AAEA;IACA,0BAAA;IACA,wBAAA;IACA,+BAAA;IACA,8BAAA;CACA;AAEA;IACA,0BAAA;CACA;AAEA;IACA,cAAA;CACA","file":"dashboard.vue","sourcesContent":["<template>\r\n    <div>\r\n        <page-header title=\"Dashboard\" :breadcrumbs=\"breadcrumbs\"></page-header>\r\n        <section class=\"content\">\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-12 col-md-3\">\r\n\r\n                    <div class=\"box box-widget widget-user-2\">\r\n                        <!-- Add the bg color to the header using any of the bg-* classes -->\r\n                        <div class=\"widget-user-header bg-blue\">\r\n                            <div class=\"widget-user-image\">\r\n                                <img class=\"img-circle\" :src=\"$auth.user().image\" alt=\"User Avatar\">\r\n                            </div>\r\n                            <!-- /.widget-user-image -->\r\n                            <h3 class=\"widget-user-username\">{{$auth.user().full_name}}</h3>\r\n                            <h5 class=\"widget-user-desc\">{{userTitle}}</h5>\r\n                        </div>\r\n                        <router-link :to=\"{ name: 'user.view'}\" class=\"btn btn-primary btn-block btn-flat\">\r\n                            {{$t('dashboard.go_to_ptofile')}}\r\n                        </router-link>\r\n                    </div>\r\n                    <div class=\"box box-primary\">\r\n                        <div class=\"box-header\">\r\n                            <h3 class=\"box-title\">{{$t('dashboard.latest_scouting')}}</h3>\r\n                        </div>\r\n                        <div class=\"box-body latest-box-body\">\r\n                            <ul class=\"products-list product-list-in-box\" v-if=\"latestScouting\">\r\n                                <li class=\"item product-item\">\r\n                                    <div class=\"latest-product\">\r\n                                        <router-link\r\n                                                :to=\"{ name: 'scoutings.touch', params: { id: latestScouting.id }}\">\r\n                                            {{latestScouting.name}}\r\n                                        </router-link>\r\n                                        <span class=\"product-description\">\r\n                                            {{latestScouting.description}}\r\n                                        </span>\r\n                                    </div>\r\n                                </li>\r\n                            </ul>\r\n                            <h4 v-else>{{$t('dashboard.no_scouting')}}</h4>\r\n                            <router-link :to=\"{ name: 'scoutings.create'}\"\r\n                                         class=\"btn btn-success btn-block\">\r\n                                {{$t('dashboard.create_scouting')}}\r\n\r\n                            </router-link>\r\n\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"box box-primary\">\r\n                        <div class=\"box-header\">\r\n                            <h3 class=\"box-title\">{{$t('dashboard.latest_report')}}</h3>\r\n                        </div>\r\n                        <div class=\"box-body\">\r\n                            <ul class=\"products-list product-list-in-box\" v-if=\"latestReport\">\r\n                                <li class=\"item product-item\">\r\n                                    <div class=\"latest-product\">\r\n                                        <router-link :to=\"{ name: 'reports.view', params: { id: latestReport.id }}\">\r\n                                            {{latestReport.name}}\r\n                                        </router-link>\r\n                                        <span class=\"product-description\">\r\n                                            {{latestReport.description}}\r\n                                        </span>\r\n                                    </div>\r\n                                </li>\r\n                            </ul>\r\n                            <h4 v-else>{{$t('dashboard.no_report')}}</h4>\r\n                            <router-link :to=\"{ name: 'reports.create'}\"\r\n                                         class=\"btn btn-success btn-block\">\r\n                                {{$t('dashboard.create_report')}}\r\n                            </router-link>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-xs-12 col-md-9\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12 col-md-10\">\r\n                            <div class=\"box box-primary\">\r\n                                <div class=\"box-header\">\r\n                                    <h3 class=\"box-title\">{{$t('dashboard.global_ranking')}}</h3>\r\n                                </div>\r\n                                <div class=\"box-body\">\r\n                                    <ul class=\"products-list product-list-in-box\">\r\n                                        <li class=\"item\" v-for=\"rank in ranking\">\r\n                                            <div class=\"product-rank pull-left\">\r\n                                                {{rank.rank}}\r\n                                            </div>\r\n                                            <div class=\"product-img\">\r\n                                                <img :src=\"rank.user.image\" alt=\"Product Image\">\r\n                                            </div>\r\n                                            <div class=\"product-info\">\r\n                                                <h4 class=\"pull-left\">{{rank.user.full_name}}</h4>\r\n                                                <img :src=\"rank.user.athlete.country.flag\" class=\"product-flag\" alt=\"\">\r\n                                                <span class=\"product-points pull-right\">{{rank.points}} pts\r\n                                                </span>\r\n                                            </div>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-12 col-md-2\">\r\n                            <div class=\"box box-primary\">\r\n                                <div class=\"box-header\">\r\n                                    <h3 class=\"box-title text-center\">{{$t('admin.quick_navigation')}}</h3>\r\n                                </div>\r\n                                <div class=\"box-body text-center\">\r\n                                    <router-link :to=\"{ name: 'scoutings.list'}\" class=\"btn btn-app btn-primary\">\r\n                                        <i class=\"fa fa-list\"></i>\r\n                                        {{$t('admin.scoutings')}}\r\n                                    </router-link>\r\n                                    <a class=\"btn btn-app\">\r\n                                        <i class=\"fa fa-file-text\"></i>\r\n                                        {{$t('admin.reports')}}\r\n                                    </a>\r\n                                    <router-link :to=\"{ name: 'athletes.list'}\" class=\"btn btn-app\">\r\n                                        <i class=\"fa fa-users\"></i>\r\n                                        {{$t('admin.athletes')}}\r\n\r\n                                    </router-link>\r\n                                    <router-link :to=\"{ name: 'events.list'}\" class=\"btn btn-app\">\r\n                                        <i class=\"fa fa-calendar\"></i>\r\n                                        {{$t('admin.events')}}\r\n\r\n                                    </router-link>\r\n                                    <router-link :to=\"{ name: 'championships.list'}\" class=\"btn btn-app\">\r\n                                        <i class=\"fa fa-trophy\"></i>\r\n                                        {{$t('admin.championships')}}\r\n\r\n                                    </router-link>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n    </div>\r\n</template>\r\n<style>\r\n    .product-rank {\r\n        font-size: 31px;\r\n        width: 70px;\r\n        text-align: center;\r\n        color: #AAA;\r\n    }\r\n\r\n    .product-points {\r\n        font-size: 20px;\r\n        background: #00c0ef;\r\n        margin: 9px;\r\n        padding: 0 5px;\r\n        min-width: 61px;\r\n        text-align: center;\r\n        color: white;\r\n    }\r\n\r\n    .product-img {\r\n        padding-right: 5px;\r\n    }\r\n\r\n    .products-list .latest-product {\r\n        margin-left: 0 !important;\r\n    }\r\n\r\n    .latest-product a {\r\n        font-size: 20px;\r\n        font-weight: bold;\r\n    }\r\n\r\n    .product-item {\r\n        border: 1px solid #f4f4f4;\r\n        padding: 5px !important;\r\n        margin-bottom: 10px !important;\r\n        background: #f7f7f7 !important\r\n    }\r\n\r\n    .latest-box-body {\r\n        padding-top: 0 !important;\r\n    }\r\n\r\n    .product-flag {\r\n        padding: 10px;\r\n    }\r\n</style>\r\n<script>\r\n    import pageHeader from 'base/components/header/pageHeader.vue'\r\n    import userStatisticsService from 'base/dashboard/services/user/userStatisticsService'\r\n    import rankingService from 'base/dashboard/services/ranking/rankingService'\r\n    import scoutingService from 'base/dashboard/services/scoutings/scoutingService'\r\n    import reportsService from 'base/dashboard/services/reports/reportService'\r\n    import dashboardLocales from 'base/lang/admin/dashboard/dashboard.js';\r\n\r\n    export default{\r\n        locales: dashboardLocales,\r\n        data(){\r\n            return {\r\n                breadcrumbs: [\r\n                    {\r\n                        href: '/',\r\n                        title: 'Home'\r\n                    },\r\n                ],\r\n                latestScouting: null,\r\n                latestReport: null,\r\n                summary: {\r\n                    scountings: 0,\r\n                    reports: 0,\r\n                    completedChallenges: 0,\r\n                    rank: 0,\r\n                    points: 0\r\n                },\r\n                ranking: []\r\n            }\r\n        },\r\n        components: {\r\n            pageHeader\r\n        },\r\n        computed: {\r\n            userTitle(){\r\n                return this.$auth.user().athlete ? this.$auth.user().athlete.sport.name + ' ' + this.$auth.user().athlete.specialty.name : ''\r\n            },\r\n        },\r\n        mounted(){\r\n            this.loadRanking();\r\n            this.loadLatestReport();\r\n            this.loadLatestScouting();\r\n        },\r\n        methods: {\r\n            loadRanking(){\r\n                rankingService.ranking((response)=> {\r\n                    this.ranking = response.data;\r\n                }, (response)=> {\r\n\r\n                })\r\n            },\r\n            loadLatestReport(){\r\n                reportsService.latest((response)=> {\r\n                    this.latestReport = response.data;\r\n                }, (response)=> {\r\n\r\n                })\r\n            },\r\n            loadLatestScouting(){\r\n                scoutingService.latest((response)=> {\r\n                    this.latestScouting = response.data;\r\n                }, (response)=> {\r\n\r\n                })\r\n            },\r\n        }\r\n    }\r\n</script>\r\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 422:
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

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(370);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL2Rhc2hib2FyZC9kYXNoYm9hcmQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWU/NmI4ZSoqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vcGFnZUhlYWRlci52dWU/M2QwNyoqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlP2NhZTIqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWU/NWQ5OCoqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZT9hNjI3KioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9zZXJ2aWNlcy9zY291dGluZ3Mvc2NvdXRpbmdTZXJ2aWNlLmpzPzNkODUqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9zZXJ2aWNlcy9yZXBvcnRzL3JlcG9ydFNlcnZpY2UuanM/OGMyMyoiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvc2VydmljZXMvdXNlci91c2VyU3RhdGlzdGljc1NlcnZpY2UuanM/MDkwNiIsIndlYnBhY2s6Ly8vZGFzaGJvYXJkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9zZXJ2aWNlcy9yYW5raW5nL3JhbmtpbmdTZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbGFuZy9hZG1pbi9kYXNoYm9hcmQvZGFzaGJvYXJkLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC52dWU/NjBmZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL2Rhc2hib2FyZC9kYXNoYm9hcmQudnVlPzI1YTIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLnZ1ZT9mYzMxIl0sIm5hbWVzIjpbInNob3ciLCJpZCIsInN1Y2Nlc3NDYWxiYWNrIiwiZXJyb3JDYWxsYmFjayIsImh0dHAiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJib2R5IiwiY2F0Y2giLCJlcnJvciIsImNyZWF0ZSIsInNjb3V0aW5nIiwicG9zdCIsInVwZGF0ZSIsInB1dCIsImVtdWxhdGVIVFRQIiwicmVtb3ZlIiwiZGVsZXRlIiwicmVwb3J0IiwibGF0ZXN0IiwiYXRobGV0ZSIsInN1bW1hcnkiLCJyYW5raW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsaURBQWlELElBQUk7QUFDcEksbUNBQW1DOztBQUVuQztBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7Ozs7Ozs7O0FDOUJBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxpREFBaUQsSUFBSTtBQUNwSSxtQ0FBbUM7O0FBRW5DO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztB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QTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUN0TUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDIiwiZmlsZSI6ImpzLzE2LmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi1hMjIyZWI3MiEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vZGFzaGJvYXJkLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj9jYWNoZURpcmVjdG9yeSEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vZGFzaGJvYXJkLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LWEyMjJlYjcyIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2Rhc2hib2FyZC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkM6XFxcXGxhcmFnb25cXFxcd3d3XFxcXHNwb3J0ZWNoLXNjb3V0aW5nXFxcXHJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxcZGFzaGJvYXJkXFxcXG1vZHVsZXNcXFxcZGFzaGJvYXJkXFxcXGRhc2hib2FyZC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBkYXNoYm9hcmQudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWEyMjJlYjcyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtYTIyMmViNzJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMTYiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi02NmY4NWU3ZCFzYXNzLWxvYWRlciEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vcGFnZUhlYWRlci52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/Y2FjaGVEaXJlY3RvcnkhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3BhZ2VIZWFkZXIudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNjZmODVlN2QhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcGFnZUhlYWRlci52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkM6XFxcXGxhcmFnb25cXFxcd3d3XFxcXHNwb3J0ZWNoLXNjb3V0aW5nXFxcXHJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxcY29tcG9uZW50c1xcXFxoZWFkZXJcXFxccGFnZUhlYWRlci52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBwYWdlSGVhZGVyLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi02NmY4NWU3ZFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTY2Zjg1ZTdkXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWVcbi8vIG1vZHVsZSBpZCA9IDE5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkiLCI8dGVtcGxhdGU+XHJcbiAgICA8c2VjdGlvbiBjbGFzcz1cImNvbnRlbnQtaGVhZGVyXCI+XHJcbiAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICB7e3RpdGxlfX1cclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIDxvbCBjbGFzcz1cImJyZWFkY3J1bWJcIj5cclxuICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cImJyZWFkY3J1bWIuaHJlZlwiIGFjdGl2ZS1jbGFzcz1cImFjdGl2ZVwiIHRhZz1cImxpXCIgdi1mb3I9XCJicmVhZGNydW1iIGluIGJyZWFkY3J1bWJzXCI+XHJcbiAgICAgICAgICAgICAgICB7eyR0KGJyZWFkY3J1bWIudGl0bGUpfX1cclxuICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cclxuICAgICAgICA8L29sPlxyXG4gICAgPC9zZWN0aW9uPlxyXG48L3RlbXBsYXRlPlxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiByZWw9XCJzdHlsZXNoZWV0L3Njc3NcIj5cclxuICAgIC5hZG1pbi1oZWFkZXIge1xyXG4gICAgICAgIGhlaWdodDogOTdweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIC5yb3cge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zdHlsZT5cclxuPHNjcmlwdD5cclxuICAgIGV4cG9ydCBkZWZhdWx0e1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBicmVhZGNydW1iczoge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogQXJyYXksXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcGFnZUhlYWRlci52dWU/NGI4OTE5MjAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5hZG1pbi1oZWFkZXIge1xcbiAgaGVpZ2h0OiA5N3B4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLmFkbWluLWhlYWRlciAucm93IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi02NmY4NWU3ZCEuL34vc2Fzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdzZWN0aW9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRlbnQtaGVhZGVyXCJcbiAgfSwgW19jKCdoMScsIFtfdm0uX3YoXCJcXG4gICAgICAgIFwiICsgX3ZtLl9zKF92bS50aXRsZSkgKyBcIlxcbiAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJyZWFkY3J1bWJcIlxuICB9LCBfdm0uX2woKF92bS5icmVhZGNydW1icyksIGZ1bmN0aW9uKGJyZWFkY3J1bWIpIHtcbiAgICByZXR1cm4gX2MoJ3JvdXRlci1saW5rJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJ0b1wiOiBicmVhZGNydW1iLmhyZWYsXG4gICAgICAgIFwiYWN0aXZlLWNsYXNzXCI6IFwiYWN0aXZlXCIsXG4gICAgICAgIFwidGFnXCI6IFwibGlcIlxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHQoYnJlYWRjcnVtYi50aXRsZSkpICsgXCJcXG4gICAgICAgIFwiKV0pXG4gIH0pKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTY2Zjg1ZTdkXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi02NmY4NWU3ZCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi02NmY4NWU3ZCEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcGFnZUhlYWRlci52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiMjA0NjE0MThcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNjZmODVlN2QhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3BhZ2VIZWFkZXIudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTY2Zjg1ZTdkIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9wYWdlSGVhZGVyLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi02NmY4NWU3ZCEuL34vc2Fzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBzaG93KGlkLCBzdWNjZXNzQ2FsYmFjaywgZXJyb3JDYWxsYmFjayl7XHJcbiAgICAgICAgcmV0dXJuIFZ1ZS5odHRwLmdldCgnL2FwaS9zY291dGluZ3MvJyArIGlkICsgJz9pbmNsdWRlPWNoYW1waW9uc2hpcC5zcG9ydCxldmVudCxsZWZ0QXRobGV0ZSxyaWdodEF0aGxldGUsdG91Y2hlcy5hY3Rpb25zLmxlZnRUYWdzLHRvdWNoZXMuYWN0aW9ucy5yaWdodFRhZ3MnKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHN1Y2Nlc3NDYWxiYWNrKHJlc3BvbnNlLmJvZHkpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvckNhbGxiYWNrKGVycm9yKSk7XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlKHNjb3V0aW5nLCBzdWNjZXNzQ2FsYmFjaywgZXJyb3JDYWxsYmFjayl7XHJcbiAgICAgICAgcmV0dXJuIFZ1ZS5odHRwLnBvc3QoJy9hcGkvc2NvdXRpbmdzJywgc2NvdXRpbmcpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc3VjY2Vzc0NhbGJhY2socmVzcG9uc2UuYm9keSkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGVycm9yQ2FsbGJhY2soZXJyb3IpKTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGUoaWQsIHNjb3V0aW5nLCBzdWNjZXNzQ2FsYmFjaywgZXJyb3JDYWxsYmFjayl7XHJcbiAgICAgICAgcmV0dXJuIFZ1ZS5odHRwLnB1dCgnL2FwaS9zY291dGluZ3MvJyArIGlkLCBzY291dGluZywge2VtdWxhdGVIVFRQOiB0cnVlfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzdWNjZXNzQ2FsYmFjayhyZXNwb25zZS5ib2R5KSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3JDYWxsYmFjayhlcnJvci5ib2R5KSk7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlKGlkLCBzdWNjZXNzQ2FsYmFjaywgZXJyb3JDYWxsYmFjayl7XHJcbiAgICAgICAgcmV0dXJuIFZ1ZS5odHRwLmRlbGV0ZSgnL2FwaS9zY291dGluZ3MvJyArIGlkKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHN1Y2Nlc3NDYWxiYWNrKHJlc3BvbnNlLmJvZHkpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvckNhbGxiYWNrKGVycm9yLmJvZHkpKTtcclxuICAgIH0sXHJcbiAgICByZXBvcnQoaWQsIHN1Y2Nlc3NDYWxiYWNrLCBlcnJvckNhbGxiYWNrKXtcclxuICAgICAgICByZXR1cm4gVnVlLmh0dHAuZ2V0KCcvYXBpL3Njb3V0aW5ncy8nICsgaWQgKyAnL3JlcG9ydCcpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc3VjY2Vzc0NhbGJhY2socmVzcG9uc2UuYm9keSkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGVycm9yQ2FsbGJhY2soZXJyb3IpKTtcclxuICAgIH0sXHJcbiAgICBsYXRlc3Qoc3VjY2Vzc0NhbGJhY2ssIGVycm9yQ2FsbGJhY2spe1xyXG4gICAgICAgIHJldHVybiBWdWUuaHR0cC5nZXQoJy9hcGkvc2NvdXRpbmdzL2xhdGVzdCcpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc3VjY2Vzc0NhbGJhY2socmVzcG9uc2UuYm9keSkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGVycm9yQ2FsbGJhY2soZXJyb3IpKTtcclxuICAgIH0sXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9zZXJ2aWNlcy9zY291dGluZ3Mvc2NvdXRpbmdTZXJ2aWNlLmpzIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBzaG93KGlkLCBzdWNjZXNzQ2FsYmFjaywgZXJyb3JDYWxsYmFjayl7XHJcbiAgICAgICAgcmV0dXJuIFZ1ZS5odHRwLmdldCgnL2FwaS9yZXBvcnRzLycgKyBpZClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzdWNjZXNzQ2FsYmFjayhyZXNwb25zZS5ib2R5KSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3JDYWxsYmFjayhlcnJvcikpO1xyXG4gICAgfSxcclxuICAgIGNyZWF0ZShhdGhsZXRlLCBzdWNjZXNzQ2FsYmFjaywgZXJyb3JDYWxsYmFjayl7XHJcbiAgICAgICAgcmV0dXJuIFZ1ZS5odHRwLnBvc3QoJy9hcGkvcmVwb3J0cycsIGF0aGxldGUpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc3VjY2Vzc0NhbGJhY2socmVzcG9uc2UuYm9keSkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGVycm9yQ2FsbGJhY2soZXJyb3IpKTtcclxuICAgIH0sXHJcbiAgICBsYXRlc3Qoc3VjY2Vzc0NhbGJhY2ssIGVycm9yQ2FsbGJhY2spe1xyXG4gICAgICAgIHJldHVybiBWdWUuaHR0cC5nZXQoJy9hcGkvcmVwb3J0cy9sYXRlc3QnKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHN1Y2Nlc3NDYWxiYWNrKHJlc3BvbnNlLmJvZHkpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvckNhbGxiYWNrKGVycm9yKSk7XHJcbiAgICB9LFxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvc2VydmljZXMvcmVwb3J0cy9yZXBvcnRTZXJ2aWNlLmpzIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBzdW1tYXJ5KHN1Y2Nlc3NDYWxiYWNrLCBlcnJvckNhbGxiYWNrKXtcclxuICAgICAgICByZXR1cm4gVnVlLmh0dHAuZ2V0KCcvYXBpL3VzZXIvc3RhdGlzdGljcy9zdW1tYXJ5JylcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzdWNjZXNzQ2FsYmFjayhyZXNwb25zZS5ib2R5KSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3JDYWxsYmFjayhlcnJvcikpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvc2VydmljZXMvdXNlci91c2VyU3RhdGlzdGljc1NlcnZpY2UuanMiLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxwYWdlLWhlYWRlciB0aXRsZT1cIkRhc2hib2FyZFwiIDpicmVhZGNydW1icz1cImJyZWFkY3J1bWJzXCI+PC9wYWdlLWhlYWRlcj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtbWQtM1wiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94IGJveC13aWRnZXQgd2lkZ2V0LXVzZXItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIEFkZCB0aGUgYmcgY29sb3IgdG8gdGhlIGhlYWRlciB1c2luZyBhbnkgb2YgdGhlIGJnLSogY2xhc3NlcyAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndpZGdldC11c2VyLWhlYWRlciBiZy1ibHVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2lkZ2V0LXVzZXItaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiaW1nLWNpcmNsZVwiIDpzcmM9XCIkYXV0aC51c2VyKCkuaW1hZ2VcIiBhbHQ9XCJVc2VyIEF2YXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIC8ud2lkZ2V0LXVzZXItaW1hZ2UgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJ3aWRnZXQtdXNlci11c2VybmFtZVwiPnt7JGF1dGgudXNlcigpLmZ1bGxfbmFtZX19PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cIndpZGdldC11c2VyLWRlc2NcIj57e3VzZXJUaXRsZX19PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWU6ICd1c2VyLnZpZXcnfVwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9jayBidG4tZmxhdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnZGFzaGJvYXJkLmdvX3RvX3B0b2ZpbGUnKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveCBib3gtcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiYm94LXRpdGxlXCI+e3skdCgnZGFzaGJvYXJkLmxhdGVzdF9zY291dGluZycpfX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveC1ib2R5IGxhdGVzdC1ib3gtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwicHJvZHVjdHMtbGlzdCBwcm9kdWN0LWxpc3QtaW4tYm94XCIgdi1pZj1cImxhdGVzdFNjb3V0aW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiaXRlbSBwcm9kdWN0LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxhdGVzdC1wcm9kdWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnRvPVwieyBuYW1lOiAnc2NvdXRpbmdzLnRvdWNoJywgcGFyYW1zOiB7IGlkOiBsYXRlc3RTY291dGluZy5pZCB9fVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7bGF0ZXN0U2NvdXRpbmcubmFtZX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcm9kdWN0LWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tsYXRlc3RTY291dGluZy5kZXNjcmlwdGlvbn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHYtZWxzZT57eyR0KCdkYXNoYm9hcmQubm9fc2NvdXRpbmcnKX19PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWU6ICdzY291dGluZ3MuY3JlYXRlJ31cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ2Rhc2hib2FyZC5jcmVhdGVfc2NvdXRpbmcnKX19XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3ggYm94LXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImJveC10aXRsZVwiPnt7JHQoJ2Rhc2hib2FyZC5sYXRlc3RfcmVwb3J0Jyl9fTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInByb2R1Y3RzLWxpc3QgcHJvZHVjdC1saXN0LWluLWJveFwiIHYtaWY9XCJsYXRlc3RSZXBvcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJpdGVtIHByb2R1Y3QtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGF0ZXN0LXByb2R1Y3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWU6ICdyZXBvcnRzLnZpZXcnLCBwYXJhbXM6IHsgaWQ6IGxhdGVzdFJlcG9ydC5pZCB9fVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7bGF0ZXN0UmVwb3J0Lm5hbWV9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJvZHVjdC1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7bGF0ZXN0UmVwb3J0LmRlc2NyaXB0aW9ufX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgdi1lbHNlPnt7JHQoJ2Rhc2hib2FyZC5ub19yZXBvcnQnKX19PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWU6ICdyZXBvcnRzLmNyZWF0ZSd9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBidG4tYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdkYXNoYm9hcmQuY3JlYXRlX3JlcG9ydCcpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1tZC05XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1tZC0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveCBib3gtcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3gtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImJveC10aXRsZVwiPnt7JHQoJ2Rhc2hib2FyZC5nbG9iYWxfcmFua2luZycpfX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3gtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJwcm9kdWN0cy1saXN0IHByb2R1Y3QtbGlzdC1pbi1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIml0ZW1cIiB2LWZvcj1cInJhbmsgaW4gcmFua2luZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0LXJhbmsgcHVsbC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7cmFuay5yYW5rfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1pbWdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVwicmFuay51c2VyLmltYWdlXCIgYWx0PVwiUHJvZHVjdCBJbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0LWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwicHVsbC1sZWZ0XCI+e3tyYW5rLnVzZXIuZnVsbF9uYW1lfX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJyYW5rLnVzZXIuYXRobGV0ZS5jb3VudHJ5LmZsYWdcIiBjbGFzcz1cInByb2R1Y3QtZmxhZ1wiIGFsdD1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByb2R1Y3QtcG9pbnRzIHB1bGwtcmlnaHRcIj57e3JhbmsucG9pbnRzfX0gcHRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLW1kLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3ggYm94LXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJib3gtdGl0bGUgdGV4dC1jZW50ZXJcIj57eyR0KCdhZG1pbi5xdWlja19uYXZpZ2F0aW9uJyl9fTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveC1ib2R5IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWU6ICdzY291dGluZ3MubGlzdCd9XCIgY2xhc3M9XCJidG4gYnRuLWFwcCBidG4tcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1saXN0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnYWRtaW4uc2NvdXRpbmdzJyl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0biBidG4tYXBwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWZpbGUtdGV4dFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ2FkbWluLnJlcG9ydHMnKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInsgbmFtZTogJ2F0aGxldGVzLmxpc3QnfVwiIGNsYXNzPVwiYnRuIGJ0bi1hcHBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdXNlcnNcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdhZG1pbi5hdGhsZXRlcycpfX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWU6ICdldmVudHMubGlzdCd9XCIgY2xhc3M9XCJidG4gYnRuLWFwcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jYWxlbmRhclwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ2FkbWluLmV2ZW50cycpfX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWU6ICdjaGFtcGlvbnNoaXBzLmxpc3QnfVwiIGNsYXNzPVwiYnRuIGJ0bi1hcHBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdHJvcGh5XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnYWRtaW4uY2hhbXBpb25zaGlwcycpfX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcbjxzdHlsZT5cclxuICAgIC5wcm9kdWN0LXJhbmsge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzFweDtcclxuICAgICAgICB3aWR0aDogNzBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICNBQUE7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2R1Y3QtcG9pbnRzIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzAwYzBlZjtcclxuICAgICAgICBtYXJnaW46IDlweDtcclxuICAgICAgICBwYWRkaW5nOiAwIDVweDtcclxuICAgICAgICBtaW4td2lkdGg6IDYxcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZHVjdC1pbWcge1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZHVjdHMtbGlzdCAubGF0ZXN0LXByb2R1Y3Qge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmxhdGVzdC1wcm9kdWN0IGEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZHVjdC1pdGVtIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZjRmNGY0O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjdmN2Y3ICFpbXBvcnRhbnRcclxuICAgIH1cclxuXHJcbiAgICAubGF0ZXN0LWJveC1ib2R5IHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9kdWN0LWZsYWcge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB9XHJcbjwvc3R5bGU+XHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgcGFnZUhlYWRlciBmcm9tICdiYXNlL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlJ1xyXG4gICAgaW1wb3J0IHVzZXJTdGF0aXN0aWNzU2VydmljZSBmcm9tICdiYXNlL2Rhc2hib2FyZC9zZXJ2aWNlcy91c2VyL3VzZXJTdGF0aXN0aWNzU2VydmljZSdcclxuICAgIGltcG9ydCByYW5raW5nU2VydmljZSBmcm9tICdiYXNlL2Rhc2hib2FyZC9zZXJ2aWNlcy9yYW5raW5nL3JhbmtpbmdTZXJ2aWNlJ1xyXG4gICAgaW1wb3J0IHNjb3V0aW5nU2VydmljZSBmcm9tICdiYXNlL2Rhc2hib2FyZC9zZXJ2aWNlcy9zY291dGluZ3Mvc2NvdXRpbmdTZXJ2aWNlJ1xyXG4gICAgaW1wb3J0IHJlcG9ydHNTZXJ2aWNlIGZyb20gJ2Jhc2UvZGFzaGJvYXJkL3NlcnZpY2VzL3JlcG9ydHMvcmVwb3J0U2VydmljZSdcclxuICAgIGltcG9ydCBkYXNoYm9hcmRMb2NhbGVzIGZyb20gJ2Jhc2UvbGFuZy9hZG1pbi9kYXNoYm9hcmQvZGFzaGJvYXJkLmpzJztcclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdHtcclxuICAgICAgICBsb2NhbGVzOiBkYXNoYm9hcmRMb2NhbGVzLFxyXG4gICAgICAgIGRhdGEoKXtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGJyZWFkY3J1bWJzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmOiAnLycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnSG9tZSdcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGxhdGVzdFNjb3V0aW5nOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgbGF0ZXN0UmVwb3J0OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgc3VtbWFyeToge1xyXG4gICAgICAgICAgICAgICAgICAgIHNjb3VudGluZ3M6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVwb3J0czogMCxcclxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZWRDaGFsbGVuZ2VzOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHJhbms6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRzOiAwXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcmFua2luZzogW11cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tcG9uZW50czoge1xyXG4gICAgICAgICAgICBwYWdlSGVhZGVyXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb21wdXRlZDoge1xyXG4gICAgICAgICAgICB1c2VyVGl0bGUoKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRhdXRoLnVzZXIoKS5hdGhsZXRlID8gdGhpcy4kYXV0aC51c2VyKCkuYXRobGV0ZS5zcG9ydC5uYW1lICsgJyAnICsgdGhpcy4kYXV0aC51c2VyKCkuYXRobGV0ZS5zcGVjaWFsdHkubmFtZSA6ICcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VudGVkKCl7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFJhbmtpbmcoKTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkTGF0ZXN0UmVwb3J0KCk7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZExhdGVzdFNjb3V0aW5nKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIGxvYWRSYW5raW5nKCl7XHJcbiAgICAgICAgICAgICAgICByYW5raW5nU2VydmljZS5yYW5raW5nKChyZXNwb25zZSk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yYW5raW5nID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgIH0sIChyZXNwb25zZSk9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbG9hZExhdGVzdFJlcG9ydCgpe1xyXG4gICAgICAgICAgICAgICAgcmVwb3J0c1NlcnZpY2UubGF0ZXN0KChyZXNwb25zZSk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXRlc3RSZXBvcnQgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgfSwgKHJlc3BvbnNlKT0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsb2FkTGF0ZXN0U2NvdXRpbmcoKXtcclxuICAgICAgICAgICAgICAgIHNjb3V0aW5nU2VydmljZS5sYXRlc3QoKHJlc3BvbnNlKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhdGVzdFNjb3V0aW5nID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgIH0sIChyZXNwb25zZSk9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZGFzaGJvYXJkLnZ1ZT8xMWEwMDE0YyIsImltcG9ydCBWdWUgZnJvbSAndnVlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgcmFua2luZyhzdWNjZXNzQ2FsYmFjaywgZXJyb3JDYWxsYmFjayl7XHJcbiAgICAgICAgcmV0dXJuIFZ1ZS5odHRwLmdldCgnL2FwaS9yYW5raW5nP2luY2x1ZGU9dXNlci5hdGhsZXRlLmNvdW50cnknKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHN1Y2Nlc3NDYWxiYWNrKHJlc3BvbnNlLmJvZHkpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvckNhbGxiYWNrKGVycm9yKSk7XHJcbiAgICB9LFxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvc2VydmljZXMvcmFua2luZy9yYW5raW5nU2VydmljZS5qcyIsImV4cG9ydCBkZWZhdWx0IHtcclxuICAgIFwiZW5cIjoge1xyXG4gICAgICAgIFwiZGFzaGJvYXJkXCI6IHtcclxuICAgICAgICAgICAgXCJnbG9iYWxfcmFua2luZ1wiOiBcIkdsb2JhbCBSYW5raW5nXCIsXHJcbiAgICAgICAgICAgIFwibWVudVwiOiBcIk1lbnVcIixcclxuICAgICAgICAgICAgXCJvdmVyYWxsX3JhbmtpbmdcIjogXCJPdmVyYWxsIFJhbmtpbmdcIixcclxuICAgICAgICAgICAgXCJzY291dGluZ3NcIjogXCJTY291dGluZ3NcIixcclxuICAgICAgICAgICAgXCJyZXBvcnRzXCI6IFwiUmVwb3J0c1wiLFxyXG4gICAgICAgICAgICBcImNvbXBsZXRlZF9jaGFsbGVuZ2VzXCI6IFwiQ29tcGxldGVkIENoYWxsZW5nZXNcIixcclxuICAgICAgICAgICAgXCJsYXRlc3RfcmVwb3J0XCI6IFwiTGF0ZXN0IFJlcG9ydFwiLFxyXG4gICAgICAgICAgICBcIm5vX3JlcG9ydFwiOiBcIkNyZWF0ZSBhIG5ldyByZXBvcnRcIixcclxuICAgICAgICAgICAgXCJub19zY291dGluZ1wiOiBcIkNyZWF0ZSBhIG5ldyBzY291dGluZ1wiLFxyXG4gICAgICAgICAgICBcImxhdGVzdF9zY291dGluZ1wiOiBcIkxhdGVzdCBTY291dGluZ1wiLFxyXG4gICAgICAgICAgICBcImNyZWF0ZV9yZXBvcnRcIjogXCJDcmVhdGUgUmVwb3J0XCIsXHJcbiAgICAgICAgICAgIFwiY3JlYXRlX3Njb3V0aW5nXCI6IFwiQ3JlYXRlIFNjb3V0aW5nXCIsXHJcbiAgICAgICAgICAgIFwiZ29fdG9fcHRvZmlsZVwiOiBcIkdvIHRvIE15IFByb2ZpbGVcIlxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcImVzXCI6IHtcclxuICAgICAgICBcImRhc2hib2FyZFwiOiB7XHJcbiAgICAgICAgICAgIFwiZ2xvYmFsX3JhbmtpbmdcIjogXCJSYW5raW5nIEdsb2JhbFwiLFxyXG4gICAgICAgICAgICBcIm1lbnVcIjogXCJNZW51XCIsXHJcbiAgICAgICAgICAgIFwib3ZlcmFsbF9yYW5raW5nXCI6IFwiUmFua2luZ1wiLFxyXG4gICAgICAgICAgICBcInNjb3V0aW5nc1wiOiBcIlNjb3V0aW5nc1wiLFxyXG4gICAgICAgICAgICBcInJlcG9ydHNcIjogXCJSZXBvcnRlc1wiLFxyXG4gICAgICAgICAgICBcImNvbXBsZXRlZF9jaGFsbGVuZ2VzXCI6IFwiRGVzYWZpb3MgQ29tcGxldGFkb3NcIixcclxuICAgICAgICAgICAgXCJsYXRlc3RfcmVwb3J0XCI6IFwiw5psdGltbyBSZXBvcnRlXCIsXHJcbiAgICAgICAgICAgIFwibm9fcmVwb3J0XCI6IFwiQ3JlYSB1biBudWV2byByZXBvcnRcIixcclxuICAgICAgICAgICAgXCJub19zY291dGluZ1wiOiBcIkNyZWEgdW4gbnVldm8gc2NvdXRpbmdcIixcclxuICAgICAgICAgICAgXCJsYXRlc3Rfc2NvdXRpbmdcIjogXCLDmmx0aW1vIFNjb3V0aW5nXCIsXHJcbiAgICAgICAgICAgIFwiY3JlYXRlX3JlcG9ydFwiOiBcIkNyZWFyIFJlcG9ydGVcIixcclxuICAgICAgICAgICAgXCJjcmVhdGVfc2NvdXRpbmdcIjogXCJDcmVhciBTY291dGluZ1wiLFxyXG4gICAgICAgICAgICBcImdvX3RvX3B0b2ZpbGVcIjogXCJJciBhIG1pIFBlcmZpbFwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbGFuZy9hZG1pbi9kYXNoYm9hcmQvZGFzaGJvYXJkLmpzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4ucHJvZHVjdC1yYW5rIHtcXG4gICAgZm9udC1zaXplOiAzMXB4O1xcbiAgICB3aWR0aDogNzBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogI0FBQTtcXG59XFxuLnByb2R1Y3QtcG9pbnRzIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjMDBjMGVmO1xcbiAgICBtYXJnaW46IDlweDtcXG4gICAgcGFkZGluZzogMCA1cHg7XFxuICAgIG1pbi13aWR0aDogNjFweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbi5wcm9kdWN0LWltZyB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcXG59XFxuLnByb2R1Y3RzLWxpc3QgLmxhdGVzdC1wcm9kdWN0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcXG59XFxuLmxhdGVzdC1wcm9kdWN0IGEge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4ucHJvZHVjdC1pdGVtIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Y0ZjRmNDtcXG4gICAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcXG4gICAgYmFja2dyb3VuZDogI2Y3ZjdmNyAhaW1wb3J0YW50XFxufVxcbi5sYXRlc3QtYm94LWJvZHkge1xcbiAgICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xcbn1cXG4ucHJvZHVjdC1mbGFnIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uLi8uLi8uLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL2Rhc2hib2FyZC9kYXNoYm9hcmQudnVlPzExYTAwMTRjXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUEySUE7SUFDQSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxtQkFBQTtJQUNBLFlBQUE7Q0FDQTtBQUVBO0lBQ0EsZ0JBQUE7SUFDQSxvQkFBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLGFBQUE7Q0FDQTtBQUVBO0lBQ0EsbUJBQUE7Q0FDQTtBQUVBO0lBQ0EsMEJBQUE7Q0FDQTtBQUVBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtDQUNBO0FBRUE7SUFDQSwwQkFBQTtJQUNBLHdCQUFBO0lBQ0EsK0JBQUE7SUFDQSw4QkFBQTtDQUNBO0FBRUE7SUFDQSwwQkFBQTtDQUNBO0FBRUE7SUFDQSxjQUFBO0NBQ0FcIixcImZpbGVcIjpcImRhc2hib2FyZC52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcbiAgICA8ZGl2PlxcclxcbiAgICAgICAgPHBhZ2UtaGVhZGVyIHRpdGxlPVxcXCJEYXNoYm9hcmRcXFwiIDpicmVhZGNydW1icz1cXFwiYnJlYWRjcnVtYnNcXFwiPjwvcGFnZS1oZWFkZXI+XFxyXFxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cXFwiY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyIGNvbC1tZC0zXFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJveCBib3gtd2lkZ2V0IHdpZGdldC11c2VyLTJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gQWRkIHRoZSBiZyBjb2xvciB0byB0aGUgaGVhZGVyIHVzaW5nIGFueSBvZiB0aGUgYmctKiBjbGFzc2VzIC0tPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndpZGdldC11c2VyLWhlYWRlciBiZy1ibHVlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid2lkZ2V0LXVzZXItaW1hZ2VcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cXFwiaW1nLWNpcmNsZVxcXCIgOnNyYz1cXFwiJGF1dGgudXNlcigpLmltYWdlXFxcIiBhbHQ9XFxcIlVzZXIgQXZhdGFyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gLy53aWRnZXQtdXNlci1pbWFnZSAtLT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVxcXCJ3aWRnZXQtdXNlci11c2VybmFtZVxcXCI+e3skYXV0aC51c2VyKCkuZnVsbF9uYW1lfX08L2gzPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XFxcIndpZGdldC11c2VyLWRlc2NcXFwiPnt7dXNlclRpdGxlfX08L2g1PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XFxcInsgbmFtZTogJ3VzZXIudmlldyd9XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9jayBidG4tZmxhdFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ2Rhc2hib2FyZC5nb190b19wdG9maWxlJyl9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJveCBib3gtcHJpbWFyeVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYm94LWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwiYm94LXRpdGxlXFxcIj57eyR0KCdkYXNoYm9hcmQubGF0ZXN0X3Njb3V0aW5nJyl9fTwvaDM+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYm94LWJvZHkgbGF0ZXN0LWJveC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJwcm9kdWN0cy1saXN0IHByb2R1Y3QtbGlzdC1pbi1ib3hcXFwiIHYtaWY9XFxcImxhdGVzdFNjb3V0aW5nXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiaXRlbSBwcm9kdWN0LWl0ZW1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxhdGVzdC1wcm9kdWN0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnRvPVxcXCJ7IG5hbWU6ICdzY291dGluZ3MudG91Y2gnLCBwYXJhbXM6IHsgaWQ6IGxhdGVzdFNjb3V0aW5nLmlkIH19XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7bGF0ZXN0U2NvdXRpbmcubmFtZX19XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJwcm9kdWN0LWRlc2NyaXB0aW9uXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7bGF0ZXN0U2NvdXRpbmcuZGVzY3JpcHRpb259fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgdi1lbHNlPnt7JHQoJ2Rhc2hib2FyZC5ub19zY291dGluZycpfX08L2g0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVxcXCJ7IG5hbWU6ICdzY291dGluZ3MuY3JlYXRlJ31cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1ibG9ja1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdkYXNoYm9hcmQuY3JlYXRlX3Njb3V0aW5nJyl9fVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJib3ggYm94LXByaW1hcnlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJveC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XFxcImJveC10aXRsZVxcXCI+e3skdCgnZGFzaGJvYXJkLmxhdGVzdF9yZXBvcnQnKX19PC9oMz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJib3gtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwicHJvZHVjdHMtbGlzdCBwcm9kdWN0LWxpc3QtaW4tYm94XFxcIiB2LWlmPVxcXCJsYXRlc3RSZXBvcnRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJpdGVtIHByb2R1Y3QtaXRlbVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibGF0ZXN0LXByb2R1Y3RcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVxcXCJ7IG5hbWU6ICdyZXBvcnRzLnZpZXcnLCBwYXJhbXM6IHsgaWQ6IGxhdGVzdFJlcG9ydC5pZCB9fVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2xhdGVzdFJlcG9ydC5uYW1lfX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInByb2R1Y3QtZGVzY3JpcHRpb25cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tsYXRlc3RSZXBvcnQuZGVzY3JpcHRpb259fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgdi1lbHNlPnt7JHQoJ2Rhc2hib2FyZC5ub19yZXBvcnQnKX19PC9oND5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cXFwieyBuYW1lOiAncmVwb3J0cy5jcmVhdGUnfVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3MgYnRuLWJsb2NrXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ2Rhc2hib2FyZC5jcmVhdGVfcmVwb3J0Jyl9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLW1kLTlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLW1kLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYm94IGJveC1wcmltYXJ5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJveC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwiYm94LXRpdGxlXFxcIj57eyR0KCdkYXNoYm9hcmQuZ2xvYmFsX3JhbmtpbmcnKX19PC9oMz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYm94LWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwicHJvZHVjdHMtbGlzdCBwcm9kdWN0LWxpc3QtaW4tYm94XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJpdGVtXFxcIiB2LWZvcj1cXFwicmFuayBpbiByYW5raW5nXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2R1Y3QtcmFuayBwdWxsLWxlZnRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7cmFuay5yYW5rfX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvZHVjdC1pbWdcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cXFwicmFuay51c2VyLmltYWdlXFxcIiBhbHQ9XFxcIlByb2R1Y3QgSW1hZ2VcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9kdWN0LWluZm9cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwicHVsbC1sZWZ0XFxcIj57e3JhbmsudXNlci5mdWxsX25hbWV9fTwvaDQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVxcXCJyYW5rLnVzZXIuYXRobGV0ZS5jb3VudHJ5LmZsYWdcXFwiIGNsYXNzPVxcXCJwcm9kdWN0LWZsYWdcXFwiIGFsdD1cXFwiXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwicHJvZHVjdC1wb2ludHMgcHVsbC1yaWdodFxcXCI+e3tyYW5rLnBvaW50c319IHB0c1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyIGNvbC1tZC0yXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYm94IGJveC1wcmltYXJ5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJveC1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwiYm94LXRpdGxlIHRleHQtY2VudGVyXFxcIj57eyR0KCdhZG1pbi5xdWlja19uYXZpZ2F0aW9uJyl9fTwvaDM+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJveC1ib2R5IHRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVxcXCJ7IG5hbWU6ICdzY291dGluZ3MubGlzdCd9XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1hcHAgYnRuLXByaW1hcnlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtbGlzdFxcXCI+PC9pPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdhZG1pbi5zY291dGluZ3MnKX19XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiYnRuIGJ0bi1hcHBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtZmlsZS10ZXh0XFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ2FkbWluLnJlcG9ydHMnKX19XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XFxcInsgbmFtZTogJ2F0aGxldGVzLmxpc3QnfVxcXCIgY2xhc3M9XFxcImJ0biBidG4tYXBwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXVzZXJzXFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ2FkbWluLmF0aGxldGVzJyl9fVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cXFwieyBuYW1lOiAnZXZlbnRzLmxpc3QnfVxcXCIgY2xhc3M9XFxcImJ0biBidG4tYXBwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWNhbGVuZGFyXFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ2FkbWluLmV2ZW50cycpfX1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XFxcInsgbmFtZTogJ2NoYW1waW9uc2hpcHMubGlzdCd9XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1hcHBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtdHJvcGh5XFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ2FkbWluLmNoYW1waW9uc2hpcHMnKX19XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvc2VjdGlvbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG48c3R5bGU+XFxyXFxuICAgIC5wcm9kdWN0LXJhbmsge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAzMXB4O1xcclxcbiAgICAgICAgd2lkdGg6IDcwcHg7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICBjb2xvcjogI0FBQTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucHJvZHVjdC1wb2ludHMge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogIzAwYzBlZjtcXHJcXG4gICAgICAgIG1hcmdpbjogOXB4O1xcclxcbiAgICAgICAgcGFkZGluZzogMCA1cHg7XFxyXFxuICAgICAgICBtaW4td2lkdGg6IDYxcHg7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnByb2R1Y3QtaW1nIHtcXHJcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucHJvZHVjdHMtbGlzdCAubGF0ZXN0LXByb2R1Y3Qge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubGF0ZXN0LXByb2R1Y3QgYSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucHJvZHVjdC1pdGVtIHtcXHJcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmNGY0ZjQ7XFxyXFxuICAgICAgICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6ICNmN2Y3ZjcgIWltcG9ydGFudFxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5sYXRlc3QtYm94LWJvZHkge1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucHJvZHVjdC1mbGFnIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIH1cXHJcXG48L3N0eWxlPlxcclxcbjxzY3JpcHQ+XFxyXFxuICAgIGltcG9ydCBwYWdlSGVhZGVyIGZyb20gJ2Jhc2UvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWUnXFxyXFxuICAgIGltcG9ydCB1c2VyU3RhdGlzdGljc1NlcnZpY2UgZnJvbSAnYmFzZS9kYXNoYm9hcmQvc2VydmljZXMvdXNlci91c2VyU3RhdGlzdGljc1NlcnZpY2UnXFxyXFxuICAgIGltcG9ydCByYW5raW5nU2VydmljZSBmcm9tICdiYXNlL2Rhc2hib2FyZC9zZXJ2aWNlcy9yYW5raW5nL3JhbmtpbmdTZXJ2aWNlJ1xcclxcbiAgICBpbXBvcnQgc2NvdXRpbmdTZXJ2aWNlIGZyb20gJ2Jhc2UvZGFzaGJvYXJkL3NlcnZpY2VzL3Njb3V0aW5ncy9zY291dGluZ1NlcnZpY2UnXFxyXFxuICAgIGltcG9ydCByZXBvcnRzU2VydmljZSBmcm9tICdiYXNlL2Rhc2hib2FyZC9zZXJ2aWNlcy9yZXBvcnRzL3JlcG9ydFNlcnZpY2UnXFxyXFxuICAgIGltcG9ydCBkYXNoYm9hcmRMb2NhbGVzIGZyb20gJ2Jhc2UvbGFuZy9hZG1pbi9kYXNoYm9hcmQvZGFzaGJvYXJkLmpzJztcXHJcXG5cXHJcXG4gICAgZXhwb3J0IGRlZmF1bHR7XFxyXFxuICAgICAgICBsb2NhbGVzOiBkYXNoYm9hcmRMb2NhbGVzLFxcclxcbiAgICAgICAgZGF0YSgpe1xcclxcbiAgICAgICAgICAgIHJldHVybiB7XFxyXFxuICAgICAgICAgICAgICAgIGJyZWFkY3J1bWJzOiBbXFxyXFxuICAgICAgICAgICAgICAgICAgICB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogJy8nLFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnSG9tZSdcXHJcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgIF0sXFxyXFxuICAgICAgICAgICAgICAgIGxhdGVzdFNjb3V0aW5nOiBudWxsLFxcclxcbiAgICAgICAgICAgICAgICBsYXRlc3RSZXBvcnQ6IG51bGwsXFxyXFxuICAgICAgICAgICAgICAgIHN1bW1hcnk6IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHNjb3VudGluZ3M6IDAsXFxyXFxuICAgICAgICAgICAgICAgICAgICByZXBvcnRzOiAwLFxcclxcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkQ2hhbGxlbmdlczogMCxcXHJcXG4gICAgICAgICAgICAgICAgICAgIHJhbms6IDAsXFxyXFxuICAgICAgICAgICAgICAgICAgICBwb2ludHM6IDBcXHJcXG4gICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAgcmFua2luZzogW11cXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgY29tcG9uZW50czoge1xcclxcbiAgICAgICAgICAgIHBhZ2VIZWFkZXJcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBjb21wdXRlZDoge1xcclxcbiAgICAgICAgICAgIHVzZXJUaXRsZSgpe1xcclxcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kYXV0aC51c2VyKCkuYXRobGV0ZSA/IHRoaXMuJGF1dGgudXNlcigpLmF0aGxldGUuc3BvcnQubmFtZSArICcgJyArIHRoaXMuJGF1dGgudXNlcigpLmF0aGxldGUuc3BlY2lhbHR5Lm5hbWUgOiAnJ1xcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgbW91bnRlZCgpe1xcclxcbiAgICAgICAgICAgIHRoaXMubG9hZFJhbmtpbmcoKTtcXHJcXG4gICAgICAgICAgICB0aGlzLmxvYWRMYXRlc3RSZXBvcnQoKTtcXHJcXG4gICAgICAgICAgICB0aGlzLmxvYWRMYXRlc3RTY291dGluZygpO1xcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIG1ldGhvZHM6IHtcXHJcXG4gICAgICAgICAgICBsb2FkUmFua2luZygpe1xcclxcbiAgICAgICAgICAgICAgICByYW5raW5nU2VydmljZS5yYW5raW5nKChyZXNwb25zZSk9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJhbmtpbmcgPSByZXNwb25zZS5kYXRhO1xcclxcbiAgICAgICAgICAgICAgICB9LCAocmVzcG9uc2UpPT4ge1xcclxcblxcclxcbiAgICAgICAgICAgICAgICB9KVxcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgbG9hZExhdGVzdFJlcG9ydCgpe1xcclxcbiAgICAgICAgICAgICAgICByZXBvcnRzU2VydmljZS5sYXRlc3QoKHJlc3BvbnNlKT0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGF0ZXN0UmVwb3J0ID0gcmVzcG9uc2UuZGF0YTtcXHJcXG4gICAgICAgICAgICAgICAgfSwgKHJlc3BvbnNlKT0+IHtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgfSlcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgIGxvYWRMYXRlc3RTY291dGluZygpe1xcclxcbiAgICAgICAgICAgICAgICBzY291dGluZ1NlcnZpY2UubGF0ZXN0KChyZXNwb25zZSk9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhdGVzdFNjb3V0aW5nID0gcmVzcG9uc2UuZGF0YTtcXHJcXG4gICAgICAgICAgICAgICAgfSwgKHJlc3BvbnNlKT0+IHtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgfSlcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuPC9zY3JpcHQ+XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1hMjIyZWI3MiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC52dWVcbi8vIG1vZHVsZSBpZCA9IDM3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDE2IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ3BhZ2UtaGVhZGVyJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IFwiRGFzaGJvYXJkXCIsXG4gICAgICBcImJyZWFkY3J1bWJzXCI6IF92bS5icmVhZGNydW1ic1xuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzZWN0aW9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLW1kLTNcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3ggYm94LXdpZGdldCB3aWRnZXQtdXNlci0yXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwid2lkZ2V0LXVzZXItaGVhZGVyIGJnLWJsdWVcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ3aWRnZXQtdXNlci1pbWFnZVwiXG4gIH0sIFtfYygnaW1nJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImltZy1jaXJjbGVcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJzcmNcIjogX3ZtLiRhdXRoLnVzZXIoKS5pbWFnZSxcbiAgICAgIFwiYWx0XCI6IFwiVXNlciBBdmF0YXJcIlxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2gzJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIndpZGdldC11c2VyLXVzZXJuYW1lXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLiRhdXRoLnVzZXIoKS5mdWxsX25hbWUpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaDUnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwid2lkZ2V0LXVzZXItZGVzY1wiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS51c2VyVGl0bGUpKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdyb3V0ZXItbGluaycsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnkgYnRuLWJsb2NrIGJ0bi1mbGF0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidG9cIjoge1xuICAgICAgICBuYW1lOiAndXNlci52aWV3J1xuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdCgnZGFzaGJvYXJkLmdvX3RvX3B0b2ZpbGUnKSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3ggYm94LXByaW1hcnlcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3gtaGVhZGVyXCJcbiAgfSwgW19jKCdoMycsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3gtdGl0bGVcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoJ2Rhc2hib2FyZC5sYXRlc3Rfc2NvdXRpbmcnKSkpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3gtYm9keSBsYXRlc3QtYm94LWJvZHlcIlxuICB9LCBbKF92bS5sYXRlc3RTY291dGluZykgPyBfYygndWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicHJvZHVjdHMtbGlzdCBwcm9kdWN0LWxpc3QtaW4tYm94XCJcbiAgfSwgW19jKCdsaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpdGVtIHByb2R1Y3QtaXRlbVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImxhdGVzdC1wcm9kdWN0XCJcbiAgfSwgW19jKCdyb3V0ZXItbGluaycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0b1wiOiB7XG4gICAgICAgIG5hbWU6ICdzY291dGluZ3MudG91Y2gnLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBpZDogX3ZtLmxhdGVzdFNjb3V0aW5nLmlkXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLmxhdGVzdFNjb3V0aW5nLm5hbWUpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicHJvZHVjdC1kZXNjcmlwdGlvblwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLmxhdGVzdFNjb3V0aW5nLmRlc2NyaXB0aW9uKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKV0pXSkgOiBfYygnaDQnLCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoJ2Rhc2hib2FyZC5ub19zY291dGluZycpKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3JvdXRlci1saW5rJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc3VjY2VzcyBidG4tYmxvY2tcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0b1wiOiB7XG4gICAgICAgIG5hbWU6ICdzY291dGluZ3MuY3JlYXRlJ1xuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHQoJ2Rhc2hib2FyZC5jcmVhdGVfc2NvdXRpbmcnKSkgKyBcIlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3ggYm94LXByaW1hcnlcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3gtaGVhZGVyXCJcbiAgfSwgW19jKCdoMycsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3gtdGl0bGVcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoJ2Rhc2hib2FyZC5sYXRlc3RfcmVwb3J0JykpKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYm94LWJvZHlcIlxuICB9LCBbKF92bS5sYXRlc3RSZXBvcnQpID8gX2MoJ3VsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInByb2R1Y3RzLWxpc3QgcHJvZHVjdC1saXN0LWluLWJveFwiXG4gIH0sIFtfYygnbGknLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaXRlbSBwcm9kdWN0LWl0ZW1cIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJsYXRlc3QtcHJvZHVjdFwiXG4gIH0sIFtfYygncm91dGVyLWxpbmsnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidG9cIjoge1xuICAgICAgICBuYW1lOiAncmVwb3J0cy52aWV3JyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgaWQ6IF92bS5sYXRlc3RSZXBvcnQuaWRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubGF0ZXN0UmVwb3J0Lm5hbWUpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicHJvZHVjdC1kZXNjcmlwdGlvblwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLmxhdGVzdFJlcG9ydC5kZXNjcmlwdGlvbikgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSldKV0pIDogX2MoJ2g0JywgW192bS5fdihfdm0uX3MoX3ZtLiR0KCdkYXNoYm9hcmQubm9fcmVwb3J0JykpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncm91dGVyLWxpbmsnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1ibG9ja1wiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInRvXCI6IHtcbiAgICAgICAgbmFtZTogJ3JlcG9ydHMuY3JlYXRlJ1xuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHQoJ2Rhc2hib2FyZC5jcmVhdGVfcmVwb3J0JykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLW1kLTlcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLW1kLTEwXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYm94IGJveC1wcmltYXJ5XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYm94LWhlYWRlclwiXG4gIH0sIFtfYygnaDMnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYm94LXRpdGxlXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLiR0KCdkYXNoYm9hcmQuZ2xvYmFsX3JhbmtpbmcnKSkpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3gtYm9keVwiXG4gIH0sIFtfYygndWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicHJvZHVjdHMtbGlzdCBwcm9kdWN0LWxpc3QtaW4tYm94XCJcbiAgfSwgX3ZtLl9sKChfdm0ucmFua2luZyksIGZ1bmN0aW9uKHJhbmspIHtcbiAgICByZXR1cm4gX2MoJ2xpJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiaXRlbVwiXG4gICAgfSwgW19jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJwcm9kdWN0LXJhbmsgcHVsbC1sZWZ0XCJcbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhyYW5rLnJhbmspICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJwcm9kdWN0LWltZ1wiXG4gICAgfSwgW19jKCdpbWcnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcInNyY1wiOiByYW5rLnVzZXIuaW1hZ2UsXG4gICAgICAgIFwiYWx0XCI6IFwiUHJvZHVjdCBJbWFnZVwiXG4gICAgICB9XG4gICAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInByb2R1Y3QtaW5mb1wiXG4gICAgfSwgW19jKCdoNCcsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInB1bGwtbGVmdFwiXG4gICAgfSwgW192bS5fdihfdm0uX3MocmFuay51c2VyLmZ1bGxfbmFtZSkpXSksIF92bS5fdihcIiBcIiksIF9jKCdpbWcnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJwcm9kdWN0LWZsYWdcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwic3JjXCI6IHJhbmsudXNlci5hdGhsZXRlLmNvdW50cnkuZmxhZyxcbiAgICAgICAgXCJhbHRcIjogXCJcIlxuICAgICAgfVxuICAgIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInByb2R1Y3QtcG9pbnRzIHB1bGwtcmlnaHRcIlxuICAgIH0sIFtfdm0uX3YoX3ZtLl9zKHJhbmsucG9pbnRzKSArIFwiIHB0c1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldKV0pXG4gIH0pKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLW1kLTJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3ggYm94LXByaW1hcnlcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3gtaGVhZGVyXCJcbiAgfSwgW19jKCdoMycsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3gtdGl0bGUgdGV4dC1jZW50ZXJcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoJ2FkbWluLnF1aWNrX25hdmlnYXRpb24nKSkpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3gtYm9keSB0ZXh0LWNlbnRlclwiXG4gIH0sIFtfYygncm91dGVyLWxpbmsnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1hcHAgYnRuLXByaW1hcnlcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0b1wiOiB7XG4gICAgICAgIG5hbWU6ICdzY291dGluZ3MubGlzdCdcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1saXN0XCJcbiAgfSksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdCgnYWRtaW4uc2NvdXRpbmdzJykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWFwcFwiXG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1maWxlLXRleHRcIlxuICB9KSwgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KCdhZG1pbi5yZXBvcnRzJykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncm91dGVyLWxpbmsnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1hcHBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0b1wiOiB7XG4gICAgICAgIG5hbWU6ICdhdGhsZXRlcy5saXN0J1xuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLXVzZXJzXCJcbiAgfSksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdCgnYWRtaW4uYXRobGV0ZXMnKSkgKyBcIlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdyb3V0ZXItbGluaycsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWFwcFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInRvXCI6IHtcbiAgICAgICAgbmFtZTogJ2V2ZW50cy5saXN0J1xuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLWNhbGVuZGFyXCJcbiAgfSksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdCgnYWRtaW4uZXZlbnRzJykpICsgXCJcXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncm91dGVyLWxpbmsnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1hcHBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0b1wiOiB7XG4gICAgICAgIG5hbWU6ICdjaGFtcGlvbnNoaXBzLmxpc3QnXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtdHJvcGh5XCJcbiAgfSksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdCgnYWRtaW4uY2hhbXBpb25zaGlwcycpKSArIFwiXFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpXSldKV0pXSldKV0pXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtYTIyMmViNzJcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LWEyMjJlYjcyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL2Rhc2hib2FyZC9kYXNoYm9hcmQudnVlXG4vLyBtb2R1bGUgaWQgPSA0MjJcbi8vIG1vZHVsZSBjaHVua3MgPSAxNiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtYTIyMmViNzIhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2Rhc2hib2FyZC52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiY2EyZTUzOWVcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWEyMjJlYjcyIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9kYXNoYm9hcmQudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1hMjIyZWI3MiEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vZGFzaGJvYXJkLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtYTIyMmViNzIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL2Rhc2hib2FyZC9kYXNoYm9hcmQudnVlXG4vLyBtb2R1bGUgaWQgPSA0NThcbi8vIG1vZHVsZSBjaHVua3MgPSAxNiJdLCJzb3VyY2VSb290IjoiIn0=