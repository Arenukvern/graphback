/*! For license information please see 4ecb7a96.12210b4d.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[219],{274:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(2),o=t(6),a=(t(783),t(782)),i={id:"datamodel",title:"Data Model",sidebar_label:"Data Model"},c={unversionedId:"model/datamodel",id:"model/datamodel",isDocsHomePage:!1,title:"Data Model",description:"Graphback generates a GraphQL API and client-side documents using your data models. The data models are represented in the GraphQL Schema language as GraphQL types.",source:"@site/../docs/model/datamodel.md",slug:"/model/datamodel",permalink:"/docs/next/model/datamodel",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/model/datamodel.md",version:"current",sidebar_label:"Data Model",sidebar:"docs",previous:{title:"Adding Graphback to your project",permalink:"/docs/next/getting-started/add-to-project"},next:{title:"Annotations",permalink:"/docs/next/model/annotations"}},l=[{value:"Model",id:"model",children:[]},{value:"Primary key",id:"primary-key",children:[{value:"PostgreSQL",id:"postgresql",children:[]},{value:"MongoDB",id:"mongodb",children:[]}]},{value:"Relationships",id:"relationships",children:[{value:"OneToMany",id:"onetomany",children:[]},{value:"OneToOne",id:"onetoone",children:[]},{value:"ManyToMany",id:"manytomany",children:[]}]},{value:"Type fields",id:"type-fields",children:[]}],u={rightToc:l};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Graphback generates a GraphQL API and client-side documents using your data models. The data models are represented in the GraphQL Schema language as GraphQL types."),Object(a.b)("p",null,"In this section you will learn how to design and configure your data models for use with Graphback and how they can be used for multiple datasources."),Object(a.b)("h2",{id:"model"},"Model"),Object(a.b)("p",null,"Graphback processes GraphQL Schema types annotated with ",Object(a.b)("inlineCode",{parentName:"p"},"@model"),".\nAdding this annotation to your type will generate CRUD resolvers, services, data providers and client queries following the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://graphqlcrud.org"}),"GraphQLCRUD")," format. For the full annotation definition see ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"./annotations#model"}),Object(a.b)("inlineCode",{parentName:"a"},"@model")),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@model\n"""\ntype Note {\n  ...\n}\n')),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Check out the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/model/scalars"}),"Graphback Scalars")," chapter to see the list of scalars supported out of the box. "))),Object(a.b)("h2",{id:"primary-key"},"Primary key"),Object(a.b)("p",null,"Graphback requires each data model to have one primary key field which is used to uniquely represent every object in the database."),Object(a.b)("h3",{id:"postgresql"},"PostgreSQL"),Object(a.b)("p",null,"For PostgreSQL, the default primary key format is ",Object(a.b)("inlineCode",{parentName:"p"},"id: ID!"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@model\n"""\ntype Note {\n  """Default primary key format for PostgreSQL"""\n  id: ID!\n  ...\n}\n')),Object(a.b)("p",null,"You can also use the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"./annotations#id"}),Object(a.b)("inlineCode",{parentName:"a"},"@id"))," annotation to set a custom primary field."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@model\n"""\ntype Note {\n  id: ID!\n  """\n  This becomes the primary key\n  @id\n  """\n  title: String\n  ...\n}\n')),Object(a.b)("h3",{id:"mongodb"},"MongoDB"),Object(a.b)("p",null,"If you are using MongoDB you should use ",Object(a.b)("inlineCode",{parentName:"p"},"_id: GraphbackObjectID"),", as ",Object(a.b)("inlineCode",{parentName:"p"},"_id")," in MongoDB documents is reserved for the primary key."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@model\n"""\ntype Note {\n  """Primary key format for MongoDB"""\n  _id: GraphbackObjectID!\n  ...\n}\n\nscalar GraphbackObjectID\n')),Object(a.b)("h2",{id:"relationships"},"Relationships"),Object(a.b)("p",null,"Graphback provides support for one-to-many, one-to-one and many-to-many relationships."),Object(a.b)("h3",{id:"onetomany"},"OneToMany"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@model\n"""\ntype Note {\n  id: ID!\n  title: String!\n  """\n  @oneToMany(field: \'note\')\n  """\n  comments: [Comment]\n}\n')),Object(a.b)("p",null,"This creates a one-to-many relationship from ",Object(a.b)("inlineCode",{parentName:"p"},"Note.comments")," to ",Object(a.b)("inlineCode",{parentName:"p"},"Comment.note"),". If ",Object(a.b)("inlineCode",{parentName:"p"},"Comment.note")," does not exist Graphback will create it for you, otherwise you can define it yourself."),Object(a.b)("p",null,"For more on creating one-to-many relationships see the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"./annotations#onetomany"}),Object(a.b)("inlineCode",{parentName:"a"},"@oneToMany"))," annotation reference guide."),Object(a.b)("h3",{id:"onetoone"},"OneToOne"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@model\n"""\ntype Profile {\n  id: ID!\n  """\n  @oneToOne\n  """\n  user: User!\n}\n')),Object(a.b)("p",null,"This creates a one-sided relationship between the ",Object(a.b)("inlineCode",{parentName:"p"},"Profile")," and ",Object(a.b)("inlineCode",{parentName:"p"},"User")," models."),Object(a.b)("p",null,"For more on creating one-to-one relationships see the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"./annotations#onetoone"}),Object(a.b)("inlineCode",{parentName:"a"},"@oneToOne"))," annotation reference guide."),Object(a.b)("h3",{id:"manytomany"},"ManyToMany"),Object(a.b)("p",null,"To create a many-to-many relationship, add a model for your join table and use two one-to-many relationships."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'""" \n@model \n"""\ntype Note {\n  id: ID!\n  title: String!\n  description: String\n  """\n  @oneToMany(field: \'note\')\n  """\n  authors: [NoteAuthor]\n}\n\n"""\n@model\n"""\ntype NoteAuthor {\n  id: ID!\n}\n\n"""\n@model\n"""\ntype User {\n  id: ID!\n  name: String\n  """\n  @oneToMany(field: \'author\')\n  """\n  notes: [NoteAuthor]\n}\n')),Object(a.b)("p",null,"For more on creating many-to-many relationships see the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"./annotations#onetomany"}),Object(a.b)("inlineCode",{parentName:"a"},"@oneToMany"))," annotation reference guide."),Object(a.b)("h2",{id:"type-fields"},"Type fields"),Object(a.b)("p",null,"You can use GraphQL types to get strongly-typed fields which maps to a JSON column in PostgreSQL or an embedded/nested document in MongoDB."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@model\n"""\ntype Note {\n  id: ID!\n  """\n  @db(type: \'json\')\n  """\n  comments: [Comment]\n}\n\n"""\nA custom type that does \nnot have a database table\n"""\ntype Comment {\n  id: ID!\n  text: String\n}\n')),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"NOTE: The ",Object(a.b)("inlineCode",{parentName:"p"},"@db(type: 'json')")," annotation is only required for PostgreSQL.")))}s.isMDXComponent=!0},782:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),s=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=s(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),f=r,b=p["".concat(i,".").concat(f)]||p[f]||d[f]||a;return t?o.a.createElement(b,c(c({ref:n},u),{},{components:t})):o.a.createElement(b,c({ref:n},u))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},783:function(e,n,t){"use strict";e.exports=t(784)},784:function(e,n,t){"use strict";var r=t(785),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,u=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,d=o?Symbol.for("react.forward_ref"):60112,f=o?Symbol.for("react.suspense"):60113,b=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116,y="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j={};function g(e,n,t){this.props=e,this.context=n,this.refs=j,this.updater=t||O}function v(){}function N(e,n,t){this.props=e,this.context=n,this.refs=j,this.updater=t||O}g.prototype.isReactComponent={},g.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,n,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=g.prototype;var w=N.prototype=new v;w.constructor=N,r(w,g.prototype),w.isPureReactComponent=!0;var k={current:null},S=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function P(e,n,t){var r,o={},i=null,c=null;if(null!=n)for(r in void 0!==n.ref&&(c=n.ref),void 0!==n.key&&(i=""+n.key),n)S.call(n,r)&&!C.hasOwnProperty(r)&&(o[r]=n[r]);var l=arguments.length-2;if(1===l)o.children=t;else if(1<l){for(var u=Array(l),s=0;s<l;s++)u[s]=arguments[s+2];o.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:a,type:e,key:i,ref:c,props:o,_owner:k.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var D=/\/+/g,T=[];function _(e,n,t,r){if(T.length){var o=T.pop();return o.result=e,o.keyPrefix=n,o.func=t,o.context=r,o.count=0,o}return{result:e,keyPrefix:n,func:t,context:r,count:0}}function M(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>T.length&&T.push(e)}function E(e,n,t){return null==e?0:function e(n,t,r,o){var c=typeof n;"undefined"!==c&&"boolean"!==c||(n=null);var l=!1;if(null===n)l=!0;else switch(c){case"string":case"number":l=!0;break;case"object":switch(n.$$typeof){case a:case i:l=!0}}if(l)return r(o,n,""===t?"."+I(n,0):t),1;if(l=0,t=""===t?".":t+":",Array.isArray(n))for(var u=0;u<n.length;u++){var s=t+I(c=n[u],u);l+=e(c,s,r,o)}else if(null===n||"object"!=typeof n?s=null:s="function"==typeof(s=y&&n[y]||n["@@iterator"])?s:null,"function"==typeof s)for(n=s.call(n),u=0;!(c=n.next()).done;)l+=e(c=c.value,s=t+I(c,u++),r,o);else if("object"===c)throw r=""+n,Error(h(31,"[object Object]"===r?"object with keys {"+Object.keys(n).join(", ")+"}":r,""));return l}(e,"",n,t)}function I(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return n[e]}))}(e.key):n.toString(36)}function R(e,n){e.func.call(e.context,n,e.count++)}function q(e,n,t){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,n,e.count++),Array.isArray(e)?$(e,r,t,(function(e){return e})):null!=e&&(x(e)&&(e=function(e,n){return{$$typeof:a,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||n&&n.key===e.key?"":(""+e.key).replace(D,"$&/")+"/")+t)),r.push(e))}function $(e,n,t,r,o){var a="";null!=t&&(a=(""+t).replace(D,"$&/")+"/"),E(e,q,n=_(n,a,r,o)),M(n)}var G={current:null};function L(){var e=G.current;if(null===e)throw Error(h(321));return e}var A={ReactCurrentDispatcher:G,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:r};n.Children={map:function(e,n,t){if(null==e)return e;var r=[];return $(e,r,null,n,t),r},forEach:function(e,n,t){if(null==e)return e;E(e,R,n=_(null,null,n,t)),M(n)},count:function(e){return E(e,(function(){return null}),null)},toArray:function(e){var n=[];return $(e,n,null,(function(e){return e})),n},only:function(e){if(!x(e))throw Error(h(143));return e}},n.Component=g,n.Fragment=c,n.Profiler=u,n.PureComponent=N,n.StrictMode=l,n.Suspense=f,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,n.cloneElement=function(e,n,t){if(null==e)throw Error(h(267,e));var o=r({},e.props),i=e.key,c=e.ref,l=e._owner;if(null!=n){if(void 0!==n.ref&&(c=n.ref,l=k.current),void 0!==n.key&&(i=""+n.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in n)S.call(n,s)&&!C.hasOwnProperty(s)&&(o[s]=void 0===n[s]&&void 0!==u?u[s]:n[s])}var s=arguments.length-2;if(1===s)o.children=t;else if(1<s){u=Array(s);for(var p=0;p<s;p++)u[p]=arguments[p+2];o.children=u}return{$$typeof:a,type:e.type,key:i,ref:c,props:o,_owner:l}},n.createContext=function(e,n){return void 0===n&&(n=null),(e={$$typeof:p,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},n.createElement=P,n.createFactory=function(e){var n=P.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:d,render:e}},n.isValidElement=x,n.lazy=function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},n.memo=function(e,n){return{$$typeof:b,type:e,compare:void 0===n?null:n}},n.useCallback=function(e,n){return L().useCallback(e,n)},n.useContext=function(e,n){return L().useContext(e,n)},n.useDebugValue=function(){},n.useEffect=function(e,n){return L().useEffect(e,n)},n.useImperativeHandle=function(e,n,t){return L().useImperativeHandle(e,n,t)},n.useLayoutEffect=function(e,n){return L().useLayoutEffect(e,n)},n.useMemo=function(e,n){return L().useMemo(e,n)},n.useReducer=function(e,n,t){return L().useReducer(e,n,t)},n.useRef=function(e){return L().useRef(e)},n.useState=function(e){return L().useState(e)},n.version="16.13.1"},785:function(e,n,t){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,n){for(var t,c,l=i(e),u=1;u<arguments.length;u++){for(var s in t=Object(arguments[u]))o.call(t,s)&&(l[s]=t[s]);if(r){c=r(t);for(var p=0;p<c.length;p++)a.call(t,c[p])&&(l[c[p]]=t[c[p]])}}return l}}}]);