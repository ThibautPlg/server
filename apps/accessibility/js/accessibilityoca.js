!function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="/js/",r(r.s=133)}([function(t,n,r){(function(n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n&&n)||function(){return this}()||Function("return this")()}).call(this,r(16))},function(t,n){var r=Function.prototype,e=r.bind,o=r.call,i=e&&e.bind(o);t.exports=e?function(t){return t&&i(o,t)}:function(t){return t&&function(){return o.apply(t,arguments)}}},function(t,n){t.exports=function(t){return"function"==typeof t}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,r){var e=r(2);t.exports=function(t){return"object"==typeof t?null!==t:e(t)}},function(t,n,r){var e=r(0),o=r(26),i=r(6),c=r(35),u=r(34),a=r(33),f=o("wks"),s=e.Symbol,p=s&&s.for,l=a?s:s&&s.withoutSetter||c;t.exports=function(t){if(!i(f,t)||!u&&"string"!=typeof f[t]){var n="Symbol."+t;u&&i(s,t)?f[t]=s[t]:f[t]=a&&p?p(n):l(n)}return f[t]}},function(t,n,r){var e=r(1),o=r(23),i=e({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,n){return i(o(t),n)}},,function(t,n,r){var e=r(3);t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,n){var r=Function.prototype.call;t.exports=r.bind?r.bind(r):function(){return r.apply(r,arguments)}},function(t,n,r){var e=r(0),o=r(2),i=function(t){return o(t)?t:void 0};t.exports=function(t,n){return arguments.length<2?i(e[t]):e[t]&&e[t][n]}},function(t,n,r){var e=r(0),o=r(4),i=e.String,c=e.TypeError;t.exports=function(t){if(o(t))return t;throw c(i(t)+" is not an object")}},function(t,n,r){var e=r(39),o=r(18);t.exports=function(t){return e(o(t))}},function(t,n,r){var e=r(1),o=e({}.toString),i=e("".slice);t.exports=function(t){return i(o(t),8,-1)}},function(t,n,r){var e=r(8),o=r(15),i=r(17);t.exports=e?function(t,n,r){return o.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n,r){var e=r(0),o=r(8),i=r(36),c=r(11),u=r(19),a=e.TypeError,f=Object.defineProperty;n.f=o?f:function(t,n,r){if(c(t),n=u(n),c(r),i)try{return f(t,n,r)}catch(t){}if("get"in r||"set"in r)throw a("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},function(t,n){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,r){var e=r(0).TypeError;t.exports=function(t){if(null==t)throw e("Can't call method on "+t);return t}},function(t,n,r){var e=r(54),o=r(32);t.exports=function(t){var n=e(t,"string");return o(n)?n:n+""}},function(t,n,r){var e,o,i=r(0),c=r(56),u=i.process,a=i.Deno,f=u&&u.versions||a&&a.version,s=f&&f.v8;s&&(o=(e=s.split("."))[0]>0&&e[0]<4?1:+(e[0]+e[1])),!o&&c&&(!(e=c.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=c.match(/Chrome\/(\d+)/))&&(o=+e[1]),t.exports=o},function(t,n,r){var e=r(0),o=r(22),i=e["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,n,r){var e=r(0),o=Object.defineProperty;t.exports=function(t,n){try{o(e,t,{value:n,configurable:!0,writable:!0})}catch(r){e[t]=n}return n}},function(t,n,r){var e=r(0),o=r(18),i=e.Object;t.exports=function(t){return i(o(t))}},function(t,n,r){var e=r(1),o=r(2),i=r(21),c=e(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return c(t)}),t.exports=i.inspectSource},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){var n=+t;return n!=n||0===n?0:(n>0?e:r)(n)}},function(t,n,r){var e=r(59),o=r(21);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.19.2",mode:e?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},function(t,n){t.exports={}},function(t,n,r){var e=r(47);t.exports=function(t){return e(t.length)}},function(t,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.loadState=function(t,n,r){var e=document.querySelector("#initial-state-".concat(t,"-").concat(n));if(null===e){if(void 0!==r)return r;throw new Error("Could not find initial state ".concat(n," of ").concat(t))}try{return JSON.parse(atob(e.value))}catch(r){throw new Error("Could not parse initial state ".concat(n," of ").concat(t))}},r(72)},function(t,n,r){var e=r(0),o=r(31).f,i=r(14),c=r(43),u=r(22),a=r(62),f=r(68);t.exports=function(t,n){var r,s,p,l,v,y=t.target,d=t.global,b=t.stat;if(r=d?e:b?e[y]||u(y,{}):(e[y]||{}).prototype)for(s in n){if(l=n[s],p=t.noTargetGet?(v=o(r,s))&&v.value:r[s],!f(d?s:y+(b?".":"#")+s,t.forced)&&void 0!==p){if(typeof l==typeof p)continue;a(l,p)}(t.sham||p&&p.sham)&&i(l,"sham",!0),c(r,s,l,t)}}},function(t,n,r){var e=r(8),o=r(9),i=r(53),c=r(17),u=r(12),a=r(19),f=r(6),s=r(36),p=Object.getOwnPropertyDescriptor;n.f=e?p:function(t,n){if(t=u(t),n=a(n),s)try{return p(t,n)}catch(t){}if(f(t,n))return c(!o(i.f,t,n),t[n])}},function(t,n,r){var e=r(0),o=r(10),i=r(2),c=r(55),u=r(33),a=e.Object;t.exports=u?function(t){return"symbol"==typeof t}:function(t){var n=o("Symbol");return i(n)&&c(n.prototype,a(t))}},function(t,n,r){var e=r(34);t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,n,r){var e=r(20),o=r(3);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&e&&e<41}))},function(t,n,r){var e=r(1),o=0,i=Math.random(),c=e(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+c(++o+i,36)}},function(t,n,r){var e=r(8),o=r(3),i=r(42);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n,r){var e=r(13);t.exports=Array.isArray||function(t){return"Array"==e(t)}},function(t,n,r){var e=r(0),o=r(1),i=r(3),c=r(13),u=e.Object,a=o("".split);t.exports=i((function(){return!u("z").propertyIsEnumerable(0)}))?function(t){return"String"==c(t)?a(t,""):u(t)}:u},function(t,n,r){var e=r(41);t.exports=function(t,n){var r=t[n];return null==r?void 0:e(r)}},function(t,n,r){var e=r(0),o=r(2),i=r(57),c=e.TypeError;t.exports=function(t){if(o(t))return t;throw c(i(t)+" is not a function")}},function(t,n,r){var e=r(0),o=r(4),i=e.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,n,r){var e=r(0),o=r(2),i=r(6),c=r(14),u=r(22),a=r(24),f=r(44),s=r(61).CONFIGURABLE,p=f.get,l=f.enforce,v=String(String).split("String");(t.exports=function(t,n,r,a){var f,p=!!a&&!!a.unsafe,y=!!a&&!!a.enumerable,d=!!a&&!!a.noTargetGet,b=a&&void 0!==a.name?a.name:n;o(r)&&("Symbol("===String(b).slice(0,7)&&(b="["+String(b).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!i(r,"name")||s&&r.name!==b)&&c(r,"name",b),(f=l(r)).source||(f.source=v.join("string"==typeof b?b:""))),t!==e?(p?!d&&t[n]&&(y=!0):delete t[n],y?t[n]=r:c(t,n,r)):y?t[n]=r:u(n,r)})(Function.prototype,"toString",(function(){return o(this)&&p(this).source||a(this)}))},function(t,n,r){var e,o,i,c=r(60),u=r(0),a=r(1),f=r(4),s=r(14),p=r(6),l=r(21),v=r(45),y=r(27),d=u.TypeError,b=u.WeakMap;if(c||l.state){var h=l.state||(l.state=new b),x=a(h.get),m=a(h.has),g=a(h.set);e=function(t,n){if(m(h,t))throw new d("Object already initialized");return n.facade=t,g(h,t,n),n},o=function(t){return x(h,t)||{}},i=function(t){return m(h,t)}}else{var O=v("state");y[O]=!0,e=function(t,n){if(p(t,O))throw new d("Object already initialized");return n.facade=t,s(t,O,n),n},o=function(t){return p(t,O)?t[O]:{}},i=function(t){return p(t,O)}}t.exports={set:e,get:o,has:i,enforce:function(t){return i(t)?o(t):e(t,{})},getterFor:function(t){return function(n){var r;if(!f(n)||(r=o(n)).type!==t)throw d("Incompatible receiver, "+t+" required");return r}}}},function(t,n,r){var e=r(26),o=r(35),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n,r){var e=r(1),o=r(6),i=r(12),c=r(65).indexOf,u=r(27),a=e([].push);t.exports=function(t,n){var r,e=i(t),f=0,s=[];for(r in e)!o(u,r)&&o(e,r)&&a(s,r);for(;n.length>f;)o(e,r=n[f++])&&(~c(s,r)||a(s,r));return s}},function(t,n,r){var e=r(25),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,n,r){var e=r(0),o=r(71),i=r(2),c=r(13),u=r(5)("toStringTag"),a=e.Object,f="Arguments"==c(function(){return arguments}());t.exports=o?c:function(t){var n,r,e;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(t){}}(n=a(t),u))?r:f?c(n):"Object"==(e=c(n))&&i(n.callee)?"Arguments":e}},function(t,n,r){var e=r(74);t.exports=function(t,n){return new(e(t))(0===n?0:n)}},,,,function(t,n,r){"use strict";var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!e.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:e},function(t,n,r){var e=r(0),o=r(9),i=r(4),c=r(32),u=r(40),a=r(58),f=r(5),s=e.TypeError,p=f("toPrimitive");t.exports=function(t,n){if(!i(t)||c(t))return t;var r,e=u(t,p);if(e){if(void 0===n&&(n="default"),r=o(e,t,n),!i(r)||c(r))return r;throw s("Can't convert object to primitive value")}return void 0===n&&(n="number"),a(t,n)}},function(t,n,r){var e=r(1);t.exports=e({}.isPrototypeOf)},function(t,n,r){var e=r(10);t.exports=e("navigator","userAgent")||""},function(t,n,r){var e=r(0).String;t.exports=function(t){try{return e(t)}catch(t){return"Object"}}},function(t,n,r){var e=r(0),o=r(9),i=r(2),c=r(4),u=e.TypeError;t.exports=function(t,n){var r,e;if("string"===n&&i(r=t.toString)&&!c(e=o(r,t)))return e;if(i(r=t.valueOf)&&!c(e=o(r,t)))return e;if("string"!==n&&i(r=t.toString)&&!c(e=o(r,t)))return e;throw u("Can't convert object to primitive value")}},function(t,n){t.exports=!1},function(t,n,r){var e=r(0),o=r(2),i=r(24),c=e.WeakMap;t.exports=o(c)&&/native code/.test(i(c))},function(t,n,r){var e=r(8),o=r(6),i=Function.prototype,c=e&&Object.getOwnPropertyDescriptor,u=o(i,"name"),a=u&&"something"===function(){}.name,f=u&&(!e||e&&c(i,"name").configurable);t.exports={EXISTS:u,PROPER:a,CONFIGURABLE:f}},function(t,n,r){var e=r(6),o=r(63),i=r(31),c=r(15);t.exports=function(t,n){for(var r=o(n),u=c.f,a=i.f,f=0;f<r.length;f++){var s=r[f];e(t,s)||u(t,s,a(n,s))}}},function(t,n,r){var e=r(10),o=r(1),i=r(64),c=r(67),u=r(11),a=o([].concat);t.exports=e("Reflect","ownKeys")||function(t){var n=i.f(u(t)),r=c.f;return r?a(n,r(t)):n}},function(t,n,r){var e=r(46),o=r(37).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},function(t,n,r){var e=r(12),o=r(66),i=r(28),c=function(t){return function(n,r,c){var u,a=e(n),f=i(a),s=o(c,f);if(t&&r!=r){for(;f>s;)if((u=a[s++])!=u)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===r)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,n,r){var e=r(25),o=Math.max,i=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):i(r,n)}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,r){var e=r(3),o=r(2),i=/#|\.prototype\./,c=function(t,n){var r=a[u(t)];return r==s||r!=f&&(o(n)?e(n):!!n)},u=c.normalize=function(t){return String(t).replace(i,".").toLowerCase()},a=c.data={},f=c.NATIVE="N",s=c.POLYFILL="P";t.exports=c},,,function(t,n,r){var e={};e[r(5)("toStringTag")]="z",t.exports="[object z]"===String(e)},function(t,n,r){"use strict";var e=r(30),o=r(0),i=r(3),c=r(38),u=r(4),a=r(23),f=r(28),s=r(73),p=r(49),l=r(76),v=r(5),y=r(20),d=v("isConcatSpreadable"),b=o.TypeError,h=y>=51||!i((function(){var t=[];return t[d]=!1,t.concat()[0]!==t})),x=l("concat"),m=function(t){if(!u(t))return!1;var n=t[d];return void 0!==n?!!n:c(t)};e({target:"Array",proto:!0,forced:!h||!x},{concat:function(t){var n,r,e,o,i,c=a(this),u=p(c,0),l=0;for(n=-1,e=arguments.length;n<e;n++)if(m(i=-1===n?c:arguments[n])){if(l+(o=f(i))>9007199254740991)throw b("Maximum allowed index exceeded");for(r=0;r<o;r++,l++)r in i&&s(u,l,i[r])}else{if(l>=9007199254740991)throw b("Maximum allowed index exceeded");s(u,l++,i)}return u.length=l,u}})},function(t,n,r){"use strict";var e=r(19),o=r(15),i=r(17);t.exports=function(t,n,r){var c=e(n);c in t?o.f(t,c,i(0,r)):t[c]=r}},function(t,n,r){var e=r(0),o=r(38),i=r(75),c=r(4),u=r(5)("species"),a=e.Array;t.exports=function(t){var n;return o(t)&&(n=t.constructor,(i(n)&&(n===a||o(n.prototype))||c(n)&&null===(n=n[u]))&&(n=void 0)),void 0===n?a:n}},function(t,n,r){var e=r(1),o=r(3),i=r(2),c=r(48),u=r(10),a=r(24),f=function(){},s=[],p=u("Reflect","construct"),l=/^\s*(?:class|function)\b/,v=e(l.exec),y=!l.exec(f),d=function(t){if(!i(t))return!1;try{return p(f,s,t),!0}catch(t){return!1}};t.exports=!p||o((function(){var t;return d(d.call)||!d(Object)||!d((function(){t=!0}))||t}))?function(t){if(!i(t))return!1;switch(c(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return y||!!v(l,a(t))}:d},function(t,n,r){var e=r(3),o=r(5),i=r(20),c=o("species");t.exports=function(t){return i>=51||!e((function(){var n=[];return(n.constructor={})[c]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,r){"use strict";r.r(n);var e=r(29);
/**
 * @copyright Copyright (c) 2020 Roeland Jago Douma <roeland@famdouma.nl>
 *
 * @author Jan C. Borchardt <hey@jancborchardt.net>
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
OCA.Accessibility=Object(e.loadState)("accessibility","data"),OCA.Accessibility.checkMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(OCA.Accessibility.theme="dark"),!1!==OCA.Accessibility.theme?document.body.classList.add("theme--".concat(OCA.Accessibility.theme)):document.body.classList.add("theme--light"),!1!==OCA.Accessibility.highcontrast&&document.body.classList.add("theme--highcontrast")}]);
//# sourceMappingURL=accessibilityoca.js.map