/*! For license information please see component---src-templates-post-template-js-aef258386578ecb87e1d.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{J4bc:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return T}));var n,o=r("q1tI"),a=r.n(o),i=r("bSK8"),c=r("YwZP"),l=r("Bl7J"),s=r("rgsX"),u=r("VfMe"),f=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),p=function(e){function t(t){var r=e.call(this,t)||this;return r.name="AssertionError",r}return f(t,e),t}(Error);function h(e,t){if(!e)throw new p(t)}function d(e){var t=Object.entries(e).filter((function(e){var t=e[1];return null!=t})).map((function(e){var t=e[0],r=e[1];return encodeURIComponent(t)+"="+encodeURIComponent(String(r))}));return t.length>0?"?"+t.join("&"):""}var w=r("TSYQ"),b=r.n(w),y=function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(t,r)};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),v=function(){return(v=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},O=function(e,t,r,n){return new(r||(r=Promise))((function(o,a){function i(e){try{l(n.next(e))}catch(t){a(t)}}function c(e){try{l(n.throw(e))}catch(t){a(t)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,c)}l((n=n.apply(e,t||[])).next())}))},g=function(e,t){var r,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(c){a=[6,c],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},m=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},j=function(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then},k=function(e,t){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-e/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-t/2}},S=function(e,t){return{top:(window.screen.height-t)/2,left:(window.screen.width-e)/2}};function C(e,t,r){var n=t.height,o=t.width,a=m(t,["height","width"]),i=v({height:n,width:o,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},a),c=window.open(e,"",Object.keys(i).map((function(e){return e+"="+i[e]})).join(", "));if(r)var l=window.setInterval((function(){try{(null===c||c.closed)&&(window.clearInterval(l),r(c))}catch(e){console.error(e)}}),1e3);return c}var x=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.openShareDialog=function(e){var r=t.props,n=r.onShareWindowClose,o=r.windowHeight,a=void 0===o?400:o,i=r.windowPosition,c=void 0===i?"windowCenter":i,l=r.windowWidth,s=void 0===l?550:l;C(e,v({height:a,width:s},"windowCenter"===c?k(s,a):S(s,a)),n)},t.handleClick=function(e){return O(t,void 0,void 0,(function(){var t,r,n,o,a,i,c,l,s,u;return g(this,(function(f){switch(f.label){case 0:return t=this.props,r=t.beforeOnClick,n=t.disabled,o=t.networkLink,a=t.onClick,i=t.url,c=t.openShareDialogOnClick,l=t.opts,s=o(i,l),n?[2]:(e.preventDefault(),r?(u=r(),j(u)?[4,u]:[3,2]):[3,2]);case 1:f.sent(),f.label=2;case 2:return c&&this.openShareDialog(s),a&&a(e,s),[2]}}))}))},t}return y(t,e),t.prototype.render=function(){var e=this.props,t=(e.beforeOnClick,e.children),r=e.className,n=e.disabled,o=e.disabledStyle,i=e.forwardedRef,c=(e.networkLink,e.networkName),l=(e.onShareWindowClose,e.openShareDialogOnClick,e.opts,e.resetButtonStyle),s=e.style,u=(e.url,e.windowHeight,e.windowPosition,e.windowWidth,m(e,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),f=b()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!n,disabled:!!n},r),p=v(v(l?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},s),n&&o);return a.a.createElement("button",v({},u,{"aria-label":u["aria-label"]||c,className:f,onClick:this.handleClick,ref:i,style:p}),t)},t.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},t}(o.Component),P=function(){return(P=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};var _=function(e,t,r,n){function i(o,i){var c=r(o),l=P({},o);return Object.keys(c).forEach((function(e){delete l[e]})),a.a.createElement(x,P({},n,l,{forwardedRef:i,networkName:e,networkLink:t,opts:r(o)}))}return i.displayName="ShareButton-"+e,Object(o.forwardRef)(i)};var E=_("facebook",(function(e,t){var r=t.quote,n=t.hashtag;return h(e,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+d({u:e,quote:r,hashtag:n})}),(function(e){return{quote:e.quote,hashtag:e.hashtag}}),{windowWidth:550,windowHeight:400}),N=function(){return(N=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},W=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function I(e){var t=function(t){var r=t.bgStyle,n=t.borderRadius,o=t.iconFillColor,i=t.round,c=t.size,l=W(t,["bgStyle","borderRadius","iconFillColor","round","size"]);return a.a.createElement("svg",N({viewBox:"0 0 64 64",width:c,height:c},l),i?a.a.createElement("circle",{cx:"32",cy:"32",r:"31",fill:e.color,style:r}):a.a.createElement("rect",{width:"64",height:"64",rx:n,ry:n,fill:e.color,style:r}),a.a.createElement("path",{d:e.path,fill:o}))};return t.defaultProps={bgStyle:{},borderRadius:0,iconFillColor:"white",size:64},t}var A=I({color:"#3b5998",networkName:"facebook",path:"M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"});var R=_("twitter",(function(e,t){var r=t.title,n=t.via,o=t.hashtags,a=void 0===o?[]:o,i=t.related,c=void 0===i?[]:i;return h(e,"twitter.url"),h(Array.isArray(a),"twitter.hashtags is not an array"),h(Array.isArray(c),"twitter.related is not an array"),"https://twitter.com/share"+d({url:e,text:r,via:n,hashtags:a.length>0?a.join(","):void 0,related:c.length>0?c.join(","):void 0})}),(function(e){return{hashtags:e.hashtags,title:e.title,via:e.via,related:e.related}}),{windowWidth:550,windowHeight:400}),B=I({color:"#00aced",networkName:"twitter",path:"M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"}),z=r("OYfZ"),H=r.n(z),D=r("AeFk"),L=function(e){var t=e.title,r=e.url;return Object(D.a)("nav",{className:H.a.shareWrapper},Object(D.a)("div",{className:H.a.shareItem},Object(D.a)(E,{url:r,title:t},Object(D.a)(A,{size:32,round:!0}))),Object(D.a)("div",{className:H.a.shareItem},Object(D.a)(R,{url:r,title:t},Object(D.a)(B,{size:32,round:!0}))))},Y=r("tRbT"),q=function(e){var t=e.nodes;return Object(D.a)("nav",null,Object(D.a)(Y.a,{container:!0,spacing:3},t.slice(0,9).map((function(e){return Object(D.a)(Y.a,{item:!0,xs:12,sm:6,key:e.id},Object(D.a)(s.b,{node:e}))}))))};function T(e){var t=e.data,r=e.pageContext,n=t.mdx,o=r.breadcrumb.crumbs,a=Object(c.useLocation)().pathname;return console.log("create/template: "+n.fields.slug),Object(D.a)(l.a,{title:n.frontmatter.title,description:n.frontmatter.description||n.excerpt,image:n.frontmatter.image,node:n},Object(D.a)(i.Breadcrumb,{crumbs:o,crumbLabel:n.frontmatter.title}),Object(D.a)(s.a,{node:n}),Object(D.a)(L,{url:""+t.site.siteMetadata.siteUrl+a,title:n.frontmatter.title}),Object(D.a)("h4",null,"Siblings on '",Object(u.a)(n.fields.directory),"'"),Object(D.a)(q,{nodes:t.siblings.nodes.filter((function(e){return e.fields.slug!==n.fields.slug}))}))}},OYfZ:function(e,t,r){e.exports={shareWrapper:"share-module--shareWrapper--2eUw9",shareItem:"share-module--shareItem--3YU7Z"}},TSYQ:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)&&n.length){var i=o.apply(null,n);i&&e.push(i)}else if("object"===a)for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()}}]);
//# sourceMappingURL=component---src-templates-post-template-js-aef258386578ecb87e1d.js.map