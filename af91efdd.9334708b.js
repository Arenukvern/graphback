(window.webpackJsonp=window.webpackJsonp||[]).push([[494],{548:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return p}));var a=t(2),r=t(6),i=(t(0),t(782)),l={id:"plugins",title:"Custom logic with Plugins",sidebar_label:"Plugins"},o={unversionedId:"graphql-migrations/plugins",id:"version-0.14.x/graphql-migrations/plugins",isDocsHomePage:!1,title:"Custom logic with Plugins",description:"It's possible to write custom queries to be executed during migrations using Plugins.",source:"@site/versioned_docs/version-0.14.x/graphql-migrations/plugins.md",slug:"/graphql-migrations/plugins",permalink:"/docs/0.14.x/graphql-migrations/plugins",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.14.x/graphql-migrations/plugins.md",version:"0.14.x",sidebar_label:"Plugins",sidebar:"version-0.14.x/docs",previous:{title:"API Reference",permalink:"/docs/0.14.x/graphql-migrations/api"},next:{title:"GraphQL Migrations Filters",permalink:"/docs/0.14.x/graphql-migrations/filters"}},c=[],b={rightToc:c};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"It's possible to write custom queries to be executed during migrations using Plugins."),Object(i.b)("p",null,"Currently a plugin can only declare tap on the Writer system, with the ",Object(i.b)("inlineCode",{parentName:"p"},"write")," and ",Object(i.b)("inlineCode",{parentName:"p"},"tap")," methods:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { MigratePlugin, WriteParams } from 'graphql-migrations'\n\nclass MyPlugin extends MigratePlugin {\n  write ({ tap }: WriteParams) {\n    tap('op-type', 'before', (op: any, transaction: any) => {\n      // or 'after'\n    })\n\n    return true;\n  }\n}\n")),Object(i.b)("p",null,"The arguments are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"operation: string"),", can be one of the following:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"table.create")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"table.rename")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"table.comment.set")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"table.drop")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"table.index.create")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"table.index.drop")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"table.primary.set")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"table.primary.drop")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"table.unique.create")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"table.unique.drop")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"table.foreign.create")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"table.foreign.drop")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"column.create")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"column.rename")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"column.alter")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"column.drop")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"type: 'before' | 'after'")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"callback: function")," which get those parameters:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"operation"),": the operation object (see ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/aerogear/graphback/blob/master/packages/graphql-migrations/src/diff/Operation.ts"}),"Operation.ts"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"transaction"),": the ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"http://knexjs.org/#Transactions"}),"Knex SQL transaction"))))),Object(i.b)("p",null,"Then, instantiate the plugin in the ",Object(i.b)("inlineCode",{parentName:"p"},"plugins")," option array of the ",Object(i.b)("inlineCode",{parentName:"p"},"migrateDB")," method."),Object(i.b)("p",null,"For example, let's say we have the following schema:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@model\n"""\ntype User {\n  id: ID!\n  fname: String\n  lname: String\n}\n')),Object(i.b)("p",null,"Now we want to migrate the ",Object(i.b)("inlineCode",{parentName:"p"},"user")," table from two columns ",Object(i.b)("inlineCode",{parentName:"p"},"fname")," and ",Object(i.b)("inlineCode",{parentName:"p"},"lname")," into one:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"fullname = fname + ' ' + lname\n")),Object(i.b)("p",null,"Here is the example code to achieve this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { migrateDB, MigratePlugin, WriteParams } from 'graphql-migrations';\n\nconst schema = `\n\"\"\"\n@model\n\"\"\"\ntype User {\n  id: ID!\n\n  \"\"\"\n  db(oldNames: ['lname'])\n  \"\"\" \n  fullname: String\n}\n`;\n\nclass MyPlugin implements MigratePlugin {\n  write ({ tap }: WriteParams) {\n    tap('column.drop', 'before', async (op: any, transaction: any) => {\n      // Check the table and column\n      if (op.table === 'user' && op.column === 'fname') {\n        // Update the users lname with fname + ' ' + lname\n        const users = await transaction\n          .select('id', 'fname', 'lname')\n          .from('user');\n        for (const user of users) {\n          await transaction('user')\n            .where({ id: user.id })\n            .update({\n              lname: `${user.fname} ${user.lname}`\n            })\n        }\n      }\n    })\n\n    return true;\n  }\n}\n\nconst dbConfig = {\n    // Knex database configuration\n}\n\nmigrateDB(dbConfig, schema, {\n  plugins: [\n    new MyPlugin(),\n  ]\n})\n")),Object(i.b)("p",null,"The above code does the following:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Remove the ",Object(i.b)("inlineCode",{parentName:"li"},"fname")," field from the schema."),Object(i.b)("li",{parentName:"ul"},"Rename ",Object(i.b)("inlineCode",{parentName:"li"},"lname")," to ",Object(i.b)("inlineCode",{parentName:"li"},"fullname")," in the schema."),Object(i.b)("li",{parentName:"ul"},"Annotate the ",Object(i.b)("inlineCode",{parentName:"li"},"fullname")," field to indicate it's the new name of ",Object(i.b)("inlineCode",{parentName:"li"},"lname"),"."),Object(i.b)("li",{parentName:"ul"},"We declare a plugin that tap into the ",Object(i.b)("inlineCode",{parentName:"li"},"column.drop")," write operation."),Object(i.b)("li",{parentName:"ul"},"In this hook, we read the users and update each one of them to merge the two columns into ",Object(i.b)("inlineCode",{parentName:"li"},"lname")," before the ",Object(i.b)("inlineCode",{parentName:"li"},"fname")," column is dropped.")))}p.isMDXComponent=!0},782:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var b=r.a.createContext({}),p=function(e){var n=r.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=p(e.components);return r.a.createElement(b.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),m=p(t),u=a,d=m["".concat(l,".").concat(u)]||m[u]||s[u]||i;return t?r.a.createElement(d,o(o({ref:n},b),{},{components:t})):r.a.createElement(d,o({ref:n},b))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=u;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var b=2;b<i;b++)l[b]=t[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);