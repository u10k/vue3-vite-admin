import{cb as v,bo as C,cc as $,cd as b,Z as k,e as g,A as y,B as w,C as I,o,c as t,a as c,T as r,j as E,D as e,F as N,G as a,t as d,am as B}from"./index.60668d32.js";const n={success:"icon-success",warning:"icon-warning",error:"icon-error",info:"icon-info"},f={[n.success]:v,[n.warning]:C,[n.error]:$,[n.info]:b},F=k({title:{type:String,default:""},subTitle:{type:String,default:""},icon:{values:["success","warning","info","error"],default:"info"}}),T="ElResult",h=g({name:T,props:F,setup(s){const u=y("result"),p=w(()=>{const l=s.icon,i=l&&n[l]?n[l]:"icon-info",m=f[i]||f["icon-info"];return{class:i,component:m}});return{ns:u,resultIcon:p}}});function M(s,u,p,l,i,m){return o(),t("div",{class:e(s.ns.b())},[c("div",{class:e(s.ns.e("icon"))},[r(s.$slots,"icon",{},()=>[s.resultIcon.component?(o(),E(N(s.resultIcon.component),{key:0,class:e(s.resultIcon.class)},null,8,["class"])):a("v-if",!0)])],2),s.title||s.$slots.title?(o(),t("div",{key:0,class:e(s.ns.e("title"))},[r(s.$slots,"title",{},()=>[c("p",null,d(s.title),1)])],2)):a("v-if",!0),s.subTitle||s.$slots["sub-title"]?(o(),t("div",{key:1,class:e(s.ns.e("subtitle"))},[r(s.$slots,"sub-title",{},()=>[c("p",null,d(s.subTitle),1)])],2)):a("v-if",!0),s.$slots.extra?(o(),t("div",{key:2,class:e(s.ns.e("extra"))},[r(s.$slots,"extra")],2)):a("v-if",!0)],2)}var R=I(h,[["render",M],["__file","/home/runner/work/element-plus/element-plus/packages/components/result/src/result.vue"]]);const D=B(R);export{D as E};
