import{_ as N,n as S,u as V,y as A,a as T,o as q,T as m,z as G,A as z,t as D,e as r,b as g,c as v,f as d,d as n,w as u,B as x,x as w,C as E,D as F,F as P,m as R,q as b,h as B}from"./index-919fba31.js";import{s as U}from"./SimpleHeader-80a0ba25.js";const H={components:{navBar:S,sHeader:U},setup(){const s=V(),i=A(),o=T({checked:!1,list:[],all:!1,result:[],checkAll:!0});q(()=>{a()});const a=async()=>{m.loading({message:"加载中...",forbidClick:!0});const{data:e}=await G({pageNumber:1});console.log(e),o.list=e,o.result=e.map(l=>l.cartItemId),console.log("商品id"+o.result),m.clear()},y=z(()=>{let e=o.list.filter(t=>o.result.includes(t.cartItemId));return console.log(e),e.reduce((t,c)=>t+c.goodsCount*c.sellingPrice,0)}),I=()=>{s.go(-1)},p=()=>{s.push({path:"/home"})},_=async(e,l)=>{if(o.list.filter(c=>c.cartItemId==l.name)[0].goodsCount==e)return;m.loading({message:"修改中...",forbidClick:!0});const t={cartItemId:l.name,goodsCount:e};await E(t),o.list.forEach(c=>{c.cartItemId==l.name&&(c.goodsCount=e)}),m.clear()},C=async()=>{if(o.result.length==0){m.fail("请选择商品进行结算");return}const e=JSON.stringify(o.result);console.log(e),s.push({path:"/create-order",query:{cartItemIds:e}})},h=async e=>{await F(e),i.dispatch("updateCart"),a()},k=e=>{console.log(e),o.checkAll=e.length==o.list.length},f=()=>{o.checkAll?o.result=[]:o.result=o.list.map(e=>e.cartItemId)};return{...D(o),total:y,goBack:I,goTo:p,onChange:_,onSubmit:C,deleteGood:h,groupChange:k,allCheck:f}}},J={class:"cart-box"},L={class:"cart-body"},M={class:"good-item"},O={class:"good-img"},j=["src"],K={class:"good-desc"},Q={class:"good-title"},W={class:"good-btn"},X={class:"price"},Y={key:1,class:"empty"},Z=n("img",{class:"empty-cart",src:"https://s.yezgea02.com/1604028375097/empty-car.png",alt:"空购物车"},null,-1),$=n("div",{class:"title"},"购物车空空如也",-1);function ee(s,i,o,a,y,I){const p=r("s-header"),_=r("van-checkbox"),C=r("van-stepper"),h=r("van-button"),k=r("van-swipe-cell"),f=r("van-checkbox-group"),e=r("van-submit-bar"),l=r("nav-bar");return g(),v("div",J,[d(p,{name:"购物车",noback:!0}),n("div",L,[d(f,{onChange:a.groupChange,modelValue:s.result,"onUpdate:modelValue":i[0]||(i[0]=t=>s.result=t),ref:"checkboxGroup"},{default:u(()=>[(g(!0),v(P,null,R(s.list,(t,c)=>(g(),x(k,{"right-width":50,key:c},{right:u(()=>[d(h,{square:"",icon:"delete",type:"danger",class:"delete-button",onClick:te=>a.deleteGood(t.cartItemId)},null,8,["onClick"])]),default:u(()=>[n("div",M,[d(_,{name:t.cartItemId},null,8,["name"]),n("div",O,[n("img",{src:s.$filters.prefix(t.goodsCoverImg),alt:""},null,8,j)]),n("div",K,[n("div",Q,[n("span",null,b(t.goodsName),1),n("span",null,"x"+b(t.goodsCount),1)]),n("div",W,[n("div",X,"¥"+b(t.sellingPrice),1),d(C,{integer:"",min:1,max:5,"model-value":t.goodsCount,name:t.cartItemId,"async-change":"",onChange:a.onChange},null,8,["model-value","name","onChange"])])])])]),_:2},1024))),128))]),_:1},8,["onChange","modelValue"])]),s.list.length>0?(g(),x(e,{key:0,class:"submit-all van-hairline--top",price:a.total*100,"button-text":"结算",onSubmit:a.onSubmit},{default:u(()=>[d(_,{onClick:a.allCheck,checked:s.checkAll,"onUpdate:checked":i[1]||(i[1]=t=>s.checkAll=t)},{default:u(()=>[B("全选")]),_:1},8,["onClick","checked"])]),_:1},8,["price","onSubmit"])):w("",!0),s.list.length?w("",!0):(g(),v("div",Y,[Z,$,d(h,{round:"",color:"#1baeae",type:"primary",onClick:a.goTo,block:""},{default:u(()=>[B("前往选购")]),_:1},8,["onClick"])])),d(l)])}const ne=N(H,[["render",ee]]);export{ne as default};