var n=Object.defineProperty;var c=(t,a,e)=>a in t?n(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e;var p=(t,a,e)=>(c(t,typeof a!="symbol"?a+"":a,e),e);import{a as m,_ as x,l as f}from"./index.7bf97afe.js";import{u as d,p as D,V as h,a as y,b as g}from"./index.d8591603.js";import{b as _}from"./index.a2b4812c.js";import{l as k}from"./luckyDrawForm.83d7ef44.js";import{d as X,J as T,o as v,k as w,a as o,w as B,e as F}from"./index.491723dd.js";import"./el-scrollbar.207c6832.js";import"./runtime.d3cdd82d.js";import"./error.7e8331f1.js";import"./el-icon.7d57c07f.js";import"./VSwitchButton.9de63556.js";import"./importImg.72ed1092.js";import"./el-input.e3027599.js";import"./typescript.72bf8adc.js";import"./el-row.0d2f916a.js";import"./row.c8ec28f0.js";import"./el-col.8031b8a6.js";import"./el-overlay.9df79fe9.js";import"./focus-trap.129238ac.js";function L(t){let a=t.indexOf("\u5185\u5BB9"),e=t.indexOf("\u6982\u7387"),s=[];for(let r=0;r<t.length-1;r+=2)r>1&&s.push({name:t[a+r],value:t[e+r]});return s}function b(t){let a=d(t[0],["\u5185\u5BB9","\u6982\u7387"]),e=a[0],s=a[1],r=[];return t.forEach((l,i)=>{i>=1&&r.push({name:l[e],value:l[s]})}),r}var u=(t=>(t.TXT="text/plain",t.XLSX="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",t))(u||{});class E extends D{constructor(e,s){super(e);p(this,"type");this.type=s}getData(e){switch(this.type){case u.TXT:return this.getTxtData();case u.XLSX:return this.getXlsxData(e);default:return this.getTxtData()}}getTxtData(e){let s=super.getTxtData();return e?e(s):L(s)}getXlsxData(e){let s=super.getXlsxData(e);return b(s)}}const P={class:"relative flex-center w-full h-screen"},U=X({__name:"LuckyFile",setup(t){const a=T([{description:"text",accept:{"text/plain":[".txt"]}},{description:"xlsx",accept:{"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":[".xlsx"]}}]),{setPageData:e}=_();function s(r,l,i){e({luckyDraw:{proType:k.DIYPRO,data:new E(r,l).getData(i)}})}return(r,l)=>(v(),w("div",P,[o(m,{"img-path":"lucky-draw-file.jpg"}),o(x,{title:"\u6587\u4EF6\u8BFB\u53D6"},{default:B(()=>[o(h,{tip:"\u4E00\u4EFDTXT\u6216XLSX","types-list":a.value,class:"h-92vh"},null,8,["types-list"])]),_:1}),o(y,{"radio-list":F(f),callback:s},null,8,["radio-list"]),o(g,{class:"!absolute right-3 bottom-28 xl:bottom-40","example-list":["lucky-txt-example","lucky-xlsx-example"]})]))}});export{U as default};
