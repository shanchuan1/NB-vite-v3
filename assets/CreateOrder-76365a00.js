import{_ as I,G as f,u as y,a as N,o as w,T as h,s as C,K as L,L as b,M as A,N as S,A as T,t as k,e as l,b as _,c as p,f as u,d as s,q as a,F as P,m as B,w as O,h as q,p as D,i as R}from"./index-50a67697.js";import{s as V}from"./SimpleHeader-24c54a75.js";const F={setup(){const e=f(),c=y(),d=N({cartList:[],address:{}});w(()=>{i()});const i=async()=>{h.loading({message:"加载中...",forbidClick:!0});const{cartItemIds:r,addressId:n}=e.query;let o=[];r?(C("cartItemIds",r),o=JSON.parse(r)):o=JSON.parse(L("cartItemIds"));const{data:t}=await b({cartItemIds:o.join(",")}),{data:v}=n?await A(n):await S();if(!v){c.push({path:"/address"});return}d.cartList=t,d.address=v,h.clear()},m=T(()=>d.cartList.reduce((n,o)=>n+o.goodsCount*o.sellingPrice,0)),g=()=>{c.push({path:"/address",query:{id:d.address.addressId}})};return{...k(d),totalPrice:m,goToAddress:g}},components:{sHeader:V}},J=e=>(D("data-v-45086368"),e=e(),R(),e),M={class:"create-order"},j={class:"name"},E={class:"address"},G={class:"good"},H={class:"good-img"},K=["src"],$={class:"good-desc"},x={class:"good-title"},z={class:"good-btn"},Q={class:"price"},U={class:"pay-wrap"},W={class:"price"},X=J(()=>s("span",null,"商品价格",-1));function Y(e,c,d,i,m,g){const r=l("s-header"),n=l("van-icon"),o=l("van-button");return _(),p("div",M,[u(r,{title:"生成订单"}),s("div",{class:"address-wrap",onClick:c[0]||(c[0]=(...t)=>i.goToAddress&&i.goToAddress(...t))},[s("div",j,[s("span",null,a(e.address.userName),1),s("span",null,a(e.address.userPhone),1)]),s("div",E,a(e.address.provinceName)+" "+a(e.address.cityName)+" "+a(e.address.regionName)+" "+a(e.address.detailAddress),1),u(n,{class:"arrow",name:"arrow"})]),s("div",G,[(_(!0),p(P,null,B(e.cartList,t=>(_(),p("div",{class:"good-item",key:t.cartItemId},[s("div",H,[s("img",{src:t.goodsCoverImg,alt:""},null,8,K)]),s("div",$,[s("div",x,[s("span",null,a(t.goodsName),1),s("span",null,"x"+a(t.goodsCount),1)]),s("div",z,[s("div",Q,"￥"+a(t.sellingPrice),1)])])]))),128))]),s("div",U,[s("div",W,[X,s("span",null,"￥"+a(i.totalPrice),1)]),u(o,{type:"primary",class:"pay-btn",color:"#1baeae"},{default:O(()=>[q("生成订单")]),_:1})])])}const es=I(F,[["render",Y],["__scopeId","data-v-45086368"]]);export{es as default};
