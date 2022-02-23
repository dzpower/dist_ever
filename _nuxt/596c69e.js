(window.webpackJsonp=window.webpackJsonp||[]).push([[60,11,15,19,20],{307:function(t,e,r){"use strict";r.r(e);r(220);var n={name:"GalleryTiles",props:{count:{type:Number,default:3}}},l=r(2),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"gallery-tiles"},t._l(t.count,(function(t){return r("div",{key:t,staticClass:"gallery-tiles__item"},[r("img",{attrs:{src:"/content/01.png",alt:"product image"}})])})),0)}),[],!1,null,null,null);e.default=component.exports},308:function(t,e,r){"use strict";r.r(e);var n={name:"PostInteresting",props:{item:{type:Object,default:function(){}}}},l=r(2),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"post-interesting"},[r("figure",[r("img",{attrs:{src:"/post-img.png",alt:""}}),t._v(" "),r("figcaption",[t._v("\n        How to get to the exhibition\n      ")]),t._v(" "),r("NuxtLink",{staticClass:"post-interesting__link",attrs:{to:"#"}},[t._v("Read")])],1)])}),[],!1,null,null,null);e.default=component.exports},314:function(t,e,r){"use strict";r.r(e);r(220);var n={name:"Slider",props:{slides:{type:Number,default:4},slidesOnTablet:{type:Number,default:3},variableWidth:{type:Boolean,default:!1},rows:{type:Number,default:1}},computed:{init:function(){return{infinite:!1,dots:!1,pagination:!1,focusOnSelect:!0,speed:500,slidesToShow:this.$device.isTablet?this.slidesOnTablet:this.slides,slidesToScroll:1,variableWidth:this.variableWidth,rows:this.rows}}}},l=r(2),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"custom-slider-wrapper"},[t.$device.isDesktopOrTablet?r("vue-slick-carousel",t._b({staticClass:"custom-slider",attrs:{"variable-width":t.variableWidth,arrows:!0},scopedSlots:t._u([{key:"prevArrow",fn:function(){return[r("div",{staticClass:"custom-arrow custom-arrow__prev"})]},proxy:!0},{key:"nextArrow",fn:function(){return[r("div",{staticClass:"custom-arrow custom-arrow__next"})]},proxy:!0}],null,!1,1288776425)},"vue-slick-carousel",t.init,!1),[t._t("default")],2):t._e(),t._v(" "),t.$device.isMobile?r("div",{staticClass:"custom-slider__body"},[t._t("default")],2):t._e(),t._v(" "),t.$device.isMobile?r("div",{staticClass:"custom-slider__navigation"},[r("div",{staticClass:"custom-slider__slide-info"},[t._v("\n      1 - 8 из 105\n    ")]),t._v(" "),t._m(0)]):t._e()],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"custom-slider__buttons"},[r("div",{staticClass:"custom-slider__button custom-slider__prev --caret-before"},[t._v("\n        Previous\n      ")]),t._v(" "),r("div",{staticClass:"custom-slider__button custom-slider__next --caret-after"},[t._v("\n        Next\n      ")])])}],!1,null,null,null);e.default=component.exports},347:function(t,e,r){"use strict";r.r(e);var n={name:"BrandEvent",components:{GalleryTiles:r(307).default}},l=r(2),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"brand-event"},[r("event"),t._v(" "),r("GalleryTiles"),t._v(" "),r("action-bar")],1)}),[],!1,null,null,null);e.default=component.exports},378:function(t,e,r){"use strict";r.r(e);var n=r(308),l=r(347),o=r(314),c={components:{BrandEvent:l.default,Article:n.default,Slider:o.default},data:function(){return{tabs:[{tabContent:"Page in the catalog",link:"/catalog/".concat(this.$route.params.product),activeRouter:"catalog"},{tabContent:"Product on the marketplace",link:"/marketplace/".concat(this.$route.params.product),activeRouter:"marketplace"}]}}},d=r(2),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"item-page brand-page prod"},[r("main",{staticClass:"main"},[r("div",{staticClass:"item-page__columns"},[r("div",{staticClass:"item-page__leftcol brand-page__leftcol"},[t.$device.isMobile?r("div",{staticClass:"brand-page__top-bar"},[r("eve-button",{attrs:{icon:""},scopedSlots:t._u([{key:"icon",fn:function(){return[r("img",{attrs:{src:"/icons/edit.svg",alt:"edit"}})]},proxy:!0}],null,!1,1123738517)},[t._v("\n            Edit a page\n          ")]),t._v(" "),r("eve-button",{staticClass:"dark"},[t._v("\n            Products in the marketplace\n          ")])],1):t._e(),t._v(" "),t._m(0)]),t._v(" "),r("div",{staticClass:"item-page__content brand-page__content"},[t.$device.isDesktopOrTablet?r("h2",{staticClass:"default-h2"},[r("strong",[t._v("Barbie")])]):t._e(),t._v(" "),r("p",{staticClass:"default-text"},[t._v("\n          It is no secret that the most favorite doll of both little girls and adult representatives of the fair sex is Barbie. She is so loved by representatives of the beautiful half of humanity that they are ready to take an example from her, adopting her style of clothing. The girl-doll has become a model of style for a huge number of young ladies. The number of clothes present in the Barbie wardrobe is very large. All little girls choose a Barbie doll for themselves, wanting to be like her when they become adults. The Barbie brand offers little princesses not to wait so long, but now to replenish their wardrobe with the outfits of their favorite Barbie.\n\n          "),r("br"),t._v(" "),r("br"),t._v(" "),r("strong",[t._v("The history of the appearance of the Barbie brand (Barbie):")]),t._v(" "),r("br"),t._v(" "),r("br"),t._v("\n\n          The trademark, called Barbie, originated in 1984. This year, the company Siport decided to start manufacturing shoes with this name. A few years later, an English clothing company showed interest in the brand. Soon both companies joined together and became partners, and today the name Barbie is worn by both collections of English women's clothing and collections of Italian shoes. The Barbie trademark considers its primary task to be the creation of such excellent models that will be able to transfer Barbie fans to a fabulous atmosphere, give them outfits that match the style of their favorite.\n\n          "),r("br"),t._v(" "),r("br"),t._v(" "),r("strong",[t._v("Product range and design:")]),t._v(" "),r("br"),t._v(" "),r("br"),t._v("\n\n          Today, the Barbie trademark is the most popular brand that produces clothes for children. The Barbie brand is engaged in the manufacture of things intended for girls from birth to the age of fourteen. Such products are characterized by glamor combined with simplicity, convenience and high quality characteristics.\n\n          "),r("br"),t._v("\n\n          Source: "),r("a",{attrs:{href:"https://www.relook.ru/brand/Barbie.html"}},[t._v("https://www.relook.ru/brand/Barbie.html")]),t._v(" "),r("br"),t._v(" "),r("eve-button",{staticClass:"default-text__size-btn"},[r("div",{staticClass:"--caret-after"},[t._v("Less")])])],1),t._v(" "),r("div",{staticClass:"brand-page__products"},[r("Slider",{attrs:{slides:3,rows:t.$device.isMobile?2:1}},t._l(5,(function(t){return r("card",{key:t})})),1)],1),t._v(" "),r("div",{staticClass:"brand-page__albums"},t._l(3,(function(t){return r("BrandEvent",{key:t})})),1)]),t._v(" "),r("div",{staticClass:"item-page__rightcol brand-page__rightcol"},[t.$device.isDesktopOrTablet?r("div",{staticClass:"brand-page__top-bar dt-pd-tp"},[r("eve-button",{attrs:{icon:""},scopedSlots:t._u([{key:"icon",fn:function(){return[r("img",{attrs:{src:"/icons/edit.svg",alt:"edit"}})]},proxy:!0}],null,!1,1123738517)},[t._v("\n            Edit a page\n          ")]),t._v(" "),r("eve-button",{staticClass:"dark"},[t._v("\n            Products in the marketplace\n          ")])],1):t._e(),t._v(" "),r("h2",{staticClass:"default-h2"},[t._v("Article")]),t._v(" "),r("div",{staticClass:"brand-page__articles"},t._l(3,(function(t){return r("Article",{key:t})})),1),t._v(" "),r("h2",{staticClass:"default-h2"},[t._v("References")]),t._v(" "),r("div",{staticClass:"brand-page__references"},[r("reference",{attrs:{expert:!0}}),t._v(" "),r("reference",{attrs:{expert:!1}})],1),t._v(" "),r("h2",{staticClass:"default-h2"},[t._v("Photo Albums")]),t._v(" "),r("div",{staticClass:"brand-page__articles"},t._l(3,(function(t){return r("Article",{key:t})})),1)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"default-photo brand-page__photo"},[e("img",{attrs:{src:"/content/01.png",alt:"user photo"}})])}],!1,null,null,null);e.default=component.exports}}]);