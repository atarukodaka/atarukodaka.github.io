(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"sJ6/":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a}));n("mXGw");var r=n("fgIA"),d=n("6It8"),l=n("ukhR"),o=n("dbyQ"),i=n("6h0R");function a(e){var t,n=e.data,a=e.pageContext;console.log("create/template: "+n.mdx.fields.slug);var s=n.mdx,c=a.breadcrumb.crumbs,u=s.fields.postTitle||s.frontmatter.title,b=s.frontmatter.description||s.excerpt,f=null===(t=s.frontmatter.cover)||void 0===t?void 0:t.publicURL,p=n.allMdx.nodes.map((function(e){return e.id})).indexOf(s.id),m=p>0?n.allMdx.nodes[p-1]:null,x=p<n.allMdx.nodes.length?n.allMdx.nodes[p+1]:null,v=n.allMdx.nodes.filter((function(e){return e.id!==s.id&&e.fields.directory===s.fields.directory}));return Object(i.b)(d.a,{tableOfContents:s.tableOfContents},Object(i.b)(o.a,{title:u,description:b,cover:f}),Object(i.b)(r.a,{crumbs:c,crumbLabel:u}),Object(i.b)(l.a,{node:s,siblings:v,prevPost:m,nextPost:x}))}}}]);
//# sourceMappingURL=component---gatsby-theme-aksite-src-templates-post-template-js-64b4e5ca4d6600284f64.js.map