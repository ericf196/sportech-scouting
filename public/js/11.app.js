webpackJsonp([11,29],{188:function(t,e,i){i(442);var s=i(134)(i(306),i(404),null,null);t.exports=s.exports},194:function(t,e,i){i(198);var s=i(134)(i(195),i(197),null,null);t.exports=s.exports},195:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{title:{type:String,required:!0},breadcrumbs:{type:Array,default:function(){return[]}}}}},196:function(t,e,i){e=t.exports=i(135)(),e.push([t.i,".admin-header{height:97px;margin-bottom:20px}.admin-header .row{margin-bottom:0}",""])},197:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"content-header"},[i("h1",[t._v("\n        "+t._s(t.title)+"\n    ")]),t._v(" "),i("ol",{staticClass:"breadcrumb"},t._l(t.breadcrumbs,function(e){return i("router-link",{attrs:{to:e.href,"active-class":"active",tag:"li"}},[t._v("\n            "+t._s(t.$t(e.title))+"\n        ")])}))])},staticRenderFns:[]}},198:function(t,e,i){var s=i(196);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i(136)("e9fec1c2",s,!0)},242:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{generateUUID:function(){var t=(new Date).getTime();window.performance&&"function"==typeof window.performance.now&&(t+=performance.now());var e="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var i=(t+16*Math.random())%16|0;return t=Math.floor(t/16),("x"==e?i:3&i|8).toString(16)});return e}}}},244:function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(2),o=s(n);e.default={show:function(t,e,i){return o.default.http.get("/api/reports/"+t).then(function(t){return e(t.body)}).catch(function(t){return i(t)})},create:function(t,e,i){return o.default.http.post("/api/reports",t).then(function(t){return e(t.body)}).catch(function(t){return i(t)})},latest:function(t,e){return o.default.http.get("/api/reports/latest").then(function(e){return t(e.body)}).catch(function(t){return e(t)})}}},245:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={en:{reports:{list:"Reports List",create:"Create Report",created_successfully:"The Report was created successfully",not_found:"The Report doesn't exist",no_scoutings:"You have to add 1 or more scouitngs",name:"Name",add_scouting:"Add Scouting",description:"Description",reports_scoutings:"Report Scoutings",report:"Report",actions:"Actions",scouting_added:"Scouting Added"}},es:{reports:{list:"Lista de Reportes",create:"Crear Reporte",created_successfully:"El Reporte fue creado satisfactoriamente",not_found:"El Reporte no existe",no_scoutings:"Debes agregar 1 o más scoutings",name:"Nombre",add_scouting:"Añadir Scouting",description:"Descripción",reports_scoutings:"Scoutings del reporte",report:"Reporte",actions:"Acciones",scouting_added:"Scouting Añadido"}}}},279:function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(242),o=s(n),a=i(320);e.default={props:{value:{required:!0},title:{default:""},color:{required:!0}},watch:{value:function(t){this.gauge.set(t)}},data:function(){return{gauge:null,opts:{},timeoutHandle:null}},computed:{elementId:function(){return this.generateUUID()},containerId:function(){return this.generateUUID()},textId:function(){return this.generateUUID()}},mixins:[o.default],mounted:function(){this.draw(),window.addEventListener("resize",this.redraw)},methods:{draw:function(){var t=i(374),e=document.getElementById(this.containerId).offsetWidth,s=e/2;document.getElementById(this.elementId).setAttribute("width",e+"px"),document.getElementById(this.elementId).setAttribute("height",s+"px"),this.opts=_.cloneDeep(a.opts),this.opts.colorStart=this.color,this.gauge=new t.Gauge(document.getElementById(this.elementId)).setOptions(this.opts),this.gauge.maxValue=100,this.gauge.setMinValue(0),this.gauge.animationSpeed=65,this.gauge.set(this.value),this.gauge.setTextField(document.getElementById(this.textId))},redraw:function(){document.getElementById(this.elementId).getContext("2d").save(),document.getElementById(this.elementId).getContext("2d").setTransform(1,0,0,1,0,0),document.getElementById(this.elementId).getContext("2d").clearRect(0,0,document.getElementById(this.elementId).getContext("2d").canvas.width,document.getElementById(this.elementId).getContext("2d").canvas.height),document.getElementById(this.elementId).getContext("2d").restore(),this.timeoutHandle&&window.clearTimeout(this.timeoutHandle),this.timeoutHandle=window.setTimeout(this.draw,250)}}}},306:function(t,e,i){"use strict";(function(t){function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(194),o=s(n),a=i(375),r=s(a),l=i(245),c=s(l),h=i(244),u=s(h),d=i(338),p=s(d),f=i(242),g=s(f),v=i(323),m=i(324),x=i(321);i(322);e.default={locales:c.default,components:{pageHeader:o.default,gauge:r.default},mixins:[g.default],data:function(){return{reports:{},pointVsTimeGraphs:[],pie:{},bar:{},counterOffensiveGauge:{data:0},offensiveGauge:{data:0},defensiveGauge:{data:0},effectiveness:{},valid:{},average:{},perfection:{},timeConsumed:{}}},computed:{breadcrumbs:function(){return[{href:"/dashboard",title:this.$t("admin.home")},{href:"/reports/"+this.$route.params.id,title:"admin.view"}]}},created:function(){var t=this;u.default.show(this.$route.params.id,function(e){t.report=e.data},function(t){})},mounted:function(){var e=this;p.default.pointVsTime(this.$route.params.id,function(i){var s=i,n=[];_.each(s,function(t){var i={id:e.generateUUID(),name:t.leftAthlete+" VS "+t.rightAthlete,options:_.cloneDeep(v.lineBaseOptions)};i.options.xAxis.categories=t.time,i.options.series[0].data=t.left,i.options.series[1].data=t.right,i.options.series[0].name=t.leftAthlete,i.options.series[1].name=t.rightAthlete,n.push(i)}),e.pointVsTimeGraphs=n;var o=e;e.$nextTick(function(){t('a[data-toggle="tab"]').on("shown.bs.tab",function(t){_.each(o.pointVsTimeGraphs,function(t){o.$refs[t.id][0].chart.reflow()})})})},function(t){}),p.default.offensiveDefensive(this.$route.params.id,function(t){var i=t;e.counterOffensiveGauge.data=i.counterOffensive.data,e.offensiveGauge.data=i.offensive.data,e.defensiveGauge.data=i.defensive.data},function(t){}),p.default.combatStatus(this.$route.params.id,function(t){var i=t,s=_.cloneDeep(m.pieBaseOptions);s.series[0].data=i,e.pie=s},function(t){}),p.default.parry(this.$route.params.id,function(t){var i=t.data,s=t.categories,n=_.cloneDeep(x.barBaseOptions);n.series[0].data=i,n.xAxis.categories=s,e.bar=n},function(t){}),p.default.summary(this.$route.params.id,function(t){var i=t;e.effectiveness=i.effectiveness,e.valid=i.valid,e.average=i.average,e.perfection=i.perfection,e.timeConsumed=i.consumedTime},function(t){})}}}).call(e,i(1))},320:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.opts={angle:-.02,lineWidth:.44,radiusScale:1,pointer:{length:.6,strokeWidth:.035,color:"#000000"},limitMax:!1,limitMin:!1,colorStart:"#6FADCF",colorStop:"#8FC0DA",strokeColor:"#E0E0E0",generateGradient:!0,highDpiSupport:!0}},321:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.barBaseOptions={chart:{type:"bar"},title:{text:"Parry"},xAxis:{categories:["12","11","10","9","8","7","6","5","4","3","2","1"],title:{text:"Body Zone"}},yAxis:{min:0,title:{text:"Number of Parrys",align:"high"},labels:{overflow:"justify"}},plotOptions:{bar:{dataLabels:{enabled:!0}}},legend:{layout:"vertical",align:"right",verticalAlign:"top",x:-40,y:80,floating:!0,borderWidth:1,backgroundColor:"#FFFFFF",shadow:!0},credits:{enabled:!1},series:[{name:"Parry Numbers",data:[1,0,2,2,0,3,4,0,0,1,0,0]}]}},322:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.gaugeBaseOptions={chart:{type:"solidgauge",height:150},yAxis:{min:0,max:100,title:{text:null,y:-70},stops:[[.1,"#55BF3B"]],lineWidth:0,minorTickInterval:null,tickAmount:2,labels:{enabled:!1}},credits:{enabled:!1},series:[{name:null,data:[80],dataLabels:{format:'<div style="text-align:center"><span style="font-size:13px;color:black">{y}%</span><br/>',y:-25},tooltip:{valueSuffix:"%"}}],title:{text:"Efectividad"},pane:{size:"150%",startAngle:-90,endAngle:90,background:{backgroundColor:"#EEE",innerRadius:"60%",outerRadius:"100%",shape:"arc"}},tooltip:{enabled:!1},plotOptions:{solidgauge:{dataLabels:{y:5,borderWidth:0,useHTML:!0}}}}},323:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.lineBaseOptions={chart:{type:"line"},title:{text:"Points vs Time"},xAxis:{title:{text:"Time"},categories:[],labels:{formatter:function(){return this.value+"min"}}},yAxis:{title:{text:"Points"},labels:{formatter:function(){return this.value+"pt"}}},tooltip:{crosshairs:!0,shared:!0},plotOptions:{line:{marker:{radius:8,lineWidth:0},dataLabels:{enabled:!0,color:"white",verticalAlign:"middle",crop:!1,overflow:"none",style:{fontWeight:"bold",textOutline:"none",fontSize:"16px"}}}},series:[{name:"Pedro Gorrin",color:"#ff6600",index:2,marker:{symbol:"circle",radius:12},data:[]},{name:"Javier Bastidas",color:"#64b5f6",index:1,marker:{symbol:"circle",radius:12},data:[]}]}},324:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.pieBaseOptions={chart:{plotBackgroundColor:null,plotBorderWidth:null,plotShadow:!1,type:"pie"},title:{text:"Combat Status"},tooltip:{pointFormat:"{series.name}: <b>{point.percentage:.1f}%</b>"},plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",dataLabels:{enabled:!1,format:"<b>{point.name}</b>: {point.percentage:.1f} %",style:{color:"black"}},showInLegend:!0}},series:[{name:"Percent",colorByPoint:!0,data:[{name:"EQUAL",y:20},{name:"UP",y:60},{name:"DOWN",y:20}]}]}},338:function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(2),o=s(n);e.default={pointVsTime:function(t,e,i){return o.default.http.get("/api/reports/"+t+"/point-vs-time").then(function(t){return e(t.body)}).catch(function(t){return i(t)})},offensiveDefensive:function(t,e,i){return o.default.http.get("/api/reports/"+t+"/offensive-defensive").then(function(t){return e(t.body)}).catch(function(t){return i(t)})},combatStatus:function(t,e,i){return o.default.http.get("/api/reports/"+t+"/combat-status").then(function(t){return e(t.body)}).catch(function(t){return i(t)})},parry:function(t,e,i){return o.default.http.get("/api/reports/"+t+"/parry").then(function(t){return e(t.body)}).catch(function(t){return i(t)})},summary:function(t,e,i){return o.default.http.get("/api/reports/"+t+"/summary").then(function(t){return e(t.body)}).catch(function(t){return i(t)})}}},356:function(t,e,i){e=t.exports=i(135)(),e.push([t.i,".report{background-color:#fff}.border-right{border-right:1px solid #666}.description-text{font-size:20px;font-weight:700}.description-percentage{font-size:15px;font-weight:700}.description-header{font-size:20px;font-weight:700}",""])},367:function(t,e,i){e=t.exports=i(135)(),e.push([t.i,".gauge{background-color:#fff}.goal-wrapper{font-size:16px;font-weight:700}",""])},374:function(t,e,i){(function(s){var n;(function(){var o,a,r,l,c,h,u,d,p,f,g,v,m,x,_,y=[].slice,C={}.hasOwnProperty,b=function(t,e){function i(){this.constructor=t}for(var s in e)C.call(e,s)&&(t[s]=e[s]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t};!function(){var t,e,i,s,n,o,a;for(a=["ms","moz","webkit","o"],i=0,n=a.length;i<n&&(o=a[i],!window.requestAnimationFrame);i++)window.requestAnimationFrame=window[o+"RequestAnimationFrame"],window.cancelAnimationFrame=window[o+"CancelAnimationFrame"]||window[o+"CancelRequestAnimationFrame"];return t=null,s=0,e={},requestAnimationFrame?window.cancelAnimationFrame?void 0:(t=window.requestAnimationFrame,window.requestAnimationFrame=function(i,n){var o;return o=++s,t(function(){if(!e[o])return i()},n),o},window.cancelAnimationFrame=function(t){return e[t]=!0}):(window.requestAnimationFrame=function(t,e){var i,s,n,o;return i=(new Date).getTime(),o=Math.max(0,16-(i-n)),s=window.setTimeout(function(){return t(i+o)},o),n=i+o,s},window.cancelAnimationFrame=function(t){return clearTimeout(t)})}(),String.prototype.hashCode=function(){var t,e,i,s,n;if(e=0,0===this.length)return e;for(i=s=0,n=this.length;0<=n?s<n:s>n;i=0<=n?++s:--s)t=this.charCodeAt(i),e=(e<<5)-e+t,e&=e;return e},_=function(t){var e,i;for(e=Math.floor(t/3600),i=Math.floor((t-3600*e)/60),t-=3600*e+60*i,t+="",i+="";i.length<2;)i="0"+i;for(;t.length<2;)t="0"+t;return e=e?e+":":"",e+i+":"+t},m=function(){var t,e,i;return e=1<=arguments.length?y.call(arguments,0):[],i=e[0],t=e[1],g(i.toFixed(t))},x=function(t,e){var i,s,n;s={};for(i in t)C.call(t,i)&&(n=t[i],s[i]=n);for(i in e)C.call(e,i)&&(n=e[i],s[i]=n);return s},g=function(t){var e,i,s,n;for(t+="",i=t.split("."),s=i[0],n="",i.length>1&&(n="."+i[1]),e=/(\d+)(\d{3})/;e.test(s);)s=s.replace(e,"$1,$2");return s+n},v=function(t){return"#"===t.charAt(0)?t.substring(1,7):t},f=function(){function t(t,e){null==t&&(t=!0),this.clear=null==e||e,t&&AnimationUpdater.add(this)}return t.prototype.animationSpeed=32,t.prototype.update=function(t){var e;return null==t&&(t=!1),!(!t&&this.displayedValue===this.value)&&(this.ctx&&this.clear&&this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),e=this.value-this.displayedValue,Math.abs(e/this.animationSpeed)<=.001?this.displayedValue=this.value:this.displayedValue=this.displayedValue+e/this.animationSpeed,this.render(),!0)},t}(),c=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return b(e,t),e.prototype.displayScale=1,e.prototype.setTextField=function(t,e){return this.textField=t instanceof p?t:new p(t,e)},e.prototype.setMinValue=function(t,e){var i,s,n,o,a;if(this.minValue=t,null==e&&(e=!0),e){for(this.displayedValue=this.minValue,o=this.gp||[],a=[],s=0,n=o.length;s<n;s++)i=o[s],a.push(i.displayedValue=this.minValue);return a}},e.prototype.setOptions=function(t){return null==t&&(t=null),this.options=x(this.options,t),this.textField&&(this.textField.el.style.fontSize=t.fontSize+"px"),this.options.angle>.5&&(this.options.angle=.5),this.configDisplayScale(),this},e.prototype.configDisplayScale=function(){var t,e,i,s,n;return s=this.displayScale,this.options.highDpiSupport===!1?delete this.displayScale:(e=window.devicePixelRatio||1,t=this.ctx.webkitBackingStorePixelRatio||this.ctx.mozBackingStorePixelRatio||this.ctx.msBackingStorePixelRatio||this.ctx.oBackingStorePixelRatio||this.ctx.backingStorePixelRatio||1,this.displayScale=e/t),this.displayScale!==s&&(n=this.canvas.G__width||this.canvas.width,i=this.canvas.G__height||this.canvas.height,this.canvas.width=n*this.displayScale,this.canvas.height=i*this.displayScale,this.canvas.style.width=n+"px",this.canvas.style.height=i+"px",this.canvas.G__width=n,this.canvas.G__height=i),this},e}(f),p=function(){function t(t,e){this.el=t,this.fractionDigits=e}return t.prototype.render=function(t){return this.el.innerHTML=m(t.displayedValue,this.fractionDigits)},t}(),o=function(t){function e(t,e){this.elem=t,this.text=null!=e&&e,this.value=1*this.elem.innerHTML,this.text&&(this.value=0)}return b(e,t),e.prototype.displayedValue=0,e.prototype.value=0,e.prototype.setVal=function(t){return this.value=1*t},e.prototype.render=function(){var t;return t=this.text?_(this.displayedValue.toFixed(0)):g(m(this.displayedValue)),this.elem.innerHTML=t},e}(f),a={create:function(t){var e,i,s,n;for(n=[],i=0,s=t.length;i<s;i++)e=t[i],n.push(new o(e));return n}},d=function(t){function e(t){this.gauge=t,this.ctx=this.gauge.ctx,this.canvas=this.gauge.canvas,e.__super__.constructor.call(this,!1,!1),this.setOptions()}return b(e,t),e.prototype.displayedValue=0,e.prototype.value=0,e.prototype.options={strokeWidth:.035,length:.1,color:"#000000"},e.prototype.setOptions=function(t){return null==t&&(t=null),this.options=x(this.options,t),this.length=2*this.gauge.radius*this.gauge.options.radiusScale*this.options.length,this.strokeWidth=this.canvas.height*this.options.strokeWidth,this.maxValue=this.gauge.maxValue,this.minValue=this.gauge.minValue,this.animationSpeed=this.gauge.animationSpeed,this.options.angle=this.gauge.options.angle},e.prototype.render=function(){var t,e,i,s,n,o,a;return t=this.gauge.getAngle.call(this,this.displayedValue),o=Math.round(this.length*Math.cos(t)),a=Math.round(this.length*Math.sin(t)),s=Math.round(this.strokeWidth*Math.cos(t-Math.PI/2)),n=Math.round(this.strokeWidth*Math.sin(t-Math.PI/2)),e=Math.round(this.strokeWidth*Math.cos(t+Math.PI/2)),i=Math.round(this.strokeWidth*Math.sin(t+Math.PI/2)),this.ctx.fillStyle=this.options.color,this.ctx.beginPath(),this.ctx.arc(0,0,this.strokeWidth,0,2*Math.PI,!0),this.ctx.fill(),this.ctx.beginPath(),this.ctx.moveTo(s,n),this.ctx.lineTo(o,a),this.ctx.lineTo(e,i),this.ctx.fill()},e}(f),r=function(){function t(t){this.elem=t}return t.prototype.updateValues=function(t){return this.value=t[0],this.maxValue=t[1],this.avgValue=t[2],this.render()},t.prototype.render=function(){var t,e;return this.textField&&this.textField.text(m(this.value)),0===this.maxValue&&(this.maxValue=2*this.avgValue),e=this.value/this.maxValue*100,t=this.avgValue/this.maxValue*100,s(".bar-value",this.elem).css({width:e+"%"}),s(".typical-value",this.elem).css({width:t+"%"})},t}(),u=function(t){function e(t){var i,s;this.canvas=t,e.__super__.constructor.call(this),this.percentColors=null,"undefined"!=typeof G_vmlCanvasManager&&(this.canvas=window.G_vmlCanvasManager.initElement(this.canvas)),this.ctx=this.canvas.getContext("2d"),i=this.canvas.clientHeight,s=this.canvas.clientWidth,this.canvas.height=i,this.canvas.width=s,this.gp=[new d(this)],this.setOptions(),this.render()}return b(e,t),e.prototype.elem=null,e.prototype.value=[20],e.prototype.maxValue=80,e.prototype.minValue=0,e.prototype.displayedAngle=0,e.prototype.displayedValue=0,e.prototype.lineWidth=40,e.prototype.paddingTop=.1,e.prototype.paddingBottom=.1,e.prototype.percentColors=null,e.prototype.options={colorStart:"#6fadcf",colorStop:void 0,gradientType:0,strokeColor:"#e0e0e0",pointer:{length:.8,strokeWidth:.035},angle:.15,lineWidth:.44,radiusScale:1,fontSize:40,limitMax:!1,limitMin:!1},e.prototype.setOptions=function(t){var i,s,n,o,a;for(null==t&&(t=null),e.__super__.setOptions.call(this,t),this.configPercentColors(),this.extraPadding=0,this.options.angle<0&&(o=Math.PI*(1+this.options.angle),this.extraPadding=Math.sin(o)),this.availableHeight=this.canvas.height*(1-this.paddingTop-this.paddingBottom),this.lineWidth=this.availableHeight*this.options.lineWidth,this.radius=(this.availableHeight-this.lineWidth/2)/(1+this.extraPadding),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),a=this.gp,s=0,n=a.length;s<n;s++)i=a[s],i.setOptions(this.options.pointer),i.render();return this},e.prototype.configPercentColors=function(){var t,e,i,s,n,o,a;if(this.percentColors=null,void 0!==this.options.percentColors){for(this.percentColors=new Array,o=[],i=s=0,n=this.options.percentColors.length-1;0<=n?s<=n:s>=n;i=0<=n?++s:--s)a=parseInt(v(this.options.percentColors[i][1]).substring(0,2),16),e=parseInt(v(this.options.percentColors[i][1]).substring(2,4),16),t=parseInt(v(this.options.percentColors[i][1]).substring(4,6),16),o.push(this.percentColors[i]={pct:this.options.percentColors[i][0],color:{r:a,g:e,b:t}});return o}},e.prototype.set=function(t){var e,i,s,n,o,a,r;if(t instanceof Array||(t=[t]),t.length>this.gp.length)for(i=s=0,a=t.length-this.gp.length;0<=a?s<a:s>a;i=0<=a?++s:--s)e=new d(this),e.setOptions(this.options.pointer),this.gp.push(e);else t.length<this.gp.length&&(this.gp=this.gp.slice(this.gp.length-t.length));for(i=0,n=0,o=t.length;n<o;n++)r=t[n],r>this.maxValue?this.options.limitMax?r=this.maxValue:this.maxValue=r+1:r<this.minValue&&(this.options.limitMin?r=this.minValue:this.minValue=r-1),this.gp[i].value=r,this.gp[i++].setOptions({minValue:this.minValue,maxValue:this.maxValue,angle:this.options.angle});return this.value=Math.max(Math.min(t[t.length-1],this.maxValue),this.minValue),AnimationUpdater.run()},e.prototype.getAngle=function(t){return(1+this.options.angle)*Math.PI+(t-this.minValue)/(this.maxValue-this.minValue)*(1-2*this.options.angle)*Math.PI},e.prototype.getColorForPercentage=function(t,e){var i,s,n,o,a,r,l;if(0===t)i=this.percentColors[0].color;else for(i=this.percentColors[this.percentColors.length-1].color,n=o=0,r=this.percentColors.length-1;0<=r?o<=r:o>=r;n=0<=r?++o:--o)if(t<=this.percentColors[n].pct){e===!0?(l=this.percentColors[n-1]||this.percentColors[0],s=this.percentColors[n],a=(t-l.pct)/(s.pct-l.pct),i={r:Math.floor(l.color.r*(1-a)+s.color.r*a),g:Math.floor(l.color.g*(1-a)+s.color.g*a),b:Math.floor(l.color.b*(1-a)+s.color.b*a)}):i=this.percentColors[n].color;break}return"rgb("+[i.r,i.g,i.b].join(",")+")"},e.prototype.getColorForValue=function(t,e){var i;return i=(t-this.minValue)/(this.maxValue-this.minValue),this.getColorForPercentage(i,e)},e.prototype.renderStaticLabels=function(t,e,i,s){var n,o,a,r,l,c,h,u,d,p;for(this.ctx.save(),this.ctx.translate(e,i),n=t.font||"10px Times",c=/\d+\.?\d?/,l=n.match(c)[0],u=n.slice(l.length),o=parseFloat(l)*this.displayScale,this.ctx.font=o+u,this.ctx.fillStyle=t.color||"#000000",this.ctx.textBaseline="bottom",this.ctx.textAlign="center",h=t.labels,a=0,r=h.length;a<r;a++)p=h[a],d=this.getAngle(p)-3*Math.PI/2,this.ctx.rotate(d),this.ctx.fillText(m(p,t.fractionDigits),0,-s-this.lineWidth/2),this.ctx.rotate(-d);return this.ctx.restore()},e.prototype.render=function(){var t,e,i,s,n,o,a,r,l,c,h,u,d;if(u=this.canvas.width/2,s=this.canvas.height*this.paddingTop+this.availableHeight-(this.radius+this.lineWidth/2)*this.extraPadding,t=this.getAngle(this.displayedValue),this.textField&&this.textField.render(this),this.ctx.lineCap="butt",l=this.radius*this.options.radiusScale,this.options.staticLabels&&this.renderStaticLabels(this.options.staticLabels,u,s,l),this.options.staticZones){for(this.ctx.save(),this.ctx.translate(u,s),this.ctx.lineWidth=this.lineWidth,c=this.options.staticZones,n=0,a=c.length;n<a;n++)d=c[n],this.ctx.strokeStyle=d.strokeStyle,this.ctx.beginPath(),this.ctx.arc(0,0,l,this.getAngle(d.min),this.getAngle(d.max),!1),this.ctx.stroke();this.ctx.restore()}else void 0!==this.options.customFillStyle?e=this.options.customFillStyle(this):null!==this.percentColors?e=this.getColorForValue(this.displayedValue,!0):void 0!==this.options.colorStop?(e=0===this.options.gradientType?this.ctx.createRadialGradient(u,s,9,u,s,70):this.ctx.createLinearGradient(0,0,u,0),e.addColorStop(0,this.options.colorStart),e.addColorStop(1,this.options.colorStop)):e=this.options.colorStart,this.ctx.strokeStyle=e,this.ctx.beginPath(),this.ctx.arc(u,s,l,(1+this.options.angle)*Math.PI,t,!1),this.ctx.lineWidth=this.lineWidth,this.ctx.stroke(),this.ctx.strokeStyle=this.options.strokeColor,this.ctx.beginPath(),this.ctx.arc(u,s,l,t,(2-this.options.angle)*Math.PI,!1),this.ctx.stroke();for(this.ctx.translate(u,s),h=this.gp,o=0,r=h.length;o<r;o++)i=h[o],i.update(!0);return this.ctx.translate(-u,-s)},e}(c),l=function(t){function e(t){this.canvas=t,e.__super__.constructor.call(this),"undefined"!=typeof G_vmlCanvasManager&&(this.canvas=window.G_vmlCanvasManager.initElement(this.canvas)),this.ctx=this.canvas.getContext("2d"),this.setOptions(),this.render()}return b(e,t),e.prototype.lineWidth=15,e.prototype.displayedValue=0,e.prototype.value=33,e.prototype.maxValue=80,e.prototype.minValue=0,e.prototype.options={lineWidth:.1,colorStart:"#6f6ea0",colorStop:"#c0c0db",strokeColor:"#eeeeee",shadowColor:"#d5d5d5",angle:.35,radiusScale:1},e.prototype.getAngle=function(t){return(1-this.options.angle)*Math.PI+(t-this.minValue)/(this.maxValue-this.minValue)*(2+this.options.angle-(1-this.options.angle))*Math.PI},e.prototype.setOptions=function(t){return null==t&&(t=null),e.__super__.setOptions.call(this,t),this.lineWidth=this.canvas.height*this.options.lineWidth,this.radius=this.options.radiusScale*(this.canvas.height/2-this.lineWidth/2),this},e.prototype.set=function(t){return this.value=t,this.value>this.maxValue&&(this.maxValue=1.1*this.value),AnimationUpdater.run()},e.prototype.render=function(){var t,e,i,s,n,o;return t=this.getAngle(this.displayedValue),o=this.canvas.width/2,i=this.canvas.height/2,this.textField&&this.textField.render(this),e=this.ctx.createRadialGradient(o,i,39,o,i,70),e.addColorStop(0,this.options.colorStart),e.addColorStop(1,this.options.colorStop),s=this.radius-this.lineWidth/2,n=this.radius+this.lineWidth/2,this.ctx.strokeStyle=this.options.strokeColor,this.ctx.beginPath(),this.ctx.arc(o,i,this.radius,(1-this.options.angle)*Math.PI,(2+this.options.angle)*Math.PI,!1),this.ctx.lineWidth=this.lineWidth,this.ctx.lineCap="round",this.ctx.stroke(),this.ctx.strokeStyle=e,this.ctx.beginPath(),this.ctx.arc(o,i,this.radius,(1-this.options.angle)*Math.PI,t,!1),this.ctx.stroke()},e}(c),h=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return b(e,t),e.prototype.strokeGradient=function(t,e,i,s){var n;return n=this.ctx.createRadialGradient(t,e,i,t,e,s),n.addColorStop(0,this.options.shadowColor),n.addColorStop(.12,this.options._orgStrokeColor),n.addColorStop(.88,this.options._orgStrokeColor),n.addColorStop(1,this.options.shadowColor),n},e.prototype.setOptions=function(t){var i,s,n,o;return null==t&&(t=null),e.__super__.setOptions.call(this,t),o=this.canvas.width/2,i=this.canvas.height/2,s=this.radius-this.lineWidth/2,n=this.radius+this.lineWidth/2,this.options._orgStrokeColor=this.options.strokeColor,this.options.strokeColor=this.strokeGradient(o,i,s,n),this},e}(l),window.AnimationUpdater={elements:[],animId:null,addAll:function(t){var e,i,s,n;for(n=[],i=0,s=t.length;i<s;i++)e=t[i],n.push(AnimationUpdater.elements.push(e));return n},add:function(t){return AnimationUpdater.elements.push(t)},run:function(){var t,e,i,s,n;for(t=!0,n=AnimationUpdater.elements,i=0,s=n.length;i<s;i++)e=n[i],e.update()&&(t=!1);return t?cancelAnimationFrame(AnimationUpdater.animId):AnimationUpdater.animId=requestAnimationFrame(AnimationUpdater.run)}},"function"==typeof window.define&&null!=window.define.amd?(n=function(){return{Gauge:u,Donut:h,BaseDonut:l,TextRenderer:p}}.call(e,i,e,t),!(void 0!==n&&(t.exports=n))):"undefined"!=typeof t&&null!=t.exports?t.exports={Gauge:u,Donut:h,BaseDonut:l,TextRenderer:p}:(window.Gauge=u,window.Donut=h,window.BaseDonut=l,window.TextRenderer=p)}).call(this)}).call(e,i(1))},375:function(t,e,i){i(453);var s=i(134)(i(279),i(419),null,null);t.exports=s.exports},404:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("page-header",{attrs:{title:t.$t("reports.report"),breadcrumbs:t.breadcrumbs}}),t._v(" "),i("section",{staticClass:"content report"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-xs-12 col-md-10"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-3 col-xs-6"},[i("div",{staticClass:"description-block border-right"},[i("span",{staticClass:"description-text"},[t._v("EFFECTIVENESS")]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-xs-6 text-right"},[i("h5",{staticClass:"description-header"},[t._v(t._s(t.effectiveness.percentage)+"%")])]),t._v(" "),i("div",{staticClass:"col-xs-6 text-left"},[i("span",{staticClass:"description-percentage text-green"},[t._v("\n                                        "+t._s(t.effectiveness.victories)+"V\n                                    ")]),t._v(" "),i("br"),t._v(" "),i("span",{staticClass:"description-percentage text-red"},[t._v("\n                                        "+t._s(t.effectiveness.defeats)+"V\n                                    ")])])])])]),t._v(" "),i("div",{staticClass:"col-sm-3 col-xs-6"},[i("div",{staticClass:"description-block border-right"},[i("span",{staticClass:"description-text"},[t._v("VALID")]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-xs-6 text-right"},[i("h5",{staticClass:"description-header"},[t._v(t._s(t.valid.percentage)+"%")])]),t._v(" "),i("div",{staticClass:"col-xs-6 text-left"},[i("span",{staticClass:"description-percentage text-green"},[t._v("\n                                        "+t._s(t.valid.valid)+"\n                                    ")]),t._v(" "),i("br"),t._v(" "),i("span",{staticClass:"description-percentage text-red"},[t._v("\n                                        "+t._s(t.valid.noValid)+"\n\n                                    ")])])])])]),t._v(" "),i("div",{staticClass:"col-sm-3 col-xs-6"},[i("div",{staticClass:"description-block border-right"},[i("span",{staticClass:"description-text"},[t._v("AVERAGE")]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-xs-6 text-right"},[i("h5",{staticClass:"description-header"},[t._v(t._s(t.average.percentage)+"%")])]),t._v(" "),i("div",{staticClass:"col-xs-6 text-left"},[i("span",{staticClass:"description-percentage text-green"},[t._v("\n                                        "+t._s(t.average.given)+"\n                                    ")]),t._v(" "),i("br"),t._v(" "),i("span",{staticClass:"description-percentage text-red"},[t._v("\n                                        "+t._s(t.average.received)+"\n                                    ")])])])])]),t._v(" "),i("div",{staticClass:"col-sm-3 col-xs-6"},[i("div",{staticClass:"description-block border-right"},[i("span",{staticClass:"description-text"},[t._v("PERFECTION")]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-xs-6 text-right"},[i("h5",{staticClass:"description-header"},[t._v(t._s(t.perfection.percentage)+"%")])]),t._v(" "),i("div",{staticClass:"col-xs-6 text-left"},[i("span",{staticClass:"description-percentage text-green"},[t._v("\n                                        "+t._s(t.perfection.perfect)+"\n                                    ")]),t._v(" "),i("br"),t._v(" "),i("span",{staticClass:"description-percentage text-red"},[t._v("\n                                        "+t._s(t.perfection.imperfect)+"\n                                    ")])])])])])])]),t._v(" "),i("div",{staticClass:"col-xs-12 col-md-2"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-xs-12"},[i("div",{staticClass:"description-block"},[i("span",{staticClass:"description-text"},[t._v("TIME CONSUME")]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-xs-6 text-right"},[i("h5",{staticClass:"description-header"},[t._v(t._s(t.timeConsumed.percentage)+"%")])]),t._v(" "),i("div",{staticClass:"col-xs-6 text-left"},[i("span",{staticClass:"description-percentage text-green"},[t._v("\n                                        "+t._s(t.timeConsumed.timeConsumed)+"\n                                    ")]),t._v(" "),i("br"),t._v(" "),i("span",{staticClass:"description-percentage text-red"},[t._v("\n                                        "+t._s(t.timeConsumed.timeIdle)+"\n                                    ")])])])])])])])]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-xs-12 col-md-10"},[i("div",{staticClass:"nav-tabs-custom"},[i("ul",{staticClass:"nav nav-tabs"},t._l(t.pointVsTimeGraphs,function(e,s){return i("li",{class:{active:0==s}},[i("a",{attrs:{href:"#"+e.id,"data-toggle":"tab","aria-expanded":"false"}},[t._v("\n                                "+t._s(e.name)+"\n                            ")])])})),t._v(" "),i("div",{staticClass:"tab-content"},t._l(t.pointVsTimeGraphs,function(t,e){return i("div",{staticClass:"tab-pane",class:{active:0==e},attrs:{id:t.id}},[i("highcharts",{ref:t.id,refInFor:!0,attrs:{options:t.options}})],1)}))])]),t._v(" "),i("div",{staticClass:"col-md-2"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-xs-12 col-md-10 col-md-offset-1"},[i("gauge",{attrs:{value:t.offensiveGauge.data,color:"green",title:"Counteroffensive"}})],1)]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-xs-12 col-md-10 col-md-offset-1"},[i("gauge",{attrs:{value:t.defensiveGauge.data,color:"yellow",title:"Defensive"}})],1)]),t._v(" "),i("div",{staticClass:"row"
},[i("div",{staticClass:"col-xs-12 col-md-10 col-md-offset-1"},[i("gauge",{attrs:{value:t.counterOffensiveGauge.data,color:"red",title:"Offensive"}})],1)])])]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-xs-12 col-md-8"},[i("highcharts",{attrs:{options:t.pie}})],1),t._v(" "),i("div",{staticClass:"col-xs-12 col-md-4"},[i("highcharts",{attrs:{options:t.bar}})],1)])])],1)},staticRenderFns:[]}},419:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"gauge",attrs:{id:t.containerId}},[i("h4",{staticClass:"text-center"},[i("b",[t._v(t._s(t.title))])]),t._v(" "),i("canvas",{attrs:{id:t.elementId}}),t._v(" "),i("div",{staticClass:"goal-wrapper clearfix"},[i("span",{staticClass:"gauge-value pull-left",attrs:{id:t.textId}}),t._v(" "),i("span",{staticClass:"gauge-value pull-left"},[t._v("%")]),t._v(" "),i("span",{staticClass:"goal-value pull-right",attrs:{id:"goal-text"}},[t._v("100%")])])])},staticRenderFns:[]}},442:function(t,e,i){var s=i(356);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i(136)("09e5a1de",s,!0)},453:function(t,e,i){var s=i(367);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i(136)("668cb3bc",s,!0)}});