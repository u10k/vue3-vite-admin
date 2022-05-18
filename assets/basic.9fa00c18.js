import{_ as v,e as I,dN as n,o as t,c as i,b as e,w as a,I as c,H as g,c0 as T,j as A,M as B,k as y,t as C,a as S,n as q,P as $}from"./index.cc2010c8.js";import{E as N}from"./el-card.050e696c.js";import{E as V,a as X}from"./el-table-column.e6e53acb.js";import"./el-checkbox.80ec6f3d.js";import{_ as L}from"./TCard.bf01a1c2.js";import{_ as M}from"./index.113268b2.js";import"./TransitionList.c3539cbd.js";import"./BasicTransition.fd6f7a02.js";import"./el-descriptions-item.7815980e.js";import"./el-col.80f9da36.js";const j=I({setup(){const l=n.mock({list:[{label:"\u53D6\u8D27\u5355\u53F7\uFF1A",field:/\d{10}/},{label:"\u72B6\u6001\uFF1A","field|1":["\u5DF2\u53D6\u8D27","\u672A\u53D6\u8D27","\u9000\u6B3E\u5904\u7406\u4E2D","\u9000\u8D27\u4E2D"]},{label:"\u9500\u552E\u5355\u53F7\uFF1A",field:/\d{10}/},{label:"\u5B50\u8BA2\u5355\uFF1A",field:/\d{10}/}]}).list,p=n.mock({list:[{label:"\u7528\u6237\u59D3\u540D\uFF1A",field:"@cname"},{label:"\u8054\u7CFB\u7535\u8BDD\uFF1A",field:/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/},{label:"\u5E38\u7528\u5FEB\u9012\uFF1A","field|1":["\u83DC\u9E1F\u4ED3\u50A8","\u7533\u901A","\u5706\u901A","\u4E2D\u901A","\u97F5\u8FBE","\u987A\u4E30","\u6781\u5154"]},{label:"\u53D6\u8D27\u5730\u5740\uFF1A",field:"@county(true) XXX\u793E\u533A\u5FEB\u9012\u4EE3\u6536\u70B9"},{label:"\u5907\u6CE8\uFF1A",field:"\u65E0"}]}).list,d=n.mock({list:[{code:/\d{9}/,name:"\u77FF\u6CC9\u6C34550ml",barcode:/\d{17}/,price:"2.00",quantity:"1",amount:"2"},{code:/\d{9}/,name:"\u767D\u8C61\u9999\u6D53\u9AA8\u6C64\u9762",barcode:/\d{17}/,price:"2.50",quantity:"2",amount:"5"},{code:/\d{9}/,name:"\u91D1\u9523\u706B\u817F\u80A010\u652F\u88C5",barcode:/\d{17}/,price:"12.00",quantity:"1",amount:"12"},{code:"123456003",name:"\u53EF\u53E3\u53EF\u4E50550ml",barcode:"12421432143214323",price:"3.00",quantity:"2",amount:"6"},{code:"\u603B\u8BA1",name:"",barcode:"",price:"",quantity:"6",amount:"25"}]}).list,m=[{lable:"\u5546\u54C1\u7F16\u53F7",align:"center",type:"link"},{prop:"name",lable:"\u5546\u54C1\u540D\u79F0",align:"center"},{prop:"barcode",lable:"\u5546\u54C1\u6761\u7801",align:"center"},{prop:"price",lable:"\u5355\u4EF7",align:"center"},{prop:"quantity",lable:"\u6570\u91CF\uFF08\u4EF6\uFF09",align:"center",width:"150"},{prop:"amount",lable:"\u91D1\u989D",align:"center"}],F=n.mock({list:[{time:"2022-01-12 16:30",progress:"\u8054\u7CFB\u5BA2\u6237",status:"\u8FDB\u884C\u4E2D",userId:"\u53D6\u8D27\u5458 ID1234",useTime:"5mins"},{time:"2022-01-12 16:25",progress:"\u53D6\u8D27\u5458\u51FA\u53D1",status:"\u6210\u529F",userId:"\u53D6\u8D27\u5458 ID1234",useTime:"5mins"},{time:"2022-01-12 16:20",progress:"\u53D6\u8D27\u5458\u63A5\u5355",status:"\u6210\u529F",userId:"\u7CFB\u7EDF",useTime:"5mins"},{time:"2022-01-12 15:15",progress:"\u7533\u8BF7\u5BA1\u6279\u901A\u8FC7",status:"\u6210\u529F",userId:"\u7528\u6237",useTime:"1h"}]}).list;return{infoSchema:l,userSchema:p,tableData:d,columns:m,tableData2:F,columns2:[{prop:"time",lable:"\u65F6\u95F4",align:"center"},{prop:"progress",lable:"\u5F53\u524D\u8FDB\u5EA6",align:"center"},{lable:"\u72B6\u6001",align:"center",type:"status"},{prop:"userId",lable:"\u64CD\u4F5C\u5458ID",align:"center"},{prop:"useTime",lable:"\u8017\u65F6",align:"center"}]}}});function H(l,p,d,m,F,h){const _=M,D=L,o=T,k=q,b=V,f=X,E=N,w=$;return t(),i(c,null,[e(D,null,{default:a(()=>[e(_,{title:"\u9000\u6B3E\u7533\u8BF7",items:l.infoSchema,border:!1,collapse:!1},null,8,["items"])]),_:1}),e(o),e(D,null,{default:a(()=>[e(_,{title:"\u7528\u6237\u4FE1\u606F",items:l.userSchema,border:!1,collapse:!1},null,8,["items"])]),_:1}),e(o),e(E,{header:"\u9000\u8D27\u5546\u54C1"},{default:a(()=>[e(f,{data:l.tableData,stripe:"",style:{width:"100%"},"table-layout":"auto"},{default:a(()=>[(t(!0),i(c,null,g(l.columns,(u,s)=>(t(),A(b,{key:s,prop:u.prop?u.prop:"",align:u.align?u.align:"left",label:u.lable?u.lable:"",width:u.width?u.width:""},B({_:2},[u.type==="link"?{name:"default",fn:a(r=>[e(k,{type:"primary",underline:!1},{default:a(()=>[y(C(r.row.code),1)]),_:2},1024)])}:void 0]),1032,["prop","align","label","width"]))),128))]),_:1},8,["data"])]),_:1}),e(o),e(E,{header:"\u9000\u8D27\u8FDB\u5EA6"},{default:a(()=>[e(f,{data:l.tableData2,stripe:"",style:{width:"100%"},"table-layout":"auto"},{default:a(()=>[(t(!0),i(c,null,g(l.columns2,(u,s)=>(t(),A(b,{key:s,prop:u.prop?u.prop:"",align:u.align?u.align:"left",label:u.lable?u.lable:""},B({_:2},[u.type==="status"?{name:"default",fn:a(r=>[S("span",null,[e(w,{style:{"vertical-align":"middle"},type:"SuccessFilled",color:"green"}),y(" "+C(r.row.status),1)])])}:void 0]),1032,["prop","align","label"]))),128))]),_:1},8,["data"])]),_:1})],64)}var W=v(j,[["render",H],["__scopeId","data-v-2f638120"]]);export{W as default};
