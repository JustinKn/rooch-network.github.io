"use strict";(self.webpackChunkrooch_network=self.webpackChunkrooch_network||[]).push([[925],{4137:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=l(o),m=r,d=h["".concat(s,".").concat(m)]||h[m]||p[m]||a;return o?n.createElement(d,c(c({ref:t},u),{},{components:o})):n.createElement(d,c({ref:t},u))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,c=new Array(a);c[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=o[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},7037:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=o(3117),r=(o(7294),o(4137));const a={},c="Account Abstraction",i={unversionedId:"technology/move-on-rooch/account-abstraction",id:"technology/move-on-rooch/account-abstraction",title:"Account Abstraction",description:"Move's programing model is very conducive to account abstraction, as the account feature of Move Layer1 is implemented through the Move contract. In Rooch, we need to support multiple settlement layers to ensure that multiple Layer1 accounts can be mapped to Rooch accounts, so we need the Account Abstraction to achieve this.",source:"@site/docs/04-technology/07-move-on-rooch/02-account-abstraction.md",sourceDirName:"04-technology/07-move-on-rooch",slug:"/technology/move-on-rooch/account-abstraction",permalink:"/docs/technology/move-on-rooch/account-abstraction",draft:!1,editUrl:"https://github.com/rooch-network/rooch-network.github.io/edit/main/docs/04-technology/07-move-on-rooch/02-account-abstraction.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Cross Layer Interoperability",permalink:"/docs/technology/move-on-rooch/cross-layer-interoperability"},next:{title:"Rooch Framework",permalink:"/docs/technology/move-on-rooch/rooch-framework"}},s={},l=[{value:"Multi-chain address mapping",id:"multi-chain-address-mapping",level:2},{value:"Multi-chain state mapping",id:"multi-chain-state-mapping",level:2}],u={toc:l};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"account-abstraction"},"Account Abstraction"),(0,r.kt)("p",null,"Move's programing model is very conducive to account abstraction, as the account feature of Move Layer1 is implemented through the Move contract. In Rooch, we need to support multiple settlement layers to ensure that multiple Layer1 accounts can be mapped to Rooch accounts, so we need the Account Abstraction to achieve this."),(0,r.kt)("h2",{id:"multi-chain-address-mapping"},"Multi-chain address mapping"),(0,r.kt)("p",null,"In Rooch, each user will have an account address in Rooch, but this account address can be mapped to multiple Layer1 addresses, and transactions can be initiated using any Layer1 signature."),(0,r.kt)("h2",{id:"multi-chain-state-mapping"},"Multi-chain state mapping"),(0,r.kt)("p",null,"After each Layer1 state is migrated to Rooch, the user can move the Layer1 state into their own state space in Rooch."))}p.isMDXComponent=!0}}]);