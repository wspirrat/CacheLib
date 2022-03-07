"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6930],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return u}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=n.createContext({}),c=function(e){var r=n.useContext(m),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(m.Provider,{value:r},e.children)},h={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,m=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(t),u=o,d=p["".concat(m,".").concat(u)]||p[u]||h[u]||a;return t?n.createElement(d,i(i({ref:r},l),{},{components:t})):n.createElement(d,i({ref:r},l))}));function u(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var s={};for(var m in r)hasOwnProperty.call(r,m)&&(s[m]=r[m]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},934:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return m},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return h}});var n=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],s={id:"oom_protection",title:"Oom protection"},m=void 0,c={unversionedId:"Cache_Library_User_Guides/oom_protection",id:"Cache_Library_User_Guides/oom_protection",title:"Oom protection",description:"Cachelib can dynamically grow or shrink the total cache footprint from its configured size based on the memory pressure in your system. We call this feature MemoryMonitor. When it is enabled, cachelib watches for the memory pressure through system metrics and releases cache memory back to the system. When the memory pressure eases, cachelib can reclaim back the memory and grow to its configured size. MemoryMonitor enables you to size your cache without having to worry about your system's running out of memory when regular heap memory grows or system free memory drops. It also enables you to be less relaxed about coming up with an optimal cache size or relaxing the head room you need to maintain in anticipation of sudden memory growth.",source:"@site/docs/Cache_Library_User_Guides/oom_protection.md",sourceDirName:"Cache_Library_User_Guides",slug:"/Cache_Library_User_Guides/oom_protection",permalink:"/docs/Cache_Library_User_Guides/oom_protection",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Cache_Library_User_Guides/oom_protection.md",tags:[],version:"current",frontMatter:{id:"oom_protection",title:"Oom protection"},sidebar:"userguideSidebar",previous:{title:"TTL Reaper",permalink:"/docs/Cache_Library_User_Guides/ttl_reaper"},next:{title:"Pool rebalance strategy",permalink:"/docs/Cache_Library_User_Guides/pool_rebalance_strategy"}},l={},h=[{value:"Free memory mode",id:"free-memory-mode",level:2},{value:"Resident memory mode",id:"resident-memory-mode",level:2}],p={toc:h};function u(e){var r=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,s,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Cachelib can dynamically ",(0,a.kt)("em",{parentName:"p"},"grow or shrink the total cache footprint")," from its configured size based on the memory pressure in your system. We call this feature ",(0,a.kt)("inlineCode",{parentName:"p"},"MemoryMonitor"),". When it is enabled, cachelib watches for the memory pressure through system metrics and releases cache memory back to the system. When the memory pressure eases, cachelib can reclaim back the memory and grow to its configured size. ",(0,a.kt)("inlineCode",{parentName:"p"},"MemoryMonitor")," enables you to size your cache without having to worry about your system's running out of memory when regular heap memory grows or system free memory drops. It also enables you to be ",(0,a.kt)("em",{parentName:"p"},"less relaxed about coming up with an optimal cache size")," or relaxing the head room you need to maintain in anticipation of sudden memory growth."),(0,a.kt)("p",null,"For example, suppose you had 60 GB of memory available for your operating process and decide to dedicate 30 GB for cachelib and your application heap consuming 20 GB. This leaves a head room of 10 GB for free memory in the system. Cachelib ensures that the cache memory never grows beyond 30 GB. However, the same may not be the case for your application's heap usage or other system resources. When you face a regression in either case, you devour your free memory and will eventually run out of memory (OOM). With ",(0,a.kt)("inlineCode",{parentName:"p"},"MemoryMonitor"),", you can configure cachelib to maintain the 10 GB head room even when the heap or other resources consume more than what is expected. This allows your cache to shrink below the configured 30 GB and grow back when memory pressure goes away. This effectively makes a OOM/SEV like situation more manageable to deal by rather lowering your hit ratio. Furthermore, you can be more aggressive about setting the free-memory even lower and rely on cachelib using up as much memory for caching and releasing it back when needed for your application."),(0,a.kt)("h1",{id:"enabling-memorymonitor"},"Enabling MemoryMonitor"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"MemoryMonitor")," is available in two modes depending on whether your binary runs in containers or runs without any containers. There are some parameters that are common between the two and some that are contrary. So make sure you understand the semantic differences."),(0,a.kt)("h2",{id:"free-memory-mode"},"Free memory mode"),(0,a.kt)("p",null,"In this mode, you ask cachelib to monitor the ",(0,a.kt)("em",{parentName:"p"},"total free memory")," in the system and give up the cache memory when free memory dips below a certain margin. This is useful mode when your process is the dominant one in the whole machine and you are not running in any container environment."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"config.enableMemoryMonitor(\n    std::chrono::seconds(interval),\n    memoryMonitoringConfig,\n    std::shared_ptr<facebook::cachelib::LruTailAgeStrategy>());\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"interval"),":\nThis specifies the frequency at which cachelib monitors the system free memory and decides to shrink or grow the cache.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"memoryMonitoringConfig"),":\nSpecifies the memory monitoring configuration settings in MemoryMonitor::Config below:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"* `mode`\n")),(0,a.kt)("p",{parentName:"li"},"Specifies free memory monitoring mode. MemoryMonitor::FreeMemory"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"* `maxShrinkPerIterationPercent`\n")),(0,a.kt)("p",{parentName:"li"},"Specifies the maximum amount of memory that can be shrunk in ",(0,a.kt)("em",{parentName:"p"},"each iteration")," (configured by the interval above). This is specified as a percentage of the difference (",(0,a.kt)("inlineCode",{parentName:"p"},"maxFreeMem - minFreeMem"),")."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"* `maxGrowPerIterationPercent`\n")),(0,a.kt)("p",{parentName:"li"},"Specifies the maximum amount of memory that can be grown in ",(0,a.kt)("em",{parentName:"p"},"each iteration")," (configured by the interval above). This is specified as a percentage of the difference (",(0,a.kt)("inlineCode",{parentName:"p"},"maxFreeMem - minFreeMem"),"). Setting this too high is not recommended."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"* `maxRemovedPercent`\n")),(0,a.kt)("p",{parentName:"li"},"Specifies the maximum percentage of the overall cache size that can be shrunk."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"* `minFreeMem`\n")),(0,a.kt)("p",{parentName:"li"},"Free memory value at which the cache will start shrinking to increase the system free memory."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"* `maxFreeMem`\n")),(0,a.kt)("p",{parentName:"li"},"Free memory value at which the shrunken cache will grow back to its previous size."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"* `reclaimRateLimitWindow`\n")),(0,a.kt)("p",{parentName:"li"},"Growing cache while free memory is falling can cause OOMs. This configuration specifies a window of time over which rate of decrease in free memory is monitored to throttle growing cache.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"strategy"),":\nStrategy to use for freeing up the memory. For more information, see ",(0,a.kt)("a",{parentName:"p",href:"pool_rebalance_strategy"},"Pool rebalance strategy"),"."))),(0,a.kt)("p",null,"For example, if your ",(0,a.kt)("inlineCode",{parentName:"p"},"config.size")," was 100 GB and you are running on a system with 144 GB, with intent to have free memory around 10 GB. Setting ",(0,a.kt)("inlineCode",{parentName:"p"},"minFreeMem=10GB"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"maxFreeMem=15GB"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"maxResizePerIterationPercent=10"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"maxRemovedPercent=5")," would make cachelib give away cache memory when free memory is below 10 GB and grow back the cache when free memory jumps above 15 GB. While shrinking, it will give away 10% of 5GB = 500MB in each iteration and only give up a maximum of 8% of the cache, which is 8 GB at the maximum. Note that if your heap usage regresses by more than 8 GB, this means that cachelib can no longer shrink itself to save you from dipping below your expected 10 GB head room."),(0,a.kt)("h2",{id:"resident-memory-mode"},"Resident memory mode"),(0,a.kt)("p",null,"Your process may be running inside a container where a OOM is a result of your process exceeding container memory limits. The ",(0,a.kt)("inlineCode",{parentName:"p"},"ResidentMemoryMode")," is applicable when you run your process in a container and need to monitor the memory usage of the process to stay within the container limits as opposed to overall system free memory. In this mode, cachelib watches the process resident set size (RSS) footprint to figure out when cachelib could shrink the cache size to keep the overall process RSS under the expected limit."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"config.enableMemoryMonitor(\n    std::chrono::seconds(interval),\n    memoryMonitoringConfig,\n    maxResizePerIterationPercent,\n    std::shared_ptr<facebook::cachelib::LruTailAgeStrategy>());\n")),(0,a.kt)("p",null,"The semantics of ",(0,a.kt)("inlineCode",{parentName:"p"},"interval"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"memoryMonitoringConfig"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"strategy")," remains the same as those defined in free memory monitor mode. The following ",(0,a.kt)("inlineCode",{parentName:"p"},"memoryMonitoringConfig")," parameters are different to reflect the process RSS:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"mode"),"\nSpecifies resident memory monitoring mode. MemoryMonitor::FreeMemory"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"minProcessSize"),"\nProcess RSS size at which the cachelib can grow back the shrunken cache."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"maxProcessSize"),"\nProcess RSS size at which cachelib shrinks the cache to keep the process RSS below the configured limit."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"reclaimRateLimitWindow"),"\nGrowing cache while process RSS size is increasing can cause OOMs. This configuration specifies a window of time over which rate of increase in process RSS size is monitored to throttle growing cache.")),(0,a.kt)("p",null,"For example, if you have configured 100 GB cache on a 144 GB container. Setting ",(0,a.kt)("inlineCode",{parentName:"p"},"maxProcessSize=120GB")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"minProcessSize=110GB")," tells cachelib to start shrinking the cache when the process RSS grows beyond 120 GB. When the regression goes away and the process RSS is below 110 GB, cachelib slowly grows back the cache memory until the process RSS reaches 120 GB."),(0,a.kt)("p",null,"Below is a diagram for how Memory Monitor works in RSS mode. For free-memory mode, the upper and lower bounds are reversed."),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",src:t(8075).Z,width:"1404",height:"616"})),(0,a.kt)("h1",{id:"pools-and-memorymonitor"},"Pools and MemoryMonitor"),(0,a.kt)("p",null,"When pools are enabled, cachelib grows and shrinks the cache relative to each pool size. For example, if you have pools ",(0,a.kt)("inlineCode",{parentName:"p"},"A"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"B"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"C"),", each taking up 30%, 50%, and 20% of the cache and cachelib decides to shrink the cache by 1 GB, ",(0,a.kt)("inlineCode",{parentName:"p"},"A")," would shrink by 300 MB, ",(0,a.kt)("inlineCode",{parentName:"p"},"B")," would shrink by 500 MB, and ",(0,a.kt)("inlineCode",{parentName:"p"},"C")," would shrink by 200 MB to make up for the 1 GB.  The pools would grow back in similar fashion when memory pressure eases."),(0,a.kt)("h1",{id:"monitoring-metrics"},"Monitoring metrics"),(0,a.kt)("p",null,"When using memory monitor, call the ",(0,a.kt)("inlineCode",{parentName:"p"},"getCacheMemoryStats()")," method to get the current state of cache memory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"struct CacheMemoryStats {\n  // current memory used for cache in bytes. This excludes the memory used for\n  // headers. This can change as memory is advised and reclaimed.\n  size_t cacheSize{0};\n\n  // regular pool memory size in bytes\n  size_t regularCacheSize{0};\n\n  // compact cache pool memory size in bytes\n  size_t compactCacheSize{0};\n\n  // current advised away memory size in bytes.\n  size_t advisedSize{0};\n\n  // maximum advised pct of regular cache.\n  size_t maxAdvisedPct{0};\n\n  // amount of memory that is not assigned for any pool in bytes\n  size_t unReservedSize{0};\n\n  // size of the nvm cache in addition to the ram cache.\n  size_t nvmCacheSize{0};\n\n  // returns the advised memory in the unit of slabs.\n  size_t numAdvisedSlabs() const { return advisedSize / Slab::kSize; }\n};\n")))}u.isMDXComponent=!0},8075:function(e,r,t){r.Z=t.p+"assets/images/advise-40cb935b5b2e3ef617fe4cdba7c213cc.png"}}]);