import{_ as g,n as f,u as h,a as k,o as w,E as b,t as y,e as d,b as C,c as B,f as e,w as I,d as o,q as c,p as S,i as T}from"./index-50a67697.js";import{s as N}from"./SimpleHeader-24c54a75.js";const $={components:{navBar:f,sHeader:N},setup(){const n=h(),s=k({user:{},loading:!0});w(async()=>{const{data:r}=await b();s.user=r,s.loading=!1});const _=()=>{n.go(-1)},a=(r,p)=>{n.push({path:r,query:p||{}})};return{...y(s),goBack:_,goTo:a}}},t=n=>(S("data-v-1d7d0ad2"),n=n(),T(),n),U={class:"user-box"},q={class:"user-info"},x={class:"info"},E=t(()=>o("img",{src:"https://s.yezgea02.com/1604040746310/aaaddd.png"},null,-1)),R={class:"user-desc"},V={class:"name"},z={class:"user-list"},D=t(()=>o("span",null,"我的订单",-1)),H=t(()=>o("span",null,"账号管理",-1)),M=t(()=>o("span",null,"地址管理",-1)),j=t(()=>o("span",null,"关于我们",-1));function A(n,s,_,a,r,p){const u=d("s-header"),m=d("van-skeleton"),i=d("van-icon"),v=d("nav-bar");return C(),B("div",U,[e(u,{name:"我的"}),e(m,{title:"",avatar:!0,row:3,loading:n.loading},{default:I(()=>[o("div",q,[o("div",x,[E,o("div",R,[o("span",null,"昵称："+c(n.user.nickName),1),o("span",null,"登录名："+c(n.user.loginName),1),o("span",V,"个性签名："+c(n.user.introduceSign),1)])])])]),_:1},8,["loading"]),o("ul",z,[o("li",{class:"van-hairline--bottom",onClick:s[0]||(s[0]=l=>a.goTo("/order"))},[D,e(i,{name:"arrow"})]),o("li",{class:"van-hairline--bottom",onClick:s[1]||(s[1]=l=>a.goTo("/setting"))},[H,e(i,{name:"arrow"})]),o("li",{class:"van-hairline--bottom",onClick:s[2]||(s[2]=l=>a.goTo("/address",{from:"mine"}))},[M,e(i,{name:"arrow"})]),o("li",{onClick:s[3]||(s[3]=l=>a.goTo("/about"))},[j,e(i,{name:"arrow"})])]),e(v)])}const J=g($,[["render",A],["__scopeId","data-v-1d7d0ad2"]]);export{J as default};
