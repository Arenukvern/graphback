(window.webpackJsonp=window.webpackJsonp||[]).push([[853],{1313:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return h}));var a=r(0),n=r.n(a);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var b=n.a.createContext({}),l=function(e){var t=n.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),u=l(r),d=a,h=u["".concat(o,".").concat(d)]||u[d]||s[d]||c;return r?n.a.createElement(h,i(i({ref:t},b),{},{components:r})):n.a.createElement(h,i({ref:t},b))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var b=2;b<c;b++)o[b]=r[b];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},907:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return l}));var a=r(2),n=r(6),c=(r(0),r(1313)),o={id:"index",title:"create-graphback",sidebar_label:"README"},i={unversionedId:"api/create-graphback/index",id:"version-1.0/api/create-graphback/index",isDocsHomePage:!1,title:"create-graphback",description:"Graphback",source:"@site/versioned_docs/version-1.0/api/create-graphback/index.md",slug:"/api/create-graphback/index",permalink:"/docs/api/create-graphback/index",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-1.0/api/create-graphback/index.md",version:"1.0",sidebar_label:"README"},p=[{value:"Graphback",id:"graphback",children:[]},{value:"Motivation",id:"motivation",children:[]},{value:"Usage",id:"usage",children:[]}],b={rightToc:p};function l(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"graphback"},"Graphback"),Object(c.b)("p",{align:"center"},Object(c.b)("img",{width:"400",src:"https://raw.githubusercontent.com/aerogear/graphback/master/website/static/img/logo.png"}),Object(c.b)("br",null),"Auto generate database structure, ",Object(c.b)("br",null),"GraphQL Resolvers and Queries from GraphQL types \ud83d\ude80"),Object(c.b)("h2",{id:"motivation"},"Motivation"),Object(c.b)("p",null,"Provides a small command line utility that can be used to initialise a ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://graphback.dev"}),"Graphback")," project. Graphback helps you to kickstart your experience with any existing GraphQL implementation by generating backend and client side CRUD layer using your GraphQL data model."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Documentation"),": ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://graphback.dev"}),"https://graphback.dev")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Repository"),": ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/aerogear/graphback/"}),"https://github.com/aerogear/graphback/")),Object(c.b)("h2",{id:"usage"},"Usage"),Object(c.b)("p",null,"You can initialise a Graphback project by either of the following commands:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npx create-graphback my-project\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm init graphback my-project\n")),Object(c.b)("p",null,"The CLI will ask you to pick from one of a number of templates. Once chosen, the template will be downloaded to your computer."),Object(c.b)("p",null,"Change into your project folder:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cd my-awesome-project\n")),Object(c.b)("p",null,"And follow the instructions in the ",Object(c.b)("inlineCode",{parentName:"p"},"README.md")," file to know how you can run the project."))}l.isMDXComponent=!0}}]);