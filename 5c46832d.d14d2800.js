(window.webpackJsonp=window.webpackJsonp||[]).push([[257],{312:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(2),a=r(6),o=(r(0),r(782)),i={title:"Graphback runtime",sidebar_label:"Runtimes",id:"runtime"},c={unversionedId:"runtime",id:"version-0.10.x/runtime",isDocsHomePage:!1,title:"Graphback runtime",description:"Graphback allows you to query any data using reusable concept called runtime.",source:"@site/versioned_docs/version-0.10.x/runtime.md",slug:"/runtime",permalink:"/docs/0.10.x/runtime",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.10.x/runtime.md",version:"0.10.x",sidebar_label:"Runtimes",sidebar:"version-0.10.x/docs",previous:{title:"Introduction",permalink:"/docs/0.10.x/concepts"},next:{title:"Data Sources",permalink:"/docs/0.10.x/datasources"}},l=[{value:"Adding runtime layer to your application",id:"adding-runtime-layer-to-your-application",children:[]},{value:"Adding custom resolvers to runtime",id:"adding-custom-resolvers-to-runtime",children:[]}],u={rightToc:l};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Graphback allows you to query any data using reusable concept called runtime. "),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"@graphback/runtime")," package offers way to initialize fully functional server without code generation\njust by supplying schema string. Runtime layer can be used for prototyping, mocking and in situation when\ndevelopers want to avoid commiting generated codebase to their repository"),Object(o.b)("h2",{id:"adding-runtime-layer-to-your-application"},"Adding runtime layer to your application"),Object(o.b)("p",null,"To use runtime capabilities developers will need to create data provider. "),Object(o.b)("p",null,"Currently 2 data providers are supported:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"KnexDBDataProvider"),Object(o.b)("li",{parentName:"ul"},"PgKnexDBDataProvider")),Object(o.b)("p",null,"Then developers can create runtime instance:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"    const client = new Knex(...);\n    const graphbackOptions = {...}\n    const modelString = `type Test ...`\n    \n    // Create backend\n    const backend = new GraphQLBackendCreator(modelString, graphbackOptions);\n    const dbClientProvider = new PgKnexDBDataProvider(client);\n    const runtime = await backend.createRuntime(dbClientProvider);\n    console.log(runtime.schema,  runtime.resolvers)\n\n")),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/aerogear/graphback/tree/master/templates/ts-apollo-runtime-backend"}),Object(o.b)("inlineCode",{parentName:"a"},"runtime example application")),"\nfor more information"),Object(o.b)("h2",{id:"adding-custom-resolvers-to-runtime"},"Adding custom resolvers to runtime"),Object(o.b)("p",null,"Runtime layer will come with autogenerated schema that will also include custom resolvers provided in model.\nDevelopers can append their custom resolvers to resolver array to extend runtime layer as follows."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"    const runtime = await backend.createRuntime(dbClientProvider);\n    runtime.resolvers.push(yourResolversArray);\n")))}s.isMDXComponent=!0},782:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),m=n,b=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return r?a.a.createElement(b,c(c({ref:t},u),{},{components:r})):a.a.createElement(b,c({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);