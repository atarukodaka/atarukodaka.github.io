(self.webpackChunksite=self.webpackChunksite||[]).push([[466],{3180:function(e,t,a){"use strict";a.d(t,{Z:function(){return O}});var o=a(7378),n=a(2073),i=a(9603),r=a(3721),l=a(8037),d=a(7204),s=a(6250),c=a(3697),p=a(6466);var u=a(2201),m=a(6054),g=a(7833),b=a(5296),h=(0,b.Z)(o.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),v=(0,b.Z)(o.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),y=(0,b.Z)(o.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),f=(0,b.Z)(o.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),Z=a(7405),x=o.forwardRef((function(e,t){var a=e.classes,n=e.className,d=e.color,s=void 0===d?"standard":d,c=e.component,p=e.disabled,u=void 0!==p&&p,b=e.page,x=e.selected,C=void 0!==x&&x,k=e.shape,$=void 0===k?"round":k,N=e.size,z=void 0===N?"medium":N,B=e.type,P=void 0===B?"page":B,L=e.variant,w=void 0===L?"text":L,M=(0,r.Z)(e,["classes","className","color","component","disabled","page","selected","shape","size","type","variant"]),O=("rtl"===(0,m.Z)().direction?{previous:f,next:y,last:h,first:v}:{previous:y,next:f,first:h,last:v})[P];return"start-ellipsis"===P||"end-ellipsis"===P?o.createElement("div",{ref:t,className:(0,l.Z)(a.root,a.ellipsis,u&&a.disabled,"medium"!==z&&a["size".concat((0,Z.Z)(z))])},"…"):o.createElement(g.Z,(0,i.Z)({ref:t,component:c,disabled:u,focusVisibleClassName:a.focusVisible,className:(0,l.Z)(a.root,a.page,a[w],a[$],n,"standard"!==s&&a["".concat(w).concat((0,Z.Z)(s))],u&&a.disabled,C&&a.selected,"medium"!==z&&a["size".concat((0,Z.Z)(z))])},M),"page"===P&&b,O?o.createElement(O,{className:a.icon}):null)})),C=(0,d.Z)((function(e){return{root:(0,i.Z)({},e.typography.body2,{borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:e.palette.text.primary}),page:{transition:e.transitions.create(["color","background-color"],{duration:e.transitions.duration.short}),"&:hover":{backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},"&$focusVisible":{backgroundColor:e.palette.action.focus},"&$selected":{backgroundColor:e.palette.action.selected,"&:hover, &$focusVisible":{backgroundColor:(0,u.U1)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.palette.action.selected}},"&$disabled":{opacity:1,color:e.palette.action.disabled,backgroundColor:e.palette.action.selected}},"&$disabled":{opacity:e.palette.action.disabledOpacity}},sizeSmall:{minWidth:26,height:26,borderRadius:13,margin:"0 1px",padding:"0 4px","& $icon":{fontSize:e.typography.pxToRem(18)}},sizeLarge:{minWidth:40,height:40,borderRadius:20,padding:"0 10px",fontSize:e.typography.pxToRem(15),"& $icon":{fontSize:e.typography.pxToRem(22)}},textPrimary:{"&$selected":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover, &$focusVisible":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}},"&$disabled":{color:e.palette.action.disabled}}},textSecondary:{"&$selected":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover, &$focusVisible":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}},"&$disabled":{color:e.palette.action.disabled}}},outlined:{border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$selected":{"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}}},outlinedPrimary:{"&$selected":{color:e.palette.primary.main,border:"1px solid ".concat((0,u.U1)(e.palette.primary.main,.5)),backgroundColor:(0,u.U1)(e.palette.primary.main,e.palette.action.activatedOpacity),"&:hover, &$focusVisible":{backgroundColor:(0,u.U1)(e.palette.primary.main,e.palette.action.activatedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}},outlinedSecondary:{"&$selected":{color:e.palette.secondary.main,border:"1px solid ".concat((0,u.U1)(e.palette.secondary.main,.5)),backgroundColor:(0,u.U1)(e.palette.secondary.main,e.palette.action.activatedOpacity),"&:hover, &$focusVisible":{backgroundColor:(0,u.U1)(e.palette.secondary.main,e.palette.action.activatedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}},rounded:{borderRadius:e.shape.borderRadius},ellipsis:{height:"auto","&$disabled":{opacity:e.palette.action.disabledOpacity}},focusVisible:{},disabled:{},selected:{},icon:{fontSize:e.typography.pxToRem(20),margin:"0 -8px"}}}),{name:"MuiPaginationItem"})(x);function k(e,t,a){return"page"===e?"".concat(a?"":"Go to ","page ").concat(t):"Go to ".concat(e," page")}var $=o.forwardRef((function(e,t){e.boundaryCount;var a=e.classes,n=e.className,d=e.color,u=void 0===d?"standard":d,m=(e.count,e.defaultPage,e.disabled,e.getItemAriaLabel),g=void 0===m?k:m,b=(e.hideNextButton,e.hidePrevButton,e.onChange,e.page,e.renderItem),h=void 0===b?function(e){return o.createElement(C,e)}:b,v=e.shape,y=void 0===v?"round":v,f=(e.showFirstButton,e.showLastButton,e.siblingCount,e.size),Z=void 0===f?"medium":f,x=e.variant,$=void 0===x?"text":x,N=(0,r.Z)(e,["boundaryCount","classes","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"]),z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.boundaryCount,a=void 0===t?1:t,o=e.componentName,n=void 0===o?"usePagination":o,l=e.count,d=void 0===l?1:l,u=e.defaultPage,m=void 0===u?1:u,g=e.disabled,b=void 0!==g&&g,h=e.hideNextButton,v=void 0!==h&&h,y=e.hidePrevButton,f=void 0!==y&&y,Z=e.onChange,x=e.page,C=e.showFirstButton,k=void 0!==C&&C,$=e.showLastButton,N=void 0!==$&&$,z=e.siblingCount,B=void 0===z?1:z,P=(0,r.Z)(e,["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"]),L=(0,p.Z)({controlled:x,default:m,name:n,state:"page"}),w=(0,c.Z)(L,2),M=w[0],O=w[1],E=function(e,t){x||O(t),Z&&Z(e,t)},R=function(e,t){var a=t-e+1;return Array.from({length:a},(function(t,a){return e+a}))},S=R(1,Math.min(a,d)),V=R(Math.max(d-a+1,a+1),d),T=Math.max(Math.min(M-B,d-a-2*B-1),a+2),U=Math.min(Math.max(M+B,a+2*B+2),V[0]-2),I=[].concat((0,s.Z)(k?["first"]:[]),(0,s.Z)(f?[]:["previous"]),(0,s.Z)(S),(0,s.Z)(T>a+2?["start-ellipsis"]:a+1<d-a?[a+1]:[]),(0,s.Z)(R(T,U)),(0,s.Z)(U<d-a-1?["end-ellipsis"]:d-a>a?[d-a]:[]),(0,s.Z)(V),(0,s.Z)(v?[]:["next"]),(0,s.Z)(N?["last"]:[])),F=function(e){switch(e){case"first":return 1;case"previous":return M-1;case"next":return M+1;case"last":return d;default:return null}},A=I.map((function(e){return"number"==typeof e?{onClick:function(t){E(t,e)},type:"page",page:e,selected:e===M,disabled:b,"aria-current":e===M?"true":void 0}:{onClick:function(t){E(t,F(e))},type:e,page:F(e),selected:!1,disabled:b||-1===e.indexOf("ellipsis")&&("next"===e||"last"===e?M>=d:M<=1)}}));return(0,i.Z)({items:A},P)}((0,i.Z)({},e,{componentName:"Pagination"})).items;return o.createElement("nav",(0,i.Z)({"aria-label":"pagination navigation",className:(0,l.Z)(a.root,n),ref:t},N),o.createElement("ul",{className:a.ul},z.map((function(e,t){return o.createElement("li",{key:t},h((0,i.Z)({},e,{color:u,"aria-label":g(e.type,e.page,e.selected),shape:y,size:Z,variant:$})))}))))})),N=(0,d.Z)({root:{},ul:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}},{name:"MuiPagination"})($),z=a(6979),B=a(3251),P=a(561),L=a(934),w=a(6990),M=a(2861),O=function(e){var t=e.title,a=e.nodes,o=e.crumbs,i=e.pagination_parameters,r=e.showTitle,l=void 0===r||r;return(0,M.tZ)(B.Z,{title:t},(0,M.tZ)(P.Z,{title:t}),(0,M.tZ)(L.Z,{crumbs:o}),l&&(0,M.tZ)(w.Z,null,t),a.map((function(e){return(0,M.tZ)(z.y,{node:e,key:e.id})})),i&&(0,M.tZ)(n.Z,{display:"flex",justifyContent:"center",m:3},(0,M.tZ)(N,{count:i.numberOfPages,page:i.humanPageNumber,onChange:i.onChangeHandler})))}}}]);
//# sourceMappingURL=126555e73ea4bb91653dcdd155f91dfcf256147e-58d1cdff40e782cfcbe2.js.map