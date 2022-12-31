import{d as x,u as h,s as V,E as B,o as r,c as i,w as e,a as t,b as o,e as a,f as w,g as D,t as g,r as $,p as S,h as T,_ as z,i as F,j as I,k as C,F as v,l as A,S as M,m as R}from"./index.c147132e.js";import{E as k}from"./el-row.f3719832.js";import{E as b,s as j,m as H,l as L}from"./el-icon.105927a0.js";import{E}from"./el-col.551ed959.js";import{_ as P}from"./VMain.8dfb7264.js";import"./runtime.771aef88.js";import"./row.c8ec28f0.js";import"./typescript.72bf8adc.js";import"./el-scrollbar.e4bb122b.js";import"./error.7e8331f1.js";const y="/assets/logo.2cd1d669.png",N=o("a",{href:"https://github.com/Drifter-Twilight/violent-panda-paste",target:"_blnak",class:"flex-center text-3xl"},[o("i",{class:"el-icon"},[o("svg",{preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"2em",height:"2em"},[o("path",{fill:"currentColor",d:"M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.338 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.688c-.1-.25-.45-1.275.1-2.65c0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337c1.912-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"})])])],-1),O=x({__name:"VHeader",setup(n){const{setDarkMode:s}=h();let{darkMode:d}=V(h());return(u,l)=>{const _=E,p=b,m=k,f=B;return r(),i(f,{height:"64px"},{default:e(()=>[t(m,{justify:"space-between",align:"middle"},{default:e(()=>[t(_,{xs:12,sm:5,md:4,lg:3,class:"h-[64px]"},{default:e(()=>[o("img",{src:y,alt:"logo",class:"h-[60px] cursor-pointer",onClick:l[0]||(l[0]=c=>a(w)().push("/home"))})]),_:1}),t(_,{span:1,xs:6,sm:3,lg:2,class:"!flex justify-evenly items-center font-bold"},{default:e(()=>[a(d)?(r(),i(p,{key:1,size:"1.5rem",color:"#615da4",class:"cursor-pointer",onClick:l[2]||(l[2]=c=>a(s)(!1))},{default:e(()=>[t(a(H))]),_:1})):(r(),i(p,{key:0,size:"1.5rem",color:"#fcc307",class:"cursor-pointer",onClick:l[1]||(l[1]=c=>a(s)(!0))},{default:e(()=>[t(a(j))]),_:1})),N]),_:1})]),_:1})]),_:1})}}}),Y=n=>(S("data-v-4a8dcadf"),n=n(),T(),n),q={class:"flex justify-between items-center box h-20 sm:h-24 lg:h-28 2xl:h-32 overflow-hidden rounded-2xl transition-all shadow-sm shadow-gray-400 hover:shadow-md bg-gradient-to-r text-white card_bg cursor-pointer"},G={class:"relative w-[55%] h-full pt-3 pb-2 ml-3 card_left-bg"},J={class:"font-bold card_title text-sm sm:text-lg md:text-lg xl:text-2xl 2xl:text-3xl z-10 mb-1"},K=["title"],Q={class:"flex-center box w-[45%] p-2 h-full"},U=Y(()=>o("img",{src:y,alt:"lottie"},null,-1)),W=x({__name:"VCard",props:{cardTitle:null,cardDesc:null,cardColor:null},setup(n){const s=n;return D(d=>({f9be285c:s.cardColor[0],f9be281e:s.cardColor[1]})),(d,u)=>{const l=E;return r(),i(l,{xs:12,sm:8,md:6,lg:6,xl:5,class:"p-1 sm:p-5 md:p-3 2xl:p-5 mt-2"},{default:e(()=>[o("div",q,[o("div",G,[o("h1",J,g(s.cardTitle),1),o("p",{class:"card_desc w-full text-xs z-10",title:s.cardDesc},g(s.cardDesc),9,K)]),o("div",Q,[$(d.$slots,"lottie",{},()=>[U],!0)])])]),_:3})}}});const X=z(W,[["__scopeId","data-v-4a8dcadf"]]),ie=x({__name:"VHome",setup(n){const s=F(()=>R(()=>import("./VLottie.18b724cd.js"),["assets/VLottie.18b724cd.js","assets/index.c147132e.js","assets/index.f40865a4.css"])),d=w(),u=I([{title:"\u5E78\u8FD0\u65F6\u523B",desc:"\u6765\u653E\u677E\u4E00\u4E0B\u5427~",lottie:"lucky-draw",cardColor:["#fa709a","#fee140"]},{title:"\u968F\u673A\u70B9\u540D",desc:"\u5C0F\u516C\u9E21\u70B9\u5230\u8C01\u6211\u5C31\u9009\u8C01~",lottie:"random-roll-call",cardColor:["#16a085","#f4d03f"]}]);function l(_){d.push(`/${_}`)}return(_,p)=>{const m=b,f=k;return r(),C(v,null,[t(O),t(P,null,{default:e(()=>[t(f,{class:"p-[20px]"},{default:e(()=>[(r(!0),C(v,null,A(u,c=>(r(),i(X,{key:c.title,"card-title":c.title,"card-desc":c.desc,"card-color":c.cardColor,onClick:Z=>l(c.lottie)},{lottie:e(()=>[(r(),i(M,null,{fallback:e(()=>[t(m,{size:"2rem",color:"#615da4",class:"is-loading"},{default:e(()=>[t(a(L))]),_:1})]),default:e(()=>[t(a(s),{lottie:c.lottie},null,8,["lottie"])]),_:2},1024))]),_:2},1032,["card-title","card-desc","card-color","onClick"]))),128))]),_:1})]),_:1})],64)}}});export{ie as default};