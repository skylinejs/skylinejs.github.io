"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4128],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(o),h=n,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||i;return o?r.createElement(m,a(a({ref:t},u),{},{components:o})):r.createElement(m,a({ref:t},u))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,a[1]=l;for(var c=2;c<i;c++)a[c]=o[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}h.displayName="MDXCreateElement"},8495:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=o(7462),n=(o(7294),o(3905));const i={sidebar_position:1,slug:"/introduction"},a="Introduction",l={unversionedId:"introduction",id:"introduction",title:"Introduction",description:"SkylineJS is a collection of loosley coupled libraries for building efficient, secure and scalable Node.js server-side applications. It is a companion toolkit to your framework of choice (e.g., NestJS), solving common tasks every server-side application has to perform such as parsing environment variables, performance monitoring or caching.",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/docs/introduction",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/introduction"},sidebar:"tutorialSidebar",next:{title:"Environment",permalink:"/docs/environment"}},s={},c=[{value:"Framework versus library",id:"framework-versus-library",level:2},{value:"Compile-time versus runtime errors",id:"compile-time-versus-runtime-errors",level:2},{value:"Pure functions versus side effects",id:"pure-functions-versus-side-effects",level:2},{value:"Theoretical optimum vs lived experience",id:"theoretical-optimum-vs-lived-experience",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(p,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"SkylineJS is a collection of loosley coupled libraries for building efficient, secure and scalable Node.js server-side applications. It is a companion toolkit to your framework of choice (e.g., NestJS), solving common tasks every server-side application has to perform such as parsing environment variables, performance monitoring or caching."),(0,n.kt)("p",null,"Instead of building these on your own, SkylineJS provides you with libraries that are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"TypeScript native"),(0,n.kt)("li",{parentName:"ul"},"Zero or minimal dependency"),(0,n.kt)("li",{parentName:"ul"},"Exhaustive test coverage"),(0,n.kt)("li",{parentName:"ul"},"Production tested")),(0,n.kt)("p",null,"Your current situation might look like this:"),(0,n.kt)("p",null,"NestJS"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Random blog articles and stackoverflow posts that tell you how to build your application"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Random NPM libraries you need to glue together to get things working"),(0,n.kt)("p",null,"This is an undesirable state of existence. SkylineJS was created to guide you out of this chaos in two simple steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Education: an in-depth explanation of why you should do something a certain way."),(0,n.kt)("li",{parentName:"ol"},"Code: provide you with the necessary code to act on the knowledge you just gained.")),(0,n.kt)("p",null,"Ideally, your framework + SkylineJS should take care of all the basic scaffolding your application needs, everything else is domain-specific functionality that depends on the particular features you would like to build (e.g., remote controlling your toaster via a REST API)."),(0,n.kt)("p",null,"CTA: Get started or check out the architecture primer"),(0,n.kt)("h2",{id:"framework-versus-library"},"Framework versus library"),(0,n.kt)("p",null,'If you are one of those developers that uses the words "Framework" and "Library" interchangeably, stop now. A framework operates under the Hollywood principle: "Don\'t call us - we call you". The framework takes over the flow of the application and calls your code as needed. NestJS is an example of an excellent framework that does all the heavy lifting to create an environment you can easily develop a web server in.'),(0,n.kt)("p",null,"SkylineJS is intentionally designed as a collection of libraries, not a framework. An application can only run a single framework. However, once you have chosen your framework, you need several libraries to solve particular problems like hashing a password or handling file uploads. A library solves one problem without any assumptions about the rest of your application. A framework does the opposite, it takes all these building blocks and is responsible for composing them into an application that achieves a goal e.g., a web server that can authenticate users."),(0,n.kt)("p",null,"Composition is a very delicate endeavour. It creates a lot of dependencies between the modules of your code and is therefore the most brittle part of the codebase. Furthermore, the composition is beholden to the business requirements of the application, which change more often than agile coaches their definition of the word agile. However, composing building blocks into a coherent functionality that reaches a business goal is the only reason that your application exists, so there is no way getting around it."),(0,n.kt)("p",null,"SkylineJS has been architected with this distinction in mind. The APIs are designed such that the developer can rely on the library to solve the problem while keeping full control and flexibility on how to integrate it into the larger picture of the application. The documentation will provide you with many examples on how to achieve this integration using your particular framework."),(0,n.kt)("h2",{id:"compile-time-versus-runtime-errors"},"Compile-time versus runtime errors"),(0,n.kt)("p",null,"If you are not convinced that TypeScript is the best thing that happend to the JavaScript ecosystem since ..., SkylineJS is not for you. The philosophy that permeates each and every SkylineJS library is that every error that occurs at runtime but could have been detected at compile-time has to be made detectable at compile-time. The biggest productivity drain for a developer is not writing a lot of simple and repetitive code but to spend hours inside a debugger in a non-reproducible environment due to a lack of the aformentioned boring and repetitive code. Remember kids: an interface a day keeps the middle-of-the-night-production-hotfix-sessions away."),(0,n.kt)("p",null,"There are two ways SkylineJS reduces runtime errors to a minimum:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Leverage the TypeScript compiler"),(0,n.kt)("li",{parentName:"ol"},"Validate runtime values and throw if they are not matching their interface")),(0,n.kt)("p",null,"TODO: Graphic of a system boundary where everything that enters gets validated, the core is always green because it always functions under its assumptions."),(0,n.kt)("h2",{id:"pure-functions-versus-side-effects"},"Pure functions versus side effects"),(0,n.kt)("p",null,"Example: util functions that depend on env vars"),(0,n.kt)("h2",{id:"theoretical-optimum-vs-lived-experience"},"Theoretical optimum vs lived experience"),(0,n.kt)("p",null,'"Everybody has a plan until they get hit in the face".\nExample: cache inconsistency observability strategy.'))}d.isMDXComponent=!0}}]);