(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-4487e93f"],{2443:function(t,s,a){},9207:function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAeBAMAAAAx/khmAAAAElBMVEUAAABBRlVDRlVBR1VDRlZCSVeUJ4zyAAAABnRSTlMA/lfjUEnRZxQvAAAAPklEQVQY02OAAmdTBhhgEhSGsxWBbLiwoAhCWFABISxEVWFHhDCDIUIYwUaoQeiFm0kzCRGMMEGEFSIMcQIAhAwIrWCTJvEAAAAASUVORK5CYII="},a31f:function(t,s,a){"use strict";a("2443")},da77:function(t,s,a){"use strict";a.r(s);var i=a("e326"),n=a("78a3"),e=a.n(n),r=a("b893"),l=a("1881"),c=l.a.i18n.t.bind(l.a.i18n),o={data:function(){return{headerList:[{name:c("交易详情"),url:"TransInfo"}],imgs:{copy:e.a}}},components:{ComHeaderTab:i.a},methods:{copyNum:function(){Object(r.a)("ZPY20210312165519LFEUC")}}},u=(a("fbf9"),a("2877")),v=Object(u.a)(o,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"trans-info"},[a("ComHeaderTab",{attrs:{list:t.headerList}}),a("div",{staticClass:"trans-info-header"}),a("div",{staticClass:"trans-num"},[t._v("$1000.00")]),a("div",{staticClass:"flex-row trans-item"},[a("div",{staticClass:"trans-title"},[t._v(t._s(t.$t("交易类型")))]),a("div",{staticClass:"trans-info"},[t._v("存款")])]),a("div",{staticClass:"flex-row trans-item"},[a("div",{staticClass:"trans-title"},[t._v(t._s(t.$t("交易方式")))]),a("div",{staticClass:"trans-info"},[t._v("虚拟币充值")])]),a("div",{staticClass:"flex-row trans-item"},[a("div",{staticClass:"trans-title"},[t._v(t._s(t.$t("虚拟币种类")))]),a("div",{staticClass:"trans-info"},[t._v("USDT")])]),a("div",{staticClass:"flex-row trans-item"},[a("div",{staticClass:"trans-title"},[t._v(t._s(t.$t("协议")))]),a("div",{staticClass:"trans-info"},[t._v("ERC20")])]),a("div",{staticClass:"flex-row trans-item"},[a("div",{staticClass:"trans-title"},[t._v(t._s(t.$t("状态")))]),a("div",{staticClass:"trans-info"},[t._v("待确认")])]),a("div",{staticClass:"flex-row trans-item"},[a("div",{staticClass:"trans-title"},[t._v(t._s(t.$t("交易时间")))]),a("div",{staticClass:"trans-info trans-mini"},[t._v("2021-03-12 16:55:20")])]),a("div",{staticClass:"flex-row trans-item"},[a("div",{staticClass:"trans-title"},[t._v(t._s(t.$t("订单号码")))]),a("div",{staticClass:"trans-info trans-mini"},[t._v("ZPY20210312165519LFEUC "),a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.imgs.copy,expression:"imgs.copy"}],staticClass:"copy-trans-num",on:{click:t.copyNum}})])]),a("div",{staticClass:"trans-help"},[t._v(" "+t._s(t.$t("如需帮助，请"))),a("span",[t._v(" "+t._s(t.$t("联系客服")))])])],1)}),[],!1,null,"680432a2",null);s.default=v.exports},e326:function(t,s,a){"use strict";a("b0c0");var i=a("9207"),n=a.n(i),e={props:{list:{default:[]}},computed:{currRoute:function(){return this.$router.currentRoute.name}},data:function(){return{imgs:{left:n.a}}},methods:{goUrl:function(t){t!=this.currRoute&&this.$router.push({name:t})},goBack:function(){this.$router.go(-1)}}},r=(a("a31f"),a("2877")),l=Object(r.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"flex-row header-tab"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.imgs.left,expression:"imgs.left"}],staticClass:"go-back",on:{click:t.goBack}}),a("div",{staticClass:"flex-1 flex-row header-tabs",class:t.list.length<=1?"flex-start":""},t._l(t.list,(function(s,i){return a("span",{key:i,class:t.currRoute==s.url?"active-router":"",on:{click:function(a){return t.goUrl(s.url)}}},[t._v(t._s(s.name))])})),0)])}),[],!1,null,"bf22fc60",null);s.a=l.exports},e516:function(t,s,a){},fbf9:function(t,s,a){"use strict";a("e516")}}]);