import{_ as k,z as d,N as L,aL as B,a as y,W as S}from"./index.541000d4.js";import{B as D,c5 as v,j as f,a1 as o,D as n,F as w,w as P,a2 as u,ad as m,L as C,ab as E,u as r}from"./vendor.bf608252.js";import{c as T,u as F}from"./index.1584317f.js";import I from"./SessionTimeoutLogin.ef441837.js";import"./index.141f744a.js";import"./useWindowSizeFn.011a8160.js";import"./useContentViewHeight.107194a7.js";/* empty css               *//* empty css               */import"./lock.8e6504dc.js";import"./Login.6d4c5b81.js";import"./LoginForm.edd86c2f.js";/* empty css              *//* empty css               */import"./LoginFormTitle.de44ca7b.js";const x=D({name:"LayoutFeatures",components:{BackTop:v,LayoutLockPage:T(()=>d(()=>import("./index.3e3c1815.js"),["assets/index.3e3c1815.js","assets/vendor.bf608252.js","assets/vendor.3cca954f.css","assets/LockPage.fa86ab2c.js","assets/LockPage.74e81a43.css","assets/index.541000d4.js","assets/index.007abcad.css","assets/lock.8e6504dc.js","assets/header.d801b988.js"])),SettingDrawer:T(()=>d(()=>import("./index.4299fb39.js").then(function(e){return e.i}),["assets/index.4299fb39.js","assets/index.17eb4c41.css","assets/index.94c4b2f9.js","assets/index.5c7227e9.css","assets/index.00780982.css","assets/index.541000d4.js","assets/index.007abcad.css","assets/vendor.bf608252.js","assets/vendor.3cca954f.css","assets/index.1584317f.js","assets/index.f8c87140.css","assets/index.5aa8aa0e.css","assets/index.141f744a.js","assets/index.bdbca534.css","assets/useWindowSizeFn.011a8160.js","assets/useContentViewHeight.107194a7.js","assets/lock.8e6504dc.js"])),SessionTimeoutLogin:I},setup(){const{getUseOpenBackTop:e,getShowSettingButton:p,getSettingButtonPosition:c,getFullContent:g}=L(),_=B(),{prefixCls:l}=y("setting-drawer-feature"),{getShowHeader:s}=F(),a=f(()=>_.getSessionTimeout),i=f(()=>{if(!r(p))return!1;const t=r(c);return t===S.AUTO?!r(s)||r(g):t===S.FIXED});return{getTarget:()=>document.body,getUseOpenBackTop:e,getIsFixedSettingDrawer:i,prefixCls:l,getIsSessionTimeout:a}}});function O(e,p,c,g,_,l){const s=o("LayoutLockPage"),a=o("BackTop"),i=o("SettingDrawer"),t=o("SessionTimeoutLogin");return n(),w(E,null,[P(s),e.getUseOpenBackTop?(n(),u(a,{key:0,target:e.getTarget},null,8,["target"])):m("",!0),e.getIsFixedSettingDrawer?(n(),u(i,{key:1,class:C(e.prefixCls)},null,8,["class"])):m("",!0),e.getIsSessionTimeout?(n(),u(t,{key:2})):m("",!0)],64)}var J=k(x,[["render",O]]);export{J as default};
