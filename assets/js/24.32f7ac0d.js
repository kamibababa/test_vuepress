(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{313:function(t,a,e){},345:function(t,a,e){"use strict";e(313)},373:function(t,a,e){"use strict";e.r(a);var s={data:()=>({pageData:null,isStructuring:!0,appointDir:{}}),created(){this.getPageData();const t=this.$themeConfig.sidebar;t&&"auto"!==t||(this.isStructuring=!1,console.error("目录页数据依赖于结构化的侧边栏数据，请在主题设置中将侧边栏字段设置为'structuring'，否则无法获取目录数据。"))},methods:{getPageData(){const t=this.$frontmatter.pageComponent;t&&t.data?this.pageData={...t.data,title:this.$frontmatter.title}:console.error("请在front matter中设置pageComponent和pageComponent.data数据")},getCatalogueList(){const{sidebar:t}=this.$site.themeConfig,{data:a}=this.$frontmatter.pageComponent;let e=(a.path||a.key).split("/"),s=t[`/${e[0]}/`];return e.length>1&&(e.shift(),s=this.appointDirDeal(0,e,s)),s||console.error("未获取到目录数据，请查看front matter中设置的path是否正确。"),s},type:t=>Object.prototype.toString.call(t).match(/\[object (.*?)\]/)[1].toLowerCase(),appointDirDeal(t,a,e){let s=a[t];void 0!==s&&-1!==s.indexOf(".")&&(s=s.substring(s.indexOf(".")+1));for(let i=0;i<e.length;i++)e[i].title===s&&(this.appointDir=e[i],t<a.length-1&&this.appointDirDeal(t+1,a,e[i].children));return this.appointDir.children}},watch:{"$route.path"(){this.getPageData()}}},i=(e(345),e(14)),n=Object(i.a)(s,(function(){var t=this,a=t._self._c;return a("div",{staticClass:"theme-vdoing-content"},[a("div",{staticClass:"column-wrapper"},[t.pageData.imgUrl?a("img",{attrs:{src:t.$withBase(t.pageData.imgUrl)}}):t._e(),t._v(" "),a("dl",{staticClass:"column-info"},[a("dt",{staticClass:"title"},[t._v(t._s(t.pageData.title))]),t._v(" "),a("dd",{staticClass:"description",domProps:{innerHTML:t._s(t.pageData.description)}})])]),t._v(" "),t.isStructuring?a("div",{staticClass:"catalogue-wrapper"},[a("div",{staticClass:"catalogue-title"},[t._v("目录")]),t._v(" "),a("div",{staticClass:"catalogue-content"},[t._l(t.getCatalogueList(),(function(e,s){return["array"===t.type(e)?a("dl",{key:s,staticClass:"inline"},[a("dt",[a("router-link",{attrs:{to:e[2]}},[t._v(t._s(`${s+1}. ${e[1]}`)+"\n              "),e[3]?a("span",{staticClass:"title-tag"},[t._v("\n                "+t._s(e[3])+"\n              ")]):t._e()])],1)]):"object"===t.type(e)?a("dl",{key:s},[a("dt",{attrs:{id:t.anchorText=e.title}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"+t.anchorText}},[t._v("#")]),t._v("\n            "+t._s(`${s+1}. ${e.title}`)+"\n          ")]),t._v(" "),a("dd",[t._l(e.children,(function(e,i){return["array"===t.type(e)?[a("router-link",{key:i,attrs:{to:e[2]}},[t._v(t._s(`${s+1}-${i+1}. ${e[1]}`)+"\n                  "),e[3]?a("span",{staticClass:"title-tag"},[t._v("\n                    "+t._s(e[3])+"\n                  ")]):t._e()])]:"object"===t.type(e)?a("div",{key:i,staticClass:"sub-cat-wrap"},[a("div",{staticClass:"sub-title",attrs:{id:t.anchorText=e.title}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"+t.anchorText}},[t._v("#")]),t._v("\n                  "+t._s(`${s+1}-${i+1}. ${e.title}`)+"\n                ")]),t._v(" "),t._l(e.children,(function(e,n){return a("router-link",{key:`${s+1}-${i+1}-${n+1}`,attrs:{to:e[2]}},[t._v("\n                  "+t._s(`${s+1}-${i+1}-${n+1}. ${e[1]}`)+"\n                  "),e[3]?a("span",{staticClass:"title-tag"},[t._v("\n                    "+t._s(e[3])+"\n                  ")]):t._e()])}))],2):t._e()]}))],2)]):t._e()]}))],2)]):t._e()])}),[],!1,null,"f12ba5ac",null);a.default=n.exports}}]);