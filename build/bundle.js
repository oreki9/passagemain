var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function o(){return Object.create(null)}function i(t){t.forEach(n)}function s(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let r;function c(t,e,n,o){return t[1]&&o?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](o(e))):n.ctx}function a(t){return null==t?"":t}const u="undefined"!=typeof window;let d=u?()=>window.performance.now():()=>Date.now(),p=u?t=>requestAnimationFrame(t):t;const f=new Set;function g(t){f.forEach((e=>{e.c(t)||(f.delete(e),e.f())})),0!==f.size&&p(g)}const h="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function m(t,e){t.appendChild(e)}function v(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function y(t){const e=x("style");return function(t,e){m(t.head||t,e),e.sheet}(v(t),e),e.sheet}function w(t,e,n){t.insertBefore(e,n||null)}function b(t){t.parentNode&&t.parentNode.removeChild(t)}function $(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function x(t){return document.createElement(t)}function k(t){return document.createTextNode(t)}function C(){return k(" ")}function B(){return k("")}function W(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function O(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function E(t,e){e=""+e,t.data!==e&&(t.data=e)}function _(t,e,n,o){null==n?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}function F(t,e,n){t.classList[n?"add":"remove"](e)}function L(t,e,{bubbles:n=!1,cancelable:o=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,o,e),i}function P(t,e){return new t(e)}const T=new Map;let D,S=0;function j(t,e,n,o,i,s,l,r=0){const c=16.666/o;let a="{\n";for(let t=0;t<=1;t+=c){const o=e+(n-e)*s(t);a+=100*t+`%{${l(o,1-o)}}\n`}const u=a+`100% {${l(n,1-n)}}\n}`,d=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${r}`,p=v(t),{stylesheet:f,rules:g}=T.get(p)||function(t,e){const n={stylesheet:y(e),rules:{}};return T.set(t,n),n}(p,t);g[d]||(g[d]=!0,f.insertRule(`@keyframes ${d} ${u}`,f.cssRules.length));const h=t.style.animation||"";return t.style.animation=`${h?`${h}, `:""}${d} ${o}ms linear ${i}ms 1 both`,S+=1,d}function z(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),i=n.length-o.length;i&&(t.style.animation=o.join(", "),S-=i,S||p((()=>{S||(T.forEach((t=>{const{ownerNode:e}=t.stylesheet;e&&b(e)})),T.clear())})))}function N(t){D=t}function A(){if(!D)throw new Error("Function called outside component initialization");return D}function R(){const t=A();return(e,n,{cancelable:o=!1}={})=>{const i=t.$$.callbacks[e];if(i){const s=L(e,n,{cancelable:o});return i.slice().forEach((e=>{e.call(t,s)})),!s.defaultPrevented}return!0}}function H(t,e){return A().$$.context.set(t,e),e}function I(t){return A().$$.context.get(t)}const M=[],U=[];let G=[];const q=[],K=Promise.resolve();let V=!1;function X(t){G.push(t)}const Y=new Set;let Z,J=0;function Q(){if(0!==J)return;const t=D;do{try{for(;J<M.length;){const t=M[J];J++,N(t),tt(t.$$)}}catch(t){throw M.length=0,J=0,t}for(N(null),M.length=0,J=0;U.length;)U.pop()();for(let t=0;t<G.length;t+=1){const e=G[t];Y.has(e)||(Y.add(e),e())}G.length=0}while(M.length);for(;q.length;)q.pop()();V=!1,Y.clear(),N(t)}function tt(t){if(null!==t.fragment){t.update(),i(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(X)}}function et(t,e,n){t.dispatchEvent(L(`${e?"intro":"outro"}${n}`))}const nt=new Set;let ot;function it(){ot={r:0,c:[],p:ot}}function st(){ot.r||i(ot.c),ot=ot.p}function lt(t,e){t&&t.i&&(nt.delete(t),t.i(e))}function rt(t,e,n,o){if(t&&t.o){if(nt.has(t))return;nt.add(t),ot.c.push((()=>{nt.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}else o&&o()}const ct={duration:0};function at(n,o,l,r){const c={direction:"both"};let a=o(n,l,c),u=r?0:1,h=null,m=null,v=null;function y(){v&&z(n,v)}function w(t,e){const n=t.b-u;return e*=Math.abs(n),{a:u,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function b(o){const{delay:s=0,duration:l=300,easing:r=e,tick:c=t,css:b}=a||ct,$={start:d()+s,b:o};o||($.group=ot,ot.r+=1),h||m?m=$:(b&&(y(),v=j(n,u,o,l,s,r,b)),o&&c(0,1),h=w($,l),X((()=>et(n,o,"start"))),function(t){let e;0===f.size&&p(g),new Promise((n=>{f.add(e={c:t,f:n})}))}((t=>{if(m&&t>m.start&&(h=w(m,l),m=null,et(n,h.b,"start"),b&&(y(),v=j(n,u,h.b,h.duration,0,r,a.css))),h)if(t>=h.end)c(u=h.b,1-u),et(n,h.b,"end"),m||(h.b?y():--h.group.r||i(h.group.c)),h=null;else if(t>=h.start){const e=t-h.start;u=h.a+h.d*r(e/h.duration),c(u,1-u)}return!(!h&&!m)})))}return{run(t){s(a)?(Z||(Z=Promise.resolve(),Z.then((()=>{Z=null}))),Z).then((()=>{a=a(c),b(t)})):b(t)},end(){y(),h=m=null}}}function ut(t){t&&t.c()}function dt(t,e,o,l){const{fragment:r,after_update:c}=t.$$;r&&r.m(e,o),l||X((()=>{const e=t.$$.on_mount.map(n).filter(s);t.$$.on_destroy?t.$$.on_destroy.push(...e):i(e),t.$$.on_mount=[]})),c.forEach(X)}function pt(t,e){const n=t.$$;null!==n.fragment&&(!function(t){const e=[],n=[];G.forEach((o=>-1===t.indexOf(o)?e.push(o):n.push(o))),n.forEach((t=>t())),G=e}(n.after_update),i(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ft(t,e){-1===t.$$.dirty[0]&&(M.push(t),V||(V=!0,K.then(Q)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function gt(e,n,s,l,r,c,a,u=[-1]){const d=D;N(e);const p=e.$$={fragment:null,ctx:[],props:c,update:t,not_equal:r,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:o(),dirty:u,skip_bound:!1,root:n.target||d.$$.root};a&&a(p.root);let f=!1;if(p.ctx=s?s(e,n.props||{},((t,n,...o)=>{const i=o.length?o[0]:n;return p.ctx&&r(p.ctx[t],p.ctx[t]=i)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](i),f&&ft(e,t)),n})):[],p.update(),f=!0,i(p.before_update),p.fragment=!!l&&l(p.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);p.fragment&&p.fragment.l(t),t.forEach(b)}else p.fragment&&p.fragment.c();n.intro&&lt(e.$$.fragment),dt(e,n.target,n.anchor,n.customElement),Q()}N(d)}class ht{$destroy(){pt(this,1),this.$destroy=t}$on(e,n){if(!s(n))return t;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const t=o.indexOf(n);-1!==t&&o.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}let mt="https://passagenews.000webhostapp.com/";class vt{async fetchListNews(t,e,n){const o={method:"GET",headers:new Headers};let i=(()=>{let o=mt+"passagenews.php?page="+t+"&session="+(n??"");var i="";switch(e){case"readed":i="&mode=readed";break;case"unreaded":i="&mode=unreaded";break;case"favorite":i="&mode=favorite";break;default:i=""}return o+i})();return console.log(i),fetch(i,o).then((t=>t.json())).then((t=>(console.log(t),t.list.map((t=>new yt(t.id,t.link,t.category,t.source,t.title,t.content,t.content_size_x,t.content_size_y,t.body)))))).catch((t=>{console.error(t)}))}async getPrefUser(t){const e=new Headers;return fetch(mt+"passagenews.php?getfav=trues&session="+t,{method:"GET",headers:e}).then((t=>t.json())).then((t=>t)).catch((t=>{console.error(t)}))}async savePrefUser(t,e){const n=new Headers;return fetch(mt+"passagenews.php?savefav="+t+"&session="+e,{method:"GET",headers:n}).then((t=>t)).catch((t=>{console.error(t)}))}async getFileFormatFromURL(t){if(""==t||null==t||null==t)return null;try{const e=await fetch(t);if(e.ok){const t=e.headers.get("Content-Type");if(t)return t}}catch(t){console.error("Error fetching URL:",t)}return null}async saveLinkData(t,e){let n=t.id;const o={method:"GET",headers:new Headers};return console.log(mt+"passagenews.php?savepage="+n+"&userid="+e),fetch(mt+"passagenews.php?savepage="+n+"&userid="+e,o).then((t=>t)).catch((t=>{console.error(t)}))}}class yt{init(){id=0,link="",category="",source="",title="",content="",detail="",size={height:0,width:0},isActive=!1,isOption=!1}constructor(t,e,n,o,i,s,l,r,c){this.id=t,this.link=e,this.category=n,this.source=o,this.title=i,this.content=s,this.size={height:r,width:l},this.detail=c,this.isOption=!1}}function wt(t,{delay:n=0,duration:o=400,easing:i=e}={}){const s=+getComputedStyle(t).opacity;return{delay:n,duration:o,easing:i,css:t=>"opacity: "+t*s}}const{window:bt}=h;function $t(t){let e,n,o,l,r,c,u,d,p,f,g,h,v,y,$,k,B,E,_=t[1].closeButton&&xt(t);var L=t[2];return L&&(c=P(L,{})),{c(){e=x("div"),n=x("div"),o=x("div"),_&&_.c(),l=C(),r=x("div"),c&&ut(c.$$.fragment),O(r,"class",u=a(t[1].classContent)+" svelte-n7cvum"),O(r,"style",t[9]),F(r,"content",!t[0]),O(o,"class",d=a(t[1].classWindow)+" svelte-n7cvum"),O(o,"role","dialog"),O(o,"aria-modal","true"),O(o,"aria-label",p=t[1].ariaLabelledBy?null:t[1].ariaLabel||null),O(o,"aria-labelledby",f=t[1].ariaLabelledBy||null),O(o,"style",t[8]),F(o,"window",!t[0]),O(n,"class",h=a(t[1].classWindowWrap)+" svelte-n7cvum"),O(n,"style",t[7]),F(n,"wrap",!t[0]),O(e,"aria-hidden","true"),O(e,"id",v=t[1].id),O(e,"class",y=a(t[1].classBg)+" svelte-n7cvum"),O(e,"style",t[6]),F(e,"bg",!t[0])},m(i,a){w(i,e,a),m(e,n),m(n,o),_&&_.m(o,null),m(o,l),m(o,r),c&&dt(c,r,null),t[50](o),t[51](n),t[52](e),k=!0,B||(E=[W(o,"introstart",(function(){s(t[13])&&t[13].apply(this,arguments)})),W(o,"outrostart",(function(){s(t[14])&&t[14].apply(this,arguments)})),W(o,"introend",(function(){s(t[15])&&t[15].apply(this,arguments)})),W(o,"outroend",(function(){s(t[16])&&t[16].apply(this,arguments)})),W(e,"mousedown",t[20]),W(e,"mouseup",t[21])],B=!0)},p(i,s){if((t=i)[1].closeButton?_?(_.p(t,s),2&s[0]&&lt(_,1)):(_=xt(t),_.c(),lt(_,1),_.m(o,l)):_&&(it(),rt(_,1,1,(()=>{_=null})),st()),4&s[0]&&L!==(L=t[2])){if(c){it();const t=c;rt(t.$$.fragment,1,0,(()=>{pt(t,1)})),st()}L?(c=P(L,{}),ut(c.$$.fragment),lt(c.$$.fragment,1),dt(c,r,null)):c=null}(!k||2&s[0]&&u!==(u=a(t[1].classContent)+" svelte-n7cvum"))&&O(r,"class",u),(!k||512&s[0])&&O(r,"style",t[9]),(!k||3&s[0])&&F(r,"content",!t[0]),(!k||2&s[0]&&d!==(d=a(t[1].classWindow)+" svelte-n7cvum"))&&O(o,"class",d),(!k||2&s[0]&&p!==(p=t[1].ariaLabelledBy?null:t[1].ariaLabel||null))&&O(o,"aria-label",p),(!k||2&s[0]&&f!==(f=t[1].ariaLabelledBy||null))&&O(o,"aria-labelledby",f),(!k||256&s[0])&&O(o,"style",t[8]),(!k||3&s[0])&&F(o,"window",!t[0]),(!k||2&s[0]&&h!==(h=a(t[1].classWindowWrap)+" svelte-n7cvum"))&&O(n,"class",h),(!k||128&s[0])&&O(n,"style",t[7]),(!k||3&s[0])&&F(n,"wrap",!t[0]),(!k||2&s[0]&&v!==(v=t[1].id))&&O(e,"id",v),(!k||2&s[0]&&y!==(y=a(t[1].classBg)+" svelte-n7cvum"))&&O(e,"class",y),(!k||64&s[0])&&O(e,"style",t[6]),(!k||3&s[0])&&F(e,"bg",!t[0])},i(n){k||(lt(_),c&&lt(c.$$.fragment,n),X((()=>{k&&(g||(g=at(o,t[12],t[1].transitionWindowProps,!0)),g.run(1))})),X((()=>{k&&($||($=at(e,t[11],t[1].transitionBgProps,!0)),$.run(1))})),k=!0)},o(n){rt(_),c&&rt(c.$$.fragment,n),g||(g=at(o,t[12],t[1].transitionWindowProps,!1)),g.run(0),$||($=at(e,t[11],t[1].transitionBgProps,!1)),$.run(0),k=!1},d(n){n&&b(e),_&&_.d(),c&&pt(c),t[50](null),n&&g&&g.end(),t[51](null),t[52](null),n&&$&&$.end(),B=!1,i(E)}}}function xt(t){let e,n,o,i,s;const l=[Ct,kt],r=[];function c(t,n){return 2&n[0]&&(e=null),null==e&&(e=!!t[17](t[1].closeButton)),e?0:1}return n=c(t,[-1,-1,-1]),o=r[n]=l[n](t),{c(){o.c(),i=B()},m(t,e){r[n].m(t,e),w(t,i,e),s=!0},p(t,e){let s=n;n=c(t,e),n===s?r[n].p(t,e):(it(),rt(r[s],1,1,(()=>{r[s]=null})),st(),o=r[n],o?o.p(t,e):(o=r[n]=l[n](t),o.c()),lt(o,1),o.m(i.parentNode,i))},i(t){s||(lt(o),s=!0)},o(t){rt(o),s=!1},d(t){r[n].d(t),t&&b(i)}}}function kt(e){let n,o,i,s;return{c(){n=x("button"),O(n,"class",o=a(e[1].classCloseButton)+" svelte-n7cvum"),O(n,"aria-label","Close modal"),O(n,"style",e[10]),O(n,"type","button"),F(n,"close",!e[0])},m(t,o){w(t,n,o),i||(s=W(n,"click",e[18]),i=!0)},p(t,e){2&e[0]&&o!==(o=a(t[1].classCloseButton)+" svelte-n7cvum")&&O(n,"class",o),1024&e[0]&&O(n,"style",t[10]),3&e[0]&&F(n,"close",!t[0])},i:t,o:t,d(t){t&&b(n),i=!1,s()}}}function Ct(t){let e,n,o;var i=t[1].closeButton;function s(t){return{props:{onClose:t[18]}}}return i&&(e=P(i,s(t))),{c(){e&&ut(e.$$.fragment),n=B()},m(t,i){e&&dt(e,t,i),w(t,n,i),o=!0},p(t,o){if(2&o[0]&&i!==(i=t[1].closeButton)){if(e){it();const t=e;rt(t.$$.fragment,1,0,(()=>{pt(t,1)})),st()}i?(e=P(i,s(t)),ut(e.$$.fragment),lt(e.$$.fragment,1),dt(e,n.parentNode,n)):e=null}},i(t){o||(e&&lt(e.$$.fragment,t),o=!0)},o(t){e&&rt(e.$$.fragment,t),o=!1},d(t){t&&b(n),e&&pt(e,t)}}}function Bt(t){let e,n,o,i,s=t[2]&&$t(t);const l=t[49].default,r=function(t,e,n,o){if(t){const i=c(t,e,n,o);return t[0](i)}}(l,t,t[48],null);return{c(){s&&s.c(),e=C(),r&&r.c()},m(l,c){s&&s.m(l,c),w(l,e,c),r&&r.m(l,c),n=!0,o||(i=W(bt,"keydown",t[19]),o=!0)},p(t,o){t[2]?s?(s.p(t,o),4&o[0]&&lt(s,1)):(s=$t(t),s.c(),lt(s,1),s.m(e.parentNode,e)):s&&(it(),rt(s,1,1,(()=>{s=null})),st()),r&&r.p&&(!n||131072&o[1])&&function(t,e,n,o,i,s){if(i){const l=c(e,n,o,s);t.p(l,i)}}(r,l,t,t[48],n?function(t,e,n,o){if(t[2]&&o){const i=t[2](o(n));if(void 0===e.dirty)return i;if("object"==typeof i){const t=[],n=Math.max(e.dirty.length,i.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|i[o];return t}return e.dirty|i}return e.dirty}(l,t[48],o,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[48]),null)},i(t){n||(lt(s),lt(r,t),n=!0)},o(t){rt(s),rt(r,t),n=!1},d(t){s&&s.d(t),t&&b(e),r&&r.d(t),o=!1,i()}}}function Wt(t,e,n){let{$$slots:o={},$$scope:i}=e;const s=R(),l=H,r=t=>t.tabIndex>=0&&!t.hidden&&!t.disabled&&"none"!==t.style.display&&"hidden"!==t.type&&Boolean(t.offsetWidth||t.offsetHeight||t.getClientRects().length);let{isTabbable:c=r}=e,{show:a=null}=e,{id:u=null}=e,{key:d="simple-modal"}=e,{ariaLabel:p=null}=e,{ariaLabelledBy:f=null}=e,{closeButton:g=!0}=e,{closeOnEsc:h=!0}=e,{closeOnOuterClick:m=!0}=e,{styleBg:v={}}=e,{styleWindowWrap:y={}}=e,{styleWindow:w={}}=e,{styleContent:b={}}=e,{styleCloseButton:$={}}=e,{classBg:x=null}=e,{classWindowWrap:k=null}=e,{classWindow:C=null}=e,{classContent:B=null}=e,{classCloseButton:W=null}=e,{unstyled:O=!1}=e,{setContext:E=l}=e,{transitionBg:_=wt}=e,{transitionBgProps:F={duration:250}}=e,{transitionWindow:L=_}=e,{transitionWindowProps:P=F}=e,{disableFocusTrap:T=!1}=e;const D={id:u,ariaLabel:p,ariaLabelledBy:f,closeButton:g,closeOnEsc:h,closeOnOuterClick:m,styleBg:v,styleWindowWrap:y,styleWindow:w,styleContent:b,styleCloseButton:$,classBg:x,classWindowWrap:k,classWindow:C,classContent:B,classCloseButton:W,transitionBg:_,transitionBgProps:F,transitionWindow:L,transitionWindowProps:P,disableFocusTrap:T,isTabbable:c,unstyled:O};let S,j,z,N,I,M,G,q,K,V,X,Y,Z,J,Q,tt={...D},et=null;const nt=t=>t?Object.keys(t).reduce(((e,n)=>`${e}; ${(t=>t.replace(/([a-zA-Z])(?=[A-Z])/g,"$1-").toLowerCase())(n)}: ${t[n]}`),""):"",ot=t=>!!(t&&t.constructor&&t.call&&t.apply),it=()=>{};let st=it,lt=it,rt=it,ct=it;const at=(t,e={},o={},i={})=>{n(2,et=function(t,e={}){return function(n){return new t({...n,props:{...e,...n.props}})}}(t,e)),n(1,tt={...D,...o}),n(6,I=nt(Object.assign({},{width:window.innerWidth,height:window.innerHeight},tt.styleBg))),n(7,M=nt(tt.styleWindowWrap)),n(8,G=nt(tt.styleWindow)),n(9,q=nt(tt.styleContent)),n(10,K=nt(tt.styleCloseButton)),n(11,V=tt.transitionBg),n(12,X=tt.transitionWindow),dt(),n(13,st=t=>{i.onOpen&&i.onOpen(t),s("open"),s("opening")}),n(14,lt=t=>{i.onClose&&i.onClose(t),s("close"),s("closing")}),n(15,rt=t=>{i.onOpened&&i.onOpened(t),s("opened")}),n(16,ct=t=>{i.onClosed&&i.onClosed(t),s("closed")})},ut=(t={})=>{et&&(n(14,lt=t.onClose||lt),n(16,ct=t.onClosed||ct),n(2,et=null),pt())},dt=()=>{N=window.scrollY,Y=document.body.style.position,Z=document.body.style.overflow,J=document.body.style.width,document.body.style.position="fixed",document.body.style.top=`-${N}px`,document.body.style.overflow="hidden",document.body.style.width="100%"},pt=()=>{document.body.style.position=Y||"",document.body.style.top="",document.body.style.overflow=Z||"",document.body.style.width=J||"",window.scrollTo({top:N,left:0,behavior:"instant"})};E(d,{open:at,close:ut});let ft=!1;var gt;return gt=()=>{ft&&ut()},A().$$.on_destroy.push(gt),function(t){A().$$.on_mount.push(t)}((()=>{n(47,ft=!0)})),t.$$set=t=>{"isTabbable"in t&&n(22,c=t.isTabbable),"show"in t&&n(23,a=t.show),"id"in t&&n(24,u=t.id),"key"in t&&n(25,d=t.key),"ariaLabel"in t&&n(26,p=t.ariaLabel),"ariaLabelledBy"in t&&n(27,f=t.ariaLabelledBy),"closeButton"in t&&n(28,g=t.closeButton),"closeOnEsc"in t&&n(29,h=t.closeOnEsc),"closeOnOuterClick"in t&&n(30,m=t.closeOnOuterClick),"styleBg"in t&&n(31,v=t.styleBg),"styleWindowWrap"in t&&n(32,y=t.styleWindowWrap),"styleWindow"in t&&n(33,w=t.styleWindow),"styleContent"in t&&n(34,b=t.styleContent),"styleCloseButton"in t&&n(35,$=t.styleCloseButton),"classBg"in t&&n(36,x=t.classBg),"classWindowWrap"in t&&n(37,k=t.classWindowWrap),"classWindow"in t&&n(38,C=t.classWindow),"classContent"in t&&n(39,B=t.classContent),"classCloseButton"in t&&n(40,W=t.classCloseButton),"unstyled"in t&&n(0,O=t.unstyled),"setContext"in t&&n(41,E=t.setContext),"transitionBg"in t&&n(42,_=t.transitionBg),"transitionBgProps"in t&&n(43,F=t.transitionBgProps),"transitionWindow"in t&&n(44,L=t.transitionWindow),"transitionWindowProps"in t&&n(45,P=t.transitionWindowProps),"disableFocusTrap"in t&&n(46,T=t.disableFocusTrap),"$$scope"in t&&n(48,i=t.$$scope)},t.$$.update=()=>{8388608&t.$$.dirty[0]|65536&t.$$.dirty[1]&&ft&&(ot(a)?at(a):ut())},[O,tt,et,S,j,z,I,M,G,q,K,V,X,st,lt,rt,ct,ot,ut,t=>{if(tt.closeOnEsc&&et&&"Escape"===t.key&&(t.preventDefault(),ut()),et&&"Tab"===t.key&&!tt.disableFocusTrap){const e=z.querySelectorAll("*"),n=Array.from(e).filter(tt.isTabbable).sort(((t,e)=>t.tabIndex-e.tabIndex));let o=n.indexOf(document.activeElement);-1===o&&t.shiftKey&&(o=0),o+=n.length+(t.shiftKey?-1:1),o%=n.length,n[o].focus(),t.preventDefault()}},t=>{!tt.closeOnOuterClick||t.target!==S&&t.target!==j||(Q=t.target)},t=>{tt.closeOnOuterClick&&t.target===Q&&(t.preventDefault(),ut())},c,a,u,d,p,f,g,h,m,v,y,w,b,$,x,k,C,B,W,E,_,F,L,P,T,ft,i,o,function(t){U[t?"unshift":"push"]((()=>{z=t,n(5,z)}))},function(t){U[t?"unshift":"push"]((()=>{j=t,n(4,j)}))},function(t){U[t?"unshift":"push"]((()=>{S=t,n(3,S)}))}]}class Ot extends ht{constructor(t){super(),gt(this,t,Wt,Bt,l,{isTabbable:22,show:23,id:24,key:25,ariaLabel:26,ariaLabelledBy:27,closeButton:28,closeOnEsc:29,closeOnOuterClick:30,styleBg:31,styleWindowWrap:32,styleWindow:33,styleContent:34,styleCloseButton:35,classBg:36,classWindowWrap:37,classWindow:38,classContent:39,classCloseButton:40,unstyled:0,setContext:41,transitionBg:42,transitionBgProps:43,transitionWindow:44,transitionWindowProps:45,disableFocusTrap:46},null,[-1,-1,-1])}}const Et=[];const _t=function(e,n=t){let o;const i=new Set;function s(t){if(l(e,t)&&(e=t,o)){const t=!Et.length;for(const t of i)t[1](),Et.push(t,e);if(t){for(let t=0;t<Et.length;t+=2)Et[t][0](Et[t+1]);Et.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(l,r=t){const c=[l,r];return i.add(c),1===i.size&&(o=n(s)||t),l(e),()=>{i.delete(c),0===i.size&&o&&(o(),o=null)}}}}({fav:[],dislikes:[],tagfav:[]},(()=>(console.log("got a subscriber"),()=>console.log("no more subscribers"))));function Ft(t,e,n){const o=t.slice();return o[21]=e[n],o[22]=e,o[23]=n,o}function Lt(t,e,n){const o=t.slice();return o[21]=e[n],o[23]=n,o}function Pt(t,e,n){const o=t.slice();return o[21]=e[n],o[23]=n,o}function Tt(t){let e,n,o,s,l,r,c,a;return{c(){e=x("div"),n=x("input"),s=C(),l=x("div"),l.textContent="X",r=C(),O(n,"id","fav-"+t[23]),O(n,"type","text"),n.value=o=t[21],_(l,"padding","10px"),_(e,"display","grid"),_(e,"grid-template-columns","80% 20%")},m(o,i){w(o,e,i),m(e,n),m(e,s),m(e,l),m(e,r),c||(a=[W(n,"input",t[10]("fav",t[23])),W(n,"keydown",t[6]("fav",t[23])),W(l,"click",t[11]("fav",t[23]))],c=!0)},p(e,i){t=e,1&i&&o!==(o=t[21])&&n.value!==o&&(n.value=o)},d(t){t&&b(e),c=!1,i(a)}}}function Dt(t){let e,n=t[0],o=[];for(let e=0;e<n.length;e+=1)o[e]=Tt(Pt(t,n,e));return{c(){e=x("div");for(let t=0;t<o.length;t+=1)o[t].c();O(e,"style",t[5]())},m(t,n){w(t,e,n);for(let t=0;t<o.length;t+=1)o[t]&&o[t].m(e,null)},p(t,i){if(3137&i){let s;for(n=t[0],s=0;s<n.length;s+=1){const l=Pt(t,n,s);o[s]?o[s].p(l,i):(o[s]=Tt(l),o[s].c(),o[s].m(e,null))}for(;s<o.length;s+=1)o[s].d(1);o.length=n.length}},d(t){t&&b(e),$(o,t)}}}function St(t){let e,n,o,s,l,r,c,a;return{c(){e=x("div"),n=x("input"),s=C(),l=x("div"),l.textContent="X",r=C(),O(n,"id","dislike-"+t[23]),O(n,"type","text"),n.value=o=t[21],_(l,"padding","10px"),_(e,"display","grid"),_(e,"grid-template-columns","80% 20%")},m(o,i){w(o,e,i),m(e,n),m(e,s),m(e,l),m(e,r),c||(a=[W(n,"input",t[10]("dislike",t[23])),W(n,"keydown",t[6]("dislike",t[23])),W(l,"click",t[11]("dislike",t[23]))],c=!0)},p(e,i){t=e,2&i&&o!==(o=t[21])&&n.value!==o&&(n.value=o)},d(t){t&&b(e),c=!1,i(a)}}}function jt(t){let e,n,o,i=t[1],s=[];for(let e=0;e<i.length;e+=1)s[e]=St(Lt(t,i,e));return{c(){e=x("div"),e.textContent="List Dislikes",n=C(),o=x("div");for(let t=0;t<s.length;t+=1)s[t].c();O(o,"style",t[5]())},m(t,i){w(t,e,i),w(t,n,i),w(t,o,i);for(let t=0;t<s.length;t+=1)s[t]&&s[t].m(o,null)},p(t,e){if(3138&e){let n;for(i=t[1],n=0;n<i.length;n+=1){const l=Lt(t,i,n);s[n]?s[n].p(l,e):(s[n]=St(l),s[n].c(),s[n].m(o,null))}for(;n<s.length;n+=1)s[n].d(1);s.length=i.length}},d(t){t&&b(e),t&&b(n),t&&b(o),$(s,t)}}}function zt(t){let e,n,o;function s(){t[14].call(e,t[23])}return{c(){e=x("input"),O(e,"type","checkbox")},m(i,l){w(i,e,l),e.checked=t[4][t[23]+1],n||(o=[W(e,"change",s),W(e,"change",t[9](t[23]+1))],n=!0)},p(n,o){t=n,16&o&&(e.checked=t[4][t[23]+1])},d(t){t&&b(e),n=!1,i(o)}}}function Nt(t){let e,n,o,i,s,r=t[4],c=t[21]+"",a=zt(t);return{c(){e=x("div"),a.c(),n=C(),o=x("div"),i=k(c),s=C(),_(e,"display","grid"),_(e,"grid-template-columns","20% 80%")},m(t,l){w(t,e,l),a.m(e,null),m(e,n),m(e,o),m(o,i),m(e,s)},p(t,o){16&o&&l(r,r=t[4])?(a.d(1),a=zt(t),a.c(),a.m(e,n)):a.p(t,o)},d(t){t&&b(e),a.d(t)}}}function At(e){let n,o,i,s,r,c,a,u,d,p,f,g,h,v=e[2],y=e[3],k=Dt(e),B=jt(e),E=e[8],F=[];for(let t=0;t<E.length;t+=1)F[t]=Nt(Ft(e,E,t));return{c(){n=x("div"),o=x("div"),o.textContent="List Favorites",i=C(),k.c(),s=C(),B.c(),r=C(),c=x("div"),c.textContent="Tag Category",a=C(),u=x("div");for(let t=0;t<F.length;t+=1)F[t].c();d=C(),p=x("div"),f=x("div"),f.textContent="Submit",_(c,"padding-top","20px"),O(u,"style",e[5]()),_(p,"justify-content","center"),_(p,"display","flex")},m(t,l){w(t,n,l),m(n,o),m(n,i),k.m(n,null),m(n,s),B.m(n,null),m(n,r),m(n,c),m(n,a),m(n,u);for(let t=0;t<F.length;t+=1)F[t]&&F[t].m(u,null);m(n,d),m(n,p),m(p,f),g||(h=W(f,"click",e[12]),g=!0)},p(t,[e]){if(4&e&&l(v,v=t[2])?(k.d(1),k=Dt(t),k.c(),k.m(n,s)):k.p(t,e),8&e&&l(y,y=t[3])?(B.d(1),B=jt(t),B.c(),B.m(n,r)):B.p(t,e),784&e){let n;for(E=t[8],n=0;n<E.length;n+=1){const o=Ft(t,E,n);F[n]?F[n].p(o,e):(F[n]=Nt(o),F[n].c(),F[n].m(u,null))}for(;n<F.length;n+=1)F[n].d(1);F.length=E.length}},i:t,o:t,d(t){t&&b(n),k.d(t),B.d(t),$(F,t),g=!1,h()}}}function Rt(t,e,n){let{listFav:o}=e,{listDislike:i}=e,{tagfav:s}=e;const{close:l}=I("simple-modal");R();var r={},c={},a=["science","misc","humor","picture","computer","sport","social"],u={};return function(){for(var t=0;t<a.length;t++){let e=String(t+1),o=s.findIndex((t=>t==e))>=0;n(4,u[e]=o,u)}}(),t.$$set=t=>{"listFav"in t&&n(0,o=t.listFav),"listDislike"in t&&n(1,i=t.listDislike),"tagfav"in t&&n(13,s=t.tagfav)},[o,i,r,c,u,()=>"display: grid; grid-template-columns: 50% 50%;",function(t,e){return s=>{"Enter"===s.key&&("fav"==t?e==o.length-1&&(o.push(""),n(2,r={})):e==i.length-1&&(i.push(""),n(3,c={})))}},{},a,function(t){return()=>{console.log(u[t]),n(4,u[t]=!u[t],u)}},function(t,e){return s=>{"fav"==t?n(0,o[e]=s.target.value,o):n(1,i[e]=s.target.value,i)}},function(t,e){return()=>{"fav"==t?(o.splice(e,1),n(2,r={}),console.log(o)):(i.splice(e,1),n(3,c={}),console.log(i))}},function(){let t=o.filter((t=>""!=t)),e=i.filter((t=>""!=t)),n=[];for(var s=0;s<a.length;s++){let t=String(s+1);u[t]&&n.push(t)}console.log(n),l(Ht),_t.set({fav:t,dislikes:e,tagfav:n})},s,function(t){u[t+1]=this.checked,n(4,u)}]}class Ht extends ht{constructor(t){super(),gt(this,t,Rt,At,l,{listFav:0,listDislike:1,tagfav:13})}}function It(e){let n,o,s,l;return{c(){n=x("div"),o=k("Favorites"),_(n,"cursor",e[0]?"pointer":"auto")},m(t,i){w(t,n,i),m(n,o),s||(l=[W(n,"mouseover",e[2]),W(n,"mouseout",e[3]),W(n,"click",e[1])],s=!0)},p(t,[e]){1&e&&_(n,"cursor",t[0]?"pointer":"auto")},i:t,o:t,d(t){t&&b(n),s=!1,i(l)}}}function Mt(t,e,n){let{listFav:o}=e,{listDislike:i}=e,{isShowPopup:s}=e,{listTagFav:l}=e;const{open:r,close:c}=I("simple-modal");function a(){console.log("hey"),r(Ht,{tagfav:l,listFav:o,listDislike:i},{},{onClosed:()=>{}})}s&&a();let u=!1;return t.$$set=t=>{"listFav"in t&&n(4,o=t.listFav),"listDislike"in t&&n(5,i=t.listDislike),"isShowPopup"in t&&n(6,s=t.isShowPopup),"listTagFav"in t&&n(7,l=t.listTagFav)},[u,a,function(){n(0,u=!0)},function(){n(0,u=!1)},o,i,s,l]}class Ut extends ht{constructor(t){super(),gt(this,t,Mt,It,l,{listFav:4,listDislike:5,isShowPopup:6,listTagFav:7})}}function Gt(t){return t()}const qt=[],Kt=[],Vt=[],Xt=[],Yt=Promise.resolve();let Zt=!1;function Jt(){return Zt||(Zt=!0,Yt.then(ne)),Yt}function Qt(t){Vt.push(t)}const te=new Set;let ee=0;function ne(){do{for(;ee<qt.length;){const t=qt[ee];ee++,oe(t.$$)}for(qt.length=0,ee=0;Kt.length;)Kt.pop()();for(let t=0;t<Vt.length;t+=1){const e=Vt[t];te.has(e)||(te.add(e),e())}Vt.length=0}while(qt.length);for(;Xt.length;)Xt.pop()();Zt=!1,te.clear()}function oe(t){if(null!==t.fragment){t.update(),t.before_update.forEach(Gt);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Qt)}}const ie={root:null,rootMargin:"0px",threshold:0,unobserveOnEnter:!1},se=(t,e)=>new CustomEvent(t,{detail:e});function le(t,e={}){const{root:n,rootMargin:o,threshold:i,unobserveOnEnter:s}=Object.assign(Object.assign({},ie),e);let l={x:void 0,y:void 0},r={vertical:void 0,horizontal:void 0};if("undefined"!=typeof IntersectionObserver&&t){const e=new IntersectionObserver(((e,n)=>{e.forEach((e=>{l.y>e.boundingClientRect.y?r.vertical="up":r.vertical="down",l.x>e.boundingClientRect.x?r.horizontal="left":r.horizontal="right",l={y:e.boundingClientRect.y,x:e.boundingClientRect.x};const o={inView:e.isIntersecting,entry:e,scrollDirection:r,node:t,observer:n};t.dispatchEvent(se("inview_change",o)),t.dispatchEvent(se("change",o)),e.isIntersecting?(t.dispatchEvent(se("inview_enter",o)),t.dispatchEvent(se("enter",o)),s&&n.unobserve(t)):(t.dispatchEvent(se("inview_leave",o)),t.dispatchEvent(se("leave",o)))}))}),{root:n,rootMargin:o,threshold:i});return Jt().then((()=>{t.dispatchEvent(se("inview_init",{observer:e,node:t})),t.dispatchEvent(se("init",{observer:e,node:t}))})),e.observe(t),{destroy(){e.unobserve(t)}}}}const{window:re}=h;function ce(t,e,n){const o=t.slice();return o[37]=e[n],o}function ae(t){let e,n,o,s,l,r,c,a,u,d,p,f,g,h,v,y,$,B,E,F,L,P;return{c(){e=x("div"),n=x("div"),o=x("div"),s=k("Logo"),l=C(),r=x("div"),c=k("All"),u=C(),d=x("div"),p=k("favorite"),g=C(),h=x("div"),v=k("unclicked"),$=C(),B=x("div"),E=k("clicked"),_(o,"cursor",t[5]?"pointer":"auto"),_(o,"padding","5px"),O(r,"style",a=t[10]("")+";cursor: "+(t[5]?"pointer":"auto")+";padding: 5px"),O(d,"style",f=t[10]("favorite")+";cursor: "+(t[5]?"pointer":"auto")+";padding: 5px"),O(h,"style",y=t[10]("unreaded")+";cursor: "+(t[5]?"pointer":"auto")+";padding: 5px"),O(B,"style",F=t[10]("readed")+";cursor: "+(t[5]?"pointer":"auto")+";padding: 5px"),O(n,"style",t[16]()),O(e,"class","hovering-div svelte-1o8cnf1"),O(e,"style","background-color: #0dad77;padding-left: 10px;padding-right: 10px")},m(i,a){w(i,e,a),m(e,n),m(n,o),m(o,s),m(n,l),m(n,r),m(r,c),m(n,u),m(n,d),m(d,p),m(n,g),m(n,h),m(h,v),m(n,$),m(n,B),m(B,E),L||(P=[W(o,"mouseover",t[17]),W(o,"mouseout",t[18]),W(o,"click",t[12]("all")),W(r,"mouseover",t[17]),W(r,"mouseout",t[18]),W(r,"click",t[12]("all")),W(d,"mouseover",t[17]),W(d,"mouseout",t[18]),W(d,"click",t[12]("fav")),W(h,"mouseover",t[17]),W(h,"mouseout",t[18]),W(h,"click",t[12]("unreaded")),W(B,"mouseover",t[17]),W(B,"mouseout",t[18]),W(B,"click",t[12]("readed"))],L=!0)},p(t,e){32&e[0]&&_(o,"cursor",t[5]?"pointer":"auto"),32&e[0]&&a!==(a=t[10]("")+";cursor: "+(t[5]?"pointer":"auto")+";padding: 5px")&&O(r,"style",a),32&e[0]&&f!==(f=t[10]("favorite")+";cursor: "+(t[5]?"pointer":"auto")+";padding: 5px")&&O(d,"style",f),32&e[0]&&y!==(y=t[10]("unreaded")+";cursor: "+(t[5]?"pointer":"auto")+";padding: 5px")&&O(h,"style",y),32&e[0]&&F!==(F=t[10]("readed")+";cursor: "+(t[5]?"pointer":"auto")+";padding: 5px")&&O(B,"style",F)},d(t){t&&b(e),L=!1,i(P)}}}function ue(t){let e,n;return e=new Ut({props:{listTagFav:t[3].tagfav.concat(""),isShowPopup:t[4],listFav:t[3].fav.concat(""),listDislike:t[3].dislikes.concat("")}}),{c(){ut(e.$$.fragment)},m(t,o){dt(e,t,o),n=!0},p(t,n){const o={};8&n[0]&&(o.listTagFav=t[3].tagfav.concat("")),16&n[0]&&(o.isShowPopup=t[4]),8&n[0]&&(o.listFav=t[3].fav.concat("")),8&n[0]&&(o.listDislike=t[3].dislikes.concat("")),e.$set(o)},i(t){n||(lt(e.$$.fragment,t),n=!0)},o(t){rt(e.$$.fragment,t),n=!1},d(t){pt(e,t)}}}function de(e){let n,o,i=e[4],s=ue(e);return{c(){s.c(),n=B()},m(t,e){s.m(t,e),w(t,n,e),o=!0},p(e,o){16&o[0]&&l(i,i=e[4])?(it(),rt(s,1,1,t),st(),s=ue(e),s.c(),lt(s,1),s.m(n.parentNode,n)):s.p(e,o)},i(t){o||(lt(s),o=!0)},o(t){rt(s),o=!1},d(t){t&&b(n),s.d(t)}}}function pe(t){let e,n,o,l,r,c;return{c(){e=x("div"),n=x("div"),o=x("div"),l=x("div"),l.textContent="favorite",_(l,"paddingLeft","5px"),_(l,"height","25px"),_(o,"cursor",t[5]?"pointer":"auto"),_(n,"justify-content","flex-end"),_(n,"width","100%"),_(n,"margin-top","10px"),_(n,"margin-right","10px"),_(n,"background-color","#15e65a"),_(e,"position",t[37].isOption?"absolute":"none"),_(e,"z-index","1"),_(e,"right","0"),_(e,"width","300px"),_(e,"right","20px")},m(i,a){w(i,e,a),m(e,n),m(n,o),m(o,l),r||(c=[W(o,"mouseover",t[17]),W(o,"mouseout",t[18]),W(o,"click",(function(){s(t[8](t[37]))&&t[8](t[37]).apply(this,arguments)}))],r=!0)},p(n,i){t=n,32&i[0]&&_(o,"cursor",t[5]?"pointer":"auto"),1&i[0]&&_(e,"position",t[37].isOption?"absolute":"none")},d(t){t&&b(e),r=!1,i(c)}}}function fe(e){let n,o,l,c,a,u,d,p,f,g,h,v,y,$,B,F,L,P,T,D,S,j,z=(e[37].title??"")+"",N=(e[37].detail??"")+"",A=(e[37].source??"")+"",R=e[37].isOption&&pe(e);function H(...t){return e[19](e[37],...t)}return{c(){n=x("div"),R&&R.c(),o=C(),l=x("div"),c=x("a"),a=x("div"),u=k(z),p=C(),f=x("div"),f.textContent="::",g=C(),h=x("div"),v=x("img"),$=C(),B=x("div"),F=k(N),L=C(),P=x("div"),T=k(A),D=C(),_(a,"padding-top","10px"),_(c,"text-decoration","none"),O(c,"href",d=e[9](e[37].link)),_(f,"width","20px"),_(f,"height","20px"),_(f,"background-color","#0daddd"),_(f,"padding","10px"),_(f,"display","flex"),_(f,"justify-content","center"),_(f,"border-radius","10px"),_(l,"display","grid"),_(l,"grid-template-columns","97% 3%"),O(v,"style",""),function(t,e){return r||(r=document.createElement("a")),r.href=e,t===r.href}(v.src,y="loadingImage")||O(v,"src","loadingImage"),_(h,"padding-top","10px"),_(h,"justify-content","center"),_(h,"display","flex"),_(B,"padding-top","10px"),_(P,"padding-top","10px"),_(n,"background-color","#0dad77"),_(n,"margin","20px"),_(n,"padding","10px"),_(n,"border-radius","10px")},m(i,r){var d;w(i,n,r),R&&R.m(n,null),m(n,o),m(n,l),m(l,c),m(c,a),m(a,u),m(l,p),m(l,f),m(n,g),m(n,h),m(h,v),m(n,$),m(n,B),m(B,F),m(n,L),m(n,P),m(P,T),m(n,D),S||(j=[W(f,"click",(function(){s(e[7](e[37]))&&e[7](e[37]).apply(this,arguments)})),(d=le.call(null,v,e[6]),d&&s(d.destroy)?d.destroy:t),W(v,"inview_change",H),W(v,"error",ve)],S=!0)},p(t,i){(e=t)[37].isOption?R?R.p(e,i):(R=pe(e),R.c(),R.m(n,o)):R&&(R.d(1),R=null),1&i[0]&&z!==(z=(e[37].title??"")+"")&&E(u,z),1&i[0]&&d!==(d=e[9](e[37].link))&&O(c,"href",d),1&i[0]&&N!==(N=(e[37].detail??"")+"")&&E(F,N),1&i[0]&&A!==(A=(e[37].source??"")+"")&&E(T,A)},d(t){t&&b(n),R&&R.d(),S=!1,i(j)}}}function ge(t){let e,n=t[0],o=[];for(let e=0;e<n.length;e+=1)o[e]=fe(ce(t,n,e));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=B()},m(t,n){for(let e=0;e<o.length;e+=1)o[e]&&o[e].m(t,n);w(t,e,n)},p(t,i){if(394209&i[0]){let s;for(n=t[0],s=0;s<n.length;s+=1){const l=ce(t,n,s);o[s]?o[s].p(l,i):(o[s]=fe(l),o[s].c(),o[s].m(e.parentNode,e))}for(;s<o.length;s+=1)o[s].d(1);o.length=n.length}},d(t){$(o,t),t&&b(e)}}}function he(t){let e,n,o,s,r,c,a,u,d,p,f,g,h,v,y,$,B,F,L=t[2],P=t[0],T=ae(t),D=0==t[14]&&function(t){let e;return{c(){e=x("div"),_(e,"height","50px")},m(t,n){w(t,e,n)},d(t){t&&b(e)}}}();a=new Ot({props:{styleWindow:{width:"50%",height:"100%"},$$slots:{default:[de]},$$scope:{ctx:t}}});let S=ge(t);return{c(){e=x("div"),n=x("div"),T.c(),o=C(),s=x("div"),D&&D.c(),r=C(),c=x("div"),ut(a.$$.fragment),u=C(),d=x("div"),d.innerHTML='<img id="imagepassage" src="https://github.com/oreki9/passage/blob/main/user.png?raw=true" style="width: 50px;height: 50px;border-radius: 50%;"/>',p=x("a"),f=k(t[1]),g=C(),h=x("div"),S.c(),v=C(),y=x("div"),y.textContent="Press to Load More",_(d,"margin","10px"),O(p,"href","https://passagenews.000webhostapp.com/login.php?login=true"),_(c,"height","80px"),_(c,"width","100%"),O(c,"class","container svelte-1o8cnf1"),_(h,"flex-direction","column"),_(h,"background-color","#FFFFFF"),_(y,"justify-content","center"),_(y,"display","flex"),_(y,"height","25px"),O(e,"style",t[15]())},m(i,l){w(i,e,l),m(e,n),T.m(n,null),m(e,o),m(e,s),D&&D.m(s,null),m(s,r),m(s,c),dt(a,c,null),m(c,u),m(c,d),m(c,p),m(p,f),m(s,g),m(s,h),S.m(h,null),m(s,v),m(s,y),$=!0,B||(F=[W(re,"scroll",t[11]),W(y,"click",t[13])],B=!0)},p(t,e){4&e[0]&&l(L,L=t[2])?(T.d(1),T=ae(t),T.c(),T.m(n,null)):T.p(t,e);const o={};24&e[0]|512&e[1]&&(o.$$scope={dirty:e,ctx:t}),a.$set(o),(!$||2&e[0])&&E(f,t[1]),1&e[0]&&l(P,P=t[0])?(S.d(1),S=ge(t),S.c(),S.m(h,null)):S.p(t,e)},i(t){$||(lt(a.$$.fragment,t),$=!0)},o(t){rt(a.$$.fragment,t),$=!1},d(t){t&&b(e),T.d(t),D&&D.d(),pt(a),S.d(t),B=!1,i(F)}}}let me="https://wallpapercave.com/wp/wp4371959.jpg";function ve(t){t.target.src!=me&&(t.target.src=me)}function ye(t,e,n){const o=new vt;var i=[];let s=1,l="Account";var r={},c=!0,a=!1,u={fav:[],dislikes:[],tagfav:[]},d=!1,p="unreaded";function f(){c=!0,o.fetchListNews(s,p,m).then((t=>{n(0,i=i.concat(t)),t.length>0&&(c=!1)}))}function g(t){return()=>{for(let e=0;e<i.length;e++)i[e].id==t.id?n(0,i[e].isOption=!t.isOption,i):n(0,i[e].isOption=!1,i)}}_t.subscribe((t=>{a&&(console.log(t),o.savePrefUser(btoa(JSON.stringify(t)),m).then((()=>{s=1,n(0,i=[]),f()})))}));let h=!1;!function(){const t=new URLSearchParams(window.location.search),e=t.get("token"),o=t.get("name");console.log("test name : "+o),n(1,l=o),null==e||""==e||null==e&&null==o||""==o||null==o||(document.cookie="sessionLogin="+e,document.cookie="name="+o)}();const[m,v]=(()=>{const t=document.cookie.split("; ");console.log(t);let e="",o="";for(const i of t){console.log("test cookie 2 : "+i);const[t,s]=i.split("=");"sessionLogin"===t?o=s:"name"==t&&(e=s,n(1,l=s))}return[o,e]})();f(),o.getPrefUser(m).then((t=>{0==t.fav.length&&0==t.dislikes.length&&0==t.tagfav.length?(console.log("hello"),n(3,u={fav:[""],dislikes:[""],tagfav:[""]}),n(4,d=!0)):(console.log("its real"),n(3,u=t)),a=!0}));let y=window.frames.innerWidth>window.frames.innerHeight;let w=!1;return[i,l,r,u,d,w,{},g,function(t){return()=>{""!=m&&o.saveLinkData(t,m).then((t=>{console.log(t.message)})),g(t)()}},t=>"https://passagenews.000webhostapp.com/passagenews.php?newsreaded="+t,function(t){if(p==t)return"background-color: #006944;"},function(){const t=window.scrollY,e=window.innerHeight,o=document.documentElement.scrollHeight;h=t+e>=o-20,n(2,r={}),h&&0==c&&(s+=1,f())},function(t){return()=>{switch(s=1,n(0,i=[]),t){case"readed":p="readed";break;case"unreaded":p="unreaded";break;case"fav":p="favorite";break;default:p=""}n(2,r={}),f()}},function(){0==c&&(s+=1,f())},y,function(){return"display: grid;grid-template-columns:"+(y?"15% 85%":"100%")},function(){return"display: grid;grid-template-"+(0==y?"columns":"row")+":"+(0==y?"100px 100px 100px 100px 100px":"30px 30px 30px 30px 30px")},function(){n(5,w=!0)},function(){n(5,w=!1)},(t,e)=>{const{inView:n,entry:o,scrollDirection:i,observer:s,node:l}=e.detail;let r=function(t,e){let n=t,o=e,i=o/n*(.78*window.frames.innerWidth);return[n/o*i,i]}(t.size.width,t.size.height);console.log(t.id+" "+r[0]+" "+r[1]);let c=r[0],a=r[1];e.target.src=n?t.content:me,e.target.height=a,e.target.width=c}]}return new class extends ht{constructor(t){super(),gt(this,t,ye,he,l,{},null,[-1,-1])}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
