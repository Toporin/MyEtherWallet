(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4019a96b"],{5845:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-row",{attrs:{"align-content":"stretch"}},[a("b-col",{staticClass:"mb-4",attrs:{cols:"12",xl:"6",lg:"6",md:"6"}},[a("card",{attrs:{title:t.$t("dappsMCDMaker.manage-your-vault"),text:t.$t("dappsMCDMaker.transfer-cdp-description"),button:"Go",click:t.goToManage,loading:!t.makerActive,"loading-msg":t.loadingMessage}})],1),a("b-col",{staticClass:"mb-4",attrs:{cols:"12",xl:"6",lg:"6",md:"6"}},[a("card",{attrs:{title:t.$t("dappsMCDMaker.create-a-vault"),text:t.$t("dappsMCDMaker.create-vault-description"),button:"Go",click:t.gotoCreate,loading:!t.makerActive,"loading-msg":t.loadingMessage}})],1),a("b-col",{staticClass:"mb-4",attrs:{cols:"12",xl:"6",lg:"6",md:"6"}},[a("card",{attrs:{title:t.$t("dappsMCDMaker.dai-savings"),text:t.$t("dappsMCDMaker.deposit-dai"),button:"Go",click:t.goToSave}})],1)],1)],1)},i=[],r=(a("caad"),a("2532"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[t.loading?a("div",{staticClass:"loading-sign"},[a("b-spinner",{staticStyle:{width:"4rem",height:"4rem"},attrs:{variant:"primary"}}),a("div",{staticClass:"font-weight-bolder mt-3"},[t._v(" "+t._s(t.loadingMsg)+" ")])],1):t._e(),a("b-card",{staticClass:"the-card",class:t.loading?"card-disabled":"",attrs:{title:t.title}},[a("b-card-text",{staticClass:"mb-3"},[t._v(" "+t._s(t.text)+" ")]),a("div",{staticClass:"flex-grow-1"}),a("b-button",{staticClass:"font-weight-bold",attrs:{variant:"primary",block:""},on:{click:t.click}},[t._v(t._s(t.button))])],1)],1)}),n=[],o={props:{title:{type:String,default:""},text:{type:String,default:""},button:{type:String,default:""},click:{type:Function,default:function(){}},loading:{type:Boolean,default:!1},loadingMsg:{type:String,default:""}},data:function(){return{}}},c=o,d=(a("c5fb"),a("2877")),l=Object(d["a"])(c,r,n,!1,null,"8853e46c",null),u=l.exports,h={components:{card:u},props:{cdps:{type:Array,default:function(){return[]}},cdpsWithoutProxy:{type:Array,default:function(){return[]}},makerActive:{type:Boolean,default:!1},loadingState:{type:String,default:"none"}},data:function(){return{}},computed:{loadingMessage:function(){return this.$t(this.loadingState)},hasCdps:function(){return this.cdps.length>0},showManage:function(){return this.listCdps||this.cdps.length>=1&&this.cdpsWithoutProxy.length>=1},listCdps:function(){return this.cdps.length>1||this.cdpsWithoutProxy.length>1}},methods:{gotoCreate:function(){this.$route.path.includes("maker-dai")&&(this.makerActive?(this.activeValues=this.systemValues,this.$router.push({name:"create"})):(this.$emit("proceedtoCreateOrManage"),this.$emit("setAfterLoadPage","CREATE"),this.$router.push({name:"makerLoading"})))},gotoLoading:function(){this.$emit("proceedtoCreateOrManage"),this.makerActive?this.goToManage():this.$router.push({name:"makerLoading"})},goToSave:function(){this.$route.path.includes("maker-dai")&&this.$router.push({name:"save"})},goToManage:function(){this.$route.path.includes("maker-dai")&&(this.makerActive?1===this.cdps.length?this.$router.push({name:"manage",params:{cdpId:this.cdps[0]}}):1===this.cdpsWithoutProxy.length?this.$router.push({name:"migrate",params:{cdpId:this.cdpsWithoutProxy[0]}}):this.showManage?this.$router.push({name:"select"}):this.gotoCreate():(this.$emit("proceedtoCreateOrManage"),this.$emit("setAfterLoadPage","MANAGE"),this.$router.push({name:"makerLoading"})))}}},p=h,g=Object(d["a"])(p,s,i,!1,null,"8626a7cc",null),m=g.exports;e["default"]=m},c5fb:function(t,e,a){"use strict";var s=a("c7dd"),i=a.n(s);i.a},c7dd:function(t,e,a){}}]);
//# sourceMappingURL=../sourcemaps/js/chunk-4019a96b.ec0e5f6a.js.map