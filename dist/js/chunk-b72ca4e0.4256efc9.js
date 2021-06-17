(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b72ca4e0"],{"17c3":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"lend-migrator-container"},[e("back-button"),e("b-container",{staticClass:"text-center"},[e("div",{staticClass:"pt-4 lend-title"},[t._v(t._s(t.$t("dappsMisc.gnt-title")))]),e("div",{staticClass:"d-flex mt-4 mb-1 total-container entire-bal"},[e("p",[t._v(" GNT: "),e("span",{staticClass:"balance"},[t.loading?t._e():e("span",[t._v(t._s(t.lendBalance)+" ")]),t.loading?e("i",{staticClass:"fa fa-spin fa-spinner fa-lg"}):t._e()])]),e("button",{staticClass:"button-link",on:{click:t.setEntireBalance}},[t._v(" "+t._s(t.$t("sendTx.button-entire"))+" ")])]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],attrs:{type:"text",placeholder:t.$t("dappsMisc.total-amount")},domProps:{value:t.amount},on:{input:function(n){n.target.composing||(t.amount=n.target.value)}}}),e("button",{class:["large-round-button-green-filled","mt-3",t.disabled?"disabled":""],on:{click:t.checkAllowance}},[t._v(" "+t._s(t.$t("dappsMisc.migrate"))+" ")])])],1)},o=[],s=(e("b680"),e("96cf"),e("1da1")),i=e("5530"),u=e("572c"),c=[{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,type:"function"},{constant:!0,inputs:[],name:"golemFactory",outputs:[{name:"",type:"address"}],payable:!1,type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,type:"function"},{constant:!1,inputs:[{name:"_master",type:"address"}],name:"setMigrationMaster",outputs:[],payable:!1,type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],payable:!1,type:"function"},{constant:!1,inputs:[{name:"_value",type:"uint256"}],name:"migrate",outputs:[],payable:!1,type:"function"},{constant:!1,inputs:[],name:"finalize",outputs:[],payable:!1,type:"function"},{constant:!1,inputs:[],name:"refund",outputs:[],payable:!1,type:"function"},{constant:!0,inputs:[],name:"migrationMaster",outputs:[{name:"",type:"address"}],payable:!1,type:"function"},{constant:!0,inputs:[],name:"tokenCreationCap",outputs:[{name:"",type:"uint256"}],payable:!1,type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"",type:"uint256"}],payable:!1,type:"function"},{constant:!1,inputs:[{name:"_agent",type:"address"}],name:"setMigrationAgent",outputs:[],payable:!1,type:"function"},{constant:!0,inputs:[],name:"migrationAgent",outputs:[{name:"",type:"address"}],payable:!1,type:"function"},{constant:!0,inputs:[],name:"fundingEndBlock",outputs:[{name:"",type:"uint256"}],payable:!1,type:"function"},{constant:!0,inputs:[],name:"totalMigrated",outputs:[{name:"",type:"uint256"}],payable:!1,type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,type:"function"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:!1,type:"function"},{constant:!0,inputs:[],name:"tokenCreationMin",outputs:[{name:"",type:"uint256"}],payable:!1,type:"function"},{constant:!0,inputs:[],name:"funding",outputs:[{name:"",type:"bool"}],payable:!1,type:"function"},{constant:!0,inputs:[],name:"tokenCreationRate",outputs:[{name:"",type:"uint256"}],payable:!1,type:"function"},{constant:!0,inputs:[],name:"fundingStartBlock",outputs:[{name:"",type:"uint256"}],payable:!1,type:"function"},{constant:!1,inputs:[],name:"create",outputs:[],payable:!0,type:"function"},{inputs:[{name:"_golemFactory",type:"address"},{name:"_migrationMaster",type:"address"},{name:"_fundingStartBlock",type:"uint256"},{name:"_fundingEndBlock",type:"uint256"}],type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,name:"_from",type:"address"},{indexed:!0,name:"_to",type:"address"},{indexed:!1,name:"_value",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"_from",type:"address"},{indexed:!0,name:"_to",type:"address"},{indexed:!1,name:"_value",type:"uint256"}],name:"Migrate",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"_from",type:"address"},{indexed:!1,name:"_value",type:"uint256"}],name:"Refund",type:"event"}],p=e("901e"),r=e.n(p),d=e("2f62"),m=e("ce96"),l=e("1131"),y=e.n(l),f="0xa74476443119A942dE498590Fe1f2454d7D4aC0d",b={components:{"back-button":u["a"]},data:function(){return{amount:0,hasEnoughRatio:!1,lendMigratorContract:"",loading:!1,updatedBalance:0,miningLockout:!1,lendBalance:0}},computed:Object(i["a"])(Object(i["a"])({},Object(d["c"])("main",["web3","account"])),{},{disabled:function(){var t=new r.a(this.amount),n=new r.a(this.lendBalance);return!t.gt(0)||!t.lte(n)}}),mounted:function(){this.getLendBalance()},methods:{checkAllowance:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e=new t.web3.eth.Contract(c,f),t.migrate(e),t.loading=!0;case 3:case"end":return n.stop()}}),n)})))()},getLendBalance:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var e,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e=new t.web3.eth.Contract(c,f),n.next=3,e.methods.balanceOf(t.account.address).call();case 3:a=n.sent,t.lendBalance=new r.a(a).div(new r.a(10).pow(18)).toFixed();case 5:case"end":return n.stop()}}),n)})))()},migrate:function(t){var n=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,o,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=new r.a(n.amount).times(new r.a(10).pow(18)).toFixed(),o=n.web3.utils.numberToHex(a),e.next=4,t.methods.migrate(o).encodeABI();case 4:s=e.sent,i={from:n.account.address,to:f,value:0,data:s},n.miningLockout=!0,n.web3.eth.estimateGas(i).then((function(t){n.loading=!1,n.amount=0,n.web3.eth.sendTransaction({from:n.account.address,to:f,value:0,gas:t,data:s}).then((function(){n.miningLockout=!1,n.amount=0,n.loading=!1,n.getUpdatedBalance()})).catch((function(t){n.loading=!1,n.miningLockout=!1,m["e"].responseHandler(t,m["e"].ERROR)}))}));case 8:case"end":return e.stop()}}),e)})))()},setEntireBalance:function(){this.amount=this.lendBalance},getUpdatedBalance:function(){var t=this;this.getLendBalance();var n=[{constant:!0,inputs:[{name:"_owner",type:"address"}],name:".methodsbalanceOf",outputs:[{name:"",type:"uint256"}],payable:!1,type:"function"}],e=new this.web3.eth.Contract(n,f);e.methods.balanceOf(this.account.address).call().then((function(n){t.updatedBalance=y.a.fromWei(n,"Ether")}))}}},g=b,h=(e("735d"),e("2877")),v=Object(h["a"])(g,a,o,!1,null,"53f55181",null);n["default"]=v.exports},"735d":function(t,n,e){"use strict";var a=e("e899a"),o=e.n(a);o.a},e899a:function(t,n,e){}}]);
//# sourceMappingURL=../sourcemaps/js/chunk-b72ca4e0.4256efc9.js.map