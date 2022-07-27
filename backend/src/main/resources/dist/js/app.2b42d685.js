(function(){"use strict";var t={779:function(t,e,n){var s=n(144),o=function(){var t=this,e=t._self._c;return e("div",{style:{backgroundImage:"url("+n(5665)+")"},attrs:{id:"app"}},[e("nav",[e("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),e("router-link",{attrs:{to:"/waiting"}},[t._v("WaitingRoom")])],1),e("router-view")],1)},i=[],r=n(1001),a={},l=(0,r.Z)(a,o,i,!1,null,null,null),u=l.exports,c=n(8345),m=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("router-link",{attrs:{to:"/login"}},[t._v("로그인")])],1)},d=[],p={name:"HomeView",components:{}},v=p,f=(0,r.Z)(v,m,d,!1,null,null,null),h=f.exports,g=function(){var t=this,e=t._self._c;return e("div",{staticClass:"login"},[e("h1",[t._v("로그인")]),e("form",{staticClass:"loginform"},[e("p",[e("label",{attrs:{for:"memberIdInput"}},[t._v("이메일")]),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.memberId,expression:"memberId",modifiers:{trim:!0}}],ref:"memberIdInput",staticClass:"input_text",attrs:{type:"text",id:"memberIdInput",placeholder:"email"},domProps:{value:t.memberId},on:{input:function(e){e.target.composing||(t.memberId=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),e("p",[e("label",{attrs:{for:"memberPasswordInput"}},[t._v("패스워드")]),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.memberPassword,expression:"memberPassword",modifiers:{trim:!0}}],ref:"memberPasswordInput",staticClass:"input_text",attrs:{type:"password",id:"memberPasswordInput",placeholder:"password"},domProps:{value:t.memberPassword},on:{input:function(e){e.target.composing||(t.memberPassword=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),e("p",{staticClass:"buttons"},[e("button",{staticClass:"button blue",on:{click:function(e){return e.preventDefault(),t.doLogin.apply(null,arguments)}}},[t._v("로그인")]),e("button",{staticClass:"button",on:{click:function(e){return e.preventDefault(),t.doCancel.apply(null,arguments)}}},[t._v("취소")])])]),e("p",[t._v(t._s(t.errorMessage))]),e("button",{staticClass:"button"},[e("router-link",{attrs:{to:"/signup"}},[t._v("회원가입")])],1)])},b=[],w={name:"LoginPage",data:function(){return{memberId:"",memberPassword:"",errorMessage:""}},methods:{doLogin(){return""==this.memberId?(alert("아이디를 입력하세요."),void this.$refs.memberIdInput.focus()):""==this.memberPassword?(alert("패스워드를 입력하세요."),void this.$refs.memberPasswordInput.focus()):void 0},doCancel(){this.$router.push("/")}},mounted(){this.$refs.memberIdInput.focus()}},_=w,y=(0,r.Z)(_,g,b,!1,null,"4c4136de",null),P=y.exports,C=function(){var t=this,e=t._self._c;return e("div",{staticClass:"signup"},[e("h1",[t._v("회원가입")]),e("form",{staticClass:"signupform"},[e("p",[e("label",{attrs:{for:"emailInput"}},[t._v("EMAIL")]),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.email,expression:"email",modifiers:{trim:!0}}],staticClass:"input_text",attrs:{type:"text",id:"emailInput",placeholder:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),e("p",[e("label",{attrs:{for:"nicknameInput"}},[t._v("NICKNAME")]),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.nickname,expression:"nickname",modifiers:{trim:!0}}],staticClass:"input_text",attrs:{type:"text",id:"nicknameInput",placeholder:"nickname"},domProps:{value:t.nickname},on:{input:function(e){e.target.composing||(t.nickname=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),e("p",[e("label",{attrs:{for:"PWInput"}},[t._v("PW")]),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.password,expression:"password",modifiers:{trim:!0}}],staticClass:"input_text",attrs:{type:"password",id:"PWInput",placeholder:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),e("p",[e("label",{attrs:{for:"PWCheckInput"}},[t._v("PW 확인")]),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.checkPassword,expression:"checkPassword",modifiers:{trim:!0}}],staticClass:"input_text",attrs:{type:"password",id:"PWCheckInput",placeholder:"password"},domProps:{value:t.checkPassword},on:{input:function(e){e.target.composing||(t.checkPassword=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),t._m(0)]),e("button",[e("router-link",{attrs:{to:"/login"}},[t._v("로그인")])],1)])},k=[function(){var t=this,e=t._self._c;return e("p",{staticClass:"buttons"},[e("button",{staticClass:"button"},[t._v("가입하기")])])}],S={name:"SignupPage",data(){return{email:"",nickname:"",password:"",checkPassword:""}},methods:{}},x=S,I=(0,r.Z)(x,C,k,!1,null,null,null),M=I.exports,O=function(){var t=this,e=t._self._c;return e("div",{staticClass:"waiting-room"},[e("chatting"),e("br"),e("room-list"),e("br"),e("user-list"),e("br"),e("router-link",{attrs:{to:"/room"}},[t._v("게임방 입장")])],1)},N=[],Z=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"chatting"}},[e("h2",[t._v("Vue.js WebSocket Tutorial")]),e("button",{on:{click:function(e){return t.sendMessage("hello")}}},[t._v("Send Message")])])},j=[],U={name:"ChattingStage",data:function(){return{connection:null}},methods:{sendMessage:function(t){console.log("Hello"),console.log(this.connection),this.connection.send(t)}},created:function(){console.log("Starting connection to WebSocket Server"),this.connection=new WebSocket("wss://echo.websocket.org"),this.connection.onmessage=function(t){console.log(t)},this.connection.onopen=function(t){console.log(t),console.log("Successfully connected to the echo websocket server...")}}},V=U,L=(0,r.Z)(V,Z,j,!1,null,null,null),T=L.exports,W=function(){var t=this,e=t._self._c;return e("div",{staticClass:"room-list"},[e("room-list-item")],1)},$=[],D=function(){var t=this,e=t._self._c;return e("div",{staticClass:"room-list-item"})},E=[],A={name:"RoomListItem"},R=A,F=(0,r.Z)(R,D,E,!1,null,null,null),q=F.exports,H={name:"RoomList",components:{RoomListItem:q}},J=H,K=(0,r.Z)(J,W,$,!1,null,null,null),B=K.exports,Y=function(){var t=this,e=t._self._c;return e("div",{staticClass:"user-list"})},z=[],G={name:"UserList"},Q=G,X=(0,r.Z)(Q,Y,z,!1,null,null,null),tt=X.exports,et={name:"WaitingRoomView",components:{Chatting:T,RoomList:B,UserList:tt}},nt=et,st=(0,r.Z)(nt,O,N,!1,null,null,null),ot=st.exports,it=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container",attrs:{id:"main-container"}},[t.session?t._e():e("div",{attrs:{id:"join"}},[t._m(0),e("div",{staticClass:"jumbotron vertical-center",attrs:{id:"join-dialog"}},[e("h1",[t._v("Join a video session")]),e("div",{staticClass:"form-group"},[e("p",[e("label",[t._v("Participant")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.myUserName,expression:"myUserName"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.myUserName},on:{input:function(e){e.target.composing||(t.myUserName=e.target.value)}}})]),e("p",[e("label",[t._v("Session")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.mySessionId,expression:"mySessionId"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.mySessionId},on:{input:function(e){e.target.composing||(t.mySessionId=e.target.value)}}})]),e("p",{staticClass:"text-center"},[e("button",{staticClass:"btn btn-lg btn-success",on:{click:function(e){return t.joinSession()}}},[t._v("Join!")])])])])]),t.session?e("div",{attrs:{id:"session"}},[e("div",{attrs:{id:"session-header"}},[e("h1",{attrs:{id:"session-title"}},[t._v(t._s(t.mySessionId))]),e("input",{staticClass:"btn btn-large btn-danger",attrs:{type:"button",id:"buttonLeaveSession",value:"Leave session"},on:{click:t.leaveSession}})]),e("div",{staticClass:"col-md-6",attrs:{id:"main-video"}},[e("user-video",{attrs:{"stream-manager":t.mainStreamManager}}),e("canvas",{staticStyle:{display:"none"},attrs:{id:"main-video-canvas"}})],1),e("div",{attrs:{id:"label-container"}}),e("div",{staticClass:"col-md-6",attrs:{id:"video-container"}},[e("user-video",{attrs:{"stream-manager":t.publisher},nativeOn:{click:function(e){return t.updateMainVideoStreamManager(t.publisher)}}}),t._l(t.subscribers,(function(n){return e("user-video",{key:n.stream.connection.connectionId,attrs:{"stream-manager":n},nativeOn:{click:function(e){return t.updateMainVideoStreamManager(n)}}})}))],2)]):t._e()])},rt=[function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"img-div"}},[e("img",{attrs:{src:n(9713)}})])}],at=n(9669),lt=n.n(at),ut=n(4905),ct=function(){var t=this,e=t._self._c;return t.streamManager?e("div",[e("ov-video",{attrs:{"stream-manager":t.streamManager}}),e("div",[e("p",[t._v(t._s(t.clientData))])])],1):t._e()},mt=[],dt=function(){var t=this,e=t._self._c;return e("video",{attrs:{autoplay:""}})},pt=[],vt={name:"OvVideo",props:{streamManager:Object},mounted(){this.streamManager.addVideoElement(this.$el)}},ft=vt,ht=(0,r.Z)(ft,dt,pt,!1,null,null,null),gt=ht.exports,bt={name:"UserVideo",components:{OvVideo:gt},props:{streamManager:Object},computed:{clientData(){const{clientData:t}=this.getConnectionData();return t}},methods:{getConnectionData(){const{connection:t}=this.streamManager.stream;return JSON.parse(t.data.split("%/%")[0])}}},wt=bt,_t=(0,r.Z)(wt,ct,mt,!1,null,null,null),yt=_t.exports;lt().defaults.headers.post["Content-Type"]="application/json";const Pt="https://teachablemachine.withgoogle.com/models/fKbC5tFyY/";let Ct,kt,St,xt,It;var Mt={name:"App",components:{UserVideo:yt},data(){return{OV:void 0,session:void 0,mainStreamManager:void 0,publisher:void 0,subscribers:[],mySessionId:"SessionA",myUserName:"Participant"+Math.floor(100*Math.random())}},methods:{joinSession(){this.OV=new ut.Dn,this.session=this.OV.initSession(),this.session.on("streamCreated",(({stream:t})=>{const e=this.session.subscribe(t);this.subscribers.push(e)})),this.session.on("streamDestroyed",(({stream:t})=>{const e=this.subscribers.indexOf(t.streamManager,0);e>=0&&this.subscribers.splice(e,1)})),this.session.on("exception",(({exception:t})=>{console.warn(t)})),this.getToken(this.mySessionId,this.myUserName),this.init(),window.addEventListener("beforeunload",this.leaveSession)},leaveSession(){this.session&&this.session.disconnect(),this.session=void 0,this.mainStreamManager=void 0,this.publisher=void 0,this.subscribers=[],this.OV=void 0,window.removeEventListener("beforeunload",this.leaveSession)},updateMainVideoStreamManager(t){this.mainStreamManager!==t&&(this.mainStreamManager=t)},async init(){const t=Pt+"model.json",e=Pt+"metadata.json";Ct=await tmPose.load(t,e),It=Ct.getTotalClasses();const n=!0;kt=new tmPose.Webcam(200,200,n),await kt.setup(),kt.play(),window.requestAnimationFrame(this.loop);const s=document.getElementById("main-video-canvas");s.width=200,s.height=200,St=s.getContext("2d"),xt=document.getElementById("label-container");for(let o=0;o<It;o++)xt.appendChild(document.createElement("div"))},async loop(t){kt.update(),await this.predict(),window.requestAnimationFrame(this.loop)},async predict(){const{pose:t,posenetOutput:e}=await Ct.estimatePose(kt.canvas),n=await Ct.predict(e);for(let s=0;s<It;s++){const t=n[s].className+": "+n[s].probability.toFixed(2);xt.childNodes[s].innerHTML=t}},drawPose(t){if(St.drawImage(kt.canvas,0,0),t){const e=.5;tmPose.drawKeypoints(t.keypoints,e,St),tmPose.drawSkeleton(t.keypoints,e,St)}},getToken(t,e){lt().post("https://localhost:8080/api/v1/rooms/get-token",{sessionName:t,id:e}).then((t=>{console.log(t.data[0]);const e=t.data[0];this.session.connect(e,{clientData:this.myUserName}).then((()=>{let t=this.OV.initPublisher(void 0,{audioSource:void 0,videoSource:void 0,publishAudio:!0,publishVideo:!0,resolution:"640x480",frameRate:30,insertMode:"APPEND",mirror:!1});this.mainStreamManager=t,console.log(this.mainStreamManager),this.publisher=t,this.session.publish(this.publisher)})).catch((t=>{console.log("There was an error connecting to the session:",t.code,t.message)}))}))}}},Ot=Mt,Nt=(0,r.Z)(Ot,it,rt,!1,null,null,null),Zt=Nt.exports;s.ZP.use(c.Z);const jt=[{path:"/",name:"home",component:h},{path:"/login",name:"login",component:P},{path:"/signup",name:"signup",component:M},{path:"/waiting",name:"waiting",component:ot},{path:"/room",name:"room",component:Zt}],Ut=new c.Z({mode:"history",base:"/",routes:jt});var Vt=Ut,Lt=n(629),Tt={state:{},getters:{},mutations:{},actions:{}};s.ZP.use(Lt.ZP);var Wt=new Lt.ZP.Store({modules:{accounts:Tt}});s.ZP.config.productionTip=!1,new s.ZP({router:Vt,store:Wt,render:t=>t(u)}).$mount("#app")},9713:function(t,e,n){t.exports=n.p+"img/openvidu_grey_bg_transp_cropped.9bbabff2.png"},5665:function(t,e,n){t.exports=n.p+"img/background.40d47c0d.png"}},e={};function n(s){var o=e[s];if(void 0!==o)return o.exports;var i=e[s]={id:s,loaded:!1,exports:{}};return t[s].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=t,function(){var t=[];n.O=function(e,s,o,i){if(!s){var r=1/0;for(c=0;c<t.length;c++){s=t[c][0],o=t[c][1],i=t[c][2];for(var a=!0,l=0;l<s.length;l++)(!1&i||r>=i)&&Object.keys(n.O).every((function(t){return n.O[t](s[l])}))?s.splice(l--,1):(a=!1,i<r&&(r=i));if(a){t.splice(c--,1);var u=o();void 0!==u&&(e=u)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[s,o,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){n.p="/"}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,s){var o,i,r=s[0],a=s[1],l=s[2],u=0;if(r.some((function(e){return 0!==t[e]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(l)var c=l(n)}for(e&&e(s);u<r.length;u++)i=r[u],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(c)},s=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(779)}));s=n.O(s)})();
//# sourceMappingURL=app.2b42d685.js.map