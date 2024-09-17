System.register(["jimu-core","jimu-ui","jimu-arcgis","esri/layers/FeatureLayer","esri/smartMapping/renderers/color","esri/smartMapping/symbology/color"],(function(e,t){var n={},r={},a={},o={},i={},s={};return{setters:[function(e){n.DataSourceComponent=e.DataSourceComponent,n.React=e.React,n.classNames=e.classNames},function(e){r.Button=e.Button,r.Label=e.Label,r.Loading=e.Loading,r.NumericInput=e.NumericInput,r.Slider=e.Slider},function(e){a.JimuMapViewComponent=e.JimuMapViewComponent},function(e){o.default=e.default},function(e){i.default=e.default},function(e){s.getSchemeByName=e.getSchemeByName}],execute:function(){e((()=>{var e={6729:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(8081),a=n.n(r),o=n(3645),i=n.n(o)()(a());i.push([e.id,".scoring-widget-container{padding:10px;display:flex;flex-direction:column}.scoring-widget-content{max-width:600px;margin:0 auto;overflow-y:auto;flex-grow:1}.sum-display{font-weight:bold;margin-top:20px;margin-bottom:15px}.sum-error{color:red}.buttons{display:flex;justify-content:space-between;margin-top:20px}.reset-button,.apply-button{min-width:100px}.slider-container{margin-bottom:15px}.slider-input-container{display:flex;flex-direction:column;align-items:stretch}.slider{width:100%;margin-bottom:5px}.numeric-input-lock-container{display:flex;align-items:center}.slider-input{width:80px;margin-right:5px}.lock-button{padding:4px;background:none;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center}.lock-button:hover{background-color:#f0f0f0}",""]);const s=i},3645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&i[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),t.push(u))}},t}},8081:e=>{"use strict";e.exports=function(e){return e[1]}},3379:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],u=o[l]||0,d="".concat(l," ").concat(u);o[l]=u+1;var m=n(d),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)t[m].references++,t[m].updater(p);else{var f=a(p,r);r.byIndex=s,t.splice(s,0,{identifier:d,updater:f,references:1})}i.push(d)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=n(o[i]);t[s].references--}for(var c=r(e,a),l=0;l<o.length;l++){var u=n(o[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}o=c}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},9216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},3565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},7795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},4589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},840:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M7.5 0A3.5 3.5 0 0 1 11 3.5V6h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1V3.5A3.5 3.5 0 0 1 7.5 0M5 6h5V3.5a2.5 2.5 0 0 0-2.336-2.495L7.5 1a2.5 2.5 0 0 0-2.495 2.336L5 3.5zm6 1H3v8h9V7zm-3.5 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" clip-rule="evenodd"></path></svg>'},7322:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M16 3.5a3.5 3.5 0 1 0-7 0V6H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-2V3.5l.005-.164A2.5 2.5 0 0 1 12.5 1l.164.005A2.5 2.5 0 0 1 15 3.5a.5.5 0 0 0 1 0M9 7H3v8h9V7h-1zm-1.5 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" clip-rule="evenodd"></path></svg>'},9818:e=>{"use strict";e.exports=o},1526:e=>{"use strict";e.exports=i},3899:e=>{"use strict";e.exports=s},6826:e=>{"use strict";e.exports=a},8891:e=>{"use strict";e.exports=n},726:e=>{"use strict";e.exports=r}},t={};function c(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,c),a.exports}c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},c.d=(e,t)=>{for(var n in t)c.o(t,n)&&!c.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.p="",c.nc=void 0;var l={};return c.p=window.jimuConfig.baseUrl,(()=>{"use strict";c.r(l),c.d(l,{__set_webpack_public_path__:()=>L,default:()=>I});var e=c(8891),t=c(726),n=c(7322),r=c.n(n);const a=t=>{const n=window.SVG,{className:a}=t,o=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(t,["className"]),i=(0,e.classNames)("jimu-icon jimu-icon-component",a);return n?e.React.createElement(n,Object.assign({className:i,src:r()},o)):e.React.createElement("svg",Object.assign({className:i},o))};var o=c(840),i=c.n(o);const s=t=>{const n=window.SVG,{className:r}=t,a=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(t,["className"]),o=(0,e.classNames)("jimu-icon jimu-icon-component",r);return n?e.React.createElement(n,Object.assign({className:o,src:i()},a)):e.React.createElement("svg",Object.assign({className:o},a))};var u=c(3379),d=c.n(u),m=c(7795),p=c.n(m),f=c(569),g=c.n(f),v=c(3565),y=c.n(v),h=c(9216),b=c.n(h),w=c(4589),x=c.n(w),S=c(6729),E={};E.styleTagTransform=x(),E.setAttributes=y(),E.insert=g().bind(null,"head"),E.domAPI=p(),E.insertStyleElement=b(),d()(S.Z,E),S.Z&&S.Z.locals&&S.Z.locals;var N=c(6826),O=c(9818),j=c(1526),R=c(3899),C=function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{c(r.next(e))}catch(e){o(e)}}function s(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,s)}c((r=r.apply(e,t||[])).next())}))};const{useState:k,useEffect:D}=e.React;function I(n){var r,o,i;const[c,l]=k({}),[u,d]=k(null),[m,p]=k(0),[f,g]=k(!1),[v,y]=k([]),[h,b]=k(null),[w,x]=k(!1),[S,E]=k(null),I=(null===(i=null===(o=null===(r=n.useDataSources)||void 0===r?void 0:r[0])||void 0===o?void 0:o.fields)||void 0===i?void 0:i.length)>0?{outFields:n.useDataSources[0].fields}:{},[L,M]=k([]),[_,F]=k({}),[T,V]=k(!1);D((()=>{S&&console.log("JimuMapView details:",{id:S.id,isActive:S.isActive,view:S.view})}),[S]),D((()=>{u&&(g(!0),V(!1),function(e){return C(this,void 0,void 0,(function*(){try{return yield u.queryCount(e)}catch(e){throw console.error("Error getting feature count:",e),e}}))}(I).then((e=>{(function(e){return C(this,void 0,void 0,(function*(){const t=2e3;return console.log(e),function r(a,o){return C(this,void 0,void 0,(function*(){if(o.length>=e)return o;const i={outFields:n.useDataSources[0].fields,returnGeometry:!0,start:a,num:t};try{const e=yield u.query(i),n=e.records.map((e=>e.feature)),s=[...o,...n];return e.records.length===t?r(a+t,s):s}catch(e){throw console.error("Error querying features:",e),e}}))}(0,[])}))})(e).then((e=>{y(JSON.stringify(e)),V(!0),g(!1)})).catch((e=>{"AbortError"!==e.name&&(console.error("Error fetching records:",e),alert("Error fetching records:")),g(!1)}))})).catch((e=>{console.error("Error getting feature count:",e),g(!1)})))}),[u]),D((()=>{if(u){const e=u.getSchema().fields,t=n.useDataSources[0].fields.map((t=>({name:t,alias:e[t].alias||t})));M(t),B(t)}}),[u]);const B=e=>{const t={},n=e.length,r=Math.floor(100/n*10)/10;let a=Number((100-r*n).toFixed(1));e.forEach(((n,o)=>{o===e.length-1?t[n.name]=Number((r+a).toFixed(1)):t[n.name]=r})),l(t),P(t)},P=e=>{const t=Object.values(e).reduce(((e,t)=>e+t),0);p(Number(t.toFixed(1)))},A=e=>{let t=0;return L.forEach((n=>{t+=(e.attributes[n.name]||0)*(c[n.name]/100)})),t},J=(e,t)=>{const n=Number(t.toFixed(1)),r=n-c[e],a=Object.assign(Object.assign({},c),{[e]:n}),o=Object.keys(a).filter((t=>t!==e&&!_[t])),i=Number((r/o.length).toFixed(1));o.forEach((e=>{a[e]=Number((a[e]-i).toFixed(1))}));const s=Object.values(a).reduce(((e,t)=>e+t),0);if(o.length>0){const e=o[o.length-1];a[e]=Number((a[e]+(100-s)).toFixed(1))}l(a),P(a)},U=()=>{B(L),F({}),h&&S&&(S.view.map.remove(h),b(null)),x(!1)},z=(e,t)=>C(this,void 0,void 0,(function*(){const n={basemapTheme:"light",geometryType:e.geometryType,theme:"high-to-low",name:"Blue 11"},r=R.getSchemeByName(n),a={layer:e,view:S.view,field:t,classificationMethod:"natural-breaks",numClasses:4,colorScheme:r},{renderer:o}=yield j.default.createClassBreaksRenderer(a);return o})),H=()=>C(this,void 0,void 0,(function*(){if(!u||!S)return void console.error("Data source or map view is not available");g(!0);const e=JSON.parse(v).map((e=>{const{geometry:t,attributes:n}=e;return e.geometry.type="polyline",{geometry:t,attributes:Object.assign(Object.assign({},n),{score:A(e)})}})),t=[{name:"OBJECTID",alias:"ObjectID",type:"oid"},{name:"score",alias:"Composite Score",type:"double"},...n.useDataSources[0].fields.map((e=>({name:e,alias:e,type:"double"})))],r=new O.default({title:`Composite Score Layer ${Date.now()}`,source:e,objectIdField:"OBJECTID",geometryType:"polyline",spatialReference:{wkid:102100},popupEnabled:!0,legendEnabled:!0,extent:S.view.extent,fields:t}),a=yield z(r,"score");r.renderer=a,h&&S.view.map.remove(h),S.view.map.add(r),b(r),x(!0),g(!1)})),q=()=>{var e;if(!h)return void console.error("No client-side layer available for export");const t=e=>{switch(e.type){case"point":return[e.x,e.y];case"polyline":return e.paths[0];case"polygon":return e.rings[0];default:return console.warn(`Unsupported geometry type: ${e.type}`),[]}},n={type:"FeatureCollection",crs:{type:"name",properties:{name:`EPSG:${h.spatialReference.wkid}`}},features:h.source.items.map((e=>({type:"Feature",id:e.attributes[h.objectIdField],geometry:{type:"polyline"===e.geometry.type?"LineString":e.geometry.type,coordinates:t(e.geometry)},properties:Object.assign(Object.assign({},e.attributes),{weightValues:Object.fromEntries(Object.entries(c).map((([e,t])=>[`${e}_weight`,t])))})})))};(null===(e=h.source.items[0])||void 0===e?void 0:e.attributes.Shape__Length)&&n.features.forEach((e=>{var t;e.properties.Shape__Length=null===(t=h.source.items.find((t=>t.attributes[h.objectIdField]===e.id)))||void 0===t?void 0:t.attributes.Shape__Length}));const r=JSON.stringify(n,null,2),a=new Blob([r],{type:"application/json"}),o=URL.createObjectURL(a),i=document.createElement("a");i.href=o,i.download=`mapa_composite_score_${(new Date).toISOString()}.geojson`,document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(o)};return n.useDataSources&&1===n.useDataSources.length&&n.useDataSources[0].fields&&n.useDataSources[0].fields.length>0?e.React.createElement("div",{className:"widget-scoring-widget"},e.React.createElement(e.DataSourceComponent,{useDataSource:n.useDataSources[0],onDataSourceCreated:d,widgetId:n.id,queryCount:!0},((n,r)=>e.React.createElement("div",{className:"widget-scoring-widget"},e.React.createElement("div",{className:"scoring-widget-container"},e.React.createElement("div",{className:"scoring-widget-content"},L.map((n=>e.React.createElement("div",{key:n.name,className:"slider-container"},e.React.createElement(t.Label,null,n.alias),e.React.createElement("div",{className:"slider-input-container"},e.React.createElement(t.Slider,{className:"slider",value:c[n.name]||0,onChange:e=>J(n.name,parseFloat(e.target.value)),min:0,max:100,step:.1,disabled:_[n.name]}),e.React.createElement("div",{className:"numeric-input-lock-container"},e.React.createElement(t.NumericInput,{className:"slider-input",value:c[n.name]||0,onChange:e=>J(n.name,e),min:0,max:100,step:.1,disabled:_[n.name]}),e.React.createElement(t.Button,{className:"lock-button",size:"sm",onClick:()=>(e=>{F((t=>Object.assign(Object.assign({},t),{[e]:!t[e]})))})(n.name),title:_[n.name]?"Unlock":"Lock"},_[n.name]?e.React.createElement(s,{size:"s"}):e.React.createElement(a,{size:"s"}))))))),e.React.createElement("div",{className:"sum-display "+(100!==m?"sum-error":"")},"Sum of weights: ",m),e.React.createElement("div",{className:"buttons"},e.React.createElement(t.Button,{className:"reset-button",onClick:U},"Reset"),e.React.createElement(t.Button,{className:"apply-button",onClick:H,disabled:100!==m||!T||f},f?"Loading Data...":"Apply",f&&e.React.createElement(t.Loading,{className:"loading-icon"})),e.React.createElement("div",{className:"export-button-container"},e.React.createElement(t.Button,{className:"export-button",onClick:q,disabled:!w},"Export GeoJSON")))))))),n.config.mapWidgetIds&&n.config.mapWidgetIds.length>0&&e.React.createElement(N.JimuMapViewComponent,{useMapWidgetId:n.config.mapWidgetIds[0],onActiveViewChange:e=>{e&&E(e)}})):e.React.createElement("h3",null,"Please configure the data source and select fields.")}function L(e){c.p=e}})(),l})())}}}));