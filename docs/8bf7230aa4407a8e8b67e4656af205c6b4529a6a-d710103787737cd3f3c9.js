(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"2Hgx":function(e,t){var r="undefined"!=typeof Element,n="function"==typeof Map,a="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){if(t.constructor!==i.constructor)return!1;var u,c,l,s;if(Array.isArray(t)){if((u=t.length)!=i.length)return!1;for(c=u;0!=c--;)if(!e(t[c],i[c]))return!1;return!0}if(n&&t instanceof Map&&i instanceof Map){if(t.size!==i.size)return!1;for(s=t.entries();!(c=s.next()).done;)if(!i.has(c.value[0]))return!1;for(s=t.entries();!(c=s.next()).done;)if(!e(c.value[1],i.get(c.value[0])))return!1;return!0}if(a&&t instanceof Set&&i instanceof Set){if(t.size!==i.size)return!1;for(s=t.entries();!(c=s.next()).done;)if(!i.has(c.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(i)){if((u=t.length)!=i.length)return!1;for(c=u;0!=c--;)if(t[c]!==i[c])return!1;return!0}if(t.constructor===RegExp)return t.source===i.source&&t.flags===i.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===i.toString();if((u=(l=Object.keys(t)).length)!==Object.keys(i).length)return!1;for(c=u;0!=c--;)if(!Object.prototype.hasOwnProperty.call(i,l[c]))return!1;if(r&&t instanceof Element)return!1;for(c=u;0!=c--;)if(("_owner"!==l[c]&&"__v"!==l[c]&&"__o"!==l[c]||!t.$$typeof)&&!e(t[l[c]],i[l[c]]))return!1;return!0}return t!=t&&i!=i}(e,t)}catch(i){if((i.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw i}}},"79cQ":function(e,t,r){"use strict";var n=r("63Ad");t.__esModule=!0,t.default=void 0;var a=n(r("mXGw")),o=r("u0Ez"),i=function(e){var t=e.location,r=e.crumbLabel,n=e.crumbSeparator,i=a.default.useContext(o.BreadcrumbContext),u=i.crumbs,c=i.updateCrumbs;return a.default.useEffect((function(){c({location:t,crumbLabel:r,crumbSeparator:n})}),[t,r,n,c]),{crumbs:u}};t.default=i},CaHY:function(e,t,r){"use strict";var n=r("63Ad");t.__esModule=!0,t.default=void 0;var a=n(r("8VmE")),o=n(r("PE9J")),i=n(r("mXGw")),u=n(r("W0B4")),c=r("Wbzz"),l=function(e){var t=e.title,r=e.crumbs,n=e.crumbLabel,u=e.crumbSeparator,l=e.disableLinks,s=e.hiddenCrumbs,f=(0,o.default)(e,["title","crumbs","crumbLabel","crumbSeparator","disableLinks","hiddenCrumbs"]);return i.default.createElement(i.default.Fragment,null,t&&i.default.createElement("span",{className:"breadcrumb__title"},t),i.default.createElement("nav",{className:"breadcrumb","aria-label":"Breadcrumb"},i.default.createElement("ol",{className:"breadcrumb__list"},r.map((function(e,t){return s.includes(e.pathname)?null:i.default.createElement(i.default.Fragment,{key:t+"-"+e.pathname},!l.includes(e.pathname)&&i.default.createElement("li",{className:"breadcrumb__list__item"},i.default.createElement(c.Link,(0,a.default)({to:e.pathname,className:"breadcrumb__link",activeClassName:"breadcrumb__link__active","aria-current":t===r.length-1?"page":null},f),n&&t===r.length-1?n:e.crumbLabel)),l.includes(e.pathname)&&i.default.createElement("li",{className:"breadcrumb__list__item"},i.default.createElement("span",(0,a.default)({className:"breadcrumb__link__disabled"},f),n&&t===r.length-1?n:e.crumbLabel)),t===r.length-1?null:i.default.createElement("span",{className:"breadcrumb__separator","aria-hidden":"true"},u))})))))};l.defaultProps={title:"",crumbSeparator:" / ",crumbLabel:null,disableLinks:[],hiddenCrumbs:[]},l.propTypes={title:u.default.string,crumbSeparator:u.default.string,crumbs:u.default.arrayOf(u.default.shape({location:u.default.shape(),pathname:u.default.string.isRequired})).isRequired,crumbLabel:u.default.string,disableLinks:u.default.arrayOf(u.default.string),hiddenCrumbs:u.default.arrayOf(u.default.string)};var s=l;t.default=s},Dpeb:function(e,t,r){"use strict";var n=r("63Ad");t.__esModule=!0;var a=n(r("urpu"));t.Breadcrumb=a.default;var o=n(r("CaHY"));t.AutoGenCrumb=o.default;var i=r("u0Ez");t.BreadcrumbContext=i.BreadcrumbContext,t.BreadcrumbConsumer=i.BreadcrumbConsumer,t.BreadcrumbProvider=i.BreadcrumbProvider;var u=n(r("79cQ"));t.useBreadcrumb=u.default},Hrl7:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return be}));var n,a,o,i,u=r("W0B4"),c=r.n(u),l=r("WiT8"),s=r.n(l),f=r("2Hgx"),d=r.n(f),p=r("mXGw"),m=r.n(p),b=r("eEPp"),h=r.n(b),y="bodyAttributes",v="htmlAttributes",g="titleAttributes",T={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(T).map((function(e){return T[e]})),"charset"),C="cssText",A="href",E="http-equiv",O="innerHTML",S="itemprop",_="name",j="property",k="rel",x="src",L="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},B="defaultTitle",N="defer",I="encodeSpecialCharacters",M="onChangeClientState",R="titleTemplate",H=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),q=[T.NOSCRIPT,T.SCRIPT,T.STYLE],D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},z=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},G=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},W=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},U=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},J=function(e){var t=$(e,T.TITLE),r=$(e,R);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=$(e,B);return t||n||void 0},X=function(e){return $(e,M)||function(){}},V=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Y({},e,t)}),{})},K=function(e,t){return t.filter((function(e){return void 0!==e[T.BASE]})).map((function(e){return e[T.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var o=n[a].toLowerCase();if(-1!==e.indexOf(o)&&r[o])return t.concat(r)}return t}),[])},Q=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+D(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var a={};r.filter((function(e){for(var r=void 0,o=Object.keys(e),i=0;i<o.length;i++){var u=o[i],c=u.toLowerCase();-1===t.indexOf(c)||r===k&&"canonical"===e[r].toLowerCase()||c===k&&"stylesheet"===e[c].toLowerCase()||(r=c),-1===t.indexOf(u)||u!==O&&u!==C&&u!==S||(r=u)}if(!r||!e[r])return!1;var l=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][l]&&(a[r][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var u=o[i],c=h()({},n[u],a[u]);n[u]=c}return e}),[]).reverse()},$=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},Z=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){Z(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Z:e.requestAnimationFrame||Z,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,u=e.noscriptTags,c=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,f=e.title,d=e.titleAttributes;ce(T.BODY,n),ce(T.HTML,a),ue(f,d);var p={baseTag:le(T.BASE,r),linkTags:le(T.LINK,o),metaTags:le(T.META,i),noscriptTags:le(T.NOSCRIPT,u),scriptTags:le(T.SCRIPT,l),styleTags:le(T.STYLE,s)},m={},b={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(b[e]=p[e].oldTags)})),t&&t(),c(e,m,b)},ie=function(e){return Array.isArray(e)?e.join(""):e},ue=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),ce(T.TITLE,t)},ce=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute("data-react-helmet"),a=n?n.split(","):[],o=[].concat(a),i=Object.keys(t),u=0;u<i.length;u++){var c=i[u],l=t[c]||"";r.getAttribute(c)!==l&&r.setAttribute(c,l),-1===a.indexOf(c)&&a.push(c);var s=o.indexOf(c);-1!==s&&o.splice(s,1)}for(var f=o.length-1;f>=0;f--)r.removeAttribute(o[f]);a.length===o.length?r.removeAttribute("data-react-helmet"):r.getAttribute("data-react-helmet")!==i.join(",")&&r.setAttribute("data-react-helmet",i.join(","))}},le=function(e,t){var r=document.head||document.querySelector(T.HEAD),n=r.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(n),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===O)r.innerHTML=t.innerHTML;else if(n===C)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var u=void 0===t[n]?"":t[n];r.setAttribute(n,u)}r.setAttribute("data-react-helmet","true"),a.some((function(e,t){return i=t,r.isEqualNode(e)}))?a.splice(i,1):o.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:o}},se=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[P[r]||r]=e[r],t}),t)},de=function(e,t,r){switch(e){case T.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})["data-react-helmet"]=!0,a=fe(r,n),[m.a.createElement(T.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=se(r),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+U(o,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+U(o,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case y:case v:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})["data-react-helmet"]=!0,n);return Object.keys(t).forEach((function(e){var r=P[e]||e;if(r===O||r===C){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),m.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===O||e===C)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+U(n[t],r)+'"';return e?e+" "+a:a}),""),o=n.innerHTML||n.cssText||"",i=-1===q.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,r)}}}},pe=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,u=e.noscriptTags,c=e.scriptTags,l=e.styleTags,s=e.title,f=void 0===s?"":s,d=e.titleAttributes;return{base:de(T.BASE,t,n),bodyAttributes:de(y,r,n),htmlAttributes:de(v,a,n),link:de(T.LINK,o,n),meta:de(T.META,i,n),noscript:de(T.NOSCRIPT,u,n),script:de(T.SCRIPT,c,n),style:de(T.STYLE,l,n),title:de(T.TITLE,{title:f,titleAttributes:d},n)}},me=s()((function(e){return{baseTag:K([A,L],e),bodyAttributes:V(y,e),defer:$(e,N),encode:$(e,I),htmlAttributes:V(v,e),linkTags:Q(T.LINK,[k,A],e),metaTags:Q(T.META,[_,w,E,j,S],e),noscriptTags:Q(T.NOSCRIPT,[O],e),onChangeClientState:X(e),scriptTags:Q(T.SCRIPT,[x,O],e),styleTags:Q(T.STYLE,[C],e),title:J(e),titleAttributes:V(g,e)}}),(function(e){ae&&re(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),pe)((function(){return null})),be=(a=me,i=o=function(e){function t(){return F(this,t),W(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case T.SCRIPT:case T.NOSCRIPT:return{innerHTML:t};case T.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return Y({},n,((t={})[r.type]=[].concat(n[r.type]||[],[Y({},a,this.mapNestedChildrenToProps(r,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(n.type){case T.TITLE:return Y({},a,((t={})[n.type]=i,t.titleAttributes=Y({},o),t));case T.BODY:return Y({},a,{bodyAttributes:Y({},o)});case T.HTML:return Y({},a,{htmlAttributes:Y({},o)})}return Y({},a,((r={})[n.type]=Y({},o),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=Y({},t);return Object.keys(e).forEach((function(t){var n;r=Y({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return m.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[H[r]||r]=e[r],t}),t)}(G(a,["children"]));switch(r.warnOnInvalidChildren(e,o),e.type){case T.LINK:case T.META:case T.NOSCRIPT:case T.SCRIPT:case T.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:i,nestedChildren:o});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=G(e,["children"]),n=Y({},r);return t&&(n=this.mapChildrenToProps(t,n)),m.a.createElement(a,n)},z(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(m.a.Component),o.propTypes={base:c.a.object,bodyAttributes:c.a.object,children:c.a.oneOfType([c.a.arrayOf(c.a.node),c.a.node]),defaultTitle:c.a.string,defer:c.a.bool,encodeSpecialCharacters:c.a.bool,htmlAttributes:c.a.object,link:c.a.arrayOf(c.a.object),meta:c.a.arrayOf(c.a.object),noscript:c.a.arrayOf(c.a.object),onChangeClientState:c.a.func,script:c.a.arrayOf(c.a.object),style:c.a.arrayOf(c.a.object),title:c.a.string,titleAttributes:c.a.object,titleTemplate:c.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);be.renderStatic=be.rewind}).call(this,r("pCvA"))},LVJ7:function(e,t,r){"use strict";t.__esModule=!0;var n=r("Dpeb");t.Breadcrumb=n.Breadcrumb,t.BreadcrumbContext=n.BreadcrumbContext,t.BreadcrumbConsumer=n.BreadcrumbConsumer,t.BreadcrumbProvider=n.BreadcrumbProvider,t.useBreadcrumb=n.useBreadcrumb,t.AutoGenCrumb=n.AutoGenCrumb},WiT8:function(e,t,r){"use strict";var n,a=r("mXGw"),o=(n=a)&&"object"==typeof n&&"default"in n?n.default:n;function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var c,l=[];function s(){c=e(l.map((function(e){return e.props}))),f.canUseDOM?t(c):r&&(c=r(c))}var f=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return c},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,l=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){l.push(this),s()},i.componentDidUpdate=function(){s()},i.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},i.render=function(){return o.createElement(n,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),i(f,"canUseDOM",u),f}}},bON6:function(e,t,r){"use strict";var n=r("J5T5"),a=r("gtWh"),o=a.a.palette.primary.light,i=a.a.palette.primary.dark,u=Object(n.a)("h1",{target:"e1mv2ztf0"})("margin-bottom:0.8rem;padding:0.4rem;font-weight:bold;box-shadow:0px 1px rgb(0 0 0 / 10%);color:",a.a.palette.primary.contrastText,";background:linear-gradient(to bottom,  ",o," 0%, ",i," 100%);a{text-decoration:none;color:",a.a.palette.primary.contrastText,";}");t.a=u},dbyQ:function(e,t,r){"use strict";r("mXGw");var n=r("Hrl7"),a=r("JF+v"),o=r("S/8n"),i=r("6h0R");t.a=function(e){var t=e.title,r=e.description,u=e.cover,c=e.lang,l=Object(a.useLocation)().pathname,s=Object(o.a)(),f=s.title,d=s.description,p=s.siteUrl,m=s.coverImage,b=s.social.twitter,h=u||m,y=[p,l].join(""),v=t+" | "+f,g=r||d,T=p+h;return Object(i.b)(n.a,{htmlAttributes:c?{lang:c}:{},title:v,meta:[{name:"description",content:g},{name:"image",content:T},{property:"og:url",content:y},{property:"og:description",content:g},{property:"og:image",content:T},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:b},{name:"twitter:title",content:v},{name:"twitter:description",content:g},{name:"twitter:image",content:T}]})}},fgIA:function(e,t,r){"use strict";r("mXGw");var n=r("LVJ7"),a=r("6h0R"),o=r("gtWh"),i=r("/ZiB"),u=Object(a.a)("a{color:",o.a.palette.text.primary,";&:hover{background-color:",o.a.palette.action.hover,";}}nav{font-size:small;border-top:1px solid #ddd;border-bottom:1px solid #ddd;padding-top:0.5em;padding-bottom:0.5em;}","");t.a=function(e){return Object(a.b)("div",{css:u},Object(a.b)(i.a,null,Object(a.b)(n.Breadcrumb,e)))}},p4tI:function(e,t,r){"use strict";var n=r("63Ad");t.__esModule=!0,t.default=void 0;var a=n(r("8VmE")),o=n(r("PE9J")),i=n(r("mXGw")),u=n(r("W0B4")),c=r("Wbzz"),l=r("Owka"),s=n(r("79cQ")),f=function(e){var t=e.title,r=e.location,n=e.crumbLabel,u=e.crumbSeparator,f=(0,o.default)(e,["title","location","crumbLabel","crumbSeparator"]),d=i.default.useContext(l.OptionsContext).usePathPrefix,p=(0,s.default)({location:(0,a.default)({},r,{pathname:d?r.pathname.replace(new RegExp("^"+d),""):r.pathname}),crumbLabel:n,crumbSeparator:u}).crumbs,m=void 0===p?[]:p;return i.default.createElement(i.default.Fragment,null,t&&i.default.createElement("span",{className:"breadcrumb__title"},t),i.default.createElement("nav",{className:"breadcrumb","aria-label":"Breadcrumb"},i.default.createElement("ol",{className:"breadcrumb__list"},m.map((function(e,t){return i.default.createElement("li",{className:"breadcrumb__item",key:t},i.default.createElement(c.Link,(0,a.default)({to:e.pathname||"",className:"breadcrumb__link",activeClassName:"breadcrumb__link__active","aria-current":t===m.length-1?"page":null},f),e.crumbLabel),t===m.length-1?null:i.default.createElement("span",{className:"breadcrumb__separator","aria-hidden":"true"},e.crumbSeparator))})))))};f.defaultProps={title:"",crumbSeparator:" / "},f.propTypes={location:u.default.shape().isRequired,crumbLabel:u.default.string.isRequired,title:u.default.string,crumbSeparator:u.default.string};var d=f;t.default=d},pCvA:function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(n){"object"==typeof window&&(r=window)}e.exports=r},urpu:function(e,t,r){"use strict";var n=r("63Ad");t.__esModule=!0,t.default=void 0;var a=n(r("mXGw")),o=n(r("CaHY")),i=n(r("p4tI")),u=r("Owka"),c=function(e){return a.default.useContext(u.OptionsContext).useAutoGen?a.default.createElement(o.default,e):a.default.createElement(i.default,e)};t.default=c}}]);
//# sourceMappingURL=8bf7230aa4407a8e8b67e4656af205c6b4529a6a-d710103787737cd3f3c9.js.map