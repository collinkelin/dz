(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b34228a0"],{5104:function(t,a,s){"use strict";(function(t){a["a"]={name:"PostTask",components:{},props:["taskId"],data(){return{taskType:[],taskTips:"",levelOptions:[],showCalendar:!1,fileList:[],conditionArr:[],showSteps:!1,stepData:[{img:[],describe:""}],postData:{task_class:0,title:"",content:"",reward_price:1,total_number:"",person_time:1,total_price:0,link_info:"",task_level:1,end_time:"",finish_condition:"",examine_demo:"",task_step:[]}}},computed:{},watch:{},created(){this.$parent.navBarTitle=this.$t("postTask.navBar.title"),this.taskType=this.InitData.taskclasslist.flatMap(t=>[{text:t.group_name,value:t.group_id}]),this.levelOptions=this.InitData.UserGradeList.flatMap(t=>[{text:t.name,value:t.grade}]),this.taskId?this.$Model.GetTaskinfo(this.taskId,t=>{1==t.code&&(this.postData={id:this.taskId,task_class:t.info.task_class,title:t.info.title,content:t.info.content,reward_price:Number(t.info.reward_price),total_number:Number(t.info.total_number),person_time:Number(t.info.person_time),total_price:Number(t.info.total_price)+Number(t.info.total_price)*this.UserInfo.pump,link_info:t.info.link_info,task_level:t.info.task_level,end_time:t.info.end_time,finish_condition:t.info.finish_condition||"",examine_demo:t.info.examine_demo||"",task_step:t.info.task_step||[]},this.taskTips=this.InitData.taskclasslist.find(a=>a.group_id==t.info.task_class).group_info,this.conditionArr=t.info.finish_condition||[],this.fileList=t.info.examine_demo?t.info.examine_demo.flatMap(t=>[{url:this.ApiUrl+t}]):[],this.stepData=t.info.task_step?t.info.task_step.flatMap(t=>[{img:[{url:this.ApiUrl+t.img}],describe:t.describe}]):[])}):(this.taskTips=this.InitData.taskclasslist[0].group_info,this.postData.task_class=this.InitData.taskclasslist[0].group_id,this.postData.task_level=this.InitData.UserGradeList[0].grade)},mounted(){},activated(){},destroyed(){},methods:{changeDropdown(t){this.taskTips=this.InitData.taskclasslist.find(a=>a.group_id==t).group_info},onConfirm(t){this.showCalendar=!1,this.postData.end_time=this.$Util.DateFormat("YY-MM-DD",t)},afterRead(t){t.status="uploading",t.message=this.$t("upload[0]"),this.uploadImgs(t)},uploadImgs(t){if(!t.file.type.match(/image/))return t.status="failed",void(t.message=this.$t("upload[1]"));this.$Util.CompressImg(t.file.type,t.content,750,a=>{let s=new FormData;s.append("token",localStorage["Token"]),s.append("type",3),s.append("image",a,t.file.name),this.$Model.UploadImg(s,a=>{1==a.code?(t.message=this.$t("upload[2]"),t.status="success",t.url=a.url):(t.status="failed",t.message=this.$t("upload[3]"))})})},minusSteps(){1==this.stepData.length&&this.$Dialog.Toast(this.$t("postTask.tips[2]")),this.stepData.length>1&&this.stepData.pop()},pushSteps(){10==this.stepData.length&&this.$Dialog.Toast(this.$t("postTask.tips[3]")),this.stepData.length<10&&this.stepData.push({img:[],describe:""})},totalPrice(){this.postData.total_price=this.postData.reward_price*this.postData.total_number+this.postData.reward_price*this.postData.total_number*this.UserInfo.pump},onSubmit(){const a=this.stepData.findIndex(t=>!t.img.length)+1;a?this.postData.task_step=[]:(this.postData.task_step=[],this.stepData.forEach(t=>{this.postData.task_step.push({img:t.img[0].url.replace(this.ApiUrl,""),describe:t.describe})})),this.postData.title?this.postData.reward_price?this.postData.reward_price<1?this.$Dialog.Toast(this.$t("postTask.field[3].error[1]")):this.postData.total_number?this.postData.person_time?this.postData.total_price?this.postData.link_info?this.postData.end_time?this.postData.task_step.length?(this.conditionArr.length?this.postData.finish_condition=this.conditionArr:this.postData.finish_condition="",this.fileList.length?this.postData.examine_demo=this.fileList.flatMap(t=>t.url.replace(this.ApiUrl,"")):this.postData.examine_demo="",this.$Model.PostTask(this.postData,a=>{1==a.code&&(this.taskId?(this.postData={task_class:this.InitData.taskclasslist[0].group_id,title:"",content:"",reward_price:1,total_number:"",person_time:1,total_price:0,link_info:"",task_level:1,end_time:"",finish_condition:"",examine_demo:"",task_step:[]},this.conditionArr=[],this.fileList=[],this.stepData=[{img:[],describe:""}],t(".ScrollBox")[0].scrollTop=0):this.$router.go(-1))})):this.$Dialog.Toast(this.$t("postTask.field[12].error")):this.$Dialog.Toast(this.$t("postTask.field[9].error")):this.$Dialog.Toast(this.$t("postTask.field[7].error")):this.$Dialog.Toast(this.$t("postTask.field[6].error")):this.$Dialog.Toast(this.$t("postTask.field[5].error")):this.$Dialog.Toast(this.$t("postTask.field[4].error")):this.$Dialog.Toast(this.$t("postTask.field[3].error[0]")):this.$Dialog.Toast(this.$t("postTask.field[1].error"))}}}}).call(this,s("1157"))},"552f":function(t,a,s){},6940:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"PageBox",staticStyle:{"padding-bottom":"54px"}},[s("div",{staticClass:"ScrollBox"},[s("van-form",{attrs:{"label-width":"70"}},[s("van-field",{staticClass:"m0",attrs:{label:t.$t("postTask.field[0].label"),border:!1}},[s("van-dropdown-menu",{attrs:{slot:"input"},slot:"input"},[s("van-dropdown-item",{attrs:{options:t.taskType},on:{change:t.changeDropdown},model:{value:t.postData.task_class,callback:function(a){t.$set(t.postData,"task_class",a)},expression:"postData.task_class"}})],1)],1),s("van-divider",{staticClass:"m0",staticStyle:{"font-size":"12px"},attrs:{"content-position":"left"}},[t._v(t._s(t.taskTips))]),s("van-field",{attrs:{border:!1,label:t.$t("postTask.field[1].label"),placeholder:t.$t("postTask.field[1].placeholder")},model:{value:t.postData.title,callback:function(a){t.$set(t.postData,"title","string"===typeof a?a.trim():a)},expression:"postData.title"}}),s("van-field",{attrs:{border:!1,rows:"1",autosize:"",label:t.$t("postTask.field[2].label"),type:"textarea",placeholder:t.$t("postTask.field[2].placeholder")},model:{value:t.postData.content,callback:function(a){t.$set(t.postData,"content","string"===typeof a?a.trim():a)},expression:"postData.content"}}),s("van-field",{attrs:{border:!1,type:"number",label:t.$t("postTask.field[3].label"),placeholder:t.$t("postTask.field[3].placeholder")},on:{input:t.totalPrice},scopedSlots:t._u([{key:"right-icon",fn:function(){return[t._v(t._s(t.$t("postTask.field[3].right")))]},proxy:!0}]),model:{value:t.postData.reward_price,callback:function(a){t.$set(t.postData,"reward_price","string"===typeof a?a.trim():a)},expression:"postData.reward_price"}}),s("van-field",{attrs:{border:!1,type:"digit",label:t.$t("postTask.field[4].label"),placeholder:t.$t("postTask.field[4].placeholder")},on:{input:t.totalPrice},model:{value:t.postData.total_number,callback:function(a){t.$set(t.postData,"total_number","string"===typeof a?a.trim():a)},expression:"postData.total_number"}}),s("van-field",{attrs:{border:!1,type:"digit",label:t.$t("postTask.field[5].label"),placeholder:t.$t("postTask.field[5].placeholder")},scopedSlots:t._u([{key:"right-icon",fn:function(){return[t._v(t._s(t.$t("postTask.field[5].right")))]},proxy:!0}]),model:{value:t.postData.person_time,callback:function(a){t.$set(t.postData,"person_time","string"===typeof a?a.trim():a)},expression:"postData.person_time"}}),s("van-field",{attrs:{border:!1,label:t.$t("postTask.field[6].label"),readonly:""},model:{value:t.postData.total_price,callback:function(a){t.$set(t.postData,"total_price",a)},expression:"postData.total_price"}}),s("van-field",{attrs:{border:!1,label:t.$t("postTask.field[7].label"),placeholder:t.$t("postTask.field[7].placeholder")},model:{value:t.postData.link_info,callback:function(a){t.$set(t.postData,"link_info","string"===typeof a?a.trim():a)},expression:"postData.link_info"}}),s("van-field",{attrs:{label:t.$t("postTask.field[8].label"),border:!1}},[s("van-dropdown-menu",{attrs:{slot:"input"},slot:"input"},[s("van-dropdown-item",{attrs:{options:t.levelOptions},model:{value:t.postData.task_level,callback:function(a){t.$set(t.postData,"task_level",a)},expression:"postData.task_level"}})],1)],1),s("van-field",{attrs:{border:!1,label:t.$t("postTask.field[9].label"),placeholder:t.$t("postTask.field[9].placeholder"),readonly:""},on:{click:function(a){t.showCalendar=!0}},model:{value:t.postData.end_time,callback:function(a){t.$set(t.postData,"end_time",a)},expression:"postData.end_time"}}),s("van-field",{attrs:{border:!1,label:t.$t("postTask.field[10].label")},scopedSlots:t._u([{key:"input",fn:function(){return[s("van-checkbox-group",{model:{value:t.conditionArr,callback:function(a){t.conditionArr=a},expression:"conditionArr"}},t._l(t.InitData.authenticationList,(function(a,e){return s("van-checkbox",{key:e,attrs:{name:e}},[t._v(t._s(a))])})),1)]},proxy:!0}])}),s("van-field",{attrs:{label:t.$t("postTask.field[11].label")},scopedSlots:t._u([{key:"input",fn:function(){return[s("van-uploader",{staticClass:"Example",attrs:{"max-count":"4","image-fit":"contain","after-read":t.afterRead},model:{value:t.fileList,callback:function(a){t.fileList=a},expression:"fileList"}})]},proxy:!0}])}),s("van-field",{attrs:{border:!1,label:t.$t("postTask.field[12].label"),placeholder:t.$t("postTask.field[12].placeholder"),readonly:"","is-link":""},on:{click:function(a){t.showSteps=!0}}}),s("i18n",{staticClass:"Tips",attrs:{path:"postTask.tips[0]",tag:"div",places:{pump:t.UserInfo.pump,price:t.postData.total_price}}},[s("br",{attrs:{place:"br"}}),s("router-link",{attrs:{place:"url",to:"/user/recharge"}},[t._v(t._s(t.$t("postTask.tips[1]")))])],1)],1)],1),s("div",{staticStyle:{position:"fixed",bottom:"5px",left:"10px",right:"10px"}},[s("van-button",{staticStyle:{"font-size":"16px"},attrs:{block:"",type:"danger"},on:{click:t.onSubmit}},[t._v(t._s(t.$t("postTask.button")))])],1),s("van-calendar",{attrs:{"show-confirm":!1},on:{confirm:t.onConfirm},model:{value:t.showCalendar,callback:function(a){t.showCalendar=a},expression:"showCalendar"}}),s("van-popup",{staticStyle:{height:"100%",width:"100%","background-color":"#E78D7A",overflow:"hidden"},attrs:{position:"right"},model:{value:t.showSteps,callback:function(a){t.showSteps=a},expression:"showSteps"}},[s("div",{staticClass:"PageBox"},[s("van-nav-bar",{attrs:{fixed:"",border:!1,title:t.$t("postTask.step.title"),"right-text":t.$t("postTask.step.right")},on:{"click-right":function(a){t.showSteps=!1}}}),s("div",{staticClass:"ScrollBox"},[t._l(t.stepData,(function(a,e){return s("van-cell",{key:e,staticClass:"Steps",scopedSlots:t._u([{key:"icon",fn:function(){return[s("i",{staticClass:"tag"},[t._v(t._s(e+1))])]},proxy:!0},{key:"title",fn:function(){return[s("van-uploader",{attrs:{"image-fit":"contain","after-read":t.afterRead,"max-count":1},model:{value:a.img,callback:function(s){t.$set(a,"img",s)},expression:"item.img"}})]},proxy:!0}],null,!0)},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:a.describe,expression:"item.describe"}],attrs:{rows:"2",placeholder:t.$t("postTask.step.placeholder")},domProps:{value:a.describe},on:{input:function(s){s.target.composing||t.$set(a,"describe",s.target.value)}}})])})),s("div",{staticStyle:{"text-align":"center",padding:"10px 0"}},[s("van-button",{staticStyle:{"margin-right":"10px"},attrs:{size:"small",icon:"cross"},on:{click:t.minusSteps}},[t._v(t._s(t.$t("postTask.step.button[0]")))]),s("van-button",{staticStyle:{"background-color":"#1989fa","border-color":"#1989fa"},attrs:{size:"small",icon:"plus",color:"#dd6161"},on:{click:t.pushSteps}},[t._v(t._s(t.$t("postTask.step.button[1]")))])],1)],2)],1)])],1)},i=[],o=s("5104"),l=o["a"],n=(s("6f8a"),s("2877")),r=Object(n["a"])(l,e,i,!1,null,"30afc2af",null);a["default"]=r.exports},"6f8a":function(t,a,s){"use strict";var e=s("552f"),i=s.n(e);i.a}}]);