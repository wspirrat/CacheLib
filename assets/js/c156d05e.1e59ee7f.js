"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2480],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9179:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={id:"automatic_pool_resizing",title:"Automatic pool resizing"},s=void 0,u={unversionedId:"Cache_Library_User_Guides/automatic_pool_resizing",id:"Cache_Library_User_Guides/automatic_pool_resizing",title:"Automatic pool resizing",description:"This feature is incomplete and untested in prod. If you're interested, reach out to us and we can work out a plan to complete it.",source:"@site/docs/Cache_Library_User_Guides/automatic_pool_resizing.md",sourceDirName:"Cache_Library_User_Guides",slug:"/Cache_Library_User_Guides/automatic_pool_resizing",permalink:"/docs/Cache_Library_User_Guides/automatic_pool_resizing",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Cache_Library_User_Guides/automatic_pool_resizing.md",tags:[],version:"current",frontMatter:{id:"automatic_pool_resizing",title:"Automatic pool resizing"},sidebar:"userguideSidebar",previous:{title:"Pool rebalance strategy",permalink:"/docs/Cache_Library_User_Guides/pool_rebalance_strategy"},next:{title:"HybridCache",permalink:"/docs/Cache_Library_User_Guides/HybridCache"}},l={},p=[],d={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"This feature is incomplete and untested in prod. If you're interested, reach out to us and we can work out a plan to complete it.")),(0,a.kt)("p",null,"Cachelib requires an initial size to add a new pool or a new compact cache. With pool optimization, the sizes of different pools or compact caches can be automatically adjusted according to a criteria or strategy. This can (1) potentially reduce the efforts to search for a good size for pools and (2) make the pool sizes up to date."),(0,a.kt)("p",null,"For now we optimize the sizes for regular pools and the sizes for compact caches separately; the total memory for regular pools is constant and the total memory for compact caches is constant. We currently have one supported strategy:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"MarginalHits"),"\nSimilar to rebalancing, this strategy ensures that the marginal hits across different pools or compact caches are the same. To use this strategy, you need to use the MM2Q eviction policy and enable tail hits tracking.")))}m.isMDXComponent=!0}}]);