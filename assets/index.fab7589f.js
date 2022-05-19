import{e as _,b2 as F,B as C,_ as f,o as s,c as E,a as o,T as x,k as B,t as m,P as w,j as d,I as D,G as b,V as h,b as t,w as v,c0 as g}from"./index.60668d32.js";import{E as q}from"./el-card.5676392f.js";var A=(u=>(u.Up="up",u.Down="down",u.Equal="equal",u))(A||{});const i=["#f43f5e","#333","#10b981"],S=_({name:"Trend",props:{type:{type:String,default:"equal"},text:{type:String,default:""},bold:{type:Boolean,default:!1},reverse:{type:Boolean,default:!1},colors:{type:Array,default:()=>[...i]},sync:{type:Boolean,default:!1},textColors:{type:Array,default:()=>[]},icon:{type:String,default:""}},setup(u){const{reverse:a,type:l,colors:n,sync:c,textColors:y}=F(u);function e(){let r;return c.value?r=a.value?[...i].reverse():n.value:r=y.value,l.value==="up"?r[0]:l.value==="down"?r[2]:r[1]}function p(){let r;return c.value?r=a.value?[...i].reverse():n.value:r=n.value,l.value==="up"?r[0]:l.value==="down"?r[2]:r[1]}return{TrendDirection:A,getTextColor:e,getIconColor:p,trendsColors:C(()=>a.value?[...i].reverse():n.value)}}}),$={class:"inline-flex items-center"};function k(u,a,l,n,c,y){const e=h;return s(),E("div",$,[o("div",{class:"text-sm mr-1",style:w({color:u.getTextColor()||"auto"})},[x(u.$slots,"default",{},()=>[B(m(u.text),1)])],4),u.icon?(s(),d(e,{key:0,type:u.icon,color:u.getIconColor()},null,8,["type","color"])):(s(),E(D,{key:1},[u.type===u.TrendDirection.Up?(s(),d(e,{key:0,type:u.bold?"ArrowUpBold":"ArrowUp",color:u.trendsColors[0]?u.trendsColors[0]:"red"},null,8,["type","color"])):u.type===u.TrendDirection.Down?(s(),d(e,{key:1,type:u.bold?"ArrowDownBold":"ArrowDown",color:u.trendsColors[2]?u.trendsColors[2]:"green"},null,8,["type","color"])):u.type===u.TrendDirection.Equal?(s(),d(e,{key:2,type:u.bold?"SemiSelect":"Minus",color:u.trendsColors[1]?u.trendsColors[1]:"gray"},null,8,["type","color"])):b("",!0)],64))])}var U=f(S,[["render",k]]);const T=_({setup(){return{}}}),V={class:"p-4"},I={class:"pb-4"},N=o("div",null,"\u9ED8\u8BA4\u7528\u6CD5\uFF1A",-1),j={class:"pb-4"},z=o("div",null,"\u81EA\u5B9A\u4E49\u63D2\u69FD\uFF1A",-1),G=B("\u81EA\u5B9A\u4E49\u63D2\u69FD"),M={class:"pb-4"},P=o("div",null,"\u81EA\u5B9A\u4E49\u989C\u8272\uFF0C\u683C\u5F0F\u662F[up, equal, down]",-1),R={class:"pb-4"},H=o("div",null,"reverse\u989C\u8272(\u53EA\u5728\u9ED8\u8BA4\u989C\u8272\u4E0B\u53EF\u4EE5\u4F7F\u7528)\uFF1A",-1),J={class:"pb-4"},K=o("div",null,"\u540C\u6B65\u6587\u5B57\u989C\u8272\uFF0C\u4F7F\u7528sync\u5173\u952E\u8BCD\uFF1A",-1),L={class:"pb-4"},O=o("div",null,"\u81EA\u5B9A\u4E49\u6587\u5B57\u989C\u8272\uFF0C\u683C\u5F0F\u662F[up, equal, down]\uFF1A",-1),Q={class:"pb-4"},W=o("div",null,"\u81EA\u5B9A\u4E49Icon\uFF1A",-1);function X(u,a,l,n,c,y){const e=U,p=g,r=q;return s(),E("div",V,[t(r,{header:"\u8D8B\u52BF\u663E\u793A\u5668"},{default:v(()=>[o("div",I,[N,t(e,{type:"up",text:"\u4E0A\u5347"}),t(e,{type:"down",text:"\u4E0B\u964D"}),t(e,{type:"equal",text:"\u6301\u5E73"})]),o("div",j,[z,t(e,{type:"up"},{default:v(()=>[G]),_:1})]),o("div",M,[P,t(e,{type:"up",text:"\u4E0A\u5347",bold:"",colors:["purple","gray","blue"]}),t(e,{type:"down",text:"\u4E0B\u964D",colors:["","","gray"]}),t(e,{type:"equal",text:"\u6301\u5E73",colors:["","blue",""]})]),o("div",R,[H,t(e,{type:"up",text:"\u4E0A\u5347",reverse:""}),t(e,{type:"down",text:"\u4E0B\u964D",reverse:""}),t(e,{type:"equal",text:"\u6301\u5E73",reverse:""})]),o("div",J,[K,t(e,{type:"up",text:"\u4E0A\u5347",sync:""}),t(e,{type:"down",text:"\u4E0B\u964D",sync:""}),t(e,{type:"equal",text:"\u6301\u5E73",sync:""}),t(p,{direction:"vertical",class:"px-2"}),t(e,{type:"up",text:"\u4E0A\u5347",reverse:"",sync:""}),t(e,{type:"down",text:"\u4E0B\u964D",reverse:"",sync:""}),t(e,{type:"equal",text:"\u6301\u5E73",reverse:"",sync:""})]),o("div",L,[O,t(e,{type:"up",text:"\u4E0A\u5347","text-colors":["blue"]}),t(e,{type:"down",text:"\u4E0B\u964D","text-colors":["","","#333"]}),t(e,{type:"equal",text:"\u6301\u5E73","text-colors":["","red",""]})]),o("div",Q,[W,t(e,{type:"up",text:"\u4E0A\u5347",icon:"SortUp"}),t(e,{type:"down",text:"\u4E0B\u964D",icon:"Bottom"}),t(e,{type:"equal",text:"\u6301\u5E73",icon:"Bowl"}),t(p,{direction:"vertical"}),t(e,{type:"up",text:"\u4E0A\u5347",icon:"SortUp",colors:["purple","gray","blue"]}),t(e,{type:"down",text:"\u4E0B\u964D",icon:"Bottom",colors:["","","gray"]}),t(e,{type:"equal",text:"\u6301\u5E73",icon:"SortUp",colors:["","blue",""]}),t(p,{direction:"vertical"}),t(e,{type:"up",text:"\u4E0A\u5347","text-colors":["blue"],icon:"SortUp"}),t(e,{type:"down",text:"\u4E0B\u964D","text-colors":["","","#333"],icon:"Bottom"}),t(e,{type:"equal",text:"\u6301\u5E73","text-colors":["","red",""]})])]),_:1})])}var ee=f(T,[["render",X]]);export{ee as default};
