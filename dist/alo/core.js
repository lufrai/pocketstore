/*!
 * alo
 * Copyright(c) 2019 Katja Lutz
 * MIT Licensed
 * https://opensource.org/licenses/MIT
*/
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.alo=e():t.alo=e()}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},function(t,e,n){"use strict";n.d(e,"b",function(){return u}),n.d(e,"d",function(){return s}),n.d(e,"e",function(){return l}),n.d(e,"c",function(){return d}),n.d(e,"f",function(){return b}),n.d(e,"a",function(){return v});var r=0,o={},a={},i={},c=function t(e,n){if(a[n]=e,i[n]){var r=!0,o=!1,c=void 0;try{for(var u,s=i[n][Symbol.iterator]();!(r=(u=s.next()).done);r=!0){t(e,u.value)}}catch(t){o=!0,c=t}finally{try{r||null==s.return||s.return()}finally{if(o)throw c}}}},u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.name,n=void 0===e?"":e,o=t.children,a=t.entityContainer,i=void 0!==a&&a,c="".concat(r++,"-").concat(n);return o&&s(c,o,i),c},s=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];i[t]=e;var r=!0,a=!1,u=void 0;try{for(var s,f=e[Symbol.iterator]();!(r=(s=f.next()).done);r=!0){var l=s.value;o[l]=t,n&&c(t,l)}}catch(t){a=!0,u=t}finally{try{r||null==f.return||f.return()}finally{if(a)throw u}}},f=function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=a[e];if(o){if(r){var i=t.containers[o]=t.containers[o]||{};return i[n]=i[n]||{}}var c=t.containers[o];if(c)return c[n]}},l=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,r=void 0!==t.type?t.event:t;if(r.tagsSet=!0,r.tags[e+"*"]=!0,null!=n){var o=f(r,e,n,!0);o&&(o[e+"*"]=!0)}},d=function t(e,n,r,a){var i=void 0!==e.type?e.event:e;i.tagsSet=!0,i.tags[n]=i.tags[n]||!0,null!=r&&(a=a||f(i,n,r,!0))&&(a[n]=!0);var c=o[n];c&&!i.tags[c]&&t(i,c,r)},b=function(t,e,n){var r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a=void 0!==t.type?t.event:t;if(r&&a.tags["*"])return!0;var i,c=a.tags[e];null!=n&&(c=!!(i=f(a,e,n))&&i[e]);var u=!c&&r&&function(t,e,n){for(;;){if(!(e=o[e]))return!1;if(n&&n[e+"*"])return!0;if(t.tags[e+"*"])return!0}}(a,e,i);return!(!c&&!u)},v=function(){return{tagsSet:!1,tags:{},containers:{}}}},function(t,e,n){"use strict";n.r(e);var r=n(13);n.d(e,"actionTypes",function(){return r.b}),n.d(e,"Store",function(){return r.a});var o=n(24);for(var a in o)["combineMutators","typeMutator","once","findInArray","actionTypes","Store","default"].indexOf(a)<0&&function(t){n.d(e,t,function(){return o[t]})}(a);var i=n(16);n.d(e,"isAction",function(){return i.b}),n.d(e,"cloneAction",function(){return i.a});var c=n(25);for(var a in c)["combineMutators","typeMutator","once","findInArray","actionTypes","Store","isAction","cloneAction","default"].indexOf(a)<0&&function(t){n.d(e,t,function(){return c[t]})}(a);var u=n(3);n.d(e,"createTag",function(){return u.b}),n.d(e,"setTagChildren",function(){return u.d}),n.d(e,"setWildCard",function(){return u.e}),n.d(e,"setTag",function(){return u.c}),n.d(e,"tagIsSet",function(){return u.f}),n.d(e,"createEvent",function(){return u.a});var s=n(26);for(var a in s)["combineMutators","typeMutator","once","findInArray","actionTypes","Store","isAction","cloneAction","createTag","setTagChildren","setWildCard","setTag","tagIsSet","createEvent","default"].indexOf(a)<0&&function(t){n.d(e,t,function(){return s[t]})}(a);var f=n(11);n.d(e,"combineMutators",function(){return f.a}),n.d(e,"typeMutator",function(){return f.b});var l=n(27);n.d(e,"createPrimitiveSelector",function(){return l.b}),n.d(e,"createSelector",function(){return l.c}),n.d(e,"combineSelectorResults",function(){return l.a});var d=n(28);n.d(e,"setUndoData",function(){return d.e}),n.d(e,"getUndoData",function(){return d.d}),n.d(e,"createUndoThunk",function(){return d.b}),n.d(e,"createRedoThunk",function(){return d.a}),n.d(e,"createUndoableMutator",function(){return d.c});var b=n(29);for(var a in b)["combineMutators","typeMutator","once","findInArray","actionTypes","Store","isAction","cloneAction","createTag","setTagChildren","setWildCard","setTag","tagIsSet","createEvent","createPrimitiveSelector","createSelector","combineSelectorResults","setUndoData","getUndoData","createUndoThunk","createRedoThunk","createUndoableMutator","default"].indexOf(a)<0&&function(t){n.d(e,t,function(){return b[t]})}(a);var v=n(20);n.d(e,"Subscribable",function(){return v.a});var h=n(30);for(var a in h)["combineMutators","typeMutator","once","findInArray","actionTypes","Store","isAction","cloneAction","createTag","setTagChildren","setWildCard","setTag","tagIsSet","createEvent","createPrimitiveSelector","createSelector","combineSelectorResults","setUndoData","getUndoData","createUndoThunk","createRedoThunk","createUndoableMutator","Subscribable","default"].indexOf(a)<0&&function(t){n.d(e,t,function(){return h[t]})}(a);var p=n(12);n.d(e,"observe",function(){return p.h}),n.d(e,"set",function(){return p.i}),n.d(e,"observable",function(){return p.g}),n.d(e,"notify",function(){return p.f}),n.d(e,"batch",function(){return p.a}),n.d(e,"batchStart",function(){return p.d}),n.d(e,"batchPause",function(){return p.c}),n.d(e,"batchEnd",function(){return p.b}),n.d(e,"getOriginObject",function(){return p.e});var y=n(31);for(var a in y)["combineMutators","typeMutator","once","findInArray","actionTypes","Store","isAction","cloneAction","createTag","setTagChildren","setWildCard","setTag","tagIsSet","createEvent","createPrimitiveSelector","createSelector","combineSelectorResults","setUndoData","getUndoData","createUndoThunk","createRedoThunk","createUndoableMutator","Subscribable","observe","set","observable","notify","batch","batchStart","batchPause","batchEnd","getOriginObject","default"].indexOf(a)<0&&function(t){n.d(e,t,function(){return y[t]})}(a);var m=n(6);n.d(e,"ActionNormalizer",function(){return m.b}),n.d(e,"AbstractActionNormalizerDecorator",function(){return m.a});var g=n(32);for(var a in g)["combineMutators","typeMutator","once","findInArray","actionTypes","Store","isAction","cloneAction","createTag","setTagChildren","setWildCard","setTag","tagIsSet","createEvent","createPrimitiveSelector","createSelector","combineSelectorResults","setUndoData","getUndoData","createUndoThunk","createRedoThunk","createUndoableMutator","Subscribable","observe","set","observable","notify","batch","batchStart","batchPause","batchEnd","getOriginObject","ActionNormalizer","AbstractActionNormalizerDecorator","default"].indexOf(a)<0&&function(t){n.d(e,t,function(){return g[t]})}(a);var _=n(33);n.d(e,"BatchActionNormalizerDecorator",function(){return _.a});var O=n(34);n.d(e,"DateActionNormalizerDecorator",function(){return O.a});var S=n(35);n.d(e,"UndoableActionNormalizerDecorator",function(){return S.a});var I=n(18);n.d(e,"ActionResolver",function(){return I.b}),n.d(e,"AbstractActionResolverDecorator",function(){return I.a});var A=n(36);for(var a in A)["combineMutators","typeMutator","once","findInArray","actionTypes","Store","isAction","cloneAction","createTag","setTagChildren","setWildCard","setTag","tagIsSet","createEvent","createPrimitiveSelector","createSelector","combineSelectorResults","setUndoData","getUndoData","createUndoThunk","createRedoThunk","createUndoableMutator","Subscribable","observe","set","observable","notify","batch","batchStart","batchPause","batchEnd","getOriginObject","ActionNormalizer","AbstractActionNormalizerDecorator","BatchActionNormalizerDecorator","DateActionNormalizerDecorator","UndoableActionNormalizerDecorator","ActionResolver","AbstractActionResolverDecorator","default"].indexOf(a)<0&&function(t){n.d(e,t,function(){return A[t]})}(a);var T=n(37);n.d(e,"BatchActionResolverDecorator",function(){return T.a});var j=n(38);n.d(e,"BATCH_ACTION_TYPE",function(){return j.a}),n.d(e,"dispatchBatch",function(){return j.b});var B=n(39);n.d(e,"typeThunk",function(){return B.b}),n.d(e,"dispatchThunk",function(){return B.a});var x=n(40);n.d(e,"dispatchPromise",function(){return x.a});var D=n(41);n.d(e,"dispatchActions",function(){return D.a});var N=n(42);for(var a in N)["combineMutators","typeMutator","once","findInArray","actionTypes","Store","isAction","cloneAction","createTag","setTagChildren","setWildCard","setTag","tagIsSet","createEvent","createPrimitiveSelector","createSelector","combineSelectorResults","setUndoData","getUndoData","createUndoThunk","createRedoThunk","createUndoableMutator","Subscribable","observe","set","observable","notify","batch","batchStart","batchPause","batchEnd","getOriginObject","ActionNormalizer","AbstractActionNormalizerDecorator","BatchActionNormalizerDecorator","DateActionNormalizerDecorator","UndoableActionNormalizerDecorator","ActionResolver","AbstractActionResolverDecorator","BatchActionResolverDecorator","BATCH_ACTION_TYPE","dispatchBatch","typeThunk","dispatchThunk","dispatchPromise","dispatchActions","default"].indexOf(a)<0&&function(t){n.d(e,t,function(){return N[t]})}(a);var k=n(5);n.d(e,"once",function(){return k.d}),n.d(e,"findInArray",function(){return k.b})},function(t,e,n){"use strict";n.d(e,"c",function(){return a}),n.d(e,"d",function(){return i}),n.d(e,"b",function(){return c}),n.d(e,"a",function(){return u});var r=n(43),o=n.n(r),a=function(t){return t&&void 0!==t.then},i=function(t){var e,n=!1;return function(){return n||(e=t(),n=!0),e}},c=function(t,e){var n=0,r=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done);r=!0){var u=e(i.value,n,t);if(u)return u;n++}}catch(t){o=!0,a=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}},u=function(t){return o()(t)}},function(t,e,n){"use strict";n.d(e,"b",function(){return s}),n.d(e,"a",function(){return f});var r=n(0),o=n.n(r),a=n(1),i=n.n(a),c=n(2),u=n.n(c),s=function(){function t(){i()(this,t)}return u()(t,[{key:"normalize",value:function(t){var e=t.action,n=t.callBack;return e.meta.undo||e.meta.redo||(e.meta.do=!0),n(e)}}]),t}(),f=function(){function t(e){var n=e.actionNormalizer;i()(this,t),o()(this,"_actionNormalizer",void 0),this._actionNormalizer=n}return u()(t,[{key:"normalize",value:function(t){return this._actionNormalizer.normalize(t)}}]),t}()},function(t,e,n){var r=n(0);t.exports=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){r(t,e,n[e])})}return t}},function(t,e,n){var r=n(57),o=n(19);t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?o(t):e}},function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},function(t,e,n){var r=n(58);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},function(t,e,n){"use strict";n.d(e,"b",function(){return a}),n.d(e,"a",function(){return i});var r=n(17),o=n.n(r),a=function(t){return t},i=function(t){var e=Object.entries(t);return function(t){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r={},a=0,i=e;a<i.length;a++){var c=o()(i[a],2),u=c[0],s=c[1];r[u]=s(t,n[u])}return r}}},function(t,e,n){"use strict";n.d(e,"h",function(){return S}),n.d(e,"i",function(){return I}),n.d(e,"g",function(){return A}),n.d(e,"f",function(){return j}),n.d(e,"a",function(){return N}),n.d(e,"d",function(){return k}),n.d(e,"c",function(){return w}),n.d(e,"b",function(){return C}),n.d(e,"e",function(){return P});var r,o=n(17),a=n.n(o),i=n(21),c=n.n(i),u=n(14),s=n.n(u),f=n(22),l=n.n(f),d=(r=0,function(){return"@observer".concat(r+=1)}),b=function(){var t=0;return function(){return"@observable".concat(t+=1)}}(),v={},h={},p=[];function y(t){return l()(t)&&null!=t.__observableId}var m=!1,g=function(){m||(m=!0,p.pop())};function _(t){m=!1,p.push(t),v[t].fn(g),m||p.pop(),m=!1}function O(t,e,n,r){t[n]!==r&&(t[n]=r,T(e))}function S(t){var e=d();return v[e]={fn:t,targetObserverIdSets:[]},_(e),function(){v[e].targetObserverIdSets.forEach(function(t){delete t[e]})}}var I=function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=(Object.getOwnPropertyDescriptor(t,e)||{}).get,i=h[t.__observableId],u=i.storage,f=i.propObserverIdSetMap[e]={};if(r)if(s()(n))n=A(n);else if(c()(n))for(var l=0,d=Object.entries(n);l<d.length;l++){var b=a()(d[l],2),y=b[0],m=b[1];s()(m)&&(n[y]=A(m))}if(void 0!==u[e])return console.log("already existing"),void O(u,f,e,n);Object.defineProperty(t,e,{configurable:!0,enumerable:!0,get:function(){var t=p[p.length-1];return t&&!f[t]&&(f[t]=!0,v[t].targetObserverIdSets.push(f)),u[e]}}),"function"==typeof o?S(function(){var n=o.call(t);O(u,f,e,n)}):(u[e]=n,Object.defineProperty(t,e,{set:function(t){O(u,f,e,t)}}))};function A(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(y(t))return t;if(Array.isArray(t))throw new Error("Array object cannot be Reactive");var n=b(),r={};h[n]={storage:{},propObserverIdSetMap:{}},Object.defineProperty(r,"__observableId",{value:n});for(var o=0,i=Object.entries(t);o<i.length;o++){var c=a()(i[o],2),u=c[0],s=c[1];I(r,u,s,e)}return r}var T=function(t){var e,n=!0;null!=B&&(e=x[B]).count>0&&(n=!1);for(var r=0,o=Object.keys(t);r<o.length;r++){var a=o[r];if(n)_(a);else{if(e.observerIds.indexOf(a)>=0)continue;e.observerIds.push(a)}}};function j(t,e){if(y(t)){var n=h[t.__observableId].propObserverIdSetMap[e];T(n)}}var B,x={},D=0,N=function(t){var e=null!=B?k(B):k();t(),C(e)},k=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D++;return B=t,null==x[t]&&(x[t]={count:0,observerIds:[]}),x[t].count++,t},w=function(){B=void 0},C=function(t){var e=x[t];if(e.count--,0===e.count){var n=!0,r=!1,o=void 0;try{for(var a,i=e.observerIds[Symbol.iterator]();!(n=(a=i.next()).done);n=!0){_(a.value)}}catch(t){r=!0,o=t}finally{try{n||null==i.return||i.return()}finally{if(r)throw o}}delete x[t],B=void 0}};function P(t){for(var e={},n=h[t.__observableId].storage,r=0,o=Object.keys(n);r<o.length;r++){var a=o[r],i=n[a];e[a]=y(i)?P(i):i}return e}},function(t,e,n){"use strict";n.d(e,"b",function(){return m}),n.d(e,"a",function(){return g});var r=n(1),o=n.n(r),a=n(2),i=n.n(a),c=n(0),u=n.n(c),s=n(14),f=n.n(s),l=n(6),d=n(18),b=n(16),v=n(3),h=n(20),p=n(5),y=n(12),m={INIT:"@@init"},g=function(){function t(e){var n=this,r=e.mutator,a=e.state,i=e.actionNormalizer,c=void 0===i?new l.b:i,s=e.actionResolver,f=void 0===s?new d.b:s,v=e.subscribable,g=void 0===v?new h.a:v,_=e.cloneDeep,O=void 0===_?p.a:_,S=e.pureByDefault,I=void 0!==S&&S;o()(this,t),u()(this,"_isMutating",void 0),u()(this,"_observable",Object(y.g)({state:null})),u()(this,"_action",void 0),u()(this,"_mutator",void 0),u()(this,"_actionNormalizer",void 0),u()(this,"_actionResolver",void 0),u()(this,"_subscribable",void 0),u()(this,"_cloneDeep",void 0),u()(this,"_pureByDefault",void 0),u()(this,"getState",function(){return n._observable.state}),u()(this,"dispatch",function(t){if(Object(b.b)(t))return t.meta||(t.meta={}),t.meta.tmp||(t.meta.tmp={}),n._actionNormalizer.normalize({action:t,callBack:n._afterDispatchNormalization,store:n});t&&console.error("Invalid action dispatched",t)}),u()(this,"_callSubscribers",function(){n._subscribable.callSubscribers(n)}),u()(this,"_afterDispatchNormalization",function(t){return n._actionResolver.resolve({action:t,store:n,setAction:n._setAction,callSubscribers:n._callSubscribers,applyMutator:n._applyMutator})}),u()(this,"_applyMutator",function(t){var e=null!=t.meta.pure?t.meta.pure:n._pureByDefault,r=t.payload;if(null==t.payload||e||(t.payload=n._cloneDeep(r)),n._isMutating)throw new Error("Mutations already in progress");n._isMutating=!0,Object(y.a)(function(){n._applyMutatorBatch(t)}),n._isMutating=!1,t.payload=r}),u()(this,"_setAction",function(t){n._action=t}),this._actionResolver=f,this._actionNormalizer=c,this._subscribable=g,this._cloneDeep=O,this._pureByDefault=I,this._isMutating=!1,this._mutator=r,this.dispatch({type:m.INIT,meta:{impure:!0},payload:a})}return i()(t,[{key:"getAction",value:function(){return this._action}},{key:"subscribe",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this._subscribable.subscribe(t,e)}},{key:"getActionNormalizer",value:function(){return this._actionNormalizer}},{key:"setActionNormalizer",value:function(t){this._actionNormalizer=t}},{key:"getActionResolver",value:function(){return this._actionResolver}},{key:"setActionResolver",value:function(t){this._actionResolver=t}},{key:"getSubscribable",value:function(){return this._subscribable}},{key:"setSubscribable",value:function(t){this._subscribable=t}},{key:"observe",value:function(t){var e=this;return Object(y.h)(function(n){t(e,n)})}},{key:"_applyMutatorBatch",value:function(t){t.type===m.INIT&&(this._observable.state=f()(t.payload)?Object(y.g)(t.payload):t.payload,Object(v.e)(t.event));try{var e=this._mutator(t,this._observable.state);f()(e)&&(e=Object(y.g)(e)),this._observable.state=e}catch(t){console.error(t)}}}]),t}()},function(t,e,n){var r=n(45),o=n(51),a=n(22),i="[object Object]",c=Function.prototype,u=Object.prototype,s=c.toString,f=u.hasOwnProperty,l=s.call(Object);t.exports=function(t){if(!a(t)||r(t)!=i)return!1;var e=o(t);if(null===e)return!0;var n=f.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&s.call(n)==l}},,function(t,e,n){"use strict";n.d(e,"b",function(){return a}),n.d(e,"a",function(){return i});var r=n(7),o=n.n(r),a=function(t){return t&&void 0!==t.type},i=function(t){return o()({},t,{event:void 0,meta:o()({},t.meta,{tmp:{}})})}},function(t,e,n){var r=n(54),o=n(55),a=n(56);t.exports=function(t,e){return r(t)||o(t,e)||a()}},function(t,e,n){"use strict";n.d(e,"b",function(){return f}),n.d(e,"a",function(){return l});var r=n(1),o=n.n(r),a=n(2),i=n.n(a),c=n(0),u=n.n(c),s=n(3),f=function(){function t(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).callSubscribersLazy,n=void 0!==e&&e;o()(this,t),u()(this,"callSubscribersLazy",void 0),this.callSubscribersLazy=n}return i()(t,[{key:"resolve",value:function(t){var e=t.action,n=t.callSubscribers,r=t.applyMutator,o=t.setAction;return e.event=Object(s.a)(),r(e),o(e),this.callSubscribersLazy&&!e.event.tagsSet||n(),e}}]),t}(),l=function(){function t(e){var n=e.actionResolver;o()(this,t),u()(this,"_actionResolver",void 0),this._actionResolver=n}return i()(t,[{key:"resolve",value:function(t){return this._actionResolver.resolve(t)}}]),t}()},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,e,n){"use strict";n.d(e,"a",function(){return s});var r=n(1),o=n.n(r),a=n(2),i=n.n(a),c=n(0),u=n.n(c),s=function(){function t(){o()(this,t),u()(this,"_currentListeners",void 0),u()(this,"_nextListeners",void 0),u()(this,"_lastListenerOptions",void 0),u()(this,"_subscribersCalled",!1),this._currentListeners=[],this._nextListeners=this._currentListeners}return i()(t,[{key:"_separateNextListeners",value:function(){this._currentListeners===this._nextListeners&&(this._nextListeners=this._currentListeners.slice())}},{key:"subscribe",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this._separateNextListeners();var n=!0;return this._nextListeners.push(t),e&&this._subscribersCalled&&t(this._lastListenerOptions),function(){if(n){n=!1,this._separateNextListeners();var e=this._nextListeners.indexOf(t);this._nextListeners.splice(e,1)}}}},{key:"callSubscribers",value:function(t){this._subscribersCalled=!0,this._lastListenerOptions=t,this._currentListeners=this._nextListeners;var e=!0,n=!1,r=void 0;try{for(var o,a=this._currentListeners[Symbol.iterator]();!(e=(o=a.next()).done);e=!0){(0,o.value)(t)}}catch(t){n=!0,r=t}finally{try{e||null==a.return||a.return()}finally{if(n)throw r}}}}]),t}()},function(t,e){var n=Array.isArray;t.exports=n},function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},function(t,e,n){var r=n(46).Symbol;t.exports=r},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){"use strict";n.d(e,"b",function(){return o}),n.d(e,"c",function(){return a}),n.d(e,"a",function(){return i});var r=function(t,e,n){return e===n},o=function(t){return a(t,{equalityCheck:r})},a=function(t,e){var n,r=e.selectCheck,o=e.equalityCheck,a=!0;return function(e){var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],c=a||i||!r||r(e,n);if(a=!1,!c)return{changed:!1,value:n};var u=t(e,n),s=!0;return o&&(s=!o(e,n,u)),{changed:s,value:n=u}}},i=function(t){var e=!1,n=Object.keys(t).reduce(function(n,r){var o=t[r];return n[r]=o.value,o.changed&&(e=!0),n},{});return{changed:e,value:n}}},function(t,e,n){"use strict";n.d(e,"e",function(){return s}),n.d(e,"d",function(){return f}),n.d(e,"b",function(){return d}),n.d(e,"a",function(){return b}),n.d(e,"c",function(){return v});var r=n(7),o=n.n(r),a=n(13),i=n(11),c=n(3),u=n(4),s=function(t,e,n){var r=t.meta.undoData=t.meta.undoData||{};return t.meta.do&&(r[e]=n),r[e]},f=function(t,e){return(t.meta.undoData=t.meta.undoData||{})[e]},l=function(t,e){t.meta=t.meta||{},t.meta.undoableCache=e},d=function(t){return Object(u.typeThunk)(function(e){var n=e.dispatch({type:"@@undo_"+t});n&&n.meta&&n.meta.undoableCache&&(e.dispatch({type:n.meta.undoableCache.type,payload:n.meta.undoableCache.payload,meta:n.meta.undoableCache.meta}),delete n.meta.undoableCache)})},b=function(t){return Object(u.typeThunk)(function(e){var n=e.dispatch({type:"@@redo_"+t});n&&n.meta&&n.meta.undoableCache&&(e.dispatch(n.meta.undoableCache),delete n.meta.undoableCache)})},v=function(t){var e=t.id,n=t.tags,r=void 0===n?{}:n,u=t.actionFilter;if(r.self&&(r.past||r.future)){var s=[];r.past&&s.push(r.past),r.future&&s.push(r.future),Object(c.d)(r.self,s)}return Object(i.b)(function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{past:[],future:[]};if(t.type==="@@undo_"+e){if(0===n.past.length)return n;var i=n.past.pop();if(r.past&&Object(c.c)(t.event,r.past),!i)return console.log("this actually happens"),n;l(t,{type:i.type,payload:i.payload,meta:o()({},i.meta,{do:!1,redo:!1,undo:!0})}),n.future.push(i),r.future&&Object(c.c)(t.event,r.future)}else if(t.type==="@@redo_"+e){if(0===n.future.length)return n;var s=n.future.pop();if(r.future&&Object(c.c)(t.event,r.future),!s)return n;l(t,{type:s.type,payload:s.payload,meta:o()({},s.meta,{do:!0,redo:!0,undo:!1})}),n.past.push(s),r.past&&Object(c.c)(t.event,r.past)}else{if(t.type==a.b.INIT)return n;if(t.meta.undo||t.meta.redo)return n;if(u&&!u(t))return n;n.future=[],r.future&&Object(c.c)(t.event,r.future),n.past.push({type:t.type,payload:t.payload,meta:t.meta}),r.past&&Object(c.c)(t.event,r.past)}return n})}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){"use strict";n.d(e,"a",function(){return m});var r=n(7),o=n.n(r),a=n(1),i=n.n(a),c=n(2),u=n.n(c),s=n(8),f=n.n(s),l=n(9),d=n.n(l),b=n(10),v=n.n(b),h=n(6),p=n(16),y=n(4),m=function(t){function e(){return i()(this,e),f()(this,d()(e).apply(this,arguments))}return v()(e,t),u()(e,[{key:"normalize",value:function(t){var e=t.action,n=t.store;if(!Object(p.b)(e)||e.type!==y.BATCH_ACTION_TYPE||e.meta.newBatch)return this._actionNormalizer.normalize(t);var r=e.payload.map(function(t){return Object(p.a)(t)});e.meta.undo&&r.reverse();var a={getState:n.getState,dispatch:function(t){return t.meta=t.meta||{},null!=e.meta.batchId&&(t.meta.rootBatchId=e.meta.rootBatchId,t.meta.parentBatchIds=e.meta.parentBatchIds),t.type!==y.BATCH_ACTION_TYPE||t.meta.batchItem||(t.meta=o()({},e.meta,t.meta)),n.dispatch(t)}};return Object(y.dispatchBatch)(a,function(t){var n=!0,o=!1,a=void 0;try{for(var i,c=r[Symbol.iterator]();!(n=(i=c.next()).done);n=!0){var u=i.value;e.meta.undo&&(u.meta.do=!u.meta.do,u.meta.undo=!u.meta.undo),e.meta.redo&&u.meta.do&&(u.meta.redo=!0),t.dispatch(u)}}catch(t){o=!0,a=t}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}})}}]),e}(h.a)},function(t,e,n){"use strict";n.d(e,"a",function(){return b});var r=n(1),o=n.n(r),a=n(2),i=n.n(a),c=n(8),u=n.n(c),s=n(9),f=n.n(s),l=n(10),d=n.n(l),b=function(t){function e(){return o()(this,e),u()(this,f()(e).apply(this,arguments))}return d()(e,t),i()(e,[{key:"normalize",value:function(t){return t.action.meta.date=new Date,this._actionNormalizer.normalize(t)}}]),e}(n(6).a)},function(t,e,n){"use strict";n.d(e,"a",function(){return h});var r=n(7),o=n.n(r),a=n(1),i=n.n(a),c=n(2),u=n.n(c),s=n(8),f=n.n(s),l=n(9),d=n.n(l),b=n(10),v=n.n(b),h=function(t){function e(){return i()(this,e),f()(this,d()(e).apply(this,arguments))}return v()(e,t),u()(e,[{key:"normalize",value:function(t){return t.action.meta.undoData&&(t.action.meta.undoData=o()({},t.action.meta.undoData)),this._actionNormalizer.normalize(t)}}]),e}(n(6).a)},function(t,e){},function(t,e,n){"use strict";n.d(e,"a",function(){return g});var r=n(1),o=n.n(r),a=n(2),i=n.n(a),c=n(8),u=n.n(c),s=n(9),f=n.n(s),l=n(19),d=n.n(l),b=n(10),v=n.n(b),h=n(0),p=n.n(h),y=n(18),m=n(4),g=function(t){function e(){var t,n;o()(this,e);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=u()(this,(t=f()(e)).call.apply(t,[this].concat(a))),p()(d()(n),"_eventByBatchId",{}),p()(d()(n),"_childsByBatchId",{}),p()(d()(n),"_observableBatchIdByBatchId",{}),n}return v()(e,t),i()(e,[{key:"resolve",value:function(t){t.store,t.setAction;var e=t.applyMutator;if(!t.action.meta.batchItem&&t.action.type!==m.BATCH_ACTION_TYPE)return this._actionResolver.resolve(t);var n=t.action.meta.batchId,r=t.action.meta.rootBatchId;t.action.event=this._eventByBatchId[r]=this._eventByBatchId[r]||Object(m.createEvent)();var o=t.action;delete o.meta.batchId,delete o.meta.rootBatchId,delete o.meta.newBatch;var a=t.action.meta.parentBatchIds;if(delete o.meta.parentBatchIds,o.meta.batchItem&&o.type!==m.BATCH_ACTION_TYPE&&(null==this._observableBatchIdByBatchId[r]&&(this._observableBatchIdByBatchId[r]=Object(m.batchStart)()),Object(m.batchStart)(this._observableBatchIdByBatchId[r]),e(o),Object(m.batchEnd)(this._observableBatchIdByBatchId[r]),Object(m.batchPause)()),o.type===m.BATCH_ACTION_TYPE&&(o.payload=this._childsByBatchId[n],delete this._childsByBatchId[n]),o.meta.batchItem){if(o.type!==m.BATCH_ACTION_TYPE&&a){var i=!0,c=!1,u=void 0;try{for(var s,f=a[Symbol.iterator]();!(i=(s=f.next()).done);i=!0){var l=s.value;this._childsByBatchId[l]=this._childsByBatchId[l]||[],this._childsByBatchId[l].push(o)}}catch(t){c=!0,u=t}finally{try{i||null==f.return||f.return()}finally{if(c)throw u}}}return delete o.meta.batchItem,o}return delete this._eventByBatchId[n],null!=this._observableBatchIdByBatchId[r]&&Object(m.batchEnd)(this._observableBatchIdByBatchId[r]),this._actionResolver.resolve(t)}}]),e}(y.a)},function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return c});var r=n(5),o=function(t,e){if(e.payload)return t.dispatch(e)},a="@@batch",i=0,c=function(t,e){var n=i++,c={type:a,payload:[],meta:{pure:!0,batchId:n,rootBatchId:n,batch:!0,newBatch:!0}},u=e({getState:t.getState,dispatch:function(e){return e.meta=e.meta||{},null==e.meta.batchId&&(e.meta.batchId=c.meta.batchId),e.meta.rootBatchId=c.meta.batchId,e.meta.parentBatchIds=e.meta.parentBatchIds||[],e.meta.parentBatchIds.push(c.meta.batchId),e.meta.batchItem=!0,t.dispatch(e)}});return Object(r.c)(u)?u.then(function(){return o(t,c)}):o(t,c)}},function(t,e,n){"use strict";n.d(e,"b",function(){return o}),n.d(e,"a",function(){return a});var r=n(5),o=function(t){return t},a=function(t,e){var n=[],o=e({getState:t.getState,dispatch:function(e){var r=t.dispatch(e);return r&&n.push(r),r}});return Object(r.c)(o)?o.then(function(){return n}):n}},function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(t,e){return e.then(function(e){return t.dispatch(e)})}},function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(t,e){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done);r=!0){var u=i.value,s=t.dispatch(u);s&&n.push(s)}}catch(t){o=!0,a=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}},function(t,e){},function(t,e,n){"use strict";(function(t){Function("return this")();!function(n){function r(t){switch(typeof t){case"object":if(null==t)return t;var e=void 0;return t instanceof Date?((e=new Date).setTime(t.getTime()),e):t instanceof RegExp?e=i(t):(a(t,e=JSON.parse(JSON.stringify(t))),e);default:return t}}function o(t,e,n){var r=t[n];switch(typeof r){case"object":if(r instanceof Date){var o=new Date;o.setTime(r.getTime()),e[n]=o}else r instanceof RegExp?e[n]=i(r):null==r?e[n]=r:a(r,e[n]);break;case"number":isNaN(r)?e[n]=NaN:r==1/0&&(e[n]=1/0)}}function a(t,e){if(t instanceof Array)for(var n=0;n<t.length;n++)o(t,e,n);else Object.getOwnPropertyNames(t).forEach(function(n){o(t,e,n)})}function i(t){var e=String(t),n=e.lastIndexOf("/");return new RegExp(e.slice(1,n),e.slice(n+1))}t&&t.exports&&(e=t.exports=r),e.clone=r}()}).call(this,n(53)(t))},,function(t,e,n){var r=n(23),o=n(49),a=n(50),i="[object Null]",c="[object Undefined]",u=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?c:i:u&&u in Object(t)?o(t):a(t)}},function(t,e,n){var r=n(47),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();t.exports=a},function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n(48))},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var r=n(23),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,c=r?r.toStringTag:void 0;t.exports=function(t){var e=a.call(t,c),n=t[c];try{t[c]=void 0;var r=!0}catch(t){}var o=i.call(t);return r&&(e?t[c]=n:delete t[c]),o}},function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},function(t,e,n){var r=n(52)(Object.getPrototypeOf,Object);t.exports=r},function(t,e){t.exports=function(t,e){return function(n){return t(e(n))}}},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},function(t,e){t.exports=function(t,e){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(e){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=r=function(t){return n(t)}:t.exports=r=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},r(e)}t.exports=r},function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n}])});
//# sourceMappingURL=core.js.map