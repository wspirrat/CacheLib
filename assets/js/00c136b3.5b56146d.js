"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4702],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,h=d["".concat(l,".").concat(u)]||d[u]||p[u]||o;return n?r.createElement(h,c(c({ref:t},m),{},{components:n})):r.createElement(h,c({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5602:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),c=["components"],i={id:"Remove_data_from_cache",title:"Remove data from cache"},l=void 0,s={unversionedId:"Cache_Library_User_Guides/Remove_data_from_cache",id:"Cache_Library_User_Guides/Remove_data_from_cache",title:"Remove data from cache",description:"To remove data from cache, call these methods declared in allocator/CacheAllocator.h:",source:"@site/docs/Cache_Library_User_Guides/Remove_data_from_cache.md",sourceDirName:"Cache_Library_User_Guides",slug:"/Cache_Library_User_Guides/Remove_data_from_cache",permalink:"/docs/Cache_Library_User_Guides/Remove_data_from_cache",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Cache_Library_User_Guides/Remove_data_from_cache.md",tags:[],version:"current",frontMatter:{id:"Remove_data_from_cache",title:"Remove data from cache"},sidebar:"userguideSidebar",previous:{title:"Read data from cache",permalink:"/docs/Cache_Library_User_Guides/Read_data_from_cache"},next:{title:"Visit data in cache",permalink:"/docs/Cache_Library_User_Guides/Visit_data_in_cache"}},m={},p=[],d={toc:p};function u(e){var t=e.components,i=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To remove data from cache, call these methods declared in allocator/CacheAllocator.h:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"template <typename CacheTrait>\nclass CacheAllocator : public CacheBase {\n  public:\n    // Remove the item with the specified key.\n    RemoveRes remove(Key key);\n\n    // Remove the item pointed to by the specified handle.\n    RemoveRes remove(const ReadHandle& handle);\n\n    // Remove the first chained item pointed to by the parent handle.\n    ItemHandle popChainedItem(const ItemHandle& parent)\n  ...\n};\n")),(0,o.kt)("p",null,"where ",(0,o.kt)("inlineCode",{parentName:"p"},"RemoveRes")," is an enum class defined in allocator/CacheAllocator.h:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"enum class RemoveRes : uint8_t {\n  kSuccess,\n  kNotFoundInRam,\n};\n")),(0,o.kt)("p",null,"For example, the following code removes an item with key ",(0,o.kt)("inlineCode",{parentName:"p"},'"key1"'),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'auto rr = cache->remove("key1");\nif (rr == RemoveRes::kSuccess) {\n  std::cout << "Removed the item with key \\"key1\\"" << \'\\n\';\n}\n')),(0,o.kt)("p",null,"You can also remove the item as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'auto handle = cache->find("key1");\nif (handle) {\n  auto rr = cache->remove(handle);\n  if (rr == RemoveRes::kSuccess) {\n    std::cout << "Removed the item with key \\"key1\\"" << \'\\n\';\n  }\n}\n')),(0,o.kt)("p",null,"If you write the following three items to cache:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'std::map<std::string, std::string> dict = {\n  { "key1", "item 1" },\n  { "key2", "item 2" },\n  { "key3", "item 3" },\n};\nfor (auto& itr : dict) {\n  auto handle = cache->allocate(poolId, itr.first, itr.second.size());\n  std::memcpy(handle->getMemory(), itr.first.data(), itr.second.size());\n  cache->insertOrReplace(handle);\n}\n')),(0,o.kt)("p",null,"you can iterate and remove the three items:"),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"for (auto itr = cache->begin(); itr != cache->end(); ++itr) {\n  auto rr = cache->remove(itr.asHandle());\n  if (rr == RemoveRes::kSuccess) {\n    cout << \"Removed the item\" << '\\n';\n  }\n}\n\n")),(0,o.kt)("p",null,"Note that ",(0,o.kt)("inlineCode",{parentName:"p"},"it.asHandle()")," returns the item handle for the  iterator"),(0,o.kt)("p",null,"Consider the following chained items:"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",src:n(4336).Z,width:"443",height:"59"})),(0,o.kt)("p",null,"To remove the first chained item (",(0,o.kt)("inlineCode",{parentName:"p"},"item 1"),"), call the ",(0,o.kt)("inlineCode",{parentName:"p"},"popChainedItem()")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"auto handle = cache->popChainedItem(parentItemHandle);\nif (handle) {\n  cout << \"Removed the first chained item\" << '\\n';\n}\n")),(0,o.kt)("p",null,"If you remove the parent item, all its chained items are also removed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"rr = cache->remove(parentItemHandle);\nif (rr == RemoveRes::kSuccess) {\n  parentItemHandle->reset();\n}\n")))}u.isMDXComponent=!0},4336:function(e,t){t.Z="data:image/png;base64,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7Nixg/Pnz3Pq1CneeecdVq5cycWLF2PtHw6H+eCDD+ju7ubSpUtj3sPlcjE4OMjevXv5888/OXnyJNXV1dd92fng4OCErmmyG9mzzc3NZd26dXzxxRf09PTwxhtvcPfdd9s69si2vtnMZHwm5/v111/T19fH2rVrOXfuHN3d3XR3dyf9O2mJZHK+LpeL48ePc/jwYQYGBjh27BgtLS22lzckYM/uzjvvxOl04vF4SE9PZ/Xq1VRXVxONRuns7KSyspJZs2bh8Xh45pln2LZtG++9996o98jNzWX37t3U19fz7rvvMnPmTGpqaqioqKC/vz/u+MuWLaOuro7t27eP2XM0SUZGBpZlkZmZSUVFBY899hhut5usrKyEzeHqbX2jmclYqZLvmTNnuHjx4pgrbR988EH27Nlzs0uYtFIl36KiIl5//XUaGxvx+Xw4nU5qa2t55JFHJnAl15ZmXbU/f/DgQdatWzchXy7s6Ojgtdde49NPP73p95osgsEgdXV1k+owyLRp03C73WzcuJGKigpmzJgx7usmMl8TKV+zKV+zxcm32fY9O7FHWloaS5Ysobq6msrKyus6/i9Th/I1m/JNPFvLzul0JuRYbCqaOXMmX375ZbKnITZRvmZTvolna9ktWLAgId+MFxERicfM/4NHRETkf6jsRETEeCo7ERExnspORESMp7ITERHjqexERMR4KjsRETGeyk5ERIynshMREeOp7ERExHgqOxERMZ7KTkREjKeyExER46nsRETEeCo7EREx3ri/zy4YDCZyHlPG6dOnkz2FCaF8r035mk35mi1evuOWXV1dnS2TkclB+ZpN+ZpN+f7/0izLspI9CRERERs165ydiIgYT2UnIiLGU9mJiIjxMoHmZE9CRETERv/5L+WkMQlqwL5rAAAAAElFTkSuQmCC"}}]);