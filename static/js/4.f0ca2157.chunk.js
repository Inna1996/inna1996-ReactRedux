(this["webpackJsonpreact-kamas"]=this["webpackJsonpreact-kamas"]||[]).push([[4],{416:function(e,a,t){"use strict";var s=t(114),n=t(0),r=t.n(n),i=t(15),m=t(20),c=function(e){return{isAuth:e.auth.isAuth}};a.a=function(e){return Object(i.b)(c)((function(a){var t=a.isAuth,n=Object(s.a)(a,["isAuth"]);return t?r.a.createElement("div",null,r.a.createElement(e,n)):r.a.createElement(m.a,{to:"/login"})}))}},419:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__2nx7-",dialogsItem:"Dialogs_dialogsItem__24xgV",messages:"Dialogs_messages__38Fyc",wrapperOut:"Dialogs_wrapperOut__18APb",textarea:"Dialogs_textarea__24IYP",btn:"Dialogs_btn__2mEeW"}},422:function(e,a,t){e.exports={active:"DialogsItem_active__3ItJ8",dialog:"DialogsItem_dialog__li4UT",ava:"DialogsItem_ava__1EzE3",hr:"DialogsItem_hr__1f5U3"}},423:function(e,a,t){e.exports={messages:"Message_messages__2soV7",wrapper_mess:"Message_wrapper_mess__3pyKg"}},426:function(e,a,t){"use strict";t.r(a);var s=t(6),n=t(416),r=t(197),i=t(0),m=t.n(i),c=t(419),l=t.n(c),o=t(39),g=t(422),u=t.n(g),_=function(e){var a="/dialogs/"+e.id;return m.a.createElement("div",null,m.a.createElement("div",{className:u.a.dialog+" "+u.a.active},m.a.createElement("img",{src:e.img,className:u.a.ava,alt:"avatar"}),m.a.createElement(o.c,{to:a},e.name)),m.a.createElement("hr",{className:u.a.hr}))},d=t(423),p=t.n(d),v=function(e){return m.a.createElement("div",{className:p.a.wrapper_mess},m.a.createElement("div",{className:p.a.messages},e.message))},E=t(198),b=t(199),f=t(93),h=t(91),D=Object(f.a)(50),N=Object(b.a)({form:"dialogAddMessageForm"})((function(e){return m.a.createElement("form",{onSubmit:e.handleSubmit,className:l.a.textarea},m.a.createElement(E.a,{component:h.b,className:l.a.input,validate:[f.b,D],placeholder:"send Message...",name:"newMessageBody"}),m.a.createElement("button",{className:l.a.btn},"Send"))})),w=function(e){var a=e.messagesPage,t=a.dialogsData.map((function(e){return m.a.createElement(_,{key:e.id,name:e.name,id:e.id,img:e.ava})})),s=a.messagesData.map((function(e){return m.a.createElement(v,{key:e.id,message:e.messages})}));return m.a.createElement("div",{className:l.a.wrapperOut},m.a.createElement("div",{className:l.a.dialogs},m.a.createElement("div",{className:l.a.dialogsItem},t),m.a.createElement("div",{className:l.a.messages},s)),m.a.createElement(N,{onSubmit:function(a){e.sendMessageCreator(a.newMessageBody)}}))},O=t(15),I=t(19);a.default=Object(I.d)(Object(O.b)((function(e){return{messagesPage:e.messagesPage,isAuth:e.auth.isAuth}}),Object(s.a)({},r.a)),n.a)(w)}}]);
//# sourceMappingURL=4.f0ca2157.chunk.js.map