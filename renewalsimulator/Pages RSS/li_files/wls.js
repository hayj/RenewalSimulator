/**
 * WLS.js v0.5.0
 */

!function(){"use strict";function t(){const e={},n=function(n){for(const o in n)Object.prototype.hasOwnProperty.call(n,o)&&("[object Object]"===Object.prototype.toString.call(n[o])?e[o]=t(e[o],n[o]):e[o]=n[o])};for(let t=0;t<arguments.length;t++)n(arguments[t]);return e}const e={mobile:{max:480},tablet:{min:480,max:1024},desktop:{min:1024}};let n=null;const o=void 0!==window._gtm&&void 0!==window._gtm.appConfig;const i=o&&void 0!==window.getConsole?window.getConsole("WLS"):void 0,r={enabled:!1,colors:!/Edge|Trident/.test(navigator.userAgent),_appendTag:function(t){return t=Array.prototype.slice.call(t),this.colors&&t.unshift("background-color:rgb(85,84,199);color:rgb(255,255,255);border-radius:2px;"),t.unshift(""+(this.colors?"%c WLS ":"[WLS]")),t},enable:function(){this.enabled=!0},info:function(){if(i)i.log.apply(i,arguments);else{if(!this.enabled)return;const t=this._appendTag(arguments);console.log.apply(console,t)}},error:function(){if(i)i.error.apply(i,arguments);else{const t=this._appendTag(arguments);console.error.apply(console,t)}}};function a(t){return new FontFace(`WLfont_${Math.round(1e8*Math.random())}`,`url(${t})`).load().then((()=>!1)).catch((()=>!0))}const s="adblock",c="whitelist",l={config:null,internalTrackingId:"UA-88758531-45",url:"https://astatic.ccmbg.com/fc/fonts/whitelist/wl.woff2",urlCtrl:"https://astatic.ccmbg.com/fc/fonts/whitelist/wl2.woff2",_getGaTracker:function(t){return new Promise(((e,n)=>{const o=setTimeout((()=>n()),15e3),i=()=>{if(void 0!==window.GoogleAnalyticsObject&&"function"==typeof window[window.GoogleAnalyticsObject]){const n=window[window.GoogleAnalyticsObject];n((function(){let r;if("function"==typeof n.getAll){r=n.getAll().find((e=>e.get("trackingId")===t))}void 0!==r?(clearTimeout(o),e(r)):setTimeout(i,50)}))}else setTimeout(i,50)};i()}))},sendInternalStats:function({status:t}){const e=()=>{const e=this.internalTrackingId,n=window[window.GoogleAnalyticsObject];n((function(){n("create",e,"auto","wlsTracker"),n("wlsTracker.set","dimension1",t),n("wlsTracker.send","pageview"),r.info("[stats] internal stats sent.")}))};if(void 0!==window.GoogleAnalyticsObject&&"function"==typeof window[window.GoogleAnalyticsObject])e();else{const t="ga";window.GoogleAnalyticsObject=t,window[t]=window[t]||function(){(window[t].q=window[t].q||[]).push(arguments)},window[t].l=1*new Date,(n="https://www.google-analytics.com/analytics.js",new Promise(((t,e)=>{var o=document.createElement("script");o.async=!0,o.src=n,o.type="text/javascript",o.onload=function(){t()},o.onerror=function(){e()},document.body.appendChild(o)}))).then((()=>{r.info("[stats] GA API loaded."),e()})).catch((t=>{r.error(`[stats] Cannot load GA API: ${t.toString()}`)}))}var n},sendPublisherStats:function(){if(o){const t=window.dataLayer&&window.dataLayer[0]&&window.dataLayer[0].appConfig&&window.dataLayer[0].appConfig.ua;r.info(`[stats] CCM env. trackingId = ${t}`),this.config.trackingId=t}this.config.trackingId?(r.info("[stats] Sending publisher stats..."),this._getGaTracker(this.config.trackingId).then((t=>{r.info("[stats] Got GA publisher tracker. Send stats.");const{category:e,action:n,label:o}=this.config.event;t.send("event",e,n,o,{nonInteraction:!0})})).catch((()=>{r.info(`[stats] No publisher tracker found for UA=${this.config.trackingId}`)}))):r.error('Missing GA "trackingId". If you want to disable GA event, set "stats" option to "false".')},setup:function(t){this.config=t,"function"==typeof FontFace?(r.info(`[stats] Publisher stats are ${this.config?"enabled":"disabled"}.`),r.info("[stats] Checking control urls..."),Promise.all([a(this.url),a(this.urlCtrl)]).then((t=>{t[0]&&!t[1]?(r.info("[stats] Whitelist detected on the page."),this.config&&this.sendPublisherStats(),this.sendInternalStats({status:c})):r.info("[stats] Whitelist not detected on the page.")}))):r.info("[stats] FontFace api not supported. Stats collector abort.")}};function d(){(function(){var t=function(t){var e=0;return function(){return e<t.length?{done:!1,value:t[e++]}:{done:!0}}},e=this||self,n=/^[\w+/_-]+[=]{0,2}$/,o=null,i=function(){},r=function(t){var e=typeof t;if("object"==e){if(!t)return"null";if(t instanceof Array)return"array";if(t instanceof Object)return e;var n=Object.prototype.toString.call(t);if("[object Window]"==n)return"object";if("[object Array]"==n||"number"==typeof t.length&&void 0!==t.splice&&void 0!==t.propertyIsEnumerable&&!t.propertyIsEnumerable("splice"))return"array";if("[object Function]"==n||void 0!==t.call&&void 0!==t.propertyIsEnumerable&&!t.propertyIsEnumerable("call"))return"function"}else if("function"==e&&void 0===t.call)return"object";return e},a=function(t,e){function n(){}n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t},s=function(t,e){this.b=t===l&&e||"",this.a=c},c={},l={},d=function(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^+new Date).toString(36)},u=function(t,e){return e=String(e),"application/xhtml+xml"===t.contentType&&(e=e.toLowerCase()),t.createElement(e)},f=function(t){this.a=t||e.document||document};f.prototype.appendChild=function(t,e){t.appendChild(e)};var h=function(t,i,r,a,l,d){try{var f=t.a,p=u(t.a,"SCRIPT");p.async=!0,function(t,i){t.src=i instanceof s&&i.constructor===s&&i.a===c?i.b:"type_error:TrustedResourceUrl",null===o&&(o=(i=(i=e.document).querySelector&&i.querySelector("script[nonce]"))&&(i=i.nonce||i.getAttribute("nonce"))&&n.test(i)?i:""),(i=o)&&t.setAttribute("nonce",i)}(p,i),f.head.appendChild(p),p.addEventListener("load",(function(){l(),a&&f.head.removeChild(p)})),p.addEventListener("error",(function(){0<r?h(t,i,r-1,a,l,d):(a&&f.head.removeChild(p),d())}))}catch(t){d()}},p=e.atob("aHR0cHM6Ly93d3cuZ3N0YXRpYy5jb20vaW1hZ2VzL2ljb25zL21hdGVyaWFsL3N5c3RlbS8xeC93YXJuaW5nX2FtYmVyXzI0ZHAucG5n"),m=e.atob("WW91IGFyZSBzZWVpbmcgdGhpcyBtZXNzYWdlIGJlY2F1c2UgYWQgb3Igc2NyaXB0IGJsb2NraW5nIHNvZnR3YXJlIGlzIGludGVyZmVyaW5nIHdpdGggdGhpcyBwYWdlLg=="),b=e.atob("RGlzYWJsZSBhbnkgYWQgb3Igc2NyaXB0IGJsb2NraW5nIHNvZnR3YXJlLCB0aGVuIHJlbG9hZCB0aGlzIHBhZ2Uu"),g=function(t,e,n){this.b=t,this.f=new f(this.b),this.a=null,this.c=[],this.g=!1,this.i=e,this.h=n},y=function(t){if(t.b.body&&!t.g){var n=function(){w(t),e.setTimeout((function(){return k(t,3)}),50)};h(t.f,t.i,2,!0,(function(){e[t.h]||n()}),n),t.g=!0}},w=function(t){for(var e=N(1,5),n=0;n<e;n++){var o=x(t);t.b.body.appendChild(o),t.c.push(o)}(e=x(t)).style.bottom="0",e.style.left="0",e.style.position="fixed",e.style.width=N(100,110).toString()+"%",e.style.zIndex=N(2147483544,2147483644).toString(),e.style["background-color"]=S(249,259,242,252,219,229),e.style["box-shadow"]="0 0 12px #888",e.style.color=S(0,10,0,10,0,10),e.style.display="flex",e.style["justify-content"]="center",e.style["font-family"]="Roboto, Arial",(n=x(t)).style.width=N(80,85).toString()+"%",n.style.maxWidth=N(750,775).toString()+"px",n.style.margin="24px",n.style.display="flex",n.style["align-items"]="flex-start",n.style["justify-content"]="center",(o=u(t.f.a,"IMG")).className=d(),o.src=p,o.style.height="24px",o.style.width="24px",o.style["padding-right"]="16px";var i=x(t),r=x(t);r.style["font-weight"]="bold",r.textContent=m;var a=x(t);for(a.textContent=b,v(t,i,r),v(t,i,a),v(t,n,o),v(t,n,i),v(t,e,n),t.a=e,t.b.body.appendChild(t.a),e=N(1,5),n=0;n<e;n++)o=x(t),t.b.body.appendChild(o),t.c.push(o)},v=function(t,e,n){for(var o=N(1,5),i=0;i<o;i++){var r=x(t);e.appendChild(r)}for(e.appendChild(n),n=N(1,5),o=0;o<n;o++)i=x(t),e.appendChild(i)},N=function(t,e){return Math.floor(t+Math.random()*(e-t))},S=function(t,e,n,o,i,r){return"rgb("+N(Math.max(t,0),Math.min(e,255)).toString()+","+N(Math.max(n,0),Math.min(o,255)).toString()+","+N(Math.max(i,0),Math.min(r,255)).toString()+")"},x=function(t){return(t=u(t.f.a,"DIV")).className=d(),t},k=function(t,n){0>=n||null!=t.a&&0!=t.a.offsetHeight&&0!=t.a.offsetWidth||(A(t),w(t),e.setTimeout((function(){return k(t,n-1)}),50))},A=function(e){var n=e.c,o="undefined"!=typeof Symbol&&Symbol.iterator&&n[Symbol.iterator];for(n=o?o.call(n):{next:t(n)},o=n.next();!o.done;o=n.next())(o=o.value)&&o.parentNode&&o.parentNode.removeChild(o);e.c=[],(n=e.a)&&n.parentNode&&n.parentNode.removeChild(n),e.a=null},I=function(t,n,o,i,r){var a=W(o),s=function(o){document.body?function(o){o.appendChild(a),e.setTimeout((function(){a?(0!==a.offsetHeight&&0!==a.offsetWidth?n():t(),a.parentNode&&a.parentNode.removeChild(a)):t()}),i)}(document.body):0<o?e.setTimeout((function(){s(o-1)}),r):n()};s(3)},W=function(t){var e=document.createElement("div");return e.className=t,e.style.width="1px",e.style.height="1px",e.style.position="absolute",e.style.left="-10000px",e.style.top="-10000px",e.style.zIndex="-10000",e},M={},C=null,E=function(){},G="function"==typeof Uint8Array,T=function(t,e){t.b=null,e||(e=[]),t.j=void 0,t.f=-1,t.a=e;t:{if(e=t.a.length){--e;var n=t.a[e];if(!(null===n||"object"!=typeof n||Array.isArray(n)||G&&n instanceof Uint8Array)){t.g=e-t.f,t.c=n;break t}}t.g=Number.MAX_VALUE}t.i={}},L=[],R=function(t,e){if(e<t.g){e+=t.f;var n=t.a[e];return n===L?t.a[e]=[]:n}if(t.c)return(n=t.c[e])===L?t.c[e]=[]:n},j=function(t,e,n){if(t.b||(t.b={}),!t.b[n]){var o=R(t,n);o&&(t.b[n]=new e(o))}return t.b[n]};E.prototype.h=G?function(){var t=Uint8Array.prototype.toJSON;Uint8Array.prototype.toJSON=function(){var t;if(void 0===t&&(t=0),!C){C={};for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),n=["+/=","+/","-_=","-_.","-_"],o=0;5>o;o++){var i=e.concat(n[o].split(""));M[o]=i;for(var r=0;r<i.length;r++){var a=i[r];void 0===C[a]&&(C[a]=r)}}}for(t=M[t],e=[],n=0;n<this.length;n+=3){var s=this[n],c=(o=n+1<this.length)?this[n+1]:0;r=s>>2,s=(3&s)<<4|c>>4,c=(15&c)<<2|(a=(i=n+2<this.length)?this[n+2]:0)>>6,a&=63,i||(a=64,o||(c=64)),e.push(t[r],t[s],t[c]||"",t[a]||"")}return e.join("")};try{return JSON.stringify(this.a&&this.a,Z)}finally{Uint8Array.prototype.toJSON=t}}:function(){return JSON.stringify(this.a&&this.a,Z)};var Z=function(t,e){return"number"!=typeof e||!isNaN(e)&&1/0!==e&&-1/0!==e?e:String(e)};E.prototype.toString=function(){return this.a.toString()};var _=function(t){T(this,t)};a(_,E);var V=function(t){T(this,t)};a(V,E);var U=function(t,e){this.c=new f(t);var n=j(e,_,5);n=new s(l,R(n,4)||""),this.b=new g(t,n,R(e,4)),this.a=e},O=function(t,e){F(t,"internal_api_load_with_sb",(function(t,n,o){!function(t,e,n,o){e=new _(e?JSON.parse(e):null),e=new s(l,R(e,4)||""),h(t.c,e,3,!1,n,(function(){I((function(){y(t.b),o(!1)}),(function(){o(!0)}),R(t.a,2),R(t.a,3),R(t.a,1))}))}(e,t,n,o)})),F(t,"internal_api_sb",(function(){y(e.b)}))},F=function(t,n,o){!function(t,n){Object.defineProperty(e,t,{configurable:!1,get:function(){return n},set:i})}(t=e.btoa(t+n),o)},z=function(t,n,o){for(var i=[],a=2;a<arguments.length;++a)i[a-2]=arguments[a];if(a=e.btoa(t+n),a=e[a],"function"!=r(a))throw Error("API not exported.");a.apply(null,i)},Y=function(t){T(this,t)};a(Y,E);var B=function(t){this.h=window,this.a=t,this.b=R(this.a,1),this.f=j(this.a,_,2),this.g=j(this.a,V,3),this.c=!1};B.prototype.start=function(){D();var t=new U(this.h.document,this.g);O(this.b,t),H(this)};var J,X,D=function(){var t=function(){if(!e.frames.googlefcPresent)if(document.body){var n=document.createElement("iframe");n.style.display="none",n.style.width="0px",n.style.height="0px",n.style.border="none",n.style.zIndex="-1000",n.style.left="-1000px",n.style.top="-1000px",n.name="googlefcPresent",document.body.appendChild(n)}else e.setTimeout(t,5)};t()},H=function(t){var n=Date.now();z(t.b,"internal_api_load_with_sb",t.f.h(),(function(){var o,i=t.b,r=e[e.btoa(i+"loader_js")];if(r){r=e.atob(r),r=parseInt(r,10),i=e.btoa(i+"loader_js").split(".");var a=e;i[0]in a||void 0===a.execScript||a.execScript("var "+i[0]);for(;i.length&&(o=i.shift());)i.length?a=a[o]&&a[o]!==Object.prototype[o]?a[o]:a[o]={}:a[o]=null;o=1728e5>(o=Math.abs(n-r))?0:o}else o=-1;0!=o&&(z(t.b,"internal_api_sb"),P(t,R(t.a,6)))}),(function(e){P(t,R(t.a,e?4:5))}))},P=function(t,n){t.c||(t.c=!0,(t=new e.XMLHttpRequest).open("GET",n,!0),t.send())};X=function(t){"function"==typeof window.atob&&(t=window.atob(t),t=new Y(t?JSON.parse(t):null),new B(t).start())},e[J="__d3lUW8vwsKlB__"]=function(t){for(var n=[],o=0;o<arguments.length;++o)n[o-0]=arguments[o];e[J]=i,X.apply(null,n)}}).call(this),window.__d3lUW8vwsKlB__("WyJhMGFmMzA4YmRmM2IxODg2IixbbnVsbCxudWxsLG51bGwsImh0dHBzOi8vZnVuZGluZ2Nob2ljZXNtZXNzYWdlcy5nb29nbGUuY29tL2YvQUdTS1d4VVVDWXI5WjFnVHNzdHA0YkJISWhGRmVScUo4M1FFOWtJamJsM2trbVpTaENoX2ktQXM1NW82Uk5PTE1nbVNNalU5eEtyaFRyQjhQZUItSF9Gajk4Y1x1MDAzZCJdCixbMjAsImRpdi1ncHQtYWQiLDEwMCwiWVRCaFpqTXdPR0prWmpOaU1UZzROZ1x1MDAzZFx1MDAzZCIsW251bGwsbnVsbCxudWxsLCJodHRwczovL3d3dy5nc3RhdGljLmNvbS8wZW1uL2YvcC9hMGFmMzA4YmRmM2IxODg2LmpzP3VzcXBcdTAwM2RDQkEiXQpdCiwiaHR0cHM6Ly9mdW5kaW5nY2hvaWNlc21lc3NhZ2VzLmdvb2dsZS5jb20vbC9BR1NLV3hVM0V4aG1hRmcyYXVPaXZEeG9sTk0yUWxCUkdZeTF1WjB3Q1BMblFWRk1NTGF2RFFKbG02UkdLTi1iQUU1SG1iMkhfYWEwV2RZbFBxTWszN1R1P2FiXHUwMDNkMSIsImh0dHBzOi8vZnVuZGluZ2Nob2ljZXNtZXNzYWdlcy5nb29nbGUuY29tL2wvQUdTS1d4VXZPQWl5RXBnOHVLYUJaVXZPU0xURE95TE00d0RwNmJEZzZFT1lFdlRBREV3VEhrN1haZEJUdFViNGpTLWVzRFFjNEFTWE1tS1FaWlV1czRyaz9hYlx1MDAzZDJcdTAwMjZzYmZcdTAwM2QxIiwiaHR0cHM6Ly9mdW5kaW5nY2hvaWNlc21lc3NhZ2VzLmdvb2dsZS5jb20vbC9BR1NLV3hYb3k0cnJtZy1FbVBFYmJYYjZ0Nl96Sy1oZTFiRVBjYXdVMTRfRmRTb3BiQXh4czNjenR5b1dTUVJUb0pHeUZsUGNYNmJBa0hJV0JudWNqNmVwP3NiZlx1MDAzZDIiXQo=")}const u=[/(^|\.)commentcamarche.net$/,/(^|\.)droit-finances.commentcamarche.com$/,/(^|\.)hugolescargot.com$/,/(^|\.)journaldesfemmes.fr$/,/(^|\.)journaldunet.com$/,/(^|\.)linternaute.com$/],f={showMessage:!0,debug:!1,list:{id:void 0,domain:"lists.ccmbg.com",name:"main.txt"},cookie:{name:"wlscheck",limit:2,options:{expires:30,path:"/"}},origin:{fromSEO:!0,fromNewsletter:!0},stats:{trackingId:void 0,event:{category:"whitelist",action:"pageview",label:"whitelisted"}}};let h=null;const p=()=>{document.hidden||location.reload()};function m(){return-1!==location.search.indexOf("forcewls=1")}function b(t){let e=function(t){const e=document.cookie.match("(^|;) ?"+t+"=([^;]*)(;|$)");return e?decodeURIComponent(e[2]):null}(t);return null===e&&(e=0),e++,e}function g(t){if(m())return!0;if(!1===t.showMessage)return r.info("No message. Disabled on purpose."),!1;if("desktop"!==function(){if(null!==n)return n;const t=document.documentElement.clientWidth;for(let o in e){const i=e[o];if(i.min&&i.max){if(t>=i.min&&t<=i.max)return n=o,o}else{if(i.min&&t>i.min)return n=o,o;if(i.max&&t<i.max)return n=o,o}}}())return r.info("No message. Not on desktop."),!1;if(t.cookie){const e=b(t.cookie.name);if(e>t.cookie.limit)return r.info(`No message. Already shown ${e} times (limit: ${t.cookie.limit})`),!1}if(t.origin){const e=""!==document.referrer&&(document.referrer===location.href||function(t){try{return/\.google\./.test(new URL(t).hostname)}catch(t){return!1}}(document.referrer)),n=-1!==location.search.indexOf("utm_medium=email");if(t.origin.fromSEO&&!e&&t.origin.fromNewsletter&&!n)return r.info(`No message. fromSEO=${e} (referrer: "${document.referrer}") - fromNewsletter=${n}`),!1}return!0}!function(){const e=window.wls&&window.wls.options?window.wls.options:{},n=t(f,e),o=-1!==location.search.indexOf("debugwls=1");(n.debug||o)&&r.enable(),r.info("Init WLS."),l.setup(n.stats);const i=m();i&&r.info("Force mode enabled.");const a=g(n);n.list.id||!n.showMessage||i?(window.googlefc=window.googlefc||{},window.googlefc.callbackQueue=window.googlefc.callbackQueue||[],window.googlefc.controlledMessagingFunction=t=>{r.info("Message handler called. Show message if needed."),a?(h||(r.info("Bind observer."),h=new MutationObserver((t=>{t.forEach((t=>{t.addedNodes.length>0?Array.prototype.forEach.call(t.addedNodes,(t=>{if("fc-ab-root"===t.className){if(r.info("UI inserted. Wrap default button."),n.cookie&&!i){const t=b(n.cookie.name);!function(t,e,n){let o=null;"number"==typeof(n=n||{}).expires?(o=new Date,o.setTime(o.getTime()+24*(n.expires||0)*60*60*1e3)):n.expires&&"function"==typeof n.expires.toUTCString&&(o=n.expires);let i=null!==o?"; expires="+o.toUTCString():"",r=void 0!==n.path?"; path="+n.path:"",a=void 0!==n.domain?"; domain="+n.domain:"",s=void 0!==n.secure?"; secure":"";document.cookie=[t,"=",encodeURIComponent(e),i,r,a,s].join("")}(n.cookie.name,t,n.cookie.options)}const e=document.querySelector(".fc-close");e&&e.remove();const o=function(t){let e="",n="number"==typeof t?t:11;for(;n--;)e+="zyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA9876543210"[62*Math.random()|0];return e}(),a=encodeURIComponent(`https://${n.list.domain}/lists/${n.list.id}/${o}/${n.list.name}`);if(u.some((t=>t.test(location.hostname)))){r.info("Subscription link authorized.");const e=document.createElement("a");e.href=`abp:subscribe?location=${a}`;const n=t.querySelector("button.fc-button-whitelist");n.parentNode.insertBefore(e,n),e.append(n)}else{r.info("Subscription link not authorized. Use iframe.");const e="https://static-lists.linternaute.com/",n=document.createElement("iframe");n.src=e+"subscribe",n.style.border="none",n.style.width="100%",n.style.height="100%",n.style.position="absolute",n.style.top="0",n.style.left="0",n.addEventListener("load",(()=>{n.contentWindow.postMessage({cmd:"set_url",payload:`abp:subscribe?location=${a}`},e)}));const o=t.querySelector("button.fc-button-whitelist");o.style.setProperty("position","relative","important"),o.prepend(n)}document.addEventListener("visibilitychange",p)}})):t.removedNodes.length>0&&Array.prototype.forEach.call(t.removedNodes,(t=>{"fc-ab-root"===t.className&&(r.info("Popup closed"),h.disconnect(),document.removeEventListener("visibilitychange",p))}))}))})),h.observe(document.body,{childList:!0})),t.proceed(!0)):t.proceed(!1)},d(),window.googlefc.callbackQueue.push({AD_BLOCK_DATA_READY:function(){switch(window.googlefc.getAdBlockerStatus()){case window.googlefc.AdBlockerStatusEnum.EXTENSION_LEVEL_AD_BLOCKER:case window.googlefc.AdBlockerStatusEnum.NETWORK_LEVEL_AD_BLOCKER:r.info("Adblocker detected. Send stats."),l.sendInternalStats({status:s});break;case window.googlefc.AdBlockerStatusEnum.NO_AD_BLOCKER:r.info("No adblocker. Disconnect observer."),h&&h.disconnect()}}})):r.error('Missing list "id".')}()}();