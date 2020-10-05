/*! For license information please see 75956871.ac73613c.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[580],{1313:function(e,r,t){"use strict";t.d(r,"a",(function(){return b})),t.d(r,"b",(function(){return d}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),l=function(e){var r=a.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},b=function(e){var r=l(e.components);return a.a.createElement(p.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},s=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),b=l(t),s=n,d=b["".concat(c,".").concat(s)]||b[s]||f[s]||o;return t?a.a.createElement(d,i(i({ref:r},p),{},{components:t})):a.a.createElement(d,i({ref:r},p))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=s;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<o;p++)c[p]=t[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},1314:function(e,r,t){"use strict";e.exports=t(1315)},1315:function(e,r,t){"use strict";var n=t(1316),a="function"==typeof Symbol&&Symbol.for,o=a?Symbol.for("react.element"):60103,c=a?Symbol.for("react.portal"):60106,i=a?Symbol.for("react.fragment"):60107,u=a?Symbol.for("react.strict_mode"):60108,p=a?Symbol.for("react.profiler"):60114,l=a?Symbol.for("react.provider"):60109,b=a?Symbol.for("react.context"):60110,f=a?Symbol.for("react.forward_ref"):60112,s=a?Symbol.for("react.suspense"):60113,d=a?Symbol.for("react.memo"):60115,h=a?Symbol.for("react.lazy"):60116,g="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function j(e,r,t){this.props=e,this.context=r,this.refs=O,this.updater=t||y}function v(){}function k(e,r,t){this.props=e,this.context=r,this.refs=O,this.updater=t||y}j.prototype.isReactComponent={},j.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,r,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=j.prototype;var _=k.prototype=new v;_.constructor=k,n(_,j.prototype),_.isPureReactComponent=!0;var P={current:null},w=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function x(e,r,t){var n,a={},c=null,i=null;if(null!=r)for(n in void 0!==r.ref&&(i=r.ref),void 0!==r.key&&(c=""+r.key),r)w.call(r,n)&&!C.hasOwnProperty(n)&&(a[n]=r[n]);var u=arguments.length-2;if(1===u)a.children=t;else if(1<u){for(var p=Array(u),l=0;l<u;l++)p[l]=arguments[l+2];a.children=p}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===a[n]&&(a[n]=u[n]);return{$$typeof:o,type:e,key:c,ref:i,props:a,_owner:P.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var N=/\/+/g,E=[];function I(e,r,t,n){if(E.length){var a=E.pop();return a.result=e,a.keyPrefix=r,a.func=t,a.context=n,a.count=0,a}return{result:e,keyPrefix:r,func:t,context:n,count:0}}function A(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>E.length&&E.push(e)}function R(e,r,t,n){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var i=!1;if(null===e)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case o:case c:i=!0}}if(i)return t(n,e,""===r?"."+D(e,0):r),1;if(i=0,r=""===r?".":r+":",Array.isArray(e))for(var u=0;u<e.length;u++){var p=r+D(a=e[u],u);i+=R(a,p,t,n)}else if(null===e||"object"!=typeof e?p=null:p="function"==typeof(p=g&&e[g]||e["@@iterator"])?p:null,"function"==typeof p)for(e=p.call(e),u=0;!(a=e.next()).done;)i+=R(a=a.value,p=r+D(a,u++),t,n);else if("object"===a)throw t=""+e,Error(m(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t,""));return i}function $(e,r,t){return null==e?0:R(e,"",r,t)}function D(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return r[e]}))}(e.key):r.toString(36)}function G(e,r){e.func.call(e.context,r,e.count++)}function T(e,r,t){var n=e.result,a=e.keyPrefix;e=e.func.call(e.context,r,e.count++),Array.isArray(e)?U(e,n,t,(function(e){return e})):null!=e&&(S(e)&&(e=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||r&&r.key===e.key?"":(""+e.key).replace(N,"$&/")+"/")+t)),n.push(e))}function U(e,r,t,n,a){var o="";null!=t&&(o=(""+t).replace(N,"$&/")+"/"),$(e,T,r=I(r,o,n,a)),A(r)}var L={current:null};function M(){var e=L.current;if(null===e)throw Error(m(321));return e}var F={ReactCurrentDispatcher:L,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:P,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:function(e,r,t){if(null==e)return e;var n=[];return U(e,n,null,r,t),n},forEach:function(e,r,t){if(null==e)return e;$(e,G,r=I(null,null,r,t)),A(r)},count:function(e){return $(e,(function(){return null}),null)},toArray:function(e){var r=[];return U(e,r,null,(function(e){return e})),r},only:function(e){if(!S(e))throw Error(m(143));return e}},r.Component=j,r.Fragment=i,r.Profiler=p,r.PureComponent=k,r.StrictMode=u,r.Suspense=s,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,r.cloneElement=function(e,r,t){if(null==e)throw Error(m(267,e));var a=n({},e.props),c=e.key,i=e.ref,u=e._owner;if(null!=r){if(void 0!==r.ref&&(i=r.ref,u=P.current),void 0!==r.key&&(c=""+r.key),e.type&&e.type.defaultProps)var p=e.type.defaultProps;for(l in r)w.call(r,l)&&!C.hasOwnProperty(l)&&(a[l]=void 0===r[l]&&void 0!==p?p[l]:r[l])}var l=arguments.length-2;if(1===l)a.children=t;else if(1<l){p=Array(l);for(var b=0;b<l;b++)p[b]=arguments[b+2];a.children=p}return{$$typeof:o,type:e.type,key:c,ref:i,props:a,_owner:u}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:b,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},r.createElement=x,r.createFactory=function(e){var r=x.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:f,render:e}},r.isValidElement=S,r.lazy=function(e){return{$$typeof:h,_ctor:e,_status:-1,_result:null}},r.memo=function(e,r){return{$$typeof:d,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return M().useCallback(e,r)},r.useContext=function(e,r){return M().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return M().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return M().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return M().useLayoutEffect(e,r)},r.useMemo=function(e,r){return M().useMemo(e,r)},r.useReducer=function(e,r,t){return M().useReducer(e,r,t)},r.useRef=function(e){return M().useRef(e)},r.useState=function(e){return M().useState(e)},r.version="16.13.1"},1316:function(e,r,t){"use strict";var n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,r){for(var t,i,u=c(e),p=1;p<arguments.length;p++){for(var l in t=Object(arguments[p]))a.call(t,l)&&(u[l]=t[l]);if(n){i=n(t);for(var b=0;b<i.length;b++)o.call(t,i[b])&&(u[i[b]]=t[i[b]])}}return u}},635:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return i})),t.d(r,"rightToc",(function(){return u})),t.d(r,"default",(function(){return l}));var n=t(2),a=t(6),o=(t(1314),t(1313)),c={id:"_buildgraphbackapi_.graphbackapiconfig",title:"GraphbackAPIConfig",sidebar_label:"GraphbackAPIConfig"},i={unversionedId:"api/graphback/interfaces/_buildgraphbackapi_.graphbackapiconfig",id:"api/graphback/interfaces/_buildgraphbackapi_.graphbackapiconfig",isDocsHomePage:!1,title:"GraphbackAPIConfig",description:"Hierarchy",source:"@site/../docs/api/graphback/interfaces/_buildgraphbackapi_.graphbackapiconfig.md",slug:"/api/graphback/interfaces/_buildgraphbackapi_.graphbackapiconfig",permalink:"/docs/next/api/graphback/interfaces/_buildgraphbackapi_.graphbackapiconfig",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback/interfaces/_buildgraphbackapi_.graphbackapiconfig.md",version:"current",sidebar_label:"GraphbackAPIConfig",sidebar:"docs",previous:{title:"GraphbackAPI",permalink:"/docs/next/api/graphback/interfaces/_buildgraphbackapi_.graphbackapi"},next:{title:"GraphbackDataProvider",permalink:"/docs/next/api/graphback-core/interfaces/_runtime_graphbackdataprovider_.graphbackdataprovider"}},u=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Index",id:"index",children:[{value:"Properties",id:"properties",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"<code>Optional</code> crud",id:"optional-crud",children:[]},{value:"dataProviderCreator",id:"dataprovidercreator",children:[]},{value:"<code>Optional</code> plugins",id:"optional-plugins",children:[]},{value:"<code>Optional</code> serviceCreator",id:"optional-servicecreator",children:[]}]}],p={rightToc:u};function l(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"GraphbackAPIConfig"))),Object(o.b)("h2",{id:"index"},"Index"),Object(o.b)("h3",{id:"properties"},"Properties"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback/interfaces/_buildgraphbackapi_.graphbackapiconfig#optional-crud"}),"crud")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback/interfaces/_buildgraphbackapi_.graphbackapiconfig#dataprovidercreator"}),"dataProviderCreator")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback/interfaces/_buildgraphbackapi_.graphbackapiconfig#optional-plugins"}),"plugins")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback/interfaces/_buildgraphbackapi_.graphbackapiconfig#optional-servicecreator"}),"serviceCreator"))),Object(o.b)("h2",{id:"properties-1"},"Properties"),Object(o.b)("h3",{id:"optional-crud"},Object(o.b)("inlineCode",{parentName:"h3"},"Optional")," crud"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"crud"),"? : ",Object(o.b)("em",{parentName:"p"},"GraphbackCRUDGeneratorConfig")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/037ecd7/packages/graphback/src/buildGraphbackAPI.ts#L12"}),"buildGraphbackAPI.ts:12"))),Object(o.b)("p",null,"Global CRUD configuration"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"dataprovidercreator"},"dataProviderCreator"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"dataProviderCreator"),": ",Object(o.b)("em",{parentName:"p"},Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/next/api/graphback/modules/_index_#dataprovidercreator"}),"DataProviderCreator"))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/037ecd7/packages/graphback/src/buildGraphbackAPI.ts#L26"}),"buildGraphbackAPI.ts:26"))),Object(o.b)("p",null,"Function which creates a default data provicer for every data model"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"optional-plugins"},Object(o.b)("inlineCode",{parentName:"h3"},"Optional")," plugins"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"plugins"),"? : ",Object(o.b)("em",{parentName:"p"},"GraphbackPlugin[]")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/037ecd7/packages/graphback/src/buildGraphbackAPI.ts#L16"}),"buildGraphbackAPI.ts:16"))),Object(o.b)("p",null,"Schema plugins to perform automatic changes to the schema"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"optional-servicecreator"},Object(o.b)("inlineCode",{parentName:"h3"},"Optional")," serviceCreator"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"serviceCreator"),"? : ",Object(o.b)("em",{parentName:"p"},Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/next/api/graphback/modules/_index_#servicecreator"}),"ServiceCreator"))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/037ecd7/packages/graphback/src/buildGraphbackAPI.ts#L21"}),"buildGraphbackAPI.ts:21"))),Object(o.b)("p",null,"Function which creates a default CRUD Service for every data model"))}l.isMDXComponent=!0}}]);