(window.webpackJsonp=window.webpackJsonp||[]).push([[46,3],{321:function(t,e,n){"use strict";n.r(e);var l={name:"Bar",components:{},data:function(){return{state:!1}},methods:{handleClick:function(){this.state=!this.state}}},o=n(2),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{class:"bar "+(t.state&&"active")},[n("div",{staticClass:"bar__open",on:{click:t.handleClick}},[t._t("icon",(function(){return[n("img",{attrs:{src:"/icons/menu-bar.svg",alt:"icon"}})]}))],2),t._v(" "),n("div",{staticClass:"bar__wrapper"},[n("div",{staticClass:"bar__close",on:{click:t.handleClick}},[n("img",{attrs:{src:"/icons/close.svg",alt:"close"}})]),t._v(" "),t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports},322:function(t,e,n){"use strict";n.r(e);n(48),n(62);var l={name:"Navbar",components:{Bar:n(321).default},data:function(){return{links:[{title:"My page",to:"/profile"},{title:"Following/Followers",to:"/profile/following"},{title:"Messages",to:"/profile/messages"},{title:"Communities",to:"/profile/communities"},{title:"My products",to:"/profile/products"},{title:"My sales",to:"/profile/sales"},{title:"My purchases",to:"/profile/purchases"},{title:"My suggestions",to:"/profile/suggestions"},{title:"Drafts",to:"/profile/drafts"},{title:"Settings",to:"/profile/settings"}]}},computed:{getActiveLink:function(){var t=this;return function(e){return t.$route.path.includes(e)?"profile-page-navbar__navlink active":"profile-page-navbar__navlink"}}}},o=n(2),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Bar",{staticClass:"profile-page-navbar"},t._l(t.links,(function(link,e){return n("NuxtLink",{key:e,class:t.getActiveLink(link.to),attrs:{to:link.to}},[t._v("\n    "+t._s(link.title)+"\n  ")])})),1)}),[],!1,null,null,null);e.default=component.exports}}]);