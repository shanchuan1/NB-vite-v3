import{_ as k,G as w,u as b,a as S,t as L,e as g,b as p,c as h,d as a,S as B,U as C,V as I,f as r,w as u,F as R,m as V,q as _,W as P,p as q,i as D}from"./index-b29c2a61.js";const N={setup(){const s=w(),t=b(),e=S({keyword:s.query.keyword||"",searchBtn:!1,seclectActive:!1,refreshing:!1,list:[],loading:!1,finished:!1,productList:[],totalPage:0,page:1,orderBy:""}),n=async()=>{const{categoryId:o}=s.query;if(!o&&!e.keyword){e.finished=!0,e.loading=!1;return}const{data:c,data:{list:m}}=await P({pageNumber:e.page,goodsCategoryId:o,keyword:e.keyword,orderBy:e.orderBy});console.log(c),e.productList=e.productList.concat(m),e.totalPage=c.totalPage,e.loading=!1,e.page>=c.totalPage&&(e.finished=!0)},y=()=>{t.go(-1)},v=o=>{console.log(o),t.push({path:"/product",query:{id:o}})},i=()=>{d()},l=()=>{!e.refreshing&&e.page<e.totalPage&&(e.page=e.page+1),e.refreshing&&(e.productList=[],e.refreshing=!1),n()},d=()=>{e.refreshing=!0,e.finished=!1,e.loading=!0,e.page=1,l()},f=o=>{console.log("name",o),e.orderBy=o,d()};return{...L(e),goBack:y,productDetail:v,getSearch:i,changeTab:f,onLoad:l,onRefresh:d}}},U=s=>(q("data-v-d1c41849"),s=s(),D(),s),T={class:"product-list-wrap"},F={class:"product-list-content"},K={class:"category-header wrap"},z={class:"header-search"},A=U(()=>a("i",{class:"nbicon nbSearch"},null,-1)),E={class:"content"},G=["onClick"],M=["src"],O={class:"product-info"},W={class:"name"},j={class:"subtitle"},H={class:"price"},J={key:1,class:"empty",src:"https://s.yezgea02.com/1604041313083/kesrtd.png",alt:"搜索"};function Q(s,t,e,n,y,v){const i=g("van-tab"),l=g("van-tabs"),d=g("van-list"),f=g("van-pull-refresh");return p(),h("div",T,[a("div",F,[a("header",K,[a("i",{class:"nbicon nbfanhui",onClick:t[0]||(t[0]=(...o)=>n.goBack&&n.goBack(...o))}),a("div",z,[A,B(a("input",{type:"text",class:"search-title","onUpdate:modelValue":t[1]||(t[1]=o=>s.keyword=o),onKeyup:t[2]||(t[2]=I((...o)=>n.getSearch&&n.getSearch(...o),["enter"]))},null,544),[[C,s.keyword]])]),a("span",{class:"search-btn",onClick:t[3]||(t[3]=(...o)=>n.getSearch&&n.getSearch(...o))},"搜索")]),r(l,{type:"card",color:"#1baeae",onClick:n.changeTab},{default:u(()=>[r(i,{title:"推荐",name:""}),r(i,{title:"新品",name:"new"}),r(i,{title:"价格",name:"price"})]),_:1},8,["onClick"])]),a("div",E,[r(f,{modelValue:s.refreshing,"onUpdate:modelValue":t[5]||(t[5]=o=>s.refreshing=o),onRefresh:n.onRefresh,class:"product-list-refresh"},{default:u(()=>[r(d,{loading:s.loading,"onUpdate:loading":t[4]||(t[4]=o=>s.loading=o),finished:s.finished,"finished-text":s.productList.length?"没有更多了":"搜索想要的商品",onLoad:n.onLoad,onOffset:o=>10},{default:u(()=>[s.productList.length?(p(!0),h(R,{key:0},V(s.productList,(o,c)=>(p(),h("div",{class:"product-item",key:c,onClick:m=>n.productDetail(o.goodsId)},[a("img",{src:s.$filters.prefix(o.goodsCoverImg)},null,8,M),a("div",O,[a("p",W,_(o.goodsName),1),a("p",j,_(o.goodsIntro),1),a("span",H,"￥ "+_(o.sellingPrice),1)])],8,G))),128)):(p(),h("img",J))]),_:1},8,["loading","finished","finished-text","onLoad"])]),_:1},8,["modelValue","onRefresh"])])])}const Y=k(N,[["render",Q],["__scopeId","data-v-d1c41849"]]);export{Y as default};
