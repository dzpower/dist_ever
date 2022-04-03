(window.webpackJsonp=window.webpackJsonp||[]).push([[64,3,10,40,42],{306:function(t,e,n){"use strict";n.r(e);var o={name:"Bar",components:{},data:function(){return{state:!1}},methods:{handleClick:function(){this.state=!this.state}}},l=n(2),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{class:"bar "+(t.state&&"active")},[n("div",{staticClass:"bar__open",on:{click:t.handleClick}},[t._t("icon",(function(){return[n("img",{attrs:{src:"/icons/menu-bar.svg",alt:"icon"}})]}))],2),t._v(" "),n("div",{staticClass:"bar__wrapper"},[n("div",{staticClass:"bar__close",on:{click:t.handleClick}},[n("img",{attrs:{src:"/icons/close.svg",alt:"close"}})]),t._v(" "),t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports},307:function(t,e,n){"use strict";n.r(e);var o={name:"Navbar",components:{Bar:n(306).default},data:function(){return{links:[{title:"My page",to:"/profile"},{title:"Following/Followers",to:"/profile/following"},{title:"Messages",to:"/profile/messages"},{title:"Communities",to:"/profile/communities"},{title:"My sales",to:"/profile/sales"},{title:"My purchases",to:"/profile/purchases"},{title:"My suggestions",to:"/profile/suggestions"},{title:"Drafts",to:"/profile/drafts"},{title:"Settings",to:"/profile/settings"}]}},computed:{getActiveLink:function(){var t=this;return function(e){return t.$route.path===e?"profile-page-navbar__navlink active":"profile-page-navbar__navlink"}}}},l=n(2),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Bar",{staticClass:"profile-page-navbar"},t._l(t.links,(function(link,e){return n("NuxtLink",{key:e,class:t.getActiveLink(link.to),attrs:{to:link.to}},[t._v("\n    "+t._s(link.title)+"\n  ")])})),1)}),[],!1,null,null,null);e.default=component.exports},318:function(t,e,n){"use strict";n.r(e);var o={name:"Items",components:{},props:{title:{type:String}}},l=n(2),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"items"},[n("div",{staticClass:"items__header"},[n("h2",{staticClass:"default-h2"},[t._v(t._s(t.title))]),t._v(" "),t._t("element")],2),t._v(" "),n("div",{staticClass:"items__body"},[t._t("default")],2),t._v(" "),n("div",{staticClass:"items__footer"})])}),[],!1,null,null,null);e.default=component.exports},331:function(t,e,n){"use strict";n.r(e);var o={name:"Community",props:{visited:{type:Boolean,default:!1},item:{type:Object,default:function(){}}},computed:{getPicture:function(){var t;return!!this.item.picture&&"https://api.everigin.com".concat(JSON.parse(null==this||null===(t=this.item)||void 0===t?void 0:t.picture)[0],".webp")}},methods:{openCommunity:function(){this.$router.push("/community/".concat(this.item.id))}}},l=n(2),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.visited?"community community--visited":"community"},[n("div",{staticClass:"profile-bar__avatar community__avatar",on:{click:t.openCommunity}},[n("img",{attrs:{src:t.getPicture,alt:"image"}})]),t._v(" "),n("div",{staticClass:"community__wrapper"},[n("span",{staticClass:"community__name",on:{click:t.openCommunity}},[t._v("\n      "+t._s(t.item?t.item.name:"")+"\n    ")]),t._v(" "),t.visited?t._e():n("span",{staticClass:"community__subs"},[t._v("3459 participant")])]),t._v(" "),t.visited?t._e():n("div",{staticClass:"community__btn"},[t.$device.isDesktopOrTablet?n("img",{attrs:{src:"/icons/3-dot.svg",alt:"tool bar"}}):t._e()])])}),[],!1,null,null,null);e.default=component.exports},359:function(t,e,n){"use strict";n.r(e);var o=n(3),l=(n(27),n(307)),r=n(331),c={components:{Items:n(318).default,Community:r.default,Navbar:l.default},data:function(){return{tabs:[{tabContent:"Communities",link:"/profile/communities",activeRouter:"communities"},{tabContent:"Management",link:"/profile/management",activeRouter:"management"}]}},computed:{getCommunities:function(){return this.$store.getters["content/getCommunities"]}},created:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("content/fetchCommunities");case 2:case"end":return e.stop()}}),e)})))()},methods:{openCommunity:function(){console.log(1)}}},m=n(2),component=Object(m.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item-page profile-page container"},[n("main",{staticClass:"main"},[n("div",{staticClass:"item-page__columns"},[n("div",{staticClass:"item-page__leftcol"},[n("Navbar",{staticClass:"item-page-navbar"})],1),t._v(" "),n("div",{staticClass:"item-page__content"},[n("h2",{staticClass:"default-h2 profile-page__title-btn"},[n("span",{staticClass:"profile-page__subtitle"},[t._v("Recently visited")]),t._v(" "),t.$device.isDesktopOrTablet?n("eve-button",[t._v("Clear")]):t._e()],1),t._v(" "),n("div",{staticClass:"profile-page__visited"}),t._v(" "),t.$device.isDesktopOrTablet?n("router-tabs",{attrs:{items:t.tabs}}):t._e(),t._v(" "),n("Items",{staticClass:"profile-page__communities"},t._l(t.getCommunities,(function(t,e){return n("Community",{key:e,attrs:{item:t}})})),1)],1),t._v(" "),t.$device.isDesktopOrTablet?n("div",{staticClass:"item-page__rightcol"},[n("search-field",{staticClass:"profile-page__search",attrs:{placeholder:"Search"}}),t._v(" "),n("h2",{staticClass:"default-h2"},[t._v("Recommendations")]),t._v(" "),n("div",{staticClass:"profile-page__recommendations"},t._l(t.getCommunities,(function(t,e){return n("Community",{key:e,staticClass:"community--small",attrs:{item:t}})})),1)],1):t._e()])])])}),[],!1,null,null,null);e.default=component.exports}}]);