(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-70424a46"],{1347:function(s,e,a){},"22d9":function(s,e,a){"use strict";a("1347")},"73cf":function(s,e,a){"use strict";a.r(e);var o=a("cdae"),i=a("86d5"),t=a.n(i),n=a("ae46"),r=a.n(n),c=a("f9df"),l=a.n(c),m=a("ed4c"),u=a.n(m),p=a("7fbd"),d=a.n(p),v={data:function(){return{imgs:{bg:t.a,video:r.a,logo:l.a,sponsor:u.a,service:d.a},remember:!1,showPass:!0,form:{username:"",password:"",surePass:""}}},components:{Icon:o.a},methods:{jump:function(s){this.$router.push({name:s})}}},f=(a("22d9"),a("2877")),h=Object(f.a)(v,(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("div",{staticClass:"page-login"},[a("div",{staticClass:"login-bg-video login-box",style:{backgroundImage:"url("+s.imgs.bg+")"}},[a("video",{attrs:{autoplay:"",loop:"",muted:""},domProps:{muted:!0}},[a("source",{attrs:{src:s.imgs.video,type:"video/mp4"}})])]),a("div",{staticClass:"login-box login-form"},[a("img",{staticClass:"login-logo",attrs:{src:s.imgs.logo,alt:"logo"}}),a("img",{staticClass:"login-sponsor",attrs:{src:s.imgs.sponsor,alt:"sponsor"}}),a("div",{staticClass:"login-content"},[a("div",{staticClass:"login-item"},[a("div",{staticClass:"input-icon"},[a("Icon",{staticClass:"input-icon-item",attrs:{icon:"iconzhanghao"}})],1),a("input",{directives:[{name:"model",rawName:"v-model",value:s.form.username,expression:"form.username"}],staticClass:"input-item",attrs:{placeholder:"用户名",type:"text"},domProps:{value:s.form.username},on:{input:function(e){e.target.composing||s.$set(s.form,"username",e.target.value)}}})]),a("div",{staticClass:"login-item"},[a("div",{staticClass:"input-icon"},[a("Icon",{staticClass:"input-icon-item",attrs:{icon:"iconmima"}})],1),"checkbox"==(s.showPass?"text":"password")?a("input",{directives:[{name:"model",rawName:"v-model",value:s.form.password,expression:"form.password"}],staticClass:"input-item",attrs:{placeholder:"密码",type:"checkbox"},domProps:{checked:Array.isArray(s.form.password)?s._i(s.form.password,null)>-1:s.form.password},on:{change:function(e){var a=s.form.password,o=e.target,i=!!o.checked;if(Array.isArray(a)){var t=s._i(a,null);o.checked?t<0&&s.$set(s.form,"password",a.concat([null])):t>-1&&s.$set(s.form,"password",a.slice(0,t).concat(a.slice(t+1)))}else s.$set(s.form,"password",i)}}}):"radio"==(s.showPass?"text":"password")?a("input",{directives:[{name:"model",rawName:"v-model",value:s.form.password,expression:"form.password"}],staticClass:"input-item",attrs:{placeholder:"密码",type:"radio"},domProps:{checked:s._q(s.form.password,null)},on:{change:function(e){return s.$set(s.form,"password",null)}}}):a("input",{directives:[{name:"model",rawName:"v-model",value:s.form.password,expression:"form.password"}],staticClass:"input-item",attrs:{placeholder:"密码",type:s.showPass?"text":"password"},domProps:{value:s.form.password},on:{input:function(e){e.target.composing||s.$set(s.form,"password",e.target.value)}}}),a("div",{staticClass:"input-tail",on:{click:function(e){s.showPass=!s.showPass}}},[a("Icon",{directives:[{name:"show",rawName:"v-show",value:s.showPass,expression:"showPass"}],staticClass:"input-icon-item",attrs:{icon:"iconxianshimima"}}),a("Icon",{directives:[{name:"show",rawName:"v-show",value:!s.showPass,expression:"!showPass"}],staticClass:"input-icon-item",attrs:{icon:"iconyincangmima"}})],1)]),a("div",{staticClass:"login-item"},[a("div",{staticClass:"input-icon"},[a("Icon",{staticClass:"input-icon-item",attrs:{icon:"iconmima"}})],1),"checkbox"==(s.showPass?"text":"password")?a("input",{directives:[{name:"model",rawName:"v-model",value:s.form.surePass,expression:"form.surePass"}],staticClass:"input-item",attrs:{placeholder:"确认密码",type:"checkbox"},domProps:{checked:Array.isArray(s.form.surePass)?s._i(s.form.surePass,null)>-1:s.form.surePass},on:{change:function(e){var a=s.form.surePass,o=e.target,i=!!o.checked;if(Array.isArray(a)){var t=s._i(a,null);o.checked?t<0&&s.$set(s.form,"surePass",a.concat([null])):t>-1&&s.$set(s.form,"surePass",a.slice(0,t).concat(a.slice(t+1)))}else s.$set(s.form,"surePass",i)}}}):"radio"==(s.showPass?"text":"password")?a("input",{directives:[{name:"model",rawName:"v-model",value:s.form.surePass,expression:"form.surePass"}],staticClass:"input-item",attrs:{placeholder:"确认密码",type:"radio"},domProps:{checked:s._q(s.form.surePass,null)},on:{change:function(e){return s.$set(s.form,"surePass",null)}}}):a("input",{directives:[{name:"model",rawName:"v-model",value:s.form.surePass,expression:"form.surePass"}],staticClass:"input-item",attrs:{placeholder:"确认密码",type:s.showPass?"text":"password"},domProps:{value:s.form.surePass},on:{input:function(e){e.target.composing||s.$set(s.form,"surePass",e.target.value)}}}),a("div",{staticClass:"input-tail",on:{click:function(e){s.showPass=!s.showPass}}},[a("Icon",{directives:[{name:"show",rawName:"v-show",value:s.showPass,expression:"showPass"}],staticClass:"input-icon-item",attrs:{icon:"iconxianshimima"}}),a("Icon",{directives:[{name:"show",rawName:"v-show",value:!s.showPass,expression:"!showPass"}],staticClass:"input-icon-item",attrs:{icon:"iconyincangmima"}})],1)]),a("div",{staticClass:"login-item"}),a("div",{staticClass:"login-else"},[a("label",{on:{click:function(e){s.remember=!s.remember}}},[a("Icon",{directives:[{name:"show",rawName:"v-show",value:!s.remember,expression:"!remember"}],staticClass:"login-icon",attrs:{icon:"iconcheckbox_uncheck"}}),a("Icon",{directives:[{name:"show",rawName:"v-show",value:s.remember,expression:"remember"}],staticClass:"login-icon icon-checked",attrs:{icon:"iconcheckbox_checked"}}),s._m(0)],1)]),a("div",{staticClass:"login-item login-btn",class:s.form.username&&s.form.password&&s.form.surePass?"":"unuse-btn",on:{click:function(e){return s.jump("Home")}}},[s._v("注册")]),a("div",{staticClass:"login-else",on:{click:function(e){return s.jump("Login")}}},[s._m(1),a("span",{staticClass:"login-link"},[s._v("先去逛逛")])]),a("div",{staticClass:"login-serve"},[a("img",{attrs:{src:s.imgs.service,alt:"service"}}),a("span",{staticClass:"login-link"},[s._v("联系客服")])])])])])}),[function(){var s=this.$createElement,e=this._self._c||s;return e("span",{staticClass:"login-link"},[this._v(" 我已阅读并同意 "),e("span",{staticClass:"login-link link-regist"},[this._v("相关条款和隐私政策")])])},function(){var s=this.$createElement,e=this._self._c||s;return e("span",{staticClass:"login-link"},[this._v(" 已有账号？ "),e("span",{staticClass:"login-link link-regist"},[this._v("请登录")])])}],!1,null,"3bb0bc90",null);e.default=h.exports},"7fbd":function(s,e,a){s.exports=a.p+"img/icon-online-service.6b73e5a3.svg"},"86d5":function(s,e,a){s.exports=a.p+"img/bg.aeffce07.jpg"},ae46:function(s,e,a){s.exports=a.p+"media/video.8e7069a6.mp4"},ed4c:function(s,e,a){s.exports=a.p+"img/sponsor.e9161975.png"},f9df:function(s,e,a){s.exports=a.p+"img/login_logo.edf0f95c.svg"}}]);