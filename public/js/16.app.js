webpackJsonp([16,25],{171:function(t,e,s){var a=s(132)(s(279),s(365),null,null);t.exports=a.exports},185:function(t,e,s){s(189);var a=s(132)(s(186),s(188),null,null);t.exports=a.exports},186:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{title:{type:String,required:!0},breadcrumbs:{type:Array,default:function(){return[]}}}}},187:function(t,e,s){e=t.exports=s(133)(),e.push([t.i,".admin-header{height:97px;margin-bottom:20px}.admin-header .row{margin-bottom:0}",""])},188:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"content-header"},[s("h1",[t._v("\n        "+t._s(t.title)+"\n    ")]),t._v(" "),s("ol",{staticClass:"breadcrumb"},t._l(t.breadcrumbs,function(e){return s("router-link",{attrs:{to:e.href,"active-class":"active",tag:"li"}},[t._v("\n            "+t._s(t.$t(e.title))+"\n        ")])}))])},staticRenderFns:[]}},189:function(t,e,s){var a=s(187);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s(134)("e9fec1c2",a,!0)},279:function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(185),r=a(n);e.default={data:function(){return{breadcrumbs:[{href:"/",title:"Home"}]}},components:{pageHeader:r.default}}},365:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("page-header",{attrs:{title:"Dashboard",breadcrumbs:t.breadcrumbs}}),t._v(" "),s("section",{staticClass:"content"},[s("div",{staticClass:"box"},[t._m(0),t._v(" "),s("div",{staticClass:"box-body"},[s("router-link",{staticClass:"btn btn-app",attrs:{to:{name:"scoutings.list"}}},[s("i",{staticClass:"fa fa-edit"}),t._v(" Scouting\n                    List\n                ")]),t._v(" "),t._m(1),t._v(" "),s("router-link",{staticClass:"btn btn-app",attrs:{to:{name:"athletes.list"}}},[s("i",{staticClass:"fa fa-edit"}),t._v(" Athletes\n                    List\n                ")])],1)])])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box-header"},[s("h3",{staticClass:"box-title"},[t._v("Scouting Menu")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"btn btn-app"},[s("i",{staticClass:"fa fa-play"}),t._v(" Reports\n                ")])}]}}});