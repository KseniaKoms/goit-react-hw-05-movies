"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[168],{2168:function(t,n,e){e.r(n),e.d(n,{default:function(){return v}});var r=e(5861),a=e(885),c=e(7757),u=e.n(c),s=e(2791),i=e(6871),o=e(1858),p="Reviews_title__t265C",f=e(184),v=function(){var t=(0,s.useState)([]),n=(0,a.Z)(t,2),e=n[0],c=n[1],v=(0,i.UO)().movieId;return(0,s.useEffect)((function(){var t=function(){var t=(0,r.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,o.kh)(v);case 3:n=t.sent,c(n),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[v]),(0,f.jsx)("div",{children:0===e.length?(0,f.jsx)("p",{children:"no reviews"}):(0,f.jsx)("ul",{children:e.map((function(t){var n=t.author,e=t.content,r=t.id;return(0,f.jsxs)("li",{children:[(0,f.jsx)("p",{className:p,children:n}),(0,f.jsx)("p",{children:e})]},r)}))})})}},1858:function(t,n,e){e.d(n,{E$:function(){return f},gW:function(){return p},kh:function(){return h},ur:function(){return o},z6:function(){return v}});var r=e(5861),a=e(7757),c=e.n(a),u=e(4569),s=e.n(u);s().defaults.baseURL="https://api.themoviedb.org/3";var i="3c9b3437ebab156a512248e157c99300",o=function(){var t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("/trending/movie/day?api_key=".concat(i));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("/search/movie?api_key=".concat(i,"&query=").concat(n));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("/movie/".concat(n,"?api_key=").concat(i));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("/movie/".concat(n,"/credits?api_key=").concat(i));case 2:return e=t.sent,t.abrupt("return",e.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("/movie/".concat(n,"/reviews?api_key=").concat(i));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=168.cda0f601.chunk.js.map