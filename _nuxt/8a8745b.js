(window.webpackJsonp=window.webpackJsonp||[]).push([[59,9,34,36,37,38,39],{319:function(t,e,r){"use strict";r.r(e);var n={name:"PostInteresting",props:{item:{type:Object,default:function(){}}},computed:{getPicture:function(){return!!this.item.picture&&"https://api.everigin.com".concat(JSON.parse(this.item.picture),".webp")}}},o=r(2),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.item?r("div",{staticClass:"post-interesting",on:{click:function(e){return e.stopPropagation(),t.$router.push("feed/"+t.item.id)}}},[r("figure",[r("img",{attrs:{src:t.getPicture,alt:""}}),t._v(" "),r("figcaption",[t._v("\n        "+t._s(t.item.name)+"\n      ")])]),t._v(" "),r("div",{staticClass:"post-interesting__body"},[r("NuxtLink",{staticClass:"post-interesting__user",attrs:{to:"#"}},[r("img",{attrs:{src:"/user.png",alt:""}}),t._v(" "),r("span",[t._v("Alexandra Iks")])]),t._v(" "),r("p",[t._v("First of all, you need to decide on the date and city of the event...")]),t._v(" "),r("NuxtLink",{staticClass:"post-interesting__comments",attrs:{to:"#"}},[r("img",{attrs:{src:"/icons/comments.svg",alt:""}}),t._v("\n      17 comments\n    ")])],1)]):t._e()}),[],!1,null,null,null);e.default=component.exports},324:function(t,e,r){"use strict";r.r(e);var n={name:"Photos"},o=r(2),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-photos"},t._l(6,(function(t){return r("div",{key:t,staticClass:"product-photos__item"},[r("img",{attrs:{src:"/content/01.png",alt:"product image"}})])})),0)}),[],!1,null,null,null);e.default=component.exports},325:function(t,e,r){"use strict";r.r(e);var n={name:"Preview"},o=r(2),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-gallery"},[r("div",{staticClass:"product-gallery__photos"},[t.$device.isDesktopOrTablet?r("vue-slick-carousel",{attrs:{"variable-width":!1,arrows:!0},scopedSlots:t._u([{key:"prevArrow",fn:function(){return[r("div",{staticClass:"custom-arrow"})]},proxy:!0},{key:"nextArrow",fn:function(){return[r("div",{staticClass:"custom-arrow custom-arrow__next"})]},proxy:!0}],null,!1,3127014239)},t._l(3,(function(t){return r("div",{key:t,staticClass:"default-photo product-gallery__photo"},[r("img",{attrs:{src:"/content/01.png",alt:""}})])})),0):t._e()],1),t._v(" "),r("div",{staticClass:"product-gallery__other"},[r("div",{staticClass:"product-gallery__btn-wrapper"},[t._t("body"),t._v(" "),t.$device.isMobile?r("eve-button",{staticClass:"add-cart__edit",attrs:{icon:""},scopedSlots:t._u([{key:"icon",fn:function(){return[r("img",{attrs:{src:"/icons/edit.svg",alt:"edit"}})]},proxy:!0}],null,!1,1123738517)},[t._v("\n        Edit a page\n      ")]):t._e()],2),t._v(" "),r("vue-slick-carousel",{staticClass:"product-gallery__videos",attrs:{"variable-width":!1,arrows:!1,dots:!0},scopedSlots:t._u([{key:"dots",fn:function(){},proxy:!0}])},[t._l(3,(function(t){return r("default-video",{key:t})})),t._v(" "),t._l(3,(function(t){return r("div",{key:t,staticClass:"default-photo product-gallery__photo"},[r("img",{attrs:{src:"/content/01.png",alt:""}})])}))],2)],1)])}),[],!1,null,null,null);e.default=component.exports},326:function(t,e,r){"use strict";r.r(e);var n={name:"AddCart",props:{editButton:{type:Boolean,default:!1},item:{type:Object,default:function(){}}},methods:{addToBasket:function(){this.$store.dispatch("basket/addToBasket",this.item)}}},o=r(2),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"add-cart"},[r("div",{staticClass:"add-cart__row"},[r("eve-button",{staticClass:"dark add-cart__button"},[t._v("\n      Buy it now\n    ")]),t._v(" "),r("eve-button",{staticClass:"add-cart__button",on:{onclick:t.addToBasket}},[t._v("\n      Add to cart\n    ")])],1),t._v(" "),t._m(0),t._v(" "),r("eve-button",{staticClass:"dark add-cart__button add-cart__mp"},[t._v("\n    Products in the marketplace\n  ")]),t._v(" "),t.editButton?r("eve-button",{staticClass:"add-cart__edit",attrs:{icon:""},scopedSlots:t._u([{key:"icon",fn:function(){return[r("img",{attrs:{src:"/icons/edit.svg",alt:"edit"}})]},proxy:!0}],null,!1,1123738517)},[t._v("\n    Edit a page\n  ")]):t._e()],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"add-cart__result"},[r("div",{staticClass:"add-cart__result-item"},[r("span",[t._v("Total purchased:")]),t._v(" 2560\n    ")]),t._v(" "),r("div",{staticClass:"add-cart__result-item"},[r("span",[t._v("In stock:")]),t._v(" few\n    ")]),t._v(" "),r("div",{staticClass:"add-cart__result-item"},[r("span",[t._v("In user baskets:")]),t._v(" 17\n    ")])])}],!1,null,null,null);e.default=component.exports},350:function(t,e,r){"use strict";r.r(e);var n={name:"Videos"},o=r(2),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-videos"},t._l(5,(function(t){return r("default-video",{key:t})})),1)}),[],!1,null,null,null);e.default=component.exports},351:function(t,e,r){"use strict";r.r(e);var n={name:"HideText"},o=r(2),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",{staticClass:"default-text hide-text"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},382:function(t,e,r){"use strict";r.r(e);var n=r(3),o=(r(27),r(324)),c=r(319),l=r(325),d=r(326),_=r(350),v=r(351),f={components:{Videos:_.default,AddCart:d.default,Preview:l.default,PostInteresting:c.default,Photos:o.default,HideText:v.default},data:function(){return{tabs:[{tabContent:"Page in the catalog",link:"/catalog/".concat(this.$route.params.product),activeRouter:"catalog"},{tabContent:"Product on the marketplace",link:"/marketplace/".concat(this.$route.params.product),activeRouter:"marketplace"}]}},computed:{getSingleProduct:function(){return this.$store.getters["catalog/getSingleProduct"]},getSingleProductComments:function(){return this.$store.getters["catalog/getSingleProductComments"]}},created:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("catalog/getSingleProduct",t.$route.params.product);case 2:return e.next=4,t.$store.dispatch("catalog/getSingleProductComments",t.$route.params.product);case 4:case"end":return e.stop()}}),e)})))()}},m=r(2),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"item-page catalog-product container"},[r("main",{staticClass:"main"},[r("router-tabs",{attrs:{items:t.tabs}}),t._v(" "),t.getSingleProduct?r("div",{staticClass:"item-page__columns"},[t.$device.isDesktop?r("div",{staticClass:"item-page__leftcol"},[r("Photos")],1):t._e(),t._v(" "),r("div",{staticClass:"item-page__content catalog-product__content"},[r("Preview",{scopedSlots:t._u([{key:"body",fn:function(){return[r("div",{staticClass:"product-info"},[r("span",{staticClass:"product-info__title"},[t._v(t._s(t.getSingleProduct.name))]),t._v(" "),t.getSingleProduct.price&&"0"!==t.getSingleProduct.price?r("div",{staticClass:"product-info__price"},[t._v(t._s(t.getSingleProduct.price)+" "+t._s(t.getSingleProduct.currency))]):t._e(),t._v(" "),r("rating",{attrs:{stars:t.getSingleProduct.vote}})],1),t._v(" "),r("eve-button",{staticClass:"product-gallery__button"},[r("strong",[t._v("Go to the seller's page")])])]},proxy:!0}],null,!1,4000877179)}),t._v(" "),t.$device.isMobile?r("AddCart",{attrs:{item:t.getSingleProduct}}):t._e(),t._v(" "),t.getSingleProduct.content?r("HideText",[t._v("\n          "+t._s(t.getSingleProduct.content)+"\n        ")]):t._e(),t._v(" "),r("h2",{staticClass:"default-h2"},[t._v("Popular articles")]),t._v(" "),r("div",{staticClass:"catalog-product__articles"},[r("carousel",{attrs:{margin:12,items:3,loop:!1,dots:!1,responsive:{0:{items:2},760:{items:4},1024:{items:3}}}},t._l(6,(function(t){return r("PostInteresting",{key:t})})),1)],1),t._v(" "),r("h2",{staticClass:"default-h2"},[t._v("The best photos of buyers")]),t._v(" "),r("div",{staticClass:"catalog-product__user-photos"},t._l(3,(function(t){return r("div",{key:t,staticClass:"default-photo"},[r("img",{attrs:{src:"/content/01.png",alt:"user photo"}})])})),0),t._v(" "),r("h2",{staticClass:"default-h2"},[t._v("Group discussions")]),t._v(" "),r("div",{staticClass:"catalog-product__discussions"},t._l(3,(function(t){return r("discussion",{key:t})})),1)],1),t._v(" "),r("div",{staticClass:"item-page__rightcol"},[t.$device.isDesktopOrTablet?r("AddCart",{attrs:{"edit-button":""}}):t._e(),t._v(" "),r("h2",{staticClass:"default-h2"},[t._v("Video")]),t._v(" "),r("Videos")],1)]):t._e()],1)])}),[],!1,null,null,null);e.default=component.exports}}]);