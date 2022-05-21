import{_ as v,e as f,bQ as m,o as E,c as h,b as u,w as r,a as d,k as g,t as k,bR as B,bS as _,n as F}from"./index.f506b9ca.js";import{E as y}from"./el-card.5dca9a68.js";import{_ as w}from"./index.f0caea77.js";import"./BasicTransition.5f8f8b23.js";import"./el-descriptions-item.402c8116.js";import"./el-col.f45d7079.js";const b=f({setup(){const{pkg:e,lastBuildTime:a}={pkg:{dependencies:{"@element-plus/icons-vue":"^1.1.4","@milkdown/core":"^6.0.2","@milkdown/exception":"6.0.2","@milkdown/plugin-clipboard":"6.0.2","@milkdown/plugin-cursor":"6.0.2","@milkdown/plugin-diagram":"6.0.2","@milkdown/plugin-emoji":"6.0.2","@milkdown/plugin-history":"6.0.2","@milkdown/plugin-indent":"6.0.2","@milkdown/plugin-listener":"6.0.2","@milkdown/plugin-math":"6.0.2","@milkdown/plugin-menu":"6.0.2","@milkdown/plugin-prism":"6.0.2","@milkdown/plugin-slash":"6.0.2","@milkdown/plugin-tooltip":"6.0.2","@milkdown/plugin-upload":"6.0.2","@milkdown/preset-commonmark":"6.0.2","@milkdown/preset-gfm":"6.0.2","@milkdown/prose":"6.0.2","@milkdown/theme-nord":"6.0.2","@milkdown/vue":"6.0.2","@toast-ui/editor":"^3.1.5","@toast-ui/editor-plugin-code-syntax-highlight":"^3.0.0","@vue/runtime-core":"^3.2.33","@vueuse/core":"^8.4.2","@zxcvbn-ts/core":"^2.0.1","@zxcvbn-ts/language-common":"^2.0.1","animate.css":"^4.1.1",axios:"^0.27.2","big-integer":"^1.6.51",cropperjs:"^1.5.12","crypto-js":"^4.1.1",dayjs:"^1.11.2","driver.js":"^0.9.8",echarts:"^5.3.2","element-plus":"^2.2.0","good-storage":"^1.1.1",gsap:"^3.10.4",katex:"^0.15.3","lodash-es":"^4.17.21",mwutil:"^1.3.3",papaparse:"^5.3.2","path-browserify":"^1.0.1",pinia:"^2.0.14",pinyin:"^2.11.2","print-js":"^1.6.0",prismjs:"^1.28.0",qrcode:"^1.5.0","resize-observer-polyfill":"^1.5.1",vditor:"^3.8.13",vue:"^3.2.33","vue-echarts":"^6.0.2","vue-i18n":"9.2.0-beta.35","vue-router":"^4.0.15","vxe-table":"^4.2.4-beta.2","xe-utils":"^3.5.4",xlsx:"^0.18.5"},devDependencies:{"@babel/core":"^7.17.10","@commitlint/cli":"^16.2.4","@commitlint/config-conventional":"^16.2.4","@iconify/json":"^2.1.40","@iconify/vue":"^3.2.1","@intlify/vite-plugin-vue-i18n":"^3.4.0","@milkdown/design-system":"^6.0.2","@types/lodash-es":"^4.17.6","@typescript-eslint/eslint-plugin":"^5.23.0","@typescript-eslint/parser":"^5.23.0","@vitejs/plugin-vue":"^2.3.2","@vitejs/plugin-vue-jsx":"^1.3.10",autoprefixer:"^10.4.7",commitizen:"^4.2.4","conventional-changelog-cli":"^2.2.2",dotenv:"^16.0.1",eslint:"^8.15.0","eslint-config-prettier":"^8.5.0","eslint-plugin-prettier":"^4.0.0","eslint-plugin-vue":"^8.7.1",esno:"^0.16.3","fs-extra":"^10.1.0",husky:"^8.0.1","lint-staged":"^12.4.1",mockjs:"^1.1.0",picocolors:"^1.0.0",postcss:"^8.4.13","postcss-html":"^1.4.1","postcss-scss":"^4.0.4",prettier:"^2.6.2",rimraf:"^3.0.2",rollup:"^2.72.1","rollup-plugin-visualizer":"^5.6.0",sass:"^1.51.0",stylelint:"^14.8.2","stylelint-config-prettier":"^9.0.3","stylelint-config-recess-order":"^3.0.0","stylelint-config-recommended-vue":"^1.4.0","stylelint-config-standard":"^25.0.0","stylelint-config-standard-scss":"^3.0.0","stylelint-order":"^5.0.0","stylelint-scss":"^4.2.0",typescript:"^4.6.4","unplugin-auto-import":"^0.7.1","unplugin-icons":"^0.14.3","unplugin-vue-components":"^0.19.5",vite:"^2.9.8","vite-plugin-html":"^3.2.0","vite-plugin-mock":"^2.9.6","vite-plugin-svg-icons":"^2.0.1","vite-plugin-windicss":"^1.8.4","vue-eslint-parser":"^8.3.0","vue-tsc":"^0.34.12",windicss:"^3.5.2"},name:"vue-toimc-admin",version:"1.0.0-alpha.2"},lastBuildTime:"2022-05-21 06:59:28"},{dependencies:s,devDependencies:l,name:p,version:c}=e,t=[],i=[],o=[{label:"\u7248\u672C",field:c},{label:"\u6700\u540E\u7F16\u8BD1\u65F6\u95F4",field:a},{label:"\u6587\u6863\u5730\u5740",field:{link:B,text:"\u70B9\u51FB\u9884\u89C8"}},{label:"\u9884\u89C8\u5730\u5740",field:{link:_,text:"\u70B9\u51FB\u8BBF\u95EE"}},{label:"Github",field:{link:m,text:"\u70B9\u51FB\u8BBF\u95EE"}}];return Object.keys(s).forEach(n=>{t.push({field:s[n],label:n})}),Object.keys(l).forEach(n=>{i.push({field:l[n],label:n})}),{name:p,GITHUB_URL:m,infoSchema:o,schema:t,devSchema:i}}}),x={class:"p-4"},C={class:"flex justify-between items-center"},j={class:"flex-1"},D=g("\u662F\u4E00\u4E2A\u57FA\u4E8EVue3.0\u3001Vite\u3001 Element Plus 2.x \u3001TypeScript\u7684\u7BA1\u7406\u540E\u53F0\u89E3\u51B3\u65B9\u6848\uFF0C\u76EE\u6807\u662F\u4E3A\u4E2D\u5927\u578B\u9879\u76EE\u5F00\u53D1\uFF0C\u63D0\u4F9B\u73B0\u6210\u7684\u5F00\u7BB1\u89E3\u51B3\u65B9\u6848\u53CA\u4E30\u5BCC\u7684\u793A\u4F8B\uFF0C\u540C\u65F6\u5F00\u6E90\u7248\u672C\u4E0D\u4F1A\u9650\u5236\u4EFB\u4F55\u4EE3\u7801\u7528\u4E8E\u5546\u7528\u3002 ");function S(e,a,s,l,p,c){const t=F,i=w,o=y;return E(),h("div",x,[u(o,null,{header:r(()=>[d("div",C,[d("span",j,[u(t,{underline:!1,type:"primary",href:e.GITHUB_URL,target:"_blank"},{default:r(()=>[g(k(e.name),1)]),_:1},8,["href"]),D])])]),default:r(()=>[u(i,{title:"\u9879\u76EE\u603B\u89C8",items:e.infoSchema},null,8,["items"]),u(i,{title:"\u9879\u76EE\u4F9D\u8D56",items:e.schema,collapse:""},null,8,["items"]),u(i,{title:"\u5F00\u53D1\u4F9D\u8D56",items:e.devSchema},null,8,["items"])]),_:1})])}var V=v(b,[["render",S]]);export{V as default};