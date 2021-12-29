"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7017],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),l=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=l(a),h=n,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||i;return a?r.createElement(m,c(c({ref:t},d),{},{components:a})):r.createElement(m,c({ref:t},d))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<i;l++)c[l]=a[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},4256:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),c=["components"],o={id:"Visit_data_in_cache",title:"Visit data in cache"},s=void 0,l={unversionedId:"Cache_Library_User_Guides/Visit_data_in_cache",id:"Cache_Library_User_Guides/Visit_data_in_cache",title:"Visit data in cache",description:"Cachelib provides a concurrent iterator to visit unchained data (items) in a cache while other threads are inserting data to or removing data from the cache. At any time, an item visited by the iterator is guaranteed to be valid even if it is concurrently removed by another thread.",source:"@site/docs/Cache_Library_User_Guides/Visit_data_in_cache.md",sourceDirName:"Cache_Library_User_Guides",slug:"/Cache_Library_User_Guides/Visit_data_in_cache",permalink:"/docs/Cache_Library_User_Guides/Visit_data_in_cache",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Cache_Library_User_Guides/Visit_data_in_cache.md",tags:[],version:"current",frontMatter:{id:"Visit_data_in_cache",title:"Visit data in cache"},sidebar:"userguideSidebar",previous:{title:"Remove data from cache",permalink:"/docs/Cache_Library_User_Guides/Remove_data_from_cache"},next:{title:"FAQ",permalink:"/docs/Cache_Library_User_Guides/faq"}},d=[],u={toc:d};function p(e){var t=e.components,a=(0,n.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Cachelib provides a concurrent iterator to visit unchained data (items) in a cache while other threads are inserting data to or removing data from the cache. At any time, an item visited by the iterator is guaranteed to be valid even if it is concurrently removed by another thread."),(0,i.kt)("p",null,"The current iterator is ",(0,i.kt)("em",{parentName:"p"},"unordered"),"; that is, the order it visits the items is not the same as the order in which they're written to the cache. During iteration, it guarantees visiting all items that exist in the cache. Iterating the cache does not block any other cache operation like ",(0,i.kt)("inlineCode",{parentName:"p"},"find()")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"allocate()"),". However, before calling the ",(0,i.kt)("inlineCode",{parentName:"p"},"shutDown()")," API to shut down the cache, you must release all iterators."),(0,i.kt)("p",null,"For example, suppose you write the following three items to cache:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'std::map<std::string, std::string> dict = {\n  { "key1", "item 1" },\n  { "key2", "item 2" },\n  { "key3", "item 3" },\n};\nfor (const auto& [k, v] : dict) {\n  auto item_handle = cache->allocate(pool_id, k, v.size());\n  std::memcpy(item_handle->getMemory(), v.data(), v.size());\n  cache->insertOrReplace(item_handle);\n}\n')),(0,i.kt)("p",null,"To visit these three items in the cache, use an iterator:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"for (auto itr = cache->begin(); itr != cache->end(); ++itr) {\n  auto key = itr->getKey();\n  auto data = reinterpret_cast<const char*>(itr->getMemory());\n  std::cout << key << \" -> \" << data << '\\n';\n}\n")),(0,i.kt)("p",null,"You can also use the shorter ",(0,i.kt)("inlineCode",{parentName:"p"},"for-each")," statement to visit them:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"for (const auto& itr : *cache) {\n  auto key = itr.getKey();\n  auto data = reinterpret_cast<const char*>(itr.getMemory());\n  std::cout << key << \" -> \" << data << '\\n';\n}\n")),(0,i.kt)("p",null,"Chained items are stored in cache as a linked list. For example, suppose you write three chained items to cache:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'std::string parent_item("parent item");\nauto parent_item_handle = cache->allocate(pool_id, "parent key", parent_item.size());\nstd::memcpy(parent_item_handle->getMemory(), parent_item.c_str(), parent_item.size());\ncache->insert(parent_item_handle);\n\nauto size = 100\nstd::vector<std::string> vitems = { "item 1", "item 2", "item 3" };\nfor (auto& itr : vitems) {\n  auto item_handle = cache->allocateChainedItem(parent_item_handle, size);\n  std::memcpy(item_handle->getMemory(), itr.c_str(), itr.size());\n  cache->addChainedItem(parent_item_handle, std::move(item_handle));\n}\n')),(0,i.kt)("p",null,"To visit the chained items, use the parent ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemHandle")," to traverse the list:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"auto chained_allocs = cache->viewAsChainedAllocs(parent_item_handle);\nfor (const auto& c : chained_allocs.getChain()) {\n  auto data = reinterpret_cast<const char*>(c.getMemory());\n  std::cout << data << '\\n';\n}\n")))}p.isMDXComponent=!0}}]);