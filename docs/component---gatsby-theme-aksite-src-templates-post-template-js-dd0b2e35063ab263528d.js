/*! For license information please see component---gatsby-theme-aksite-src-templates-post-template-js-dd0b2e35063ab263528d.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"+Sw5":function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o},e.exports.default=e.exports,e.exports.__esModule=!0},"0qAl":function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},"5WRv":function(e,t,r){var o=r("iNmH"),n=r("Qatm"),a=r("Zhxd"),i=r("kluZ");e.exports=function(e){return o(e)||n(e)||a(e)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},"8Jek":function(e,t,r){var o;!function(){"use strict";var r={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var a=typeof o;if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o)&&o.length){var i=n.apply(null,o);i&&e.push(i)}else if("object"===a)for(var c in o)r.call(o,c)&&o[c]&&e.push(c)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(o=function(){return n}.apply(t,[]))||(e.exports=o)}()},"8lrx":function(e,t,r){var o=r("uUj8"),n=r("5WRv"),a=r("OvAC"),i=r("PE9J");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s=r("mXGw"),p=r("/FXl").mdx,u=r("U+ow").useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,a=i(e,["scope","children"]),c=u(t),d=s.useMemo((function(){if(!r)return null;var e=l({React:s,mdx:p},c),t=Object.keys(e),a=t.map((function(t){return e[t]}));return o(Function,["_fn"].concat(n(t),[""+r])).apply(void 0,[{}].concat(n(a)))}),[r,t]);return s.createElement(d,l({},a))}},BQn0:function(e,t,r){"use strict";var o=r("6CzD"),n=r("Fcif"),a=(r("W0B4"),r("nNlS"));var i=function(e){var t=function(t){var r=e(t);return t.css?Object(n.a)({},Object(a.a)(r,e(Object(n.a)({theme:t.theme},t.css))),function(e,t){var r={};return Object.keys(e).forEach((function(o){-1===t.indexOf(o)&&(r[o]=e[o])})),r}(t.css,[e.filterProps])):r};return t.propTypes={},t.filterProps=["css"].concat(Object(o.a)(e.filterProps)),t};var c=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var o=function(e){return t.reduce((function(t,r){var o=r(e);return o?Object(a.a)(t,o):t}),{})};return o.propTypes={},o.filterProps=t.reduce((function(e,t){return e.concat(t.filterProps)}),[]),o},l=r("mK0O"),s=r("Xcpm");function p(e,t){return t&&"string"==typeof t?t.split(".").reduce((function(e,t){return e&&e[t]?e[t]:null}),e):null}var u=function(e){var t=e.prop,r=e.cssProperty,o=void 0===r?e.prop:r,n=e.themeKey,a=e.transform,i=function(e){if(null==e[t])return null;var r=e[t],i=p(e.theme,n)||{};return Object(s.a)(e,r,(function(e){var t;return"function"==typeof i?t=i(e):Array.isArray(i)?t=i[e]||e:(t=p(i,e)||e,a&&(t=a(t))),!1===o?t:Object(l.a)({},o,t)}))};return i.propTypes={},i.filterProps=[t],i};function d(e){return"number"!=typeof e?e:"".concat(e,"px solid")}var f=c(u({prop:"border",themeKey:"borders",transform:d}),u({prop:"borderTop",themeKey:"borders",transform:d}),u({prop:"borderRight",themeKey:"borders",transform:d}),u({prop:"borderBottom",themeKey:"borders",transform:d}),u({prop:"borderLeft",themeKey:"borders",transform:d}),u({prop:"borderColor",themeKey:"palette"}),u({prop:"borderRadius",themeKey:"shape"})),b=c(u({prop:"displayPrint",cssProperty:!1,transform:function(e){return{"@media print":{display:e}}}}),u({prop:"display"}),u({prop:"overflow"}),u({prop:"textOverflow"}),u({prop:"visibility"}),u({prop:"whiteSpace"})),m=c(u({prop:"flexBasis"}),u({prop:"flexDirection"}),u({prop:"flexWrap"}),u({prop:"justifyContent"}),u({prop:"alignItems"}),u({prop:"alignContent"}),u({prop:"order"}),u({prop:"flex"}),u({prop:"flexGrow"}),u({prop:"flexShrink"}),u({prop:"alignSelf"}),u({prop:"justifyItems"}),u({prop:"justifySelf"})),h=c(u({prop:"gridGap"}),u({prop:"gridColumnGap"}),u({prop:"gridRowGap"}),u({prop:"gridColumn"}),u({prop:"gridRow"}),u({prop:"gridAutoFlow"}),u({prop:"gridAutoColumns"}),u({prop:"gridAutoRows"}),u({prop:"gridTemplateColumns"}),u({prop:"gridTemplateRows"}),u({prop:"gridTemplateAreas"}),u({prop:"gridArea"})),y=c(u({prop:"position"}),u({prop:"zIndex",themeKey:"zIndex"}),u({prop:"top"}),u({prop:"right"}),u({prop:"bottom"}),u({prop:"left"})),g=c(u({prop:"color",themeKey:"palette"}),u({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),v=u({prop:"boxShadow",themeKey:"shadows"});function w(e){return e<=1?"".concat(100*e,"%"):e}var O=u({prop:"width",transform:w}),j=u({prop:"maxWidth",transform:w}),x=u({prop:"minWidth",transform:w}),k=u({prop:"height",transform:w}),S=u({prop:"maxHeight",transform:w}),C=u({prop:"minHeight",transform:w}),P=(u({prop:"size",cssProperty:"width",transform:w}),u({prop:"size",cssProperty:"height",transform:w}),c(O,j,x,k,S,C,u({prop:"boxSizing"}))),M=r("rtwp"),E=c(u({prop:"fontFamily",themeKey:"typography"}),u({prop:"fontSize",themeKey:"typography"}),u({prop:"fontStyle",themeKey:"typography"}),u({prop:"fontWeight",themeKey:"typography"}),u({prop:"letterSpacing"}),u({prop:"lineHeight"}),u({prop:"textAlign"})),_=r("bnPJ"),A=r("qSp0"),z=function(e){var t=Object(_.a)(e);return function(e,r){return t(e,Object(n.a)({defaultTheme:A.a},r))}},R=i(c(f,b,m,h,y,g,v,P,M.b,E)),L=z("div")(R,{name:"MuiBox"});t.a=L},Qatm:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},"V/cZ":function(e,t,r){e.exports={anchor:"post-module--anchor--2p1l9",post:"post-module--post--3fzt4",body:"post-module--body--w4sfD"}},Zhxd:function(e,t,r){var o=r("+Sw5");e.exports=function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},fvRo:function(e,t,r){"use strict";r("mXGw");var o=r("Wbzz"),n=r("7sHS"),a=r("8PQZ"),i=r("8XCd"),c=r("6h0R");t.a=function(e){var t,r=e.to,l=e.children,s=e.display,p=void 0===s?"card":s,u=Object(o.useStaticQuery)("2470622091").allMdx.nodes.find((function(e){return e.fields.slug===r}));switch(p){case"text":return Object(c.a)(o.Link,{to:r},(null==u||null===(t=u.frontmatter)||void 0===t?void 0:t.title)||r);default:return void 0===u?Object(c.a)(i.a,null,Object(c.a)(o.Link,{to:r},Object(c.a)(a.a,null,l))):Object(c.a)(n.b,{node:u})}}},iNmH:function(e,t,r){var o=r("+Sw5");e.exports=function(e){if(Array.isArray(e))return o(e)},e.exports.default=e.exports,e.exports.__esModule=!0},j1kI:function(e,t,r){"use strict";var o=r("63Ad"),n=r("vdEC");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r("mXGw")),i=(0,o(r("c9Um")).default)(a.createElement("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"}),"Launch");t.default=i},jRwh:function(e,t,r){var o=r("8lrx");e.exports={MDXRenderer:o}},kluZ:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},"sJ6/":function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return He}));var o=r("mXGw"),n=r.n(o),a=r("LVJ7"),i=r("6It8"),c=r("J5T5"),l=r("Wbzz"),s=r("/FXl"),p=r("jRwh"),u=r("JF+v"),d=r("V2/N"),f=r("xkWc"),b=r("XS4W"),m=r("dV/x"),h=r("Fcif"),y=r("PDtE"),g=r("Rx6o"),v=r("gbh0"),w=r("bJWG"),O=r("I9Y2"),j=Object(O.a)(o.createElement("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),x=Object(O.a)(o.createElement("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),k=Object(O.a)(o.createElement("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),S=Object(O.a)(o.createElement("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),C=Object(O.a)(o.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),P=r("oQEK"),M=r("mxPc"),E={success:o.createElement(j,{fontSize:"inherit"}),warning:o.createElement(x,{fontSize:"inherit"}),error:o.createElement(k,{fontSize:"inherit"}),info:o.createElement(S,{fontSize:"inherit"})},_=o.createElement(C,{fontSize:"small"}),A=o.forwardRef((function(e,t){var r=e.action,n=e.children,a=e.classes,i=e.className,c=e.closeText,l=void 0===c?"Close":c,s=e.color,p=e.icon,u=e.iconMapping,d=void 0===u?E:u,f=e.onClose,b=e.role,g=void 0===b?"alert":b,v=e.severity,O=void 0===v?"success":v,j=e.variant,x=void 0===j?"standard":j,k=Object(m.a)(e,["action","children","classes","className","closeText","color","icon","iconMapping","onClose","role","severity","variant"]);return o.createElement(w.a,Object(h.a)({role:g,square:!0,elevation:0,className:Object(y.a)(a.root,a["".concat(x).concat(Object(M.a)(s||O))],i),ref:t},k),!1!==p?o.createElement("div",{className:a.icon},p||d[O]||E[O]):null,o.createElement("div",{className:a.message},n),null!=r?o.createElement("div",{className:a.action},r):null,null==r&&f?o.createElement("div",{className:a.action},o.createElement(P.a,{size:"small","aria-label":l,title:l,color:"inherit",onClick:f},_)):null)})),z=Object(v.a)((function(e){var t="light"===e.palette.type?g.a:g.d,r="light"===e.palette.type?g.d:g.a;return{root:Object(h.a)({},e.typography.body2,{borderRadius:e.shape.borderRadius,backgroundColor:"transparent",display:"flex",padding:"6px 16px"}),standardSuccess:{color:t(e.palette.success.main,.6),backgroundColor:r(e.palette.success.main,.9),"& $icon":{color:e.palette.success.main}},standardInfo:{color:t(e.palette.info.main,.6),backgroundColor:r(e.palette.info.main,.9),"& $icon":{color:e.palette.info.main}},standardWarning:{color:t(e.palette.warning.main,.6),backgroundColor:r(e.palette.warning.main,.9),"& $icon":{color:e.palette.warning.main}},standardError:{color:t(e.palette.error.main,.6),backgroundColor:r(e.palette.error.main,.9),"& $icon":{color:e.palette.error.main}},outlinedSuccess:{color:t(e.palette.success.main,.6),border:"1px solid ".concat(e.palette.success.main),"& $icon":{color:e.palette.success.main}},outlinedInfo:{color:t(e.palette.info.main,.6),border:"1px solid ".concat(e.palette.info.main),"& $icon":{color:e.palette.info.main}},outlinedWarning:{color:t(e.palette.warning.main,.6),border:"1px solid ".concat(e.palette.warning.main),"& $icon":{color:e.palette.warning.main}},outlinedError:{color:t(e.palette.error.main,.6),border:"1px solid ".concat(e.palette.error.main),"& $icon":{color:e.palette.error.main}},filledSuccess:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.success.main},filledInfo:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.info.main},filledWarning:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.warning.main},filledError:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.error.main},icon:{marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9},message:{padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}}}),{name:"MuiAlert"})(A),R=r("fvRo"),L=r("j1kI"),W=r.n(L),I=r("8PQZ"),N=r("8XCd"),H=r("6h0R"),T=function(e){var t=e.children,r=e.to;return Object(H.a)(N.a,null,Object(H.a)("a",{href:r,target:"_blank",rel:"noreferrer"},Object(H.a)(I.a,null,t,Object(H.a)(W.a,{size:"small"}))))},B=r("7sHS"),D=function(e){var t=e.title,r=e.current,o=e.display,n=void 0===o?"card":o,a=Object(l.useStaticQuery)("2470622091").allMdx.nodes.filter((function(e){var r;return(null===(r=e.frontmatter.series)||void 0===r?void 0:r.title)===t})).sort((function(e,t){return e.frontmatter.series.number-t.frontmatter.series.number})),i=parseInt(r);switch(n){case"text":return Object(H.a)("ul",null,a.map((function(e){return Object(H.a)("li",{key:e.id},e.frontmatter.series.number===i?e.fields.postTitle:Object(H.a)(l.Link,{to:e.fields.slug},e.fields.postTitle))})));default:return Object(H.a)("nav",null,a.map((function(e){return Object(H.a)(B.b,{node:e,key:e.id,disableLink:e.frontmatter.series.number===i})})))}},K=r("5EGp"),V=r.n(K);var X,F={name:"1xw31mf",styles:'position:relative;display:inline-block;margin:1.5em 0 1.5em 15px;padding:7px 10px;min-width:120px;max-width:100%;color:#555;font-size:16px;background:#e0edff;padding:1rem;&:before{content:"";position:absolute;top:50%;left:-30px;margin-top:-15px;border:15px solid transparent;border-right:15px solid #e0edff;}'},G=function(e){var t=e.children;e.tail;return Object(H.a)(n.a.Fragment,null,Object(H.a)(V.a,{src:"./haruurara.jpg"}),Object(H.a)("div",{css:F},t))},J=r("BQn0"),Q=function(){return{Alert:z,Baloon:G,Box:J.a,Link:l.Link,LinkPost:R.a,LinkExternal:T,Series:D,Grid:d.a}},U=(X=function(e,t){return(X=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}X(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),Z=function(e){function t(t){var r=e.call(this,t)||this;return r.name="AssertionError",r}return U(t,e),t}(Error);function $(e,t){if(!e)throw new Z(t)}function q(e){var t=Object.entries(e).filter((function(e){var t=e[1];return null!=t})).map((function(e){var t=e[0],r=e[1];return encodeURIComponent(t)+"="+encodeURIComponent(String(r))}));return t.length>0?"?"+t.join("&"):""}var Y=r("8Jek"),ee=r.n(Y),te=function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(t,r)};return function(t,r){function o(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}(),re=function(){return(re=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},oe=function(e,t,r,o){return new(r||(r=Promise))((function(n,a){function i(e){try{l(o.next(e))}catch(t){a(t)}}function c(e){try{l(o.throw(e))}catch(t){a(t)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,c)}l((o=o.apply(e,t||[])).next())}))},ne=function(e,t){var r,o,n,a,i={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,o&&(n=2&a[0]?o.return:a[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,a[1])).done)return n;switch(o=0,n&&(a=[2&a[0],n.value]),a[0]){case 0:case 1:n=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,o=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(n=i.trys,(n=n.length>0&&n[n.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!n||a[1]>n[0]&&a[1]<n[3])){i.label=a[1];break}if(6===a[0]&&i.label<n[1]){i.label=n[1],n=a;break}if(n&&i.label<n[2]){i.label=n[2],i.ops.push(a);break}n[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(c){a=[6,c],o=0}finally{r=n=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},ae=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]])}return r},ie=function(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then},ce=function(e,t){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-e/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-t/2}},le=function(e,t){return{top:(window.screen.height-t)/2,left:(window.screen.width-e)/2}};function se(e,t,r){var o=t.height,n=t.width,a=ae(t,["height","width"]),i=re({height:o,width:n,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},a),c=window.open(e,"",Object.keys(i).map((function(e){return e+"="+i[e]})).join(", "));if(r)var l=window.setInterval((function(){try{(null===c||c.closed)&&(window.clearInterval(l),r(c))}catch(e){console.error(e)}}),1e3);return c}var pe=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.openShareDialog=function(e){var r=t.props,o=r.onShareWindowClose,n=r.windowHeight,a=void 0===n?400:n,i=r.windowPosition,c=void 0===i?"windowCenter":i,l=r.windowWidth,s=void 0===l?550:l;se(e,re({height:a,width:s},"windowCenter"===c?ce(s,a):le(s,a)),o)},t.handleClick=function(e){return oe(t,void 0,void 0,(function(){var t,r,o,n,a,i,c,l,s,p;return ne(this,(function(u){switch(u.label){case 0:return t=this.props,r=t.beforeOnClick,o=t.disabled,n=t.networkLink,a=t.onClick,i=t.url,c=t.openShareDialogOnClick,l=t.opts,s=n(i,l),o?[2]:(e.preventDefault(),r?(p=r(),ie(p)?[4,p]:[3,2]):[3,2]);case 1:u.sent(),u.label=2;case 2:return c&&this.openShareDialog(s),a&&a(e,s),[2]}}))}))},t}return te(t,e),t.prototype.render=function(){var e=this.props,t=(e.beforeOnClick,e.children),r=e.className,o=e.disabled,a=e.disabledStyle,i=e.forwardedRef,c=(e.networkLink,e.networkName),l=(e.onShareWindowClose,e.openShareDialogOnClick,e.opts,e.resetButtonStyle),s=e.style,p=(e.url,e.windowHeight,e.windowPosition,e.windowWidth,ae(e,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),u=ee()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!o,disabled:!!o},r),d=re(re(l?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},s),o&&a);return n.a.createElement("button",re({},p,{"aria-label":p["aria-label"]||c,className:u,onClick:this.handleClick,ref:i,style:d}),t)},t.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},t}(o.Component),ue=function(){return(ue=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};var de=function(e,t,r,a){function i(o,i){var c=r(o),l=ue({},o);return Object.keys(c).forEach((function(e){delete l[e]})),n.a.createElement(pe,ue({},a,l,{forwardedRef:i,networkName:e,networkLink:t,opts:r(o)}))}return i.displayName="ShareButton-"+e,Object(o.forwardRef)(i)};var fe=de("facebook",(function(e,t){var r=t.quote,o=t.hashtag;return $(e,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+q({u:e,quote:r,hashtag:o})}),(function(e){return{quote:e.quote,hashtag:e.hashtag}}),{windowWidth:550,windowHeight:400}),be=function(){return(be=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},me=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]])}return r};function he(e){var t=function(t){var r=t.bgStyle,o=t.borderRadius,a=t.iconFillColor,i=t.round,c=t.size,l=me(t,["bgStyle","borderRadius","iconFillColor","round","size"]);return n.a.createElement("svg",be({viewBox:"0 0 64 64",width:c,height:c},l),i?n.a.createElement("circle",{cx:"32",cy:"32",r:"31",fill:e.color,style:r}):n.a.createElement("rect",{width:"64",height:"64",rx:o,ry:o,fill:e.color,style:r}),n.a.createElement("path",{d:e.path,fill:a}))};return t.defaultProps={bgStyle:{},borderRadius:0,iconFillColor:"white",size:64},t}var ye=he({color:"#3b5998",networkName:"facebook",path:"M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"});var ge=de("twitter",(function(e,t){var r=t.title,o=t.via,n=t.hashtags,a=void 0===n?[]:n,i=t.related,c=void 0===i?[]:i;return $(e,"twitter.url"),$(Array.isArray(a),"twitter.hashtags is not an array"),$(Array.isArray(c),"twitter.related is not an array"),"https://twitter.com/share"+q({url:e,text:r,via:o,hashtags:a.length>0?a.join(","):void 0,related:c.length>0?c.join(","):void 0})}),(function(e){return{hashtags:e.hashtags,title:e.title,via:e.via,related:e.related}}),{windowWidth:550,windowHeight:400}),ve=he({color:"#00aced",networkName:"twitter",path:"M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"});var we={name:"17rtmzd",styles:"display:inline-block;padding-bottom:0.2em;padding-top:0.5em;margin-bottom:2em;box-shadow:2px 2px 1px rgb(0 0 0 / 20%)"},Oe={name:"1ine0vd",styles:"margin-right:0.5em;margin-left:0.5em;display:inline-block"},je=function(e){var t=e.title,r=e.url,o=e.iconSize,n=e.round;return Object(H.a)("nav",{css:we},Object(H.a)("div",{css:Oe},Object(H.a)(fe,{url:r,title:t},Object(H.a)(ye,{size:o,round:n}))),Object(H.a)("div",{css:Oe},Object(H.a)(ge,{url:r,title:t},Object(H.a)(ve,{size:o,round:n}))))};je.defaultProps={iconSize:32,round:!0};var xe=je,ke=r("V/cZ"),Se=r.n(ke),Ce=r("UN18"),Pe=r("G7Ko");var Me=Object(c.a)("h1",{target:"edu07is4"})({name:"11pr3dr",styles:"margin-bottom:0.5rem;padding:0.5em;font-weight:bold;background:linear-gradient(to bottom,  #4848aa 0%, #222277 100%);color:white"}),Ee=Object(c.a)("div",{target:"edu07is3"})({name:"1dvcxr3",styles:"padding:1rem"}),_e=Object(c.a)("header",{target:"edu07is2"})({name:"1esi57r",styles:"box-shadow:0px 1px rgb(0 0 0 / 10%)"}),Ae=Object(c.a)("main",{target:"edu07is1"})({name:"1gf76k2",styles:"margin-top:1rem;padding-bottom:1rem;padding-right:1rem"}),ze=Object(c.a)("footer",{target:"edu07is0"})({name:"1yj4206",styles:"border-top:solid 1px;padding-top:1rem"}),Re={name:"y03uhw",styles:"margin-top:2em;margin-bottom:2em;box-shadow:2px 2px 1px rgb(0 0 0 / 20%)"},Le=function(e){var t=e.children;return Object(H.a)(s.MDXProvider,{components:Q},Object(H.a)("div",{className:Se.a.body},Object(H.a)(p.MDXRenderer,null,t)))},We=function(e){var t=e.nodes;return Object(H.a)("nav",null,Object(H.a)(d.a,{container:!0,spacing:3},t.slice(0,9).map((function(e){return Object(H.a)(d.a,{item:!0,xs:12,sm:6,key:e.id},Object(H.a)(B.b,{node:e}))}))))},Ie=function(e){var t=e.prevPost,r=e.nextPost;return Object(H.a)("nav",{style:{marginBottom:"2rem"}},Object(H.a)(d.a,{container:!0},Object(H.a)(d.a,{item:!0,sm:4},Object(H.a)("h4",{style:{textAlign:"left"}},"《 PREV POST"),t&&Object(H.a)(B.b,{node:t})),Object(H.a)(d.a,{item:!0,sm:4}),Object(H.a)(d.a,{item:!0,sm:4},Object(H.a)("h4",{style:{textAlign:"right"}},"NEXT POST》"),r&&Object(H.a)(B.b,{node:r}))))},Ne=function(e){var t=e.node,r=e.siblings,o=e.prevPost,n=e.nextPost,a=Object(l.useStaticQuery)("698804963"),i=Object(u.useLocation)().pathname;return Object(H.a)("div",{css:Re,className:Se.a.post},Object(H.a)(_e,null,Object(H.a)("div",null,t.frontmatter.date),Object(H.a)(Me,null,t.fields.postTitle),Object(H.a)(b.a,{directory:t.fields.directory}),Object(H.a)(Ce.a,{node:t}),Object(H.a)(Ee,null,t.frontmatter.description)),Object(H.a)(Ae,null,Object(H.a)(Le,null,t.body)),Object(H.a)(ze,null,Object(H.a)(xe,{url:""+a.site.siteMetadata.siteUrl+i,title:t.fields.postTitle}),Object(H.a)(Ie,{prevPost:o,nextPost:n}),Object(H.a)(f.a,null),Object(H.a)("h3",null,"Siblings on '",Object(Pe.a)(t.fields.directory),"'"),Object(H.a)(We,{nodes:r})))};function He(e){var t,r=e.data,o=e.pageContext;console.log("create/template: "+r.mdx.fields.slug);var n=r.mdx,c=o.breadcrumb.crumbs,l=null===(t=n.frontmatter.cover)||void 0===t?void 0:t.publicURL,s=r.allMdx.nodes.map((function(e){return e.id})).indexOf(n.id),p=s>0?r.allMdx.nodes[s-1]:null,u=s<r.allMdx.nodes.length?r.allMdx.nodes[s+1]:null,d=r.allMdx.nodes.filter((function(e){return e.id!==n.id&&e.fields.directory===n.fields.directory}));return Object(H.a)(i.a,{title:n.frontmatter.title,description:n.frontmatter.description||n.excerpt,image:l,tableOfContents:n.tableOfContents},Object(H.a)(a.Breadcrumb,{crumbs:c,crumbLabel:n.frontmatter.title}),Object(H.a)(Ne,{node:n,siblings:d,prevPost:p,nextPost:u}))}},uUj8:function(e,t,r){var o=r("WI9V"),n=r("0qAl");function a(t,r,i){return n()?(e.exports=a=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=a=function(e,t,r){var n=[null];n.push.apply(n,t);var a=new(Function.bind.apply(e,n));return r&&o(a,r.prototype),a},e.exports.default=e.exports,e.exports.__esModule=!0),a.apply(null,arguments)}e.exports=a,e.exports.default=e.exports,e.exports.__esModule=!0}}]);
//# sourceMappingURL=component---gatsby-theme-aksite-src-templates-post-template-js-dd0b2e35063ab263528d.js.map