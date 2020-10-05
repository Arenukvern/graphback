/*! For license information please see 00d5133d.4ba66ae3.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1313:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return b}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),f=function(e){var r=o.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=f(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},m=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=f(t),m=n,b=s["".concat(u,".").concat(m)]||s[m]||p[m]||a;return t?o.a.createElement(b,c(c({ref:r},l),{},{components:t})):o.a.createElement(b,c({ref:r},l))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,u=new Array(a);u[0]=m;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,u[1]=c;for(var l=2;l<a;l++)u[l]=t[l];return o.a.createElement.apply(null,u)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1314:function(e,r,t){"use strict";e.exports=t(1315)},1315:function(e,r,t){"use strict";var n=t(1316),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,u=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,i=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,m=o?Symbol.for("react.suspense"):60113,b=o?Symbol.for("react.memo"):60115,d=o?Symbol.for("react.lazy"):60116,y="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function O(e,r,t){this.props=e,this.context=r,this.refs=v,this.updater=t||g}function j(){}function _(e,r,t){this.props=e,this.context=r,this.refs=v,this.updater=t||g}O.prototype.isReactComponent={},O.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,r,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=O.prototype;var k=_.prototype=new j;k.constructor=_,n(k,O.prototype),k.isPureReactComponent=!0;var w={current:null},E=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function S(e,r,t){var n,o={},u=null,c=null;if(null!=r)for(n in void 0!==r.ref&&(c=r.ref),void 0!==r.key&&(u=""+r.key),r)E.call(r,n)&&!P.hasOwnProperty(n)&&(o[n]=r[n]);var i=arguments.length-2;if(1===i)o.children=t;else if(1<i){for(var l=Array(i),f=0;f<i;f++)l[f]=arguments[f+2];o.children=l}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===o[n]&&(o[n]=i[n]);return{$$typeof:a,type:e,key:u,ref:c,props:o,_owner:w.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var T=/\/+/g,C=[];function R(e,r,t,n){if(C.length){var o=C.pop();return o.result=e,o.keyPrefix=r,o.func=t,o.context=n,o.count=0,o}return{result:e,keyPrefix:r,func:t,context:n,count:0}}function $(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>C.length&&C.push(e)}function A(e,r,t,n){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var c=!1;if(null===e)c=!0;else switch(o){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case a:case u:c=!0}}if(c)return t(n,e,""===r?"."+N(e,0):r),1;if(c=0,r=""===r?".":r+":",Array.isArray(e))for(var i=0;i<e.length;i++){var l=r+N(o=e[i],i);c+=A(o,l,t,n)}else if(null===e||"object"!=typeof e?l=null:l="function"==typeof(l=y&&e[y]||e["@@iterator"])?l:null,"function"==typeof l)for(e=l.call(e),i=0;!(o=e.next()).done;)c+=A(o=o.value,l=r+N(o,i++),t,n);else if("object"===o)throw t=""+e,Error(h(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t,""));return c}function D(e,r,t){return null==e?0:A(e,"",r,t)}function N(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return r[e]}))}(e.key):r.toString(36)}function I(e,r){e.func.call(e.context,r,e.count++)}function U(e,r,t){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,r,e.count++),Array.isArray(e)?M(e,n,t,(function(e){return e})):null!=e&&(x(e)&&(e=function(e,r){return{$$typeof:a,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||r&&r.key===e.key?"":(""+e.key).replace(T,"$&/")+"/")+t)),n.push(e))}function M(e,r,t,n,o){var a="";null!=t&&(a=(""+t).replace(T,"$&/")+"/"),D(e,U,r=R(r,a,n,o)),$(r)}var F={current:null};function L(){var e=F.current;if(null===e)throw Error(h(321));return e}var q={ReactCurrentDispatcher:F,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:w,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:function(e,r,t){if(null==e)return e;var n=[];return M(e,n,null,r,t),n},forEach:function(e,r,t){if(null==e)return e;D(e,I,r=R(null,null,r,t)),$(r)},count:function(e){return D(e,(function(){return null}),null)},toArray:function(e){var r=[];return M(e,r,null,(function(e){return e})),r},only:function(e){if(!x(e))throw Error(h(143));return e}},r.Component=O,r.Fragment=c,r.Profiler=l,r.PureComponent=_,r.StrictMode=i,r.Suspense=m,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,r.cloneElement=function(e,r,t){if(null==e)throw Error(h(267,e));var o=n({},e.props),u=e.key,c=e.ref,i=e._owner;if(null!=r){if(void 0!==r.ref&&(c=r.ref,i=w.current),void 0!==r.key&&(u=""+r.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(f in r)E.call(r,f)&&!P.hasOwnProperty(f)&&(o[f]=void 0===r[f]&&void 0!==l?l[f]:r[f])}var f=arguments.length-2;if(1===f)o.children=t;else if(1<f){l=Array(f);for(var s=0;s<f;s++)l[s]=arguments[s+2];o.children=l}return{$$typeof:a,type:e.type,key:u,ref:c,props:o,_owner:i}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:s,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},r.createElement=S,r.createFactory=function(e){var r=S.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:p,render:e}},r.isValidElement=x,r.lazy=function(e){return{$$typeof:d,_ctor:e,_status:-1,_result:null}},r.memo=function(e,r){return{$$typeof:b,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return L().useCallback(e,r)},r.useContext=function(e,r){return L().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return L().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return L().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return L().useLayoutEffect(e,r)},r.useMemo=function(e,r){return L().useMemo(e,r)},r.useReducer=function(e,r,t){return L().useReducer(e,r,t)},r.useRef=function(e){return L().useRef(e)},r.useState=function(e){return L().useState(e)},r.version="16.13.1"},1316:function(e,r,t){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function u(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,r){for(var t,c,i=u(e),l=1;l<arguments.length;l++){for(var f in t=Object(arguments[l]))o.call(t,f)&&(i[f]=t[f]);if(n){c=n(t);for(var s=0;s<c.length;s++)a.call(t,c[s])&&(i[c[s]]=t[c[s]])}}return i}},63:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return u})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return i})),t.d(r,"default",(function(){return f}));var n=t(2),o=t(6),a=(t(1314),t(1313)),u={id:"_utils_fieldtransformhelpers_.transformtype",title:"TransformType",sidebar_label:"TransformType"},c={unversionedId:"api/graphback-core/enums/_utils_fieldtransformhelpers_.transformtype",id:"api/graphback-core/enums/_utils_fieldtransformhelpers_.transformtype",isDocsHomePage:!1,title:"TransformType",description:"Index",source:"@site/../docs/api/graphback-core/enums/_utils_fieldtransformhelpers_.transformtype.md",slug:"/api/graphback-core/enums/_utils_fieldtransformhelpers_.transformtype",permalink:"/docs/next/api/graphback-core/enums/_utils_fieldtransformhelpers_.transformtype",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-core/enums/_utils_fieldtransformhelpers_.transformtype.md",version:"current",sidebar_label:"TransformType"},i=[{value:"Index",id:"index",children:[{value:"Enumeration members",id:"enumeration-members",children:[]}]},{value:"Enumeration members",id:"enumeration-members-1",children:[{value:"CREATE",id:"create",children:[]},{value:"UPDATE",id:"update",children:[]}]}],l={rightToc:i};function f(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"index"},"Index"),Object(a.b)("h3",{id:"enumeration-members"},"Enumeration members"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/enums/_utils_fieldtransformhelpers_.transformtype#create"}),"CREATE")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/enums/_utils_fieldtransformhelpers_.transformtype#update"}),"UPDATE"))),Object(a.b)("h2",{id:"enumeration-members-1"},"Enumeration members"),Object(a.b)("h3",{id:"create"},"CREATE"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"CREATE"),': = "onCreateFieldTransform"'),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/037ecd7/packages/graphback-core/src/utils/fieldTransformHelpers.ts#L15"}),"packages/graphback-core/src/utils/fieldTransformHelpers.ts:15"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"update"},"UPDATE"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"UPDATE"),': = "onUpdateFieldTransform"'),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/037ecd7/packages/graphback-core/src/utils/fieldTransformHelpers.ts#L14"}),"packages/graphback-core/src/utils/fieldTransformHelpers.ts:14"))))}f.isMDXComponent=!0}}]);