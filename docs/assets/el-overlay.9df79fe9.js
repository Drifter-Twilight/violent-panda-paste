import{a as A,h as O,g as z,j as U,r as G,b as V,d as Y}from"./runtime.d3cdd82d.js";import{P as x,aA as E,a9 as m,$ as K,Z as $,V as j,aU as Q,K as g,ax as Z,n as _,aV as q,Q as J,aW as P,aN as y,d as F,a as ee,r as h,aQ as oe}from"./index.491723dd.js";import{t as te}from"./error.7e8331f1.js";let l;const ne=e=>{var s;if(!x)return 0;if(l!==void 0)return l;const o=document.createElement("div");o.className=`${e}-scrollbar__wrap`,o.style.visibility="hidden",o.style.width="100px",o.style.position="absolute",o.style.top="-9999px",document.body.appendChild(o);const t=o.offsetWidth;o.style.overflow="scroll";const n=document.createElement("div");n.style.width="100%",o.appendChild(n);const u=n.offsetWidth;return(s=o.parentNode)==null||s.removeChild(o),l=t-u,l};var c=(e=>(e[e.TEXT=1]="TEXT",e[e.CLASS=2]="CLASS",e[e.STYLE=4]="STYLE",e[e.PROPS=8]="PROPS",e[e.FULL_PROPS=16]="FULL_PROPS",e[e.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",e[e.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",e[e.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",e[e.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",e[e.NEED_PATCH=512]="NEED_PATCH",e[e.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",e[e.HOISTED=-1]="HOISTED",e[e.BAIL=-2]="BAIL",e))(c||{});const ce=e=>{if(!m(e))return{};const s=e.props||{},o=(m(e.type)?e.type.props:void 0)||{},t={};return Object.keys(o).forEach(n=>{K(o[n],"default")&&(t[n]=o[n].default)}),Object.keys(s).forEach(n=>{t[$(n)]=s[n]}),t},T=e=>{const s=E(e)?e:[e],o=[];return s.forEach(t=>{var n;E(t)?o.push(...T(t)):m(t)&&E(t.children)?o.push(...T(t.children)):(o.push(t),m(t)&&((n=t.component)==null?void 0:n.subTree)&&o.push(...T(t.component.subTree)))}),o},me=(e,s,o)=>{let t={offsetX:0,offsetY:0};const n=a=>{const i=a.clientX,f=a.clientY,{offsetX:p,offsetY:v}=t,d=e.value.getBoundingClientRect(),S=d.left,b=d.top,D=d.width,k=d.height,H=document.documentElement.clientWidth,B=document.documentElement.clientHeight,I=-S+p,W=-b+v,R=H-S-D+p,X=B-b-k+v,w=C=>{const L=Math.min(Math.max(p+C.clientX-i,I),R),N=Math.min(Math.max(v+C.clientY-f,W),X);t={offsetX:L,offsetY:N},e.value.style.transform=`translate(${A(L)}, ${A(N)})`},M=()=>{document.removeEventListener("mousemove",w),document.removeEventListener("mouseup",M)};document.addEventListener("mousemove",w),document.addEventListener("mouseup",M)},u=()=>{s.value&&e.value&&s.value.addEventListener("mousedown",n)},r=()=>{s.value&&e.value&&s.value.removeEventListener("mousedown",n)};j(()=>{Q(()=>{o.value?u():r()})}),g(()=>{r()})},fe=e=>{Z(e)||te("[useLockscreen]","You need to pass a ref param to this function");const s=_("popup"),o=q(()=>s.bm("parent","hidden"));if(!x||O(document.body,o.value))return;let t=0,n=!1,u="0";const r=()=>{setTimeout(()=>{G(document.body,o.value),n&&(document.body.style.width=u)},200)};J(e,a=>{if(!a){r();return}n=!O(document.body,o.value),n&&(u=document.body.style.width),t=ne(s.namespace.value);const i=document.documentElement.clientHeight<document.body.scrollHeight,f=z(document.body,"overflowY");t>0&&(i||f==="scroll")&&n&&(document.body.style.width=`calc(100% - ${t}px)`),U(document.body,o.value)}),P(()=>r())},se=e=>{if(!e)return{onClick:y,onMousedown:y,onMouseup:y};let s=!1,o=!1;return{onClick:r=>{s&&o&&e(r),s=o=!1},onMousedown:r=>{s=r.target===r.currentTarget},onMouseup:r=>{o=r.target===r.currentTarget}}},re=V({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:Y([String,Array,Object])},zIndex:{type:Y([String,Number])}}),ue={click:e=>e instanceof MouseEvent};var ae=F({name:"ElOverlay",props:re,emits:ue,setup(e,{slots:s,emit:o}){const t=_("overlay"),n=i=>{o("click",i)},{onClick:u,onMousedown:r,onMouseup:a}=se(e.customMaskEvent?void 0:n);return()=>e.mask?ee("div",{class:[t.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:u,onMousedown:r,onMouseup:a},[h(s,"default")],c.STYLE|c.CLASS|c.PROPS,["onClick","onMouseup","onMousedown"]):oe("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[h(s,"default")])}});const pe=ae;export{pe as E,fe as a,se as b,T as f,ce as g,me as u};
