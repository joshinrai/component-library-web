(self["webpackChunk_lnpm_component_library_web"]=self["webpackChunk_lnpm_component_library_web"]||[]).push([[619],{99157:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return E}});var r,a,i,o,c,l,p=t(96162),s=t(51110),u=t(10957),m=t(2848),d=m.ZP.div(r||(r=(0,u.Z)(["\n  background-color: rgb(30, 30, 30);\n  margin: 0px;\n  overflow: hidden;\n  padding: 0px;\n\n  input, h1, a, span {\n    color: rgb(90, 90, 90);\n    font-family: 'Rubik', sans-serif;\n    font-weight: 400;\n    margin: 0px;\n    padding: 0px;\n  }\n\n  height: 40vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),g=m.ZP.div(a||(a=(0,u.Z)(["\n  background: linear-gradient(to bottom right, rgba(2, 99, 225, 1.0), rgba(235, 24, 54, 1.0));\n  border-radius: 22px;\n"]))),h=m.ZP.div(i||(i=(0,u.Z)(["\n  align-items: center;\n  background-color: rgb(30, 30, 30);\n  border-radius: 20px;\n  display: flex;\n  margin: 4px;\n  padding: 0px 20px;\n"]))),f=m.ZP.h1(o||(o=(0,u.Z)(["\n  height: 150px;\n  position: relative;\n  text-align: center;\n  width: 80px;\n\n  &.colon {\n    color: white;\n    font-size: 3em;\n    line-height: 150px;\n  }\n"]))),x=m.ZP.div(c||(c=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  left: 0px;\n  position: absolute;\n  top: 0px;\n  transition: top 200ms;\n  width: 80px;\n\n  top: ",";\n"])),(n=>{var e=n.top;return e})),v=m.ZP.span(l||(l=(0,u.Z)(["\n  color: white;\n  font-size: 2em;\n  height: 150px;\n  line-height: 150px;\n  opacity: 0.05;\n  transition: opacity 400ms, font-size 400ms;\n  width: 80px;\n\n  &.active {\n    font-size: 3em;\n    opacity: 1;\n  }\n"]))),b=n=>{var e=(0,p.useRef)(null),t=":"===n.char;if(t)return p.createElement(f,{className:"colon"},":");var r=parseInt(n.char),a=()=>{for(var n=[],t=0;t<=9;t++)n.push(p.createElement(v,{key:t,className:r===t?"active":""},t));var a=e.current?e.current.offsetHeight:0;return p.createElement(x,{top:"".concat(r*a*-1,"px")},n)};return p.createElement(f,{ref:e,className:"number"},a())},w=()=>{var n=(0,p.useState)(new Date),e=(0,s.Z)(n,2),t=e[0],r=e[1];(0,p.useEffect)((()=>{var n=setInterval((()=>{var n=new Date;n.getSeconds()!==t.getSeconds()&&r(n)}),100);return()=>{clearInterval(n)}}),[t]);var a=n=>n<10?"0".concat(n):n,i=n=>n%12===0?12:n%12,o=()=>{var n=+i(t.getHours()),e=+t.getMinutes(),r=+t.getSeconds();return"".concat(a(n),":").concat(a(e),":").concat(a(r))},c=()=>o().split("").map(((n,e)=>p.createElement(b,{key:e,char:n})));return p.createElement(g,null,p.createElement(h,null,c()))},Z=()=>p.createElement(d,null,p.createElement(w,null)),y=(0,p.memo)(Z),E=()=>p.createElement(y,null)}}]);