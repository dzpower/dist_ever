(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{324:function(t,e,n){"use strict";n.r(e);var d={name:"AddCart",props:{editButton:{type:Boolean,default:!1},item:{type:Object,default:function(){}}},methods:{addToBasket:function(){this.$store.dispatch("basket/addToBasket",this.item)}}},c=n(2),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"add-cart"},[n("div",{staticClass:"add-cart__row"},[n("eve-button",{staticClass:"dark add-cart__button"},[t._v("\n      Buy it now\n    ")]),t._v(" "),n("eve-button",{staticClass:"add-cart__button",on:{onclick:t.addToBasket}},[t._v("\n      Add to cart\n    ")])],1),t._v(" "),t._m(0),t._v(" "),n("eve-button",{staticClass:"dark add-cart__button add-cart__mp"},[t._v("\n    Products in the marketplace\n  ")]),t._v(" "),t.editButton?n("eve-button",{staticClass:"add-cart__edit",attrs:{icon:""},scopedSlots:t._u([{key:"icon",fn:function(){return[n("img",{attrs:{src:"/icons/edit.svg",alt:"edit"}})]},proxy:!0}],null,!1,1123738517)},[t._v("\n    Edit a page\n  ")]):t._e()],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"add-cart__result"},[n("div",{staticClass:"add-cart__result-item"},[n("span",[t._v("Total purchased:")]),t._v(" 2560\n    ")]),t._v(" "),n("div",{staticClass:"add-cart__result-item"},[n("span",[t._v("In stock:")]),t._v(" few\n    ")]),t._v(" "),n("div",{staticClass:"add-cart__result-item"},[n("span",[t._v("In user baskets:")]),t._v(" 17\n    ")])])}],!1,null,null,null);e.default=component.exports}}]);