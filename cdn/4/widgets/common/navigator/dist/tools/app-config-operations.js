System.register([],(function(o,e){return{execute:function(){o((()=>{"use strict";var o={d:(e,i)=>{for(var n in i)o.o(i,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:i[n]})},o:(o,e)=>Object.prototype.hasOwnProperty.call(o,e),r:o=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})}},e={};o.r(e),o.d(e,{default:()=>i});class i{constructor(){this.id="query-app-config-operation"}afterWidgetCopied(o,e,i,n,t){var l,d,u,r,v,s,a;if(!t)return n;const c=e.widgets[o],f=null==c?void 0:c.config,g=(null==t?void 0:t[null===(l=null==f?void 0:f.data)||void 0===l?void 0:l.section])||(null===(d=null==f?void 0:f.data)||void 0===d?void 0:d.section),p=null===(v=null===(u=null==e?void 0:e.sections)||void 0===u?void 0:u[null===(r=null==f?void 0:f.data)||void 0===r?void 0:r.section])||void 0===v?void 0:v.views,y=null===(a=null===(s=null==n?void 0:n.sections)||void 0===s?void 0:s[g])||void 0===a?void 0:a.views,w=[];return null==p||p.forEach(((o,e)=>{var i,n;(null===(n=null===(i=null==f?void 0:f.data)||void 0===i?void 0:i.views)||void 0===n?void 0:n.includes(o))&&(null==y?void 0:y[e])&&w.push(y[e])})),n.setIn(["widgets",i,"config","data","section"],g).setIn(["widgets",i,"config","data","views"],w)}widgetWillRemove(o){return o}}return e})())}}}));