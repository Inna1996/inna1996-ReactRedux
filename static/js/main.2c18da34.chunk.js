(this["webpackJsonpreact-kamas"]=this["webpackJsonpreact-kamas"]||[]).push([[0],{101:function(e,t,n){e.exports={form_control:"input_form_control__1aO2X",error:"input_error__3fbjt",formErrorSummary:"input_formErrorSummary__qpATL"}},124:function(e,t,n){e.exports={paginator:"Paginator_paginator__1GNES",pageNumber:"Paginator_pageNumber__6jddN",selectedPage:"Paginator_selectedPage__3eRQx"}},14:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));var a,r,c=n(203),u=n.n(c).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"eccf5e5a-9c5a-4d8d-b71d-977792b662a6"}});!function(e){e[e.Succes=0]="Succes",e[e.Error=1]="Error"}(a||(a={})),function(e){e[e.CaptchaIsRequired=10]="CaptchaIsRequired"}(r||(r={}))},158:function(e,t,n){"use strict";n.d(t,"a",(function(){return g})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return b})),n.d(t,"g",(function(){return S})),n.d(t,"e",(function(){return v})),n.d(t,"f",(function(){return O}));var a=n(12),r=n.n(a),c=n(31),u=n(77),s=n(6),o=n(14),i=function(e){return o.c.get("profile/"+e).then((function(e){return e.data}))},l=function(e){return o.c.get("profile/status/"+e).then((function(e){return e.data}))},f=function(e){return o.c.put("profile/status",{status:e}).then((function(e){return e.data}))},m=function(e){var t=new FormData;return t.append("image",e),o.c.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},p=function(e){return o.c.put("profile/",e).then((function(e){return e.data}))},d=n(74),E={postData:[{id:1,message:"how are you",like:3},{id:2,message:"Wie geht es dir",like:12},{id:3,message:"Yoooooo",like:10}],status:"",profile:null,newPostBody:""},g={addPostActionCreator:function(e){return{type:"SN/profile/ADD_POST",newPostBody:e}},setUserProfile:function(e){return{type:"SN/profile/SET_USERS_PROFILE",profile:e}},setUserStatus:function(e){return{type:"SN/profile/SET_STATUS",status:e}},setPhotoSuccess:function(e){return{type:"SN/profile/SET_PHOTO_SUCCESS",photos:e}},deletePost:function(e){return{type:"SN/profile/DELETE_POST",postId:e}}},h=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i(e);case 2:a=t.sent,n(g.setUserProfile(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l(e);case 2:a=t.sent,n(g.setUserStatus(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},S=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f(e);case 2:t.sent.resultCode===o.a.Succes&&n(g.setUserStatus(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m(e);case 2:(a=t.sent).resultCode===o.a.Succes&&n(g.setPhotoSuccess(a.data.photos));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n,a){var c,u;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.userId,t.next=3,p(e);case 3:if((u=t.sent).resultCode!==o.a.Succes){t.next=8;break}n(h(c)),t.next=10;break;case 8:return n(Object(d.a)("edit-profile",{_error:u.messages[0]})),t.abrupt("return",Promise.reject(u.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/profile/ADD_POST":return Object(s.a)(Object(s.a)({},e),{},{postData:[].concat(Object(u.a)(e.postData),[{id:5,message:t.newPostBody,like:0}])});case"SN/profile/SET_USERS_PROFILE":return Object(s.a)(Object(s.a)({},e),{},{profile:t.profile});case"SN/profile/SET_STATUS":return Object(s.a)(Object(s.a)({},e),{},{status:t.status});case"SN/profile/DELETE_POST":return Object(s.a)(Object(s.a)({},e),{},{postData:e.postData.filter((function(e){return e.id!=t.postId}))});case"SN/profile/SET_PHOTO_SUCCESS":return Object(s.a)(Object(s.a)({},e),{},{profile:Object(s.a)(Object(s.a)({},e.profile),{},{photos:t.photos})});default:return e}}},171:function(e,t,n){"use strict";t.a="data:image/png;base64,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"},197:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return s}));var a=n(77),r=n(6),c={dialogsData:[{id:1,name:"Inna",ava:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKD17RdQJlmy3HC_xwalAsXG5kntjZ6odskQ&usqp=CAU"},{id:2,name:"Kostya",ava:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR99VPaQ2koX9Pb5PQOL3gR4d__muqqWQdp_A&usqp=CAU"},{id:3,name:"nika",ava:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRRlcqpJ_XUN83eoYMEXHFB54R3XUcMQURbYg&usqp=CAU"},{id:4,name:"Alex",ava:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTEuQKXQsRaGiiPYcspDFiz5IvOZh_HtY8T0g&usqp=CAU"},{id:5,name:"Kristina",ava:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRP9FHzU7lQsg1bBQDEPWdpAATTFqpCz3K0MA&usqp=CAU>"},{id:6,name:"Anetta",ava:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjNOi7cKFqfhNojxm2rEEogwmJkDk_6GsZYA&usqp=CAU>"}],messagesData:[{id:1,messages:"Ich bin so begeistert"},{id:2,messages:"Guten Abend"},{id:3,messages:"Kann ich mit dir sprechen?"}]},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/dialogs/SEND_MESSAGE":var n=t.newMessageText;return Object(r.a)(Object(r.a)({},e),{},{messagesData:[].concat(Object(a.a)(e.messagesData),[{id:7,messages:n}])});default:return e}},s={sendMessageCreator:function(e){return{type:"SN/dialogs/SEND_MESSAGE",newMessageText:e}}}},208:function(e,t,n){e.exports={wrapper:"Preloader_wrapper__oI-ml"}},258:function(e,t,n){},276:function(e,t,n){},277:function(e,t,n){},278:function(e,t,n){},279:function(e,t,n){},408:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(27),u=n.n(c),s=(n(258),n(160)),o=n(161),i=n(202),l=n(200),f=n(39),m=n(20),p=n(12),d=n.n(p),E=n(31),g=n(6),h=n(14),b=function(){return h.c.get("auth/me").then((function(e){return e.data}))},S=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return h.c.post("auth/login",{email:e,password:t,rememberMe:n,captcha:a}).then((function(e){return e.data}))},v=function(){return h.c.delete("auth/login").then((function(e){return e.data}))},O=function(){return h.c.get("security/get-captcha-url")},w=n(74),C={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},A=function(e,t,n,a){return{type:"SN/auth/SET_USERS_DATA",payload:{userId:e,email:t,login:n,isAuth:a}}},U=function(e){return{type:"SN/auth/GET_CAPTCHA_URL_SUCCESS",payload:{captchaUrl:e}}},y=function(){return function(){var e=Object(E.a)(d.a.mark((function e(t){var n,a,r,c,u;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:(n=e.sent).resultCode===h.a.Succes&&(a=n.data,r=a.id,c=a.email,u=a.login,t(A(r,c,u,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},j=function(){return function(){var e=Object(E.a)(d.a.mark((function e(t){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:n=e.sent,a=n.data.url,t(U(a));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/auth/SET_USERS_DATA":case"SN/auth/GET_CAPTCHA_URL_SUCCESS":return Object(g.a)(Object(g.a)({},e),t.payload);default:return e}},T="INITIALISED_SUCCESS",k={initialized:!1},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(g.a)(Object(g.a)({},e),{},{initialized:!0});default:return e}},R=(n(276),n(277),function(){return r.a.createElement("div",null,"Music")}),I=(n(278),function(){return r.a.createElement("div",null,"News")}),M=(n(279),function(){return r.a.createElement("div",null,"Settings")}),J=n(15),x=n(115),G=n(157),F=n(5),L=n.n(F),Q=n(124),q=n.n(Q),Y=function(e){for(var t=e.totalUsersCount,n=e.pageSise,c=e.currentPage,u=e.onPageChanged,s=e.portionsSise,o=void 0===s?10:s,i=Math.ceil(t/n),l=[],f=1;f<=i;f++)l.push(f);var m=Math.ceil(i/o),p=Object(a.useState)(1),d=Object(G.a)(p,2),E=d[0],g=d[1],h=(E-1)*o+1,b=E*o;return r.a.createElement("div",{className:q.a.paginator},E>1&&r.a.createElement("button",{onClick:function(){g(E-1)}}," PREV "),l.filter((function(e){return e>=h&&e<=b})).map((function(e){return r.a.createElement("span",{className:L()(Object(x.a)({},q.a.selectedPage,c===e),q.a.pageNumber),key:e,onClick:function(t){u(e)}}," ",e," ")})),m>E&&r.a.createElement("button",{onClick:function(){g(E+1)}}," NEXT "))},_=n(48),z=n.n(_),H=n(171),D=function(e){var t=e.user,n=e.followingInProgress,a=e.unfollowUser,c=e.followUser;return r.a.createElement("div",{className:z.a.wrapper},r.a.createElement("div",{className:z.a.avaFollow},r.a.createElement(f.c,{to:"/profile/"+t.id},r.a.createElement("img",{src:null!=t.photos.small?t.photos.small:H.a,alt:"userPhoto"})),t.followed?r.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),className:z.a.btn,onClick:function(){a(t.id)}},"Unfollow"):r.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),className:z.a.btn,onClick:function(){c(t.id)}},"Follow")),r.a.createElement("div",{className:z.a.content},r.a.createElement("div",{className:z.a.nameStatus},r.a.createElement("div",{className:z.a.name},t.name),r.a.createElement("div",{className:z.a.status},t.status)),r.a.createElement("div",{className:z.a.location},r.a.createElement("div",{className:z.a.city},"us.location.city"),r.a.createElement("div",{className:z.a.country},"us.location.country"))))},Z=n(104),V=function(e){return{}},B=function(e){var t=Object(J.d)((function(e){return e.usersPage.filter}));return r.a.createElement("div",null,r.a.createElement(Z.c,{enableReinitialize:!0,initialValues:{term:t.term,friend:String(t.friend)},validate:V,onSubmit:function(t,n){var a=n.setSubmitting,r={term:t.term,friend:"null"===t.friend?null:"true"===t.friend};e.onFilterChanged(r),a(!1)}},(function(e){var t=e.isSubmitting;return r.a.createElement(Z.b,null,r.a.createElement(Z.a,{type:"text",name:"term"}),r.a.createElement("button",{type:"submit",disabled:t},"Find"),r.a.createElement(Z.a,{name:"friend",as:"select"},r.a.createElement("option",{value:"nulld"},"All"),r.a.createElement("option",{value:"true"},"Only followed"),r.a.createElement("option",{value:"false"},"Unfollowed")))})))},X=n(77),K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return h.c.get("users?page=".concat(e,"&count=").concat(t,"&term=").concat(n)+(null===a?"":"&friend=".concat(a))).then((function(e){return e.data}))},W=function(e){return h.c.post("follow/".concat(e))},$=function(e){return h.c.delete("follow/".concat(e)).then((function(e){return e.data}))},ee={users:[],pageSise:8,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[],filter:{term:"",friend:null}},te=function(e){return{type:"SN/users/FOLLOW",userId:e}},ne=function(e){return{type:"SN/users/UNFOLLOW",userId:e}},ae=function(e){return{type:"SN/users/SET_USERS",users:e}},re=function(e){return{type:"SN/users/SET_CURRENT_PAGE",currentPage:e}},ce=function(e){return{type:"SN/users/SET_FILTER",filter:e}},ue=function(e){return{type:"SN/users/SET_TOTAL_USERS_COUNT",totalUsersCount:e}},se=function(e){return{type:"SN/users/TOGGLE_IS_FETCHING",isFetching:e}},oe=function(e,t){return{type:"SN/users/TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},ie=function(e,t,n){return function(){var a=Object(E.a)(d.a.mark((function a(r){var c;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r(se(!0)),r(re(e)),r(ce(n)),a.next=5,K(e,t,n.term,n.friend);case 5:c=a.sent,r(se(!1)),r(ae(c.items)),r(ue(c.totalCount));case 9:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/users/FOLLOW":return Object(g.a)(Object(g.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(g.a)(Object(g.a)({},e),{},{followed:!0}):e}))});case"SN/users/UNFOLLOW":return Object(g.a)(Object(g.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(g.a)(Object(g.a)({},e),{},{followed:!1}):e}))});case"SN/users/SET_USERS":return Object(g.a)(Object(g.a)({},e),{},{users:t.users});case"SN/users/SET_CURRENT_PAGE":return Object(g.a)(Object(g.a)({},e),{},{currentPage:t.currentPage});case"SN/users/SET_TOTAL_USERS_COUNT":return Object(g.a)(Object(g.a)({},e),{},{totalUsersCount:t.totalUsersCount});case"SN/users/TOGGLE_IS_FETCHING":return Object(g.a)(Object(g.a)({},e),{},{isFetching:t.isFetching});case"SN/users/TOGGLE_IS_FOLLOWING_PROGRESS":return Object(g.a)(Object(g.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(X.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});case"SN/users/SET_FILTER":return Object(g.a)(Object(g.a)({},e),{},{filter:t.filter});default:return e}},fe=n(148),me=n(207),pe=function(e){return e.usersPage.users},de=(Object(me.a)(pe,(function(e){return e.filter((function(e){return!0}))})),function(e){return e.usersPage.pageSise}),Ee=function(e){return e.usersPage.totalUsersCount},ge=function(e){return e.usersPage.currentPage},he=function(e){return e.usersPage.followingInProgress},be=function(e){return e.usersPage.filter},Se=r.a.memo((function(){var e=Object(J.d)(Ee),t=Object(J.d)(de),n=Object(J.d)(ge),c=Object(J.d)(pe),u=Object(J.d)(he),s=Object(J.d)(be),o=Object(m.g)(),i=Object(J.c)();Object(a.useEffect)((function(){var e=fe.parse(o.location.search.substr(1)),a=n,r=s;switch(e.page&&(a=Number(e.page)),e.term&&(r=Object(g.a)(Object(g.a)({},r),{},{term:e.term})),e.friend){case"null":r=Object(g.a)(Object(g.a)({},r),{},{friend:null});break;case"true":r=Object(g.a)(Object(g.a)({},r),{},{friend:!0});break;case"false":r=Object(g.a)(Object(g.a)({},r),{},{friend:!1})}i(ie(a,t,r))}),[]),Object(a.useEffect)((function(){var e={};s.term&&(e.term=s.term),null!==s.friend&&(e.friend=String(s.friend)),1!==n&&(e.page=String(n)),o.push({pathname:"/users",search:fe.stringify(e)})}),[s,n]);var l=function(e){i(function(e){return function(){var t=Object(E.a)(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(oe(!0,e)),t.next=3,W(e);case 3:0===t.sent.data.resultCode&&n(te(e)),n(oe(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))},f=function(e){i(function(e){return function(){var t=Object(E.a)(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(oe(!0,e)),t.next=3,$(e);case 3:t.sent.resultCode===h.a.Succes&&n(ne(e)),n(oe(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))};return r.a.createElement("div",null,r.a.createElement(Y,{currentPage:n,onPageChanged:function(e){i(ie(e,t,s))},totalUsersCount:e,pageSise:t}),r.a.createElement(B,{onFilterChanged:function(e){i(ie(1,t,e))}}),c.map((function(e){return r.a.createElement(D,{user:e,key:e.id,followingInProgress:u,unfollowUser:f,followUser:l})})))})),ve=n(78),Oe=function(e){var t=Object(J.d)((function(e){return e.usersPage.isFetching}));return r.a.createElement(r.a.Fragment,null,t?r.a.createElement(ve.a,null):null,r.a.createElement(Se,null))},we=function(e){return e.auth.isAuth},Ce=function(e){return e.auth.login},Ae=n(410),Ue=n(414),ye=n(415),je=n(155),Ne=n(411),Te=n(126),ke=n(413),Pe=function(e){var t=Ae.a.Header,n=Object(J.d)(we),a=Object(J.d)(Ce),c=Object(J.c)();return r.a.createElement(t,{className:"header"},r.a.createElement("div",{className:"logo"}),r.a.createElement(Ue.a,null,r.a.createElement(ye.a,{span:18}," ",r.a.createElement(je.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["1"]},r.a.createElement(je.a.Item,{key:"1"},r.a.createElement(f.b,{to:"/users"},"Users")))),n?r.a.createElement(r.a.Fragment,null,r.a.createElement(ye.a,{span:1},r.a.createElement(Ne.a,{alt:a||"",style:{backgroundColor:"#87d068"},icon:r.a.createElement(ke.a,null)})),r.a.createElement(ye.a,{span:5},r.a.createElement(Te.a,{onClick:function(){c(function(){var e=Object(E.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:e.sent.resultCode===h.a.Succes&&t(A(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},"Log out"))):r.a.createElement(ye.a,{span:6},r.a.createElement(Te.a,null,r.a.createElement(f.b,{to:"/login"},"Login")))))},Re=n(198),Ie=n(199),Me=n(91),Je=n(93),xe=n(101),Ge=n.n(xe),Fe=Object(Ie.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,a=e.captchaUrl;return r.a.createElement("form",{onSubmit:t},r.a.createElement("div",null,r.a.createElement(Re.a,{placeholder:"email",name:"email",component:Me.a,validate:[Je.b]})),r.a.createElement("div",null,r.a.createElement(Re.a,{placeholder:"password",name:"password",component:Me.a,type:"password",validate:[Je.b]})),r.a.createElement("div",null,r.a.createElement(Re.a,{type:"checkbox",component:Me.a,name:"rememberMe",validate:[Je.b]})," remember me"),r.a.createElement("div",null,a&&r.a.createElement("img",{src:a,alt:"captcha"}),a&&r.a.createElement(Re.a,{name:"captcha",component:Me.a,validate:[Je.b]}),n&&r.a.createElement("div",{className:Ge.a.formErrorSummary},n),r.a.createElement("button",null,"Login")))})),Le=Object(J.b)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}}),{login:function(e,t,n,a){return function(){var r=Object(E.a)(d.a.mark((function r(c){var u,s;return d.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,S(e,t,n,a);case 2:(u=r.sent).resultCode===h.a.Succes?c(y()):(u.resultCode===h.b.CaptchaIsRequired&&c(j()),s=u.messages.length>0?u.messages[0]:"Some Error",c(Object(w.a)("login",{_error:s})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?r.a.createElement(m.a,{to:"/profile"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Login "),r.a.createElement(Fe,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl}))}));var Qe=function(e){return function(t){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(ve.a,null)},r.a.createElement(e,t))}},qe=(n(403),n(412)),Ye=r.a.lazy((function(){return n.e(3).then(n.bind(null,425))})),_e=r.a.lazy((function(){return n.e(4).then(n.bind(null,426))})),ze=r.a.lazy((function(){return n.e(5).then(n.bind(null,424))})),He=Qe(_e),De=Qe(Ye),Ze=Qe(ze),Ve=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){var e=je.a.SubMenu,t=Ae.a.Content,n=Ae.a.Sider;return this.props.initialized?r.a.createElement(Ae.a,null,r.a.createElement(Pe,null),r.a.createElement(Ae.a,null,r.a.createElement(n,{width:200,className:"site-layout-background"},r.a.createElement(je.a,{mode:"inline",defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],style:{height:"100%",borderRight:0}},r.a.createElement(e,{key:"sub1",icon:r.a.createElement(ke.a,null),title:"My Profile"},r.a.createElement(je.a.Item,{key:"1"},r.a.createElement(f.c,{to:"/profile"},"Profile")),r.a.createElement(je.a.Item,{key:"2"},r.a.createElement(f.c,{to:"/dialogs"},"Messages")),r.a.createElement(je.a.Item,{key:"3"},r.a.createElement(f.c,{to:"/chatPage"},"Chat"))))),r.a.createElement(Ae.a,{style:{padding:"0 24px 24px"}},r.a.createElement(qe.a,{style:{margin:"16px 0"}},r.a.createElement(qe.a.Item,null,"Home"),r.a.createElement(qe.a.Item,null,"List"),r.a.createElement(qe.a.Item,null,"App")),r.a.createElement(t,{className:"site-layout-background",style:{padding:24,margin:0,minHeight:280}},r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/",render:function(){return r.a.createElement(m.a,{to:"/profile"})}}),r.a.createElement(m.b,{path:"/dialogs",render:function(){return r.a.createElement(He,null)}}),r.a.createElement(m.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(De,null)}}),r.a.createElement(m.b,{path:"/news",render:function(){return r.a.createElement(I,null)}}),r.a.createElement(m.b,{path:"/musik",render:function(){return r.a.createElement(R,null)}}),r.a.createElement(m.b,{path:"/settings",render:function(){return r.a.createElement(M,null)}}),r.a.createElement(m.b,{path:"/users",render:function(){return r.a.createElement(Oe,null)}}),r.a.createElement(m.b,{path:"/login",render:function(){return r.a.createElement(Le,null)}}),r.a.createElement(m.b,{path:"/chatPage",render:function(){return r.a.createElement(Ze,null)}}),r.a.createElement(m.b,{path:"*",render:function(){return r.a.createElement("div",null,"404 NOT FOUND")}})))))):r.a.createElement(ve.a,null)}}]),n}(r.a.Component),Be=Object(J.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(){var e=Object(E.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t(y()),e.next=3,Promise.all([n]);case 3:t({type:T});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Ve);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Xe=n(19),Ke=n(197),We=n(158),$e={},et=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$e;return e},tt=n(222),nt=n(201),at=Object(Xe.c)({profilePage:We.b,messagesPage:Ke.b,sidebar:et,usersPage:le,auth:N,form:nt.a,app:P}),rt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Xe.d,ct=Object(Xe.e)(at,rt(Object(Xe.a)(tt.a)));window.__store=ct;var ut=ct;u.a.render(r.a.createElement(f.a,null,r.a.createElement(J.a,{store:ut},r.a.createElement(Be,null))),document.getElementById("root"))},48:function(e,t,n){e.exports={wrapper:"Users_wrapper__3mSY9",avaFollow:"Users_avaFollow__28Pu6",btn:"Users_btn__1vnLY",content:"Users_content__3CzI7",nameStatus:"Users_nameStatus__bu_3i",location:"Users_location__2tAqd",name:"Users_name__1m9I-",status:"Users_status__2lPCF",city:"Users_city__16Ul7",country:"Users_country__1QfM1",sekectedPage:"Users_sekectedPage__12Jn1"}},78:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n.p+"static/media/spinner.8dd760fd.svg",u=n(208),s=n.n(u);t.a=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:s.a.wrapper},r.a.createElement("img",{src:c})))}},91:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return l}));var a=n(114),r=n(0),c=n.n(r),u=n(101),s=n.n(u),o=function(e){e.input;var t=e.meta,n=(e.child,Object(a.a)(e,["input","meta","child"])),r=t.touched&&t.error;return c.a.createElement("div",{className:s.a.form_control+" "+(r?s.a.error:"")},c.a.createElement("div",null,n.children),r&&c.a.createElement("span",null,t.error," "))},i=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return c.a.createElement(o,e," ",c.a.createElement("textarea",Object.assign({},t,n)))},l=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return c.a.createElement(o,e," ",c.a.createElement("input",Object.assign({},t,n)))}},93:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}}},[[408,1,2]]]);
//# sourceMappingURL=main.2c18da34.chunk.js.map