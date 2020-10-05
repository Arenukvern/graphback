/*! For license information please see 449640b9.8c997ebc.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[353],{1313:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(r),h=n,d=p["".concat(i,".").concat(h)]||p[h]||f[h]||a;return r?o.a.createElement(d,u(u({ref:t},l),{},{components:r})):o.a.createElement(d,u({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=h;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},1314:function(e,t,r){"use strict";e.exports=r(1315)},1315:function(e,t,r){"use strict";var n=r(1316),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,u=o?Symbol.for("react.fragment"):60107,c=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,f=o?Symbol.for("react.forward_ref"):60112,h=o?Symbol.for("react.suspense"):60113,d=o?Symbol.for("react.memo"):60115,b=o?Symbol.for("react.lazy"):60116,y="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function O(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||g}function j(){}function w(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||g}O.prototype.isReactComponent={},O.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=O.prototype;var k=w.prototype=new j;k.constructor=w,n(k,O.prototype),k.isPureReactComponent=!0;var P={current:null},C=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,r){var n,o={},i=null,u=null;if(null!=t)for(n in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(i=""+t.key),t)C.call(t,n)&&!S.hasOwnProperty(n)&&(o[n]=t[n]);var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){for(var l=Array(c),s=0;s<c;s++)l[s]=arguments[s+2];o.children=l}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===o[n]&&(o[n]=c[n]);return{$$typeof:a,type:e,key:i,ref:u,props:o,_owner:P.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var E=/\/+/g,R=[];function $(e,t,r,n){if(R.length){var o=R.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function D(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>R.length&&R.push(e)}function N(e,t,r,n){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var u=!1;if(null===e)u=!0;else switch(o){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case a:case i:u=!0}}if(u)return r(n,e,""===t?"."+I(e,0):t),1;if(u=0,t=""===t?".":t+":",Array.isArray(e))for(var c=0;c<e.length;c++){var l=t+I(o=e[c],c);u+=N(o,l,r,n)}else if(null===e||"object"!=typeof e?l=null:l="function"==typeof(l=y&&e[y]||e["@@iterator"])?l:null,"function"==typeof l)for(e=l.call(e),c=0;!(o=e.next()).done;)u+=N(o=o.value,l=t+I(o,c++),r,n);else if("object"===o)throw r=""+e,Error(m(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,""));return u}function A(e,t,r){return null==e?0:N(e,"",t,r)}function I(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function U(e,t){e.func.call(e.context,t,e.count++)}function T(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?q(e,n,r,(function(e){return e})):null!=e&&(x(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(E,"$&/")+"/")+r)),n.push(e))}function q(e,t,r,n,o){var a="";null!=r&&(a=(""+r).replace(E,"$&/")+"/"),A(e,T,t=$(t,a,n,o)),D(t)}var L={current:null};function G(){var e=L.current;if(null===e)throw Error(m(321));return e}var M={ReactCurrentDispatcher:L,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:P,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:function(e,t,r){if(null==e)return e;var n=[];return q(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;A(e,U,t=$(null,null,t,r)),D(t)},count:function(e){return A(e,(function(){return null}),null)},toArray:function(e){var t=[];return q(e,t,null,(function(e){return e})),t},only:function(e){if(!x(e))throw Error(m(143));return e}},t.Component=O,t.Fragment=u,t.Profiler=l,t.PureComponent=w,t.StrictMode=c,t.Suspense=h,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M,t.cloneElement=function(e,t,r){if(null==e)throw Error(m(267,e));var o=n({},e.props),i=e.key,u=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,c=P.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)C.call(t,s)&&!S.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==l?l[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){l=Array(s);for(var p=0;p<s;p++)l[p]=arguments[p+2];o.children=l}return{$$typeof:a,type:e.type,key:i,ref:u,props:o,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=_,t.createFactory=function(e){var t=_.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:f,render:e}},t.isValidElement=x,t.lazy=function(e){return{$$typeof:b,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return G().useCallback(e,t)},t.useContext=function(e,t){return G().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return G().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return G().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return G().useLayoutEffect(e,t)},t.useMemo=function(e,t){return G().useMemo(e,t)},t.useReducer=function(e,t,r){return G().useReducer(e,t,r)},t.useRef=function(e){return G().useRef(e)},t.useState=function(e){return G().useState(e)},t.version="16.13.1"},1316:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,u,c=i(e),l=1;l<arguments.length;l++){for(var s in r=Object(arguments[l]))o.call(r,s)&&(c[s]=r[s]);if(n){u=n(r);for(var p=0;p<u.length;p++)a.call(r,u[p])&&(c[u[p]]=r[u[p]])}}return c}},408:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(2),o=r(6),a=(r(1314),r(1313)),i={id:"overview",title:"Plugins Overview",sidebar_label:"Overview"},u={unversionedId:"plugins/overview",id:"plugins/overview",isDocsHomePage:!1,title:"Plugins Overview",description:"With Graphback plugins you can customise the generation of the GraphQL schema, automate the generation of resolvers, and create file resources such as client-side queries.",source:"@site/../docs/plugins/overview.md",slug:"/plugins/overview",permalink:"/docs/next/plugins/overview",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/plugins/overview.md",version:"current",sidebar_label:"Overview",sidebar:"docs",previous:{title:"Running an API without code",permalink:"/docs/next/graphqlserve/graphqlserve"},next:{title:"SchemaCRUD Plugin",permalink:"/docs/next/plugins/crud-schema"}},c=[{value:"Using a plugin in your GraphQL Application",id:"using-a-plugin-in-your-graphql-application",children:[{value:"At application startup",id:"at-application-startup",children:[]},{value:"File generation with CLI",id:"file-generation-with-cli",children:[]}]}],l={rightToc:c};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"With Graphback plugins you can customise the generation of the GraphQL schema, automate the generation of resolvers, and create file resources such as client-side queries."),Object(a.b)("p",null,"Plugins are executed in the order that are defined in the ",Object(a.b)("inlineCode",{parentName:"p"},"plugins")," array. Each plugin passes its modified version of the GraphQL schema to the next, making incremental changes to the schema and outputs the final schema once the plugin chain is complete."),Object(a.b)("p",null,"Graphback offers a standard suite of plugins you can use to generate a ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://graphqlcrud.org/"}),"GraphQLCRUD")," compliant schema, resolvers and client documents."),Object(a.b)("h2",{id:"using-a-plugin-in-your-graphql-application"},"Using a plugin in your GraphQL Application"),Object(a.b)("p",null,"There are two ways that a Graphback plugin can be invoked in your application - the method you choose depends on the capabilities of the plugin and/or what you need to use the plugin for."),Object(a.b)("h3",{id:"at-application-startup"},"At application startup"),Object(a.b)("p",null,"If you don't want the plugin to create files in your project, or if it is not capable of doing so, you can invoke your plugins programatically in ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"../api/graphback/interfaces/_buildgraphbackapi_.graphbackapiconfig#optional-plugins"}),Object(a.b)("inlineCode",{parentName:"a"},"buildGraphbackAPI")),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"// highlight-start\nimport { SchemaCRUDPlugin } from '@graphback/codegen-schema';\n// highlight-end\n\n\n// creates a schema, CRUD resolvers, services and data providers\nconst { typeDefs, resolvers, contextCreator } = buildGraphbackAPI(modelDefs, {\n  dataProviderCreator: createKnexDbProvider(db),\n  // highlight-start\n  plugins: [\n    new SchemaCRUDPlugin()\n  ]\n  // highlight-end\n});\n")),Object(a.b)("p",null,"Invoking ",Object(a.b)("inlineCode",{parentName:"p"},"SchemaCRUDPlugin")," like this will update the in-memory schema and resolvers and return them as ",Object(a.b)("inlineCode",{parentName:"p"},"typeDefs")," and ",Object(a.b)("inlineCode",{parentName:"p"},"resolvers"),". "),Object(a.b)("h3",{id:"file-generation-with-cli"},"File generation with CLI"),Object(a.b)("p",null,"Some plugins can also create files in your project through the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"../api/graphback-core/classes/_plugin_graphbackcoremetadata_.graphbackcoremetadata"}),Object(a.b)("inlineCode",{parentName:"a"},"createResources"))," hook. Please refer to the plugin documentation to see if this is enabled."))}s.isMDXComponent=!0}}]);