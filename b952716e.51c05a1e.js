/*! For license information please see b952716e.51c05a1e.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[927],{1313:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return d}));var n=r(0),c=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var s=c.a.createContext({}),l=function(e){var t=c.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},f=function(e){var t=l(e.components);return c.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},b=c.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=l(r),b=n,d=f["".concat(o,".").concat(b)]||f[b]||p[b]||a;return r?c.a.createElement(d,i(i({ref:t},s),{},{components:r})):c.a.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=b;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<a;s++)o[s]=r[s];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},1314:function(e,t,r){"use strict";e.exports=r(1315)},1315:function(e,t,r){"use strict";var n=r(1316),c="function"==typeof Symbol&&Symbol.for,a=c?Symbol.for("react.element"):60103,o=c?Symbol.for("react.portal"):60106,i=c?Symbol.for("react.fragment"):60107,u=c?Symbol.for("react.strict_mode"):60108,s=c?Symbol.for("react.profiler"):60114,l=c?Symbol.for("react.provider"):60109,f=c?Symbol.for("react.context"):60110,p=c?Symbol.for("react.forward_ref"):60112,b=c?Symbol.for("react.suspense"):60113,d=c?Symbol.for("react.memo"):60115,y=c?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function j(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||O}function g(){}function _(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||O}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(v(85));this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=j.prototype;var S=_.prototype=new g;S.constructor=_,n(S,j.prototype),S.isPureReactComponent=!0;var w={current:null},k=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,r){var n,c={},o=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(o=""+t.key),t)k.call(t,n)&&!C.hasOwnProperty(n)&&(c[n]=t[n]);var u=arguments.length-2;if(1===u)c.children=r;else if(1<u){for(var s=Array(u),l=0;l<u;l++)s[l]=arguments[l+2];c.children=s}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===c[n]&&(c[n]=u[n]);return{$$typeof:a,type:e,key:o,ref:i,props:c,_owner:w.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var D=/\/+/g,N=[];function E(e,t,r,n){if(N.length){var c=N.pop();return c.result=e,c.keyPrefix=t,c.func=r,c.context=n,c.count=0,c}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function R(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>N.length&&N.push(e)}function $(e,t,r,n){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var i=!1;if(null===e)i=!0;else switch(c){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case a:case o:i=!0}}if(i)return r(n,e,""===t?"."+T(e,0):t),1;if(i=0,t=""===t?".":t+":",Array.isArray(e))for(var u=0;u<e.length;u++){var s=t+T(c=e[u],u);i+=$(c,s,r,n)}else if(null===e||"object"!=typeof e?s=null:s="function"==typeof(s=m&&e[m]||e["@@iterator"])?s:null,"function"==typeof s)for(e=s.call(e),u=0;!(c=e.next()).done;)i+=$(c=c.value,s=t+T(c,u++),r,n);else if("object"===c)throw r=""+e,Error(v(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,""));return i}function I(e,t,r){return null==e?0:$(e,"",t,r)}function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function U(e,t){e.func.call(e.context,t,e.count++)}function A(e,t,r){var n=e.result,c=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?F(e,n,r,(function(e){return e})):null!=e&&(P(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,c+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(D,"$&/")+"/")+r)),n.push(e))}function F(e,t,r,n,c){var a="";null!=r&&(a=(""+r).replace(D,"$&/")+"/"),I(e,A,t=E(t,a,n,c)),R(t)}var M={current:null};function q(){var e=M.current;if(null===e)throw Error(v(321));return e}var L={ReactCurrentDispatcher:M,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:w,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:function(e,t,r){if(null==e)return e;var n=[];return F(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;I(e,U,t=E(null,null,t,r)),R(t)},count:function(e){return I(e,(function(){return null}),null)},toArray:function(e){var t=[];return F(e,t,null,(function(e){return e})),t},only:function(e){if(!P(e))throw Error(v(143));return e}},t.Component=j,t.Fragment=i,t.Profiler=s,t.PureComponent=_,t.StrictMode=u,t.Suspense=b,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,t.cloneElement=function(e,t,r){if(null==e)throw Error(v(267,e));var c=n({},e.props),o=e.key,i=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,u=w.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)k.call(t,l)&&!C.hasOwnProperty(l)&&(c[l]=void 0===t[l]&&void 0!==s?s[l]:t[l])}var l=arguments.length-2;if(1===l)c.children=r;else if(1<l){s=Array(l);for(var f=0;f<l;f++)s[f]=arguments[f+2];c.children=s}return{$$typeof:a,type:e.type,key:o,ref:i,props:c,_owner:u}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=x,t.createFactory=function(e){var t=x.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:p,render:e}},t.isValidElement=P,t.lazy=function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return q().useCallback(e,t)},t.useContext=function(e,t){return q().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return q().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return q().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return q().useLayoutEffect(e,t)},t.useMemo=function(e,t){return q().useMemo(e,t)},t.useReducer=function(e,t,r){return q().useReducer(e,t,r)},t.useRef=function(e){return q().useRef(e)},t.useState=function(e){return q().useState(e)},t.version="16.13.1"},1316:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(c){return!1}}()?Object.assign:function(e,t){for(var r,i,u=o(e),s=1;s<arguments.length;s++){for(var l in r=Object(arguments[s]))c.call(r,l)&&(u[l]=r[l]);if(n){i=n(r);for(var f=0;f<i.length;f++)a.call(r,i[f])&&(u[i[f]]=r[i[f]])}}return u}},981:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(2),c=r(6),a=(r(1314),r(1313)),o={id:"_services_createdatasyncservice_",title:"services/createDataSyncService",sidebar_label:"services/createDataSyncService"},i={unversionedId:"api/graphback-datasync/modules/_services_createdatasyncservice_",id:"api/graphback-datasync/modules/_services_createdatasyncservice_",isDocsHomePage:!1,title:"services/createDataSyncService",description:"Index",source:"@site/../docs/api/graphback-datasync/modules/_services_createdatasyncservice_.md",slug:"/api/graphback-datasync/modules/_services_createdatasyncservice_",permalink:"/docs/next/api/graphback-datasync/modules/_services_createdatasyncservice_",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-datasync/modules/_services_createdatasyncservice_.md",version:"current",sidebar_label:"services/createDataSyncService"},u=[{value:"Index",id:"index",children:[{value:"Interfaces",id:"interfaces",children:[]},{value:"Functions",id:"functions",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"createDataSyncCRUDService",id:"createdatasynccrudservice",children:[]}]}],s={rightToc:u};function l(e){var t=e.components,r=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"index"},"Index"),Object(a.b)("h3",{id:"interfaces"},"Interfaces"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/interfaces/_services_createdatasyncservice_.createdatasynccrudserviceoptions"}),"CreateDataSyncCRUDServiceOptions"))),Object(a.b)("h3",{id:"functions"},"Functions"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_services_createdatasyncservice_#createdatasynccrudservice"}),"createDataSyncCRUDService"))),Object(a.b)("h2",{id:"functions-1"},"Functions"),Object(a.b)("h3",{id:"createdatasynccrudservice"},"createDataSyncCRUDService"),Object(a.b)("p",null,"\u25b8 ",Object(a.b)("strong",{parentName:"p"},"createDataSyncCRUDService"),"(",Object(a.b)("inlineCode",{parentName:"p"},"config?"),": ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/graphback-datasync/interfaces/_services_createdatasyncservice_.createdatasynccrudserviceoptions"}),"CreateDataSyncCRUDServiceOptions"),"): ",Object(a.b)("em",{parentName:"p"},"(Anonymous function)")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/037ecd7/packages/graphback-datasync/src/services/createDataSyncService.ts#L18"}),"packages/graphback-datasync/src/services/createDataSyncService.ts:18"))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Parameters:")),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(a.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"config?")),Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(a.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/graphback-datasync/interfaces/_services_createdatasyncservice_.createdatasynccrudserviceoptions"}),"CreateDataSyncCRUDServiceOptions")),Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}))))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Returns:")," ",Object(a.b)("em",{parentName:"p"},"(Anonymous function)")))}l.isMDXComponent=!0}}]);