import{Y as c,H as b,P as w,Z as N,I as m,$ as d,a0 as P}from"./index.c147132e.js";function v(t){for(var e=-1,s=t==null?0:t.length,r={};++e<s;){var n=t[e];r[n[0]]=n[1]}return r}const O=t=>t===void 0,_=t=>typeof Element>"u"?!1:t instanceof Element,S=t=>c(t)?!Number.isNaN(Number(t)):!1,p=(t="")=>t.split(" ").filter(e=>!!e.trim()),j=(t,e)=>{if(!t||!e)return!1;if(e.includes(" "))throw new Error("className should not contain space.");return t.classList.contains(e)},V=(t,e)=>{!t||!e.trim()||t.classList.add(...p(e))},L=(t,e)=>{!t||!e.trim()||t.classList.remove(...p(e))},T=(t,e)=>{var s;if(!w||!t||!e)return"";let r=N(e);r==="float"&&(r="cssFloat");try{const n=t.style[r];if(n)return n;const o=(s=document.defaultView)==null?void 0:s.getComputedStyle(t,"");return o?o[r]:""}catch{return t.style[r]}};function q(t,e="px"){if(!t)return"";if(b(t)||S(t))return`${t}${e}`;if(c(t))return t}const y="__epPropKey",A=t=>t,$=t=>m(t)&&!!t[y],E=(t,e)=>{if(!m(t)||$(t))return t;const{values:s,required:r,default:n,type:o,validator:l}=t,f={type:o,required:!!r,validator:s||l?u=>{let i=!1,a=[];if(s&&(a=Array.from(s),d(t,"default")&&a.push(n),i||(i=a.includes(u))),l&&(i||(i=l(u))),!i&&a.length>0){const g=[...new Set(a)].map(h=>JSON.stringify(h)).join(", ");P(`Invalid prop: validation failed${e?` for prop "${e}"`:""}. Expected one of [${g}], got value ${JSON.stringify(u)}.`)}return i}:void 0,[y]:!0};return d(t,"default")&&(f.default=n),f},I=t=>v(Object.entries(t).map(([e,s])=>[e,E(s,e)]));export{q as a,I as b,_ as c,A as d,E as e,v as f,T as g,j as h,O as i,V as j,L as r};