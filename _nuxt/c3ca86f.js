(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{162:function(e,t,o){var content=o(240);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(44).default)("667e16ba",content,!0,{sourceMap:!1})},163:function(e,t,o){var content=o(242);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(44).default)("57fa7ec8",content,!0,{sourceMap:!1})},164:function(e,t,o){var content=o(244);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(44).default)("423c6b44",content,!0,{sourceMap:!1})},181:function(e,t,o){"use strict";var n={components:{treeNode:o(182).default},fetchOnServer:!0,data:function(){return{files:[]}},fetch:function(){}},r=(o(241),o(243),o(22)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"docs_container"},[n("nav",{staticClass:"docs_nav"},[n("nuxt-link",{staticClass:"logo",attrs:{to:"/"}},[n("img",{attrs:{src:o(232)}})]),e._v(" "),e._l(e.files,(function(e){return n("tree-node",{key:e.name,attrs:{"tree-node":e}})}))],2),e._v(" "),n("Nuxt",{staticClass:"docs_article"})],1)}),[],!1,null,"6a52d94c",null);t.a=component.exports},182:function(e,t,o){"use strict";o.r(t);o(235),o(48),o(49),o(183),o(28);var n={name:"TreeNode",props:{treeNode:{type:Object,default:null},level:{type:Number,default:1},url:{type:String,default:""}},data:function(){return{isOpened:this.$route.fullPath.includes("/docs/"+this.url+this.treeNode.name.replaceAll(" ","_"))}},computed:{hasChildren:function(){return Array.isArray(this.treeNode.children)&&this.treeNode.children.length},isActive:function(){return this.$route.fullPath.includes("/docs/"+this.url+this.treeNode.name.replaceAll(" ","_"))}}},r=(o(239),o(22)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:"tree_node level"+e.level+(e.isOpened?" isOpened":""),on:{click:function(t){t.stopPropagation(),t.preventDefault(),e.isOpened=!e.isOpened}}},[e.hasChildren?[n("span",{class:{isActive:e.isActive}},[e._v("\n      "+e._s(e.treeNode.name)+"\n      "),n("span",{directives:[{name:"show",rawName:"v-show",value:e.isOpened,expression:"isOpened"}],staticClass:"icon"},[n("img",{attrs:{src:o(233)}})]),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:!e.isOpened,expression:"!isOpened"}],staticClass:"icon"},[n("img",{attrs:{src:o(234)}})])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.isOpened,expression:"isOpened"}],staticClass:"tree_node_childs"},e._l(e.treeNode.children,(function(t){return n("tree-node",{key:t.name,attrs:{url:e.url+e.treeNode.name.replaceAll(" ","_")+"/","tree-node":t,level:e.level+1}})})),1)]:[n("router-link",{class:{isActive:e.isActive},attrs:{to:"/docs/"+e.url+e.treeNode.name.replaceAll(" ","_")}},[e._v("\n      "+e._s(e.treeNode.name)+"\n    ")])]],2)}),[],!1,null,null,null);t.default=component.exports},184:function(e,t,o){o(185),e.exports=o(186)},230:function(e,t,o){var content=o(231);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(44).default)("1b46c1b8",content,!0,{sourceMap:!1})},231:function(e,t,o){var n=o(43)(!1);n.push([e.i,"/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden],template{display:none}",""]),e.exports=n},232:function(e,t,o){e.exports=o.p+"img/logo_white.5bafb14.svg"},233:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iOSIgdmlld0JveD0iMCAwIDE2IDkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xNS43MDcxIDAuMjkyODkzQzE1LjMxNjYgLTAuMDk3NjMxMSAxNC42ODM0IC0wLjA5NzYzMTEgMTQuMjkyOSAwLjI5Mjg5M0w4IDYuNTg1NzlMMS43MDcxMSAwLjI5Mjg5M0MxLjMxNjU4IC0wLjA5NzYzMTEgMC42ODM0MTcgLTAuMDk3NjMxMSAwLjI5Mjg5MyAwLjI5Mjg5M0MtMC4wOTc2MzE1IDAuNjgzNDE3IC0wLjA5NzYzMTUgMS4zMTY1OCAwLjI5Mjg5MyAxLjcwNzExTDcuMjkyODkgOC43MDcxMUM3LjY4MzQyIDkuMDk3NjMgOC4zMTY1OCA5LjA5NzYzIDguNzA3MTEgOC43MDcxMUwxNS43MDcxIDEuNzA3MTFDMTYuMDk3NiAxLjMxNjU4IDE2LjA5NzYgMC42ODM0MTcgMTUuNzA3MSAwLjI5Mjg5M1oiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="},234:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDkgMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wLjI5Mjg5MyAwLjI5Mjg5M0MtMC4wOTc2MzExIDAuNjgzNDE4IC0wLjA5NzYzMTEgMS4zMTY1OCAwLjI5Mjg5MyAxLjcwNzExTDYuNTg1NzkgOEwwLjI5Mjg5NCAxNC4yOTI5Qy0wLjA5NzYzMDUgMTQuNjgzNCAtMC4wOTc2MzA1IDE1LjMxNjYgMC4yOTI4OTQgMTUuNzA3MUMwLjY4MzQxOCAxNi4wOTc2IDEuMzE2NTggMTYuMDk3NiAxLjcwNzExIDE1LjcwNzFMOC43MDcxMSA4LjcwNzExQzkuMDk3NjMgOC4zMTY1OCA5LjA5NzYzIDcuNjgzNDIgOC43MDcxMSA3LjI5Mjg5TDEuNzA3MTEgMC4yOTI4OTNDMS4zMTY1OCAtMC4wOTc2MzExIDAuNjgzNDE3IC0wLjA5NzYzMTEgMC4yOTI4OTMgMC4yOTI4OTNaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"},239:function(e,t,o){"use strict";o(162)},240:function(e,t,o){var n=o(43)(!1);n.push([e.i,".tree_node_childs{padding-left:1.5rem}.tree_node{cursor:pointer}.tree_node .isActive{border-bottom:2px solid #fff}.level1{margin-top:1.25rem}.level1>a,.level1>span{font-family:Montserrat;font-style:normal;font-weight:600;font-size:1.25rem;line-height:1.6}.level2{margin-top:.75rem}.level2>a,.level2>span{font-family:Montserrat;font-style:normal;font-weight:500;font-size:1rem;line-height:2;margin-top:.75rem}.tree_node a{color:#fff;text-decoration:none}.icon{margin-left:1rem}",""]),e.exports=n},241:function(e,t,o){"use strict";o(163)},242:function(e,t,o){var n=o(43)(!1);n.push([e.i,".logo[data-v-6a52d94c]{margin-bottom:3rem;display:block}.logo[data-v-6a52d94c],.logo img[data-v-6a52d94c]{width:100%}.docs_container[data-v-6a52d94c]{display:flex;height:100%;width:100%;position:absolute;overflow:hidden}.docs_nav[data-v-6a52d94c]{background-color:#262627;max-width:300px;flex:1 1 30%;color:#fff;padding:5rem 2.5rem;box-sizing:border-box}.docs_article[data-v-6a52d94c]{box-sizing:border-box;flex:1 1 70%;padding:5rem 3rem;overflow:auto}",""]),e.exports=n},243:function(e,t,o){"use strict";o(164)},244:function(e,t,o){var n=o(43)(!1);n.push([e.i,".docs_article h1{font-size:2.5rem;line-height:1.4}.docs_article h1,.docs_article h2{font-family:Montserrat;font-style:normal;font-weight:600}.docs_article h2{font-size:1.75rem;line-height:1.14}.docs_article p{font-family:Montserrat;font-style:normal;font-weight:500;font-size:1.25rem;line-height:1.6;color:#000}.docs_article a{color:#000}.docs_article p img{max-width:100%;border-radius:12px}.docs_article pre{overflow:auto}",""]),e.exports=n}},[[184,23,3,24]]]);