webpackJsonp([16,31],{

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(461)

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(297),
  /* template */
  __webpack_require__(425),
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


/* styles */
__webpack_require__(200)

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(197),
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

/***/ 197:
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

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\n.admin-header {\n  height: 97px;\n  margin-bottom: 20px;\n}\n.admin-header .row {\n    margin-bottom: 0;\n}\n", ""]);

// exports


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
var content = __webpack_require__(198);
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

/***/ 243:
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

/***/ 256:
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

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _pageHeader = __webpack_require__(196);

var _pageHeader2 = _interopRequireDefault(_pageHeader);

var _userStatisticsService = __webpack_require__(256);

var _userStatisticsService2 = _interopRequireDefault(_userStatisticsService);

var _rankingService = __webpack_require__(342);

var _rankingService2 = _interopRequireDefault(_rankingService);

var _scoutingService = __webpack_require__(243);

var _scoutingService2 = _interopRequireDefault(_scoutingService);

var _reportService = __webpack_require__(246);

var _reportService2 = _interopRequireDefault(_reportService);

var _dashboard = __webpack_require__(346);

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

/***/ 342:
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

/***/ 346:
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

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\n.product-rank {\n    font-size: 31px;\n    width: 70px;\n    text-align: center;\n    color: #AAA;\n}\n.product-points {\n    font-size: 20px;\n    background: #00c0ef;\n    margin: 9px;\n    padding: 0 5px;\n    min-width: 61px;\n    text-align: center;\n    color: white;\n}\n.product-img {\n    padding-right: 5px;\n}\n.products-list .latest-product {\n    margin-left: 0 !important;\n}\n.latest-product a {\n    font-size: 20px;\n    font-weight: bold;\n}\n.product-item {\n    border: 1px solid #f4f4f4;\n    padding: 5px !important;\n    margin-bottom: 10px !important;\n    background: #f7f7f7 !important\n}\n.latest-box-body {\n    padding-top: 0 !important;\n}\n.product-flag {\n    padding: 10px;\n}\n", "", {"version":3,"sources":["/../../../resources/assets/js/dashboard/modules/dashboard/dashboard.vue?11a0014c"],"names":[],"mappings":";AA2IA;IACA,gBAAA;IACA,YAAA;IACA,mBAAA;IACA,YAAA;CACA;AAEA;IACA,gBAAA;IACA,oBAAA;IACA,YAAA;IACA,eAAA;IACA,gBAAA;IACA,mBAAA;IACA,aAAA;CACA;AAEA;IACA,mBAAA;CACA;AAEA;IACA,0BAAA;CACA;AAEA;IACA,gBAAA;IACA,kBAAA;CACA;AAEA;IACA,0BAAA;IACA,wBAAA;IACA,+BAAA;IACA,8BAAA;CACA;AAEA;IACA,0BAAA;CACA;AAEA;IACA,cAAA;CACA","file":"dashboard.vue","sourcesContent":["<template>\r\n    <div>\r\n        <page-header title=\"Dashboard\" :breadcrumbs=\"breadcrumbs\"></page-header>\r\n        <section class=\"content\">\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-12 col-md-3\">\r\n\r\n                    <div class=\"box box-widget widget-user-2\">\r\n                        <!-- Add the bg color to the header using any of the bg-* classes -->\r\n                        <div class=\"widget-user-header bg-blue\">\r\n                            <div class=\"widget-user-image\">\r\n                                <img class=\"img-circle\" :src=\"$auth.user().image\" alt=\"User Avatar\">\r\n                            </div>\r\n                            <!-- /.widget-user-image -->\r\n                            <h3 class=\"widget-user-username\">{{$auth.user().full_name}}</h3>\r\n                            <h5 class=\"widget-user-desc\">{{userTitle}}</h5>\r\n                        </div>\r\n                        <router-link :to=\"{ name: 'user.view'}\" class=\"btn btn-primary btn-block btn-flat\">\r\n                            {{$t('dashboard.go_to_ptofile')}}\r\n                        </router-link>\r\n                    </div>\r\n                    <div class=\"box box-primary\">\r\n                        <div class=\"box-header\">\r\n                            <h3 class=\"box-title\">{{$t('dashboard.latest_scouting')}}</h3>\r\n                        </div>\r\n                        <div class=\"box-body latest-box-body\">\r\n                            <ul class=\"products-list product-list-in-box\" v-if=\"latestScouting\">\r\n                                <li class=\"item product-item\">\r\n                                    <div class=\"latest-product\">\r\n                                        <router-link\r\n                                                :to=\"{ name: 'scoutings.touch', params: { id: latestScouting.id }}\">\r\n                                            {{latestScouting.name}}\r\n                                        </router-link>\r\n                                        <span class=\"product-description\">\r\n                                            {{latestScouting.description}}\r\n                                        </span>\r\n                                    </div>\r\n                                </li>\r\n                            </ul>\r\n                            <h4 v-else>{{$t('dashboard.no_scouting')}}</h4>\r\n                            <router-link :to=\"{ name: 'scoutings.create'}\"\r\n                                         class=\"btn btn-success btn-block\">\r\n                                {{$t('dashboard.create_scouting')}}\r\n\r\n                            </router-link>\r\n\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"box box-primary\">\r\n                        <div class=\"box-header\">\r\n                            <h3 class=\"box-title\">{{$t('dashboard.latest_report')}}</h3>\r\n                        </div>\r\n                        <div class=\"box-body\">\r\n                            <ul class=\"products-list product-list-in-box\" v-if=\"latestReport\">\r\n                                <li class=\"item product-item\">\r\n                                    <div class=\"latest-product\">\r\n                                        <router-link :to=\"{ name: 'reports.view', params: { id: latestReport.id }}\">\r\n                                            {{latestReport.name}}\r\n                                        </router-link>\r\n                                        <span class=\"product-description\">\r\n                                            {{latestReport.description}}\r\n                                        </span>\r\n                                    </div>\r\n                                </li>\r\n                            </ul>\r\n                            <h4 v-else>{{$t('dashboard.no_report')}}</h4>\r\n                            <router-link :to=\"{ name: 'reports.create'}\"\r\n                                         class=\"btn btn-success btn-block\">\r\n                                {{$t('dashboard.create_report')}}\r\n                            </router-link>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-xs-12 col-md-9\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12 col-md-10\">\r\n                            <div class=\"box box-primary\">\r\n                                <div class=\"box-header\">\r\n                                    <h3 class=\"box-title\">{{$t('dashboard.global_ranking')}}</h3>\r\n                                </div>\r\n                                <div class=\"box-body\">\r\n                                    <ul class=\"products-list product-list-in-box\">\r\n                                        <li class=\"item\" v-for=\"rank in ranking\">\r\n                                            <div class=\"product-rank pull-left\">\r\n                                                {{rank.rank}}\r\n                                            </div>\r\n                                            <div class=\"product-img\">\r\n                                                <img :src=\"rank.user.image\" alt=\"Product Image\">\r\n                                            </div>\r\n                                            <div class=\"product-info\">\r\n                                                <h4 class=\"pull-left\">{{rank.user.full_name}}</h4>\r\n                                                <img :src=\"rank.user.athlete.country.flag\" class=\"product-flag\" alt=\"\">\r\n                                                <span class=\"product-points pull-right\">{{rank.points}} pts\r\n                                                </span>\r\n                                            </div>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-12 col-md-2\">\r\n                            <div class=\"box box-primary\">\r\n                                <div class=\"box-header\">\r\n                                    <h3 class=\"box-title text-center\">{{$t('admin.quick_navigation')}}</h3>\r\n                                </div>\r\n                                <div class=\"box-body text-center\">\r\n                                    <router-link :to=\"{ name: 'scoutings.list'}\" class=\"btn btn-app btn-primary\">\r\n                                        <i class=\"fa fa-list\"></i>\r\n                                        {{$t('admin.scoutings')}}\r\n                                    </router-link>\r\n                                    <a class=\"btn btn-app\">\r\n                                        <i class=\"fa fa-file-text\"></i>\r\n                                        {{$t('admin.reports')}}\r\n                                    </a>\r\n                                    <router-link :to=\"{ name: 'athletes.list'}\" class=\"btn btn-app\">\r\n                                        <i class=\"fa fa-users\"></i>\r\n                                        {{$t('admin.athletes')}}\r\n\r\n                                    </router-link>\r\n                                    <router-link :to=\"{ name: 'events.list'}\" class=\"btn btn-app\">\r\n                                        <i class=\"fa fa-calendar\"></i>\r\n                                        {{$t('admin.events')}}\r\n\r\n                                    </router-link>\r\n                                    <router-link :to=\"{ name: 'championships.list'}\" class=\"btn btn-app\">\r\n                                        <i class=\"fa fa-trophy\"></i>\r\n                                        {{$t('admin.championships')}}\r\n\r\n                                    </router-link>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n    </div>\r\n</template>\r\n<style>\r\n    .product-rank {\r\n        font-size: 31px;\r\n        width: 70px;\r\n        text-align: center;\r\n        color: #AAA;\r\n    }\r\n\r\n    .product-points {\r\n        font-size: 20px;\r\n        background: #00c0ef;\r\n        margin: 9px;\r\n        padding: 0 5px;\r\n        min-width: 61px;\r\n        text-align: center;\r\n        color: white;\r\n    }\r\n\r\n    .product-img {\r\n        padding-right: 5px;\r\n    }\r\n\r\n    .products-list .latest-product {\r\n        margin-left: 0 !important;\r\n    }\r\n\r\n    .latest-product a {\r\n        font-size: 20px;\r\n        font-weight: bold;\r\n    }\r\n\r\n    .product-item {\r\n        border: 1px solid #f4f4f4;\r\n        padding: 5px !important;\r\n        margin-bottom: 10px !important;\r\n        background: #f7f7f7 !important\r\n    }\r\n\r\n    .latest-box-body {\r\n        padding-top: 0 !important;\r\n    }\r\n\r\n    .product-flag {\r\n        padding: 10px;\r\n    }\r\n</style>\r\n<script>\r\n    import pageHeader from 'base/components/header/pageHeader.vue'\r\n    import userStatisticsService from 'base/dashboard/services/user/userStatisticsService'\r\n    import rankingService from 'base/dashboard/services/ranking/rankingService'\r\n    import scoutingService from 'base/dashboard/services/scoutings/scoutingService'\r\n    import reportsService from 'base/dashboard/services/reports/reportService'\r\n    import dashboardLocales from 'base/lang/admin/dashboard/dashboard.js';\r\n\r\n    export default{\r\n        locales: dashboardLocales,\r\n        data(){\r\n            return {\r\n                breadcrumbs: [\r\n                    {\r\n                        href: '/',\r\n                        title: 'Home'\r\n                    },\r\n                ],\r\n                latestScouting: null,\r\n                latestReport: null,\r\n                summary: {\r\n                    scountings: 0,\r\n                    reports: 0,\r\n                    completedChallenges: 0,\r\n                    rank: 0,\r\n                    points: 0\r\n                },\r\n                ranking: []\r\n            }\r\n        },\r\n        components: {\r\n            pageHeader\r\n        },\r\n        computed: {\r\n            userTitle(){\r\n                return this.$auth.user().athlete ? this.$auth.user().athlete.sport.name + ' ' + this.$auth.user().athlete.specialty.name : ''\r\n            },\r\n        },\r\n        mounted(){\r\n            this.loadRanking();\r\n            this.loadLatestReport();\r\n            this.loadLatestScouting();\r\n        },\r\n        methods: {\r\n            loadRanking(){\r\n                rankingService.ranking((response)=> {\r\n                    this.ranking = response.data;\r\n                }, (response)=> {\r\n\r\n                })\r\n            },\r\n            loadLatestReport(){\r\n                reportsService.latest((response)=> {\r\n                    this.latestReport = response.data;\r\n                }, (response)=> {\r\n\r\n                })\r\n            },\r\n            loadLatestScouting(){\r\n                scoutingService.latest((response)=> {\r\n                    this.latestScouting = response.data;\r\n                }, (response)=> {\r\n\r\n                })\r\n            },\r\n        }\r\n    }\r\n</script>\r\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 425:
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

/***/ 461:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(372);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL2Rhc2hib2FyZC9kYXNoYm9hcmQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWU/NmI4ZSIsIndlYnBhY2s6Ly8vcGFnZUhlYWRlci52dWU/M2QwNyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlP2NhZTIqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWU/NWQ5OCoiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZT9hNjI3KiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9zZXJ2aWNlcy9zY291dGluZ3Mvc2NvdXRpbmdTZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL3NlcnZpY2VzL3JlcG9ydHMvcmVwb3J0U2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9zZXJ2aWNlcy91c2VyL3VzZXJTdGF0aXN0aWNzU2VydmljZS5qcz8wOTA2Iiwid2VicGFjazovLy9kYXNoYm9hcmQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL3NlcnZpY2VzL3JhbmtpbmcvcmFua2luZ1NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9sYW5nL2FkbWluL2Rhc2hib2FyZC9kYXNoYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLnZ1ZT82MGZmIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC52dWU/MjVhMiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL2Rhc2hib2FyZC9kYXNoYm9hcmQudnVlP2ZjMzEiXSwibmFtZXMiOlsic2hvdyIsImlkIiwic3VjY2Vzc0NhbGJhY2siLCJlcnJvckNhbGxiYWNrIiwiaHR0cCIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImJvZHkiLCJjYXRjaCIsImVycm9yIiwiY3JlYXRlIiwic2NvdXRpbmciLCJwb3N0IiwidXBkYXRlIiwicHV0IiwiZW11bGF0ZUhUVFAiLCJyZW1vdmUiLCJkZWxldGUiLCJyZXBvcnQiLCJsYXRlc3QiLCJhdGhsZXRlIiwic3VtbWFyeSIsInJhbmtpbmciXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxpREFBaUQsSUFBSTtBQUNwSSxtQ0FBbUM7O0FBRW5DO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDOztBQUVEOzs7Ozs7Ozs7QUM5QkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTs7Ozs7a0JBSUE7c0JBRUE7QUFIQTs7a0JB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QUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ3RNQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEMiLCJmaWxlIjoianMvMTYuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LWEyMjJlYjcyIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9kYXNoYm9hcmQudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP2NhY2hlRGlyZWN0b3J5IS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9kYXNoYm9hcmQudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtYTIyMmViNzIhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vZGFzaGJvYXJkLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQzpcXFxcbGFyYWdvblxcXFx3d3dcXFxcc3BvcnRlY2gtc2NvdXRpbmdcXFxccmVzb3VyY2VzXFxcXGFzc2V0c1xcXFxqc1xcXFxkYXNoYm9hcmRcXFxcbW9kdWxlc1xcXFxkYXNoYm9hcmRcXFxcZGFzaGJvYXJkLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGRhc2hib2FyZC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtYTIyMmViNzJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1hMjIyZWI3MlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL2Rhc2hib2FyZC9kYXNoYm9hcmQudnVlXG4vLyBtb2R1bGUgaWQgPSAxNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAxNiIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTY2Zjg1ZTdkIXNhc3MtbG9hZGVyIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9wYWdlSGVhZGVyLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj9jYWNoZURpcmVjdG9yeSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vcGFnZUhlYWRlci52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi02NmY4NWU3ZCEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9wYWdlSGVhZGVyLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQzpcXFxcbGFyYWdvblxcXFx3d3dcXFxcc3BvcnRlY2gtc2NvdXRpbmdcXFxccmVzb3VyY2VzXFxcXGFzc2V0c1xcXFxqc1xcXFxjb21wb25lbnRzXFxcXGhlYWRlclxcXFxwYWdlSGVhZGVyLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHBhZ2VIZWFkZXIudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTY2Zjg1ZTdkXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNjZmODVlN2RcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSIsIjx0ZW1wbGF0ZT5cclxuICAgIDxzZWN0aW9uIGNsYXNzPVwiY29udGVudC1oZWFkZXJcIj5cclxuICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgIHt7dGl0bGV9fVxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICAgPG9sIGNsYXNzPVwiYnJlYWRjcnVtYlwiPlxyXG4gICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwiYnJlYWRjcnVtYi5ocmVmXCIgYWN0aXZlLWNsYXNzPVwiYWN0aXZlXCIgdGFnPVwibGlcIiB2LWZvcj1cImJyZWFkY3J1bWIgaW4gYnJlYWRjcnVtYnNcIj5cclxuICAgICAgICAgICAgICAgIHt7JHQoYnJlYWRjcnVtYi50aXRsZSl9fVxyXG4gICAgICAgICAgICA8L3JvdXRlci1saW5rPlxyXG4gICAgICAgIDwvb2w+XHJcbiAgICA8L3NlY3Rpb24+XHJcbjwvdGVtcGxhdGU+XHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHJlbD1cInN0eWxlc2hlZXQvc2Nzc1wiPlxyXG4gICAgLmFkbWluLWhlYWRlciB7XHJcbiAgICAgICAgaGVpZ2h0OiA5N3B4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgLnJvdyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3N0eWxlPlxyXG48c2NyaXB0PlxyXG4gICAgZXhwb3J0IGRlZmF1bHR7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJyZWFkY3J1bWJzOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBBcnJheSxcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW11cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBwYWdlSGVhZGVyLnZ1ZT80Yjg5MTkyMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmFkbWluLWhlYWRlciB7XFxuICBoZWlnaHQ6IDk3cHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4uYWRtaW4taGVhZGVyIC5yb3cge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTY2Zjg1ZTdkIS4vfi9zYXNzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWVcbi8vIG1vZHVsZSBpZCA9IDE5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ3NlY3Rpb24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udGVudC1oZWFkZXJcIlxuICB9LCBbX2MoJ2gxJywgW192bS5fdihcIlxcbiAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLnRpdGxlKSArIFwiXFxuICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnb2wnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnJlYWRjcnVtYlwiXG4gIH0sIF92bS5fbCgoX3ZtLmJyZWFkY3J1bWJzKSwgZnVuY3Rpb24oYnJlYWRjcnVtYikge1xuICAgIHJldHVybiBfYygncm91dGVyLWxpbmsnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcInRvXCI6IGJyZWFkY3J1bWIuaHJlZixcbiAgICAgICAgXCJhY3RpdmUtY2xhc3NcIjogXCJhY3RpdmVcIixcbiAgICAgICAgXCJ0YWdcIjogXCJsaVwiXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdChicmVhZGNydW1iLnRpdGxlKSkgKyBcIlxcbiAgICAgICAgXCIpXSlcbiAgfSkpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNjZmODVlN2RcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTY2Zjg1ZTdkIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTY2Zjg1ZTdkIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9wYWdlSGVhZGVyLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCIyMDQ2MTQxOFwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi02NmY4NWU3ZCEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcGFnZUhlYWRlci52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNjZmODVlN2QhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3BhZ2VIZWFkZXIudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTY2Zjg1ZTdkIS4vfi9zYXNzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWVcbi8vIG1vZHVsZSBpZCA9IDIwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkiLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHNob3coaWQsIHN1Y2Nlc3NDYWxiYWNrLCBlcnJvckNhbGxiYWNrKXtcclxuICAgICAgICByZXR1cm4gVnVlLmh0dHAuZ2V0KCcvYXBpL3Njb3V0aW5ncy8nICsgaWQgKyAnP2luY2x1ZGU9Y2hhbXBpb25zaGlwLnNwb3J0LGV2ZW50LGxlZnRBdGhsZXRlLHJpZ2h0QXRobGV0ZSx0b3VjaGVzLmFjdGlvbnMubGVmdFRhZ3MsdG91Y2hlcy5hY3Rpb25zLnJpZ2h0VGFncycpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc3VjY2Vzc0NhbGJhY2socmVzcG9uc2UuYm9keSkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGVycm9yQ2FsbGJhY2soZXJyb3IpKTtcclxuICAgIH0sXHJcbiAgICBjcmVhdGUoc2NvdXRpbmcsIHN1Y2Nlc3NDYWxiYWNrLCBlcnJvckNhbGxiYWNrKXtcclxuICAgICAgICByZXR1cm4gVnVlLmh0dHAucG9zdCgnL2FwaS9zY291dGluZ3MnLCBzY291dGluZylcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzdWNjZXNzQ2FsYmFjayhyZXNwb25zZS5ib2R5KSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3JDYWxsYmFjayhlcnJvcikpO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZShpZCwgc2NvdXRpbmcsIHN1Y2Nlc3NDYWxiYWNrLCBlcnJvckNhbGxiYWNrKXtcclxuICAgICAgICByZXR1cm4gVnVlLmh0dHAucHV0KCcvYXBpL3Njb3V0aW5ncy8nICsgaWQsIHNjb3V0aW5nLCB7ZW11bGF0ZUhUVFA6IHRydWV9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHN1Y2Nlc3NDYWxiYWNrKHJlc3BvbnNlLmJvZHkpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvckNhbGxiYWNrKGVycm9yLmJvZHkpKTtcclxuICAgIH0sXHJcbiAgICByZW1vdmUoaWQsIHN1Y2Nlc3NDYWxiYWNrLCBlcnJvckNhbGxiYWNrKXtcclxuICAgICAgICByZXR1cm4gVnVlLmh0dHAuZGVsZXRlKCcvYXBpL3Njb3V0aW5ncy8nICsgaWQpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc3VjY2Vzc0NhbGJhY2socmVzcG9uc2UuYm9keSkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGVycm9yQ2FsbGJhY2soZXJyb3IuYm9keSkpO1xyXG4gICAgfSxcclxuICAgIHJlcG9ydChpZCwgc3VjY2Vzc0NhbGJhY2ssIGVycm9yQ2FsbGJhY2spe1xyXG4gICAgICAgIHJldHVybiBWdWUuaHR0cC5nZXQoJy9hcGkvc2NvdXRpbmdzLycgKyBpZCArICcvcmVwb3J0JylcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzdWNjZXNzQ2FsYmFjayhyZXNwb25zZS5ib2R5KSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3JDYWxsYmFjayhlcnJvcikpO1xyXG4gICAgfSxcclxuICAgIGxhdGVzdChzdWNjZXNzQ2FsYmFjaywgZXJyb3JDYWxsYmFjayl7XHJcbiAgICAgICAgcmV0dXJuIFZ1ZS5odHRwLmdldCgnL2FwaS9zY291dGluZ3MvbGF0ZXN0JylcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzdWNjZXNzQ2FsYmFjayhyZXNwb25zZS5ib2R5KSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3JDYWxsYmFjayhlcnJvcikpO1xyXG4gICAgfSxcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL3NlcnZpY2VzL3Njb3V0aW5ncy9zY291dGluZ1NlcnZpY2UuanMiLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHNob3coaWQsIHN1Y2Nlc3NDYWxiYWNrLCBlcnJvckNhbGxiYWNrKXtcclxuICAgICAgICByZXR1cm4gVnVlLmh0dHAuZ2V0KCcvYXBpL3JlcG9ydHMvJyArIGlkKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHN1Y2Nlc3NDYWxiYWNrKHJlc3BvbnNlLmJvZHkpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvckNhbGxiYWNrKGVycm9yKSk7XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlKGF0aGxldGUsIHN1Y2Nlc3NDYWxiYWNrLCBlcnJvckNhbGxiYWNrKXtcclxuICAgICAgICByZXR1cm4gVnVlLmh0dHAucG9zdCgnL2FwaS9yZXBvcnRzJywgYXRobGV0ZSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzdWNjZXNzQ2FsYmFjayhyZXNwb25zZS5ib2R5KSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3JDYWxsYmFjayhlcnJvcikpO1xyXG4gICAgfSxcclxuICAgIGxhdGVzdChzdWNjZXNzQ2FsYmFjaywgZXJyb3JDYWxsYmFjayl7XHJcbiAgICAgICAgcmV0dXJuIFZ1ZS5odHRwLmdldCgnL2FwaS9yZXBvcnRzL2xhdGVzdCcpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc3VjY2Vzc0NhbGJhY2socmVzcG9uc2UuYm9keSkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGVycm9yQ2FsbGJhY2soZXJyb3IpKTtcclxuICAgIH0sXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9zZXJ2aWNlcy9yZXBvcnRzL3JlcG9ydFNlcnZpY2UuanMiLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHN1bW1hcnkoc3VjY2Vzc0NhbGJhY2ssIGVycm9yQ2FsbGJhY2spe1xyXG4gICAgICAgIHJldHVybiBWdWUuaHR0cC5nZXQoJy9hcGkvdXNlci9zdGF0aXN0aWNzL3N1bW1hcnknKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHN1Y2Nlc3NDYWxiYWNrKHJlc3BvbnNlLmJvZHkpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvckNhbGxiYWNrKGVycm9yKSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9zZXJ2aWNlcy91c2VyL3VzZXJTdGF0aXN0aWNzU2VydmljZS5qcyIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPHBhZ2UtaGVhZGVyIHRpdGxlPVwiRGFzaGJvYXJkXCIgOmJyZWFkY3J1bWJzPVwiYnJlYWRjcnVtYnNcIj48L3BhZ2UtaGVhZGVyPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1tZC0zXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3ggYm94LXdpZGdldCB3aWRnZXQtdXNlci0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gQWRkIHRoZSBiZyBjb2xvciB0byB0aGUgaGVhZGVyIHVzaW5nIGFueSBvZiB0aGUgYmctKiBjbGFzc2VzIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2lkZ2V0LXVzZXItaGVhZGVyIGJnLWJsdWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aWRnZXQtdXNlci1pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctY2lyY2xlXCIgOnNyYz1cIiRhdXRoLnVzZXIoKS5pbWFnZVwiIGFsdD1cIlVzZXIgQXZhdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gLy53aWRnZXQtdXNlci1pbWFnZSAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cIndpZGdldC11c2VyLXVzZXJuYW1lXCI+e3skYXV0aC51c2VyKCkuZnVsbF9uYW1lfX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwid2lkZ2V0LXVzZXItZGVzY1wiPnt7dXNlclRpdGxlfX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInsgbmFtZTogJ3VzZXIudmlldyd9XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLWJsb2NrIGJ0bi1mbGF0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdkYXNoYm9hcmQuZ29fdG9fcHRvZmlsZScpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94IGJveC1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3gtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJib3gtdGl0bGVcIj57eyR0KCdkYXNoYm9hcmQubGF0ZXN0X3Njb3V0aW5nJyl9fTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWJvZHkgbGF0ZXN0LWJveC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJwcm9kdWN0cy1saXN0IHByb2R1Y3QtbGlzdC1pbi1ib3hcIiB2LWlmPVwibGF0ZXN0U2NvdXRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJpdGVtIHByb2R1Y3QtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGF0ZXN0LXByb2R1Y3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dG89XCJ7IG5hbWU6ICdzY291dGluZ3MudG91Y2gnLCBwYXJhbXM6IHsgaWQ6IGxhdGVzdFNjb3V0aW5nLmlkIH19XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tsYXRlc3RTY291dGluZy5uYW1lfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByb2R1Y3QtZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2xhdGVzdFNjb3V0aW5nLmRlc2NyaXB0aW9ufX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgdi1lbHNlPnt7JHQoJ2Rhc2hib2FyZC5ub19zY291dGluZycpfX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInsgbmFtZTogJ3Njb3V0aW5ncy5jcmVhdGUnfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgYnRuLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnZGFzaGJvYXJkLmNyZWF0ZV9zY291dGluZycpfX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveCBib3gtcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiYm94LXRpdGxlXCI+e3skdCgnZGFzaGJvYXJkLmxhdGVzdF9yZXBvcnQnKX19PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3gtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwicHJvZHVjdHMtbGlzdCBwcm9kdWN0LWxpc3QtaW4tYm94XCIgdi1pZj1cImxhdGVzdFJlcG9ydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIml0ZW0gcHJvZHVjdC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYXRlc3QtcHJvZHVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInsgbmFtZTogJ3JlcG9ydHMudmlldycsIHBhcmFtczogeyBpZDogbGF0ZXN0UmVwb3J0LmlkIH19XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tsYXRlc3RSZXBvcnQubmFtZX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcm9kdWN0LWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tsYXRlc3RSZXBvcnQuZGVzY3JpcHRpb259fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCB2LWVsc2U+e3skdCgnZGFzaGJvYXJkLm5vX3JlcG9ydCcpfX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInsgbmFtZTogJ3JlcG9ydHMuY3JlYXRlJ31cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ2Rhc2hib2FyZC5jcmVhdGVfcmVwb3J0Jyl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLW1kLTlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLW1kLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94IGJveC1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiYm94LXRpdGxlXCI+e3skdCgnZGFzaGJvYXJkLmdsb2JhbF9yYW5raW5nJyl9fTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInByb2R1Y3RzLWxpc3QgcHJvZHVjdC1saXN0LWluLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiaXRlbVwiIHYtZm9yPVwicmFuayBpbiByYW5raW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3QtcmFuayBwdWxsLWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tyYW5rLnJhbmt9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0LWltZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJyYW5rLnVzZXIuaW1hZ2VcIiBhbHQ9XCJQcm9kdWN0IEltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3QtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJwdWxsLWxlZnRcIj57e3JhbmsudXNlci5mdWxsX25hbWV9fTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cInJhbmsudXNlci5hdGhsZXRlLmNvdW50cnkuZmxhZ1wiIGNsYXNzPVwicHJvZHVjdC1mbGFnXCIgYWx0PVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJvZHVjdC1wb2ludHMgcHVsbC1yaWdodFwiPnt7cmFuay5wb2ludHN9fSBwdHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtbWQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveCBib3gtcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3gtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImJveC10aXRsZSB0ZXh0LWNlbnRlclwiPnt7JHQoJ2FkbWluLnF1aWNrX25hdmlnYXRpb24nKX19PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWJvZHkgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInsgbmFtZTogJ3Njb3V0aW5ncy5saXN0J31cIiBjbGFzcz1cImJ0biBidG4tYXBwIGJ0bi1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWxpc3RcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdhZG1pbi5zY291dGluZ3MnKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIGJ0bi1hcHBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtZmlsZS10ZXh0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnYWRtaW4ucmVwb3J0cycpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwieyBuYW1lOiAnYXRobGV0ZXMubGlzdCd9XCIgY2xhc3M9XCJidG4gYnRuLWFwcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS11c2Vyc1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ2FkbWluLmF0aGxldGVzJyl9fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInsgbmFtZTogJ2V2ZW50cy5saXN0J31cIiBjbGFzcz1cImJ0biBidG4tYXBwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNhbGVuZGFyXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnYWRtaW4uZXZlbnRzJyl9fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInsgbmFtZTogJ2NoYW1waW9uc2hpcHMubGlzdCd9XCIgY2xhc3M9XCJidG4gYnRuLWFwcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS10cm9waHlcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdhZG1pbi5jaGFtcGlvbnNoaXBzJyl9fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHN0eWxlPlxyXG4gICAgLnByb2R1Y3QtcmFuayB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMXB4O1xyXG4gICAgICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogI0FBQTtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZHVjdC1wb2ludHMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDBjMGVmO1xyXG4gICAgICAgIG1hcmdpbjogOXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDAgNXB4O1xyXG4gICAgICAgIG1pbi13aWR0aDogNjFweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9kdWN0LWltZyB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9kdWN0cy1saXN0IC5sYXRlc3QtcHJvZHVjdCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAubGF0ZXN0LXByb2R1Y3QgYSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9kdWN0LWl0ZW0ge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmNGY0ZjQ7XHJcbiAgICAgICAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmN2Y3ZjcgIWltcG9ydGFudFxyXG4gICAgfVxyXG5cclxuICAgIC5sYXRlc3QtYm94LWJvZHkge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2R1Y3QtZmxhZyB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH1cclxuPC9zdHlsZT5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBwYWdlSGVhZGVyIGZyb20gJ2Jhc2UvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWUnXHJcbiAgICBpbXBvcnQgdXNlclN0YXRpc3RpY3NTZXJ2aWNlIGZyb20gJ2Jhc2UvZGFzaGJvYXJkL3NlcnZpY2VzL3VzZXIvdXNlclN0YXRpc3RpY3NTZXJ2aWNlJ1xyXG4gICAgaW1wb3J0IHJhbmtpbmdTZXJ2aWNlIGZyb20gJ2Jhc2UvZGFzaGJvYXJkL3NlcnZpY2VzL3JhbmtpbmcvcmFua2luZ1NlcnZpY2UnXHJcbiAgICBpbXBvcnQgc2NvdXRpbmdTZXJ2aWNlIGZyb20gJ2Jhc2UvZGFzaGJvYXJkL3NlcnZpY2VzL3Njb3V0aW5ncy9zY291dGluZ1NlcnZpY2UnXHJcbiAgICBpbXBvcnQgcmVwb3J0c1NlcnZpY2UgZnJvbSAnYmFzZS9kYXNoYm9hcmQvc2VydmljZXMvcmVwb3J0cy9yZXBvcnRTZXJ2aWNlJ1xyXG4gICAgaW1wb3J0IGRhc2hib2FyZExvY2FsZXMgZnJvbSAnYmFzZS9sYW5nL2FkbWluL2Rhc2hib2FyZC9kYXNoYm9hcmQuanMnO1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0e1xyXG4gICAgICAgIGxvY2FsZXM6IGRhc2hib2FyZExvY2FsZXMsXHJcbiAgICAgICAgZGF0YSgpe1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgYnJlYWRjcnVtYnM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6ICcvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdIb21lJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbGF0ZXN0U2NvdXRpbmc6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBsYXRlc3RSZXBvcnQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBzdW1tYXJ5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NvdW50aW5nczogMCxcclxuICAgICAgICAgICAgICAgICAgICByZXBvcnRzOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZENoYWxsZW5nZXM6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgcmFuazogMCxcclxuICAgICAgICAgICAgICAgICAgICBwb2ludHM6IDBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByYW5raW5nOiBbXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgICAgIHBhZ2VIZWFkZXJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgICAgIHVzZXJUaXRsZSgpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJGF1dGgudXNlcigpLmF0aGxldGUgPyB0aGlzLiRhdXRoLnVzZXIoKS5hdGhsZXRlLnNwb3J0Lm5hbWUgKyAnICcgKyB0aGlzLiRhdXRoLnVzZXIoKS5hdGhsZXRlLnNwZWNpYWx0eS5uYW1lIDogJydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vdW50ZWQoKXtcclxuICAgICAgICAgICAgdGhpcy5sb2FkUmFua2luZygpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRMYXRlc3RSZXBvcnQoKTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkTGF0ZXN0U2NvdXRpbmcoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgbG9hZFJhbmtpbmcoKXtcclxuICAgICAgICAgICAgICAgIHJhbmtpbmdTZXJ2aWNlLnJhbmtpbmcoKHJlc3BvbnNlKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJhbmtpbmcgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgfSwgKHJlc3BvbnNlKT0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsb2FkTGF0ZXN0UmVwb3J0KCl7XHJcbiAgICAgICAgICAgICAgICByZXBvcnRzU2VydmljZS5sYXRlc3QoKHJlc3BvbnNlKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhdGVzdFJlcG9ydCA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICB9LCAocmVzcG9uc2UpPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxvYWRMYXRlc3RTY291dGluZygpe1xyXG4gICAgICAgICAgICAgICAgc2NvdXRpbmdTZXJ2aWNlLmxhdGVzdCgocmVzcG9uc2UpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGF0ZXN0U2NvdXRpbmcgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgfSwgKHJlc3BvbnNlKT0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBkYXNoYm9hcmQudnVlPzExYTAwMTRjIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICByYW5raW5nKHN1Y2Nlc3NDYWxiYWNrLCBlcnJvckNhbGxiYWNrKXtcclxuICAgICAgICByZXR1cm4gVnVlLmh0dHAuZ2V0KCcvYXBpL3Jhbmtpbmc/aW5jbHVkZT11c2VyLmF0aGxldGUuY291bnRyeScpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc3VjY2Vzc0NhbGJhY2socmVzcG9uc2UuYm9keSkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGVycm9yQ2FsbGJhY2soZXJyb3IpKTtcclxuICAgIH0sXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9zZXJ2aWNlcy9yYW5raW5nL3JhbmtpbmdTZXJ2aWNlLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgXCJlblwiOiB7XHJcbiAgICAgICAgXCJkYXNoYm9hcmRcIjoge1xyXG4gICAgICAgICAgICBcImdsb2JhbF9yYW5raW5nXCI6IFwiR2xvYmFsIFJhbmtpbmdcIixcclxuICAgICAgICAgICAgXCJtZW51XCI6IFwiTWVudVwiLFxyXG4gICAgICAgICAgICBcIm92ZXJhbGxfcmFua2luZ1wiOiBcIk92ZXJhbGwgUmFua2luZ1wiLFxyXG4gICAgICAgICAgICBcInNjb3V0aW5nc1wiOiBcIlNjb3V0aW5nc1wiLFxyXG4gICAgICAgICAgICBcInJlcG9ydHNcIjogXCJSZXBvcnRzXCIsXHJcbiAgICAgICAgICAgIFwiY29tcGxldGVkX2NoYWxsZW5nZXNcIjogXCJDb21wbGV0ZWQgQ2hhbGxlbmdlc1wiLFxyXG4gICAgICAgICAgICBcImxhdGVzdF9yZXBvcnRcIjogXCJMYXRlc3QgUmVwb3J0XCIsXHJcbiAgICAgICAgICAgIFwibm9fcmVwb3J0XCI6IFwiQ3JlYXRlIGEgbmV3IHJlcG9ydFwiLFxyXG4gICAgICAgICAgICBcIm5vX3Njb3V0aW5nXCI6IFwiQ3JlYXRlIGEgbmV3IHNjb3V0aW5nXCIsXHJcbiAgICAgICAgICAgIFwibGF0ZXN0X3Njb3V0aW5nXCI6IFwiTGF0ZXN0IFNjb3V0aW5nXCIsXHJcbiAgICAgICAgICAgIFwiY3JlYXRlX3JlcG9ydFwiOiBcIkNyZWF0ZSBSZXBvcnRcIixcclxuICAgICAgICAgICAgXCJjcmVhdGVfc2NvdXRpbmdcIjogXCJDcmVhdGUgU2NvdXRpbmdcIixcclxuICAgICAgICAgICAgXCJnb190b19wdG9maWxlXCI6IFwiR28gdG8gTXkgUHJvZmlsZVwiXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwiZXNcIjoge1xyXG4gICAgICAgIFwiZGFzaGJvYXJkXCI6IHtcclxuICAgICAgICAgICAgXCJnbG9iYWxfcmFua2luZ1wiOiBcIlJhbmtpbmcgR2xvYmFsXCIsXHJcbiAgICAgICAgICAgIFwibWVudVwiOiBcIk1lbnVcIixcclxuICAgICAgICAgICAgXCJvdmVyYWxsX3JhbmtpbmdcIjogXCJSYW5raW5nXCIsXHJcbiAgICAgICAgICAgIFwic2NvdXRpbmdzXCI6IFwiU2NvdXRpbmdzXCIsXHJcbiAgICAgICAgICAgIFwicmVwb3J0c1wiOiBcIlJlcG9ydGVzXCIsXHJcbiAgICAgICAgICAgIFwiY29tcGxldGVkX2NoYWxsZW5nZXNcIjogXCJEZXNhZmlvcyBDb21wbGV0YWRvc1wiLFxyXG4gICAgICAgICAgICBcImxhdGVzdF9yZXBvcnRcIjogXCLDmmx0aW1vIFJlcG9ydGVcIixcclxuICAgICAgICAgICAgXCJub19yZXBvcnRcIjogXCJDcmVhIHVuIG51ZXZvIHJlcG9ydFwiLFxyXG4gICAgICAgICAgICBcIm5vX3Njb3V0aW5nXCI6IFwiQ3JlYSB1biBudWV2byBzY291dGluZ1wiLFxyXG4gICAgICAgICAgICBcImxhdGVzdF9zY291dGluZ1wiOiBcIsOabHRpbW8gU2NvdXRpbmdcIixcclxuICAgICAgICAgICAgXCJjcmVhdGVfcmVwb3J0XCI6IFwiQ3JlYXIgUmVwb3J0ZVwiLFxyXG4gICAgICAgICAgICBcImNyZWF0ZV9zY291dGluZ1wiOiBcIkNyZWFyIFNjb3V0aW5nXCIsXHJcbiAgICAgICAgICAgIFwiZ29fdG9fcHRvZmlsZVwiOiBcIklyIGEgbWkgUGVyZmlsXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9sYW5nL2FkbWluL2Rhc2hib2FyZC9kYXNoYm9hcmQuanMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5wcm9kdWN0LXJhbmsge1xcbiAgICBmb250LXNpemU6IDMxcHg7XFxuICAgIHdpZHRoOiA3MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjQUFBO1xcbn1cXG4ucHJvZHVjdC1wb2ludHMge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGJhY2tncm91bmQ6ICMwMGMwZWY7XFxuICAgIG1hcmdpbjogOXB4O1xcbiAgICBwYWRkaW5nOiAwIDVweDtcXG4gICAgbWluLXdpZHRoOiA2MXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLnByb2R1Y3QtaW1nIHtcXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xcbn1cXG4ucHJvZHVjdHMtbGlzdCAubGF0ZXN0LXByb2R1Y3Qge1xcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xcbn1cXG4ubGF0ZXN0LXByb2R1Y3QgYSB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5wcm9kdWN0LWl0ZW0ge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjRmNGY0O1xcbiAgICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xcbiAgICBiYWNrZ3JvdW5kOiAjZjdmN2Y3ICFpbXBvcnRhbnRcXG59XFxuLmxhdGVzdC1ib3gtYm9keSB7XFxuICAgIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XFxufVxcbi5wcm9kdWN0LWZsYWcge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiLy4uLy4uLy4uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC52dWU/MTFhMDAxNGNcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQTJJQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLG1CQUFBO0lBQ0EsWUFBQTtDQUNBO0FBRUE7SUFDQSxnQkFBQTtJQUNBLG9CQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsYUFBQTtDQUNBO0FBRUE7SUFDQSxtQkFBQTtDQUNBO0FBRUE7SUFDQSwwQkFBQTtDQUNBO0FBRUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0NBQ0E7QUFFQTtJQUNBLDBCQUFBO0lBQ0Esd0JBQUE7SUFDQSwrQkFBQTtJQUNBLDhCQUFBO0NBQ0E7QUFFQTtJQUNBLDBCQUFBO0NBQ0E7QUFFQTtJQUNBLGNBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiZGFzaGJvYXJkLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxyXFxuICAgIDxkaXY+XFxyXFxuICAgICAgICA8cGFnZS1oZWFkZXIgdGl0bGU9XFxcIkRhc2hib2FyZFxcXCIgOmJyZWFkY3J1bWJzPVxcXCJicmVhZGNydW1ic1xcXCI+PC9wYWdlLWhlYWRlcj5cXHJcXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJjb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLW1kLTNcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYm94IGJveC13aWRnZXQgd2lkZ2V0LXVzZXItMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBBZGQgdGhlIGJnIGNvbG9yIHRvIHRoZSBoZWFkZXIgdXNpbmcgYW55IG9mIHRoZSBiZy0qIGNsYXNzZXMgLS0+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid2lkZ2V0LXVzZXItaGVhZGVyIGJnLWJsdWVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3aWRnZXQtdXNlci1pbWFnZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVxcXCJpbWctY2lyY2xlXFxcIiA6c3JjPVxcXCIkYXV0aC51c2VyKCkuaW1hZ2VcXFwiIGFsdD1cXFwiVXNlciBBdmF0YXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAvLndpZGdldC11c2VyLWltYWdlIC0tPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XFxcIndpZGdldC11c2VyLXVzZXJuYW1lXFxcIj57eyRhdXRoLnVzZXIoKS5mdWxsX25hbWV9fTwvaDM+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cXFwid2lkZ2V0LXVzZXItZGVzY1xcXCI+e3t1c2VyVGl0bGV9fTwvaDU+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cXFwieyBuYW1lOiAndXNlci52aWV3J31cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLWJsb2NrIGJ0bi1mbGF0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnZGFzaGJvYXJkLmdvX3RvX3B0b2ZpbGUnKX19XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYm94IGJveC1wcmltYXJ5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJib3gtaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVxcXCJib3gtdGl0bGVcXFwiPnt7JHQoJ2Rhc2hib2FyZC5sYXRlc3Rfc2NvdXRpbmcnKX19PC9oMz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJib3gtYm9keSBsYXRlc3QtYm94LWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XFxcInByb2R1Y3RzLWxpc3QgcHJvZHVjdC1saXN0LWluLWJveFxcXCIgdi1pZj1cXFwibGF0ZXN0U2NvdXRpbmdcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJpdGVtIHByb2R1Y3QtaXRlbVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibGF0ZXN0LXByb2R1Y3RcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dG89XFxcInsgbmFtZTogJ3Njb3V0aW5ncy50b3VjaCcsIHBhcmFtczogeyBpZDogbGF0ZXN0U2NvdXRpbmcuaWQgfX1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tsYXRlc3RTY291dGluZy5uYW1lfX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInByb2R1Y3QtZGVzY3JpcHRpb25cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tsYXRlc3RTY291dGluZy5kZXNjcmlwdGlvbn19XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCB2LWVsc2U+e3skdCgnZGFzaGJvYXJkLm5vX3Njb3V0aW5nJyl9fTwvaDQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XFxcInsgbmFtZTogJ3Njb3V0aW5ncy5jcmVhdGUnfVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3MgYnRuLWJsb2NrXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ2Rhc2hib2FyZC5jcmVhdGVfc2NvdXRpbmcnKX19XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJveCBib3gtcHJpbWFyeVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYm94LWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwiYm94LXRpdGxlXFxcIj57eyR0KCdkYXNoYm9hcmQubGF0ZXN0X3JlcG9ydCcpfX08L2gzPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJveC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJwcm9kdWN0cy1saXN0IHByb2R1Y3QtbGlzdC1pbi1ib3hcXFwiIHYtaWY9XFxcImxhdGVzdFJlcG9ydFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XFxcIml0ZW0gcHJvZHVjdC1pdGVtXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsYXRlc3QtcHJvZHVjdFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XFxcInsgbmFtZTogJ3JlcG9ydHMudmlldycsIHBhcmFtczogeyBpZDogbGF0ZXN0UmVwb3J0LmlkIH19XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7bGF0ZXN0UmVwb3J0Lm5hbWV9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwicHJvZHVjdC1kZXNjcmlwdGlvblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2xhdGVzdFJlcG9ydC5kZXNjcmlwdGlvbn19XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCB2LWVsc2U+e3skdCgnZGFzaGJvYXJkLm5vX3JlcG9ydCcpfX08L2g0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVxcXCJ7IG5hbWU6ICdyZXBvcnRzLmNyZWF0ZSd9XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImJ0biBidG4tc3VjY2VzcyBidG4tYmxvY2tcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnZGFzaGJvYXJkLmNyZWF0ZV9yZXBvcnQnKX19XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtbWQtOVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtbWQtMTBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJib3ggYm94LXByaW1hcnlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYm94LWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVxcXCJib3gtdGl0bGVcXFwiPnt7JHQoJ2Rhc2hib2FyZC5nbG9iYWxfcmFua2luZycpfX08L2gzPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJib3gtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJwcm9kdWN0cy1saXN0IHByb2R1Y3QtbGlzdC1pbi1ib3hcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XFxcIml0ZW1cXFwiIHYtZm9yPVxcXCJyYW5rIGluIHJhbmtpbmdcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvZHVjdC1yYW5rIHB1bGwtbGVmdFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tyYW5rLnJhbmt9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9kdWN0LWltZ1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVxcXCJyYW5rLnVzZXIuaW1hZ2VcXFwiIGFsdD1cXFwiUHJvZHVjdCBJbWFnZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2R1Y3QtaW5mb1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJwdWxsLWxlZnRcXFwiPnt7cmFuay51c2VyLmZ1bGxfbmFtZX19PC9oND5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XFxcInJhbmsudXNlci5hdGhsZXRlLmNvdW50cnkuZmxhZ1xcXCIgY2xhc3M9XFxcInByb2R1Y3QtZmxhZ1xcXCIgYWx0PVxcXCJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJwcm9kdWN0LXBvaW50cyBwdWxsLXJpZ2h0XFxcIj57e3JhbmsucG9pbnRzfX0gcHRzXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLW1kLTJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJib3ggYm94LXByaW1hcnlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYm94LWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVxcXCJib3gtdGl0bGUgdGV4dC1jZW50ZXJcXFwiPnt7JHQoJ2FkbWluLnF1aWNrX25hdmlnYXRpb24nKX19PC9oMz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYm94LWJvZHkgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XFxcInsgbmFtZTogJ3Njb3V0aW5ncy5saXN0J31cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWFwcCBidG4tcHJpbWFyeVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1saXN0XFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ2FkbWluLnNjb3V0aW5ncycpfX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJidG4gYnRuLWFwcFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1maWxlLXRleHRcXFwiPjwvaT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnYWRtaW4ucmVwb3J0cycpfX1cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cXFwieyBuYW1lOiAnYXRobGV0ZXMubGlzdCd9XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1hcHBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtdXNlcnNcXFwiPjwvaT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnYWRtaW4uYXRobGV0ZXMnKX19XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVxcXCJ7IG5hbWU6ICdldmVudHMubGlzdCd9XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1hcHBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtY2FsZW5kYXJcXFwiPjwvaT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnYWRtaW4uZXZlbnRzJyl9fVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cXFwieyBuYW1lOiAnY2hhbXBpb25zaGlwcy5saXN0J31cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWFwcFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS10cm9waHlcXFwiPjwvaT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnYWRtaW4uY2hhbXBpb25zaGlwcycpfX1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9zZWN0aW9uPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L3RlbXBsYXRlPlxcclxcbjxzdHlsZT5cXHJcXG4gICAgLnByb2R1Y3QtcmFuayB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDMxcHg7XFxyXFxuICAgICAgICB3aWR0aDogNzBweDtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIGNvbG9yOiAjQUFBO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wcm9kdWN0LXBvaW50cyB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDBjMGVmO1xcclxcbiAgICAgICAgbWFyZ2luOiA5cHg7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwIDVweDtcXHJcXG4gICAgICAgIG1pbi13aWR0aDogNjFweDtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucHJvZHVjdC1pbWcge1xcclxcbiAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wcm9kdWN0cy1saXN0IC5sYXRlc3QtcHJvZHVjdCB7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5sYXRlc3QtcHJvZHVjdCBhIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wcm9kdWN0LWl0ZW0ge1xcclxcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2Y0ZjRmNDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogI2Y3ZjdmNyAhaW1wb3J0YW50XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmxhdGVzdC1ib3gtYm9keSB7XFxyXFxuICAgICAgICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wcm9kdWN0LWZsYWcge1xcclxcbiAgICAgICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgfVxcclxcbjwvc3R5bGU+XFxyXFxuPHNjcmlwdD5cXHJcXG4gICAgaW1wb3J0IHBhZ2VIZWFkZXIgZnJvbSAnYmFzZS9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZSdcXHJcXG4gICAgaW1wb3J0IHVzZXJTdGF0aXN0aWNzU2VydmljZSBmcm9tICdiYXNlL2Rhc2hib2FyZC9zZXJ2aWNlcy91c2VyL3VzZXJTdGF0aXN0aWNzU2VydmljZSdcXHJcXG4gICAgaW1wb3J0IHJhbmtpbmdTZXJ2aWNlIGZyb20gJ2Jhc2UvZGFzaGJvYXJkL3NlcnZpY2VzL3JhbmtpbmcvcmFua2luZ1NlcnZpY2UnXFxyXFxuICAgIGltcG9ydCBzY291dGluZ1NlcnZpY2UgZnJvbSAnYmFzZS9kYXNoYm9hcmQvc2VydmljZXMvc2NvdXRpbmdzL3Njb3V0aW5nU2VydmljZSdcXHJcXG4gICAgaW1wb3J0IHJlcG9ydHNTZXJ2aWNlIGZyb20gJ2Jhc2UvZGFzaGJvYXJkL3NlcnZpY2VzL3JlcG9ydHMvcmVwb3J0U2VydmljZSdcXHJcXG4gICAgaW1wb3J0IGRhc2hib2FyZExvY2FsZXMgZnJvbSAnYmFzZS9sYW5nL2FkbWluL2Rhc2hib2FyZC9kYXNoYm9hcmQuanMnO1xcclxcblxcclxcbiAgICBleHBvcnQgZGVmYXVsdHtcXHJcXG4gICAgICAgIGxvY2FsZXM6IGRhc2hib2FyZExvY2FsZXMsXFxyXFxuICAgICAgICBkYXRhKCl7XFxyXFxuICAgICAgICAgICAgcmV0dXJuIHtcXHJcXG4gICAgICAgICAgICAgICAgYnJlYWRjcnVtYnM6IFtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmOiAnLycsXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdIb21lJ1xcclxcbiAgICAgICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAgXSxcXHJcXG4gICAgICAgICAgICAgICAgbGF0ZXN0U2NvdXRpbmc6IG51bGwsXFxyXFxuICAgICAgICAgICAgICAgIGxhdGVzdFJlcG9ydDogbnVsbCxcXHJcXG4gICAgICAgICAgICAgICAgc3VtbWFyeToge1xcclxcbiAgICAgICAgICAgICAgICAgICAgc2NvdW50aW5nczogMCxcXHJcXG4gICAgICAgICAgICAgICAgICAgIHJlcG9ydHM6IDAsXFxyXFxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZWRDaGFsbGVuZ2VzOiAwLFxcclxcbiAgICAgICAgICAgICAgICAgICAgcmFuazogMCxcXHJcXG4gICAgICAgICAgICAgICAgICAgIHBvaW50czogMFxcclxcbiAgICAgICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgICAgICByYW5raW5nOiBbXVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBjb21wb25lbnRzOiB7XFxyXFxuICAgICAgICAgICAgcGFnZUhlYWRlclxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIGNvbXB1dGVkOiB7XFxyXFxuICAgICAgICAgICAgdXNlclRpdGxlKCl7XFxyXFxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRhdXRoLnVzZXIoKS5hdGhsZXRlID8gdGhpcy4kYXV0aC51c2VyKCkuYXRobGV0ZS5zcG9ydC5uYW1lICsgJyAnICsgdGhpcy4kYXV0aC51c2VyKCkuYXRobGV0ZS5zcGVjaWFsdHkubmFtZSA6ICcnXFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBtb3VudGVkKCl7XFxyXFxuICAgICAgICAgICAgdGhpcy5sb2FkUmFua2luZygpO1xcclxcbiAgICAgICAgICAgIHRoaXMubG9hZExhdGVzdFJlcG9ydCgpO1xcclxcbiAgICAgICAgICAgIHRoaXMubG9hZExhdGVzdFNjb3V0aW5nKCk7XFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgbWV0aG9kczoge1xcclxcbiAgICAgICAgICAgIGxvYWRSYW5raW5nKCl7XFxyXFxuICAgICAgICAgICAgICAgIHJhbmtpbmdTZXJ2aWNlLnJhbmtpbmcoKHJlc3BvbnNlKT0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmFua2luZyA9IHJlc3BvbnNlLmRhdGE7XFxyXFxuICAgICAgICAgICAgICAgIH0sIChyZXNwb25zZSk9PiB7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIH0pXFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICBsb2FkTGF0ZXN0UmVwb3J0KCl7XFxyXFxuICAgICAgICAgICAgICAgIHJlcG9ydHNTZXJ2aWNlLmxhdGVzdCgocmVzcG9uc2UpPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXRlc3RSZXBvcnQgPSByZXNwb25zZS5kYXRhO1xcclxcbiAgICAgICAgICAgICAgICB9LCAocmVzcG9uc2UpPT4ge1xcclxcblxcclxcbiAgICAgICAgICAgICAgICB9KVxcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgbG9hZExhdGVzdFNjb3V0aW5nKCl7XFxyXFxuICAgICAgICAgICAgICAgIHNjb3V0aW5nU2VydmljZS5sYXRlc3QoKHJlc3BvbnNlKT0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGF0ZXN0U2NvdXRpbmcgPSByZXNwb25zZS5kYXRhO1xcclxcbiAgICAgICAgICAgICAgICB9LCAocmVzcG9uc2UpPT4ge1xcclxcblxcclxcbiAgICAgICAgICAgICAgICB9KVxcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG48L3NjcmlwdD5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWEyMjJlYjcyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMTYiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygncGFnZS1oZWFkZXInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogXCJEYXNoYm9hcmRcIixcbiAgICAgIFwiYnJlYWRjcnVtYnNcIjogX3ZtLmJyZWFkY3J1bWJzXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NlY3Rpb24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtbWQtM1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveCBib3gtd2lkZ2V0IHdpZGdldC11c2VyLTJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ3aWRnZXQtdXNlci1oZWFkZXIgYmctYmx1ZVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIndpZGdldC11c2VyLWltYWdlXCJcbiAgfSwgW19jKCdpbWcnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaW1nLWNpcmNsZVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInNyY1wiOiBfdm0uJGF1dGgudXNlcigpLmltYWdlLFxuICAgICAgXCJhbHRcIjogXCJVc2VyIEF2YXRhclwiXG4gICAgfVxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaDMnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwid2lkZ2V0LXVzZXItdXNlcm5hbWVcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uJGF1dGgudXNlcigpLmZ1bGxfbmFtZSkpXSksIF92bS5fdihcIiBcIiksIF9jKCdoNScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ3aWRnZXQtdXNlci1kZXNjXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnVzZXJUaXRsZSkpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3JvdXRlci1saW5rJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2sgYnRuLWZsYXRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0b1wiOiB7XG4gICAgICAgIG5hbWU6ICd1c2VyLnZpZXcnXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KCdkYXNoYm9hcmQuZ29fdG9fcHRvZmlsZScpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveCBib3gtcHJpbWFyeVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveC1oZWFkZXJcIlxuICB9LCBbX2MoJ2gzJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveC10aXRsZVwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS4kdCgnZGFzaGJvYXJkLmxhdGVzdF9zY291dGluZycpKSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveC1ib2R5IGxhdGVzdC1ib3gtYm9keVwiXG4gIH0sIFsoX3ZtLmxhdGVzdFNjb3V0aW5nKSA/IF9jKCd1bCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwcm9kdWN0cy1saXN0IHByb2R1Y3QtbGlzdC1pbi1ib3hcIlxuICB9LCBbX2MoJ2xpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIml0ZW0gcHJvZHVjdC1pdGVtXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibGF0ZXN0LXByb2R1Y3RcIlxuICB9LCBbX2MoJ3JvdXRlci1saW5rJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRvXCI6IHtcbiAgICAgICAgbmFtZTogJ3Njb3V0aW5ncy50b3VjaCcsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIGlkOiBfdm0ubGF0ZXN0U2NvdXRpbmcuaWRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubGF0ZXN0U2NvdXRpbmcubmFtZSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwcm9kdWN0LWRlc2NyaXB0aW9uXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubGF0ZXN0U2NvdXRpbmcuZGVzY3JpcHRpb24pICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpXSldKSA6IF9jKCdoNCcsIFtfdm0uX3YoX3ZtLl9zKF92bS4kdCgnZGFzaGJvYXJkLm5vX3Njb3V0aW5nJykpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncm91dGVyLWxpbmsnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1ibG9ja1wiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInRvXCI6IHtcbiAgICAgICAgbmFtZTogJ3Njb3V0aW5ncy5jcmVhdGUnXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdCgnZGFzaGJvYXJkLmNyZWF0ZV9zY291dGluZycpKSArIFwiXFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveCBib3gtcHJpbWFyeVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveC1oZWFkZXJcIlxuICB9LCBbX2MoJ2gzJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveC10aXRsZVwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS4kdCgnZGFzaGJvYXJkLmxhdGVzdF9yZXBvcnQnKSkpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3gtYm9keVwiXG4gIH0sIFsoX3ZtLmxhdGVzdFJlcG9ydCkgPyBfYygndWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicHJvZHVjdHMtbGlzdCBwcm9kdWN0LWxpc3QtaW4tYm94XCJcbiAgfSwgW19jKCdsaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpdGVtIHByb2R1Y3QtaXRlbVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImxhdGVzdC1wcm9kdWN0XCJcbiAgfSwgW19jKCdyb3V0ZXItbGluaycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0b1wiOiB7XG4gICAgICAgIG5hbWU6ICdyZXBvcnRzLnZpZXcnLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBpZDogX3ZtLmxhdGVzdFJlcG9ydC5pZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5sYXRlc3RSZXBvcnQubmFtZSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwcm9kdWN0LWRlc2NyaXB0aW9uXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubGF0ZXN0UmVwb3J0LmRlc2NyaXB0aW9uKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKV0pXSkgOiBfYygnaDQnLCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoJ2Rhc2hib2FyZC5ub19yZXBvcnQnKSkpXSksIF92bS5fdihcIiBcIiksIF9jKCdyb3V0ZXItbGluaycsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXN1Y2Nlc3MgYnRuLWJsb2NrXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidG9cIjoge1xuICAgICAgICBuYW1lOiAncmVwb3J0cy5jcmVhdGUnXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdCgnZGFzaGJvYXJkLmNyZWF0ZV9yZXBvcnQnKSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtbWQtOVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtbWQtMTBcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3ggYm94LXByaW1hcnlcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3gtaGVhZGVyXCJcbiAgfSwgW19jKCdoMycsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3gtdGl0bGVcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoJ2Rhc2hib2FyZC5nbG9iYWxfcmFua2luZycpKSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveC1ib2R5XCJcbiAgfSwgW19jKCd1bCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwcm9kdWN0cy1saXN0IHByb2R1Y3QtbGlzdC1pbi1ib3hcIlxuICB9LCBfdm0uX2woKF92bS5yYW5raW5nKSwgZnVuY3Rpb24ocmFuaykge1xuICAgIHJldHVybiBfYygnbGknLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJpdGVtXCJcbiAgICB9LCBbX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInByb2R1Y3QtcmFuayBwdWxsLWxlZnRcIlxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKHJhbmsucmFuaykgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInByb2R1Y3QtaW1nXCJcbiAgICB9LCBbX2MoJ2ltZycsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwic3JjXCI6IHJhbmsudXNlci5pbWFnZSxcbiAgICAgICAgXCJhbHRcIjogXCJQcm9kdWN0IEltYWdlXCJcbiAgICAgIH1cbiAgICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwicHJvZHVjdC1pbmZvXCJcbiAgICB9LCBbX2MoJ2g0Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwicHVsbC1sZWZ0XCJcbiAgICB9LCBbX3ZtLl92KF92bS5fcyhyYW5rLnVzZXIuZnVsbF9uYW1lKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2ltZycsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInByb2R1Y3QtZmxhZ1wiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJzcmNcIjogcmFuay51c2VyLmF0aGxldGUuY291bnRyeS5mbGFnLFxuICAgICAgICBcImFsdFwiOiBcIlwiXG4gICAgICB9XG4gICAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwicHJvZHVjdC1wb2ludHMgcHVsbC1yaWdodFwiXG4gICAgfSwgW192bS5fdihfdm0uX3MocmFuay5wb2ludHMpICsgXCIgcHRzXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKV0pXSlcbiAgfSkpXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtbWQtMlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveCBib3gtcHJpbWFyeVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveC1oZWFkZXJcIlxuICB9LCBbX2MoJ2gzJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveC10aXRsZSB0ZXh0LWNlbnRlclwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS4kdCgnYWRtaW4ucXVpY2tfbmF2aWdhdGlvbicpKSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveC1ib2R5IHRleHQtY2VudGVyXCJcbiAgfSwgW19jKCdyb3V0ZXItbGluaycsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWFwcCBidG4tcHJpbWFyeVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInRvXCI6IHtcbiAgICAgICAgbmFtZTogJ3Njb3V0aW5ncy5saXN0J1xuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLWxpc3RcIlxuICB9KSwgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KCdhZG1pbi5zY291dGluZ3MnKSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdhJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tYXBwXCJcbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLWZpbGUtdGV4dFwiXG4gIH0pLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHQoJ2FkbWluLnJlcG9ydHMnKSkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdyb3V0ZXItbGluaycsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWFwcFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInRvXCI6IHtcbiAgICAgICAgbmFtZTogJ2F0aGxldGVzLmxpc3QnXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtdXNlcnNcIlxuICB9KSwgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KCdhZG1pbi5hdGhsZXRlcycpKSArIFwiXFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3JvdXRlci1saW5rJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tYXBwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidG9cIjoge1xuICAgICAgICBuYW1lOiAnZXZlbnRzLmxpc3QnXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtY2FsZW5kYXJcIlxuICB9KSwgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KCdhZG1pbi5ldmVudHMnKSkgKyBcIlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdyb3V0ZXItbGluaycsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWFwcFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInRvXCI6IHtcbiAgICAgICAgbmFtZTogJ2NoYW1waW9uc2hpcHMubGlzdCdcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS10cm9waHlcIlxuICB9KSwgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KCdhZG1pbi5jaGFtcGlvbnNoaXBzJykpICsgXCJcXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSldKV0pXSldKV0pXSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi1hMjIyZWI3MlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtYTIyMmViNzIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC52dWVcbi8vIG1vZHVsZSBpZCA9IDQyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDE2IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1hMjIyZWI3MiEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vZGFzaGJvYXJkLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCJjYTJlNTM5ZVwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtYTIyMmViNzIhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2Rhc2hib2FyZC52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWEyMjJlYjcyIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9kYXNoYm9hcmQudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1hMjIyZWI3MiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC52dWVcbi8vIG1vZHVsZSBpZCA9IDQ2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDE2Il0sInNvdXJjZVJvb3QiOiIifQ==