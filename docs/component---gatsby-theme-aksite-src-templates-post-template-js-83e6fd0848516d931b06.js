/*! For license information please see component---gatsby-theme-aksite-src-templates-post-template-js-83e6fd0848516d931b06.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"+Sw5":function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},"0qAl":function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},"5WRv":function(e,t,r){var n=r("iNmH"),o=r("Qatm"),a=r("Zhxd"),i=r("kluZ");e.exports=function(e){return n(e)||o(e)||a(e)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},"8Jek":function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)&&n.length){var i=o.apply(null,n);i&&e.push(i)}else if("object"===a)for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},"8lrx":function(e,t,r){var n=r("uUj8"),o=r("5WRv"),a=r("OvAC"),i=r("PE9J");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s=r("mXGw"),u=r("/FXl").mdx,d=r("U+ow").useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,a=i(e,["scope","children"]),c=d(t),p=s.useMemo((function(){if(!r)return null;var e=l({React:s,mdx:u},c),t=Object.keys(e),a=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(a)))}),[r,t]);return s.createElement(p,l({},a))}},Qatm:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},"V/cZ":function(e,t,r){e.exports={anchor:"post-module--anchor--2p1l9",post:"post-module--post--3fzt4",body:"post-module--body--w4sfD"}},Zhxd:function(e,t,r){var n=r("+Sw5");e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},fvRo:function(e,t,r){"use strict";r("mXGw");var n=r("Wbzz"),o=r("7sHS"),a=r("8PQZ"),i=r("8XCd"),c=r("6h0R");t.a=function(e){var t,r=e.to,l=e.children,s=e.display,u=void 0===s?"card":s,d=Object(n.useStaticQuery)("2470622091").allMdx.nodes.find((function(e){return e.fields.slug===r}));switch(u){case"text":return Object(c.a)(n.Link,{to:r},(null==d||null===(t=d.frontmatter)||void 0===t?void 0:t.title)||r);default:return void 0===d?Object(c.a)(i.a,null,Object(c.a)(n.Link,{to:r},Object(c.a)(a.a,null,l))):Object(c.a)(o.b,{node:d})}}},iNmH:function(e,t,r){var n=r("+Sw5");e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},j1kI:function(e,t,r){"use strict";var n=r("63Ad"),o=r("vdEC");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(r("mXGw")),i=(0,n(r("c9Um")).default)(a.createElement("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"}),"Launch");t.default=i},jRwh:function(e,t,r){var n=r("8lrx");e.exports={MDXRenderer:n}},kluZ:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},"sJ6/":function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return We}));var n=r("mXGw"),o=r.n(n),a=r("LVJ7"),i=r("6It8"),c=r("J5T5"),l=r("Wbzz"),s=r("/FXl"),u=r("jRwh"),d=r("JF+v"),p=r("V2/N"),f=r("xkWc"),b=r("XS4W"),h=r("dV/x"),m=r("Fcif"),y=r("PDtE"),v=r("Rx6o"),g=r("gbh0"),O=r("bJWG"),w=r("I9Y2"),j=Object(w.a)(n.createElement("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),x=Object(w.a)(n.createElement("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),k=Object(w.a)(n.createElement("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),S=Object(w.a)(n.createElement("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),C=Object(w.a)(n.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),P=r("oQEK"),M=r("mxPc"),E={success:n.createElement(j,{fontSize:"inherit"}),warning:n.createElement(x,{fontSize:"inherit"}),error:n.createElement(k,{fontSize:"inherit"}),info:n.createElement(S,{fontSize:"inherit"})},_=n.createElement(C,{fontSize:"small"}),z=n.forwardRef((function(e,t){var r=e.action,o=e.children,a=e.classes,i=e.className,c=e.closeText,l=void 0===c?"Close":c,s=e.color,u=e.icon,d=e.iconMapping,p=void 0===d?E:d,f=e.onClose,b=e.role,v=void 0===b?"alert":b,g=e.severity,w=void 0===g?"success":g,j=e.variant,x=void 0===j?"standard":j,k=Object(h.a)(e,["action","children","classes","className","closeText","color","icon","iconMapping","onClose","role","severity","variant"]);return n.createElement(O.a,Object(m.a)({role:v,square:!0,elevation:0,className:Object(y.a)(a.root,a["".concat(x).concat(Object(M.a)(s||w))],i),ref:t},k),!1!==u?n.createElement("div",{className:a.icon},u||p[w]||E[w]):null,n.createElement("div",{className:a.message},o),null!=r?n.createElement("div",{className:a.action},r):null,null==r&&f?n.createElement("div",{className:a.action},n.createElement(P.a,{size:"small","aria-label":l,title:l,color:"inherit",onClick:f},_)):null)})),A=Object(g.a)((function(e){var t="light"===e.palette.type?v.a:v.d,r="light"===e.palette.type?v.d:v.a;return{root:Object(m.a)({},e.typography.body2,{borderRadius:e.shape.borderRadius,backgroundColor:"transparent",display:"flex",padding:"6px 16px"}),standardSuccess:{color:t(e.palette.success.main,.6),backgroundColor:r(e.palette.success.main,.9),"& $icon":{color:e.palette.success.main}},standardInfo:{color:t(e.palette.info.main,.6),backgroundColor:r(e.palette.info.main,.9),"& $icon":{color:e.palette.info.main}},standardWarning:{color:t(e.palette.warning.main,.6),backgroundColor:r(e.palette.warning.main,.9),"& $icon":{color:e.palette.warning.main}},standardError:{color:t(e.palette.error.main,.6),backgroundColor:r(e.palette.error.main,.9),"& $icon":{color:e.palette.error.main}},outlinedSuccess:{color:t(e.palette.success.main,.6),border:"1px solid ".concat(e.palette.success.main),"& $icon":{color:e.palette.success.main}},outlinedInfo:{color:t(e.palette.info.main,.6),border:"1px solid ".concat(e.palette.info.main),"& $icon":{color:e.palette.info.main}},outlinedWarning:{color:t(e.palette.warning.main,.6),border:"1px solid ".concat(e.palette.warning.main),"& $icon":{color:e.palette.warning.main}},outlinedError:{color:t(e.palette.error.main,.6),border:"1px solid ".concat(e.palette.error.main),"& $icon":{color:e.palette.error.main}},filledSuccess:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.success.main},filledInfo:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.info.main},filledWarning:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.warning.main},filledError:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.error.main},icon:{marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9},message:{padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}}}),{name:"MuiAlert"})(z),R=r("fvRo"),L=r("j1kI"),W=r.n(L),N=r("8PQZ"),I=r("8XCd"),H=r("6h0R"),D=function(e){var t=e.children,r=e.to;return Object(H.a)(I.a,null,Object(H.a)("a",{href:r,target:"_blank",rel:"noreferrer"},Object(H.a)(N.a,null,t,Object(H.a)(W.a,{size:"small"}))))},V=r("7sHS"),X=function(e){var t=e.title,r=e.current,n=e.display,o=void 0===n?"card":n,a=Object(l.useStaticQuery)("2470622091").allMdx.nodes.filter((function(e){var r;return(null===(r=e.frontmatter.series)||void 0===r?void 0:r.title)===t})).sort((function(e,t){return e.frontmatter.series.number-t.frontmatter.series.number})),i=parseInt(r);switch(o){case"text":return Object(H.a)("ul",null,a.map((function(e){return Object(H.a)("li",{key:e.id},e.frontmatter.series.number===i?e.fields.postTitle:Object(H.a)(l.Link,{to:e.fields.slug},e.fields.postTitle))})));default:return Object(H.a)("nav",null,a.map((function(e){return Object(H.a)(V.b,{node:e,key:e.id,disableLink:e.frontmatter.series.number===i})})))}};var T,B={name:"19119fz",styles:"position:relative;display:inline-block;margin:1.5em 0;padding:7px 10px;min-width:120px;max-width:100%;color:#555;font-size:16px;background:#e0edff;border-radius:15px"},J=function(e){var t=e.children;e.tail;Object(H.a)("div",{css:B},Object(H.a)("p",null,t))},U=function(){return{Alert:A,Baloon:J,Link:l.Link,LinkPost:R.a,LinkExternal:D,Series:X}},Z=(T=function(e,t){return(T=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}T(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),F=function(e){function t(t){var r=e.call(this,t)||this;return r.name="AssertionError",r}return Z(t,e),t}(Error);function $(e,t){if(!e)throw new F(t)}function Q(e){var t=Object.entries(e).filter((function(e){var t=e[1];return null!=t})).map((function(e){var t=e[0],r=e[1];return encodeURIComponent(t)+"="+encodeURIComponent(String(r))}));return t.length>0?"?"+t.join("&"):""}var q=r("8Jek"),G=r.n(q),K=function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(t,r)};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),Y=function(){return(Y=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},ee=function(e,t,r,n){return new(r||(r=Promise))((function(o,a){function i(e){try{l(n.next(e))}catch(t){a(t)}}function c(e){try{l(n.throw(e))}catch(t){a(t)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,c)}l((n=n.apply(e,t||[])).next())}))},te=function(e,t){var r,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(c){a=[6,c],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},re=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},ne=function(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then},oe=function(e,t){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-e/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-t/2}},ae=function(e,t){return{top:(window.screen.height-t)/2,left:(window.screen.width-e)/2}};function ie(e,t,r){var n=t.height,o=t.width,a=re(t,["height","width"]),i=Y({height:n,width:o,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},a),c=window.open(e,"",Object.keys(i).map((function(e){return e+"="+i[e]})).join(", "));if(r)var l=window.setInterval((function(){try{(null===c||c.closed)&&(window.clearInterval(l),r(c))}catch(e){console.error(e)}}),1e3);return c}var ce=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.openShareDialog=function(e){var r=t.props,n=r.onShareWindowClose,o=r.windowHeight,a=void 0===o?400:o,i=r.windowPosition,c=void 0===i?"windowCenter":i,l=r.windowWidth,s=void 0===l?550:l;ie(e,Y({height:a,width:s},"windowCenter"===c?oe(s,a):ae(s,a)),n)},t.handleClick=function(e){return ee(t,void 0,void 0,(function(){var t,r,n,o,a,i,c,l,s,u;return te(this,(function(d){switch(d.label){case 0:return t=this.props,r=t.beforeOnClick,n=t.disabled,o=t.networkLink,a=t.onClick,i=t.url,c=t.openShareDialogOnClick,l=t.opts,s=o(i,l),n?[2]:(e.preventDefault(),r?(u=r(),ne(u)?[4,u]:[3,2]):[3,2]);case 1:d.sent(),d.label=2;case 2:return c&&this.openShareDialog(s),a&&a(e,s),[2]}}))}))},t}return K(t,e),t.prototype.render=function(){var e=this.props,t=(e.beforeOnClick,e.children),r=e.className,n=e.disabled,a=e.disabledStyle,i=e.forwardedRef,c=(e.networkLink,e.networkName),l=(e.onShareWindowClose,e.openShareDialogOnClick,e.opts,e.resetButtonStyle),s=e.style,u=(e.url,e.windowHeight,e.windowPosition,e.windowWidth,re(e,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),d=G()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!n,disabled:!!n},r),p=Y(Y(l?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},s),n&&a);return o.a.createElement("button",Y({},u,{"aria-label":u["aria-label"]||c,className:d,onClick:this.handleClick,ref:i,style:p}),t)},t.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},t}(n.Component),le=function(){return(le=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};var se=function(e,t,r,a){function i(n,i){var c=r(n),l=le({},n);return Object.keys(c).forEach((function(e){delete l[e]})),o.a.createElement(ce,le({},a,l,{forwardedRef:i,networkName:e,networkLink:t,opts:r(n)}))}return i.displayName="ShareButton-"+e,Object(n.forwardRef)(i)};var ue=se("facebook",(function(e,t){var r=t.quote,n=t.hashtag;return $(e,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+Q({u:e,quote:r,hashtag:n})}),(function(e){return{quote:e.quote,hashtag:e.hashtag}}),{windowWidth:550,windowHeight:400}),de=function(){return(de=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},pe=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function fe(e){var t=function(t){var r=t.bgStyle,n=t.borderRadius,a=t.iconFillColor,i=t.round,c=t.size,l=pe(t,["bgStyle","borderRadius","iconFillColor","round","size"]);return o.a.createElement("svg",de({viewBox:"0 0 64 64",width:c,height:c},l),i?o.a.createElement("circle",{cx:"32",cy:"32",r:"31",fill:e.color,style:r}):o.a.createElement("rect",{width:"64",height:"64",rx:n,ry:n,fill:e.color,style:r}),o.a.createElement("path",{d:e.path,fill:a}))};return t.defaultProps={bgStyle:{},borderRadius:0,iconFillColor:"white",size:64},t}var be=fe({color:"#3b5998",networkName:"facebook",path:"M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"});var he=se("twitter",(function(e,t){var r=t.title,n=t.via,o=t.hashtags,a=void 0===o?[]:o,i=t.related,c=void 0===i?[]:i;return $(e,"twitter.url"),$(Array.isArray(a),"twitter.hashtags is not an array"),$(Array.isArray(c),"twitter.related is not an array"),"https://twitter.com/share"+Q({url:e,text:r,via:n,hashtags:a.length>0?a.join(","):void 0,related:c.length>0?c.join(","):void 0})}),(function(e){return{hashtags:e.hashtags,title:e.title,via:e.via,related:e.related}}),{windowWidth:550,windowHeight:400}),me=fe({color:"#00aced",networkName:"twitter",path:"M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"});var ye={name:"17rtmzd",styles:"display:inline-block;padding-bottom:0.2em;padding-top:0.5em;margin-bottom:2em;box-shadow:2px 2px 1px rgb(0 0 0 / 20%)"},ve={name:"1ine0vd",styles:"margin-right:0.5em;margin-left:0.5em;display:inline-block"},ge=function(e){var t=e.title,r=e.url,n=e.iconSize,o=e.round;return Object(H.a)("nav",{css:ye},Object(H.a)("div",{css:ve},Object(H.a)(ue,{url:r,title:t},Object(H.a)(be,{size:n,round:o}))),Object(H.a)("div",{css:ve},Object(H.a)(he,{url:r,title:t},Object(H.a)(me,{size:n,round:o}))))};ge.defaultProps={iconSize:32,round:!0};var Oe=ge,we=r("V/cZ"),je=r.n(we),xe=r("UN18"),ke=r("G7Ko");var Se=Object(c.a)("h1",{target:"edu07is4"})({name:"11pr3dr",styles:"margin-bottom:0.5rem;padding:0.5em;font-weight:bold;background:linear-gradient(to bottom,  #4848aa 0%, #222277 100%);color:white"}),Ce=Object(c.a)("div",{target:"edu07is3"})({name:"1dvcxr3",styles:"padding:1rem"}),Pe=Object(c.a)("header",{target:"edu07is2"})({name:"1esi57r",styles:"box-shadow:0px 1px rgb(0 0 0 / 10%)"}),Me=Object(c.a)("main",{target:"edu07is1"})({name:"1gf76k2",styles:"margin-top:1rem;padding-bottom:1rem;padding-right:1rem"}),Ee=Object(c.a)("footer",{target:"edu07is0"})({name:"1yj4206",styles:"border-top:solid 1px;padding-top:1rem"}),_e={name:"y03uhw",styles:"margin-top:2em;margin-bottom:2em;box-shadow:2px 2px 1px rgb(0 0 0 / 20%)"},ze=function(e){var t=e.children;return Object(H.a)(s.MDXProvider,{components:U},Object(H.a)("div",{className:je.a.body},Object(H.a)(u.MDXRenderer,null,t)))},Ae=function(e){var t=e.nodes;return Object(H.a)("nav",null,Object(H.a)(p.a,{container:!0,spacing:3},t.slice(0,9).map((function(e){return Object(H.a)(p.a,{item:!0,xs:12,sm:6,key:e.id},Object(H.a)(V.b,{node:e}))}))))},Re=function(e){var t=e.prevPost,r=e.nextPost;return Object(H.a)("nav",{style:{marginBottom:"2rem"}},Object(H.a)(p.a,{container:!0},Object(H.a)(p.a,{item:!0,sm:4},Object(H.a)("h4",{style:{textAlign:"left"}},"《 PREV POST"),t&&Object(H.a)(V.b,{node:t})),Object(H.a)(p.a,{item:!0,sm:4}),Object(H.a)(p.a,{item:!0,sm:4},Object(H.a)("h4",{style:{textAlign:"right"}},"NEXT POST》"),r&&Object(H.a)(V.b,{node:r}))))},Le=function(e){var t=e.node,r=e.siblings,n=e.prevPost,o=e.nextPost,a=Object(l.useStaticQuery)("698804963"),i=Object(d.useLocation)().pathname;return Object(H.a)("div",{css:_e,className:je.a.post},Object(H.a)(Pe,null,Object(H.a)("div",null,t.frontmatter.date),Object(H.a)(Se,null,t.fields.postTitle),Object(H.a)(b.a,{directory:t.fields.directory}),Object(H.a)(xe.a,{node:t}),Object(H.a)(Ce,null,t.frontmatter.description)),Object(H.a)(Me,null,Object(H.a)(ze,null,t.body)),Object(H.a)(Ee,null,Object(H.a)(Oe,{url:""+a.site.siteMetadata.siteUrl+i,title:t.fields.postTitle}),Object(H.a)(Re,{prevPost:n,nextPost:o}),Object(H.a)(f.a,null),Object(H.a)("h3",null,"Siblings on '",Object(ke.a)(t.fields.directory),"'"),Object(H.a)(Ae,{nodes:r})))};function We(e){var t,r=e.data,n=e.pageContext;console.log("create/template: "+r.mdx.fields.slug);var o=r.mdx,c=n.breadcrumb.crumbs,l=null===(t=o.frontmatter.cover)||void 0===t?void 0:t.publicURL,s=r.allMdx.nodes.map((function(e){return e.id})).indexOf(o.id),u=s>0?r.allMdx.nodes[s-1]:null,d=s<r.allMdx.nodes.length?r.allMdx.nodes[s+1]:null,p=r.allMdx.nodes.filter((function(e){return e.id!==o.id&&e.fields.directory===o.fields.directory}));return Object(H.a)(i.a,{title:o.frontmatter.title,description:o.frontmatter.description||o.excerpt,image:l,tableOfContents:o.tableOfContents},Object(H.a)(a.Breadcrumb,{crumbs:c,crumbLabel:o.frontmatter.title}),Object(H.a)(Le,{node:o,siblings:p,prevPost:u,nextPost:d}))}},uUj8:function(e,t,r){var n=r("WI9V"),o=r("0qAl");function a(t,r,i){return o()?(e.exports=a=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=a=function(e,t,r){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return r&&n(a,r.prototype),a},e.exports.default=e.exports,e.exports.__esModule=!0),a.apply(null,arguments)}e.exports=a,e.exports.default=e.exports,e.exports.__esModule=!0}}]);
//# sourceMappingURL=component---gatsby-theme-aksite-src-templates-post-template-js-83e6fd0848516d931b06.js.map