(window.webpackJsonp=window.webpackJsonp||[]).push([[26,3,4],{321:function(e,t,l){"use strict";l.r(t);var n={name:"Bar",components:{},data:function(){return{state:!1}},methods:{handleClick:function(){this.state=!this.state}}},r=l(2),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("nav",{class:"bar "+(e.state&&"active")},[l("div",{staticClass:"bar__open",on:{click:e.handleClick}},[e._t("icon",(function(){return[l("img",{attrs:{src:"/icons/menu-bar.svg",alt:"icon"}})]}))],2),e._v(" "),l("div",{staticClass:"bar__wrapper"},[l("div",{staticClass:"bar__close",on:{click:e.handleClick}},[l("img",{attrs:{src:"/icons/close.svg",alt:"close"}})]),e._v(" "),e._t("default")],2)])}),[],!1,null,null,null);t.default=component.exports},328:function(e,t,l){"use strict";l.r(t);var n=l(101);var r=l(141),c=l(74);function o(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||Object(r.a)(e)||Object(c.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}l(48),l(62),l(139);var d={name:"CheckboxFilter",model:{prop:"modelValue",event:"change"},props:{value:{type:String},modelValue:{default:""},trueValue:{default:!0},falseValue:{default:!1}},computed:{isChecked:function(){return this.modelValue instanceof Array?this.modelValue.includes(this.value):this.modelValue===this.trueValue}},methods:{updateInput:function(e){var t=e.target.checked;if(this.modelValue instanceof Array){var l=o(this.modelValue);t?l.push(this.value):l.splice(l.indexOf(this.value),1),this.$emit("change",l)}else this.$emit("change",t?this.trueValue:this.falseValue)}}},f=l(2),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("label",{staticClass:"default-checkbox"},[l("input",{attrs:{type:"checkbox"},domProps:{checked:e.isChecked,value:e.value},on:{change:e.updateInput}}),e._v(" "),e._t("default"),e._v(" "),l("span",{staticClass:"default-checkbox__decor"})],2)}),[],!1,null,null,null);t.default=component.exports},337:function(e,t,l){"use strict";l.r(t);var n=l(328),r={name:"FeedFilter",components:{Bar:l(321).default,CheckboxFilter:n.default}},c=l(2),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("Bar",{staticClass:"feed-filter",scopedSlots:e._u([{key:"icon",fn:function(){return[l("img",{attrs:{src:"/icons/3-dot.svg",alt:"3 dot"}})]},proxy:!0}])},[l("CheckboxFilter",{staticClass:"feed-filter__item"},[e._v("Articles")]),e._v(" "),l("CheckboxFilter",{staticClass:"feed-filter__item"},[e._v("Comments")]),e._v(" "),l("CheckboxFilter",{staticClass:"feed-filter__item"},[e._v("Photo")]),e._v(" "),l("CheckboxFilter",{staticClass:"feed-filter__item"},[e._v("Video")]),e._v(" "),l("CheckboxFilter",{staticClass:"feed-filter__item"},[e._v("Survey")])],1)}),[],!1,null,null,null);t.default=component.exports}}]);