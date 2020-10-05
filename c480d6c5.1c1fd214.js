(window.webpackJsonp=window.webpackJsonp||[]).push([[978],{1032:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return p})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return l}));var n=a(2),r=a(6),c=(a(0),a(1313)),b={id:"_helpers_createdatasync_",title:"helpers/createDataSync",sidebar_label:"helpers/createDataSync"},p={unversionedId:"api/graphback-datasync/modules/_helpers_createdatasync_",id:"version-0.16.x/api/graphback-datasync/modules/_helpers_createdatasync_",isDocsHomePage:!1,title:"helpers/createDataSync",description:"Index",source:"@site/versioned_docs/version-0.16.x/api/graphback-datasync/modules/_helpers_createdatasync_.md",slug:"/api/graphback-datasync/modules/_helpers_createdatasync_",permalink:"/docs/0.16.x/api/graphback-datasync/modules/_helpers_createdatasync_",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.16.x/api/graphback-datasync/modules/_helpers_createdatasync_.md",version:"0.16.x",sidebar_label:"helpers/createDataSync"},o=[{value:"Index",id:"index",children:[{value:"Functions",id:"functions",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"createDataSyncAPI",id:"createdatasyncapi",children:[]}]}],i={rightToc:o};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"index"},"Index"),Object(c.b)("h3",{id:"functions"},"Functions"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/0.16.x/api/graphback-datasync/modules/_helpers_createdatasync_#createdatasyncapi"}),"createDataSyncAPI"))),Object(c.b)("h2",{id:"functions-1"},"Functions"),Object(c.b)("h3",{id:"createdatasyncapi"},"createDataSyncAPI"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"createDataSyncAPI"),"(",Object(c.b)("inlineCode",{parentName:"p"},"model"),": string | GraphQLSchema, ",Object(c.b)("inlineCode",{parentName:"p"},"createDataSyncConfig"),": object): ",Object(c.b)("em",{parentName:"p"},"GraphbackAPI")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-datasync/src/helpers/createDataSync.ts#L11"}),"packages/graphback-datasync/src/helpers/createDataSync.ts:11"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("p",null,"\u25aa ",Object(c.b)("strong",{parentName:"p"},"model"),": ",Object(c.b)("em",{parentName:"p"},"string | GraphQLSchema")),Object(c.b)("p",null,"\u25aa ",Object(c.b)("strong",{parentName:"p"},"createDataSyncConfig"),": ",Object(c.b)("em",{parentName:"p"},"object")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"conflictConfig?")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/0.16.x/api/graphback-datasync/interfaces/_util_.globalconflictconfig"}),"GlobalConflictConfig"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"db")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Db")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"graphbackAPIConfig?")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DataSyncGraphbackAPIConfig")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"GraphbackAPI")))}l.isMDXComponent=!0},1313:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),l=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},s=function(e){var t=l(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,b=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),s=l(a),u=n,m=s["".concat(b,".").concat(u)]||s[u]||d[u]||c;return a?r.a.createElement(m,p(p({ref:t},i),{},{components:a})):r.a.createElement(m,p({ref:t},i))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,b=new Array(c);b[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:n,b[1]=p;for(var i=2;i<c;i++)b[i]=a[i];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);