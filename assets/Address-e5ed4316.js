import{_ as u,u as p,G as f,a as m,o as h,O as _,t as A,e as l,b as g,c as y,f as c,d as I}from"./index-919fba31.js";import{s as v}from"./SimpleHeader-80a0ba25.js";const N={setup(){const o=p(),t=f(),d=m({chosenAddressId:"1",list:[],from:t.query.from||""});h(async()=>{const{data:e}=await _();if(!e.length){d.list=[];return}console.log(e),d.list=e.map(s=>({id:s.addressId,name:s.userName,tel:s.userPhone,address:`${s.provinceName} ${s.cityName} ${s.regionName} ${s.detailAddress}`,isDefault:!!s.defaultFlag})),d.chosenAddressId=Number(t.query.id),console.log(d.chosenAddressId)});const a=()=>{o.push({path:"/address-edit",query:{type:"add",from:d.from}})},r=e=>{console.log(e),o.push({path:"/address-edit",query:{type:"edit",addressId:e.id,from:d.from}})},n=e=>{console.log(e),o.push({path:"/create-order",query:{addressId:e.id,from:d.from}})};return{...A(d),onAdd:a,onEdit:r,select:n}},components:{sHeader:v}},b={class:"address-box"},q={class:"address-item"};function E(o,t,d,a,r,n){const e=l("s-header"),s=l("van-address-list");return g(),y("div",b,[c(e,{title:"地址管理"}),I("div",q,[c(s,{modelValue:o.chosenAddressId,"onUpdate:modelValue":t[0]||(t[0]=i=>o.chosenAddressId=i),list:o.list,"disabled-list":o.disabledList,"default-tag-text":"默认",onAdd:a.onAdd,onEdit:a.onEdit,onSelect:a.select},null,8,["modelValue","list","disabled-list","onAdd","onEdit","onSelect"])])])}const B=u(N,[["render",E]]);export{B as default};