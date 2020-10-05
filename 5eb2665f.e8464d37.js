/*! For license information please see 5eb2665f.e8464d37.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[468],{1313:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),o=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=o(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=o(a),s=r,m=d["".concat(c,".").concat(s)]||d[s]||u[s]||b;return a?n.a.createElement(m,l(l({ref:t},p),{},{components:a})):n.a.createElement(m,l({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,c=new Array(b);c[0]=s;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var p=2;p<b;p++)c[p]=a[p];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},1314:function(e,t,a){"use strict";e.exports=a(1315)},1315:function(e,t,a){"use strict";var r=a(1316),n="function"==typeof Symbol&&Symbol.for,b=n?Symbol.for("react.element"):60103,c=n?Symbol.for("react.portal"):60106,l=n?Symbol.for("react.fragment"):60107,i=n?Symbol.for("react.strict_mode"):60108,p=n?Symbol.for("react.profiler"):60114,o=n?Symbol.for("react.provider"):60109,d=n?Symbol.for("react.context"):60110,u=n?Symbol.for("react.forward_ref"):60112,s=n?Symbol.for("react.suspense"):60113,m=n?Symbol.for("react.memo"):60115,O=n?Symbol.for("react.lazy"):60116,j="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,a=1;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N={};function g(e,t,a){this.props=e,this.context=t,this.refs=N,this.updater=a||f}function y(){}function v(e,t,a){this.props=e,this.context=t,this.refs=N,this.updater=a||f}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=g.prototype;var k=v.prototype=new y;k.constructor=v,r(k,g.prototype),k.isPureReactComponent=!0;var x={current:null},P=Object.prototype.hasOwnProperty,D={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,a){var r,n={},c=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(c=""+t.key),t)P.call(t,r)&&!D.hasOwnProperty(r)&&(n[r]=t[r]);var i=arguments.length-2;if(1===i)n.children=a;else if(1<i){for(var p=Array(i),o=0;o<i;o++)p[o]=arguments[o+2];n.children=p}if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===n[r]&&(n[r]=i[r]);return{$$typeof:b,type:e,key:c,ref:l,props:n,_owner:x.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===b}var B=/\/+/g,w=[];function T(e,t,a,r){if(w.length){var n=w.pop();return n.result=e,n.keyPrefix=t,n.func=a,n.context=r,n.count=0,n}return{result:e,keyPrefix:t,func:a,context:r,count:0}}function S(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>w.length&&w.push(e)}function K(e,t,a,r){var n=typeof e;"undefined"!==n&&"boolean"!==n||(e=null);var l=!1;if(null===e)l=!0;else switch(n){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case b:case c:l=!0}}if(l)return a(r,e,""===t?"."+E(e,0):t),1;if(l=0,t=""===t?".":t+":",Array.isArray(e))for(var i=0;i<e.length;i++){var p=t+E(n=e[i],i);l+=K(n,p,a,r)}else if(null===e||"object"!=typeof e?p=null:p="function"==typeof(p=j&&e[j]||e["@@iterator"])?p:null,"function"==typeof p)for(e=p.call(e),i=0;!(n=e.next()).done;)l+=K(n=n.value,p=t+E(n,i++),a,r);else if("object"===n)throw a=""+e,Error(h(31,"[object Object]"===a?"object with keys {"+Object.keys(e).join(", ")+"}":a,""));return l}function R(e,t,a){return null==e?0:K(e,"",t,a)}function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function F(e,t){e.func.call(e.context,t,e.count++)}function L(e,t,a){var r=e.result,n=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?M(e,r,a,(function(e){return e})):null!=e&&(C(e)&&(e=function(e,t){return{$$typeof:b,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,n+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(B,"$&/")+"/")+a)),r.push(e))}function M(e,t,a,r,n){var b="";null!=a&&(b=(""+a).replace(B,"$&/")+"/"),R(e,L,t=T(t,b,r,n)),S(t)}var $={current:null};function q(){var e=$.current;if(null===e)throw Error(h(321));return e}var Q={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:x,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,a){if(null==e)return e;var r=[];return M(e,r,null,t,a),r},forEach:function(e,t,a){if(null==e)return e;R(e,F,t=T(null,null,t,a)),S(t)},count:function(e){return R(e,(function(){return null}),null)},toArray:function(e){var t=[];return M(e,t,null,(function(e){return e})),t},only:function(e){if(!C(e))throw Error(h(143));return e}},t.Component=g,t.Fragment=l,t.Profiler=p,t.PureComponent=v,t.StrictMode=i,t.Suspense=s,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q,t.cloneElement=function(e,t,a){if(null==e)throw Error(h(267,e));var n=r({},e.props),c=e.key,l=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,i=x.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var p=e.type.defaultProps;for(o in t)P.call(t,o)&&!D.hasOwnProperty(o)&&(n[o]=void 0===t[o]&&void 0!==p?p[o]:t[o])}var o=arguments.length-2;if(1===o)n.children=a;else if(1<o){p=Array(o);for(var d=0;d<o;d++)p[d]=arguments[d+2];n.children=p}return{$$typeof:b,type:e.type,key:c,ref:l,props:n,_owner:i}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:d,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:o,_context:e},e.Consumer=e},t.createElement=_,t.createFactory=function(e){var t=_.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:O,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return q().useCallback(e,t)},t.useContext=function(e,t){return q().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return q().useEffect(e,t)},t.useImperativeHandle=function(e,t,a){return q().useImperativeHandle(e,t,a)},t.useLayoutEffect=function(e,t){return q().useLayoutEffect(e,t)},t.useMemo=function(e,t){return q().useMemo(e,t)},t.useReducer=function(e,t,a){return q().useReducer(e,t,a)},t.useRef=function(e){return q().useRef(e)},t.useState=function(e){return q().useState(e)},t.version="16.13.1"},1316:function(e,t,a){"use strict";var r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},a=0;a<10;a++)t["_"+String.fromCharCode(a)]=a;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(n){return!1}}()?Object.assign:function(e,t){for(var a,l,i=c(e),p=1;p<arguments.length;p++){for(var o in a=Object(arguments[p]))n.call(a,o)&&(i[o]=a[o]);if(r){l=r(a);for(var d=0;d<l.length;d++)b.call(a,l[d])&&(i[l[d]]=a[l[d]])}}return i}},523:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return o}));var r=a(2),n=a(6),b=(a(1314),a(1313)),c={id:"_knexdbdataprovider_.knexdbdataprovider",title:"KnexDBDataProvider",sidebar_label:"KnexDBDataProvider"},l={unversionedId:"api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider",id:"api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider",isDocsHomePage:!1,title:"KnexDBDataProvider",description:"Knex.js database data provider exposing basic CRUD operations that works with all databases that knex supports.",source:"@site/../docs/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider.md",slug:"/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider",permalink:"/docs/next/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider.md",version:"current",sidebar_label:"KnexDBDataProvider",sidebar:"docs",previous:{title:"createKnexDbProvider",permalink:"/docs/next/api/graphback-runtime-knex/modules/_createknexdbprovider_"},next:{title:"SQLiteKnexDBDataProvider",permalink:"/docs/next/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider"}},i=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Implements",id:"implements",children:[]},{value:"Index",id:"index",children:[{value:"Constructors",id:"constructors",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Methods",id:"methods",children:[]}]},{value:"Constructors",id:"constructors-1",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"<code>Protected</code> db",id:"protected-db",children:[]},{value:"<code>Protected</code> queryBuilder",id:"protected-querybuilder",children:[]},{value:"<code>Protected</code> tableMap",id:"protected-tablemap",children:[]},{value:"<code>Protected</code> tableName",id:"protected-tablename",children:[]}]},{value:"Methods",id:"methods-1",children:[{value:"batchRead",id:"batchread",children:[]},{value:"count",id:"count",children:[]},{value:"create",id:"create",children:[]},{value:"delete",id:"delete",children:[]},{value:"findBy",id:"findby",children:[]},{value:"findOne",id:"findone",children:[]},{value:"<code>Protected</code> getSelectedFields",id:"protected-getselectedfields",children:[]},{value:"update",id:"update",children:[]},{value:"<code>Private</code> usePage",id:"private-usepage",children:[]}]}],p={rightToc:i};function o(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Knex.js database data provider exposing basic CRUD operations that works with all databases that knex supports.\nLayer is tested with following databases:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"SQLite (by ",Object(b.b)("inlineCode",{parentName:"li"},"SQLiteKnexDBDataProvider"),")"),Object(b.b)("li",{parentName:"ul"},"MySQL (MariaDB)"),Object(b.b)("li",{parentName:"ul"},"Postgres")),Object(b.b)("p",null,"NOTE: For SQLite use dedicated ",Object(b.b)("inlineCode",{parentName:"p"},"SQLiteKnexDBDataProvider")," that implements more speficic creation method to avoid the not supported ",Object(b.b)("inlineCode",{parentName:"p"},"returning()"),"\nstatement."),Object(b.b)("h2",{id:"type-parameters"},"Type parameters"),Object(b.b)("p",null,"\u25aa ",Object(b.b)("strong",{parentName:"p"},"Type")),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"KnexDBDataProvider")),Object(b.b)("p",{parentName:"li"},"\u21b3 ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider"}),"SQLiteKnexDBDataProvider")))),Object(b.b)("h2",{id:"implements"},"Implements"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"GraphbackDataProvider\u2039Type\u203a")),Object(b.b)("h2",{id:"index"},"Index"),Object(b.b)("h3",{id:"constructors"},"Constructors"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider#constructor"}),"constructor"))),Object(b.b)("h3",{id:"properties"},"Properties"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider#protected-db"}),"db")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider#protected-querybuilder"}),"queryBuilder")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider#protected-tablemap"}),"tableMap")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider#protected-tablename"}),"tableName"))),Object(b.b)("h3",{id:"methods"},"Methods"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider#batchread"}),"batchRead")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider#count"}),"count")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider#create"}),"create")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider#delete"}),"delete")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider#findby"}),"findBy")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider#findone"}),"findOne")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider#protected-getselectedfields"}),"getSelectedFields")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider#update"}),"update")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider#private-usepage"}),"usePage"))),Object(b.b)("h2",{id:"constructors-1"},"Constructors"),Object(b.b)("h3",{id:"constructor"},"constructor"),Object(b.b)("p",null,"+"," ",Object(b.b)("strong",{parentName:"p"},"new KnexDBDataProvider"),"(",Object(b.b)("inlineCode",{parentName:"p"},"model"),": ModelDefinition, ",Object(b.b)("inlineCode",{parentName:"p"},"db"),": Knex): ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider"}),"KnexDBDataProvider"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/037ecd7/packages/graphback-runtime-knex/src/KnexDBDataProvider.ts#L21"}),"KnexDBDataProvider.ts:21"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"model")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"ModelDefinition")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"db")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Knex")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider"}),"KnexDBDataProvider"))),Object(b.b)("h2",{id:"properties-1"},"Properties"),Object(b.b)("h3",{id:"protected-db"},Object(b.b)("inlineCode",{parentName:"h3"},"Protected")," db"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"db"),": ",Object(b.b)("em",{parentName:"p"},"Knex")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/037ecd7/packages/graphback-runtime-knex/src/KnexDBDataProvider.ts#L18"}),"KnexDBDataProvider.ts:18"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"protected-querybuilder"},Object(b.b)("inlineCode",{parentName:"h3"},"Protected")," queryBuilder"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"queryBuilder"),": ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-runtime-knex/interfaces/_knexquerymapper_.crudknexquerymapper"}),"CRUDKnexQueryMapper"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/037ecd7/packages/graphback-runtime-knex/src/KnexDBDataProvider.ts#L21"}),"KnexDBDataProvider.ts:21"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"protected-tablemap"},Object(b.b)("inlineCode",{parentName:"h3"},"Protected")," tableMap"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"tableMap"),": ",Object(b.b)("em",{parentName:"p"},"ModelTableMap")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/037ecd7/packages/graphback-runtime-knex/src/KnexDBDataProvider.ts#L20"}),"KnexDBDataProvider.ts:20"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"protected-tablename"},Object(b.b)("inlineCode",{parentName:"h3"},"Protected")," tableName"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"tableName"),": ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/037ecd7/packages/graphback-runtime-knex/src/KnexDBDataProvider.ts#L19"}),"KnexDBDataProvider.ts:19"))),Object(b.b)("h2",{id:"methods-1"},"Methods"),Object(b.b)("h3",{id:"batchread"},"batchRead"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"batchRead"),"(",Object(b.b)("inlineCode",{parentName:"p"},"relationField"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"ids"),": string[], ",Object(b.b)("inlineCode",{parentName:"p"},"filter?"),": QueryFilter, ",Object(b.b)("inlineCode",{parentName:"p"},"selectedFields?"),": string[]): ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type","[][]","\u203a")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/037ecd7/packages/graphback-runtime-knex/src/KnexDBDataProvider.ts#L97"}),"KnexDBDataProvider.ts:97"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"relationField")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"ids")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string[]")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"filter?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"QueryFilter")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"selectedFields?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type","[][]","\u203a")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"count"},"count"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"count"),"(",Object(b.b)("inlineCode",{parentName:"p"},"filter?"),": QueryFilter): ",Object(b.b)("em",{parentName:"p"},"Promise\u2039number\u203a")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/037ecd7/packages/graphback-runtime-knex/src/KnexDBDataProvider.ts#L90"}),"KnexDBDataProvider.ts:90"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"filter?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"QueryFilter")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise\u2039number\u203a")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"create"},"create"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"create"),"(",Object(b.b)("inlineCode",{parentName:"p"},"data"),": Type, ",Object(b.b)("inlineCode",{parentName:"p"},"selectedFields?"),": string[]): ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/037ecd7/packages/graphback-runtime-knex/src/KnexDBDataProvider.ts#L30"}),"KnexDBDataProvider.ts:30"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"data")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Type")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"selectedFields?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"delete"},"delete"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"delete"),"(",Object(b.b)("inlineCode",{parentName:"p"},"data"),": Partial\u2039Type\u203a, ",Object(b.b)("inlineCode",{parentName:"p"},"selectedFields?"),": string[]): ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/037ecd7/packages/graphback-runtime-knex/src/KnexDBDataProvider.ts#L52"}),"KnexDBDataProvider.ts:52"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"data")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Partial\u2039Type\u203a")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"selectedFields?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"findby"},"findBy"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"findBy"),"(",Object(b.b)("inlineCode",{parentName:"p"},"args?"),": FindByArgs, ",Object(b.b)("inlineCode",{parentName:"p"},"selectedFields?"),": string[]): ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type[]\u203a")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/037ecd7/packages/graphback-runtime-knex/src/KnexDBDataProvider.ts#L74"}),"KnexDBDataProvider.ts:74"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"args?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"FindByArgs")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"selectedFields?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type[]\u203a")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"findone"},"findOne"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"findOne"),"(",Object(b.b)("inlineCode",{parentName:"p"},"args"),": Partial\u2039Type\u203a, ",Object(b.b)("inlineCode",{parentName:"p"},"selectedFields?"),": string[]): ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/037ecd7/packages/graphback-runtime-knex/src/KnexDBDataProvider.ts#L63"}),"KnexDBDataProvider.ts:63"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"args")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Partial\u2039Type\u203a")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"selectedFields?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"protected-getselectedfields"},Object(b.b)("inlineCode",{parentName:"h3"},"Protected")," getSelectedFields"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getSelectedFields"),"(",Object(b.b)("inlineCode",{parentName:"p"},"selectedFields"),": string[]): ",Object(b.b)("em",{parentName:"p"},'string[] | "'),'"*'),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/037ecd7/packages/graphback-runtime-knex/src/KnexDBDataProvider.ts#L111"}),"KnexDBDataProvider.ts:111"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"selectedFields")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},'string[] | "'),'"*'),Object(b.b)("hr",null),Object(b.b)("h3",{id:"update"},"update"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"update"),"(",Object(b.b)("inlineCode",{parentName:"p"},"data"),": Partial\u2039Type\u203a, ",Object(b.b)("inlineCode",{parentName:"p"},"selectedFields?"),": string[]): ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/037ecd7/packages/graphback-runtime-knex/src/KnexDBDataProvider.ts#L40"}),"KnexDBDataProvider.ts:40"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"data")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Partial\u2039Type\u203a")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"selectedFields?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"private-usepage"},Object(b.b)("inlineCode",{parentName:"h3"},"Private")," usePage"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"usePage"),"(",Object(b.b)("inlineCode",{parentName:"p"},"query"),": QueryBuilder, ",Object(b.b)("inlineCode",{parentName:"p"},"page?"),": GraphbackPage): ",Object(b.b)("em",{parentName:"p"},"QueryBuilder\u2039any, any\u203a")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/037ecd7/packages/graphback-runtime-knex/src/KnexDBDataProvider.ts#L115"}),"KnexDBDataProvider.ts:115"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"query")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"QueryBuilder")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"page?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphbackPage")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"QueryBuilder\u2039any, any\u203a")))}o.isMDXComponent=!0}}]);