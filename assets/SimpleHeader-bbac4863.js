import{_ as r,r as _,u as p,b as t,c as n,d as c,q as b,F as k,p as u,i as m}from"./index-91df7d0a.js";const h={props:{name:{type:String,default:""},back:{type:String,default:""},noback:{type:Boolean,default:!1}},emits:["callback"],setup(e,s){const o=_(e.noback),a=p();return{goBack:()=>{e.back?a.push({path:e.back}):a.go(-1),s.emit("callback")},isback:o}}},i=e=>(u("data-v-1a3bc9d1"),e=e(),m(),e),f={class:"simple-header van-hairline--bottom"},g={key:1},y={class:"simple-header-name"},B=i(()=>c("i",{class:"nbicon nbmore"},null,-1)),v=i(()=>c("div",{class:"block"},null,-1));function S(e,s,o,a,l,x){return t(),n(k,null,[c("header",f,[a.isback?(t(),n("i",g,"      ")):(t(),n("i",{key:0,class:"nbicon nbfanhui",onClick:s[0]||(s[0]=(...d)=>a.goBack&&a.goBack(...d))})),c("div",y,b(o.name),1),B]),v],64)}const F=r(h,[["render",S],["__scopeId","data-v-1a3bc9d1"]]);export{F as s};