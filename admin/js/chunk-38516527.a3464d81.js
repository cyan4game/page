(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38516527"],{2708:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var i={data:function(){return{tableBoxHeight_:10}},methods:{_tableContentAutoResize:function(){var e=this;if(this.$refs.tableBox){setTimeout((function(){e.tableBoxHeight_=e.$refs.tableBox.clientHeight}),200);var t=0;window.onresize=function(){t&&clearTimeout(t),e.tableBoxHeight_=0,t=setTimeout((function(){e.tableBoxHeight_=e.$refs.tableBox.clientHeight}),200)}}}},mounted:function(){var e=this;setTimeout((function(){e._tableContentAutoResize()}),200)},beforeDestroy:function(){window.onresize=function(){}}}},"3c32":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-body flex-column"},[a("div",{staticClass:"search-box"},[a("div",{staticClass:"search-item"},[a("span",{staticClass:"search-title"},[e._v("输入的搜索项：")]),a("el-input",{staticClass:"search-input",attrs:{size:"mini",placeholder:"请输入",clearable:""},model:{value:e.form.input,callback:function(t){e.$set(e.form,"input",t)},expression:"form.input"}})],1),a("div",{staticClass:"search-item"},[a("span",{staticClass:"search-title"},[e._v("选择项：")]),a("el-select",{staticClass:"search-input",attrs:{size:"mini",placeholder:"请选择",clearable:""},model:{value:e.form.select,callback:function(t){e.$set(e.form,"select",t)},expression:"form.select"}},[a("el-option",{attrs:{value:"1",label:"哈哈"}})],1)],1)]),a("div",{staticClass:"search-box"},[a("div",{staticClass:"search-item"},[a("span",{staticClass:"search-title"},[e._v("选择日期：")]),a("el-date-picker",{staticClass:"search-input",attrs:{size:"mini",type:"date",placeholder:"选择日期",clearable:""},model:{value:e.form.date,callback:function(t){e.$set(e.form,"date",t)},expression:"form.date"}})],1),a("div",{staticClass:"search-item"},[a("span",{staticClass:"search-title"},[e._v("选择项：")]),a("el-select",{staticClass:"search-input",attrs:{size:"mini",placeholder:"请选择",clearable:""},model:{value:e.form.select,callback:function(t){e.$set(e.form,"select",t)},expression:"form.select"}},[a("el-option",{attrs:{value:"1",label:"哈哈"}})],1)],1),a("div",[a("el-button",{attrs:{size:"mini",type:"primary"}},[e._v("查 询")])],1)]),a("div",{ref:"tableBox",staticClass:"table-box flex-1 shadow-box"},[a("el-table",{attrs:{data:e.tableData,"max-height":e.tableBoxHeight_,size:"small",stripe:"",border:""}},[e._l(e.tableConfig,(function(e,t){return a("el-table-column",{key:t,attrs:{fixed:e.fixed,prop:e.prop,label:e.label,"min-width":e.width}})})),a("el-table-column",{attrs:{fixed:"right",label:"操作","min-width":"60"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"mini"},nativeOn:{click:function(a){return a.preventDefault(),e.deleteRow(t.row)}}},[e._v("移除")])]}}])})],2)],1),a("div",{staticClass:"pagination-box"},[a("el-pagination",{attrs:{size:"mini","current-page":e.page.currPage,"page-sizes":[10,20,50,100],"page-size":e.page.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:400}})],1)])},c=[],l=a("2708"),s=[{prop:"a",label:"日期",width:100,fixed:!0},{prop:"b",label:"地址",width:100,fixed:!1},{prop:"c",label:"年龄",width:100,fixed:!1},{prop:"d",label:"工作时间",width:100,fixed:!1},{prop:"e",label:"阿斯顿",width:100,fixed:!1},{prop:"f",label:"阿达啊啊啊",width:100,fixed:!1},{prop:"g",label:"嗷嗷嗷",width:100,fixed:!1}],f={mixins:[l["a"]],data:function(){return{tableConfig:s,form:{input:"",select:"",date:""},page:{currPage:1,pageSize:10},tableData:[{a:"aa1",b:"bbb",c:"ccc",d:"ddd",e:"eeee",f:"fffff",g:"ggggggg"},{a:"aa2",b:"bbb",c:"ccc",d:"ddd",e:"eeee",f:"fffff",g:"ggggggg"},{a:"aa3",b:"bbb",c:"ccc",d:"ddd",e:"eeee",f:"fffff",g:"ggggggg"},{a:"aa4",b:"bbb",c:"ccc",d:"ddd",e:"eeee",f:"fffff",g:"ggggggg"},{a:"aa5",b:"bbb",c:"ccc",d:"ddd",e:"eeee",f:"fffff",g:"ggggggg"},{a:"aa6",b:"bbb",c:"ccc",d:"ddd",e:"eeee",f:"fffff",g:"ggggggg"},{a:"aa7",b:"bbb",c:"ccc",d:"ddd",e:"eeee",f:"fffff",g:"ggggggg"},{a:"aa8",b:"bbb",c:"ccc",d:"ddd",e:"eeee",f:"fffff",g:"ggggggg"},{a:"aa9",b:"bbb",c:"ccc",d:"ddd",e:"eeee",f:"fffff",g:"ggggggg"},{a:"aa0",b:"bbb",c:"ccc",d:"ddd",e:"eeee",f:"fffff",g:"ggggggg"},{a:"aa11",b:"bbb",c:"ccc",d:"ddd",e:"eeee",f:"fffff",g:"ggggggg"},{a:"aa12",b:"bbb",c:"ccc",d:"ddd",e:"eeee",f:"fffff",g:"ggggggg"}]}},methods:{deleteRow:function(e){console.log(e)}}},g=f,o=a("2877"),n=Object(o["a"])(g,i,c,!1,null,null,null);t["default"]=n.exports}}]);
//# sourceMappingURL=chunk-38516527.a3464d81.js.map