/*! For license information please see component---gatsby-theme-aksite-src-templates-post-template-js-29502d8bc096ef20d0b9.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"+Sw5":function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},"0qAl":function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},"4AAW":function(e,t,r){"use strict";var n=60103,o=60106,a=60107,i=60108,c=60114,l=60109,s=60110,d=60112,u=60113,p=60120,f=60115,b=60116,m=60121,h=60122,g=60117,y=60129,v=60131;if("function"==typeof Symbol&&Symbol.for){var O=Symbol.for;n=O("react.element"),o=O("react.portal"),a=O("react.fragment"),i=O("react.strict_mode"),c=O("react.profiler"),l=O("react.provider"),s=O("react.context"),d=O("react.forward_ref"),u=O("react.suspense"),p=O("react.suspense_list"),f=O("react.memo"),b=O("react.lazy"),m=O("react.block"),h=O("react.server.block"),g=O("react.fundamental"),y=O("react.debug_trace_mode"),v=O("react.legacy_hidden")}function j(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case a:case c:case i:case u:case p:return e;default:switch(e=e&&e.$$typeof){case s:case d:case b:case f:case l:return e;default:return t}}case o:return t}}}var w=l,x=n,k=d,C=a,S=b,R=f,E=o,M=c,A=i,P=u;t.ContextConsumer=s,t.ContextProvider=w,t.Element=x,t.ForwardRef=k,t.Fragment=C,t.Lazy=S,t.Memo=R,t.Portal=E,t.Profiler=M,t.StrictMode=A,t.Suspense=P,t.isAsyncMode=function(){return!1},t.isConcurrentMode=function(){return!1},t.isContextConsumer=function(e){return j(e)===s},t.isContextProvider=function(e){return j(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return j(e)===d},t.isFragment=function(e){return j(e)===a},t.isLazy=function(e){return j(e)===b},t.isMemo=function(e){return j(e)===f},t.isPortal=function(e){return j(e)===o},t.isProfiler=function(e){return j(e)===c},t.isStrictMode=function(e){return j(e)===i},t.isSuspense=function(e){return j(e)===u},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===c||e===y||e===i||e===u||e===p||e===v||"object"==typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===f||e.$$typeof===l||e.$$typeof===s||e.$$typeof===d||e.$$typeof===g||e.$$typeof===m||e[0]===h)},t.typeOf=j},"5WRv":function(e,t,r){var n=r("iNmH"),o=r("Qatm"),a=r("Zhxd"),i=r("kluZ");e.exports=function(e){return n(e)||o(e)||a(e)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},"8Jek":function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)&&n.length){var i=o.apply(null,n);i&&e.push(i)}else if("object"===a)for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},"8lrx":function(e,t,r){var n=r("uUj8"),o=r("5WRv"),a=r("OvAC"),i=r("PE9J");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s=r("mXGw"),d=r("/FXl").mdx,u=r("U+ow").useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,a=i(e,["scope","children"]),c=u(t),p=s.useMemo((function(){if(!r)return null;var e=l({React:s,mdx:d},c),t=Object.keys(e),a=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(a)))}),[r,t]);return s.createElement(p,l({},a))}},Qatm:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},Zhxd:function(e,t,r){var n=r("+Sw5");e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},iNmH:function(e,t,r){var n=r("+Sw5");e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},jRwh:function(e,t,r){var n=r("8lrx");e.exports={MDXRenderer:n}},kluZ:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},"sJ6/":function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return vt}));var n=r("mXGw"),o=r.n(n),a=r("fgIA"),i=r("6It8"),c=r("J5T5"),l=r("Wbzz"),s=r("/FXl"),d=r("jRwh"),u=r("JF+v"),p=r("XS4W"),f=r("Fcif"),b=r("+I+c"),m=r("dV/x"),h=r("PDtE"),g=r("Rx6o"),y=r("gbh0"),v=r("bJWG"),O=r("I9Y2"),j=Object(O.a)(n.createElement("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),w=Object(O.a)(n.createElement("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),x=Object(O.a)(n.createElement("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),k=Object(O.a)(n.createElement("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),C=Object(O.a)(n.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),S=r("oQEK"),R=r("mxPc"),E={success:n.createElement(j,{fontSize:"inherit"}),warning:n.createElement(w,{fontSize:"inherit"}),error:n.createElement(x,{fontSize:"inherit"}),info:n.createElement(k,{fontSize:"inherit"})},M=n.createElement(C,{fontSize:"small"}),A=n.forwardRef((function(e,t){var r=e.action,o=e.children,a=e.classes,i=e.className,c=e.closeText,l=void 0===c?"Close":c,s=e.color,d=e.icon,u=e.iconMapping,p=void 0===u?E:u,b=e.onClose,g=e.role,y=void 0===g?"alert":g,O=e.severity,j=void 0===O?"success":O,w=e.variant,x=void 0===w?"standard":w,k=Object(m.a)(e,["action","children","classes","className","closeText","color","icon","iconMapping","onClose","role","severity","variant"]);return n.createElement(v.a,Object(f.a)({role:y,square:!0,elevation:0,className:Object(h.a)(a.root,a["".concat(x).concat(Object(R.a)(s||j))],i),ref:t},k),!1!==d?n.createElement("div",{className:a.icon},d||p[j]||E[j]):null,n.createElement("div",{className:a.message},o),null!=r?n.createElement("div",{className:a.action},r):null,null==r&&b?n.createElement("div",{className:a.action},n.createElement(S.a,{size:"small","aria-label":l,title:l,color:"inherit",onClick:b},M)):null)})),P=Object(y.a)((function(e){var t="light"===e.palette.type?g.a:g.d,r="light"===e.palette.type?g.d:g.a;return{root:Object(f.a)({},e.typography.body2,{borderRadius:e.shape.borderRadius,backgroundColor:"transparent",display:"flex",padding:"6px 16px"}),standardSuccess:{color:t(e.palette.success.main,.6),backgroundColor:r(e.palette.success.main,.9),"& $icon":{color:e.palette.success.main}},standardInfo:{color:t(e.palette.info.main,.6),backgroundColor:r(e.palette.info.main,.9),"& $icon":{color:e.palette.info.main}},standardWarning:{color:t(e.palette.warning.main,.6),backgroundColor:r(e.palette.warning.main,.9),"& $icon":{color:e.palette.warning.main}},standardError:{color:t(e.palette.error.main,.6),backgroundColor:r(e.palette.error.main,.9),"& $icon":{color:e.palette.error.main}},outlinedSuccess:{color:t(e.palette.success.main,.6),border:"1px solid ".concat(e.palette.success.main),"& $icon":{color:e.palette.success.main}},outlinedInfo:{color:t(e.palette.info.main,.6),border:"1px solid ".concat(e.palette.info.main),"& $icon":{color:e.palette.info.main}},outlinedWarning:{color:t(e.palette.warning.main,.6),border:"1px solid ".concat(e.palette.warning.main),"& $icon":{color:e.palette.warning.main}},outlinedError:{color:t(e.palette.error.main,.6),border:"1px solid ".concat(e.palette.error.main),"& $icon":{color:e.palette.error.main}},filledSuccess:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.success.main},filledInfo:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.info.main},filledWarning:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.warning.main},filledError:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.error.main},icon:{marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9},message:{padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}}}),{name:"MuiAlert"})(A),_=r("BQn0"),z=r("V2/N"),N=r("/ZiB"),L=r("6h0R"),$=r("gtWh"),I=r("5EGp"),W=r.n(I),B=r("8XCd");var T=Object(L.a)("width:","120px",";height:","120px",";float:left;padding:0px;overflow:hidden;position:relative;.gatsby-image-wrapper{width:100%;height:","120px",";top:0px;position:absolute;object-fit:cover;}",""),D=Object(c.a)("div",{target:"e1gn8v933"})({name:"blm4sn",styles:"font-size:1rem;font-weight:bold;padding-top:1rem;overflow:hidden;white-space:nowrap;text-overflow:ellipsis"}),H=Object(c.a)("div",{target:"e1gn8v932"})({name:"pwh6x2",styles:"font-size:0.8rem;padding-top:1rem"}),F=Object(c.a)("div",{target:"e1gn8v931"})({name:"1oang2u",styles:"color:gray;margin-top:0.5rem"}),V=Object(c.a)("div",{target:"e1gn8v930"})({name:"sffzb7",styles:"clear:both"}),U=function(e){var t=e.url,r=e.title,n=e.domain,o=e.description,a=e.imgNode,i=e.image;return Object(L.b)(B.a,{style:{marginBottom:"1rem"}},Object(L.b)("a",{href:t,target:"_blank",rel:"noreferrer"},Object(L.b)(_.a,{boxShadow:2},Object(L.b)("div",{css:T},null!=a&&a.childImageSharp?Object(L.b)(W.a,{fluid:a.childImageSharp.fluid}):Object(L.b)("img",{src:i})),Object(L.b)(_.a,{ml:16,px:2},Object(L.b)(D,null,r),Object(L.b)(H,null,null==o?void 0:o.substr(0,100)),Object(L.b)(F,null,n),Object(L.b)(V,null)))))},X=function(e){var t=e.url,r=Object(l.useStaticQuery)("2795448874"),n=r.allLinksYaml.nodes.find((function(e){return e.url===t}));if(!n)return console.log("LinkExternal: no such url. registere it in src/data/links.yaml:\n- url: "+t),U({title:t,url:t,domain:new URL(t||"").hostname});var o=n.fields,a=o.title,i=o.domain,c=o.description,s=o.image,d=r.ogpImages.nodes.find((function(e){return e.fields.url===t}));return U({title:a,domain:i,description:c,imgNode:d,image:s,url:t})},q=r("fvRo"),J=r("Lsui"),G=function(e){var t=e.title,r=e.current,n=e.display,o=void 0===n?"card":n,a=Object(J.a)().nodes.filter((function(e){var r;return(null===(r=e.frontmatter.series)||void 0===r?void 0:r.title)===t})).sort((function(e,t){return e.frontmatter.series.number-t.frontmatter.series.number})),i=parseInt(r);switch(o){case"text":return Object(L.b)("ul",null,a.map((function(e){return Object(L.b)("li",{key:e.id},e.frontmatter.series.number===i?e.fields.postTitle:Object(L.b)(l.Link,{to:e.fields.path},e.fields.postTitle))})));default:return Object(L.b)("nav",null,a.map((function(e){return Object(L.b)(q.a,{node:e,display:"card",key:e.id})})))}};var Z={name:"1xw31mf",styles:'position:relative;display:inline-block;margin:1.5em 0 1.5em 15px;padding:7px 10px;min-width:120px;max-width:100%;color:#555;font-size:16px;background:#e0edff;padding:1rem;&:before{content:"";position:absolute;top:50%;left:-30px;margin-top:-15px;border:15px solid transparent;border-right:15px solid #e0edff;}'},Q=function(e){var t=e.children;e.tail;return Object(L.b)(o.a.Fragment,null,Object(L.b)(W.a,{src:"./haruurara.jpg"}),Object(L.b)("div",{css:Z},t))},Y=r("Cpn1"),K=r("tdEy"),ee=r("TJjZ"),te=r("IoK0");var re=r("aNYv"),ne=(r("uoBg"),r("IArN"));var oe=n.createContext({}),ae=r("omU1"),ie=n.forwardRef((function(e,t){var r,o=e.children,a=e.classes,i=e.className,c=e.defaultExpanded,l=void 0!==c&&c,s=e.disabled,d=void 0!==s&&s,u=e.expanded,p=e.onChange,b=e.square,g=void 0!==b&&b,y=e.TransitionComponent,O=void 0===y?ne.a:y,j=e.TransitionProps,w=Object(m.a)(e,["children","classes","className","defaultExpanded","disabled","expanded","onChange","square","TransitionComponent","TransitionProps"]),x=Object(ae.a)({controlled:u,default:l,name:"Accordion",state:"expanded"}),k=Object(re.a)(x,2),C=k[0],S=k[1],R=n.useCallback((function(e){S(!C),p&&p(e,!C)}),[C,p,S]),E=n.Children.toArray(o),M=(r=E,Object(Y.a)(r)||Object(K.a)(r)||Object(ee.a)(r)||Object(te.a)()),A=M[0],P=M.slice(1),_=n.useMemo((function(){return{expanded:C,disabled:d,toggle:R}}),[C,d,R]);return n.createElement(v.a,Object(f.a)({className:Object(h.a)(a.root,i,C&&a.expanded,d&&a.disabled,!g&&a.rounded),ref:t,square:g},w),n.createElement(oe.Provider,{value:_},A),n.createElement(O,Object(f.a)({in:C,timeout:"auto"},j),n.createElement("div",{"aria-labelledby":A.props.id,id:A.props["aria-controls"],role:"region"},P)))})),ce=Object(y.a)((function(e){var t={duration:e.transitions.duration.shortest};return{root:{position:"relative",transition:e.transitions.create(["margin"],t),"&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:e.palette.divider,transition:e.transitions.create(["opacity","background-color"],t)},"&:first-child":{"&:before":{display:"none"}},"&$expanded":{margin:"16px 0","&:first-child":{marginTop:0},"&:last-child":{marginBottom:0},"&:before":{opacity:0}},"&$expanded + &":{"&:before":{display:"none"}},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},rounded:{borderRadius:0,"&:first-child":{borderTopLeftRadius:e.shape.borderRadius,borderTopRightRadius:e.shape.borderRadius},"&:last-child":{borderBottomLeftRadius:e.shape.borderRadius,borderBottomRightRadius:e.shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},expanded:{},disabled:{}}}),{name:"MuiAccordion"})(ie),le=r("x+AB"),se=n.forwardRef((function(e,t){var r=e.children,o=e.classes,a=e.className,i=e.expandIcon,c=e.IconButtonProps,l=e.onBlur,s=e.onClick,d=e.onFocusVisible,u=Object(m.a)(e,["children","classes","className","expandIcon","IconButtonProps","onBlur","onClick","onFocusVisible"]),p=n.useState(!1),b=p[0],g=p[1],y=n.useContext(oe),v=y.disabled,O=void 0!==v&&v,j=y.expanded,w=y.toggle;return n.createElement(le.a,Object(f.a)({focusRipple:!1,disableRipple:!0,disabled:O,component:"div","aria-expanded":j,className:Object(h.a)(o.root,a,O&&o.disabled,j&&o.expanded,b&&o.focused),onFocusVisible:function(e){g(!0),d&&d(e)},onBlur:function(e){g(!1),l&&l(e)},onClick:function(e){w&&w(e),s&&s(e)},ref:t},u),n.createElement("div",{className:Object(h.a)(o.content,j&&o.expanded)},r),i&&n.createElement(S.a,Object(f.a)({className:Object(h.a)(o.expandIcon,j&&o.expanded),edge:"end",component:"div",tabIndex:null,role:null,"aria-hidden":!0},c),i))})),de=Object(y.a)((function(e){var t={duration:e.transitions.duration.shortest};return{root:{display:"flex",minHeight:48,transition:e.transitions.create(["min-height","background-color"],t),padding:e.spacing(0,2),"&:hover:not($disabled)":{cursor:"pointer"},"&$expanded":{minHeight:64},"&$focused":{backgroundColor:e.palette.action.focus},"&$disabled":{opacity:e.palette.action.disabledOpacity}},expanded:{},focused:{},disabled:{},content:{display:"flex",flexGrow:1,transition:e.transitions.create(["margin"],t),margin:"12px 0","&$expanded":{margin:"20px 0"}},expandIcon:{transform:"rotate(0deg)",transition:e.transitions.create("transform",t),"&:hover":{backgroundColor:"transparent"},"&$expanded":{transform:"rotate(180deg)"}}}}),{name:"MuiAccordionSummary"})(se),ue=n.forwardRef((function(e,t){var r=e.classes,o=e.className,a=Object(m.a)(e,["classes","className"]);return n.createElement("div",Object(f.a)({className:Object(h.a)(r.root,o),ref:t},a))})),pe=Object(y.a)((function(e){return{root:{display:"flex",padding:e.spacing(1,2,2)}}}),{name:"MuiAccordionDetails"})(ue),fe=function(e){var t=e.warningText,r=e.children,n=t||"WARNING !!! SPOILER IS COMING !!! SURE TO OPEN ??";return Object(L.b)(ce,null,Object(L.b)(de,null,Object(L.b)(P,{severity:"warning"},Object(L.b)("strong",null,n))),Object(L.b)(pe,{style:{display:"block"}},Object(L.b)("div",{style:{color:"white"}},r)))},be=function(e){var t=e.variant,r=void 0===t?"info":t,n=e.children;return Object(L.b)(_.a,Object(f.a)({boxShadow:1,my:2,borderRadius:8,fontWeight:"bold"},{info:{fontSize:"1.1rem",padding:"0.5rem"},shout:{boxShadow:1,margin:2,borderRadious:8,textAlign:"center",fontSize:"1.5rem",padding:"1rem"}}[r]),n)};var me,he={name:"1tetgfu",styles:"margin:2rem;font-size:2.2rem;font-weight:800;text-align:center"},ge=function(e){var t=e.children,r=he;return Object(L.b)("div",{css:r},t)},ye=$.a.palette.text.secondary,ve=$.a.palette.action.active,Oe=Object(L.a)("padding-bottom:0.5rem;border-bottom:1px solid ",ve,";counter-increment:h2;counter-reset:h3;&:before{color:",ye,';font-size:large;content:counter(h2) ". ";}',""),je=Object(L.a)("padding-bottom:0.5rem;border-bottom:1px solid ",ve,";counter-increment:h3;counter-reset:h4;&:before{color:",ye,';font-size:large;content:counter(h2) "." counter(h3) ". ";}',""),we=Object(L.a)("padding-bottom:0.5rem;border-bottom:1px solid ",ve,";counter-increment:h4;counter-reset:h5;&:before{color:",ye,';font-size:large;content:counter(h2) "." counter(h3) "." counter(h4) ". ";}',""),xe=function(e){var t=e.children,r=Object(b.a)(e,["children"]);return Object(L.b)(N.a,Object(f.a)({variant:"h2",css:Oe},r),t)},ke=function(e){var t=e.children,r=Object(b.a)(e,["children"]);return Object(L.b)(N.a,Object(f.a)({variant:"h3",css:je},r),t)},Ce=function(e){var t=e.children,r=Object(b.a)(e,["children"]);return Object(L.b)(N.a,Object(f.a)({variant:"h4",css:we},r),t)},Se=function(){return{Alert:P,Baloon:Q,Box:_.a,Link:l.Link,LinkExternal:X,Series:G,Grid:z.a,Spoiler:fe,Callout:be,Asc256:ge,h2:xe,h3:ke,h4:Ce}},Re=(me=function(e,t){return(me=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}me(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),Ee=function(e){function t(t){var r=e.call(this,t)||this;return r.name="AssertionError",r}return Re(t,e),t}(Error);function Me(e,t){if(!e)throw new Ee(t)}function Ae(e){var t=Object.entries(e).filter((function(e){var t=e[1];return null!=t})).map((function(e){var t=e[0],r=e[1];return encodeURIComponent(t)+"="+encodeURIComponent(String(r))}));return t.length>0?"?"+t.join("&"):""}var Pe=r("8Jek"),_e=r.n(Pe),ze=function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(t,r)};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),Ne=function(){return(Ne=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},Le=function(e,t,r,n){return new(r||(r=Promise))((function(o,a){function i(e){try{l(n.next(e))}catch(t){a(t)}}function c(e){try{l(n.throw(e))}catch(t){a(t)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,c)}l((n=n.apply(e,t||[])).next())}))},$e=function(e,t){var r,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(c){a=[6,c],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},Ie=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},We=function(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then},Be=function(e,t){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-e/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-t/2}},Te=function(e,t){return{top:(window.screen.height-t)/2,left:(window.screen.width-e)/2}};function De(e,t,r){var n=t.height,o=t.width,a=Ie(t,["height","width"]),i=Ne({height:n,width:o,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},a),c=window.open(e,"",Object.keys(i).map((function(e){return e+"="+i[e]})).join(", "));if(r)var l=window.setInterval((function(){try{(null===c||c.closed)&&(window.clearInterval(l),r(c))}catch(e){console.error(e)}}),1e3);return c}var He=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.openShareDialog=function(e){var r=t.props,n=r.onShareWindowClose,o=r.windowHeight,a=void 0===o?400:o,i=r.windowPosition,c=void 0===i?"windowCenter":i,l=r.windowWidth,s=void 0===l?550:l;De(e,Ne({height:a,width:s},"windowCenter"===c?Be(s,a):Te(s,a)),n)},t.handleClick=function(e){return Le(t,void 0,void 0,(function(){var t,r,n,o,a,i,c,l,s,d;return $e(this,(function(u){switch(u.label){case 0:return t=this.props,r=t.beforeOnClick,n=t.disabled,o=t.networkLink,a=t.onClick,i=t.url,c=t.openShareDialogOnClick,l=t.opts,s=o(i,l),n?[2]:(e.preventDefault(),r?(d=r(),We(d)?[4,d]:[3,2]):[3,2]);case 1:u.sent(),u.label=2;case 2:return c&&this.openShareDialog(s),a&&a(e,s),[2]}}))}))},t}return ze(t,e),t.prototype.render=function(){var e=this.props,t=(e.beforeOnClick,e.children),r=e.className,n=e.disabled,a=e.disabledStyle,i=e.forwardedRef,c=(e.networkLink,e.networkName),l=(e.onShareWindowClose,e.openShareDialogOnClick,e.opts,e.resetButtonStyle),s=e.style,d=(e.url,e.windowHeight,e.windowPosition,e.windowWidth,Ie(e,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),u=_e()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!n,disabled:!!n},r),p=Ne(Ne(l?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},s),n&&a);return o.a.createElement("button",Ne({},d,{"aria-label":d["aria-label"]||c,className:u,onClick:this.handleClick,ref:i,style:p}),t)},t.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},t}(n.Component),Fe=function(){return(Fe=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};var Ve=function(e,t,r,a){function i(n,i){var c=r(n),l=Fe({},n);return Object.keys(c).forEach((function(e){delete l[e]})),o.a.createElement(He,Fe({},a,l,{forwardedRef:i,networkName:e,networkLink:t,opts:r(n)}))}return i.displayName="ShareButton-"+e,Object(n.forwardRef)(i)};var Ue=Ve("facebook",(function(e,t){var r=t.quote,n=t.hashtag;return Me(e,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+Ae({u:e,quote:r,hashtag:n})}),(function(e){return{quote:e.quote,hashtag:e.hashtag}}),{windowWidth:550,windowHeight:400}),Xe=function(){return(Xe=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},qe=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function Je(e){var t=function(t){var r=t.bgStyle,n=t.borderRadius,a=t.iconFillColor,i=t.round,c=t.size,l=qe(t,["bgStyle","borderRadius","iconFillColor","round","size"]);return o.a.createElement("svg",Xe({viewBox:"0 0 64 64",width:c,height:c},l),i?o.a.createElement("circle",{cx:"32",cy:"32",r:"31",fill:e.color,style:r}):o.a.createElement("rect",{width:"64",height:"64",rx:n,ry:n,fill:e.color,style:r}),o.a.createElement("path",{d:e.path,fill:a}))};return t.defaultProps={bgStyle:{},borderRadius:0,iconFillColor:"white",size:64},t}var Ge=Je({color:"#3b5998",networkName:"facebook",path:"M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"});var Ze=Ve("twitter",(function(e,t){var r=t.title,n=t.via,o=t.hashtags,a=void 0===o?[]:o,i=t.related,c=void 0===i?[]:i;return Me(e,"twitter.url"),Me(Array.isArray(a),"twitter.hashtags is not an array"),Me(Array.isArray(c),"twitter.related is not an array"),"https://twitter.com/share"+Ae({url:e,text:r,via:n,hashtags:a.length>0?a.join(","):void 0,related:c.length>0?c.join(","):void 0})}),(function(e){return{hashtags:e.hashtags,title:e.title,via:e.via,related:e.related}}),{windowWidth:550,windowHeight:400}),Qe=Je({color:"#00aced",networkName:"twitter",path:"M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"});var Ye=Ve("linkedin",(function(e,t){var r=t.title,n=t.summary,o=t.source;return Me(e,"linkedin.url"),"https://linkedin.com/shareArticle"+Ae({url:e,mini:"true",title:r,summary:n,source:o})}),(function(e){return{title:e.title,summary:e.summary,source:e.source}}),{windowWidth:750,windowHeight:600}),Ke=Je({color:"#007fb1",networkName:"linkedin",path:"M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z"});var et={name:"17rtmzd",styles:"display:inline-block;padding-bottom:0.2em;padding-top:0.5em;margin-bottom:2em;box-shadow:2px 2px 1px rgb(0 0 0 / 20%)"},tt={name:"1ine0vd",styles:"margin-right:0.5em;margin-left:0.5em;display:inline-block"},rt=function(e){var t=e.title,r=e.url,n=e.iconSize,o=e.round;return Object(L.b)("nav",{css:et},Object(L.b)("div",{css:tt},Object(L.b)(Ue,{url:r,title:t},Object(L.b)(Ge,{size:n,round:o}))),Object(L.b)("div",{css:tt},Object(L.b)(Ze,{url:r,title:t},Object(L.b)(Qe,{size:n,round:o}))),Object(L.b)("div",{css:tt},Object(L.b)(Ye,{url:r,title:t},Object(L.b)(Ke,{size:n,round:o}))))};rt.defaultProps={iconSize:32,round:!0};var nt=rt,ot=r("UN18"),at=r("bON6"),it=r("S/8n");var ct=Object(c.a)("div",{target:"edu07is3"})({name:"1dvcxr3",styles:"padding:1rem"}),lt=Object(c.a)("header",{target:"edu07is2"})({name:"1esi57r",styles:"box-shadow:0px 1px rgb(0 0 0 / 10%)"}),st=Object(c.a)("main",{target:"edu07is1"})({name:"1gf76k2",styles:"margin-top:1rem;padding-bottom:1rem;padding-right:1rem"}),dt=Object(c.a)("footer",{target:"edu07is0"})({name:"1yj4206",styles:"border-top:solid 1px;padding-top:1rem"}),ut={name:"vonms4",styles:"margin-top:2em;margin-bottom:2em"},pt=function(e){var t=e.children;return Object(L.b)(s.MDXProvider,{components:Se},Object(L.b)(d.MDXRenderer,null,t))},ft=function(e){var t=e.node,r=Object(u.useLocation)().pathname,n=Object(it.a)().siteUrl;return Object(L.b)("div",{css:ut},Object(L.b)(lt,null,Object(L.b)("div",null,t.frontmatter.date,Object(L.b)(p.a,{directory:t.fields.directory,enableLink:!0})),Object(L.b)(at.a,null,Object(L.b)(l.Link,{to:t.fields.path},t.fields.postTitle)),Object(L.b)(ot.a,{node:t}),Object(L.b)(ct,null,t.frontmatter.description)),Object(L.b)(st,null,Object(L.b)(pt,null,t.body)),Object(L.b)(dt,null,Object(L.b)(nt,{url:""+n+r,title:t.fields.postTitle})))},bt=r("dbyQ"),mt=function(e){var t=e.node;return t?Object(L.b)(q.a,{node:t,label:t.fields.postTitle+"》",display:"box",style:{textAlign:"right"}}):""},ht=function(e){var t=e.node;return t?Object(L.b)(q.a,{node:t,label:"《"+t.fields.postTitle,display:"box"}):""},gt=function(e){var t=e.node,r=Object(J.a)().nodes.sort((function(e,t){return new Date(e.frontmatter.date)-new Date(t.frontmatter.date)})),n=r.map((function(e){return e.id})).indexOf(t.id),o=n>0?r[n-1]:null,a=n<r.length?r[n+1]:null;return Object(L.b)("nav",null,Object(L.b)(z.a,{container:!0},Object(L.b)(z.a,{item:!0,md:6,sm:12},Object(L.b)(ht,{node:a})),Object(L.b)(z.a,{item:!0,md:6,sm:12},Object(L.b)(mt,{node:o}))))},yt=function(e){var t=e.node,r=Object(J.a)().nodes.filter((function(e){return e.id!==t.id&&e.fields.directory===t.fields.directory}));return Object(L.b)("div",{style:{marginBottom:"2rem"}},r.slice(0,5).map((function(e){return Object(L.b)(q.a,{node:e,display:"card",key:e.id})})))};function vt(e){var t,r=e.data,n=e.pageContext;e.location;console.log("create/template: "+r.mdx.fields.slug);var o=r.mdx,c=n.isRoot,l=n.breadcrumb.crumbs,s=o.fields.postTitle||o.frontmatter.title,d=o.frontmatter.description||o.excerpt,u=null===(t=o.frontmatter.cover)||void 0===t?void 0:t.publicURL,p=c?null:o.fields.postTitle;return Object(L.b)(i.a,{tableOfContents:o.tableOfContents},Object(L.b)(bt.a,{title:s,description:d,cover:u}),Object(L.b)(a.a,{crumbs:l,crumbLabel:p}),Object(L.b)(ft,{node:o}),Object(L.b)("nav",null,Object(L.b)(gt,{node:o}),Object(L.b)("h3",null,"Relevant Posts"),Object(L.b)(yt,{node:o})))}},uUj8:function(e,t,r){var n=r("WI9V"),o=r("0qAl");function a(t,r,i){return o()?(e.exports=a=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=a=function(e,t,r){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return r&&n(a,r.prototype),a},e.exports.default=e.exports,e.exports.__esModule=!0),a.apply(null,arguments)}e.exports=a,e.exports.default=e.exports,e.exports.__esModule=!0},uoBg:function(e,t,r){"use strict";e.exports=r("4AAW")}}]);
//# sourceMappingURL=component---gatsby-theme-aksite-src-templates-post-template-js-29502d8bc096ef20d0b9.js.map