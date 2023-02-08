"use strict";(self.webpackChunkrooch_network=self.webpackChunkrooch_network||[]).push([[258],{4137:(e,t,r)=>{r.d(t,{Zo:()=>h,kt:()=>p});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),s=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},h=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),m=s(r),p=n,d=m["".concat(c,".").concat(p)]||m[p]||u[p]||a;return r?o.createElement(d,i(i({ref:t},h),{},{components:r})):o.createElement(d,i({ref:t},h))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8670:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=r(3117),n=(r(7294),r(4137));const a={},i="Multi-chain Settlement protocol",l={unversionedId:"technology/modular-blockchain-architecture/multi-chain-settlement-protocol",id:"technology/modular-blockchain-architecture/multi-chain-settlement-protocol",title:"Multi-chain Settlement protocol",description:"Multi-chain settlement is the most important feature of Rooch, and this chapter details the protocols and challenges to be solved for multi-chain settlement.",source:"@site/docs/04-technology/01-modular-blockchain-architecture/01-multi-chain-settlement-protocol.md",sourceDirName:"04-technology/01-modular-blockchain-architecture",slug:"/technology/modular-blockchain-architecture/multi-chain-settlement-protocol",permalink:"/docs/technology/modular-blockchain-architecture/multi-chain-settlement-protocol",draft:!1,editUrl:"https://github.com/rooch-network/rooch-network.github.io/edit/main/docs/04-technology/01-modular-blockchain-architecture/01-multi-chain-settlement-protocol.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Modular Architecture",permalink:"/docs/technology/modular-blockchain-architecture/"},next:{title:"Fraud Proofs",permalink:"/docs/technology/fraud-proofs"}},c={},s=[{value:"Responsibilities of the settlement layer",id:"responsibilities-of-the-settlement-layer",level:2},{value:"Communication protocols between multiple settlement layers and the arbitration layer",id:"communication-protocols-between-multiple-settlement-layers-and-the-arbitration-layer",level:2},{value:"The difference between multi-chain settlement and cross-chain",id:"the-difference-between-multi-chain-settlement-and-cross-chain",level:2}],h={toc:s};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"multi-chain-settlement-protocol"},"Multi-chain Settlement protocol"),(0,n.kt)("p",null,"Multi-chain settlement is the most important feature of Rooch, and this chapter details the protocols and challenges to be solved for multi-chain settlement. "),(0,n.kt)("h2",{id:"responsibilities-of-the-settlement-layer"},"Responsibilities of the settlement layer"),(0,n.kt)("p",null,"In ",(0,n.kt)("a",{parentName:"p",href:"/docs/technology/modular-blockchain-architecture/"},"Modular Blockchain Architecture"),", we specify that the responsibility of the settlement layer is to perform state migration and asset settlement between Layer1 and the execution layer."),(0,n.kt)("p",null,"Rooch deploys a settlement smart contract each settlement Layer1, which maintains an off-chain state tree, with only the root of the state tree recorded on the chain, through which users migrate state between Layer1 and Rooch. For the specific migration protocol, refer to: ",(0,n.kt)("a",{parentName:"p",href:"/docs/technology/state-scaling"},"state scaling"),". "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"When a user migrates state from Layer1 to Rooch, the state appears in the state tree of Rooch after the transactions in Layer1 are finalized."),(0,n.kt)("li",{parentName:"ol"},"When a user migrates state from Rooch to Layer1, the state is first locked and waits for the challenge period to pass before being moved out of the state tree for settlement."),(0,n.kt)("li",{parentName:"ol"},"When the settlement layer receives a notification from the arbitration layer that fraud has occurred, it rolls back the root of the off-chain state tree to before the fraud occurred, discarding any state tree changes made during that period.")),(0,n.kt)("h2",{id:"communication-protocols-between-multiple-settlement-layers-and-the-arbitration-layer"},"Communication protocols between multiple settlement layers and the arbitration layer"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"multi chain settlement",src:r(2081).Z,width:"721",height:"237"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"TODO this chapter needs to be improved")),(0,n.kt)("h2",{id:"the-difference-between-multi-chain-settlement-and-cross-chain"},"The difference between multi-chain settlement and cross-chain"),(0,n.kt)("p",null,"If a single-chain Layer2 is connected to multiple Layer1 by cross-chain, what is the difference between it and multi-chain settlement?"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Multi-chain settlement is more secure. The security of the cross-layer bridge in a multi-chain settlement solution is protected by the arbitration layer, and the execution layer inherit the security of the arbitration layer."),(0,n.kt)("li",{parentName:"ol"},"More generic cross-layer solution. In Rooch's multi-chain settlement solution, cross-layer is achieved through a generic state migration pattern where states can be used to represent Token, NFT, digital contracts, and other future application states, without the need to design specialized protocols for new state types.")))}u.isMDXComponent=!0},2081:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/rooch-multi-chain-settlement-2bcfe2fb4f4b28b0e9a73e1890767ee6.svg"}}]);