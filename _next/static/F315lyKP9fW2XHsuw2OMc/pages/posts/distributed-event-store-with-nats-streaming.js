(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n("q1tI"),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"===typeof e?e(t):c(c({},t),e)),n},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=l(n),m=r,b=s["".concat(i,".").concat(m)]||s[m]||f[m]||a;return n?o.a.createElement(b,c(c({ref:t},p),{},{components:n})):o.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[s]="string"===typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},XUrQ:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/distributed-event-store-with-nats-streaming",function(){return n("wJpV")}])},wJpV:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return p})),n.d(t,"default",(function(){return f}));var r=n("wx14"),o=n("Ff2n"),a=n("q1tI"),i=n.n(a),c=n("7ljp"),u=n("YkiI"),p=(n("tbOq"),i.a.createElement,{title:"Distributed Event Store with NATS-Streaming",date:"2020-01-12",description:""}),l={meta:p},s=function(e){var t=e.children;return Object(c.a)(u.a,{meta:p},t)};function f(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.a)(s,Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.a)("p",null,"This is my first post on medium. I\u2019m going to talk about my hands-on experience while implementing a distributed event store. The goal was to implement event sourcing from scratch and offloading reliable message delivery to NATS."),Object(c.a)("p",null,Object(c.a)("a",Object(r.a)({parentName:"p"},{href:"https://medium.com/@deusdustin/distributed-event-store-with-nats-streaming-43981cb19fe0"}),"Medium Post")))}f.isMDXComponent=!0}},[["XUrQ",0,2,1,3,4]]]);