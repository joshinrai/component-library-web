(self["webpackChunk_lnpm_component_library_web"]=self["webpackChunk_lnpm_component_library_web"]||[]).push([[496],{28316:function(e,o,l){"use strict";l.r(o),l.d(o,{default:function(){return j}});var n,r=l(96162),t=l(31764);(function(e){e["lightGreen"]="#dfd",e["green"]="#97f295",e["pink"]="#ffb6ba",e["red"]="#c33",e["blue"]="#3572b0",e["text"]="#4a4a4a",e["backCommon"]="#ddd",e["backLightCommon"]="#f1f1f1",e["backBlue"]="#c8e1ff",e["yellow"]="#d48806",e["backYellow"]="#fadb14",e["default"]="rgba(0, 0, 0, 0.85)"})(n||(n={}));var a,c,i,d,u,m=e=>{var o,l,r=e.compareItem,t=e.bool,a=e.compareRowColors,c=["background-color: "];return void 0===r?[...c,t?null!==(o=null===a||void 0===a?void 0:a[0])&&void 0!==o?o:n.lightGreen:null!==(l=null===a||void 0===a?void 0:a[1])&&void 0!==l?l:n.pink,";"].join(""):""},v=e=>{var o,l,r,t,a=e.value,c=e.compareValue,i=e.rowItemColors,d=e.bool,u=["color: "];return void 0===c?[...u,d?null!==(o=null===i||void 0===i?void 0:i[0])&&void 0!==o?o:n.green:null!==(l=null===i||void 0===i?void 0:i[1])&&void 0!==l?l:n.red,";"].join(""):a!==c?[...u,d?null!==(r=null===i||void 0===i?void 0:i[2])&&void 0!==r?r:n.blue:null!==(t=null===i||void 0===i?void 0:i[3])&&void 0!==t?t:n.yellow,";"].join(""):""},p=l(10957),s=l(2848),y=s.ZP.div(a||(a=(0,p.Z)(["\n  display: flex;\n  gap: 10px;\n"]))),b=s.ZP.table(c||(c=(0,p.Z)(["\n  flex: 1;\n  width: 100%;\n  height: max-content;\n  background-color: #fff;\n  border-collapse: collapse;\n"]))),w=s.ZP.tr(i||(i=(0,p.Z)(["\n  th {\n    background-color: #fafafa;\n    color: rgba(0, 0, 0, 0.85);\n    padding: 5px 10px;\n  }\n"]))),g=s.ZP.tr(d||(d=(0,p.Z)(["\n  margin: 2px 0;\n  ",";\n  color: '#4a4a4a';\n  td {\n    padding: 5px 10px;\n    text-align: center;\n    height: 32px;\n    line-height: 32px;\n  }\n"])),(e=>{var o=e.color;return o})),f=s.ZP.span(u||(u=(0,p.Z)(["\n  ",";\n"])),(e=>{var o=e.color;return o})),k=[],h=(0,r.memo)((e=>{var o,l=e.columns,n=!!k.length;return r.createElement("thead",null,r.createElement(w,null,null===l||void 0===l||null===(o=l.map)||void 0===o?void 0:o.call(l,((e,o)=>{var l=e.title,t=e.dataIndex;return n||k.push(t),r.createElement("th",{key:"".concat(l,"_").concat(o)},r.createElement("span",null,l))}))))})),I=(0,r.memo)((e=>{var o,l,n,a=e.source,c=e.compare,i=e.bool,d=e.crossRow,u=e.trStyle,p=e.clientRowStyle,s=e.compareRowColors,y=e.rowItemColors,b=e.clientItemStyle,w=e.rowItemRender,h=null!==(o=null===c||void 0===c||null===(l=c.reduce)||void 0===l?void 0:l.call(c,((e,o)=>(e.set(null===o||void 0===o?void 0:o.key,o),e)),new Map))&&void 0!==o?o:new Map;return r.createElement("tbody",null,null===a||void 0===a||null===(n=a.map)||void 0===n?void 0:n.call(a,((e,o)=>{var l,n,a,I,R={compareItem:d?null===h||void 0===h||null===(l=h.get)||void 0===l?void 0:l.call(h,null===e||void 0===e?void 0:e.key):null===c||void 0===c?void 0:c[o],compareRowColors:s,bool:i};return r.createElement(g,{key:[null!==(n=null===e||void 0===e?void 0:e.key)&&void 0!==n?n:+new Date,o].join("_"),color:null!==(a=null===p||void 0===p?void 0:p(R))&&void 0!==a?a:m(R),style:u},null===k||void 0===k||null===(I=k.map)||void 0===I?void 0:I.call(k,((l,n)=>{var a,u,m,p,s,g={value:null===e||void 0===e?void 0:e[l],compareValue:d?null===h||void 0===h||null===(a=h.get)||void 0===a||null===(u=a.call(h,null===e||void 0===e?void 0:e.key))||void 0===u?void 0:u[l]:null===c||void 0===c||null===(m=c[o])||void 0===m?void 0:m[l],rowItemColors:y,bool:i};return w?null===w||void 0===w?void 0:w((0,t.Z)({item:e,key:l},g)):r.createElement("td",{key:"".concat(l,"_").concat(o,"_").concat(n)},r.createElement(f,{color:null!==(p=null===b||void 0===b?void 0:b(g))&&void 0!==p?p:v(g)},null!==(s=null===e||void 0===e?void 0:e[l])&&void 0!==s?s:"-"))})))})))})),R=(0,r.memo)((e=>{var o=e.columns,l=e.source,n=e.compare,t=e.bool,a=e.crossRow,c=e.trStyle,i=e.clientRowStyle,d=e.compareRowColors,u=e.rowItemColors,m=e.clientItemStyle,v=e.rowItemRender;return r.createElement(b,null,r.createElement(h,{columns:o}),r.createElement(I,{source:l,compare:n,bool:t,crossRow:a,trStyle:c,clientRowStyle:i,compareRowColors:d,rowItemColors:u,clientItemStyle:m,rowItemRender:v}))})),S=e=>{var o=e.columns,l=e.dataSource,n=e.compareSource,t=e.bool,a=void 0!==t&&t,c=e.crossRow,i=void 0===c||c,d=e.trStyle,u=e.clientRowStyle,m=e.compareRowColors,v=e.rowItemColors,p=e.clientItemStyle,s=e.rowItemRender;return(0,r.useEffect)((()=>()=>{k.length=0}),[]),r.createElement(y,null,r.createElement(R,{columns:o,source:l,compare:n,bool:!a,crossRow:i,trStyle:d,clientRowStyle:u,compareRowColors:m,rowItemColors:v,clientItemStyle:p,rowItemRender:s}),r.createElement(R,{columns:o,source:n,compare:l,bool:!!a,crossRow:i,trStyle:d,clientRowStyle:u,compareRowColors:m,rowItemColors:v,clientItemStyle:p,rowItemRender:s}))},C=(0,r.memo)(S),E=[{title:"\u59d3\u540d",dataIndex:"name"},{title:"\u5e74\u9f84",dataIndex:"age"},{title:"\u6027\u522b",dataIndex:"gender"}],O=[{key:"tony",name:"tony",age:"17",gender:"\u7537"},{key:"\u5f20\u4e09",name:"\u5f20\u4e09",age:"18",gender:"\u5973"},{key:"\u674e\u56db",name:"\u674e\u56db",age:"19",gender:"\u7537"},{key:"honey",name:"honey",age:"21",gender:"\u5973"},{key:"\u738b\u4e94",name:"\u738b\u4e94",age:"20",gender:"\u5973"}],x=[{key:"tony",name:"tony",age:"17",gender:"\u7537"},{key:"\u674e\u56db",name:"\u674e\u56db",age:"19",gender:"\u7537"},{key:"pony",name:"pony",age:"21",gender:"\u5973"},{key:"honey",name:"honey1",age:"22",gender:"\u5973"}],j=()=>r.createElement(C,{columns:E,dataSource:O,compareSource:x})},31764:function(e,o,l){"use strict";function n(e,o,l){return o in e?Object.defineProperty(e,o,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[o]=l,e}function r(e,o){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),l.push.apply(l,n)}return l}function t(e){for(var o=1;o<arguments.length;o++){var l=null!=arguments[o]?arguments[o]:{};o%2?r(Object(l),!0).forEach((function(o){n(e,o,l[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(l,o))}))}return e}l.d(o,{Z:function(){return t}})}}]);