"use strict";(self.webpackChunkworkout=self.webpackChunkworkout||[]).push([[846],{2018:function(t,n,e){e.d(n,{Z:function(){return a}});var s="notFound_notfound__kFEWF",i=e(184),a=function(t){var n=t.text;return(0,i.jsx)("div",{className:s,children:(0,i.jsx)("p",{children:n})})}},6419:function(t,n,e){e.d(n,{Z:function(){return f}});var s=e(1087),i=e(9126),a=e(8820),c="watchingList_mylist__tXrMM",r="watchingList_mylist__item__YsMJK",l="watchingList_mylist__img__ZAZbd",o="watchingList_mylist__btns__VpGAQ",u="watchingList_mylist__btn__AgHfC",_="watchingList_mylist__svg__ibbHR",m="watchingList_mylist__title__Q5vR3",h=e(184),f=function(t){var n=t.movies,e=t.onDeleteClick;return(0,h.jsx)("ul",{className:c,children:n.map((function(t){var n=t.id,c=t.title,f=t.poster_path;return(0,h.jsxs)("li",{className:r,children:[(0,h.jsx)("img",{className:l,src:"https://image.tmdb.org/t/p/w780/".concat(f),alt:c,width:"205"}),(0,h.jsx)("p",{className:m,children:c}),(0,h.jsxs)("div",{className:o,children:[(0,h.jsx)("button",{className:u,children:(0,h.jsx)(s.rU,{to:"/movie/".concat(n),children:(0,h.jsx)(i.Vjl,{size:30,className:_})})}),(0,h.jsx)("button",{className:u,onClick:function(){return e(n)},children:(0,h.jsx)(a.VPh,{size:22,className:_})})]})]},n)}))})}},4846:function(t,n,e){e.r(n);var s=e(4165),i=e(5861),a=e(9439),c=e(2791),r=e(9834),l=e(6268),o=e(2018),u=e(6419),_=e(184);n.default=function(){var t=(0,c.useState)([]),n=(0,a.Z)(t,2),e=n[0],m=n[1],h=(0,c.useState)(!1),f=(0,a.Z)(h,2),g=f[0],d=f[1];(0,c.useEffect)((function(){var t=localStorage.getItem("watchingList"),n=t?JSON.parse(t):[],e=function(){var t=(0,i.Z)((0,s.Z)().mark((function t(){var e;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Promise.all(n.map((function(t){return(0,r.TP)(t)})));case 3:e=t.sent,m(e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u043e\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u0456 \u0443\u043b\u044e\u0431\u043b\u0435\u043d\u0438\u0445 \u0444\u0456\u043b\u044c\u043c\u0456\u0432:",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();e()}),[g]);return(0,_.jsxs)("div",{className:l.Z.container,children:[(0,_.jsx)("h1",{className:l.Z.title,children:"Watching list"}),0===e.length?(0,_.jsx)(o.Z,{text:"Firstly add movies to your watching list"}):(0,_.jsx)(u.Z,{movies:e,onDeleteClick:function(t){var n=localStorage.getItem("watchingList"),e=(n?JSON.parse(n):[]).filter((function(n){return n!==parseInt(t)}));m(e),localStorage.setItem("watchingList",JSON.stringify(e)),console.log(t),d(!g)}})]})}},6268:function(t,n){n.Z={container:"myList_container__wGjPG",title:"myList_title__0Gxpf"}}}]);
//# sourceMappingURL=846.cebe3b59.chunk.js.map