(self.webpackChunkcampanaro_personal_website=self.webpackChunkcampanaro_personal_website||[]).push([[179],{175:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(81),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([e.id,".cover {\n  background-color: var(--black);\n  height: 100vh;\n  width: 100vw;\n}\n\n.cover > video {\n  object-fit: cover;\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n}\n\n.cover > canvas {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}",""]);const s=a},426:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(81),o=n.n(r),i=n(645),a=n.n(i),s=n(175),c=a()(o());c.i(s.Z),c.push([e.id,"",""]);const u=c},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],s=0;s<e.length;s++){var c=e[s],u=r.base?c[0]+r.base:c[0],l=i[u]||0,d="".concat(u," ").concat(l);i[u]=l+1;var f=n(d),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)t[f].references++,t[f].updater(p);else{var v=o(p,r);r.byIndex=s,t.splice(s,0,{identifier:d,updater:v,references:1})}a.push(d)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=n(i[a]);t[s].references--}for(var c=r(e,o),u=0;u<i.length;u++){var l=n(i[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=c}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},101:()=>{var e="#ffffff",t={X:0,get size(){return this.X},set size(e){this.X=e}},n=function(){document.body.clientWidth>document.body.clientHeight?t.size=document.body.clientWidth/8:t.size=document.body.clientHeight/8},r=function(){var e=document.createElement("canvas");return e.setAttribute("id","logo"),document.getElementById("cover").appendChild(e),i()},o=function(){return document.getElementById("logo")},i=function(){n();var r=t.size,i=r,a=r,s=r/2,c=.1*r,u=o();if(null==u?void 0:u.getContext){var l=u.getContext("2d");l.canvas.height=i,l.canvas.width=a,l.beginPath(),l.moveTo(s,2*c),l.lineTo(a-c,i-c),l.lineTo(c,i-c),l.fillStyle=e,l.fill(),l.beginPath(),l.moveTo(s,c),l.lineTo(a-c,i-2*c),l.lineTo(c,i-2*c),l.closePath(),l.strokeStyle=e,l.stroke()}};r(),addEventListener("resize",(function(){n(),o().remove(),r()}))},549:(e,t,n)=>{"use strict";var r=n(379),o=n.n(r),i=n(795),a=n.n(i),s=n(569),c=n.n(s),u=n(565),l=n.n(u),d=n(216),f=n.n(d),p=n(589),v=n.n(p),h=n(426),m={};m.styleTagTransform=v(),m.setAttributes=l(),m.insert=c().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=f(),o()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals,n(101)}},e=>{e(e.s=549)}]);