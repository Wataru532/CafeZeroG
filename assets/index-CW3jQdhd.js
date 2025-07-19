(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function e(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(r){if(r.ep)return;r.ep=!0;const l=e(r);fetch(r.href,l)}})();function AT(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Gd={exports:{}},Hl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jv;function RT(){if(Jv)return Hl;Jv=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function e(a,r,l){var c=null;if(l!==void 0&&(c=""+l),r.key!==void 0&&(c=""+r.key),"key"in r){l={};for(var f in r)f!=="key"&&(l[f]=r[f])}else l=r;return r=l.ref,{$$typeof:s,type:a,key:c,ref:r!==void 0?r:null,props:l}}return Hl.Fragment=t,Hl.jsx=e,Hl.jsxs=e,Hl}var $v;function wT(){return $v||($v=1,Gd.exports=RT()),Gd.exports}var fe=wT(),Vd={exports:{}},Gl={},kd={exports:{}},Xd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tx;function CT(){return tx||(tx=1,function(s){function t(z,k){var W=z.length;z.push(k);t:for(;0<W;){var mt=W-1>>>1,O=z[mt];if(0<r(O,k))z[mt]=k,z[W]=O,W=mt;else break t}}function e(z){return z.length===0?null:z[0]}function a(z){if(z.length===0)return null;var k=z[0],W=z.pop();if(W!==k){z[0]=W;t:for(var mt=0,O=z.length,Z=O>>>1;mt<Z;){var gt=2*(mt+1)-1,St=z[gt],Y=gt+1,ut=z[Y];if(0>r(St,W))Y<O&&0>r(ut,St)?(z[mt]=ut,z[Y]=W,mt=Y):(z[mt]=St,z[gt]=W,mt=gt);else if(Y<O&&0>r(ut,W))z[mt]=ut,z[Y]=W,mt=Y;else break t}}return k}function r(z,k){var W=z.sortIndex-k.sortIndex;return W!==0?W:z.id-k.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();s.unstable_now=function(){return c.now()-f}}var d=[],p=[],m=1,g=null,v=3,S=!1,E=!1,M=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;function b(z){for(var k=e(p);k!==null;){if(k.callback===null)a(p);else if(k.startTime<=z)a(p),k.sortIndex=k.expirationTime,t(d,k);else break;k=e(p)}}function N(z){if(M=!1,b(z),!E)if(e(d)!==null)E=!0,I||(I=!0,nt());else{var k=e(p);k!==null&&lt(N,k.startTime-z)}}var I=!1,P=-1,F=5,A=-1;function U(){return y?!0:!(s.unstable_now()-A<F)}function G(){if(y=!1,I){var z=s.unstable_now();A=z;var k=!0;try{t:{E=!1,M&&(M=!1,w(P),P=-1),S=!0;var W=v;try{e:{for(b(z),g=e(d);g!==null&&!(g.expirationTime>z&&U());){var mt=g.callback;if(typeof mt=="function"){g.callback=null,v=g.priorityLevel;var O=mt(g.expirationTime<=z);if(z=s.unstable_now(),typeof O=="function"){g.callback=O,b(z),k=!0;break e}g===e(d)&&a(d),b(z)}else a(d);g=e(d)}if(g!==null)k=!0;else{var Z=e(p);Z!==null&&lt(N,Z.startTime-z),k=!1}}break t}finally{g=null,v=W,S=!1}k=void 0}}finally{k?nt():I=!1}}}var nt;if(typeof C=="function")nt=function(){C(G)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,ct=J.port2;J.port1.onmessage=G,nt=function(){ct.postMessage(null)}}else nt=function(){x(G,0)};function lt(z,k){P=x(function(){z(s.unstable_now())},k)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(z){z.callback=null},s.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<z?Math.floor(1e3/z):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_next=function(z){switch(v){case 1:case 2:case 3:var k=3;break;default:k=v}var W=v;v=k;try{return z()}finally{v=W}},s.unstable_requestPaint=function(){y=!0},s.unstable_runWithPriority=function(z,k){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var W=v;v=z;try{return k()}finally{v=W}},s.unstable_scheduleCallback=function(z,k,W){var mt=s.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?mt+W:mt):W=mt,z){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=W+O,z={id:m++,callback:k,priorityLevel:z,startTime:W,expirationTime:O,sortIndex:-1},W>mt?(z.sortIndex=W,t(p,z),e(d)===null&&z===e(p)&&(M?(w(P),P=-1):M=!0,lt(N,W-mt))):(z.sortIndex=O,t(d,z),E||S||(E=!0,I||(I=!0,nt()))),z},s.unstable_shouldYield=U,s.unstable_wrapCallback=function(z){var k=v;return function(){var W=v;v=k;try{return z.apply(this,arguments)}finally{v=W}}}}(Xd)),Xd}var ex;function DT(){return ex||(ex=1,kd.exports=CT()),kd.exports}var Wd={exports:{}},se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nx;function UT(){if(nx)return se;nx=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),e=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;function v(O){return O===null||typeof O!="object"?null:(O=g&&O[g]||O["@@iterator"],typeof O=="function"?O:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function y(O,Z,gt){this.props=O,this.context=Z,this.refs=M,this.updater=gt||S}y.prototype.isReactComponent={},y.prototype.setState=function(O,Z){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,Z,"setState")},y.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function x(){}x.prototype=y.prototype;function w(O,Z,gt){this.props=O,this.context=Z,this.refs=M,this.updater=gt||S}var C=w.prototype=new x;C.constructor=w,E(C,y.prototype),C.isPureReactComponent=!0;var b=Array.isArray,N={H:null,A:null,T:null,S:null,V:null},I=Object.prototype.hasOwnProperty;function P(O,Z,gt,St,Y,ut){return gt=ut.ref,{$$typeof:s,type:O,key:Z,ref:gt!==void 0?gt:null,props:ut}}function F(O,Z){return P(O.type,Z,void 0,void 0,void 0,O.props)}function A(O){return typeof O=="object"&&O!==null&&O.$$typeof===s}function U(O){var Z={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(gt){return Z[gt]})}var G=/\/+/g;function nt(O,Z){return typeof O=="object"&&O!==null&&O.key!=null?U(""+O.key):Z.toString(36)}function J(){}function ct(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(J,J):(O.status="pending",O.then(function(Z){O.status==="pending"&&(O.status="fulfilled",O.value=Z)},function(Z){O.status==="pending"&&(O.status="rejected",O.reason=Z)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function lt(O,Z,gt,St,Y){var ut=typeof O;(ut==="undefined"||ut==="boolean")&&(O=null);var Mt=!1;if(O===null)Mt=!0;else switch(ut){case"bigint":case"string":case"number":Mt=!0;break;case"object":switch(O.$$typeof){case s:case t:Mt=!0;break;case m:return Mt=O._init,lt(Mt(O._payload),Z,gt,St,Y)}}if(Mt)return Y=Y(O),Mt=St===""?"."+nt(O,0):St,b(Y)?(gt="",Mt!=null&&(gt=Mt.replace(G,"$&/")+"/"),lt(Y,Z,gt,"",function(ee){return ee})):Y!=null&&(A(Y)&&(Y=F(Y,gt+(Y.key==null||O&&O.key===Y.key?"":(""+Y.key).replace(G,"$&/")+"/")+Mt)),Z.push(Y)),1;Mt=0;var Rt=St===""?".":St+":";if(b(O))for(var wt=0;wt<O.length;wt++)St=O[wt],ut=Rt+nt(St,wt),Mt+=lt(St,Z,gt,ut,Y);else if(wt=v(O),typeof wt=="function")for(O=wt.call(O),wt=0;!(St=O.next()).done;)St=St.value,ut=Rt+nt(St,wt++),Mt+=lt(St,Z,gt,ut,Y);else if(ut==="object"){if(typeof O.then=="function")return lt(ct(O),Z,gt,St,Y);throw Z=String(O),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return Mt}function z(O,Z,gt){if(O==null)return O;var St=[],Y=0;return lt(O,St,"","",function(ut){return Z.call(gt,ut,Y++)}),St}function k(O){if(O._status===-1){var Z=O._result;Z=Z(),Z.then(function(gt){(O._status===0||O._status===-1)&&(O._status=1,O._result=gt)},function(gt){(O._status===0||O._status===-1)&&(O._status=2,O._result=gt)}),O._status===-1&&(O._status=0,O._result=Z)}if(O._status===1)return O._result.default;throw O._result}var W=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function mt(){}return se.Children={map:z,forEach:function(O,Z,gt){z(O,function(){Z.apply(this,arguments)},gt)},count:function(O){var Z=0;return z(O,function(){Z++}),Z},toArray:function(O){return z(O,function(Z){return Z})||[]},only:function(O){if(!A(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},se.Component=y,se.Fragment=e,se.Profiler=r,se.PureComponent=w,se.StrictMode=a,se.Suspense=d,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N,se.__COMPILER_RUNTIME={__proto__:null,c:function(O){return N.H.useMemoCache(O)}},se.cache=function(O){return function(){return O.apply(null,arguments)}},se.cloneElement=function(O,Z,gt){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var St=E({},O.props),Y=O.key,ut=void 0;if(Z!=null)for(Mt in Z.ref!==void 0&&(ut=void 0),Z.key!==void 0&&(Y=""+Z.key),Z)!I.call(Z,Mt)||Mt==="key"||Mt==="__self"||Mt==="__source"||Mt==="ref"&&Z.ref===void 0||(St[Mt]=Z[Mt]);var Mt=arguments.length-2;if(Mt===1)St.children=gt;else if(1<Mt){for(var Rt=Array(Mt),wt=0;wt<Mt;wt++)Rt[wt]=arguments[wt+2];St.children=Rt}return P(O.type,Y,void 0,void 0,ut,St)},se.createContext=function(O){return O={$$typeof:c,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:l,_context:O},O},se.createElement=function(O,Z,gt){var St,Y={},ut=null;if(Z!=null)for(St in Z.key!==void 0&&(ut=""+Z.key),Z)I.call(Z,St)&&St!=="key"&&St!=="__self"&&St!=="__source"&&(Y[St]=Z[St]);var Mt=arguments.length-2;if(Mt===1)Y.children=gt;else if(1<Mt){for(var Rt=Array(Mt),wt=0;wt<Mt;wt++)Rt[wt]=arguments[wt+2];Y.children=Rt}if(O&&O.defaultProps)for(St in Mt=O.defaultProps,Mt)Y[St]===void 0&&(Y[St]=Mt[St]);return P(O,ut,void 0,void 0,null,Y)},se.createRef=function(){return{current:null}},se.forwardRef=function(O){return{$$typeof:f,render:O}},se.isValidElement=A,se.lazy=function(O){return{$$typeof:m,_payload:{_status:-1,_result:O},_init:k}},se.memo=function(O,Z){return{$$typeof:p,type:O,compare:Z===void 0?null:Z}},se.startTransition=function(O){var Z=N.T,gt={};N.T=gt;try{var St=O(),Y=N.S;Y!==null&&Y(gt,St),typeof St=="object"&&St!==null&&typeof St.then=="function"&&St.then(mt,W)}catch(ut){W(ut)}finally{N.T=Z}},se.unstable_useCacheRefresh=function(){return N.H.useCacheRefresh()},se.use=function(O){return N.H.use(O)},se.useActionState=function(O,Z,gt){return N.H.useActionState(O,Z,gt)},se.useCallback=function(O,Z){return N.H.useCallback(O,Z)},se.useContext=function(O){return N.H.useContext(O)},se.useDebugValue=function(){},se.useDeferredValue=function(O,Z){return N.H.useDeferredValue(O,Z)},se.useEffect=function(O,Z,gt){var St=N.H;if(typeof gt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return St.useEffect(O,Z)},se.useId=function(){return N.H.useId()},se.useImperativeHandle=function(O,Z,gt){return N.H.useImperativeHandle(O,Z,gt)},se.useInsertionEffect=function(O,Z){return N.H.useInsertionEffect(O,Z)},se.useLayoutEffect=function(O,Z){return N.H.useLayoutEffect(O,Z)},se.useMemo=function(O,Z){return N.H.useMemo(O,Z)},se.useOptimistic=function(O,Z){return N.H.useOptimistic(O,Z)},se.useReducer=function(O,Z,gt){return N.H.useReducer(O,Z,gt)},se.useRef=function(O){return N.H.useRef(O)},se.useState=function(O){return N.H.useState(O)},se.useSyncExternalStore=function(O,Z,gt){return N.H.useSyncExternalStore(O,Z,gt)},se.useTransition=function(){return N.H.useTransition()},se.version="19.1.0",se}var ix;function Xm(){return ix||(ix=1,Wd.exports=UT()),Wd.exports}var qd={exports:{}},Gn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ax;function LT(){if(ax)return Gn;ax=1;var s=Xm();function t(d){var p="https://react.dev/errors/"+d;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var m=2;m<arguments.length;m++)p+="&args[]="+encodeURIComponent(arguments[m])}return"Minified React error #"+d+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function e(){}var a={d:{f:e,r:function(){throw Error(t(522))},D:e,C:e,L:e,m:e,X:e,S:e,M:e},p:0,findDOMNode:null},r=Symbol.for("react.portal");function l(d,p,m){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:r,key:g==null?null:""+g,children:d,containerInfo:p,implementation:m}}var c=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(d,p){if(d==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Gn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Gn.createPortal=function(d,p){var m=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return l(d,p,null,m)},Gn.flushSync=function(d){var p=c.T,m=a.p;try{if(c.T=null,a.p=2,d)return d()}finally{c.T=p,a.p=m,a.d.f()}},Gn.preconnect=function(d,p){typeof d=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(d,p))},Gn.prefetchDNS=function(d){typeof d=="string"&&a.d.D(d)},Gn.preinit=function(d,p){if(typeof d=="string"&&p&&typeof p.as=="string"){var m=p.as,g=f(m,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;m==="style"?a.d.S(d,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:v,fetchPriority:S}):m==="script"&&a.d.X(d,{crossOrigin:g,integrity:v,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Gn.preinitModule=function(d,p){if(typeof d=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var m=f(p.as,p.crossOrigin);a.d.M(d,{crossOrigin:m,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(d)},Gn.preload=function(d,p){if(typeof d=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var m=p.as,g=f(m,p.crossOrigin);a.d.L(d,m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Gn.preloadModule=function(d,p){if(typeof d=="string")if(p){var m=f(p.as,p.crossOrigin);a.d.m(d,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:m,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(d)},Gn.requestFormReset=function(d){a.d.r(d)},Gn.unstable_batchedUpdates=function(d,p){return d(p)},Gn.useFormState=function(d,p,m){return c.H.useFormState(d,p,m)},Gn.useFormStatus=function(){return c.H.useHostTransitionStatus()},Gn.version="19.1.0",Gn}var rx;function NT(){if(rx)return qd.exports;rx=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),qd.exports=LT(),qd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sx;function OT(){if(sx)return Gl;sx=1;var s=DT(),t=Xm(),e=NT();function a(n){var i="https://react.dev/errors/"+n;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function l(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function c(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function f(n){if(l(n)!==n)throw Error(a(188))}function d(n){var i=n.alternate;if(!i){if(i=l(n),i===null)throw Error(a(188));return i!==n?null:n}for(var o=n,u=i;;){var h=o.return;if(h===null)break;var _=h.alternate;if(_===null){if(u=h.return,u!==null){o=u;continue}break}if(h.child===_.child){for(_=h.child;_;){if(_===o)return f(h),n;if(_===u)return f(h),i;_=_.sibling}throw Error(a(188))}if(o.return!==u.return)o=h,u=_;else{for(var T=!1,D=h.child;D;){if(D===o){T=!0,o=h,u=_;break}if(D===u){T=!0,u=h,o=_;break}D=D.sibling}if(!T){for(D=_.child;D;){if(D===o){T=!0,o=_,u=h;break}if(D===u){T=!0,u=_,o=h;break}D=D.sibling}if(!T)throw Error(a(189))}}if(o.alternate!==u)throw Error(a(190))}if(o.tag!==3)throw Error(a(188));return o.stateNode.current===o?n:i}function p(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n;for(n=n.child;n!==null;){if(i=p(n),i!==null)return i;n=n.sibling}return null}var m=Object.assign,g=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),w=Symbol.for("react.consumer"),C=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),F=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),U=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function nt(n){return n===null||typeof n!="object"?null:(n=G&&n[G]||n["@@iterator"],typeof n=="function"?n:null)}var J=Symbol.for("react.client.reference");function ct(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===J?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case E:return"Fragment";case y:return"Profiler";case M:return"StrictMode";case N:return"Suspense";case I:return"SuspenseList";case A:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case S:return"Portal";case C:return(n.displayName||"Context")+".Provider";case w:return(n._context.displayName||"Context")+".Consumer";case b:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case P:return i=n.displayName||null,i!==null?i:ct(n.type)||"Memo";case F:i=n._payload,n=n._init;try{return ct(n(i))}catch{}}return null}var lt=Array.isArray,z=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},mt=[],O=-1;function Z(n){return{current:n}}function gt(n){0>O||(n.current=mt[O],mt[O]=null,O--)}function St(n,i){O++,mt[O]=n.current,n.current=i}var Y=Z(null),ut=Z(null),Mt=Z(null),Rt=Z(null);function wt(n,i){switch(St(Mt,i),St(ut,n),St(Y,null),i.nodeType){case 9:case 11:n=(n=i.documentElement)&&(n=n.namespaceURI)?Av(n):0;break;default:if(n=i.tagName,i=i.namespaceURI)i=Av(i),n=Rv(i,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}gt(Y),St(Y,n)}function ee(){gt(Y),gt(ut),gt(Mt)}function Vt(n){n.memoizedState!==null&&St(Rt,n);var i=Y.current,o=Rv(i,n.type);i!==o&&(St(ut,n),St(Y,o))}function ge(n){ut.current===n&&(gt(Y),gt(ut)),Rt.current===n&&(gt(Rt),Pl._currentValue=W)}var Ve=Object.prototype.hasOwnProperty,ve=s.unstable_scheduleCallback,V=s.unstable_cancelCallback,Un=s.unstable_shouldYield,be=s.unstable_requestPaint,pe=s.unstable_now,kt=s.unstable_getCurrentPriorityLevel,xe=s.unstable_ImmediatePriority,Zt=s.unstable_UserBlockingPriority,re=s.unstable_NormalPriority,on=s.unstable_LowPriority,B=s.unstable_IdlePriority,R=s.log,it=s.unstable_setDisableYieldValue,pt=null,vt=null;function ft(n){if(typeof R=="function"&&it(n),vt&&typeof vt.setStrictMode=="function")try{vt.setStrictMode(pt,n)}catch{}}var Pt=Math.clz32?Math.clz32:Xt,Ut=Math.log,Gt=Math.LN2;function Xt(n){return n>>>=0,n===0?32:31-(Ut(n)/Gt|0)|0}var Et=256,zt=4194304;function Yt(n){var i=n&42;if(i!==0)return i;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function jt(n,i,o){var u=n.pendingLanes;if(u===0)return 0;var h=0,_=n.suspendedLanes,T=n.pingedLanes;n=n.warmLanes;var D=u&134217727;return D!==0?(u=D&~_,u!==0?h=Yt(u):(T&=D,T!==0?h=Yt(T):o||(o=D&~n,o!==0&&(h=Yt(o))))):(D=u&~_,D!==0?h=Yt(D):T!==0?h=Yt(T):o||(o=u&~n,o!==0&&(h=Yt(o)))),h===0?0:i!==0&&i!==h&&(i&_)===0&&(_=h&-h,o=i&-i,_>=o||_===32&&(o&4194048)!==0)?i:h}function Ct(n,i){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&i)===0}function ae(n,i){switch(n){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function q(){var n=Et;return Et<<=1,(Et&4194048)===0&&(Et=256),n}function Lt(){var n=zt;return zt<<=1,(zt&62914560)===0&&(zt=4194304),n}function Tt(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function It(n,i){n.pendingLanes|=i,i!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function At(n,i,o,u,h,_){var T=n.pendingLanes;n.pendingLanes=o,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=o,n.entangledLanes&=o,n.errorRecoveryDisabledLanes&=o,n.shellSuspendCounter=0;var D=n.entanglements,H=n.expirationTimes,et=n.hiddenUpdates;for(o=T&~o;0<o;){var dt=31-Pt(o),xt=1<<dt;D[dt]=0,H[dt]=-1;var at=et[dt];if(at!==null)for(et[dt]=null,dt=0;dt<at.length;dt++){var rt=at[dt];rt!==null&&(rt.lane&=-536870913)}o&=~xt}u!==0&&yt(n,u,0),_!==0&&h===0&&n.tag!==0&&(n.suspendedLanes|=_&~(T&~i))}function yt(n,i,o){n.pendingLanes|=i,n.suspendedLanes&=~i;var u=31-Pt(i);n.entangledLanes|=i,n.entanglements[u]=n.entanglements[u]|1073741824|o&4194090}function Ft(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var u=31-Pt(o),h=1<<u;h&i|n[u]&i&&(n[u]|=i),o&=~h}}function ie(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Ne(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Ae(){var n=k.p;return n!==0?n:(n=window.event,n===void 0?32:qv(n.type))}function ui(n,i){var o=k.p;try{return k.p=n,i()}finally{k.p=o}}var En=Math.random().toString(36).slice(2),gn="__reactFiber$"+En,Ln="__reactProps$"+En,Zn="__reactContainer$"+En,Hr="__reactEvents$"+En,Au="__reactListeners$"+En,Ru="__reactHandles$"+En,Gr="__reactResources$"+En,Za="__reactMarker$"+En;function Ka(n){delete n[gn],delete n[Ln],delete n[Hr],delete n[Au],delete n[Ru]}function da(n){var i=n[gn];if(i)return i;for(var o=n.parentNode;o;){if(i=o[Zn]||o[gn]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=Uv(n);n!==null;){if(o=n[gn])return o;n=Uv(n)}return i}n=o,o=n.parentNode}return null}function pa(n){if(n=n[gn]||n[Zn]){var i=n.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return n}return null}function Vr(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n.stateNode;throw Error(a(33))}function Qa(n){var i=n[Gr];return i||(i=n[Gr]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function fn(n){n[Za]=!0}var wu=new Set,Cu={};function ma(n,i){L(n,i),L(n+"Capture",i)}function L(n,i){for(Cu[n]=i,n=0;n<i.length;n++)wu.add(i[n])}var K=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),st={},ot={};function Q(n){return Ve.call(ot,n)?!0:Ve.call(st,n)?!1:K.test(n)?ot[n]=!0:(st[n]=!0,!1)}function bt(n,i,o){if(Q(i))if(o===null)n.removeAttribute(i);else{switch(typeof o){case"undefined":case"function":case"symbol":n.removeAttribute(i);return;case"boolean":var u=i.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){n.removeAttribute(i);return}}n.setAttribute(i,""+o)}}function Dt(n,i,o){if(o===null)n.removeAttribute(i);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(i);return}n.setAttribute(i,""+o)}}function Ot(n,i,o,u){if(u===null)n.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(o);return}n.setAttributeNS(i,o,""+u)}}var Bt,te;function Qt(n){if(Bt===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);Bt=i&&i[1]||"",te=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Bt+n+te}var Wt=!1;function le(n,i){if(!n||Wt)return"";Wt=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(i){var xt=function(){throw Error()};if(Object.defineProperty(xt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xt,[])}catch(rt){var at=rt}Reflect.construct(n,[],xt)}else{try{xt.call()}catch(rt){at=rt}n.call(xt.prototype)}}else{try{throw Error()}catch(rt){at=rt}(xt=n())&&typeof xt.catch=="function"&&xt.catch(function(){})}}catch(rt){if(rt&&at&&typeof rt.stack=="string")return[rt.stack,at.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var _=u.DetermineComponentFrameRoot(),T=_[0],D=_[1];if(T&&D){var H=T.split(`
`),et=D.split(`
`);for(h=u=0;u<H.length&&!H[u].includes("DetermineComponentFrameRoot");)u++;for(;h<et.length&&!et[h].includes("DetermineComponentFrameRoot");)h++;if(u===H.length||h===et.length)for(u=H.length-1,h=et.length-1;1<=u&&0<=h&&H[u]!==et[h];)h--;for(;1<=u&&0<=h;u--,h--)if(H[u]!==et[h]){if(u!==1||h!==1)do if(u--,h--,0>h||H[u]!==et[h]){var dt=`
`+H[u].replace(" at new "," at ");return n.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",n.displayName)),dt}while(1<=u&&0<=h);break}}}finally{Wt=!1,Error.prepareStackTrace=o}return(o=n?n.displayName||n.name:"")?Qt(o):""}function Ue(n){switch(n.tag){case 26:case 27:case 5:return Qt(n.type);case 16:return Qt("Lazy");case 13:return Qt("Suspense");case 19:return Qt("SuspenseList");case 0:case 15:return le(n.type,!1);case 11:return le(n.type.render,!1);case 1:return le(n.type,!0);case 31:return Qt("Activity");default:return""}}function Ze(n){try{var i="";do i+=Ue(n),n=n.return;while(n);return i}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function he(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Le(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Kt(n){var i=Le(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var h=o.get,_=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return h.call(this)},set:function(T){u=""+T,_.call(this,T)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(T){u=""+T},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function ze(n){n._valueTracker||(n._valueTracker=Kt(n))}function ye(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return n&&(u=Le(n)?n.checked?"true":"false":n.value),n=u,n!==o?(i.setValue(n),!0):!1}function Tn(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Ja=/[\n"\\]/g;function Ye(n){return n.replace(Ja,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function _a(n,i,o,u,h,_,T,D){n.name="",T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?n.type=T:n.removeAttribute("type"),i!=null?T==="number"?(i===0&&n.value===""||n.value!=i)&&(n.value=""+he(i)):n.value!==""+he(i)&&(n.value=""+he(i)):T!=="submit"&&T!=="reset"||n.removeAttribute("value"),i!=null?Fn(n,T,he(i)):o!=null?Fn(n,T,he(o)):u!=null&&n.removeAttribute("value"),h==null&&_!=null&&(n.defaultChecked=!!_),h!=null&&(n.checked=h&&typeof h!="function"&&typeof h!="symbol"),D!=null&&typeof D!="function"&&typeof D!="symbol"&&typeof D!="boolean"?n.name=""+he(D):n.removeAttribute("name")}function ke(n,i,o,u,h,_,T,D){if(_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(n.type=_),i!=null||o!=null){if(!(_!=="submit"&&_!=="reset"||i!=null))return;o=o!=null?""+he(o):"",i=i!=null?""+he(i):o,D||i===n.value||(n.value=i),n.defaultValue=i}u=u??h,u=typeof u!="function"&&typeof u!="symbol"&&!!u,n.checked=D?n.checked:!!u,n.defaultChecked=!!u,T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"&&(n.name=T)}function Fn(n,i,o){i==="number"&&Tn(n.ownerDocument)===n||n.defaultValue===""+o||(n.defaultValue=""+o)}function vn(n,i,o,u){if(n=n.options,i){i={};for(var h=0;h<o.length;h++)i["$"+o[h]]=!0;for(o=0;o<n.length;o++)h=i.hasOwnProperty("$"+n[o].value),n[o].selected!==h&&(n[o].selected=h),h&&u&&(n[o].defaultSelected=!0)}else{for(o=""+he(o),i=null,h=0;h<n.length;h++){if(n[h].value===o){n[h].selected=!0,u&&(n[h].defaultSelected=!0);return}i!==null||n[h].disabled||(i=n[h])}i!==null&&(i.selected=!0)}}function bn(n,i,o){if(i!=null&&(i=""+he(i),i!==n.value&&(n.value=i),o==null)){n.defaultValue!==i&&(n.defaultValue=i);return}n.defaultValue=o!=null?""+he(o):""}function Nn(n,i,o,u){if(i==null){if(u!=null){if(o!=null)throw Error(a(92));if(lt(u)){if(1<u.length)throw Error(a(93));u=u[0]}o=u}o==null&&(o=""),i=o}o=he(i),n.defaultValue=o,u=n.textContent,u===o&&u!==""&&u!==null&&(n.value=u)}function Qi(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var ga=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function A_(n,i,o){var u=i.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?n.setProperty(i,""):i==="float"?n.cssFloat="":n[i]="":u?n.setProperty(i,o):typeof o!="number"||o===0||ga.has(i)?i==="float"?n.cssFloat=o:n[i]=(""+o).trim():n[i]=o+"px"}function R_(n,i,o){if(i!=null&&typeof i!="object")throw Error(a(62));if(n=n.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||i!=null&&i.hasOwnProperty(u)||(u.indexOf("--")===0?n.setProperty(u,""):u==="float"?n.cssFloat="":n[u]="");for(var h in i)u=i[h],i.hasOwnProperty(h)&&o[h]!==u&&A_(n,h,u)}else for(var _ in i)i.hasOwnProperty(_)&&A_(n,_,i[_])}function Hf(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var TM=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),bM=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Du(n){return bM.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var Gf=null;function Vf(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ls=null,Ns=null;function w_(n){var i=pa(n);if(i&&(n=i.stateNode)){var o=n[Ln]||null;t:switch(n=i.stateNode,i.type){case"input":if(_a(n,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Ye(""+i)+'"][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==n&&u.form===n.form){var h=u[Ln]||null;if(!h)throw Error(a(90));_a(u,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<o.length;i++)u=o[i],u.form===n.form&&ye(u)}break t;case"textarea":bn(n,o.value,o.defaultValue);break t;case"select":i=o.value,i!=null&&vn(n,!!o.multiple,i,!1)}}}var kf=!1;function C_(n,i,o){if(kf)return n(i,o);kf=!0;try{var u=n(i);return u}finally{if(kf=!1,(Ls!==null||Ns!==null)&&(mc(),Ls&&(i=Ls,n=Ns,Ns=Ls=null,w_(i),n)))for(i=0;i<n.length;i++)w_(n[i])}}function jo(n,i){var o=n.stateNode;if(o===null)return null;var u=o[Ln]||null;if(u===null)return null;o=u[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break t;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(a(231,i,typeof o));return o}var va=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xf=!1;if(va)try{var Zo={};Object.defineProperty(Zo,"passive",{get:function(){Xf=!0}}),window.addEventListener("test",Zo,Zo),window.removeEventListener("test",Zo,Zo)}catch{Xf=!1}var $a=null,Wf=null,Uu=null;function D_(){if(Uu)return Uu;var n,i=Wf,o=i.length,u,h="value"in $a?$a.value:$a.textContent,_=h.length;for(n=0;n<o&&i[n]===h[n];n++);var T=o-n;for(u=1;u<=T&&i[o-u]===h[_-u];u++);return Uu=h.slice(n,1<u?1-u:void 0)}function Lu(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Nu(){return!0}function U_(){return!1}function Kn(n){function i(o,u,h,_,T){this._reactName=o,this._targetInst=h,this.type=u,this.nativeEvent=_,this.target=T,this.currentTarget=null;for(var D in n)n.hasOwnProperty(D)&&(o=n[D],this[D]=o?o(_):_[D]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?Nu:U_,this.isPropagationStopped=U_,this}return m(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Nu)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Nu)},persist:function(){},isPersistent:Nu}),i}var kr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ou=Kn(kr),Ko=m({},kr,{view:0,detail:0}),AM=Kn(Ko),qf,Yf,Qo,Pu=m({},Ko,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zf,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Qo&&(Qo&&n.type==="mousemove"?(qf=n.screenX-Qo.screenX,Yf=n.screenY-Qo.screenY):Yf=qf=0,Qo=n),qf)},movementY:function(n){return"movementY"in n?n.movementY:Yf}}),L_=Kn(Pu),RM=m({},Pu,{dataTransfer:0}),wM=Kn(RM),CM=m({},Ko,{relatedTarget:0}),jf=Kn(CM),DM=m({},kr,{animationName:0,elapsedTime:0,pseudoElement:0}),UM=Kn(DM),LM=m({},kr,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),NM=Kn(LM),OM=m({},kr,{data:0}),N_=Kn(OM),PM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},IM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function BM(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=IM[n])?!!i[n]:!1}function Zf(){return BM}var FM=m({},Ko,{key:function(n){if(n.key){var i=PM[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Lu(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?zM[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zf,charCode:function(n){return n.type==="keypress"?Lu(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Lu(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),HM=Kn(FM),GM=m({},Pu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),O_=Kn(GM),VM=m({},Ko,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zf}),kM=Kn(VM),XM=m({},kr,{propertyName:0,elapsedTime:0,pseudoElement:0}),WM=Kn(XM),qM=m({},Pu,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),YM=Kn(qM),jM=m({},kr,{newState:0,oldState:0}),ZM=Kn(jM),KM=[9,13,27,32],Kf=va&&"CompositionEvent"in window,Jo=null;va&&"documentMode"in document&&(Jo=document.documentMode);var QM=va&&"TextEvent"in window&&!Jo,P_=va&&(!Kf||Jo&&8<Jo&&11>=Jo),z_=" ",I_=!1;function B_(n,i){switch(n){case"keyup":return KM.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function F_(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Os=!1;function JM(n,i){switch(n){case"compositionend":return F_(i);case"keypress":return i.which!==32?null:(I_=!0,z_);case"textInput":return n=i.data,n===z_&&I_?null:n;default:return null}}function $M(n,i){if(Os)return n==="compositionend"||!Kf&&B_(n,i)?(n=D_(),Uu=Wf=$a=null,Os=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return P_&&i.locale!=="ko"?null:i.data;default:return null}}var tE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function H_(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!tE[n.type]:i==="textarea"}function G_(n,i,o,u){Ls?Ns?Ns.push(u):Ns=[u]:Ls=u,i=Sc(i,"onChange"),0<i.length&&(o=new Ou("onChange","change",null,o,u),n.push({event:o,listeners:i}))}var $o=null,tl=null;function eE(n){Sv(n,0)}function zu(n){var i=Vr(n);if(ye(i))return n}function V_(n,i){if(n==="change")return i}var k_=!1;if(va){var Qf;if(va){var Jf="oninput"in document;if(!Jf){var X_=document.createElement("div");X_.setAttribute("oninput","return;"),Jf=typeof X_.oninput=="function"}Qf=Jf}else Qf=!1;k_=Qf&&(!document.documentMode||9<document.documentMode)}function W_(){$o&&($o.detachEvent("onpropertychange",q_),tl=$o=null)}function q_(n){if(n.propertyName==="value"&&zu(tl)){var i=[];G_(i,tl,n,Vf(n)),C_(eE,i)}}function nE(n,i,o){n==="focusin"?(W_(),$o=i,tl=o,$o.attachEvent("onpropertychange",q_)):n==="focusout"&&W_()}function iE(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return zu(tl)}function aE(n,i){if(n==="click")return zu(i)}function rE(n,i){if(n==="input"||n==="change")return zu(i)}function sE(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ci=typeof Object.is=="function"?Object.is:sE;function el(n,i){if(ci(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var h=o[u];if(!Ve.call(i,h)||!ci(n[h],i[h]))return!1}return!0}function Y_(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function j_(n,i){var o=Y_(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=i&&u>=i)return{node:o,offset:i-n};n=u}t:{for(;o;){if(o.nextSibling){o=o.nextSibling;break t}o=o.parentNode}o=void 0}o=Y_(o)}}function Z_(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Z_(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function K_(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var i=Tn(n.document);i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=Tn(n.document)}return i}function $f(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}var oE=va&&"documentMode"in document&&11>=document.documentMode,Ps=null,th=null,nl=null,eh=!1;function Q_(n,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;eh||Ps==null||Ps!==Tn(u)||(u=Ps,"selectionStart"in u&&$f(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),nl&&el(nl,u)||(nl=u,u=Sc(th,"onSelect"),0<u.length&&(i=new Ou("onSelect","select",null,i,o),n.push({event:i,listeners:u}),i.target=Ps)))}function Xr(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var zs={animationend:Xr("Animation","AnimationEnd"),animationiteration:Xr("Animation","AnimationIteration"),animationstart:Xr("Animation","AnimationStart"),transitionrun:Xr("Transition","TransitionRun"),transitionstart:Xr("Transition","TransitionStart"),transitioncancel:Xr("Transition","TransitionCancel"),transitionend:Xr("Transition","TransitionEnd")},nh={},J_={};va&&(J_=document.createElement("div").style,"AnimationEvent"in window||(delete zs.animationend.animation,delete zs.animationiteration.animation,delete zs.animationstart.animation),"TransitionEvent"in window||delete zs.transitionend.transition);function Wr(n){if(nh[n])return nh[n];if(!zs[n])return n;var i=zs[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in J_)return nh[n]=i[o];return n}var $_=Wr("animationend"),tg=Wr("animationiteration"),eg=Wr("animationstart"),lE=Wr("transitionrun"),uE=Wr("transitionstart"),cE=Wr("transitioncancel"),ng=Wr("transitionend"),ig=new Map,ih="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ih.push("scrollEnd");function Hi(n,i){ig.set(n,i),ma(i,[n])}var ag=new WeakMap;function Ri(n,i){if(typeof n=="object"&&n!==null){var o=ag.get(n);return o!==void 0?o:(i={value:n,source:i,stack:Ze(i)},ag.set(n,i),i)}return{value:n,source:i,stack:Ze(i)}}var wi=[],Is=0,ah=0;function Iu(){for(var n=Is,i=ah=Is=0;i<n;){var o=wi[i];wi[i++]=null;var u=wi[i];wi[i++]=null;var h=wi[i];wi[i++]=null;var _=wi[i];if(wi[i++]=null,u!==null&&h!==null){var T=u.pending;T===null?h.next=h:(h.next=T.next,T.next=h),u.pending=h}_!==0&&rg(o,h,_)}}function Bu(n,i,o,u){wi[Is++]=n,wi[Is++]=i,wi[Is++]=o,wi[Is++]=u,ah|=u,n.lanes|=u,n=n.alternate,n!==null&&(n.lanes|=u)}function rh(n,i,o,u){return Bu(n,i,o,u),Fu(n)}function Bs(n,i){return Bu(n,null,null,i),Fu(n)}function rg(n,i,o){n.lanes|=o;var u=n.alternate;u!==null&&(u.lanes|=o);for(var h=!1,_=n.return;_!==null;)_.childLanes|=o,u=_.alternate,u!==null&&(u.childLanes|=o),_.tag===22&&(n=_.stateNode,n===null||n._visibility&1||(h=!0)),n=_,_=_.return;return n.tag===3?(_=n.stateNode,h&&i!==null&&(h=31-Pt(o),n=_.hiddenUpdates,u=n[h],u===null?n[h]=[i]:u.push(i),i.lane=o|536870912),_):null}function Fu(n){if(50<Rl)throw Rl=0,fd=null,Error(a(185));for(var i=n.return;i!==null;)n=i,i=n.return;return n.tag===3?n.stateNode:null}var Fs={};function fE(n,i,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fi(n,i,o,u){return new fE(n,i,o,u)}function sh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function xa(n,i){var o=n.alternate;return o===null?(o=fi(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&65011712,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o.refCleanup=n.refCleanup,o}function sg(n,i){n.flags&=65011714;var o=n.alternate;return o===null?(n.childLanes=0,n.lanes=i,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=o.childLanes,n.lanes=o.lanes,n.child=o.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=o.memoizedProps,n.memoizedState=o.memoizedState,n.updateQueue=o.updateQueue,n.type=o.type,i=o.dependencies,n.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),n}function Hu(n,i,o,u,h,_){var T=0;if(u=n,typeof n=="function")sh(n)&&(T=1);else if(typeof n=="string")T=dT(n,o,Y.current)?26:n==="html"||n==="head"||n==="body"?27:5;else t:switch(n){case A:return n=fi(31,o,i,h),n.elementType=A,n.lanes=_,n;case E:return qr(o.children,h,_,i);case M:T=8,h|=24;break;case y:return n=fi(12,o,i,h|2),n.elementType=y,n.lanes=_,n;case N:return n=fi(13,o,i,h),n.elementType=N,n.lanes=_,n;case I:return n=fi(19,o,i,h),n.elementType=I,n.lanes=_,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case x:case C:T=10;break t;case w:T=9;break t;case b:T=11;break t;case P:T=14;break t;case F:T=16,u=null;break t}T=29,o=Error(a(130,n===null?"null":typeof n,"")),u=null}return i=fi(T,o,i,h),i.elementType=n,i.type=u,i.lanes=_,i}function qr(n,i,o,u){return n=fi(7,n,u,i),n.lanes=o,n}function oh(n,i,o){return n=fi(6,n,null,i),n.lanes=o,n}function lh(n,i,o){return i=fi(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}var Hs=[],Gs=0,Gu=null,Vu=0,Ci=[],Di=0,Yr=null,ya=1,Sa="";function jr(n,i){Hs[Gs++]=Vu,Hs[Gs++]=Gu,Gu=n,Vu=i}function og(n,i,o){Ci[Di++]=ya,Ci[Di++]=Sa,Ci[Di++]=Yr,Yr=n;var u=ya;n=Sa;var h=32-Pt(u)-1;u&=~(1<<h),o+=1;var _=32-Pt(i)+h;if(30<_){var T=h-h%5;_=(u&(1<<T)-1).toString(32),u>>=T,h-=T,ya=1<<32-Pt(i)+h|o<<h|u,Sa=_+n}else ya=1<<_|o<<h|u,Sa=n}function uh(n){n.return!==null&&(jr(n,1),og(n,1,0))}function ch(n){for(;n===Gu;)Gu=Hs[--Gs],Hs[Gs]=null,Vu=Hs[--Gs],Hs[Gs]=null;for(;n===Yr;)Yr=Ci[--Di],Ci[Di]=null,Sa=Ci[--Di],Ci[Di]=null,ya=Ci[--Di],Ci[Di]=null}var qn=null,an=null,Ce=!1,Zr=null,Ji=!1,fh=Error(a(519));function Kr(n){var i=Error(a(418,""));throw rl(Ri(i,n)),fh}function lg(n){var i=n.stateNode,o=n.type,u=n.memoizedProps;switch(i[gn]=n,i[Ln]=u,o){case"dialog":_e("cancel",i),_e("close",i);break;case"iframe":case"object":case"embed":_e("load",i);break;case"video":case"audio":for(o=0;o<Cl.length;o++)_e(Cl[o],i);break;case"source":_e("error",i);break;case"img":case"image":case"link":_e("error",i),_e("load",i);break;case"details":_e("toggle",i);break;case"input":_e("invalid",i),ke(i,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),ze(i);break;case"select":_e("invalid",i);break;case"textarea":_e("invalid",i),Nn(i,u.value,u.defaultValue,u.children),ze(i)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||i.textContent===""+o||u.suppressHydrationWarning===!0||bv(i.textContent,o)?(u.popover!=null&&(_e("beforetoggle",i),_e("toggle",i)),u.onScroll!=null&&_e("scroll",i),u.onScrollEnd!=null&&_e("scrollend",i),u.onClick!=null&&(i.onclick=Mc),i=!0):i=!1,i||Kr(n)}function ug(n){for(qn=n.return;qn;)switch(qn.tag){case 5:case 13:Ji=!1;return;case 27:case 3:Ji=!0;return;default:qn=qn.return}}function il(n){if(n!==qn)return!1;if(!Ce)return ug(n),Ce=!0,!1;var i=n.tag,o;if((o=i!==3&&i!==27)&&((o=i===5)&&(o=n.type,o=!(o!=="form"&&o!=="button")||Rd(n.type,n.memoizedProps)),o=!o),o&&an&&Kr(n),ug(n),i===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(a(317));t:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8)if(o=n.data,o==="/$"){if(i===0){an=Vi(n.nextSibling);break t}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++;n=n.nextSibling}an=null}}else i===27?(i=an,mr(n.type)?(n=Ud,Ud=null,an=n):an=i):an=qn?Vi(n.stateNode.nextSibling):null;return!0}function al(){an=qn=null,Ce=!1}function cg(){var n=Zr;return n!==null&&($n===null?$n=n:$n.push.apply($n,n),Zr=null),n}function rl(n){Zr===null?Zr=[n]:Zr.push(n)}var hh=Z(null),Qr=null,Ma=null;function tr(n,i,o){St(hh,i._currentValue),i._currentValue=o}function Ea(n){n._currentValue=hh.current,gt(hh)}function dh(n,i,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===o)break;n=n.return}}function ph(n,i,o,u){var h=n.child;for(h!==null&&(h.return=n);h!==null;){var _=h.dependencies;if(_!==null){var T=h.child;_=_.firstContext;t:for(;_!==null;){var D=_;_=h;for(var H=0;H<i.length;H++)if(D.context===i[H]){_.lanes|=o,D=_.alternate,D!==null&&(D.lanes|=o),dh(_.return,o,n),u||(T=null);break t}_=D.next}}else if(h.tag===18){if(T=h.return,T===null)throw Error(a(341));T.lanes|=o,_=T.alternate,_!==null&&(_.lanes|=o),dh(T,o,n),T=null}else T=h.child;if(T!==null)T.return=h;else for(T=h;T!==null;){if(T===n){T=null;break}if(h=T.sibling,h!==null){h.return=T.return,T=h;break}T=T.return}h=T}}function sl(n,i,o,u){n=null;for(var h=i,_=!1;h!==null;){if(!_){if((h.flags&524288)!==0)_=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var T=h.alternate;if(T===null)throw Error(a(387));if(T=T.memoizedProps,T!==null){var D=h.type;ci(h.pendingProps.value,T.value)||(n!==null?n.push(D):n=[D])}}else if(h===Rt.current){if(T=h.alternate,T===null)throw Error(a(387));T.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(n!==null?n.push(Pl):n=[Pl])}h=h.return}n!==null&&ph(i,n,o,u),i.flags|=262144}function ku(n){for(n=n.firstContext;n!==null;){if(!ci(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Jr(n){Qr=n,Ma=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Hn(n){return fg(Qr,n)}function Xu(n,i){return Qr===null&&Jr(n),fg(n,i)}function fg(n,i){var o=i._currentValue;if(i={context:i,memoizedValue:o,next:null},Ma===null){if(n===null)throw Error(a(308));Ma=i,n.dependencies={lanes:0,firstContext:i},n.flags|=524288}else Ma=Ma.next=i;return o}var hE=typeof AbortController<"u"?AbortController:function(){var n=[],i=this.signal={aborted:!1,addEventListener:function(o,u){n.push(u)}};this.abort=function(){i.aborted=!0,n.forEach(function(o){return o()})}},dE=s.unstable_scheduleCallback,pE=s.unstable_NormalPriority,xn={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function mh(){return{controller:new hE,data:new Map,refCount:0}}function ol(n){n.refCount--,n.refCount===0&&dE(pE,function(){n.controller.abort()})}var ll=null,_h=0,Vs=0,ks=null;function mE(n,i){if(ll===null){var o=ll=[];_h=0,Vs=vd(),ks={status:"pending",value:void 0,then:function(u){o.push(u)}}}return _h++,i.then(hg,hg),i}function hg(){if(--_h===0&&ll!==null){ks!==null&&(ks.status="fulfilled");var n=ll;ll=null,Vs=0,ks=null;for(var i=0;i<n.length;i++)(0,n[i])()}}function _E(n,i){var o=[],u={status:"pending",value:null,reason:null,then:function(h){o.push(h)}};return n.then(function(){u.status="fulfilled",u.value=i;for(var h=0;h<o.length;h++)(0,o[h])(i)},function(h){for(u.status="rejected",u.reason=h,h=0;h<o.length;h++)(0,o[h])(void 0)}),u}var dg=z.S;z.S=function(n,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&mE(n,i),dg!==null&&dg(n,i)};var $r=Z(null);function gh(){var n=$r.current;return n!==null?n:je.pooledCache}function Wu(n,i){i===null?St($r,$r.current):St($r,i.pool)}function pg(){var n=gh();return n===null?null:{parent:xn._currentValue,pool:n}}var ul=Error(a(460)),mg=Error(a(474)),qu=Error(a(542)),vh={then:function(){}};function _g(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Yu(){}function gg(n,i,o){switch(o=n[o],o===void 0?n.push(i):o!==i&&(i.then(Yu,Yu),i=o),i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,xg(n),n;default:if(typeof i.status=="string")i.then(Yu,Yu);else{if(n=je,n!==null&&100<n.shellSuspendCounter)throw Error(a(482));n=i,n.status="pending",n.then(function(u){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=u}},function(u){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=u}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,xg(n),n}throw cl=i,ul}}var cl=null;function vg(){if(cl===null)throw Error(a(459));var n=cl;return cl=null,n}function xg(n){if(n===ul||n===qu)throw Error(a(483))}var er=!1;function xh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function yh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function nr(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function ir(n,i,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Oe&2)!==0){var h=u.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),u.pending=i,i=Fu(n),rg(n,null,o),i}return Bu(n,u,i,o),Fu(n)}function fl(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194048)!==0)){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,Ft(n,o)}}function Sh(n,i){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var h=null,_=null;if(o=o.firstBaseUpdate,o!==null){do{var T={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};_===null?h=_=T:_=_.next=T,o=o.next}while(o!==null);_===null?h=_=i:_=_.next=i}else h=_=i;o={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:_,shared:u.shared,callbacks:u.callbacks},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}var Mh=!1;function hl(){if(Mh){var n=ks;if(n!==null)throw n}}function dl(n,i,o,u){Mh=!1;var h=n.updateQueue;er=!1;var _=h.firstBaseUpdate,T=h.lastBaseUpdate,D=h.shared.pending;if(D!==null){h.shared.pending=null;var H=D,et=H.next;H.next=null,T===null?_=et:T.next=et,T=H;var dt=n.alternate;dt!==null&&(dt=dt.updateQueue,D=dt.lastBaseUpdate,D!==T&&(D===null?dt.firstBaseUpdate=et:D.next=et,dt.lastBaseUpdate=H))}if(_!==null){var xt=h.baseState;T=0,dt=et=H=null,D=_;do{var at=D.lane&-536870913,rt=at!==D.lane;if(rt?(Ee&at)===at:(u&at)===at){at!==0&&at===Vs&&(Mh=!0),dt!==null&&(dt=dt.next={lane:0,tag:D.tag,payload:D.payload,callback:null,next:null});t:{var ne=n,Jt=D;at=i;var Fe=o;switch(Jt.tag){case 1:if(ne=Jt.payload,typeof ne=="function"){xt=ne.call(Fe,xt,at);break t}xt=ne;break t;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=Jt.payload,at=typeof ne=="function"?ne.call(Fe,xt,at):ne,at==null)break t;xt=m({},xt,at);break t;case 2:er=!0}}at=D.callback,at!==null&&(n.flags|=64,rt&&(n.flags|=8192),rt=h.callbacks,rt===null?h.callbacks=[at]:rt.push(at))}else rt={lane:at,tag:D.tag,payload:D.payload,callback:D.callback,next:null},dt===null?(et=dt=rt,H=xt):dt=dt.next=rt,T|=at;if(D=D.next,D===null){if(D=h.shared.pending,D===null)break;rt=D,D=rt.next,rt.next=null,h.lastBaseUpdate=rt,h.shared.pending=null}}while(!0);dt===null&&(H=xt),h.baseState=H,h.firstBaseUpdate=et,h.lastBaseUpdate=dt,_===null&&(h.shared.lanes=0),fr|=T,n.lanes=T,n.memoizedState=xt}}function yg(n,i){if(typeof n!="function")throw Error(a(191,n));n.call(i)}function Sg(n,i){var o=n.callbacks;if(o!==null)for(n.callbacks=null,n=0;n<o.length;n++)yg(o[n],i)}var Xs=Z(null),ju=Z(0);function Mg(n,i){n=Da,St(ju,n),St(Xs,i),Da=n|i.baseLanes}function Eh(){St(ju,Da),St(Xs,Xs.current)}function Th(){Da=ju.current,gt(Xs),gt(ju)}var ar=0,ce=null,Ie=null,hn=null,Zu=!1,Ws=!1,ts=!1,Ku=0,pl=0,qs=null,gE=0;function ln(){throw Error(a(321))}function bh(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!ci(n[o],i[o]))return!1;return!0}function Ah(n,i,o,u,h,_){return ar=_,ce=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,z.H=n===null||n.memoizedState===null?r0:s0,ts=!1,_=o(u,h),ts=!1,Ws&&(_=Tg(i,o,u,h)),Eg(n),_}function Eg(n){z.H=nc;var i=Ie!==null&&Ie.next!==null;if(ar=0,hn=Ie=ce=null,Zu=!1,pl=0,qs=null,i)throw Error(a(300));n===null||An||(n=n.dependencies,n!==null&&ku(n)&&(An=!0))}function Tg(n,i,o,u){ce=n;var h=0;do{if(Ws&&(qs=null),pl=0,Ws=!1,25<=h)throw Error(a(301));if(h+=1,hn=Ie=null,n.updateQueue!=null){var _=n.updateQueue;_.lastEffect=null,_.events=null,_.stores=null,_.memoCache!=null&&(_.memoCache.index=0)}z.H=TE,_=i(o,u)}while(Ws);return _}function vE(){var n=z.H,i=n.useState()[0];return i=typeof i.then=="function"?ml(i):i,n=n.useState()[0],(Ie!==null?Ie.memoizedState:null)!==n&&(ce.flags|=1024),i}function Rh(){var n=Ku!==0;return Ku=0,n}function wh(n,i,o){i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~o}function Ch(n){if(Zu){for(n=n.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Zu=!1}ar=0,hn=Ie=ce=null,Ws=!1,pl=Ku=0,qs=null}function Qn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?ce.memoizedState=hn=n:hn=hn.next=n,hn}function dn(){if(Ie===null){var n=ce.alternate;n=n!==null?n.memoizedState:null}else n=Ie.next;var i=hn===null?ce.memoizedState:hn.next;if(i!==null)hn=i,Ie=n;else{if(n===null)throw ce.alternate===null?Error(a(467)):Error(a(310));Ie=n,n={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},hn===null?ce.memoizedState=hn=n:hn=hn.next=n}return hn}function Dh(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ml(n){var i=pl;return pl+=1,qs===null&&(qs=[]),n=gg(qs,n,i),i=ce,(hn===null?i.memoizedState:hn.next)===null&&(i=i.alternate,z.H=i===null||i.memoizedState===null?r0:s0),n}function Qu(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return ml(n);if(n.$$typeof===C)return Hn(n)}throw Error(a(438,String(n)))}function Uh(n){var i=null,o=ce.updateQueue;if(o!==null&&(i=o.memoCache),i==null){var u=ce.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(i={data:u.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),o===null&&(o=Dh(),ce.updateQueue=o),o.memoCache=i,o=i.data[i.index],o===void 0)for(o=i.data[i.index]=Array(n),u=0;u<n;u++)o[u]=U;return i.index++,o}function Ta(n,i){return typeof i=="function"?i(n):i}function Ju(n){var i=dn();return Lh(i,Ie,n)}function Lh(n,i,o){var u=n.queue;if(u===null)throw Error(a(311));u.lastRenderedReducer=o;var h=n.baseQueue,_=u.pending;if(_!==null){if(h!==null){var T=h.next;h.next=_.next,_.next=T}i.baseQueue=h=_,u.pending=null}if(_=n.baseState,h===null)n.memoizedState=_;else{i=h.next;var D=T=null,H=null,et=i,dt=!1;do{var xt=et.lane&-536870913;if(xt!==et.lane?(Ee&xt)===xt:(ar&xt)===xt){var at=et.revertLane;if(at===0)H!==null&&(H=H.next={lane:0,revertLane:0,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),xt===Vs&&(dt=!0);else if((ar&at)===at){et=et.next,at===Vs&&(dt=!0);continue}else xt={lane:0,revertLane:et.revertLane,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},H===null?(D=H=xt,T=_):H=H.next=xt,ce.lanes|=at,fr|=at;xt=et.action,ts&&o(_,xt),_=et.hasEagerState?et.eagerState:o(_,xt)}else at={lane:xt,revertLane:et.revertLane,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},H===null?(D=H=at,T=_):H=H.next=at,ce.lanes|=xt,fr|=xt;et=et.next}while(et!==null&&et!==i);if(H===null?T=_:H.next=D,!ci(_,n.memoizedState)&&(An=!0,dt&&(o=ks,o!==null)))throw o;n.memoizedState=_,n.baseState=T,n.baseQueue=H,u.lastRenderedState=_}return h===null&&(u.lanes=0),[n.memoizedState,u.dispatch]}function Nh(n){var i=dn(),o=i.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=n;var u=o.dispatch,h=o.pending,_=i.memoizedState;if(h!==null){o.pending=null;var T=h=h.next;do _=n(_,T.action),T=T.next;while(T!==h);ci(_,i.memoizedState)||(An=!0),i.memoizedState=_,i.baseQueue===null&&(i.baseState=_),o.lastRenderedState=_}return[_,u]}function bg(n,i,o){var u=ce,h=dn(),_=Ce;if(_){if(o===void 0)throw Error(a(407));o=o()}else o=i();var T=!ci((Ie||h).memoizedState,o);T&&(h.memoizedState=o,An=!0),h=h.queue;var D=wg.bind(null,u,h,n);if(_l(2048,8,D,[n]),h.getSnapshot!==i||T||hn!==null&&hn.memoizedState.tag&1){if(u.flags|=2048,Ys(9,$u(),Rg.bind(null,u,h,o,i),null),je===null)throw Error(a(349));_||(ar&124)!==0||Ag(u,i,o)}return o}function Ag(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=ce.updateQueue,i===null?(i=Dh(),ce.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function Rg(n,i,o,u){i.value=o,i.getSnapshot=u,Cg(i)&&Dg(n)}function wg(n,i,o){return o(function(){Cg(i)&&Dg(n)})}function Cg(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!ci(n,o)}catch{return!0}}function Dg(n){var i=Bs(n,2);i!==null&&_i(i,n,2)}function Oh(n){var i=Qn();if(typeof n=="function"){var o=n;if(n=o(),ts){ft(!0);try{o()}finally{ft(!1)}}}return i.memoizedState=i.baseState=n,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:n},i}function Ug(n,i,o,u){return n.baseState=o,Lh(n,Ie,typeof u=="function"?u:Ta)}function xE(n,i,o,u,h){if(ec(n))throw Error(a(485));if(n=i.action,n!==null){var _={payload:h,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(T){_.listeners.push(T)}};z.T!==null?o(!0):_.isTransition=!1,u(_),o=i.pending,o===null?(_.next=i.pending=_,Lg(i,_)):(_.next=o.next,i.pending=o.next=_)}}function Lg(n,i){var o=i.action,u=i.payload,h=n.state;if(i.isTransition){var _=z.T,T={};z.T=T;try{var D=o(h,u),H=z.S;H!==null&&H(T,D),Ng(n,i,D)}catch(et){Ph(n,i,et)}finally{z.T=_}}else try{_=o(h,u),Ng(n,i,_)}catch(et){Ph(n,i,et)}}function Ng(n,i,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){Og(n,i,u)},function(u){return Ph(n,i,u)}):Og(n,i,o)}function Og(n,i,o){i.status="fulfilled",i.value=o,Pg(i),n.state=o,i=n.pending,i!==null&&(o=i.next,o===i?n.pending=null:(o=o.next,i.next=o,Lg(n,o)))}function Ph(n,i,o){var u=n.pending;if(n.pending=null,u!==null){u=u.next;do i.status="rejected",i.reason=o,Pg(i),i=i.next;while(i!==u)}n.action=null}function Pg(n){n=n.listeners;for(var i=0;i<n.length;i++)(0,n[i])()}function zg(n,i){return i}function Ig(n,i){if(Ce){var o=je.formState;if(o!==null){t:{var u=ce;if(Ce){if(an){e:{for(var h=an,_=Ji;h.nodeType!==8;){if(!_){h=null;break e}if(h=Vi(h.nextSibling),h===null){h=null;break e}}_=h.data,h=_==="F!"||_==="F"?h:null}if(h){an=Vi(h.nextSibling),u=h.data==="F!";break t}}Kr(u)}u=!1}u&&(i=o[0])}}return o=Qn(),o.memoizedState=o.baseState=i,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zg,lastRenderedState:i},o.queue=u,o=n0.bind(null,ce,u),u.dispatch=o,u=Oh(!1),_=Hh.bind(null,ce,!1,u.queue),u=Qn(),h={state:i,dispatch:null,action:n,pending:null},u.queue=h,o=xE.bind(null,ce,h,_,o),h.dispatch=o,u.memoizedState=n,[i,o,!1]}function Bg(n){var i=dn();return Fg(i,Ie,n)}function Fg(n,i,o){if(i=Lh(n,i,zg)[0],n=Ju(Ta)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var u=ml(i)}catch(T){throw T===ul?qu:T}else u=i;i=dn();var h=i.queue,_=h.dispatch;return o!==i.memoizedState&&(ce.flags|=2048,Ys(9,$u(),yE.bind(null,h,o),null)),[u,_,n]}function yE(n,i){n.action=i}function Hg(n){var i=dn(),o=Ie;if(o!==null)return Fg(i,o,n);dn(),i=i.memoizedState,o=dn();var u=o.queue.dispatch;return o.memoizedState=n,[i,u,!1]}function Ys(n,i,o,u){return n={tag:n,create:o,deps:u,inst:i,next:null},i=ce.updateQueue,i===null&&(i=Dh(),ce.updateQueue=i),o=i.lastEffect,o===null?i.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,i.lastEffect=n),n}function $u(){return{destroy:void 0,resource:void 0}}function Gg(){return dn().memoizedState}function tc(n,i,o,u){var h=Qn();u=u===void 0?null:u,ce.flags|=n,h.memoizedState=Ys(1|i,$u(),o,u)}function _l(n,i,o,u){var h=dn();u=u===void 0?null:u;var _=h.memoizedState.inst;Ie!==null&&u!==null&&bh(u,Ie.memoizedState.deps)?h.memoizedState=Ys(i,_,o,u):(ce.flags|=n,h.memoizedState=Ys(1|i,_,o,u))}function Vg(n,i){tc(8390656,8,n,i)}function kg(n,i){_l(2048,8,n,i)}function Xg(n,i){return _l(4,2,n,i)}function Wg(n,i){return _l(4,4,n,i)}function qg(n,i){if(typeof i=="function"){n=n();var o=i(n);return function(){typeof o=="function"?o():i(null)}}if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Yg(n,i,o){o=o!=null?o.concat([n]):null,_l(4,4,qg.bind(null,i,n),o)}function zh(){}function jg(n,i){var o=dn();i=i===void 0?null:i;var u=o.memoizedState;return i!==null&&bh(i,u[1])?u[0]:(o.memoizedState=[n,i],n)}function Zg(n,i){var o=dn();i=i===void 0?null:i;var u=o.memoizedState;if(i!==null&&bh(i,u[1]))return u[0];if(u=n(),ts){ft(!0);try{n()}finally{ft(!1)}}return o.memoizedState=[u,i],u}function Ih(n,i,o){return o===void 0||(ar&1073741824)!==0?n.memoizedState=i:(n.memoizedState=o,n=J0(),ce.lanes|=n,fr|=n,o)}function Kg(n,i,o,u){return ci(o,i)?o:Xs.current!==null?(n=Ih(n,o,u),ci(n,i)||(An=!0),n):(ar&42)===0?(An=!0,n.memoizedState=o):(n=J0(),ce.lanes|=n,fr|=n,i)}function Qg(n,i,o,u,h){var _=k.p;k.p=_!==0&&8>_?_:8;var T=z.T,D={};z.T=D,Hh(n,!1,i,o);try{var H=h(),et=z.S;if(et!==null&&et(D,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var dt=_E(H,u);gl(n,i,dt,mi(n))}else gl(n,i,u,mi(n))}catch(xt){gl(n,i,{then:function(){},status:"rejected",reason:xt},mi())}finally{k.p=_,z.T=T}}function SE(){}function Bh(n,i,o,u){if(n.tag!==5)throw Error(a(476));var h=Jg(n).queue;Qg(n,h,i,W,o===null?SE:function(){return $g(n),o(u)})}function Jg(n){var i=n.memoizedState;if(i!==null)return i;i={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:W},next:null};var o={};return i.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:o},next:null},n.memoizedState=i,n=n.alternate,n!==null&&(n.memoizedState=i),i}function $g(n){var i=Jg(n).next.queue;gl(n,i,{},mi())}function Fh(){return Hn(Pl)}function t0(){return dn().memoizedState}function e0(){return dn().memoizedState}function ME(n){for(var i=n.return;i!==null;){switch(i.tag){case 24:case 3:var o=mi();n=nr(o);var u=ir(i,n,o);u!==null&&(_i(u,i,o),fl(u,i,o)),i={cache:mh()},n.payload=i;return}i=i.return}}function EE(n,i,o){var u=mi();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},ec(n)?i0(i,o):(o=rh(n,i,o,u),o!==null&&(_i(o,n,u),a0(o,i,u)))}function n0(n,i,o){var u=mi();gl(n,i,o,u)}function gl(n,i,o,u){var h={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(ec(n))i0(i,h);else{var _=n.alternate;if(n.lanes===0&&(_===null||_.lanes===0)&&(_=i.lastRenderedReducer,_!==null))try{var T=i.lastRenderedState,D=_(T,o);if(h.hasEagerState=!0,h.eagerState=D,ci(D,T))return Bu(n,i,h,0),je===null&&Iu(),!1}catch{}finally{}if(o=rh(n,i,h,u),o!==null)return _i(o,n,u),a0(o,i,u),!0}return!1}function Hh(n,i,o,u){if(u={lane:2,revertLane:vd(),action:u,hasEagerState:!1,eagerState:null,next:null},ec(n)){if(i)throw Error(a(479))}else i=rh(n,o,u,2),i!==null&&_i(i,n,2)}function ec(n){var i=n.alternate;return n===ce||i!==null&&i===ce}function i0(n,i){Ws=Zu=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function a0(n,i,o){if((o&4194048)!==0){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,Ft(n,o)}}var nc={readContext:Hn,use:Qu,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useLayoutEffect:ln,useInsertionEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useSyncExternalStore:ln,useId:ln,useHostTransitionStatus:ln,useFormState:ln,useActionState:ln,useOptimistic:ln,useMemoCache:ln,useCacheRefresh:ln},r0={readContext:Hn,use:Qu,useCallback:function(n,i){return Qn().memoizedState=[n,i===void 0?null:i],n},useContext:Hn,useEffect:Vg,useImperativeHandle:function(n,i,o){o=o!=null?o.concat([n]):null,tc(4194308,4,qg.bind(null,i,n),o)},useLayoutEffect:function(n,i){return tc(4194308,4,n,i)},useInsertionEffect:function(n,i){tc(4,2,n,i)},useMemo:function(n,i){var o=Qn();i=i===void 0?null:i;var u=n();if(ts){ft(!0);try{n()}finally{ft(!1)}}return o.memoizedState=[u,i],u},useReducer:function(n,i,o){var u=Qn();if(o!==void 0){var h=o(i);if(ts){ft(!0);try{o(i)}finally{ft(!1)}}}else h=i;return u.memoizedState=u.baseState=h,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:h},u.queue=n,n=n.dispatch=EE.bind(null,ce,n),[u.memoizedState,n]},useRef:function(n){var i=Qn();return n={current:n},i.memoizedState=n},useState:function(n){n=Oh(n);var i=n.queue,o=n0.bind(null,ce,i);return i.dispatch=o,[n.memoizedState,o]},useDebugValue:zh,useDeferredValue:function(n,i){var o=Qn();return Ih(o,n,i)},useTransition:function(){var n=Oh(!1);return n=Qg.bind(null,ce,n.queue,!0,!1),Qn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,i,o){var u=ce,h=Qn();if(Ce){if(o===void 0)throw Error(a(407));o=o()}else{if(o=i(),je===null)throw Error(a(349));(Ee&124)!==0||Ag(u,i,o)}h.memoizedState=o;var _={value:o,getSnapshot:i};return h.queue=_,Vg(wg.bind(null,u,_,n),[n]),u.flags|=2048,Ys(9,$u(),Rg.bind(null,u,_,o,i),null),o},useId:function(){var n=Qn(),i=je.identifierPrefix;if(Ce){var o=Sa,u=ya;o=(u&~(1<<32-Pt(u)-1)).toString(32)+o,i="«"+i+"R"+o,o=Ku++,0<o&&(i+="H"+o.toString(32)),i+="»"}else o=gE++,i="«"+i+"r"+o.toString(32)+"»";return n.memoizedState=i},useHostTransitionStatus:Fh,useFormState:Ig,useActionState:Ig,useOptimistic:function(n){var i=Qn();i.memoizedState=i.baseState=n;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=o,i=Hh.bind(null,ce,!0,o),o.dispatch=i,[n,i]},useMemoCache:Uh,useCacheRefresh:function(){return Qn().memoizedState=ME.bind(null,ce)}},s0={readContext:Hn,use:Qu,useCallback:jg,useContext:Hn,useEffect:kg,useImperativeHandle:Yg,useInsertionEffect:Xg,useLayoutEffect:Wg,useMemo:Zg,useReducer:Ju,useRef:Gg,useState:function(){return Ju(Ta)},useDebugValue:zh,useDeferredValue:function(n,i){var o=dn();return Kg(o,Ie.memoizedState,n,i)},useTransition:function(){var n=Ju(Ta)[0],i=dn().memoizedState;return[typeof n=="boolean"?n:ml(n),i]},useSyncExternalStore:bg,useId:t0,useHostTransitionStatus:Fh,useFormState:Bg,useActionState:Bg,useOptimistic:function(n,i){var o=dn();return Ug(o,Ie,n,i)},useMemoCache:Uh,useCacheRefresh:e0},TE={readContext:Hn,use:Qu,useCallback:jg,useContext:Hn,useEffect:kg,useImperativeHandle:Yg,useInsertionEffect:Xg,useLayoutEffect:Wg,useMemo:Zg,useReducer:Nh,useRef:Gg,useState:function(){return Nh(Ta)},useDebugValue:zh,useDeferredValue:function(n,i){var o=dn();return Ie===null?Ih(o,n,i):Kg(o,Ie.memoizedState,n,i)},useTransition:function(){var n=Nh(Ta)[0],i=dn().memoizedState;return[typeof n=="boolean"?n:ml(n),i]},useSyncExternalStore:bg,useId:t0,useHostTransitionStatus:Fh,useFormState:Hg,useActionState:Hg,useOptimistic:function(n,i){var o=dn();return Ie!==null?Ug(o,Ie,n,i):(o.baseState=n,[n,o.queue.dispatch])},useMemoCache:Uh,useCacheRefresh:e0},js=null,vl=0;function ic(n){var i=vl;return vl+=1,js===null&&(js=[]),gg(js,n,i)}function xl(n,i){i=i.props.ref,n.ref=i!==void 0?i:null}function ac(n,i){throw i.$$typeof===g?Error(a(525)):(n=Object.prototype.toString.call(i),Error(a(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n)))}function o0(n){var i=n._init;return i(n._payload)}function l0(n){function i(j,X){if(n){var tt=j.deletions;tt===null?(j.deletions=[X],j.flags|=16):tt.push(X)}}function o(j,X){if(!n)return null;for(;X!==null;)i(j,X),X=X.sibling;return null}function u(j){for(var X=new Map;j!==null;)j.key!==null?X.set(j.key,j):X.set(j.index,j),j=j.sibling;return X}function h(j,X){return j=xa(j,X),j.index=0,j.sibling=null,j}function _(j,X,tt){return j.index=tt,n?(tt=j.alternate,tt!==null?(tt=tt.index,tt<X?(j.flags|=67108866,X):tt):(j.flags|=67108866,X)):(j.flags|=1048576,X)}function T(j){return n&&j.alternate===null&&(j.flags|=67108866),j}function D(j,X,tt,_t){return X===null||X.tag!==6?(X=oh(tt,j.mode,_t),X.return=j,X):(X=h(X,tt),X.return=j,X)}function H(j,X,tt,_t){var Ht=tt.type;return Ht===E?dt(j,X,tt.props.children,_t,tt.key):X!==null&&(X.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===F&&o0(Ht)===X.type)?(X=h(X,tt.props),xl(X,tt),X.return=j,X):(X=Hu(tt.type,tt.key,tt.props,null,j.mode,_t),xl(X,tt),X.return=j,X)}function et(j,X,tt,_t){return X===null||X.tag!==4||X.stateNode.containerInfo!==tt.containerInfo||X.stateNode.implementation!==tt.implementation?(X=lh(tt,j.mode,_t),X.return=j,X):(X=h(X,tt.children||[]),X.return=j,X)}function dt(j,X,tt,_t,Ht){return X===null||X.tag!==7?(X=qr(tt,j.mode,_t,Ht),X.return=j,X):(X=h(X,tt),X.return=j,X)}function xt(j,X,tt){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=oh(""+X,j.mode,tt),X.return=j,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case v:return tt=Hu(X.type,X.key,X.props,null,j.mode,tt),xl(tt,X),tt.return=j,tt;case S:return X=lh(X,j.mode,tt),X.return=j,X;case F:var _t=X._init;return X=_t(X._payload),xt(j,X,tt)}if(lt(X)||nt(X))return X=qr(X,j.mode,tt,null),X.return=j,X;if(typeof X.then=="function")return xt(j,ic(X),tt);if(X.$$typeof===C)return xt(j,Xu(j,X),tt);ac(j,X)}return null}function at(j,X,tt,_t){var Ht=X!==null?X.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return Ht!==null?null:D(j,X,""+tt,_t);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case v:return tt.key===Ht?H(j,X,tt,_t):null;case S:return tt.key===Ht?et(j,X,tt,_t):null;case F:return Ht=tt._init,tt=Ht(tt._payload),at(j,X,tt,_t)}if(lt(tt)||nt(tt))return Ht!==null?null:dt(j,X,tt,_t,null);if(typeof tt.then=="function")return at(j,X,ic(tt),_t);if(tt.$$typeof===C)return at(j,X,Xu(j,tt),_t);ac(j,tt)}return null}function rt(j,X,tt,_t,Ht){if(typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint")return j=j.get(tt)||null,D(X,j,""+_t,Ht);if(typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case v:return j=j.get(_t.key===null?tt:_t.key)||null,H(X,j,_t,Ht);case S:return j=j.get(_t.key===null?tt:_t.key)||null,et(X,j,_t,Ht);case F:var de=_t._init;return _t=de(_t._payload),rt(j,X,tt,_t,Ht)}if(lt(_t)||nt(_t))return j=j.get(tt)||null,dt(X,j,_t,Ht,null);if(typeof _t.then=="function")return rt(j,X,tt,ic(_t),Ht);if(_t.$$typeof===C)return rt(j,X,tt,Xu(X,_t),Ht);ac(X,_t)}return null}function ne(j,X,tt,_t){for(var Ht=null,de=null,qt=X,$t=X=0,wn=null;qt!==null&&$t<tt.length;$t++){qt.index>$t?(wn=qt,qt=null):wn=qt.sibling;var Re=at(j,qt,tt[$t],_t);if(Re===null){qt===null&&(qt=wn);break}n&&qt&&Re.alternate===null&&i(j,qt),X=_(Re,X,$t),de===null?Ht=Re:de.sibling=Re,de=Re,qt=wn}if($t===tt.length)return o(j,qt),Ce&&jr(j,$t),Ht;if(qt===null){for(;$t<tt.length;$t++)qt=xt(j,tt[$t],_t),qt!==null&&(X=_(qt,X,$t),de===null?Ht=qt:de.sibling=qt,de=qt);return Ce&&jr(j,$t),Ht}for(qt=u(qt);$t<tt.length;$t++)wn=rt(qt,j,$t,tt[$t],_t),wn!==null&&(n&&wn.alternate!==null&&qt.delete(wn.key===null?$t:wn.key),X=_(wn,X,$t),de===null?Ht=wn:de.sibling=wn,de=wn);return n&&qt.forEach(function(yr){return i(j,yr)}),Ce&&jr(j,$t),Ht}function Jt(j,X,tt,_t){if(tt==null)throw Error(a(151));for(var Ht=null,de=null,qt=X,$t=X=0,wn=null,Re=tt.next();qt!==null&&!Re.done;$t++,Re=tt.next()){qt.index>$t?(wn=qt,qt=null):wn=qt.sibling;var yr=at(j,qt,Re.value,_t);if(yr===null){qt===null&&(qt=wn);break}n&&qt&&yr.alternate===null&&i(j,qt),X=_(yr,X,$t),de===null?Ht=yr:de.sibling=yr,de=yr,qt=wn}if(Re.done)return o(j,qt),Ce&&jr(j,$t),Ht;if(qt===null){for(;!Re.done;$t++,Re=tt.next())Re=xt(j,Re.value,_t),Re!==null&&(X=_(Re,X,$t),de===null?Ht=Re:de.sibling=Re,de=Re);return Ce&&jr(j,$t),Ht}for(qt=u(qt);!Re.done;$t++,Re=tt.next())Re=rt(qt,j,$t,Re.value,_t),Re!==null&&(n&&Re.alternate!==null&&qt.delete(Re.key===null?$t:Re.key),X=_(Re,X,$t),de===null?Ht=Re:de.sibling=Re,de=Re);return n&&qt.forEach(function(bT){return i(j,bT)}),Ce&&jr(j,$t),Ht}function Fe(j,X,tt,_t){if(typeof tt=="object"&&tt!==null&&tt.type===E&&tt.key===null&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case v:t:{for(var Ht=tt.key;X!==null;){if(X.key===Ht){if(Ht=tt.type,Ht===E){if(X.tag===7){o(j,X.sibling),_t=h(X,tt.props.children),_t.return=j,j=_t;break t}}else if(X.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===F&&o0(Ht)===X.type){o(j,X.sibling),_t=h(X,tt.props),xl(_t,tt),_t.return=j,j=_t;break t}o(j,X);break}else i(j,X);X=X.sibling}tt.type===E?(_t=qr(tt.props.children,j.mode,_t,tt.key),_t.return=j,j=_t):(_t=Hu(tt.type,tt.key,tt.props,null,j.mode,_t),xl(_t,tt),_t.return=j,j=_t)}return T(j);case S:t:{for(Ht=tt.key;X!==null;){if(X.key===Ht)if(X.tag===4&&X.stateNode.containerInfo===tt.containerInfo&&X.stateNode.implementation===tt.implementation){o(j,X.sibling),_t=h(X,tt.children||[]),_t.return=j,j=_t;break t}else{o(j,X);break}else i(j,X);X=X.sibling}_t=lh(tt,j.mode,_t),_t.return=j,j=_t}return T(j);case F:return Ht=tt._init,tt=Ht(tt._payload),Fe(j,X,tt,_t)}if(lt(tt))return ne(j,X,tt,_t);if(nt(tt)){if(Ht=nt(tt),typeof Ht!="function")throw Error(a(150));return tt=Ht.call(tt),Jt(j,X,tt,_t)}if(typeof tt.then=="function")return Fe(j,X,ic(tt),_t);if(tt.$$typeof===C)return Fe(j,X,Xu(j,tt),_t);ac(j,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,X!==null&&X.tag===6?(o(j,X.sibling),_t=h(X,tt),_t.return=j,j=_t):(o(j,X),_t=oh(tt,j.mode,_t),_t.return=j,j=_t),T(j)):o(j,X)}return function(j,X,tt,_t){try{vl=0;var Ht=Fe(j,X,tt,_t);return js=null,Ht}catch(qt){if(qt===ul||qt===qu)throw qt;var de=fi(29,qt,null,j.mode);return de.lanes=_t,de.return=j,de}finally{}}}var Zs=l0(!0),u0=l0(!1),Ui=Z(null),$i=null;function rr(n){var i=n.alternate;St(yn,yn.current&1),St(Ui,n),$i===null&&(i===null||Xs.current!==null||i.memoizedState!==null)&&($i=n)}function c0(n){if(n.tag===22){if(St(yn,yn.current),St(Ui,n),$i===null){var i=n.alternate;i!==null&&i.memoizedState!==null&&($i=n)}}else sr()}function sr(){St(yn,yn.current),St(Ui,Ui.current)}function ba(n){gt(Ui),$i===n&&($i=null),gt(yn)}var yn=Z(0);function rc(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||Dd(o)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Gh(n,i,o,u){i=n.memoizedState,o=o(u,i),o=o==null?i:m({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Vh={enqueueSetState:function(n,i,o){n=n._reactInternals;var u=mi(),h=nr(u);h.payload=i,o!=null&&(h.callback=o),i=ir(n,h,u),i!==null&&(_i(i,n,u),fl(i,n,u))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var u=mi(),h=nr(u);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=ir(n,h,u),i!==null&&(_i(i,n,u),fl(i,n,u))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=mi(),u=nr(o);u.tag=2,i!=null&&(u.callback=i),i=ir(n,u,o),i!==null&&(_i(i,n,o),fl(i,n,o))}};function f0(n,i,o,u,h,_,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,_,T):i.prototype&&i.prototype.isPureReactComponent?!el(o,u)||!el(h,_):!0}function h0(n,i,o,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==n&&Vh.enqueueReplaceState(i,i.state,null)}function es(n,i){var o=i;if("ref"in i){o={};for(var u in i)u!=="ref"&&(o[u]=i[u])}if(n=n.defaultProps){o===i&&(o=m({},o));for(var h in n)o[h]===void 0&&(o[h]=n[h])}return o}var sc=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function d0(n){sc(n)}function p0(n){console.error(n)}function m0(n){sc(n)}function oc(n,i){try{var o=n.onUncaughtError;o(i.value,{componentStack:i.stack})}catch(u){setTimeout(function(){throw u})}}function _0(n,i,o){try{var u=n.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function kh(n,i,o){return o=nr(o),o.tag=3,o.payload={element:null},o.callback=function(){oc(n,i)},o}function g0(n){return n=nr(n),n.tag=3,n}function v0(n,i,o,u){var h=o.type.getDerivedStateFromError;if(typeof h=="function"){var _=u.value;n.payload=function(){return h(_)},n.callback=function(){_0(i,o,u)}}var T=o.stateNode;T!==null&&typeof T.componentDidCatch=="function"&&(n.callback=function(){_0(i,o,u),typeof h!="function"&&(hr===null?hr=new Set([this]):hr.add(this));var D=u.stack;this.componentDidCatch(u.value,{componentStack:D!==null?D:""})})}function bE(n,i,o,u,h){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(i=o.alternate,i!==null&&sl(i,o,h,!0),o=Ui.current,o!==null){switch(o.tag){case 13:return $i===null?dd():o.alternate===null&&rn===0&&(rn=3),o.flags&=-257,o.flags|=65536,o.lanes=h,u===vh?o.flags|=16384:(i=o.updateQueue,i===null?o.updateQueue=new Set([u]):i.add(u),md(n,u,h)),!1;case 22:return o.flags|=65536,u===vh?o.flags|=16384:(i=o.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=i):(o=i.retryQueue,o===null?i.retryQueue=new Set([u]):o.add(u)),md(n,u,h)),!1}throw Error(a(435,o.tag))}return md(n,u,h),dd(),!1}if(Ce)return i=Ui.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,u!==fh&&(n=Error(a(422),{cause:u}),rl(Ri(n,o)))):(u!==fh&&(i=Error(a(423),{cause:u}),rl(Ri(i,o))),n=n.current.alternate,n.flags|=65536,h&=-h,n.lanes|=h,u=Ri(u,o),h=kh(n.stateNode,u,h),Sh(n,h),rn!==4&&(rn=2)),!1;var _=Error(a(520),{cause:u});if(_=Ri(_,o),Al===null?Al=[_]:Al.push(_),rn!==4&&(rn=2),i===null)return!0;u=Ri(u,o),o=i;do{switch(o.tag){case 3:return o.flags|=65536,n=h&-h,o.lanes|=n,n=kh(o.stateNode,u,n),Sh(o,n),!1;case 1:if(i=o.type,_=o.stateNode,(o.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(hr===null||!hr.has(_))))return o.flags|=65536,h&=-h,o.lanes|=h,h=g0(h),v0(h,n,o,u),Sh(o,h),!1}o=o.return}while(o!==null);return!1}var x0=Error(a(461)),An=!1;function On(n,i,o,u){i.child=n===null?u0(i,null,o,u):Zs(i,n.child,o,u)}function y0(n,i,o,u,h){o=o.render;var _=i.ref;if("ref"in u){var T={};for(var D in u)D!=="ref"&&(T[D]=u[D])}else T=u;return Jr(i),u=Ah(n,i,o,T,_,h),D=Rh(),n!==null&&!An?(wh(n,i,h),Aa(n,i,h)):(Ce&&D&&uh(i),i.flags|=1,On(n,i,u,h),i.child)}function S0(n,i,o,u,h){if(n===null){var _=o.type;return typeof _=="function"&&!sh(_)&&_.defaultProps===void 0&&o.compare===null?(i.tag=15,i.type=_,M0(n,i,_,u,h)):(n=Hu(o.type,null,u,i,i.mode,h),n.ref=i.ref,n.return=i,i.child=n)}if(_=n.child,!Qh(n,h)){var T=_.memoizedProps;if(o=o.compare,o=o!==null?o:el,o(T,u)&&n.ref===i.ref)return Aa(n,i,h)}return i.flags|=1,n=xa(_,u),n.ref=i.ref,n.return=i,i.child=n}function M0(n,i,o,u,h){if(n!==null){var _=n.memoizedProps;if(el(_,u)&&n.ref===i.ref)if(An=!1,i.pendingProps=u=_,Qh(n,h))(n.flags&131072)!==0&&(An=!0);else return i.lanes=n.lanes,Aa(n,i,h)}return Xh(n,i,o,u,h)}function E0(n,i,o){var u=i.pendingProps,h=u.children,_=n!==null?n.memoizedState:null;if(u.mode==="hidden"){if((i.flags&128)!==0){if(u=_!==null?_.baseLanes|o:o,n!==null){for(h=i.child=n.child,_=0;h!==null;)_=_|h.lanes|h.childLanes,h=h.sibling;i.childLanes=_&~u}else i.childLanes=0,i.child=null;return T0(n,i,u,o)}if((o&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},n!==null&&Wu(i,_!==null?_.cachePool:null),_!==null?Mg(i,_):Eh(),c0(i);else return i.lanes=i.childLanes=536870912,T0(n,i,_!==null?_.baseLanes|o:o,o)}else _!==null?(Wu(i,_.cachePool),Mg(i,_),sr(),i.memoizedState=null):(n!==null&&Wu(i,null),Eh(),sr());return On(n,i,h,o),i.child}function T0(n,i,o,u){var h=gh();return h=h===null?null:{parent:xn._currentValue,pool:h},i.memoizedState={baseLanes:o,cachePool:h},n!==null&&Wu(i,null),Eh(),c0(i),n!==null&&sl(n,i,u,!0),null}function lc(n,i){var o=i.ref;if(o===null)n!==null&&n.ref!==null&&(i.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(a(284));(n===null||n.ref!==o)&&(i.flags|=4194816)}}function Xh(n,i,o,u,h){return Jr(i),o=Ah(n,i,o,u,void 0,h),u=Rh(),n!==null&&!An?(wh(n,i,h),Aa(n,i,h)):(Ce&&u&&uh(i),i.flags|=1,On(n,i,o,h),i.child)}function b0(n,i,o,u,h,_){return Jr(i),i.updateQueue=null,o=Tg(i,u,o,h),Eg(n),u=Rh(),n!==null&&!An?(wh(n,i,_),Aa(n,i,_)):(Ce&&u&&uh(i),i.flags|=1,On(n,i,o,_),i.child)}function A0(n,i,o,u,h){if(Jr(i),i.stateNode===null){var _=Fs,T=o.contextType;typeof T=="object"&&T!==null&&(_=Hn(T)),_=new o(u,_),i.memoizedState=_.state!==null&&_.state!==void 0?_.state:null,_.updater=Vh,i.stateNode=_,_._reactInternals=i,_=i.stateNode,_.props=u,_.state=i.memoizedState,_.refs={},xh(i),T=o.contextType,_.context=typeof T=="object"&&T!==null?Hn(T):Fs,_.state=i.memoizedState,T=o.getDerivedStateFromProps,typeof T=="function"&&(Gh(i,o,T,u),_.state=i.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof _.getSnapshotBeforeUpdate=="function"||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(T=_.state,typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount(),T!==_.state&&Vh.enqueueReplaceState(_,_.state,null),dl(i,u,_,h),hl(),_.state=i.memoizedState),typeof _.componentDidMount=="function"&&(i.flags|=4194308),u=!0}else if(n===null){_=i.stateNode;var D=i.memoizedProps,H=es(o,D);_.props=H;var et=_.context,dt=o.contextType;T=Fs,typeof dt=="object"&&dt!==null&&(T=Hn(dt));var xt=o.getDerivedStateFromProps;dt=typeof xt=="function"||typeof _.getSnapshotBeforeUpdate=="function",D=i.pendingProps!==D,dt||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(D||et!==T)&&h0(i,_,u,T),er=!1;var at=i.memoizedState;_.state=at,dl(i,u,_,h),hl(),et=i.memoizedState,D||at!==et||er?(typeof xt=="function"&&(Gh(i,o,xt,u),et=i.memoizedState),(H=er||f0(i,o,H,u,at,et,T))?(dt||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(i.flags|=4194308)):(typeof _.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=et),_.props=u,_.state=et,_.context=T,u=H):(typeof _.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{_=i.stateNode,yh(n,i),T=i.memoizedProps,dt=es(o,T),_.props=dt,xt=i.pendingProps,at=_.context,et=o.contextType,H=Fs,typeof et=="object"&&et!==null&&(H=Hn(et)),D=o.getDerivedStateFromProps,(et=typeof D=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==xt||at!==H)&&h0(i,_,u,H),er=!1,at=i.memoizedState,_.state=at,dl(i,u,_,h),hl();var rt=i.memoizedState;T!==xt||at!==rt||er||n!==null&&n.dependencies!==null&&ku(n.dependencies)?(typeof D=="function"&&(Gh(i,o,D,u),rt=i.memoizedState),(dt=er||f0(i,o,dt,u,at,rt,H)||n!==null&&n.dependencies!==null&&ku(n.dependencies))?(et||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(u,rt,H),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(u,rt,H)),typeof _.componentDidUpdate=="function"&&(i.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&at===n.memoizedState||(i.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&at===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=rt),_.props=u,_.state=rt,_.context=H,u=dt):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&at===n.memoizedState||(i.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&at===n.memoizedState||(i.flags|=1024),u=!1)}return _=u,lc(n,i),u=(i.flags&128)!==0,_||u?(_=i.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:_.render(),i.flags|=1,n!==null&&u?(i.child=Zs(i,n.child,null,h),i.child=Zs(i,null,o,h)):On(n,i,o,h),i.memoizedState=_.state,n=i.child):n=Aa(n,i,h),n}function R0(n,i,o,u){return al(),i.flags|=256,On(n,i,o,u),i.child}var Wh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function qh(n){return{baseLanes:n,cachePool:pg()}}function Yh(n,i,o){return n=n!==null?n.childLanes&~o:0,i&&(n|=Li),n}function w0(n,i,o){var u=i.pendingProps,h=!1,_=(i.flags&128)!==0,T;if((T=_)||(T=n!==null&&n.memoizedState===null?!1:(yn.current&2)!==0),T&&(h=!0,i.flags&=-129),T=(i.flags&32)!==0,i.flags&=-33,n===null){if(Ce){if(h?rr(i):sr(),Ce){var D=an,H;if(H=D){t:{for(H=D,D=Ji;H.nodeType!==8;){if(!D){D=null;break t}if(H=Vi(H.nextSibling),H===null){D=null;break t}}D=H}D!==null?(i.memoizedState={dehydrated:D,treeContext:Yr!==null?{id:ya,overflow:Sa}:null,retryLane:536870912,hydrationErrors:null},H=fi(18,null,null,0),H.stateNode=D,H.return=i,i.child=H,qn=i,an=null,H=!0):H=!1}H||Kr(i)}if(D=i.memoizedState,D!==null&&(D=D.dehydrated,D!==null))return Dd(D)?i.lanes=32:i.lanes=536870912,null;ba(i)}return D=u.children,u=u.fallback,h?(sr(),h=i.mode,D=uc({mode:"hidden",children:D},h),u=qr(u,h,o,null),D.return=i,u.return=i,D.sibling=u,i.child=D,h=i.child,h.memoizedState=qh(o),h.childLanes=Yh(n,T,o),i.memoizedState=Wh,u):(rr(i),jh(i,D))}if(H=n.memoizedState,H!==null&&(D=H.dehydrated,D!==null)){if(_)i.flags&256?(rr(i),i.flags&=-257,i=Zh(n,i,o)):i.memoizedState!==null?(sr(),i.child=n.child,i.flags|=128,i=null):(sr(),h=u.fallback,D=i.mode,u=uc({mode:"visible",children:u.children},D),h=qr(h,D,o,null),h.flags|=2,u.return=i,h.return=i,u.sibling=h,i.child=u,Zs(i,n.child,null,o),u=i.child,u.memoizedState=qh(o),u.childLanes=Yh(n,T,o),i.memoizedState=Wh,i=h);else if(rr(i),Dd(D)){if(T=D.nextSibling&&D.nextSibling.dataset,T)var et=T.dgst;T=et,u=Error(a(419)),u.stack="",u.digest=T,rl({value:u,source:null,stack:null}),i=Zh(n,i,o)}else if(An||sl(n,i,o,!1),T=(o&n.childLanes)!==0,An||T){if(T=je,T!==null&&(u=o&-o,u=(u&42)!==0?1:ie(u),u=(u&(T.suspendedLanes|o))!==0?0:u,u!==0&&u!==H.retryLane))throw H.retryLane=u,Bs(n,u),_i(T,n,u),x0;D.data==="$?"||dd(),i=Zh(n,i,o)}else D.data==="$?"?(i.flags|=192,i.child=n.child,i=null):(n=H.treeContext,an=Vi(D.nextSibling),qn=i,Ce=!0,Zr=null,Ji=!1,n!==null&&(Ci[Di++]=ya,Ci[Di++]=Sa,Ci[Di++]=Yr,ya=n.id,Sa=n.overflow,Yr=i),i=jh(i,u.children),i.flags|=4096);return i}return h?(sr(),h=u.fallback,D=i.mode,H=n.child,et=H.sibling,u=xa(H,{mode:"hidden",children:u.children}),u.subtreeFlags=H.subtreeFlags&65011712,et!==null?h=xa(et,h):(h=qr(h,D,o,null),h.flags|=2),h.return=i,u.return=i,u.sibling=h,i.child=u,u=h,h=i.child,D=n.child.memoizedState,D===null?D=qh(o):(H=D.cachePool,H!==null?(et=xn._currentValue,H=H.parent!==et?{parent:et,pool:et}:H):H=pg(),D={baseLanes:D.baseLanes|o,cachePool:H}),h.memoizedState=D,h.childLanes=Yh(n,T,o),i.memoizedState=Wh,u):(rr(i),o=n.child,n=o.sibling,o=xa(o,{mode:"visible",children:u.children}),o.return=i,o.sibling=null,n!==null&&(T=i.deletions,T===null?(i.deletions=[n],i.flags|=16):T.push(n)),i.child=o,i.memoizedState=null,o)}function jh(n,i){return i=uc({mode:"visible",children:i},n.mode),i.return=n,n.child=i}function uc(n,i){return n=fi(22,n,null,i),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function Zh(n,i,o){return Zs(i,n.child,null,o),n=jh(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function C0(n,i,o){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),dh(n.return,i,o)}function Kh(n,i,o,u,h){var _=n.memoizedState;_===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:h}:(_.isBackwards=i,_.rendering=null,_.renderingStartTime=0,_.last=u,_.tail=o,_.tailMode=h)}function D0(n,i,o){var u=i.pendingProps,h=u.revealOrder,_=u.tail;if(On(n,i,u.children,o),u=yn.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)t:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&C0(n,o,i);else if(n.tag===19)C0(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break t;for(;n.sibling===null;){if(n.return===null||n.return===i)break t;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}switch(St(yn,u),h){case"forwards":for(o=i.child,h=null;o!==null;)n=o.alternate,n!==null&&rc(n)===null&&(h=o),o=o.sibling;o=h,o===null?(h=i.child,i.child=null):(h=o.sibling,o.sibling=null),Kh(i,!1,h,o,_);break;case"backwards":for(o=null,h=i.child,i.child=null;h!==null;){if(n=h.alternate,n!==null&&rc(n)===null){i.child=h;break}n=h.sibling,h.sibling=o,o=h,h=n}Kh(i,!0,o,null,_);break;case"together":Kh(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Aa(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),fr|=i.lanes,(o&i.childLanes)===0)if(n!==null){if(sl(n,i,o,!1),(o&i.childLanes)===0)return null}else return null;if(n!==null&&i.child!==n.child)throw Error(a(153));if(i.child!==null){for(n=i.child,o=xa(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=xa(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function Qh(n,i){return(n.lanes&i)!==0?!0:(n=n.dependencies,!!(n!==null&&ku(n)))}function AE(n,i,o){switch(i.tag){case 3:wt(i,i.stateNode.containerInfo),tr(i,xn,n.memoizedState.cache),al();break;case 27:case 5:Vt(i);break;case 4:wt(i,i.stateNode.containerInfo);break;case 10:tr(i,i.type,i.memoizedProps.value);break;case 13:var u=i.memoizedState;if(u!==null)return u.dehydrated!==null?(rr(i),i.flags|=128,null):(o&i.child.childLanes)!==0?w0(n,i,o):(rr(i),n=Aa(n,i,o),n!==null?n.sibling:null);rr(i);break;case 19:var h=(n.flags&128)!==0;if(u=(o&i.childLanes)!==0,u||(sl(n,i,o,!1),u=(o&i.childLanes)!==0),h){if(u)return D0(n,i,o);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),St(yn,yn.current),u)break;return null;case 22:case 23:return i.lanes=0,E0(n,i,o);case 24:tr(i,xn,n.memoizedState.cache)}return Aa(n,i,o)}function U0(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps)An=!0;else{if(!Qh(n,o)&&(i.flags&128)===0)return An=!1,AE(n,i,o);An=(n.flags&131072)!==0}else An=!1,Ce&&(i.flags&1048576)!==0&&og(i,Vu,i.index);switch(i.lanes=0,i.tag){case 16:t:{n=i.pendingProps;var u=i.elementType,h=u._init;if(u=h(u._payload),i.type=u,typeof u=="function")sh(u)?(n=es(u,n),i.tag=1,i=A0(null,i,u,n,o)):(i.tag=0,i=Xh(null,i,u,n,o));else{if(u!=null){if(h=u.$$typeof,h===b){i.tag=11,i=y0(null,i,u,n,o);break t}else if(h===P){i.tag=14,i=S0(null,i,u,n,o);break t}}throw i=ct(u)||u,Error(a(306,i,""))}}return i;case 0:return Xh(n,i,i.type,i.pendingProps,o);case 1:return u=i.type,h=es(u,i.pendingProps),A0(n,i,u,h,o);case 3:t:{if(wt(i,i.stateNode.containerInfo),n===null)throw Error(a(387));u=i.pendingProps;var _=i.memoizedState;h=_.element,yh(n,i),dl(i,u,null,o);var T=i.memoizedState;if(u=T.cache,tr(i,xn,u),u!==_.cache&&ph(i,[xn],o,!0),hl(),u=T.element,_.isDehydrated)if(_={element:u,isDehydrated:!1,cache:T.cache},i.updateQueue.baseState=_,i.memoizedState=_,i.flags&256){i=R0(n,i,u,o);break t}else if(u!==h){h=Ri(Error(a(424)),i),rl(h),i=R0(n,i,u,o);break t}else{switch(n=i.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(an=Vi(n.firstChild),qn=i,Ce=!0,Zr=null,Ji=!0,o=u0(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(al(),u===h){i=Aa(n,i,o);break t}On(n,i,u,o)}i=i.child}return i;case 26:return lc(n,i),n===null?(o=Pv(i.type,null,i.pendingProps,null))?i.memoizedState=o:Ce||(o=i.type,n=i.pendingProps,u=Ec(Mt.current).createElement(o),u[gn]=i,u[Ln]=n,zn(u,o,n),fn(u),i.stateNode=u):i.memoizedState=Pv(i.type,n.memoizedProps,i.pendingProps,n.memoizedState),null;case 27:return Vt(i),n===null&&Ce&&(u=i.stateNode=Lv(i.type,i.pendingProps,Mt.current),qn=i,Ji=!0,h=an,mr(i.type)?(Ud=h,an=Vi(u.firstChild)):an=h),On(n,i,i.pendingProps.children,o),lc(n,i),n===null&&(i.flags|=4194304),i.child;case 5:return n===null&&Ce&&((h=u=an)&&(u=tT(u,i.type,i.pendingProps,Ji),u!==null?(i.stateNode=u,qn=i,an=Vi(u.firstChild),Ji=!1,h=!0):h=!1),h||Kr(i)),Vt(i),h=i.type,_=i.pendingProps,T=n!==null?n.memoizedProps:null,u=_.children,Rd(h,_)?u=null:T!==null&&Rd(h,T)&&(i.flags|=32),i.memoizedState!==null&&(h=Ah(n,i,vE,null,null,o),Pl._currentValue=h),lc(n,i),On(n,i,u,o),i.child;case 6:return n===null&&Ce&&((n=o=an)&&(o=eT(o,i.pendingProps,Ji),o!==null?(i.stateNode=o,qn=i,an=null,n=!0):n=!1),n||Kr(i)),null;case 13:return w0(n,i,o);case 4:return wt(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=Zs(i,null,u,o):On(n,i,u,o),i.child;case 11:return y0(n,i,i.type,i.pendingProps,o);case 7:return On(n,i,i.pendingProps,o),i.child;case 8:return On(n,i,i.pendingProps.children,o),i.child;case 12:return On(n,i,i.pendingProps.children,o),i.child;case 10:return u=i.pendingProps,tr(i,i.type,u.value),On(n,i,u.children,o),i.child;case 9:return h=i.type._context,u=i.pendingProps.children,Jr(i),h=Hn(h),u=u(h),i.flags|=1,On(n,i,u,o),i.child;case 14:return S0(n,i,i.type,i.pendingProps,o);case 15:return M0(n,i,i.type,i.pendingProps,o);case 19:return D0(n,i,o);case 31:return u=i.pendingProps,o=i.mode,u={mode:u.mode,children:u.children},n===null?(o=uc(u,o),o.ref=i.ref,i.child=o,o.return=i,i=o):(o=xa(n.child,u),o.ref=i.ref,i.child=o,o.return=i,i=o),i;case 22:return E0(n,i,o);case 24:return Jr(i),u=Hn(xn),n===null?(h=gh(),h===null&&(h=je,_=mh(),h.pooledCache=_,_.refCount++,_!==null&&(h.pooledCacheLanes|=o),h=_),i.memoizedState={parent:u,cache:h},xh(i),tr(i,xn,h)):((n.lanes&o)!==0&&(yh(n,i),dl(i,null,null,o),hl()),h=n.memoizedState,_=i.memoizedState,h.parent!==u?(h={parent:u,cache:u},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),tr(i,xn,u)):(u=_.cache,tr(i,xn,u),u!==h.cache&&ph(i,[xn],o,!0))),On(n,i,i.pendingProps.children,o),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function Ra(n){n.flags|=4}function L0(n,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!Hv(i)){if(i=Ui.current,i!==null&&((Ee&4194048)===Ee?$i!==null:(Ee&62914560)!==Ee&&(Ee&536870912)===0||i!==$i))throw cl=vh,mg;n.flags|=8192}}function cc(n,i){i!==null&&(n.flags|=4),n.flags&16384&&(i=n.tag!==22?Lt():536870912,n.lanes|=i,$s|=i)}function yl(n,i){if(!Ce)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function $e(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(i)for(var h=n.child;h!==null;)o|=h.lanes|h.childLanes,u|=h.subtreeFlags&65011712,u|=h.flags&65011712,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)o|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=u,n.childLanes=o,i}function RE(n,i,o){var u=i.pendingProps;switch(ch(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(i),null;case 1:return $e(i),null;case 3:return o=i.stateNode,u=null,n!==null&&(u=n.memoizedState.cache),i.memoizedState.cache!==u&&(i.flags|=2048),Ea(xn),ee(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(n===null||n.child===null)&&(il(i)?Ra(i):n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,cg())),$e(i),null;case 26:return o=i.memoizedState,n===null?(Ra(i),o!==null?($e(i),L0(i,o)):($e(i),i.flags&=-16777217)):o?o!==n.memoizedState?(Ra(i),$e(i),L0(i,o)):($e(i),i.flags&=-16777217):(n.memoizedProps!==u&&Ra(i),$e(i),i.flags&=-16777217),null;case 27:ge(i),o=Mt.current;var h=i.type;if(n!==null&&i.stateNode!=null)n.memoizedProps!==u&&Ra(i);else{if(!u){if(i.stateNode===null)throw Error(a(166));return $e(i),null}n=Y.current,il(i)?lg(i):(n=Lv(h,u,o),i.stateNode=n,Ra(i))}return $e(i),null;case 5:if(ge(i),o=i.type,n!==null&&i.stateNode!=null)n.memoizedProps!==u&&Ra(i);else{if(!u){if(i.stateNode===null)throw Error(a(166));return $e(i),null}if(n=Y.current,il(i))lg(i);else{switch(h=Ec(Mt.current),n){case 1:n=h.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:n=h.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":n=h.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":n=h.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":n=h.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof u.is=="string"?h.createElement("select",{is:u.is}):h.createElement("select"),u.multiple?n.multiple=!0:u.size&&(n.size=u.size);break;default:n=typeof u.is=="string"?h.createElement(o,{is:u.is}):h.createElement(o)}}n[gn]=i,n[Ln]=u;t:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)n.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break t;for(;h.sibling===null;){if(h.return===null||h.return===i)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=n;t:switch(zn(n,o,u),o){case"button":case"input":case"select":case"textarea":n=!!u.autoFocus;break t;case"img":n=!0;break t;default:n=!1}n&&Ra(i)}}return $e(i),i.flags&=-16777217,null;case 6:if(n&&i.stateNode!=null)n.memoizedProps!==u&&Ra(i);else{if(typeof u!="string"&&i.stateNode===null)throw Error(a(166));if(n=Mt.current,il(i)){if(n=i.stateNode,o=i.memoizedProps,u=null,h=qn,h!==null)switch(h.tag){case 27:case 5:u=h.memoizedProps}n[gn]=i,n=!!(n.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||bv(n.nodeValue,o)),n||Kr(i)}else n=Ec(n).createTextNode(u),n[gn]=i,i.stateNode=n}return $e(i),null;case 13:if(u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(h=il(i),u!==null&&u.dehydrated!==null){if(n===null){if(!h)throw Error(a(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[gn]=i}else al(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;$e(i),h=!1}else h=cg(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(ba(i),i):(ba(i),null)}if(ba(i),(i.flags&128)!==0)return i.lanes=o,i;if(o=u!==null,n=n!==null&&n.memoizedState!==null,o){u=i.child,h=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(h=u.alternate.memoizedState.cachePool.pool);var _=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(_=u.memoizedState.cachePool.pool),_!==h&&(u.flags|=2048)}return o!==n&&o&&(i.child.flags|=8192),cc(i,i.updateQueue),$e(i),null;case 4:return ee(),n===null&&Md(i.stateNode.containerInfo),$e(i),null;case 10:return Ea(i.type),$e(i),null;case 19:if(gt(yn),h=i.memoizedState,h===null)return $e(i),null;if(u=(i.flags&128)!==0,_=h.rendering,_===null)if(u)yl(h,!1);else{if(rn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(_=rc(n),_!==null){for(i.flags|=128,yl(h,!1),n=_.updateQueue,i.updateQueue=n,cc(i,n),i.subtreeFlags=0,n=o,o=i.child;o!==null;)sg(o,n),o=o.sibling;return St(yn,yn.current&1|2),i.child}n=n.sibling}h.tail!==null&&pe()>dc&&(i.flags|=128,u=!0,yl(h,!1),i.lanes=4194304)}else{if(!u)if(n=rc(_),n!==null){if(i.flags|=128,u=!0,n=n.updateQueue,i.updateQueue=n,cc(i,n),yl(h,!0),h.tail===null&&h.tailMode==="hidden"&&!_.alternate&&!Ce)return $e(i),null}else 2*pe()-h.renderingStartTime>dc&&o!==536870912&&(i.flags|=128,u=!0,yl(h,!1),i.lanes=4194304);h.isBackwards?(_.sibling=i.child,i.child=_):(n=h.last,n!==null?n.sibling=_:i.child=_,h.last=_)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=pe(),i.sibling=null,n=yn.current,St(yn,u?n&1|2:n&1),i):($e(i),null);case 22:case 23:return ba(i),Th(),u=i.memoizedState!==null,n!==null?n.memoizedState!==null!==u&&(i.flags|=8192):u&&(i.flags|=8192),u?(o&536870912)!==0&&(i.flags&128)===0&&($e(i),i.subtreeFlags&6&&(i.flags|=8192)):$e(i),o=i.updateQueue,o!==null&&cc(i,o.retryQueue),o=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),u=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(u=i.memoizedState.cachePool.pool),u!==o&&(i.flags|=2048),n!==null&&gt($r),null;case 24:return o=null,n!==null&&(o=n.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),Ea(xn),$e(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function wE(n,i){switch(ch(i),i.tag){case 1:return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ea(xn),ee(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 26:case 27:case 5:return ge(i),null;case 13:if(ba(i),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(a(340));al()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return gt(yn),null;case 4:return ee(),null;case 10:return Ea(i.type),null;case 22:case 23:return ba(i),Th(),n!==null&&gt($r),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 24:return Ea(xn),null;case 25:return null;default:return null}}function N0(n,i){switch(ch(i),i.tag){case 3:Ea(xn),ee();break;case 26:case 27:case 5:ge(i);break;case 4:ee();break;case 13:ba(i);break;case 19:gt(yn);break;case 10:Ea(i.type);break;case 22:case 23:ba(i),Th(),n!==null&&gt($r);break;case 24:Ea(xn)}}function Sl(n,i){try{var o=i.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&n)===n){u=void 0;var _=o.create,T=o.inst;u=_(),T.destroy=u}o=o.next}while(o!==h)}}catch(D){Xe(i,i.return,D)}}function or(n,i,o){try{var u=i.updateQueue,h=u!==null?u.lastEffect:null;if(h!==null){var _=h.next;u=_;do{if((u.tag&n)===n){var T=u.inst,D=T.destroy;if(D!==void 0){T.destroy=void 0,h=i;var H=o,et=D;try{et()}catch(dt){Xe(h,H,dt)}}}u=u.next}while(u!==_)}}catch(dt){Xe(i,i.return,dt)}}function O0(n){var i=n.updateQueue;if(i!==null){var o=n.stateNode;try{Sg(i,o)}catch(u){Xe(n,n.return,u)}}}function P0(n,i,o){o.props=es(n.type,n.memoizedProps),o.state=n.memoizedState;try{o.componentWillUnmount()}catch(u){Xe(n,i,u)}}function Ml(n,i){try{var o=n.ref;if(o!==null){switch(n.tag){case 26:case 27:case 5:var u=n.stateNode;break;case 30:u=n.stateNode;break;default:u=n.stateNode}typeof o=="function"?n.refCleanup=o(u):o.current=u}}catch(h){Xe(n,i,h)}}function ta(n,i){var o=n.ref,u=n.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(h){Xe(n,i,h)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(h){Xe(n,i,h)}else o.current=null}function z0(n){var i=n.type,o=n.memoizedProps,u=n.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break t;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(h){Xe(n,n.return,h)}}function Jh(n,i,o){try{var u=n.stateNode;ZE(u,n.type,o,i),u[Ln]=i}catch(h){Xe(n,n.return,h)}}function I0(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&mr(n.type)||n.tag===4}function $h(n){t:for(;;){for(;n.sibling===null;){if(n.return===null||I0(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&mr(n.type)||n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function td(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(n,i):(i=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,i.appendChild(n),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Mc));else if(u!==4&&(u===27&&mr(n.type)&&(o=n.stateNode,i=null),n=n.child,n!==null))for(td(n,i,o),n=n.sibling;n!==null;)td(n,i,o),n=n.sibling}function fc(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(u!==4&&(u===27&&mr(n.type)&&(o=n.stateNode),n=n.child,n!==null))for(fc(n,i,o),n=n.sibling;n!==null;)fc(n,i,o),n=n.sibling}function B0(n){var i=n.stateNode,o=n.memoizedProps;try{for(var u=n.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);zn(i,u,o),i[gn]=n,i[Ln]=o}catch(_){Xe(n,n.return,_)}}var wa=!1,un=!1,ed=!1,F0=typeof WeakSet=="function"?WeakSet:Set,Rn=null;function CE(n,i){if(n=n.containerInfo,bd=Cc,n=K_(n),$f(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else t:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var h=u.anchorOffset,_=u.focusNode;u=u.focusOffset;try{o.nodeType,_.nodeType}catch{o=null;break t}var T=0,D=-1,H=-1,et=0,dt=0,xt=n,at=null;e:for(;;){for(var rt;xt!==o||h!==0&&xt.nodeType!==3||(D=T+h),xt!==_||u!==0&&xt.nodeType!==3||(H=T+u),xt.nodeType===3&&(T+=xt.nodeValue.length),(rt=xt.firstChild)!==null;)at=xt,xt=rt;for(;;){if(xt===n)break e;if(at===o&&++et===h&&(D=T),at===_&&++dt===u&&(H=T),(rt=xt.nextSibling)!==null)break;xt=at,at=xt.parentNode}xt=rt}o=D===-1||H===-1?null:{start:D,end:H}}else o=null}o=o||{start:0,end:0}}else o=null;for(Ad={focusedElem:n,selectionRange:o},Cc=!1,Rn=i;Rn!==null;)if(i=Rn,n=i.child,(i.subtreeFlags&1024)!==0&&n!==null)n.return=i,Rn=n;else for(;Rn!==null;){switch(i=Rn,_=i.alternate,n=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&_!==null){n=void 0,o=i,h=_.memoizedProps,_=_.memoizedState,u=o.stateNode;try{var ne=es(o.type,h,o.elementType===o.type);n=u.getSnapshotBeforeUpdate(ne,_),u.__reactInternalSnapshotBeforeUpdate=n}catch(Jt){Xe(o,o.return,Jt)}}break;case 3:if((n&1024)!==0){if(n=i.stateNode.containerInfo,o=n.nodeType,o===9)Cd(n);else if(o===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Cd(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(a(163))}if(n=i.sibling,n!==null){n.return=i.return,Rn=n;break}Rn=i.return}}function H0(n,i,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:lr(n,o),u&4&&Sl(5,o);break;case 1:if(lr(n,o),u&4)if(n=o.stateNode,i===null)try{n.componentDidMount()}catch(T){Xe(o,o.return,T)}else{var h=es(o.type,i.memoizedProps);i=i.memoizedState;try{n.componentDidUpdate(h,i,n.__reactInternalSnapshotBeforeUpdate)}catch(T){Xe(o,o.return,T)}}u&64&&O0(o),u&512&&Ml(o,o.return);break;case 3:if(lr(n,o),u&64&&(n=o.updateQueue,n!==null)){if(i=null,o.child!==null)switch(o.child.tag){case 27:case 5:i=o.child.stateNode;break;case 1:i=o.child.stateNode}try{Sg(n,i)}catch(T){Xe(o,o.return,T)}}break;case 27:i===null&&u&4&&B0(o);case 26:case 5:lr(n,o),i===null&&u&4&&z0(o),u&512&&Ml(o,o.return);break;case 12:lr(n,o);break;case 13:lr(n,o),u&4&&k0(n,o),u&64&&(n=o.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(o=BE.bind(null,o),nT(n,o))));break;case 22:if(u=o.memoizedState!==null||wa,!u){i=i!==null&&i.memoizedState!==null||un,h=wa;var _=un;wa=u,(un=i)&&!_?ur(n,o,(o.subtreeFlags&8772)!==0):lr(n,o),wa=h,un=_}break;case 30:break;default:lr(n,o)}}function G0(n){var i=n.alternate;i!==null&&(n.alternate=null,G0(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&Ka(i)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var Ke=null,Jn=!1;function Ca(n,i,o){for(o=o.child;o!==null;)V0(n,i,o),o=o.sibling}function V0(n,i,o){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(pt,o)}catch{}switch(o.tag){case 26:un||ta(o,i),Ca(n,i,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:un||ta(o,i);var u=Ke,h=Jn;mr(o.type)&&(Ke=o.stateNode,Jn=!1),Ca(n,i,o),Ul(o.stateNode),Ke=u,Jn=h;break;case 5:un||ta(o,i);case 6:if(u=Ke,h=Jn,Ke=null,Ca(n,i,o),Ke=u,Jn=h,Ke!==null)if(Jn)try{(Ke.nodeType===9?Ke.body:Ke.nodeName==="HTML"?Ke.ownerDocument.body:Ke).removeChild(o.stateNode)}catch(_){Xe(o,i,_)}else try{Ke.removeChild(o.stateNode)}catch(_){Xe(o,i,_)}break;case 18:Ke!==null&&(Jn?(n=Ke,Dv(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,o.stateNode),Fl(n)):Dv(Ke,o.stateNode));break;case 4:u=Ke,h=Jn,Ke=o.stateNode.containerInfo,Jn=!0,Ca(n,i,o),Ke=u,Jn=h;break;case 0:case 11:case 14:case 15:un||or(2,o,i),un||or(4,o,i),Ca(n,i,o);break;case 1:un||(ta(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"&&P0(o,i,u)),Ca(n,i,o);break;case 21:Ca(n,i,o);break;case 22:un=(u=un)||o.memoizedState!==null,Ca(n,i,o),un=u;break;default:Ca(n,i,o)}}function k0(n,i){if(i.memoizedState===null&&(n=i.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Fl(n)}catch(o){Xe(i,i.return,o)}}function DE(n){switch(n.tag){case 13:case 19:var i=n.stateNode;return i===null&&(i=n.stateNode=new F0),i;case 22:return n=n.stateNode,i=n._retryCache,i===null&&(i=n._retryCache=new F0),i;default:throw Error(a(435,n.tag))}}function nd(n,i){var o=DE(n);i.forEach(function(u){var h=FE.bind(null,n,u);o.has(u)||(o.add(u),u.then(h,h))})}function hi(n,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var h=o[u],_=n,T=i,D=T;t:for(;D!==null;){switch(D.tag){case 27:if(mr(D.type)){Ke=D.stateNode,Jn=!1;break t}break;case 5:Ke=D.stateNode,Jn=!1;break t;case 3:case 4:Ke=D.stateNode.containerInfo,Jn=!0;break t}D=D.return}if(Ke===null)throw Error(a(160));V0(_,T,h),Ke=null,Jn=!1,_=h.alternate,_!==null&&(_.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)X0(i,n),i=i.sibling}var Gi=null;function X0(n,i){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:hi(i,n),di(n),u&4&&(or(3,n,n.return),Sl(3,n),or(5,n,n.return));break;case 1:hi(i,n),di(n),u&512&&(un||o===null||ta(o,o.return)),u&64&&wa&&(n=n.updateQueue,n!==null&&(u=n.callbacks,u!==null&&(o=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var h=Gi;if(hi(i,n),di(n),u&512&&(un||o===null||ta(o,o.return)),u&4){var _=o!==null?o.memoizedState:null;if(u=n.memoizedState,o===null)if(u===null)if(n.stateNode===null){t:{u=n.type,o=n.memoizedProps,h=h.ownerDocument||h;e:switch(u){case"title":_=h.getElementsByTagName("title")[0],(!_||_[Za]||_[gn]||_.namespaceURI==="http://www.w3.org/2000/svg"||_.hasAttribute("itemprop"))&&(_=h.createElement(u),h.head.insertBefore(_,h.querySelector("head > title"))),zn(_,u,o),_[gn]=n,fn(_),u=_;break t;case"link":var T=Bv("link","href",h).get(u+(o.href||""));if(T){for(var D=0;D<T.length;D++)if(_=T[D],_.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&_.getAttribute("rel")===(o.rel==null?null:o.rel)&&_.getAttribute("title")===(o.title==null?null:o.title)&&_.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){T.splice(D,1);break e}}_=h.createElement(u),zn(_,u,o),h.head.appendChild(_);break;case"meta":if(T=Bv("meta","content",h).get(u+(o.content||""))){for(D=0;D<T.length;D++)if(_=T[D],_.getAttribute("content")===(o.content==null?null:""+o.content)&&_.getAttribute("name")===(o.name==null?null:o.name)&&_.getAttribute("property")===(o.property==null?null:o.property)&&_.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&_.getAttribute("charset")===(o.charSet==null?null:o.charSet)){T.splice(D,1);break e}}_=h.createElement(u),zn(_,u,o),h.head.appendChild(_);break;default:throw Error(a(468,u))}_[gn]=n,fn(_),u=_}n.stateNode=u}else Fv(h,n.type,n.stateNode);else n.stateNode=Iv(h,u,n.memoizedProps);else _!==u?(_===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):_.count--,u===null?Fv(h,n.type,n.stateNode):Iv(h,u,n.memoizedProps)):u===null&&n.stateNode!==null&&Jh(n,n.memoizedProps,o.memoizedProps)}break;case 27:hi(i,n),di(n),u&512&&(un||o===null||ta(o,o.return)),o!==null&&u&4&&Jh(n,n.memoizedProps,o.memoizedProps);break;case 5:if(hi(i,n),di(n),u&512&&(un||o===null||ta(o,o.return)),n.flags&32){h=n.stateNode;try{Qi(h,"")}catch(rt){Xe(n,n.return,rt)}}u&4&&n.stateNode!=null&&(h=n.memoizedProps,Jh(n,h,o!==null?o.memoizedProps:h)),u&1024&&(ed=!0);break;case 6:if(hi(i,n),di(n),u&4){if(n.stateNode===null)throw Error(a(162));u=n.memoizedProps,o=n.stateNode;try{o.nodeValue=u}catch(rt){Xe(n,n.return,rt)}}break;case 3:if(Ac=null,h=Gi,Gi=Tc(i.containerInfo),hi(i,n),Gi=h,di(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Fl(i.containerInfo)}catch(rt){Xe(n,n.return,rt)}ed&&(ed=!1,W0(n));break;case 4:u=Gi,Gi=Tc(n.stateNode.containerInfo),hi(i,n),di(n),Gi=u;break;case 12:hi(i,n),di(n);break;case 13:hi(i,n),di(n),n.child.flags&8192&&n.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(ld=pe()),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,nd(n,u)));break;case 22:h=n.memoizedState!==null;var H=o!==null&&o.memoizedState!==null,et=wa,dt=un;if(wa=et||h,un=dt||H,hi(i,n),un=dt,wa=et,di(n),u&8192)t:for(i=n.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(o===null||H||wa||un||ns(n)),o=null,i=n;;){if(i.tag===5||i.tag===26){if(o===null){H=o=i;try{if(_=H.stateNode,h)T=_.style,typeof T.setProperty=="function"?T.setProperty("display","none","important"):T.display="none";else{D=H.stateNode;var xt=H.memoizedProps.style,at=xt!=null&&xt.hasOwnProperty("display")?xt.display:null;D.style.display=at==null||typeof at=="boolean"?"":(""+at).trim()}}catch(rt){Xe(H,H.return,rt)}}}else if(i.tag===6){if(o===null){H=i;try{H.stateNode.nodeValue=h?"":H.memoizedProps}catch(rt){Xe(H,H.return,rt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===n)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break t;for(;i.sibling===null;){if(i.return===null||i.return===n)break t;o===i&&(o=null),i=i.return}o===i&&(o=null),i.sibling.return=i.return,i=i.sibling}u&4&&(u=n.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,nd(n,o))));break;case 19:hi(i,n),di(n),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,nd(n,u)));break;case 30:break;case 21:break;default:hi(i,n),di(n)}}function di(n){var i=n.flags;if(i&2){try{for(var o,u=n.return;u!==null;){if(I0(u)){o=u;break}u=u.return}if(o==null)throw Error(a(160));switch(o.tag){case 27:var h=o.stateNode,_=$h(n);fc(n,_,h);break;case 5:var T=o.stateNode;o.flags&32&&(Qi(T,""),o.flags&=-33);var D=$h(n);fc(n,D,T);break;case 3:case 4:var H=o.stateNode.containerInfo,et=$h(n);td(n,et,H);break;default:throw Error(a(161))}}catch(dt){Xe(n,n.return,dt)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function W0(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var i=n;W0(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),n=n.sibling}}function lr(n,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)H0(n,i.alternate,i),i=i.sibling}function ns(n){for(n=n.child;n!==null;){var i=n;switch(i.tag){case 0:case 11:case 14:case 15:or(4,i,i.return),ns(i);break;case 1:ta(i,i.return);var o=i.stateNode;typeof o.componentWillUnmount=="function"&&P0(i,i.return,o),ns(i);break;case 27:Ul(i.stateNode);case 26:case 5:ta(i,i.return),ns(i);break;case 22:i.memoizedState===null&&ns(i);break;case 30:ns(i);break;default:ns(i)}n=n.sibling}}function ur(n,i,o){for(o=o&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var u=i.alternate,h=n,_=i,T=_.flags;switch(_.tag){case 0:case 11:case 15:ur(h,_,o),Sl(4,_);break;case 1:if(ur(h,_,o),u=_,h=u.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(et){Xe(u,u.return,et)}if(u=_,h=u.updateQueue,h!==null){var D=u.stateNode;try{var H=h.shared.hiddenCallbacks;if(H!==null)for(h.shared.hiddenCallbacks=null,h=0;h<H.length;h++)yg(H[h],D)}catch(et){Xe(u,u.return,et)}}o&&T&64&&O0(_),Ml(_,_.return);break;case 27:B0(_);case 26:case 5:ur(h,_,o),o&&u===null&&T&4&&z0(_),Ml(_,_.return);break;case 12:ur(h,_,o);break;case 13:ur(h,_,o),o&&T&4&&k0(h,_);break;case 22:_.memoizedState===null&&ur(h,_,o),Ml(_,_.return);break;case 30:break;default:ur(h,_,o)}i=i.sibling}}function id(n,i){var o=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),n=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(n=i.memoizedState.cachePool.pool),n!==o&&(n!=null&&n.refCount++,o!=null&&ol(o))}function ad(n,i){n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&ol(n))}function ea(n,i,o,u){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)q0(n,i,o,u),i=i.sibling}function q0(n,i,o,u){var h=i.flags;switch(i.tag){case 0:case 11:case 15:ea(n,i,o,u),h&2048&&Sl(9,i);break;case 1:ea(n,i,o,u);break;case 3:ea(n,i,o,u),h&2048&&(n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&ol(n)));break;case 12:if(h&2048){ea(n,i,o,u),n=i.stateNode;try{var _=i.memoizedProps,T=_.id,D=_.onPostCommit;typeof D=="function"&&D(T,i.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(H){Xe(i,i.return,H)}}else ea(n,i,o,u);break;case 13:ea(n,i,o,u);break;case 23:break;case 22:_=i.stateNode,T=i.alternate,i.memoizedState!==null?_._visibility&2?ea(n,i,o,u):El(n,i):_._visibility&2?ea(n,i,o,u):(_._visibility|=2,Ks(n,i,o,u,(i.subtreeFlags&10256)!==0)),h&2048&&id(T,i);break;case 24:ea(n,i,o,u),h&2048&&ad(i.alternate,i);break;default:ea(n,i,o,u)}}function Ks(n,i,o,u,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var _=n,T=i,D=o,H=u,et=T.flags;switch(T.tag){case 0:case 11:case 15:Ks(_,T,D,H,h),Sl(8,T);break;case 23:break;case 22:var dt=T.stateNode;T.memoizedState!==null?dt._visibility&2?Ks(_,T,D,H,h):El(_,T):(dt._visibility|=2,Ks(_,T,D,H,h)),h&&et&2048&&id(T.alternate,T);break;case 24:Ks(_,T,D,H,h),h&&et&2048&&ad(T.alternate,T);break;default:Ks(_,T,D,H,h)}i=i.sibling}}function El(n,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var o=n,u=i,h=u.flags;switch(u.tag){case 22:El(o,u),h&2048&&id(u.alternate,u);break;case 24:El(o,u),h&2048&&ad(u.alternate,u);break;default:El(o,u)}i=i.sibling}}var Tl=8192;function Qs(n){if(n.subtreeFlags&Tl)for(n=n.child;n!==null;)Y0(n),n=n.sibling}function Y0(n){switch(n.tag){case 26:Qs(n),n.flags&Tl&&n.memoizedState!==null&&mT(Gi,n.memoizedState,n.memoizedProps);break;case 5:Qs(n);break;case 3:case 4:var i=Gi;Gi=Tc(n.stateNode.containerInfo),Qs(n),Gi=i;break;case 22:n.memoizedState===null&&(i=n.alternate,i!==null&&i.memoizedState!==null?(i=Tl,Tl=16777216,Qs(n),Tl=i):Qs(n));break;default:Qs(n)}}function j0(n){var i=n.alternate;if(i!==null&&(n=i.child,n!==null)){i.child=null;do i=n.sibling,n.sibling=null,n=i;while(n!==null)}}function bl(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var o=0;o<i.length;o++){var u=i[o];Rn=u,K0(u,n)}j0(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Z0(n),n=n.sibling}function Z0(n){switch(n.tag){case 0:case 11:case 15:bl(n),n.flags&2048&&or(9,n,n.return);break;case 3:bl(n);break;case 12:bl(n);break;case 22:var i=n.stateNode;n.memoizedState!==null&&i._visibility&2&&(n.return===null||n.return.tag!==13)?(i._visibility&=-3,hc(n)):bl(n);break;default:bl(n)}}function hc(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var o=0;o<i.length;o++){var u=i[o];Rn=u,K0(u,n)}j0(n)}for(n=n.child;n!==null;){switch(i=n,i.tag){case 0:case 11:case 15:or(8,i,i.return),hc(i);break;case 22:o=i.stateNode,o._visibility&2&&(o._visibility&=-3,hc(i));break;default:hc(i)}n=n.sibling}}function K0(n,i){for(;Rn!==null;){var o=Rn;switch(o.tag){case 0:case 11:case 15:or(8,o,i);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:ol(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,Rn=u;else t:for(o=n;Rn!==null;){u=Rn;var h=u.sibling,_=u.return;if(G0(u),u===o){Rn=null;break t}if(h!==null){h.return=_,Rn=h;break t}Rn=_}}}var UE={getCacheForType:function(n){var i=Hn(xn),o=i.data.get(n);return o===void 0&&(o=n(),i.data.set(n,o)),o}},LE=typeof WeakMap=="function"?WeakMap:Map,Oe=0,je=null,me=null,Ee=0,Pe=0,pi=null,cr=!1,Js=!1,rd=!1,Da=0,rn=0,fr=0,is=0,sd=0,Li=0,$s=0,Al=null,$n=null,od=!1,ld=0,dc=1/0,pc=null,hr=null,Pn=0,dr=null,to=null,eo=0,ud=0,cd=null,Q0=null,Rl=0,fd=null;function mi(){if((Oe&2)!==0&&Ee!==0)return Ee&-Ee;if(z.T!==null){var n=Vs;return n!==0?n:vd()}return Ae()}function J0(){Li===0&&(Li=(Ee&536870912)===0||Ce?q():536870912);var n=Ui.current;return n!==null&&(n.flags|=32),Li}function _i(n,i,o){(n===je&&(Pe===2||Pe===9)||n.cancelPendingCommit!==null)&&(no(n,0),pr(n,Ee,Li,!1)),It(n,o),((Oe&2)===0||n!==je)&&(n===je&&((Oe&2)===0&&(is|=o),rn===4&&pr(n,Ee,Li,!1)),na(n))}function $0(n,i,o){if((Oe&6)!==0)throw Error(a(327));var u=!o&&(i&124)===0&&(i&n.expiredLanes)===0||Ct(n,i),h=u?PE(n,i):pd(n,i,!0),_=u;do{if(h===0){Js&&!u&&pr(n,i,0,!1);break}else{if(o=n.current.alternate,_&&!NE(o)){h=pd(n,i,!1),_=!1;continue}if(h===2){if(_=i,n.errorRecoveryDisabledLanes&_)var T=0;else T=n.pendingLanes&-536870913,T=T!==0?T:T&536870912?536870912:0;if(T!==0){i=T;t:{var D=n;h=Al;var H=D.current.memoizedState.isDehydrated;if(H&&(no(D,T).flags|=256),T=pd(D,T,!1),T!==2){if(rd&&!H){D.errorRecoveryDisabledLanes|=_,is|=_,h=4;break t}_=$n,$n=h,_!==null&&($n===null?$n=_:$n.push.apply($n,_))}h=T}if(_=!1,h!==2)continue}}if(h===1){no(n,0),pr(n,i,0,!0);break}t:{switch(u=n,_=h,_){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:pr(u,i,Li,!cr);break t;case 2:$n=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(h=ld+300-pe(),10<h)){if(pr(u,i,Li,!cr),jt(u,0,!0)!==0)break t;u.timeoutHandle=wv(tv.bind(null,u,o,$n,pc,od,i,Li,is,$s,cr,_,2,-0,0),h);break t}tv(u,o,$n,pc,od,i,Li,is,$s,cr,_,0,-0,0)}}break}while(!0);na(n)}function tv(n,i,o,u,h,_,T,D,H,et,dt,xt,at,rt){if(n.timeoutHandle=-1,xt=i.subtreeFlags,(xt&8192||(xt&16785408)===16785408)&&(Ol={stylesheets:null,count:0,unsuspend:pT},Y0(i),xt=_T(),xt!==null)){n.cancelPendingCommit=xt(ov.bind(null,n,i,_,o,u,h,T,D,H,dt,1,at,rt)),pr(n,_,T,!et);return}ov(n,i,_,o,u,h,T,D,H)}function NE(n){for(var i=n;;){var o=i.tag;if((o===0||o===11||o===15)&&i.flags&16384&&(o=i.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var h=o[u],_=h.getSnapshot;h=h.value;try{if(!ci(_(),h))return!1}catch{return!1}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function pr(n,i,o,u){i&=~sd,i&=~is,n.suspendedLanes|=i,n.pingedLanes&=~i,u&&(n.warmLanes|=i),u=n.expirationTimes;for(var h=i;0<h;){var _=31-Pt(h),T=1<<_;u[_]=-1,h&=~T}o!==0&&yt(n,o,i)}function mc(){return(Oe&6)===0?(wl(0),!1):!0}function hd(){if(me!==null){if(Pe===0)var n=me.return;else n=me,Ma=Qr=null,Ch(n),js=null,vl=0,n=me;for(;n!==null;)N0(n.alternate,n),n=n.return;me=null}}function no(n,i){var o=n.timeoutHandle;o!==-1&&(n.timeoutHandle=-1,QE(o)),o=n.cancelPendingCommit,o!==null&&(n.cancelPendingCommit=null,o()),hd(),je=n,me=o=xa(n.current,null),Ee=i,Pe=0,pi=null,cr=!1,Js=Ct(n,i),rd=!1,$s=Li=sd=is=fr=rn=0,$n=Al=null,od=!1,(i&8)!==0&&(i|=i&32);var u=n.entangledLanes;if(u!==0)for(n=n.entanglements,u&=i;0<u;){var h=31-Pt(u),_=1<<h;i|=n[h],u&=~_}return Da=i,Iu(),o}function ev(n,i){ce=null,z.H=nc,i===ul||i===qu?(i=vg(),Pe=3):i===mg?(i=vg(),Pe=4):Pe=i===x0?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,pi=i,me===null&&(rn=1,oc(n,Ri(i,n.current)))}function nv(){var n=z.H;return z.H=nc,n===null?nc:n}function iv(){var n=z.A;return z.A=UE,n}function dd(){rn=4,cr||(Ee&4194048)!==Ee&&Ui.current!==null||(Js=!0),(fr&134217727)===0&&(is&134217727)===0||je===null||pr(je,Ee,Li,!1)}function pd(n,i,o){var u=Oe;Oe|=2;var h=nv(),_=iv();(je!==n||Ee!==i)&&(pc=null,no(n,i)),i=!1;var T=rn;t:do try{if(Pe!==0&&me!==null){var D=me,H=pi;switch(Pe){case 8:hd(),T=6;break t;case 3:case 2:case 9:case 6:Ui.current===null&&(i=!0);var et=Pe;if(Pe=0,pi=null,io(n,D,H,et),o&&Js){T=0;break t}break;default:et=Pe,Pe=0,pi=null,io(n,D,H,et)}}OE(),T=rn;break}catch(dt){ev(n,dt)}while(!0);return i&&n.shellSuspendCounter++,Ma=Qr=null,Oe=u,z.H=h,z.A=_,me===null&&(je=null,Ee=0,Iu()),T}function OE(){for(;me!==null;)av(me)}function PE(n,i){var o=Oe;Oe|=2;var u=nv(),h=iv();je!==n||Ee!==i?(pc=null,dc=pe()+500,no(n,i)):Js=Ct(n,i);t:do try{if(Pe!==0&&me!==null){i=me;var _=pi;e:switch(Pe){case 1:Pe=0,pi=null,io(n,i,_,1);break;case 2:case 9:if(_g(_)){Pe=0,pi=null,rv(i);break}i=function(){Pe!==2&&Pe!==9||je!==n||(Pe=7),na(n)},_.then(i,i);break t;case 3:Pe=7;break t;case 4:Pe=5;break t;case 7:_g(_)?(Pe=0,pi=null,rv(i)):(Pe=0,pi=null,io(n,i,_,7));break;case 5:var T=null;switch(me.tag){case 26:T=me.memoizedState;case 5:case 27:var D=me;if(!T||Hv(T)){Pe=0,pi=null;var H=D.sibling;if(H!==null)me=H;else{var et=D.return;et!==null?(me=et,_c(et)):me=null}break e}}Pe=0,pi=null,io(n,i,_,5);break;case 6:Pe=0,pi=null,io(n,i,_,6);break;case 8:hd(),rn=6;break t;default:throw Error(a(462))}}zE();break}catch(dt){ev(n,dt)}while(!0);return Ma=Qr=null,z.H=u,z.A=h,Oe=o,me!==null?0:(je=null,Ee=0,Iu(),rn)}function zE(){for(;me!==null&&!Un();)av(me)}function av(n){var i=U0(n.alternate,n,Da);n.memoizedProps=n.pendingProps,i===null?_c(n):me=i}function rv(n){var i=n,o=i.alternate;switch(i.tag){case 15:case 0:i=b0(o,i,i.pendingProps,i.type,void 0,Ee);break;case 11:i=b0(o,i,i.pendingProps,i.type.render,i.ref,Ee);break;case 5:Ch(i);default:N0(o,i),i=me=sg(i,Da),i=U0(o,i,Da)}n.memoizedProps=n.pendingProps,i===null?_c(n):me=i}function io(n,i,o,u){Ma=Qr=null,Ch(i),js=null,vl=0;var h=i.return;try{if(bE(n,h,i,o,Ee)){rn=1,oc(n,Ri(o,n.current)),me=null;return}}catch(_){if(h!==null)throw me=h,_;rn=1,oc(n,Ri(o,n.current)),me=null;return}i.flags&32768?(Ce||u===1?n=!0:Js||(Ee&536870912)!==0?n=!1:(cr=n=!0,(u===2||u===9||u===3||u===6)&&(u=Ui.current,u!==null&&u.tag===13&&(u.flags|=16384))),sv(i,n)):_c(i)}function _c(n){var i=n;do{if((i.flags&32768)!==0){sv(i,cr);return}n=i.return;var o=RE(i.alternate,i,Da);if(o!==null){me=o;return}if(i=i.sibling,i!==null){me=i;return}me=i=n}while(i!==null);rn===0&&(rn=5)}function sv(n,i){do{var o=wE(n.alternate,n);if(o!==null){o.flags&=32767,me=o;return}if(o=n.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!i&&(n=n.sibling,n!==null)){me=n;return}me=n=o}while(n!==null);rn=6,me=null}function ov(n,i,o,u,h,_,T,D,H){n.cancelPendingCommit=null;do gc();while(Pn!==0);if((Oe&6)!==0)throw Error(a(327));if(i!==null){if(i===n.current)throw Error(a(177));if(_=i.lanes|i.childLanes,_|=ah,At(n,o,_,T,D,H),n===je&&(me=je=null,Ee=0),to=i,dr=n,eo=o,ud=_,cd=h,Q0=u,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,HE(re,function(){return hv(),null})):(n.callbackNode=null,n.callbackPriority=0),u=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||u){u=z.T,z.T=null,h=k.p,k.p=2,T=Oe,Oe|=4;try{CE(n,i,o)}finally{Oe=T,k.p=h,z.T=u}}Pn=1,lv(),uv(),cv()}}function lv(){if(Pn===1){Pn=0;var n=dr,i=to,o=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||o){o=z.T,z.T=null;var u=k.p;k.p=2;var h=Oe;Oe|=4;try{X0(i,n);var _=Ad,T=K_(n.containerInfo),D=_.focusedElem,H=_.selectionRange;if(T!==D&&D&&D.ownerDocument&&Z_(D.ownerDocument.documentElement,D)){if(H!==null&&$f(D)){var et=H.start,dt=H.end;if(dt===void 0&&(dt=et),"selectionStart"in D)D.selectionStart=et,D.selectionEnd=Math.min(dt,D.value.length);else{var xt=D.ownerDocument||document,at=xt&&xt.defaultView||window;if(at.getSelection){var rt=at.getSelection(),ne=D.textContent.length,Jt=Math.min(H.start,ne),Fe=H.end===void 0?Jt:Math.min(H.end,ne);!rt.extend&&Jt>Fe&&(T=Fe,Fe=Jt,Jt=T);var j=j_(D,Jt),X=j_(D,Fe);if(j&&X&&(rt.rangeCount!==1||rt.anchorNode!==j.node||rt.anchorOffset!==j.offset||rt.focusNode!==X.node||rt.focusOffset!==X.offset)){var tt=xt.createRange();tt.setStart(j.node,j.offset),rt.removeAllRanges(),Jt>Fe?(rt.addRange(tt),rt.extend(X.node,X.offset)):(tt.setEnd(X.node,X.offset),rt.addRange(tt))}}}}for(xt=[],rt=D;rt=rt.parentNode;)rt.nodeType===1&&xt.push({element:rt,left:rt.scrollLeft,top:rt.scrollTop});for(typeof D.focus=="function"&&D.focus(),D=0;D<xt.length;D++){var _t=xt[D];_t.element.scrollLeft=_t.left,_t.element.scrollTop=_t.top}}Cc=!!bd,Ad=bd=null}finally{Oe=h,k.p=u,z.T=o}}n.current=i,Pn=2}}function uv(){if(Pn===2){Pn=0;var n=dr,i=to,o=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||o){o=z.T,z.T=null;var u=k.p;k.p=2;var h=Oe;Oe|=4;try{H0(n,i.alternate,i)}finally{Oe=h,k.p=u,z.T=o}}Pn=3}}function cv(){if(Pn===4||Pn===3){Pn=0,be();var n=dr,i=to,o=eo,u=Q0;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Pn=5:(Pn=0,to=dr=null,fv(n,n.pendingLanes));var h=n.pendingLanes;if(h===0&&(hr=null),Ne(o),i=i.stateNode,vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(pt,i,void 0,(i.current.flags&128)===128)}catch{}if(u!==null){i=z.T,h=k.p,k.p=2,z.T=null;try{for(var _=n.onRecoverableError,T=0;T<u.length;T++){var D=u[T];_(D.value,{componentStack:D.stack})}}finally{z.T=i,k.p=h}}(eo&3)!==0&&gc(),na(n),h=n.pendingLanes,(o&4194090)!==0&&(h&42)!==0?n===fd?Rl++:(Rl=0,fd=n):Rl=0,wl(0)}}function fv(n,i){(n.pooledCacheLanes&=i)===0&&(i=n.pooledCache,i!=null&&(n.pooledCache=null,ol(i)))}function gc(n){return lv(),uv(),cv(),hv()}function hv(){if(Pn!==5)return!1;var n=dr,i=ud;ud=0;var o=Ne(eo),u=z.T,h=k.p;try{k.p=32>o?32:o,z.T=null,o=cd,cd=null;var _=dr,T=eo;if(Pn=0,to=dr=null,eo=0,(Oe&6)!==0)throw Error(a(331));var D=Oe;if(Oe|=4,Z0(_.current),q0(_,_.current,T,o),Oe=D,wl(0,!1),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(pt,_)}catch{}return!0}finally{k.p=h,z.T=u,fv(n,i)}}function dv(n,i,o){i=Ri(o,i),i=kh(n.stateNode,i,2),n=ir(n,i,2),n!==null&&(It(n,2),na(n))}function Xe(n,i,o){if(n.tag===3)dv(n,n,o);else for(;i!==null;){if(i.tag===3){dv(i,n,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(hr===null||!hr.has(u))){n=Ri(o,n),o=g0(2),u=ir(i,o,2),u!==null&&(v0(o,u,i,n),It(u,2),na(u));break}}i=i.return}}function md(n,i,o){var u=n.pingCache;if(u===null){u=n.pingCache=new LE;var h=new Set;u.set(i,h)}else h=u.get(i),h===void 0&&(h=new Set,u.set(i,h));h.has(o)||(rd=!0,h.add(o),n=IE.bind(null,n,i,o),i.then(n,n))}function IE(n,i,o){var u=n.pingCache;u!==null&&u.delete(i),n.pingedLanes|=n.suspendedLanes&o,n.warmLanes&=~o,je===n&&(Ee&o)===o&&(rn===4||rn===3&&(Ee&62914560)===Ee&&300>pe()-ld?(Oe&2)===0&&no(n,0):sd|=o,$s===Ee&&($s=0)),na(n)}function pv(n,i){i===0&&(i=Lt()),n=Bs(n,i),n!==null&&(It(n,i),na(n))}function BE(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),pv(n,o)}function FE(n,i){var o=0;switch(n.tag){case 13:var u=n.stateNode,h=n.memoizedState;h!==null&&(o=h.retryLane);break;case 19:u=n.stateNode;break;case 22:u=n.stateNode._retryCache;break;default:throw Error(a(314))}u!==null&&u.delete(i),pv(n,o)}function HE(n,i){return ve(n,i)}var vc=null,ao=null,_d=!1,xc=!1,gd=!1,as=0;function na(n){n!==ao&&n.next===null&&(ao===null?vc=ao=n:ao=ao.next=n),xc=!0,_d||(_d=!0,VE())}function wl(n,i){if(!gd&&xc){gd=!0;do for(var o=!1,u=vc;u!==null;){if(n!==0){var h=u.pendingLanes;if(h===0)var _=0;else{var T=u.suspendedLanes,D=u.pingedLanes;_=(1<<31-Pt(42|n)+1)-1,_&=h&~(T&~D),_=_&201326741?_&201326741|1:_?_|2:0}_!==0&&(o=!0,vv(u,_))}else _=Ee,_=jt(u,u===je?_:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(_&3)===0||Ct(u,_)||(o=!0,vv(u,_));u=u.next}while(o);gd=!1}}function GE(){mv()}function mv(){xc=_d=!1;var n=0;as!==0&&(KE()&&(n=as),as=0);for(var i=pe(),o=null,u=vc;u!==null;){var h=u.next,_=_v(u,i);_===0?(u.next=null,o===null?vc=h:o.next=h,h===null&&(ao=o)):(o=u,(n!==0||(_&3)!==0)&&(xc=!0)),u=h}wl(n)}function _v(n,i){for(var o=n.suspendedLanes,u=n.pingedLanes,h=n.expirationTimes,_=n.pendingLanes&-62914561;0<_;){var T=31-Pt(_),D=1<<T,H=h[T];H===-1?((D&o)===0||(D&u)!==0)&&(h[T]=ae(D,i)):H<=i&&(n.expiredLanes|=D),_&=~D}if(i=je,o=Ee,o=jt(n,n===i?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u=n.callbackNode,o===0||n===i&&(Pe===2||Pe===9)||n.cancelPendingCommit!==null)return u!==null&&u!==null&&V(u),n.callbackNode=null,n.callbackPriority=0;if((o&3)===0||Ct(n,o)){if(i=o&-o,i===n.callbackPriority)return i;switch(u!==null&&V(u),Ne(o)){case 2:case 8:o=Zt;break;case 32:o=re;break;case 268435456:o=B;break;default:o=re}return u=gv.bind(null,n),o=ve(o,u),n.callbackPriority=i,n.callbackNode=o,i}return u!==null&&u!==null&&V(u),n.callbackPriority=2,n.callbackNode=null,2}function gv(n,i){if(Pn!==0&&Pn!==5)return n.callbackNode=null,n.callbackPriority=0,null;var o=n.callbackNode;if(gc()&&n.callbackNode!==o)return null;var u=Ee;return u=jt(n,n===je?u:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u===0?null:($0(n,u,i),_v(n,pe()),n.callbackNode!=null&&n.callbackNode===o?gv.bind(null,n):null)}function vv(n,i){if(gc())return null;$0(n,i,!0)}function VE(){JE(function(){(Oe&6)!==0?ve(xe,GE):mv()})}function vd(){return as===0&&(as=q()),as}function xv(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Du(""+n)}function yv(n,i){var o=i.ownerDocument.createElement("input");return o.name=i.name,o.value=i.value,n.id&&o.setAttribute("form",n.id),i.parentNode.insertBefore(o,i),n=new FormData(n),o.parentNode.removeChild(o),n}function kE(n,i,o,u,h){if(i==="submit"&&o&&o.stateNode===h){var _=xv((h[Ln]||null).action),T=u.submitter;T&&(i=(i=T[Ln]||null)?xv(i.formAction):T.getAttribute("formAction"),i!==null&&(_=i,T=null));var D=new Ou("action","action",null,u,h);n.push({event:D,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(as!==0){var H=T?yv(h,T):new FormData(h);Bh(o,{pending:!0,data:H,method:h.method,action:_},null,H)}}else typeof _=="function"&&(D.preventDefault(),H=T?yv(h,T):new FormData(h),Bh(o,{pending:!0,data:H,method:h.method,action:_},_,H))},currentTarget:h}]})}}for(var xd=0;xd<ih.length;xd++){var yd=ih[xd],XE=yd.toLowerCase(),WE=yd[0].toUpperCase()+yd.slice(1);Hi(XE,"on"+WE)}Hi($_,"onAnimationEnd"),Hi(tg,"onAnimationIteration"),Hi(eg,"onAnimationStart"),Hi("dblclick","onDoubleClick"),Hi("focusin","onFocus"),Hi("focusout","onBlur"),Hi(lE,"onTransitionRun"),Hi(uE,"onTransitionStart"),Hi(cE,"onTransitionCancel"),Hi(ng,"onTransitionEnd"),L("onMouseEnter",["mouseout","mouseover"]),L("onMouseLeave",["mouseout","mouseover"]),L("onPointerEnter",["pointerout","pointerover"]),L("onPointerLeave",["pointerout","pointerover"]),ma("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ma("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ma("onBeforeInput",["compositionend","keypress","textInput","paste"]),ma("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ma("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ma("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Cl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Cl));function Sv(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],h=u.event;u=u.listeners;t:{var _=void 0;if(i)for(var T=u.length-1;0<=T;T--){var D=u[T],H=D.instance,et=D.currentTarget;if(D=D.listener,H!==_&&h.isPropagationStopped())break t;_=D,h.currentTarget=et;try{_(h)}catch(dt){sc(dt)}h.currentTarget=null,_=H}else for(T=0;T<u.length;T++){if(D=u[T],H=D.instance,et=D.currentTarget,D=D.listener,H!==_&&h.isPropagationStopped())break t;_=D,h.currentTarget=et;try{_(h)}catch(dt){sc(dt)}h.currentTarget=null,_=H}}}}function _e(n,i){var o=i[Hr];o===void 0&&(o=i[Hr]=new Set);var u=n+"__bubble";o.has(u)||(Mv(i,n,2,!1),o.add(u))}function Sd(n,i,o){var u=0;i&&(u|=4),Mv(o,n,u,i)}var yc="_reactListening"+Math.random().toString(36).slice(2);function Md(n){if(!n[yc]){n[yc]=!0,wu.forEach(function(o){o!=="selectionchange"&&(qE.has(o)||Sd(o,!1,n),Sd(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[yc]||(i[yc]=!0,Sd("selectionchange",!1,i))}}function Mv(n,i,o,u){switch(qv(i)){case 2:var h=xT;break;case 8:h=yT;break;default:h=zd}o=h.bind(null,i,o,n),h=void 0,!Xf||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),u?h!==void 0?n.addEventListener(i,o,{capture:!0,passive:h}):n.addEventListener(i,o,!0):h!==void 0?n.addEventListener(i,o,{passive:h}):n.addEventListener(i,o,!1)}function Ed(n,i,o,u,h){var _=u;if((i&1)===0&&(i&2)===0&&u!==null)t:for(;;){if(u===null)return;var T=u.tag;if(T===3||T===4){var D=u.stateNode.containerInfo;if(D===h)break;if(T===4)for(T=u.return;T!==null;){var H=T.tag;if((H===3||H===4)&&T.stateNode.containerInfo===h)return;T=T.return}for(;D!==null;){if(T=da(D),T===null)return;if(H=T.tag,H===5||H===6||H===26||H===27){u=_=T;continue t}D=D.parentNode}}u=u.return}C_(function(){var et=_,dt=Vf(o),xt=[];t:{var at=ig.get(n);if(at!==void 0){var rt=Ou,ne=n;switch(n){case"keypress":if(Lu(o)===0)break t;case"keydown":case"keyup":rt=HM;break;case"focusin":ne="focus",rt=jf;break;case"focusout":ne="blur",rt=jf;break;case"beforeblur":case"afterblur":rt=jf;break;case"click":if(o.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":rt=L_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":rt=wM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":rt=kM;break;case $_:case tg:case eg:rt=UM;break;case ng:rt=WM;break;case"scroll":case"scrollend":rt=AM;break;case"wheel":rt=YM;break;case"copy":case"cut":case"paste":rt=NM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":rt=O_;break;case"toggle":case"beforetoggle":rt=ZM}var Jt=(i&4)!==0,Fe=!Jt&&(n==="scroll"||n==="scrollend"),j=Jt?at!==null?at+"Capture":null:at;Jt=[];for(var X=et,tt;X!==null;){var _t=X;if(tt=_t.stateNode,_t=_t.tag,_t!==5&&_t!==26&&_t!==27||tt===null||j===null||(_t=jo(X,j),_t!=null&&Jt.push(Dl(X,_t,tt))),Fe)break;X=X.return}0<Jt.length&&(at=new rt(at,ne,null,o,dt),xt.push({event:at,listeners:Jt}))}}if((i&7)===0){t:{if(at=n==="mouseover"||n==="pointerover",rt=n==="mouseout"||n==="pointerout",at&&o!==Gf&&(ne=o.relatedTarget||o.fromElement)&&(da(ne)||ne[Zn]))break t;if((rt||at)&&(at=dt.window===dt?dt:(at=dt.ownerDocument)?at.defaultView||at.parentWindow:window,rt?(ne=o.relatedTarget||o.toElement,rt=et,ne=ne?da(ne):null,ne!==null&&(Fe=l(ne),Jt=ne.tag,ne!==Fe||Jt!==5&&Jt!==27&&Jt!==6)&&(ne=null)):(rt=null,ne=et),rt!==ne)){if(Jt=L_,_t="onMouseLeave",j="onMouseEnter",X="mouse",(n==="pointerout"||n==="pointerover")&&(Jt=O_,_t="onPointerLeave",j="onPointerEnter",X="pointer"),Fe=rt==null?at:Vr(rt),tt=ne==null?at:Vr(ne),at=new Jt(_t,X+"leave",rt,o,dt),at.target=Fe,at.relatedTarget=tt,_t=null,da(dt)===et&&(Jt=new Jt(j,X+"enter",ne,o,dt),Jt.target=tt,Jt.relatedTarget=Fe,_t=Jt),Fe=_t,rt&&ne)e:{for(Jt=rt,j=ne,X=0,tt=Jt;tt;tt=ro(tt))X++;for(tt=0,_t=j;_t;_t=ro(_t))tt++;for(;0<X-tt;)Jt=ro(Jt),X--;for(;0<tt-X;)j=ro(j),tt--;for(;X--;){if(Jt===j||j!==null&&Jt===j.alternate)break e;Jt=ro(Jt),j=ro(j)}Jt=null}else Jt=null;rt!==null&&Ev(xt,at,rt,Jt,!1),ne!==null&&Fe!==null&&Ev(xt,Fe,ne,Jt,!0)}}t:{if(at=et?Vr(et):window,rt=at.nodeName&&at.nodeName.toLowerCase(),rt==="select"||rt==="input"&&at.type==="file")var Ht=V_;else if(H_(at))if(k_)Ht=rE;else{Ht=iE;var de=nE}else rt=at.nodeName,!rt||rt.toLowerCase()!=="input"||at.type!=="checkbox"&&at.type!=="radio"?et&&Hf(et.elementType)&&(Ht=V_):Ht=aE;if(Ht&&(Ht=Ht(n,et))){G_(xt,Ht,o,dt);break t}de&&de(n,at,et),n==="focusout"&&et&&at.type==="number"&&et.memoizedProps.value!=null&&Fn(at,"number",at.value)}switch(de=et?Vr(et):window,n){case"focusin":(H_(de)||de.contentEditable==="true")&&(Ps=de,th=et,nl=null);break;case"focusout":nl=th=Ps=null;break;case"mousedown":eh=!0;break;case"contextmenu":case"mouseup":case"dragend":eh=!1,Q_(xt,o,dt);break;case"selectionchange":if(oE)break;case"keydown":case"keyup":Q_(xt,o,dt)}var qt;if(Kf)t:{switch(n){case"compositionstart":var $t="onCompositionStart";break t;case"compositionend":$t="onCompositionEnd";break t;case"compositionupdate":$t="onCompositionUpdate";break t}$t=void 0}else Os?B_(n,o)&&($t="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&($t="onCompositionStart");$t&&(P_&&o.locale!=="ko"&&(Os||$t!=="onCompositionStart"?$t==="onCompositionEnd"&&Os&&(qt=D_()):($a=dt,Wf="value"in $a?$a.value:$a.textContent,Os=!0)),de=Sc(et,$t),0<de.length&&($t=new N_($t,n,null,o,dt),xt.push({event:$t,listeners:de}),qt?$t.data=qt:(qt=F_(o),qt!==null&&($t.data=qt)))),(qt=QM?JM(n,o):$M(n,o))&&($t=Sc(et,"onBeforeInput"),0<$t.length&&(de=new N_("onBeforeInput","beforeinput",null,o,dt),xt.push({event:de,listeners:$t}),de.data=qt)),kE(xt,n,et,o,dt)}Sv(xt,i)})}function Dl(n,i,o){return{instance:n,listener:i,currentTarget:o}}function Sc(n,i){for(var o=i+"Capture",u=[];n!==null;){var h=n,_=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||_===null||(h=jo(n,o),h!=null&&u.unshift(Dl(n,h,_)),h=jo(n,i),h!=null&&u.push(Dl(n,h,_))),n.tag===3)return u;n=n.return}return[]}function ro(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function Ev(n,i,o,u,h){for(var _=i._reactName,T=[];o!==null&&o!==u;){var D=o,H=D.alternate,et=D.stateNode;if(D=D.tag,H!==null&&H===u)break;D!==5&&D!==26&&D!==27||et===null||(H=et,h?(et=jo(o,_),et!=null&&T.unshift(Dl(o,et,H))):h||(et=jo(o,_),et!=null&&T.push(Dl(o,et,H)))),o=o.return}T.length!==0&&n.push({event:i,listeners:T})}var YE=/\r\n?/g,jE=/\u0000|\uFFFD/g;function Tv(n){return(typeof n=="string"?n:""+n).replace(YE,`
`).replace(jE,"")}function bv(n,i){return i=Tv(i),Tv(n)===i}function Mc(){}function Be(n,i,o,u,h,_){switch(o){case"children":typeof u=="string"?i==="body"||i==="textarea"&&u===""||Qi(n,u):(typeof u=="number"||typeof u=="bigint")&&i!=="body"&&Qi(n,""+u);break;case"className":Dt(n,"class",u);break;case"tabIndex":Dt(n,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Dt(n,o,u);break;case"style":R_(n,u,_);break;case"data":if(i!=="object"){Dt(n,"data",u);break}case"src":case"href":if(u===""&&(i!=="a"||o!=="href")){n.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=Du(""+u),n.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){n.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof _=="function"&&(o==="formAction"?(i!=="input"&&Be(n,i,"name",h.name,h,null),Be(n,i,"formEncType",h.formEncType,h,null),Be(n,i,"formMethod",h.formMethod,h,null),Be(n,i,"formTarget",h.formTarget,h,null)):(Be(n,i,"encType",h.encType,h,null),Be(n,i,"method",h.method,h,null),Be(n,i,"target",h.target,h,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=Du(""+u),n.setAttribute(o,u);break;case"onClick":u!=null&&(n.onclick=Mc);break;case"onScroll":u!=null&&_e("scroll",n);break;case"onScrollEnd":u!=null&&_e("scrollend",n);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(a(61));if(o=u.__html,o!=null){if(h.children!=null)throw Error(a(60));n.innerHTML=o}}break;case"multiple":n.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":n.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){n.removeAttribute("xlink:href");break}o=Du(""+u),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""+u):n.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""):n.removeAttribute(o);break;case"capture":case"download":u===!0?n.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,u):n.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?n.setAttribute(o,u):n.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?n.removeAttribute(o):n.setAttribute(o,u);break;case"popover":_e("beforetoggle",n),_e("toggle",n),bt(n,"popover",u);break;case"xlinkActuate":Ot(n,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":Ot(n,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":Ot(n,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":Ot(n,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":Ot(n,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":Ot(n,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":Ot(n,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":Ot(n,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":Ot(n,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":bt(n,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=TM.get(o)||o,bt(n,o,u))}}function Td(n,i,o,u,h,_){switch(o){case"style":R_(n,u,_);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(a(61));if(o=u.__html,o!=null){if(h.children!=null)throw Error(a(60));n.innerHTML=o}}break;case"children":typeof u=="string"?Qi(n,u):(typeof u=="number"||typeof u=="bigint")&&Qi(n,""+u);break;case"onScroll":u!=null&&_e("scroll",n);break;case"onScrollEnd":u!=null&&_e("scrollend",n);break;case"onClick":u!=null&&(n.onclick=Mc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Cu.hasOwnProperty(o))t:{if(o[0]==="o"&&o[1]==="n"&&(h=o.endsWith("Capture"),i=o.slice(2,h?o.length-7:void 0),_=n[Ln]||null,_=_!=null?_[o]:null,typeof _=="function"&&n.removeEventListener(i,_,h),typeof u=="function")){typeof _!="function"&&_!==null&&(o in n?n[o]=null:n.hasAttribute(o)&&n.removeAttribute(o)),n.addEventListener(i,u,h);break t}o in n?n[o]=u:u===!0?n.setAttribute(o,""):bt(n,o,u)}}}function zn(n,i,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_e("error",n),_e("load",n);var u=!1,h=!1,_;for(_ in o)if(o.hasOwnProperty(_)){var T=o[_];if(T!=null)switch(_){case"src":u=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Be(n,i,_,T,o,null)}}h&&Be(n,i,"srcSet",o.srcSet,o,null),u&&Be(n,i,"src",o.src,o,null);return;case"input":_e("invalid",n);var D=_=T=h=null,H=null,et=null;for(u in o)if(o.hasOwnProperty(u)){var dt=o[u];if(dt!=null)switch(u){case"name":h=dt;break;case"type":T=dt;break;case"checked":H=dt;break;case"defaultChecked":et=dt;break;case"value":_=dt;break;case"defaultValue":D=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(a(137,i));break;default:Be(n,i,u,dt,o,null)}}ke(n,_,D,H,et,T,h,!1),ze(n);return;case"select":_e("invalid",n),u=T=_=null;for(h in o)if(o.hasOwnProperty(h)&&(D=o[h],D!=null))switch(h){case"value":_=D;break;case"defaultValue":T=D;break;case"multiple":u=D;default:Be(n,i,h,D,o,null)}i=_,o=T,n.multiple=!!u,i!=null?vn(n,!!u,i,!1):o!=null&&vn(n,!!u,o,!0);return;case"textarea":_e("invalid",n),_=h=u=null;for(T in o)if(o.hasOwnProperty(T)&&(D=o[T],D!=null))switch(T){case"value":u=D;break;case"defaultValue":h=D;break;case"children":_=D;break;case"dangerouslySetInnerHTML":if(D!=null)throw Error(a(91));break;default:Be(n,i,T,D,o,null)}Nn(n,u,h,_),ze(n);return;case"option":for(H in o)if(o.hasOwnProperty(H)&&(u=o[H],u!=null))switch(H){case"selected":n.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:Be(n,i,H,u,o,null)}return;case"dialog":_e("beforetoggle",n),_e("toggle",n),_e("cancel",n),_e("close",n);break;case"iframe":case"object":_e("load",n);break;case"video":case"audio":for(u=0;u<Cl.length;u++)_e(Cl[u],n);break;case"image":_e("error",n),_e("load",n);break;case"details":_e("toggle",n);break;case"embed":case"source":case"link":_e("error",n),_e("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in o)if(o.hasOwnProperty(et)&&(u=o[et],u!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Be(n,i,et,u,o,null)}return;default:if(Hf(i)){for(dt in o)o.hasOwnProperty(dt)&&(u=o[dt],u!==void 0&&Td(n,i,dt,u,o,void 0));return}}for(D in o)o.hasOwnProperty(D)&&(u=o[D],u!=null&&Be(n,i,D,u,o,null))}function ZE(n,i,o,u){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,_=null,T=null,D=null,H=null,et=null,dt=null;for(rt in o){var xt=o[rt];if(o.hasOwnProperty(rt)&&xt!=null)switch(rt){case"checked":break;case"value":break;case"defaultValue":H=xt;default:u.hasOwnProperty(rt)||Be(n,i,rt,null,u,xt)}}for(var at in u){var rt=u[at];if(xt=o[at],u.hasOwnProperty(at)&&(rt!=null||xt!=null))switch(at){case"type":_=rt;break;case"name":h=rt;break;case"checked":et=rt;break;case"defaultChecked":dt=rt;break;case"value":T=rt;break;case"defaultValue":D=rt;break;case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(a(137,i));break;default:rt!==xt&&Be(n,i,at,rt,u,xt)}}_a(n,T,D,H,et,dt,_,h);return;case"select":rt=T=D=at=null;for(_ in o)if(H=o[_],o.hasOwnProperty(_)&&H!=null)switch(_){case"value":break;case"multiple":rt=H;default:u.hasOwnProperty(_)||Be(n,i,_,null,u,H)}for(h in u)if(_=u[h],H=o[h],u.hasOwnProperty(h)&&(_!=null||H!=null))switch(h){case"value":at=_;break;case"defaultValue":D=_;break;case"multiple":T=_;default:_!==H&&Be(n,i,h,_,u,H)}i=D,o=T,u=rt,at!=null?vn(n,!!o,at,!1):!!u!=!!o&&(i!=null?vn(n,!!o,i,!0):vn(n,!!o,o?[]:"",!1));return;case"textarea":rt=at=null;for(D in o)if(h=o[D],o.hasOwnProperty(D)&&h!=null&&!u.hasOwnProperty(D))switch(D){case"value":break;case"children":break;default:Be(n,i,D,null,u,h)}for(T in u)if(h=u[T],_=o[T],u.hasOwnProperty(T)&&(h!=null||_!=null))switch(T){case"value":at=h;break;case"defaultValue":rt=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==_&&Be(n,i,T,h,u,_)}bn(n,at,rt);return;case"option":for(var ne in o)if(at=o[ne],o.hasOwnProperty(ne)&&at!=null&&!u.hasOwnProperty(ne))switch(ne){case"selected":n.selected=!1;break;default:Be(n,i,ne,null,u,at)}for(H in u)if(at=u[H],rt=o[H],u.hasOwnProperty(H)&&at!==rt&&(at!=null||rt!=null))switch(H){case"selected":n.selected=at&&typeof at!="function"&&typeof at!="symbol";break;default:Be(n,i,H,at,u,rt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Jt in o)at=o[Jt],o.hasOwnProperty(Jt)&&at!=null&&!u.hasOwnProperty(Jt)&&Be(n,i,Jt,null,u,at);for(et in u)if(at=u[et],rt=o[et],u.hasOwnProperty(et)&&at!==rt&&(at!=null||rt!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(a(137,i));break;default:Be(n,i,et,at,u,rt)}return;default:if(Hf(i)){for(var Fe in o)at=o[Fe],o.hasOwnProperty(Fe)&&at!==void 0&&!u.hasOwnProperty(Fe)&&Td(n,i,Fe,void 0,u,at);for(dt in u)at=u[dt],rt=o[dt],!u.hasOwnProperty(dt)||at===rt||at===void 0&&rt===void 0||Td(n,i,dt,at,u,rt);return}}for(var j in o)at=o[j],o.hasOwnProperty(j)&&at!=null&&!u.hasOwnProperty(j)&&Be(n,i,j,null,u,at);for(xt in u)at=u[xt],rt=o[xt],!u.hasOwnProperty(xt)||at===rt||at==null&&rt==null||Be(n,i,xt,at,u,rt)}var bd=null,Ad=null;function Ec(n){return n.nodeType===9?n:n.ownerDocument}function Av(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Rv(n,i){if(n===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&i==="foreignObject"?0:n}function Rd(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var wd=null;function KE(){var n=window.event;return n&&n.type==="popstate"?n===wd?!1:(wd=n,!0):(wd=null,!1)}var wv=typeof setTimeout=="function"?setTimeout:void 0,QE=typeof clearTimeout=="function"?clearTimeout:void 0,Cv=typeof Promise=="function"?Promise:void 0,JE=typeof queueMicrotask=="function"?queueMicrotask:typeof Cv<"u"?function(n){return Cv.resolve(null).then(n).catch($E)}:wv;function $E(n){setTimeout(function(){throw n})}function mr(n){return n==="head"}function Dv(n,i){var o=i,u=0,h=0;do{var _=o.nextSibling;if(n.removeChild(o),_&&_.nodeType===8)if(o=_.data,o==="/$"){if(0<u&&8>u){o=u;var T=n.ownerDocument;if(o&1&&Ul(T.documentElement),o&2&&Ul(T.body),o&4)for(o=T.head,Ul(o),T=o.firstChild;T;){var D=T.nextSibling,H=T.nodeName;T[Za]||H==="SCRIPT"||H==="STYLE"||H==="LINK"&&T.rel.toLowerCase()==="stylesheet"||o.removeChild(T),T=D}}if(h===0){n.removeChild(_),Fl(i);return}h--}else o==="$"||o==="$?"||o==="$!"?h++:u=o.charCodeAt(0)-48;else u=0;o=_}while(o);Fl(i)}function Cd(n){var i=n.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var o=i;switch(i=i.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Cd(o),Ka(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}n.removeChild(o)}}function tT(n,i,o,u){for(;n.nodeType===1;){var h=o;if(n.nodeName.toLowerCase()!==i.toLowerCase()){if(!u&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(u){if(!n[Za])switch(i){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(_=n.getAttribute("rel"),_==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(_!==h.rel||n.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||n.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||n.getAttribute("title")!==(h.title==null?null:h.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(_=n.getAttribute("src"),(_!==(h.src==null?null:h.src)||n.getAttribute("type")!==(h.type==null?null:h.type)||n.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&_&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(i==="input"&&n.type==="hidden"){var _=h.name==null?null:""+h.name;if(h.type==="hidden"&&n.getAttribute("name")===_)return n}else return n;if(n=Vi(n.nextSibling),n===null)break}return null}function eT(n,i,o){if(i==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!o||(n=Vi(n.nextSibling),n===null))return null;return n}function Dd(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function nT(n,i){var o=n.ownerDocument;if(n.data!=="$?"||o.readyState==="complete")i();else{var u=function(){i(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),n._reactRetry=u}}function Vi(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return n}var Ud=null;function Uv(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}function Lv(n,i,o){switch(i=Ec(o),n){case"html":if(n=i.documentElement,!n)throw Error(a(452));return n;case"head":if(n=i.head,!n)throw Error(a(453));return n;case"body":if(n=i.body,!n)throw Error(a(454));return n;default:throw Error(a(451))}}function Ul(n){for(var i=n.attributes;i.length;)n.removeAttributeNode(i[0]);Ka(n)}var Ni=new Map,Nv=new Set;function Tc(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var Ua=k.d;k.d={f:iT,r:aT,D:rT,C:sT,L:oT,m:lT,X:cT,S:uT,M:fT};function iT(){var n=Ua.f(),i=mc();return n||i}function aT(n){var i=pa(n);i!==null&&i.tag===5&&i.type==="form"?$g(i):Ua.r(n)}var so=typeof document>"u"?null:document;function Ov(n,i,o){var u=so;if(u&&typeof i=="string"&&i){var h=Ye(i);h='link[rel="'+n+'"][href="'+h+'"]',typeof o=="string"&&(h+='[crossorigin="'+o+'"]'),Nv.has(h)||(Nv.add(h),n={rel:n,crossOrigin:o,href:i},u.querySelector(h)===null&&(i=u.createElement("link"),zn(i,"link",n),fn(i),u.head.appendChild(i)))}}function rT(n){Ua.D(n),Ov("dns-prefetch",n,null)}function sT(n,i){Ua.C(n,i),Ov("preconnect",n,i)}function oT(n,i,o){Ua.L(n,i,o);var u=so;if(u&&n&&i){var h='link[rel="preload"][as="'+Ye(i)+'"]';i==="image"&&o&&o.imageSrcSet?(h+='[imagesrcset="'+Ye(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(h+='[imagesizes="'+Ye(o.imageSizes)+'"]')):h+='[href="'+Ye(n)+'"]';var _=h;switch(i){case"style":_=oo(n);break;case"script":_=lo(n)}Ni.has(_)||(n=m({rel:"preload",href:i==="image"&&o&&o.imageSrcSet?void 0:n,as:i},o),Ni.set(_,n),u.querySelector(h)!==null||i==="style"&&u.querySelector(Ll(_))||i==="script"&&u.querySelector(Nl(_))||(i=u.createElement("link"),zn(i,"link",n),fn(i),u.head.appendChild(i)))}}function lT(n,i){Ua.m(n,i);var o=so;if(o&&n){var u=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+Ye(u)+'"][href="'+Ye(n)+'"]',_=h;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":_=lo(n)}if(!Ni.has(_)&&(n=m({rel:"modulepreload",href:n},i),Ni.set(_,n),o.querySelector(h)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Nl(_)))return}u=o.createElement("link"),zn(u,"link",n),fn(u),o.head.appendChild(u)}}}function uT(n,i,o){Ua.S(n,i,o);var u=so;if(u&&n){var h=Qa(u).hoistableStyles,_=oo(n);i=i||"default";var T=h.get(_);if(!T){var D={loading:0,preload:null};if(T=u.querySelector(Ll(_)))D.loading=5;else{n=m({rel:"stylesheet",href:n,"data-precedence":i},o),(o=Ni.get(_))&&Ld(n,o);var H=T=u.createElement("link");fn(H),zn(H,"link",n),H._p=new Promise(function(et,dt){H.onload=et,H.onerror=dt}),H.addEventListener("load",function(){D.loading|=1}),H.addEventListener("error",function(){D.loading|=2}),D.loading|=4,bc(T,i,u)}T={type:"stylesheet",instance:T,count:1,state:D},h.set(_,T)}}}function cT(n,i){Ua.X(n,i);var o=so;if(o&&n){var u=Qa(o).hoistableScripts,h=lo(n),_=u.get(h);_||(_=o.querySelector(Nl(h)),_||(n=m({src:n,async:!0},i),(i=Ni.get(h))&&Nd(n,i),_=o.createElement("script"),fn(_),zn(_,"link",n),o.head.appendChild(_)),_={type:"script",instance:_,count:1,state:null},u.set(h,_))}}function fT(n,i){Ua.M(n,i);var o=so;if(o&&n){var u=Qa(o).hoistableScripts,h=lo(n),_=u.get(h);_||(_=o.querySelector(Nl(h)),_||(n=m({src:n,async:!0,type:"module"},i),(i=Ni.get(h))&&Nd(n,i),_=o.createElement("script"),fn(_),zn(_,"link",n),o.head.appendChild(_)),_={type:"script",instance:_,count:1,state:null},u.set(h,_))}}function Pv(n,i,o,u){var h=(h=Mt.current)?Tc(h):null;if(!h)throw Error(a(446));switch(n){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(i=oo(o.href),o=Qa(h).hoistableStyles,u=o.get(i),u||(u={type:"style",instance:null,count:0,state:null},o.set(i,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){n=oo(o.href);var _=Qa(h).hoistableStyles,T=_.get(n);if(T||(h=h.ownerDocument||h,T={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},_.set(n,T),(_=h.querySelector(Ll(n)))&&!_._p&&(T.instance=_,T.state.loading=5),Ni.has(n)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Ni.set(n,o),_||hT(h,n,o,T.state))),i&&u===null)throw Error(a(528,""));return T}if(i&&u!==null)throw Error(a(529,""));return null;case"script":return i=o.async,o=o.src,typeof o=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=lo(o),o=Qa(h).hoistableScripts,u=o.get(i),u||(u={type:"script",instance:null,count:0,state:null},o.set(i,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,n))}}function oo(n){return'href="'+Ye(n)+'"'}function Ll(n){return'link[rel="stylesheet"]['+n+"]"}function zv(n){return m({},n,{"data-precedence":n.precedence,precedence:null})}function hT(n,i,o,u){n.querySelector('link[rel="preload"][as="style"]['+i+"]")?u.loading=1:(i=n.createElement("link"),u.preload=i,i.addEventListener("load",function(){return u.loading|=1}),i.addEventListener("error",function(){return u.loading|=2}),zn(i,"link",o),fn(i),n.head.appendChild(i))}function lo(n){return'[src="'+Ye(n)+'"]'}function Nl(n){return"script[async]"+n}function Iv(n,i,o){if(i.count++,i.instance===null)switch(i.type){case"style":var u=n.querySelector('style[data-href~="'+Ye(o.href)+'"]');if(u)return i.instance=u,fn(u),u;var h=m({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(n.ownerDocument||n).createElement("style"),fn(u),zn(u,"style",h),bc(u,o.precedence,n),i.instance=u;case"stylesheet":h=oo(o.href);var _=n.querySelector(Ll(h));if(_)return i.state.loading|=4,i.instance=_,fn(_),_;u=zv(o),(h=Ni.get(h))&&Ld(u,h),_=(n.ownerDocument||n).createElement("link"),fn(_);var T=_;return T._p=new Promise(function(D,H){T.onload=D,T.onerror=H}),zn(_,"link",u),i.state.loading|=4,bc(_,o.precedence,n),i.instance=_;case"script":return _=lo(o.src),(h=n.querySelector(Nl(_)))?(i.instance=h,fn(h),h):(u=o,(h=Ni.get(_))&&(u=m({},o),Nd(u,h)),n=n.ownerDocument||n,h=n.createElement("script"),fn(h),zn(h,"link",u),n.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(u=i.instance,i.state.loading|=4,bc(u,o.precedence,n));return i.instance}function bc(n,i,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=u.length?u[u.length-1]:null,_=h,T=0;T<u.length;T++){var D=u[T];if(D.dataset.precedence===i)_=D;else if(_!==h)break}_?_.parentNode.insertBefore(n,_.nextSibling):(i=o.nodeType===9?o.head:o,i.insertBefore(n,i.firstChild))}function Ld(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.title==null&&(n.title=i.title)}function Nd(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.integrity==null&&(n.integrity=i.integrity)}var Ac=null;function Bv(n,i,o){if(Ac===null){var u=new Map,h=Ac=new Map;h.set(o,u)}else h=Ac,u=h.get(o),u||(u=new Map,h.set(o,u));if(u.has(n))return u;for(u.set(n,null),o=o.getElementsByTagName(n),h=0;h<o.length;h++){var _=o[h];if(!(_[Za]||_[gn]||n==="link"&&_.getAttribute("rel")==="stylesheet")&&_.namespaceURI!=="http://www.w3.org/2000/svg"){var T=_.getAttribute(i)||"";T=n+T;var D=u.get(T);D?D.push(_):u.set(T,[_])}}return u}function Fv(n,i,o){n=n.ownerDocument||n,n.head.insertBefore(o,i==="title"?n.querySelector("head > title"):null)}function dT(n,i,o){if(o===1||i.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return n=i.disabled,typeof i.precedence=="string"&&n==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function Hv(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var Ol=null;function pT(){}function mT(n,i,o){if(Ol===null)throw Error(a(475));var u=Ol;if(i.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var h=oo(o.href),_=n.querySelector(Ll(h));if(_){n=_._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(u.count++,u=Rc.bind(u),n.then(u,u)),i.state.loading|=4,i.instance=_,fn(_);return}_=n.ownerDocument||n,o=zv(o),(h=Ni.get(h))&&Ld(o,h),_=_.createElement("link"),fn(_);var T=_;T._p=new Promise(function(D,H){T.onload=D,T.onerror=H}),zn(_,"link",o),i.instance=_}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(i,n),(n=i.state.preload)&&(i.state.loading&3)===0&&(u.count++,i=Rc.bind(u),n.addEventListener("load",i),n.addEventListener("error",i))}}function _T(){if(Ol===null)throw Error(a(475));var n=Ol;return n.stylesheets&&n.count===0&&Od(n,n.stylesheets),0<n.count?function(i){var o=setTimeout(function(){if(n.stylesheets&&Od(n,n.stylesheets),n.unsuspend){var u=n.unsuspend;n.unsuspend=null,u()}},6e4);return n.unsuspend=i,function(){n.unsuspend=null,clearTimeout(o)}}:null}function Rc(){if(this.count--,this.count===0){if(this.stylesheets)Od(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var wc=null;function Od(n,i){n.stylesheets=null,n.unsuspend!==null&&(n.count++,wc=new Map,i.forEach(gT,n),wc=null,Rc.call(n))}function gT(n,i){if(!(i.state.loading&4)){var o=wc.get(n);if(o)var u=o.get(null);else{o=new Map,wc.set(n,o);for(var h=n.querySelectorAll("link[data-precedence],style[data-precedence]"),_=0;_<h.length;_++){var T=h[_];(T.nodeName==="LINK"||T.getAttribute("media")!=="not all")&&(o.set(T.dataset.precedence,T),u=T)}u&&o.set(null,u)}h=i.instance,T=h.getAttribute("data-precedence"),_=o.get(T)||u,_===u&&o.set(null,h),o.set(T,h),this.count++,u=Rc.bind(this),h.addEventListener("load",u),h.addEventListener("error",u),_?_.parentNode.insertBefore(h,_.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(h,n.firstChild)),i.state.loading|=4}}var Pl={$$typeof:C,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function vT(n,i,o,u,h,_,T,D){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Tt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tt(0),this.hiddenUpdates=Tt(null),this.identifierPrefix=u,this.onUncaughtError=h,this.onCaughtError=_,this.onRecoverableError=T,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=D,this.incompleteTransitions=new Map}function Gv(n,i,o,u,h,_,T,D,H,et,dt,xt){return n=new vT(n,i,o,T,D,H,et,xt),i=1,_===!0&&(i|=24),_=fi(3,null,null,i),n.current=_,_.stateNode=n,i=mh(),i.refCount++,n.pooledCache=i,i.refCount++,_.memoizedState={element:u,isDehydrated:o,cache:i},xh(_),n}function Vv(n){return n?(n=Fs,n):Fs}function kv(n,i,o,u,h,_){h=Vv(h),u.context===null?u.context=h:u.pendingContext=h,u=nr(i),u.payload={element:o},_=_===void 0?null:_,_!==null&&(u.callback=_),o=ir(n,u,i),o!==null&&(_i(o,n,i),fl(o,n,i))}function Xv(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function Pd(n,i){Xv(n,i),(n=n.alternate)&&Xv(n,i)}function Wv(n){if(n.tag===13){var i=Bs(n,67108864);i!==null&&_i(i,n,67108864),Pd(n,67108864)}}var Cc=!0;function xT(n,i,o,u){var h=z.T;z.T=null;var _=k.p;try{k.p=2,zd(n,i,o,u)}finally{k.p=_,z.T=h}}function yT(n,i,o,u){var h=z.T;z.T=null;var _=k.p;try{k.p=8,zd(n,i,o,u)}finally{k.p=_,z.T=h}}function zd(n,i,o,u){if(Cc){var h=Id(u);if(h===null)Ed(n,i,u,Dc,o),Yv(n,u);else if(MT(h,n,i,o,u))u.stopPropagation();else if(Yv(n,u),i&4&&-1<ST.indexOf(n)){for(;h!==null;){var _=pa(h);if(_!==null)switch(_.tag){case 3:if(_=_.stateNode,_.current.memoizedState.isDehydrated){var T=Yt(_.pendingLanes);if(T!==0){var D=_;for(D.pendingLanes|=2,D.entangledLanes|=2;T;){var H=1<<31-Pt(T);D.entanglements[1]|=H,T&=~H}na(_),(Oe&6)===0&&(dc=pe()+500,wl(0))}}break;case 13:D=Bs(_,2),D!==null&&_i(D,_,2),mc(),Pd(_,2)}if(_=Id(u),_===null&&Ed(n,i,u,Dc,o),_===h)break;h=_}h!==null&&u.stopPropagation()}else Ed(n,i,u,null,o)}}function Id(n){return n=Vf(n),Bd(n)}var Dc=null;function Bd(n){if(Dc=null,n=da(n),n!==null){var i=l(n);if(i===null)n=null;else{var o=i.tag;if(o===13){if(n=c(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null)}}return Dc=n,null}function qv(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(kt()){case xe:return 2;case Zt:return 8;case re:case on:return 32;case B:return 268435456;default:return 32}default:return 32}}var Fd=!1,_r=null,gr=null,vr=null,zl=new Map,Il=new Map,xr=[],ST="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Yv(n,i){switch(n){case"focusin":case"focusout":_r=null;break;case"dragenter":case"dragleave":gr=null;break;case"mouseover":case"mouseout":vr=null;break;case"pointerover":case"pointerout":zl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Il.delete(i.pointerId)}}function Bl(n,i,o,u,h,_){return n===null||n.nativeEvent!==_?(n={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:_,targetContainers:[h]},i!==null&&(i=pa(i),i!==null&&Wv(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),n)}function MT(n,i,o,u,h){switch(i){case"focusin":return _r=Bl(_r,n,i,o,u,h),!0;case"dragenter":return gr=Bl(gr,n,i,o,u,h),!0;case"mouseover":return vr=Bl(vr,n,i,o,u,h),!0;case"pointerover":var _=h.pointerId;return zl.set(_,Bl(zl.get(_)||null,n,i,o,u,h)),!0;case"gotpointercapture":return _=h.pointerId,Il.set(_,Bl(Il.get(_)||null,n,i,o,u,h)),!0}return!1}function jv(n){var i=da(n.target);if(i!==null){var o=l(i);if(o!==null){if(i=o.tag,i===13){if(i=c(o),i!==null){n.blockedOn=i,ui(n.priority,function(){if(o.tag===13){var u=mi();u=ie(u);var h=Bs(o,u);h!==null&&_i(h,o,u),Pd(o,u)}});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Uc(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=Id(n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);Gf=u,o.target.dispatchEvent(u),Gf=null}else return i=pa(o),i!==null&&Wv(i),n.blockedOn=o,!1;i.shift()}return!0}function Zv(n,i,o){Uc(n)&&o.delete(i)}function ET(){Fd=!1,_r!==null&&Uc(_r)&&(_r=null),gr!==null&&Uc(gr)&&(gr=null),vr!==null&&Uc(vr)&&(vr=null),zl.forEach(Zv),Il.forEach(Zv)}function Lc(n,i){n.blockedOn===i&&(n.blockedOn=null,Fd||(Fd=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,ET)))}var Nc=null;function Kv(n){Nc!==n&&(Nc=n,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Nc===n&&(Nc=null);for(var i=0;i<n.length;i+=3){var o=n[i],u=n[i+1],h=n[i+2];if(typeof u!="function"){if(Bd(u||o)===null)continue;break}var _=pa(o);_!==null&&(n.splice(i,3),i-=3,Bh(_,{pending:!0,data:h,method:o.method,action:u},u,h))}}))}function Fl(n){function i(H){return Lc(H,n)}_r!==null&&Lc(_r,n),gr!==null&&Lc(gr,n),vr!==null&&Lc(vr,n),zl.forEach(i),Il.forEach(i);for(var o=0;o<xr.length;o++){var u=xr[o];u.blockedOn===n&&(u.blockedOn=null)}for(;0<xr.length&&(o=xr[0],o.blockedOn===null);)jv(o),o.blockedOn===null&&xr.shift();if(o=(n.ownerDocument||n).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var h=o[u],_=o[u+1],T=h[Ln]||null;if(typeof _=="function")T||Kv(o);else if(T){var D=null;if(_&&_.hasAttribute("formAction")){if(h=_,T=_[Ln]||null)D=T.formAction;else if(Bd(h)!==null)continue}else D=T.action;typeof D=="function"?o[u+1]=D:(o.splice(u,3),u-=3),Kv(o)}}}function Hd(n){this._internalRoot=n}Oc.prototype.render=Hd.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(a(409));var o=i.current,u=mi();kv(o,u,n,i,null,null)},Oc.prototype.unmount=Hd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;kv(n.current,2,null,n,null,null),mc(),i[Zn]=null}};function Oc(n){this._internalRoot=n}Oc.prototype.unstable_scheduleHydration=function(n){if(n){var i=Ae();n={blockedOn:null,target:n,priority:i};for(var o=0;o<xr.length&&i!==0&&i<xr[o].priority;o++);xr.splice(o,0,n),o===0&&jv(n)}};var Qv=t.version;if(Qv!=="19.1.0")throw Error(a(527,Qv,"19.1.0"));k.findDOMNode=function(n){var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(a(188)):(n=Object.keys(n).join(","),Error(a(268,n)));return n=d(i),n=n!==null?p(n):null,n=n===null?null:n.stateNode,n};var TT={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pc.isDisabled&&Pc.supportsFiber)try{pt=Pc.inject(TT),vt=Pc}catch{}}return Gl.createRoot=function(n,i){if(!r(n))throw Error(a(299));var o=!1,u="",h=d0,_=p0,T=m0,D=null;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(_=i.onCaughtError),i.onRecoverableError!==void 0&&(T=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(D=i.unstable_transitionCallbacks)),i=Gv(n,1,!1,null,null,o,u,h,_,T,D,null),n[Zn]=i.current,Md(n),new Hd(i)},Gl.hydrateRoot=function(n,i,o){if(!r(n))throw Error(a(299));var u=!1,h="",_=d0,T=p0,D=m0,H=null,et=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onUncaughtError!==void 0&&(_=o.onUncaughtError),o.onCaughtError!==void 0&&(T=o.onCaughtError),o.onRecoverableError!==void 0&&(D=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(H=o.unstable_transitionCallbacks),o.formState!==void 0&&(et=o.formState)),i=Gv(n,1,!0,i,o??null,u,h,_,T,D,H,et),i.context=Vv(null),o=i.current,u=mi(),u=ie(u),h=nr(u),h.callback=null,ir(o,h,u),o=u,i.current.lanes=o,It(i,o),na(i),n[Zn]=i.current,Md(n),new Oc(i)},Gl.version="19.1.0",Gl}var ox;function PT(){if(ox)return Vd.exports;ox=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Vd.exports=OT(),Vd.exports}var zT=PT();const IT=AT(zT);var ht=Xm();/**
 * react-router v7.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var lx="popstate";function BT(s={}){function t(r,l){let{pathname:c="/",search:f="",hash:d=""}=Cs(r.location.hash.substring(1));return!c.startsWith("/")&&!c.startsWith(".")&&(c="/"+c),Bp("",{pathname:c,search:f,hash:d},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function e(r,l){let c=r.document.querySelector("base"),f="";if(c&&c.getAttribute("href")){let d=r.location.href,p=d.indexOf("#");f=p===-1?d:d.slice(0,p)}return f+"#"+(typeof l=="string"?l:au(l))}function a(r,l){Ki(r.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(l)})`)}return HT(t,e,a,s)}function nn(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}function Ki(s,t){if(!s){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function FT(){return Math.random().toString(36).substring(2,10)}function ux(s,t){return{usr:s.state,key:s.key,idx:t}}function Bp(s,t,e=null,a){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof t=="string"?Cs(t):t,state:e,key:t&&t.key||a||FT()}}function au({pathname:s="/",search:t="",hash:e=""}){return t&&t!=="?"&&(s+=t.charAt(0)==="?"?t:"?"+t),e&&e!=="#"&&(s+=e.charAt(0)==="#"?e:"#"+e),s}function Cs(s){let t={};if(s){let e=s.indexOf("#");e>=0&&(t.hash=s.substring(e),s=s.substring(0,e));let a=s.indexOf("?");a>=0&&(t.search=s.substring(a),s=s.substring(0,a)),s&&(t.pathname=s)}return t}function HT(s,t,e,a={}){let{window:r=document.defaultView,v5Compat:l=!1}=a,c=r.history,f="POP",d=null,p=m();p==null&&(p=0,c.replaceState({...c.state,idx:p},""));function m(){return(c.state||{idx:null}).idx}function g(){f="POP";let y=m(),x=y==null?null:y-p;p=y,d&&d({action:f,location:M.location,delta:x})}function v(y,x){f="PUSH";let w=Bp(M.location,y,x);e&&e(w,y),p=m()+1;let C=ux(w,p),b=M.createHref(w);try{c.pushState(C,"",b)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;r.location.assign(b)}l&&d&&d({action:f,location:M.location,delta:1})}function S(y,x){f="REPLACE";let w=Bp(M.location,y,x);e&&e(w,y),p=m();let C=ux(w,p),b=M.createHref(w);c.replaceState(C,"",b),l&&d&&d({action:f,location:M.location,delta:0})}function E(y){return GT(y)}let M={get action(){return f},get location(){return s(r,c)},listen(y){if(d)throw new Error("A history only accepts one active listener");return r.addEventListener(lx,g),d=y,()=>{r.removeEventListener(lx,g),d=null}},createHref(y){return t(r,y)},createURL:E,encodeLocation(y){let x=E(y);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:v,replace:S,go(y){return c.go(y)}};return M}function GT(s,t=!1){let e="http://localhost";typeof window<"u"&&(e=window.location.origin!=="null"?window.location.origin:window.location.href),nn(e,"No window.location.(origin|href) available to create URL");let a=typeof s=="string"?s:au(s);return a=a.replace(/ $/,"%20"),!t&&a.startsWith("//")&&(a=e+a),new URL(a,e)}function Uy(s,t,e="/"){return VT(s,t,e,!1)}function VT(s,t,e,a){let r=typeof t=="string"?Cs(t):t,l=Xa(r.pathname||"/",e);if(l==null)return null;let c=Ly(s);kT(c);let f=null;for(let d=0;f==null&&d<c.length;++d){let p=tb(l);f=JT(c[d],p,a)}return f}function Ly(s,t=[],e=[],a=""){let r=(l,c,f)=>{let d={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};d.relativePath.startsWith("/")&&(nn(d.relativePath.startsWith(a),`Absolute route path "${d.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),d.relativePath=d.relativePath.slice(a.length));let p=Va([a,d.relativePath]),m=e.concat(d);l.children&&l.children.length>0&&(nn(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),Ly(l.children,t,m,p)),!(l.path==null&&!l.index)&&t.push({path:p,score:KT(p,l.index),routesMeta:m})};return s.forEach((l,c)=>{if(l.path===""||!l.path?.includes("?"))r(l,c);else for(let f of Ny(l.path))r(l,c,f)}),t}function Ny(s){let t=s.split("/");if(t.length===0)return[];let[e,...a]=t,r=e.endsWith("?"),l=e.replace(/\?$/,"");if(a.length===0)return r?[l,""]:[l];let c=Ny(a.join("/")),f=[];return f.push(...c.map(d=>d===""?l:[l,d].join("/"))),r&&f.push(...c),f.map(d=>s.startsWith("/")&&d===""?"/":d)}function kT(s){s.sort((t,e)=>t.score!==e.score?e.score-t.score:QT(t.routesMeta.map(a=>a.childrenIndex),e.routesMeta.map(a=>a.childrenIndex)))}var XT=/^:[\w-]+$/,WT=3,qT=2,YT=1,jT=10,ZT=-2,cx=s=>s==="*";function KT(s,t){let e=s.split("/"),a=e.length;return e.some(cx)&&(a+=ZT),t&&(a+=qT),e.filter(r=>!cx(r)).reduce((r,l)=>r+(XT.test(l)?WT:l===""?YT:jT),a)}function QT(s,t){return s.length===t.length&&s.slice(0,-1).every((a,r)=>a===t[r])?s[s.length-1]-t[t.length-1]:0}function JT(s,t,e=!1){let{routesMeta:a}=s,r={},l="/",c=[];for(let f=0;f<a.length;++f){let d=a[f],p=f===a.length-1,m=l==="/"?t:t.slice(l.length)||"/",g=vf({path:d.relativePath,caseSensitive:d.caseSensitive,end:p},m),v=d.route;if(!g&&p&&e&&!a[a.length-1].route.index&&(g=vf({path:d.relativePath,caseSensitive:d.caseSensitive,end:!1},m)),!g)return null;Object.assign(r,g.params),c.push({params:r,pathname:Va([l,g.pathname]),pathnameBase:ab(Va([l,g.pathnameBase])),route:v}),g.pathnameBase!=="/"&&(l=Va([l,g.pathnameBase]))}return c}function vf(s,t){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[e,a]=$T(s.path,s.caseSensitive,s.end),r=t.match(e);if(!r)return null;let l=r[0],c=l.replace(/(.)\/+$/,"$1"),f=r.slice(1);return{params:a.reduce((p,{paramName:m,isOptional:g},v)=>{if(m==="*"){let E=f[v]||"";c=l.slice(0,l.length-E.length).replace(/(.)\/+$/,"$1")}const S=f[v];return g&&!S?p[m]=void 0:p[m]=(S||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:c,pattern:s}}function $T(s,t=!1,e=!0){Ki(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let a=[],r="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,f,d)=>(a.push({paramName:f,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(a.push({paramName:"*"}),r+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):e?r+="\\/*$":s!==""&&s!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,t?void 0:"i"),a]}function tb(s){try{return s.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ki(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),s}}function Xa(s,t){if(t==="/")return s;if(!s.toLowerCase().startsWith(t.toLowerCase()))return null;let e=t.endsWith("/")?t.length-1:t.length,a=s.charAt(e);return a&&a!=="/"?null:s.slice(e)||"/"}function eb(s,t="/"){let{pathname:e,search:a="",hash:r=""}=typeof s=="string"?Cs(s):s;return{pathname:e?e.startsWith("/")?e:nb(e,t):t,search:rb(a),hash:sb(r)}}function nb(s,t){let e=t.replace(/\/+$/,"").split("/");return s.split("/").forEach(r=>{r===".."?e.length>1&&e.pop():r!=="."&&e.push(r)}),e.length>1?e.join("/"):"/"}function Yd(s,t,e,a){return`Cannot include a '${s}' character in a manually specified \`to.${t}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${e}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function ib(s){return s.filter((t,e)=>e===0||t.route.path&&t.route.path.length>0)}function Oy(s){let t=ib(s);return t.map((e,a)=>a===t.length-1?e.pathname:e.pathnameBase)}function Py(s,t,e,a=!1){let r;typeof s=="string"?r=Cs(s):(r={...s},nn(!r.pathname||!r.pathname.includes("?"),Yd("?","pathname","search",r)),nn(!r.pathname||!r.pathname.includes("#"),Yd("#","pathname","hash",r)),nn(!r.search||!r.search.includes("#"),Yd("#","search","hash",r)));let l=s===""||r.pathname==="",c=l?"/":r.pathname,f;if(c==null)f=e;else{let g=t.length-1;if(!a&&c.startsWith("..")){let v=c.split("/");for(;v[0]==="..";)v.shift(),g-=1;r.pathname=v.join("/")}f=g>=0?t[g]:"/"}let d=eb(r,f),p=c&&c!=="/"&&c.endsWith("/"),m=(l||c===".")&&e.endsWith("/");return!d.pathname.endsWith("/")&&(p||m)&&(d.pathname+="/"),d}var Va=s=>s.join("/").replace(/\/\/+/g,"/"),ab=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),rb=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,sb=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function ob(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}var zy=["POST","PUT","PATCH","DELETE"];new Set(zy);var lb=["GET",...zy];new Set(lb);var Wo=ht.createContext(null);Wo.displayName="DataRouter";var Lf=ht.createContext(null);Lf.displayName="DataRouterState";ht.createContext(!1);var Iy=ht.createContext({isTransitioning:!1});Iy.displayName="ViewTransition";var ub=ht.createContext(new Map);ub.displayName="Fetchers";var cb=ht.createContext(null);cb.displayName="Await";var ha=ht.createContext(null);ha.displayName="Navigation";var _u=ht.createContext(null);_u.displayName="Location";var Ya=ht.createContext({outlet:null,matches:[],isDataRoute:!1});Ya.displayName="Route";var Wm=ht.createContext(null);Wm.displayName="RouteError";function fb(s,{relative:t}={}){nn(gu(),"useHref() may be used only in the context of a <Router> component.");let{basename:e,navigator:a}=ht.useContext(ha),{hash:r,pathname:l,search:c}=vu(s,{relative:t}),f=l;return e!=="/"&&(f=l==="/"?e:Va([e,l])),a.createHref({pathname:f,search:c,hash:r})}function gu(){return ht.useContext(_u)!=null}function Ds(){return nn(gu(),"useLocation() may be used only in the context of a <Router> component."),ht.useContext(_u).location}var By="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Fy(s){ht.useContext(ha).static||ht.useLayoutEffect(s)}function Hy(){let{isDataRoute:s}=ht.useContext(Ya);return s?Tb():hb()}function hb(){nn(gu(),"useNavigate() may be used only in the context of a <Router> component.");let s=ht.useContext(Wo),{basename:t,navigator:e}=ht.useContext(ha),{matches:a}=ht.useContext(Ya),{pathname:r}=Ds(),l=JSON.stringify(Oy(a)),c=ht.useRef(!1);return Fy(()=>{c.current=!0}),ht.useCallback((d,p={})=>{if(Ki(c.current,By),!c.current)return;if(typeof d=="number"){e.go(d);return}let m=Py(d,JSON.parse(l),r,p.relative==="path");s==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:Va([t,m.pathname])),(p.replace?e.replace:e.push)(m,p.state,p)},[t,e,l,r,s])}ht.createContext(null);function vu(s,{relative:t}={}){let{matches:e}=ht.useContext(Ya),{pathname:a}=Ds(),r=JSON.stringify(Oy(e));return ht.useMemo(()=>Py(s,JSON.parse(r),a,t==="path"),[s,r,a,t])}function db(s,t){return Gy(s,t)}function Gy(s,t,e,a){nn(gu(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=ht.useContext(ha),{matches:l}=ht.useContext(Ya),c=l[l.length-1],f=c?c.params:{},d=c?c.pathname:"/",p=c?c.pathnameBase:"/",m=c&&c.route;{let x=m&&m.path||"";Vy(d,!m||x.endsWith("*")||x.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${x}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${x}"> to <Route path="${x==="/"?"*":`${x}/*`}">.`)}let g=Ds(),v;if(t){let x=typeof t=="string"?Cs(t):t;nn(p==="/"||x.pathname?.startsWith(p),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${x.pathname}" was given in the \`location\` prop.`),v=x}else v=g;let S=v.pathname||"/",E=S;if(p!=="/"){let x=p.replace(/^\//,"").split("/");E="/"+S.replace(/^\//,"").split("/").slice(x.length).join("/")}let M=Uy(s,{pathname:E});Ki(m||M!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),Ki(M==null||M[M.length-1].route.element!==void 0||M[M.length-1].route.Component!==void 0||M[M.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let y=vb(M&&M.map(x=>Object.assign({},x,{params:Object.assign({},f,x.params),pathname:Va([p,r.encodeLocation?r.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?p:Va([p,r.encodeLocation?r.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),l,e,a);return t&&y?ht.createElement(_u.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...v},navigationType:"POP"}},y):y}function pb(){let s=Eb(),t=ob(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),e=s instanceof Error?s.stack:null,a="rgba(200,200,200, 0.5)",r={padding:"0.5rem",backgroundColor:a},l={padding:"2px 4px",backgroundColor:a},c=null;return console.error("Error handled by React Router default ErrorBoundary:",s),c=ht.createElement(ht.Fragment,null,ht.createElement("p",null,"💿 Hey developer 👋"),ht.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",ht.createElement("code",{style:l},"ErrorBoundary")," or"," ",ht.createElement("code",{style:l},"errorElement")," prop on your route.")),ht.createElement(ht.Fragment,null,ht.createElement("h2",null,"Unexpected Application Error!"),ht.createElement("h3",{style:{fontStyle:"italic"}},t),e?ht.createElement("pre",{style:r},e):null,c)}var mb=ht.createElement(pb,null),_b=class extends ht.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,t){return t.location!==s.location||t.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:t.error,location:t.location,revalidation:s.revalidation||t.revalidation}}componentDidCatch(s,t){console.error("React Router caught the following error during render",s,t)}render(){return this.state.error!==void 0?ht.createElement(Ya.Provider,{value:this.props.routeContext},ht.createElement(Wm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function gb({routeContext:s,match:t,children:e}){let a=ht.useContext(Wo);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),ht.createElement(Ya.Provider,{value:s},e)}function vb(s,t=[],e=null,a=null){if(s==null){if(!e)return null;if(e.errors)s=e.matches;else if(t.length===0&&!e.initialized&&e.matches.length>0)s=e.matches;else return null}let r=s,l=e?.errors;if(l!=null){let d=r.findIndex(p=>p.route.id&&l?.[p.route.id]!==void 0);nn(d>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),r=r.slice(0,Math.min(r.length,d+1))}let c=!1,f=-1;if(e)for(let d=0;d<r.length;d++){let p=r[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(f=d),p.route.id){let{loaderData:m,errors:g}=e,v=p.route.loader&&!m.hasOwnProperty(p.route.id)&&(!g||g[p.route.id]===void 0);if(p.route.lazy||v){c=!0,f>=0?r=r.slice(0,f+1):r=[r[0]];break}}}return r.reduceRight((d,p,m)=>{let g,v=!1,S=null,E=null;e&&(g=l&&p.route.id?l[p.route.id]:void 0,S=p.route.errorElement||mb,c&&(f<0&&m===0?(Vy("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),v=!0,E=null):f===m&&(v=!0,E=p.route.hydrateFallbackElement||null)));let M=t.concat(r.slice(0,m+1)),y=()=>{let x;return g?x=S:v?x=E:p.route.Component?x=ht.createElement(p.route.Component,null):p.route.element?x=p.route.element:x=d,ht.createElement(gb,{match:p,routeContext:{outlet:d,matches:M,isDataRoute:e!=null},children:x})};return e&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?ht.createElement(_b,{location:e.location,revalidation:e.revalidation,component:S,error:g,children:y(),routeContext:{outlet:null,matches:M,isDataRoute:!0}}):y()},null)}function qm(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function xb(s){let t=ht.useContext(Wo);return nn(t,qm(s)),t}function yb(s){let t=ht.useContext(Lf);return nn(t,qm(s)),t}function Sb(s){let t=ht.useContext(Ya);return nn(t,qm(s)),t}function Ym(s){let t=Sb(s),e=t.matches[t.matches.length-1];return nn(e.route.id,`${s} can only be used on routes that contain a unique "id"`),e.route.id}function Mb(){return Ym("useRouteId")}function Eb(){let s=ht.useContext(Wm),t=yb("useRouteError"),e=Ym("useRouteError");return s!==void 0?s:t.errors?.[e]}function Tb(){let{router:s}=xb("useNavigate"),t=Ym("useNavigate"),e=ht.useRef(!1);return Fy(()=>{e.current=!0}),ht.useCallback(async(r,l={})=>{Ki(e.current,By),e.current&&(typeof r=="number"?s.navigate(r):await s.navigate(r,{fromRouteId:t,...l}))},[s,t])}var fx={};function Vy(s,t,e){!t&&!fx[s]&&(fx[s]=!0,Ki(!1,e))}ht.memo(bb);function bb({routes:s,future:t,state:e}){return Gy(s,void 0,e,t)}function Fp(s){nn(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Ab({basename:s="/",children:t=null,location:e,navigationType:a="POP",navigator:r,static:l=!1}){nn(!gu(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=s.replace(/^\/*/,"/"),f=ht.useMemo(()=>({basename:c,navigator:r,static:l,future:{}}),[c,r,l]);typeof e=="string"&&(e=Cs(e));let{pathname:d="/",search:p="",hash:m="",state:g=null,key:v="default"}=e,S=ht.useMemo(()=>{let E=Xa(d,c);return E==null?null:{location:{pathname:E,search:p,hash:m,state:g,key:v},navigationType:a}},[c,d,p,m,g,v,a]);return Ki(S!=null,`<Router basename="${c}"> is not able to match the URL "${d}${p}${m}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:ht.createElement(ha.Provider,{value:f},ht.createElement(_u.Provider,{children:t,value:S}))}function Rb({children:s,location:t}){return db(Hp(s),t)}function Hp(s,t=[]){let e=[];return ht.Children.forEach(s,(a,r)=>{if(!ht.isValidElement(a))return;let l=[...t,r];if(a.type===ht.Fragment){e.push.apply(e,Hp(a.props.children,l));return}nn(a.type===Fp,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),nn(!a.props.index||!a.props.children,"An index route cannot have child routes.");let c={id:a.props.id||l.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(c.children=Hp(a.props.children,l)),e.push(c)}),e}var of="get",lf="application/x-www-form-urlencoded";function Nf(s){return s!=null&&typeof s.tagName=="string"}function wb(s){return Nf(s)&&s.tagName.toLowerCase()==="button"}function Cb(s){return Nf(s)&&s.tagName.toLowerCase()==="form"}function Db(s){return Nf(s)&&s.tagName.toLowerCase()==="input"}function Ub(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function Lb(s,t){return s.button===0&&(!t||t==="_self")&&!Ub(s)}var zc=null;function Nb(){if(zc===null)try{new FormData(document.createElement("form"),0),zc=!1}catch{zc=!0}return zc}var Ob=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function jd(s){return s!=null&&!Ob.has(s)?(Ki(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${lf}"`),null):s}function Pb(s,t){let e,a,r,l,c;if(Cb(s)){let f=s.getAttribute("action");a=f?Xa(f,t):null,e=s.getAttribute("method")||of,r=jd(s.getAttribute("enctype"))||lf,l=new FormData(s)}else if(wb(s)||Db(s)&&(s.type==="submit"||s.type==="image")){let f=s.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let d=s.getAttribute("formaction")||f.getAttribute("action");if(a=d?Xa(d,t):null,e=s.getAttribute("formmethod")||f.getAttribute("method")||of,r=jd(s.getAttribute("formenctype"))||jd(f.getAttribute("enctype"))||lf,l=new FormData(f,s),!Nb()){let{name:p,type:m,value:g}=s;if(m==="image"){let v=p?`${p}.`:"";l.append(`${v}x`,"0"),l.append(`${v}y`,"0")}else p&&l.append(p,g)}}else{if(Nf(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');e=of,a=null,r=lf,c=s}return l&&r==="text/plain"&&(c=l,l=void 0),{action:a,method:e.toLowerCase(),encType:r,formData:l,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function jm(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}function zb(s,t,e){let a=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return a.pathname==="/"?a.pathname=`_root.${e}`:t&&Xa(a.pathname,t)==="/"?a.pathname=`${t.replace(/\/$/,"")}/_root.${e}`:a.pathname=`${a.pathname.replace(/\/$/,"")}.${e}`,a}async function Ib(s,t){if(s.id in t)return t[s.id];try{let e=await import(s.module);return t[s.id]=e,e}catch(e){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(e),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Bb(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function Fb(s,t,e){let a=await Promise.all(s.map(async r=>{let l=t.routes[r.route.id];if(l){let c=await Ib(l,e);return c.links?c.links():[]}return[]}));return kb(a.flat(1).filter(Bb).filter(r=>r.rel==="stylesheet"||r.rel==="preload").map(r=>r.rel==="stylesheet"?{...r,rel:"prefetch",as:"style"}:{...r,rel:"prefetch"}))}function hx(s,t,e,a,r,l){let c=(d,p)=>e[p]?d.route.id!==e[p].route.id:!0,f=(d,p)=>e[p].pathname!==d.pathname||e[p].route.path?.endsWith("*")&&e[p].params["*"]!==d.params["*"];return l==="assets"?t.filter((d,p)=>c(d,p)||f(d,p)):l==="data"?t.filter((d,p)=>{let m=a.routes[d.route.id];if(!m||!m.hasLoader)return!1;if(c(d,p)||f(d,p))return!0;if(d.route.shouldRevalidate){let g=d.route.shouldRevalidate({currentUrl:new URL(r.pathname+r.search+r.hash,window.origin),currentParams:e[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:d.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function Hb(s,t,{includeHydrateFallback:e}={}){return Gb(s.map(a=>{let r=t.routes[a.route.id];if(!r)return[];let l=[r.module];return r.clientActionModule&&(l=l.concat(r.clientActionModule)),r.clientLoaderModule&&(l=l.concat(r.clientLoaderModule)),e&&r.hydrateFallbackModule&&(l=l.concat(r.hydrateFallbackModule)),r.imports&&(l=l.concat(r.imports)),l}).flat(1))}function Gb(s){return[...new Set(s)]}function Vb(s){let t={},e=Object.keys(s).sort();for(let a of e)t[a]=s[a];return t}function kb(s,t){let e=new Set;return new Set(t),s.reduce((a,r)=>{let l=JSON.stringify(Vb(r));return e.has(l)||(e.add(l),a.push({key:l,link:r})),a},[])}function ky(){let s=ht.useContext(Wo);return jm(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function Xb(){let s=ht.useContext(Lf);return jm(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Zm=ht.createContext(void 0);Zm.displayName="FrameworkContext";function Xy(){let s=ht.useContext(Zm);return jm(s,"You must render this element inside a <HydratedRouter> element"),s}function Wb(s,t){let e=ht.useContext(Zm),[a,r]=ht.useState(!1),[l,c]=ht.useState(!1),{onFocus:f,onBlur:d,onMouseEnter:p,onMouseLeave:m,onTouchStart:g}=t,v=ht.useRef(null);ht.useEffect(()=>{if(s==="render"&&c(!0),s==="viewport"){let M=x=>{x.forEach(w=>{c(w.isIntersecting)})},y=new IntersectionObserver(M,{threshold:.5});return v.current&&y.observe(v.current),()=>{y.disconnect()}}},[s]),ht.useEffect(()=>{if(a){let M=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(M)}}},[a]);let S=()=>{r(!0)},E=()=>{r(!1),c(!1)};return e?s!=="intent"?[l,v,{}]:[l,v,{onFocus:Vl(f,S),onBlur:Vl(d,E),onMouseEnter:Vl(p,S),onMouseLeave:Vl(m,E),onTouchStart:Vl(g,S)}]:[!1,v,{}]}function Vl(s,t){return e=>{s&&s(e),e.defaultPrevented||t(e)}}function qb({page:s,...t}){let{router:e}=ky(),a=ht.useMemo(()=>Uy(e.routes,s,e.basename),[e.routes,s,e.basename]);return a?ht.createElement(jb,{page:s,matches:a,...t}):null}function Yb(s){let{manifest:t,routeModules:e}=Xy(),[a,r]=ht.useState([]);return ht.useEffect(()=>{let l=!1;return Fb(s,t,e).then(c=>{l||r(c)}),()=>{l=!0}},[s,t,e]),a}function jb({page:s,matches:t,...e}){let a=Ds(),{manifest:r,routeModules:l}=Xy(),{basename:c}=ky(),{loaderData:f,matches:d}=Xb(),p=ht.useMemo(()=>hx(s,t,d,r,a,"data"),[s,t,d,r,a]),m=ht.useMemo(()=>hx(s,t,d,r,a,"assets"),[s,t,d,r,a]),g=ht.useMemo(()=>{if(s===a.pathname+a.search+a.hash)return[];let E=new Set,M=!1;if(t.forEach(x=>{let w=r.routes[x.route.id];!w||!w.hasLoader||(!p.some(C=>C.route.id===x.route.id)&&x.route.id in f&&l[x.route.id]?.shouldRevalidate||w.hasClientLoader?M=!0:E.add(x.route.id))}),E.size===0)return[];let y=zb(s,c,"data");return M&&E.size>0&&y.searchParams.set("_routes",t.filter(x=>E.has(x.route.id)).map(x=>x.route.id).join(",")),[y.pathname+y.search]},[c,f,a,r,p,t,s,l]),v=ht.useMemo(()=>Hb(m,r),[m,r]),S=Yb(m);return ht.createElement(ht.Fragment,null,g.map(E=>ht.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...e})),v.map(E=>ht.createElement("link",{key:E,rel:"modulepreload",href:E,...e})),S.map(({key:E,link:M})=>ht.createElement("link",{key:E,...M})))}function Zb(...s){return t=>{s.forEach(e=>{typeof e=="function"?e(t):e!=null&&(e.current=t)})}}var Wy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Wy&&(window.__reactRouterVersion="7.7.0")}catch{}function Kb({basename:s,children:t,window:e}){let a=ht.useRef();a.current==null&&(a.current=BT({window:e,v5Compat:!0}));let r=a.current,[l,c]=ht.useState({action:r.action,location:r.location}),f=ht.useCallback(d=>{ht.startTransition(()=>c(d))},[c]);return ht.useLayoutEffect(()=>r.listen(f),[r,f]),ht.createElement(Ab,{basename:s,children:t,location:l.location,navigationType:l.action,navigator:r})}var qy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Yy=ht.forwardRef(function({onClick:t,discover:e="render",prefetch:a="none",relative:r,reloadDocument:l,replace:c,state:f,target:d,to:p,preventScrollReset:m,viewTransition:g,...v},S){let{basename:E}=ht.useContext(ha),M=typeof p=="string"&&qy.test(p),y,x=!1;if(typeof p=="string"&&M&&(y=p,Wy))try{let A=new URL(window.location.href),U=p.startsWith("//")?new URL(A.protocol+p):new URL(p),G=Xa(U.pathname,E);U.origin===A.origin&&G!=null?p=G+U.search+U.hash:x=!0}catch{Ki(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let w=fb(p,{relative:r}),[C,b,N]=Wb(a,v),I=t1(p,{replace:c,state:f,target:d,preventScrollReset:m,relative:r,viewTransition:g});function P(A){t&&t(A),A.defaultPrevented||I(A)}let F=ht.createElement("a",{...v,...N,href:y||w,onClick:x||l?t:P,ref:Zb(S,b),target:d,"data-discover":!M&&e==="render"?"true":void 0});return C&&!M?ht.createElement(ht.Fragment,null,F,ht.createElement(qb,{page:w})):F});Yy.displayName="Link";var Qb=ht.forwardRef(function({"aria-current":t="page",caseSensitive:e=!1,className:a="",end:r=!1,style:l,to:c,viewTransition:f,children:d,...p},m){let g=vu(c,{relative:p.relative}),v=Ds(),S=ht.useContext(Lf),{navigator:E,basename:M}=ht.useContext(ha),y=S!=null&&r1(g)&&f===!0,x=E.encodeLocation?E.encodeLocation(g).pathname:g.pathname,w=v.pathname,C=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;e||(w=w.toLowerCase(),C=C?C.toLowerCase():null,x=x.toLowerCase()),C&&M&&(C=Xa(C,M)||C);const b=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let N=w===x||!r&&w.startsWith(x)&&w.charAt(b)==="/",I=C!=null&&(C===x||!r&&C.startsWith(x)&&C.charAt(x.length)==="/"),P={isActive:N,isPending:I,isTransitioning:y},F=N?t:void 0,A;typeof a=="function"?A=a(P):A=[a,N?"active":null,I?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let U=typeof l=="function"?l(P):l;return ht.createElement(Yy,{...p,"aria-current":F,className:A,ref:m,style:U,to:c,viewTransition:f},typeof d=="function"?d(P):d)});Qb.displayName="NavLink";var Jb=ht.forwardRef(({discover:s="render",fetcherKey:t,navigate:e,reloadDocument:a,replace:r,state:l,method:c=of,action:f,onSubmit:d,relative:p,preventScrollReset:m,viewTransition:g,...v},S)=>{let E=i1(),M=a1(f,{relative:p}),y=c.toLowerCase()==="get"?"get":"post",x=typeof f=="string"&&qy.test(f),w=C=>{if(d&&d(C),C.defaultPrevented)return;C.preventDefault();let b=C.nativeEvent.submitter,N=b?.getAttribute("formmethod")||c;E(b||C.currentTarget,{fetcherKey:t,method:N,navigate:e,replace:r,state:l,relative:p,preventScrollReset:m,viewTransition:g})};return ht.createElement("form",{ref:S,method:y,action:M,onSubmit:a?d:w,...v,"data-discover":!x&&s==="render"?"true":void 0})});Jb.displayName="Form";function $b(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function jy(s){let t=ht.useContext(Wo);return nn(t,$b(s)),t}function t1(s,{target:t,replace:e,state:a,preventScrollReset:r,relative:l,viewTransition:c}={}){let f=Hy(),d=Ds(),p=vu(s,{relative:l});return ht.useCallback(m=>{if(Lb(m,t)){m.preventDefault();let g=e!==void 0?e:au(d)===au(p);f(s,{replace:g,state:a,preventScrollReset:r,relative:l,viewTransition:c})}},[d,f,p,e,a,t,s,r,l,c])}var e1=0,n1=()=>`__${String(++e1)}__`;function i1(){let{router:s}=jy("useSubmit"),{basename:t}=ht.useContext(ha),e=Mb();return ht.useCallback(async(a,r={})=>{let{action:l,method:c,encType:f,formData:d,body:p}=Pb(a,t);if(r.navigate===!1){let m=r.fetcherKey||n1();await s.fetch(m,e,r.action||l,{preventScrollReset:r.preventScrollReset,formData:d,body:p,formMethod:r.method||c,formEncType:r.encType||f,flushSync:r.flushSync})}else await s.navigate(r.action||l,{preventScrollReset:r.preventScrollReset,formData:d,body:p,formMethod:r.method||c,formEncType:r.encType||f,replace:r.replace,state:r.state,fromRouteId:e,flushSync:r.flushSync,viewTransition:r.viewTransition})},[s,t,e])}function a1(s,{relative:t}={}){let{basename:e}=ht.useContext(ha),a=ht.useContext(Ya);nn(a,"useFormAction must be used inside a RouteContext");let[r]=a.matches.slice(-1),l={...vu(s||".",{relative:t})},c=Ds();if(s==null){l.search=c.search;let f=new URLSearchParams(l.search),d=f.getAll("index");if(d.some(m=>m==="")){f.delete("index"),d.filter(g=>g).forEach(g=>f.append("index",g));let m=f.toString();l.search=m?`?${m}`:""}}return(!s||s===".")&&r.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),e!=="/"&&(l.pathname=l.pathname==="/"?e:Va([e,l.pathname])),au(l)}function r1(s,t={}){let e=ht.useContext(Iy);nn(e!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=jy("useViewTransitionState"),r=vu(s,{relative:t.relative});if(!e.isTransitioning)return!1;let l=Xa(e.currentLocation.pathname,a)||e.currentLocation.pathname,c=Xa(e.nextLocation.pathname,a)||e.nextLocation.pathname;return vf(r.pathname,c)!=null||vf(r.pathname,l)!=null}const s1="_bg_1ui8w_1",o1="_title_1ui8w_8",l1="_button_bg_1ui8w_13",xf={bg:s1,title:o1,button_bg:l1},u1={Home:"/",Menu:"/menu",SolarSystem:"/solarsystem"},c1=()=>fe.jsxs("div",{className:xf.bg,children:[fe.jsx("span",{className:xf.title,children:"Café Zero-G"}),fe.jsx(Zd,{page:"Home"}),fe.jsx(Zd,{page:"Menu"}),fe.jsx(Zd,{page:"SolarSystem"})]}),Zd=({page:s})=>{const t=Hy(),e=()=>{const a=u1[s];a?t(a):console.warn(`Path for "${s}" not found in pages object.`)};return fe.jsx("div",{children:fe.jsx("span",{className:xf.button_bg,children:fe.jsx("span",{className:xf.button_txt,onClick:e,children:s})})})};function f1(){const s=ht.useRef(null),[t,e]=ht.useState([]),[a,r]=ht.useState(1);return ht.useEffect(()=>{fetch("hipparcos_vmag_le5_northern_top300_with_color.csv").then(l=>l.text()).then(l=>{const f=l.trim().split(`
`).slice(1).map(d=>{const[p,m,g,v,S]=d.split(",");return{id:Number(p),x:Number(m),y:Number(g),brightness:Number(v),color:S.trim(),twinklePhase:Math.random()*Math.PI*2}});e(f)})},[]),ht.useEffect(()=>{const l=s.current,c=l.getContext("2d");l.width=window.innerWidth,l.height=window.innerHeight;let f,d=[];const p=()=>{c.clearRect(0,0,l.width,l.height),c.fillStyle="black",c.fillRect(0,0,l.width,l.height);const S=Date.now();t.forEach(M=>{const y=Math.sin((M.y-.5)*Math.PI),x=M.x*l.width,w=(1-(y+1)/2)*l.height,C=.7+M.brightness*2,b=S/1e3,N=.7+.3*Math.sin(b*3+M.twinklePhase);c.beginPath(),c.arc(x,w,C,0,Math.PI*2),c.fillStyle=M.color,c.globalAlpha=N,c.shadowColor=M.color,c.shadowBlur=8,c.fill(),c.globalAlpha=1}),d.forEach((M,y)=>{c.strokeStyle="white",c.lineWidth=1.5,c.beginPath(),c.moveTo(M.x,M.y),c.lineTo(M.x-30,M.y+17),c.stroke(),M.x-=10,M.y+=5.8,(M.x<-100||M.y>l.height+100)&&d.splice(y,1)});const E=c.createRadialGradient(l.width/2,l.height*1.6,l.height*.5,l.width/2,l.height*3.7,l.height*3);E.addColorStop(0,"rgba(0, 120, 255, 0.5)"),E.addColorStop(1,"rgba(0, 0, 80, 0.0)"),c.fillStyle=E,c.fillRect(0,0,l.width,l.height)},m=()=>{p(),f=requestAnimationFrame(m)};m();const g=setInterval(()=>{Math.random()<.1&&d.push({x:Math.random()*l.width+l.width/2,y:Math.random()*l.height/2})},2e3),v=S=>{S.preventDefault();const E=S.deltaY>0?.9:1.1;r(M=>Math.min(Math.max(M*E,.5),5))};return window.addEventListener("wheel",v,{passive:!1}),()=>{cancelAnimationFrame(f),clearInterval(g),window.removeEventListener("wheel",v)}},[t,a]),fe.jsx("canvas",{ref:s,style:{display:"block"}})}const h1=()=>fe.jsxs("div",{children:[fe.jsx(c1,{}),fe.jsx(f1,{})]});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Km="178",d1=0,dx=1,p1=2,Zy=1,m1=2,Ia=3,Pr=0,ni=1,qi=2,Ur=0,wo=1,px=2,mx=3,_x=4,_1=5,gs=100,g1=101,v1=102,x1=103,y1=104,S1=200,M1=201,E1=202,T1=203,Gp=204,Vp=205,b1=206,A1=207,R1=208,w1=209,C1=210,D1=211,U1=212,L1=213,N1=214,kp=0,Xp=1,Wp=2,Oo=3,qp=4,Yp=5,jp=6,Zp=7,Ky=0,O1=1,P1=2,Lr=0,z1=1,I1=2,B1=3,Qy=4,F1=5,H1=6,G1=7,Jy=300,Po=301,zo=302,Kp=303,Qp=304,Of=306,Jp=1e3,xs=1001,$p=1002,Zi=1003,V1=1004,Ic=1005,sa=1006,Kd=1007,ys=1008,ua=1009,$y=1010,tS=1011,ru=1012,Qm=1013,As=1014,Ha=1015,xu=1016,Jm=1017,$m=1018,su=1020,eS=35902,nS=1021,iS=1022,ji=1023,ou=1026,lu=1027,aS=1028,t_=1029,rS=1030,e_=1031,n_=1033,uf=33776,cf=33777,ff=33778,hf=33779,tm=35840,em=35841,nm=35842,im=35843,am=36196,rm=37492,sm=37496,om=37808,lm=37809,um=37810,cm=37811,fm=37812,hm=37813,dm=37814,pm=37815,mm=37816,_m=37817,gm=37818,vm=37819,xm=37820,ym=37821,df=36492,Sm=36494,Mm=36495,sS=36283,Em=36284,Tm=36285,bm=36286,k1=3200,X1=3201,oS=0,W1=1,Rr="",zi="srgb",Io="srgb-linear",yf="linear",He="srgb",uo=7680,gx=519,q1=512,Y1=513,j1=514,lS=515,Z1=516,K1=517,Q1=518,J1=519,vx=35044,xx="300 es",Ga=2e3,Sf=2001;class qo{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(e)===-1&&a[t].push(e)}hasEventListener(t,e){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(e)!==-1}removeEventListener(t,e){const a=this._listeners;if(a===void 0)return;const r=a[t];if(r!==void 0){const l=r.indexOf(e);l!==-1&&r.splice(l,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const a=e[t.type];if(a!==void 0){t.target=this;const r=a.slice(0);for(let l=0,c=r.length;l<c;l++)r[l].call(this,t);t.target=null}}}const Vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qd=Math.PI/180,Am=180/Math.PI;function yu(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Vn[s&255]+Vn[s>>8&255]+Vn[s>>16&255]+Vn[s>>24&255]+"-"+Vn[t&255]+Vn[t>>8&255]+"-"+Vn[t>>16&15|64]+Vn[t>>24&255]+"-"+Vn[e&63|128]+Vn[e>>8&255]+"-"+Vn[e>>16&255]+Vn[e>>24&255]+Vn[a&255]+Vn[a>>8&255]+Vn[a>>16&255]+Vn[a>>24&255]).toLowerCase()}function Se(s,t,e){return Math.max(t,Math.min(e,s))}function $1(s,t){return(s%t+t)%t}function Jd(s,t,e){return(1-e)*s+e*t}function kl(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ti(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Te{constructor(t=0,e=0){Te.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,a=this.y,r=t.elements;return this.x=r[0]*e+r[3]*a+r[6],this.y=r[1]*e+r[4]*a+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this}clampLength(t,e){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Se(a,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const a=this.dot(t)/e;return Math.acos(Se(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,a=this.y-t.y;return e*e+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,a){return this.x=t.x+(e.x-t.x)*a,this.y=t.y+(e.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const a=Math.cos(e),r=Math.sin(e),l=this.x-t.x,c=this.y-t.y;return this.x=l*a-c*r+t.x,this.y=l*r+c*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Su{constructor(t=0,e=0,a=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=a,this._w=r}static slerpFlat(t,e,a,r,l,c,f){let d=a[r+0],p=a[r+1],m=a[r+2],g=a[r+3];const v=l[c+0],S=l[c+1],E=l[c+2],M=l[c+3];if(f===0){t[e+0]=d,t[e+1]=p,t[e+2]=m,t[e+3]=g;return}if(f===1){t[e+0]=v,t[e+1]=S,t[e+2]=E,t[e+3]=M;return}if(g!==M||d!==v||p!==S||m!==E){let y=1-f;const x=d*v+p*S+m*E+g*M,w=x>=0?1:-1,C=1-x*x;if(C>Number.EPSILON){const N=Math.sqrt(C),I=Math.atan2(N,x*w);y=Math.sin(y*I)/N,f=Math.sin(f*I)/N}const b=f*w;if(d=d*y+v*b,p=p*y+S*b,m=m*y+E*b,g=g*y+M*b,y===1-f){const N=1/Math.sqrt(d*d+p*p+m*m+g*g);d*=N,p*=N,m*=N,g*=N}}t[e]=d,t[e+1]=p,t[e+2]=m,t[e+3]=g}static multiplyQuaternionsFlat(t,e,a,r,l,c){const f=a[r],d=a[r+1],p=a[r+2],m=a[r+3],g=l[c],v=l[c+1],S=l[c+2],E=l[c+3];return t[e]=f*E+m*g+d*S-p*v,t[e+1]=d*E+m*v+p*g-f*S,t[e+2]=p*E+m*S+f*v-d*g,t[e+3]=m*E-f*g-d*v-p*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,a,r){return this._x=t,this._y=e,this._z=a,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const a=t._x,r=t._y,l=t._z,c=t._order,f=Math.cos,d=Math.sin,p=f(a/2),m=f(r/2),g=f(l/2),v=d(a/2),S=d(r/2),E=d(l/2);switch(c){case"XYZ":this._x=v*m*g+p*S*E,this._y=p*S*g-v*m*E,this._z=p*m*E+v*S*g,this._w=p*m*g-v*S*E;break;case"YXZ":this._x=v*m*g+p*S*E,this._y=p*S*g-v*m*E,this._z=p*m*E-v*S*g,this._w=p*m*g+v*S*E;break;case"ZXY":this._x=v*m*g-p*S*E,this._y=p*S*g+v*m*E,this._z=p*m*E+v*S*g,this._w=p*m*g-v*S*E;break;case"ZYX":this._x=v*m*g-p*S*E,this._y=p*S*g+v*m*E,this._z=p*m*E-v*S*g,this._w=p*m*g+v*S*E;break;case"YZX":this._x=v*m*g+p*S*E,this._y=p*S*g+v*m*E,this._z=p*m*E-v*S*g,this._w=p*m*g-v*S*E;break;case"XZY":this._x=v*m*g-p*S*E,this._y=p*S*g-v*m*E,this._z=p*m*E+v*S*g,this._w=p*m*g+v*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const a=e/2,r=Math.sin(a);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,a=e[0],r=e[4],l=e[8],c=e[1],f=e[5],d=e[9],p=e[2],m=e[6],g=e[10],v=a+f+g;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(m-d)*S,this._y=(l-p)*S,this._z=(c-r)*S}else if(a>f&&a>g){const S=2*Math.sqrt(1+a-f-g);this._w=(m-d)/S,this._x=.25*S,this._y=(r+c)/S,this._z=(l+p)/S}else if(f>g){const S=2*Math.sqrt(1+f-a-g);this._w=(l-p)/S,this._x=(r+c)/S,this._y=.25*S,this._z=(d+m)/S}else{const S=2*Math.sqrt(1+g-a-f);this._w=(c-r)/S,this._x=(l+p)/S,this._y=(d+m)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let a=t.dot(e)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,e){const a=this.angleTo(t);if(a===0)return this;const r=Math.min(1,e/a);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const a=t._x,r=t._y,l=t._z,c=t._w,f=e._x,d=e._y,p=e._z,m=e._w;return this._x=a*m+c*f+r*p-l*d,this._y=r*m+c*d+l*f-a*p,this._z=l*m+c*p+a*d-r*f,this._w=c*m-a*f-r*d-l*p,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const a=this._x,r=this._y,l=this._z,c=this._w;let f=c*t._w+a*t._x+r*t._y+l*t._z;if(f<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,f=-f):this.copy(t),f>=1)return this._w=c,this._x=a,this._y=r,this._z=l,this;const d=1-f*f;if(d<=Number.EPSILON){const S=1-e;return this._w=S*c+e*this._w,this._x=S*a+e*this._x,this._y=S*r+e*this._y,this._z=S*l+e*this._z,this.normalize(),this}const p=Math.sqrt(d),m=Math.atan2(p,f),g=Math.sin((1-e)*m)/p,v=Math.sin(e*m)/p;return this._w=c*g+this._w*v,this._x=a*g+this._x*v,this._y=r*g+this._y*v,this._z=l*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,e,a){return this.copy(t).slerp(e,a)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),a=Math.random(),r=Math.sqrt(1-a),l=Math.sqrt(a);return this.set(r*Math.sin(t),r*Math.cos(t),l*Math.sin(e),l*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(t=0,e=0,a=0){$.prototype.isVector3=!0,this.x=t,this.y=e,this.z=a}set(t,e,a){return a===void 0&&(a=this.z),this.x=t,this.y=e,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(yx.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(yx.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,a=this.y,r=this.z,l=t.elements;return this.x=l[0]*e+l[3]*a+l[6]*r,this.y=l[1]*e+l[4]*a+l[7]*r,this.z=l[2]*e+l[5]*a+l[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,a=this.y,r=this.z,l=t.elements,c=1/(l[3]*e+l[7]*a+l[11]*r+l[15]);return this.x=(l[0]*e+l[4]*a+l[8]*r+l[12])*c,this.y=(l[1]*e+l[5]*a+l[9]*r+l[13])*c,this.z=(l[2]*e+l[6]*a+l[10]*r+l[14])*c,this}applyQuaternion(t){const e=this.x,a=this.y,r=this.z,l=t.x,c=t.y,f=t.z,d=t.w,p=2*(c*r-f*a),m=2*(f*e-l*r),g=2*(l*a-c*e);return this.x=e+d*p+c*g-f*m,this.y=a+d*m+f*p-l*g,this.z=r+d*g+l*m-c*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,a=this.y,r=this.z,l=t.elements;return this.x=l[0]*e+l[4]*a+l[8]*r,this.y=l[1]*e+l[5]*a+l[9]*r,this.z=l[2]*e+l[6]*a+l[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this.z=Se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this.z=Se(this.z,t,e),this}clampLength(t,e){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Se(a,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,a){return this.x=t.x+(e.x-t.x)*a,this.y=t.y+(e.y-t.y)*a,this.z=t.z+(e.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const a=t.x,r=t.y,l=t.z,c=e.x,f=e.y,d=e.z;return this.x=r*d-l*f,this.y=l*c-a*d,this.z=a*f-r*c,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const a=t.dot(this)/e;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return $d.copy(this).projectOnVector(t),this.sub($d)}reflect(t){return this.sub($d.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const a=this.dot(t)/e;return Math.acos(Se(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,a=this.y-t.y,r=this.z-t.z;return e*e+a*a+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,a){const r=Math.sin(e)*t;return this.x=r*Math.sin(a),this.y=Math.cos(e)*t,this.z=r*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,a){return this.x=t*Math.sin(e),this.y=a,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=a,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,a=Math.sqrt(1-e*e);return this.x=a*Math.cos(t),this.y=e,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $d=new $,yx=new Su;class oe{constructor(t,e,a,r,l,c,f,d,p){oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,a,r,l,c,f,d,p)}set(t,e,a,r,l,c,f,d,p){const m=this.elements;return m[0]=t,m[1]=r,m[2]=f,m[3]=e,m[4]=l,m[5]=d,m[6]=a,m[7]=c,m[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,a=t.elements;return e[0]=a[0],e[1]=a[1],e[2]=a[2],e[3]=a[3],e[4]=a[4],e[5]=a[5],e[6]=a[6],e[7]=a[7],e[8]=a[8],this}extractBasis(t,e,a){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const a=t.elements,r=e.elements,l=this.elements,c=a[0],f=a[3],d=a[6],p=a[1],m=a[4],g=a[7],v=a[2],S=a[5],E=a[8],M=r[0],y=r[3],x=r[6],w=r[1],C=r[4],b=r[7],N=r[2],I=r[5],P=r[8];return l[0]=c*M+f*w+d*N,l[3]=c*y+f*C+d*I,l[6]=c*x+f*b+d*P,l[1]=p*M+m*w+g*N,l[4]=p*y+m*C+g*I,l[7]=p*x+m*b+g*P,l[2]=v*M+S*w+E*N,l[5]=v*y+S*C+E*I,l[8]=v*x+S*b+E*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],a=t[1],r=t[2],l=t[3],c=t[4],f=t[5],d=t[6],p=t[7],m=t[8];return e*c*m-e*f*p-a*l*m+a*f*d+r*l*p-r*c*d}invert(){const t=this.elements,e=t[0],a=t[1],r=t[2],l=t[3],c=t[4],f=t[5],d=t[6],p=t[7],m=t[8],g=m*c-f*p,v=f*d-m*l,S=p*l-c*d,E=e*g+a*v+r*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return t[0]=g*M,t[1]=(r*p-m*a)*M,t[2]=(f*a-r*c)*M,t[3]=v*M,t[4]=(m*e-r*d)*M,t[5]=(r*l-f*e)*M,t[6]=S*M,t[7]=(a*d-p*e)*M,t[8]=(c*e-a*l)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,a,r,l,c,f){const d=Math.cos(l),p=Math.sin(l);return this.set(a*d,a*p,-a*(d*c+p*f)+c+t,-r*p,r*d,-r*(-p*c+d*f)+f+e,0,0,1),this}scale(t,e){return this.premultiply(tp.makeScale(t,e)),this}rotate(t){return this.premultiply(tp.makeRotation(-t)),this}translate(t,e){return this.premultiply(tp.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),a=Math.sin(t);return this.set(e,-a,0,a,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,a=t.elements;for(let r=0;r<9;r++)if(e[r]!==a[r])return!1;return!0}fromArray(t,e=0){for(let a=0;a<9;a++)this.elements[a]=t[a+e];return this}toArray(t=[],e=0){const a=this.elements;return t[e]=a[0],t[e+1]=a[1],t[e+2]=a[2],t[e+3]=a[3],t[e+4]=a[4],t[e+5]=a[5],t[e+6]=a[6],t[e+7]=a[7],t[e+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const tp=new oe;function uS(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Mf(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function tA(){const s=Mf("canvas");return s.style.display="block",s}const Sx={};function Co(s){s in Sx||(Sx[s]=!0,console.warn(s))}function eA(s,t,e){return new Promise(function(a,r){function l(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:r();break;case s.TIMEOUT_EXPIRED:setTimeout(l,e);break;default:a()}}setTimeout(l,e)})}function nA(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function iA(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Mx=new oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ex=new oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function aA(){const s={enabled:!0,workingColorSpace:Io,spaces:{},convert:function(r,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===He&&(r.r=ka(r.r),r.g=ka(r.g),r.b=ka(r.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(r.applyMatrix3(this.spaces[l].toXYZ),r.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===He&&(r.r=Do(r.r),r.g=Do(r.g),r.b=Do(r.b))),r},workingToColorSpace:function(r,l){return this.convert(r,this.workingColorSpace,l)},colorSpaceToWorking:function(r,l){return this.convert(r,l,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Rr?yf:this.spaces[r].transfer},getLuminanceCoefficients:function(r,l=this.workingColorSpace){return r.fromArray(this.spaces[l].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,l,c){return r.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,l){return Co("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(r,l)},toWorkingColorSpace:function(r,l){return Co("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(r,l)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],a=[.3127,.329];return s.define({[Io]:{primaries:t,whitePoint:a,transfer:yf,toXYZ:Mx,fromXYZ:Ex,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:zi},outputColorSpaceConfig:{drawingBufferColorSpace:zi}},[zi]:{primaries:t,whitePoint:a,transfer:He,toXYZ:Mx,fromXYZ:Ex,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:zi}}}),s}const we=aA();function ka(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Do(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let co;class rA{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{co===void 0&&(co=Mf("canvas")),co.width=t.width,co.height=t.height;const r=co.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),a=co}return a.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Mf("canvas");e.width=t.width,e.height=t.height;const a=e.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const r=a.getImageData(0,0,t.width,t.height),l=r.data;for(let c=0;c<l.length;c++)l[c]=ka(l[c]/255)*255;return a.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let a=0;a<e.length;a++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[a]=Math.floor(ka(e[a]/255)*255):e[a]=ka(e[a]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let sA=0;class i_{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sA++}),this.uuid=yu(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},r=this.data;if(r!==null){let l;if(Array.isArray(r)){l=[];for(let c=0,f=r.length;c<f;c++)r[c].isDataTexture?l.push(ep(r[c].image)):l.push(ep(r[c]))}else l=ep(r);a.url=l}return e||(t.images[this.uuid]=a),a}}function ep(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?rA.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let oA=0;const np=new $;class ii extends qo{constructor(t=ii.DEFAULT_IMAGE,e=ii.DEFAULT_MAPPING,a=xs,r=xs,l=sa,c=ys,f=ji,d=ua,p=ii.DEFAULT_ANISOTROPY,m=Rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oA++}),this.uuid=yu(),this.name="",this.source=new i_(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=a,this.wrapT=r,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=d,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(np).x}get height(){return this.source.getSize(np).y}get depth(){return this.source.getSize(np).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const a=t[e];if(a===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&a&&r.isVector2&&a.isVector2||r&&a&&r.isVector3&&a.isVector3||r&&a&&r.isMatrix3&&a.isMatrix3?r.copy(a):this[e]=a}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),e||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jy)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Jp:t.x=t.x-Math.floor(t.x);break;case xs:t.x=t.x<0?0:1;break;case $p:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Jp:t.y=t.y-Math.floor(t.y);break;case xs:t.y=t.y<0?0:1;break;case $p:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ii.DEFAULT_IMAGE=null;ii.DEFAULT_MAPPING=Jy;ii.DEFAULT_ANISOTROPY=1;class Ge{constructor(t=0,e=0,a=0,r=1){Ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=a,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,a,r){return this.x=t,this.y=e,this.z=a,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,a=this.y,r=this.z,l=this.w,c=t.elements;return this.x=c[0]*e+c[4]*a+c[8]*r+c[12]*l,this.y=c[1]*e+c[5]*a+c[9]*r+c[13]*l,this.z=c[2]*e+c[6]*a+c[10]*r+c[14]*l,this.w=c[3]*e+c[7]*a+c[11]*r+c[15]*l,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,a,r,l;const d=t.elements,p=d[0],m=d[4],g=d[8],v=d[1],S=d[5],E=d[9],M=d[2],y=d[6],x=d[10];if(Math.abs(m-v)<.01&&Math.abs(g-M)<.01&&Math.abs(E-y)<.01){if(Math.abs(m+v)<.1&&Math.abs(g+M)<.1&&Math.abs(E+y)<.1&&Math.abs(p+S+x-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const C=(p+1)/2,b=(S+1)/2,N=(x+1)/2,I=(m+v)/4,P=(g+M)/4,F=(E+y)/4;return C>b&&C>N?C<.01?(a=0,r=.707106781,l=.707106781):(a=Math.sqrt(C),r=I/a,l=P/a):b>N?b<.01?(a=.707106781,r=0,l=.707106781):(r=Math.sqrt(b),a=I/r,l=F/r):N<.01?(a=.707106781,r=.707106781,l=0):(l=Math.sqrt(N),a=P/l,r=F/l),this.set(a,r,l,e),this}let w=Math.sqrt((y-E)*(y-E)+(g-M)*(g-M)+(v-m)*(v-m));return Math.abs(w)<.001&&(w=1),this.x=(y-E)/w,this.y=(g-M)/w,this.z=(v-m)/w,this.w=Math.acos((p+S+x-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this.z=Se(this.z,t.z,e.z),this.w=Se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this.z=Se(this.z,t,e),this.w=Se(this.w,t,e),this}clampLength(t,e){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Se(a,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,a){return this.x=t.x+(e.x-t.x)*a,this.y=t.y+(e.y-t.y)*a,this.z=t.z+(e.z-t.z)*a,this.w=t.w+(e.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lA extends qo{constructor(t=1,e=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sa,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=a.depth,this.scissor=new Ge(0,0,t,e),this.scissorTest=!1,this.viewport=new Ge(0,0,t,e);const r={width:t,height:e,depth:a.depth},l=new ii(r);this.textures=[];const c=a.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(t={}){const e={minFilter:sa,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,a=1){if(this.width!==t||this.height!==e||this.depth!==a){this.width=t,this.height=e,this.depth=a;for(let r=0,l=this.textures.length;r<l;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=a,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,a=t.textures.length;e<a;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new i_(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rs extends lA{constructor(t=1,e=1,a={}){super(t,e,a),this.isWebGLRenderTarget=!0}}class cS extends ii{constructor(t=null,e=1,a=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:a,depth:r},this.magFilter=Zi,this.minFilter=Zi,this.wrapR=xs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class uA extends ii{constructor(t=null,e=1,a=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:a,depth:r},this.magFilter=Zi,this.minFilter=Zi,this.wrapR=xs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mu{constructor(t=new $(1/0,1/0,1/0),e=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,a=t.length;e<a;e+=3)this.expandByPoint(ki.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,a=t.count;e<a;e++)this.expandByPoint(ki.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,a=t.length;e<a;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const a=ki.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const l=a.getAttribute("position");if(e===!0&&l!==void 0&&t.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)t.isMesh===!0?t.getVertexPosition(c,ki):ki.fromBufferAttribute(l,c),ki.applyMatrix4(t.matrixWorld),this.expandByPoint(ki);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Bc.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Bc.copy(a.boundingBox)),Bc.applyMatrix4(t.matrixWorld),this.union(Bc)}const r=t.children;for(let l=0,c=r.length;l<c;l++)this.expandByObject(r[l],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ki),ki.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,a;return t.normal.x>0?(e=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),e<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Xl),Fc.subVectors(this.max,Xl),fo.subVectors(t.a,Xl),ho.subVectors(t.b,Xl),po.subVectors(t.c,Xl),Sr.subVectors(ho,fo),Mr.subVectors(po,ho),rs.subVectors(fo,po);let e=[0,-Sr.z,Sr.y,0,-Mr.z,Mr.y,0,-rs.z,rs.y,Sr.z,0,-Sr.x,Mr.z,0,-Mr.x,rs.z,0,-rs.x,-Sr.y,Sr.x,0,-Mr.y,Mr.x,0,-rs.y,rs.x,0];return!ip(e,fo,ho,po,Fc)||(e=[1,0,0,0,1,0,0,0,1],!ip(e,fo,ho,po,Fc))?!1:(Hc.crossVectors(Sr,Mr),e=[Hc.x,Hc.y,Hc.z],ip(e,fo,ho,po,Fc))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ki).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ki).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(La[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),La[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),La[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),La[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),La[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),La[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),La[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),La[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(La),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const La=[new $,new $,new $,new $,new $,new $,new $,new $],ki=new $,Bc=new Mu,fo=new $,ho=new $,po=new $,Sr=new $,Mr=new $,rs=new $,Xl=new $,Fc=new $,Hc=new $,ss=new $;function ip(s,t,e,a,r){for(let l=0,c=s.length-3;l<=c;l+=3){ss.fromArray(s,l);const f=r.x*Math.abs(ss.x)+r.y*Math.abs(ss.y)+r.z*Math.abs(ss.z),d=t.dot(ss),p=e.dot(ss),m=a.dot(ss);if(Math.max(-Math.max(d,p,m),Math.min(d,p,m))>f)return!1}return!0}const cA=new Mu,Wl=new $,ap=new $;class a_{constructor(t=new $,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const a=this.center;e!==void 0?a.copy(e):cA.setFromPoints(t).getCenter(a);let r=0;for(let l=0,c=t.length;l<c;l++)r=Math.max(r,a.distanceToSquared(t[l]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const a=this.center.distanceToSquared(t);return e.copy(t),a>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Wl.subVectors(t,this.center);const e=Wl.lengthSq();if(e>this.radius*this.radius){const a=Math.sqrt(e),r=(a-this.radius)*.5;this.center.addScaledVector(Wl,r/a),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ap.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Wl.copy(t.center).add(ap)),this.expandByPoint(Wl.copy(t.center).sub(ap))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Na=new $,rp=new $,Gc=new $,Er=new $,sp=new $,Vc=new $,op=new $;class fS{constructor(t=new $,e=new $(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Na)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const a=e.dot(this.direction);return a<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Na.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Na.copy(this.origin).addScaledVector(this.direction,e),Na.distanceToSquared(t))}distanceSqToSegment(t,e,a,r){rp.copy(t).add(e).multiplyScalar(.5),Gc.copy(e).sub(t).normalize(),Er.copy(this.origin).sub(rp);const l=t.distanceTo(e)*.5,c=-this.direction.dot(Gc),f=Er.dot(this.direction),d=-Er.dot(Gc),p=Er.lengthSq(),m=Math.abs(1-c*c);let g,v,S,E;if(m>0)if(g=c*d-f,v=c*f-d,E=l*m,g>=0)if(v>=-E)if(v<=E){const M=1/m;g*=M,v*=M,S=g*(g+c*v+2*f)+v*(c*g+v+2*d)+p}else v=l,g=Math.max(0,-(c*v+f)),S=-g*g+v*(v+2*d)+p;else v=-l,g=Math.max(0,-(c*v+f)),S=-g*g+v*(v+2*d)+p;else v<=-E?(g=Math.max(0,-(-c*l+f)),v=g>0?-l:Math.min(Math.max(-l,-d),l),S=-g*g+v*(v+2*d)+p):v<=E?(g=0,v=Math.min(Math.max(-l,-d),l),S=v*(v+2*d)+p):(g=Math.max(0,-(c*l+f)),v=g>0?l:Math.min(Math.max(-l,-d),l),S=-g*g+v*(v+2*d)+p);else v=c>0?-l:l,g=Math.max(0,-(c*v+f)),S=-g*g+v*(v+2*d)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,g),r&&r.copy(rp).addScaledVector(Gc,v),S}intersectSphere(t,e){Na.subVectors(t.center,this.origin);const a=Na.dot(this.direction),r=Na.dot(Na)-a*a,l=t.radius*t.radius;if(r>l)return null;const c=Math.sqrt(l-r),f=a-c,d=a+c;return d<0?null:f<0?this.at(d,e):this.at(f,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/e;return a>=0?a:null}intersectPlane(t,e){const a=this.distanceToPlane(t);return a===null?null:this.at(a,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let a,r,l,c,f,d;const p=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,v=this.origin;return p>=0?(a=(t.min.x-v.x)*p,r=(t.max.x-v.x)*p):(a=(t.max.x-v.x)*p,r=(t.min.x-v.x)*p),m>=0?(l=(t.min.y-v.y)*m,c=(t.max.y-v.y)*m):(l=(t.max.y-v.y)*m,c=(t.min.y-v.y)*m),a>c||l>r||((l>a||isNaN(a))&&(a=l),(c<r||isNaN(r))&&(r=c),g>=0?(f=(t.min.z-v.z)*g,d=(t.max.z-v.z)*g):(f=(t.max.z-v.z)*g,d=(t.min.z-v.z)*g),a>d||f>r)||((f>a||a!==a)&&(a=f),(d<r||r!==r)&&(r=d),r<0)?null:this.at(a>=0?a:r,e)}intersectsBox(t){return this.intersectBox(t,Na)!==null}intersectTriangle(t,e,a,r,l){sp.subVectors(e,t),Vc.subVectors(a,t),op.crossVectors(sp,Vc);let c=this.direction.dot(op),f;if(c>0){if(r)return null;f=1}else if(c<0)f=-1,c=-c;else return null;Er.subVectors(this.origin,t);const d=f*this.direction.dot(Vc.crossVectors(Er,Vc));if(d<0)return null;const p=f*this.direction.dot(sp.cross(Er));if(p<0||d+p>c)return null;const m=-f*Er.dot(op);return m<0?null:this.at(m/c,l)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(t,e,a,r,l,c,f,d,p,m,g,v,S,E,M,y){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,a,r,l,c,f,d,p,m,g,v,S,E,M,y)}set(t,e,a,r,l,c,f,d,p,m,g,v,S,E,M,y){const x=this.elements;return x[0]=t,x[4]=e,x[8]=a,x[12]=r,x[1]=l,x[5]=c,x[9]=f,x[13]=d,x[2]=p,x[6]=m,x[10]=g,x[14]=v,x[3]=S,x[7]=E,x[11]=M,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(t){const e=this.elements,a=t.elements;return e[0]=a[0],e[1]=a[1],e[2]=a[2],e[3]=a[3],e[4]=a[4],e[5]=a[5],e[6]=a[6],e[7]=a[7],e[8]=a[8],e[9]=a[9],e[10]=a[10],e[11]=a[11],e[12]=a[12],e[13]=a[13],e[14]=a[14],e[15]=a[15],this}copyPosition(t){const e=this.elements,a=t.elements;return e[12]=a[12],e[13]=a[13],e[14]=a[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,a){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(t,e,a){return this.set(t.x,e.x,a.x,0,t.y,e.y,a.y,0,t.z,e.z,a.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,a=t.elements,r=1/mo.setFromMatrixColumn(t,0).length(),l=1/mo.setFromMatrixColumn(t,1).length(),c=1/mo.setFromMatrixColumn(t,2).length();return e[0]=a[0]*r,e[1]=a[1]*r,e[2]=a[2]*r,e[3]=0,e[4]=a[4]*l,e[5]=a[5]*l,e[6]=a[6]*l,e[7]=0,e[8]=a[8]*c,e[9]=a[9]*c,e[10]=a[10]*c,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,a=t.x,r=t.y,l=t.z,c=Math.cos(a),f=Math.sin(a),d=Math.cos(r),p=Math.sin(r),m=Math.cos(l),g=Math.sin(l);if(t.order==="XYZ"){const v=c*m,S=c*g,E=f*m,M=f*g;e[0]=d*m,e[4]=-d*g,e[8]=p,e[1]=S+E*p,e[5]=v-M*p,e[9]=-f*d,e[2]=M-v*p,e[6]=E+S*p,e[10]=c*d}else if(t.order==="YXZ"){const v=d*m,S=d*g,E=p*m,M=p*g;e[0]=v+M*f,e[4]=E*f-S,e[8]=c*p,e[1]=c*g,e[5]=c*m,e[9]=-f,e[2]=S*f-E,e[6]=M+v*f,e[10]=c*d}else if(t.order==="ZXY"){const v=d*m,S=d*g,E=p*m,M=p*g;e[0]=v-M*f,e[4]=-c*g,e[8]=E+S*f,e[1]=S+E*f,e[5]=c*m,e[9]=M-v*f,e[2]=-c*p,e[6]=f,e[10]=c*d}else if(t.order==="ZYX"){const v=c*m,S=c*g,E=f*m,M=f*g;e[0]=d*m,e[4]=E*p-S,e[8]=v*p+M,e[1]=d*g,e[5]=M*p+v,e[9]=S*p-E,e[2]=-p,e[6]=f*d,e[10]=c*d}else if(t.order==="YZX"){const v=c*d,S=c*p,E=f*d,M=f*p;e[0]=d*m,e[4]=M-v*g,e[8]=E*g+S,e[1]=g,e[5]=c*m,e[9]=-f*m,e[2]=-p*m,e[6]=S*g+E,e[10]=v-M*g}else if(t.order==="XZY"){const v=c*d,S=c*p,E=f*d,M=f*p;e[0]=d*m,e[4]=-g,e[8]=p*m,e[1]=v*g+M,e[5]=c*m,e[9]=S*g-E,e[2]=E*g-S,e[6]=f*m,e[10]=M*g+v}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(fA,t,hA)}lookAt(t,e,a){const r=this.elements;return gi.subVectors(t,e),gi.lengthSq()===0&&(gi.z=1),gi.normalize(),Tr.crossVectors(a,gi),Tr.lengthSq()===0&&(Math.abs(a.z)===1?gi.x+=1e-4:gi.z+=1e-4,gi.normalize(),Tr.crossVectors(a,gi)),Tr.normalize(),kc.crossVectors(gi,Tr),r[0]=Tr.x,r[4]=kc.x,r[8]=gi.x,r[1]=Tr.y,r[5]=kc.y,r[9]=gi.y,r[2]=Tr.z,r[6]=kc.z,r[10]=gi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const a=t.elements,r=e.elements,l=this.elements,c=a[0],f=a[4],d=a[8],p=a[12],m=a[1],g=a[5],v=a[9],S=a[13],E=a[2],M=a[6],y=a[10],x=a[14],w=a[3],C=a[7],b=a[11],N=a[15],I=r[0],P=r[4],F=r[8],A=r[12],U=r[1],G=r[5],nt=r[9],J=r[13],ct=r[2],lt=r[6],z=r[10],k=r[14],W=r[3],mt=r[7],O=r[11],Z=r[15];return l[0]=c*I+f*U+d*ct+p*W,l[4]=c*P+f*G+d*lt+p*mt,l[8]=c*F+f*nt+d*z+p*O,l[12]=c*A+f*J+d*k+p*Z,l[1]=m*I+g*U+v*ct+S*W,l[5]=m*P+g*G+v*lt+S*mt,l[9]=m*F+g*nt+v*z+S*O,l[13]=m*A+g*J+v*k+S*Z,l[2]=E*I+M*U+y*ct+x*W,l[6]=E*P+M*G+y*lt+x*mt,l[10]=E*F+M*nt+y*z+x*O,l[14]=E*A+M*J+y*k+x*Z,l[3]=w*I+C*U+b*ct+N*W,l[7]=w*P+C*G+b*lt+N*mt,l[11]=w*F+C*nt+b*z+N*O,l[15]=w*A+C*J+b*k+N*Z,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],a=t[4],r=t[8],l=t[12],c=t[1],f=t[5],d=t[9],p=t[13],m=t[2],g=t[6],v=t[10],S=t[14],E=t[3],M=t[7],y=t[11],x=t[15];return E*(+l*d*g-r*p*g-l*f*v+a*p*v+r*f*S-a*d*S)+M*(+e*d*S-e*p*v+l*c*v-r*c*S+r*p*m-l*d*m)+y*(+e*p*g-e*f*S-l*c*g+a*c*S+l*f*m-a*p*m)+x*(-r*f*m-e*d*g+e*f*v+r*c*g-a*c*v+a*d*m)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,a){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=a),this}invert(){const t=this.elements,e=t[0],a=t[1],r=t[2],l=t[3],c=t[4],f=t[5],d=t[6],p=t[7],m=t[8],g=t[9],v=t[10],S=t[11],E=t[12],M=t[13],y=t[14],x=t[15],w=g*y*p-M*v*p+M*d*S-f*y*S-g*d*x+f*v*x,C=E*v*p-m*y*p-E*d*S+c*y*S+m*d*x-c*v*x,b=m*M*p-E*g*p+E*f*S-c*M*S-m*f*x+c*g*x,N=E*g*d-m*M*d-E*f*v+c*M*v+m*f*y-c*g*y,I=e*w+a*C+r*b+l*N;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/I;return t[0]=w*P,t[1]=(M*v*l-g*y*l-M*r*S+a*y*S+g*r*x-a*v*x)*P,t[2]=(f*y*l-M*d*l+M*r*p-a*y*p-f*r*x+a*d*x)*P,t[3]=(g*d*l-f*v*l-g*r*p+a*v*p+f*r*S-a*d*S)*P,t[4]=C*P,t[5]=(m*y*l-E*v*l+E*r*S-e*y*S-m*r*x+e*v*x)*P,t[6]=(E*d*l-c*y*l-E*r*p+e*y*p+c*r*x-e*d*x)*P,t[7]=(c*v*l-m*d*l+m*r*p-e*v*p-c*r*S+e*d*S)*P,t[8]=b*P,t[9]=(E*g*l-m*M*l-E*a*S+e*M*S+m*a*x-e*g*x)*P,t[10]=(c*M*l-E*f*l+E*a*p-e*M*p-c*a*x+e*f*x)*P,t[11]=(m*f*l-c*g*l-m*a*p+e*g*p+c*a*S-e*f*S)*P,t[12]=N*P,t[13]=(m*M*r-E*g*r+E*a*v-e*M*v-m*a*y+e*g*y)*P,t[14]=(E*f*r-c*M*r-E*a*d+e*M*d+c*a*y-e*f*y)*P,t[15]=(c*g*r-m*f*r+m*a*d-e*g*d-c*a*v+e*f*v)*P,this}scale(t){const e=this.elements,a=t.x,r=t.y,l=t.z;return e[0]*=a,e[4]*=r,e[8]*=l,e[1]*=a,e[5]*=r,e[9]*=l,e[2]*=a,e[6]*=r,e[10]*=l,e[3]*=a,e[7]*=r,e[11]*=l,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,a,r))}makeTranslation(t,e,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,a,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,e,-a,0,0,a,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),a=Math.sin(t);return this.set(e,0,a,0,0,1,0,0,-a,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),a=Math.sin(t);return this.set(e,-a,0,0,a,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const a=Math.cos(e),r=Math.sin(e),l=1-a,c=t.x,f=t.y,d=t.z,p=l*c,m=l*f;return this.set(p*c+a,p*f-r*d,p*d+r*f,0,p*f+r*d,m*f+a,m*d-r*c,0,p*d-r*f,m*d+r*c,l*d*d+a,0,0,0,0,1),this}makeScale(t,e,a){return this.set(t,0,0,0,0,e,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,e,a,r,l,c){return this.set(1,a,l,0,t,1,c,0,e,r,1,0,0,0,0,1),this}compose(t,e,a){const r=this.elements,l=e._x,c=e._y,f=e._z,d=e._w,p=l+l,m=c+c,g=f+f,v=l*p,S=l*m,E=l*g,M=c*m,y=c*g,x=f*g,w=d*p,C=d*m,b=d*g,N=a.x,I=a.y,P=a.z;return r[0]=(1-(M+x))*N,r[1]=(S+b)*N,r[2]=(E-C)*N,r[3]=0,r[4]=(S-b)*I,r[5]=(1-(v+x))*I,r[6]=(y+w)*I,r[7]=0,r[8]=(E+C)*P,r[9]=(y-w)*P,r[10]=(1-(v+M))*P,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,a){const r=this.elements;let l=mo.set(r[0],r[1],r[2]).length();const c=mo.set(r[4],r[5],r[6]).length(),f=mo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(l=-l),t.x=r[12],t.y=r[13],t.z=r[14],Xi.copy(this);const p=1/l,m=1/c,g=1/f;return Xi.elements[0]*=p,Xi.elements[1]*=p,Xi.elements[2]*=p,Xi.elements[4]*=m,Xi.elements[5]*=m,Xi.elements[6]*=m,Xi.elements[8]*=g,Xi.elements[9]*=g,Xi.elements[10]*=g,e.setFromRotationMatrix(Xi),a.x=l,a.y=c,a.z=f,this}makePerspective(t,e,a,r,l,c,f=Ga){const d=this.elements,p=2*l/(e-t),m=2*l/(a-r),g=(e+t)/(e-t),v=(a+r)/(a-r);let S,E;if(f===Ga)S=-(c+l)/(c-l),E=-2*c*l/(c-l);else if(f===Sf)S=-c/(c-l),E=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=p,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=m,d[9]=v,d[13]=0,d[2]=0,d[6]=0,d[10]=S,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,e,a,r,l,c,f=Ga){const d=this.elements,p=1/(e-t),m=1/(a-r),g=1/(c-l),v=(e+t)*p,S=(a+r)*m;let E,M;if(f===Ga)E=(c+l)*g,M=-2*g;else if(f===Sf)E=l*g,M=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=2*p,d[4]=0,d[8]=0,d[12]=-v,d[1]=0,d[5]=2*m,d[9]=0,d[13]=-S,d[2]=0,d[6]=0,d[10]=M,d[14]=-E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const e=this.elements,a=t.elements;for(let r=0;r<16;r++)if(e[r]!==a[r])return!1;return!0}fromArray(t,e=0){for(let a=0;a<16;a++)this.elements[a]=t[a+e];return this}toArray(t=[],e=0){const a=this.elements;return t[e]=a[0],t[e+1]=a[1],t[e+2]=a[2],t[e+3]=a[3],t[e+4]=a[4],t[e+5]=a[5],t[e+6]=a[6],t[e+7]=a[7],t[e+8]=a[8],t[e+9]=a[9],t[e+10]=a[10],t[e+11]=a[11],t[e+12]=a[12],t[e+13]=a[13],t[e+14]=a[14],t[e+15]=a[15],t}}const mo=new $,Xi=new Je,fA=new $(0,0,0),hA=new $(1,1,1),Tr=new $,kc=new $,gi=new $,Tx=new Je,bx=new Su;class ca{constructor(t=0,e=0,a=0,r=ca.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=a,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,a,r=this._order){return this._x=t,this._y=e,this._z=a,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,a=!0){const r=t.elements,l=r[0],c=r[4],f=r[8],d=r[1],p=r[5],m=r[9],g=r[2],v=r[6],S=r[10];switch(e){case"XYZ":this._y=Math.asin(Se(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(Se(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-Se(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(Se(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,p),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-Se(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-m,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,a){return Tx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Tx,e,a)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return bx.setFromEuler(this),this.setFromQuaternion(bx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ca.DEFAULT_ORDER="XYZ";class r_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let dA=0;const Ax=new $,_o=new Su,Oa=new Je,Xc=new $,ql=new $,pA=new $,mA=new Su,Rx=new $(1,0,0),wx=new $(0,1,0),Cx=new $(0,0,1),Dx={type:"added"},_A={type:"removed"},go={type:"childadded",child:null},lp={type:"childremoved",child:null};class In extends qo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dA++}),this.uuid=yu(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=In.DEFAULT_UP.clone();const t=new $,e=new ca,a=new Su,r=new $(1,1,1);function l(){a.setFromEuler(e,!1)}function c(){e.setFromQuaternion(a,void 0,!1)}e._onChange(l),a._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Je},normalMatrix:{value:new oe}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=In.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new r_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return _o.setFromAxisAngle(t,e),this.quaternion.multiply(_o),this}rotateOnWorldAxis(t,e){return _o.setFromAxisAngle(t,e),this.quaternion.premultiply(_o),this}rotateX(t){return this.rotateOnAxis(Rx,t)}rotateY(t){return this.rotateOnAxis(wx,t)}rotateZ(t){return this.rotateOnAxis(Cx,t)}translateOnAxis(t,e){return Ax.copy(t).applyQuaternion(this.quaternion),this.position.add(Ax.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Rx,t)}translateY(t){return this.translateOnAxis(wx,t)}translateZ(t){return this.translateOnAxis(Cx,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Oa.copy(this.matrixWorld).invert())}lookAt(t,e,a){t.isVector3?Xc.copy(t):Xc.set(t,e,a);const r=this.parent;this.updateWorldMatrix(!0,!1),ql.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oa.lookAt(ql,Xc,this.up):Oa.lookAt(Xc,ql,this.up),this.quaternion.setFromRotationMatrix(Oa),r&&(Oa.extractRotation(r.matrixWorld),_o.setFromRotationMatrix(Oa),this.quaternion.premultiply(_o.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Dx),go.child=t,this.dispatchEvent(go),go.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(_A),lp.child=t,this.dispatchEvent(lp),lp.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Oa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Oa.multiply(t.parent.matrixWorld)),t.applyMatrix4(Oa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Dx),go.child=t,this.dispatchEvent(go),go.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let a=0,r=this.children.length;a<r;a++){const c=this.children[a].getObjectByProperty(t,e);if(c!==void 0)return c}}getObjectsByProperty(t,e,a=[]){this[t]===e&&a.push(this);const r=this.children;for(let l=0,c=r.length;l<c;l++)r[l].getObjectsByProperty(t,e,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ql,t,pA),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ql,mA,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let a=0,r=e.length;a<r;a++)e[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let a=0,r=e.length;a<r;a++)e[a].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let a=0,r=e.length;a<r;a++)e[a].updateMatrixWorld(t)}updateWorldMatrix(t,e){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let l=0,c=r.length;l<c;l++)r[l].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",a={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(f=>({...f})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function l(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(t)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=l(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let p=0,m=d.length;p<m;p++){const g=d[p];l(t.shapes,g)}else l(t.shapes,d)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,p=this.material.length;d<p;d++)f.push(l(t.materials,this.material[d]));r.material=f}else r.material=l(t.materials,this.material);if(this.children.length>0){r.children=[];for(let f=0;f<this.children.length;f++)r.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];r.animations.push(l(t.animations,d))}}if(e){const f=c(t.geometries),d=c(t.materials),p=c(t.textures),m=c(t.images),g=c(t.shapes),v=c(t.skeletons),S=c(t.animations),E=c(t.nodes);f.length>0&&(a.geometries=f),d.length>0&&(a.materials=d),p.length>0&&(a.textures=p),m.length>0&&(a.images=m),g.length>0&&(a.shapes=g),v.length>0&&(a.skeletons=v),S.length>0&&(a.animations=S),E.length>0&&(a.nodes=E)}return a.object=r,a;function c(f){const d=[];for(const p in f){const m=f[p];delete m.metadata,d.push(m)}return d}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let a=0;a<t.children.length;a++){const r=t.children[a];this.add(r.clone())}return this}}In.DEFAULT_UP=new $(0,1,0);In.DEFAULT_MATRIX_AUTO_UPDATE=!0;In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wi=new $,Pa=new $,up=new $,za=new $,vo=new $,xo=new $,Ux=new $,cp=new $,fp=new $,hp=new $,dp=new Ge,pp=new Ge,mp=new Ge;class Yi{constructor(t=new $,e=new $,a=new $){this.a=t,this.b=e,this.c=a}static getNormal(t,e,a,r){r.subVectors(a,e),Wi.subVectors(t,e),r.cross(Wi);const l=r.lengthSq();return l>0?r.multiplyScalar(1/Math.sqrt(l)):r.set(0,0,0)}static getBarycoord(t,e,a,r,l){Wi.subVectors(r,e),Pa.subVectors(a,e),up.subVectors(t,e);const c=Wi.dot(Wi),f=Wi.dot(Pa),d=Wi.dot(up),p=Pa.dot(Pa),m=Pa.dot(up),g=c*p-f*f;if(g===0)return l.set(0,0,0),null;const v=1/g,S=(p*d-f*m)*v,E=(c*m-f*d)*v;return l.set(1-S-E,E,S)}static containsPoint(t,e,a,r){return this.getBarycoord(t,e,a,r,za)===null?!1:za.x>=0&&za.y>=0&&za.x+za.y<=1}static getInterpolation(t,e,a,r,l,c,f,d){return this.getBarycoord(t,e,a,r,za)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,za.x),d.addScaledVector(c,za.y),d.addScaledVector(f,za.z),d)}static getInterpolatedAttribute(t,e,a,r,l,c){return dp.setScalar(0),pp.setScalar(0),mp.setScalar(0),dp.fromBufferAttribute(t,e),pp.fromBufferAttribute(t,a),mp.fromBufferAttribute(t,r),c.setScalar(0),c.addScaledVector(dp,l.x),c.addScaledVector(pp,l.y),c.addScaledVector(mp,l.z),c}static isFrontFacing(t,e,a,r){return Wi.subVectors(a,e),Pa.subVectors(t,e),Wi.cross(Pa).dot(r)<0}set(t,e,a){return this.a.copy(t),this.b.copy(e),this.c.copy(a),this}setFromPointsAndIndices(t,e,a,r){return this.a.copy(t[e]),this.b.copy(t[a]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,a,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Wi.subVectors(this.c,this.b),Pa.subVectors(this.a,this.b),Wi.cross(Pa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Yi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Yi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,a,r,l){return Yi.getInterpolation(t,this.a,this.b,this.c,e,a,r,l)}containsPoint(t){return Yi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Yi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const a=this.a,r=this.b,l=this.c;let c,f;vo.subVectors(r,a),xo.subVectors(l,a),cp.subVectors(t,a);const d=vo.dot(cp),p=xo.dot(cp);if(d<=0&&p<=0)return e.copy(a);fp.subVectors(t,r);const m=vo.dot(fp),g=xo.dot(fp);if(m>=0&&g<=m)return e.copy(r);const v=d*g-m*p;if(v<=0&&d>=0&&m<=0)return c=d/(d-m),e.copy(a).addScaledVector(vo,c);hp.subVectors(t,l);const S=vo.dot(hp),E=xo.dot(hp);if(E>=0&&S<=E)return e.copy(l);const M=S*p-d*E;if(M<=0&&p>=0&&E<=0)return f=p/(p-E),e.copy(a).addScaledVector(xo,f);const y=m*E-S*g;if(y<=0&&g-m>=0&&S-E>=0)return Ux.subVectors(l,r),f=(g-m)/(g-m+(S-E)),e.copy(r).addScaledVector(Ux,f);const x=1/(y+M+v);return c=M*x,f=v*x,e.copy(a).addScaledVector(vo,c).addScaledVector(xo,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const hS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},br={h:0,s:0,l:0},Wc={h:0,s:0,l:0};function _p(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class De{constructor(t,e,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,a)}set(t,e,a){if(e===void 0&&a===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=zi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.colorSpaceToWorking(this,e),this}setRGB(t,e,a,r=we.workingColorSpace){return this.r=t,this.g=e,this.b=a,we.colorSpaceToWorking(this,r),this}setHSL(t,e,a,r=we.workingColorSpace){if(t=$1(t,1),e=Se(e,0,1),a=Se(a,0,1),e===0)this.r=this.g=this.b=a;else{const l=a<=.5?a*(1+e):a+e-a*e,c=2*a-l;this.r=_p(c,l,t+1/3),this.g=_p(c,l,t),this.b=_p(c,l,t-1/3)}return we.colorSpaceToWorking(this,r),this}setStyle(t,e=zi){function a(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let l;const c=r[1],f=r[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,e);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,e);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const l=r[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,e);if(c===6)return this.setHex(parseInt(l,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=zi){const a=hS[t.toLowerCase()];return a!==void 0?this.setHex(a,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ka(t.r),this.g=ka(t.g),this.b=ka(t.b),this}copyLinearToSRGB(t){return this.r=Do(t.r),this.g=Do(t.g),this.b=Do(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=zi){return we.workingToColorSpace(kn.copy(this),t),Math.round(Se(kn.r*255,0,255))*65536+Math.round(Se(kn.g*255,0,255))*256+Math.round(Se(kn.b*255,0,255))}getHexString(t=zi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=we.workingColorSpace){we.workingToColorSpace(kn.copy(this),e);const a=kn.r,r=kn.g,l=kn.b,c=Math.max(a,r,l),f=Math.min(a,r,l);let d,p;const m=(f+c)/2;if(f===c)d=0,p=0;else{const g=c-f;switch(p=m<=.5?g/(c+f):g/(2-c-f),c){case a:d=(r-l)/g+(r<l?6:0);break;case r:d=(l-a)/g+2;break;case l:d=(a-r)/g+4;break}d/=6}return t.h=d,t.s=p,t.l=m,t}getRGB(t,e=we.workingColorSpace){return we.workingToColorSpace(kn.copy(this),e),t.r=kn.r,t.g=kn.g,t.b=kn.b,t}getStyle(t=zi){we.workingToColorSpace(kn.copy(this),t);const e=kn.r,a=kn.g,r=kn.b;return t!==zi?`color(${t} ${e.toFixed(3)} ${a.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(a*255)},${Math.round(r*255)})`}offsetHSL(t,e,a){return this.getHSL(br),this.setHSL(br.h+t,br.s+e,br.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,a){return this.r=t.r+(e.r-t.r)*a,this.g=t.g+(e.g-t.g)*a,this.b=t.b+(e.b-t.b)*a,this}lerpHSL(t,e){this.getHSL(br),t.getHSL(Wc);const a=Jd(br.h,Wc.h,e),r=Jd(br.s,Wc.s,e),l=Jd(br.l,Wc.l,e);return this.setHSL(a,r,l),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,a=this.g,r=this.b,l=t.elements;return this.r=l[0]*e+l[3]*a+l[6]*r,this.g=l[1]*e+l[4]*a+l[7]*r,this.b=l[2]*e+l[5]*a+l[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kn=new De;De.NAMES=hS;let gA=0;class Eu extends qo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gA++}),this.uuid=yu(),this.name="",this.type="Material",this.blending=wo,this.side=Pr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gp,this.blendDst=Vp,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=Oo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=uo,this.stencilZFail=uo,this.stencilZPass=uo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const a=t[e];if(a===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(a):r&&r.isVector3&&a&&a.isVector3?r.copy(a):this[e]=a}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==wo&&(a.blending=this.blending),this.side!==Pr&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Gp&&(a.blendSrc=this.blendSrc),this.blendDst!==Vp&&(a.blendDst=this.blendDst),this.blendEquation!==gs&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Oo&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gx&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==uo&&(a.stencilFail=this.stencilFail),this.stencilZFail!==uo&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==uo&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function r(l){const c=[];for(const f in l){const d=l[f];delete d.metadata,c.push(d)}return c}if(e){const l=r(t.textures),c=r(t.images);l.length>0&&(a.textures=l),c.length>0&&(a.images=c)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let a=null;if(e!==null){const r=e.length;a=new Array(r);for(let l=0;l!==r;++l)a[l]=e[l].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ef extends Eu{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ca,this.combine=Ky,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pn=new $,qc=new Te;let vA=0;class la{constructor(t,e,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vA++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=a,this.usage=vx,this.updateRanges=[],this.gpuType=Ha,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,a){t*=this.itemSize,a*=e.itemSize;for(let r=0,l=this.itemSize;r<l;r++)this.array[t+r]=e.array[a+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,a=this.count;e<a;e++)qc.fromBufferAttribute(this,e),qc.applyMatrix3(t),this.setXY(e,qc.x,qc.y);else if(this.itemSize===3)for(let e=0,a=this.count;e<a;e++)pn.fromBufferAttribute(this,e),pn.applyMatrix3(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}applyMatrix4(t){for(let e=0,a=this.count;e<a;e++)pn.fromBufferAttribute(this,e),pn.applyMatrix4(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}applyNormalMatrix(t){for(let e=0,a=this.count;e<a;e++)pn.fromBufferAttribute(this,e),pn.applyNormalMatrix(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}transformDirection(t){for(let e=0,a=this.count;e<a;e++)pn.fromBufferAttribute(this,e),pn.transformDirection(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let a=this.array[t*this.itemSize+e];return this.normalized&&(a=kl(a,this.array)),a}setComponent(t,e,a){return this.normalized&&(a=ti(a,this.array)),this.array[t*this.itemSize+e]=a,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=kl(e,this.array)),e}setX(t,e){return this.normalized&&(e=ti(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=kl(e,this.array)),e}setY(t,e){return this.normalized&&(e=ti(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=kl(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ti(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=kl(e,this.array)),e}setW(t,e){return this.normalized&&(e=ti(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,a){return t*=this.itemSize,this.normalized&&(e=ti(e,this.array),a=ti(a,this.array)),this.array[t+0]=e,this.array[t+1]=a,this}setXYZ(t,e,a,r){return t*=this.itemSize,this.normalized&&(e=ti(e,this.array),a=ti(a,this.array),r=ti(r,this.array)),this.array[t+0]=e,this.array[t+1]=a,this.array[t+2]=r,this}setXYZW(t,e,a,r,l){return t*=this.itemSize,this.normalized&&(e=ti(e,this.array),a=ti(a,this.array),r=ti(r,this.array),l=ti(l,this.array)),this.array[t+0]=e,this.array[t+1]=a,this.array[t+2]=r,this.array[t+3]=l,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==vx&&(t.usage=this.usage),t}}class dS extends la{constructor(t,e,a){super(new Uint16Array(t),e,a)}}class pS extends la{constructor(t,e,a){super(new Uint32Array(t),e,a)}}class Ei extends la{constructor(t,e,a){super(new Float32Array(t),e,a)}}let xA=0;const Oi=new Je,gp=new In,yo=new $,vi=new Mu,Yl=new Mu,Cn=new $;class ja extends qo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xA++}),this.uuid=yu(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(uS(t)?pS:dS)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,a=0){this.groups.push({start:t,count:e,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const l=new oe().getNormalMatrix(t);a.applyNormalMatrix(l),a.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Oi.makeRotationFromQuaternion(t),this.applyMatrix4(Oi),this}rotateX(t){return Oi.makeRotationX(t),this.applyMatrix4(Oi),this}rotateY(t){return Oi.makeRotationY(t),this.applyMatrix4(Oi),this}rotateZ(t){return Oi.makeRotationZ(t),this.applyMatrix4(Oi),this}translate(t,e,a){return Oi.makeTranslation(t,e,a),this.applyMatrix4(Oi),this}scale(t,e,a){return Oi.makeScale(t,e,a),this.applyMatrix4(Oi),this}lookAt(t){return gp.lookAt(t),gp.updateMatrix(),this.applyMatrix4(gp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yo).negate(),this.translate(yo.x,yo.y,yo.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const a=[];for(let r=0,l=t.length;r<l;r++){const c=t[r];a.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Ei(a,3))}else{const a=Math.min(t.length,e.count);for(let r=0;r<a;r++){const l=t[r];e.setXYZ(r,l.x,l.y,l.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mu);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let a=0,r=e.length;a<r;a++){const l=e[a];vi.setFromBufferAttribute(l),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,vi.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,vi.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(vi.min),this.boundingBox.expandByPoint(vi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new a_);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){const a=this.boundingSphere.center;if(vi.setFromBufferAttribute(t),e)for(let l=0,c=e.length;l<c;l++){const f=e[l];Yl.setFromBufferAttribute(f),this.morphTargetsRelative?(Cn.addVectors(vi.min,Yl.min),vi.expandByPoint(Cn),Cn.addVectors(vi.max,Yl.max),vi.expandByPoint(Cn)):(vi.expandByPoint(Yl.min),vi.expandByPoint(Yl.max))}vi.getCenter(a);let r=0;for(let l=0,c=t.count;l<c;l++)Cn.fromBufferAttribute(t,l),r=Math.max(r,a.distanceToSquared(Cn));if(e)for(let l=0,c=e.length;l<c;l++){const f=e[l],d=this.morphTargetsRelative;for(let p=0,m=f.count;p<m;p++)Cn.fromBufferAttribute(f,p),d&&(yo.fromBufferAttribute(t,p),Cn.add(yo)),r=Math.max(r,a.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=e.position,r=e.normal,l=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new la(new Float32Array(4*a.count),4));const c=this.getAttribute("tangent"),f=[],d=[];for(let F=0;F<a.count;F++)f[F]=new $,d[F]=new $;const p=new $,m=new $,g=new $,v=new Te,S=new Te,E=new Te,M=new $,y=new $;function x(F,A,U){p.fromBufferAttribute(a,F),m.fromBufferAttribute(a,A),g.fromBufferAttribute(a,U),v.fromBufferAttribute(l,F),S.fromBufferAttribute(l,A),E.fromBufferAttribute(l,U),m.sub(p),g.sub(p),S.sub(v),E.sub(v);const G=1/(S.x*E.y-E.x*S.y);isFinite(G)&&(M.copy(m).multiplyScalar(E.y).addScaledVector(g,-S.y).multiplyScalar(G),y.copy(g).multiplyScalar(S.x).addScaledVector(m,-E.x).multiplyScalar(G),f[F].add(M),f[A].add(M),f[U].add(M),d[F].add(y),d[A].add(y),d[U].add(y))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let F=0,A=w.length;F<A;++F){const U=w[F],G=U.start,nt=U.count;for(let J=G,ct=G+nt;J<ct;J+=3)x(t.getX(J+0),t.getX(J+1),t.getX(J+2))}const C=new $,b=new $,N=new $,I=new $;function P(F){N.fromBufferAttribute(r,F),I.copy(N);const A=f[F];C.copy(A),C.sub(N.multiplyScalar(N.dot(A))).normalize(),b.crossVectors(I,A);const G=b.dot(d[F])<0?-1:1;c.setXYZW(F,C.x,C.y,C.z,G)}for(let F=0,A=w.length;F<A;++F){const U=w[F],G=U.start,nt=U.count;for(let J=G,ct=G+nt;J<ct;J+=3)P(t.getX(J+0)),P(t.getX(J+1)),P(t.getX(J+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new la(new Float32Array(e.count*3),3),this.setAttribute("normal",a);else for(let v=0,S=a.count;v<S;v++)a.setXYZ(v,0,0,0);const r=new $,l=new $,c=new $,f=new $,d=new $,p=new $,m=new $,g=new $;if(t)for(let v=0,S=t.count;v<S;v+=3){const E=t.getX(v+0),M=t.getX(v+1),y=t.getX(v+2);r.fromBufferAttribute(e,E),l.fromBufferAttribute(e,M),c.fromBufferAttribute(e,y),m.subVectors(c,l),g.subVectors(r,l),m.cross(g),f.fromBufferAttribute(a,E),d.fromBufferAttribute(a,M),p.fromBufferAttribute(a,y),f.add(m),d.add(m),p.add(m),a.setXYZ(E,f.x,f.y,f.z),a.setXYZ(M,d.x,d.y,d.z),a.setXYZ(y,p.x,p.y,p.z)}else for(let v=0,S=e.count;v<S;v+=3)r.fromBufferAttribute(e,v+0),l.fromBufferAttribute(e,v+1),c.fromBufferAttribute(e,v+2),m.subVectors(c,l),g.subVectors(r,l),m.cross(g),a.setXYZ(v+0,m.x,m.y,m.z),a.setXYZ(v+1,m.x,m.y,m.z),a.setXYZ(v+2,m.x,m.y,m.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,a=t.count;e<a;e++)Cn.fromBufferAttribute(t,e),Cn.normalize(),t.setXYZ(e,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function t(f,d){const p=f.array,m=f.itemSize,g=f.normalized,v=new p.constructor(d.length*m);let S=0,E=0;for(let M=0,y=d.length;M<y;M++){f.isInterleavedBufferAttribute?S=d[M]*f.data.stride+f.offset:S=d[M]*m;for(let x=0;x<m;x++)v[E++]=p[S++]}return new la(v,m,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ja,a=this.index.array,r=this.attributes;for(const f in r){const d=r[f],p=t(d,a);e.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const d=[],p=l[f];for(let m=0,g=p.length;m<g;m++){const v=p[m],S=t(v,a);d.push(S)}e.morphAttributes[f]=d}e.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,d=c.length;f<d;f++){const p=c[f];e.addGroup(p.start,p.count,p.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(t[p]=d[p]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const a=this.attributes;for(const d in a){const p=a[d];t.data.attributes[d]=p.toJSON(t.data)}const r={};let l=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],m=[];for(let g=0,v=p.length;g<v;g++){const S=p[g];m.push(S.toJSON(t.data))}m.length>0&&(r[d]=m,l=!0)}l&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere=f.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const r=t.attributes;for(const p in r){const m=r[p];this.setAttribute(p,m.clone(e))}const l=t.morphAttributes;for(const p in l){const m=[],g=l[p];for(let v=0,S=g.length;v<S;v++)m.push(g[v].clone(e));this.morphAttributes[p]=m}this.morphTargetsRelative=t.morphTargetsRelative;const c=t.groups;for(let p=0,m=c.length;p<m;p++){const g=c[p];this.addGroup(g.start,g.count,g.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=t.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lx=new Je,os=new fS,Yc=new a_,Nx=new $,jc=new $,Zc=new $,Kc=new $,vp=new $,Qc=new $,Ox=new $,Jc=new $;class ei extends In{constructor(t=new ja,e=new Ef){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,a=Object.keys(e);if(a.length>0){const r=e[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=r.length;l<c;l++){const f=r[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(t,e){const a=this.geometry,r=a.attributes.position,l=a.morphAttributes.position,c=a.morphTargetsRelative;e.fromBufferAttribute(r,t);const f=this.morphTargetInfluences;if(l&&f){Qc.set(0,0,0);for(let d=0,p=l.length;d<p;d++){const m=f[d],g=l[d];m!==0&&(vp.fromBufferAttribute(g,t),c?Qc.addScaledVector(vp,m):Qc.addScaledVector(vp.sub(e),m))}e.add(Qc)}return e}raycast(t,e){const a=this.geometry,r=this.material,l=this.matrixWorld;r!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Yc.copy(a.boundingSphere),Yc.applyMatrix4(l),os.copy(t.ray).recast(t.near),!(Yc.containsPoint(os.origin)===!1&&(os.intersectSphere(Yc,Nx)===null||os.origin.distanceToSquared(Nx)>(t.far-t.near)**2))&&(Lx.copy(l).invert(),os.copy(t.ray).applyMatrix4(Lx),!(a.boundingBox!==null&&os.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,e,os)))}_computeIntersections(t,e,a){let r;const l=this.geometry,c=this.material,f=l.index,d=l.attributes.position,p=l.attributes.uv,m=l.attributes.uv1,g=l.attributes.normal,v=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(c))for(let E=0,M=v.length;E<M;E++){const y=v[E],x=c[y.materialIndex],w=Math.max(y.start,S.start),C=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let b=w,N=C;b<N;b+=3){const I=f.getX(b),P=f.getX(b+1),F=f.getX(b+2);r=$c(this,x,t,a,p,m,g,I,P,F),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=y.materialIndex,e.push(r))}}else{const E=Math.max(0,S.start),M=Math.min(f.count,S.start+S.count);for(let y=E,x=M;y<x;y+=3){const w=f.getX(y),C=f.getX(y+1),b=f.getX(y+2);r=$c(this,c,t,a,p,m,g,w,C,b),r&&(r.faceIndex=Math.floor(y/3),e.push(r))}}else if(d!==void 0)if(Array.isArray(c))for(let E=0,M=v.length;E<M;E++){const y=v[E],x=c[y.materialIndex],w=Math.max(y.start,S.start),C=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let b=w,N=C;b<N;b+=3){const I=b,P=b+1,F=b+2;r=$c(this,x,t,a,p,m,g,I,P,F),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=y.materialIndex,e.push(r))}}else{const E=Math.max(0,S.start),M=Math.min(d.count,S.start+S.count);for(let y=E,x=M;y<x;y+=3){const w=y,C=y+1,b=y+2;r=$c(this,c,t,a,p,m,g,w,C,b),r&&(r.faceIndex=Math.floor(y/3),e.push(r))}}}}function yA(s,t,e,a,r,l,c,f){let d;if(t.side===ni?d=a.intersectTriangle(c,l,r,!0,f):d=a.intersectTriangle(r,l,c,t.side===Pr,f),d===null)return null;Jc.copy(f),Jc.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(Jc);return p<e.near||p>e.far?null:{distance:p,point:Jc.clone(),object:s}}function $c(s,t,e,a,r,l,c,f,d,p){s.getVertexPosition(f,jc),s.getVertexPosition(d,Zc),s.getVertexPosition(p,Kc);const m=yA(s,t,e,a,jc,Zc,Kc,Ox);if(m){const g=new $;Yi.getBarycoord(Ox,jc,Zc,Kc,g),r&&(m.uv=Yi.getInterpolatedAttribute(r,f,d,p,g,new Te)),l&&(m.uv1=Yi.getInterpolatedAttribute(l,f,d,p,g,new Te)),c&&(m.normal=Yi.getInterpolatedAttribute(c,f,d,p,g,new $),m.normal.dot(a.direction)>0&&m.normal.multiplyScalar(-1));const v={a:f,b:d,c:p,normal:new $,materialIndex:0};Yi.getNormal(jc,Zc,Kc,v.normal),m.face=v,m.barycoord=g}return m}class Tu extends ja{constructor(t=1,e=1,a=1,r=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:a,widthSegments:r,heightSegments:l,depthSegments:c};const f=this;r=Math.floor(r),l=Math.floor(l),c=Math.floor(c);const d=[],p=[],m=[],g=[];let v=0,S=0;E("z","y","x",-1,-1,a,e,t,c,l,0),E("z","y","x",1,-1,a,e,-t,c,l,1),E("x","z","y",1,1,t,a,e,r,c,2),E("x","z","y",1,-1,t,a,-e,r,c,3),E("x","y","z",1,-1,t,e,a,r,l,4),E("x","y","z",-1,-1,t,e,-a,r,l,5),this.setIndex(d),this.setAttribute("position",new Ei(p,3)),this.setAttribute("normal",new Ei(m,3)),this.setAttribute("uv",new Ei(g,2));function E(M,y,x,w,C,b,N,I,P,F,A){const U=b/P,G=N/F,nt=b/2,J=N/2,ct=I/2,lt=P+1,z=F+1;let k=0,W=0;const mt=new $;for(let O=0;O<z;O++){const Z=O*G-J;for(let gt=0;gt<lt;gt++){const St=gt*U-nt;mt[M]=St*w,mt[y]=Z*C,mt[x]=ct,p.push(mt.x,mt.y,mt.z),mt[M]=0,mt[y]=0,mt[x]=I>0?1:-1,m.push(mt.x,mt.y,mt.z),g.push(gt/P),g.push(1-O/F),k+=1}}for(let O=0;O<F;O++)for(let Z=0;Z<P;Z++){const gt=v+Z+lt*O,St=v+Z+lt*(O+1),Y=v+(Z+1)+lt*(O+1),ut=v+(Z+1)+lt*O;d.push(gt,St,ut),d.push(St,Y,ut),W+=6}f.addGroup(S,W,A),S+=W,v+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tu(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Bo(s){const t={};for(const e in s){t[e]={};for(const a in s[e]){const r=s[e][a];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][a]=null):t[e][a]=r.clone():Array.isArray(r)?t[e][a]=r.slice():t[e][a]=r}}return t}function Yn(s){const t={};for(let e=0;e<s.length;e++){const a=Bo(s[e]);for(const r in a)t[r]=a[r]}return t}function SA(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function mS(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:we.workingColorSpace}const MA={clone:Bo,merge:Yn};var EA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,TA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zr extends Eu{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=EA,this.fragmentShader=TA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Bo(t.uniforms),this.uniformsGroups=SA(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const c=this.uniforms[r].value;c&&c.isTexture?e.uniforms[r]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?e.uniforms[r]={type:"c",value:c.getHex()}:c&&c.isVector2?e.uniforms[r]={type:"v2",value:c.toArray()}:c&&c.isVector3?e.uniforms[r]={type:"v3",value:c.toArray()}:c&&c.isVector4?e.uniforms[r]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?e.uniforms[r]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?e.uniforms[r]={type:"m4",value:c.toArray()}:e.uniforms[r]={value:c}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const a={};for(const r in this.extensions)this.extensions[r]===!0&&(a[r]=!0);return Object.keys(a).length>0&&(e.extensions=a),e}}class _S extends In{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=Ga}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ar=new $,Px=new Te,zx=new Te;class yi extends _S{constructor(t=50,e=1,a=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Am*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Qd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Am*2*Math.atan(Math.tan(Qd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,a){Ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ar.x,Ar.y).multiplyScalar(-t/Ar.z),Ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Ar.x,Ar.y).multiplyScalar(-t/Ar.z)}getViewSize(t,e){return this.getViewBounds(t,Px,zx),e.subVectors(zx,Px)}setViewOffset(t,e,a,r,l,c){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=a,this.view.offsetY=r,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Qd*.5*this.fov)/this.zoom,a=2*e,r=this.aspect*a,l=-.5*r;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,p=c.fullHeight;l+=c.offsetX*r/d,e-=c.offsetY*a/p,r*=c.width/d,a*=c.height/p}const f=this.filmOffset;f!==0&&(l+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+r,e,e-a,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const So=-90,Mo=1;class bA extends In{constructor(t,e,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new yi(So,Mo,t,e);r.layers=this.layers,this.add(r);const l=new yi(So,Mo,t,e);l.layers=this.layers,this.add(l);const c=new yi(So,Mo,t,e);c.layers=this.layers,this.add(c);const f=new yi(So,Mo,t,e);f.layers=this.layers,this.add(f);const d=new yi(So,Mo,t,e);d.layers=this.layers,this.add(d);const p=new yi(So,Mo,t,e);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[a,r,l,c,f,d]=e;for(const p of e)this.remove(p);if(t===Ga)a.up.set(0,1,0),a.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(t===Sf)a.up.set(0,-1,0),a.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of e)this.add(p),p.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,d,p,m]=this.children,g=t.getRenderTarget(),v=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const M=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,r),t.render(e,l),t.setRenderTarget(a,1,r),t.render(e,c),t.setRenderTarget(a,2,r),t.render(e,f),t.setRenderTarget(a,3,r),t.render(e,d),t.setRenderTarget(a,4,r),t.render(e,p),a.texture.generateMipmaps=M,t.setRenderTarget(a,5,r),t.render(e,m),t.setRenderTarget(g,v,S),t.xr.enabled=E,a.texture.needsPMREMUpdate=!0}}class gS extends ii{constructor(t=[],e=Po,a,r,l,c,f,d,p,m){super(t,e,a,r,l,c,f,d,p,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class AA extends Rs{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},r=[a,a,a,a,a,a];this.texture=new gS(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Tu(5,5,5),l=new zr({name:"CubemapFromEquirect",uniforms:Bo(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:ni,blending:Ur});l.uniforms.tEquirect.value=e;const c=new ei(r,l),f=e.minFilter;return e.minFilter===ys&&(e.minFilter=sa),new bA(1,10,this).update(t,c),e.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(t,e=!0,a=!0,r=!0){const l=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(e,a,r);t.setRenderTarget(l)}}class tf extends In{constructor(){super(),this.isGroup=!0,this.type="Group"}}const RA={type:"move"};class xp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tf,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tf,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tf,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const a of t.hand.values())this._getHandJoint(e,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,a){let r=null,l=null,c=null;const f=this._targetRay,d=this._grip,p=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(p&&t.hand){c=!0;for(const M of t.hand.values()){const y=e.getJointPose(M,a),x=this._getHandJoint(p,M);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const m=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],v=m.position.distanceTo(g.position),S=.02,E=.005;p.inputState.pinching&&v>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&v<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else d!==null&&t.gripSpace&&(l=e.getPose(t.gripSpace,a),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));f!==null&&(r=e.getPose(t.targetRaySpace,a),r===null&&l!==null&&(r=l),r!==null&&(f.matrix.fromArray(r.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,r.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(r.linearVelocity)):f.hasLinearVelocity=!1,r.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(r.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(RA)))}return f!==null&&(f.visible=r!==null),d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const a=new tf;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[e.jointName]=a,t.add(a)}return t.joints[e.jointName]}}class wA extends In{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ca,this.environmentIntensity=1,this.environmentRotation=new ca,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const yp=new $,CA=new $,DA=new oe;class ps{constructor(t=new $(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,a,r){return this.normal.set(t,e,a),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,a){const r=yp.subVectors(a,e).cross(CA.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const a=t.delta(yp),r=this.normal.dot(a);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const l=-(t.start.dot(this.normal)+this.constant)/r;return l<0||l>1?null:e.copy(t.start).addScaledVector(a,l)}intersectsLine(t){const e=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return e<0&&a>0||a<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const a=e||DA.getNormalMatrix(t),r=this.coplanarPoint(yp).applyMatrix4(t),l=this.normal.applyMatrix3(a).normalize();return this.constant=-r.dot(l),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ls=new a_,UA=new Te(.5,.5),ef=new $;class s_{constructor(t=new ps,e=new ps,a=new ps,r=new ps,l=new ps,c=new ps){this.planes=[t,e,a,r,l,c]}set(t,e,a,r,l,c){const f=this.planes;return f[0].copy(t),f[1].copy(e),f[2].copy(a),f[3].copy(r),f[4].copy(l),f[5].copy(c),this}copy(t){const e=this.planes;for(let a=0;a<6;a++)e[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,e=Ga){const a=this.planes,r=t.elements,l=r[0],c=r[1],f=r[2],d=r[3],p=r[4],m=r[5],g=r[6],v=r[7],S=r[8],E=r[9],M=r[10],y=r[11],x=r[12],w=r[13],C=r[14],b=r[15];if(a[0].setComponents(d-l,v-p,y-S,b-x).normalize(),a[1].setComponents(d+l,v+p,y+S,b+x).normalize(),a[2].setComponents(d+c,v+m,y+E,b+w).normalize(),a[3].setComponents(d-c,v-m,y-E,b-w).normalize(),a[4].setComponents(d-f,v-g,y-M,b-C).normalize(),e===Ga)a[5].setComponents(d+f,v+g,y+M,b+C).normalize();else if(e===Sf)a[5].setComponents(f,g,M,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ls.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ls.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(t){ls.center.set(0,0,0);const e=UA.distanceTo(t.center);return ls.radius=.7071067811865476+e,ls.applyMatrix4(t.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(t){const e=this.planes,a=t.center,r=-t.radius;for(let l=0;l<6;l++)if(e[l].distanceToPoint(a)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let a=0;a<6;a++){const r=e[a];if(ef.x=r.normal.x>0?t.max.x:t.min.x,ef.y=r.normal.y>0?t.max.y:t.min.y,ef.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(ef)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let a=0;a<6;a++)if(e[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class vS extends ii{constructor(t,e,a=As,r,l,c,f=Zi,d=Zi,p,m=ou,g=1){if(m!==ou&&m!==lu)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:e,depth:g};super(v,r,l,c,f,d,m,a,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new i_(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Pf extends ja{constructor(t=1,e=1,a=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:a,heightSegments:r};const l=t/2,c=e/2,f=Math.floor(a),d=Math.floor(r),p=f+1,m=d+1,g=t/f,v=e/d,S=[],E=[],M=[],y=[];for(let x=0;x<m;x++){const w=x*v-c;for(let C=0;C<p;C++){const b=C*g-l;E.push(b,-w,0),M.push(0,0,1),y.push(C/f),y.push(1-x/d)}}for(let x=0;x<d;x++)for(let w=0;w<f;w++){const C=w+p*x,b=w+p*(x+1),N=w+1+p*(x+1),I=w+1+p*x;S.push(C,b,I),S.push(b,N,I)}this.setIndex(S),this.setAttribute("position",new Ei(E,3)),this.setAttribute("normal",new Ei(M,3)),this.setAttribute("uv",new Ei(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pf(t.width,t.height,t.widthSegments,t.heightSegments)}}class Tf extends ja{constructor(t=.5,e=1,a=32,r=1,l=0,c=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:a,phiSegments:r,thetaStart:l,thetaLength:c},a=Math.max(3,a),r=Math.max(1,r);const f=[],d=[],p=[],m=[];let g=t;const v=(e-t)/r,S=new $,E=new Te;for(let M=0;M<=r;M++){for(let y=0;y<=a;y++){const x=l+y/a*c;S.x=g*Math.cos(x),S.y=g*Math.sin(x),d.push(S.x,S.y,S.z),p.push(0,0,1),E.x=(S.x/e+1)/2,E.y=(S.y/e+1)/2,m.push(E.x,E.y)}g+=v}for(let M=0;M<r;M++){const y=M*(a+1);for(let x=0;x<a;x++){const w=x+y,C=w,b=w+a+1,N=w+a+2,I=w+1;f.push(C,b,I),f.push(b,N,I)}}this.setIndex(f),this.setAttribute("position",new Ei(d,3)),this.setAttribute("normal",new Ei(p,3)),this.setAttribute("uv",new Ei(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tf(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class tu extends ja{constructor(t=1,e=32,a=16,r=0,l=Math.PI*2,c=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:a,phiStart:r,phiLength:l,thetaStart:c,thetaLength:f},e=Math.max(3,Math.floor(e)),a=Math.max(2,Math.floor(a));const d=Math.min(c+f,Math.PI);let p=0;const m=[],g=new $,v=new $,S=[],E=[],M=[],y=[];for(let x=0;x<=a;x++){const w=[],C=x/a;let b=0;x===0&&c===0?b=.5/e:x===a&&d===Math.PI&&(b=-.5/e);for(let N=0;N<=e;N++){const I=N/e;g.x=-t*Math.cos(r+I*l)*Math.sin(c+C*f),g.y=t*Math.cos(c+C*f),g.z=t*Math.sin(r+I*l)*Math.sin(c+C*f),E.push(g.x,g.y,g.z),v.copy(g).normalize(),M.push(v.x,v.y,v.z),y.push(I+b,1-C),w.push(p++)}m.push(w)}for(let x=0;x<a;x++)for(let w=0;w<e;w++){const C=m[x][w+1],b=m[x][w],N=m[x+1][w],I=m[x+1][w+1];(x!==0||c>0)&&S.push(C,b,I),(x!==a-1||d<Math.PI)&&S.push(b,N,I)}this.setIndex(S),this.setAttribute("position",new Ei(E,3)),this.setAttribute("normal",new Ei(M,3)),this.setAttribute("uv",new Ei(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tu(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Sp extends Eu{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oS,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ca,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class LA extends Eu{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=k1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class NA extends Eu{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class xS extends In{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new De(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Mp=new Je,Ix=new $,Bx=new $;class OA{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.mapType=ua,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new s_,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new Ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,a=this.matrix;Ix.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ix),Bx.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Bx),e.updateMatrixWorld(),Mp.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mp),a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(Mp)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Fx=new Je,jl=new $,Ep=new $;class PA extends OA{constructor(){super(new yi(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Te(4,2),this._viewportCount=6,this._viewports=[new Ge(2,1,1,1),new Ge(0,1,1,1),new Ge(3,1,1,1),new Ge(1,1,1,1),new Ge(3,0,1,1),new Ge(1,0,1,1)],this._cubeDirections=[new $(1,0,0),new $(-1,0,0),new $(0,0,1),new $(0,0,-1),new $(0,1,0),new $(0,-1,0)],this._cubeUps=[new $(0,1,0),new $(0,1,0),new $(0,1,0),new $(0,1,0),new $(0,0,1),new $(0,0,-1)]}updateMatrices(t,e=0){const a=this.camera,r=this.matrix,l=t.distance||a.far;l!==a.far&&(a.far=l,a.updateProjectionMatrix()),jl.setFromMatrixPosition(t.matrixWorld),a.position.copy(jl),Ep.copy(a.position),Ep.add(this._cubeDirections[e]),a.up.copy(this._cubeUps[e]),a.lookAt(Ep),a.updateMatrixWorld(),r.makeTranslation(-jl.x,-jl.y,-jl.z),Fx.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fx)}}class zA extends xS{constructor(t,e,a=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=r,this.shadow=new PA}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class IA extends _S{constructor(t=-1,e=1,a=1,r=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=a,this.bottom=r,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,a,r,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=a,this.view.offsetY=r,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let l=a-t,c=a+t,f=r+e,d=r-e;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,c=l+p*this.view.width,f-=m*this.view.offsetY,d=f-m*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class BA extends xS{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class FA extends yi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Hx=new Je;class HA{constructor(t,e,a=0,r=1/0){this.ray=new fS(t,e),this.near=a,this.far=r,this.camera=null,this.layers=new r_,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Hx.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hx),this}intersectObject(t,e=!0,a=[]){return Rm(t,this,a,e),a.sort(Gx),a}intersectObjects(t,e=!0,a=[]){for(let r=0,l=t.length;r<l;r++)Rm(t[r],this,a,e);return a.sort(Gx),a}}function Gx(s,t){return s.distance-t.distance}function Rm(s,t,e,a){let r=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(r=!1),r===!0&&a===!0){const l=s.children;for(let c=0,f=l.length;c<f;c++)Rm(l[c],t,e,!0)}}function Vx(s,t,e,a){const r=GA(a);switch(e){case nS:return s*t;case aS:return s*t/r.components*r.byteLength;case t_:return s*t/r.components*r.byteLength;case rS:return s*t*2/r.components*r.byteLength;case e_:return s*t*2/r.components*r.byteLength;case iS:return s*t*3/r.components*r.byteLength;case ji:return s*t*4/r.components*r.byteLength;case n_:return s*t*4/r.components*r.byteLength;case uf:case cf:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ff:case hf:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case em:case im:return Math.max(s,16)*Math.max(t,8)/4;case tm:case nm:return Math.max(s,8)*Math.max(t,8)/2;case am:case rm:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case sm:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case om:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case lm:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case um:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case cm:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case fm:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case hm:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case dm:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case pm:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case mm:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case _m:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case gm:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case vm:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case xm:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case ym:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case df:case Sm:case Mm:return Math.ceil(s/4)*Math.ceil(t/4)*16;case sS:case Em:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Tm:case bm:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function GA(s){switch(s){case ua:case $y:return{byteLength:1,components:1};case ru:case tS:case xu:return{byteLength:2,components:1};case Jm:case $m:return{byteLength:2,components:4};case As:case Qm:case Ha:return{byteLength:4,components:1};case eS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Km}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Km);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function yS(){let s=null,t=!1,e=null,a=null;function r(l,c){e(l,c),a=s.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(a=s.requestAnimationFrame(r),t=!0)},stop:function(){s.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(l){e=l},setContext:function(l){s=l}}}function VA(s){const t=new WeakMap;function e(f,d){const p=f.array,m=f.usage,g=p.byteLength,v=s.createBuffer();s.bindBuffer(d,v),s.bufferData(d,p,m),f.onUploadCallback();let S;if(p instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=s.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=s.SHORT;else if(p instanceof Uint32Array)S=s.UNSIGNED_INT;else if(p instanceof Int32Array)S=s.INT;else if(p instanceof Int8Array)S=s.BYTE;else if(p instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:g}}function a(f,d,p){const m=d.array,g=d.updateRanges;if(s.bindBuffer(p,f),g.length===0)s.bufferSubData(p,0,m);else{g.sort((S,E)=>S.start-E.start);let v=0;for(let S=1;S<g.length;S++){const E=g[v],M=g[S];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++v,g[v]=M)}g.length=v+1;for(let S=0,E=g.length;S<E;S++){const M=g[S];s.bufferSubData(p,M.start*m.BYTES_PER_ELEMENT,m,M.start,M.count)}d.clearUpdateRanges()}d.onUploadCallback()}function r(f){return f.isInterleavedBufferAttribute&&(f=f.data),t.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=t.get(f);d&&(s.deleteBuffer(d.buffer),t.delete(f))}function c(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const m=t.get(f);(!m||m.version<f.version)&&t.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=t.get(f);if(p===void 0)t.set(f,e(f,d));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,f,d),p.version=f.version}}return{get:r,remove:l,update:c}}var kA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,XA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,WA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,YA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ZA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,KA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,QA=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,JA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$A=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eR=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,nR=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,iR=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,aR=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,rR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,oR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fR=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,hR=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,dR=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,pR=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,mR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_R=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xR="gl_FragColor = linearToOutputTexel( gl_FragColor );",yR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,SR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,MR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ER=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,TR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,AR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,RR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,CR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,DR=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,UR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,LR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,NR=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,OR=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,PR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,zR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,IR=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,BR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,FR=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,HR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,GR=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,VR=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,XR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,WR=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qR=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YR=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jR=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ZR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,KR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,QR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,JR=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$R=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ew=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,rw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ow=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,lw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,hw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_w=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,vw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ew=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,bw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Aw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Rw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ww=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Dw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Uw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Lw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ow=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Iw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Bw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Fw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Gw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ww=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Zw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Kw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Qw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Jw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$w=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tC=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eC=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,iC=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aC=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rC=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sC=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,oC=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lC=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,uC=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cC=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fC=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hC=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,dC=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pC=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mC=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_C=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,gC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vC=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xC=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,yC=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,SC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ue={alphahash_fragment:kA,alphahash_pars_fragment:XA,alphamap_fragment:WA,alphamap_pars_fragment:qA,alphatest_fragment:YA,alphatest_pars_fragment:jA,aomap_fragment:ZA,aomap_pars_fragment:KA,batching_pars_vertex:QA,batching_vertex:JA,begin_vertex:$A,beginnormal_vertex:tR,bsdfs:eR,iridescence_fragment:nR,bumpmap_pars_fragment:iR,clipping_planes_fragment:aR,clipping_planes_pars_fragment:rR,clipping_planes_pars_vertex:sR,clipping_planes_vertex:oR,color_fragment:lR,color_pars_fragment:uR,color_pars_vertex:cR,color_vertex:fR,common:hR,cube_uv_reflection_fragment:dR,defaultnormal_vertex:pR,displacementmap_pars_vertex:mR,displacementmap_vertex:_R,emissivemap_fragment:gR,emissivemap_pars_fragment:vR,colorspace_fragment:xR,colorspace_pars_fragment:yR,envmap_fragment:SR,envmap_common_pars_fragment:MR,envmap_pars_fragment:ER,envmap_pars_vertex:TR,envmap_physical_pars_fragment:PR,envmap_vertex:bR,fog_vertex:AR,fog_pars_vertex:RR,fog_fragment:wR,fog_pars_fragment:CR,gradientmap_pars_fragment:DR,lightmap_pars_fragment:UR,lights_lambert_fragment:LR,lights_lambert_pars_fragment:NR,lights_pars_begin:OR,lights_toon_fragment:zR,lights_toon_pars_fragment:IR,lights_phong_fragment:BR,lights_phong_pars_fragment:FR,lights_physical_fragment:HR,lights_physical_pars_fragment:GR,lights_fragment_begin:VR,lights_fragment_maps:kR,lights_fragment_end:XR,logdepthbuf_fragment:WR,logdepthbuf_pars_fragment:qR,logdepthbuf_pars_vertex:YR,logdepthbuf_vertex:jR,map_fragment:ZR,map_pars_fragment:KR,map_particle_fragment:QR,map_particle_pars_fragment:JR,metalnessmap_fragment:$R,metalnessmap_pars_fragment:tw,morphinstance_vertex:ew,morphcolor_vertex:nw,morphnormal_vertex:iw,morphtarget_pars_vertex:aw,morphtarget_vertex:rw,normal_fragment_begin:sw,normal_fragment_maps:ow,normal_pars_fragment:lw,normal_pars_vertex:uw,normal_vertex:cw,normalmap_pars_fragment:fw,clearcoat_normal_fragment_begin:hw,clearcoat_normal_fragment_maps:dw,clearcoat_pars_fragment:pw,iridescence_pars_fragment:mw,opaque_fragment:_w,packing:gw,premultiplied_alpha_fragment:vw,project_vertex:xw,dithering_fragment:yw,dithering_pars_fragment:Sw,roughnessmap_fragment:Mw,roughnessmap_pars_fragment:Ew,shadowmap_pars_fragment:Tw,shadowmap_pars_vertex:bw,shadowmap_vertex:Aw,shadowmask_pars_fragment:Rw,skinbase_vertex:ww,skinning_pars_vertex:Cw,skinning_vertex:Dw,skinnormal_vertex:Uw,specularmap_fragment:Lw,specularmap_pars_fragment:Nw,tonemapping_fragment:Ow,tonemapping_pars_fragment:Pw,transmission_fragment:zw,transmission_pars_fragment:Iw,uv_pars_fragment:Bw,uv_pars_vertex:Fw,uv_vertex:Hw,worldpos_vertex:Gw,background_vert:Vw,background_frag:kw,backgroundCube_vert:Xw,backgroundCube_frag:Ww,cube_vert:qw,cube_frag:Yw,depth_vert:jw,depth_frag:Zw,distanceRGBA_vert:Kw,distanceRGBA_frag:Qw,equirect_vert:Jw,equirect_frag:$w,linedashed_vert:tC,linedashed_frag:eC,meshbasic_vert:nC,meshbasic_frag:iC,meshlambert_vert:aC,meshlambert_frag:rC,meshmatcap_vert:sC,meshmatcap_frag:oC,meshnormal_vert:lC,meshnormal_frag:uC,meshphong_vert:cC,meshphong_frag:fC,meshphysical_vert:hC,meshphysical_frag:dC,meshtoon_vert:pC,meshtoon_frag:mC,points_vert:_C,points_frag:gC,shadow_vert:vC,shadow_frag:xC,sprite_vert:yC,sprite_frag:SC},Nt={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},aa={basic:{uniforms:Yn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:Yn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new De(0)}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:Yn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:Yn([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:Yn([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new De(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:Yn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:Yn([Nt.points,Nt.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:Yn([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:Yn([Nt.common,Nt.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:Yn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:Yn([Nt.sprite,Nt.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distanceRGBA:{uniforms:Yn([Nt.common,Nt.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distanceRGBA_vert,fragmentShader:ue.distanceRGBA_frag},shadow:{uniforms:Yn([Nt.lights,Nt.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};aa.physical={uniforms:Yn([aa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};const nf={r:0,b:0,g:0},us=new ca,MC=new Je;function EC(s,t,e,a,r,l,c){const f=new De(0);let d=l===!0?0:1,p,m,g=null,v=0,S=null;function E(C){let b=C.isScene===!0?C.background:null;return b&&b.isTexture&&(b=(C.backgroundBlurriness>0?e:t).get(b)),b}function M(C){let b=!1;const N=E(C);N===null?x(f,d):N&&N.isColor&&(x(N,1),b=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?a.buffers.color.setClear(0,0,0,1,c):I==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,c),(s.autoClear||b)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(C,b){const N=E(b);N&&(N.isCubeTexture||N.mapping===Of)?(m===void 0&&(m=new ei(new Tu(1,1,1),new zr({name:"BackgroundCubeMaterial",uniforms:Bo(aa.backgroundCube.uniforms),vertexShader:aa.backgroundCube.vertexShader,fragmentShader:aa.backgroundCube.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(I,P,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),us.copy(b.backgroundRotation),us.x*=-1,us.y*=-1,us.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),m.material.uniforms.envMap.value=N,m.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(MC.makeRotationFromEuler(us)),m.material.toneMapped=we.getTransfer(N.colorSpace)!==He,(g!==N||v!==N.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,g=N,v=N.version,S=s.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null)):N&&N.isTexture&&(p===void 0&&(p=new ei(new Pf(2,2),new zr({name:"BackgroundMaterial",uniforms:Bo(aa.background.uniforms),vertexShader:aa.background.vertexShader,fragmentShader:aa.background.fragmentShader,side:Pr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=N,p.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,p.material.toneMapped=we.getTransfer(N.colorSpace)!==He,N.matrixAutoUpdate===!0&&N.updateMatrix(),p.material.uniforms.uvTransform.value.copy(N.matrix),(g!==N||v!==N.version||S!==s.toneMapping)&&(p.material.needsUpdate=!0,g=N,v=N.version,S=s.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null))}function x(C,b){C.getRGB(nf,mS(s)),a.buffers.color.setClear(nf.r,nf.g,nf.b,b,c)}function w(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return f},setClearColor:function(C,b=1){f.set(C),d=b,x(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(C){d=C,x(f,d)},render:M,addToRenderList:y,dispose:w}}function TC(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),a={},r=v(null);let l=r,c=!1;function f(U,G,nt,J,ct){let lt=!1;const z=g(J,nt,G);l!==z&&(l=z,p(l.object)),lt=S(U,J,nt,ct),lt&&E(U,J,nt,ct),ct!==null&&t.update(ct,s.ELEMENT_ARRAY_BUFFER),(lt||c)&&(c=!1,b(U,G,nt,J),ct!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(ct).buffer))}function d(){return s.createVertexArray()}function p(U){return s.bindVertexArray(U)}function m(U){return s.deleteVertexArray(U)}function g(U,G,nt){const J=nt.wireframe===!0;let ct=a[U.id];ct===void 0&&(ct={},a[U.id]=ct);let lt=ct[G.id];lt===void 0&&(lt={},ct[G.id]=lt);let z=lt[J];return z===void 0&&(z=v(d()),lt[J]=z),z}function v(U){const G=[],nt=[],J=[];for(let ct=0;ct<e;ct++)G[ct]=0,nt[ct]=0,J[ct]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:nt,attributeDivisors:J,object:U,attributes:{},index:null}}function S(U,G,nt,J){const ct=l.attributes,lt=G.attributes;let z=0;const k=nt.getAttributes();for(const W in k)if(k[W].location>=0){const O=ct[W];let Z=lt[W];if(Z===void 0&&(W==="instanceMatrix"&&U.instanceMatrix&&(Z=U.instanceMatrix),W==="instanceColor"&&U.instanceColor&&(Z=U.instanceColor)),O===void 0||O.attribute!==Z||Z&&O.data!==Z.data)return!0;z++}return l.attributesNum!==z||l.index!==J}function E(U,G,nt,J){const ct={},lt=G.attributes;let z=0;const k=nt.getAttributes();for(const W in k)if(k[W].location>=0){let O=lt[W];O===void 0&&(W==="instanceMatrix"&&U.instanceMatrix&&(O=U.instanceMatrix),W==="instanceColor"&&U.instanceColor&&(O=U.instanceColor));const Z={};Z.attribute=O,O&&O.data&&(Z.data=O.data),ct[W]=Z,z++}l.attributes=ct,l.attributesNum=z,l.index=J}function M(){const U=l.newAttributes;for(let G=0,nt=U.length;G<nt;G++)U[G]=0}function y(U){x(U,0)}function x(U,G){const nt=l.newAttributes,J=l.enabledAttributes,ct=l.attributeDivisors;nt[U]=1,J[U]===0&&(s.enableVertexAttribArray(U),J[U]=1),ct[U]!==G&&(s.vertexAttribDivisor(U,G),ct[U]=G)}function w(){const U=l.newAttributes,G=l.enabledAttributes;for(let nt=0,J=G.length;nt<J;nt++)G[nt]!==U[nt]&&(s.disableVertexAttribArray(nt),G[nt]=0)}function C(U,G,nt,J,ct,lt,z){z===!0?s.vertexAttribIPointer(U,G,nt,ct,lt):s.vertexAttribPointer(U,G,nt,J,ct,lt)}function b(U,G,nt,J){M();const ct=J.attributes,lt=nt.getAttributes(),z=G.defaultAttributeValues;for(const k in lt){const W=lt[k];if(W.location>=0){let mt=ct[k];if(mt===void 0&&(k==="instanceMatrix"&&U.instanceMatrix&&(mt=U.instanceMatrix),k==="instanceColor"&&U.instanceColor&&(mt=U.instanceColor)),mt!==void 0){const O=mt.normalized,Z=mt.itemSize,gt=t.get(mt);if(gt===void 0)continue;const St=gt.buffer,Y=gt.type,ut=gt.bytesPerElement,Mt=Y===s.INT||Y===s.UNSIGNED_INT||mt.gpuType===Qm;if(mt.isInterleavedBufferAttribute){const Rt=mt.data,wt=Rt.stride,ee=mt.offset;if(Rt.isInstancedInterleavedBuffer){for(let Vt=0;Vt<W.locationSize;Vt++)x(W.location+Vt,Rt.meshPerAttribute);U.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Rt.meshPerAttribute*Rt.count)}else for(let Vt=0;Vt<W.locationSize;Vt++)y(W.location+Vt);s.bindBuffer(s.ARRAY_BUFFER,St);for(let Vt=0;Vt<W.locationSize;Vt++)C(W.location+Vt,Z/W.locationSize,Y,O,wt*ut,(ee+Z/W.locationSize*Vt)*ut,Mt)}else{if(mt.isInstancedBufferAttribute){for(let Rt=0;Rt<W.locationSize;Rt++)x(W.location+Rt,mt.meshPerAttribute);U.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let Rt=0;Rt<W.locationSize;Rt++)y(W.location+Rt);s.bindBuffer(s.ARRAY_BUFFER,St);for(let Rt=0;Rt<W.locationSize;Rt++)C(W.location+Rt,Z/W.locationSize,Y,O,Z*ut,Z/W.locationSize*Rt*ut,Mt)}}else if(z!==void 0){const O=z[k];if(O!==void 0)switch(O.length){case 2:s.vertexAttrib2fv(W.location,O);break;case 3:s.vertexAttrib3fv(W.location,O);break;case 4:s.vertexAttrib4fv(W.location,O);break;default:s.vertexAttrib1fv(W.location,O)}}}}w()}function N(){F();for(const U in a){const G=a[U];for(const nt in G){const J=G[nt];for(const ct in J)m(J[ct].object),delete J[ct];delete G[nt]}delete a[U]}}function I(U){if(a[U.id]===void 0)return;const G=a[U.id];for(const nt in G){const J=G[nt];for(const ct in J)m(J[ct].object),delete J[ct];delete G[nt]}delete a[U.id]}function P(U){for(const G in a){const nt=a[G];if(nt[U.id]===void 0)continue;const J=nt[U.id];for(const ct in J)m(J[ct].object),delete J[ct];delete nt[U.id]}}function F(){A(),c=!0,l!==r&&(l=r,p(l.object))}function A(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:f,reset:F,resetDefaultState:A,dispose:N,releaseStatesOfGeometry:I,releaseStatesOfProgram:P,initAttributes:M,enableAttribute:y,disableUnusedAttributes:w}}function bC(s,t,e){let a;function r(p){a=p}function l(p,m){s.drawArrays(a,p,m),e.update(m,a,1)}function c(p,m,g){g!==0&&(s.drawArraysInstanced(a,p,m,g),e.update(m,a,g))}function f(p,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,p,0,m,0,g);let S=0;for(let E=0;E<g;E++)S+=m[E];e.update(S,a,1)}function d(p,m,g,v){if(g===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)c(p[E],m[E],v[E]);else{S.multiDrawArraysInstancedWEBGL(a,p,0,m,0,v,0,g);let E=0;for(let M=0;M<g;M++)E+=m[M]*v[M];e.update(E,a,1)}}this.setMode=r,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function AC(s,t,e,a){let r;function l(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");r=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function c(P){return!(P!==ji&&a.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(P){const F=P===xu&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==ua&&a.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Ha&&!F)}function d(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=e.precision!==void 0?e.precision:"highp";const m=d(p);m!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",m,"instead."),p=m);const g=e.logarithmicDepthBuffer===!0,v=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),w=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),C=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),N=E>0,I=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:g,reverseDepthBuffer:v,maxTextures:S,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:w,maxVaryings:C,maxFragmentUniforms:b,vertexTextures:N,maxSamples:I}}function RC(s){const t=this;let e=null,a=0,r=!1,l=!1;const c=new ps,f=new oe,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const S=g.length!==0||v||a!==0||r;return r=v,a=g.length,S},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,v){e=m(g,v,0)},this.setState=function(g,v,S){const E=g.clippingPlanes,M=g.clipIntersection,y=g.clipShadows,x=s.get(g);if(!r||E===null||E.length===0||l&&!y)l?m(null):p();else{const w=l?0:a,C=w*4;let b=x.clippingState||null;d.value=b,b=m(E,v,C,S);for(let N=0;N!==C;++N)b[N]=e[N];x.clippingState=b,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=w}};function p(){d.value!==e&&(d.value=e,d.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function m(g,v,S,E){const M=g!==null?g.length:0;let y=null;if(M!==0){if(y=d.value,E!==!0||y===null){const x=S+M*4,w=v.matrixWorldInverse;f.getNormalMatrix(w),(y===null||y.length<x)&&(y=new Float32Array(x));for(let C=0,b=S;C!==M;++C,b+=4)c.copy(g[C]).applyMatrix4(w,f),c.normal.toArray(y,b),y[b+3]=c.constant}d.value=y,d.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,y}}function wC(s){let t=new WeakMap;function e(c,f){return f===Kp?c.mapping=Po:f===Qp&&(c.mapping=zo),c}function a(c){if(c&&c.isTexture){const f=c.mapping;if(f===Kp||f===Qp)if(t.has(c)){const d=t.get(c).texture;return e(d,c.mapping)}else{const d=c.image;if(d&&d.height>0){const p=new AA(d.height);return p.fromEquirectangularTexture(s,c),t.set(c,p),c.addEventListener("dispose",r),e(p.texture,c.mapping)}else return null}}return c}function r(c){const f=c.target;f.removeEventListener("dispose",r);const d=t.get(f);d!==void 0&&(t.delete(f),d.dispose())}function l(){t=new WeakMap}return{get:a,dispose:l}}const bo=4,kx=[.125,.215,.35,.446,.526,.582],vs=20,Tp=new IA,Xx=new De;let bp=null,Ap=0,Rp=0,wp=!1;const ms=(1+Math.sqrt(5))/2,Eo=1/ms,Wx=[new $(-ms,Eo,0),new $(ms,Eo,0),new $(-Eo,0,ms),new $(Eo,0,ms),new $(0,ms,-Eo),new $(0,ms,Eo),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)],CC=new $;class qx{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,a=.1,r=100,l={}){const{size:c=256,position:f=CC}=l;bp=this._renderer.getRenderTarget(),Ap=this._renderer.getActiveCubeFace(),Rp=this._renderer.getActiveMipmapLevel(),wp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(t,a,r,d,f),e>0&&this._blur(d,0,0,e),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(bp,Ap,Rp),this._renderer.xr.enabled=wp,t.scissorTest=!1,af(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Po||t.mapping===zo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),bp=this._renderer.getRenderTarget(),Ap=this._renderer.getActiveCubeFace(),Rp=this._renderer.getActiveMipmapLevel(),wp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=e||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,a={magFilter:sa,minFilter:sa,generateMipmaps:!1,type:xu,format:ji,colorSpace:Io,depthBuffer:!1},r=Yx(t,e,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yx(t,e,a);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=DC(l)),this._blurMaterial=UC(l,t,e)}return r}_compileMaterial(t){const e=new ei(this._lodPlanes[0],t);this._renderer.compile(e,Tp)}_sceneToCubeUV(t,e,a,r,l){const d=new yi(90,1,e,a),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,S=g.toneMapping;g.getClearColor(Xx),g.toneMapping=Lr,g.autoClear=!1;const E=new Ef({name:"PMREM.Background",side:ni,depthWrite:!1,depthTest:!1}),M=new ei(new Tu,E);let y=!1;const x=t.background;x?x.isColor&&(E.color.copy(x),t.background=null,y=!0):(E.color.copy(Xx),y=!0);for(let w=0;w<6;w++){const C=w%3;C===0?(d.up.set(0,p[w],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x+m[w],l.y,l.z)):C===1?(d.up.set(0,0,p[w]),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y+m[w],l.z)):(d.up.set(0,p[w],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y,l.z+m[w]));const b=this._cubeSize;af(r,C*b,w>2?b:0,b,b),g.setRenderTarget(r),y&&g.render(M,d),g.render(t,d)}M.geometry.dispose(),M.material.dispose(),g.toneMapping=S,g.autoClear=v,t.background=x}_textureToCubeUV(t,e){const a=this._renderer,r=t.mapping===Po||t.mapping===zo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jx());const l=r?this._cubemapMaterial:this._equirectMaterial,c=new ei(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=t;const d=this._cubeSize;af(e,0,0,3*d,2*d),a.setRenderTarget(e),a.render(c,Tp)}_applyPMREM(t){const e=this._renderer,a=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let l=1;l<r;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=Wx[(r-l-1)%Wx.length];this._blur(t,l-1,l,c,f)}e.autoClear=a}_blur(t,e,a,r,l){const c=this._pingPongRenderTarget;this._halfBlur(t,c,e,a,r,"latitudinal",l),this._halfBlur(c,t,a,a,r,"longitudinal",l)}_halfBlur(t,e,a,r,l,c,f){const d=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,g=new ei(this._lodPlanes[r],p),v=p.uniforms,S=this._sizeLods[a]-1,E=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*vs-1),M=l/E,y=isFinite(l)?1+Math.floor(m*M):vs;y>vs&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${vs}`);const x=[];let w=0;for(let P=0;P<vs;++P){const F=P/M,A=Math.exp(-F*F/2);x.push(A),P===0?w+=A:P<y&&(w+=2*A)}for(let P=0;P<x.length;P++)x[P]=x[P]/w;v.envMap.value=t.texture,v.samples.value=y,v.weights.value=x,v.latitudinal.value=c==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:C}=this;v.dTheta.value=E,v.mipInt.value=C-a;const b=this._sizeLods[r],N=3*b*(r>C-bo?r-C+bo:0),I=4*(this._cubeSize-b);af(e,N,I,3*b,2*b),d.setRenderTarget(e),d.render(g,Tp)}}function DC(s){const t=[],e=[],a=[];let r=s;const l=s-bo+1+kx.length;for(let c=0;c<l;c++){const f=Math.pow(2,r);e.push(f);let d=1/f;c>s-bo?d=kx[c-s+bo-1]:c===0&&(d=0),a.push(d);const p=1/(f-2),m=-p,g=1+p,v=[m,m,g,m,g,g,m,m,g,g,m,g],S=6,E=6,M=3,y=2,x=1,w=new Float32Array(M*E*S),C=new Float32Array(y*E*S),b=new Float32Array(x*E*S);for(let I=0;I<S;I++){const P=I%3*2/3-1,F=I>2?0:-1,A=[P,F,0,P+2/3,F,0,P+2/3,F+1,0,P,F,0,P+2/3,F+1,0,P,F+1,0];w.set(A,M*E*I),C.set(v,y*E*I);const U=[I,I,I,I,I,I];b.set(U,x*E*I)}const N=new ja;N.setAttribute("position",new la(w,M)),N.setAttribute("uv",new la(C,y)),N.setAttribute("faceIndex",new la(b,x)),t.push(N),r>bo&&r--}return{lodPlanes:t,sizeLods:e,sigmas:a}}function Yx(s,t,e){const a=new Rs(s,t,e);return a.texture.mapping=Of,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function af(s,t,e,a,r){s.viewport.set(t,e,a,r),s.scissor.set(t,e,a,r)}function UC(s,t,e){const a=new Float32Array(vs),r=new $(0,1,0);return new zr({name:"SphericalGaussianBlur",defines:{n:vs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:o_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ur,depthTest:!1,depthWrite:!1})}function jx(){return new zr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:o_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ur,depthTest:!1,depthWrite:!1})}function Zx(){return new zr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:o_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ur,depthTest:!1,depthWrite:!1})}function o_(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function LC(s){let t=new WeakMap,e=null;function a(f){if(f&&f.isTexture){const d=f.mapping,p=d===Kp||d===Qp,m=d===Po||d===zo;if(p||m){let g=t.get(f);const v=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return e===null&&(e=new qx(s)),g=p?e.fromEquirectangular(f,g):e.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{const S=f.image;return p&&S&&S.height>0||m&&S&&r(S)?(e===null&&(e=new qx(s)),g=p?e.fromEquirectangular(f):e.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",l),g.texture):null}}}return f}function r(f){let d=0;const p=6;for(let m=0;m<p;m++)f[m]!==void 0&&d++;return d===p}function l(f){const d=f.target;d.removeEventListener("dispose",l);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function c(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:a,dispose:c}}function NC(s){const t={};function e(a){if(t[a]!==void 0)return t[a];let r;switch(a){case"WEBGL_depth_texture":r=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=s.getExtension(a)}return t[a]=r,r}return{has:function(a){return e(a)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(a){const r=e(a);return r===null&&Co("THREE.WebGLRenderer: "+a+" extension not supported."),r}}}function OC(s,t,e,a){const r={},l=new WeakMap;function c(g){const v=g.target;v.index!==null&&t.remove(v.index);for(const E in v.attributes)t.remove(v.attributes[E]);v.removeEventListener("dispose",c),delete r[v.id];const S=l.get(v);S&&(t.remove(S),l.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,e.memory.geometries--}function f(g,v){return r[v.id]===!0||(v.addEventListener("dispose",c),r[v.id]=!0,e.memory.geometries++),v}function d(g){const v=g.attributes;for(const S in v)t.update(v[S],s.ARRAY_BUFFER)}function p(g){const v=[],S=g.index,E=g.attributes.position;let M=0;if(S!==null){const w=S.array;M=S.version;for(let C=0,b=w.length;C<b;C+=3){const N=w[C+0],I=w[C+1],P=w[C+2];v.push(N,I,I,P,P,N)}}else if(E!==void 0){const w=E.array;M=E.version;for(let C=0,b=w.length/3-1;C<b;C+=3){const N=C+0,I=C+1,P=C+2;v.push(N,I,I,P,P,N)}}else return;const y=new(uS(v)?pS:dS)(v,1);y.version=M;const x=l.get(g);x&&t.remove(x),l.set(g,y)}function m(g){const v=l.get(g);if(v){const S=g.index;S!==null&&v.version<S.version&&p(g)}else p(g);return l.get(g)}return{get:f,update:d,getWireframeAttribute:m}}function PC(s,t,e){let a;function r(v){a=v}let l,c;function f(v){l=v.type,c=v.bytesPerElement}function d(v,S){s.drawElements(a,S,l,v*c),e.update(S,a,1)}function p(v,S,E){E!==0&&(s.drawElementsInstanced(a,S,l,v*c,E),e.update(S,a,E))}function m(v,S,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,S,0,l,v,0,E);let y=0;for(let x=0;x<E;x++)y+=S[x];e.update(y,a,1)}function g(v,S,E,M){if(E===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<v.length;x++)p(v[x]/c,S[x],M[x]);else{y.multiDrawElementsInstancedWEBGL(a,S,0,l,v,0,M,0,E);let x=0;for(let w=0;w<E;w++)x+=S[w]*M[w];e.update(x,a,1)}}this.setMode=r,this.setIndex=f,this.render=d,this.renderInstances=p,this.renderMultiDraw=m,this.renderMultiDrawInstances=g}function zC(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function a(l,c,f){switch(e.calls++,c){case s.TRIANGLES:e.triangles+=f*(l/3);break;case s.LINES:e.lines+=f*(l/2);break;case s.LINE_STRIP:e.lines+=f*(l-1);break;case s.LINE_LOOP:e.lines+=f*l;break;case s.POINTS:e.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:a}}function IC(s,t,e){const a=new WeakMap,r=new Ge;function l(c,f,d){const p=c.morphTargetInfluences,m=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,g=m!==void 0?m.length:0;let v=a.get(f);if(v===void 0||v.count!==g){let U=function(){F.dispose(),a.delete(f),f.removeEventListener("dispose",U)};var S=U;v!==void 0&&v.texture.dispose();const E=f.morphAttributes.position!==void 0,M=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],w=f.morphAttributes.normal||[],C=f.morphAttributes.color||[];let b=0;E===!0&&(b=1),M===!0&&(b=2),y===!0&&(b=3);let N=f.attributes.position.count*b,I=1;N>t.maxTextureSize&&(I=Math.ceil(N/t.maxTextureSize),N=t.maxTextureSize);const P=new Float32Array(N*I*4*g),F=new cS(P,N,I,g);F.type=Ha,F.needsUpdate=!0;const A=b*4;for(let G=0;G<g;G++){const nt=x[G],J=w[G],ct=C[G],lt=N*I*4*G;for(let z=0;z<nt.count;z++){const k=z*A;E===!0&&(r.fromBufferAttribute(nt,z),P[lt+k+0]=r.x,P[lt+k+1]=r.y,P[lt+k+2]=r.z,P[lt+k+3]=0),M===!0&&(r.fromBufferAttribute(J,z),P[lt+k+4]=r.x,P[lt+k+5]=r.y,P[lt+k+6]=r.z,P[lt+k+7]=0),y===!0&&(r.fromBufferAttribute(ct,z),P[lt+k+8]=r.x,P[lt+k+9]=r.y,P[lt+k+10]=r.z,P[lt+k+11]=ct.itemSize===4?r.w:1)}}v={count:g,texture:F,size:new Te(N,I)},a.set(f,v),f.addEventListener("dispose",U)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(s,"morphTexture",c.morphTexture,e);else{let E=0;for(let y=0;y<p.length;y++)E+=p[y];const M=f.morphTargetsRelative?1:1-E;d.getUniforms().setValue(s,"morphTargetBaseInfluence",M),d.getUniforms().setValue(s,"morphTargetInfluences",p)}d.getUniforms().setValue(s,"morphTargetsTexture",v.texture,e),d.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:l}}function BC(s,t,e,a){let r=new WeakMap;function l(d){const p=a.render.frame,m=d.geometry,g=t.get(d,m);if(r.get(g)!==p&&(t.update(g),r.set(g,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",f)===!1&&d.addEventListener("dispose",f),r.get(d)!==p&&(e.update(d.instanceMatrix,s.ARRAY_BUFFER),d.instanceColor!==null&&e.update(d.instanceColor,s.ARRAY_BUFFER),r.set(d,p))),d.isSkinnedMesh){const v=d.skeleton;r.get(v)!==p&&(v.update(),r.set(v,p))}return g}function c(){r=new WeakMap}function f(d){const p=d.target;p.removeEventListener("dispose",f),e.remove(p.instanceMatrix),p.instanceColor!==null&&e.remove(p.instanceColor)}return{update:l,dispose:c}}const SS=new ii,Kx=new vS(1,1),MS=new cS,ES=new uA,TS=new gS,Qx=[],Jx=[],$x=new Float32Array(16),ty=new Float32Array(9),ey=new Float32Array(4);function Yo(s,t,e){const a=s[0];if(a<=0||a>0)return s;const r=t*e;let l=Qx[r];if(l===void 0&&(l=new Float32Array(r),Qx[r]=l),t!==0){a.toArray(l,0);for(let c=1,f=0;c!==t;++c)f+=e,s[c].toArray(l,f)}return l}function Sn(s,t){if(s.length!==t.length)return!1;for(let e=0,a=s.length;e<a;e++)if(s[e]!==t[e])return!1;return!0}function Mn(s,t){for(let e=0,a=t.length;e<a;e++)s[e]=t[e]}function zf(s,t){let e=Jx[t];e===void 0&&(e=new Int32Array(t),Jx[t]=e);for(let a=0;a!==t;++a)e[a]=s.allocateTextureUnit();return e}function FC(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function HC(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Sn(e,t))return;s.uniform2fv(this.addr,t),Mn(e,t)}}function GC(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Sn(e,t))return;s.uniform3fv(this.addr,t),Mn(e,t)}}function VC(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Sn(e,t))return;s.uniform4fv(this.addr,t),Mn(e,t)}}function kC(s,t){const e=this.cache,a=t.elements;if(a===void 0){if(Sn(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Mn(e,t)}else{if(Sn(e,a))return;ey.set(a),s.uniformMatrix2fv(this.addr,!1,ey),Mn(e,a)}}function XC(s,t){const e=this.cache,a=t.elements;if(a===void 0){if(Sn(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Mn(e,t)}else{if(Sn(e,a))return;ty.set(a),s.uniformMatrix3fv(this.addr,!1,ty),Mn(e,a)}}function WC(s,t){const e=this.cache,a=t.elements;if(a===void 0){if(Sn(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Mn(e,t)}else{if(Sn(e,a))return;$x.set(a),s.uniformMatrix4fv(this.addr,!1,$x),Mn(e,a)}}function qC(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function YC(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Sn(e,t))return;s.uniform2iv(this.addr,t),Mn(e,t)}}function jC(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Sn(e,t))return;s.uniform3iv(this.addr,t),Mn(e,t)}}function ZC(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Sn(e,t))return;s.uniform4iv(this.addr,t),Mn(e,t)}}function KC(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function QC(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Sn(e,t))return;s.uniform2uiv(this.addr,t),Mn(e,t)}}function JC(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Sn(e,t))return;s.uniform3uiv(this.addr,t),Mn(e,t)}}function $C(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Sn(e,t))return;s.uniform4uiv(this.addr,t),Mn(e,t)}}function t2(s,t,e){const a=this.cache,r=e.allocateTextureUnit();a[0]!==r&&(s.uniform1i(this.addr,r),a[0]=r);let l;this.type===s.SAMPLER_2D_SHADOW?(Kx.compareFunction=lS,l=Kx):l=SS,e.setTexture2D(t||l,r)}function e2(s,t,e){const a=this.cache,r=e.allocateTextureUnit();a[0]!==r&&(s.uniform1i(this.addr,r),a[0]=r),e.setTexture3D(t||ES,r)}function n2(s,t,e){const a=this.cache,r=e.allocateTextureUnit();a[0]!==r&&(s.uniform1i(this.addr,r),a[0]=r),e.setTextureCube(t||TS,r)}function i2(s,t,e){const a=this.cache,r=e.allocateTextureUnit();a[0]!==r&&(s.uniform1i(this.addr,r),a[0]=r),e.setTexture2DArray(t||MS,r)}function a2(s){switch(s){case 5126:return FC;case 35664:return HC;case 35665:return GC;case 35666:return VC;case 35674:return kC;case 35675:return XC;case 35676:return WC;case 5124:case 35670:return qC;case 35667:case 35671:return YC;case 35668:case 35672:return jC;case 35669:case 35673:return ZC;case 5125:return KC;case 36294:return QC;case 36295:return JC;case 36296:return $C;case 35678:case 36198:case 36298:case 36306:case 35682:return t2;case 35679:case 36299:case 36307:return e2;case 35680:case 36300:case 36308:case 36293:return n2;case 36289:case 36303:case 36311:case 36292:return i2}}function r2(s,t){s.uniform1fv(this.addr,t)}function s2(s,t){const e=Yo(t,this.size,2);s.uniform2fv(this.addr,e)}function o2(s,t){const e=Yo(t,this.size,3);s.uniform3fv(this.addr,e)}function l2(s,t){const e=Yo(t,this.size,4);s.uniform4fv(this.addr,e)}function u2(s,t){const e=Yo(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function c2(s,t){const e=Yo(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function f2(s,t){const e=Yo(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function h2(s,t){s.uniform1iv(this.addr,t)}function d2(s,t){s.uniform2iv(this.addr,t)}function p2(s,t){s.uniform3iv(this.addr,t)}function m2(s,t){s.uniform4iv(this.addr,t)}function _2(s,t){s.uniform1uiv(this.addr,t)}function g2(s,t){s.uniform2uiv(this.addr,t)}function v2(s,t){s.uniform3uiv(this.addr,t)}function x2(s,t){s.uniform4uiv(this.addr,t)}function y2(s,t,e){const a=this.cache,r=t.length,l=zf(e,r);Sn(a,l)||(s.uniform1iv(this.addr,l),Mn(a,l));for(let c=0;c!==r;++c)e.setTexture2D(t[c]||SS,l[c])}function S2(s,t,e){const a=this.cache,r=t.length,l=zf(e,r);Sn(a,l)||(s.uniform1iv(this.addr,l),Mn(a,l));for(let c=0;c!==r;++c)e.setTexture3D(t[c]||ES,l[c])}function M2(s,t,e){const a=this.cache,r=t.length,l=zf(e,r);Sn(a,l)||(s.uniform1iv(this.addr,l),Mn(a,l));for(let c=0;c!==r;++c)e.setTextureCube(t[c]||TS,l[c])}function E2(s,t,e){const a=this.cache,r=t.length,l=zf(e,r);Sn(a,l)||(s.uniform1iv(this.addr,l),Mn(a,l));for(let c=0;c!==r;++c)e.setTexture2DArray(t[c]||MS,l[c])}function T2(s){switch(s){case 5126:return r2;case 35664:return s2;case 35665:return o2;case 35666:return l2;case 35674:return u2;case 35675:return c2;case 35676:return f2;case 5124:case 35670:return h2;case 35667:case 35671:return d2;case 35668:case 35672:return p2;case 35669:case 35673:return m2;case 5125:return _2;case 36294:return g2;case 36295:return v2;case 36296:return x2;case 35678:case 36198:case 36298:case 36306:case 35682:return y2;case 35679:case 36299:case 36307:return S2;case 35680:case 36300:case 36308:case 36293:return M2;case 36289:case 36303:case 36311:case 36292:return E2}}class b2{constructor(t,e,a){this.id=t,this.addr=a,this.cache=[],this.type=e.type,this.setValue=a2(e.type)}}class A2{constructor(t,e,a){this.id=t,this.addr=a,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=T2(e.type)}}class R2{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,a){const r=this.seq;for(let l=0,c=r.length;l!==c;++l){const f=r[l];f.setValue(t,e[f.id],a)}}}const Cp=/(\w+)(\])?(\[|\.)?/g;function ny(s,t){s.seq.push(t),s.map[t.id]=t}function w2(s,t,e){const a=s.name,r=a.length;for(Cp.lastIndex=0;;){const l=Cp.exec(a),c=Cp.lastIndex;let f=l[1];const d=l[2]==="]",p=l[3];if(d&&(f=f|0),p===void 0||p==="["&&c+2===r){ny(e,p===void 0?new b2(f,s,t):new A2(f,s,t));break}else{let g=e.map[f];g===void 0&&(g=new R2(f),ny(e,g)),e=g}}}class pf{constructor(t,e){this.seq=[],this.map={};const a=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<a;++r){const l=t.getActiveUniform(e,r),c=t.getUniformLocation(e,l.name);w2(l,c,this)}}setValue(t,e,a,r){const l=this.map[e];l!==void 0&&l.setValue(t,a,r)}setOptional(t,e,a){const r=e[a];r!==void 0&&this.setValue(t,a,r)}static upload(t,e,a,r){for(let l=0,c=e.length;l!==c;++l){const f=e[l],d=a[f.id];d.needsUpdate!==!1&&f.setValue(t,d.value,r)}}static seqWithValue(t,e){const a=[];for(let r=0,l=t.length;r!==l;++r){const c=t[r];c.id in e&&a.push(c)}return a}}function iy(s,t,e){const a=s.createShader(t);return s.shaderSource(a,e),s.compileShader(a),a}const C2=37297;let D2=0;function U2(s,t){const e=s.split(`
`),a=[],r=Math.max(t-6,0),l=Math.min(t+6,e.length);for(let c=r;c<l;c++){const f=c+1;a.push(`${f===t?">":" "} ${f}: ${e[c]}`)}return a.join(`
`)}const ay=new oe;function L2(s){we._getMatrix(ay,we.workingColorSpace,s);const t=`mat3( ${ay.elements.map(e=>e.toFixed(4))} )`;switch(we.getTransfer(s)){case yf:return[t,"LinearTransferOETF"];case He:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function ry(s,t,e){const a=s.getShaderParameter(t,s.COMPILE_STATUS),r=s.getShaderInfoLog(t).trim();if(a&&r==="")return"";const l=/ERROR: 0:(\d+)/.exec(r);if(l){const c=parseInt(l[1]);return e.toUpperCase()+`

`+r+`

`+U2(s.getShaderSource(t),c)}else return r}function N2(s,t){const e=L2(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function O2(s,t){let e;switch(t){case z1:e="Linear";break;case I1:e="Reinhard";break;case B1:e="Cineon";break;case Qy:e="ACESFilmic";break;case H1:e="AgX";break;case G1:e="Neutral";break;case F1:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const rf=new $;function P2(){we.getLuminanceCoefficients(rf);const s=rf.x.toFixed(4),t=rf.y.toFixed(4),e=rf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function z2(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Kl).join(`
`)}function I2(s){const t=[];for(const e in s){const a=s[e];a!==!1&&t.push("#define "+e+" "+a)}return t.join(`
`)}function B2(s,t){const e={},a=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let r=0;r<a;r++){const l=s.getActiveAttrib(t,r),c=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),e[c]={type:l.type,location:s.getAttribLocation(t,c),locationSize:f}}return e}function Kl(s){return s!==""}function sy(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function oy(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const F2=/^[ \t]*#include +<([\w\d./]+)>/gm;function wm(s){return s.replace(F2,G2)}const H2=new Map;function G2(s,t){let e=ue[t];if(e===void 0){const a=H2.get(t);if(a!==void 0)e=ue[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return wm(e)}const V2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ly(s){return s.replace(V2,k2)}function k2(s,t,e,a){let r="";for(let l=parseInt(t);l<parseInt(e);l++)r+=a.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return r}function uy(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function X2(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Zy?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===m1?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ia&&(t="SHADOWMAP_TYPE_VSM"),t}function W2(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Po:case zo:t="ENVMAP_TYPE_CUBE";break;case Of:t="ENVMAP_TYPE_CUBE_UV";break}return t}function q2(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case zo:t="ENVMAP_MODE_REFRACTION";break}return t}function Y2(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ky:t="ENVMAP_BLENDING_MULTIPLY";break;case O1:t="ENVMAP_BLENDING_MIX";break;case P1:t="ENVMAP_BLENDING_ADD";break}return t}function j2(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:a,maxMip:e}}function Z2(s,t,e,a){const r=s.getContext(),l=e.defines;let c=e.vertexShader,f=e.fragmentShader;const d=X2(e),p=W2(e),m=q2(e),g=Y2(e),v=j2(e),S=z2(e),E=I2(l),M=r.createProgram();let y,x,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E].filter(Kl).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E].filter(Kl).join(`
`),x.length>0&&(x+=`
`)):(y=[uy(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+m:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+d:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Kl).join(`
`),x=[uy(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.envMap?"#define "+m:"",e.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+d:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Lr?"#define TONE_MAPPING":"",e.toneMapping!==Lr?ue.tonemapping_pars_fragment:"",e.toneMapping!==Lr?O2("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,N2("linearToOutputTexel",e.outputColorSpace),P2(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Kl).join(`
`)),c=wm(c),c=sy(c,e),c=oy(c,e),f=wm(f),f=sy(f,e),f=oy(f,e),c=ly(c),f=ly(f),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",e.glslVersion===xx?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===xx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const C=w+y+c,b=w+x+f,N=iy(r,r.VERTEX_SHADER,C),I=iy(r,r.FRAGMENT_SHADER,b);r.attachShader(M,N),r.attachShader(M,I),e.index0AttributeName!==void 0?r.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function P(G){if(s.debug.checkShaderErrors){const nt=r.getProgramInfoLog(M).trim(),J=r.getShaderInfoLog(N).trim(),ct=r.getShaderInfoLog(I).trim();let lt=!0,z=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(lt=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(r,M,N,I);else{const k=ry(r,N,"vertex"),W=ry(r,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+nt+`
`+k+`
`+W)}else nt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",nt):(J===""||ct==="")&&(z=!1);z&&(G.diagnostics={runnable:lt,programLog:nt,vertexShader:{log:J,prefix:y},fragmentShader:{log:ct,prefix:x}})}r.deleteShader(N),r.deleteShader(I),F=new pf(r,M),A=B2(r,M)}let F;this.getUniforms=function(){return F===void 0&&P(this),F};let A;this.getAttributes=function(){return A===void 0&&P(this),A};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=r.getProgramParameter(M,C2)),U},this.destroy=function(){a.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=D2++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=N,this.fragmentShader=I,this}let K2=0;class Q2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,a=t.fragmentShader,r=this._getShaderStage(e),l=this._getShaderStage(a),c=this._getShaderCacheForMaterial(t);return c.has(r)===!1&&(c.add(r),r.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const a of e)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let a=e.get(t);return a===void 0&&(a=new Set,e.set(t,a)),a}_getShaderStage(t){const e=this.shaderCache;let a=e.get(t);return a===void 0&&(a=new J2(t),e.set(t,a)),a}}class J2{constructor(t){this.id=K2++,this.code=t,this.usedTimes=0}}function $2(s,t,e,a,r,l,c){const f=new r_,d=new Q2,p=new Set,m=[],g=r.logarithmicDepthBuffer,v=r.vertexTextures;let S=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(A){return p.add(A),A===0?"uv":`uv${A}`}function y(A,U,G,nt,J){const ct=nt.fog,lt=J.geometry,z=A.isMeshStandardMaterial?nt.environment:null,k=(A.isMeshStandardMaterial?e:t).get(A.envMap||z),W=k&&k.mapping===Of?k.image.height:null,mt=E[A.type];A.precision!==null&&(S=r.getMaxPrecision(A.precision),S!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",S,"instead."));const O=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,Z=O!==void 0?O.length:0;let gt=0;lt.morphAttributes.position!==void 0&&(gt=1),lt.morphAttributes.normal!==void 0&&(gt=2),lt.morphAttributes.color!==void 0&&(gt=3);let St,Y,ut,Mt;if(mt){const Ae=aa[mt];St=Ae.vertexShader,Y=Ae.fragmentShader}else St=A.vertexShader,Y=A.fragmentShader,d.update(A),ut=d.getVertexShaderID(A),Mt=d.getFragmentShaderID(A);const Rt=s.getRenderTarget(),wt=s.state.buffers.depth.getReversed(),ee=J.isInstancedMesh===!0,Vt=J.isBatchedMesh===!0,ge=!!A.map,Ve=!!A.matcap,ve=!!k,V=!!A.aoMap,Un=!!A.lightMap,be=!!A.bumpMap,pe=!!A.normalMap,kt=!!A.displacementMap,xe=!!A.emissiveMap,Zt=!!A.metalnessMap,re=!!A.roughnessMap,on=A.anisotropy>0,B=A.clearcoat>0,R=A.dispersion>0,it=A.iridescence>0,pt=A.sheen>0,vt=A.transmission>0,ft=on&&!!A.anisotropyMap,Pt=B&&!!A.clearcoatMap,Ut=B&&!!A.clearcoatNormalMap,Gt=B&&!!A.clearcoatRoughnessMap,Xt=it&&!!A.iridescenceMap,Et=it&&!!A.iridescenceThicknessMap,zt=pt&&!!A.sheenColorMap,Yt=pt&&!!A.sheenRoughnessMap,jt=!!A.specularMap,Ct=!!A.specularColorMap,ae=!!A.specularIntensityMap,q=vt&&!!A.transmissionMap,Lt=vt&&!!A.thicknessMap,Tt=!!A.gradientMap,It=!!A.alphaMap,At=A.alphaTest>0,yt=!!A.alphaHash,Ft=!!A.extensions;let ie=Lr;A.toneMapped&&(Rt===null||Rt.isXRRenderTarget===!0)&&(ie=s.toneMapping);const Ne={shaderID:mt,shaderType:A.type,shaderName:A.name,vertexShader:St,fragmentShader:Y,defines:A.defines,customVertexShaderID:ut,customFragmentShaderID:Mt,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:S,batching:Vt,batchingColor:Vt&&J._colorsTexture!==null,instancing:ee,instancingColor:ee&&J.instanceColor!==null,instancingMorph:ee&&J.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:Rt===null?s.outputColorSpace:Rt.isXRRenderTarget===!0?Rt.texture.colorSpace:Io,alphaToCoverage:!!A.alphaToCoverage,map:ge,matcap:Ve,envMap:ve,envMapMode:ve&&k.mapping,envMapCubeUVHeight:W,aoMap:V,lightMap:Un,bumpMap:be,normalMap:pe,displacementMap:v&&kt,emissiveMap:xe,normalMapObjectSpace:pe&&A.normalMapType===W1,normalMapTangentSpace:pe&&A.normalMapType===oS,metalnessMap:Zt,roughnessMap:re,anisotropy:on,anisotropyMap:ft,clearcoat:B,clearcoatMap:Pt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:Gt,dispersion:R,iridescence:it,iridescenceMap:Xt,iridescenceThicknessMap:Et,sheen:pt,sheenColorMap:zt,sheenRoughnessMap:Yt,specularMap:jt,specularColorMap:Ct,specularIntensityMap:ae,transmission:vt,transmissionMap:q,thicknessMap:Lt,gradientMap:Tt,opaque:A.transparent===!1&&A.blending===wo&&A.alphaToCoverage===!1,alphaMap:It,alphaTest:At,alphaHash:yt,combine:A.combine,mapUv:ge&&M(A.map.channel),aoMapUv:V&&M(A.aoMap.channel),lightMapUv:Un&&M(A.lightMap.channel),bumpMapUv:be&&M(A.bumpMap.channel),normalMapUv:pe&&M(A.normalMap.channel),displacementMapUv:kt&&M(A.displacementMap.channel),emissiveMapUv:xe&&M(A.emissiveMap.channel),metalnessMapUv:Zt&&M(A.metalnessMap.channel),roughnessMapUv:re&&M(A.roughnessMap.channel),anisotropyMapUv:ft&&M(A.anisotropyMap.channel),clearcoatMapUv:Pt&&M(A.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&M(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Gt&&M(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Xt&&M(A.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&M(A.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&M(A.sheenColorMap.channel),sheenRoughnessMapUv:Yt&&M(A.sheenRoughnessMap.channel),specularMapUv:jt&&M(A.specularMap.channel),specularColorMapUv:Ct&&M(A.specularColorMap.channel),specularIntensityMapUv:ae&&M(A.specularIntensityMap.channel),transmissionMapUv:q&&M(A.transmissionMap.channel),thicknessMapUv:Lt&&M(A.thicknessMap.channel),alphaMapUv:It&&M(A.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(pe||on),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!lt.attributes.uv&&(ge||It),fog:!!ct,useFog:A.fog===!0,fogExp2:!!ct&&ct.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:wt,skinning:J.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:gt,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:A.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:ie,decodeVideoTexture:ge&&A.map.isVideoTexture===!0&&we.getTransfer(A.map.colorSpace)===He,decodeVideoTextureEmissive:xe&&A.emissiveMap.isVideoTexture===!0&&we.getTransfer(A.emissiveMap.colorSpace)===He,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===qi,flipSided:A.side===ni,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Ft&&A.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&A.extensions.multiDraw===!0||Vt)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Ne.vertexUv1s=p.has(1),Ne.vertexUv2s=p.has(2),Ne.vertexUv3s=p.has(3),p.clear(),Ne}function x(A){const U=[];if(A.shaderID?U.push(A.shaderID):(U.push(A.customVertexShaderID),U.push(A.customFragmentShaderID)),A.defines!==void 0)for(const G in A.defines)U.push(G),U.push(A.defines[G]);return A.isRawShaderMaterial===!1&&(w(U,A),C(U,A),U.push(s.outputColorSpace)),U.push(A.customProgramCacheKey),U.join()}function w(A,U){A.push(U.precision),A.push(U.outputColorSpace),A.push(U.envMapMode),A.push(U.envMapCubeUVHeight),A.push(U.mapUv),A.push(U.alphaMapUv),A.push(U.lightMapUv),A.push(U.aoMapUv),A.push(U.bumpMapUv),A.push(U.normalMapUv),A.push(U.displacementMapUv),A.push(U.emissiveMapUv),A.push(U.metalnessMapUv),A.push(U.roughnessMapUv),A.push(U.anisotropyMapUv),A.push(U.clearcoatMapUv),A.push(U.clearcoatNormalMapUv),A.push(U.clearcoatRoughnessMapUv),A.push(U.iridescenceMapUv),A.push(U.iridescenceThicknessMapUv),A.push(U.sheenColorMapUv),A.push(U.sheenRoughnessMapUv),A.push(U.specularMapUv),A.push(U.specularColorMapUv),A.push(U.specularIntensityMapUv),A.push(U.transmissionMapUv),A.push(U.thicknessMapUv),A.push(U.combine),A.push(U.fogExp2),A.push(U.sizeAttenuation),A.push(U.morphTargetsCount),A.push(U.morphAttributeCount),A.push(U.numDirLights),A.push(U.numPointLights),A.push(U.numSpotLights),A.push(U.numSpotLightMaps),A.push(U.numHemiLights),A.push(U.numRectAreaLights),A.push(U.numDirLightShadows),A.push(U.numPointLightShadows),A.push(U.numSpotLightShadows),A.push(U.numSpotLightShadowsWithMaps),A.push(U.numLightProbes),A.push(U.shadowMapType),A.push(U.toneMapping),A.push(U.numClippingPlanes),A.push(U.numClipIntersection),A.push(U.depthPacking)}function C(A,U){f.disableAll(),U.supportsVertexTextures&&f.enable(0),U.instancing&&f.enable(1),U.instancingColor&&f.enable(2),U.instancingMorph&&f.enable(3),U.matcap&&f.enable(4),U.envMap&&f.enable(5),U.normalMapObjectSpace&&f.enable(6),U.normalMapTangentSpace&&f.enable(7),U.clearcoat&&f.enable(8),U.iridescence&&f.enable(9),U.alphaTest&&f.enable(10),U.vertexColors&&f.enable(11),U.vertexAlphas&&f.enable(12),U.vertexUv1s&&f.enable(13),U.vertexUv2s&&f.enable(14),U.vertexUv3s&&f.enable(15),U.vertexTangents&&f.enable(16),U.anisotropy&&f.enable(17),U.alphaHash&&f.enable(18),U.batching&&f.enable(19),U.dispersion&&f.enable(20),U.batchingColor&&f.enable(21),U.gradientMap&&f.enable(22),A.push(f.mask),f.disableAll(),U.fog&&f.enable(0),U.useFog&&f.enable(1),U.flatShading&&f.enable(2),U.logarithmicDepthBuffer&&f.enable(3),U.reverseDepthBuffer&&f.enable(4),U.skinning&&f.enable(5),U.morphTargets&&f.enable(6),U.morphNormals&&f.enable(7),U.morphColors&&f.enable(8),U.premultipliedAlpha&&f.enable(9),U.shadowMapEnabled&&f.enable(10),U.doubleSided&&f.enable(11),U.flipSided&&f.enable(12),U.useDepthPacking&&f.enable(13),U.dithering&&f.enable(14),U.transmission&&f.enable(15),U.sheen&&f.enable(16),U.opaque&&f.enable(17),U.pointsUvs&&f.enable(18),U.decodeVideoTexture&&f.enable(19),U.decodeVideoTextureEmissive&&f.enable(20),U.alphaToCoverage&&f.enable(21),A.push(f.mask)}function b(A){const U=E[A.type];let G;if(U){const nt=aa[U];G=MA.clone(nt.uniforms)}else G=A.uniforms;return G}function N(A,U){let G;for(let nt=0,J=m.length;nt<J;nt++){const ct=m[nt];if(ct.cacheKey===U){G=ct,++G.usedTimes;break}}return G===void 0&&(G=new Z2(s,U,A,l),m.push(G)),G}function I(A){if(--A.usedTimes===0){const U=m.indexOf(A);m[U]=m[m.length-1],m.pop(),A.destroy()}}function P(A){d.remove(A)}function F(){d.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:b,acquireProgram:N,releaseProgram:I,releaseShaderCache:P,programs:m,dispose:F}}function tD(){let s=new WeakMap;function t(c){return s.has(c)}function e(c){let f=s.get(c);return f===void 0&&(f={},s.set(c,f)),f}function a(c){s.delete(c)}function r(c,f,d){s.get(c)[f]=d}function l(){s=new WeakMap}return{has:t,get:e,remove:a,update:r,dispose:l}}function eD(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function cy(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function fy(){const s=[];let t=0;const e=[],a=[],r=[];function l(){t=0,e.length=0,a.length=0,r.length=0}function c(g,v,S,E,M,y){let x=s[t];return x===void 0?(x={id:g.id,object:g,geometry:v,material:S,groupOrder:E,renderOrder:g.renderOrder,z:M,group:y},s[t]=x):(x.id=g.id,x.object=g,x.geometry=v,x.material=S,x.groupOrder=E,x.renderOrder=g.renderOrder,x.z=M,x.group=y),t++,x}function f(g,v,S,E,M,y){const x=c(g,v,S,E,M,y);S.transmission>0?a.push(x):S.transparent===!0?r.push(x):e.push(x)}function d(g,v,S,E,M,y){const x=c(g,v,S,E,M,y);S.transmission>0?a.unshift(x):S.transparent===!0?r.unshift(x):e.unshift(x)}function p(g,v){e.length>1&&e.sort(g||eD),a.length>1&&a.sort(v||cy),r.length>1&&r.sort(v||cy)}function m(){for(let g=t,v=s.length;g<v;g++){const S=s[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:e,transmissive:a,transparent:r,init:l,push:f,unshift:d,finish:m,sort:p}}function nD(){let s=new WeakMap;function t(a,r){const l=s.get(a);let c;return l===void 0?(c=new fy,s.set(a,[c])):r>=l.length?(c=new fy,l.push(c)):c=l[r],c}function e(){s=new WeakMap}return{get:t,dispose:e}}function iD(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new $,color:new De};break;case"SpotLight":e={position:new $,direction:new $,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new $,color:new De,distance:0,decay:0};break;case"HemisphereLight":e={direction:new $,skyColor:new De,groundColor:new De};break;case"RectAreaLight":e={color:new De,position:new $,halfWidth:new $,halfHeight:new $};break}return s[t.id]=e,e}}}function aD(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let rD=0;function sD(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function oD(s){const t=new iD,e=aD(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new $);const r=new $,l=new Je,c=new Je;function f(p){let m=0,g=0,v=0;for(let A=0;A<9;A++)a.probe[A].set(0,0,0);let S=0,E=0,M=0,y=0,x=0,w=0,C=0,b=0,N=0,I=0,P=0;p.sort(sD);for(let A=0,U=p.length;A<U;A++){const G=p[A],nt=G.color,J=G.intensity,ct=G.distance,lt=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)m+=nt.r*J,g+=nt.g*J,v+=nt.b*J;else if(G.isLightProbe){for(let z=0;z<9;z++)a.probe[z].addScaledVector(G.sh.coefficients[z],J);P++}else if(G.isDirectionalLight){const z=t.get(G);if(z.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const k=G.shadow,W=e.get(G);W.shadowIntensity=k.intensity,W.shadowBias=k.bias,W.shadowNormalBias=k.normalBias,W.shadowRadius=k.radius,W.shadowMapSize=k.mapSize,a.directionalShadow[S]=W,a.directionalShadowMap[S]=lt,a.directionalShadowMatrix[S]=G.shadow.matrix,w++}a.directional[S]=z,S++}else if(G.isSpotLight){const z=t.get(G);z.position.setFromMatrixPosition(G.matrixWorld),z.color.copy(nt).multiplyScalar(J),z.distance=ct,z.coneCos=Math.cos(G.angle),z.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),z.decay=G.decay,a.spot[M]=z;const k=G.shadow;if(G.map&&(a.spotLightMap[N]=G.map,N++,k.updateMatrices(G),G.castShadow&&I++),a.spotLightMatrix[M]=k.matrix,G.castShadow){const W=e.get(G);W.shadowIntensity=k.intensity,W.shadowBias=k.bias,W.shadowNormalBias=k.normalBias,W.shadowRadius=k.radius,W.shadowMapSize=k.mapSize,a.spotShadow[M]=W,a.spotShadowMap[M]=lt,b++}M++}else if(G.isRectAreaLight){const z=t.get(G);z.color.copy(nt).multiplyScalar(J),z.halfWidth.set(G.width*.5,0,0),z.halfHeight.set(0,G.height*.5,0),a.rectArea[y]=z,y++}else if(G.isPointLight){const z=t.get(G);if(z.color.copy(G.color).multiplyScalar(G.intensity),z.distance=G.distance,z.decay=G.decay,G.castShadow){const k=G.shadow,W=e.get(G);W.shadowIntensity=k.intensity,W.shadowBias=k.bias,W.shadowNormalBias=k.normalBias,W.shadowRadius=k.radius,W.shadowMapSize=k.mapSize,W.shadowCameraNear=k.camera.near,W.shadowCameraFar=k.camera.far,a.pointShadow[E]=W,a.pointShadowMap[E]=lt,a.pointShadowMatrix[E]=G.shadow.matrix,C++}a.point[E]=z,E++}else if(G.isHemisphereLight){const z=t.get(G);z.skyColor.copy(G.color).multiplyScalar(J),z.groundColor.copy(G.groundColor).multiplyScalar(J),a.hemi[x]=z,x++}}y>0&&(s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Nt.LTC_FLOAT_1,a.rectAreaLTC2=Nt.LTC_FLOAT_2):(a.rectAreaLTC1=Nt.LTC_HALF_1,a.rectAreaLTC2=Nt.LTC_HALF_2)),a.ambient[0]=m,a.ambient[1]=g,a.ambient[2]=v;const F=a.hash;(F.directionalLength!==S||F.pointLength!==E||F.spotLength!==M||F.rectAreaLength!==y||F.hemiLength!==x||F.numDirectionalShadows!==w||F.numPointShadows!==C||F.numSpotShadows!==b||F.numSpotMaps!==N||F.numLightProbes!==P)&&(a.directional.length=S,a.spot.length=M,a.rectArea.length=y,a.point.length=E,a.hemi.length=x,a.directionalShadow.length=w,a.directionalShadowMap.length=w,a.pointShadow.length=C,a.pointShadowMap.length=C,a.spotShadow.length=b,a.spotShadowMap.length=b,a.directionalShadowMatrix.length=w,a.pointShadowMatrix.length=C,a.spotLightMatrix.length=b+N-I,a.spotLightMap.length=N,a.numSpotLightShadowsWithMaps=I,a.numLightProbes=P,F.directionalLength=S,F.pointLength=E,F.spotLength=M,F.rectAreaLength=y,F.hemiLength=x,F.numDirectionalShadows=w,F.numPointShadows=C,F.numSpotShadows=b,F.numSpotMaps=N,F.numLightProbes=P,a.version=rD++)}function d(p,m){let g=0,v=0,S=0,E=0,M=0;const y=m.matrixWorldInverse;for(let x=0,w=p.length;x<w;x++){const C=p[x];if(C.isDirectionalLight){const b=a.directional[g];b.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(y),g++}else if(C.isSpotLight){const b=a.spot[S];b.position.setFromMatrixPosition(C.matrixWorld),b.position.applyMatrix4(y),b.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(y),S++}else if(C.isRectAreaLight){const b=a.rectArea[E];b.position.setFromMatrixPosition(C.matrixWorld),b.position.applyMatrix4(y),c.identity(),l.copy(C.matrixWorld),l.premultiply(y),c.extractRotation(l),b.halfWidth.set(C.width*.5,0,0),b.halfHeight.set(0,C.height*.5,0),b.halfWidth.applyMatrix4(c),b.halfHeight.applyMatrix4(c),E++}else if(C.isPointLight){const b=a.point[v];b.position.setFromMatrixPosition(C.matrixWorld),b.position.applyMatrix4(y),v++}else if(C.isHemisphereLight){const b=a.hemi[M];b.direction.setFromMatrixPosition(C.matrixWorld),b.direction.transformDirection(y),M++}}}return{setup:f,setupView:d,state:a}}function hy(s){const t=new oD(s),e=[],a=[];function r(m){p.camera=m,e.length=0,a.length=0}function l(m){e.push(m)}function c(m){a.push(m)}function f(){t.setup(e)}function d(m){t.setupView(e,m)}const p={lightsArray:e,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:p,setupLights:f,setupLightsView:d,pushLight:l,pushShadow:c}}function lD(s){let t=new WeakMap;function e(r,l=0){const c=t.get(r);let f;return c===void 0?(f=new hy(s),t.set(r,[f])):l>=c.length?(f=new hy(s),c.push(f)):f=c[l],f}function a(){t=new WeakMap}return{get:e,dispose:a}}const uD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cD=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function fD(s,t,e){let a=new s_;const r=new Te,l=new Te,c=new Ge,f=new LA({depthPacking:X1}),d=new NA,p={},m=e.maxTextureSize,g={[Pr]:ni,[ni]:Pr,[qi]:qi},v=new zr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:uD,fragmentShader:cD}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const E=new ja;E.setAttribute("position",new la(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new ei(E,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zy;let x=this.type;this.render=function(I,P,F){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;const A=s.getRenderTarget(),U=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),nt=s.state;nt.setBlending(Ur),nt.buffers.color.setClear(1,1,1,1),nt.buffers.depth.setTest(!0),nt.setScissorTest(!1);const J=x!==Ia&&this.type===Ia,ct=x===Ia&&this.type!==Ia;for(let lt=0,z=I.length;lt<z;lt++){const k=I[lt],W=k.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const mt=W.getFrameExtents();if(r.multiply(mt),l.copy(W.mapSize),(r.x>m||r.y>m)&&(r.x>m&&(l.x=Math.floor(m/mt.x),r.x=l.x*mt.x,W.mapSize.x=l.x),r.y>m&&(l.y=Math.floor(m/mt.y),r.y=l.y*mt.y,W.mapSize.y=l.y)),W.map===null||J===!0||ct===!0){const Z=this.type!==Ia?{minFilter:Zi,magFilter:Zi}:{};W.map!==null&&W.map.dispose(),W.map=new Rs(r.x,r.y,Z),W.map.texture.name=k.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const O=W.getViewportCount();for(let Z=0;Z<O;Z++){const gt=W.getViewport(Z);c.set(l.x*gt.x,l.y*gt.y,l.x*gt.z,l.y*gt.w),nt.viewport(c),W.updateMatrices(k,Z),a=W.getFrustum(),b(P,F,W.camera,k,this.type)}W.isPointLightShadow!==!0&&this.type===Ia&&w(W,F),W.needsUpdate=!1}x=this.type,y.needsUpdate=!1,s.setRenderTarget(A,U,G)};function w(I,P){const F=t.update(M);v.defines.VSM_SAMPLES!==I.blurSamples&&(v.defines.VSM_SAMPLES=I.blurSamples,S.defines.VSM_SAMPLES=I.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Rs(r.x,r.y)),v.uniforms.shadow_pass.value=I.map.texture,v.uniforms.resolution.value=I.mapSize,v.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(P,null,F,v,M,null),S.uniforms.shadow_pass.value=I.mapPass.texture,S.uniforms.resolution.value=I.mapSize,S.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(P,null,F,S,M,null)}function C(I,P,F,A){let U=null;const G=F.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(G!==void 0)U=G;else if(U=F.isPointLight===!0?d:f,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const nt=U.uuid,J=P.uuid;let ct=p[nt];ct===void 0&&(ct={},p[nt]=ct);let lt=ct[J];lt===void 0&&(lt=U.clone(),ct[J]=lt,P.addEventListener("dispose",N)),U=lt}if(U.visible=P.visible,U.wireframe=P.wireframe,A===Ia?U.side=P.shadowSide!==null?P.shadowSide:P.side:U.side=P.shadowSide!==null?P.shadowSide:g[P.side],U.alphaMap=P.alphaMap,U.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,U.map=P.map,U.clipShadows=P.clipShadows,U.clippingPlanes=P.clippingPlanes,U.clipIntersection=P.clipIntersection,U.displacementMap=P.displacementMap,U.displacementScale=P.displacementScale,U.displacementBias=P.displacementBias,U.wireframeLinewidth=P.wireframeLinewidth,U.linewidth=P.linewidth,F.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const nt=s.properties.get(U);nt.light=F}return U}function b(I,P,F,A,U){if(I.visible===!1)return;if(I.layers.test(P.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&U===Ia)&&(!I.frustumCulled||a.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,I.matrixWorld);const J=t.update(I),ct=I.material;if(Array.isArray(ct)){const lt=J.groups;for(let z=0,k=lt.length;z<k;z++){const W=lt[z],mt=ct[W.materialIndex];if(mt&&mt.visible){const O=C(I,mt,A,U);I.onBeforeShadow(s,I,P,F,J,O,W),s.renderBufferDirect(F,null,J,O,I,W),I.onAfterShadow(s,I,P,F,J,O,W)}}}else if(ct.visible){const lt=C(I,ct,A,U);I.onBeforeShadow(s,I,P,F,J,lt,null),s.renderBufferDirect(F,null,J,lt,I,null),I.onAfterShadow(s,I,P,F,J,lt,null)}}const nt=I.children;for(let J=0,ct=nt.length;J<ct;J++)b(nt[J],P,F,A,U)}function N(I){I.target.removeEventListener("dispose",N);for(const F in p){const A=p[F],U=I.target.uuid;U in A&&(A[U].dispose(),delete A[U])}}}const hD={[kp]:Xp,[Wp]:jp,[qp]:Zp,[Oo]:Yp,[Xp]:kp,[jp]:Wp,[Zp]:qp,[Yp]:Oo};function dD(s,t){function e(){let q=!1;const Lt=new Ge;let Tt=null;const It=new Ge(0,0,0,0);return{setMask:function(At){Tt!==At&&!q&&(s.colorMask(At,At,At,At),Tt=At)},setLocked:function(At){q=At},setClear:function(At,yt,Ft,ie,Ne){Ne===!0&&(At*=ie,yt*=ie,Ft*=ie),Lt.set(At,yt,Ft,ie),It.equals(Lt)===!1&&(s.clearColor(At,yt,Ft,ie),It.copy(Lt))},reset:function(){q=!1,Tt=null,It.set(-1,0,0,0)}}}function a(){let q=!1,Lt=!1,Tt=null,It=null,At=null;return{setReversed:function(yt){if(Lt!==yt){const Ft=t.get("EXT_clip_control");yt?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),Lt=yt;const ie=At;At=null,this.setClear(ie)}},getReversed:function(){return Lt},setTest:function(yt){yt?Rt(s.DEPTH_TEST):wt(s.DEPTH_TEST)},setMask:function(yt){Tt!==yt&&!q&&(s.depthMask(yt),Tt=yt)},setFunc:function(yt){if(Lt&&(yt=hD[yt]),It!==yt){switch(yt){case kp:s.depthFunc(s.NEVER);break;case Xp:s.depthFunc(s.ALWAYS);break;case Wp:s.depthFunc(s.LESS);break;case Oo:s.depthFunc(s.LEQUAL);break;case qp:s.depthFunc(s.EQUAL);break;case Yp:s.depthFunc(s.GEQUAL);break;case jp:s.depthFunc(s.GREATER);break;case Zp:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}It=yt}},setLocked:function(yt){q=yt},setClear:function(yt){At!==yt&&(Lt&&(yt=1-yt),s.clearDepth(yt),At=yt)},reset:function(){q=!1,Tt=null,It=null,At=null,Lt=!1}}}function r(){let q=!1,Lt=null,Tt=null,It=null,At=null,yt=null,Ft=null,ie=null,Ne=null;return{setTest:function(Ae){q||(Ae?Rt(s.STENCIL_TEST):wt(s.STENCIL_TEST))},setMask:function(Ae){Lt!==Ae&&!q&&(s.stencilMask(Ae),Lt=Ae)},setFunc:function(Ae,ui,En){(Tt!==Ae||It!==ui||At!==En)&&(s.stencilFunc(Ae,ui,En),Tt=Ae,It=ui,At=En)},setOp:function(Ae,ui,En){(yt!==Ae||Ft!==ui||ie!==En)&&(s.stencilOp(Ae,ui,En),yt=Ae,Ft=ui,ie=En)},setLocked:function(Ae){q=Ae},setClear:function(Ae){Ne!==Ae&&(s.clearStencil(Ae),Ne=Ae)},reset:function(){q=!1,Lt=null,Tt=null,It=null,At=null,yt=null,Ft=null,ie=null,Ne=null}}}const l=new e,c=new a,f=new r,d=new WeakMap,p=new WeakMap;let m={},g={},v=new WeakMap,S=[],E=null,M=!1,y=null,x=null,w=null,C=null,b=null,N=null,I=null,P=new De(0,0,0),F=0,A=!1,U=null,G=null,nt=null,J=null,ct=null;const lt=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,k=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(W)[1]),z=k>=1):W.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),z=k>=2);let mt=null,O={};const Z=s.getParameter(s.SCISSOR_BOX),gt=s.getParameter(s.VIEWPORT),St=new Ge().fromArray(Z),Y=new Ge().fromArray(gt);function ut(q,Lt,Tt,It){const At=new Uint8Array(4),yt=s.createTexture();s.bindTexture(q,yt),s.texParameteri(q,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(q,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ft=0;Ft<Tt;Ft++)q===s.TEXTURE_3D||q===s.TEXTURE_2D_ARRAY?s.texImage3D(Lt,0,s.RGBA,1,1,It,0,s.RGBA,s.UNSIGNED_BYTE,At):s.texImage2D(Lt+Ft,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,At);return yt}const Mt={};Mt[s.TEXTURE_2D]=ut(s.TEXTURE_2D,s.TEXTURE_2D,1),Mt[s.TEXTURE_CUBE_MAP]=ut(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[s.TEXTURE_2D_ARRAY]=ut(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Mt[s.TEXTURE_3D]=ut(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),Rt(s.DEPTH_TEST),c.setFunc(Oo),be(!1),pe(dx),Rt(s.CULL_FACE),V(Ur);function Rt(q){m[q]!==!0&&(s.enable(q),m[q]=!0)}function wt(q){m[q]!==!1&&(s.disable(q),m[q]=!1)}function ee(q,Lt){return g[q]!==Lt?(s.bindFramebuffer(q,Lt),g[q]=Lt,q===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Lt),q===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Lt),!0):!1}function Vt(q,Lt){let Tt=S,It=!1;if(q){Tt=v.get(Lt),Tt===void 0&&(Tt=[],v.set(Lt,Tt));const At=q.textures;if(Tt.length!==At.length||Tt[0]!==s.COLOR_ATTACHMENT0){for(let yt=0,Ft=At.length;yt<Ft;yt++)Tt[yt]=s.COLOR_ATTACHMENT0+yt;Tt.length=At.length,It=!0}}else Tt[0]!==s.BACK&&(Tt[0]=s.BACK,It=!0);It&&s.drawBuffers(Tt)}function ge(q){return E!==q?(s.useProgram(q),E=q,!0):!1}const Ve={[gs]:s.FUNC_ADD,[g1]:s.FUNC_SUBTRACT,[v1]:s.FUNC_REVERSE_SUBTRACT};Ve[x1]=s.MIN,Ve[y1]=s.MAX;const ve={[S1]:s.ZERO,[M1]:s.ONE,[E1]:s.SRC_COLOR,[Gp]:s.SRC_ALPHA,[C1]:s.SRC_ALPHA_SATURATE,[R1]:s.DST_COLOR,[b1]:s.DST_ALPHA,[T1]:s.ONE_MINUS_SRC_COLOR,[Vp]:s.ONE_MINUS_SRC_ALPHA,[w1]:s.ONE_MINUS_DST_COLOR,[A1]:s.ONE_MINUS_DST_ALPHA,[D1]:s.CONSTANT_COLOR,[U1]:s.ONE_MINUS_CONSTANT_COLOR,[L1]:s.CONSTANT_ALPHA,[N1]:s.ONE_MINUS_CONSTANT_ALPHA};function V(q,Lt,Tt,It,At,yt,Ft,ie,Ne,Ae){if(q===Ur){M===!0&&(wt(s.BLEND),M=!1);return}if(M===!1&&(Rt(s.BLEND),M=!0),q!==_1){if(q!==y||Ae!==A){if((x!==gs||b!==gs)&&(s.blendEquation(s.FUNC_ADD),x=gs,b=gs),Ae)switch(q){case wo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case px:s.blendFunc(s.ONE,s.ONE);break;case mx:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case _x:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case wo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case px:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case mx:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _x:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}w=null,C=null,N=null,I=null,P.set(0,0,0),F=0,y=q,A=Ae}return}At=At||Lt,yt=yt||Tt,Ft=Ft||It,(Lt!==x||At!==b)&&(s.blendEquationSeparate(Ve[Lt],Ve[At]),x=Lt,b=At),(Tt!==w||It!==C||yt!==N||Ft!==I)&&(s.blendFuncSeparate(ve[Tt],ve[It],ve[yt],ve[Ft]),w=Tt,C=It,N=yt,I=Ft),(ie.equals(P)===!1||Ne!==F)&&(s.blendColor(ie.r,ie.g,ie.b,Ne),P.copy(ie),F=Ne),y=q,A=!1}function Un(q,Lt){q.side===qi?wt(s.CULL_FACE):Rt(s.CULL_FACE);let Tt=q.side===ni;Lt&&(Tt=!Tt),be(Tt),q.blending===wo&&q.transparent===!1?V(Ur):V(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),c.setFunc(q.depthFunc),c.setTest(q.depthTest),c.setMask(q.depthWrite),l.setMask(q.colorWrite);const It=q.stencilWrite;f.setTest(It),It&&(f.setMask(q.stencilWriteMask),f.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),f.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),xe(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?Rt(s.SAMPLE_ALPHA_TO_COVERAGE):wt(s.SAMPLE_ALPHA_TO_COVERAGE)}function be(q){U!==q&&(q?s.frontFace(s.CW):s.frontFace(s.CCW),U=q)}function pe(q){q!==d1?(Rt(s.CULL_FACE),q!==G&&(q===dx?s.cullFace(s.BACK):q===p1?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):wt(s.CULL_FACE),G=q}function kt(q){q!==nt&&(z&&s.lineWidth(q),nt=q)}function xe(q,Lt,Tt){q?(Rt(s.POLYGON_OFFSET_FILL),(J!==Lt||ct!==Tt)&&(s.polygonOffset(Lt,Tt),J=Lt,ct=Tt)):wt(s.POLYGON_OFFSET_FILL)}function Zt(q){q?Rt(s.SCISSOR_TEST):wt(s.SCISSOR_TEST)}function re(q){q===void 0&&(q=s.TEXTURE0+lt-1),mt!==q&&(s.activeTexture(q),mt=q)}function on(q,Lt,Tt){Tt===void 0&&(mt===null?Tt=s.TEXTURE0+lt-1:Tt=mt);let It=O[Tt];It===void 0&&(It={type:void 0,texture:void 0},O[Tt]=It),(It.type!==q||It.texture!==Lt)&&(mt!==Tt&&(s.activeTexture(Tt),mt=Tt),s.bindTexture(q,Lt||Mt[q]),It.type=q,It.texture=Lt)}function B(){const q=O[mt];q!==void 0&&q.type!==void 0&&(s.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function R(){try{s.compressedTexImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function it(){try{s.compressedTexImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function pt(){try{s.texSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function vt(){try{s.texSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ft(){try{s.compressedTexSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Pt(){try{s.compressedTexSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ut(){try{s.texStorage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Gt(){try{s.texStorage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Xt(){try{s.texImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Et(){try{s.texImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function zt(q){St.equals(q)===!1&&(s.scissor(q.x,q.y,q.z,q.w),St.copy(q))}function Yt(q){Y.equals(q)===!1&&(s.viewport(q.x,q.y,q.z,q.w),Y.copy(q))}function jt(q,Lt){let Tt=p.get(Lt);Tt===void 0&&(Tt=new WeakMap,p.set(Lt,Tt));let It=Tt.get(q);It===void 0&&(It=s.getUniformBlockIndex(Lt,q.name),Tt.set(q,It))}function Ct(q,Lt){const It=p.get(Lt).get(q);d.get(Lt)!==It&&(s.uniformBlockBinding(Lt,It,q.__bindingPointIndex),d.set(Lt,It))}function ae(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),m={},mt=null,O={},g={},v=new WeakMap,S=[],E=null,M=!1,y=null,x=null,w=null,C=null,b=null,N=null,I=null,P=new De(0,0,0),F=0,A=!1,U=null,G=null,nt=null,J=null,ct=null,St.set(0,0,s.canvas.width,s.canvas.height),Y.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:Rt,disable:wt,bindFramebuffer:ee,drawBuffers:Vt,useProgram:ge,setBlending:V,setMaterial:Un,setFlipSided:be,setCullFace:pe,setLineWidth:kt,setPolygonOffset:xe,setScissorTest:Zt,activeTexture:re,bindTexture:on,unbindTexture:B,compressedTexImage2D:R,compressedTexImage3D:it,texImage2D:Xt,texImage3D:Et,updateUBOMapping:jt,uniformBlockBinding:Ct,texStorage2D:Ut,texStorage3D:Gt,texSubImage2D:pt,texSubImage3D:vt,compressedTexSubImage2D:ft,compressedTexSubImage3D:Pt,scissor:zt,viewport:Yt,reset:ae}}function pD(s,t,e,a,r,l,c){const f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Te,m=new WeakMap;let g;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(B,R){return S?new OffscreenCanvas(B,R):Mf("canvas")}function M(B,R,it){let pt=1;const vt=on(B);if((vt.width>it||vt.height>it)&&(pt=it/Math.max(vt.width,vt.height)),pt<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const ft=Math.floor(pt*vt.width),Pt=Math.floor(pt*vt.height);g===void 0&&(g=E(ft,Pt));const Ut=R?E(ft,Pt):g;return Ut.width=ft,Ut.height=Pt,Ut.getContext("2d").drawImage(B,0,0,ft,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+ft+"x"+Pt+")."),Ut}else return"data"in B&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),B;return B}function y(B){return B.generateMipmaps}function x(B){s.generateMipmap(B)}function w(B){return B.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?s.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function C(B,R,it,pt,vt=!1){if(B!==null){if(s[B]!==void 0)return s[B];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let ft=R;if(R===s.RED&&(it===s.FLOAT&&(ft=s.R32F),it===s.HALF_FLOAT&&(ft=s.R16F),it===s.UNSIGNED_BYTE&&(ft=s.R8)),R===s.RED_INTEGER&&(it===s.UNSIGNED_BYTE&&(ft=s.R8UI),it===s.UNSIGNED_SHORT&&(ft=s.R16UI),it===s.UNSIGNED_INT&&(ft=s.R32UI),it===s.BYTE&&(ft=s.R8I),it===s.SHORT&&(ft=s.R16I),it===s.INT&&(ft=s.R32I)),R===s.RG&&(it===s.FLOAT&&(ft=s.RG32F),it===s.HALF_FLOAT&&(ft=s.RG16F),it===s.UNSIGNED_BYTE&&(ft=s.RG8)),R===s.RG_INTEGER&&(it===s.UNSIGNED_BYTE&&(ft=s.RG8UI),it===s.UNSIGNED_SHORT&&(ft=s.RG16UI),it===s.UNSIGNED_INT&&(ft=s.RG32UI),it===s.BYTE&&(ft=s.RG8I),it===s.SHORT&&(ft=s.RG16I),it===s.INT&&(ft=s.RG32I)),R===s.RGB_INTEGER&&(it===s.UNSIGNED_BYTE&&(ft=s.RGB8UI),it===s.UNSIGNED_SHORT&&(ft=s.RGB16UI),it===s.UNSIGNED_INT&&(ft=s.RGB32UI),it===s.BYTE&&(ft=s.RGB8I),it===s.SHORT&&(ft=s.RGB16I),it===s.INT&&(ft=s.RGB32I)),R===s.RGBA_INTEGER&&(it===s.UNSIGNED_BYTE&&(ft=s.RGBA8UI),it===s.UNSIGNED_SHORT&&(ft=s.RGBA16UI),it===s.UNSIGNED_INT&&(ft=s.RGBA32UI),it===s.BYTE&&(ft=s.RGBA8I),it===s.SHORT&&(ft=s.RGBA16I),it===s.INT&&(ft=s.RGBA32I)),R===s.RGB&&it===s.UNSIGNED_INT_5_9_9_9_REV&&(ft=s.RGB9_E5),R===s.RGBA){const Pt=vt?yf:we.getTransfer(pt);it===s.FLOAT&&(ft=s.RGBA32F),it===s.HALF_FLOAT&&(ft=s.RGBA16F),it===s.UNSIGNED_BYTE&&(ft=Pt===He?s.SRGB8_ALPHA8:s.RGBA8),it===s.UNSIGNED_SHORT_4_4_4_4&&(ft=s.RGBA4),it===s.UNSIGNED_SHORT_5_5_5_1&&(ft=s.RGB5_A1)}return(ft===s.R16F||ft===s.R32F||ft===s.RG16F||ft===s.RG32F||ft===s.RGBA16F||ft===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function b(B,R){let it;return B?R===null||R===As||R===su?it=s.DEPTH24_STENCIL8:R===Ha?it=s.DEPTH32F_STENCIL8:R===ru&&(it=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===As||R===su?it=s.DEPTH_COMPONENT24:R===Ha?it=s.DEPTH_COMPONENT32F:R===ru&&(it=s.DEPTH_COMPONENT16),it}function N(B,R){return y(B)===!0||B.isFramebufferTexture&&B.minFilter!==Zi&&B.minFilter!==sa?Math.log2(Math.max(R.width,R.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?R.mipmaps.length:1}function I(B){const R=B.target;R.removeEventListener("dispose",I),F(R),R.isVideoTexture&&m.delete(R)}function P(B){const R=B.target;R.removeEventListener("dispose",P),U(R)}function F(B){const R=a.get(B);if(R.__webglInit===void 0)return;const it=B.source,pt=v.get(it);if(pt){const vt=pt[R.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&A(B),Object.keys(pt).length===0&&v.delete(it)}a.remove(B)}function A(B){const R=a.get(B);s.deleteTexture(R.__webglTexture);const it=B.source,pt=v.get(it);delete pt[R.__cacheKey],c.memory.textures--}function U(B){const R=a.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),a.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(R.__webglFramebuffer[pt]))for(let vt=0;vt<R.__webglFramebuffer[pt].length;vt++)s.deleteFramebuffer(R.__webglFramebuffer[pt][vt]);else s.deleteFramebuffer(R.__webglFramebuffer[pt]);R.__webglDepthbuffer&&s.deleteRenderbuffer(R.__webglDepthbuffer[pt])}else{if(Array.isArray(R.__webglFramebuffer))for(let pt=0;pt<R.__webglFramebuffer.length;pt++)s.deleteFramebuffer(R.__webglFramebuffer[pt]);else s.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&s.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&s.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let pt=0;pt<R.__webglColorRenderbuffer.length;pt++)R.__webglColorRenderbuffer[pt]&&s.deleteRenderbuffer(R.__webglColorRenderbuffer[pt]);R.__webglDepthRenderbuffer&&s.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const it=B.textures;for(let pt=0,vt=it.length;pt<vt;pt++){const ft=a.get(it[pt]);ft.__webglTexture&&(s.deleteTexture(ft.__webglTexture),c.memory.textures--),a.remove(it[pt])}a.remove(B)}let G=0;function nt(){G=0}function J(){const B=G;return B>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+r.maxTextures),G+=1,B}function ct(B){const R=[];return R.push(B.wrapS),R.push(B.wrapT),R.push(B.wrapR||0),R.push(B.magFilter),R.push(B.minFilter),R.push(B.anisotropy),R.push(B.internalFormat),R.push(B.format),R.push(B.type),R.push(B.generateMipmaps),R.push(B.premultiplyAlpha),R.push(B.flipY),R.push(B.unpackAlignment),R.push(B.colorSpace),R.join()}function lt(B,R){const it=a.get(B);if(B.isVideoTexture&&Zt(B),B.isRenderTargetTexture===!1&&B.version>0&&it.__version!==B.version){const pt=B.image;if(pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(it,B,R);return}}e.bindTexture(s.TEXTURE_2D,it.__webglTexture,s.TEXTURE0+R)}function z(B,R){const it=a.get(B);if(B.version>0&&it.__version!==B.version){Mt(it,B,R);return}e.bindTexture(s.TEXTURE_2D_ARRAY,it.__webglTexture,s.TEXTURE0+R)}function k(B,R){const it=a.get(B);if(B.version>0&&it.__version!==B.version){Mt(it,B,R);return}e.bindTexture(s.TEXTURE_3D,it.__webglTexture,s.TEXTURE0+R)}function W(B,R){const it=a.get(B);if(B.version>0&&it.__version!==B.version){Rt(it,B,R);return}e.bindTexture(s.TEXTURE_CUBE_MAP,it.__webglTexture,s.TEXTURE0+R)}const mt={[Jp]:s.REPEAT,[xs]:s.CLAMP_TO_EDGE,[$p]:s.MIRRORED_REPEAT},O={[Zi]:s.NEAREST,[V1]:s.NEAREST_MIPMAP_NEAREST,[Ic]:s.NEAREST_MIPMAP_LINEAR,[sa]:s.LINEAR,[Kd]:s.LINEAR_MIPMAP_NEAREST,[ys]:s.LINEAR_MIPMAP_LINEAR},Z={[q1]:s.NEVER,[J1]:s.ALWAYS,[Y1]:s.LESS,[lS]:s.LEQUAL,[j1]:s.EQUAL,[Q1]:s.GEQUAL,[Z1]:s.GREATER,[K1]:s.NOTEQUAL};function gt(B,R){if(R.type===Ha&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===sa||R.magFilter===Kd||R.magFilter===Ic||R.magFilter===ys||R.minFilter===sa||R.minFilter===Kd||R.minFilter===Ic||R.minFilter===ys)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(B,s.TEXTURE_WRAP_S,mt[R.wrapS]),s.texParameteri(B,s.TEXTURE_WRAP_T,mt[R.wrapT]),(B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY)&&s.texParameteri(B,s.TEXTURE_WRAP_R,mt[R.wrapR]),s.texParameteri(B,s.TEXTURE_MAG_FILTER,O[R.magFilter]),s.texParameteri(B,s.TEXTURE_MIN_FILTER,O[R.minFilter]),R.compareFunction&&(s.texParameteri(B,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(B,s.TEXTURE_COMPARE_FUNC,Z[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Zi||R.minFilter!==Ic&&R.minFilter!==ys||R.type===Ha&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||a.get(R).__currentAnisotropy){const it=t.get("EXT_texture_filter_anisotropic");s.texParameterf(B,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,r.getMaxAnisotropy())),a.get(R).__currentAnisotropy=R.anisotropy}}}function St(B,R){let it=!1;B.__webglInit===void 0&&(B.__webglInit=!0,R.addEventListener("dispose",I));const pt=R.source;let vt=v.get(pt);vt===void 0&&(vt={},v.set(pt,vt));const ft=ct(R);if(ft!==B.__cacheKey){vt[ft]===void 0&&(vt[ft]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,it=!0),vt[ft].usedTimes++;const Pt=vt[B.__cacheKey];Pt!==void 0&&(vt[B.__cacheKey].usedTimes--,Pt.usedTimes===0&&A(R)),B.__cacheKey=ft,B.__webglTexture=vt[ft].texture}return it}function Y(B,R,it){return Math.floor(Math.floor(B/it)/R)}function ut(B,R,it,pt){const ft=B.updateRanges;if(ft.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,R.width,R.height,it,pt,R.data);else{ft.sort((Et,zt)=>Et.start-zt.start);let Pt=0;for(let Et=1;Et<ft.length;Et++){const zt=ft[Pt],Yt=ft[Et],jt=zt.start+zt.count,Ct=Y(Yt.start,R.width,4),ae=Y(zt.start,R.width,4);Yt.start<=jt+1&&Ct===ae&&Y(Yt.start+Yt.count-1,R.width,4)===Ct?zt.count=Math.max(zt.count,Yt.start+Yt.count-zt.start):(++Pt,ft[Pt]=Yt)}ft.length=Pt+1;const Ut=s.getParameter(s.UNPACK_ROW_LENGTH),Gt=s.getParameter(s.UNPACK_SKIP_PIXELS),Xt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,R.width);for(let Et=0,zt=ft.length;Et<zt;Et++){const Yt=ft[Et],jt=Math.floor(Yt.start/4),Ct=Math.ceil(Yt.count/4),ae=jt%R.width,q=Math.floor(jt/R.width),Lt=Ct,Tt=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ae),s.pixelStorei(s.UNPACK_SKIP_ROWS,q),e.texSubImage2D(s.TEXTURE_2D,0,ae,q,Lt,Tt,it,pt,R.data)}B.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Ut),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Gt),s.pixelStorei(s.UNPACK_SKIP_ROWS,Xt)}}function Mt(B,R,it){let pt=s.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(pt=s.TEXTURE_2D_ARRAY),R.isData3DTexture&&(pt=s.TEXTURE_3D);const vt=St(B,R),ft=R.source;e.bindTexture(pt,B.__webglTexture,s.TEXTURE0+it);const Pt=a.get(ft);if(ft.version!==Pt.__version||vt===!0){e.activeTexture(s.TEXTURE0+it);const Ut=we.getPrimaries(we.workingColorSpace),Gt=R.colorSpace===Rr?null:we.getPrimaries(R.colorSpace),Xt=R.colorSpace===Rr||Ut===Gt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,R.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,R.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let Et=M(R.image,!1,r.maxTextureSize);Et=re(R,Et);const zt=l.convert(R.format,R.colorSpace),Yt=l.convert(R.type);let jt=C(R.internalFormat,zt,Yt,R.colorSpace,R.isVideoTexture);gt(pt,R);let Ct;const ae=R.mipmaps,q=R.isVideoTexture!==!0,Lt=Pt.__version===void 0||vt===!0,Tt=ft.dataReady,It=N(R,Et);if(R.isDepthTexture)jt=b(R.format===lu,R.type),Lt&&(q?e.texStorage2D(s.TEXTURE_2D,1,jt,Et.width,Et.height):e.texImage2D(s.TEXTURE_2D,0,jt,Et.width,Et.height,0,zt,Yt,null));else if(R.isDataTexture)if(ae.length>0){q&&Lt&&e.texStorage2D(s.TEXTURE_2D,It,jt,ae[0].width,ae[0].height);for(let At=0,yt=ae.length;At<yt;At++)Ct=ae[At],q?Tt&&e.texSubImage2D(s.TEXTURE_2D,At,0,0,Ct.width,Ct.height,zt,Yt,Ct.data):e.texImage2D(s.TEXTURE_2D,At,jt,Ct.width,Ct.height,0,zt,Yt,Ct.data);R.generateMipmaps=!1}else q?(Lt&&e.texStorage2D(s.TEXTURE_2D,It,jt,Et.width,Et.height),Tt&&ut(R,Et,zt,Yt)):e.texImage2D(s.TEXTURE_2D,0,jt,Et.width,Et.height,0,zt,Yt,Et.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){q&&Lt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,It,jt,ae[0].width,ae[0].height,Et.depth);for(let At=0,yt=ae.length;At<yt;At++)if(Ct=ae[At],R.format!==ji)if(zt!==null)if(q){if(Tt)if(R.layerUpdates.size>0){const Ft=Vx(Ct.width,Ct.height,R.format,R.type);for(const ie of R.layerUpdates){const Ne=Ct.data.subarray(ie*Ft/Ct.data.BYTES_PER_ELEMENT,(ie+1)*Ft/Ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,At,0,0,ie,Ct.width,Ct.height,1,zt,Ne)}R.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,At,0,0,0,Ct.width,Ct.height,Et.depth,zt,Ct.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,At,jt,Ct.width,Ct.height,Et.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?Tt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,At,0,0,0,Ct.width,Ct.height,Et.depth,zt,Yt,Ct.data):e.texImage3D(s.TEXTURE_2D_ARRAY,At,jt,Ct.width,Ct.height,Et.depth,0,zt,Yt,Ct.data)}else{q&&Lt&&e.texStorage2D(s.TEXTURE_2D,It,jt,ae[0].width,ae[0].height);for(let At=0,yt=ae.length;At<yt;At++)Ct=ae[At],R.format!==ji?zt!==null?q?Tt&&e.compressedTexSubImage2D(s.TEXTURE_2D,At,0,0,Ct.width,Ct.height,zt,Ct.data):e.compressedTexImage2D(s.TEXTURE_2D,At,jt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?Tt&&e.texSubImage2D(s.TEXTURE_2D,At,0,0,Ct.width,Ct.height,zt,Yt,Ct.data):e.texImage2D(s.TEXTURE_2D,At,jt,Ct.width,Ct.height,0,zt,Yt,Ct.data)}else if(R.isDataArrayTexture)if(q){if(Lt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,It,jt,Et.width,Et.height,Et.depth),Tt)if(R.layerUpdates.size>0){const At=Vx(Et.width,Et.height,R.format,R.type);for(const yt of R.layerUpdates){const Ft=Et.data.subarray(yt*At/Et.data.BYTES_PER_ELEMENT,(yt+1)*At/Et.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,yt,Et.width,Et.height,1,zt,Yt,Ft)}R.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,zt,Yt,Et.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,jt,Et.width,Et.height,Et.depth,0,zt,Yt,Et.data);else if(R.isData3DTexture)q?(Lt&&e.texStorage3D(s.TEXTURE_3D,It,jt,Et.width,Et.height,Et.depth),Tt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,zt,Yt,Et.data)):e.texImage3D(s.TEXTURE_3D,0,jt,Et.width,Et.height,Et.depth,0,zt,Yt,Et.data);else if(R.isFramebufferTexture){if(Lt)if(q)e.texStorage2D(s.TEXTURE_2D,It,jt,Et.width,Et.height);else{let At=Et.width,yt=Et.height;for(let Ft=0;Ft<It;Ft++)e.texImage2D(s.TEXTURE_2D,Ft,jt,At,yt,0,zt,Yt,null),At>>=1,yt>>=1}}else if(ae.length>0){if(q&&Lt){const At=on(ae[0]);e.texStorage2D(s.TEXTURE_2D,It,jt,At.width,At.height)}for(let At=0,yt=ae.length;At<yt;At++)Ct=ae[At],q?Tt&&e.texSubImage2D(s.TEXTURE_2D,At,0,0,zt,Yt,Ct):e.texImage2D(s.TEXTURE_2D,At,jt,zt,Yt,Ct);R.generateMipmaps=!1}else if(q){if(Lt){const At=on(Et);e.texStorage2D(s.TEXTURE_2D,It,jt,At.width,At.height)}Tt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,zt,Yt,Et)}else e.texImage2D(s.TEXTURE_2D,0,jt,zt,Yt,Et);y(R)&&x(pt),Pt.__version=ft.version,R.onUpdate&&R.onUpdate(R)}B.__version=R.version}function Rt(B,R,it){if(R.image.length!==6)return;const pt=St(B,R),vt=R.source;e.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+it);const ft=a.get(vt);if(vt.version!==ft.__version||pt===!0){e.activeTexture(s.TEXTURE0+it);const Pt=we.getPrimaries(we.workingColorSpace),Ut=R.colorSpace===Rr?null:we.getPrimaries(R.colorSpace),Gt=R.colorSpace===Rr||Pt===Ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,R.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,R.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);const Xt=R.isCompressedTexture||R.image[0].isCompressedTexture,Et=R.image[0]&&R.image[0].isDataTexture,zt=[];for(let yt=0;yt<6;yt++)!Xt&&!Et?zt[yt]=M(R.image[yt],!0,r.maxCubemapSize):zt[yt]=Et?R.image[yt].image:R.image[yt],zt[yt]=re(R,zt[yt]);const Yt=zt[0],jt=l.convert(R.format,R.colorSpace),Ct=l.convert(R.type),ae=C(R.internalFormat,jt,Ct,R.colorSpace),q=R.isVideoTexture!==!0,Lt=ft.__version===void 0||pt===!0,Tt=vt.dataReady;let It=N(R,Yt);gt(s.TEXTURE_CUBE_MAP,R);let At;if(Xt){q&&Lt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,It,ae,Yt.width,Yt.height);for(let yt=0;yt<6;yt++){At=zt[yt].mipmaps;for(let Ft=0;Ft<At.length;Ft++){const ie=At[Ft];R.format!==ji?jt!==null?q?Tt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ft,0,0,ie.width,ie.height,jt,ie.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ft,ae,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?Tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ft,0,0,ie.width,ie.height,jt,Ct,ie.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ft,ae,ie.width,ie.height,0,jt,Ct,ie.data)}}}else{if(At=R.mipmaps,q&&Lt){At.length>0&&It++;const yt=on(zt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,It,ae,yt.width,yt.height)}for(let yt=0;yt<6;yt++)if(Et){q?Tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,zt[yt].width,zt[yt].height,jt,Ct,zt[yt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ae,zt[yt].width,zt[yt].height,0,jt,Ct,zt[yt].data);for(let Ft=0;Ft<At.length;Ft++){const Ne=At[Ft].image[yt].image;q?Tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ft+1,0,0,Ne.width,Ne.height,jt,Ct,Ne.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ft+1,ae,Ne.width,Ne.height,0,jt,Ct,Ne.data)}}else{q?Tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,jt,Ct,zt[yt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ae,jt,Ct,zt[yt]);for(let Ft=0;Ft<At.length;Ft++){const ie=At[Ft];q?Tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ft+1,0,0,jt,Ct,ie.image[yt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ft+1,ae,jt,Ct,ie.image[yt])}}}y(R)&&x(s.TEXTURE_CUBE_MAP),ft.__version=vt.version,R.onUpdate&&R.onUpdate(R)}B.__version=R.version}function wt(B,R,it,pt,vt,ft){const Pt=l.convert(it.format,it.colorSpace),Ut=l.convert(it.type),Gt=C(it.internalFormat,Pt,Ut,it.colorSpace),Xt=a.get(R),Et=a.get(it);if(Et.__renderTarget=R,!Xt.__hasExternalTextures){const zt=Math.max(1,R.width>>ft),Yt=Math.max(1,R.height>>ft);vt===s.TEXTURE_3D||vt===s.TEXTURE_2D_ARRAY?e.texImage3D(vt,ft,Gt,zt,Yt,R.depth,0,Pt,Ut,null):e.texImage2D(vt,ft,Gt,zt,Yt,0,Pt,Ut,null)}e.bindFramebuffer(s.FRAMEBUFFER,B),xe(R)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pt,vt,Et.__webglTexture,0,kt(R)):(vt===s.TEXTURE_2D||vt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pt,vt,Et.__webglTexture,ft),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ee(B,R,it){if(s.bindRenderbuffer(s.RENDERBUFFER,B),R.depthBuffer){const pt=R.depthTexture,vt=pt&&pt.isDepthTexture?pt.type:null,ft=b(R.stencilBuffer,vt),Pt=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ut=kt(R);xe(R)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ut,ft,R.width,R.height):it?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ut,ft,R.width,R.height):s.renderbufferStorage(s.RENDERBUFFER,ft,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Pt,s.RENDERBUFFER,B)}else{const pt=R.textures;for(let vt=0;vt<pt.length;vt++){const ft=pt[vt],Pt=l.convert(ft.format,ft.colorSpace),Ut=l.convert(ft.type),Gt=C(ft.internalFormat,Pt,Ut,ft.colorSpace),Xt=kt(R);it&&xe(R)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Xt,Gt,R.width,R.height):xe(R)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Xt,Gt,R.width,R.height):s.renderbufferStorage(s.RENDERBUFFER,Gt,R.width,R.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Vt(B,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,B),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pt=a.get(R.depthTexture);pt.__renderTarget=R,(!pt.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),lt(R.depthTexture,0);const vt=pt.__webglTexture,ft=kt(R);if(R.depthTexture.format===ou)xe(R)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,vt,0,ft):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,vt,0);else if(R.depthTexture.format===lu)xe(R)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,vt,0,ft):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,vt,0);else throw new Error("Unknown depthTexture format")}function ge(B){const R=a.get(B),it=B.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==B.depthTexture){const pt=B.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),pt){const vt=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,pt.removeEventListener("dispose",vt)};pt.addEventListener("dispose",vt),R.__depthDisposeCallback=vt}R.__boundDepthTexture=pt}if(B.depthTexture&&!R.__autoAllocateDepthBuffer){if(it)throw new Error("target.depthTexture not supported in Cube render targets");const pt=B.texture.mipmaps;pt&&pt.length>0?Vt(R.__webglFramebuffer[0],B):Vt(R.__webglFramebuffer,B)}else if(it){R.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(e.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer[pt]),R.__webglDepthbuffer[pt]===void 0)R.__webglDepthbuffer[pt]=s.createRenderbuffer(),ee(R.__webglDepthbuffer[pt],B,!1);else{const vt=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ft=R.__webglDepthbuffer[pt];s.bindRenderbuffer(s.RENDERBUFFER,ft),s.framebufferRenderbuffer(s.FRAMEBUFFER,vt,s.RENDERBUFFER,ft)}}else{const pt=B.texture.mipmaps;if(pt&&pt.length>0?e.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=s.createRenderbuffer(),ee(R.__webglDepthbuffer,B,!1);else{const vt=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ft=R.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ft),s.framebufferRenderbuffer(s.FRAMEBUFFER,vt,s.RENDERBUFFER,ft)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ve(B,R,it){const pt=a.get(B);R!==void 0&&wt(pt.__webglFramebuffer,B,B.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),it!==void 0&&ge(B)}function ve(B){const R=B.texture,it=a.get(B),pt=a.get(R);B.addEventListener("dispose",P);const vt=B.textures,ft=B.isWebGLCubeRenderTarget===!0,Pt=vt.length>1;if(Pt||(pt.__webglTexture===void 0&&(pt.__webglTexture=s.createTexture()),pt.__version=R.version,c.memory.textures++),ft){it.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(R.mipmaps&&R.mipmaps.length>0){it.__webglFramebuffer[Ut]=[];for(let Gt=0;Gt<R.mipmaps.length;Gt++)it.__webglFramebuffer[Ut][Gt]=s.createFramebuffer()}else it.__webglFramebuffer[Ut]=s.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){it.__webglFramebuffer=[];for(let Ut=0;Ut<R.mipmaps.length;Ut++)it.__webglFramebuffer[Ut]=s.createFramebuffer()}else it.__webglFramebuffer=s.createFramebuffer();if(Pt)for(let Ut=0,Gt=vt.length;Ut<Gt;Ut++){const Xt=a.get(vt[Ut]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=s.createTexture(),c.memory.textures++)}if(B.samples>0&&xe(B)===!1){it.__webglMultisampledFramebuffer=s.createFramebuffer(),it.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,it.__webglMultisampledFramebuffer);for(let Ut=0;Ut<vt.length;Ut++){const Gt=vt[Ut];it.__webglColorRenderbuffer[Ut]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,it.__webglColorRenderbuffer[Ut]);const Xt=l.convert(Gt.format,Gt.colorSpace),Et=l.convert(Gt.type),zt=C(Gt.internalFormat,Xt,Et,Gt.colorSpace,B.isXRRenderTarget===!0),Yt=kt(B);s.renderbufferStorageMultisample(s.RENDERBUFFER,Yt,zt,B.width,B.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ut,s.RENDERBUFFER,it.__webglColorRenderbuffer[Ut])}s.bindRenderbuffer(s.RENDERBUFFER,null),B.depthBuffer&&(it.__webglDepthRenderbuffer=s.createRenderbuffer(),ee(it.__webglDepthRenderbuffer,B,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ft){e.bindTexture(s.TEXTURE_CUBE_MAP,pt.__webglTexture),gt(s.TEXTURE_CUBE_MAP,R);for(let Ut=0;Ut<6;Ut++)if(R.mipmaps&&R.mipmaps.length>0)for(let Gt=0;Gt<R.mipmaps.length;Gt++)wt(it.__webglFramebuffer[Ut][Gt],B,R,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,Gt);else wt(it.__webglFramebuffer[Ut],B,R,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);y(R)&&x(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let Ut=0,Gt=vt.length;Ut<Gt;Ut++){const Xt=vt[Ut],Et=a.get(Xt);e.bindTexture(s.TEXTURE_2D,Et.__webglTexture),gt(s.TEXTURE_2D,Xt),wt(it.__webglFramebuffer,B,Xt,s.COLOR_ATTACHMENT0+Ut,s.TEXTURE_2D,0),y(Xt)&&x(s.TEXTURE_2D)}e.unbindTexture()}else{let Ut=s.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Ut=B.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Ut,pt.__webglTexture),gt(Ut,R),R.mipmaps&&R.mipmaps.length>0)for(let Gt=0;Gt<R.mipmaps.length;Gt++)wt(it.__webglFramebuffer[Gt],B,R,s.COLOR_ATTACHMENT0,Ut,Gt);else wt(it.__webglFramebuffer,B,R,s.COLOR_ATTACHMENT0,Ut,0);y(R)&&x(Ut),e.unbindTexture()}B.depthBuffer&&ge(B)}function V(B){const R=B.textures;for(let it=0,pt=R.length;it<pt;it++){const vt=R[it];if(y(vt)){const ft=w(B),Pt=a.get(vt).__webglTexture;e.bindTexture(ft,Pt),x(ft),e.unbindTexture()}}}const Un=[],be=[];function pe(B){if(B.samples>0){if(xe(B)===!1){const R=B.textures,it=B.width,pt=B.height;let vt=s.COLOR_BUFFER_BIT;const ft=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pt=a.get(B),Ut=R.length>1;if(Ut)for(let Xt=0;Xt<R.length;Xt++)e.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Xt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Xt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);const Gt=B.texture.mipmaps;Gt&&Gt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Xt=0;Xt<R.length;Xt++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(vt|=s.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(vt|=s.STENCIL_BUFFER_BIT)),Ut){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Pt.__webglColorRenderbuffer[Xt]);const Et=a.get(R[Xt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Et,0)}s.blitFramebuffer(0,0,it,pt,0,0,it,pt,vt,s.NEAREST),d===!0&&(Un.length=0,be.length=0,Un.push(s.COLOR_ATTACHMENT0+Xt),B.depthBuffer&&B.resolveDepthBuffer===!1&&(Un.push(ft),be.push(ft),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,be)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Un))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ut)for(let Xt=0;Xt<R.length;Xt++){e.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Xt,s.RENDERBUFFER,Pt.__webglColorRenderbuffer[Xt]);const Et=a.get(R[Xt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Xt,s.TEXTURE_2D,Et,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&d){const R=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[R])}}}function kt(B){return Math.min(r.maxSamples,B.samples)}function xe(B){const R=a.get(B);return B.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Zt(B){const R=c.render.frame;m.get(B)!==R&&(m.set(B,R),B.update())}function re(B,R){const it=B.colorSpace,pt=B.format,vt=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||it!==Io&&it!==Rr&&(we.getTransfer(it)===He?(pt!==ji||vt!==ua)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",it)),R}function on(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(p.width=B.naturalWidth||B.width,p.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(p.width=B.displayWidth,p.height=B.displayHeight):(p.width=B.width,p.height=B.height),p}this.allocateTextureUnit=J,this.resetTextureUnits=nt,this.setTexture2D=lt,this.setTexture2DArray=z,this.setTexture3D=k,this.setTextureCube=W,this.rebindTextures=Ve,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=xe}function mD(s,t){function e(a,r=Rr){let l;const c=we.getTransfer(r);if(a===ua)return s.UNSIGNED_BYTE;if(a===Jm)return s.UNSIGNED_SHORT_4_4_4_4;if(a===$m)return s.UNSIGNED_SHORT_5_5_5_1;if(a===eS)return s.UNSIGNED_INT_5_9_9_9_REV;if(a===$y)return s.BYTE;if(a===tS)return s.SHORT;if(a===ru)return s.UNSIGNED_SHORT;if(a===Qm)return s.INT;if(a===As)return s.UNSIGNED_INT;if(a===Ha)return s.FLOAT;if(a===xu)return s.HALF_FLOAT;if(a===nS)return s.ALPHA;if(a===iS)return s.RGB;if(a===ji)return s.RGBA;if(a===ou)return s.DEPTH_COMPONENT;if(a===lu)return s.DEPTH_STENCIL;if(a===aS)return s.RED;if(a===t_)return s.RED_INTEGER;if(a===rS)return s.RG;if(a===e_)return s.RG_INTEGER;if(a===n_)return s.RGBA_INTEGER;if(a===uf||a===cf||a===ff||a===hf)if(c===He)if(l=t.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(a===uf)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===cf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===ff)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===hf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=t.get("WEBGL_compressed_texture_s3tc"),l!==null){if(a===uf)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===cf)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===ff)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===hf)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===tm||a===em||a===nm||a===im)if(l=t.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(a===tm)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===em)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===nm)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===im)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===am||a===rm||a===sm)if(l=t.get("WEBGL_compressed_texture_etc"),l!==null){if(a===am||a===rm)return c===He?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(a===sm)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===om||a===lm||a===um||a===cm||a===fm||a===hm||a===dm||a===pm||a===mm||a===_m||a===gm||a===vm||a===xm||a===ym)if(l=t.get("WEBGL_compressed_texture_astc"),l!==null){if(a===om)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===lm)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===um)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===cm)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===fm)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===hm)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===dm)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===pm)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===mm)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===_m)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===gm)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===vm)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===xm)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===ym)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===df||a===Sm||a===Mm)if(l=t.get("EXT_texture_compression_bptc"),l!==null){if(a===df)return c===He?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Sm)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Mm)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===sS||a===Em||a===Tm||a===bm)if(l=t.get("EXT_texture_compression_rgtc"),l!==null){if(a===df)return l.COMPRESSED_RED_RGTC1_EXT;if(a===Em)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Tm)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===bm)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===su?s.UNSIGNED_INT_24_8:s[a]!==void 0?s[a]:null}return{convert:e}}const _D=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gD=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class vD{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,a){if(this.texture===null){const r=new ii,l=t.properties.get(r);l.__webglTexture=e.texture,(e.depthNear!==a.depthNear||e.depthFar!==a.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,a=new zr({vertexShader:_D,fragmentShader:gD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ei(new Pf(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xD extends qo{constructor(t,e){super();const a=this;let r=null,l=1,c=null,f="local-floor",d=1,p=null,m=null,g=null,v=null,S=null,E=null;const M=new vD,y=e.getContextAttributes();let x=null,w=null;const C=[],b=[],N=new Te;let I=null;const P=new yi;P.viewport=new Ge;const F=new yi;F.viewport=new Ge;const A=[P,F],U=new FA;let G=null,nt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ut=C[Y];return ut===void 0&&(ut=new xp,C[Y]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(Y){let ut=C[Y];return ut===void 0&&(ut=new xp,C[Y]=ut),ut.getGripSpace()},this.getHand=function(Y){let ut=C[Y];return ut===void 0&&(ut=new xp,C[Y]=ut),ut.getHandSpace()};function J(Y){const ut=b.indexOf(Y.inputSource);if(ut===-1)return;const Mt=C[ut];Mt!==void 0&&(Mt.update(Y.inputSource,Y.frame,p||c),Mt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function ct(){r.removeEventListener("select",J),r.removeEventListener("selectstart",J),r.removeEventListener("selectend",J),r.removeEventListener("squeeze",J),r.removeEventListener("squeezestart",J),r.removeEventListener("squeezeend",J),r.removeEventListener("end",ct),r.removeEventListener("inputsourceschange",lt);for(let Y=0;Y<C.length;Y++){const ut=b[Y];ut!==null&&(b[Y]=null,C[Y].disconnect(ut))}G=null,nt=null,M.reset(),t.setRenderTarget(x),S=null,v=null,g=null,r=null,w=null,St.stop(),a.isPresenting=!1,t.setPixelRatio(I),t.setSize(N.width,N.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){l=Y,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){f=Y,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(Y){p=Y},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return g},this.getFrame=function(){return E},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(x=t.getRenderTarget(),r.addEventListener("select",J),r.addEventListener("selectstart",J),r.addEventListener("selectend",J),r.addEventListener("squeeze",J),r.addEventListener("squeezestart",J),r.addEventListener("squeezeend",J),r.addEventListener("end",ct),r.addEventListener("inputsourceschange",lt),y.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(N),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Rt=null,wt=null;y.depth&&(wt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Mt=y.stencil?lu:ou,Rt=y.stencil?su:As);const ee={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:l};g=new XRWebGLBinding(r,e),v=g.createProjectionLayer(ee),r.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),w=new Rs(v.textureWidth,v.textureHeight,{format:ji,type:ua,depthTexture:new vS(v.textureWidth,v.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Mt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(r,e,Mt),r.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),w=new Rs(S.framebufferWidth,S.framebufferHeight,{format:ji,type:ua,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(d),p=null,c=await r.requestReferenceSpace(f),St.setContext(r),St.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function lt(Y){for(let ut=0;ut<Y.removed.length;ut++){const Mt=Y.removed[ut],Rt=b.indexOf(Mt);Rt>=0&&(b[Rt]=null,C[Rt].disconnect(Mt))}for(let ut=0;ut<Y.added.length;ut++){const Mt=Y.added[ut];let Rt=b.indexOf(Mt);if(Rt===-1){for(let ee=0;ee<C.length;ee++)if(ee>=b.length){b.push(Mt),Rt=ee;break}else if(b[ee]===null){b[ee]=Mt,Rt=ee;break}if(Rt===-1)break}const wt=C[Rt];wt&&wt.connect(Mt)}}const z=new $,k=new $;function W(Y,ut,Mt){z.setFromMatrixPosition(ut.matrixWorld),k.setFromMatrixPosition(Mt.matrixWorld);const Rt=z.distanceTo(k),wt=ut.projectionMatrix.elements,ee=Mt.projectionMatrix.elements,Vt=wt[14]/(wt[10]-1),ge=wt[14]/(wt[10]+1),Ve=(wt[9]+1)/wt[5],ve=(wt[9]-1)/wt[5],V=(wt[8]-1)/wt[0],Un=(ee[8]+1)/ee[0],be=Vt*V,pe=Vt*Un,kt=Rt/(-V+Un),xe=kt*-V;if(ut.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(xe),Y.translateZ(kt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),wt[10]===-1)Y.projectionMatrix.copy(ut.projectionMatrix),Y.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const Zt=Vt+kt,re=ge+kt,on=be-xe,B=pe+(Rt-xe),R=Ve*ge/re*Zt,it=ve*ge/re*Zt;Y.projectionMatrix.makePerspective(on,B,R,it,Zt,re),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function mt(Y,ut){ut===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ut.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let ut=Y.near,Mt=Y.far;M.texture!==null&&(M.depthNear>0&&(ut=M.depthNear),M.depthFar>0&&(Mt=M.depthFar)),U.near=F.near=P.near=ut,U.far=F.far=P.far=Mt,(G!==U.near||nt!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),G=U.near,nt=U.far),P.layers.mask=Y.layers.mask|2,F.layers.mask=Y.layers.mask|4,U.layers.mask=P.layers.mask|F.layers.mask;const Rt=Y.parent,wt=U.cameras;mt(U,Rt);for(let ee=0;ee<wt.length;ee++)mt(wt[ee],Rt);wt.length===2?W(U,P,F):U.projectionMatrix.copy(P.projectionMatrix),O(Y,U,Rt)};function O(Y,ut,Mt){Mt===null?Y.matrix.copy(ut.matrixWorld):(Y.matrix.copy(Mt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ut.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ut.projectionMatrix),Y.projectionMatrixInverse.copy(ut.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Am*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(v===null&&S===null))return d},this.setFoveation=function(Y){d=Y,v!==null&&(v.fixedFoveation=Y),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Y)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(U)};let Z=null;function gt(Y,ut){if(m=ut.getViewerPose(p||c),E=ut,m!==null){const Mt=m.views;S!==null&&(t.setRenderTargetFramebuffer(w,S.framebuffer),t.setRenderTarget(w));let Rt=!1;Mt.length!==U.cameras.length&&(U.cameras.length=0,Rt=!0);for(let Vt=0;Vt<Mt.length;Vt++){const ge=Mt[Vt];let Ve=null;if(S!==null)Ve=S.getViewport(ge);else{const V=g.getViewSubImage(v,ge);Ve=V.viewport,Vt===0&&(t.setRenderTargetTextures(w,V.colorTexture,V.depthStencilTexture),t.setRenderTarget(w))}let ve=A[Vt];ve===void 0&&(ve=new yi,ve.layers.enable(Vt),ve.viewport=new Ge,A[Vt]=ve),ve.matrix.fromArray(ge.transform.matrix),ve.matrix.decompose(ve.position,ve.quaternion,ve.scale),ve.projectionMatrix.fromArray(ge.projectionMatrix),ve.projectionMatrixInverse.copy(ve.projectionMatrix).invert(),ve.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),Vt===0&&(U.matrix.copy(ve.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Rt===!0&&U.cameras.push(ve)}const wt=r.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){const Vt=g.getDepthInformation(Mt[0]);Vt&&Vt.isValid&&Vt.texture&&M.init(t,Vt,r.renderState)}}for(let Mt=0;Mt<C.length;Mt++){const Rt=b[Mt],wt=C[Mt];Rt!==null&&wt!==void 0&&wt.update(Rt,ut,p||c)}Z&&Z(Y,ut),ut.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:ut}),E=null}const St=new yS;St.setAnimationLoop(gt),this.setAnimationLoop=function(Y){Z=Y},this.dispose=function(){}}}const cs=new ca,yD=new Je;function SD(s,t){function e(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function a(y,x){x.color.getRGB(y.fogColor.value,mS(s)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function r(y,x,w,C,b){x.isMeshBasicMaterial||x.isMeshLambertMaterial?l(y,x):x.isMeshToonMaterial?(l(y,x),g(y,x)):x.isMeshPhongMaterial?(l(y,x),m(y,x)):x.isMeshStandardMaterial?(l(y,x),v(y,x),x.isMeshPhysicalMaterial&&S(y,x,b)):x.isMeshMatcapMaterial?(l(y,x),E(y,x)):x.isMeshDepthMaterial?l(y,x):x.isMeshDistanceMaterial?(l(y,x),M(y,x)):x.isMeshNormalMaterial?l(y,x):x.isLineBasicMaterial?(c(y,x),x.isLineDashedMaterial&&f(y,x)):x.isPointsMaterial?d(y,x,w,C):x.isSpriteMaterial?p(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,e(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,e(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,e(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===ni&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,e(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===ni&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,e(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,e(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,e(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const w=t.get(x),C=w.envMap,b=w.envMapRotation;C&&(y.envMap.value=C,cs.copy(b),cs.x*=-1,cs.y*=-1,cs.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(cs.y*=-1,cs.z*=-1),y.envMapRotation.value.setFromMatrix4(yD.makeRotationFromEuler(cs)),y.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,e(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,e(x.aoMap,y.aoMapTransform))}function c(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,e(x.map,y.mapTransform))}function f(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function d(y,x,w,C){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*w,y.scale.value=C*.5,x.map&&(y.map.value=x.map,e(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,e(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function p(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,e(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,e(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function m(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function g(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function v(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,e(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,e(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function S(y,x,w){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,e(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,e(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,e(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,e(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,e(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===ni&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,e(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,e(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=w.texture,y.transmissionSamplerSize.value.set(w.width,w.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,e(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,e(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,e(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,e(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,e(x.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,x){x.matcap&&(y.matcap.value=x.matcap)}function M(y,x){const w=t.get(x).light;y.referencePosition.value.setFromMatrixPosition(w.matrixWorld),y.nearDistance.value=w.shadow.camera.near,y.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:r}}function MD(s,t,e,a){let r={},l={},c=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function d(w,C){const b=C.program;a.uniformBlockBinding(w,b)}function p(w,C){let b=r[w.id];b===void 0&&(E(w),b=m(w),r[w.id]=b,w.addEventListener("dispose",y));const N=C.program;a.updateUBOMapping(w,N);const I=t.render.frame;l[w.id]!==I&&(v(w),l[w.id]=I)}function m(w){const C=g();w.__bindingPointIndex=C;const b=s.createBuffer(),N=w.__size,I=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,N,I),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,C,b),b}function g(){for(let w=0;w<f;w++)if(c.indexOf(w)===-1)return c.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(w){const C=r[w.id],b=w.uniforms,N=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,C);for(let I=0,P=b.length;I<P;I++){const F=Array.isArray(b[I])?b[I]:[b[I]];for(let A=0,U=F.length;A<U;A++){const G=F[A];if(S(G,I,A,N)===!0){const nt=G.__offset,J=Array.isArray(G.value)?G.value:[G.value];let ct=0;for(let lt=0;lt<J.length;lt++){const z=J[lt],k=M(z);typeof z=="number"||typeof z=="boolean"?(G.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,nt+ct,G.__data)):z.isMatrix3?(G.__data[0]=z.elements[0],G.__data[1]=z.elements[1],G.__data[2]=z.elements[2],G.__data[3]=0,G.__data[4]=z.elements[3],G.__data[5]=z.elements[4],G.__data[6]=z.elements[5],G.__data[7]=0,G.__data[8]=z.elements[6],G.__data[9]=z.elements[7],G.__data[10]=z.elements[8],G.__data[11]=0):(z.toArray(G.__data,ct),ct+=k.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,nt,G.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(w,C,b,N){const I=w.value,P=C+"_"+b;if(N[P]===void 0)return typeof I=="number"||typeof I=="boolean"?N[P]=I:N[P]=I.clone(),!0;{const F=N[P];if(typeof I=="number"||typeof I=="boolean"){if(F!==I)return N[P]=I,!0}else if(F.equals(I)===!1)return F.copy(I),!0}return!1}function E(w){const C=w.uniforms;let b=0;const N=16;for(let P=0,F=C.length;P<F;P++){const A=Array.isArray(C[P])?C[P]:[C[P]];for(let U=0,G=A.length;U<G;U++){const nt=A[U],J=Array.isArray(nt.value)?nt.value:[nt.value];for(let ct=0,lt=J.length;ct<lt;ct++){const z=J[ct],k=M(z),W=b%N,mt=W%k.boundary,O=W+mt;b+=mt,O!==0&&N-O<k.storage&&(b+=N-O),nt.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),nt.__offset=b,b+=k.storage}}}const I=b%N;return I>0&&(b+=N-I),w.__size=b,w.__cache={},this}function M(w){const C={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(C.boundary=4,C.storage=4):w.isVector2?(C.boundary=8,C.storage=8):w.isVector3||w.isColor?(C.boundary=16,C.storage=12):w.isVector4?(C.boundary=16,C.storage=16):w.isMatrix3?(C.boundary=48,C.storage=48):w.isMatrix4?(C.boundary=64,C.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),C}function y(w){const C=w.target;C.removeEventListener("dispose",y);const b=c.indexOf(C.__bindingPointIndex);c.splice(b,1),s.deleteBuffer(r[C.id]),delete r[C.id],delete l[C.id]}function x(){for(const w in r)s.deleteBuffer(r[w]);c=[],r={},l={}}return{bind:d,update:p,dispose:x}}class ED{constructor(t={}){const{canvas:e=tA(),context:a=null,depth:r=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:v=!1}=t;this.isWebGLRenderer=!0;let S;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=a.getContextAttributes().alpha}else S=c;const E=new Uint32Array(4),M=new Int32Array(4);let y=null,x=null;const w=[],C=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Lr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let N=!1;this._outputColorSpace=zi;let I=0,P=0,F=null,A=-1,U=null;const G=new Ge,nt=new Ge;let J=null;const ct=new De(0);let lt=0,z=e.width,k=e.height,W=1,mt=null,O=null;const Z=new Ge(0,0,z,k),gt=new Ge(0,0,z,k);let St=!1;const Y=new s_;let ut=!1,Mt=!1;const Rt=new Je,wt=new Je,ee=new $,Vt=new Ge,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function ve(){return F===null?W:1}let V=a;function Un(L,K){return e.getContext(L,K)}try{const L={alpha:!0,depth:r,stencil:l,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Km}`),e.addEventListener("webglcontextlost",It,!1),e.addEventListener("webglcontextrestored",At,!1),e.addEventListener("webglcontextcreationerror",yt,!1),V===null){const K="webgl2";if(V=Un(K,L),V===null)throw Un(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let be,pe,kt,xe,Zt,re,on,B,R,it,pt,vt,ft,Pt,Ut,Gt,Xt,Et,zt,Yt,jt,Ct,ae,q;function Lt(){be=new NC(V),be.init(),Ct=new mD(V,be),pe=new AC(V,be,t,Ct),kt=new dD(V,be),pe.reverseDepthBuffer&&v&&kt.buffers.depth.setReversed(!0),xe=new zC(V),Zt=new tD,re=new pD(V,be,kt,Zt,pe,Ct,xe),on=new wC(b),B=new LC(b),R=new VA(V),ae=new TC(V,R),it=new OC(V,R,xe,ae),pt=new BC(V,it,R,xe),zt=new IC(V,pe,re),Gt=new RC(Zt),vt=new $2(b,on,B,be,pe,ae,Gt),ft=new SD(b,Zt),Pt=new nD,Ut=new lD(be),Et=new EC(b,on,B,kt,pt,S,d),Xt=new fD(b,pt,pe),q=new MD(V,xe,pe,kt),Yt=new bC(V,be,xe),jt=new PC(V,be,xe),xe.programs=vt.programs,b.capabilities=pe,b.extensions=be,b.properties=Zt,b.renderLists=Pt,b.shadowMap=Xt,b.state=kt,b.info=xe}Lt();const Tt=new xD(b,V);this.xr=Tt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const L=be.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=be.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(L){L!==void 0&&(W=L,this.setSize(z,k,!1))},this.getSize=function(L){return L.set(z,k)},this.setSize=function(L,K,st=!0){if(Tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=L,k=K,e.width=Math.floor(L*W),e.height=Math.floor(K*W),st===!0&&(e.style.width=L+"px",e.style.height=K+"px"),this.setViewport(0,0,L,K)},this.getDrawingBufferSize=function(L){return L.set(z*W,k*W).floor()},this.setDrawingBufferSize=function(L,K,st){z=L,k=K,W=st,e.width=Math.floor(L*st),e.height=Math.floor(K*st),this.setViewport(0,0,L,K)},this.getCurrentViewport=function(L){return L.copy(G)},this.getViewport=function(L){return L.copy(Z)},this.setViewport=function(L,K,st,ot){L.isVector4?Z.set(L.x,L.y,L.z,L.w):Z.set(L,K,st,ot),kt.viewport(G.copy(Z).multiplyScalar(W).round())},this.getScissor=function(L){return L.copy(gt)},this.setScissor=function(L,K,st,ot){L.isVector4?gt.set(L.x,L.y,L.z,L.w):gt.set(L,K,st,ot),kt.scissor(nt.copy(gt).multiplyScalar(W).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(L){kt.setScissorTest(St=L)},this.setOpaqueSort=function(L){mt=L},this.setTransparentSort=function(L){O=L},this.getClearColor=function(L){return L.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor(...arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha(...arguments)},this.clear=function(L=!0,K=!0,st=!0){let ot=0;if(L){let Q=!1;if(F!==null){const bt=F.texture.format;Q=bt===n_||bt===e_||bt===t_}if(Q){const bt=F.texture.type,Dt=bt===ua||bt===As||bt===ru||bt===su||bt===Jm||bt===$m,Ot=Et.getClearColor(),Bt=Et.getClearAlpha(),te=Ot.r,Qt=Ot.g,Wt=Ot.b;Dt?(E[0]=te,E[1]=Qt,E[2]=Wt,E[3]=Bt,V.clearBufferuiv(V.COLOR,0,E)):(M[0]=te,M[1]=Qt,M[2]=Wt,M[3]=Bt,V.clearBufferiv(V.COLOR,0,M))}else ot|=V.COLOR_BUFFER_BIT}K&&(ot|=V.DEPTH_BUFFER_BIT),st&&(ot|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",It,!1),e.removeEventListener("webglcontextrestored",At,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),Et.dispose(),Pt.dispose(),Ut.dispose(),Zt.dispose(),on.dispose(),B.dispose(),pt.dispose(),ae.dispose(),q.dispose(),vt.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",gn),Tt.removeEventListener("sessionend",Ln),Zn.stop()};function It(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const L=xe.autoReset,K=Xt.enabled,st=Xt.autoUpdate,ot=Xt.needsUpdate,Q=Xt.type;Lt(),xe.autoReset=L,Xt.enabled=K,Xt.autoUpdate=st,Xt.needsUpdate=ot,Xt.type=Q}function yt(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Ft(L){const K=L.target;K.removeEventListener("dispose",Ft),ie(K)}function ie(L){Ne(L),Zt.remove(L)}function Ne(L){const K=Zt.get(L).programs;K!==void 0&&(K.forEach(function(st){vt.releaseProgram(st)}),L.isShaderMaterial&&vt.releaseShaderCache(L))}this.renderBufferDirect=function(L,K,st,ot,Q,bt){K===null&&(K=ge);const Dt=Q.isMesh&&Q.matrixWorld.determinant()<0,Ot=Vr(L,K,st,ot,Q);kt.setMaterial(ot,Dt);let Bt=st.index,te=1;if(ot.wireframe===!0){if(Bt=it.getWireframeAttribute(st),Bt===void 0)return;te=2}const Qt=st.drawRange,Wt=st.attributes.position;let le=Qt.start*te,Ue=(Qt.start+Qt.count)*te;bt!==null&&(le=Math.max(le,bt.start*te),Ue=Math.min(Ue,(bt.start+bt.count)*te)),Bt!==null?(le=Math.max(le,0),Ue=Math.min(Ue,Bt.count)):Wt!=null&&(le=Math.max(le,0),Ue=Math.min(Ue,Wt.count));const Ze=Ue-le;if(Ze<0||Ze===1/0)return;ae.setup(Q,ot,Ot,st,Bt);let he,Le=Yt;if(Bt!==null&&(he=R.get(Bt),Le=jt,Le.setIndex(he)),Q.isMesh)ot.wireframe===!0?(kt.setLineWidth(ot.wireframeLinewidth*ve()),Le.setMode(V.LINES)):Le.setMode(V.TRIANGLES);else if(Q.isLine){let Kt=ot.linewidth;Kt===void 0&&(Kt=1),kt.setLineWidth(Kt*ve()),Q.isLineSegments?Le.setMode(V.LINES):Q.isLineLoop?Le.setMode(V.LINE_LOOP):Le.setMode(V.LINE_STRIP)}else Q.isPoints?Le.setMode(V.POINTS):Q.isSprite&&Le.setMode(V.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Co("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Le.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(be.get("WEBGL_multi_draw"))Le.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Kt=Q._multiDrawStarts,ze=Q._multiDrawCounts,ye=Q._multiDrawCount,Tn=Bt?R.get(Bt).bytesPerElement:1,Ja=Zt.get(ot).currentProgram.getUniforms();for(let Ye=0;Ye<ye;Ye++)Ja.setValue(V,"_gl_DrawID",Ye),Le.render(Kt[Ye]/Tn,ze[Ye])}else if(Q.isInstancedMesh)Le.renderInstances(le,Ze,Q.count);else if(st.isInstancedBufferGeometry){const Kt=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,ze=Math.min(st.instanceCount,Kt);Le.renderInstances(le,Ze,ze)}else Le.render(le,Ze)};function Ae(L,K,st){L.transparent===!0&&L.side===qi&&L.forceSinglePass===!1?(L.side=ni,L.needsUpdate=!0,Ka(L,K,st),L.side=Pr,L.needsUpdate=!0,Ka(L,K,st),L.side=qi):Ka(L,K,st)}this.compile=function(L,K,st=null){st===null&&(st=L),x=Ut.get(st),x.init(K),C.push(x),st.traverseVisible(function(Q){Q.isLight&&Q.layers.test(K.layers)&&(x.pushLight(Q),Q.castShadow&&x.pushShadow(Q))}),L!==st&&L.traverseVisible(function(Q){Q.isLight&&Q.layers.test(K.layers)&&(x.pushLight(Q),Q.castShadow&&x.pushShadow(Q))}),x.setupLights();const ot=new Set;return L.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const bt=Q.material;if(bt)if(Array.isArray(bt))for(let Dt=0;Dt<bt.length;Dt++){const Ot=bt[Dt];Ae(Ot,st,Q),ot.add(Ot)}else Ae(bt,st,Q),ot.add(bt)}),x=C.pop(),ot},this.compileAsync=function(L,K,st=null){const ot=this.compile(L,K,st);return new Promise(Q=>{function bt(){if(ot.forEach(function(Dt){Zt.get(Dt).currentProgram.isReady()&&ot.delete(Dt)}),ot.size===0){Q(L);return}setTimeout(bt,10)}be.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let ui=null;function En(L){ui&&ui(L)}function gn(){Zn.stop()}function Ln(){Zn.start()}const Zn=new yS;Zn.setAnimationLoop(En),typeof self<"u"&&Zn.setContext(self),this.setAnimationLoop=function(L){ui=L,Tt.setAnimationLoop(L),L===null?Zn.stop():Zn.start()},Tt.addEventListener("sessionstart",gn),Tt.addEventListener("sessionend",Ln),this.render=function(L,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera(K),K=Tt.getCamera()),L.isScene===!0&&L.onBeforeRender(b,L,K,F),x=Ut.get(L,C.length),x.init(K),C.push(x),wt.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),Y.setFromProjectionMatrix(wt),Mt=this.localClippingEnabled,ut=Gt.init(this.clippingPlanes,Mt),y=Pt.get(L,w.length),y.init(),w.push(y),Tt.enabled===!0&&Tt.isPresenting===!0){const bt=b.xr.getDepthSensingMesh();bt!==null&&Hr(bt,K,-1/0,b.sortObjects)}Hr(L,K,0,b.sortObjects),y.finish(),b.sortObjects===!0&&y.sort(mt,O),Ve=Tt.enabled===!1||Tt.isPresenting===!1||Tt.hasDepthSensing()===!1,Ve&&Et.addToRenderList(y,L),this.info.render.frame++,ut===!0&&Gt.beginShadows();const st=x.state.shadowsArray;Xt.render(st,L,K),ut===!0&&Gt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ot=y.opaque,Q=y.transmissive;if(x.setupLights(),K.isArrayCamera){const bt=K.cameras;if(Q.length>0)for(let Dt=0,Ot=bt.length;Dt<Ot;Dt++){const Bt=bt[Dt];Ru(ot,Q,L,Bt)}Ve&&Et.render(L);for(let Dt=0,Ot=bt.length;Dt<Ot;Dt++){const Bt=bt[Dt];Au(y,L,Bt,Bt.viewport)}}else Q.length>0&&Ru(ot,Q,L,K),Ve&&Et.render(L),Au(y,L,K);F!==null&&P===0&&(re.updateMultisampleRenderTarget(F),re.updateRenderTargetMipmap(F)),L.isScene===!0&&L.onAfterRender(b,L,K),ae.resetDefaultState(),A=-1,U=null,C.pop(),C.length>0?(x=C[C.length-1],ut===!0&&Gt.setGlobalState(b.clippingPlanes,x.state.camera)):x=null,w.pop(),w.length>0?y=w[w.length-1]:y=null};function Hr(L,K,st,ot){if(L.visible===!1)return;if(L.layers.test(K.layers)){if(L.isGroup)st=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(K);else if(L.isLight)x.pushLight(L),L.castShadow&&x.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||Y.intersectsSprite(L)){ot&&Vt.setFromMatrixPosition(L.matrixWorld).applyMatrix4(wt);const Dt=pt.update(L),Ot=L.material;Ot.visible&&y.push(L,Dt,Ot,st,Vt.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||Y.intersectsObject(L))){const Dt=pt.update(L),Ot=L.material;if(ot&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Vt.copy(L.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),Vt.copy(Dt.boundingSphere.center)),Vt.applyMatrix4(L.matrixWorld).applyMatrix4(wt)),Array.isArray(Ot)){const Bt=Dt.groups;for(let te=0,Qt=Bt.length;te<Qt;te++){const Wt=Bt[te],le=Ot[Wt.materialIndex];le&&le.visible&&y.push(L,Dt,le,st,Vt.z,Wt)}}else Ot.visible&&y.push(L,Dt,Ot,st,Vt.z,null)}}const bt=L.children;for(let Dt=0,Ot=bt.length;Dt<Ot;Dt++)Hr(bt[Dt],K,st,ot)}function Au(L,K,st,ot){const Q=L.opaque,bt=L.transmissive,Dt=L.transparent;x.setupLightsView(st),ut===!0&&Gt.setGlobalState(b.clippingPlanes,st),ot&&kt.viewport(G.copy(ot)),Q.length>0&&Gr(Q,K,st),bt.length>0&&Gr(bt,K,st),Dt.length>0&&Gr(Dt,K,st),kt.buffers.depth.setTest(!0),kt.buffers.depth.setMask(!0),kt.buffers.color.setMask(!0),kt.setPolygonOffset(!1)}function Ru(L,K,st,ot){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ot.id]===void 0&&(x.state.transmissionRenderTarget[ot.id]=new Rs(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float")?xu:ua,minFilter:ys,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:we.workingColorSpace}));const bt=x.state.transmissionRenderTarget[ot.id],Dt=ot.viewport||G;bt.setSize(Dt.z*b.transmissionResolutionScale,Dt.w*b.transmissionResolutionScale);const Ot=b.getRenderTarget(),Bt=b.getActiveCubeFace(),te=b.getActiveMipmapLevel();b.setRenderTarget(bt),b.getClearColor(ct),lt=b.getClearAlpha(),lt<1&&b.setClearColor(16777215,.5),b.clear(),Ve&&Et.render(st);const Qt=b.toneMapping;b.toneMapping=Lr;const Wt=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),x.setupLightsView(ot),ut===!0&&Gt.setGlobalState(b.clippingPlanes,ot),Gr(L,st,ot),re.updateMultisampleRenderTarget(bt),re.updateRenderTargetMipmap(bt),be.has("WEBGL_multisampled_render_to_texture")===!1){let le=!1;for(let Ue=0,Ze=K.length;Ue<Ze;Ue++){const he=K[Ue],Le=he.object,Kt=he.geometry,ze=he.material,ye=he.group;if(ze.side===qi&&Le.layers.test(ot.layers)){const Tn=ze.side;ze.side=ni,ze.needsUpdate=!0,Za(Le,st,ot,Kt,ze,ye),ze.side=Tn,ze.needsUpdate=!0,le=!0}}le===!0&&(re.updateMultisampleRenderTarget(bt),re.updateRenderTargetMipmap(bt))}b.setRenderTarget(Ot,Bt,te),b.setClearColor(ct,lt),Wt!==void 0&&(ot.viewport=Wt),b.toneMapping=Qt}function Gr(L,K,st){const ot=K.isScene===!0?K.overrideMaterial:null;for(let Q=0,bt=L.length;Q<bt;Q++){const Dt=L[Q],Ot=Dt.object,Bt=Dt.geometry,te=Dt.group;let Qt=Dt.material;Qt.allowOverride===!0&&ot!==null&&(Qt=ot),Ot.layers.test(st.layers)&&Za(Ot,K,st,Bt,Qt,te)}}function Za(L,K,st,ot,Q,bt){L.onBeforeRender(b,K,st,ot,Q,bt),L.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),Q.onBeforeRender(b,K,st,ot,L,bt),Q.transparent===!0&&Q.side===qi&&Q.forceSinglePass===!1?(Q.side=ni,Q.needsUpdate=!0,b.renderBufferDirect(st,K,ot,Q,L,bt),Q.side=Pr,Q.needsUpdate=!0,b.renderBufferDirect(st,K,ot,Q,L,bt),Q.side=qi):b.renderBufferDirect(st,K,ot,Q,L,bt),L.onAfterRender(b,K,st,ot,Q,bt)}function Ka(L,K,st){K.isScene!==!0&&(K=ge);const ot=Zt.get(L),Q=x.state.lights,bt=x.state.shadowsArray,Dt=Q.state.version,Ot=vt.getParameters(L,Q.state,bt,K,st),Bt=vt.getProgramCacheKey(Ot);let te=ot.programs;ot.environment=L.isMeshStandardMaterial?K.environment:null,ot.fog=K.fog,ot.envMap=(L.isMeshStandardMaterial?B:on).get(L.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&L.envMap===null?K.environmentRotation:L.envMapRotation,te===void 0&&(L.addEventListener("dispose",Ft),te=new Map,ot.programs=te);let Qt=te.get(Bt);if(Qt!==void 0){if(ot.currentProgram===Qt&&ot.lightsStateVersion===Dt)return pa(L,Ot),Qt}else Ot.uniforms=vt.getUniforms(L),L.onBeforeCompile(Ot,b),Qt=vt.acquireProgram(Ot,Bt),te.set(Bt,Qt),ot.uniforms=Ot.uniforms;const Wt=ot.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Wt.clippingPlanes=Gt.uniform),pa(L,Ot),ot.needsLights=fn(L),ot.lightsStateVersion=Dt,ot.needsLights&&(Wt.ambientLightColor.value=Q.state.ambient,Wt.lightProbe.value=Q.state.probe,Wt.directionalLights.value=Q.state.directional,Wt.directionalLightShadows.value=Q.state.directionalShadow,Wt.spotLights.value=Q.state.spot,Wt.spotLightShadows.value=Q.state.spotShadow,Wt.rectAreaLights.value=Q.state.rectArea,Wt.ltc_1.value=Q.state.rectAreaLTC1,Wt.ltc_2.value=Q.state.rectAreaLTC2,Wt.pointLights.value=Q.state.point,Wt.pointLightShadows.value=Q.state.pointShadow,Wt.hemisphereLights.value=Q.state.hemi,Wt.directionalShadowMap.value=Q.state.directionalShadowMap,Wt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Wt.spotShadowMap.value=Q.state.spotShadowMap,Wt.spotLightMatrix.value=Q.state.spotLightMatrix,Wt.spotLightMap.value=Q.state.spotLightMap,Wt.pointShadowMap.value=Q.state.pointShadowMap,Wt.pointShadowMatrix.value=Q.state.pointShadowMatrix),ot.currentProgram=Qt,ot.uniformsList=null,Qt}function da(L){if(L.uniformsList===null){const K=L.currentProgram.getUniforms();L.uniformsList=pf.seqWithValue(K.seq,L.uniforms)}return L.uniformsList}function pa(L,K){const st=Zt.get(L);st.outputColorSpace=K.outputColorSpace,st.batching=K.batching,st.batchingColor=K.batchingColor,st.instancing=K.instancing,st.instancingColor=K.instancingColor,st.instancingMorph=K.instancingMorph,st.skinning=K.skinning,st.morphTargets=K.morphTargets,st.morphNormals=K.morphNormals,st.morphColors=K.morphColors,st.morphTargetsCount=K.morphTargetsCount,st.numClippingPlanes=K.numClippingPlanes,st.numIntersection=K.numClipIntersection,st.vertexAlphas=K.vertexAlphas,st.vertexTangents=K.vertexTangents,st.toneMapping=K.toneMapping}function Vr(L,K,st,ot,Q){K.isScene!==!0&&(K=ge),re.resetTextureUnits();const bt=K.fog,Dt=ot.isMeshStandardMaterial?K.environment:null,Ot=F===null?b.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Io,Bt=(ot.isMeshStandardMaterial?B:on).get(ot.envMap||Dt),te=ot.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,Qt=!!st.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),Wt=!!st.morphAttributes.position,le=!!st.morphAttributes.normal,Ue=!!st.morphAttributes.color;let Ze=Lr;ot.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Ze=b.toneMapping);const he=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,Le=he!==void 0?he.length:0,Kt=Zt.get(ot),ze=x.state.lights;if(ut===!0&&(Mt===!0||L!==U)){const bn=L===U&&ot.id===A;Gt.setState(ot,L,bn)}let ye=!1;ot.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==ze.state.version||Kt.outputColorSpace!==Ot||Q.isBatchedMesh&&Kt.batching===!1||!Q.isBatchedMesh&&Kt.batching===!0||Q.isBatchedMesh&&Kt.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Kt.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Kt.instancing===!1||!Q.isInstancedMesh&&Kt.instancing===!0||Q.isSkinnedMesh&&Kt.skinning===!1||!Q.isSkinnedMesh&&Kt.skinning===!0||Q.isInstancedMesh&&Kt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Kt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Kt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Kt.instancingMorph===!1&&Q.morphTexture!==null||Kt.envMap!==Bt||ot.fog===!0&&Kt.fog!==bt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==Gt.numPlanes||Kt.numIntersection!==Gt.numIntersection)||Kt.vertexAlphas!==te||Kt.vertexTangents!==Qt||Kt.morphTargets!==Wt||Kt.morphNormals!==le||Kt.morphColors!==Ue||Kt.toneMapping!==Ze||Kt.morphTargetsCount!==Le)&&(ye=!0):(ye=!0,Kt.__version=ot.version);let Tn=Kt.currentProgram;ye===!0&&(Tn=Ka(ot,K,Q));let Ja=!1,Ye=!1,_a=!1;const ke=Tn.getUniforms(),Fn=Kt.uniforms;if(kt.useProgram(Tn.program)&&(Ja=!0,Ye=!0,_a=!0),ot.id!==A&&(A=ot.id,Ye=!0),Ja||U!==L){kt.buffers.depth.getReversed()?(Rt.copy(L.projectionMatrix),nA(Rt),iA(Rt),ke.setValue(V,"projectionMatrix",Rt)):ke.setValue(V,"projectionMatrix",L.projectionMatrix),ke.setValue(V,"viewMatrix",L.matrixWorldInverse);const Nn=ke.map.cameraPosition;Nn!==void 0&&Nn.setValue(V,ee.setFromMatrixPosition(L.matrixWorld)),pe.logarithmicDepthBuffer&&ke.setValue(V,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&ke.setValue(V,"isOrthographic",L.isOrthographicCamera===!0),U!==L&&(U=L,Ye=!0,_a=!0)}if(Q.isSkinnedMesh){ke.setOptional(V,Q,"bindMatrix"),ke.setOptional(V,Q,"bindMatrixInverse");const bn=Q.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),ke.setValue(V,"boneTexture",bn.boneTexture,re))}Q.isBatchedMesh&&(ke.setOptional(V,Q,"batchingTexture"),ke.setValue(V,"batchingTexture",Q._matricesTexture,re),ke.setOptional(V,Q,"batchingIdTexture"),ke.setValue(V,"batchingIdTexture",Q._indirectTexture,re),ke.setOptional(V,Q,"batchingColorTexture"),Q._colorsTexture!==null&&ke.setValue(V,"batchingColorTexture",Q._colorsTexture,re));const vn=st.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&zt.update(Q,st,Tn),(Ye||Kt.receiveShadow!==Q.receiveShadow)&&(Kt.receiveShadow=Q.receiveShadow,ke.setValue(V,"receiveShadow",Q.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(Fn.envMap.value=Bt,Fn.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&K.environment!==null&&(Fn.envMapIntensity.value=K.environmentIntensity),Ye&&(ke.setValue(V,"toneMappingExposure",b.toneMappingExposure),Kt.needsLights&&Qa(Fn,_a),bt&&ot.fog===!0&&ft.refreshFogUniforms(Fn,bt),ft.refreshMaterialUniforms(Fn,ot,W,k,x.state.transmissionRenderTarget[L.id]),pf.upload(V,da(Kt),Fn,re)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(pf.upload(V,da(Kt),Fn,re),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&ke.setValue(V,"center",Q.center),ke.setValue(V,"modelViewMatrix",Q.modelViewMatrix),ke.setValue(V,"normalMatrix",Q.normalMatrix),ke.setValue(V,"modelMatrix",Q.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const bn=ot.uniformsGroups;for(let Nn=0,Qi=bn.length;Nn<Qi;Nn++){const ga=bn[Nn];q.update(ga,Tn),q.bind(ga,Tn)}}return Tn}function Qa(L,K){L.ambientLightColor.needsUpdate=K,L.lightProbe.needsUpdate=K,L.directionalLights.needsUpdate=K,L.directionalLightShadows.needsUpdate=K,L.pointLights.needsUpdate=K,L.pointLightShadows.needsUpdate=K,L.spotLights.needsUpdate=K,L.spotLightShadows.needsUpdate=K,L.rectAreaLights.needsUpdate=K,L.hemisphereLights.needsUpdate=K}function fn(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(L,K,st){const ot=Zt.get(L);ot.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),Zt.get(L.texture).__webglTexture=K,Zt.get(L.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:st,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,K){const st=Zt.get(L);st.__webglFramebuffer=K,st.__useDefaultFramebuffer=K===void 0};const wu=V.createFramebuffer();this.setRenderTarget=function(L,K=0,st=0){F=L,I=K,P=st;let ot=!0,Q=null,bt=!1,Dt=!1;if(L){const Bt=Zt.get(L);if(Bt.__useDefaultFramebuffer!==void 0)kt.bindFramebuffer(V.FRAMEBUFFER,null),ot=!1;else if(Bt.__webglFramebuffer===void 0)re.setupRenderTarget(L);else if(Bt.__hasExternalTextures)re.rebindTextures(L,Zt.get(L.texture).__webglTexture,Zt.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const Wt=L.depthTexture;if(Bt.__boundDepthTexture!==Wt){if(Wt!==null&&Zt.has(Wt)&&(L.width!==Wt.image.width||L.height!==Wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");re.setupDepthRenderbuffer(L)}}const te=L.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Dt=!0);const Qt=Zt.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Qt[K])?Q=Qt[K][st]:Q=Qt[K],bt=!0):L.samples>0&&re.useMultisampledRTT(L)===!1?Q=Zt.get(L).__webglMultisampledFramebuffer:Array.isArray(Qt)?Q=Qt[st]:Q=Qt,G.copy(L.viewport),nt.copy(L.scissor),J=L.scissorTest}else G.copy(Z).multiplyScalar(W).floor(),nt.copy(gt).multiplyScalar(W).floor(),J=St;if(st!==0&&(Q=wu),kt.bindFramebuffer(V.FRAMEBUFFER,Q)&&ot&&kt.drawBuffers(L,Q),kt.viewport(G),kt.scissor(nt),kt.setScissorTest(J),bt){const Bt=Zt.get(L.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+K,Bt.__webglTexture,st)}else if(Dt){const Bt=Zt.get(L.texture),te=K;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Bt.__webglTexture,st,te)}else if(L!==null&&st!==0){const Bt=Zt.get(L.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Bt.__webglTexture,st)}A=-1},this.readRenderTargetPixels=function(L,K,st,ot,Q,bt,Dt,Ot=0){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=Zt.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Dt!==void 0&&(Bt=Bt[Dt]),Bt){kt.bindFramebuffer(V.FRAMEBUFFER,Bt);try{const te=L.textures[Ot],Qt=te.format,Wt=te.type;if(!pe.textureFormatReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pe.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=L.width-ot&&st>=0&&st<=L.height-Q&&(L.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ot),V.readPixels(K,st,ot,Q,Ct.convert(Qt),Ct.convert(Wt),bt))}finally{const te=F!==null?Zt.get(F).__webglFramebuffer:null;kt.bindFramebuffer(V.FRAMEBUFFER,te)}}},this.readRenderTargetPixelsAsync=async function(L,K,st,ot,Q,bt,Dt,Ot=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=Zt.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Dt!==void 0&&(Bt=Bt[Dt]),Bt)if(K>=0&&K<=L.width-ot&&st>=0&&st<=L.height-Q){kt.bindFramebuffer(V.FRAMEBUFFER,Bt);const te=L.textures[Ot],Qt=te.format,Wt=te.type;if(!pe.textureFormatReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pe.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const le=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,le),V.bufferData(V.PIXEL_PACK_BUFFER,bt.byteLength,V.STREAM_READ),L.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ot),V.readPixels(K,st,ot,Q,Ct.convert(Qt),Ct.convert(Wt),0);const Ue=F!==null?Zt.get(F).__webglFramebuffer:null;kt.bindFramebuffer(V.FRAMEBUFFER,Ue);const Ze=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await eA(V,Ze,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,le),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,bt),V.deleteBuffer(le),V.deleteSync(Ze),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,K=null,st=0){const ot=Math.pow(2,-st),Q=Math.floor(L.image.width*ot),bt=Math.floor(L.image.height*ot),Dt=K!==null?K.x:0,Ot=K!==null?K.y:0;re.setTexture2D(L,0),V.copyTexSubImage2D(V.TEXTURE_2D,st,0,0,Dt,Ot,Q,bt),kt.unbindTexture()};const Cu=V.createFramebuffer(),ma=V.createFramebuffer();this.copyTextureToTexture=function(L,K,st=null,ot=null,Q=0,bt=null){bt===null&&(Q!==0?(Co("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),bt=Q,Q=0):bt=0);let Dt,Ot,Bt,te,Qt,Wt,le,Ue,Ze;const he=L.isCompressedTexture?L.mipmaps[bt]:L.image;if(st!==null)Dt=st.max.x-st.min.x,Ot=st.max.y-st.min.y,Bt=st.isBox3?st.max.z-st.min.z:1,te=st.min.x,Qt=st.min.y,Wt=st.isBox3?st.min.z:0;else{const vn=Math.pow(2,-Q);Dt=Math.floor(he.width*vn),Ot=Math.floor(he.height*vn),L.isDataArrayTexture?Bt=he.depth:L.isData3DTexture?Bt=Math.floor(he.depth*vn):Bt=1,te=0,Qt=0,Wt=0}ot!==null?(le=ot.x,Ue=ot.y,Ze=ot.z):(le=0,Ue=0,Ze=0);const Le=Ct.convert(K.format),Kt=Ct.convert(K.type);let ze;K.isData3DTexture?(re.setTexture3D(K,0),ze=V.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(re.setTexture2DArray(K,0),ze=V.TEXTURE_2D_ARRAY):(re.setTexture2D(K,0),ze=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,K.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,K.unpackAlignment);const ye=V.getParameter(V.UNPACK_ROW_LENGTH),Tn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Ja=V.getParameter(V.UNPACK_SKIP_PIXELS),Ye=V.getParameter(V.UNPACK_SKIP_ROWS),_a=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,he.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,he.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,te),V.pixelStorei(V.UNPACK_SKIP_ROWS,Qt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Wt);const ke=L.isDataArrayTexture||L.isData3DTexture,Fn=K.isDataArrayTexture||K.isData3DTexture;if(L.isDepthTexture){const vn=Zt.get(L),bn=Zt.get(K),Nn=Zt.get(vn.__renderTarget),Qi=Zt.get(bn.__renderTarget);kt.bindFramebuffer(V.READ_FRAMEBUFFER,Nn.__webglFramebuffer),kt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Qi.__webglFramebuffer);for(let ga=0;ga<Bt;ga++)ke&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Zt.get(L).__webglTexture,Q,Wt+ga),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Zt.get(K).__webglTexture,bt,Ze+ga)),V.blitFramebuffer(te,Qt,Dt,Ot,le,Ue,Dt,Ot,V.DEPTH_BUFFER_BIT,V.NEAREST);kt.bindFramebuffer(V.READ_FRAMEBUFFER,null),kt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Q!==0||L.isRenderTargetTexture||Zt.has(L)){const vn=Zt.get(L),bn=Zt.get(K);kt.bindFramebuffer(V.READ_FRAMEBUFFER,Cu),kt.bindFramebuffer(V.DRAW_FRAMEBUFFER,ma);for(let Nn=0;Nn<Bt;Nn++)ke?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,vn.__webglTexture,Q,Wt+Nn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,vn.__webglTexture,Q),Fn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,bn.__webglTexture,bt,Ze+Nn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,bn.__webglTexture,bt),Q!==0?V.blitFramebuffer(te,Qt,Dt,Ot,le,Ue,Dt,Ot,V.COLOR_BUFFER_BIT,V.NEAREST):Fn?V.copyTexSubImage3D(ze,bt,le,Ue,Ze+Nn,te,Qt,Dt,Ot):V.copyTexSubImage2D(ze,bt,le,Ue,te,Qt,Dt,Ot);kt.bindFramebuffer(V.READ_FRAMEBUFFER,null),kt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Fn?L.isDataTexture||L.isData3DTexture?V.texSubImage3D(ze,bt,le,Ue,Ze,Dt,Ot,Bt,Le,Kt,he.data):K.isCompressedArrayTexture?V.compressedTexSubImage3D(ze,bt,le,Ue,Ze,Dt,Ot,Bt,Le,he.data):V.texSubImage3D(ze,bt,le,Ue,Ze,Dt,Ot,Bt,Le,Kt,he):L.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,bt,le,Ue,Dt,Ot,Le,Kt,he.data):L.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,bt,le,Ue,he.width,he.height,Le,he.data):V.texSubImage2D(V.TEXTURE_2D,bt,le,Ue,Dt,Ot,Le,Kt,he);V.pixelStorei(V.UNPACK_ROW_LENGTH,ye),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Tn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Ja),V.pixelStorei(V.UNPACK_SKIP_ROWS,Ye),V.pixelStorei(V.UNPACK_SKIP_IMAGES,_a),bt===0&&K.generateMipmaps&&V.generateMipmap(ze),kt.unbindTexture()},this.copyTextureToTexture3D=function(L,K,st=null,ot=null,Q=0){return Co('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(L,K,st,ot,Q)},this.initRenderTarget=function(L){Zt.get(L).__webglFramebuffer===void 0&&re.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?re.setTextureCube(L,0):L.isData3DTexture?re.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?re.setTexture2DArray(L,0):re.setTexture2D(L,0),kt.unbindTexture()},this.resetState=function(){I=0,P=0,F=null,kt.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ga}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=we._getDrawingBufferColorSpace(t),e.unpackColorSpace=we._getUnpackColorSpace()}}function Ba(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function bS(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ti={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Fo={duration:.5,overwrite:!1,delay:0},l_,Bn,Qe,Ii=1e8,qe=1/Ii,Cm=Math.PI*2,TD=Cm/4,bD=0,AS=Math.sqrt,AD=Math.cos,RD=Math.sin,Dn=function(t){return typeof t=="string"},sn=function(t){return typeof t=="function"},Wa=function(t){return typeof t=="number"},u_=function(t){return typeof t>"u"},fa=function(t){return typeof t=="object"},ai=function(t){return t!==!1},c_=function(){return typeof window<"u"},sf=function(t){return sn(t)||Dn(t)},RS=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Wn=Array.isArray,Dm=/(?:-?\.?\d|\.)+/gi,wS=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ao=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Dp=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,CS=/[+-]=-?[.\d]+/,DS=/[^,'"\[\]\s]+/gi,wD=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,tn,ia,Um,f_,bi={},bf={},US,LS=function(t){return(bf=Ho(t,bi))&&li},h_=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},uu=function(t,e){return!e&&console.warn(t)},NS=function(t,e){return t&&(bi[t]=e)&&bf&&(bf[t]=e)||bi},cu=function(){return 0},CD={suppressEvents:!0,isStart:!0,kill:!1},mf={suppressEvents:!0,kill:!1},DD={suppressEvents:!0},d_={},Nr=[],Lm={},OS,xi={},Up={},dy=30,_f=[],p_="",m_=function(t){var e=t[0],a,r;if(fa(e)||sn(e)||(t=[t]),!(a=(e._gsap||{}).harness)){for(r=_f.length;r--&&!_f[r].targetTest(e););a=_f[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new aM(t[r],a)))||t.splice(r,1);return t},Ms=function(t){return t._gsap||m_(Bi(t))[0]._gsap},PS=function(t,e,a){return(a=t[e])&&sn(a)?t[e]():u_(a)&&t.getAttribute&&t.getAttribute(e)||a},ri=function(t,e){return(t=t.split(",")).forEach(e)||t},cn=function(t){return Math.round(t*1e5)/1e5||0},_n=function(t){return Math.round(t*1e7)/1e7||0},Uo=function(t,e){var a=e.charAt(0),r=parseFloat(e.substr(2));return t=parseFloat(t),a==="+"?t+r:a==="-"?t-r:a==="*"?t*r:t/r},UD=function(t,e){for(var a=e.length,r=0;t.indexOf(e[r])<0&&++r<a;);return r<a},Af=function(){var t=Nr.length,e=Nr.slice(0),a,r;for(Lm={},Nr.length=0,a=0;a<t;a++)r=e[a],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},__=function(t){return!!(t._initted||t._startAt||t.add)},zS=function(t,e,a,r){Nr.length&&!Bn&&Af(),t.render(e,a,!!(Bn&&e<0&&__(t))),Nr.length&&!Bn&&Af()},IS=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(DS).length<2?e:Dn(t)?t.trim():t},BS=function(t){return t},Ai=function(t,e){for(var a in e)a in t||(t[a]=e[a]);return t},LD=function(t){return function(e,a){for(var r in a)r in e||r==="duration"&&t||r==="ease"||(e[r]=a[r])}},Ho=function(t,e){for(var a in e)t[a]=e[a];return t},py=function s(t,e){for(var a in e)a!=="__proto__"&&a!=="constructor"&&a!=="prototype"&&(t[a]=fa(e[a])?s(t[a]||(t[a]={}),e[a]):e[a]);return t},Rf=function(t,e){var a={},r;for(r in t)r in e||(a[r]=t[r]);return a},eu=function(t){var e=t.parent||tn,a=t.keyframes?LD(Wn(t.keyframes)):Ai;if(ai(t.inherit))for(;e;)a(t,e.vars.defaults),e=e.parent||e._dp;return t},ND=function(t,e){for(var a=t.length,r=a===e.length;r&&a--&&t[a]===e[a];);return a<0},FS=function(t,e,a,r,l){var c=t[r],f;if(l)for(f=e[l];c&&c[l]>f;)c=c._prev;return c?(e._next=c._next,c._next=e):(e._next=t[a],t[a]=e),e._next?e._next._prev=e:t[r]=e,e._prev=c,e.parent=e._dp=t,e},If=function(t,e,a,r){a===void 0&&(a="_first"),r===void 0&&(r="_last");var l=e._prev,c=e._next;l?l._next=c:t[a]===e&&(t[a]=c),c?c._prev=l:t[r]===e&&(t[r]=l),e._next=e._prev=e.parent=null},Ir=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Es=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var a=t;a;)a._dirty=1,a=a.parent;return t},OD=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Nm=function(t,e,a,r){return t._startAt&&(Bn?t._startAt.revert(mf):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,r))},PD=function s(t){return!t||t._ts&&s(t.parent)},my=function(t){return t._repeat?Go(t._tTime,t=t.duration()+t._rDelay)*t:0},Go=function(t,e){var a=Math.floor(t=_n(t/e));return t&&a===t?a-1:a},wf=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Bf=function(t){return t._end=_n(t._start+(t._tDur/Math.abs(t._ts||t._rts||qe)||0))},Ff=function(t,e){var a=t._dp;return a&&a.smoothChildTiming&&t._ts&&(t._start=_n(a._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Bf(t),a._dirty||Es(a,t)),t},HS=function(t,e){var a;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(a=wf(t.rawTime(),e),(!e._dur||bu(0,e.totalDuration(),a)-e._tTime>qe)&&e.render(a,!0)),Es(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(a=t;a._dp;)a.rawTime()>=0&&a.totalTime(a._tTime),a=a._dp;t._zTime=-qe}},ra=function(t,e,a,r){return e.parent&&Ir(e),e._start=_n((Wa(a)?a:a||t!==tn?Pi(t,a,e):t._time)+e._delay),e._end=_n(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),FS(t,e,"_first","_last",t._sort?"_start":0),Om(e)||(t._recent=e),r||HS(t,e),t._ts<0&&Ff(t,t._tTime),t},GS=function(t,e){return(bi.ScrollTrigger||h_("scrollTrigger",e))&&bi.ScrollTrigger.create(e,t)},VS=function(t,e,a,r,l){if(v_(t,e,l),!t._initted)return 1;if(!a&&t._pt&&!Bn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&OS!==Si.frame)return Nr.push(t),t._lazy=[l,r],1},zD=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},Om=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},ID=function(t,e,a,r){var l=t.ratio,c=e<0||!e&&(!t._start&&zD(t)&&!(!t._initted&&Om(t))||(t._ts<0||t._dp._ts<0)&&!Om(t))?0:1,f=t._rDelay,d=0,p,m,g;if(f&&t._repeat&&(d=bu(0,t._tDur,e),m=Go(d,f),t._yoyo&&m&1&&(c=1-c),m!==Go(t._tTime,f)&&(l=1-c,t.vars.repeatRefresh&&t._initted&&t.invalidate())),c!==l||Bn||r||t._zTime===qe||!e&&t._zTime){if(!t._initted&&VS(t,e,r,a,d))return;for(g=t._zTime,t._zTime=e||(a?qe:0),a||(a=e&&!g),t.ratio=c,t._from&&(c=1-c),t._time=0,t._tTime=d,p=t._pt;p;)p.r(c,p.d),p=p._next;e<0&&Nm(t,e,a,!0),t._onUpdate&&!a&&Mi(t,"onUpdate"),d&&t._repeat&&!a&&t.parent&&Mi(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===c&&(c&&Ir(t,1),!a&&!Bn&&(Mi(t,c?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},BD=function(t,e,a){var r;if(a>e)for(r=t._first;r&&r._start<=a;){if(r.data==="isPause"&&r._start>e)return r;r=r._next}else for(r=t._last;r&&r._start>=a;){if(r.data==="isPause"&&r._start<e)return r;r=r._prev}},Vo=function(t,e,a,r){var l=t._repeat,c=_n(e)||0,f=t._tTime/t._tDur;return f&&!r&&(t._time*=c/t._dur),t._dur=c,t._tDur=l?l<0?1e10:_n(c*(l+1)+t._rDelay*l):c,f>0&&!r&&Ff(t,t._tTime=t._tDur*f),t.parent&&Bf(t),a||Es(t.parent,t),t},_y=function(t){return t instanceof jn?Es(t):Vo(t,t._dur)},FD={_start:0,endTime:cu,totalDuration:cu},Pi=function s(t,e,a){var r=t.labels,l=t._recent||FD,c=t.duration()>=Ii?l.endTime(!1):t._dur,f,d,p;return Dn(e)&&(isNaN(e)||e in r)?(d=e.charAt(0),p=e.substr(-1)==="%",f=e.indexOf("="),d==="<"||d===">"?(f>=0&&(e=e.replace(/=/,"")),(d==="<"?l._start:l.endTime(l._repeat>=0))+(parseFloat(e.substr(1))||0)*(p?(f<0?l:a).totalDuration()/100:1)):f<0?(e in r||(r[e]=c),r[e]):(d=parseFloat(e.charAt(f-1)+e.substr(f+1)),p&&a&&(d=d/100*(Wn(a)?a[0]:a).totalDuration()),f>1?s(t,e.substr(0,f-1),a)+d:c+d)):e==null?c:+e},nu=function(t,e,a){var r=Wa(e[1]),l=(r?2:1)+(t<2?0:1),c=e[l],f,d;if(r&&(c.duration=e[1]),c.parent=a,t){for(f=c,d=a;d&&!("immediateRender"in f);)f=d.vars.defaults||{},d=ai(d.vars.inherit)&&d.parent;c.immediateRender=ai(f.immediateRender),t<2?c.runBackwards=1:c.startAt=e[l-1]}return new mn(e[0],c,e[l+1])},Fr=function(t,e){return t||t===0?e(t):e},bu=function(t,e,a){return a<t?t:a>e?e:a},Xn=function(t,e){return!Dn(t)||!(e=wD.exec(t))?"":e[1]},HD=function(t,e,a){return Fr(a,function(r){return bu(t,e,r)})},Pm=[].slice,kS=function(t,e){return t&&fa(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&fa(t[0]))&&!t.nodeType&&t!==ia},GD=function(t,e,a){return a===void 0&&(a=[]),t.forEach(function(r){var l;return Dn(r)&&!e||kS(r,1)?(l=a).push.apply(l,Bi(r)):a.push(r)})||a},Bi=function(t,e,a){return Qe&&!e&&Qe.selector?Qe.selector(t):Dn(t)&&!a&&(Um||!ko())?Pm.call((e||f_).querySelectorAll(t),0):Wn(t)?GD(t,a):kS(t)?Pm.call(t,0):t?[t]:[]},zm=function(t){return t=Bi(t)[0]||uu("Invalid scope")||{},function(e){var a=t.current||t.nativeElement||t;return Bi(e,a.querySelectorAll?a:a===t?uu("Invalid scope")||f_.createElement("div"):t)}},XS=function(t){return t.sort(function(){return .5-Math.random()})},WS=function(t){if(sn(t))return t;var e=fa(t)?t:{each:t},a=Ts(e.ease),r=e.from||0,l=parseFloat(e.base)||0,c={},f=r>0&&r<1,d=isNaN(r)||f,p=e.axis,m=r,g=r;return Dn(r)?m=g={center:.5,edges:.5,end:1}[r]||0:!f&&d&&(m=r[0],g=r[1]),function(v,S,E){var M=(E||e).length,y=c[M],x,w,C,b,N,I,P,F,A;if(!y){if(A=e.grid==="auto"?0:(e.grid||[1,Ii])[1],!A){for(P=-Ii;P<(P=E[A++].getBoundingClientRect().left)&&A<M;);A<M&&A--}for(y=c[M]=[],x=d?Math.min(A,M)*m-.5:r%A,w=A===Ii?0:d?M*g/A-.5:r/A|0,P=0,F=Ii,I=0;I<M;I++)C=I%A-x,b=w-(I/A|0),y[I]=N=p?Math.abs(p==="y"?b:C):AS(C*C+b*b),N>P&&(P=N),N<F&&(F=N);r==="random"&&XS(y),y.max=P-F,y.min=F,y.v=M=(parseFloat(e.amount)||parseFloat(e.each)*(A>M?M-1:p?p==="y"?M/A:A:Math.max(A,M/A))||0)*(r==="edges"?-1:1),y.b=M<0?l-M:l,y.u=Xn(e.amount||e.each)||0,a=a&&M<0?eM(a):a}return M=(y[v]-y.min)/y.max||0,_n(y.b+(a?a(M):M)*y.v)+y.u}},Im=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(a){var r=_n(Math.round(parseFloat(a)/t)*t*e);return(r-r%1)/e+(Wa(a)?0:Xn(a))}},qS=function(t,e){var a=Wn(t),r,l;return!a&&fa(t)&&(r=a=t.radius||Ii,t.values?(t=Bi(t.values),(l=!Wa(t[0]))&&(r*=r)):t=Im(t.increment)),Fr(e,a?sn(t)?function(c){return l=t(c),Math.abs(l-c)<=r?l:c}:function(c){for(var f=parseFloat(l?c.x:c),d=parseFloat(l?c.y:0),p=Ii,m=0,g=t.length,v,S;g--;)l?(v=t[g].x-f,S=t[g].y-d,v=v*v+S*S):v=Math.abs(t[g]-f),v<p&&(p=v,m=g);return m=!r||p<=r?t[m]:c,l||m===c||Wa(c)?m:m+Xn(c)}:Im(t))},YS=function(t,e,a,r){return Fr(Wn(t)?!e:a===!0?!!(a=0):!r,function(){return Wn(t)?t[~~(Math.random()*t.length)]:(a=a||1e-5)&&(r=a<1?Math.pow(10,(a+"").length-2):1)&&Math.floor(Math.round((t-a/2+Math.random()*(e-t+a*.99))/a)*a*r)/r})},VD=function(){for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];return function(r){return e.reduce(function(l,c){return c(l)},r)}},kD=function(t,e){return function(a){return t(parseFloat(a))+(e||Xn(a))}},XD=function(t,e,a){return ZS(t,e,0,1,a)},jS=function(t,e,a){return Fr(a,function(r){return t[~~e(r)]})},WD=function s(t,e,a){var r=e-t;return Wn(t)?jS(t,s(0,t.length),e):Fr(a,function(l){return(r+(l-t)%r)%r+t})},qD=function s(t,e,a){var r=e-t,l=r*2;return Wn(t)?jS(t,s(0,t.length-1),e):Fr(a,function(c){return c=(l+(c-t)%l)%l||0,t+(c>r?l-c:c)})},fu=function(t){for(var e=0,a="",r,l,c,f;~(r=t.indexOf("random(",e));)c=t.indexOf(")",r),f=t.charAt(r+7)==="[",l=t.substr(r+7,c-r-7).match(f?DS:Dm),a+=t.substr(e,r-e)+YS(f?l:+l[0],f?0:+l[1],+l[2]||1e-5),e=c+1;return a+t.substr(e,t.length-e)},ZS=function(t,e,a,r,l){var c=e-t,f=r-a;return Fr(l,function(d){return a+((d-t)/c*f||0)})},YD=function s(t,e,a,r){var l=isNaN(t+e)?0:function(S){return(1-S)*t+S*e};if(!l){var c=Dn(t),f={},d,p,m,g,v;if(a===!0&&(r=1)&&(a=null),c)t={p:t},e={p:e};else if(Wn(t)&&!Wn(e)){for(m=[],g=t.length,v=g-2,p=1;p<g;p++)m.push(s(t[p-1],t[p]));g--,l=function(E){E*=g;var M=Math.min(v,~~E);return m[M](E-M)},a=e}else r||(t=Ho(Wn(t)?[]:{},t));if(!m){for(d in e)g_.call(f,t,d,"get",e[d]);l=function(E){return S_(E,f)||(c?t.p:t)}}}return Fr(a,l)},gy=function(t,e,a){var r=t.labels,l=Ii,c,f,d;for(c in r)f=r[c]-e,f<0==!!a&&f&&l>(f=Math.abs(f))&&(d=c,l=f);return d},Mi=function(t,e,a){var r=t.vars,l=r[e],c=Qe,f=t._ctx,d,p,m;if(l)return d=r[e+"Params"],p=r.callbackScope||t,a&&Nr.length&&Af(),f&&(Qe=f),m=d?l.apply(p,d):l.call(p),Qe=c,m},Ql=function(t){return Ir(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Bn),t.progress()<1&&Mi(t,"onInterrupt"),t},Ro,KS=[],QS=function(t){if(t)if(t=!t.name&&t.default||t,c_()||t.headless){var e=t.name,a=sn(t),r=e&&!a&&t.init?function(){this._props=[]}:t,l={init:cu,render:S_,add:g_,kill:u3,modifier:l3,rawVars:0},c={targetTest:0,get:0,getSetter:y_,aliases:{},register:0};if(ko(),t!==r){if(xi[e])return;Ai(r,Ai(Rf(t,l),c)),Ho(r.prototype,Ho(l,Rf(t,c))),xi[r.prop=e]=r,t.targetTest&&(_f.push(r),d_[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}NS(e,r),t.register&&t.register(li,r,si)}else KS.push(t)},We=255,Jl={aqua:[0,We,We],lime:[0,We,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,We],navy:[0,0,128],white:[We,We,We],olive:[128,128,0],yellow:[We,We,0],orange:[We,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[We,0,0],pink:[We,192,203],cyan:[0,We,We],transparent:[We,We,We,0]},Lp=function(t,e,a){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(a-e)*t*6:t<.5?a:t*3<2?e+(a-e)*(2/3-t)*6:e)*We+.5|0},JS=function(t,e,a){var r=t?Wa(t)?[t>>16,t>>8&We,t&We]:0:Jl.black,l,c,f,d,p,m,g,v,S,E;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Jl[t])r=Jl[t];else if(t.charAt(0)==="#"){if(t.length<6&&(l=t.charAt(1),c=t.charAt(2),f=t.charAt(3),t="#"+l+l+c+c+f+f+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&We,r&We,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&We,t&We]}else if(t.substr(0,3)==="hsl"){if(r=E=t.match(Dm),!e)d=+r[0]%360/360,p=+r[1]/100,m=+r[2]/100,c=m<=.5?m*(p+1):m+p-m*p,l=m*2-c,r.length>3&&(r[3]*=1),r[0]=Lp(d+1/3,l,c),r[1]=Lp(d,l,c),r[2]=Lp(d-1/3,l,c);else if(~t.indexOf("="))return r=t.match(wS),a&&r.length<4&&(r[3]=1),r}else r=t.match(Dm)||Jl.transparent;r=r.map(Number)}return e&&!E&&(l=r[0]/We,c=r[1]/We,f=r[2]/We,g=Math.max(l,c,f),v=Math.min(l,c,f),m=(g+v)/2,g===v?d=p=0:(S=g-v,p=m>.5?S/(2-g-v):S/(g+v),d=g===l?(c-f)/S+(c<f?6:0):g===c?(f-l)/S+2:(l-c)/S+4,d*=60),r[0]=~~(d+.5),r[1]=~~(p*100+.5),r[2]=~~(m*100+.5)),a&&r.length<4&&(r[3]=1),r},$S=function(t){var e=[],a=[],r=-1;return t.split(Or).forEach(function(l){var c=l.match(Ao)||[];e.push.apply(e,c),a.push(r+=c.length+1)}),e.c=a,e},vy=function(t,e,a){var r="",l=(t+r).match(Or),c=e?"hsla(":"rgba(",f=0,d,p,m,g;if(!l)return t;if(l=l.map(function(v){return(v=JS(v,e,1))&&c+(e?v[0]+","+v[1]+"%,"+v[2]+"%,"+v[3]:v.join(","))+")"}),a&&(m=$S(t),d=a.c,d.join(r)!==m.c.join(r)))for(p=t.replace(Or,"1").split(Ao),g=p.length-1;f<g;f++)r+=p[f]+(~d.indexOf(f)?l.shift()||c+"0,0,0,0)":(m.length?m:l.length?l:a).shift());if(!p)for(p=t.split(Or),g=p.length-1;f<g;f++)r+=p[f]+l[f];return r+p[g]},Or=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Jl)s+="|"+t+"\\b";return new RegExp(s+")","gi")}(),jD=/hsl[a]?\(/,tM=function(t){var e=t.join(" "),a;if(Or.lastIndex=0,Or.test(e))return a=jD.test(e),t[1]=vy(t[1],a),t[0]=vy(t[0],a,$S(t[1])),!0},hu,Si=function(){var s=Date.now,t=500,e=33,a=s(),r=a,l=1e3/240,c=l,f=[],d,p,m,g,v,S,E=function M(y){var x=s()-r,w=y===!0,C,b,N,I;if((x>t||x<0)&&(a+=x-e),r+=x,N=r-a,C=N-c,(C>0||w)&&(I=++g.frame,v=N-g.time*1e3,g.time=N=N/1e3,c+=C+(C>=l?4:l-C),b=1),w||(d=p(M)),b)for(S=0;S<f.length;S++)f[S](N,v,I,y)};return g={time:0,frame:0,tick:function(){E(!0)},deltaRatio:function(y){return v/(1e3/(y||60))},wake:function(){US&&(!Um&&c_()&&(ia=Um=window,f_=ia.document||{},bi.gsap=li,(ia.gsapVersions||(ia.gsapVersions=[])).push(li.version),LS(bf||ia.GreenSockGlobals||!ia.gsap&&ia||{}),KS.forEach(QS)),m=typeof requestAnimationFrame<"u"&&requestAnimationFrame,d&&g.sleep(),p=m||function(y){return setTimeout(y,c-g.time*1e3+1|0)},hu=1,E(2))},sleep:function(){(m?cancelAnimationFrame:clearTimeout)(d),hu=0,p=cu},lagSmoothing:function(y,x){t=y||1/0,e=Math.min(x||33,t)},fps:function(y){l=1e3/(y||240),c=g.time*1e3+l},add:function(y,x,w){var C=x?function(b,N,I,P){y(b,N,I,P),g.remove(C)}:y;return g.remove(y),f[w?"unshift":"push"](C),ko(),C},remove:function(y,x){~(x=f.indexOf(y))&&f.splice(x,1)&&S>=x&&S--},_listeners:f},g}(),ko=function(){return!hu&&Si.wake()},Me={},ZD=/^[\d.\-M][\d.\-,\s]/,KD=/["']/g,QD=function(t){for(var e={},a=t.substr(1,t.length-3).split(":"),r=a[0],l=1,c=a.length,f,d,p;l<c;l++)d=a[l],f=l!==c-1?d.lastIndexOf(","):d.length,p=d.substr(0,f),e[r]=isNaN(p)?p.replace(KD,"").trim():+p,r=d.substr(f+1).trim();return e},JD=function(t){var e=t.indexOf("(")+1,a=t.indexOf(")"),r=t.indexOf("(",e);return t.substring(e,~r&&r<a?t.indexOf(")",a+1):a)},$D=function(t){var e=(t+"").split("("),a=Me[e[0]];return a&&e.length>1&&a.config?a.config.apply(null,~t.indexOf("{")?[QD(e[1])]:JD(t).split(",").map(IS)):Me._CE&&ZD.test(t)?Me._CE("",t):a},eM=function(t){return function(e){return 1-t(1-e)}},nM=function s(t,e){for(var a=t._first,r;a;)a instanceof jn?s(a,e):a.vars.yoyoEase&&(!a._yoyo||!a._repeat)&&a._yoyo!==e&&(a.timeline?s(a.timeline,e):(r=a._ease,a._ease=a._yEase,a._yEase=r,a._yoyo=e)),a=a._next},Ts=function(t,e){return t&&(sn(t)?t:Me[t]||$D(t))||e},Us=function(t,e,a,r){a===void 0&&(a=function(d){return 1-e(1-d)}),r===void 0&&(r=function(d){return d<.5?e(d*2)/2:1-e((1-d)*2)/2});var l={easeIn:e,easeOut:a,easeInOut:r},c;return ri(t,function(f){Me[f]=bi[f]=l,Me[c=f.toLowerCase()]=a;for(var d in l)Me[c+(d==="easeIn"?".in":d==="easeOut"?".out":".inOut")]=Me[f+"."+d]=l[d]}),l},iM=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Np=function s(t,e,a){var r=e>=1?e:1,l=(a||(t?.3:.45))/(e<1?e:1),c=l/Cm*(Math.asin(1/r)||0),f=function(m){return m===1?1:r*Math.pow(2,-10*m)*RD((m-c)*l)+1},d=t==="out"?f:t==="in"?function(p){return 1-f(1-p)}:iM(f);return l=Cm/l,d.config=function(p,m){return s(t,p,m)},d},Op=function s(t,e){e===void 0&&(e=1.70158);var a=function(c){return c?--c*c*((e+1)*c+e)+1:0},r=t==="out"?a:t==="in"?function(l){return 1-a(1-l)}:iM(a);return r.config=function(l){return s(t,l)},r};ri("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;Us(s+",Power"+(e-1),t?function(a){return Math.pow(a,e)}:function(a){return a},function(a){return 1-Math.pow(1-a,e)},function(a){return a<.5?Math.pow(a*2,e)/2:1-Math.pow((1-a)*2,e)/2})});Me.Linear.easeNone=Me.none=Me.Linear.easeIn;Us("Elastic",Np("in"),Np("out"),Np());(function(s,t){var e=1/t,a=2*e,r=2.5*e,l=function(f){return f<e?s*f*f:f<a?s*Math.pow(f-1.5/t,2)+.75:f<r?s*(f-=2.25/t)*f+.9375:s*Math.pow(f-2.625/t,2)+.984375};Us("Bounce",function(c){return 1-l(1-c)},l)})(7.5625,2.75);Us("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Us("Circ",function(s){return-(AS(1-s*s)-1)});Us("Sine",function(s){return s===1?1:-AD(s*TD)+1});Us("Back",Op("in"),Op("out"),Op());Me.SteppedEase=Me.steps=bi.SteppedEase={config:function(t,e){t===void 0&&(t=1);var a=1/t,r=t+(e?0:1),l=e?1:0,c=1-qe;return function(f){return((r*bu(0,c,f)|0)+l)*a}}};Fo.ease=Me["quad.out"];ri("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return p_+=s+","+s+"Params,"});var aM=function(t,e){this.id=bD++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:PS,this.set=e?e.getSetter:y_},du=function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Vo(this,+e.duration,1,1),this.data=e.data,Qe&&(this._ctx=Qe,Qe.data.push(this)),hu||Si.wake()}var t=s.prototype;return t.delay=function(a){return a||a===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+a-this._delay),this._delay=a,this):this._delay},t.duration=function(a){return arguments.length?this.totalDuration(this._repeat>0?a+(a+this._rDelay)*this._repeat:a):this.totalDuration()&&this._dur},t.totalDuration=function(a){return arguments.length?(this._dirty=0,Vo(this,this._repeat<0?a:(a-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(a,r){if(ko(),!arguments.length)return this._tTime;var l=this._dp;if(l&&l.smoothChildTiming&&this._ts){for(Ff(this,a),!l._dp||l.parent||HS(l,this);l&&l.parent;)l.parent._time!==l._start+(l._ts>=0?l._tTime/l._ts:(l.totalDuration()-l._tTime)/-l._ts)&&l.totalTime(l._tTime,!0),l=l.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&a<this._tDur||this._ts<0&&a>0||!this._tDur&&!a)&&ra(this._dp,this,this._start-this._delay)}return(this._tTime!==a||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===qe||!a&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=a),zS(this,a,r)),this},t.time=function(a,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),a+my(this))%(this._dur+this._rDelay)||(a?this._dur:0),r):this._time},t.totalProgress=function(a,r){return arguments.length?this.totalTime(this.totalDuration()*a,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(a,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-a:a)+my(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(a,r){var l=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(a-1)*l,r):this._repeat?Go(this._tTime,l)+1:1},t.timeScale=function(a,r){if(!arguments.length)return this._rts===-qe?0:this._rts;if(this._rts===a)return this;var l=this.parent&&this._ts?wf(this.parent._time,this):this._tTime;return this._rts=+a||0,this._ts=this._ps||a===-qe?0:this._rts,this.totalTime(bu(-Math.abs(this._delay),this.totalDuration(),l),r!==!1),Bf(this),OD(this)},t.paused=function(a){return arguments.length?(this._ps!==a&&(this._ps=a,a?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ko(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==qe&&(this._tTime-=qe)))),this):this._ps},t.startTime=function(a){if(arguments.length){this._start=a;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&ra(r,this,a-this._delay),this}return this._start},t.endTime=function(a){return this._start+(ai(a)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(a){var r=this.parent||this._dp;return r?a&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?wf(r.rawTime(a),this):this._tTime:this._tTime},t.revert=function(a){a===void 0&&(a=DD);var r=Bn;return Bn=a,__(this)&&(this.timeline&&this.timeline.revert(a),this.totalTime(-.01,a.suppressEvents)),this.data!=="nested"&&a.kill!==!1&&this.kill(),Bn=r,this},t.globalTime=function(a){for(var r=this,l=arguments.length?a:r.rawTime();r;)l=r._start+l/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(a):l},t.repeat=function(a){return arguments.length?(this._repeat=a===1/0?-2:a,_y(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(a){if(arguments.length){var r=this._time;return this._rDelay=a,_y(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},t.seek=function(a,r){return this.totalTime(Pi(this,a),ai(r))},t.restart=function(a,r){return this.play().totalTime(a?-this._delay:0,ai(r)),this._dur||(this._zTime=-qe),this},t.play=function(a,r){return a!=null&&this.seek(a,r),this.reversed(!1).paused(!1)},t.reverse=function(a,r){return a!=null&&this.seek(a||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(a,r){return a!=null&&this.seek(a,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(a){return arguments.length?(!!a!==this.reversed()&&this.timeScale(-this._rts||(a?-qe:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-qe,this},t.isActive=function(){var a=this.parent||this._dp,r=this._start,l;return!!(!a||this._ts&&this._initted&&a.isActive()&&(l=a.rawTime(!0))>=r&&l<this.endTime(!0)-qe)},t.eventCallback=function(a,r,l){var c=this.vars;return arguments.length>1?(r?(c[a]=r,l&&(c[a+"Params"]=l),a==="onUpdate"&&(this._onUpdate=r)):delete c[a],this):c[a]},t.then=function(a){var r=this;return new Promise(function(l){var c=sn(a)?a:BS,f=function(){var p=r.then;r.then=null,sn(c)&&(c=c(r))&&(c.then||c===r)&&(r.then=p),l(c),r.then=p};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?f():r._prom=f})},t.kill=function(){Ql(this)},s}();Ai(du.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-qe,_prom:0,_ps:!1,_rts:1});var jn=function(s){bS(t,s);function t(a,r){var l;return a===void 0&&(a={}),l=s.call(this,a)||this,l.labels={},l.smoothChildTiming=!!a.smoothChildTiming,l.autoRemoveChildren=!!a.autoRemoveChildren,l._sort=ai(a.sortChildren),tn&&ra(a.parent||tn,Ba(l),r),a.reversed&&l.reverse(),a.paused&&l.paused(!0),a.scrollTrigger&&GS(Ba(l),a.scrollTrigger),l}var e=t.prototype;return e.to=function(r,l,c){return nu(0,arguments,this),this},e.from=function(r,l,c){return nu(1,arguments,this),this},e.fromTo=function(r,l,c,f){return nu(2,arguments,this),this},e.set=function(r,l,c){return l.duration=0,l.parent=this,eu(l).repeatDelay||(l.repeat=0),l.immediateRender=!!l.immediateRender,new mn(r,l,Pi(this,c),1),this},e.call=function(r,l,c){return ra(this,mn.delayedCall(0,r,l),c)},e.staggerTo=function(r,l,c,f,d,p,m){return c.duration=l,c.stagger=c.stagger||f,c.onComplete=p,c.onCompleteParams=m,c.parent=this,new mn(r,c,Pi(this,d)),this},e.staggerFrom=function(r,l,c,f,d,p,m){return c.runBackwards=1,eu(c).immediateRender=ai(c.immediateRender),this.staggerTo(r,l,c,f,d,p,m)},e.staggerFromTo=function(r,l,c,f,d,p,m,g){return f.startAt=c,eu(f).immediateRender=ai(f.immediateRender),this.staggerTo(r,l,f,d,p,m,g)},e.render=function(r,l,c){var f=this._time,d=this._dirty?this.totalDuration():this._tDur,p=this._dur,m=r<=0?0:_n(r),g=this._zTime<0!=r<0&&(this._initted||!p),v,S,E,M,y,x,w,C,b,N,I,P;if(this!==tn&&m>d&&r>=0&&(m=d),m!==this._tTime||c||g){if(f!==this._time&&p&&(m+=this._time-f,r+=this._time-f),v=m,b=this._start,C=this._ts,x=!C,g&&(p||(f=this._zTime),(r||!l)&&(this._zTime=r)),this._repeat){if(I=this._yoyo,y=p+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(y*100+r,l,c);if(v=_n(m%y),m===d?(M=this._repeat,v=p):(N=_n(m/y),M=~~N,M&&M===N&&(v=p,M--),v>p&&(v=p)),N=Go(this._tTime,y),!f&&this._tTime&&N!==M&&this._tTime-N*y-this._dur<=0&&(N=M),I&&M&1&&(v=p-v,P=1),M!==N&&!this._lock){var F=I&&N&1,A=F===(I&&M&1);if(M<N&&(F=!F),f=F?0:m%p?p:m,this._lock=1,this.render(f||(P?0:_n(M*y)),l,!p)._lock=0,this._tTime=m,!l&&this.parent&&Mi(this,"onRepeat"),this.vars.repeatRefresh&&!P&&(this.invalidate()._lock=1),f&&f!==this._time||x!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(p=this._dur,d=this._tDur,A&&(this._lock=2,f=F?p:-1e-4,this.render(f,!0),this.vars.repeatRefresh&&!P&&this.invalidate()),this._lock=0,!this._ts&&!x)return this;nM(this,P)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(w=BD(this,_n(f),_n(v)),w&&(m-=v-(v=w._start))),this._tTime=m,this._time=v,this._act=!C,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,f=0),!f&&m&&!l&&!N&&(Mi(this,"onStart"),this._tTime!==m))return this;if(v>=f&&r>=0)for(S=this._first;S;){if(E=S._next,(S._act||v>=S._start)&&S._ts&&w!==S){if(S.parent!==this)return this.render(r,l,c);if(S.render(S._ts>0?(v-S._start)*S._ts:(S._dirty?S.totalDuration():S._tDur)+(v-S._start)*S._ts,l,c),v!==this._time||!this._ts&&!x){w=0,E&&(m+=this._zTime=-qe);break}}S=E}else{S=this._last;for(var U=r<0?r:v;S;){if(E=S._prev,(S._act||U<=S._end)&&S._ts&&w!==S){if(S.parent!==this)return this.render(r,l,c);if(S.render(S._ts>0?(U-S._start)*S._ts:(S._dirty?S.totalDuration():S._tDur)+(U-S._start)*S._ts,l,c||Bn&&__(S)),v!==this._time||!this._ts&&!x){w=0,E&&(m+=this._zTime=U?-qe:qe);break}}S=E}}if(w&&!l&&(this.pause(),w.render(v>=f?0:-qe)._zTime=v>=f?1:-1,this._ts))return this._start=b,Bf(this),this.render(r,l,c);this._onUpdate&&!l&&Mi(this,"onUpdate",!0),(m===d&&this._tTime>=this.totalDuration()||!m&&f)&&(b===this._start||Math.abs(C)!==Math.abs(this._ts))&&(this._lock||((r||!p)&&(m===d&&this._ts>0||!m&&this._ts<0)&&Ir(this,1),!l&&!(r<0&&!f)&&(m||f||!d)&&(Mi(this,m===d&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(m<d&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(r,l){var c=this;if(Wa(l)||(l=Pi(this,l,r)),!(r instanceof du)){if(Wn(r))return r.forEach(function(f){return c.add(f,l)}),this;if(Dn(r))return this.addLabel(r,l);if(sn(r))r=mn.delayedCall(0,r);else return this}return this!==r?ra(this,r,l):this},e.getChildren=function(r,l,c,f){r===void 0&&(r=!0),l===void 0&&(l=!0),c===void 0&&(c=!0),f===void 0&&(f=-Ii);for(var d=[],p=this._first;p;)p._start>=f&&(p instanceof mn?l&&d.push(p):(c&&d.push(p),r&&d.push.apply(d,p.getChildren(!0,l,c)))),p=p._next;return d},e.getById=function(r){for(var l=this.getChildren(1,1,1),c=l.length;c--;)if(l[c].vars.id===r)return l[c]},e.remove=function(r){return Dn(r)?this.removeLabel(r):sn(r)?this.killTweensOf(r):(r.parent===this&&If(this,r),r===this._recent&&(this._recent=this._last),Es(this))},e.totalTime=function(r,l){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=_n(Si.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),s.prototype.totalTime.call(this,r,l),this._forcing=0,this):this._tTime},e.addLabel=function(r,l){return this.labels[r]=Pi(this,l),this},e.removeLabel=function(r){return delete this.labels[r],this},e.addPause=function(r,l,c){var f=mn.delayedCall(0,l||cu,c);return f.data="isPause",this._hasPause=1,ra(this,f,Pi(this,r))},e.removePause=function(r){var l=this._first;for(r=Pi(this,r);l;)l._start===r&&l.data==="isPause"&&Ir(l),l=l._next},e.killTweensOf=function(r,l,c){for(var f=this.getTweensOf(r,c),d=f.length;d--;)wr!==f[d]&&f[d].kill(r,l);return this},e.getTweensOf=function(r,l){for(var c=[],f=Bi(r),d=this._first,p=Wa(l),m;d;)d instanceof mn?UD(d._targets,f)&&(p?(!wr||d._initted&&d._ts)&&d.globalTime(0)<=l&&d.globalTime(d.totalDuration())>l:!l||d.isActive())&&c.push(d):(m=d.getTweensOf(f,l)).length&&c.push.apply(c,m),d=d._next;return c},e.tweenTo=function(r,l){l=l||{};var c=this,f=Pi(c,r),d=l,p=d.startAt,m=d.onStart,g=d.onStartParams,v=d.immediateRender,S,E=mn.to(c,Ai({ease:l.ease||"none",lazy:!1,immediateRender:!1,time:f,overwrite:"auto",duration:l.duration||Math.abs((f-(p&&"time"in p?p.time:c._time))/c.timeScale())||qe,onStart:function(){if(c.pause(),!S){var y=l.duration||Math.abs((f-(p&&"time"in p?p.time:c._time))/c.timeScale());E._dur!==y&&Vo(E,y,0,1).render(E._time,!0,!0),S=1}m&&m.apply(E,g||[])}},l));return v?E.render(0):E},e.tweenFromTo=function(r,l,c){return this.tweenTo(l,Ai({startAt:{time:Pi(this,r)}},c))},e.recent=function(){return this._recent},e.nextLabel=function(r){return r===void 0&&(r=this._time),gy(this,Pi(this,r))},e.previousLabel=function(r){return r===void 0&&(r=this._time),gy(this,Pi(this,r),1)},e.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+qe)},e.shiftChildren=function(r,l,c){c===void 0&&(c=0);for(var f=this._first,d=this.labels,p;f;)f._start>=c&&(f._start+=r,f._end+=r),f=f._next;if(l)for(p in d)d[p]>=c&&(d[p]+=r);return Es(this)},e.invalidate=function(r){var l=this._first;for(this._lock=0;l;)l.invalidate(r),l=l._next;return s.prototype.invalidate.call(this,r)},e.clear=function(r){r===void 0&&(r=!0);for(var l=this._first,c;l;)c=l._next,this.remove(l),l=c;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Es(this)},e.totalDuration=function(r){var l=0,c=this,f=c._last,d=Ii,p,m,g;if(arguments.length)return c.timeScale((c._repeat<0?c.duration():c.totalDuration())/(c.reversed()?-r:r));if(c._dirty){for(g=c.parent;f;)p=f._prev,f._dirty&&f.totalDuration(),m=f._start,m>d&&c._sort&&f._ts&&!c._lock?(c._lock=1,ra(c,f,m-f._delay,1)._lock=0):d=m,m<0&&f._ts&&(l-=m,(!g&&!c._dp||g&&g.smoothChildTiming)&&(c._start+=m/c._ts,c._time-=m,c._tTime-=m),c.shiftChildren(-m,!1,-1/0),d=0),f._end>l&&f._ts&&(l=f._end),f=p;Vo(c,c===tn&&c._time>l?c._time:l,1,1),c._dirty=0}return c._tDur},t.updateRoot=function(r){if(tn._ts&&(zS(tn,wf(r,tn)),OS=Si.frame),Si.frame>=dy){dy+=Ti.autoSleep||120;var l=tn._first;if((!l||!l._ts)&&Ti.autoSleep&&Si._listeners.length<2){for(;l&&!l._ts;)l=l._next;l||Si.sleep()}}},t}(du);Ai(jn.prototype,{_lock:0,_hasPause:0,_forcing:0});var t3=function(t,e,a,r,l,c,f){var d=new si(this._pt,t,e,0,1,cM,null,l),p=0,m=0,g,v,S,E,M,y,x,w;for(d.b=a,d.e=r,a+="",r+="",(x=~r.indexOf("random("))&&(r=fu(r)),c&&(w=[a,r],c(w,t,e),a=w[0],r=w[1]),v=a.match(Dp)||[];g=Dp.exec(r);)E=g[0],M=r.substring(p,g.index),S?S=(S+1)%5:M.substr(-5)==="rgba("&&(S=1),E!==v[m++]&&(y=parseFloat(v[m-1])||0,d._pt={_next:d._pt,p:M||m===1?M:",",s:y,c:E.charAt(1)==="="?Uo(y,E)-y:parseFloat(E)-y,m:S&&S<4?Math.round:0},p=Dp.lastIndex);return d.c=p<r.length?r.substring(p,r.length):"",d.fp=f,(CS.test(r)||x)&&(d.e=0),this._pt=d,d},g_=function(t,e,a,r,l,c,f,d,p,m){sn(r)&&(r=r(l||0,t,c));var g=t[e],v=a!=="get"?a:sn(g)?p?t[e.indexOf("set")||!sn(t["get"+e.substr(3)])?e:"get"+e.substr(3)](p):t[e]():g,S=sn(g)?p?r3:lM:x_,E;if(Dn(r)&&(~r.indexOf("random(")&&(r=fu(r)),r.charAt(1)==="="&&(E=Uo(v,r)+(Xn(v)||0),(E||E===0)&&(r=E))),!m||v!==r||Bm)return!isNaN(v*r)&&r!==""?(E=new si(this._pt,t,e,+v||0,r-(v||0),typeof g=="boolean"?o3:uM,0,S),p&&(E.fp=p),f&&E.modifier(f,this,t),this._pt=E):(!g&&!(e in t)&&h_(e,r),t3.call(this,t,e,v,r,S,d||Ti.stringFilter,p))},e3=function(t,e,a,r,l){if(sn(t)&&(t=iu(t,l,e,a,r)),!fa(t)||t.style&&t.nodeType||Wn(t)||RS(t))return Dn(t)?iu(t,l,e,a,r):t;var c={},f;for(f in t)c[f]=iu(t[f],l,e,a,r);return c},rM=function(t,e,a,r,l,c){var f,d,p,m;if(xi[t]&&(f=new xi[t]).init(l,f.rawVars?e[t]:e3(e[t],r,l,c,a),a,r,c)!==!1&&(a._pt=d=new si(a._pt,l,t,0,1,f.render,f,0,f.priority),a!==Ro))for(p=a._ptLookup[a._targets.indexOf(l)],m=f._props.length;m--;)p[f._props[m]]=d;return f},wr,Bm,v_=function s(t,e,a){var r=t.vars,l=r.ease,c=r.startAt,f=r.immediateRender,d=r.lazy,p=r.onUpdate,m=r.runBackwards,g=r.yoyoEase,v=r.keyframes,S=r.autoRevert,E=t._dur,M=t._startAt,y=t._targets,x=t.parent,w=x&&x.data==="nested"?x.vars.targets:y,C=t._overwrite==="auto"&&!l_,b=t.timeline,N,I,P,F,A,U,G,nt,J,ct,lt,z,k;if(b&&(!v||!l)&&(l="none"),t._ease=Ts(l,Fo.ease),t._yEase=g?eM(Ts(g===!0?l:g,Fo.ease)):0,g&&t._yoyo&&!t._repeat&&(g=t._yEase,t._yEase=t._ease,t._ease=g),t._from=!b&&!!r.runBackwards,!b||v&&!r.stagger){if(nt=y[0]?Ms(y[0]).harness:0,z=nt&&r[nt.prop],N=Rf(r,d_),M&&(M._zTime<0&&M.progress(1),e<0&&m&&f&&!S?M.render(-1,!0):M.revert(m&&E?mf:CD),M._lazy=0),c){if(Ir(t._startAt=mn.set(y,Ai({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!M&&ai(d),startAt:null,delay:0,onUpdate:p&&function(){return Mi(t,"onUpdate")},stagger:0},c))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Bn||!f&&!S)&&t._startAt.revert(mf),f&&E&&e<=0&&a<=0){e&&(t._zTime=e);return}}else if(m&&E&&!M){if(e&&(f=!1),P=Ai({overwrite:!1,data:"isFromStart",lazy:f&&!M&&ai(d),immediateRender:f,stagger:0,parent:x},N),z&&(P[nt.prop]=z),Ir(t._startAt=mn.set(y,P)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Bn?t._startAt.revert(mf):t._startAt.render(-1,!0)),t._zTime=e,!f)s(t._startAt,qe,qe);else if(!e)return}for(t._pt=t._ptCache=0,d=E&&ai(d)||d&&!E,I=0;I<y.length;I++){if(A=y[I],G=A._gsap||m_(y)[I]._gsap,t._ptLookup[I]=ct={},Lm[G.id]&&Nr.length&&Af(),lt=w===y?I:w.indexOf(A),nt&&(J=new nt).init(A,z||N,t,lt,w)!==!1&&(t._pt=F=new si(t._pt,A,J.name,0,1,J.render,J,0,J.priority),J._props.forEach(function(W){ct[W]=F}),J.priority&&(U=1)),!nt||z)for(P in N)xi[P]&&(J=rM(P,N,t,lt,A,w))?J.priority&&(U=1):ct[P]=F=g_.call(t,A,P,"get",N[P],lt,w,0,r.stringFilter);t._op&&t._op[I]&&t.kill(A,t._op[I]),C&&t._pt&&(wr=t,tn.killTweensOf(A,ct,t.globalTime(e)),k=!t.parent,wr=0),t._pt&&d&&(Lm[G.id]=1)}U&&fM(t),t._onInit&&t._onInit(t)}t._onUpdate=p,t._initted=(!t._op||t._pt)&&!k,v&&e<=0&&b.render(Ii,!0,!0)},n3=function(t,e,a,r,l,c,f,d){var p=(t._pt&&t._ptCache||(t._ptCache={}))[e],m,g,v,S;if(!p)for(p=t._ptCache[e]=[],v=t._ptLookup,S=t._targets.length;S--;){if(m=v[S][e],m&&m.d&&m.d._pt)for(m=m.d._pt;m&&m.p!==e&&m.fp!==e;)m=m._next;if(!m)return Bm=1,t.vars[e]="+=0",v_(t,f),Bm=0,d?uu(e+" not eligible for reset"):1;p.push(m)}for(S=p.length;S--;)g=p[S],m=g._pt||g,m.s=(r||r===0)&&!l?r:m.s+(r||0)+c*m.c,m.c=a-m.s,g.e&&(g.e=cn(a)+Xn(g.e)),g.b&&(g.b=m.s+Xn(g.b))},i3=function(t,e){var a=t[0]?Ms(t[0]).harness:0,r=a&&a.aliases,l,c,f,d;if(!r)return e;l=Ho({},e);for(c in r)if(c in l)for(d=r[c].split(","),f=d.length;f--;)l[d[f]]=l[c];return l},a3=function(t,e,a,r){var l=e.ease||r||"power1.inOut",c,f;if(Wn(e))f=a[t]||(a[t]=[]),e.forEach(function(d,p){return f.push({t:p/(e.length-1)*100,v:d,e:l})});else for(c in e)f=a[c]||(a[c]=[]),c==="ease"||f.push({t:parseFloat(t),v:e[c],e:l})},iu=function(t,e,a,r,l){return sn(t)?t.call(e,a,r,l):Dn(t)&&~t.indexOf("random(")?fu(t):t},sM=p_+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",oM={};ri(sM+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return oM[s]=1});var mn=function(s){bS(t,s);function t(a,r,l,c){var f;typeof r=="number"&&(l.duration=r,r=l,l=null),f=s.call(this,c?r:eu(r))||this;var d=f.vars,p=d.duration,m=d.delay,g=d.immediateRender,v=d.stagger,S=d.overwrite,E=d.keyframes,M=d.defaults,y=d.scrollTrigger,x=d.yoyoEase,w=r.parent||tn,C=(Wn(a)||RS(a)?Wa(a[0]):"length"in r)?[a]:Bi(a),b,N,I,P,F,A,U,G;if(f._targets=C.length?m_(C):uu("GSAP target "+a+" not found. https://gsap.com",!Ti.nullTargetWarn)||[],f._ptLookup=[],f._overwrite=S,E||v||sf(p)||sf(m)){if(r=f.vars,b=f.timeline=new jn({data:"nested",defaults:M||{},targets:w&&w.data==="nested"?w.vars.targets:C}),b.kill(),b.parent=b._dp=Ba(f),b._start=0,v||sf(p)||sf(m)){if(P=C.length,U=v&&WS(v),fa(v))for(F in v)~sM.indexOf(F)&&(G||(G={}),G[F]=v[F]);for(N=0;N<P;N++)I=Rf(r,oM),I.stagger=0,x&&(I.yoyoEase=x),G&&Ho(I,G),A=C[N],I.duration=+iu(p,Ba(f),N,A,C),I.delay=(+iu(m,Ba(f),N,A,C)||0)-f._delay,!v&&P===1&&I.delay&&(f._delay=m=I.delay,f._start+=m,I.delay=0),b.to(A,I,U?U(N,A,C):0),b._ease=Me.none;b.duration()?p=m=0:f.timeline=0}else if(E){eu(Ai(b.vars.defaults,{ease:"none"})),b._ease=Ts(E.ease||r.ease||"none");var nt=0,J,ct,lt;if(Wn(E))E.forEach(function(z){return b.to(C,z,">")}),b.duration();else{I={};for(F in E)F==="ease"||F==="easeEach"||a3(F,E[F],I,E.easeEach);for(F in I)for(J=I[F].sort(function(z,k){return z.t-k.t}),nt=0,N=0;N<J.length;N++)ct=J[N],lt={ease:ct.e,duration:(ct.t-(N?J[N-1].t:0))/100*p},lt[F]=ct.v,b.to(C,lt,nt),nt+=lt.duration;b.duration()<p&&b.to({},{duration:p-b.duration()})}}p||f.duration(p=b.duration())}else f.timeline=0;return S===!0&&!l_&&(wr=Ba(f),tn.killTweensOf(C),wr=0),ra(w,Ba(f),l),r.reversed&&f.reverse(),r.paused&&f.paused(!0),(g||!p&&!E&&f._start===_n(w._time)&&ai(g)&&PD(Ba(f))&&w.data!=="nested")&&(f._tTime=-qe,f.render(Math.max(0,-m)||0)),y&&GS(Ba(f),y),f}var e=t.prototype;return e.render=function(r,l,c){var f=this._time,d=this._tDur,p=this._dur,m=r<0,g=r>d-qe&&!m?d:r<qe?0:r,v,S,E,M,y,x,w,C,b;if(!p)ID(this,r,l,c);else if(g!==this._tTime||!r||c||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==m||this._lazy){if(v=g,C=this.timeline,this._repeat){if(M=p+this._rDelay,this._repeat<-1&&m)return this.totalTime(M*100+r,l,c);if(v=_n(g%M),g===d?(E=this._repeat,v=p):(y=_n(g/M),E=~~y,E&&E===y?(v=p,E--):v>p&&(v=p)),x=this._yoyo&&E&1,x&&(b=this._yEase,v=p-v),y=Go(this._tTime,M),v===f&&!c&&this._initted&&E===y)return this._tTime=g,this;E!==y&&(C&&this._yEase&&nM(C,x),this.vars.repeatRefresh&&!x&&!this._lock&&v!==M&&this._initted&&(this._lock=c=1,this.render(_n(M*E),!0).invalidate()._lock=0))}if(!this._initted){if(VS(this,m?r:v,c,l,g))return this._tTime=0,this;if(f!==this._time&&!(c&&this.vars.repeatRefresh&&E!==y))return this;if(p!==this._dur)return this.render(r,l,c)}if(this._tTime=g,this._time=v,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=w=(b||this._ease)(v/p),this._from&&(this.ratio=w=1-w),!f&&g&&!l&&!y&&(Mi(this,"onStart"),this._tTime!==g))return this;for(S=this._pt;S;)S.r(w,S.d),S=S._next;C&&C.render(r<0?r:C._dur*C._ease(v/this._dur),l,c)||this._startAt&&(this._zTime=r),this._onUpdate&&!l&&(m&&Nm(this,r,l,c),Mi(this,"onUpdate")),this._repeat&&E!==y&&this.vars.onRepeat&&!l&&this.parent&&Mi(this,"onRepeat"),(g===this._tDur||!g)&&this._tTime===g&&(m&&!this._onUpdate&&Nm(this,r,!0,!0),(r||!p)&&(g===this._tDur&&this._ts>0||!g&&this._ts<0)&&Ir(this,1),!l&&!(m&&!f)&&(g||f||x)&&(Mi(this,g===d?"onComplete":"onReverseComplete",!0),this._prom&&!(g<d&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),s.prototype.invalidate.call(this,r)},e.resetTo=function(r,l,c,f,d){hu||Si.wake(),this._ts||this.play();var p=Math.min(this._dur,(this._dp._time-this._start)*this._ts),m;return this._initted||v_(this,p),m=this._ease(p/this._dur),n3(this,r,l,c,f,m,p,d)?this.resetTo(r,l,c,f,1):(Ff(this,0),this.parent||FS(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(r,l){if(l===void 0&&(l="all"),!r&&(!l||l==="all"))return this._lazy=this._pt=0,this.parent?Ql(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Bn),this;if(this.timeline){var c=this.timeline.totalDuration();return this.timeline.killTweensOf(r,l,wr&&wr.vars.overwrite!==!0)._first||Ql(this),this.parent&&c!==this.timeline.totalDuration()&&Vo(this,this._dur*this.timeline._tDur/c,0,1),this}var f=this._targets,d=r?Bi(r):f,p=this._ptLookup,m=this._pt,g,v,S,E,M,y,x;if((!l||l==="all")&&ND(f,d))return l==="all"&&(this._pt=0),Ql(this);for(g=this._op=this._op||[],l!=="all"&&(Dn(l)&&(M={},ri(l,function(w){return M[w]=1}),l=M),l=i3(f,l)),x=f.length;x--;)if(~d.indexOf(f[x])){v=p[x],l==="all"?(g[x]=l,E=v,S={}):(S=g[x]=g[x]||{},E=l);for(M in E)y=v&&v[M],y&&((!("kill"in y.d)||y.d.kill(M)===!0)&&If(this,y,"_pt"),delete v[M]),S!=="all"&&(S[M]=1)}return this._initted&&!this._pt&&m&&Ql(this),this},t.to=function(r,l){return new t(r,l,arguments[2])},t.from=function(r,l){return nu(1,arguments)},t.delayedCall=function(r,l,c,f){return new t(l,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:l,onReverseComplete:l,onCompleteParams:c,onReverseCompleteParams:c,callbackScope:f})},t.fromTo=function(r,l,c){return nu(2,arguments)},t.set=function(r,l){return l.duration=0,l.repeatDelay||(l.repeat=0),new t(r,l)},t.killTweensOf=function(r,l,c){return tn.killTweensOf(r,l,c)},t}(du);Ai(mn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ri("staggerTo,staggerFrom,staggerFromTo",function(s){mn[s]=function(){var t=new jn,e=Pm.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var x_=function(t,e,a){return t[e]=a},lM=function(t,e,a){return t[e](a)},r3=function(t,e,a,r){return t[e](r.fp,a)},s3=function(t,e,a){return t.setAttribute(e,a)},y_=function(t,e){return sn(t[e])?lM:u_(t[e])&&t.setAttribute?s3:x_},uM=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},o3=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},cM=function(t,e){var a=e._pt,r="";if(!t&&e.b)r=e.b;else if(t===1&&e.e)r=e.e;else{for(;a;)r=a.p+(a.m?a.m(a.s+a.c*t):Math.round((a.s+a.c*t)*1e4)/1e4)+r,a=a._next;r+=e.c}e.set(e.t,e.p,r,e)},S_=function(t,e){for(var a=e._pt;a;)a.r(t,a.d),a=a._next},l3=function(t,e,a,r){for(var l=this._pt,c;l;)c=l._next,l.p===r&&l.modifier(t,e,a),l=c},u3=function(t){for(var e=this._pt,a,r;e;)r=e._next,e.p===t&&!e.op||e.op===t?If(this,e,"_pt"):e.dep||(a=1),e=r;return!a},c3=function(t,e,a,r){r.mSet(t,e,r.m.call(r.tween,a,r.mt),r)},fM=function(t){for(var e=t._pt,a,r,l,c;e;){for(a=e._next,r=l;r&&r.pr>e.pr;)r=r._next;(e._prev=r?r._prev:c)?e._prev._next=e:l=e,(e._next=r)?r._prev=e:c=e,e=a}t._pt=l},si=function(){function s(e,a,r,l,c,f,d,p,m){this.t=a,this.s=l,this.c=c,this.p=r,this.r=f||uM,this.d=d||this,this.set=p||x_,this.pr=m||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(a,r,l){this.mSet=this.mSet||this.set,this.set=c3,this.m=a,this.mt=l,this.tween=r},s}();ri(p_+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return d_[s]=1});bi.TweenMax=bi.TweenLite=mn;bi.TimelineLite=bi.TimelineMax=jn;tn=new jn({sortChildren:!1,defaults:Fo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ti.stringFilter=tM;var bs=[],gf={},f3=[],xy=0,h3=0,Pp=function(t){return(gf[t]||f3).map(function(e){return e()})},Fm=function(){var t=Date.now(),e=[];t-xy>2&&(Pp("matchMediaInit"),bs.forEach(function(a){var r=a.queries,l=a.conditions,c,f,d,p;for(f in r)c=ia.matchMedia(r[f]).matches,c&&(d=1),c!==l[f]&&(l[f]=c,p=1);p&&(a.revert(),d&&e.push(a))}),Pp("matchMediaRevert"),e.forEach(function(a){return a.onMatch(a,function(r){return a.add(null,r)})}),xy=t,Pp("matchMedia"))},hM=function(){function s(e,a){this.selector=a&&zm(a),this.data=[],this._r=[],this.isReverted=!1,this.id=h3++,e&&this.add(e)}var t=s.prototype;return t.add=function(a,r,l){sn(a)&&(l=r,r=a,a=sn);var c=this,f=function(){var p=Qe,m=c.selector,g;return p&&p!==c&&p.data.push(c),l&&(c.selector=zm(l)),Qe=c,g=r.apply(c,arguments),sn(g)&&c._r.push(g),Qe=p,c.selector=m,c.isReverted=!1,g};return c.last=f,a===sn?f(c,function(d){return c.add(null,d)}):a?c[a]=f:f},t.ignore=function(a){var r=Qe;Qe=null,a(this),Qe=r},t.getTweens=function(){var a=[];return this.data.forEach(function(r){return r instanceof s?a.push.apply(a,r.getTweens()):r instanceof mn&&!(r.parent&&r.parent.data==="nested")&&a.push(r)}),a},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(a,r){var l=this;if(a?function(){for(var f=l.getTweens(),d=l.data.length,p;d--;)p=l.data[d],p.data==="isFlip"&&(p.revert(),p.getChildren(!0,!0,!1).forEach(function(m){return f.splice(f.indexOf(m),1)}));for(f.map(function(m){return{g:m._dur||m._delay||m._sat&&!m._sat.vars.immediateRender?m.globalTime(0):-1/0,t:m}}).sort(function(m,g){return g.g-m.g||-1/0}).forEach(function(m){return m.t.revert(a)}),d=l.data.length;d--;)p=l.data[d],p instanceof jn?p.data!=="nested"&&(p.scrollTrigger&&p.scrollTrigger.revert(),p.kill()):!(p instanceof mn)&&p.revert&&p.revert(a);l._r.forEach(function(m){return m(a,l)}),l.isReverted=!0}():this.data.forEach(function(f){return f.kill&&f.kill()}),this.clear(),r)for(var c=bs.length;c--;)bs[c].id===this.id&&bs.splice(c,1)},t.revert=function(a){this.kill(a||{})},s}(),d3=function(){function s(e){this.contexts=[],this.scope=e,Qe&&Qe.data.push(this)}var t=s.prototype;return t.add=function(a,r,l){fa(a)||(a={matches:a});var c=new hM(0,l||this.scope),f=c.conditions={},d,p,m;Qe&&!c.selector&&(c.selector=Qe.selector),this.contexts.push(c),r=c.add("onMatch",r),c.queries=a;for(p in a)p==="all"?m=1:(d=ia.matchMedia(a[p]),d&&(bs.indexOf(c)<0&&bs.push(c),(f[p]=d.matches)&&(m=1),d.addListener?d.addListener(Fm):d.addEventListener("change",Fm)));return m&&r(c,function(g){return c.add(null,g)}),this},t.revert=function(a){this.kill(a||{})},t.kill=function(a){this.contexts.forEach(function(r){return r.kill(a,!0)})},s}(),Cf={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];e.forEach(function(r){return QS(r)})},timeline:function(t){return new jn(t)},getTweensOf:function(t,e){return tn.getTweensOf(t,e)},getProperty:function(t,e,a,r){Dn(t)&&(t=Bi(t)[0]);var l=Ms(t||{}).get,c=a?BS:IS;return a==="native"&&(a=""),t&&(e?c((xi[e]&&xi[e].get||l)(t,e,a,r)):function(f,d,p){return c((xi[f]&&xi[f].get||l)(t,f,d,p))})},quickSetter:function(t,e,a){if(t=Bi(t),t.length>1){var r=t.map(function(m){return li.quickSetter(m,e,a)}),l=r.length;return function(m){for(var g=l;g--;)r[g](m)}}t=t[0]||{};var c=xi[e],f=Ms(t),d=f.harness&&(f.harness.aliases||{})[e]||e,p=c?function(m){var g=new c;Ro._pt=0,g.init(t,a?m+a:m,Ro,0,[t]),g.render(1,g),Ro._pt&&S_(1,Ro)}:f.set(t,d);return c?p:function(m){return p(t,d,a?m+a:m,f,1)}},quickTo:function(t,e,a){var r,l=li.to(t,Ai((r={},r[e]="+=0.1",r.paused=!0,r.stagger=0,r),a||{})),c=function(d,p,m){return l.resetTo(e,d,p,m)};return c.tween=l,c},isTweening:function(t){return tn.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Ts(t.ease,Fo.ease)),py(Fo,t||{})},config:function(t){return py(Ti,t||{})},registerEffect:function(t){var e=t.name,a=t.effect,r=t.plugins,l=t.defaults,c=t.extendTimeline;(r||"").split(",").forEach(function(f){return f&&!xi[f]&&!bi[f]&&uu(e+" effect requires "+f+" plugin.")}),Up[e]=function(f,d,p){return a(Bi(f),Ai(d||{},l),p)},c&&(jn.prototype[e]=function(f,d,p){return this.add(Up[e](f,fa(d)?d:(p=d)&&{},this),p)})},registerEase:function(t,e){Me[t]=Ts(e)},parseEase:function(t,e){return arguments.length?Ts(t,e):Me},getById:function(t){return tn.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var a=new jn(t),r,l;for(a.smoothChildTiming=ai(t.smoothChildTiming),tn.remove(a),a._dp=0,a._time=a._tTime=tn._time,r=tn._first;r;)l=r._next,(e||!(!r._dur&&r instanceof mn&&r.vars.onComplete===r._targets[0]))&&ra(a,r,r._start-r._delay),r=l;return ra(tn,a,0),a},context:function(t,e){return t?new hM(t,e):Qe},matchMedia:function(t){return new d3(t)},matchMediaRefresh:function(){return bs.forEach(function(t){var e=t.conditions,a,r;for(r in e)e[r]&&(e[r]=!1,a=1);a&&t.revert()})||Fm()},addEventListener:function(t,e){var a=gf[t]||(gf[t]=[]);~a.indexOf(e)||a.push(e)},removeEventListener:function(t,e){var a=gf[t],r=a&&a.indexOf(e);r>=0&&a.splice(r,1)},utils:{wrap:WD,wrapYoyo:qD,distribute:WS,random:YS,snap:qS,normalize:XD,getUnit:Xn,clamp:HD,splitColor:JS,toArray:Bi,selector:zm,mapRange:ZS,pipe:VD,unitize:kD,interpolate:YD,shuffle:XS},install:LS,effects:Up,ticker:Si,updateRoot:jn.updateRoot,plugins:xi,globalTimeline:tn,core:{PropTween:si,globals:NS,Tween:mn,Timeline:jn,Animation:du,getCache:Ms,_removeLinkedListItem:If,reverting:function(){return Bn},context:function(t){return t&&Qe&&(Qe.data.push(t),t._ctx=Qe),Qe},suppressOverwrites:function(t){return l_=t}}};ri("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Cf[s]=mn[s]});Si.add(jn.updateRoot);Ro=Cf.to({},{duration:0});var p3=function(t,e){for(var a=t._pt;a&&a.p!==e&&a.op!==e&&a.fp!==e;)a=a._next;return a},m3=function(t,e){var a=t._targets,r,l,c;for(r in e)for(l=a.length;l--;)c=t._ptLookup[l][r],c&&(c=c.d)&&(c._pt&&(c=p3(c,r)),c&&c.modifier&&c.modifier(e[r],t,a[l],r))},zp=function(t,e){return{name:t,headless:1,rawVars:1,init:function(r,l,c){c._onInit=function(f){var d,p;if(Dn(l)&&(d={},ri(l,function(m){return d[m]=1}),l=d),e){d={};for(p in l)d[p]=e(l[p]);l=d}m3(f,l)}}}},li=Cf.registerPlugin({name:"attr",init:function(t,e,a,r,l){var c,f,d;this.tween=a;for(c in e)d=t.getAttribute(c)||"",f=this.add(t,"setAttribute",(d||0)+"",e[c],r,l,0,0,c),f.op=c,f.b=d,this._props.push(c)},render:function(t,e){for(var a=e._pt;a;)Bn?a.set(a.t,a.p,a.b,a):a.r(t,a.d),a=a._next}},{name:"endArray",headless:1,init:function(t,e){for(var a=e.length;a--;)this.add(t,a,t[a]||0,e[a],0,0,0,0,0,1)}},zp("roundProps",Im),zp("modifiers"),zp("snap",qS))||Cf;mn.version=jn.version=li.version="3.13.0";US=1;c_()&&ko();Me.Power0;Me.Power1;Me.Power2;Me.Power3;Me.Power4;Me.Linear;Me.Quad;Me.Cubic;Me.Quart;Me.Quint;Me.Strong;Me.Elastic;Me.Back;Me.SteppedEase;Me.Bounce;Me.Sine;Me.Expo;Me.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var yy,Cr,Lo,M_,Ss,Sy,E_,_3=function(){return typeof window<"u"},qa={},_s=180/Math.PI,No=Math.PI/180,To=Math.atan2,My=1e8,T_=/([A-Z])/g,g3=/(left|right|width|margin|padding|x)/i,v3=/[\s,\(]\S/,oa={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Hm=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},x3=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},y3=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},S3=function(t,e){var a=e.s+e.c*t;e.set(e.t,e.p,~~(a+(a<0?-.5:.5))+e.u,e)},dM=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},pM=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},M3=function(t,e,a){return t.style[e]=a},E3=function(t,e,a){return t.style.setProperty(e,a)},T3=function(t,e,a){return t._gsap[e]=a},b3=function(t,e,a){return t._gsap.scaleX=t._gsap.scaleY=a},A3=function(t,e,a,r,l){var c=t._gsap;c.scaleX=c.scaleY=a,c.renderTransform(l,c)},R3=function(t,e,a,r,l){var c=t._gsap;c[e]=a,c.renderTransform(l,c)},en="transform",oi=en+"Origin",w3=function s(t,e){var a=this,r=this.target,l=r.style,c=r._gsap;if(t in qa&&l){if(this.tfm=this.tfm||{},t!=="transform")t=oa[t]||t,~t.indexOf(",")?t.split(",").forEach(function(f){return a.tfm[f]=Fa(r,f)}):this.tfm[t]=c.x?c[t]:Fa(r,t),t===oi&&(this.tfm.zOrigin=c.zOrigin);else return oa.transform.split(",").forEach(function(f){return s.call(a,f,e)});if(this.props.indexOf(en)>=0)return;c.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(oi,e,"")),t=en}(l||e)&&this.props.push(t,e,l[t])},mM=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},C3=function(){var t=this.props,e=this.target,a=e.style,r=e._gsap,l,c;for(l=0;l<t.length;l+=3)t[l+1]?t[l+1]===2?e[t[l]](t[l+2]):e[t[l]]=t[l+2]:t[l+2]?a[t[l]]=t[l+2]:a.removeProperty(t[l].substr(0,2)==="--"?t[l]:t[l].replace(T_,"-$1").toLowerCase());if(this.tfm){for(c in this.tfm)r[c]=this.tfm[c];r.svg&&(r.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),l=E_(),(!l||!l.isStart)&&!a[en]&&(mM(a),r.zOrigin&&a[oi]&&(a[oi]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},_M=function(t,e){var a={target:t,props:[],revert:C3,save:w3};return t._gsap||li.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(r){return a.save(r)}),a},gM,Gm=function(t,e){var a=Cr.createElementNS?Cr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Cr.createElement(t);return a&&a.style?a:Cr.createElement(t)},Fi=function s(t,e,a){var r=getComputedStyle(t);return r[e]||r.getPropertyValue(e.replace(T_,"-$1").toLowerCase())||r.getPropertyValue(e)||!a&&s(t,Xo(e)||e,1)||""},Ey="O,Moz,ms,Ms,Webkit".split(","),Xo=function(t,e,a){var r=e||Ss,l=r.style,c=5;if(t in l&&!a)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);c--&&!(Ey[c]+t in l););return c<0?null:(c===3?"ms":c>=0?Ey[c]:"")+t},Vm=function(){_3()&&window.document&&(yy=window,Cr=yy.document,Lo=Cr.documentElement,Ss=Gm("div")||{style:{}},Gm("div"),en=Xo(en),oi=en+"Origin",Ss.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",gM=!!Xo("perspective"),E_=li.core.reverting,M_=1)},Ty=function(t){var e=t.ownerSVGElement,a=Gm("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=t.cloneNode(!0),l;r.style.display="block",a.appendChild(r),Lo.appendChild(a);try{l=r.getBBox()}catch{}return a.removeChild(r),Lo.removeChild(a),l},by=function(t,e){for(var a=e.length;a--;)if(t.hasAttribute(e[a]))return t.getAttribute(e[a])},vM=function(t){var e,a;try{e=t.getBBox()}catch{e=Ty(t),a=1}return e&&(e.width||e.height)||a||(e=Ty(t)),e&&!e.width&&!e.x&&!e.y?{x:+by(t,["x","cx","x1"])||0,y:+by(t,["y","cy","y1"])||0,width:0,height:0}:e},xM=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&vM(t))},ws=function(t,e){if(e){var a=t.style,r;e in qa&&e!==oi&&(e=en),a.removeProperty?(r=e.substr(0,2),(r==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),a.removeProperty(r==="--"?e:e.replace(T_,"-$1").toLowerCase())):a.removeAttribute(e)}},Dr=function(t,e,a,r,l,c){var f=new si(t._pt,e,a,0,1,c?pM:dM);return t._pt=f,f.b=r,f.e=l,t._props.push(a),f},Ay={deg:1,rad:1,turn:1},D3={grid:1,flex:1},Br=function s(t,e,a,r){var l=parseFloat(a)||0,c=(a+"").trim().substr((l+"").length)||"px",f=Ss.style,d=g3.test(e),p=t.tagName.toLowerCase()==="svg",m=(p?"client":"offset")+(d?"Width":"Height"),g=100,v=r==="px",S=r==="%",E,M,y,x;if(r===c||!l||Ay[r]||Ay[c])return l;if(c!=="px"&&!v&&(l=s(t,e,a,"px")),x=t.getCTM&&xM(t),(S||c==="%")&&(qa[e]||~e.indexOf("adius")))return E=x?t.getBBox()[d?"width":"height"]:t[m],cn(S?l/E*g:l/100*E);if(f[d?"width":"height"]=g+(v?c:r),M=r!=="rem"&&~e.indexOf("adius")||r==="em"&&t.appendChild&&!p?t:t.parentNode,x&&(M=(t.ownerSVGElement||{}).parentNode),(!M||M===Cr||!M.appendChild)&&(M=Cr.body),y=M._gsap,y&&S&&y.width&&d&&y.time===Si.time&&!y.uncache)return cn(l/y.width*g);if(S&&(e==="height"||e==="width")){var w=t.style[e];t.style[e]=g+r,E=t[m],w?t.style[e]=w:ws(t,e)}else(S||c==="%")&&!D3[Fi(M,"display")]&&(f.position=Fi(t,"position")),M===t&&(f.position="static"),M.appendChild(Ss),E=Ss[m],M.removeChild(Ss),f.position="absolute";return d&&S&&(y=Ms(M),y.time=Si.time,y.width=M[m]),cn(v?E*l/g:E&&l?g/E*l:0)},Fa=function(t,e,a,r){var l;return M_||Vm(),e in oa&&e!=="transform"&&(e=oa[e],~e.indexOf(",")&&(e=e.split(",")[0])),qa[e]&&e!=="transform"?(l=mu(t,r),l=e!=="transformOrigin"?l[e]:l.svg?l.origin:Uf(Fi(t,oi))+" "+l.zOrigin+"px"):(l=t.style[e],(!l||l==="auto"||r||~(l+"").indexOf("calc("))&&(l=Df[e]&&Df[e](t,e,a)||Fi(t,e)||PS(t,e)||(e==="opacity"?1:0))),a&&!~(l+"").trim().indexOf(" ")?Br(t,e,l,a)+a:l},U3=function(t,e,a,r){if(!a||a==="none"){var l=Xo(e,t,1),c=l&&Fi(t,l,1);c&&c!==a?(e=l,a=c):e==="borderColor"&&(a=Fi(t,"borderTopColor"))}var f=new si(this._pt,t.style,e,0,1,cM),d=0,p=0,m,g,v,S,E,M,y,x,w,C,b,N;if(f.b=a,f.e=r,a+="",r+="",r.substring(0,6)==="var(--"&&(r=Fi(t,r.substring(4,r.indexOf(")")))),r==="auto"&&(M=t.style[e],t.style[e]=r,r=Fi(t,e)||r,M?t.style[e]=M:ws(t,e)),m=[a,r],tM(m),a=m[0],r=m[1],v=a.match(Ao)||[],N=r.match(Ao)||[],N.length){for(;g=Ao.exec(r);)y=g[0],w=r.substring(d,g.index),E?E=(E+1)%5:(w.substr(-5)==="rgba("||w.substr(-5)==="hsla(")&&(E=1),y!==(M=v[p++]||"")&&(S=parseFloat(M)||0,b=M.substr((S+"").length),y.charAt(1)==="="&&(y=Uo(S,y)+b),x=parseFloat(y),C=y.substr((x+"").length),d=Ao.lastIndex-C.length,C||(C=C||Ti.units[e]||b,d===r.length&&(r+=C,f.e+=C)),b!==C&&(S=Br(t,e,M,C)||0),f._pt={_next:f._pt,p:w||p===1?w:",",s:S,c:x-S,m:E&&E<4||e==="zIndex"?Math.round:0});f.c=d<r.length?r.substring(d,r.length):""}else f.r=e==="display"&&r==="none"?pM:dM;return CS.test(r)&&(f.e=0),this._pt=f,f},Ry={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},L3=function(t){var e=t.split(" "),a=e[0],r=e[1]||"50%";return(a==="top"||a==="bottom"||r==="left"||r==="right")&&(t=a,a=r,r=t),e[0]=Ry[a]||a,e[1]=Ry[r]||r,e.join(" ")},N3=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var a=e.t,r=a.style,l=e.u,c=a._gsap,f,d,p;if(l==="all"||l===!0)r.cssText="",d=1;else for(l=l.split(","),p=l.length;--p>-1;)f=l[p],qa[f]&&(d=1,f=f==="transformOrigin"?oi:en),ws(a,f);d&&(ws(a,en),c&&(c.svg&&a.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",mu(a,1),c.uncache=1,mM(r)))}},Df={clearProps:function(t,e,a,r,l){if(l.data!=="isFromStart"){var c=t._pt=new si(t._pt,e,a,0,0,N3);return c.u=r,c.pr=-10,c.tween=l,t._props.push(a),1}}},pu=[1,0,0,1,0,0],yM={},SM=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},wy=function(t){var e=Fi(t,en);return SM(e)?pu:e.substr(7).match(wS).map(cn)},b_=function(t,e){var a=t._gsap||Ms(t),r=t.style,l=wy(t),c,f,d,p;return a.svg&&t.getAttribute("transform")?(d=t.transform.baseVal.consolidate().matrix,l=[d.a,d.b,d.c,d.d,d.e,d.f],l.join(",")==="1,0,0,1,0,0"?pu:l):(l===pu&&!t.offsetParent&&t!==Lo&&!a.svg&&(d=r.display,r.display="block",c=t.parentNode,(!c||!t.offsetParent&&!t.getBoundingClientRect().width)&&(p=1,f=t.nextElementSibling,Lo.appendChild(t)),l=wy(t),d?r.display=d:ws(t,"display"),p&&(f?c.insertBefore(t,f):c?c.appendChild(t):Lo.removeChild(t))),e&&l.length>6?[l[0],l[1],l[4],l[5],l[12],l[13]]:l)},km=function(t,e,a,r,l,c){var f=t._gsap,d=l||b_(t,!0),p=f.xOrigin||0,m=f.yOrigin||0,g=f.xOffset||0,v=f.yOffset||0,S=d[0],E=d[1],M=d[2],y=d[3],x=d[4],w=d[5],C=e.split(" "),b=parseFloat(C[0])||0,N=parseFloat(C[1])||0,I,P,F,A;a?d!==pu&&(P=S*y-E*M)&&(F=b*(y/P)+N*(-M/P)+(M*w-y*x)/P,A=b*(-E/P)+N*(S/P)-(S*w-E*x)/P,b=F,N=A):(I=vM(t),b=I.x+(~C[0].indexOf("%")?b/100*I.width:b),N=I.y+(~(C[1]||C[0]).indexOf("%")?N/100*I.height:N)),r||r!==!1&&f.smooth?(x=b-p,w=N-m,f.xOffset=g+(x*S+w*M)-x,f.yOffset=v+(x*E+w*y)-w):f.xOffset=f.yOffset=0,f.xOrigin=b,f.yOrigin=N,f.smooth=!!r,f.origin=e,f.originIsAbsolute=!!a,t.style[oi]="0px 0px",c&&(Dr(c,f,"xOrigin",p,b),Dr(c,f,"yOrigin",m,N),Dr(c,f,"xOffset",g,f.xOffset),Dr(c,f,"yOffset",v,f.yOffset)),t.setAttribute("data-svg-origin",b+" "+N)},mu=function(t,e){var a=t._gsap||new aM(t);if("x"in a&&!e&&!a.uncache)return a;var r=t.style,l=a.scaleX<0,c="px",f="deg",d=getComputedStyle(t),p=Fi(t,oi)||"0",m,g,v,S,E,M,y,x,w,C,b,N,I,P,F,A,U,G,nt,J,ct,lt,z,k,W,mt,O,Z,gt,St,Y,ut;return m=g=v=M=y=x=w=C=b=0,S=E=1,a.svg=!!(t.getCTM&&xM(t)),d.translate&&((d.translate!=="none"||d.scale!=="none"||d.rotate!=="none")&&(r[en]=(d.translate!=="none"?"translate3d("+(d.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(d.rotate!=="none"?"rotate("+d.rotate+") ":"")+(d.scale!=="none"?"scale("+d.scale.split(" ").join(",")+") ":"")+(d[en]!=="none"?d[en]:"")),r.scale=r.rotate=r.translate="none"),P=b_(t,a.svg),a.svg&&(a.uncache?(W=t.getBBox(),p=a.xOrigin-W.x+"px "+(a.yOrigin-W.y)+"px",k=""):k=!e&&t.getAttribute("data-svg-origin"),km(t,k||p,!!k||a.originIsAbsolute,a.smooth!==!1,P)),N=a.xOrigin||0,I=a.yOrigin||0,P!==pu&&(G=P[0],nt=P[1],J=P[2],ct=P[3],m=lt=P[4],g=z=P[5],P.length===6?(S=Math.sqrt(G*G+nt*nt),E=Math.sqrt(ct*ct+J*J),M=G||nt?To(nt,G)*_s:0,w=J||ct?To(J,ct)*_s+M:0,w&&(E*=Math.abs(Math.cos(w*No))),a.svg&&(m-=N-(N*G+I*J),g-=I-(N*nt+I*ct))):(ut=P[6],St=P[7],O=P[8],Z=P[9],gt=P[10],Y=P[11],m=P[12],g=P[13],v=P[14],F=To(ut,gt),y=F*_s,F&&(A=Math.cos(-F),U=Math.sin(-F),k=lt*A+O*U,W=z*A+Z*U,mt=ut*A+gt*U,O=lt*-U+O*A,Z=z*-U+Z*A,gt=ut*-U+gt*A,Y=St*-U+Y*A,lt=k,z=W,ut=mt),F=To(-J,gt),x=F*_s,F&&(A=Math.cos(-F),U=Math.sin(-F),k=G*A-O*U,W=nt*A-Z*U,mt=J*A-gt*U,Y=ct*U+Y*A,G=k,nt=W,J=mt),F=To(nt,G),M=F*_s,F&&(A=Math.cos(F),U=Math.sin(F),k=G*A+nt*U,W=lt*A+z*U,nt=nt*A-G*U,z=z*A-lt*U,G=k,lt=W),y&&Math.abs(y)+Math.abs(M)>359.9&&(y=M=0,x=180-x),S=cn(Math.sqrt(G*G+nt*nt+J*J)),E=cn(Math.sqrt(z*z+ut*ut)),F=To(lt,z),w=Math.abs(F)>2e-4?F*_s:0,b=Y?1/(Y<0?-Y:Y):0),a.svg&&(k=t.getAttribute("transform"),a.forceCSS=t.setAttribute("transform","")||!SM(Fi(t,en)),k&&t.setAttribute("transform",k))),Math.abs(w)>90&&Math.abs(w)<270&&(l?(S*=-1,w+=M<=0?180:-180,M+=M<=0?180:-180):(E*=-1,w+=w<=0?180:-180)),e=e||a.uncache,a.x=m-((a.xPercent=m&&(!e&&a.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-m)?-50:0)))?t.offsetWidth*a.xPercent/100:0)+c,a.y=g-((a.yPercent=g&&(!e&&a.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-g)?-50:0)))?t.offsetHeight*a.yPercent/100:0)+c,a.z=v+c,a.scaleX=cn(S),a.scaleY=cn(E),a.rotation=cn(M)+f,a.rotationX=cn(y)+f,a.rotationY=cn(x)+f,a.skewX=w+f,a.skewY=C+f,a.transformPerspective=b+c,(a.zOrigin=parseFloat(p.split(" ")[2])||!e&&a.zOrigin||0)&&(r[oi]=Uf(p)),a.xOffset=a.yOffset=0,a.force3D=Ti.force3D,a.renderTransform=a.svg?P3:gM?MM:O3,a.uncache=0,a},Uf=function(t){return(t=t.split(" "))[0]+" "+t[1]},Ip=function(t,e,a){var r=Xn(e);return cn(parseFloat(e)+parseFloat(Br(t,"x",a+"px",r)))+r},O3=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,MM(t,e)},fs="0deg",Zl="0px",hs=") ",MM=function(t,e){var a=e||this,r=a.xPercent,l=a.yPercent,c=a.x,f=a.y,d=a.z,p=a.rotation,m=a.rotationY,g=a.rotationX,v=a.skewX,S=a.skewY,E=a.scaleX,M=a.scaleY,y=a.transformPerspective,x=a.force3D,w=a.target,C=a.zOrigin,b="",N=x==="auto"&&t&&t!==1||x===!0;if(C&&(g!==fs||m!==fs)){var I=parseFloat(m)*No,P=Math.sin(I),F=Math.cos(I),A;I=parseFloat(g)*No,A=Math.cos(I),c=Ip(w,c,P*A*-C),f=Ip(w,f,-Math.sin(I)*-C),d=Ip(w,d,F*A*-C+C)}y!==Zl&&(b+="perspective("+y+hs),(r||l)&&(b+="translate("+r+"%, "+l+"%) "),(N||c!==Zl||f!==Zl||d!==Zl)&&(b+=d!==Zl||N?"translate3d("+c+", "+f+", "+d+") ":"translate("+c+", "+f+hs),p!==fs&&(b+="rotate("+p+hs),m!==fs&&(b+="rotateY("+m+hs),g!==fs&&(b+="rotateX("+g+hs),(v!==fs||S!==fs)&&(b+="skew("+v+", "+S+hs),(E!==1||M!==1)&&(b+="scale("+E+", "+M+hs),w.style[en]=b||"translate(0, 0)"},P3=function(t,e){var a=e||this,r=a.xPercent,l=a.yPercent,c=a.x,f=a.y,d=a.rotation,p=a.skewX,m=a.skewY,g=a.scaleX,v=a.scaleY,S=a.target,E=a.xOrigin,M=a.yOrigin,y=a.xOffset,x=a.yOffset,w=a.forceCSS,C=parseFloat(c),b=parseFloat(f),N,I,P,F,A;d=parseFloat(d),p=parseFloat(p),m=parseFloat(m),m&&(m=parseFloat(m),p+=m,d+=m),d||p?(d*=No,p*=No,N=Math.cos(d)*g,I=Math.sin(d)*g,P=Math.sin(d-p)*-v,F=Math.cos(d-p)*v,p&&(m*=No,A=Math.tan(p-m),A=Math.sqrt(1+A*A),P*=A,F*=A,m&&(A=Math.tan(m),A=Math.sqrt(1+A*A),N*=A,I*=A)),N=cn(N),I=cn(I),P=cn(P),F=cn(F)):(N=g,F=v,I=P=0),(C&&!~(c+"").indexOf("px")||b&&!~(f+"").indexOf("px"))&&(C=Br(S,"x",c,"px"),b=Br(S,"y",f,"px")),(E||M||y||x)&&(C=cn(C+E-(E*N+M*P)+y),b=cn(b+M-(E*I+M*F)+x)),(r||l)&&(A=S.getBBox(),C=cn(C+r/100*A.width),b=cn(b+l/100*A.height)),A="matrix("+N+","+I+","+P+","+F+","+C+","+b+")",S.setAttribute("transform",A),w&&(S.style[en]=A)},z3=function(t,e,a,r,l){var c=360,f=Dn(l),d=parseFloat(l)*(f&&~l.indexOf("rad")?_s:1),p=d-r,m=r+p+"deg",g,v;return f&&(g=l.split("_")[1],g==="short"&&(p%=c,p!==p%(c/2)&&(p+=p<0?c:-c)),g==="cw"&&p<0?p=(p+c*My)%c-~~(p/c)*c:g==="ccw"&&p>0&&(p=(p-c*My)%c-~~(p/c)*c)),t._pt=v=new si(t._pt,e,a,r,p,x3),v.e=m,v.u="deg",t._props.push(a),v},Cy=function(t,e){for(var a in e)t[a]=e[a];return t},I3=function(t,e,a){var r=Cy({},a._gsap),l="perspective,force3D,transformOrigin,svgOrigin",c=a.style,f,d,p,m,g,v,S,E;r.svg?(p=a.getAttribute("transform"),a.setAttribute("transform",""),c[en]=e,f=mu(a,1),ws(a,en),a.setAttribute("transform",p)):(p=getComputedStyle(a)[en],c[en]=e,f=mu(a,1),c[en]=p);for(d in qa)p=r[d],m=f[d],p!==m&&l.indexOf(d)<0&&(S=Xn(p),E=Xn(m),g=S!==E?Br(a,d,p,E):parseFloat(p),v=parseFloat(m),t._pt=new si(t._pt,f,d,g,v-g,Hm),t._pt.u=E||0,t._props.push(d));Cy(f,r)};ri("padding,margin,Width,Radius",function(s,t){var e="Top",a="Right",r="Bottom",l="Left",c=(t<3?[e,a,r,l]:[e+l,e+a,r+a,r+l]).map(function(f){return t<2?s+f:"border"+f+s});Df[t>1?"border"+s:s]=function(f,d,p,m,g){var v,S;if(arguments.length<4)return v=c.map(function(E){return Fa(f,E,p)}),S=v.join(" "),S.split(v[0]).length===5?v[0]:S;v=(m+"").split(" "),S={},c.forEach(function(E,M){return S[E]=v[M]=v[M]||v[(M-1)/2|0]}),f.init(d,S,g)}});var EM={name:"css",register:Vm,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,a,r,l){var c=this._props,f=t.style,d=a.vars.startAt,p,m,g,v,S,E,M,y,x,w,C,b,N,I,P,F;M_||Vm(),this.styles=this.styles||_M(t),F=this.styles.props,this.tween=a;for(M in e)if(M!=="autoRound"&&(m=e[M],!(xi[M]&&rM(M,e,a,r,t,l)))){if(S=typeof m,E=Df[M],S==="function"&&(m=m.call(a,r,t,l),S=typeof m),S==="string"&&~m.indexOf("random(")&&(m=fu(m)),E)E(this,t,M,m,a)&&(P=1);else if(M.substr(0,2)==="--")p=(getComputedStyle(t).getPropertyValue(M)+"").trim(),m+="",Or.lastIndex=0,Or.test(p)||(y=Xn(p),x=Xn(m)),x?y!==x&&(p=Br(t,M,p,x)+x):y&&(m+=y),this.add(f,"setProperty",p,m,r,l,0,0,M),c.push(M),F.push(M,0,f[M]);else if(S!=="undefined"){if(d&&M in d?(p=typeof d[M]=="function"?d[M].call(a,r,t,l):d[M],Dn(p)&&~p.indexOf("random(")&&(p=fu(p)),Xn(p+"")||p==="auto"||(p+=Ti.units[M]||Xn(Fa(t,M))||""),(p+"").charAt(1)==="="&&(p=Fa(t,M))):p=Fa(t,M),v=parseFloat(p),w=S==="string"&&m.charAt(1)==="="&&m.substr(0,2),w&&(m=m.substr(2)),g=parseFloat(m),M in oa&&(M==="autoAlpha"&&(v===1&&Fa(t,"visibility")==="hidden"&&g&&(v=0),F.push("visibility",0,f.visibility),Dr(this,f,"visibility",v?"inherit":"hidden",g?"inherit":"hidden",!g)),M!=="scale"&&M!=="transform"&&(M=oa[M],~M.indexOf(",")&&(M=M.split(",")[0]))),C=M in qa,C){if(this.styles.save(M),S==="string"&&m.substring(0,6)==="var(--"&&(m=Fi(t,m.substring(4,m.indexOf(")"))),g=parseFloat(m)),b||(N=t._gsap,N.renderTransform&&!e.parseTransform||mu(t,e.parseTransform),I=e.smoothOrigin!==!1&&N.smooth,b=this._pt=new si(this._pt,f,en,0,1,N.renderTransform,N,0,-1),b.dep=1),M==="scale")this._pt=new si(this._pt,N,"scaleY",N.scaleY,(w?Uo(N.scaleY,w+g):g)-N.scaleY||0,Hm),this._pt.u=0,c.push("scaleY",M),M+="X";else if(M==="transformOrigin"){F.push(oi,0,f[oi]),m=L3(m),N.svg?km(t,m,0,I,0,this):(x=parseFloat(m.split(" ")[2])||0,x!==N.zOrigin&&Dr(this,N,"zOrigin",N.zOrigin,x),Dr(this,f,M,Uf(p),Uf(m)));continue}else if(M==="svgOrigin"){km(t,m,1,I,0,this);continue}else if(M in yM){z3(this,N,M,v,w?Uo(v,w+m):m);continue}else if(M==="smoothOrigin"){Dr(this,N,"smooth",N.smooth,m);continue}else if(M==="force3D"){N[M]=m;continue}else if(M==="transform"){I3(this,m,t);continue}}else M in f||(M=Xo(M)||M);if(C||(g||g===0)&&(v||v===0)&&!v3.test(m)&&M in f)y=(p+"").substr((v+"").length),g||(g=0),x=Xn(m)||(M in Ti.units?Ti.units[M]:y),y!==x&&(v=Br(t,M,p,x)),this._pt=new si(this._pt,C?N:f,M,v,(w?Uo(v,w+g):g)-v,!C&&(x==="px"||M==="zIndex")&&e.autoRound!==!1?S3:Hm),this._pt.u=x||0,y!==x&&x!=="%"&&(this._pt.b=p,this._pt.r=y3);else if(M in f)U3.call(this,t,M,p,w?w+m:m);else if(M in t)this.add(t,M,p||t[M],w?w+m:m,r,l);else if(M!=="parseTransform"){h_(M,m);continue}C||(M in f?F.push(M,0,f[M]):typeof t[M]=="function"?F.push(M,2,t[M]()):F.push(M,1,p||t[M])),c.push(M)}}P&&fM(this)},render:function(t,e){if(e.tween._time||!E_())for(var a=e._pt;a;)a.r(t,a.d),a=a._next;else e.styles.revert()},get:Fa,aliases:oa,getSetter:function(t,e,a){var r=oa[e];return r&&r.indexOf(",")<0&&(e=r),e in qa&&e!==oi&&(t._gsap.x||Fa(t,"x"))?a&&Sy===a?e==="scale"?b3:T3:(Sy=a||{})&&(e==="scale"?A3:R3):t.style&&!u_(t.style[e])?M3:~e.indexOf("-")?E3:y_(t,e)},core:{_removeProperty:ws,_getMatrix:b_}};li.utils.checkPrefix=Xo;li.core.getStyleSaver=_M;(function(s,t,e,a){var r=ri(s+","+t+","+e,function(l){qa[l]=1});ri(t,function(l){Ti.units[l]="deg",yM[l]=1}),oa[r[13]]=s+","+t,ri(a,function(l){var c=l.split(":");oa[c[1]]=r[c[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ri("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Ti.units[s]="px"});li.registerPlugin(EM);var $l=li.registerPlugin(EM)||li;$l.core.Tween;const B3="_solarSystemContainer_s617u_2",F3="_infoPanel_s617u_13",Dy={solarSystemContainer:B3,infoPanel:F3},ds={sun:{name:"太陽",type:"恒星",size:"地球の約109倍",distance:"中心",feature:"太陽系の中心に位置する恒星。",color:16753920,radius:60,orbitalRadius:0,orbitalPeriod:0},mercury:{name:"水星",type:"岩石惑星",size:"地球の約0.38倍",distance:"約5,800万km",orbitalPeriod:"約88日",feature:"太陽に最も近く、昼夜の温度差が激しい。",color:11184810,radius:3,orbitalRadius:100,orbitalSpeed:.005},venus:{name:"金星",type:"岩石惑星",size:"地球の約0.95倍",distance:"約1億800万km",orbitalPeriod:"約225日",feature:"厚い二酸化炭素の大気で覆われ、非常に高温。",color:15649945,radius:7,orbitalRadius:160,orbitalSpeed:.0035},earth:{name:"地球",type:"岩石惑星",size:"基準",distance:"約1億5000万km",orbitalPeriod:"約365日",feature:"生命が存在する唯一の惑星。",color:30719,radius:8,orbitalRadius:230,orbitalSpeed:.003,hasMoon:!0},moon:{name:"月",type:"衛星",size:"地球の約0.27倍",distance:"約38万km (地球から)",orbitalPeriod:"約27日",feature:"地球唯一の天然衛星。",color:13421772,radius:2.4,orbitalRadius:0,orbitalSpeed:0,isMoonData:!0},mars:{name:"火星",type:"岩石惑星",size:"地球の約0.53倍",distance:"約2億2800万km",orbitalPeriod:"約687日",feature:"「赤い惑星」として知られ、水や生命の痕跡が探されている。",color:16729088,radius:5,orbitalRadius:300,orbitalSpeed:.0025},jupiter:{name:"木星",type:"ガス惑星",size:"地球の約11倍",distance:"約7億7800万km",orbitalPeriod:"約12年",feature:"太陽系最大の惑星。大赤斑が特徴。",color:14527112,radius:30,orbitalRadius:500,orbitalSpeed:.001},saturn:{name:"土星",type:"ガス惑星",size:"地球の約9.5倍",distance:"約14億3000万km",orbitalPeriod:"約29年",feature:"美しい環を持つことで知られる。",color:14204800,radius:25,orbitalRadius:750,orbitalSpeed:7e-4,hasRing:!0,tilt:.3},uranus:{name:"天王星",type:"巨大氷惑星",size:"地球の約4倍",distance:"約28億7000万km",orbitalPeriod:"約84年",feature:"横倒しに自転している特異な惑星。",color:11393254,radius:20,orbitalRadius:950,orbitalSpeed:4e-4},neptune:{name:"海王星",type:"巨大氷惑星",size:"地球の約3.9倍",distance:"約45億km",orbitalPeriod:"約165年",feature:"強い風と暗い大黒斑が特徴。",color:128,radius:19,orbitalRadius:1150,orbitalSpeed:3e-4}},H3=()=>{const s=ht.useRef(null),t=ht.useRef([]),e=ht.useRef(null),a=ht.useRef(!1),r=ht.useRef(null),l=ht.useRef(null),c=ht.useRef(null),[f,d]=ht.useState(!1),[p,m]=ht.useState({}),g=ht.useCallback(E=>{const M=ds[E];M?(m({name:M.name,type:M.type,size:M.size,distance:M.distance,orbitalPeriod:M.orbitalPeriod||"なし",feature:M.feature}),d(!0)):(d(!1),m({}),console.warn("No data found for planet key:",E))},[]),v=ht.useCallback(()=>{d(!1),m({})},[]),S=ht.useCallback(()=>{v(),e.current=null,a.current=!1;const E=new $(0,300,1e3);c.current&&(c.current.kill(),c.current=null),c.current=$l.to(r.current.position,{duration:1.5,x:E.x,y:E.y,z:E.z,ease:"power2.out",onUpdate:()=>{},onComplete:()=>{r.current.lookAt(0,0,0),c.current=null},onInterrupt:()=>{c.current=null}})},[v]);return ht.useEffect(()=>{const E=s.current;if(!E)return;$l.globalTimeline.clear();const M=new wA;M.background=null;const y=new yi(75,E.clientWidth/E.clientHeight,.1,1e4),x=new $(0,300,1e3);y.position.copy(x),y.lookAt(0,0,0),r.current=y;const w=new ED({antialias:!0});w.setSize(E.clientWidth,E.clientHeight),w.setPixelRatio(window.devicePixelRatio),l.current=w,w.outputEncoding=void 0,w.toneMapping=Qy,w.toneMappingExposure=2,w.physicallyCorrectLights=!0,w.shadowMap.enabled=!1,E.appendChild(w.domElement);const C=new BA(4210752,.8);M.add(C);const b=new zA(16777215,2,2e3,.1);b.position.set(0,0,0),M.add(b);const N=ds.sun,I=new tu(N.radius,32,32),P=new Ef({color:N.color}),F=new ei(I,P);F.name="sun",M.add(F),t.current.push({mesh:F,pivot:null,data:N});for(const z in ds){if(z==="sun"||ds[z].isMoonData)continue;const k=ds[z],W=new tu(k.radius,32,32),mt=new Sp({color:k.color,roughness:.8,metalness:0}),O=new ei(W,mt);O.name=z;const Z=new In;Z.add(O),M.add(Z),O.position.set(k.orbitalRadius,0,0);const gt=new Tf(k.orbitalRadius-.5,k.orbitalRadius+.5,128),St=new Ef({color:4473924,side:qi}),Y=new ei(gt,St);if(Y.rotation.x=Math.PI/2,M.add(Y),t.current.push({mesh:O,pivot:Z,data:k}),k.hasMoon){const ut=ds.moon,Mt=ut.radius,Rt=O.geometry.parameters.radius*2,wt=new tu(Mt,16,16),ee=new Sp({color:ut.color,roughness:.8,metalness:0}),Vt=new ei(wt,ee);Vt.name="moon";const ge=new In;ge.add(Vt),O.add(ge),Vt.position.set(Rt,0,0),t.current.push({mesh:Vt,pivot:ge,data:{...ut,orbitalSpeed:.05}})}if(k.hasRing){const ut=k.radius*1.5,Mt=k.radius*2.5,Rt=64,wt=new Tf(ut,Mt,Rt),ee=new Sp({color:13609608,side:qi,transparent:!0,opacity:.8,roughness:.8,metalness:0}),Vt=new ei(wt,ee),ge=new In;ge.rotation.x=-k.tilt,ge.add(Vt),O.add(ge),Vt.rotation.x=Math.PI/2}}const A=new HA,U=new Te,G=z=>{U.x=z.clientX/E.clientWidth*2-1,U.y=-(z.clientY/E.clientHeight)*2+1},nt=z=>{if(!r.current)return;A.setFromCamera(U,r.current);const k=t.current.map(mt=>mt.mesh),W=A.intersectObjects(k);if(W.length>0){W.sort((Rt,wt)=>Rt.distance-wt.distance);const mt=W[0].object;let O=mt,Z=mt.name;if(mt.name==="sun"){S(),g("sun");return}if(mt.name==="moon"){const Rt=t.current.find(ee=>ee.mesh===mt),wt=t.current.find(ee=>ee.data.name==="地球")?.mesh;if(Rt&&wt&&Rt.pivot.parent===wt)a.current&&e.current?.name==="earth"?(O=mt,Z="moon"):(O=wt,Z="earth");else return}if(!ds[Z])return;e.current=O,a.current=!0;const St=new $;O.getWorldPosition(St);let Y;Z==="jupiter"||Z==="saturn"?Y=O.geometry.parameters.radius*3:Z==="moon"?Y=O.geometry.parameters.radius*5:Y=O.geometry.parameters.radius*3,Y=Math.max(r.current.far*.001,Y),Y=Math.min(r.current.far*.03,Y);const ut=new $,Mt=new $;r.current.getWorldDirection(Mt),ut.copy(St).add(Mt.normalize().multiplyScalar(-Y)),c.current&&(c.current.kill(),c.current=null),c.current=$l.to(r.current.position,{duration:1.5,x:ut.x,y:ut.y,z:ut.z,ease:"power2.out",onUpdate:()=>{},onComplete:()=>{g(Z),r.current.lookAt(St),c.current=null},onInterrupt:()=>{c.current=null}})}},J=z=>{if(a.current||!r.current)return;z.preventDefault();const k=.05,W=new $;r.current.getWorldDirection(W),z.deltaY>0?r.current.position.add(W.multiplyScalar(k*r.current.position.length()*-1)):r.current.position.add(W.multiplyScalar(k*r.current.position.length()));const mt=200,O=2500,Z=r.current.position.length();Z<mt?r.current.position.normalize().multiplyScalar(mt):Z>O&&r.current.position.normalize().multiplyScalar(O)},ct=()=>{!r.current||!l.current||(r.current.aspect=E.clientWidth/E.clientHeight,r.current.updateProjectionMatrix(),l.current.setSize(E.clientWidth,E.clientHeight))};E.addEventListener("mousemove",G,!1),E.addEventListener("click",nt,!1),E.addEventListener("wheel",J,{passive:!1}),window.addEventListener("resize",ct,!1);const lt=()=>{if(requestAnimationFrame(lt),!a.current)t.current.forEach(z=>{z.data.isMoonData?(z.pivot.rotation.y+=z.data.orbitalSpeed,z.mesh.rotation.y+=.05):z.pivot?(z.pivot.rotation.y+=z.data.orbitalSpeed,z.mesh.rotation.y+=.01):z.mesh.name==="sun"&&(z.mesh.rotation.y+=.005)});else if(e.current){const z=e.current.name;if(z==="moon"){const k=t.current.find(W=>W.data.name==="地球")?.mesh;k&&(k.rotation.y+=.01)}else z!=="sun"?e.current.rotation.y+=.01:z==="sun"&&(e.current.rotation.y+=.005)}if(e.current){const z=new $;e.current.getWorldPosition(z),r.current.lookAt(z)}else r.current.lookAt(0,0,0);l.current.render(M,r.current)};return lt(),()=>{$l.globalTimeline.clear(),E&&(E.removeEventListener("mousemove",G),E.removeEventListener("click",nt),E.removeEventListener("wheel",J),window.removeEventListener("resize",ct),l.current&&E.contains(l.current.domElement)&&E.removeChild(l.current.domElement)),M&&M.clear(),l.current&&l.current.dispose()}},[g,S]),fe.jsx("div",{ref:s,className:Dy.solarSystemContainer,children:fe.jsxs("div",{className:Dy.infoPanel,style:{display:f?"block":"none"},children:[fe.jsx("h2",{children:p.name}),fe.jsxs("p",{children:[fe.jsx("strong",{children:"種類:"})," ",fe.jsx("span",{children:p.type})]}),fe.jsxs("p",{children:[fe.jsx("strong",{children:"大きさ:"})," ",fe.jsx("span",{children:p.size})]}),fe.jsxs("p",{children:[fe.jsx("strong",{children:"太陽からの距離:"})," ",fe.jsx("span",{children:p.distance})]}),fe.jsxs("p",{children:[fe.jsx("strong",{children:"公転周期:"})," ",fe.jsx("span",{children:p.orbitalPeriod})]}),fe.jsxs("p",{children:[fe.jsx("strong",{children:"特徴:"})," ",fe.jsx("span",{children:p.feature})]}),fe.jsx("button",{onClick:S,children:"太陽系全体に戻る"})]})})};function G3(){return fe.jsx("div",{children:fe.jsxs(Rb,{children:[fe.jsx(Fp,{path:"/",element:fe.jsx(h1,{})}),fe.jsx(Fp,{path:"/solarsystem",element:fe.jsx(H3,{})})]})})}const V3=IT.createRoot(document.getElementById("root"));V3.render(fe.jsx(Kb,{children:fe.jsx(G3,{})}));
