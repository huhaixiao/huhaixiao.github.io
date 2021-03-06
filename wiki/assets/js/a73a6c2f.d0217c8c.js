"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8907],{2371:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(9931);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),f=o,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8094:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7719),o=(r(9931),r(2371));const a={title:"\u8fdb\u5236",date:new Date("2021-04-17T18:54:03.000Z")},i="\u4e0d\u540c\u8fdb\u5236\u5728JS\u4e2d\u7684\u8868\u793a",l={unversionedId:"tools/cs-tools/radix-\u8fdb\u5236",id:"tools/cs-tools/radix-\u8fdb\u5236",title:"\u8fdb\u5236",description:"API",source:"@site/docs/tools/cs-tools/radix-\u8fdb\u5236.md",sourceDirName:"tools/cs-tools",slug:"/tools/cs-tools/radix-\u8fdb\u5236",permalink:"/wiki/docs/tools/cs-tools/radix-\u8fdb\u5236",draft:!1,tags:[],version:"current",frontMatter:{title:"\u8fdb\u5236",date:"2021-04-17T18:54:03.000Z"},sidebar:"tools",previous:{title:"\u7f51\u7edc",permalink:"/wiki/docs/tools/cs-tools/network"},next:{title:"ttt",permalink:"/wiki/docs/tools/cs-tools/ttt"}},c={},s=[{value:"API",id:"api",level:2},{value:"\u6a21\u62df",id:"\u6a21\u62df",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u4e0d\u540c\u8fdb\u5236\u5728js\u4e2d\u7684\u8868\u793a"},"\u4e0d\u540c\u8fdb\u5236\u5728JS\u4e2d\u7684\u8868\u793a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var binary = 0b1111\nvar octal = 07777\nvar decimal = 9999\nvar hex = 0xffff\n")),(0,o.kt)("h1",{id:"\u8fdb\u5236\u8f6c\u6362"},"\u8fdb\u5236\u8f6c\u6362"),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function nRadix2decimal(nRadixString, nRadix) {\n    return parseInt(nRadixString, nRadix)\n}\n\nfunction decimal2nRadixString(decimal, nRadix) {\n    return decimal.toString(nRadix)\n}\n")),(0,o.kt)("h2",{id:"\u6a21\u62df"},"\u6a21\u62df"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5341\u8fdb\u5236\u8f6cN\u8fdb\u5236(\u9664N\u53d6\u4f59\uff0c\u9006\u5e8f\u6392\u5217)"),(0,o.kt)("li",{parentName:"ol"},"N\u8fdb\u5236\u8f6c\u5341\u8fdb\u5236(\u6309\u6743\u76f8\u52a0)")))}d.isMDXComponent=!0}}]);