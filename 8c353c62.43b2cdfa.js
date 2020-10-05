(window.webpackJsonp=window.webpackJsonp||[]).push([[683],{1313:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return s}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),d=l(r),m=n,s=d["".concat(i,".").concat(m)]||d[m]||u[m]||c;return r?a.a.createElement(s,o(o({ref:t},p),{},{components:r})):a.a.createElement(s,o({ref:t},p))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=m;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<c;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},738:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return b})),r.d(t,"default",(function(){return l}));var n=r(2),a=r(6),c=(r(0),r(1313)),i={id:"_db_getprimarykey_",title:"db/getPrimaryKey",sidebar_label:"db/getPrimaryKey"},o={unversionedId:"api/graphback-core/modules/_db_getprimarykey_",id:"version-0.16.x/api/graphback-core/modules/_db_getprimarykey_",isDocsHomePage:!1,title:"db/getPrimaryKey",description:"Index",source:"@site/versioned_docs/version-0.16.x/api/graphback-core/modules/_db_getprimarykey_.md",slug:"/api/graphback-core/modules/_db_getprimarykey_",permalink:"/docs/0.16.x/api/graphback-core/modules/_db_getprimarykey_",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.16.x/api/graphback-core/modules/_db_getprimarykey_.md",version:"0.16.x",sidebar_label:"db/getPrimaryKey"},b=[{value:"Index",id:"index",children:[{value:"Functions",id:"functions",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"getPrimaryKey",id:"getprimarykey",children:[]}]}],p={rightToc:b};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"index"},"Index"),Object(c.b)("h3",{id:"functions"},"Functions"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/0.16.x/api/graphback-core/modules/_db_getprimarykey_#getprimarykey"}),"getPrimaryKey"))),Object(c.b)("h2",{id:"functions-1"},"Functions"),Object(c.b)("h3",{id:"getprimarykey"},"getPrimaryKey"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"getPrimaryKey"),"(",Object(c.b)("inlineCode",{parentName:"p"},"graphqlType"),": GraphQLObjectType): ",Object(c.b)("em",{parentName:"p"},"GraphQLField\u2039any, any\u203a")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-core/src/db/getPrimaryKey.ts#L11"}),"packages/graphback-core/src/db/getPrimaryKey.ts:11"))),Object(c.b)("p",null,"Returns the primary key field of a GraphQL object.\nFirst looks for the existence of a ",Object(c.b)("inlineCode",{parentName:"p"},"@id")," field annotation,\notherwise tries to find an ",Object(c.b)("inlineCode",{parentName:"p"},"id: ID")," field."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"graphqlType")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GraphQLObjectType"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"GraphQLField\u2039any, any\u203a")))}l.isMDXComponent=!0}}]);