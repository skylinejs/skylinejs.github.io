"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[443],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(t),m=a,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return t?r.createElement(h,i(i({ref:n},p),{},{components:t})):r.createElement(h,i({ref:n},p))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(7294),a=t(6010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:n,hidden:t,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>E});var r=t(7462),a=t(7294),o=t(6010),i=t(2466),s=t(6550),l=t(1980),u=t(7392),p=t(12);function c(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}function d(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??c(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const r=(0,s.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(o),(0,a.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace({...r.location,search:n.toString()})}),[o,r])]}function v(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,o=d(e),[i,s]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[l,u]=h({queryString:t,groupId:r}),[c,v]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,o]=(0,p.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),f=(()=>{const e=l??c;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),v(e)}),[u,v,o]),tabValues:o}}var f=t(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:n,block:t,selectedValue:s,selectValue:l,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const n=e.currentTarget,t=p.indexOf(n),r=u[t].value;r!==s&&(c(n),l(r))},m=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;n=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;n=p[t]??p[p.length-1];break}}n?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n)},u.map((e=>{let{value:n,label:t,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,key:n,ref:e=>p.push(e),onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":s===n})}),t??n)})))}function k(e){let{lazy:n,children:t,selectedValue:r}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r}))))}function y(e){const n=v(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},a.createElement(g,(0,r.Z)({},e,n)),a.createElement(k,(0,r.Z)({},e,n)))}function E(e){const n=(0,f.Z)();return a.createElement(y,(0,r.Z)({key:String(n)},e))}},1245:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));t(4866),t(5162);const o={sidebar_position:2,slug:"environment",label:"Environment"},i="Environment",s={unversionedId:"environment",id:"environment",title:"Environment",description:"This page describes the guiding principles of the Skyline environment approach.",source:"@site/docs/environment.md",sourceDirName:".",slug:"/environment",permalink:"/docs/environment",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"environment",label:"Environment"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/introduction"},next:{title:"Caching",permalink:"/docs/caching"}},l={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Example code walkthrough",id:"example-code-walkthrough",level:2}],p={toc:u},c="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"environment"},"Environment"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This page describes the guiding principles of the Skyline environment approach. ",(0,a.kt)("br",null),"\nThe API reference of the ",(0,a.kt)("inlineCode",{parentName:"p"},"@skyline-js/env")," package can be found here: ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/env"},"@skyline-js/env"))),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Even the best CI/CD setup does not prevent your application to crash in production because someone forgot to set ",(0,a.kt)("inlineCode",{parentName:"p"},"SERVER_PRD_DB_TLS_CONNECTION=true"))),(0,a.kt)("p",null,"Environment variable management is not a good conversation topic when attending a social event. Even when you talk to another developer, chances are they just don't care that much about their environment variables.\nEven worse, they might have been responsible for a production downtime due to an environment variable issue and now you just re-traumatized them. As you can see, it is much more appropriate for you to talk about the weather, like everybody else does."),(0,a.kt)("p",null,"Anyways, as you are reading the SkylineJS documentation, I assume you are most likely not attending such an event. Therefore, we will discuss how your environment variable management strategy can ensure maximum type safety, perform runtime validations and provide you with an overall peace of mind."),(0,a.kt)("p",null,"We all have seen code like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"db.connect({\n  host: process.env.DB_HOST || 'localhost',\n  port: process.env.DB_PORT || 5432,\n  useTLS: process.env.DB_TLS === '1' ? true : false,\n  auth: {\n    username: process.env.DB_USER || 'admin',\n    password: process.env.DB_PASSWORD || 'strong_password_with_special_chars_%#!',\n  },\n});\n")),(0,a.kt)("p",null,"And we have all debugged code like that in production because ",(0,a.kt)("inlineCode",{parentName:"p"},"DB_HOST")," is missing the protocol prefix, ",(0,a.kt)("inlineCode",{parentName:"p"},"DB_TLS")," is set to ",(0,a.kt)("inlineCode",{parentName:"p"},'"true"')," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},'"1"')," and ",(0,a.kt)("inlineCode",{parentName:"p"},"DB_PASSWORD")," is incorrect because the special characters got url-encoded when the password got pulled from a secrets manager via FTP (yes I know)."),(0,a.kt)("p",null,"To avoid these issues, your environment variable management should be based on the following principles:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Environment variables are parsed and validated by a single module of your codebase. Nobody else touches ",(0,a.kt)("inlineCode",{parentName:"p"},"process.env"),". Everyone else gets their environment variables from this module.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Every environment variable is tested for syntactical correctness during parsing. This ensures that the type and shape of the environment variable is guaranteed to the rest of the application during runtime.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"All non-sensitive environment variables are declared and maintained inside the codebase. There is no value in scattering your different environment configs across multiple ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," files and inside your deployment scripts.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Error handling should be as strict as possible. Each unexpected environment state should lead to a failure of the application. This way you can rollback the application update immediately and prevent it from causing issues in production later on."))),(0,a.kt)("h2",{id:"example-code-walkthrough"},"Example code walkthrough"),(0,a.kt)("p",null,"To demonstrate the implementation of the principles above, we take a look at a basic environment variable parsing using the ",(0,a.kt)("inlineCode",{parentName:"p"},"@skyline-js/env")," package:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { SkylineEnv } from '@skyline-js/env';\n\nconst parser = new SkylineEnv();\n\nexport const env = {\n  api: {\n    host: parser.parseString('SERVER_API_HOST'),\n    port: parser.parseNumber('SERVER_API_PORT'),\n    cors: parser.parseBoolean('SERVER_CORS_ENABLED'),\n  },\n  database: {\n    host: parser.parseString('SERVER_DATABASE_HOST'),\n    port: parser.parseString('SERVER_DATABASE_PORT'),\n  },\n};\n")),(0,a.kt)("p",null,"The rest of the application can now consume the parsed environment variables the same way they would access ",(0,a.kt)("inlineCode",{parentName:"p"},"process.env"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { env } from '@myapp/env';\n\n// ...\n\ndb.connect({\n  host: env.database.host,\n  port: env.database.port,\n});\n\n// ...\n\napi.listen({\n  host: env.api.host,\n  port: env.api.port,\n  enableCors: env.api.cors,\n});\n")),(0,a.kt)("p",null,"This minimal example only follows principle 1 by keeping the environment variable parsing in a single place. Principle 2 is partially covered as the type of each environment variable is validated (string, number, boolean). Let's rewrite the example above:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { SkylineEnv } from '@skyline-js/env';\n\nexport enum RuntimeEnvironment {\n  DEV = 'DEV',\n  CI = 'CI',\n  PRD = 'PRD',\n}\n\nconst parser = new SkylineEnv({\n  runtime: process.env.NODE_ENV,\n  runtimes: RuntimeEnvironment,\n  valueTrim: true,\n});\n\nexport const env = {\n  api: {\n    host: parser.parseString('SERVER_API_HOST', {\n      default: 'http://localhost',\n      CI: 'http://skyline_ci_database',\n      PRD: 'https://skyline_prd_database',\n      stringPattern: /https?:\\/\\/.+/,\n    }),\n    port: parser.parseNumber('SERVER_API_PORT', {\n      default: 3000,\n      numberIsInteger: true,\n    }),\n    cors: parser.parseBoolean('SERVER_CORS_ENABLED', {\n      default: false,\n      PRD: true,\n    }),\n  },\n  database: {\n    host: parser.parseString('SERVER_DATABASE_HOST', {\n      default: 'localhost',\n      CI: 'skyline_ci_database',\n      PRD: 'skyline_prd_database',\n    }),\n    port: parser.parseString('SERVER_DATABASE_PORT', {\n      default: 5432,\n      numberIsInteger: true,\n    }),\n    password: parser.parseString('SERVER_DATABASE_PASSWORD', {\n      default: 'password123',\n      minLength: 6,\n      valueRemoveAfterParse: true,\n    }),\n  },\n};\n")),(0,a.kt)("p",null,"Ah, this is much better. The most striking difference to the previous implementation is the usage of the runtime environments feature of ",(0,a.kt)("inlineCode",{parentName:"p"},"@skyline-js/env"),". You can define an enum of the available runtime environments for your application, e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"DEV")," (development), ",(0,a.kt)("inlineCode",{parentName:"p"},"CI")," (continuous integration) and ",(0,a.kt)("inlineCode",{parentName:"p"},"PRD")," (production). For each runtime environment, a value can be specified that is used as a fallback if no environment variable has been provided. In the example above, the ",(0,a.kt)("inlineCode",{parentName:"p"},"env.api.host")," value is set to the value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"SERVER_API_HOST")," environment variable but falls back to ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost")," in DEV, ",(0,a.kt)("inlineCode",{parentName:"p"},"http://skyline_ci_database")," in CI and to ",(0,a.kt)("inlineCode",{parentName:"p"},"https://skyline_prd_database")," in PRD. Note that the value for the DEV runtime environment is provided via the ",(0,a.kt)("inlineCode",{parentName:"p"},"default")," property. This ensures that the environment variable always has a value, which is reflected in its type not including ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined"),", which is the case without the ",(0,a.kt)("inlineCode",{parentName:"p"},"default")," property being set."),(0,a.kt)("p",null,"This approach for handling different runtime environments allows the developer to quickly look up all possible values for an environment variable without having to go through ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," files or CI environment settings. For most non-sensitive environment variables, the runtime environment fallbacks should be sufficient to configure the value properly and greatly improves the developer experience regarding the introduction of new environment variables and the debugging process."),(0,a.kt)("p",null,"Furthermore, the example above shows off the validation features of the ",(0,a.kt)("inlineCode",{parentName:"p"},"@skyline-js/env")," package. They are used to ensure that certain environment variable values are integers (e.g., for the API port) or match a certain regex (http or https protocol present for the API host)."))}d.isMDXComponent=!0}}]);