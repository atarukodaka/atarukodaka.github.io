(self.webpackChunksite=self.webpackChunksite||[]).push([[313,460,168],{8277:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var u,c,l,s;if(Array.isArray(e)){if((u=e.length)!=i.length)return!1;for(c=u;0!=c--;)if(!o(e[c],i[c]))return!1;return!0}if(r&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(s=e.entries();!(c=s.next()).done;)if(!i.has(c.value[0]))return!1;for(s=e.entries();!(c=s.next()).done;)if(!o(c.value[1],i.get(c.value[0])))return!1;return!0}if(n&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(s=e.entries();!(c=s.next()).done;)if(!i.has(c.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((u=e.length)!=i.length)return!1;for(c=u;0!=c--;)if(e[c]!==i[c])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((u=(l=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(c=u;0!=c--;)if(!Object.prototype.hasOwnProperty.call(i,l[c]))return!1;if(t&&e instanceof Element)return!1;for(c=u;0!=c--;)if(("_owner"!==l[c]&&"__v"!==l[c]&&"__o"!==l[c]||!e.$$typeof)&&!o(e[l[c]],i[l[c]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return o(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},8473:function(e,t,r){"use strict";var n,a=r(7378),o=(n=a)&&"object"==typeof n&&"default"in n?n.default:n;function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var c,l=[];function s(){c=e(l.map((function(e){return e.props}))),f.canUseDOM?t(c):r&&(c=r(c))}var f=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return c},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,l=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){l.push(this),s()},i.componentDidUpdate=function(){s()},i.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},i.render=function(){return o.createElement(n,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),i(f,"canUseDOM",u),f}}},7177:function(e,t,r){var n,a,o;o=function(){function e(e,t){return e=(e=(e=(e=e.replace(/:\//g,"://")).replace(/([^:\s])\/+/g,"$1/")).replace(/\/(\?|&|#[^!])/g,"$1")).replace(/(\?.+)\?/g,"$1&")}return function(){var t=arguments;"object"==typeof arguments[0]&&(t=arguments[0]);var r=[].slice.call(t,0).join("/");return e(r)}},e.exports?e.exports=o():void 0===(a="function"==typeof(n=o)?n.call(t,r,t,e):n)||(e.exports=a)},6824:function(e,t,r){var n=r(5526);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Ej=function(e){return"/"+ogPagesDir+"/"+e+"/cover.png"},t.al=function(){return"/"+ogPagesDir+"/site/cover.png"}},8378:function(e,t,r){"use strict";r.r(t);var n=r(5414),a=(r(7378),r(2861)),o=r(6554);t.default=function(){var e=(0,n.useStaticQuery)("3486260097").site.siteMetadata,t=e.title,r=e.author,i=e.siteUrl,u=o.parse(i).hostname;return(0,a.tZ)("div",{style:{margin:"3rem"}},(0,a.tZ)("style",{global:!0},"\n                body {\n                    background-color: #227;\n                    color: white;\n                }\n            "),(0,a.tZ)("h1",null,t),(0,a.tZ)("h3",null,r),(0,a.tZ)("h3",null,u))}},1640:function(e,t,r){"use strict";r.r(t);r(7378);var n=r(2861),a=r(6554);t.default=function(e){var t=e.data,r=t.mdx,o=a.parse(t.site.siteMetadata.siteUrl).hostname;return(0,n.tZ)("div",{style:{margin:"3rem"}},(0,n.tZ)("style",{global:!0},"\n                body {\n                    background-color: #227;\n                    color: white;\n                }\n            "),(0,n.tZ)("h1",null,r.frontmatter.title),(0,n.tZ)("h3",null,r.frontmatter.date),(0,n.tZ)("div",null,r.description||r.excerpt," "),(0,n.tZ)("div",{style:{color:"#ccc",marginTop:"1rem"}},o))}},934:function(e,t,r){"use strict";r(7378);var n=r(2768),a=r(2861),o=r(460),i=(0,a.iv)("a{color:",o.Z.palette.text.primary,";&:hover{background-color:",o.Z.palette.action.hover,";}}nav{font-size:small;border-top:1px solid #ddd;border-bottom:1px solid #ddd;padding-top:0.5em;padding-bottom:0.5em;}","");t.Z=function(e){return(0,a.tZ)("div",{css:i},(0,a.tZ)(n.aG,e))}},6990:function(e,t,r){"use strict";var n=r(7627),a=r(460),o=a.Z.palette.primary.light,i=a.Z.palette.primary.dark,u=(0,n.Z)("h1",{target:"e1mv2ztf0"})("margin-bottom:0.8rem;padding:0.4rem;font-weight:bold;box-shadow:0px 1px rgb(0 0 0 / 10%);color:",a.Z.palette.primary.contrastText,";background:linear-gradient(to bottom,  ",o," 0%, ",i," 100%);a{text-decoration:none;color:",a.Z.palette.primary.contrastText,";}");t.Z=u},561:function(e,t,r){"use strict";r.d(t,{Z:function(){return Oe}});var n,a,o,i,u=r(7378),c=r(3615),l=r.n(c),s=r(8473),f=r.n(s),d=r(8277),p=r.n(d),m=r(1468),b=r.n(m),h="bodyAttributes",y="htmlAttributes",g="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(v).map((function(e){return v[e]})),"charset"),w="cssText",O="href",C="http-equiv",E="innerHTML",A="itemprop",S="name",_="property",j="rel",k="src",x="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",N="defer",I="encodeSpecialCharacters",M="onChangeClientState",B="titleTemplate",R=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),Z=[v.NOSCRIPT,v.SCRIPT,v.STYLE],D="data-react-helmet",q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},H=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Y=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},z=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},G=function(e){var t=J(e,v.TITLE),r=J(e,B);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=J(e,L);return t||n||void 0},$=function(e){return J(e,M)||function(){}},V=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return U({},e,t)}),{})},W=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var o=n[a].toLowerCase();if(-1!==e.indexOf(o)&&r[o])return t.concat(r)}return t}),[])},Q=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+q(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var a={};r.filter((function(e){for(var r=void 0,o=Object.keys(e),i=0;i<o.length;i++){var u=o[i],c=u.toLowerCase();-1===t.indexOf(c)||r===j&&"canonical"===e[r].toLowerCase()||c===j&&"stylesheet"===e[c].toLowerCase()||(r=c),-1===t.indexOf(u)||u!==E&&u!==w&&u!==A||(r=u)}if(!r||!e[r])return!1;var l=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][l]&&(a[r][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var u=o[i],c=b()({},n[u],a[u]);n[u]=c}return e}),[]).reverse()},J=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},X=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:r.g.requestAnimationFrame||X,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:r.g.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,u=e.noscriptTags,c=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,f=e.title,d=e.titleAttributes;ce(v.BODY,n),ce(v.HTML,a),ue(f,d);var p={baseTag:le(v.BASE,r),linkTags:le(v.LINK,o),metaTags:le(v.META,i),noscriptTags:le(v.NOSCRIPT,u),scriptTags:le(v.SCRIPT,l),styleTags:le(v.STYLE,s)},m={},b={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(b[e]=p[e].oldTags)})),t&&t(),c(e,m,b)},ie=function(e){return Array.isArray(e)?e.join(""):e},ue=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),ce(v.TITLE,t)},ce=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(D),a=n?n.split(","):[],o=[].concat(a),i=Object.keys(t),u=0;u<i.length;u++){var c=i[u],l=t[c]||"";r.getAttribute(c)!==l&&r.setAttribute(c,l),-1===a.indexOf(c)&&a.push(c);var s=o.indexOf(c);-1!==s&&o.splice(s,1)}for(var f=o.length-1;f>=0;f--)r.removeAttribute(o[f]);a.length===o.length?r.removeAttribute(D):r.getAttribute(D)!==i.join(",")&&r.setAttribute(D,i.join(","))}},le=function(e,t){var r=document.head||document.querySelector(v.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(n),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===E)r.innerHTML=t.innerHTML;else if(n===w)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var u=void 0===t[n]?"":t[n];r.setAttribute(n,u)}r.setAttribute(D,"true"),a.some((function(e,t){return i=t,r.isEqualNode(e)}))?a.splice(i,1):o.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:o}},se=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[P[r]||r]=e[r],t}),t)},de=function(e,t,r){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[D]=!0,a=fe(r,n),[u.createElement(v.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=se(r),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+K(o,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+K(o,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case h:case y:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})[D]=!0,n);return Object.keys(t).forEach((function(e){var r=P[e]||e;if(r===E||r===w){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),u.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===E||e===w)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+K(n[t],r)+'"';return e?e+" "+a:a}),""),o=n.innerHTML||n.cssText||"",i=-1===Z.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,r)}}}},pe=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,u=e.noscriptTags,c=e.scriptTags,l=e.styleTags,s=e.title,f=void 0===s?"":s,d=e.titleAttributes;return{base:de(v.BASE,t,n),bodyAttributes:de(h,r,n),htmlAttributes:de(y,a,n),link:de(v.LINK,o,n),meta:de(v.META,i,n),noscript:de(v.NOSCRIPT,u,n),script:de(v.SCRIPT,c,n),style:de(v.STYLE,l,n),title:de(v.TITLE,{title:f,titleAttributes:d},n)}},me=f()((function(e){return{baseTag:W([O,x],e),bodyAttributes:V(h,e),defer:J(e,N),encode:J(e,I),htmlAttributes:V(y,e),linkTags:Q(v.LINK,[j,O],e),metaTags:Q(v.META,[S,T,C,_,A],e),noscriptTags:Q(v.NOSCRIPT,[E],e),onChangeClientState:$(e),scriptTags:Q(v.SCRIPT,[k,E],e),styleTags:Q(v.STYLE,[w],e),title:G(e),titleAttributes:V(g,e)}}),(function(e){ae&&re(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),pe)((function(){return null})),be=(a=me,i=o=function(e){function t(){return F(this,t),z(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return U({},n,((t={})[r.type]=[].concat(n[r.type]||[],[U({},a,this.mapNestedChildrenToProps(r,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(n.type){case v.TITLE:return U({},a,((t={})[n.type]=i,t.titleAttributes=U({},o),t));case v.BODY:return U({},a,{bodyAttributes:U({},o)});case v.HTML:return U({},a,{htmlAttributes:U({},o)})}return U({},a,((r={})[n.type]=U({},o),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=U({},t);return Object.keys(e).forEach((function(t){var n;r=U({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return u.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[R[r]||r]=e[r],t}),t)}(Y(a,["children"]));switch(r.warnOnInvalidChildren(e,o),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:i,nestedChildren:o});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=Y(e,["children"]),n=U({},r);return t&&(n=this.mapChildrenToProps(t,n)),u.createElement(a,n)},H(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(u.Component),o.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);be.renderStatic=be.rewind;var he=r(8068),ye=r(1120),ge=r(8812),ve=r(6824),Te=r(2861),we=r(7177),Oe=function(e){var t=e.title,r=e.description,n=e.image,a=e.lang,o=e.isRoot,i=(0,he.useLocation)().pathname,u=(0,ye.Z)(),c=u.title,l=u.description,s=u.siteUrl,f=u.social.twitter,d=we(s,i),p=o?"website":"article",m=o?c:t+" | "+c,b=o?l:r||l,h=we(s,n||(0,ve.al)()),y=(0,ge.Z)().defaultLang;return(0,Te.tZ)(be,{htmlAttributes:{lang:a||y},title:m,meta:[{name:"description",content:b},{name:"image",content:h},{property:"og:url",content:d},{property:"og:type",content:p},{property:"og:title",content:m},{property:"og:description",content:b},{property:"og:site_name",content:c},{property:"og:image",content:h},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:creator",content:f},{name:"twitter:title",content:m},{name:"twitter:description",content:b},{name:"twitter:image",content:h}]})}},2629:function(e,t,r){"use strict";var n=r(7914);t.__esModule=!0,t.default=void 0;var a=n(r(7378)),o=n(r(8875)),i=n(r(1292)),u=r(7578),c=function(e){return a.default.useContext(u.OptionsContext).useAutoGen?a.default.createElement(o.default,e):a.default.createElement(i.default,e)};t.default=c},8875:function(e,t,r){"use strict";var n=r(7914);t.__esModule=!0,t.default=void 0;var a=n(r(2398)),o=n(r(5600)),i=n(r(7378)),u=n(r(3615)),c=r(5414),l=function(e){var t=e.title,r=e.crumbs,n=e.crumbLabel,u=e.crumbSeparator,l=e.disableLinks,s=e.hiddenCrumbs,f=(0,o.default)(e,["title","crumbs","crumbLabel","crumbSeparator","disableLinks","hiddenCrumbs"]);return i.default.createElement(i.default.Fragment,null,t&&i.default.createElement("span",{className:"breadcrumb__title"},t),i.default.createElement("nav",{className:"breadcrumb","aria-label":"Breadcrumb"},i.default.createElement("ol",{className:"breadcrumb__list"},r.map((function(e,t){return s.includes(e.pathname)?null:i.default.createElement(i.default.Fragment,{key:t+"-"+e.pathname},!l.includes(e.pathname)&&i.default.createElement("li",{className:"breadcrumb__list__item"},i.default.createElement(c.Link,(0,a.default)({to:e.pathname,className:"breadcrumb__link",activeClassName:"breadcrumb__link__active","aria-current":t===r.length-1?"page":null},f),n&&t===r.length-1?n:e.crumbLabel)),l.includes(e.pathname)&&i.default.createElement("li",{className:"breadcrumb__list__item"},i.default.createElement("span",(0,a.default)({className:"breadcrumb__link__disabled"},f),n&&t===r.length-1?n:e.crumbLabel)),t===r.length-1?null:i.default.createElement("span",{className:"breadcrumb__separator","aria-hidden":"true"},u))})))))};l.defaultProps={title:"",crumbSeparator:" / ",crumbLabel:null,disableLinks:[],hiddenCrumbs:[]},l.propTypes={title:u.default.string,crumbSeparator:u.default.string,crumbs:u.default.arrayOf(u.default.shape({location:u.default.shape(),pathname:u.default.string.isRequired})).isRequired,crumbLabel:u.default.string,disableLinks:u.default.arrayOf(u.default.string),hiddenCrumbs:u.default.arrayOf(u.default.string)};var s=l;t.default=s},1292:function(e,t,r){"use strict";var n=r(7914);t.__esModule=!0,t.default=void 0;var a=n(r(2398)),o=n(r(5600)),i=n(r(7378)),u=n(r(3615)),c=r(5414),l=r(7578),s=n(r(7121)),f=function(e){var t=e.title,r=e.location,n=e.crumbLabel,u=e.crumbSeparator,f=(0,o.default)(e,["title","location","crumbLabel","crumbSeparator"]),d=i.default.useContext(l.OptionsContext).usePathPrefix,p=(0,s.default)({location:(0,a.default)({},r,{pathname:d?r.pathname.replace(new RegExp("^"+d),""):r.pathname}),crumbLabel:n,crumbSeparator:u}).crumbs,m=void 0===p?[]:p;return i.default.createElement(i.default.Fragment,null,t&&i.default.createElement("span",{className:"breadcrumb__title"},t),i.default.createElement("nav",{className:"breadcrumb","aria-label":"Breadcrumb"},i.default.createElement("ol",{className:"breadcrumb__list"},m.map((function(e,t){return i.default.createElement("li",{className:"breadcrumb__item",key:t},i.default.createElement(c.Link,(0,a.default)({to:e.pathname||"",className:"breadcrumb__link",activeClassName:"breadcrumb__link__active","aria-current":t===m.length-1?"page":null},f),e.crumbLabel),t===m.length-1?null:i.default.createElement("span",{className:"breadcrumb__separator","aria-hidden":"true"},e.crumbSeparator))})))))};f.defaultProps={title:"",crumbSeparator:" / "},f.propTypes={location:u.default.shape().isRequired,crumbLabel:u.default.string.isRequired,title:u.default.string,crumbSeparator:u.default.string};var d=f;t.default=d},3365:function(e,t,r){"use strict";var n=r(7914);t.__esModule=!0;var a=n(r(2629));t.Breadcrumb=a.default;var o=n(r(8875));t.AutoGenCrumb=o.default;var i=r(8641);t.BreadcrumbContext=i.BreadcrumbContext,t.BreadcrumbConsumer=i.BreadcrumbConsumer,t.BreadcrumbProvider=i.BreadcrumbProvider;var u=n(r(7121));t.useBreadcrumb=u.default},7121:function(e,t,r){"use strict";var n=r(7914);t.__esModule=!0,t.default=void 0;var a=n(r(7378)),o=r(8641),i=function(e){var t=e.location,r=e.crumbLabel,n=e.crumbSeparator,i=a.default.useContext(o.BreadcrumbContext),u=i.crumbs,c=i.updateCrumbs;return a.default.useEffect((function(){c({location:t,crumbLabel:r,crumbSeparator:n})}),[t,r,n,c]),{crumbs:u}};t.default=i},2768:function(e,t,r){"use strict";var n=r(3365);t.aG=n.Breadcrumb,n.BreadcrumbContext,n.BreadcrumbConsumer,n.BreadcrumbProvider,n.useBreadcrumb,n.AutoGenCrumb}}]);
//# sourceMappingURL=8bf7230aa4407a8e8b67e4656af205c6b4529a6a-6e62892f6210764f2fa9.js.map