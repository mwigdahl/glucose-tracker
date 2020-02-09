(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(e,t,a){e.exports=a(216)},115:function(e,t,a){},120:function(e,t,a){},145:function(e,t,a){},166:function(e,t,a){},168:function(e,t,a){},171:function(e,t,a){},214:function(e,t,a){},216:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(16),c=a.n(l),o=(a(115),a(17)),s=Object(o.a)(),i=a(20),u=a(26),m=a.n(u),d=a(101),h=a(47),g=a(59),p=a(102),f=a.n(p),E=function(){return window.history.replaceState({},document.title,window.location.pathname)},b=r.a.createContext(),v=function(){return Object(n.useContext)(b)},w=a(222),y=a(223),k=a(224),O=a(225),j=a(226),D=a(227),C=a(228),N=(a(120),function(e){var t=v(),a=t.isAuthenticated,l=t.loginWithRedirect,c=t.logout,o=Object(n.useState)(!1),s=Object(i.a)(o,2),u=s[0],m=s[1];return r.a.createElement("div",null,r.a.createElement(w.a,{className:"navBar mb-5",color:"blue",light:!0,expand:"md"},r.a.createElement(y.a,null,r.a.createElement("a",{href:"/Main"},r.a.createElement("img",{width:"200",src:"../images/sugar_pin_logo.png",alt:"pricked finger logo"}))),r.a.createElement(k.a,{onClick:function(){return m(!u)}}),r.a.createElement(O.a,{isOpen:u,navbar:!0},r.a.createElement(j.a,{className:"ml-auto",navbar:!0},a&&r.a.createElement(r.a.Fragment,null,r.a.createElement(D.a,{href:"/Main"},"Your Sugar Pin"),r.a.createElement(D.a,{href:"/Search"},"Search")),r.a.createElement(C.a,null,r.a.createElement(D.a,{href:"/"},"Home")),r.a.createElement(C.a,null,!a&&r.a.createElement(D.a,{onClick:function(){return l({})}},"Log in")),r.a.createElement(C.a,null,a&&r.a.createElement(D.a,{onClick:function(){return c()}},"Log out"))))))}),x=a(37),S=a(31),T=a(32),F=a(33),L=a(35),R=a(34),I=a(36),M=a(229),U=a(230),W=a(231),B=a(232),A=a(233),G=function(){var e=v(),t=e.loading,a=e.user;return t||!a?r.a.createElement("div",null,"Loading..."):r.a.createElement(M.a,{className:"profileCard"},r.a.createElement(U.a,{top:!0,width:"100%",src:a.picture,alt:"User google image"}),r.a.createElement(W.a,null,r.a.createElement(B.a,{className:"profileTitle"},a.name),r.a.createElement(A.a,{className:"profileEmail"},a.email)))},_=a(23),P=a(11),z=(a(144),function(e){function t(e){return Object(T.a)(this,t),Object(L.a)(this,Object(R.a)(t).call(this,e))}return Object(I.a)(t,e),Object(F.a)(t,[{key:"render",value:function(){var e=this.props.generateData(50,200,1);return n.createElement("div",null,n.createElement(_.b,{className:"test",data:e,width:"auto",height:600},n.createElement(_.a,{showGrid:!0}),n.createElement(_.g,{showLabels:"false"}),n.createElement(_.d,{name:"mg/dl",valueField:"value",argumentField:"date"}),n.createElement(_.d,{name:"High",valueField:"high",argumentField:"date"}),n.createElement(_.d,{name:"Low",valueField:"low",argumentField:"date"}),n.createElement(_.c,{name:"Time",valueField:"value",argumentField:"date",color:"black",point:{size:10}}),n.createElement(_.h,null),n.createElement(_.e,{text:"My Glucose Chart"}),n.createElement(P.d,null),n.createElement(_.f,null)))}}]),t}(n.Component)),H=(a(145),a(234)),J=a(235),Y=a(236),V=a(237),q=a(238);var K,$=function(e){return r.a.createElement(M.a,{className:"mt-3"},r.a.createElement(H.a,null,"Enter Current Glucose"),r.a.createElement(J.a,{id:"form",className:"p-3"},r.a.createElement(Y.a,{id:"formGroup"},r.a.createElement(W.a,{className:"p-3"},r.a.createElement(V.a,Object.assign({id:"input",type:"text",name:"glucoseLevel",placeholder:"mg/dl"},e)))),r.a.createElement(q.a,{id:"button",block:!0,onClick:e.saveToDatabase},"Submit")))},Q=a(249),X=a(239),Z=a(240),ee=a(241),te=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),l=a[0],c=a[1];return Object(n.useEffect)(function(){var t=Number.parseInt(e.bsLevel);t<=100?c("Less than 100 mg/dL: Consider eating a small snack with about 15 grams of carbs to keep your blood sugar from getting too low. Examples include a half cup of fruit juice, a small piece of fruit, or four crackers. Glucose tabs are also a good choice."):t>101&&t<180?c("100 to 160 mg/dL: Unless your doctor tells you otherwise, this is a good goal range for your blood sugar."):t>181&&t<249?c("180 to 250 mg/dL: You're getting close to the danger zone for higher blood sugar levels. Consider some of the tips for lowering your blood sugar level. If you're about to exercise, this is an acceptable range."):t>=250?c("250 mg/dL or higher: Check your urine for ketones using a dipstick. If ketones are present, call your doctor to see if you need to seek medical attention."):console.log(void 0)},[]),r.a.createElement("div",null,r.a.createElement(Q.a,{isOpen:e.isOpen,toggle:e.toggle},r.a.createElement(X.a,{toggle:e.toggle},"Glucose Levels"),r.a.createElement(Z.a,null,r.a.createElement("p",null,l)),r.a.createElement(ee.a,null,r.a.createElement(q.a,{color:"primary",onClick:e.toggle},"Close")," ")))},ae=a(48),ne=a.n(ae),re={getByDay:function(e){return ne.a.post("/api/glucose/date/"+e.date,{userId:e.userId})},saveData:function(e,t){return ne.a.post("/api/glucose/",e,t)},getOneRecord:function(e){return ne.a.get("/api/glucose/"+e)},updateRecord:function(e,t){return ne.a.put("/api/glucose/"+e,t)},deleteRecord:function(e){return ne.a.delete("/api/glucose/"+e)}},le=a(242),ce=a(243),oe=a(244),se=a(105),ie=a.n(se),ue=a(40),me=a.n(ue),de=(a(166),function(e){function t(){var e;return Object(T.a)(this,t),(e=Object(L.a)(this,Object(R.a)(t).call(this))).handleInputChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(S.a)({},n,r))},e.toggleModal=function(){e.setState({isModalOpen:!e.state.isModalOpen})},e.saveToDatabase=function(t){re.saveData({date:e.state.today,glucose:e.state.glucoseLevel,userId:e.props.user.sub}).then(function(t){e.getFromDatabase()}).then(function(){e.toggleModal()}).catch(function(e){return console.log(e)})},e.getFromDatabase=function(t){var a={date:e.state.today,userId:e.props.user.sub};re.getByDay(a).then(function(t){e.setState({results:t.data,today:new Date,glucoseLevel:""});var a=e.state.results,n=[];a.forEach(function(e){var t=me.a.utc(e.date).tz("America/Denver").format().split(".",1)[0].split("T")[1].split(":",2).join(":"),a={value:e.glucose,high:160,low:100,date:t};n.unshift(a)}),e.setState({chartData:n})}).catch(function(e){return console.log(e)})},e.generateData=function(t,a,n){return e.state.chartData},e.email=function(){},e.state={today:me()().format(),glucoseLevel:"",results:[],chartData:[],isModalOpen:!1},e}return Object(I.a)(t,e),Object(F.a)(t,[{key:"componentDidUpdate",value:function(e){!e.user&&this.props.user&&this.getFromDatabase()}},{key:"render",value:function(){return r.a.createElement(le.a,null,r.a.createElement(ce.a,null,r.a.createElement("h2",null,r.a.createElement(ie.a,{local:!0},this.state.today))),r.a.createElement(ce.a,null,r.a.createElement(oe.a,{md:"3"},r.a.createElement(G,null),r.a.createElement($,{className:"formBar",saveToDatabase:this.saveToDatabase,value:this.state.glucoseLevel,onChange:this.handleInputChange})),r.a.createElement(oe.a,{md:"9"},r.a.createElement(z,{results:this.state.results,generateData:this.generateData}))),this.state.isModalOpen&&r.a.createElement(te,{isOpen:this.state.isModalOpen,toggle:this.toggleModal,bsLevel:this.state.glucoseLevel}))}}]),t}(r.a.Component)),he=(K=de,function(e){var t=v().user;return r.a.createElement(K,Object.assign({},e,{user:t}))}),ge=a(107),pe=a.n(ge),fe=(a(167),a(245)),Ee=a(246),be=(a(168),a(44));var ve=function(e){return r.a.createElement(le.a,null,e.editData.length?r.a.createElement(fe.a,null,e.editData.map(function(t){return r.a.createElement(Ee.a,{className:"p-0"},r.a.createElement(M.a,{className:"mb-3"},r.a.createElement(H.a,null," ",r.a.createElement("strong",null,"Date:")," ",t.calender[0],","," ",r.a.createElement("strong",null,"Time:")," ",t.date,", ",r.a.createElement("strong",null,"Value:")," ",t.value),r.a.createElement(W.a,null,r.a.createElement(B.a,null,r.a.createElement("strong",null,"Manage Item:"),r.a.createElement(q.a,{color:"danger",onClick:function(){return e.delete(t.id)}},"Delete"),r.a.createElement(be.a,{className:"btn-primary btn mr-2",to:"/update/"+t.id},"Update")))))})):r.a.createElement("h3",{className:"noData"},"There is no saved data for this date."))},we=(a(171),function(e){return function(t){var a=v().user;return r.a.createElement(e,Object.assign({},t,{user:a}))}}(function(e){function t(){var e;return Object(T.a)(this,t),(e=Object(L.a)(this,Object(R.a)(t).call(this))).handleChange=function(t){e.setState({startDate:t})},e.handleInputChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(S.a)({},n,r)),console.log(e.state.update)},e.getFromDatabase=function(t){var a={date:e.state.startDate,userId:e.props.user.sub};re.getByDay(a).then(function(t){e.setState({results:t.data});var a=e.state.results,n=[];a.forEach(function(e){var t=me.a.utc(e.date).tz("America/Denver").format(),a=t.split("T",1),r=t.split("-",3)[2].split("T")[1].split(":",2).join(":"),l={id:e._id,value:e.glucose,high:160,low:100,date:r,calender:a};n.unshift(l)}),e.setState({chartData:n})}).catch(function(e){return console.log(e)})},e.generateData=function(t,a,n){return e.state.chartData},e.delete=function(t){re.deleteRecord(t).then(function(t){return e.getFromDatabase()}).catch(function(e){return console.log(e)})},e.state={startDate:new Date,results:[],chartData:[]},e}return Object(I.a)(t,e),Object(F.a)(t,[{key:"componentDidUpdate",value:function(e){!e.user&&this.props.user&&this.getFromDatabase()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(le.a,null,r.a.createElement(ce.a,null,r.a.createElement(oe.a,{md:"3",sm:"6"},r.a.createElement(G,null),r.a.createElement(M.a,{className:"mt-3"},r.a.createElement(H.a,{className:""},"Search by Date"),r.a.createElement(J.a,{className:"mt-3 p-3"},r.a.createElement(Y.a,{className:""},r.a.createElement(pe.a,{selected:this.state.startDate,onChange:this.handleChange})),r.a.createElement(q.a,{id:"button",block:!0,onClick:function(){return e.getFromDatabase()}},"Search")))),r.a.createElement(oe.a,{md:"9",sm:"12"},r.a.createElement(z,{results:this.state.results,generateData:this.generateData}))),r.a.createElement(ce.a,null,r.a.createElement(oe.a,{className:"mx-auto",md:"8"},r.a.createElement("h2",{className:"text-center border-bottom m-3"},"Entry Log"),r.a.createElement(ve,{editData:this.state.chartData,delete:this.delete})))))}}]),t}(n.Component))),ye=function(e){function t(){var e,a;Object(T.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(L.a)(this,(e=Object(R.a)(t)).call.apply(e,[this].concat(r)))).state={updatedGlucose:"",records:{},date:"",time:""},a.handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(S.a)({},n,r))},a.editRecord=function(e){var t={date:a.state.records.date,glucose:a.state.updatedGlucose};re.updateRecord(e,t).then(function(t){a.setState({updatedGlucose:""}),a.getFromDatabase(e)}).catch(function(e){return console.log(e)})},a.getFromDatabase=function(e){re.getOneRecord(e).then(function(e){a.setState({records:e.data})}).catch(function(e){return console.log(e)})},a}return Object(I.a)(t,e),Object(F.a)(t,[{key:"componentDidMount",value:function(){this.getRecord()}},{key:"getRecord",value:function(){var e=this;re.getOneRecord(this.props.match.params.id).then(function(t){e.setState({records:t.data});var a=e.state.records.date.split("T",1)[0].split("-").reverse().join("-"),n=e.state.records.date.split(".",1)[0].split("T")[1].split(":",2).join(":");e.setState({date:a,time:n})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this;return r.a.createElement(le.a,null,r.a.createElement(ce.a,null,r.a.createElement(oe.a,{md:"3"},r.a.createElement(G,null)),r.a.createElement(oe.a,{md:"9"},r.a.createElement("strong",null,"Date:")," ",this.state.date,", ",r.a.createElement("strong",null,"Time:")," ",this.state.time,", ",r.a.createElement("strong",null,"Value:")," ",this.state.records.glucose,r.a.createElement("p",null,"Enter an updated value below:"),r.a.createElement(J.a,null,r.a.createElement(Y.a,null,r.a.createElement(V.a,{name:"updatedGlucose",value:this.state.updatedGlucose,onChange:this.handleInputChange,placeholder:"Updated glucose value"}),r.a.createElement(q.a,{onClick:function(){return e.editRecord(e.state.records._id)}},"Update"))))),r.a.createElement(ce.a,null,r.a.createElement(be.a,{to:"/Search"},"Back to Search Page.")))}}]),t}(n.Component),ke=function(e){var t=e.component,a=e.path,l=Object(g.a)(e,["component","path"]),c=v(),o=c.loading,s=c.isAuthenticated,i=c.loginWithRedirect;Object(n.useEffect)(function(){o||s||function(){var e=Object(h.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i({appState:{targetUrl:a}});case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[o,s,i,a]);return r.a.createElement(x.a,Object.assign({path:a,render:function(e){return!0===s?r.a.createElement(t,e):null}},l))},Oe=(a(214),function(){return r.a.createElement("div",{color:"blue",className:"font-small pt-4 mt-4"},r.a.createElement(le.a,{className:"text-center text-md-left"},r.a.createElement(ce.a,null,r.a.createElement(oe.a,{md:"6"},r.a.createElement("h5",{className:"title"},"Resources"),r.a.createElement("p",null,"No matter where you are in your fight, here\u2019s where you need to be. Whether you\u2019ve been newly diagnosed, have been fighting against type 1 or type 2 diabetes for a while, or are helping a loved one, you\u2019ve come to the right place. This is the start of gaining a deeper understanding of how you can live a healthier life\u2014with all the tools, health tips, and food ideas you need. Wherever you\u2019re at with this disease, know that you have options and that you don\u2019t have to be held back. You can still live your best life. All you have to do is take action and stick with it.")),r.a.createElement(oe.a,{md:"3"},r.a.createElement("h5",{className:"title"},"Resources"),r.a.createElement("ul",null,r.a.createElement("li",{className:"list-unstyled"},r.a.createElement("a",{href:"https://www.diabetesselfmanagement.com/education/diabetes-101/",rel:"noopener noreferrer",target:"_blank"},"Diabetes 101")),r.a.createElement("li",{className:"list-unstyled"},r.a.createElement("a",{href:"https://www.diabetesdaily.com/blog/diabetes-eye-screenings-why-they-are-important-and-challenging-639862/",rel:"noopener noreferrer",target:"_blank"},"Diabetes and your eyes")),r.a.createElement("li",{className:"list-unstyled"},r.a.createElement("a",{href:"https://diatribe.org/diabetes-blogs-and-forums",rel:"noopener noreferrer",target:"_blank"},"diaTribe Learn")),r.a.createElement("li",{className:"list-unstyled"},r.a.createElement("a",{href:"https://www.cdc.gov/diabetes/basics/diabetes.html",rel:"noopener noreferrer",target:"_blank"},"The Basics")))),r.a.createElement(oe.a,{md:"3"},r.a.createElement("h5",{className:"title"},"Links"),r.a.createElement("ul",null,r.a.createElement("li",{className:"list-unstyled"},r.a.createElement("a",{href:"https://www.diabetes.org/"},"https://www.diabetes.org/")),r.a.createElement("li",{className:"list-unstyled"},r.a.createElement("a",{href:"https://www.cdc.gov/diabetes/index.html"},"https://www.cdc.gov/diabetes/index.html")),r.a.createElement("li",{className:"list-unstyled"},r.a.createElement("a",{href:"https://www.diabetesselfmanagement.com/"},"https://www.diabetesselfmanagement.com/")),r.a.createElement("li",{className:"list-unstyled"},r.a.createElement("a",{href:"https://www.diabetesdaily.com/"},"https://www.diabetesdaily.com/")))))),r.a.createElement("div",{className:"footer-copyright text-center py-3"},r.a.createElement(le.a,{fluid:!0},r.a.createElement("p",null,"Copyright Andrew Stehno, Matt Wigdahl, Luke Pettit, Tyler Stewart \xa9"))))}),je=a(247),De=a(248),Ce=function(e){return r.a.createElement("div",null,r.a.createElement(le.a,null,r.a.createElement(ce.a,null,r.a.createElement(oe.a,{md:"12"},r.a.createElement(M.a,{inverse:!0,className:"mt-5"},r.a.createElement(U.a,{width:"100%",src:"https://www.niddk.nih.gov/-/media/Images/Health-Information/Diabetes/diabetes-monitor-fruits-vegetables-small.png?la=en&hash=49F9B6874C5B57A4F87DCF5973301470",alt:"Card image cap"}),r.a.createElement(je.a,null,r.a.createElement(B.a,null,"DuhBeatis"),r.a.createElement(De.a,null,"lorem kdmnfgksjdnfksjdnfsdbhfnksjdnfbkjsbh")))))))},Ne=function(){return r.a.createElement("div",null,r.a.createElement(Ce,null),r.a.createElement(Oe,null))},xe=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(x.b,{history:s},r.a.createElement("header",null,r.a.createElement(N,null)),r.a.createElement(x.c,null,r.a.createElement(x.a,{path:"/",exact:!0,component:Ne}),r.a.createElement(ke,{exact:!0,path:"/Main",component:he}),r.a.createElement(ke,{exact:!0,path:"/Search",component:we}),r.a.createElement(ke,{exact:!0,path:"/update/:id",component:ye}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Se=a(80);a(215);c.a.render(r.a.createElement(function(e){var t=e.children,a=e.onRedirectCallback,l=void 0===a?E:a,c=Object(g.a)(e,["children","onRedirectCallback"]),o=Object(n.useState)(),s=Object(i.a)(o,2),u=s[0],p=s[1],v=Object(n.useState)(),w=Object(i.a)(v,2),y=w[0],k=w[1],O=Object(n.useState)(),j=Object(i.a)(O,2),D=j[0],C=j[1],N=Object(n.useState)(!0),x=Object(i.a)(N,2),S=x[0],T=x[1],F=Object(n.useState)(!1),L=Object(i.a)(F,2),R=L[0],I=L[1];Object(n.useEffect)(function(){!function(){var e=Object(h.a)(m.a.mark(function e(){var t,a,n,r,o;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f()(Object(d.a)({},c));case 2:if(t=e.sent,C(t),!window.location.search.includes("code=")){e.next=10;break}return e.next=7,t.handleRedirectCallback();case 7:a=e.sent,n=a.appState,l(n);case 10:return e.next=12,t.isAuthenticated();case 12:if(r=e.sent,p(r),!r){e.next=19;break}return e.next=17,t.getUser();case 17:o=e.sent,k(o);case 19:T(!1);case 20:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[]);var M=function(){var e=Object(h.a)(m.a.mark(function e(){var t,a,n=arguments;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:{},I(!0),e.prev=2,e.next=5,D.loginWithPopup(t);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.error(e.t0);case 10:return e.prev=10,I(!1),e.finish(10);case 13:return e.next=15,D.getUser();case 15:a=e.sent,k(a),p(!0);case 18:case"end":return e.stop()}},e,null,[[2,7,10,13]])}));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(h.a)(m.a.mark(function e(){var t;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return T(!0),e.next=3,D.handleRedirectCallback();case 3:return e.next=5,D.getUser();case 5:t=e.sent,T(!1),p(!0),k(t);case 9:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return r.a.createElement(b.Provider,{value:{isAuthenticated:u,user:y,loading:S,popupOpen:R,loginWithPopup:M,handleRedirectCallback:U,getIdTokenClaims:function(){return D.getIdTokenClaims.apply(D,arguments)},loginWithRedirect:function(){return D.loginWithRedirect.apply(D,arguments)},getTokenSilently:function(){return D.getTokenSilently.apply(D,arguments)},getTokenWithPopup:function(){return D.getTokenWithPopup.apply(D,arguments)},logout:function(){return D.logout.apply(D,arguments)}}},t)},{domain:Se.domain,client_id:Se.clientId,redirect_uri:window.location.origin,onRedirectCallback:function(e){s.push(e&&e.targetUrl?e.targetUrl:window.location.pathname)}},r.a.createElement(xe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},80:function(e){e.exports={domain:"white-fog-6598.auth0.com",clientId:"hPSst6wc0OpF5hoKJfvukFqTavH-ixDJ"}}},[[110,1,2]]]);
//# sourceMappingURL=main.6c1d8b1f.chunk.js.map