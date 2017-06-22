/* 
* offside.js
* Minimal JavaScript kit without library dependencies to push things off-canvas using just class manipulation
* https://github.com/toomuchdesign/offside
*
* by Andrea Carraro
* Available under the MIT license
*/

!function(e,n,t){"use strict";var o=function(){function o(o){function r(){h(j,function(e){d(e,w)}),T||d(n.documentElement,"no-csstransforms3d"),d(N,S)}function i(){var o,r=n.createElement("p"),i={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};n.body.insertBefore(r,null);for(var s in i)r.style[s]!==t&&(r.style[s]="translate3d(1px,1px,1px)",o=e.getComputedStyle(r).getPropertyValue(i[s]));return n.body.removeChild(r),o!==t&&o.length>0&&"none"!==o}function s(e,n,o){var r=e!==t?g(e,!0):g(".offside",!0);return r!==!1?new f(r,n,o):null}function f(e,n,t){var o,r;r={buttonsSelector:"",slidingSide:"left",init:function(){},beforeOpen:function(){},afterOpen:function(){},beforeClose:function(){},afterClose:function(){},beforeDestroy:function(){},afterDestroy:function(){}};for(o in n)r.hasOwnProperty(o)&&(r[o]=n[o]);var i=e,s=g(r.buttonsSelector),f=r.slidingSide,c="offside",l=c+"--"+f,b="is-open",S=O+"--is-open",w=O+"--is-"+f,C=t||0,T=function(){v(L,C)===!1?j():I()},j=function(){r.beforeOpen(),E&&(E=!1,a()),u(),d(N,S),d(N,w),d(i,b),L.push(C),r.afterOpen()},I=function(){var e=v(L,C);e!==!1&&(r.beforeClose(),m(N,S),m(N,w),m(i,b),L.splice(e,1),r.afterClose())},k=function(){u()},A=function(){r.beforeDestroy(),I(),h(s,function(e){y(e,"click",P)}),delete x[C],r.afterDestroy()},P=function(e){e.preventDefault(),T()},q=function(){D&&z(),d(i,c),d(i,l),h(s,function(e){p(e,"click",P)}),r.init()},z=function(){i||console.error('Offside alert: "offside" selector could not match any element'),s.length||console.error('Offside alert: "buttonsSelector" selector could not match any element')};this.toggle=function(){T()},this.open=function(){j()},this.close=function(){I()},this.closeAll=function(){k()},this.destroy=function(){A()},q()}var c,l,u=function(e){L.length>0&&(isNaN(e)?h(L,function(e){x[e].close()}):x[e].close())},a=function(){d(N,C)},d=function(e,n){e.classList?e.classList.add(n):e.className=(e.className+" "+n).trim()},m=function(e,n){e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," ")},p=function(e,n,t){e.addEventListener(n,t)},y=function(e,n,t){e.removeEventListener(n,t)},g=function(e,t){if(null!==e&&"object"==typeof e){if("nodeType"in e||b(e))return e}else if("string"==typeof e&&""!==e)return t===!0?n.querySelector(e):n.querySelectorAll(e);return!1},b=function(e){return"[object Array]"===Object.prototype.toString.call(e)?!0:!1},v=function(e,n){var t=e.indexOf(n);return t>-1?t:!1},h=function(e,n){for(var t=0;t<e.length;t++)n(e[t],t)};l={slidingElementsSelector:".offside-sliding-element",disableCss3dTransforms:!1,debug:!1};for(c in o)l.hasOwnProperty(c)&&(l[c]=o[c]);var O="offside-js",S=O+"--init",w="offside-sliding-element",C=O+"--interact",x=[],E=!0,T=l.disableCss3dTransforms?!1:i(),L=[],N=n.body,j=g(l.slidingElementsSelector),D=l.debug;return r(),{closeOpenOffside:function(){u()},getOffsideInstance:function(e,n){var t=x.length||0,o=s(e,n,t);return null!==o?x[t]=o:void 0}}}return{getInstance:function(n,t){return e.offside.factory||(e.offside.factory=o(t)),e.offside.factory.getOffsideInstance(n,t)}}}();"undefined"!=typeof module&&module.exports?module.exports=o.getInstance:e.offside=o.getInstance}(window,document);