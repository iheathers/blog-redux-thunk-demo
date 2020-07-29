(this["webpackJsonpblog-react-redux"]=this["webpackJsonpblog-react-redux"]||[]).push([[0],{29:function(e,t,n){e.exports=n(58)},58:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(5),s=n.n(c),u=n(4),o=n(2),i=n(28),l=Object(o.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_POSTS":return console.log("fetch posts:",e),t.payload;default:return console.log("default:",e),e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USER":return[].concat(Object(i.a)(e),[t.payload]);default:return e}}}),p=n(26),d=n(6),f=n(7),m=n(9),h=n(8),v=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){var e=this.props.user;return e?a.a.createElement("div",{className:"header"},e.name):null}}]),n}(a.a.Component),b=Object(u.b)((function(e,t){return{user:e.users.find((function(e){return e.id===t.userId}))}}),{})(v),E=function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement("i",{className:"large middle aligned icon user "}),a.a.createElement("div",{className:"content"},a.a.createElement("div",{className:"description"},a.a.createElement("h2",null,e.post.title),a.a.createElement("p",null,e.post.body)),a.a.createElement(b,{userId:e.post.userId})))},y=n(3),O=n.n(y),j=n(10),g=n(14),w=n.n(g),x=n(27),k=n.n(x).a.create({baseURL:"https://jsonplaceholder.typicode.com"}),N=function(){return function(){var e=Object(j.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.get("/posts");case 2:n=e.sent,t({type:"FETCH_POSTS",payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},C=function(e){return function(){var t=Object(j.a)(O.a.mark((function t(n){var r;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.get("/users/".concat(e));case 2:r=t.sent,n({type:"FETCH_USER",payload:r.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},S=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).renderList=function(){return e.props.posts.map((function(e){return a.a.createElement("div",{key:e.id,className:"item"},a.a.createElement(E,{post:e}))}))},e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchPostsAndUsers()}},{key:"render",value:function(){return a.a.createElement("div",{className:"ui relaxed divided list"},this.renderList())}}]),n}(a.a.Component),T=Object(u.b)((function(e){return{posts:e.posts,user:e.user}}),{fetchPostsAndUsers:function(){return function(){var e=Object(j.a)(O.a.mark((function e(t,n){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(N());case 2:w.a.uniq(w.a.map(n().posts,"userId")).forEach((function(e){return t(C(e))}));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}})(S),F=function(){return a.a.createElement("div",{className:"ui container"},a.a.createElement(T,null))},I=Object(o.d)(l,Object(o.a)(p.a));s.a.render(a.a.createElement(u.a,{store:I},a.a.createElement(F,null)),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.e51f1b6b.chunk.js.map