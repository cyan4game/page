(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5768804a"],{2708:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var a={data:function(){return{tableBoxHeight_:10}},methods:{_tableContentAutoResize:function(){var e=this;if(this.$refs.tableBox){setTimeout((function(){e.tableBoxHeight_=e.$refs.tableBox.clientHeight}),200);var t=0;window.onresize=function(){t&&clearTimeout(t),e.tableBoxHeight_=0,t=setTimeout((function(){e.tableBoxHeight_=e.$refs.tableBox.clientHeight}),200)}}}},mounted:function(){var e=this;setTimeout((function(){e._tableContentAutoResize()}),200)},beforeDestroy:function(){window.onresize=function(){}}}},ff8d:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"page-body flex-column"},[i("div",{staticClass:"search-box"},[i("el-button",{attrs:{size:"mini",type:"warning"}},[e._v("导 出")]),i("el-button",{attrs:{size:"mini",type:"primary"},on:{click:e.addRow}},[e._v("添加部门")])],1),i("div",{ref:"tableBox",staticClass:"table-box flex-1 shadow-box"},[i("el-table",{attrs:{data:e.tableData,"max-height":e.tableBoxHeight_,size:"small",stripe:"",border:""}},[e._l(e.tableConfig,(function(e,t){return i("el-table-column",{key:t,attrs:{fixed:e.fixed,prop:e.prop,label:e.label,"min-width":e.width}})})),i("el-table-column",{attrs:{fixed:"right",label:"操作","min-width":"60"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{attrs:{type:"text",size:"mini"},nativeOn:{click:function(i){return i.preventDefault(),e.editRow(t.row)}}},[e._v("编辑")]),i("el-button",{staticStyle:{color:"#F56C6C"},attrs:{type:"text",size:"mini"},nativeOn:{click:function(i){return i.preventDefault(),e.deleteRow(t.row)}}},[e._v("删除")])]}}])})],2)],1),i("Dialog",{ref:"dialog"})],1)},o=[],f=i("2708"),n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-dialog",{attrs:{title:e.title,visible:e.show,width:"40rem"},on:{"update:visible":function(t){e.show=t}}},[i("el-form",{attrs:{model:e.form}},[i("el-form-item",{attrs:{size:"mini",label:"部门名称","label-width":e.formLabelWidth}},[i("el-input",{attrs:{size:"mini",autocomplete:"off"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),i("el-form-item",{attrs:{size:"mini",label:"部门标识","label-width":e.formLabelWidth}},[i("el-input",{attrs:{size:"mini",autocomplete:"off"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),i("el-form-item",{attrs:{size:"mini",label:"管理者","label-width":e.formLabelWidth}},[i("el-input",{attrs:{size:"mini",autocomplete:"off"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),i("el-form-item",{attrs:{size:"mini",label:"登录密码","label-width":e.formLabelWidth}},[i("el-input",{attrs:{type:"password",size:"mini",autocomplete:"off"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{size:"mini"},on:{click:function(t){e.show=!1}}},[e._v("取 消")]),i("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){e.show=!1}}},[e._v("确 定")])],1)],1)},l=[],c={data:function(){return{title:"",show:!1,form:{},formLabelWidth:"8rem"}},methods:{open:function(e){this.show=!0,this.title=e?"编辑部门":"添加部门"}}},r=c,d=i("2877"),g=Object(d["a"])(r,n,l,!1,null,null,null),s=g.exports,b=[{prop:"a",label:"ID",width:60,fixed:!0},{prop:"b",label:"部门名称",width:75,fixed:!1},{prop:"c",label:"部门标识",width:75,fixed:!1},{prop:"d",label:"管理员",width:75,fixed:!1},{prop:"e",label:"代理人数",width:75,fixed:!1},{prop:"f",label:"注册人数",width:75,fixed:!1},{prop:"g",label:"开通时间",width:120,fixed:!1},{prop:"h",label:"上月收入",width:75,fixed:!1}],u={mixins:[f["a"]],data:function(){return{tableConfig:b,tableData:[{a:"aa1",b:"bbb",c:"ccc",d:"ddd",e:"eeee",f:"fffff",g:"ggggggg"},{a:"aa2",b:"bbb",c:"ccc",d:"ddd",e:"eeee",f:"fffff",g:"ggggggg"},{a:"aa3",b:"bbb",c:"ccc",d:"ddd",e:"eeee",f:"fffff",g:"ggggggg"},{a:"aa4",b:"bbb",c:"ccc",d:"ddd",e:"eeee",f:"fffff",g:"ggggggg"},{a:"aa5",b:"bbb",c:"ccc",d:"ddd",e:"eeee",f:"fffff",g:"ggggggg"},{a:"aa6",b:"bbb",c:"ccc",d:"ddd",e:"eeee",f:"fffff",g:"ggggggg"},{a:"aa7",b:"bbb",c:"ccc",d:"ddd",e:"eeee",f:"fffff",g:"ggggggg"},{a:"aa8",b:"bbb",c:"ccc",d:"ddd",e:"eeee",f:"fffff",g:"ggggggg"},{a:"aa9",b:"bbb",c:"ccc",d:"ddd",e:"eeee",f:"fffff",g:"ggggggg"},{a:"aa0",b:"bbb",c:"ccc",d:"ddd",e:"eeee",f:"fffff",g:"ggggggg"},{a:"aa11",b:"bbb",c:"ccc",d:"ddd",e:"eeee",f:"fffff",g:"ggggggg"},{a:"aa12",b:"bbb",c:"ccc",d:"ddd",e:"eeee",f:"fffff",g:"ggggggg"}]}},components:{Dialog:s},methods:{addRow:function(){this.$refs.dialog.open()},editRow:function(e){console.log(e),this.$refs.dialog.open(e)},deleteRow:function(e){this.$confirm("此操作将永久删除该记录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){console.log(e)})).catch((function(){}))}}},m=u,p=Object(d["a"])(m,a,o,!1,null,null,null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-5768804a.ebb985f0.js.map