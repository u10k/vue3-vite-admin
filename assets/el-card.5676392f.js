var m=Object.defineProperty,u=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var d=(s,a,e)=>a in s?m(s,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[a]=e,l=(s,a)=>{for(var e in a||(a={}))f.call(a,e)&&d(s,e,a[e]);if(o)for(var e of o(a))h.call(a,e)&&d(s,e,a[e]);return s},n=(s,a)=>u(s,y(a));import{Z as b,$ as C,e as S,A as v,o as p,c,D as t,bb as r,T as i,k as _,t as k,G as w,a as g,P as $,C as E,am as N}from"./index.60668d32.js";const P=b({header:{type:String,default:""},bodyStyle:{type:C([String,Object,Array]),default:""},shadow:{type:String,default:"always"}}),B={name:"ElCard"},T=S(n(l({},B),{props:P,setup(s){const a=v("card");return(e,z)=>(p(),c("div",{class:t([r(a).b(),r(a).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(p(),c("div",{key:0,class:t(r(a).e("header"))},[i(e.$slots,"header",{},()=>[_(k(e.header),1)])],2)):w("v-if",!0),g("div",{class:t(r(a).e("body")),style:$(e.bodyStyle)},[i(e.$slots,"default")],6)],2))}}));var V=E(T,[["__file","/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]]);const j=N(V);export{j as E};
