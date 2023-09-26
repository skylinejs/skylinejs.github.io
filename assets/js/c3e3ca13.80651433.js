"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6072],{6922:(e,a,t)=>{t(7294)},3996:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>h});var n=t(7462),o=t(7294),c=t(3905);const i=t(5739);class r extends o.Component{componentDidMount(){const e=[{year:2010,count:10},{year:2011,count:20},{year:2012,count:15},{year:2013,count:25},{year:2014,count:22},{year:2015,count:30},{year:2016,count:28}];new i(document.getElementById("cache-chart"),{type:"bar",options:{scales:{x:{stacked:!0},y:{stacked:!0}}},data:{labels:e.map((e=>e.year)),datasets:[{label:"Acquisitions by year",data:e.map((e=>e.count))},{label:"Acquisitions by month",data:e.reverse().map((e=>e.count))}]}})}render(){return o.createElement("section",null,o.createElement("canvas",{id:"cache-chart",style:{width:"100%",height:"200px"}}))}}t(6922);const s={sidebar_position:3,slug:"/caching"},l="Caching",u={unversionedId:"caching",id:"caching",title:"Caching",description:"There are only two hard things in Computer Science: cache invalidation and managing your package.json.",source:"@site/docs/caching.md",sourceDirName:".",slug:"/caching",permalink:"/docs/caching",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/caching.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,slug:"/caching"},sidebar:"tutorialSidebar",previous:{title:"Environment",permalink:"/docs/environment"},next:{title:"Translation",permalink:"/docs/translation"}},d={},h=[{value:"Error handling",id:"error-handling",level:2}],g={toc:h},p="wrapper";function m(e){let{components:a,...t}=e;return(0,c.kt)(p,(0,n.Z)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"caching"},"Caching"),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"There are only two hard things in Computer Science: cache invalidation and managing your package.json.")),(0,c.kt)("p",null,"Good news, we are about to solve cache invalidation. Regarding your package-lock.json merge conflicts, we send our prayers and thoughts."),(0,c.kt)("p",null,"@skyline-js/cache"),(0,c.kt)("p",null,"TODO: interactive analytics dashboard of caching statistics"),(0,c.kt)(r,{mdxType:"CachingChart"}),(0,c.kt)("h2",{id:"error-handling"},"Error handling"),(0,c.kt)("p",null,"Caching is fully optional, so the cache should never cause a failure in production. At least we should be able to configure it to do so."),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"Document BigInt what is necessary for stringify/ parse"),(0,c.kt)("li",{parentName:"ul"},"Handle storage engine failures (e.g., Redis not reachable)")))}m.isMDXComponent=!0}}]);