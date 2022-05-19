import{e as r,_ as i,o as c,c as d,g as F,b as a,w as u,a as e,k as o,l as E}from"./index.60668d32.js";import{E as b}from"./el-card.5676392f.js";import{_ as f}from"./BasicForm.94c4a345.js";import"./el-col.4ab75a0f.js";import"./el-cascader-panel.0b602cd7.js";import"./el-checkbox.16f6e2f4.js";import"./index2.75980259.js";import"./index2.c7c47704.js";import"./date-utils2.6c541f3e.js";import"./index2.e7438bea.js";/* empty css                 */import"./el-upload.6d2b5552.js";import"./el-progress.cbb2b755.js";import"./TInput.b6c29758.js";import"./index2.6a4ba8db.js";import"./index2.bc0afb0e.js";import"./index2.5e9ff3c0.js";import"./index2.adfb54a9.js";const g=r({setup(){return{}}});function C(t,p,n,m,_,h){return c(),d("div",null," Demo Component \u5F15\u5165 ")}var v=i(g,[["render",C]]);const D=r({setup(){return{formBasicSchema:[{component:"input",value:"",label:"\u7528\u6237\u540D",prop:"name",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",trigger:"blur"}],attrs:{placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"},itemSlot:{append:"haha",prefix:"haha1"},span:12},{component:"input",value:"",label:"\u5BC6\u7801",prop:"password",rules:[{required:!0,message:"\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"},{min:6,max:16,message:"\u5BC6\u7801\u57286-16\u4F4D",trigger:"blur"}],attrs:{placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"},span:12},{component:"select",value:"",prop:"role",label:"\u89D2\u8272",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u89D2\u8272",trigger:"change"}],attrs:{placeholder:"\u8BF7\u9009\u62E9\u89D2\u8272"},children:[{component:"option",label:"\u7BA1\u7406\u5458",value:"admin"},{component:"option",label:"\u7528\u6237",value:"user"},{component:"option",label:"\u6D4B\u8BD5",value:"test"}],span:24},{component:"checkbox-group",value:["1"],prop:"like",label:"\u7231\u597D",rules:[],attrs:{},children:[{component:"checkbox",label:"\u8DB3\u7403",value:"1",attrs:{disabled:!0}},{component:"checkbox",label:"\u7BEE\u7403",value:"2"},{component:"checkbox",label:"\u6E38\u6CF3",value:"3"}],span:12},{component:"radio-group",value:"2",prop:"gender",label:"\u6027\u522B",children:[{component:"radio",label:"\u7537",value:"1"},{component:"radio",label:"\u5973",value:"2"},{component:"radio",label:"\u672A\u77E5",value:"3"}],span:12},{component:"upload",label:"\u56FE\u7247",prop:"file",slot:"upload1",upload:{action:""},span:24},{component:"upload",label:"\u6587\u6863",prop:"file",slot:"upload2",upload:{action:""}},{component:"upload",label:"\u6587\u6863",prop:"file",upload:{type:"button",btnType:"success",text:"\u70B9\u51FB\u4E0A\u4F20",action:""},span:24},{component:"upload",label:"\u56FE\u6807\u4E0A\u4F20",prop:"file",upload:{action:"",type:"icon",onChange:(p,n)=>{}},span:24},{component:v,label:"\u7EC4\u4EF6\u5F15\u7528",prop:"demo",span:24},{component:"innerText",label:"\u7EAF\u6587\u672C",prop:"inner",value:"\u6587\u672C\u5185\u5BB9\u5199\u5728\u8FD9\u91CC",span:24}],radio:F("6")}}}),x={class:"p-4"},A=e("ul",null,[e("li",null,"1.\u4F7F\u7528json\u914D\u7F6E\u8868\u5355\u6240\u6709\u5185\u5BB9"),e("li",null,"2.\u8868\u5355\u9A8C\u8BC1"),e("li",null,"3.\u52A8\u6001\u8868\u5355"),e("li",null,"4.\u96C6\u6210\u7B2C\u4E09\u65B9\u7EC4\u4EF6\uFF1A\u5BCC\u6587\u672C\uFF0Cmarkdown\u7F16\u8F91\u5668\uFF0C\u6269\u5C55\u6027\u597D")],-1),k=o("\u70B9\u51FB\u4E0A\u4F20 slot\u8BBE\u7F6E"),y=o("\u70B9\u51FB\u4E0A\u4F20"),$=e("div",{class:"el-upload__tip"},"jpg/png files with a size less than 500kb",-1),w=o(" \u5BF9\u5E94append "),S=o(" prefix "),j=e("div",{class:"pt-4"},"inline\u8868\u683C",-1),q=e("div",{class:"pb-2"},"\u53EF\u4EE5\u8BBE\u7F6Espan",-1),N=o("\u70B9\u51FB\u4E0A\u4F20 slot\u8BBE\u7F6E"),T=o("\u70B9\u51FB\u4E0A\u4F20"),V=e("div",{class:"el-upload__tip"},"jpg/png files with a size less than 500kb",-1),z=o(" \u5BF9\u5E94append "),G=o(" prefix ");function H(t,p,n,m,_,h){const l=E,s=f,B=b;return c(),d("div",x,[a(B,{header:"\u8868\u5355\u7EC4\u4EF6\u57FA\u7840\u7528\u6CD5"},{default:u(()=>[A,a(s,{schemas:t.formBasicSchema,"label-width":"120px"},{"upload1-trigger":u(()=>[a(l,{type:"primary"},{default:u(()=>[k]),_:1})]),"upload2-trigger":u(()=>[a(l,{type:"primary"},{default:u(()=>[y]),_:1})]),"upload2-tip":u(()=>[$]),haha:u(()=>[w]),haha1:u(()=>[S]),_:1},8,["schemas"]),j,q,a(s,{schemas:t.formBasicSchema,inline:"","label-width":"120px"},{"upload1-trigger":u(()=>[a(l,{type:"primary"},{default:u(()=>[N]),_:1})]),"upload2-trigger":u(()=>[a(l,{type:"primary"},{default:u(()=>[T]),_:1})]),"upload2-tip":u(()=>[V]),haha:u(()=>[z]),haha1:u(()=>[G]),_:1},8,["schemas"])]),_:1})])}var tu=i(D,[["render",H]]);export{tu as default};
