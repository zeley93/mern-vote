(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{212:function(e,t,a){"use strict";a.r(t);var n=a(14),r=a(15),l=a(18),c=a(16),s=a(19),o=a(0),i=a.n(o),u=a(78),m=(a(91),a(6)),d=a(216),p=a(36),h=a.n(p),E=a(20),f=a(80),v={isAuthenticated:!1,user:{}},b=a(55),g=Object(E.c)({error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{message:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ERROR":return console.log(t.error),Object(b.a)({},e,{message:t.error});case"REMOVE_ERROR":return Object(b.a)({},e,{message:null});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return{isAuthenticated:!!Object.keys(t.user).length,user:t.user};default:return e}},polls:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_POLLS":return t.polls;default:return e}},currentPoll:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_POLL":return t.poll;default:return e}}}),N=Object(E.e)(g,{error:{message:null}},Object(E.d)(Object(E.a)(f.a))),O=a(4),w=a.n(O),k=a(81),j=a(9),y=function(e){return{type:"ADD_ERROR",error:e}},R=a(40),S=a.n(R),C={setToken:function(e){e?S.a.defaults.headers.common.Authorization="Bearer ".concat(e):delete S.a.defaults.headers.common.Authorization},call:function(){var e=Object(j.a)(w.a.mark(function e(t,a,n){var r;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a[t]("".concat("http://localhost:4000/api","/").concat(a),n);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}},e)}));return function(t,a,n){return e.apply(this,arguments)}}()},x=function(e){return{type:"SET_CURRENT_USER",user:e}},A=function(e){C.setToken(e)},P=function(){return function(e){localStorage.clear(),C.setToken(null),e(x({})),e({type:"REMOVE_ERROR"})}},T=function(e){return{type:"SET_POLLS",polls:e}},_=function(e){return{type:"SET_CURRENT_POLL",poll:e}},z=a(218),F=a(214),V=a(217),L=a(215),M=a(24),U=a(3),D=a(213),q=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={username:"",password:"",email:"",ethAddress:""},a.handleChange=a.handleChange.bind(Object(U.a)(Object(U.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(U.a)(Object(U.a)(a))),a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(M.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var t=this.state,a=t.username,n=t.password,r=t.ethAddress,l=t.email,c=this.props.authType;e.preventDefault(),this.props.authUser(c||"login",{username:a,password:n,ethAddress:r,email:l})}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e,t,a,n,r,l=this.state,c=l.username,s=l.password,o=l.email,u=l.ethAddress,m=this.props.authType;return"register"===m?(e=i.a.createElement("input",{type:"text",value:u,name:"ethAddress",onChange:this.handleChange,autoComplete:"off",className:"form-input validate"}),t=i.a.createElement("label",{className:"form-label",htmlFor:"ethAddress"},"ethAddress "," "),n=i.a.createElement("input",{type:"text",value:o,name:"email",onChange:this.handleChange,autoComplete:"off",className:"form-input validate"}),r=i.a.createElement("label",{className:"form-label",htmlFor:"email"},"email "," "),a=i.a.createElement(D.a,{className:"",to:"/login"},"login ?")):(e=null,a=i.a.createElement(D.a,{className:"",to:"/register"},"register ?")),i.a.createElement("div",{className:"row"},i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("form",{className:"col s8 m6 l4 offset-s2 offset-m4 offset-l4",onSubmit:this.handleSubmit},i.a.createElement("div",{className:"card blue-grey"},i.a.createElement("div",{className:"card-content"},i.a.createElement("h1",{className:"card-title"},m),i.a.createElement("div",{className:"input-field"},i.a.createElement("input",{id:"username",type:"text",value:c,name:"username",onChange:this.handleChange,autoComplete:"off",className:"validate"}),i.a.createElement("label",{htmlFor:"username"},"USERNAME")),i.a.createElement("div",{className:"input-field"},i.a.createElement("input",{id:"password",type:"password",value:s,name:"password",onChange:this.handleChange,className:"validate"}),i.a.createElement("label",{htmlFor:"password"},"PASSWORD")),i.a.createElement("div",{className:"input-field"},r," ",n),i.a.createElement("div",{className:"input-field"},t," ",e),i.a.createElement("div",{className:"buttons_center"},i.a.createElement("button",{className:"button",type:"submit"},"Submit"))),i.a.createElement("div",{className:"card-action"},i.a.createElement(D.a,{className:"",to:"/poll/new"},"Forgot password ?")," ",a))))}}]),t}(o.Component),W=Object(m.b)(function(){return{}},{authUser:function(e,t){return function(){var a=Object(j.a)(w.a.mark(function a(n){var r,l,c,s;return w.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,C.call("post","auth/".concat(e),t);case 3:r=a.sent,l=r.token,c=Object(k.a)(r,["token"]),localStorage.setItem("jwtToken",l),C.setToken(l),n(x(c)),n({type:"REMOVE_ERROR"}),a.next=16;break;case 12:a.prev=12,a.t0=a.catch(0),s=a.t0.response.data,n(y(s.message));case 16:case"end":return a.stop()}},a,null,[[0,12]])}));return function(e){return a.apply(this,arguments)}}()},logout:P})(q),H=Object(m.b)(function(e){return{error:e.error}})(function(e){var t=e.error;return i.a.createElement(o.Fragment,null," ",t.message&&i.a.createElement("div",{className:"error"},t.message)," ")}),I=function(e){var t=e.authType;return e.isAuthenticated?i.a.createElement(L.a,{to:"/"}):i.a.createElement("div",null,i.a.createElement(H,null),i.a.createElement(W,{authType:t}))},B=a(82),J=Object(V.a)(Object(m.b)(function(e){return{poll:e.currentPoll}},{vote:function(e,t){return function(){var a=Object(j.a)(w.a.mark(function a(n){var r,l;return w.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,C.call("post","polls/".concat(e),t);case 3:r=a.sent,n(_(r)),n({type:"REMOVE_ERROR"}),a.next=12;break;case 8:a.prev=8,a.t0=a.catch(0),l=a.t0.response.data,n(y(l.message));case 12:case"end":return a.stop()}},a,null,[[0,8]])}));return function(e){return a.apply(this,arguments)}}()},deletePoll:function(e){return function(){var t=Object(j.a)(w.a.mark(function t(a){var n,r;return w.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,C.call("delete","polls/".concat(e));case 3:n=t.sent,a(_(n)),a({type:"REMOVE_ERROR"}),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),r=t.t0.response.data,a(y(r.message));case 12:case"end":return t.stop()}},t,null,[[0,8]])}));return function(e){return t.apply(this,arguments)}}()}})(function(e){var t=e.poll,a=e.vote,n=e.deletePoll,r=t.options&&t.options.map(function(e){return i.a.createElement("button",{onClick:function(){return a(t._id,{answer:e.option})},className:"button",key:e._id},e.option)}),l=t.options&&{labels:t.options.map(function(e){return e.option}),datasets:[{label:t.question,backgroundColor:t.options.map(function(e){return"#"+Math.random().toString(16).slice(2,8)}),borderColor:"#323643",data:t.options.map(function(e){return e.votes}),defaultFontColor:"#FFFFFF"}]};return i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"col s6 m6"},i.a.createElement("div",{className:"card blue-grey darken-1"},i.a.createElement("div",{className:"card-content white-text"},i.a.createElement("span",{className:"card-title"},t.question),i.a.createElement("p",null,"Infos from the smart contract")),i.a.createElement("div",{className:"card-action"},i.a.createElement("ul",null,i.a.createElement("li",null,r),i.a.createElement("li",null,i.a.createElement("button",{className:"button",onClick:function(){return n(t._id)}},"Delete poll")))))),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"col s6 m6"},i.a.createElement("div",{className:"card blue-grey lighten-2"},i.a.createElement("div",{className:"card-content"},i.a.createElement("span",{className:"card-title"},"Votes"),i.a.createElement("p",null,"Nice graphic of the votes"),t.options&&i.a.createElement(B.a,{data:l})))))))})),Q=a(85),G=(a(211),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={sorted:[],page:0,pageSize:10,expanded:{},resized:[],filtered:[]},a.handleSelect=a.handleSelect.bind(Object(U.a)(Object(U.a)(a))),a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.getSlicedPolls)()}},{key:"handleSelect",value:function(e){this.props.history.push("/polls/".concat(e))}},{key:"render",value:function(){var e=this,t=this.props,a=(t.getPolls,t.getUserPolls,t.auth),n=(t.getSlicedPolls,this.props.polls.map(function(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1];return i.a.createElement(o.Fragment,{key:t._id},i.a.createElement("tr",{className:""},i.a.createElement("td",null,t.question),i.a.createElement("td",null," voters list inc soon "),i.a.createElement("td",null," Poll status inc soon "),i.a.createElement("td",null," Voted inc soon "),i.a.createElement("td",null," Participation inc soon "),i.a.createElement("td",null,i.a.createElement("button",{className:"btn-small buttons_center z-depth-1",onClick:function(){return e.handleSelect(t._id)}},i.a.createElement("i",{className:"material-icons"},"send")))))}));return console.log(),i.a.createElement(o.Fragment,null,a.isAuthenticated&&i.a.createElement("div",{className:"container"},i.a.createElement(Q.a,{data:this.props.polls,columns:[{Header:"Poll App",columns:[{Header:"User",accessor:"user.username"},{Header:"Question",accessor:"question"},{Header:"Voters",id:"voters",accessor:function(e){return e.voters}}]}],filterable:!0,maxWidth:"160px ",defaultPageSize:10,className:"-striped -highlight",sorted:this.state.sorted,page:this.state.page,pageSize:this.state.pageSize,expanded:this.state.expanded,resized:this.state.resized,filtered:this.state.filtered,onSortedChange:function(t){return e.setState({sorted:t})},onPageChange:function(t){return e.setState({page:t})},onPageSizeChange:function(t,a){return e.setState({page:a,pageSize:t})},onExpandedChange:function(t){return e.setState({expanded:t})},onResizedChange:function(t){return e.setState({resized:t})},onFilteredChange:function(t){return e.setState({filtered:t})}}),i.a.createElement("div",{className:"section"}),i.a.createElement("div",{className:"row"},i.a.createElement(D.a,{className:"btn-large col s2 m2 l2 offset-s2 offset-m2 offset-l3 z-depth-3",to:"/poll/new"},"New Poll"),i.a.createElement("div",{className:"dropdown"},i.a.createElement("button",{onClick:"myFunction()",className:"dropbtn"},"Dropdown"),i.a.createElement("div",{id:"myDropdown",className:"dropdown-content"},i.a.createElement(D.a,{className:"btn-large col s2 m2 l2 offset-s2 offset-m2 offset-l3 z-depth-3",to:"/poll/new"},"New Poll"),i.a.createElement(D.a,{className:"btn-large col s2 m2 l2 offset-s2 offset-m2 offset-l3 z-depth-3",to:"/poll/new"},"New Poll")))),i.a.createElement("div",{className:"section"})),i.a.createElement("br",null),a.isAuthenticated&&i.a.createElement("div",{className:"container z-depth-4"},i.a.createElement("table",{className:"responsive-table centered z-depth-1"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null," Name "),i.a.createElement("th",null," Voters List "),i.a.createElement("th",null," Poll Status "),i.a.createElement("th",null," voted ? "),i.a.createElement("th",null," Participation "))),i.a.createElement("tbody",null,n))),!a.isAuthenticated&&i.a.createElement("ul",{className:"container row"},i.a.createElement("li",null,i.a.createElement(D.a,{className:"btn-large teal col s2 m2 l2 darken-2 z-depth-5",to:"/register"},"Register")),i.a.createElement("li",null,i.a.createElement(D.a,{className:"btn-large teal col s2 m2 l2 offset-s1 offset-m1 offset-l1 darken-2 z-depth-5",to:"/login"},"Login"))))}}]),t}(o.Component)),K=Object(m.b)(function(e){return{auth:e.auth,polls:e.polls}},{getPolls:function(){return function(){var e=Object(j.a)(w.a.mark(function e(t){var a,n;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.call("get","polls");case 3:a=e.sent,t(T(a)),t({type:"REMOVE_ERROR"}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),n=e.t0.response.data,t(y(n.message));case 12:case"end":return e.stop()}},e,null,[[0,8]])}));return function(t){return e.apply(this,arguments)}}()},getUserPolls:function(){return function(){var e=Object(j.a)(w.a.mark(function e(t){var a,n;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.call("get","polls/user");case 3:a=e.sent,t(T(a)),t({type:"REMOVE_ERROR"}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),n=e.t0.response.data,t(y(n.message));case 12:case"end":return e.stop()}},e,null,[[0,8]])}));return function(t){return e.apply(this,arguments)}}()},getSlicedPolls:function(){return function(){var e=Object(j.a)(w.a.mark(function e(t){var a,n,r;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.call("get","polls");case 3:a=e.sent,console.log("ceci est la taille de polls : "+a.length),n=a.slice(a.length-5,a.length),t(T(n)),t({type:"REMOVE_ERROR"}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),r=e.t0.response.data,t(y(r.message));case 14:case"end":return e.stop()}},e,null,[[0,10]])}));return function(t){return e.apply(this,arguments)}}()}})(G),$=a(29),X=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={question:"",options:["",""],voters:["",""]},a.handleChange=a.handleChange.bind(Object(U.a)(Object(U.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(U.a)(Object(U.a)(a))),a.addAnswer=a.addAnswer.bind(Object(U.a)(Object(U.a)(a))),a.handleAnswer=a.handleAnswer.bind(Object(U.a)(Object(U.a)(a))),a.handleVoter=a.handleVoter.bind(Object(U.a)(Object(U.a)(a))),a.addVoter=a.addVoter.bind(Object(U.a)(Object(U.a)(a))),a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(M.a)({},e.target.name,e.target.value))}},{key:"addVoter",value:function(){this.setState({voters:[].concat(Object($.a)(this.state.voters),[""])})}},{key:"addAnswer",value:function(){this.setState({options:[].concat(Object($.a)(this.state.options),[""])})}},{key:"handleAnswer",value:function(e,t){var a=Object($.a)(this.state.options);a[t]=e.target.value,this.setState({options:a})}},{key:"handleVoter",value:function(e,t){var a=Object($.a)(this.state.voters);a[t]=e.target.value,this.setState({voters:a})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.createPoll(this.state),this.props.history.push("/")}},{key:"render",value:function(){var e=this,t=this.state.options.map(function(a,n){return i.a.createElement(o.Fragment,{key:n},i.a.createElement("label",{className:"label-info black-text"},"option"),i.a.createElement("input",{className:"input-field",type:"text",value:t,onChange:function(t){return e.handleAnswer(t,n)}}))}),a=this.state.voters.map(function(t,n){return i.a.createElement(o.Fragment,{key:n},i.a.createElement("label",{className:"label-info black-text"},"voter"),i.a.createElement("input",{className:"input-field",type:"text",value:a,onChange:function(t){return e.handleVoter(t,n)}}))});return i.a.createElement("div",{className:"row"},i.a.createElement("form",{className:"form",onSubmit:this.handleSubmit},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"card blue-grey darken-1"},i.a.createElement("div",{className:"card-content"},i.a.createElement("label",{className:"form-label black-text",htmlFor:"question"},"question"),i.a.createElement("input",{className:"input-field",type:"text",name:"question",value:this.state.question,onChange:this.handleChange}),i.a.createElement("div",{className:"container"},t,i.a.createElement("div",{className:"buttons_center"},i.a.createElement("button",{className:"button",type:"button",onClick:this.addAnswer},"Add options")),i.a.createElement("div",{className:"container"},a),i.a.createElement("div",{className:"buttons_center"},i.a.createElement("button",{className:"button",type:"button",onClick:this.addVoter},"Add Voter")),i.a.createElement("div",{className:"buttons_center"},i.a.createElement("button",{className:"button",type:"submit"},"Submit"))))))))}}]),t}(o.Component),Y=Object(V.a)(Object(m.b)(function(){return{}},{createPoll:function(e){return function(){var t=Object(j.a)(w.a.mark(function t(a){var n,r;return w.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,C.call("post","polls",e);case 3:n=t.sent,a(_(n)),a({type:"REMOVE_ERROR"}),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),r=t.t0.response.data,a(y(r.message));case 12:case"end":return t.stop()}},t,null,[[0,8]])}));return function(e){return t.apply(this,arguments)}}()}})(X));if(localStorage.jwtToken){A(localStorage.jwtToken);try{N.dispatch(x(h()(localStorage.jwtToken)))}catch(oe){N.dispatch(x({})),N.dispatch(y(oe))}}var Z=Object(V.a)(function(e){return i.a.createElement(m.a,{store:N},i.a.createElement(o.Fragment,null,i.a.createElement("h1",null,"UI Test Page"),i.a.createElement("h2",null,"Testing Error Component: "),i.a.createElement(H,null),i.a.createElement("hr",null),i.a.createElement("h2",null,"Testing Auth Component: "),i.a.createElement(W,null),i.a.createElement("hr",null),i.a.createElement("h2",null,"Testing Create Poll Component: "),i.a.createElement(Y,null),i.a.createElement("hr",null),i.a.createElement("h2",null,"Testing Polls Component: "),i.a.createElement(K,e),i.a.createElement("hr",null),i.a.createElement("h2",null,"Testing Poll Component: "),i.a.createElement(J,null),i.a.createElement("hr",null),i.a.createElement("h2",null,"Testing Drizzle contract Component: "),i.a.createElement("hr",null)))}),ee=function(e){return i.a.createElement("div",null,i.a.createElement(K,e),i.a.createElement(H,null))},te=function(e){var t=e.match;return(0,e.getPoll)(t.params.id),i.a.createElement("div",null,i.a.createElement(H,null),i.a.createElement(J,null))},ae=function(e){return e.isAuthenticated?i.a.createElement("div",null,i.a.createElement(H,null),i.a.createElement(Y,null)):i.a.createElement(L.a,{to:"/login"})},ne=Object(V.a)(Object(m.b)(function(e){return{auth:e.auth}},{getCurrentPoll:function(e){return function(){var t=Object(j.a)(w.a.mark(function t(a){var n,r;return w.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,C.call("get","polls/".concat(e));case 3:n=t.sent,a(_(n)),a({type:"REMOVE_ERROR"}),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),r=t.t0.response.data,a(y(r));case 12:case"end":return t.stop()}},t,null,[[0,8]])}));return function(e){return t.apply(this,arguments)}}()}})(function(e){var t=e.auth,a=e.getCurrentPoll;return i.a.createElement("main",null,i.a.createElement(z.a,null,i.a.createElement(F.a,{exact:!0,path:"/",render:function(e){return i.a.createElement(ee,e)}}),i.a.createElement(F.a,{exact:!0,path:"/login",render:function(){return i.a.createElement(I,{authType:"login",isAuthenticated:t.isAuthenticated})}}),i.a.createElement(F.a,{exact:!0,path:"/poll/new",render:function(){return i.a.createElement(ae,{isAuthenticated:t.isAuthenticated})}}),i.a.createElement(F.a,{exact:!0,path:"/register",render:function(){return i.a.createElement(I,{authType:"register",isAuthenticated:t.isAuthenticated})}}),i.a.createElement(F.a,{exact:!0,path:"/polls/:id",render:function(e){return i.a.createElement(te,Object.assign({getPoll:function(e){return a(e)}},e))}}),i.a.createElement(F.a,{exact:!0,path:"/test",render:function(){return i.a.createElement(Z,null)}})))})),re=Object(m.b)(function(e){return{auth:e.auth}},{logout:P})(function(e){var t=e.auth,a=e.logout;return i.a.createElement("nav",null,i.a.createElement("div",{className:"nav-wrapper teal darken-2 z-depth-5"},i.a.createElement("ul",{id:"nav-mobile",className:" text-center"},i.a.createElement("li",null,"BLOCKCHAIN VOTING")),i.a.createElement("ul",{id:"nav-mobile",className:"right"},i.a.createElement("li",null,t.isAuthenticated&&i.a.createElement(o.Fragment,null,i.a.createElement("button",{className:"btn teal darken-2 z-depth-5",onClick:a},"Logout"),t.isAuthenticated&&i.a.createElement("p",{className:"navbar-user"},"Logged in as ",t.user.username))),!t.isAuthenticated&&i.a.createElement(o.Fragment,null,i.a.createElement("li",null,i.a.createElement(D.a,{className:"btn teal darken-2 z-depth-5",to:"/register"},"Register")),i.a.createElement("li",null,i.a.createElement(D.a,{className:"btn teal darken-2 z-depth-5",to:"/login"},"Login"))))),i.a.createElement(o.Fragment,null,i.a.createElement("div",{className:"sidebar teal darken-2 z-depth-5"},i.a.createElement("ul",{id:"nav-mobile",className:"left active"},i.a.createElement("div",{className:"row"},i.a.createElement("li",null,i.a.createElement(D.a,{className:"btn",to:"/"},i.a.createElement("i",{className:"material-icons"},"home"),"Home")))))))});if(localStorage.jwtToken){A(localStorage.jwtToken);try{N.dispatch(x(h()(localStorage.jwtToken)))}catch(oe){N.dispatch(x({})),N.dispatch(y(oe))}}var le=function(){return i.a.createElement(m.a,{store:N},i.a.createElement(d.a,null,i.a.createElement(o.Fragment,null,i.a.createElement(re,null),i.a.createElement(ne,null))))},ce=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function se(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.Component;!function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");ce?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):se(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):se(e)})}}()},86:function(e,t,a){e.exports=a(212)},91:function(e,t,a){}},[[86,1,2]]]);
//# sourceMappingURL=main.509c8da9.chunk.js.map