import{b as u}from"./runtime.d3cdd82d.js";import{d as r,n as p,q as a,v as c,o as m,c as f,w as g,r as d,x as y,e as s,y as w,z as v,A as _,B as R}from"./index.491723dd.js";import{r as b}from"./row.c8ec28f0.js";const h=["start","center","end","space-around","space-between","space-evenly"],C=["top","middle","bottom"],S=u({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:h,default:"start"},align:{type:String,values:C,default:"top"}}),j=r({name:"ElRow"}),k=r({...j,props:S,setup(n){const e=n,o=p("row"),l=a(()=>e.gutter);c(b,{gutter:l});const i=a(()=>{const t={};return e.gutter&&(t.marginRight=t.marginLeft=`-${e.gutter/2}px`),t});return(t,x)=>(m(),f(v(t.tag),{class:y([s(o).b(),s(o).is(`justify-${e.justify}`,t.justify!=="start"),s(o).is(`align-${e.align}`,t.align!=="top")]),style:w(s(i))},{default:g(()=>[d(t.$slots,"default")]),_:3},8,["class","style"]))}});var $=_(k,[["__file","/home/runner/work/element-plus/element-plus/packages/components/row/src/row.vue"]]);const A=R($);export{A as E};