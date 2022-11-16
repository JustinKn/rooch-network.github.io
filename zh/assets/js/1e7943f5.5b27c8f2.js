"use strict";(self.webpackChunkrooch_network=self.webpackChunkrooch_network||[]).push([[265],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(r),f=o,m=s["".concat(l,".").concat(f)]||s[f]||d[f]||a;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},6591:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return u}});var n=r(3117),o=(r(7294),r(3905));const a={},c="\u53bb\u4e2d\u5fc3\u5316\u7684\u9a8c\u8bc1\u8005\u7f51\u7edc",i={unversionedId:"technology/decentralized-validator-network",id:"technology/decentralized-validator-network",title:"\u53bb\u4e2d\u5fc3\u5316\u7684\u9a8c\u8bc1\u8005\u7f51\u7edc",description:"\u89d2\u8272\u8bf4\u660e",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/04-technology/06-decentralized-validator-network.md",sourceDirName:"04-technology",slug:"/technology/decentralized-validator-network",permalink:"/zh/docs/technology/decentralized-validator-network",draft:!1,editUrl:"https://github.com/rooch-network/rooch-network.github.io/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/04-technology/06-decentralized-validator-network.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4ea4\u6613\u7c7b\u7d2f\u52a0\u5668\u8bc1\u660e\uff08Transaction Accumulator Proofs\uff09",permalink:"/zh/docs/technology/transaction-accumulator-proofs"},next:{title:"\u5e76\u884c\u4ea4\u6613\u6267\u884c\uff08Parallel Transaction Execution\uff09",permalink:"/zh/docs/technology/parallel-transaction-execution"}},l={},u=[{value:"\u89d2\u8272\u8bf4\u660e",id:"\u89d2\u8272\u8bf4\u660e",level:3},{value:"\u53bb\u4e2d\u5fc3\u5316\u65b9\u6848",id:"\u53bb\u4e2d\u5fc3\u5316\u65b9\u6848",level:3},{value:"\u6fc0\u52b1\u673a\u5236",id:"\u6fc0\u52b1\u673a\u5236",level:3}],p={toc:u};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u53bb\u4e2d\u5fc3\u5316\u7684\u9a8c\u8bc1\u8005\u7f51\u7edc"},"\u53bb\u4e2d\u5fc3\u5316\u7684\u9a8c\u8bc1\u8005\u7f51\u7edc"),(0,o.kt)("h3",{id:"\u89d2\u8272\u8bf4\u660e"},"\u89d2\u8272\u8bf4\u660e"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6392\u5e8f\u5668\uff08Sequencer\uff09"),(0,o.kt)("li",{parentName:"ul"},"\u6821\u9a8c\u8005\uff08Verifier\uff09")),(0,o.kt)("p",null,"\u6392\u5e8f\u5668\u548c\u6821\u9a8c\u8005\u7edf\u79f0\u9a8c\u8bc1\u8005\uff08Validator\uff09"),(0,o.kt)("h3",{id:"\u53bb\u4e2d\u5fc3\u5316\u65b9\u6848"},"\u53bb\u4e2d\u5fc3\u5316\u65b9\u6848"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u9a8c\u8bc1\u8005\u9700\u8981\u5c06\u81ea\u5df1\u6ce8\u518c\u5230\u94fe\u4e0a\uff0c\u5e76\u62b5\u62bc Token\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u6bcf\u4e2a Epoch\uff0c\u94fe\u4e0a\u7684\u667a\u80fd\u5408\u7ea6\u968f\u673a\u9009\u62e9\u4e00\u4e2a\u9a8c\u8bc1\u8005\u4f5c\u4e3a\u6392\u5e8f\u5668\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u6240\u6709\u7684\u9a8c\u8bc1\u8005\u6784\u6210\u4e00\u4e2a P2P \u7f51\u7edc\uff0c\u9a8c\u8bc1\u8005\u6536\u5230\u7684\u4ea4\u6613\u4f1a\u8f6c\u53d1\u7ed9\u6392\u5e8f\u5668\uff0c\u6392\u5e8f\u5668\u6392\u5e8f\u6267\u884c\u540e\u4f1a\u8f6c\u53d1\u7ed9\u5176\u4ed6\u9a8c\u8bc1\u8005\uff0c\u5e76\u5e26\u4e0a",(0,o.kt)("a",{parentName:"li",href:"/zh/docs/technology/transaction-accumulator-proofs"},"\u4ea4\u6613\u7d2f\u52a0\u5668\u8bc1\u660e"),"\u3002")),(0,o.kt)("h3",{id:"\u6fc0\u52b1\u673a\u5236"},"\u6fc0\u52b1\u673a\u5236"))}d.isMDXComponent=!0}}]);