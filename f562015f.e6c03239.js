(window.webpackJsonp=window.webpackJsonp||[]).push([[1203],{1259:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),i=(n(0),n(1313)),l={id:"crud-client",title:"ClientCRUD Plugin",sidebar_label:"ClientCRUD"},c={unversionedId:"plugins/crud-client",id:"version-0.15.x/plugins/crud-client",isDocsHomePage:!1,title:"ClientCRUD Plugin",description:"The ClientCRUDPlugin plugin uses your GraphQL schema to generate queries, mutations, subscriptions and fragments for use in your client-side application. The generated documents are compatible with all major GraphQL providers, such as Apollo GraphQL and urql.",source:"@site/versioned_docs/version-0.15.x/plugins/client-crud-plugin.md",slug:"/plugins/crud-client",permalink:"/docs/0.15.x/plugins/crud-client",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.15.x/plugins/client-crud-plugin.md",version:"0.15.x",sidebar_label:"ClientCRUD",sidebar:"version-0.15.x/docs",previous:{title:"SchemaCRUD Plugin",permalink:"/docs/0.15.x/plugins/crud-schema"},next:{title:"Create your own Graphback plugin",permalink:"/docs/0.15.x/plugins/create"}},o=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Configuration",id:"configuration",children:[]}],p={rightToc:o};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/0.15.x/api/graphback-codegen-client/classes/_clientcrudplugin_.clientcrudplugin"}),Object(i.b)("inlineCode",{parentName:"a"},"ClientCRUDPlugin"))," plugin uses your GraphQL schema to generate queries, mutations, subscriptions and fragments for use in your client-side application. The generated documents are compatible with all major GraphQL providers, such as ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.apollographql.com/"}),"Apollo GraphQL")," and ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://formidable.com/open-source/urql/"}),"urql"),"."),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @graphback/codegen-client\n")),Object(i.b)("p",null,"To execute this plugin on-demand, you will use the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../graphback-cli"}),"Graphback CLI"),". Install it as a devDependency in your project."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn add -D graphback-cli\n")),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"It is recommended to use the Graphback CLI for certain Graphback plugins, such as those that can modify files which your application depends on. This will prevent hidden accidental file modifications that would otherwise happen during start-up, which might cause issues in your application."),Object(i.b)("p",null,"To load the ",Object(i.b)("inlineCode",{parentName:"p"},"ClientCRUDPlugin")," plugin, it should be configuration in a ",Object(i.b)("inlineCode",{parentName:"p"},".graphqlrc")," ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://graphql-config.com"}),"GraphQL Config")," file. The Grahback CLI can dynamically load and execute plugins from a ",Object(i.b)("inlineCode",{parentName:"p"},".graphqlrc")," file."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title=".graphqlrc"',title:'".graphqlrc"'}),"schema: './src/schema.graphql'\ndocuments: './client/src/graphql/**/*.graphql'\nextensions:\n  graphback:\n    # path to data mode file(s)\n    model: './model/datamodel.graphql'\n    plugins:\n      graphback-schema:\n        outputPath: './src/schema/schema.graphql'\n      graphback-client:\n        outputFile: './client/src/graphql/graphback.graphql'\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"SchemaCRUDPlugin")," should be defined before ",Object(i.b)("inlineCode",{parentName:"p"},"ClientCRUDPlugin")," as ",Object(i.b)("inlineCode",{parentName:"p"},"graphback-schema")," to ensure the latest schema is used to generate client documents."),Object(i.b)("p",null,"See ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./schema-crud-plugin"}),"SchemaCRUDPlugin")," for an installation and configuration guide."),Object(i.b)("p",null,"Run ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../graphback-cli#generate"}),Object(i.b)("inlineCode",{parentName:"a"},"yarn graphback generate"))," to execute plugins from the ",Object(i.b)("inlineCode",{parentName:"p"},".graphqlrc")," config file on-demand."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ yarn graphback generate\nGeneration successful!\nDone in 0.74s.\n")),Object(i.b)("p",null,"The client documents will be created in a file called ",Object(i.b)("inlineCode",{parentName:"p"},"./client/src/graphql/graphback.graphql"),"."),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"Below is a full list of the available configuration options for this plugin."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Argument"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"pluginConfig.outputFile")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Relative path to the GraphQL documents to be created.",Object(i.b)("br",null),Object(i.b)("br",null)," Example: ",Object(i.b)("inlineCode",{parentName:"td"},'"/path/to/documents.graphql"'),". ",Object(i.b)("br",null),Object(i.b)("br",null),"Supported file extensions: ",Object(i.b)("inlineCode",{parentName:"td"},".ts"),", ",Object(i.b)("inlineCode",{parentName:"td"},".graphql")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"string"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"pluginConfig.fragmentOnly")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Optional. When ",Object(i.b)("inlineCode",{parentName:"td"},"true")," Graphback generates only creates fragments, and skips creating queries, mutations and subscriptions."),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"boolean"))))))}b.isMDXComponent=!0},1313:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return g}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=b(n),d=a,g=u["".concat(l,".").concat(d)]||u[d]||s[d]||i;return n?r.a.createElement(g,c(c({ref:t},p),{},{components:n})):r.a.createElement(g,c({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var p=2;p<i;p++)l[p]=n[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);