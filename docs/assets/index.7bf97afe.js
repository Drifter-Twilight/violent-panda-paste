import{d as f,o as _,c as d,w as a,b as c,t as h,r as v,k as w,e as t,a as e,f as b,aO as k}from"./index.491723dd.js";import{E as x}from"./el-scrollbar.207c6832.js";import{E as y,n as g,r as z}from"./el-icon.7d57c07f.js";import{V as m}from"./VSwitchButton.9de63556.js";import{i as B}from"./importImg.72ed1092.js";const C={class:"flex-center box h-8vh text-xl text-[var(--el-color-primary)] font-bold"},N=f({__name:"LuckyContainer",props:{title:null},setup(r){return(l,n)=>{const o=x;return _(),d(o,{height:"100vh",class:"box w-[35vw]"},{default:a(()=>[c("h1",C," - "+h(r.title)+" - ",1),v(l.$slots,"default")]),_:3})}}}),E={class:"relative w-65vw h-screen z-10 shadow-2xl"},$=["src"],D={class:"absolute flex box justify-between items-center left-1/2 top-1/2 translate-half h-10vw w-[95%] z-20"},P=f({__name:"LuckyImg",props:{imgPath:null},setup(r){const l=b(),n=k();function o(i){l.push(i)}return(i,s)=>{const u=y;return _(),w("div",E,[c("img",{src:t(B)(r.imgPath),class:"object-cover transition-all object-center w-full h-full"},null,8,$),c("div",D,[e(m,{active:t(n).path=="/lucky-draw/form",size:"6vw",onClick:s[0]||(s[0]=p=>o("form"))},{default:a(()=>[e(u,{size:"1.25rem"},{default:a(()=>[e(t(g))]),_:1})]),_:1},8,["active"]),e(m,{active:t(n).path=="/lucky-draw/file",size:"6vw",onClick:s[1]||(s[1]=p=>o("file"))},{default:a(()=>[e(u,{size:"1.25rem"},{default:a(()=>[e(t(z))]),_:1})]),_:1},8,["active"])])])}}}),R=[{name:"\u7EA2\u5305\u62BD\u5956",path:"redpacket"},{name:"\u5927\u8F6C\u76D8",path:"turntable"}];export{N as _,P as a,R as l};
