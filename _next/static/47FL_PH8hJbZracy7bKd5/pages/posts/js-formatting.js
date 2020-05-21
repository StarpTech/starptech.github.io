(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"3ipr":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/js-formatting",function(){return a("RbEC")}])},"7ljp":function(e,t,a){"use strict";a.d(t,"a",(function(){return O}));var n=a("q1tI"),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),l=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"===typeof e?e(t):s(s({},t),e)),a},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),u=l(a),m=n,O=u["".concat(o,".").concat(m)]||u[m]||b[m]||c;return a?r.a.createElement(O,s(s({ref:t},i),{},{components:a})):r.a.createElement(O,s({ref:t},i))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"===typeof e||n){var c=a.length,o=new Array(c);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"===typeof e?e:n,o[1]=s;for(var i=2;i<c;i++)o[i]=a[i];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},RbEC:function(e,t,a){"use strict";a.r(t),a.d(t,"meta",(function(){return i})),a.d(t,"default",(function(){return b}));var n=a("wx14"),r=a("Ff2n"),c=a("q1tI"),o=a.n(c),s=a("7ljp"),p=a("YkiI"),i=(a("tbOq"),o.a.createElement,{title:"Standard formatting in Javascript",date:"2017-06-03",description:""}),l={meta:i},u=function(e){var t=e.children;return Object(s.a)(p.a,{meta:i},t)};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(s.a)(u,Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(s.a)("p",null,"Formatting in Javascript must not be pain.\nYou don't have to use any linting configurations files. ",Object(s.a)("strong",{parentName:"p"},"No")," ",Object(s.a)("del",{parentName:"p"},".eslintrc"),", ",Object(s.a)("del",{parentName:"p"},".jshintrc"),", or ",Object(s.a)("del",{parentName:"p"},".jscsrc")," files to manage. Beside linting it also warns you about programmer errors early e.g unused variables, unhandled errors and more. Give StandardJs a try!"),Object(s.a)("h2",null,"Installation"),Object(s.a)("pre",{className:"language-bash"},Object(s.a)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),Object(s.a)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"npm")," ",Object(s.a)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"install")," standard --save-dev\n")),Object(s.a)("h2",null,"Editor support"),Object(s.a)("ul",null,Object(s.a)("li",{parentName:"ul"},"vscode-standardjs"),Object(s.a)("li",{parentName:"ul"},"vscode-standardjs-snippets")),Object(s.a)("p",null,Object(s.a)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/feross/standard#are-there-text-editor-plugins"}),"Other editors")),Object(s.a)("h2",null,"Using"),Object(s.a)("ul",null,Object(s.a)("li",{parentName:"ul"},"Format your code with ",Object(s.a)("inlineCode",{parentName:"li"},"standard")),Object(s.a)("li",{parentName:"ul"},"Fix code with ",Object(s.a)("inlineCode",{parentName:"li"},"standard -fix"))),Object(s.a)("h2",null,"Examples"),Object(s.a)("p",null,"Simple integration in your build scripts."),Object(s.a)("pre",{className:"language-js"},Object(s.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),Object(s.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(s.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"scripts"'),Object(s.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," ",Object(s.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",Object(s.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"test"'),Object(s.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," ",Object(s.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"standard && nyc mocha"'),"\n  ",Object(s.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n",Object(s.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n")),Object(s.a)("h2",null,"References"),Object(s.a)("ul",null,Object(s.a)("li",{parentName:"ul"},Object(s.a)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/feross/standard"}),"https://github.com/feross/standard")),Object(s.a)("li",{parentName:"ul"},Object(s.a)("a",Object(n.a)({parentName:"li"},{href:"https://standardjs.com/"}),"https://standardjs.com/"))))}b.isMDXComponent=!0}},[["3ipr",0,2,1,3,4]]]);