"use strict";(self.webpackChunkrooch_network=self.webpackChunkrooch_network||[]).push([[78],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),a=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=a(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=a(n),m=o,d=f["".concat(u,".").concat(m)]||f[m]||s[m]||c;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var a=2;a<c;a++)i[a]=n[a];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1300:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return s},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return a}});var r=n(3117),o=(n(7294),n(3905));const c={},i="\u591a\u94fe\u7ed3\u7b97\u534f\u8bae",l={unversionedId:"technology/multi-chain-settlement-protocol",id:"technology/multi-chain-settlement-protocol",title:"\u591a\u94fe\u7ed3\u7b97\u534f\u8bae",description:"\u7ed3\u7b97\u5c42\u627f\u62c5\u7684\u804c\u8d23",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/04-technology/02-multi-chain-settlement-protocol.md",sourceDirName:"04-technology",slug:"/technology/multi-chain-settlement-protocol",permalink:"/zh/docs/technology/multi-chain-settlement-protocol",draft:!1,editUrl:"https://github.com/rooch-network/rooch-network.github.io/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/04-technology/02-multi-chain-settlement-protocol.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6a21\u5757\u5316\u533a\u5757\u94fe\u67b6\u6784",permalink:"/zh/docs/technology/modular-blockchain-architecture/"},next:{title:"\u6b3a\u8bc8\u8bc1\u660e(Fraud Proofs)",permalink:"/zh/docs/technology/fraud-proofs"}},u={},a=[{value:"\u7ed3\u7b97\u5c42\u627f\u62c5\u7684\u804c\u8d23",id:"\u7ed3\u7b97\u5c42\u627f\u62c5\u7684\u804c\u8d23",level:3},{value:"\u591a\u4e2a\u7ed3\u7b97\u5c42\u5982\u4f55\u548c\u4ef2\u88c1\u5c42\u4ea4\u4e92",id:"\u591a\u4e2a\u7ed3\u7b97\u5c42\u5982\u4f55\u548c\u4ef2\u88c1\u5c42\u4ea4\u4e92",level:3},{value:"\u591a\u94fe\u7ed3\u7b97\u4e0e\u8de8\u94fe\u7684\u533a\u522b",id:"\u591a\u94fe\u7ed3\u7b97\u4e0e\u8de8\u94fe\u7684\u533a\u522b",level:3}],p={toc:a};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u591a\u94fe\u7ed3\u7b97\u534f\u8bae"},"\u591a\u94fe\u7ed3\u7b97\u534f\u8bae"),(0,o.kt)("h3",{id:"\u7ed3\u7b97\u5c42\u627f\u62c5\u7684\u804c\u8d23"},"\u7ed3\u7b97\u5c42\u627f\u62c5\u7684\u804c\u8d23"),(0,o.kt)("h3",{id:"\u591a\u4e2a\u7ed3\u7b97\u5c42\u5982\u4f55\u548c\u4ef2\u88c1\u5c42\u4ea4\u4e92"},"\u591a\u4e2a\u7ed3\u7b97\u5c42\u5982\u4f55\u548c\u4ef2\u88c1\u5c42\u4ea4\u4e92"),(0,o.kt)("h3",{id:"\u591a\u94fe\u7ed3\u7b97\u4e0e\u8de8\u94fe\u7684\u533a\u522b"},"\u591a\u94fe\u7ed3\u7b97\u4e0e\u8de8\u94fe\u7684\u533a\u522b"))}s.isMDXComponent=!0}}]);