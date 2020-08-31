(window.webpackJsonp=window.webpackJsonp||[]).push([[352],{407:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(2),i=t(6),a=(t(0),t(782)),c={id:"_clientcrudplugin_.clientgeneratorpluginconfig",title:"ClientGeneratorPluginConfig",sidebar_label:"ClientGeneratorPluginConfig"},o={unversionedId:"api/graphback-codegen-client/interfaces/_clientcrudplugin_.clientgeneratorpluginconfig",id:"version-0.15.x/api/graphback-codegen-client/interfaces/_clientcrudplugin_.clientgeneratorpluginconfig",isDocsHomePage:!1,title:"ClientGeneratorPluginConfig",description:"Configuration for client generator",source:"@site/versioned_docs/version-0.15.x/api/graphback-codegen-client/interfaces/_clientcrudplugin_.clientgeneratorpluginconfig.md",slug:"/api/graphback-codegen-client/interfaces/_clientcrudplugin_.clientgeneratorpluginconfig",permalink:"/docs/api/graphback-codegen-client/interfaces/_clientcrudplugin_.clientgeneratorpluginconfig",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.15.x/api/graphback-codegen-client/interfaces/_clientcrudplugin_.clientgeneratorpluginconfig.md",version:"0.15.x",sidebar_label:"ClientGeneratorPluginConfig"},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Index",id:"index",children:[{value:"Properties",id:"properties",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"<code>Optional</code> fragmentOnly",id:"optional-fragmentonly",children:[]},{value:"outputFile",id:"outputfile",children:[]}]}],p={rightToc:l};function u(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Configuration for client generator"),Object(a.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"ClientGeneratorPluginConfig"))),Object(a.b)("h2",{id:"index"},"Index"),Object(a.b)("h3",{id:"properties"},"Properties"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/graphback-codegen-client/interfaces/_clientcrudplugin_.clientgeneratorpluginconfig#optional-fragmentonly"}),"fragmentOnly")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/graphback-codegen-client/interfaces/_clientcrudplugin_.clientgeneratorpluginconfig#outputfile"}),"outputFile"))),Object(a.b)("h2",{id:"properties-1"},"Properties"),Object(a.b)("h3",{id:"optional-fragmentonly"},Object(a.b)("inlineCode",{parentName:"h3"},"Optional")," fragmentOnly"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"fragmentOnly"),"? : ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphback-codegen-client/src/ClientCRUDPlugin.ts#L16"}),"graphback-codegen-client/src/ClientCRUDPlugin.ts:16"))),Object(a.b)("p",null,"Generate only fragments and skip query, mutation and subscription elements\nThis can be particulairly usefull when many custom complex queries are needed\nbut they still base on autogenerated fragments"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"outputfile"},"outputFile"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"outputFile"),": ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphback-codegen-client/src/ClientCRUDPlugin.ts#L21"}),"graphback-codegen-client/src/ClientCRUDPlugin.ts:21"))),Object(a.b)("p",null,"RelativePath for the output file created by generator"))}u.isMDXComponent=!0},782:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),u=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},b=function(e){var n=u(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},s=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=u(t),s=r,d=b["".concat(c,".").concat(s)]||b[s]||g[s]||a;return t?i.a.createElement(d,o(o({ref:n},p),{},{components:t})):i.a.createElement(d,o({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=s;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var p=2;p<a;p++)c[p]=t[p];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);