"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7702],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=r,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||a;return n?i.createElement(m,o(o({ref:t},d),{},{components:n})):i.createElement(m,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6781:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),o=["components"],s={id:"navy_architecture_overview",title:"Navy Architecture Overview"},c=void 0,l={unversionedId:"Cache_Library_Architecture_Guide/navy_architecture_overview",id:"Cache_Library_Architecture_Guide/navy_architecture_overview",title:"Navy Architecture Overview",description:"Navy is the SSD optimized cache engine leveraged for Hybrid Cache. There are three over-arching goals in the design  of Navy",source:"@site/docs/Cache_Library_Architecture_Guide/Navy_Architecture_Overview.md",sourceDirName:"Cache_Library_Architecture_Guide",slug:"/Cache_Library_Architecture_Guide/navy_architecture_overview",permalink:"/docs/Cache_Library_Architecture_Guide/navy_architecture_overview",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Cache_Library_Architecture_Guide/Navy_Architecture_Overview.md",tags:[],version:"current",frontMatter:{id:"navy_architecture_overview",title:"Navy Architecture Overview"},sidebar:"archguideSideBar",previous:{title:"Hybrid Cache",permalink:"/docs/Cache_Library_Architecture_Guide/hybrid_cache"},next:{title:"Small Object Cache",permalink:"/docs/Cache_Library_Architecture_Guide/small_object_cache"}},d={},u=[{value:"Implementation overview",id:"implementation-overview",level:2},{value:"Device",id:"device",level:3},{value:"Engine Driver",id:"engine-driver",level:3},{value:"Job Scheduler",id:"job-scheduler",level:3}],p={toc:u};function h(e){var t=e.components,s=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Navy is the SSD optimized cache engine leveraged for Hybrid Cache. There are three over-arching goals in the design  of Navy"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"efficient caching for billions of  small (<1KB) and millions of large objects (1KB - 16MB)  on SSDs."),(0,a.kt)("li",{parentName:"ol"},"read optimized point lookups"),(0,a.kt)("li",{parentName:"ol"},"Low DRAM overhead")),(0,a.kt)("p",null,"Since Navy is designed for a cache, it chooses to sacrifice the durability of data when it enables the accomplishment  of the goals above. Caches are effective by constantly churning through the items based on popularity, making them write intensive.  Since write-endurance is a constraint for NVM, the design of Navy optimizes for write-endurance as well."),(0,a.kt)("h2",{id:"implementation-overview"},"Implementation overview"),(0,a.kt)("p",null,"Navy's implementation is broken down into the following hierarchy."),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",src:n(8035).Z,width:"2202",height:"1395"})),(0,a.kt)("p",null,"Navy offers an asynchronous API to it's callers.  Navy optimizes for small objects using the Small Item Engine and optimizes for large objects using the Large Item Engine.  Each engine is designed taking into account the DRAM overhead required without compromising read efficiency. Underneath, both the engines operate on top of a block device abstraction."),(0,a.kt)("h3",{id:"device"},"Device"),(0,a.kt)("p",null,"All IO operations within Navy happen over a range of block offsets. ",(0,a.kt)("inlineCode",{parentName:"p"},"Device")," provides a virtual interface for reads and writes into these offsets. Underneath, the Device could be either a ",(0,a.kt)("inlineCode",{parentName:"p"},"FileDevice")," implementation over single file on a file system or a raw block device file or a ",(0,a.kt)("inlineCode",{parentName:"p"},"RAID0Device")," that operates a software raid-0 over  many files or an ",(0,a.kt)("inlineCode",{parentName:"p"},"InMemoryDevice")," using a malloced buffer (for testing).  ",(0,a.kt)("inlineCode",{parentName:"p"},"Device")," aligns all reads  from its calles to ",(0,a.kt)("inlineCode",{parentName:"p"},"ioalignSize")," that is used to configured the ",(0,a.kt)("inlineCode",{parentName:"p"},"Device")," and trims any extra data that is read.  ",(0,a.kt)("inlineCode",{parentName:"p"},"Device")," also handles opaque functionality like encryption, chunking, latency measurements for reading and writing while delegating the actual reads or writes to underlying implementation."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Encryption"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Device")," can be initialized with a ",(0,a.kt)("inlineCode",{parentName:"p"},"DeviceEncrytor")," to support block level encryption. All reads and writes pass through the encryption layer and is done at the granularity of encryption block size.  The IO alignment for reads and writes must match the block size used for encryption."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Chunking"),":  Large writes (MBs) can cause head of line blocking for reads on SSDs. To avoid the negative impact on the tail latency for reads, ",(0,a.kt)("inlineCode",{parentName:"p"},"Device")," can be configured to break up writes into chunks and issue them sequentially. While this can increase the latency for writes, read latency can be improved.  Reads are not broken into chunks. Note, this chunking is orthogonal to the RAID-0 chunking that happens with ",(0,a.kt)("inlineCode",{parentName:"p"},"RAID0Device"),". Usually the block size for encryption is as small as 4KB and the stripe size for ",(0,a.kt)("inlineCode",{parentName:"p"},"RAID0Device")," is set to the size of a Navy region(16-64MB)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"LatencyTracking"),": Device also tracks the overall latency for reads and writes in a uniform way across all implementations of Device."),(0,a.kt)("h3",{id:"engine-driver"},"Engine Driver"),(0,a.kt)("p",null,"Items can be cached in either the small or the large item engine depending on their size. While, size is known during insert, lookups and deletes dont, and hence must check both engines before concluding.  Besides this, there are no high level locks per key to synchronize concurrent operations across both the engines. Hence the ",(0,a.kt)("inlineCode",{parentName:"p"},"Driver")," assumes the responsibility of request processing across the two engines. It accepts Navy API request that are asynchronous in nature and  leverages the ",(0,a.kt)("inlineCode",{parentName:"p"},"JobScheduler")," to execute them through a state machine below."),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",src:n(5570).Z,width:"2481",height:"1195"})),(0,a.kt)("p",null,"For example, when a lookup job is enqueued, driver performs the lookup in the Large Item engine first and upon a miss, enqueues another job to perform the lookup to the small item engine. When either results in a final result, the loookup callback is executed inline."),(0,a.kt)("p",null,"The driver is also responsible for doing admission policy that are internal to Navy. Currently, Navy implements the following admission policy mechanisms that can be enabled."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"RejectRandomAP"),": Writes are probabilistically rejected based on a configured probabilty."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"DynamicRandomAP"),": Tracks the bytes written at device level and ensures the daily budget is under a specified write rate. This is done by doing probabilistic rejection where the rejection probability is updated every X seconds based on the bytes written so far and the budget available into the future.  To support this, the bytes written from ",(0,a.kt)("inlineCode",{parentName:"li"},"Device")," is plumbed into the admission policy."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"RejectFirstAP"),": writes to key is rejected upon the first occurence within a configured window. Subsequent write is accepted."),(0,a.kt)("li",{parentName:"ol"},"MaxConcurrentInserts: writes are rejected once sufficient number of them have been queued up."),(0,a.kt)("li",{parentName:"ol"},"MaxParcelMemory: Each insert job has a memory footprint associated. Writes are rejected once sufficient number have been queued up exceeding a certain configured memory footprint.")),(0,a.kt)("h3",{id:"job-scheduler"},"Job Scheduler"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Driver")," enqueues an API Request as a ",(0,a.kt)("inlineCode",{parentName:"p"},"Job")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"JobScheduler")," in the order it was received. Inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"JobScheduler"),",  jobs are ordered to avoid concurrent execution of multiple jobs for the same key. This is important given the async nature of the navy API. With this guarantee, callers can make assumptions about the concurrency of operations once enqueued to navy. This is relevant to using  optimistic concurrency by ",(0,a.kt)("inlineCode",{parentName:"p"},"NvmCache")," implementation."),(0,a.kt)("p",null,"To order the jobs, ",(0,a.kt)("inlineCode",{parentName:"p"},"JobScheduler")," shards the jobs based on its key into one of several fine grained shards (millions). There can be only one job executed for a given request ordering shard at any given time, and if there is already one being executed, the  rest are queued up in a pending job queue. Once the ordering condition is met, Jobs are sharded to be enqueued into one of several ",(0,a.kt)("inlineCode",{parentName:"p"},"JobQueue"),".  Jobs can be one of the following types; ",(0,a.kt)("inlineCode",{parentName:"p"},"JobType::Read")," for jobs corresponding to read apis for Navy (lookups), ",(0,a.kt)("inlineCode",{parentName:"p"},"JobType::Write")," for jobs corresponding to write apis for Navy (inserts and deletes), ",(0,a.kt)("inlineCode",{parentName:"p"},"JobType::Reclaim")," to perform internal eviction operations and ",(0,a.kt)("inlineCode",{parentName:"p"},"JobType::Flush")," to perform any internal async bufferred writes."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"JobScheduler")," has two executor thread pools (read and write) and Jobs are sharded by key to the appropriate thread pools.  Each  thread in the pool has a corresponding ",(0,a.kt)("inlineCode",{parentName:"p"},"JobQueue")," and a  dedicated thread associate with processing its  jobs.  Jobs  are processed in FIFO manner, but some Jobs can be enqueued directly to the front of the queue to prioritize over others.  Except ",(0,a.kt)("inlineCode",{parentName:"p"},"JobType::Read")," all other jobs are executed by the writer pool. While enqueuing, ",(0,a.kt)("inlineCode",{parentName:"p"},"JobType::Reclaim")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Jobtype::Flush")," are given higher priority enqueuing them to the head of the queue. These operations are key agnostic and are internal to Navy and hence can be executed out of order from other read and write operations. Jobs can also be retried based on their exit status returned from the implementation. For example, when performing a lookup, the driver can retry a job to lookup in the small item engine after a lookup in the large item engine returns not found. Jobs are always enqueued to the back of their queue for retry.\n",(0,a.kt)("img",{loading:"lazy",src:n(9517).Z,width:"1770",height:"1518"})))}h.isMDXComponent=!0},9517:function(e,t,n){t.Z=n.p+"assets/images/Job_Scheduler-445b781038884832fe0396958a9a7f20.png"},8035:function(e,t,n){t.Z=n.p+"assets/images/Navy_Architecture_overview-3fcba60db4e31d50cd4dd7ea560de0c4.png"},5570:function(e,t,n){t.Z=n.p+"assets/images/Navy_Engine_driver_state_machine-43043b15a3da639e80a9618b40594dbf.png"}}]);