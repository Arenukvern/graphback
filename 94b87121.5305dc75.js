/*! For license information please see 94b87121.5305dc75.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[715],{1313:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var a=r(0),n=r.n(a);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),u=p(r),s=a,f=u["".concat(o,".").concat(s)]||u[s]||d[s]||c;return r?n.a.createElement(f,i(i({ref:t},l),{},{components:r})):n.a.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=s;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<c;l++)o[l]=r[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},1314:function(e,t,r){"use strict";e.exports=r(1315)},1315:function(e,t,r){"use strict";var a=r(1316),n="function"==typeof Symbol&&Symbol.for,c=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,b=n?Symbol.for("react.strict_mode"):60108,l=n?Symbol.for("react.profiler"):60114,p=n?Symbol.for("react.provider"):60109,u=n?Symbol.for("react.context"):60110,d=n?Symbol.for("react.forward_ref"):60112,s=n?Symbol.for("react.suspense"):60113,f=n?Symbol.for("react.memo"):60115,h=n?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function O(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function y(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||j}function k(){}function v(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||j}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(O(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=y.prototype;var N=v.prototype=new k;N.constructor=v,a(N,y.prototype),N.isPureReactComponent=!0;var _={current:null},P=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,r){var a,n={},o=null,i=null;if(null!=t)for(a in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(o=""+t.key),t)P.call(t,a)&&!x.hasOwnProperty(a)&&(n[a]=t[a]);var b=arguments.length-2;if(1===b)n.children=r;else if(1<b){for(var l=Array(b),p=0;p<b;p++)l[p]=arguments[p+2];n.children=l}if(e&&e.defaultProps)for(a in b=e.defaultProps)void 0===n[a]&&(n[a]=b[a]);return{$$typeof:c,type:e,key:o,ref:i,props:n,_owner:_.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===c}var S=/\/+/g,G=[];function I(e,t,r,a){if(G.length){var n=G.pop();return n.result=e,n.keyPrefix=t,n.func=r,n.context=a,n.count=0,n}return{result:e,keyPrefix:t,func:r,context:a,count:0}}function A(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>G.length&&G.push(e)}function E(e,t,r,a){var n=typeof e;"undefined"!==n&&"boolean"!==n||(e=null);var i=!1;if(null===e)i=!0;else switch(n){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case c:case o:i=!0}}if(i)return r(a,e,""===t?"."+R(e,0):t),1;if(i=0,t=""===t?".":t+":",Array.isArray(e))for(var b=0;b<e.length;b++){var l=t+R(n=e[b],b);i+=E(n,l,r,a)}else if(null===e||"object"!=typeof e?l=null:l="function"==typeof(l=m&&e[m]||e["@@iterator"])?l:null,"function"==typeof l)for(e=l.call(e),b=0;!(n=e.next()).done;)i+=E(n=n.value,l=t+R(n,b++),r,a);else if("object"===n)throw r=""+e,Error(O(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,""));return i}function D(e,t,r){return null==e?0:E(e,"",t,r)}function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function T(e,t){e.func.call(e.context,t,e.count++)}function $(e,t,r){var a=e.result,n=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?L(e,a,r,(function(e){return e})):null!=e&&(w(e)&&(e=function(e,t){return{$$typeof:c,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,n+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(S,"$&/")+"/")+r)),a.push(e))}function L(e,t,r,a,n){var c="";null!=r&&(c=(""+r).replace(S,"$&/")+"/"),D(e,$,t=I(t,c,a,n)),A(t)}var M={current:null};function U(){var e=M.current;if(null===e)throw Error(O(321));return e}var F={ReactCurrentDispatcher:M,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:a};t.Children={map:function(e,t,r){if(null==e)return e;var a=[];return L(e,a,null,t,r),a},forEach:function(e,t,r){if(null==e)return e;D(e,T,t=I(null,null,t,r)),A(t)},count:function(e){return D(e,(function(){return null}),null)},toArray:function(e){var t=[];return L(e,t,null,(function(e){return e})),t},only:function(e){if(!w(e))throw Error(O(143));return e}},t.Component=y,t.Fragment=i,t.Profiler=l,t.PureComponent=v,t.StrictMode=b,t.Suspense=s,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,t.cloneElement=function(e,t,r){if(null==e)throw Error(O(267,e));var n=a({},e.props),o=e.key,i=e.ref,b=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,b=_.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(p in t)P.call(t,p)&&!x.hasOwnProperty(p)&&(n[p]=void 0===t[p]&&void 0!==l?l[p]:t[p])}var p=arguments.length-2;if(1===p)n.children=r;else if(1<p){l=Array(p);for(var u=0;u<p;u++)l[u]=arguments[u+2];n.children=l}return{$$typeof:c,type:e.type,key:o,ref:i,props:n,_owner:b}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:u,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:p,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:d,render:e}},t.isValidElement=w,t.lazy=function(e){return{$$typeof:h,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return U().useCallback(e,t)},t.useContext=function(e,t){return U().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return U().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return U().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return U().useLayoutEffect(e,t)},t.useMemo=function(e,t){return U().useMemo(e,t)},t.useReducer=function(e,t,r){return U().useReducer(e,t,r)},t.useRef=function(e){return U().useRef(e)},t.useState=function(e){return U().useState(e)},t.version="16.13.1"},1316:function(e,t,r){"use strict";var a=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach((function(e){a[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(n){return!1}}()?Object.assign:function(e,t){for(var r,i,b=o(e),l=1;l<arguments.length;l++){for(var p in r=Object(arguments[l]))n.call(r,p)&&(b[p]=r[p]);if(a){i=a(r);for(var u=0;u<i.length;u++)c.call(r,i[u])&&(b[i[u]]=r[i[u]])}}return b}},770:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return b})),r.d(t,"default",(function(){return p}));var a=r(2),n=r(6),c=(r(1314),r(1313)),o={id:"_buildgraphbackapi_",title:"buildGraphbackAPI",sidebar_label:"buildGraphbackAPI"},i={unversionedId:"api/graphback/modules/_buildgraphbackapi_",id:"api/graphback/modules/_buildgraphbackapi_",isDocsHomePage:!1,title:"buildGraphbackAPI",description:"Index",source:"@site/../docs/api/graphback/modules/_buildgraphbackapi_.md",slug:"/api/graphback/modules/_buildgraphbackapi_",permalink:"/docs/next/api/graphback/modules/_buildgraphbackapi_",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback/modules/_buildgraphbackapi_.md",version:"current",sidebar_label:"buildGraphbackAPI",sidebar:"docs",previous:{title:"Graphback CLI",permalink:"/docs/next/cli/graphback-cli"},next:{title:"GraphbackAPI",permalink:"/docs/next/api/graphback/interfaces/_buildgraphbackapi_.graphbackapi"}},b=[{value:"Index",id:"index",children:[{value:"Interfaces",id:"interfaces",children:[]},{value:"Type aliases",id:"type-aliases",children:[]},{value:"Functions",id:"functions",children:[]}]},{value:"Type aliases",id:"type-aliases-1",children:[{value:"GraphbackDataProviderCreator",id:"graphbackdataprovidercreator",children:[]},{value:"GraphbackServiceCreator",id:"graphbackservicecreator",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"buildGraphbackAPI",id:"buildgraphbackapi",children:[]}]}],l={rightToc:b};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"index"},"Index"),Object(c.b)("h3",{id:"interfaces"},"Interfaces"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback/interfaces/_buildgraphbackapi_.graphbackapi"}),"GraphbackAPI")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback/interfaces/_buildgraphbackapi_.graphbackapiconfig"}),"GraphbackAPIConfig"))),Object(c.b)("h3",{id:"type-aliases"},"Type aliases"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback/modules/_buildgraphbackapi_#graphbackdataprovidercreator"}),"GraphbackDataProviderCreator")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback/modules/_buildgraphbackapi_#graphbackservicecreator"}),"GraphbackServiceCreator"))),Object(c.b)("h3",{id:"functions"},"Functions"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback/modules/_buildgraphbackapi_#buildgraphbackapi"}),"buildGraphbackAPI"))),Object(c.b)("h2",{id:"type-aliases-1"},"Type aliases"),Object(c.b)("h3",{id:"graphbackdataprovidercreator"},"GraphbackDataProviderCreator"),Object(c.b)("p",null,"\u01ac ",Object(c.b)("strong",{parentName:"p"},"GraphbackDataProviderCreator"),": ",Object(c.b)("em",{parentName:"p"},"function")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/037ecd7/packages/graphback/src/buildGraphbackAPI.ts#L57"}),"buildGraphbackAPI.ts:57"))),Object(c.b)("h4",{id:"type-declaration"},"Type declaration:"),Object(c.b)("p",null,"\u25b8 (",Object(c.b)("inlineCode",{parentName:"p"},"model"),": ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/graphback/modules/_index_#modeldefinition"}),"ModelDefinition"),"): ",Object(c.b)("em",{parentName:"p"},"GraphbackDataProvider")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"model")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/next/api/graphback/modules/_index_#modeldefinition"}),"ModelDefinition"))))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"graphbackservicecreator"},"GraphbackServiceCreator"),Object(c.b)("p",null,"\u01ac ",Object(c.b)("strong",{parentName:"p"},"GraphbackServiceCreator"),": ",Object(c.b)("em",{parentName:"p"},"function")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/037ecd7/packages/graphback/src/buildGraphbackAPI.ts#L56"}),"buildGraphbackAPI.ts:56"))),Object(c.b)("h4",{id:"type-declaration-1"},"Type declaration:"),Object(c.b)("p",null,"\u25b8 (",Object(c.b)("inlineCode",{parentName:"p"},"model"),": ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/graphback/modules/_index_#modeldefinition"}),"ModelDefinition"),", ",Object(c.b)("inlineCode",{parentName:"p"},"dataProvider"),": GraphbackDataProvider): ",Object(c.b)("em",{parentName:"p"},"GraphbackCRUDService")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"model")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/next/api/graphback/modules/_index_#modeldefinition"}),"ModelDefinition"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"dataProvider")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"GraphbackDataProvider")))),Object(c.b)("h2",{id:"functions-1"},"Functions"),Object(c.b)("h3",{id:"buildgraphbackapi"},"buildGraphbackAPI"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"buildGraphbackAPI"),"(",Object(c.b)("inlineCode",{parentName:"p"},"model"),": string | GraphQLSchema, ",Object(c.b)("inlineCode",{parentName:"p"},"config"),": ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/graphback/interfaces/_buildgraphbackapi_.graphbackapiconfig"}),"GraphbackAPIConfig"),"): ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/next/api/graphback/interfaces/_buildgraphbackapi_.graphbackapi"}),"GraphbackAPI"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/037ecd7/packages/graphback/src/buildGraphbackAPI.ts#L113"}),"buildGraphbackAPI.ts:113"))),Object(c.b)("p",null,"Creates all of the components needed for the GraphQL server - resolvers, schema and services."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"model")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string ","|"," GraphQLSchema"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Data model as a string or GraphQL schema. Used to generate the Graphback API resolvers, services and database")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"config")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/next/api/graphback/interfaces/_buildgraphbackapi_.graphbackapiconfig"}),"GraphbackAPIConfig")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/next/api/graphback/interfaces/_buildgraphbackapi_.graphbackapi"}),"GraphbackAPI"))),Object(c.b)("p",null,"Generated schema, CRUD resolvers and services"))}p.isMDXComponent=!0}}]);