(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[655],{413:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return y}});let i=n(1024),o=n(8533),u=o._(n(2265)),l=i._(n(4887)),s=i._(n(5793)),c=n(7929),d=n(5751),f=n(7327);n(2637);let p=n(6304),g=i._(n(9950)),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function handleLoading(e,t,n,i,o,u){let l=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===l)return;e["data-loaded-src"]=l;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,o=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}})}function getDynamicProps(e){let[t,n]=u.version.split("."),i=parseInt(t,10),o=parseInt(n,10);return i>18||18===i&&o>=3?{fetchPriority:e}:{fetchpriority:e}}let h=(0,u.forwardRef)((e,t)=>{let{src:n,srcSet:i,sizes:o,height:l,width:s,decoding:c,className:d,style:f,fetchPriority:p,placeholder:g,loading:m,unoptimized:h,fill:y,onLoadRef:b,onLoadingCompleteRef:v,setBlurComplete:S,setShowAltText:_,onLoad:w,onError:E,...P}=e;return u.default.createElement("img",{...P,...getDynamicProps(p),loading:m,width:s,height:l,decoding:c,"data-nimg":y?"fill":"1",className:d,style:f,sizes:o,srcSet:i,src:n,ref:(0,u.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(E&&(e.src=e.src),e.complete&&handleLoading(e,g,b,v,S,h))},[n,g,b,v,S,E,h,t]),onLoad:e=>{let t=e.currentTarget;handleLoading(t,g,b,v,S,h)},onError:e=>{_(!0),"empty"!==g&&S(!0),E&&E(e)}})});function ImagePreload(e){let{isAppRouter:t,imgAttributes:n}=e,i={as:"image",imageSrcSet:n.srcSet,imageSizes:n.sizes,crossOrigin:n.crossOrigin,referrerPolicy:n.referrerPolicy,...getDynamicProps(n.fetchPriority)};return t&&l.default.preload?(l.default.preload(n.src,i),null):u.default.createElement(s.default,null,u.default.createElement("link",{key:"__nimg-"+n.src+n.srcSet+n.sizes,rel:"preload",href:n.srcSet?void 0:n.src,...i}))}let y=(0,u.forwardRef)((e,t)=>{let n=(0,u.useContext)(p.RouterContext),i=(0,u.useContext)(f.ImageConfigContext),o=(0,u.useMemo)(()=>{let e=m||i||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:n}},[i]),{onLoad:l,onLoadingComplete:s}=e,y=(0,u.useRef)(l);(0,u.useEffect)(()=>{y.current=l},[l]);let b=(0,u.useRef)(s);(0,u.useEffect)(()=>{b.current=s},[s]);let[v,S]=(0,u.useState)(!1),[_,w]=(0,u.useState)(!1),{props:E,meta:P}=(0,c.getImgProps)(e,{defaultLoader:g.default,imgConf:o,blurComplete:v,showAltText:_});return u.default.createElement(u.default.Fragment,null,u.default.createElement(h,{...E,unoptimized:P.unoptimized,placeholder:P.placeholder,fill:P.fill,onLoadRef:y,onLoadingCompleteRef:b,setBlurComplete:S,setShowAltText:w,ref:t}),P.priority?u.default.createElement(ImagePreload,{isAppRouter:!n,imgAttributes:E}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8569:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return u}});let i=n(1024),o=i._(n(2265)),u=o.default.createContext({})},4472:function(e,t){"use strict";function isInAmpMode(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:i=!1}=void 0===e?{}:e;return t||n&&i}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return isInAmpMode}})},7929:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return getImgProps}}),n(2637);let i=n(1511),o=n(5751);function isStaticRequire(e){return void 0!==e.default}function getInt(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function getImgProps(e,t){var n;let u,l,s,{src:c,sizes:d,unoptimized:f=!1,priority:p=!1,loading:g,className:m,quality:h,width:y,height:b,fill:v=!1,style:S,onLoad:_,onLoadingComplete:w,placeholder:E="empty",blurDataURL:P,fetchPriority:O,layout:C,objectFit:j,objectPosition:x,lazyBoundary:I,lazyRoot:z,...M}=e,{imgConf:R,showAltText:k,blurComplete:D,defaultLoader:A}=t,L=R||o.imageConfigDefault;if("allSizes"in L)u=L;else{let e=[...L.deviceSizes,...L.imageSizes].sort((e,t)=>e-t),t=L.deviceSizes.sort((e,t)=>e-t);u={...L,allSizes:e,deviceSizes:t}}let U=M.loader||A;delete M.loader,delete M.srcSet;let T="__next_img_default"in U;if(T){if("custom"===u.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=U;U=t=>{let{config:n,...i}=t;return e(i)}}if(C){"fill"===C&&(v=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[C];e&&(S={...S,...e});let t={responsive:"100vw",fill:"100vw"}[C];t&&!d&&(d=t)}let B="",N=getInt(y),F=getInt(b);if("object"==typeof(n=c)&&(isStaticRequire(n)||void 0!==n.src)){let e=isStaticRequire(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,s=e.blurHeight,P=P||e.blurDataURL,B=e.src,!v){if(N||F){if(N&&!F){let t=N/e.width;F=Math.round(e.height*t)}else if(!N&&F){let t=F/e.height;N=Math.round(e.width*t)}}else N=e.width,F=e.height}}let V=!p&&("lazy"===g||void 0===g);(!(c="string"==typeof c?c:B)||c.startsWith("data:")||c.startsWith("blob:"))&&(f=!0,V=!1),u.unoptimized&&(f=!0),T&&c.endsWith(".svg")&&!u.dangerouslyAllowSVG&&(f=!0),p&&(O="high");let W=getInt(h),G=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:j,objectPosition:x}:{},k?{}:{color:"transparent"},S),H=D||"empty"===E?null:"blur"===E?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:N,heightInt:F,blurWidth:l,blurHeight:s,blurDataURL:P||"",objectFit:G.objectFit})+'")':'url("'+E+'")',$=H?{backgroundSize:G.objectFit||"cover",backgroundPosition:G.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:H}:{},Y=function(e){let{config:t,src:n,unoptimized:i,width:o,quality:u,sizes:l,loader:s}=e;if(i)return{src:n,srcSet:void 0,sizes:void 0};let{widths:c,kind:d}=function(e,t,n){let{deviceSizes:i,allSizes:o}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(n);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof t)return{widths:i,kind:"w"};let u=[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))];return{widths:u,kind:"x"}}(t,o,l),f=c.length-1;return{sizes:l||"w"!==d?l:"100vw",srcSet:c.map((e,i)=>s({config:t,src:n,quality:u,width:e})+" "+("w"===d?e:i+1)+d).join(", "),src:s({config:t,src:n,quality:u,width:c[f]})}}({config:u,src:c,unoptimized:f,width:N,quality:W,sizes:d,loader:U}),J={...M,loading:V?"lazy":g,fetchPriority:O,width:N,height:F,decoding:"async",className:m,style:{...G,...$},sizes:Y.sizes,srcSet:Y.srcSet,src:Y.src},K={unoptimized:f,priority:p,placeholder:E,fill:v};return{props:J,meta:K}}},5793:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{defaultHead:function(){return defaultHead},default:function(){return _default}});let i=n(1024),o=n(8533),u=o._(n(2265)),l=i._(n(110)),s=n(8569),c=n(1852),d=n(4472);function defaultHead(e){void 0===e&&(e=!1);let t=[u.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(u.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function onlyReactElement(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===u.default.Fragment?e.concat(u.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(2637);let f=["name","httpEquiv","charSet","itemProp"];function reduceComponents(e,t){let{inAmpMode:n}=t;return e.reduce(onlyReactElement,[]).reverse().concat(defaultHead(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,i={};return o=>{let u=!0,l=!1;if(o.key&&"number"!=typeof o.key&&o.key.indexOf("$")>0){l=!0;let t=o.key.slice(o.key.indexOf("$")+1);e.has(t)?u=!1:e.add(t)}switch(o.type){case"title":case"base":t.has(o.type)?u=!1:t.add(o.type);break;case"meta":for(let e=0,t=f.length;e<t;e++){let t=f[e];if(o.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?u=!1:n.add(t);else{let e=o.props[t],n=i[t]||new Set;("name"!==t||!l)&&n.has(e)?u=!1:(n.add(e),i[t]=n)}}}}return u}}()).reverse().map((e,t)=>{let i=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,u.default.cloneElement(e,t)}return u.default.cloneElement(e,{key:i})})}let _default=function(e){let{children:t}=e,n=(0,u.useContext)(s.AmpStateContext),i=(0,u.useContext)(c.HeadManagerContext);return u.default.createElement(l.default,{reduceComponentsToState:reduceComponents,headManager:i,inAmpMode:(0,d.isInAmpMode)(n)},t)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1511:function(e,t){"use strict";function getImageBlurSvg(e){let{widthInt:t,heightInt:n,blurWidth:i,blurHeight:o,blurDataURL:u,objectFit:l}=e,s=i?40*i:t,c=o?40*o:n,d=s&&c?"viewBox='0 0 "+s+" "+c+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+d+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(d?"none":"contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+u+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return getImageBlurSvg}})},7327:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return l}});let i=n(1024),o=i._(n(2265)),u=n(5751),l=o.default.createContext(u.imageConfigDefault)},5751:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{VALID_LOADERS:function(){return n},imageConfigDefault:function(){return i}});let n=["default","imgix","cloudinary","akamai","custom"],i={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},679:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{unstable_getImgProps:function(){return unstable_getImgProps},default:function(){return c}});let i=n(1024),o=n(7929),u=n(2637),l=n(413),s=i._(n(9950)),unstable_getImgProps=e=>{(0,u.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,o.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}},c=l.Image},9950:function(e,t){"use strict";function defaultLoader(e){let{config:t,src:n,width:i,quality:o}=e;return t.path+"?url="+encodeURIComponent(n)+"&w="+i+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),defaultLoader.__next_img_default=!0;let n=defaultLoader},6304:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return u}});let i=n(1024),o=i._(n(2265)),u=o.default.createContext(null)},110:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return SideEffect}});let i=n(2265),o=i.useLayoutEffect,u=i.useEffect;function SideEffect(e){let{headManager:t,reduceComponentsToState:n}=e;function emitChange(){if(t&&t.mountedInstances){let o=i.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(o,e))}}return o(()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),o(()=>(t&&(t._pendingUpdate=emitChange),()=>{t&&(t._pendingUpdate=emitChange)})),u(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},2637:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return warnOnce}});let warnOnce=e=>{}},622:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i=n(2265),o=Symbol.for("react.element"),u=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),l=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function q(e,t,n){var i,c={},d=null,f=null;for(i in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(f=t.ref),t)u.call(t,i)&&!s.hasOwnProperty(i)&&(c[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===c[i]&&(c[i]=t[i]);return{$$typeof:o,type:e,key:d,ref:f,props:c,_owner:l.current}}t.jsx=q,t.jsxs=q},7437:function(e,t,n){"use strict";e.exports=n(622)},6691:function(e,t,n){e.exports=n(679)},4033:function(e,t,n){e.exports=n(94)},1853:function(e,t,n){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i=n(2265),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},u=i.useState,l=i.useEffect,s=i.useLayoutEffect,c=i.useDebugValue;function r(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!o(e,n)}catch(e){return!0}}var d="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),i=u({inst:{value:n,getSnapshot:t}}),o=i[0].inst,d=i[1];return s(function(){o.value=n,o.getSnapshot=t,r(o)&&d({inst:o})},[e,n,t]),l(function(){return r(o)&&d({inst:o}),e(function(){r(o)&&d({inst:o})})},[e]),c(n),n};t.useSyncExternalStore=void 0!==i.useSyncExternalStore?i.useSyncExternalStore:d},8704:function(e,t,n){"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i=n(2265),o=n(6272),u="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},l=o.useSyncExternalStore,s=i.useRef,c=i.useEffect,d=i.useMemo,f=i.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,n,i,o){var p=s(null);if(null===p.current){var g={hasValue:!1,value:null};p.current=g}else g=p.current;var m=l(e,(p=d(function(){function a(t){if(!s){if(s=!0,e=t,t=i(t),void 0!==o&&g.hasValue){var n=g.value;if(o(n,t))return l=n}return l=t}if(n=l,u(e,t))return n;var c=i(t);return void 0!==o&&o(n,c)?n:(e=t,l=c)}var e,l,s=!1,c=void 0===n?null:n;return[function(){return a(t())},null===c?void 0:function(){return a(c())}]},[t,n,i,o]))[0],p[1]);return c(function(){g.hasValue=!0,g.value=m},[m]),f(m),m}},6272:function(e,t,n){"use strict";e.exports=n(1853)},5401:function(e,t,n){"use strict";e.exports=n(8704)},4660:function(e,t,n){"use strict";n.d(t,{Ue:function(){return create}});let createStoreImpl=e=>{let t;let n=new Set,setState=(e,i)=>{let o="function"==typeof e?e(t):e;if(!Object.is(o,t)){let e=t;t=(null!=i?i:"object"!=typeof o)?o:Object.assign({},t,o),n.forEach(n=>n(t,e))}},getState=()=>t,i={setState,getState,subscribe:e=>(n.add(e),()=>n.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}};return t=e(setState,getState,i),i},createStore=e=>e?createStoreImpl(e):createStoreImpl;var i=n(2265),o=n(5401);let{useSyncExternalStoreWithSelector:u}=o,l=!1,createImpl=e=>{"function"!=typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");let t="function"==typeof e?createStore(e):e,useBoundStore=(e,n)=>(function(e,t=e.getState,n){n&&!l&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),l=!0);let o=u(e.subscribe,e.getState,e.getServerState||e.getState,t,n);return(0,i.useDebugValue)(o),o})(t,e,n);return Object.assign(useBoundStore,t),useBoundStore},create=e=>e?createImpl(e):createImpl}}]);