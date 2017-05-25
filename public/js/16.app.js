webpackJsonp([16,31],{

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(424)

var Component = __webpack_require__(134)(
  /* script */
  __webpack_require__(271),
  /* template */
  __webpack_require__(385),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/pedrogorrin/Documents/Trabajo/sportech37/sportech-scouting/resources/assets/js/dashboard/modules/dashboard/dashboard.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] dashboard.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-39b7e8b6", Component.options)
  } else {
    hotAPI.reload("data-v-39b7e8b6", Component.options)
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
Component.options.__file = "/Users/pedrogorrin/Documents/Trabajo/sportech37/sportech-scouting/resources/assets/js/components/header/pageHeader.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] pageHeader.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7fcd0956", Component.options)
  } else {
    hotAPI.reload("data-v-7fcd0956", Component.options)
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
     require("vue-hot-reload-api").rerender("data-v-7fcd0956", module.exports)
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
var update = __webpack_require__(136)("e9fec1c2", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-7fcd0956!./../../../../../node_modules/sass-loader/index.js!./../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./pageHeader.vue", function() {
     var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-7fcd0956!./../../../../../node_modules/sass-loader/index.js!./../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./pageHeader.vue");
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

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _pageHeader = __webpack_require__(198);

var _pageHeader2 = _interopRequireDefault(_pageHeader);

var _userStatisticsService = __webpack_require__(250);

var _userStatisticsService2 = _interopRequireDefault(_userStatisticsService);

var _rankingService = __webpack_require__(318);

var _rankingService2 = _interopRequireDefault(_rankingService);

var _scoutingService = __webpack_require__(224);

var _scoutingService2 = _interopRequireDefault(_scoutingService);

var _reportService = __webpack_require__(246);

var _reportService2 = _interopRequireDefault(_reportService);

var _dashboard = __webpack_require__(322);

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

/***/ 318:
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

/***/ 322:
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

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(135)();
// imports


// module
exports.push([module.i, "\n.product-rank {\n    font-size: 31px;\n    width: 70px;\n    text-align: center;\n    color: #AAA;\n}\n.product-points {\n    font-size: 20px;\n    background: #00c0ef;\n    margin: 9px;\n    padding: 0 5px;\n    min-width: 61px;\n    text-align: center;\n    color: white;\n}\n.product-img {\n    padding-right: 5px;\n}\n.products-list .latest-product {\n    margin-left: 0 !important;\n}\n.latest-product a {\n    font-size: 20px;\n    font-weight: bold;\n}\n.product-item {\n    border: 1px solid #f4f4f4;\n    padding: 5px !important;\n    margin-bottom: 10px !important;\n    background: #f7f7f7 !important\n}\n.latest-box-body {\n    padding-top: 0 !important;\n}\n.product-flag {\n    padding: 10px;\n}\n", "", {"version":3,"sources":["/../../../resources/assets/js/dashboard/modules/dashboard/dashboard.vue?711a64be"],"names":[],"mappings":";AA2IA;IACA,gBAAA;IACA,YAAA;IACA,mBAAA;IACA,YAAA;CACA;AAEA;IACA,gBAAA;IACA,oBAAA;IACA,YAAA;IACA,eAAA;IACA,gBAAA;IACA,mBAAA;IACA,aAAA;CACA;AAEA;IACA,mBAAA;CACA;AAEA;IACA,0BAAA;CACA;AAEA;IACA,gBAAA;IACA,kBAAA;CACA;AAEA;IACA,0BAAA;IACA,wBAAA;IACA,+BAAA;IACA,8BAAA;CACA;AAEA;IACA,0BAAA;CACA;AAEA;IACA,cAAA;CACA","file":"dashboard.vue","sourcesContent":["<template>\n    <div>\n        <page-header title=\"Dashboard\" :breadcrumbs=\"breadcrumbs\"></page-header>\n        <section class=\"content\">\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-md-3\">\n\n                    <div class=\"box box-widget widget-user-2\">\n                        <!-- Add the bg color to the header using any of the bg-* classes -->\n                        <div class=\"widget-user-header bg-blue\">\n                            <div class=\"widget-user-image\">\n                                <img class=\"img-circle\" :src=\"$auth.user().image\" alt=\"User Avatar\">\n                            </div>\n                            <!-- /.widget-user-image -->\n                            <h3 class=\"widget-user-username\">{{$auth.user().full_name}}</h3>\n                            <h5 class=\"widget-user-desc\">{{userTitle}}</h5>\n                        </div>\n                        <router-link :to=\"{ name: 'user.view'}\" class=\"btn btn-primary btn-block btn-flat\">\n                            {{$t('dashboard.go_to_ptofile')}}\n                        </router-link>\n                    </div>\n                    <div class=\"box box-primary\">\n                        <div class=\"box-header\">\n                            <h3 class=\"box-title\">{{$t('dashboard.latest_scouting')}}</h3>\n                        </div>\n                        <div class=\"box-body latest-box-body\">\n                            <ul class=\"products-list product-list-in-box\" v-if=\"latestScouting\">\n                                <li class=\"item product-item\">\n                                    <div class=\"latest-product\">\n                                        <router-link\n                                                :to=\"{ name: 'scoutings.touch', params: { id: latestScouting.id }}\">\n                                            {{latestScouting.name}}\n                                        </router-link>\n                                        <span class=\"product-description\">\n                                            {{latestScouting.description}}\n                                        </span>\n                                    </div>\n                                </li>\n                            </ul>\n                            <h4 v-else>{{$t('dashboard.no_scouting')}}</h4>\n                            <router-link :to=\"{ name: 'scoutings.create'}\"\n                                         class=\"btn btn-success btn-block\">\n                                {{$t('dashboard.create_scouting')}}\n\n                            </router-link>\n\n                        </div>\n                    </div>\n                    <div class=\"box box-primary\">\n                        <div class=\"box-header\">\n                            <h3 class=\"box-title\">{{$t('dashboard.latest_report')}}</h3>\n                        </div>\n                        <div class=\"box-body\">\n                            <ul class=\"products-list product-list-in-box\" v-if=\"latestReport\">\n                                <li class=\"item product-item\">\n                                    <div class=\"latest-product\">\n                                        <router-link :to=\"{ name: 'reports.view', params: { id: latestReport.id }}\">\n                                            {{latestReport.name}}\n                                        </router-link>\n                                        <span class=\"product-description\">\n                                            {{latestReport.description}}\n                                        </span>\n                                    </div>\n                                </li>\n                            </ul>\n                            <h4 v-else>{{$t('dashboard.no_report')}}</h4>\n                            <router-link :to=\"{ name: 'reports.create'}\"\n                                         class=\"btn btn-success btn-block\">\n                                {{$t('dashboard.create_report')}}\n                            </router-link>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-xs-12 col-md-9\">\n                    <div class=\"row\">\n                        <div class=\"col-xs-12 col-md-10\">\n                            <div class=\"box box-primary\">\n                                <div class=\"box-header\">\n                                    <h3 class=\"box-title\">{{$t('dashboard.global_ranking')}}</h3>\n                                </div>\n                                <div class=\"box-body\">\n                                    <ul class=\"products-list product-list-in-box\">\n                                        <li class=\"item\" v-for=\"rank in ranking\">\n                                            <div class=\"product-rank pull-left\">\n                                                {{rank.rank}}\n                                            </div>\n                                            <div class=\"product-img\">\n                                                <img :src=\"rank.user.image\" alt=\"Product Image\">\n                                            </div>\n                                            <div class=\"product-info\">\n                                                <h4 class=\"pull-left\">{{rank.user.full_name}}</h4>\n                                                <img :src=\"rank.user.athlete.country.flag\" class=\"product-flag\" alt=\"\">\n                                                <span class=\"product-points pull-right\">{{rank.points}} pts\n                                                </span>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-xs-12 col-md-2\">\n                            <div class=\"box box-primary\">\n                                <div class=\"box-header\">\n                                    <h3 class=\"box-title text-center\">{{$t('admin.quick_navigation')}}</h3>\n                                </div>\n                                <div class=\"box-body text-center\">\n                                    <router-link :to=\"{ name: 'scoutings.list'}\" class=\"btn btn-app btn-primary\">\n                                        <i class=\"fa fa-list\"></i>\n                                        {{$t('admin.scoutings')}}\n                                    </router-link>\n                                    <a class=\"btn btn-app\">\n                                        <i class=\"fa fa-file-text\"></i>\n                                        {{$t('admin.reports')}}\n                                    </a>\n                                    <router-link :to=\"{ name: 'athletes.list'}\" class=\"btn btn-app\">\n                                        <i class=\"fa fa-users\"></i>\n                                        {{$t('admin.athletes')}}\n\n                                    </router-link>\n                                    <router-link :to=\"{ name: 'events.list'}\" class=\"btn btn-app\">\n                                        <i class=\"fa fa-calendar\"></i>\n                                        {{$t('admin.events')}}\n\n                                    </router-link>\n                                    <router-link :to=\"{ name: 'championships.list'}\" class=\"btn btn-app\">\n                                        <i class=\"fa fa-trophy\"></i>\n                                        {{$t('admin.championships')}}\n\n                                    </router-link>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </section>\n    </div>\n</template>\n<style>\n    .product-rank {\n        font-size: 31px;\n        width: 70px;\n        text-align: center;\n        color: #AAA;\n    }\n\n    .product-points {\n        font-size: 20px;\n        background: #00c0ef;\n        margin: 9px;\n        padding: 0 5px;\n        min-width: 61px;\n        text-align: center;\n        color: white;\n    }\n\n    .product-img {\n        padding-right: 5px;\n    }\n\n    .products-list .latest-product {\n        margin-left: 0 !important;\n    }\n\n    .latest-product a {\n        font-size: 20px;\n        font-weight: bold;\n    }\n\n    .product-item {\n        border: 1px solid #f4f4f4;\n        padding: 5px !important;\n        margin-bottom: 10px !important;\n        background: #f7f7f7 !important\n    }\n\n    .latest-box-body {\n        padding-top: 0 !important;\n    }\n\n    .product-flag {\n        padding: 10px;\n    }\n</style>\n<script>\n    import pageHeader from 'base/components/header/pageHeader.vue'\n    import userStatisticsService from 'base/dashboard/services/user/userStatisticsService'\n    import rankingService from 'base/dashboard/services/ranking/rankingService'\n    import scoutingService from 'base/dashboard/services/scoutings/scoutingService'\n    import reportsService from 'base/dashboard/services/reports/reportService'\n    import dashboardLocales from 'base/lang/admin/dashboard/dashboard.js';\n\n    export default{\n        locales: dashboardLocales,\n        data(){\n            return {\n                breadcrumbs: [\n                    {\n                        href: '/',\n                        title: 'Home'\n                    },\n                ],\n                latestScouting: null,\n                latestReport: null,\n                summary: {\n                    scountings: 0,\n                    reports: 0,\n                    completedChallenges: 0,\n                    rank: 0,\n                    points: 0\n                },\n                ranking: []\n            }\n        },\n        components: {\n            pageHeader\n        },\n        computed: {\n            userTitle(){\n                return this.$auth.user().athlete ? this.$auth.user().athlete.sport.name + ' ' + this.$auth.user().athlete.specialty.name : ''\n            },\n        },\n        mounted(){\n            this.loadRanking();\n            this.loadLatestReport();\n            this.loadLatestScouting();\n        },\n        methods: {\n            loadRanking(){\n                rankingService.ranking((response)=> {\n                    this.ranking = response.data;\n                }, (response)=> {\n\n                })\n            },\n            loadLatestReport(){\n                reportsService.latest((response)=> {\n                    this.latestReport = response.data;\n                }, (response)=> {\n\n                })\n            },\n            loadLatestScouting(){\n                scoutingService.latest((response)=> {\n                    this.latestScouting = response.data;\n                }, (response)=> {\n\n                })\n            },\n        }\n    }\n</script>\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 385:
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
     require("vue-hot-reload-api").rerender("data-v-39b7e8b6", module.exports)
  }
}

/***/ }),

/***/ 424:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(335);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(136)("b3532890", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-39b7e8b6!./../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./dashboard.vue", function() {
     var newContent = require("!!./../../../../../../node_modules/css-loader/index.js?sourceMap!./../../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-39b7e8b6!./../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./dashboard.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL2Rhc2hib2FyZC9kYXNoYm9hcmQudnVlIiwid2VicGFjazovLy9wYWdlSGVhZGVyLnZ1ZT81NjBjKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWU/YTU2ZioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZT82YjhlKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlPzM4YTMqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9oZWFkZXIvcGFnZUhlYWRlci52dWU/NDQxMioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvc2VydmljZXMvc2NvdXRpbmdzL3Njb3V0aW5nU2VydmljZS5qcz8zZDg1KioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvc2VydmljZXMvcmVwb3J0cy9yZXBvcnRTZXJ2aWNlLmpzPzhjMjMqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL3NlcnZpY2VzL3VzZXIvdXNlclN0YXRpc3RpY3NTZXJ2aWNlLmpzPzA5MDYiLCJ3ZWJwYWNrOi8vL2Rhc2hib2FyZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvc2VydmljZXMvcmFua2luZy9yYW5raW5nU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2xhbmcvYWRtaW4vZGFzaGJvYXJkL2Rhc2hib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL2Rhc2hib2FyZC9kYXNoYm9hcmQudnVlPzc1OTciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLnZ1ZT9iOWRlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL21vZHVsZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC52dWU/Y2E0YiJdLCJuYW1lcyI6WyJzaG93IiwiaWQiLCJzdWNjZXNzQ2FsYmFjayIsImVycm9yQ2FsbGJhY2siLCJodHRwIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiYm9keSIsImNhdGNoIiwiZXJyb3IiLCJjcmVhdGUiLCJzY291dGluZyIsInBvc3QiLCJ1cGRhdGUiLCJwdXQiLCJlbXVsYXRlSFRUUCIsInJlbW92ZSIsImRlbGV0ZSIsInJlcG9ydCIsImxhdGVzdCIsImF0aGxldGUiLCJzdW1tYXJ5IiwicmFua2luZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTs7Ozs7a0JBSUE7c0JBRUE7QUFIQTs7a0JBS0E7eUNBQ0E7dUJBQ0E7QUFHQTtBQU5BO0FBTEE7QUFEQSxFOzs7Ozs7O0FDdkJBO0FBQ0E7OztBQUdBO0FBQ0EsMENBQTJDLGlCQUFpQix3QkFBd0IsR0FBRyxzQkFBc0IsdUJBQXVCLEdB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O0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ3RNQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEMiLCJmaWxlIjoianMvMTYuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTM5YjdlOGI2IS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9kYXNoYm9hcmQudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP2NhY2hlRGlyZWN0b3J5IS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9kYXNoYm9hcmQudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMzliN2U4YjYhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vZGFzaGJvYXJkLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL3BlZHJvZ29ycmluL0RvY3VtZW50cy9UcmFiYWpvL3Nwb3J0ZWNoMzcvc3BvcnRlY2gtc2NvdXRpbmcvcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGRhc2hib2FyZC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMzliN2U4YjZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0zOWI3ZThiNlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL2Rhc2hib2FyZC9kYXNoYm9hcmQudnVlXG4vLyBtb2R1bGUgaWQgPSAxNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAxNiIsIjx0ZW1wbGF0ZT5cbiAgICA8c2VjdGlvbiBjbGFzcz1cImNvbnRlbnQtaGVhZGVyXCI+XG4gICAgICAgIDxoMT5cbiAgICAgICAgICAgIHt7dGl0bGV9fVxuICAgICAgICA8L2gxPlxuICAgICAgICA8b2wgY2xhc3M9XCJicmVhZGNydW1iXCI+XG4gICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwiYnJlYWRjcnVtYi5ocmVmXCIgYWN0aXZlLWNsYXNzPVwiYWN0aXZlXCIgdGFnPVwibGlcIiB2LWZvcj1cImJyZWFkY3J1bWIgaW4gYnJlYWRjcnVtYnNcIj5cbiAgICAgICAgICAgICAgICB7eyR0KGJyZWFkY3J1bWIudGl0bGUpfX1cbiAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XG4gICAgICAgIDwvb2w+XG4gICAgPC9zZWN0aW9uPlxuPC90ZW1wbGF0ZT5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHJlbD1cInN0eWxlc2hlZXQvc2Nzc1wiPlxuICAgIC5hZG1pbi1oZWFkZXIge1xuICAgICAgICBoZWlnaHQ6IDk3cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIC5yb3cge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgfVxuICAgIH1cbjwvc3R5bGU+XG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBicmVhZGNydW1iczoge1xuICAgICAgICAgICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcGFnZUhlYWRlci52dWU/NTM3OWY1Y2IiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5hZG1pbi1oZWFkZXIge1xcbiAgaGVpZ2h0OiA5N3B4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLmFkbWluLWhlYWRlciAucm93IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi03ZmNkMDk1NiEuL34vc2Fzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlciEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtN2ZjZDA5NTYhc2Fzcy1sb2FkZXIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3BhZ2VIZWFkZXIudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP2NhY2hlRGlyZWN0b3J5IS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9wYWdlSGVhZGVyLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTdmY2QwOTU2IS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3BhZ2VIZWFkZXIudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvcGVkcm9nb3JyaW4vRG9jdW1lbnRzL1RyYWJham8vc3BvcnRlY2gzNy9zcG9ydGVjaC1zY291dGluZy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gcGFnZUhlYWRlci52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtN2ZjZDA5NTZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi03ZmNkMDk1NlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxOThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdzZWN0aW9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRlbnQtaGVhZGVyXCJcbiAgfSwgW19jKCdoMScsIFtfdm0uX3YoXCJcXG4gICAgICAgIFwiICsgX3ZtLl9zKF92bS50aXRsZSkgKyBcIlxcbiAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ29sJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJyZWFkY3J1bWJcIlxuICB9LCBfdm0uX2woKF92bS5icmVhZGNydW1icyksIGZ1bmN0aW9uKGJyZWFkY3J1bWIpIHtcbiAgICByZXR1cm4gX2MoJ3JvdXRlci1saW5rJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJ0b1wiOiBicmVhZGNydW1iLmhyZWYsXG4gICAgICAgIFwiYWN0aXZlLWNsYXNzXCI6IFwiYWN0aXZlXCIsXG4gICAgICAgIFwidGFnXCI6IFwibGlcIlxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHQoYnJlYWRjcnVtYi50aXRsZSkpICsgXCJcXG4gICAgICAgIFwiKV0pXG4gIH0pKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTdmY2QwOTU2XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi03ZmNkMDk1NiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi03ZmNkMDk1NiEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcGFnZUhlYWRlci52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiZTlmZWMxYzJcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtN2ZjZDA5NTYhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3BhZ2VIZWFkZXIudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTdmY2QwOTU2IS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9wYWdlSGVhZGVyLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi03ZmNkMDk1NiEuL34vc2Fzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAyMDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBzaG93KGlkLCBzdWNjZXNzQ2FsYmFjaywgZXJyb3JDYWxsYmFjayl7XG4gICAgICAgIHJldHVybiBWdWUuaHR0cC5nZXQoJy9hcGkvc2NvdXRpbmdzLycgKyBpZCArICc/aW5jbHVkZT1jaGFtcGlvbnNoaXAuc3BvcnQsZXZlbnQsbGVmdEF0aGxldGUscmlnaHRBdGhsZXRlLHRvdWNoZXMuYWN0aW9ucy5sZWZ0VGFncyx0b3VjaGVzLmFjdGlvbnMucmlnaHRUYWdzJylcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc3VjY2Vzc0NhbGJhY2socmVzcG9uc2UuYm9keSkpXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvckNhbGxiYWNrKGVycm9yKSk7XG4gICAgfSxcbiAgICBjcmVhdGUoc2NvdXRpbmcsIHN1Y2Nlc3NDYWxiYWNrLCBlcnJvckNhbGxiYWNrKXtcbiAgICAgICAgcmV0dXJuIFZ1ZS5odHRwLnBvc3QoJy9hcGkvc2NvdXRpbmdzJywgc2NvdXRpbmcpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHN1Y2Nlc3NDYWxiYWNrKHJlc3BvbnNlLmJvZHkpKVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3JDYWxsYmFjayhlcnJvcikpO1xuICAgIH0sXG4gICAgdXBkYXRlKGlkLCBzY291dGluZywgc3VjY2Vzc0NhbGJhY2ssIGVycm9yQ2FsbGJhY2spe1xuICAgICAgICByZXR1cm4gVnVlLmh0dHAucHV0KCcvYXBpL3Njb3V0aW5ncy8nICsgaWQsIHNjb3V0aW5nLCB7ZW11bGF0ZUhUVFA6IHRydWV9KVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzdWNjZXNzQ2FsYmFjayhyZXNwb25zZS5ib2R5KSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGVycm9yQ2FsbGJhY2soZXJyb3IuYm9keSkpO1xuICAgIH0sXG4gICAgcmVtb3ZlKGlkLCBzdWNjZXNzQ2FsYmFjaywgZXJyb3JDYWxsYmFjayl7XG4gICAgICAgIHJldHVybiBWdWUuaHR0cC5kZWxldGUoJy9hcGkvc2NvdXRpbmdzLycgKyBpZClcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc3VjY2Vzc0NhbGJhY2socmVzcG9uc2UuYm9keSkpXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvckNhbGxiYWNrKGVycm9yLmJvZHkpKTtcbiAgICB9LFxuICAgIHJlcG9ydChpZCwgc3VjY2Vzc0NhbGJhY2ssIGVycm9yQ2FsbGJhY2spe1xuICAgICAgICByZXR1cm4gVnVlLmh0dHAuZ2V0KCcvYXBpL3Njb3V0aW5ncy8nICsgaWQgKyAnL3JlcG9ydCcpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHN1Y2Nlc3NDYWxiYWNrKHJlc3BvbnNlLmJvZHkpKVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3JDYWxsYmFjayhlcnJvcikpO1xuICAgIH0sXG4gICAgbGF0ZXN0KHN1Y2Nlc3NDYWxiYWNrLCBlcnJvckNhbGxiYWNrKXtcbiAgICAgICAgcmV0dXJuIFZ1ZS5odHRwLmdldCgnL2FwaS9zY291dGluZ3MvbGF0ZXN0JylcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gc3VjY2Vzc0NhbGJhY2socmVzcG9uc2UuYm9keSkpXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvckNhbGxiYWNrKGVycm9yKSk7XG4gICAgfSxcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9zZXJ2aWNlcy9zY291dGluZ3Mvc2NvdXRpbmdTZXJ2aWNlLmpzIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBzaG93KGlkLCBzdWNjZXNzQ2FsYmFjaywgZXJyb3JDYWxsYmFjayl7XG4gICAgICAgIHJldHVybiBWdWUuaHR0cC5nZXQoJy9hcGkvcmVwb3J0cy8nICsgaWQpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHN1Y2Nlc3NDYWxiYWNrKHJlc3BvbnNlLmJvZHkpKVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3JDYWxsYmFjayhlcnJvcikpO1xuICAgIH0sXG4gICAgY3JlYXRlKGF0aGxldGUsIHN1Y2Nlc3NDYWxiYWNrLCBlcnJvckNhbGxiYWNrKXtcbiAgICAgICAgcmV0dXJuIFZ1ZS5odHRwLnBvc3QoJy9hcGkvcmVwb3J0cycsIGF0aGxldGUpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHN1Y2Nlc3NDYWxiYWNrKHJlc3BvbnNlLmJvZHkpKVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3JDYWxsYmFjayhlcnJvcikpO1xuICAgIH0sXG4gICAgbGF0ZXN0KHN1Y2Nlc3NDYWxiYWNrLCBlcnJvckNhbGxiYWNrKXtcbiAgICAgICAgcmV0dXJuIFZ1ZS5odHRwLmdldCgnL2FwaS9yZXBvcnRzL2xhdGVzdCcpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHN1Y2Nlc3NDYWxiYWNrKHJlc3BvbnNlLmJvZHkpKVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3JDYWxsYmFjayhlcnJvcikpO1xuICAgIH0sXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvc2VydmljZXMvcmVwb3J0cy9yZXBvcnRTZXJ2aWNlLmpzIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBzdW1tYXJ5KHN1Y2Nlc3NDYWxiYWNrLCBlcnJvckNhbGxiYWNrKXtcbiAgICAgICAgcmV0dXJuIFZ1ZS5odHRwLmdldCgnL2FwaS91c2VyL3N0YXRpc3RpY3Mvc3VtbWFyeScpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHN1Y2Nlc3NDYWxiYWNrKHJlc3BvbnNlLmJvZHkpKVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3JDYWxsYmFjayhlcnJvcikpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9zZXJ2aWNlcy91c2VyL3VzZXJTdGF0aXN0aWNzU2VydmljZS5qcyIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8cGFnZS1oZWFkZXIgdGl0bGU9XCJEYXNoYm9hcmRcIiA6YnJlYWRjcnVtYnM9XCJicmVhZGNydW1ic1wiPjwvcGFnZS1oZWFkZXI+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLW1kLTNcIj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94IGJveC13aWRnZXQgd2lkZ2V0LXVzZXItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBBZGQgdGhlIGJnIGNvbG9yIHRvIHRoZSBoZWFkZXIgdXNpbmcgYW55IG9mIHRoZSBiZy0qIGNsYXNzZXMgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2lkZ2V0LXVzZXItaGVhZGVyIGJnLWJsdWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2lkZ2V0LXVzZXItaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImltZy1jaXJjbGVcIiA6c3JjPVwiJGF1dGgudXNlcigpLmltYWdlXCIgYWx0PVwiVXNlciBBdmF0YXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIC8ud2lkZ2V0LXVzZXItaW1hZ2UgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwid2lkZ2V0LXVzZXItdXNlcm5hbWVcIj57eyRhdXRoLnVzZXIoKS5mdWxsX25hbWV9fTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwid2lkZ2V0LXVzZXItZGVzY1wiPnt7dXNlclRpdGxlfX08L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwieyBuYW1lOiAndXNlci52aWV3J31cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2sgYnRuLWZsYXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdkYXNoYm9hcmQuZ29fdG9fcHRvZmlsZScpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94IGJveC1wcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImJveC10aXRsZVwiPnt7JHQoJ2Rhc2hib2FyZC5sYXRlc3Rfc2NvdXRpbmcnKX19PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveC1ib2R5IGxhdGVzdC1ib3gtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInByb2R1Y3RzLWxpc3QgcHJvZHVjdC1saXN0LWluLWJveFwiIHYtaWY9XCJsYXRlc3RTY291dGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJpdGVtIHByb2R1Y3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxhdGVzdC1wcm9kdWN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dG89XCJ7IG5hbWU6ICdzY291dGluZ3MudG91Y2gnLCBwYXJhbXM6IHsgaWQ6IGxhdGVzdFNjb3V0aW5nLmlkIH19XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7bGF0ZXN0U2NvdXRpbmcubmFtZX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByb2R1Y3QtZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tsYXRlc3RTY291dGluZy5kZXNjcmlwdGlvbn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgdi1lbHNlPnt7JHQoJ2Rhc2hib2FyZC5ub19zY291dGluZycpfX08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWU6ICdzY291dGluZ3MuY3JlYXRlJ31cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBidG4tYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnZGFzaGJvYXJkLmNyZWF0ZV9zY291dGluZycpfX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveCBib3gtcHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJib3gtdGl0bGVcIj57eyR0KCdkYXNoYm9hcmQubGF0ZXN0X3JlcG9ydCcpfX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJwcm9kdWN0cy1saXN0IHByb2R1Y3QtbGlzdC1pbi1ib3hcIiB2LWlmPVwibGF0ZXN0UmVwb3J0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIml0ZW0gcHJvZHVjdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGF0ZXN0LXByb2R1Y3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwieyBuYW1lOiAncmVwb3J0cy52aWV3JywgcGFyYW1zOiB7IGlkOiBsYXRlc3RSZXBvcnQuaWQgfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tsYXRlc3RSZXBvcnQubmFtZX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByb2R1Y3QtZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tsYXRlc3RSZXBvcnQuZGVzY3JpcHRpb259fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHYtZWxzZT57eyR0KCdkYXNoYm9hcmQubm9fcmVwb3J0Jyl9fTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInsgbmFtZTogJ3JlcG9ydHMuY3JlYXRlJ31cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBidG4tYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnZGFzaGJvYXJkLmNyZWF0ZV9yZXBvcnQnKX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1tZC05XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLW1kLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveCBib3gtcHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiYm94LXRpdGxlXCI+e3skdCgnZGFzaGJvYXJkLmdsb2JhbF9yYW5raW5nJyl9fTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInByb2R1Y3RzLWxpc3QgcHJvZHVjdC1saXN0LWluLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIml0ZW1cIiB2LWZvcj1cInJhbmsgaW4gcmFua2luZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1yYW5rIHB1bGwtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tyYW5rLnJhbmt9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3QtaW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJyYW5rLnVzZXIuaW1hZ2VcIiBhbHQ9XCJQcm9kdWN0IEltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJwdWxsLWxlZnRcIj57e3JhbmsudXNlci5mdWxsX25hbWV9fTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJyYW5rLnVzZXIuYXRobGV0ZS5jb3VudHJ5LmZsYWdcIiBjbGFzcz1cInByb2R1Y3QtZmxhZ1wiIGFsdD1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcm9kdWN0LXBvaW50cyBwdWxsLXJpZ2h0XCI+e3tyYW5rLnBvaW50c319IHB0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLW1kLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94IGJveC1wcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3gtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJib3gtdGl0bGUgdGV4dC1jZW50ZXJcIj57eyR0KCdhZG1pbi5xdWlja19uYXZpZ2F0aW9uJyl9fTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWJvZHkgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWU6ICdzY291dGluZ3MubGlzdCd9XCIgY2xhc3M9XCJidG4gYnRuLWFwcCBidG4tcHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtbGlzdFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdhZG1pbi5zY291dGluZ3MnKX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4gYnRuLWFwcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtZmlsZS10ZXh0XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ2FkbWluLnJlcG9ydHMnKX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwieyBuYW1lOiAnYXRobGV0ZXMubGlzdCd9XCIgY2xhc3M9XCJidG4gYnRuLWFwcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdXNlcnNcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnYWRtaW4uYXRobGV0ZXMnKX19XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwieyBuYW1lOiAnZXZlbnRzLmxpc3QnfVwiIGNsYXNzPVwiYnRuIGJ0bi1hcHBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNhbGVuZGFyXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JHQoJ2FkbWluLmV2ZW50cycpfX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWU6ICdjaGFtcGlvbnNoaXBzLmxpc3QnfVwiIGNsYXNzPVwiYnRuIGJ0bi1hcHBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRyb3BoeVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdhZG1pbi5jaGFtcGlvbnNoaXBzJyl9fVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHN0eWxlPlxuICAgIC5wcm9kdWN0LXJhbmsge1xuICAgICAgICBmb250LXNpemU6IDMxcHg7XG4gICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAjQUFBO1xuICAgIH1cblxuICAgIC5wcm9kdWN0LXBvaW50cyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgYmFja2dyb3VuZDogIzAwYzBlZjtcbiAgICAgICAgbWFyZ2luOiA5cHg7XG4gICAgICAgIHBhZGRpbmc6IDAgNXB4O1xuICAgICAgICBtaW4td2lkdGg6IDYxcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgIC5wcm9kdWN0LWltZyB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICB9XG5cbiAgICAucHJvZHVjdHMtbGlzdCAubGF0ZXN0LXByb2R1Y3Qge1xuICAgICAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5sYXRlc3QtcHJvZHVjdCBhIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cbiAgICAucHJvZHVjdC1pdGVtIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2Y0ZjRmNDtcbiAgICAgICAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y3ZjdmNyAhaW1wb3J0YW50XG4gICAgfVxuXG4gICAgLmxhdGVzdC1ib3gtYm9keSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLnByb2R1Y3QtZmxhZyB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgfVxuPC9zdHlsZT5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHBhZ2VIZWFkZXIgZnJvbSAnYmFzZS9jb21wb25lbnRzL2hlYWRlci9wYWdlSGVhZGVyLnZ1ZSdcbiAgICBpbXBvcnQgdXNlclN0YXRpc3RpY3NTZXJ2aWNlIGZyb20gJ2Jhc2UvZGFzaGJvYXJkL3NlcnZpY2VzL3VzZXIvdXNlclN0YXRpc3RpY3NTZXJ2aWNlJ1xuICAgIGltcG9ydCByYW5raW5nU2VydmljZSBmcm9tICdiYXNlL2Rhc2hib2FyZC9zZXJ2aWNlcy9yYW5raW5nL3JhbmtpbmdTZXJ2aWNlJ1xuICAgIGltcG9ydCBzY291dGluZ1NlcnZpY2UgZnJvbSAnYmFzZS9kYXNoYm9hcmQvc2VydmljZXMvc2NvdXRpbmdzL3Njb3V0aW5nU2VydmljZSdcbiAgICBpbXBvcnQgcmVwb3J0c1NlcnZpY2UgZnJvbSAnYmFzZS9kYXNoYm9hcmQvc2VydmljZXMvcmVwb3J0cy9yZXBvcnRTZXJ2aWNlJ1xuICAgIGltcG9ydCBkYXNoYm9hcmRMb2NhbGVzIGZyb20gJ2Jhc2UvbGFuZy9hZG1pbi9kYXNoYm9hcmQvZGFzaGJvYXJkLmpzJztcblxuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBsb2NhbGVzOiBkYXNoYm9hcmRMb2NhbGVzLFxuICAgICAgICBkYXRhKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGJyZWFkY3J1bWJzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6ICcvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnSG9tZSdcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGxhdGVzdFNjb3V0aW5nOiBudWxsLFxuICAgICAgICAgICAgICAgIGxhdGVzdFJlcG9ydDogbnVsbCxcbiAgICAgICAgICAgICAgICBzdW1tYXJ5OiB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3VudGluZ3M6IDAsXG4gICAgICAgICAgICAgICAgICAgIHJlcG9ydHM6IDAsXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZENoYWxsZW5nZXM6IDAsXG4gICAgICAgICAgICAgICAgICAgIHJhbms6IDAsXG4gICAgICAgICAgICAgICAgICAgIHBvaW50czogMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcmFua2luZzogW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgcGFnZUhlYWRlclxuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgdXNlclRpdGxlKCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJGF1dGgudXNlcigpLmF0aGxldGUgPyB0aGlzLiRhdXRoLnVzZXIoKS5hdGhsZXRlLnNwb3J0Lm5hbWUgKyAnICcgKyB0aGlzLiRhdXRoLnVzZXIoKS5hdGhsZXRlLnNwZWNpYWx0eS5uYW1lIDogJydcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKXtcbiAgICAgICAgICAgIHRoaXMubG9hZFJhbmtpbmcoKTtcbiAgICAgICAgICAgIHRoaXMubG9hZExhdGVzdFJlcG9ydCgpO1xuICAgICAgICAgICAgdGhpcy5sb2FkTGF0ZXN0U2NvdXRpbmcoKTtcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgbG9hZFJhbmtpbmcoKXtcbiAgICAgICAgICAgICAgICByYW5raW5nU2VydmljZS5yYW5raW5nKChyZXNwb25zZSk9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmFua2luZyA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICAgICAgfSwgKHJlc3BvbnNlKT0+IHtcblxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbG9hZExhdGVzdFJlcG9ydCgpe1xuICAgICAgICAgICAgICAgIHJlcG9ydHNTZXJ2aWNlLmxhdGVzdCgocmVzcG9uc2UpPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhdGVzdFJlcG9ydCA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICAgICAgfSwgKHJlc3BvbnNlKT0+IHtcblxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbG9hZExhdGVzdFNjb3V0aW5nKCl7XG4gICAgICAgICAgICAgICAgc2NvdXRpbmdTZXJ2aWNlLmxhdGVzdCgocmVzcG9uc2UpPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhdGVzdFNjb3V0aW5nID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICB9LCAocmVzcG9uc2UpPT4ge1xuXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBkYXNoYm9hcmQudnVlPzcxMWE2NGJlIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICByYW5raW5nKHN1Y2Nlc3NDYWxiYWNrLCBlcnJvckNhbGxiYWNrKXtcbiAgICAgICAgcmV0dXJuIFZ1ZS5odHRwLmdldCgnL2FwaS9yYW5raW5nP2luY2x1ZGU9dXNlci5hdGhsZXRlLmNvdW50cnknKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzdWNjZXNzQ2FsYmFjayhyZXNwb25zZS5ib2R5KSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGVycm9yQ2FsbGJhY2soZXJyb3IpKTtcbiAgICB9LFxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZGFzaGJvYXJkL3NlcnZpY2VzL3JhbmtpbmcvcmFua2luZ1NlcnZpY2UuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgXCJlblwiOiB7XG4gICAgICAgIFwiZGFzaGJvYXJkXCI6IHtcbiAgICAgICAgICAgIFwiZ2xvYmFsX3JhbmtpbmdcIjogXCJHbG9iYWwgUmFua2luZ1wiLFxuICAgICAgICAgICAgXCJtZW51XCI6IFwiTWVudVwiLFxuICAgICAgICAgICAgXCJvdmVyYWxsX3JhbmtpbmdcIjogXCJPdmVyYWxsIFJhbmtpbmdcIixcbiAgICAgICAgICAgIFwic2NvdXRpbmdzXCI6IFwiU2NvdXRpbmdzXCIsXG4gICAgICAgICAgICBcInJlcG9ydHNcIjogXCJSZXBvcnRzXCIsXG4gICAgICAgICAgICBcImNvbXBsZXRlZF9jaGFsbGVuZ2VzXCI6IFwiQ29tcGxldGVkIENoYWxsZW5nZXNcIixcbiAgICAgICAgICAgIFwibGF0ZXN0X3JlcG9ydFwiOiBcIkxhdGVzdCBSZXBvcnRcIixcbiAgICAgICAgICAgIFwibm9fcmVwb3J0XCI6IFwiQ3JlYXRlIGEgbmV3IHJlcG9ydFwiLFxuICAgICAgICAgICAgXCJub19zY291dGluZ1wiOiBcIkNyZWF0ZSBhIG5ldyBzY291dGluZ1wiLFxuICAgICAgICAgICAgXCJsYXRlc3Rfc2NvdXRpbmdcIjogXCJMYXRlc3QgU2NvdXRpbmdcIixcbiAgICAgICAgICAgIFwiY3JlYXRlX3JlcG9ydFwiOiBcIkNyZWF0ZSBSZXBvcnRcIixcbiAgICAgICAgICAgIFwiY3JlYXRlX3Njb3V0aW5nXCI6IFwiQ3JlYXRlIFNjb3V0aW5nXCIsXG4gICAgICAgICAgICBcImdvX3RvX3B0b2ZpbGVcIjogXCJHbyB0byBNeSBQcm9maWxlXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJlc1wiOiB7XG4gICAgICAgIFwiZGFzaGJvYXJkXCI6IHtcbiAgICAgICAgICAgIFwiZ2xvYmFsX3JhbmtpbmdcIjogXCJSYW5raW5nIEdsb2JhbFwiLFxuICAgICAgICAgICAgXCJtZW51XCI6IFwiTWVudVwiLFxuICAgICAgICAgICAgXCJvdmVyYWxsX3JhbmtpbmdcIjogXCJSYW5raW5nXCIsXG4gICAgICAgICAgICBcInNjb3V0aW5nc1wiOiBcIlNjb3V0aW5nc1wiLFxuICAgICAgICAgICAgXCJyZXBvcnRzXCI6IFwiUmVwb3J0ZXNcIixcbiAgICAgICAgICAgIFwiY29tcGxldGVkX2NoYWxsZW5nZXNcIjogXCJEZXNhZmlvcyBDb21wbGV0YWRvc1wiLFxuICAgICAgICAgICAgXCJsYXRlc3RfcmVwb3J0XCI6IFwiw5psdGltbyBSZXBvcnRlXCIsXG4gICAgICAgICAgICBcIm5vX3JlcG9ydFwiOiBcIkNyZWEgdW4gbnVldm8gcmVwb3J0XCIsXG4gICAgICAgICAgICBcIm5vX3Njb3V0aW5nXCI6IFwiQ3JlYSB1biBudWV2byBzY291dGluZ1wiLFxuICAgICAgICAgICAgXCJsYXRlc3Rfc2NvdXRpbmdcIjogXCLDmmx0aW1vIFNjb3V0aW5nXCIsXG4gICAgICAgICAgICBcImNyZWF0ZV9yZXBvcnRcIjogXCJDcmVhciBSZXBvcnRlXCIsXG4gICAgICAgICAgICBcImNyZWF0ZV9zY291dGluZ1wiOiBcIkNyZWFyIFNjb3V0aW5nXCIsXG4gICAgICAgICAgICBcImdvX3RvX3B0b2ZpbGVcIjogXCJJciBhIG1pIFBlcmZpbFwiXG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2xhbmcvYWRtaW4vZGFzaGJvYXJkL2Rhc2hib2FyZC5qcyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnByb2R1Y3QtcmFuayB7XFxuICAgIGZvbnQtc2l6ZTogMzFweDtcXG4gICAgd2lkdGg6IDcwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6ICNBQUE7XFxufVxcbi5wcm9kdWN0LXBvaW50cyB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgYmFja2dyb3VuZDogIzAwYzBlZjtcXG4gICAgbWFyZ2luOiA5cHg7XFxuICAgIHBhZGRpbmc6IDAgNXB4O1xcbiAgICBtaW4td2lkdGg6IDYxcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4ucHJvZHVjdC1pbWcge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxufVxcbi5wcm9kdWN0cy1saXN0IC5sYXRlc3QtcHJvZHVjdCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XFxufVxcbi5sYXRlc3QtcHJvZHVjdCBhIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLnByb2R1Y3QtaXRlbSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmNGY0ZjQ7XFxuICAgIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XFxuICAgIGJhY2tncm91bmQ6ICNmN2Y3ZjcgIWltcG9ydGFudFxcbn1cXG4ubGF0ZXN0LWJveC1ib2R5IHtcXG4gICAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcXG59XFxuLnByb2R1Y3QtZmxhZyB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi4vLi4vLi4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLnZ1ZT83MTFhNjRiZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBMklBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7SUFDQSxZQUFBO0NBQ0E7QUFFQTtJQUNBLGdCQUFBO0lBQ0Esb0JBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxhQUFBO0NBQ0E7QUFFQTtJQUNBLG1CQUFBO0NBQ0E7QUFFQTtJQUNBLDBCQUFBO0NBQ0E7QUFFQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7Q0FDQTtBQUVBO0lBQ0EsMEJBQUE7SUFDQSx3QkFBQTtJQUNBLCtCQUFBO0lBQ0EsOEJBQUE7Q0FDQTtBQUVBO0lBQ0EsMEJBQUE7Q0FDQTtBQUVBO0lBQ0EsY0FBQTtDQUNBXCIsXCJmaWxlXCI6XCJkYXNoYm9hcmQudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gICAgPGRpdj5cXG4gICAgICAgIDxwYWdlLWhlYWRlciB0aXRsZT1cXFwiRGFzaGJvYXJkXFxcIiA6YnJlYWRjcnVtYnM9XFxcImJyZWFkY3J1bWJzXFxcIj48L3BhZ2UtaGVhZGVyPlxcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XFxcImNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtbWQtM1xcXCI+XFxuXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJib3ggYm94LXdpZGdldCB3aWRnZXQtdXNlci0yXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIEFkZCB0aGUgYmcgY29sb3IgdG8gdGhlIGhlYWRlciB1c2luZyBhbnkgb2YgdGhlIGJnLSogY2xhc3NlcyAtLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3aWRnZXQtdXNlci1oZWFkZXIgYmctYmx1ZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndpZGdldC11c2VyLWltYWdlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XFxcImltZy1jaXJjbGVcXFwiIDpzcmM9XFxcIiRhdXRoLnVzZXIoKS5pbWFnZVxcXCIgYWx0PVxcXCJVc2VyIEF2YXRhclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIC8ud2lkZ2V0LXVzZXItaW1hZ2UgLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwid2lkZ2V0LXVzZXItdXNlcm5hbWVcXFwiPnt7JGF1dGgudXNlcigpLmZ1bGxfbmFtZX19PC9oMz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVxcXCJ3aWRnZXQtdXNlci1kZXNjXFxcIj57e3VzZXJUaXRsZX19PC9oNT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVxcXCJ7IG5hbWU6ICd1c2VyLnZpZXcnfVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2sgYnRuLWZsYXRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdkYXNoYm9hcmQuZ29fdG9fcHRvZmlsZScpfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJib3ggYm94LXByaW1hcnlcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJveC1oZWFkZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XFxcImJveC10aXRsZVxcXCI+e3skdCgnZGFzaGJvYXJkLmxhdGVzdF9zY291dGluZycpfX08L2gzPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJveC1ib2R5IGxhdGVzdC1ib3gtYm9keVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwicHJvZHVjdHMtbGlzdCBwcm9kdWN0LWxpc3QtaW4tYm94XFxcIiB2LWlmPVxcXCJsYXRlc3RTY291dGluZ1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XFxcIml0ZW0gcHJvZHVjdC1pdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsYXRlc3QtcHJvZHVjdFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGlua1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp0bz1cXFwieyBuYW1lOiAnc2NvdXRpbmdzLnRvdWNoJywgcGFyYW1zOiB7IGlkOiBsYXRlc3RTY291dGluZy5pZCB9fVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2xhdGVzdFNjb3V0aW5nLm5hbWV9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwicHJvZHVjdC1kZXNjcmlwdGlvblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2xhdGVzdFNjb3V0aW5nLmRlc2NyaXB0aW9ufX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHYtZWxzZT57eyR0KCdkYXNoYm9hcmQubm9fc2NvdXRpbmcnKX19PC9oND5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cXFwieyBuYW1lOiAnc2NvdXRpbmdzLmNyZWF0ZSd9XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImJ0biBidG4tc3VjY2VzcyBidG4tYmxvY2tcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnZGFzaGJvYXJkLmNyZWF0ZV9zY291dGluZycpfX1cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYm94IGJveC1wcmltYXJ5XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJib3gtaGVhZGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVxcXCJib3gtdGl0bGVcXFwiPnt7JHQoJ2Rhc2hib2FyZC5sYXRlc3RfcmVwb3J0Jyl9fTwvaDM+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYm94LWJvZHlcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XFxcInByb2R1Y3RzLWxpc3QgcHJvZHVjdC1saXN0LWluLWJveFxcXCIgdi1pZj1cXFwibGF0ZXN0UmVwb3J0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiaXRlbSBwcm9kdWN0LWl0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxhdGVzdC1wcm9kdWN0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cXFwieyBuYW1lOiAncmVwb3J0cy52aWV3JywgcGFyYW1zOiB7IGlkOiBsYXRlc3RSZXBvcnQuaWQgfX1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tsYXRlc3RSZXBvcnQubmFtZX19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJwcm9kdWN0LWRlc2NyaXB0aW9uXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7bGF0ZXN0UmVwb3J0LmRlc2NyaXB0aW9ufX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHYtZWxzZT57eyR0KCdkYXNoYm9hcmQubm9fcmVwb3J0Jyl9fTwvaDQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XFxcInsgbmFtZTogJ3JlcG9ydHMuY3JlYXRlJ31cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1ibG9ja1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdkYXNoYm9hcmQuY3JlYXRlX3JlcG9ydCcpfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyIGNvbC1tZC05XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyIGNvbC1tZC0xMFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJveCBib3gtcHJpbWFyeVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJib3gtaGVhZGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XFxcImJveC10aXRsZVxcXCI+e3skdCgnZGFzaGJvYXJkLmdsb2JhbF9yYW5raW5nJyl9fTwvaDM+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJveC1ib2R5XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XFxcInByb2R1Y3RzLWxpc3QgcHJvZHVjdC1saXN0LWluLWJveFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiaXRlbVxcXCIgdi1mb3I9XFxcInJhbmsgaW4gcmFua2luZ1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9kdWN0LXJhbmsgcHVsbC1sZWZ0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3JhbmsucmFua319XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2R1Y3QtaW1nXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XFxcInJhbmsudXNlci5pbWFnZVxcXCIgYWx0PVxcXCJQcm9kdWN0IEltYWdlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvZHVjdC1pbmZvXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XFxcInB1bGwtbGVmdFxcXCI+e3tyYW5rLnVzZXIuZnVsbF9uYW1lfX08L2g0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cXFwicmFuay51c2VyLmF0aGxldGUuY291bnRyeS5mbGFnXFxcIiBjbGFzcz1cXFwicHJvZHVjdC1mbGFnXFxcIiBhbHQ9XFxcIlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInByb2R1Y3QtcG9pbnRzIHB1bGwtcmlnaHRcXFwiPnt7cmFuay5wb2ludHN9fSBwdHNcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtbWQtMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJveCBib3gtcHJpbWFyeVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJib3gtaGVhZGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XFxcImJveC10aXRsZSB0ZXh0LWNlbnRlclxcXCI+e3skdCgnYWRtaW4ucXVpY2tfbmF2aWdhdGlvbicpfX08L2gzPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJib3gtYm9keSB0ZXh0LWNlbnRlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cXFwieyBuYW1lOiAnc2NvdXRpbmdzLmxpc3QnfVxcXCIgY2xhc3M9XFxcImJ0biBidG4tYXBwIGJ0bi1wcmltYXJ5XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWxpc3RcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3skdCgnYWRtaW4uc2NvdXRpbmdzJyl9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImJ0biBidG4tYXBwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWZpbGUtdGV4dFxcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdhZG1pbi5yZXBvcnRzJyl9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVxcXCJ7IG5hbWU6ICdhdGhsZXRlcy5saXN0J31cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWFwcFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS11c2Vyc1xcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdhZG1pbi5hdGhsZXRlcycpfX1cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XFxcInsgbmFtZTogJ2V2ZW50cy5saXN0J31cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWFwcFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1jYWxlbmRhclxcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdhZG1pbi5ldmVudHMnKX19XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVxcXCJ7IG5hbWU6ICdjaGFtcGlvbnNoaXBzLmxpc3QnfVxcXCIgY2xhc3M9XFxcImJ0biBidG4tYXBwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXRyb3BoeVxcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyR0KCdhZG1pbi5jaGFtcGlvbnNoaXBzJyl9fVxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L3NlY3Rpb24+XFxuICAgIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuPHN0eWxlPlxcbiAgICAucHJvZHVjdC1yYW5rIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMzFweDtcXG4gICAgICAgIHdpZHRoOiA3MHB4O1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgY29sb3I6ICNBQUE7XFxuICAgIH1cXG5cXG4gICAgLnByb2R1Y3QtcG9pbnRzIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgIGJhY2tncm91bmQ6ICMwMGMwZWY7XFxuICAgICAgICBtYXJnaW46IDlweDtcXG4gICAgICAgIHBhZGRpbmc6IDAgNXB4O1xcbiAgICAgICAgbWluLXdpZHRoOiA2MXB4O1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICB9XFxuXFxuICAgIC5wcm9kdWN0LWltZyB7XFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxuICAgIH1cXG5cXG4gICAgLnByb2R1Y3RzLWxpc3QgLmxhdGVzdC1wcm9kdWN0IHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XFxuICAgIH1cXG5cXG4gICAgLmxhdGVzdC1wcm9kdWN0IGEge1xcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIH1cXG5cXG4gICAgLnByb2R1Y3QtaXRlbSB7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZjRmNGY0O1xcbiAgICAgICAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjdmN2Y3ICFpbXBvcnRhbnRcXG4gICAgfVxcblxcbiAgICAubGF0ZXN0LWJveC1ib2R5IHtcXG4gICAgICAgIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XFxuICAgIH1cXG5cXG4gICAgLnByb2R1Y3QtZmxhZyB7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB9XFxuPC9zdHlsZT5cXG48c2NyaXB0PlxcbiAgICBpbXBvcnQgcGFnZUhlYWRlciBmcm9tICdiYXNlL2NvbXBvbmVudHMvaGVhZGVyL3BhZ2VIZWFkZXIudnVlJ1xcbiAgICBpbXBvcnQgdXNlclN0YXRpc3RpY3NTZXJ2aWNlIGZyb20gJ2Jhc2UvZGFzaGJvYXJkL3NlcnZpY2VzL3VzZXIvdXNlclN0YXRpc3RpY3NTZXJ2aWNlJ1xcbiAgICBpbXBvcnQgcmFua2luZ1NlcnZpY2UgZnJvbSAnYmFzZS9kYXNoYm9hcmQvc2VydmljZXMvcmFua2luZy9yYW5raW5nU2VydmljZSdcXG4gICAgaW1wb3J0IHNjb3V0aW5nU2VydmljZSBmcm9tICdiYXNlL2Rhc2hib2FyZC9zZXJ2aWNlcy9zY291dGluZ3Mvc2NvdXRpbmdTZXJ2aWNlJ1xcbiAgICBpbXBvcnQgcmVwb3J0c1NlcnZpY2UgZnJvbSAnYmFzZS9kYXNoYm9hcmQvc2VydmljZXMvcmVwb3J0cy9yZXBvcnRTZXJ2aWNlJ1xcbiAgICBpbXBvcnQgZGFzaGJvYXJkTG9jYWxlcyBmcm9tICdiYXNlL2xhbmcvYWRtaW4vZGFzaGJvYXJkL2Rhc2hib2FyZC5qcyc7XFxuXFxuICAgIGV4cG9ydCBkZWZhdWx0e1xcbiAgICAgICAgbG9jYWxlczogZGFzaGJvYXJkTG9jYWxlcyxcXG4gICAgICAgIGRhdGEoKXtcXG4gICAgICAgICAgICByZXR1cm4ge1xcbiAgICAgICAgICAgICAgICBicmVhZGNydW1iczogW1xcbiAgICAgICAgICAgICAgICAgICAge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6ICcvJyxcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0hvbWUnXFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBdLFxcbiAgICAgICAgICAgICAgICBsYXRlc3RTY291dGluZzogbnVsbCxcXG4gICAgICAgICAgICAgICAgbGF0ZXN0UmVwb3J0OiBudWxsLFxcbiAgICAgICAgICAgICAgICBzdW1tYXJ5OiB7XFxuICAgICAgICAgICAgICAgICAgICBzY291bnRpbmdzOiAwLFxcbiAgICAgICAgICAgICAgICAgICAgcmVwb3J0czogMCxcXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZENoYWxsZW5nZXM6IDAsXFxuICAgICAgICAgICAgICAgICAgICByYW5rOiAwLFxcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRzOiAwXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIHJhbmtpbmc6IFtdXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIGNvbXBvbmVudHM6IHtcXG4gICAgICAgICAgICBwYWdlSGVhZGVyXFxuICAgICAgICB9LFxcbiAgICAgICAgY29tcHV0ZWQ6IHtcXG4gICAgICAgICAgICB1c2VyVGl0bGUoKXtcXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJGF1dGgudXNlcigpLmF0aGxldGUgPyB0aGlzLiRhdXRoLnVzZXIoKS5hdGhsZXRlLnNwb3J0Lm5hbWUgKyAnICcgKyB0aGlzLiRhdXRoLnVzZXIoKS5hdGhsZXRlLnNwZWNpYWx0eS5uYW1lIDogJydcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgfSxcXG4gICAgICAgIG1vdW50ZWQoKXtcXG4gICAgICAgICAgICB0aGlzLmxvYWRSYW5raW5nKCk7XFxuICAgICAgICAgICAgdGhpcy5sb2FkTGF0ZXN0UmVwb3J0KCk7XFxuICAgICAgICAgICAgdGhpcy5sb2FkTGF0ZXN0U2NvdXRpbmcoKTtcXG4gICAgICAgIH0sXFxuICAgICAgICBtZXRob2RzOiB7XFxuICAgICAgICAgICAgbG9hZFJhbmtpbmcoKXtcXG4gICAgICAgICAgICAgICAgcmFua2luZ1NlcnZpY2UucmFua2luZygocmVzcG9uc2UpPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yYW5raW5nID0gcmVzcG9uc2UuZGF0YTtcXG4gICAgICAgICAgICAgICAgfSwgKHJlc3BvbnNlKT0+IHtcXG5cXG4gICAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGxvYWRMYXRlc3RSZXBvcnQoKXtcXG4gICAgICAgICAgICAgICAgcmVwb3J0c1NlcnZpY2UubGF0ZXN0KChyZXNwb25zZSk9PiB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhdGVzdFJlcG9ydCA9IHJlc3BvbnNlLmRhdGE7XFxuICAgICAgICAgICAgICAgIH0sIChyZXNwb25zZSk9PiB7XFxuXFxuICAgICAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBsb2FkTGF0ZXN0U2NvdXRpbmcoKXtcXG4gICAgICAgICAgICAgICAgc2NvdXRpbmdTZXJ2aWNlLmxhdGVzdCgocmVzcG9uc2UpPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXRlc3RTY291dGluZyA9IHJlc3BvbnNlLmRhdGE7XFxuICAgICAgICAgICAgICAgIH0sIChyZXNwb25zZSk9PiB7XFxuXFxuICAgICAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgIH1cXG4gICAgfVxcbjwvc2NyaXB0PlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMzliN2U4YjYhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Rhc2hib2FyZC9tb2R1bGVzL2Rhc2hib2FyZC9kYXNoYm9hcmQudnVlXG4vLyBtb2R1bGUgaWQgPSAzMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAxNiIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdwYWdlLWhlYWRlcicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0aXRsZVwiOiBcIkRhc2hib2FyZFwiLFxuICAgICAgXCJicmVhZGNydW1ic1wiOiBfdm0uYnJlYWRjcnVtYnNcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc2VjdGlvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250ZW50XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1tZC0zXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYm94IGJveC13aWRnZXQgd2lkZ2V0LXVzZXItMlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIndpZGdldC11c2VyLWhlYWRlciBiZy1ibHVlXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwid2lkZ2V0LXVzZXItaW1hZ2VcIlxuICB9LCBbX2MoJ2ltZycsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpbWctY2lyY2xlXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3JjXCI6IF92bS4kYXV0aC51c2VyKCkuaW1hZ2UsXG4gICAgICBcImFsdFwiOiBcIlVzZXIgQXZhdGFyXCJcbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdoMycsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ3aWRnZXQtdXNlci11c2VybmFtZVwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS4kYXV0aC51c2VyKCkuZnVsbF9uYW1lKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2g1Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIndpZGdldC11c2VyLWRlc2NcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0udXNlclRpdGxlKSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncm91dGVyLWxpbmsnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9jayBidG4tZmxhdFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInRvXCI6IHtcbiAgICAgICAgbmFtZTogJ3VzZXIudmlldydcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHQoJ2Rhc2hib2FyZC5nb190b19wdG9maWxlJykpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYm94IGJveC1wcmltYXJ5XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYm94LWhlYWRlclwiXG4gIH0sIFtfYygnaDMnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYm94LXRpdGxlXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLiR0KCdkYXNoYm9hcmQubGF0ZXN0X3Njb3V0aW5nJykpKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYm94LWJvZHkgbGF0ZXN0LWJveC1ib2R5XCJcbiAgfSwgWyhfdm0ubGF0ZXN0U2NvdXRpbmcpID8gX2MoJ3VsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInByb2R1Y3RzLWxpc3QgcHJvZHVjdC1saXN0LWluLWJveFwiXG4gIH0sIFtfYygnbGknLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaXRlbSBwcm9kdWN0LWl0ZW1cIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJsYXRlc3QtcHJvZHVjdFwiXG4gIH0sIFtfYygncm91dGVyLWxpbmsnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidG9cIjoge1xuICAgICAgICBuYW1lOiAnc2NvdXRpbmdzLnRvdWNoJyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgaWQ6IF92bS5sYXRlc3RTY291dGluZy5pZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5sYXRlc3RTY291dGluZy5uYW1lKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInByb2R1Y3QtZGVzY3JpcHRpb25cIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5sYXRlc3RTY291dGluZy5kZXNjcmlwdGlvbikgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSwgMSldKV0pIDogX2MoJ2g0JywgW192bS5fdihfdm0uX3MoX3ZtLiR0KCdkYXNoYm9hcmQubm9fc2NvdXRpbmcnKSkpXSksIF92bS5fdihcIiBcIiksIF9jKCdyb3V0ZXItbGluaycsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXN1Y2Nlc3MgYnRuLWJsb2NrXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidG9cIjoge1xuICAgICAgICBuYW1lOiAnc2NvdXRpbmdzLmNyZWF0ZSdcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KCdkYXNoYm9hcmQuY3JlYXRlX3Njb3V0aW5nJykpICsgXCJcXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYm94IGJveC1wcmltYXJ5XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYm94LWhlYWRlclwiXG4gIH0sIFtfYygnaDMnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYm94LXRpdGxlXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLiR0KCdkYXNoYm9hcmQubGF0ZXN0X3JlcG9ydCcpKSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveC1ib2R5XCJcbiAgfSwgWyhfdm0ubGF0ZXN0UmVwb3J0KSA/IF9jKCd1bCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwcm9kdWN0cy1saXN0IHByb2R1Y3QtbGlzdC1pbi1ib3hcIlxuICB9LCBbX2MoJ2xpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIml0ZW0gcHJvZHVjdC1pdGVtXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibGF0ZXN0LXByb2R1Y3RcIlxuICB9LCBbX2MoJ3JvdXRlci1saW5rJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRvXCI6IHtcbiAgICAgICAgbmFtZTogJ3JlcG9ydHMudmlldycsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIGlkOiBfdm0ubGF0ZXN0UmVwb3J0LmlkXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLmxhdGVzdFJlcG9ydC5uYW1lKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInByb2R1Y3QtZGVzY3JpcHRpb25cIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5sYXRlc3RSZXBvcnQuZGVzY3JpcHRpb24pICsgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKV0sIDEpXSldKSA6IF9jKCdoNCcsIFtfdm0uX3YoX3ZtLl9zKF92bS4kdCgnZGFzaGJvYXJkLm5vX3JlcG9ydCcpKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3JvdXRlci1saW5rJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc3VjY2VzcyBidG4tYmxvY2tcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0b1wiOiB7XG4gICAgICAgIG5hbWU6ICdyZXBvcnRzLmNyZWF0ZSdcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLiR0KCdkYXNoYm9hcmQuY3JlYXRlX3JlcG9ydCcpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1tZC05XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1tZC0xMFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveCBib3gtcHJpbWFyeVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveC1oZWFkZXJcIlxuICB9LCBbX2MoJ2gzJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveC10aXRsZVwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS4kdCgnZGFzaGJvYXJkLmdsb2JhbF9yYW5raW5nJykpKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYm94LWJvZHlcIlxuICB9LCBbX2MoJ3VsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInByb2R1Y3RzLWxpc3QgcHJvZHVjdC1saXN0LWluLWJveFwiXG4gIH0sIF92bS5fbCgoX3ZtLnJhbmtpbmcpLCBmdW5jdGlvbihyYW5rKSB7XG4gICAgcmV0dXJuIF9jKCdsaScsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIml0ZW1cIlxuICAgIH0sIFtfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwicHJvZHVjdC1yYW5rIHB1bGwtbGVmdFwiXG4gICAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MocmFuay5yYW5rKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwicHJvZHVjdC1pbWdcIlxuICAgIH0sIFtfYygnaW1nJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJzcmNcIjogcmFuay51c2VyLmltYWdlLFxuICAgICAgICBcImFsdFwiOiBcIlByb2R1Y3QgSW1hZ2VcIlxuICAgICAgfVxuICAgIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJwcm9kdWN0LWluZm9cIlxuICAgIH0sIFtfYygnaDQnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJwdWxsLWxlZnRcIlxuICAgIH0sIFtfdm0uX3YoX3ZtLl9zKHJhbmsudXNlci5mdWxsX25hbWUpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW1nJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwicHJvZHVjdC1mbGFnXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcInNyY1wiOiByYW5rLnVzZXIuYXRobGV0ZS5jb3VudHJ5LmZsYWcsXG4gICAgICAgIFwiYWx0XCI6IFwiXCJcbiAgICAgIH1cbiAgICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJwcm9kdWN0LXBvaW50cyBwdWxsLXJpZ2h0XCJcbiAgICB9LCBbX3ZtLl92KF92bS5fcyhyYW5rLnBvaW50cykgKyBcIiBwdHNcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pXSldKVxuICB9KSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1tZC0yXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYm94IGJveC1wcmltYXJ5XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYm94LWhlYWRlclwiXG4gIH0sIFtfYygnaDMnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYm94LXRpdGxlIHRleHQtY2VudGVyXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLiR0KCdhZG1pbi5xdWlja19uYXZpZ2F0aW9uJykpKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYm94LWJvZHkgdGV4dC1jZW50ZXJcIlxuICB9LCBbX2MoJ3JvdXRlci1saW5rJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tYXBwIGJ0bi1wcmltYXJ5XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidG9cIjoge1xuICAgICAgICBuYW1lOiAnc2NvdXRpbmdzLmxpc3QnXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtbGlzdFwiXG4gIH0pLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHQoJ2FkbWluLnNjb3V0aW5ncycpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2EnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1hcHBcIlxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtZmlsZS10ZXh0XCJcbiAgfSksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdCgnYWRtaW4ucmVwb3J0cycpKSArIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3JvdXRlci1saW5rJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tYXBwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidG9cIjoge1xuICAgICAgICBuYW1lOiAnYXRobGV0ZXMubGlzdCdcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS11c2Vyc1wiXG4gIH0pLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHQoJ2FkbWluLmF0aGxldGVzJykpICsgXCJcXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncm91dGVyLWxpbmsnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1hcHBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0b1wiOiB7XG4gICAgICAgIG5hbWU6ICdldmVudHMubGlzdCdcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1jYWxlbmRhclwiXG4gIH0pLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHQoJ2FkbWluLmV2ZW50cycpKSArIFwiXFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3JvdXRlci1saW5rJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tYXBwXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidG9cIjoge1xuICAgICAgICBuYW1lOiAnY2hhbXBpb25zaGlwcy5saXN0J1xuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLXRyb3BoeVwiXG4gIH0pLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uJHQoJ2FkbWluLmNoYW1waW9uc2hpcHMnKSkgKyBcIlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXSldLCAxKV0pXSldKV0pXSldKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTM5YjdlOGI2XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0zOWI3ZThiNiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMTYiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTM5YjdlOGI2IS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9kYXNoYm9hcmQudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcImIzNTMyODkwXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0zOWI3ZThiNiEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vZGFzaGJvYXJkLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMzliN2U4YjYhLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2Rhc2hib2FyZC52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTM5YjdlOGI2IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kYXNoYm9hcmQvbW9kdWxlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMTYiXSwic291cmNlUm9vdCI6IiJ9