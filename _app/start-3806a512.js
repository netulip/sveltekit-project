var t=Object.defineProperty,e=Object.prototype.hasOwnProperty,r=Object.getOwnPropertySymbols,s=Object.prototype.propertyIsEnumerable,o=(e,r,s)=>r in e?t(e,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[r]=s,n=(t,n)=>{for(var a in n||(n={}))e.call(n,a)&&o(t,a,n[a]);if(r)for(var a of r(n))s.call(n,a)&&o(t,a,n[a]);return t};import{S as a,i,s as l,e as c,t as u,c as h,a as p,b as d,d as f,f as m,g,h as y,j as v,k as $,l as b,n as w,m as _,o as E,p as x,q,r as S,u as R,v as k,w as L,x as O,y as P,z as N,A as T,B as j,C as U,D as A,E as C,F as I,G as D}from"./chunks/vendor-ba99e6db.js";function M(t){let e,r,s=t[1].stack+"";return{c(){e=c("pre"),r=u(s)},l(t){e=h(t,"PRE",{});var o=p(e);r=d(o,s),o.forEach(f)},m(t,s){m(t,e,s),g(e,r)},p(t,e){2&e&&s!==(s=t[1].stack+"")&&y(r,s)},d(t){t&&f(e)}}}function V(t){let e,r,s,o,n,a,i,l=t[1].message+"",_=t[1].stack&&M(t);return{c(){e=c("h1"),r=u(t[0]),s=v(),o=c("p"),n=u(l),a=v(),_&&_.c(),i=$()},l(c){e=h(c,"H1",{});var u=p(e);r=d(u,t[0]),u.forEach(f),s=b(c),o=h(c,"P",{});var m=p(o);n=d(m,l),m.forEach(f),a=b(c),_&&_.l(c),i=$()},m(t,l){m(t,e,l),g(e,r),m(t,s,l),m(t,o,l),g(o,n),m(t,a,l),_&&_.m(t,l),m(t,i,l)},p(t,[e]){1&e&&y(r,t[0]),2&e&&l!==(l=t[1].message+"")&&y(n,l),t[1].stack?_?_.p(t,e):(_=M(t),_.c(),_.m(i.parentNode,i)):_&&(_.d(1),_=null)},i:w,o:w,d(t){t&&f(e),t&&f(s),t&&f(o),t&&f(a),_&&_.d(t),t&&f(i)}}}function B(t,e,r){let{status:s}=e,{error:o}=e;return t.$$set=t=>{"status"in t&&r(0,s=t.status),"error"in t&&r(1,o=t.error)},[s,o]}class K extends a{constructor(t){super(),i(this,t,B,V,l,{status:0,error:1})}}function z(t){let e,r,s;const o=[t[4]||{}];var n=t[2][1];function a(t){let e={};for(let r=0;r<o.length;r+=1)e=_(e,o[r]);return{props:e}}return n&&(e=new n(a())),{c(){e&&x(e.$$.fragment),r=$()},l(t){e&&q(e.$$.fragment,t),r=$()},m(t,o){e&&S(e,t,o),m(t,r,o),s=!0},p(t,s){const i=16&s?R(o,[k(t[4]||{})]):{};if(n!==(n=t[2][1])){if(e){U();const t=e;O(t.$$.fragment,1,0,(()=>{P(t,1)})),A()}n?(e=new n(a()),x(e.$$.fragment),L(e.$$.fragment,1),S(e,r.parentNode,r)):e=null}else n&&e.$set(i)},i(t){s||(e&&L(e.$$.fragment,t),s=!0)},o(t){e&&O(e.$$.fragment,t),s=!1},d(t){t&&f(r),e&&P(e,t)}}}function W(t){let e,r;return e=new K({props:{status:t[0],error:t[1]}}),{c(){x(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,s){S(e,t,s),r=!0},p(t,r){const s={};1&r&&(s.status=t[0]),2&r&&(s.error=t[1]),e.$set(s)},i(t){r||(L(e.$$.fragment,t),r=!0)},o(t){O(e.$$.fragment,t),r=!1},d(t){P(e,t)}}}function G(t){let e,r,s,o;const n=[W,z],a=[];function i(t,e){return t[1]?0:1}return e=i(t),r=a[e]=n[e](t),{c(){r.c(),s=$()},l(t){r.l(t),s=$()},m(t,r){a[e].m(t,r),m(t,s,r),o=!0},p(t,o){let l=e;e=i(t),e===l?a[e].p(t,o):(U(),O(a[l],1,1,(()=>{a[l]=null})),A(),r=a[e],r?r.p(t,o):(r=a[e]=n[e](t),r.c()),L(r,1),r.m(s.parentNode,s))},i(t){o||(L(r),o=!0)},o(t){O(r),o=!1},d(t){a[e].d(t),t&&f(s)}}}function Y(t){let e,r=t[6]&&F(t);return{c(){e=c("div"),r&&r.c(),this.h()},l(t){e=h(t,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,class:!0});var s=p(e);r&&r.l(s),s.forEach(f),this.h()},h(){E(e,"id","svelte-announcer"),E(e,"aria-live","assertive"),E(e,"aria-atomic","true"),E(e,"class","svelte-1y31lbn")},m(t,s){m(t,e,s),r&&r.m(e,null)},p(t,s){t[6]?r?r.p(t,s):(r=F(t),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},d(t){t&&f(e),r&&r.d()}}}function F(t){let e,r;return{c(){e=u("Navigated to "),r=u(t[7])},l(s){e=d(s,"Navigated to "),r=d(s,t[7])},m(t,s){m(t,e,s),m(t,r,s)},p(t,e){128&e&&y(r,t[7])},d(t){t&&f(e),t&&f(r)}}}function H(t){let e,r,s,o;const n=[t[3]||{}];let a={$$slots:{default:[G]},$$scope:{ctx:t}};for(let l=0;l<n.length;l+=1)a=_(a,n[l]);e=new t[8]({props:a});let i=t[5]&&Y(t);return{c(){x(e.$$.fragment),r=v(),i&&i.c(),s=$()},l(t){q(e.$$.fragment,t),r=b(t),i&&i.l(t),s=$()},m(t,n){S(e,t,n),m(t,r,n),i&&i.m(t,n),m(t,s,n),o=!0},p(t,[r]){const o=8&r?R(n,[k(t[3]||{})]):{};2071&r&&(o.$$scope={dirty:r,ctx:t}),e.$set(o),t[5]?i?i.p(t,r):(i=Y(t),i.c(),i.m(s.parentNode,s)):i&&(i.d(1),i=null)},i(t){o||(L(e.$$.fragment,t),o=!0)},o(t){O(e.$$.fragment,t),o=!1},d(t){P(e,t),t&&f(r),i&&i.d(t),t&&f(s)}}}function J(t,e,r){let{status:s}=e,{error:o}=e,{stores:n}=e,{page:a}=e,{components:i}=e,{props_0:l=null}=e,{props_1:c=null}=e;const u=i[0];N("__svelte__",n),T(n.page.notify);let h=!1,p=!1,d=null;return j((()=>{const t=n.page.subscribe((()=>{h&&(r(6,p=!0),r(7,d=document.title))}));return r(5,h=!0),t})),t.$$set=t=>{"status"in t&&r(0,s=t.status),"error"in t&&r(1,o=t.error),"stores"in t&&r(9,n=t.stores),"page"in t&&r(10,a=t.page),"components"in t&&r(2,i=t.components),"props_0"in t&&r(3,l=t.props_0),"props_1"in t&&r(4,c=t.props_1)},t.$$.update=()=>{1536&t.$$.dirty&&n.page.set(a)},[s,o,i,l,c,h,p,d,u,n,a]}class X extends a{constructor(t){super(),i(this,t,J,H,l,{status:0,error:1,stores:9,page:10,components:2,props_0:3,props_1:4})}}let Q;const Z={};function tt(t){let e,r;const s=t[1].default,o=C(s,t,t[0],null);return{c(){e=c("main"),o&&o.c(),this.h()},l(t){e=h(t,"MAIN",{class:!0});var r=p(e);o&&o.l(r),r.forEach(f),this.h()},h(){E(e,"class","svelte-1vzbymh")},m(t,s){m(t,e,s),o&&o.m(e,null),r=!0},p(t,[e]){o&&o.p&&1&e&&I(o,s,t,t[0],e,null,null)},i(t){r||(L(o,t),r=!0)},o(t){O(o,t),r=!1},d(t){t&&f(e),o&&o.d(t)}}}function et(t,e,r){let{$$slots:s={},$$scope:o}=e;return t.$$set=t=>{"$$scope"in t&&r(0,o=t.$$scope)},[o,s]}var rt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:class extends a{constructor(t){super(),i(this,t,et,tt,l,{})}}});const st=[[/^\/$/,[[()=>function(t,e){if(!e)return t();if(void 0===Q){const t=document.createElement("link").relList;Q=t&&t.supports&&t.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(e.map((t=>{if(t in Z)return;Z[t]=!0;const e=t.endsWith(".css"),r=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${r}`))return;const s=document.createElement("link");return s.rel=e?"stylesheet":Q,e||(s.as="script",s.crossOrigin=""),s.href=t,document.head.appendChild(s),e?new Promise(((t,e)=>{s.addEventListener("load",t),s.addEventListener("error",e)})):void 0}))).then((()=>t()))}((()=>import("./pages/index.svelte-727a5abb.js")),["/_app/pages/index.svelte-727a5abb.js","/_app/assets/pages/index.svelte-b8ea0ceb.css","/_app/chunks/vendor-ba99e6db.js"])][0]]]];function ot(){return{x:pageXOffset,y:pageYOffset}}function nt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}class at{constructor({base:t,routes:e}){this.base=t,this.routes=e}init(t){let e;this.renderer=t,t.router=this,this.enabled=!0,"scrollRestoration"in history&&(history.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{history.scrollRestoration="auto"})),addEventListener("load",(()=>{history.scrollRestoration="manual"})),addEventListener("scroll",(()=>{clearTimeout(e),e=setTimeout((()=>{const t=n(n({},history.state||{}),{"sveltekit:scroll":ot()});history.replaceState(t,document.title,window.location.href)}),50)}));const r=t=>{const e=nt(t.target);e&&e.hasAttribute("sveltekit:prefetch")&&this.prefetch(new URL(e.href))};let s;addEventListener("touchstart",r),addEventListener("mousemove",(t=>{clearTimeout(s),s=setTimeout((()=>{r(t)}),20)})),addEventListener("click",(t=>{if(!this.enabled)return;if(t.button||1!==t.which)return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=nt(t.target);if(!e)return;if(!e.href)return;const r="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,s=String(r?e.href.baseVal:e.href);if(s===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(r?e.target.baseVal:e.target)return;const o=new URL(s);if(o.pathname===location.pathname&&o.search===location.search)return;const n=this.parse(o);if(n){const r=e.hasAttribute("sveltekit:noscroll");history.pushState({},"",o.href),this._navigate(n,r?ot():null,[],o.hash),t.preventDefault()}})),addEventListener("popstate",(t=>{if(t.state&&this.enabled){const e=new URL(location.href),r=this.parse(e);r?this._navigate(r,t.state["sveltekit:scroll"],[]):location.href=location.href}})),document.body.setAttribute("tabindex","-1"),history.replaceState(history.state||{},"",location.href)}parse(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(this.base))return null;const e=t.pathname.slice(this.base.length)||"/",r=this.routes.filter((([t])=>t.test(e)));if(r.length>0){const s=new URLSearchParams(t.search);return{id:`${e}?${s}`,routes:r,path:e,query:s}}}async goto(t,{noscroll:e=!1,replaceState:r=!1}={},s){if(this.enabled){const o=new URL(t,function(t){let e=t.baseURI;if(!e){const r=t.getElementsByTagName("base");e=r.length?r[0].href:t.URL}return e}(document)),n=this.parse(o);if(n)return history[r?"replaceState":"pushState"]({},"",t),this._navigate(n,e?ot():null,s,o.hash)}return location.href=t,new Promise((()=>{}))}enable(){this.enabled=!0}disable(){this.enabled=!1}async prefetch(t){const e=this.parse(t);if(e)return this.renderer.load(e);throw new Error(`Could not prefetch ${t.href}`)}async _navigate(t,e,r,s){this.renderer.notify({path:t.path,query:t.query}),location.pathname.endsWith("/")&&"/"!==location.pathname&&history.replaceState({},"",`${location.pathname.slice(0,-1)}${location.search}`),await this.renderer.update(t,r),document.body.focus();const o=s&&document.getElementById(s.slice(1));e?scrollTo(e.x,e.y):o?scrollTo(0,o.getBoundingClientRect().top+scrollY):scrollTo(0,0)}}function it(t){if(t.error){const e="string"==typeof t.error?new Error(t.error):t.error,r=t.status;return e instanceof Error?!r||r<400||r>599?(console.warn('"error" returned from load() without a valid status code — defaulting to 500'),{status:500,error:e}):{status:r,error:e}:{status:500,error:new Error(`"error" property returned from load() must be a string or instance of Error, received type "${typeof e}"`)}}if(t.redirect){if(!t.status||3!==Math.floor(t.status/100))return{status:500,error:new Error('"redirect" property returned from load() must be accompanied by a 3xx status code')};if("string"!=typeof t.redirect)return{status:500,error:new Error('"redirect" property returned from load() must be a string')}}return t}function lt(t){const e=D(t);let r=!0;return{notify:function(){r=!0,e.update((t=>t))},set:function(t){r=!1,e.set(t)},subscribe:function(t){let s;return e.subscribe((e=>{(void 0===s||r&&e!==s)&&t(s=e)}))}}}function ct(t,o){const n="string"==typeof t?t:t.url,a=document.querySelector(`script[type="svelte-data"][url="${n}"]`);if(a){const t=JSON.parse(a.textContent),{body:o}=t,n=((t,o)=>{var n={};for(var a in t)e.call(t,a)&&o.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&r)for(var a of r(t))o.indexOf(a)<0&&s.call(t,a)&&(n[a]=t[a]);return n})(t,["body"]);return Promise.resolve(new Response(o,n))}return fetch(t,o)}class ut{constructor({Root:t,layout:e,target:r,session:s,host:o}){this.Root=t,this.layout=e,this.host=o,this.router=null,this.target=r,this.started=!1,this.current={page:null,query:null,session_changed:!1,nodes:[],contexts:[]},this.caches=new Map,this.loading={id:null,promise:null},this.stores={page:lt({}),navigating:D(null),session:D(s)},this.$session=null,this.root=null;let n=!1;this.stores.session.subscribe((async t=>{if(this.$session=t,!n)return;this.current.session_changed=!0;const e=this.router.parse(new URL(location.href));this.update(e,[])})),n=!0}async start(t){const e=await this._load(t);e.redirect?location.href=new URL(e.redirect,location.href).href:this._init(e)}notify({path:t,query:e}){dispatchEvent(new CustomEvent("sveltekit:navigation-start")),this.started&&this.stores.navigating.set({from:{path:this.current.page.path,query:this.current.page.query},to:{path:t,query:e}})}async update(t,e){const r=this.token={},s=await this._get_navigation_result(t);if(r!==this.token)return;if(s.reload)location.reload();else if(s.redirect){if(!(e.length>10||e.includes(t.path)))return void(this.router?this.router.goto(s.redirect,{replaceState:!0},[...e,t.path]):location.href=new URL(s.redirect,location.href).href);this.root.$set({status:500,error:new Error("Redirect loop")})}else this.started?(this.current=s.state,this.root.$set(s.props),this.stores.navigating.set(null),await 0):this._init(s);dispatchEvent(new CustomEvent("sveltekit:navigation-end")),this.loading.promise=null,this.loading.id=null;!1===s.state.nodes[s.state.nodes.length-1].module.router?this.router.disable():this.router.enable()}load(t){return this.loading.promise=this._get_navigation_result(t),this.loading.id=t.id,this.loading.promise}async _get_navigation_result(t){if(this.loading.id===t.id)return this.loading.promise;for(let e=0;e<t.routes.length;e+=1){const r=t.routes[e],[s,o,n]=r;if(1===r.length)return{reload:!0};let a=e+1;for(;a<t.routes.length;){const e=t.routes[a];if(e[0].toString()!==s.toString())break;1!==e.length&&e[1].forEach((t=>t())),a+=1}const i=o.map((t=>t())),l={host:this.host,path:t.path,params:n?n(r[0].exec(t.path)):{},query:t.query},c=await this._load({status:200,error:null,nodes:i,page:l});if(c)return c}return await this._load({status:404,error:new Error(`Not found: ${t.path}`),nodes:[],page:{host:this.host,path:t.path,query:t.query,params:{}}})}_init(t){this.current=t.state;const e=document.querySelector("style[data-svelte]");e&&e.remove(),this.root=new this.Root({target:this.target,props:n({stores:this.stores},t.props),hydrate:!0}),this.started=!0}async _load({status:t,error:e,nodes:r,page:s}){const o=s.query.toString(),a={state:{page:s,query:o,session_changed:!1,nodes:[],contexts:[]},props:{status:t,error:e,components:[]}},i={path:!this.current.page||s.path!==this.current.page.path,params:Object.keys(s.params).filter((t=>!this.current.page||this.current.page.params[t]!==s.params[t])),query:o!==this.current.query,session:this.current.session_changed,context:!1};try{const t=[this.layout,...r],l=[];let c;for(let r=0;r<t.length;r+=1){const u=this.current.nodes[r],h=this.current.contexts[r],p=await t[r];if(a.props.components[r]=p.default,p.preload)throw new Error("preload has been deprecated in favour of load. Please consult the documentation: https://kit.svelte.dev/docs#loading");if(!u||p!==u.module||i.path&&u.uses.path||i.params.some((t=>u.uses.params.has(t)))||i.query&&u.uses.query||i.session&&u.uses.session||i.context&&u.uses.context){const u=s.path+o,h=this.caches.get(p),d=h&&h.get(u);let f,m;if(!d||i.context&&d.node.uses.context){f={module:p,uses:{params:new Set,path:!1,query:!1,session:!1,context:!1}};const o={};for(const t in s.params)Object.defineProperty(o,t,{get:()=>(f.uses.params.add(t),s.params[t]),enumerable:!0});const a=this.$session;if(p.load){m=await p.load.call(null,{page:{host:s.host,params:o,get path(){return f.uses.path=!0,s.path},get query(){return f.uses.query=!0,s.query}},get session(){return f.uses.session=!0,a},get context(){return f.uses.context=!0,n({},c)},fetch:this.started?fetch:ct});const i=r===t.length-1&&!e;if(!m&&i)return}}else({node:f,loaded:m}=d);if(m){if(m=it(m),m.error){if(e)throw e;return await this._load({status:m.status||500,error:m.error,nodes:[],page:{host:s.host,path:s.path,query:s.query,params:{}}})}if(m.redirect)return{redirect:m.redirect};if(m.context&&(i.context=!0,c=n(n({},c),m.context)),m.maxage){this.caches.has(p)||this.caches.set(p,new Map);const t=this.caches.get(p),e={node:f,loaded:m};t.set(u,e);let r=!1;const s=setTimeout((()=>{o()}),1e3*m.maxage),o=()=>{t.get(u)===e&&t.delete(u),n(),clearTimeout(s)},n=this.stores.session.subscribe((()=>{r&&o()}));r=!0}l[r]=m.props}a.state.nodes[r]=f,a.state.contexts[r]=c}else a.state.nodes[r]=u,a.state.contexts[r]=c=h}return(await Promise.all(l)).forEach(((t,e)=>{t&&(a.props[`props_${e}`]=t)})),this.current.page&&s.path===this.current.page.path&&!i.query||(a.props.page=s),a}catch(l){if(e)throw e;return await this._load({status:500,error:l,nodes:[],page:{host:s.host,path:s.path,query:s.query,params:{}}})}}}async function ht({paths:t,target:e,session:r,host:s,route:o,hydrate:n}){const a=o&&new at({base:t.base,routes:st}),i=new ut({Root:X,layout:rt,target:e,session:r,host:s});n&&await i.start(n),o&&a.init(i),dispatchEvent(new CustomEvent("sveltekit:start"))}export{ht as start};
