/*! For license information please see 193d4e28e1c288305887755785c2e9b76e9c9d68-5e76258783eb7d9737aa.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"0xPK":function(t,e,r){t.exports={anchor:"post-module--anchor--ekH8G",post:"post-module--post--23aoh",header:"post-module--header--2gKR7",title:"post-module--title--37tBS",description:"post-module--description--3kXWk",excerpt:"post-module--excerpt--3ykE3"}},"A2+M":function(t,e,r){var n=r("X8hv");t.exports={MDXRenderer:n}},AjCI:function(t,e,r){"use strict";var n=r("TqRt"),o=r("284h");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(r("q1tI")),i=(0,n(r("8/g6")).default)(a.createElement("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"}),"Launch");e.default=i},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},Ijbi:function(t,e,r){var n=r("WkPL");t.exports=function(t){if(Array.isArray(t))return n(t)}},RIqP:function(t,e,r){var n=r("Ijbi"),o=r("EbDI"),a=r("ZhPi"),i=r("Bnag");t.exports=function(t){return n(t)||o(t)||a(t)||i()}},SksO:function(t,e){function r(e,n){return t.exports=r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},r(e,n)}t.exports=r},TSYQ:function(t,e,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var a=typeof n;if("string"===a||"number"===a)t.push(n);else if(Array.isArray(n)&&n.length){var i=o.apply(null,n);i&&t.push(i)}else if("object"===a)for(var c in n)r.call(n,c)&&n[c]&&t.push(c)}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(n=function(){return o}.apply(e,[]))||(t.exports=n)}()},WkPL:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}},X8hv:function(t,e,r){var n=r("sXyB"),o=r("RIqP"),a=r("lSNA"),i=r("8OQS");function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var u=r("q1tI"),s=r("7ljp").mdx,f=r("BfwJ").useMDXScope;t.exports=function(t){var e=t.scope,r=t.children,a=i(t,["scope","children"]),c=f(e),p=u.useMemo((function(){if(!r)return null;var t=l({React:u,mdx:s},c),e=Object.keys(t),a=e.map((function(e){return t[e]}));return n(Function,["_fn"].concat(o(e),[""+r])).apply(void 0,[{}].concat(o(a)))}),[r,e]);return u.createElement(p,l({},a))}},ZhPi:function(t,e,r){var n=r("WkPL");t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}},b48C:function(t,e){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}},rgsX:function(t,e,r){"use strict";r.d(e,"a",(function(){return at}));var n=r("q1tI"),o=r.n(n),a=r("Wbzz"),i=r("7ljp"),c=r("A2+M"),l=r("YwZP"),u=r("/XqB"),s=r("ba4q"),f=r("9eSz"),p=r.n(f),d=r("AeFk"),h=function(t){var e=t.filename,r=(t.maxWidth,Object(a.useStaticQuery)("1004912137").images.nodes.find((function(t){return t.relativePath===e})));return r?Object(d.a)(p.a,{fluid:r.childImageSharp.fluid}):Object(d.a)("span",null,"NO SUCH IMAGE: ",e)},b=r("aTPL"),y=function(t){var e=t.to,r=Object(a.useStaticQuery)("732728802").allMdx.nodes.find((function(t){return t.fields.slug===e}));return void 0===r?Object(d.a)("div",null,"NO SUCH SLUG: ",e):Object(d.a)(b.b,{node:r})},v=r("DZdY"),w=r("AjCI"),O=r.n(w);var m,g=Object(v.a)("div",{target:"e1gvjljz0",label:"StyledLink"})({name:"c04efe",styles:"padding:1rem;box-shadow:2px 2px 1px rgb(0 0 0 / 20%);img{width:100px;height:100px;object-fit:cover;float:left;margin-bottom:0px;background-color:#ccc;}"}),j={Image:h,LinkPost:y,LinkExternal:function(t){var e=t.children,r=t.to;return Object(d.a)("div",{css:u.b},Object(d.a)("a",{href:r,target:"_blank",rel:"noreferrer"},Object(d.a)(g,null,e,Object(d.a)(O.a,{size:"small"}))))}},k=(m=function(t,e){return(m=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}m(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),x=function(t){function e(e){var r=t.call(this,e)||this;return r.name="AssertionError",r}return k(e,t),e}(Error);function S(t,e){if(!t)throw new x(e)}function P(t){var e=Object.entries(t).filter((function(t){var e=t[1];return null!=e})).map((function(t){var e=t[0],r=t[1];return encodeURIComponent(e)+"="+encodeURIComponent(String(r))}));return e.length>0?"?"+e.join("&"):""}var C=r("TSYQ"),_=r.n(C),I=function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),A=function(){return(A=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},E=function(t,e,r,n){return new(r||(r=Promise))((function(o,a){function i(t){try{l(n.next(t))}catch(e){a(e)}}function c(t){try{l(n.throw(t))}catch(e){a(e)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(i,c)}l((n=n.apply(t,e||[])).next())}))},N=function(t,e){var r,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=e.call(t,i)}catch(c){a=[6,c],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},R=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r},D=function(t){return!!t&&("object"==typeof t||"function"==typeof t)&&"function"==typeof t.then},z=function(t,e){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-t/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-e/2}},L=function(t,e){return{top:(window.screen.height-e)/2,left:(window.screen.width-t)/2}};function M(t,e,r){var n=e.height,o=e.width,a=R(e,["height","width"]),i=A({height:n,width:o,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},a),c=window.open(t,"",Object.keys(i).map((function(t){return t+"="+i[t]})).join(", "));if(r)var l=window.setInterval((function(){try{(null===c||c.closed)&&(window.clearInterval(l),r(c))}catch(t){console.error(t)}}),1e3);return c}var W=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.openShareDialog=function(t){var r=e.props,n=r.onShareWindowClose,o=r.windowHeight,a=void 0===o?400:o,i=r.windowPosition,c=void 0===i?"windowCenter":i,l=r.windowWidth,u=void 0===l?550:l;M(t,A({height:a,width:u},"windowCenter"===c?z(u,a):L(u,a)),n)},e.handleClick=function(t){return E(e,void 0,void 0,(function(){var e,r,n,o,a,i,c,l,u,s;return N(this,(function(f){switch(f.label){case 0:return e=this.props,r=e.beforeOnClick,n=e.disabled,o=e.networkLink,a=e.onClick,i=e.url,c=e.openShareDialogOnClick,l=e.opts,u=o(i,l),n?[2]:(t.preventDefault(),r?(s=r(),D(s)?[4,s]:[3,2]):[3,2]);case 1:f.sent(),f.label=2;case 2:return c&&this.openShareDialog(u),a&&a(t,u),[2]}}))}))},e}return I(e,t),e.prototype.render=function(){var t=this.props,e=(t.beforeOnClick,t.children),r=t.className,n=t.disabled,a=t.disabledStyle,i=t.forwardedRef,c=(t.networkLink,t.networkName),l=(t.onShareWindowClose,t.openShareDialogOnClick,t.opts,t.resetButtonStyle),u=t.style,s=(t.url,t.windowHeight,t.windowPosition,t.windowWidth,R(t,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),f=_()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!n,disabled:!!n},r),p=A(A(l?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},u),n&&a);return o.a.createElement("button",A({},s,{"aria-label":s["aria-label"]||c,className:f,onClick:this.handleClick,ref:i,style:p}),e)},e.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},e}(n.Component),B=function(){return(B=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};var H=function(t,e,r,a){function i(n,i){var c=r(n),l=B({},n);return Object.keys(c).forEach((function(t){delete l[t]})),o.a.createElement(W,B({},a,l,{forwardedRef:i,networkName:t,networkLink:e,opts:r(n)}))}return i.displayName="ShareButton-"+t,Object(n.forwardRef)(i)};var q=H("facebook",(function(t,e){var r=e.quote,n=e.hashtag;return S(t,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+P({u:t,quote:r,hashtag:n})}),(function(t){return{quote:t.quote,hashtag:t.hashtag}}),{windowWidth:550,windowHeight:400}),X=function(){return(X=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},T=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r};function U(t){var e=function(e){var r=e.bgStyle,n=e.borderRadius,a=e.iconFillColor,i=e.round,c=e.size,l=T(e,["bgStyle","borderRadius","iconFillColor","round","size"]);return o.a.createElement("svg",X({viewBox:"0 0 64 64",width:c,height:c},l),i?o.a.createElement("circle",{cx:"32",cy:"32",r:"31",fill:t.color,style:r}):o.a.createElement("rect",{width:"64",height:"64",rx:n,ry:n,fill:t.color,style:r}),o.a.createElement("path",{d:t.path,fill:a}))};return e.defaultProps={bgStyle:{},borderRadius:0,iconFillColor:"white",size:64},e}var V=U({color:"#3b5998",networkName:"facebook",path:"M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"});var F=H("twitter",(function(t,e){var r=e.title,n=e.via,o=e.hashtags,a=void 0===o?[]:o,i=e.related,c=void 0===i?[]:i;return S(t,"twitter.url"),S(Array.isArray(a),"twitter.hashtags is not an array"),S(Array.isArray(c),"twitter.related is not an array"),"https://twitter.com/share"+P({url:t,text:r,via:n,hashtags:a.length>0?a.join(","):void 0,related:c.length>0?c.join(","):void 0})}),(function(t){return{hashtags:t.hashtags,title:t.title,via:t.via,related:t.related}}),{windowWidth:550,windowHeight:400}),Q=U({color:"#00aced",networkName:"twitter",path:"M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"});var Y={name:"17rtmzd",styles:"display:inline-block;padding-bottom:0.2em;padding-top:0.5em;margin-bottom:2em;box-shadow:2px 2px 1px rgb(0 0 0 / 20%)"},G={name:"1ine0vd",styles:"margin-right:0.5em;margin-left:0.5em;display:inline-block"},Z=function(t){var e=t.title,r=t.url,n=t.iconSize,o=t.round;return Object(d.a)("nav",{css:Y},Object(d.a)("div",{css:G},Object(d.a)(q,{url:r,title:e},Object(d.a)(V,{size:n,round:o}))),Object(d.a)("div",{css:G},Object(d.a)(F,{url:r,title:e},Object(d.a)(Q,{size:n,round:o}))))};Z.defaultProps={iconSize:32,round:!0};var J=Z,K=r("0xPK"),$=r.n(K),tt=r("SYTO"),et=function(t){var e=t.node;return Object(d.a)("header",{className:$.a.header},Object(d.a)("div",{className:$.a.date},e.frontmatter.date),Object(d.a)("h1",{className:$.a.title},e.frontmatter.title),Object(d.a)(s.a,{directory:e.fields.directory}),Object(d.a)(tt.a,{node:e,className:"eyecatchImageWrapper"}),Object(d.a)("div",{className:$.a.description},e.frontmatter.description))},rt=function(t){var e=t.body;return console.log("mdx components",j),Object(d.a)(i.MDXProvider,{components:{}},Object(d.a)("div",{className:$.a.numbering_headings},Object(d.a)(c.MDXRenderer,null,e)))},nt=function(t){var e=t.node,r=Object(a.useStaticQuery)("698804963"),n=Object(l.useLocation)().pathname;return Object(d.a)("div",{className:$.a.post},Object(d.a)(et,{node:e}),Object(d.a)("main",null,Object(d.a)(rt,{body:e.body})),Object(d.a)("footer",null,Object(d.a)(J,{url:""+r.site.siteMetadata.siteUrl+n,title:e.frontmatter.title})))},ot=function(t){var e=t.node;return Object(d.a)(u.a,{to:e.fields.slug},Object(d.a)("div",{className:$.a.post},Object(d.a)(et,{node:e}),Object(d.a)("main",{className:$.a.excerpt},e.excerpt)))},at=function(t){var e=t.node;return t.excerptify?Object(d.a)(ot,{node:e}):Object(d.a)(nt,{node:e})};e.b=at},sXyB:function(t,e,r){var n=r("SksO"),o=r("b48C");function a(e,r,i){return o()?t.exports=a=Reflect.construct:t.exports=a=function(t,e,r){var o=[null];o.push.apply(o,e);var a=new(Function.bind.apply(t,o));return r&&n(a,r.prototype),a},a.apply(null,arguments)}t.exports=a}}]);
//# sourceMappingURL=193d4e28e1c288305887755785c2e9b76e9c9d68-5e76258783eb7d9737aa.js.map