(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a4328f2"],{"4bcb":function(t,e,s){},"72e8":function(t,e,s){"use strict";s("4bcb")},b129:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"problem"},[s("div",{},[s("p",{staticClass:"title"},[t._v(t._s(t.$t("language.help")))]),s("ul",{staticClass:"content"},t._l(t.problemList,(function(e,i){return s("li",{key:i,staticClass:"flexList"},[s("div",{staticClass:"item"},[t._v(t._s(e.questionTypeName))]),s("div",{staticClass:"right"},t._l(e.faqList,(function(e,i){return s("p",{key:i,staticClass:"listname",on:{click:function(s){return t.openDateil(e)}}},[t._v(" "+t._s(e.questionTitle)+" ")])})),0)])})),0)])])},n=[],a={data:function(){return{problemList:[]}},created:function(){var t=this;this.$http.post(this.$api.getProblemList).then((function(e){console.log(e),0==e.code&&(t.problemList=e.data)}))},methods:{openDateil:function(t){this.$store.commit("setProblems",t),this.$router.push("/help")}}},o=a,c=(s("72e8"),s("2877")),l=Object(c["a"])(o,i,n,!1,null,"5a0c2e24",null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-5a4328f2.d98a50f8.js.map