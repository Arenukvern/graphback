(window.webpackJsonp=window.webpackJsonp||[]).push([[468],{522:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),i=(a(0),a(782)),o={id:"intro",title:"Data Synchronization",sidebar_label:"What is Data Synchronization?"},c={unversionedId:"datasync/intro",id:"version-0.15.x/datasync/intro",isDocsHomePage:!1,title:"Data Synchronization",description:"The @graphback/datasync package consists of the Data Synchronization Schema plugin and compatible data sources, provides out of the box Data Synchronization strategies for GraphQL clients with offline functionality e.g. Offix.",source:"@site/versioned_docs/version-0.15.x/datasync/intro.md",slug:"/datasync/intro",permalink:"/docs/datasync/intro",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.15.x/datasync/intro.md",version:"0.15.x",sidebar_label:"What is Data Synchronization?",sidebar:"version-0.15.x/docs",previous:{title:"KeycloakConfig",permalink:"/docs/api/graphback-keycloak-authz/modules/_keycloakconfig_"},next:{title:"Soft Deletes with delta queries",permalink:"/docs/datasync/soft-delete"}},s=[{value:"Motivation",id:"motivation",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]}],l={rightToc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"@graphback/datasync")," package consists of the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/graphback-datasync/classes/_datasyncplugin_.datasyncplugin"}),"Data Synchronization Schema plugin")," and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/graphback-datasync/classes/_providers_datasyncmongodbdataprovider_.datasyncmongodbdataprovider"}),"compatible data sources"),", provides out of the box Data Synchronization strategies for GraphQL clients with offline functionality e.g. ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://offix.dev"}),"Offix"),". "),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Currently this plugin ",Object(i.b)("strong",{parentName:"p"},"only")," supports MongoDB data sources, with support for other kinds of data sources coming in a future release."))),Object(i.b)("h2",{id:"motivation"},"Motivation"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"@graphback/datasync")," package is meant to be naturally extend ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://offix.dev"}),"Offix")," with a GraphQLCRUD compliant API:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Fetch data that was changed based on the client side timestamp"),Object(i.b)("li",{parentName:"ul"},"Ensure data consistency using timestamp provided")),Object(i.b)("p",null,"It achieves this by:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Providing Delta Queries"),": Delta queries can be used by GraphQL clients to refresh changes in data between periods of connectivity outages. "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Providing server-side Conflict Resolution capabilities"),": For mutations that are applied offline, this provides the server with the ability to resolve conflicts between server and client.")),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("p",null,"The Graphback Data Synchronization package provides schema plugins as well as data sources for all supported data synchronization patterns."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm install @graphback/datasync\n")),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"There are two steps to implementing a data synchronization strategy:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Add metadata to schema"),Object(i.b)("li",{parentName:"ul"},"Use the relevant plugin and data source")),Object(i.b)("p",null,"Currently the supported strategies are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/datasync/soft-delete"}),"Soft deletes with delta queries for MongoDB"))))}p.isMDXComponent=!0},782:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(a),u=n,h=b["".concat(o,".").concat(u)]||b[u]||d[u]||i;return a?r.a.createElement(h,c(c({ref:t},l),{},{components:a})):r.a.createElement(h,c({ref:t},l))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);