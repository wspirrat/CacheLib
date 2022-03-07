"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5317],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),h=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},l=function(e){var t=h(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=h(a),d=r,m=u["".concat(i,".").concat(d)]||u[d]||p[d]||s;return a?n.createElement(m,c(c({ref:t},l),{},{components:a})):n.createElement(m,c({ref:t},l))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,c=new Array(s);c[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var h=2;h<s;h++)c[h]=a[h];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7647:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return o},metadata:function(){return h},toc:function(){return p}});var n=a(7462),r=a(3366),s=(a(7294),a(3905)),c=["components"],o={id:"Cache_persistence",title:"Cache persistence"},i=void 0,h={unversionedId:"Cache_Library_User_Guides/Cache_persistence",id:"Cache_Library_User_Guides/Cache_persistence",title:"Cache persistence",description:"Cachelib supports persisting the cache across process restarts. This is useful when you want to restart your binary that contains a  cache and not lose the cache upon restart.  Cache persistence only works when you restart your process in the same machine. This does not provide persistence across machines.",source:"@site/docs/Cache_Library_User_Guides/Cache_persistence.md",sourceDirName:"Cache_Library_User_Guides",slug:"/Cache_Library_User_Guides/Cache_persistence",permalink:"/docs/Cache_Library_User_Guides/Cache_persistence",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Cache_Library_User_Guides/Cache_persistence.md",tags:[],version:"current",frontMatter:{id:"Cache_persistence",title:"Cache persistence"},sidebar:"userguideSidebar",previous:{title:"Remove callback",permalink:"/docs/Cache_Library_User_Guides/Remove_callback"},next:{title:"Cross Host Cache Persistence",permalink:"/docs/Cache_Library_User_Guides/Cross_Host_Cache_Persistence"}},l={},p=[{value:"Create a persistent cache",id:"create-a-persistent-cache",level:2},{value:"Shut down a persistent cache",id:"shut-down-a-persistent-cache",level:2},{value:"Restore a persistent cache",id:"restore-a-persistent-cache",level:2},{value:"Drop persistent cache",id:"drop-persistent-cache",level:2},{value:"Change configs",id:"change-configs",level:2},{value:"Apply best practices",id:"apply-best-practices",level:2},{value:"Common failure scenarios",id:"common-failure-scenarios",level:2}],u={toc:p};function d(e){var t=e.components,a=(0,r.Z)(e,c);return(0,s.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Cachelib supports ",(0,s.kt)("em",{parentName:"p"},"persisting the cache across process restarts"),". This is useful when you want to restart your binary that contains a  cache and not lose the cache upon restart.  Cache persistence only works when you restart your process in the same machine. This does not provide persistence across machines."),(0,s.kt)("p",null,"Unlike a DB where persistent state is stored in a non-volatile medium like Disk or SSD, cachelib persists its cache by retaining the memory associated with the cache across processes. Hence using a persistent cache","\u2014","even the size of hundreds of GB","\u2014","does not impact the cache shutdown or creation, which is very quick."),(0,s.kt)("h2",{id:"create-a-persistent-cache"},"Create a persistent cache"),(0,s.kt)("p",null,"To make your cache persistent in memory, when creating the cache, you need to use the appropriate constructor of type ",(0,s.kt)("inlineCode",{parentName:"p"},"ShareMemNew")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"SharedMemAttach"),". To support persistence, you  need to provide a directory location (cache path) for cachelib to manage the persistence. This will be used to store some ",(0,s.kt)("em",{parentName:"p"},"small metadata")," about the cache instance that will help us restore the cache. This directory path also uniquely identifies the instance of the cache and only one cache instance can be active at any given time corresponding to a given path."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"Cache::Config config;\nconfig.setCacheSize(/* size of cache in bytes */);\nconfig.enableCachePersistence(/* directory for shared memory related metadata */);\n\nCache cache(Cache::SharedMemNew, config);\n// ... Use the cache\n")),(0,s.kt)("h2",{id:"shut-down-a-persistent-cache"},"Shut down a persistent cache"),(0,s.kt)("p",null,"To make sure that your cache is saved in the correct state, ",(0,s.kt)("em",{parentName:"p"},"ensure that you have drained all accesses to your cache")," and call the ",(0,s.kt)("inlineCode",{parentName:"p"},"shutdown()")," API in your process shutdown path. This ensures that cachelib saves all the relevant information to restore the cache."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"// Save the metadata and shut down after this point. After that,\n// accessing the cache content results in undefined behavior.\n//\n// Note: If you use cache admin, you must destroy it before calling shutdown\n//       (e.g., cacheAdmin->reset();)\nauto res = cache.shutDown();\nif (res == Cache::ShutDownStatus::kSuccess) {\n   // Successfully shut down the cache. Can attempt recovering.\n} else {\n   // Failure.\n}\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"ShutDownRes")," contains three possible states, which can be used to identify the state of the cache upon shutting down:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"enum class ShutDownRes { kSuccess = 0, kFileDeleted, kFailedWrite }\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"kSuccess")," means the metadata has been successfully saved. ",(0,s.kt)("inlineCode",{parentName:"p"},"kFileDeleted")," indicates that the cache directory was deleted while the cache was running. And ",(0,s.kt)("inlineCode",{parentName:"p"},"kFailedWrite")," indicates any other system error that prevented cachelib from saving the metadata."),(0,s.kt)("h2",{id:"restore-a-persistent-cache"},"Restore a persistent cache"),(0,s.kt)("p",null,"On start up, try to use the following constructor to attach to your previous instance of cache. Upon failure, you can create a new one like before. A common pattern that many cachelib users do is to try to always attach on startup; if attach fails, which will throw an exception, catch the exception and then try to create a new cache."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},'Cache::Config config;\nconfig.setCacheSize(/* this must be the same size you specified before */);\nconfig.enableCachePersistence(\n    /* this must be the same cache directory you specified before */);\n\nstd::unique_ptr<Cache> cache;\ntry {\n  cache = std::make_unique<Cache>(Cache::SharedMemAttach, config);\n  // Cache is now restored\n} catch (const std::exception& ex) {\n  // Attaching failed. Create a new one but make sure that\n  // the old cache is destroyed before creating a new one.\n  // This allows us to release any held resources (such as\n  // open file descriptors and associated fcntl locks).\n  cache.reset();\n  std::cerr << "Couldn\'t attach to cache: " << ex.what() << std::endl;\n  cache = std::make_unique<Cache>(Cache::SharedMemNew, config);\n}\n')),(0,s.kt)("h2",{id:"drop-persistent-cache"},"Drop persistent cache"),(0,s.kt)("p",null,"Sometimes you would like your cache to be not persistent when you restart your process. There are two ways to accomplish this:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Calling the ",(0,s.kt)("inlineCode",{parentName:"li"},"SharedMemNew")," constructor will always create a new instance and blow away the old one."),(0,s.kt)("li",{parentName:"ol"},"Indicate to cachelib by blowing away the cache directory that you passed in the ",(0,s.kt)("inlineCode",{parentName:"li"},"Config"),". This will cause ",(0,s.kt)("inlineCode",{parentName:"li"},"SharedMemAttach")," to throw an exception.")),(0,s.kt)("h2",{id:"change-configs"},"Change configs"),(0,s.kt)("p",null,"When you attach to an existing cache, cachelib will try to incorporate the config changes; however not all configs can be changed while attaching. Notice these two important points:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The size of the cache is immutable unless you drop the previous instance."),(0,s.kt)("li",{parentName:"ul"},"If using chained items, you must call ",(0,s.kt)("inlineCode",{parentName:"li"},"config.enableChainedItems()")," before constructing the cache. This instructs the cache to save the chained items's hash table so that chained items are accessible on restart.")),(0,s.kt)("h2",{id:"apply-best-practices"},"Apply best practices"),(0,s.kt)("p",null,"If you haven't done so, ",(0,s.kt)("em",{parentName:"p"},"please consider adding a try-catch block in your main or any top level code that will be working with cachelib API"),". This is because cachelib APIs can throw exceptions, and when it comes to persisting states, we expect the stack to be properly unwound to ensure the state is not corrupted. Uncaught exception does not unwind the stack properly and can lead to state corruption for cachelib. For more information, see ",(0,s.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/39962999/is-stack-unwinding-with-exceptions-guaranteed-by-c-standard"},"Is stack unwinding with exceptions guaranteed by C++ standard?")," on StackOverflow."),(0,s.kt)("h2",{id:"common-failure-scenarios"},"Common failure scenarios"),(0,s.kt)("p",null,"When using persistent setup, CacheLib locks the path to ensure only one instance can operate corresponding to a given cache path. When you see failures to startup due to ",(0,s.kt)("em",{parentName:"p"},'"Can not lock shm metadata file: Device or resource busy"'),", this usually means there are more than one processes attempting to have operate a cache with the same path. To resolve this, look for zombie processes or other processes that might be still running with an active cachelib instance corresponding to the same cache path."))}d.isMDXComponent=!0}}]);