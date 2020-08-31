/*! For license information please see 0e7d431e.55231532.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{102:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),o=(n(783),n(782)),c={id:"create",title:"Create your own Graphback plugin",sidebar_label:"Create your own plugin"},i={unversionedId:"plugins/create",id:"plugins/create",isDocsHomePage:!1,title:"Create your own Graphback plugin",description:"You can build your own custom Graphback plugin to:",source:"@site/../docs/plugins/creating-your-own-plugin.md",slug:"/plugins/create",permalink:"/docs/next/plugins/create",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/plugins/creating-your-own-plugin.md",version:"current",sidebar_label:"Create your own plugin",sidebar:"docs",previous:{title:"ClientCRUD Plugin",permalink:"/docs/next/plugins/crud-client"},next:{title:"Create Graphback",permalink:"/docs/next/cli/create-graphback"}},l=[{value:"transformSchema",id:"transformschema",children:[]},{value:"createResolvers",id:"createresolvers",children:[]},{value:"createResources",id:"createresources",children:[]},{value:"getPluginName",id:"getpluginname",children:[]},{value:"Usage",id:"usage",children:[]}],u={rightToc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You can build your own custom Graphback plugin to:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"automate additional customisations to the final generated schema"),Object(o.b)("li",{parentName:"ul"},"build dynamic resolvers"),Object(o.b)("li",{parentName:"ul"},"create file resources such as client-side queries.")),Object(o.b)("p",null,"To create your own plugin, start by creating a class that extends ",Object(o.b)("inlineCode",{parentName:"p"},"GraphbackPlugin"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { GraphbackPlugin } from 'graphback';\n\nexport class MyGraphbackPlugin extends GraphbackPlugin {\n  ...\n}\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"GraphbackPlugin")," has a number of methods for performing different extensions to your Graphback API."),Object(o.b)("p",null,"For the rest of this documentation, we will be using the following business model:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'""" @model """\ntype Note {\n  id: ID!\n  title: String!\n  archived: Boolean!\n  description: String\n  """\n  @oneToMany(field: \'note\')\n  """\n  comments: [Comment]!\n}\n\n""" @model """\ntype Comment {\n  id: ID!\n  text: String\n  archived: Boolean! \n  description: String\n}\n')),Object(o.b)("h2",{id:"transformschema"},"transformSchema"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"transformSchema")," lets you make modifications to the current iteration of the GraphQL schema object. In here you can create or modify any type or field in the schema. "),Object(o.b)("p",null,"As the ",Object(o.b)("inlineCode",{parentName:"p"},"GraphQLSchema")," and its types are immutable we highly recommend you to install and use the amazing ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://graphql-compose.github.io/"}),"GraphQL Compose")," to modify the schema."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"// highlight-start\nimport { GraphbackPlugin, GraphbackCoreMetadata } from 'graphback';\nimport { GraphQLSchema, GraphQLSchema, GraphQLList, GraphQLNonNull } from 'graphql';\nimport { SchemaComposer } from 'graphql-compose';\n// highlight-end\n\nexport class MyGraphbackPlugin extends GraphbackPlugin {\n  // highlight-start\n  transformSchema(metadata: GraphbackCoreMetadata): GraphQLSchema {\n    const schema = metadata.getSchema()\n    const schemaComposer = new SchemaComposer(schema)\n    const graphbackModels = metadata.getModelDefinitions()\n\n    for (const model of graphbackModels) {\n      schemaComposer.Query.addFields({\n        [`getArchived${model.graphqlType.name}s`]: {\n          type: GraphQLNonNull(GraphQLList(model.graphqlType))\n        }\n      })\n    }\n\n    return schemaComposer.buildSchema()\n  }\n  // highlight-end\n  ...\n}\n")),Object(o.b)("p",null,"In ",Object(o.b)("inlineCode",{parentName:"p"},"MyGraphbackPlugin"),", the ",Object(o.b)("inlineCode",{parentName:"p"},"transformSchema")," hook adds a new query field to the schema for each of the data models to retrieve all archived models."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"type Query {\n  getNote(id: ID!): Note\n  findNotes(filter: NoteFilter, page: PageRequest, orderBy: OrderByInput): NoteResultList!\n  getComment(id: ID!): Comment\n  findComments(filter: CommentFilter, page: PageRequest, orderBy: OrderByInput): CommentResultList!\n  // highlight-start\n  getArchivedNotes: [Note]!\n  getArchivedComments: [Comment]!\n  // highlight-end\n}\n")),Object(o.b)("h2",{id:"createresolvers"},"createResolvers"),Object(o.b)("p",null,"With the ",Object(o.b)("inlineCode",{parentName:"p"},"createResolvers")," hook you can create and return resolvers using the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.graphql-tools.com/docs/resolvers/"}),Object(o.b)("inlineCode",{parentName:"a"},"graphql-tools"))," format."),Object(o.b)("p",null,"To use ",Object(o.b)("inlineCode",{parentName:"p"},"createResolvers")," you will first need to install ",Object(o.b)("inlineCode",{parentName:"p"},"@graphql-tools/utils"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @graphql-tools/utils\n")),Object(o.b)("p",null,"Here ",Object(o.b)("inlineCode",{parentName:"p"},"createResolvers")," is creating a new query resolver for each query field added to the schema in ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#transformschema"}),Object(o.b)("inlineCode",{parentName:"a"},"transformSchema")),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { GraphbackPlugin, GraphbackCoreMetadata } from 'graphback';\nimport { GraphbackContext, getSelectedFieldsFromResolverInfo, QueryFilter  } from '@graphback/core';\nimport { GraphQLResolveInfo } from 'graphql';\n\n// highlight-start\nimport { IResolvers, IObjectTypeResolver } from '@graphql-tools/utils';\n// highlight-end\n\nexport class MyGraphbackPlugin extends GraphbackPlugin {\n  ...\n  // highlight-start\n  createResolvers(metadata: GraphbackCoreMetadata): IResolvers {\n    const resolvers: IResolvers = {};\n    const queryObj: IObjectTypeResolver = {};\n\n    // loop through every Graphback model\n    for (const model of metadata.getModelDefinitions()) {\n      const modelName = model.graphqlType.name;\n\n      // create a resolver function for every query field created in `transformSchema`\n      queryObj[`getArchived${modelName}s`] = async (_: any, args: any, context: GraphbackContext, info: GraphQLResolveInfo) => {\n        const crudService = context.graphback[modelName];\n\n        // create a filter in the GraphQLCRUD format to retrieve only archived Notes\n        const customFilter: QueryFilter = {\n          archived: {\n            eq: true\n          }\n        };\n\n        // use the model service created by Graphback to query the database\n        const { items } = await crudService.findBy({ filter: customFilter });\n\n        return items;\n      }\n    }\n\n    resolvers.Query = queryObj;\n\n    return resolvers;\n  }\n  // highlight-end\n}\n")),Object(o.b)("h2",{id:"createresources"},"createResources"),Object(o.b)("p",null,"Since Graphback is primarily a runtime framework, you probably won't use ",Object(o.b)("inlineCode",{parentName:"p"},"createResources")," too often. However it is a very useful method if you ever need to output something to a file, such as your schema."),Object(o.b)("p",null,"Here ",Object(o.b)("inlineCode",{parentName:"p"},"createResources")," is creating a GraphQL schema file from the schema generated by Graphback."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { GraphbackPlugin, GraphbackCoreMetadata } from 'graphback';\n// highlight-start\nimport { writeFileSync } from 'fs';\nimport { printSchema } from 'graphql';\n// highlight-end\n\nexport class MyGraphbackPlugin extends GraphbackPlugin {\n  ...\n  // highlight-start\n  createResources(metadata: GraphbackCoreMetadata): void {\n    const schema = metadata.getSchema()\n    const schemaSDL = printSchema(schema)\n\n    writeFileSync('./schema.graphql', schemaSDL);\n  }\n  // highlight-end\n}\n")),Object(o.b)("h2",{id:"getpluginname"},"getPluginName"),Object(o.b)("p",null,"Returns a unique name of the plugin. The will be used by plugin registry to uniquely identify the plugin.  "),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { GraphbackPlugin, GraphbackCoreMetadata } from 'graphback';\n// highlight-next-line\nimport { writeFileSync } from 'fs';\n\nexport class MyGraphbackPlugin extends GraphbackPlugin {\n  ...\n  // highlight-start\n  getPluginName() {\n    return 'MyGraphbackPlugin';\n  }\n  // highlight-end\n}\n")),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"To use the plugin, add it to the ",Object(o.b)("inlineCode",{parentName:"p"},"plugins")," array in ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../api/build-graphback-api#plugins"}),Object(o.b)("inlineCode",{parentName:"a"},"buildGraphbackAPI")),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"const { resolvers, typeDefs, contextCreator } = buildGraphbackAPI(modelDefs, {\n  dataProviderCreator: createKnexDbProvider(db),\n  plugins: [\n    // highlight-start\n    new MyGraphbackPlugin()\n    // highlight-end\n  ]\n});\n\nconst apolloServer = new ApolloServer({\n    typeDefs,\n    resolvers,\n    context: contextCreator\n})\n\n...\n")),Object(o.b)("p",null,"Archived ",Object(o.b)("inlineCode",{parentName:"p"},"Notes")," or ",Object(o.b)("inlineCode",{parentName:"p"},"Comments")," can be retrieved by the following query:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"query archivedNotesAndComments {\n  getArchivedNotes {\n    id\n    title\n    comments {\n      id\n      archived\n      text\n    }\n  }\n\n  getArchivedComments {\n    id\n    text\n    note {\n      id\n      archived\n      title\n    }\n  }\n}\n")))}s.isMDXComponent=!0},782:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),h=r,b=p["".concat(c,".").concat(h)]||p[h]||f[h]||o;return n?a.a.createElement(b,i(i({ref:t},u),{},{components:n})):a.a.createElement(b,i({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},783:function(e,t,n){"use strict";e.exports=n(784)},784:function(e,t,n){"use strict";var r=n(785),a="function"==typeof Symbol&&Symbol.for,o=a?Symbol.for("react.element"):60103,c=a?Symbol.for("react.portal"):60106,i=a?Symbol.for("react.fragment"):60107,l=a?Symbol.for("react.strict_mode"):60108,u=a?Symbol.for("react.profiler"):60114,s=a?Symbol.for("react.provider"):60109,p=a?Symbol.for("react.context"):60110,f=a?Symbol.for("react.forward_ref"):60112,h=a?Symbol.for("react.suspense"):60113,b=a?Symbol.for("react.memo"):60115,m=a?Symbol.for("react.lazy"):60116,d="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function v(e,t,n){this.props=e,this.context=t,this.refs=O,this.updater=n||y}function j(){}function k(e,t,n){this.props=e,this.context=t,this.refs=O,this.updater=n||y}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(g(85));this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=v.prototype;var C=k.prototype=new j;C.constructor=k,r(C,v.prototype),C.isPureReactComponent=!0;var w={current:null},N=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,n){var r,a={},c=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)N.call(t,r)&&!S.hasOwnProperty(r)&&(a[r]=t[r]);var l=arguments.length-2;if(1===l)a.children=n;else if(1<l){for(var u=Array(l),s=0;s<l;s++)u[s]=arguments[s+2];a.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===a[r]&&(a[r]=l[r]);return{$$typeof:o,type:e,key:c,ref:i,props:a,_owner:w.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var G=/\/+/g,R=[];function q(e,t,n,r){if(R.length){var a=R.pop();return a.result=e,a.keyPrefix=t,a.func=n,a.context=r,a.count=0,a}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function _(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>R.length&&R.push(e)}function E(e,t,n){return null==e?0:function e(t,n,r,a){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var l=!1;if(null===t)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case o:case c:l=!0}}if(l)return r(a,t,""===n?"."+I(t,0):n),1;if(l=0,n=""===n?".":n+":",Array.isArray(t))for(var u=0;u<t.length;u++){var s=n+I(i=t[u],u);l+=e(i,s,r,a)}else if(null===t||"object"!=typeof t?s=null:s="function"==typeof(s=d&&t[d]||t["@@iterator"])?s:null,"function"==typeof s)for(t=s.call(t),u=0;!(i=t.next()).done;)l+=e(i=i.value,s=n+I(i,u++),r,a);else if("object"===i)throw r=""+t,Error(g(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return l}(e,"",t,n)}function I(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function M(e,t){e.func.call(e.context,t,e.count++)}function D(e,t,n){var r=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?L(e,r,n,(function(e){return e})):null!=e&&(x(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(G,"$&/")+"/")+n)),r.push(e))}function L(e,t,n,r,a){var o="";null!=n&&(o=(""+n).replace(G,"$&/")+"/"),E(e,D,t=q(t,o,r,a)),_(t)}var $={current:null};function T(){var e=$.current;if(null===e)throw Error(g(321));return e}var A={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:w,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return L(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;E(e,M,t=q(null,null,t,n)),_(t)},count:function(e){return E(e,(function(){return null}),null)},toArray:function(e){var t=[];return L(e,t,null,(function(e){return e})),t},only:function(e){if(!x(e))throw Error(g(143));return e}},t.Component=v,t.Fragment=i,t.Profiler=u,t.PureComponent=k,t.StrictMode=l,t.Suspense=h,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,t.cloneElement=function(e,t,n){if(null==e)throw Error(g(267,e));var a=r({},e.props),c=e.key,i=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,l=w.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in t)N.call(t,s)&&!S.hasOwnProperty(s)&&(a[s]=void 0===t[s]&&void 0!==u?u[s]:t[s])}var s=arguments.length-2;if(1===s)a.children=n;else if(1<s){u=Array(s);for(var p=0;p<s;p++)u[p]=arguments[p+2];a.children=u}return{$$typeof:o,type:e.type,key:c,ref:i,props:a,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=P,t.createFactory=function(e){var t=P.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:f,render:e}},t.isValidElement=x,t.lazy=function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:b,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return T().useCallback(e,t)},t.useContext=function(e,t){return T().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return T().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return T().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return T().useLayoutEffect(e,t)},t.useMemo=function(e,t){return T().useMemo(e,t)},t.useReducer=function(e,t,n){return T().useReducer(e,t,n)},t.useRef=function(e){return T().useRef(e)},t.useState=function(e){return T().useState(e)},t.version="16.13.1"},785:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var n,i,l=c(e),u=1;u<arguments.length;u++){for(var s in n=Object(arguments[u]))a.call(n,s)&&(l[s]=n[s]);if(r){i=r(n);for(var p=0;p<i.length;p++)o.call(n,i[p])&&(l[i[p]]=n[i[p]])}}return l}}}]);