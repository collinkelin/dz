(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9868affc"],{"0b94":function(t,a,i){"use strict";var e=i("da56"),s=i.n(e);s.a},"15d8":function(t,a,i){"use strict";i.r(a);var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"PageBox",style:2==t.infoData.o_status&&"padding-bottom: 44px"},[t.infoData?i("div",{staticClass:"ScrollBox"},[i("div",{staticClass:"Details"},[i("dl",[i("dd",[i("label",[t._v(t._s(t.$t("audit.info[1]"))+"：")]),i("span",[t._v(t._s(t.infoData.title))])]),i("dd",[i("label",[t._v(t._s(t.$t("audit.info[2]"))+"：")]),i("span",[t._v(t._s(t.InitData.currency)),i("i",[t._v(t._s(t.infoData.reward_price))])])]),i("dd",{staticStyle:{"padding-top":"0","justify-content":"space-between"}},[i("em",[t._v(t._s(t.infoData.y_surplus_number)+t._s(t.$t("audit.info[3]")))]),i("em",[t._v(t._s(t.$t("audit.info[4]",{num:t.infoData.surplus_number})))])]),i("dd",{staticStyle:{"border-top":"1px #2d3446 solid","padding-top":"13px"}},[i("label",[t._v(t._s(t.$t("audit.info[5]"))+"：")]),i("span",[t._v(t._s(t.infoData.content))])]),i("dd",[i("label",[t._v(t._s(t.$t("audit.info[6]"))+"：")]),i("span",[t._v(t._s(t.infoData.link_info))])]),i("dd",[i("label",[t._v(t._s(t.$t("audit.info[7]"))+"：")]),i("div",{staticStyle:{display:"flex","flex-wrap":"wrap"}},t._l(t.infoData.examine_demo,(function(a,e){return i("van-image",{key:e,attrs:{fit:"cover",width:"49",src:""+t.ApiUrl+a},on:{click:function(i){return t.$ImagePreview([""+t.ApiUrl+a])}}})})),1)])]),i("dl",[i("dt",{staticStyle:{"justify-content":"flex-start"}},[i("label",[i("img",{staticStyle:{"border-radius":"100%","vertical-align":"middle","margin-right":"10px"},attrs:{src:"./static/head/"+t.infoData.j_header,height:"40"}})]),i("span",[i("p",[t._v(t._s(t.$t("audit.info[8]")))]),i("div",{staticStyle:{display:"flex","justify-content":"space-between","align-items":"center"}},[t._v(t._s(t.infoData.j_username)+" "),i("em",{staticStyle:{color:"#999","font-size":"12px"}},[t._v(t._s(t.infoData.add_time)+" "+t._s(t.$t("audit.info[9]")))])])])]),i("dd",{staticStyle:{"border-top":"1px #2d3446 solid","padding-top":"13px"}},[i("label",[t._v(t._s(t.$t("audit.info[10]"))+"：")]),i("span",{class:"state"+t.infoData.o_status},[t._v(t._s(t.infoData.o_status_dec))])]),1!=t.infoData.o_status?i("dd",[i("label",[t._v(t._s(t.$t("audit.info[11]"))+"：")]),t.infoData.o_examine_demo.length?i("div",t._l(t.infoData.o_examine_demo,(function(a,e){return i("van-image",{key:e,attrs:{fit:"cover",width:"49",height:"49",src:""+t.ApiUrl+a},on:{click:function(i){return t.$ImagePreview([""+t.ApiUrl+a])}}})})),1):i("span",[t._v(t._s(t.$t("audit.info[12]")))])]):t._e(),6!=t.infoData.o_status?i("dd",[i("label",[t._v(t._s(t.$t("audit.info[13]"))+"：")]),i("span",[t._v(t._s(t.infoData.trial_time))])]):t._e()])])]):t._e(),t.isLoad?i("van-loading",{staticClass:"DataLoad",attrs:{size:"60px",vertical:""}},[t._v(t._s(t.$t("audit.info[14]")))]):t._e(),2==t.infoData.o_status?i("div",{staticStyle:{position:"fixed",bottom:"0",width:"100%",display:"flex","align-items":"center","justify-content":"space-between",padding:"10px 5px"}},[i("van-button",{staticStyle:{"font-size":"14px",flex:"1",margin:"0 5px"},attrs:{type:"warning",size:"small"},on:{click:function(a){return t.onSubmit(5)}}},[t._v(t._s(t.$t("audit.info[15]")))]),i("van-button",{staticStyle:{"font-size":"14px",flex:"1",margin:"0 5px"},attrs:{type:"primary",size:"small"},on:{click:function(a){return t.onSubmit(2)}}},[t._v(t._s(t.$t("audit.info[16]")))]),i("van-button",{staticStyle:{"font-size":"14px",flex:"1",margin:"0 5px"},attrs:{color:"#aaa",size:"small"},on:{click:function(a){return t.onSubmit(4)}}},[t._v(t._s(t.$t("audit.info[17]")))]),i("van-button",{staticStyle:{"font-size":"14px",flex:"1",margin:"0 5px"},attrs:{type:"danger",size:"small"},on:{click:function(a){return t.onSubmit(3)}}},[t._v(t._s(t.$t("audit.info[18]")))])],1):t._e(),i("van-dialog",{staticClass:"SiteDialog",attrs:{title:t.$t("audit.info[19]"),"show-cancel-button":"","close-on-popstate":"","close-on-click-overlay":""},on:{confirm:t.confirmSubmit,closed:function(a){t.auditRemarks=""}},model:{value:t.showDialog,callback:function(a){t.showDialog=a},expression:"showDialog"}},[i("van-field",{staticStyle:{padding:"16px"},attrs:{"label-width":"70",rows:"1",autosize:"",label:t.$t("audit.info[20]")+":",type:"textarea",placeholder:t.$t("audit.info[21]"),autosize:{maxHeight:50},clearable:""},model:{value:t.auditRemarks,callback:function(a){t.auditRemarks=a},expression:"auditRemarks"}})],1)],1)},s=[],n={name:"Show",components:{},props:["auditId"],data(){return{isLoad:!0,infoData:"",showDialog:!1,auditRemarks:"",currState:2}},computed:{},watch:{},created(){this.$parent.navBarTitle=this.$t("audit.info[0]"),this.getTaskinfo()},mounted(){},activated(){},destroyed(){},methods:{getTaskinfo(){this.$Model.TaskOrderInfo(this.auditId,t=>{this.isLoad=!1,1==t.code&&(this.infoData=t.info)})},onSubmit(t){switch(this.currState=t,this.showDialog=!0,t){case 2:this.auditRemarks=this.$t("audit.info[22]");break;case 3:this.auditRemarks=this.$t("audit.info[23]");break;case 4:this.auditRemarks=this.$t("audit.info[24]");break;case 5:this.auditRemarks=this.$t("audit.info[25]");break}},confirmSubmit(){this.$Model.AuditTask({order_id:this.auditId,handle_remarks:this.auditRemarks,status:this.currState},t=>{1==t.code&&this.getTaskinfo()})}}},o=n,d=(i("0b94"),i("2877")),l=Object(d["a"])(o,e,s,!1,null,"5576fd0c",null);a["default"]=l.exports},da56:function(t,a,i){}}]);