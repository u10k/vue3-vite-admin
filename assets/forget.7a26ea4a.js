import{_ as h}from"./BasicForm.1664979b.js";import{_ as F,e as C,g as _,r as B,o as i,c as f,a as e,b as o,w as s,j as x,t as y,i as b,k as u,l as v,n as k}from"./index.f395e6a2.js";import{s as A,_ as E}from"./qr.248da467.js";import"./el-col.d536298f.js";import"./el-cascader-panel.298fdeb4.js";import"./el-checkbox.454cd90b.js";import"./index2.62d57a89.js";import"./index2.31f559d9.js";import"./date-utils2.589dda7a.js";import"./index2.39e14fa5.js";/* empty css                 */import"./el-upload.6a94b70e.js";import"./el-progress.ea56c66d.js";import"./TInput.b83c779c.js";import"./index2.959d41e9.js";import"./index2.9b16d394.js";import"./index2.e189bd55.js";import"./index2.5ffff69e.js";/* empty css                   */import"./index.cf99b79d.js";const w=C({setup(){const t=_(),n=_(),l=[{component:"input",class:"py-1",prop:"phone",attrs:{placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",size:"large",prefixIcon:"Avatar"},rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",trigger:"blur"},{pattern:b,message:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u624B\u673A\u53F7",trigger:"blur"}]},{component:"input",class:"py-1",prop:"code",attrs:{placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",size:"large",prefixIcon:"ChatRound"},rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",trigger:"blur"}],itemSlot:{suffix:"suffix"}},{component:"input",class:"py-1",prop:"password",attrs:{placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",type:"password",size:"large",prefixIcon:"Lock"},rules:[{required:!0,message:"\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"},{min:6,max:18,message:"\u957F\u5EA6\u5728 6 \u5230 18 \u4E2A\u5B57\u7B26",trigger:"blur"}]}],{state:c,handleSendCode:p,leftCount:m}=A();return{form:t,regForm:l,state:c,onSendCode:()=>{t.value.validateField("phone").then(()=>{p(n.value)})},leftCount:m,handleChange:a=>{n.value=a.phone}}}}),D={class:"w-full p-1 custom-login"},S={class:"flex items-center justify-end"},j=e("div",{class:"px-3 py-2 rounded-md mr-2 flex items-center bg-[#ECFAF3]"},[e("span",{class:"we inline-block pr-2 bg-contain"}),e("span",{class:"text-sm text-[#07C160]"},"\u5FAE\u4FE1\u626B\u7801\u767B\u5F55")],-1),z=e("img",{class:"relative cursor-pointer",src:E},null,-1),$={class:"my-10 mx-auto max-w-96"},q=e("div",{class:"text-3xl pb-6"},"\u5FD8\u8BB0\u5BC6\u7801",-1),I=u("\u91CD\u7F6E\u5BC6\u7801"),N=u("\u83B7\u53D6\u9A8C\u8BC1\u7801"),V={key:1,class:"text-sm text-gray-400 w-[70px] text-center inline-block flex items-center"},L={class:"flex justify-end text-sm text-gray-400"},R=u(" \u5DF2\u6709\u8D26\u53F7\uFF1F "),P=u("\u7ACB\u5373\u767B\u5F55>");function T(t,n,l,c,p,m){const r=B("router-link"),d=v,a=k,g=h;return i(),f("div",D,[e("div",S,[j,o(r,{to:"/login/scan"},{default:s(()=>[z]),_:1})]),e("div",$,[q,o(g,{ref:"form",schemas:t.regForm,"label-width":"0",class:"pt-4",onChange:t.handleChange},{action:s(()=>[o(d,{type:"primary",size:"large",class:"w-full"},{default:s(()=>[I]),_:1})]),suffix:s(()=>[t.state.sending?(i(),f("span",V,"\u91CD\u53D1"+y(t.leftCount)+"\u79D2",1)):(i(),x(a,{key:0,type:"primary",underline:!1,class:"mr-2",href:"javascript:;",onClick:t.onSendCode},{default:s(()=>[N]),_:1},8,["onClick"]))]),_:1},8,["schemas","onChange"]),e("div",L,[e("div",null,[R,o(r,{class:"text-blue-400",to:"/login/pwd"},{default:s(()=>[P]),_:1})])])])])}var ie=F(w,[["render",T]]);export{ie as default};