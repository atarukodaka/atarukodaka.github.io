/*! For license information please see 193d4e28e1c288305887755785c2e9b76e9c9d68-90a2da96f07924946c8c.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"0xPK":function(t,e,r){t.exports={anchor:"post-module--anchor--ekH8G",post:"post-module--post--23aoh",header:"post-module--header--2gKR7",title:"post-module--title--37tBS",description:"post-module--description--3kXWk",excerpt:"post-module--excerpt--3ykE3"}},"A2+M":function(t,e,r){var n=r("X8hv");t.exports={MDXRenderer:n}},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},Ijbi:function(t,e,r){var n=r("WkPL");t.exports=function(t){if(Array.isArray(t))return n(t)}},RIqP:function(t,e,r){var n=r("Ijbi"),o=r("EbDI"),i=r("ZhPi"),a=r("Bnag");t.exports=function(t){return n(t)||o(t)||i(t)||a()}},SksO:function(t,e){function r(e,n){return t.exports=r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},r(e,n)}t.exports=r},TSYQ:function(t,e,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var i=typeof n;if("string"===i||"number"===i)t.push(n);else if(Array.isArray(n)&&n.length){var a=o.apply(null,n);a&&t.push(a)}else if("object"===i)for(var c in n)r.call(n,c)&&n[c]&&t.push(c)}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(n=function(){return o}.apply(e,[]))||(t.exports=n)}()},WkPL:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}},X8hv:function(t,e,r){var n=r("sXyB"),o=r("RIqP"),i=r("lSNA"),a=r("8OQS");function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var u=r("q1tI"),s=r("7ljp").mdx,f=r("BfwJ").useMDXScope;t.exports=function(t){var e=t.scope,r=t.children,i=a(t,["scope","children"]),c=f(e),p=u.useMemo((function(){if(!r)return null;var t=l({React:u,mdx:s},c),e=Object.keys(t),i=e.map((function(e){return t[e]}));return n(Function,["_fn"].concat(o(e),[""+r])).apply(void 0,[{}].concat(o(i)))}),[r,e]);return u.createElement(p,l({},i))}},ZhPi:function(t,e,r){var n=r("WkPL");t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}},b48C:function(t,e){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}},rgsX:function(t,e,r){"use strict";r.d(e,"a",(function(){return V}));var n,o=r("q1tI"),i=r.n(o),a=r("Wbzz"),c=r("7ljp"),l=r("A2+M"),u=r("YwZP"),s=r("jfgZ"),f=r("ba4q"),p=r("aTPL"),d=r("AeFk"),h=function(t){var e=t.slug,r=Object(a.useStaticQuery)("2306524324").allMdx.nodes.find((function(t){return t.fields.slug===e}));return void 0===r?Object(d.a)("div",null,"NO SUCH SLUG: ",e):Object(d.a)(p.b,{node:r})},b=r("tBDR"),y=function(){return{Image:b.a,PostLink:h}},w=(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),v=function(t){function e(e){var r=t.call(this,e)||this;return r.name="AssertionError",r}return w(e,t),e}(Error);function O(t,e){if(!t)throw new v(e)}function m(t){var e=Object.entries(t).filter((function(t){var e=t[1];return null!=e})).map((function(t){var e=t[0],r=t[1];return encodeURIComponent(e)+"="+encodeURIComponent(String(r))}));return e.length>0?"?"+e.join("&"):""}var g=r("TSYQ"),j=r.n(g),k=function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),S=function(){return(S=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},x=function(t,e,r,n){return new(r||(r=Promise))((function(o,i){function a(t){try{l(n.next(t))}catch(e){i(e)}}function c(t){try{l(n.throw(t))}catch(e){i(e)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(a,c)}l((n=n.apply(t,e||[])).next())}))},P=function(t,e){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(c){i=[6,c],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},C=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r},_=function(t){return!!t&&("object"==typeof t||"function"==typeof t)&&"function"==typeof t.then},R=function(t,e){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-t/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-e/2}},A=function(t,e){return{top:(window.screen.height-e)/2,left:(window.screen.width-t)/2}};function D(t,e,r){var n=e.height,o=e.width,i=C(e,["height","width"]),a=S({height:n,width:o,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},i),c=window.open(t,"",Object.keys(a).map((function(t){return t+"="+a[t]})).join(", "));if(r)var l=window.setInterval((function(){try{(null===c||c.closed)&&(window.clearInterval(l),r(c))}catch(t){console.error(t)}}),1e3);return c}var N=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.openShareDialog=function(t){var r=e.props,n=r.onShareWindowClose,o=r.windowHeight,i=void 0===o?400:o,a=r.windowPosition,c=void 0===a?"windowCenter":a,l=r.windowWidth,u=void 0===l?550:l;D(t,S({height:i,width:u},"windowCenter"===c?R(u,i):A(u,i)),n)},e.handleClick=function(t){return x(e,void 0,void 0,(function(){var e,r,n,o,i,a,c,l,u,s;return P(this,(function(f){switch(f.label){case 0:return e=this.props,r=e.beforeOnClick,n=e.disabled,o=e.networkLink,i=e.onClick,a=e.url,c=e.openShareDialogOnClick,l=e.opts,u=o(a,l),n?[2]:(t.preventDefault(),r?(s=r(),_(s)?[4,s]:[3,2]):[3,2]);case 1:f.sent(),f.label=2;case 2:return c&&this.openShareDialog(u),i&&i(t,u),[2]}}))}))},e}return k(e,t),e.prototype.render=function(){var t=this.props,e=(t.beforeOnClick,t.children),r=t.className,n=t.disabled,o=t.disabledStyle,a=t.forwardedRef,c=(t.networkLink,t.networkName),l=(t.onShareWindowClose,t.openShareDialogOnClick,t.opts,t.resetButtonStyle),u=t.style,s=(t.url,t.windowHeight,t.windowPosition,t.windowWidth,C(t,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),f=j()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!n,disabled:!!n},r),p=S(S(l?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},u),n&&o);return i.a.createElement("button",S({},s,{"aria-label":s["aria-label"]||c,className:f,onClick:this.handleClick,ref:a,style:p}),e)},e.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},e}(o.Component),E=function(){return(E=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};var I=function(t,e,r,n){function a(o,a){var c=r(o),l=E({},o);return Object.keys(c).forEach((function(t){delete l[t]})),i.a.createElement(N,E({},n,l,{forwardedRef:a,networkName:t,networkLink:e,opts:r(o)}))}return a.displayName="ShareButton-"+t,Object(o.forwardRef)(a)};var W=I("facebook",(function(t,e){var r=e.quote,n=e.hashtag;return O(t,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+m({u:t,quote:r,hashtag:n})}),(function(t){return{quote:t.quote,hashtag:t.hashtag}}),{windowWidth:550,windowHeight:400}),B=function(){return(B=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},z=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r};function L(t){var e=function(e){var r=e.bgStyle,n=e.borderRadius,o=e.iconFillColor,a=e.round,c=e.size,l=z(e,["bgStyle","borderRadius","iconFillColor","round","size"]);return i.a.createElement("svg",B({viewBox:"0 0 64 64",width:c,height:c},l),a?i.a.createElement("circle",{cx:"32",cy:"32",r:"31",fill:t.color,style:r}):i.a.createElement("rect",{width:"64",height:"64",rx:n,ry:n,fill:t.color,style:r}),i.a.createElement("path",{d:t.path,fill:o}))};return e.defaultProps={bgStyle:{},borderRadius:0,iconFillColor:"white",size:64},e}var M=L({color:"#3b5998",networkName:"facebook",path:"M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"});var X=I("twitter",(function(t,e){var r=e.title,n=e.via,o=e.hashtags,i=void 0===o?[]:o,a=e.related,c=void 0===a?[]:a;return O(t,"twitter.url"),O(Array.isArray(i),"twitter.hashtags is not an array"),O(Array.isArray(c),"twitter.related is not an array"),"https://twitter.com/share"+m({url:t,text:r,via:n,hashtags:i.length>0?i.join(","):void 0,related:c.length>0?c.join(","):void 0})}),(function(t){return{hashtags:t.hashtags,title:t.title,via:t.via,related:t.related}}),{windowWidth:550,windowHeight:400}),H=L({color:"#00aced",networkName:"twitter",path:"M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"});var q={name:"17rtmzd",styles:"display:inline-block;padding-bottom:0.2em;padding-top:0.5em;margin-bottom:2em;box-shadow:2px 2px 1px rgb(0 0 0 / 20%)"},F={name:"1ine0vd",styles:"margin-right:0.5em;margin-left:0.5em;display:inline-block"},T=function(t){var e=t.title,r=t.url,n=t.iconSize,o=t.round;return Object(d.a)("nav",{css:q},Object(d.a)("div",{css:F},Object(d.a)(W,{url:r,title:e},Object(d.a)(M,{size:n,round:o}))),Object(d.a)("div",{css:F},Object(d.a)(X,{url:r,title:e},Object(d.a)(H,{size:n,round:o}))))};T.defaultProps={iconSize:32,round:!0};var U=T,Q=r("0xPK"),Y=r.n(Q),Z=function(t){var e=t.node;return Object(d.a)("header",{className:Y.a.header},Object(d.a)("div",{className:Y.a.date},e.frontmatter.date),Object(d.a)("h1",{className:Y.a.title},e.frontmatter.title),Object(d.a)(f.a,{directory:e.fields.directory}),e.frontmatter.image&&Object(d.a)("div",{className:"eyecatchImageWrapper"},Object(d.a)(b.a,{filename:e.frontmatter.image})),Object(d.a)("div",{className:Y.a.description},e.frontmatter.description))},G=function(t){var e=t.body;return Object(d.a)(c.MDXProvider,{components:y},Object(d.a)("div",{className:Y.a.numbering_headings},Object(d.a)(l.MDXRenderer,null,e)))},J=function(t){var e=t.node,r=Object(a.useStaticQuery)("698804963"),n=Object(u.useLocation)().pathname;return Object(d.a)("div",{className:Y.a.post},Object(d.a)(Z,{node:e}),Object(d.a)("main",null,Object(d.a)(G,{body:e.body})),Object(d.a)("footer",null,Object(d.a)(U,{url:""+r.site.siteMetadata.siteUrl+n,title:e.frontmatter.title})))},K=function(t){var e=t.node;return Object(d.a)(s.a,{to:e.fields.slug},Object(d.a)("div",{className:Y.a.post},Object(d.a)(Z,{node:e}),Object(d.a)("main",{className:Y.a.excerpt},e.excerpt)))},V=function(t){var e=t.node;return t.excerptify?Object(d.a)(K,{node:e}):Object(d.a)(J,{node:e})};V.defaultProps={excerptify:!1};e.b=V},sXyB:function(t,e,r){var n=r("SksO"),o=r("b48C");function i(e,r,a){return o()?t.exports=i=Reflect.construct:t.exports=i=function(t,e,r){var o=[null];o.push.apply(o,e);var i=new(Function.bind.apply(t,o));return r&&n(i,r.prototype),i},i.apply(null,arguments)}t.exports=i}}]);
//# sourceMappingURL=193d4e28e1c288305887755785c2e9b76e9c9d68-90a2da96f07924946c8c.js.map