(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{197:function(t,n,e){var content=e(213);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(60).default)("5520dede",content,!0,{sourceMap:!1})},212:function(t,n,e){"use strict";e(197)},213:function(t,n,e){var r=e(59)(!1);r.push([t.i,'@-webkit-keyframes charge-in{0%{transform:translateX(-100%);background-color:#78909c}to{transform:translateX(0);background-color:#263238}}@keyframes charge-in{0%{transform:translateX(-100%);background-color:#78909c}to{transform:translateX(0);background-color:#263238}}@-webkit-keyframes charge-out{0%{transform:translateX(0);background-color:#263238}to{transform:translateX(100%);background-color:#78909c}}@keyframes charge-out{0%{transform:translateX(0);background-color:#263238}to{transform:translateX(100%);background-color:#78909c}}.navbar-wrapper{width:100%;height:0;z-index:1;transition:height .3s ease}.navbar-wrapper.nav--is-active{transition:none;height:100%;transform:translateY(0);background-color:rgba(0,0,0,.4)}.navbar-wrapper.nav--is-active .navbar{transform:translateY(0)}.navbar{width:100%;min-height:-webkit-max-content;min-height:-moz-max-content;min-height:max-content;height:40%;padding:0 5px;background-color:#fafafa;transform:translateY(-100%);transition:transform .35s ease-in-out}.navbar .nav-items{width:100%;height:100%;margin:0;padding:0;list-style:none;display:flex;flex-flow:column nowrap;justify-content:flex-start;align-items:flex-start}.navbar .nav-item{width:40%;min-width:100px;height:48px;margin:auto;position:relative;overflow:hidden}.navbar .nav-item:after{content:"";width:100%;height:1px;background-color:#78909c;transform:translateX(-100%);position:absolute;bottom:0;left:0}.navbar .nav-item.nav--link-active:after{transform:translateX(0);background-color:#78909c}.navbar .nav-item:not(.nav--link-active).hovering:after{-webkit-animation:charge-in .5s cubic-bezier(.175,.885,.32,1.275) 0s forwards;animation:charge-in .5s cubic-bezier(.175,.885,.32,1.275) 0s forwards}.navbar .nav-item:not(.nav--link-active).hoverend:after{-webkit-animation:charge-out .5s cubic-bezier(.175,.885,.32,1.275) 0s forwards;animation:charge-out .5s cubic-bezier(.175,.885,.32,1.275) 0s forwards}@media screen and (min-width:840px){.navbar-wrapper{width:100%}.navbar{height:56px;padding:0 100px;background-color:transparent;transform:translateY(0)}.navbar .nav-items{flex-flow:row nowrap;justify-content:flex-end;align-items:flex-end}.navbar .nav-item{width:100px;height:36px;margin:auto 10px}.navbar .nav-item .btn-link{line-height:36px}}',""]),t.exports=r},227:function(t,n,e){"use strict";e.r(n);e(44);var r={mounted:function(){},data:function(){return{navEl:null,navRect:null,prevPos:null}},props:["isNavActive"],methods:{onHover:function(t){var n=t.target;"A"===n.tagName&&(n=t.target.parentElement),n.classList.add("hovering")},onHoverEnd:function(t){var n=t.target;"A"===n.tagName&&(n=t.target.parentElement),n.classList.remove("hovering"),n.classList.contains("hoverend")||(n.classList.add("hoverend"),setTimeout((function(){n.classList.remove("hoverend")}),300))},onClose:function(){this.isNavActive&&this.$emit("close-nav")}}},o=(e(212),e(16)),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("aside",{staticClass:"navbar-wrapper",class:{"nav--is-active":t.isNavActive},on:{click:t.onClose}},[e("nav",{ref:"nav",staticClass:"navbar",attrs:{id:"nav"}},[e("ul",{staticClass:"nav-items"},[e("nuxt-link",{staticClass:"nav-item",attrs:{tag:"li",to:"/","active-class":"nav--link-active",exact:""},nativeOn:{mouseover:function(n){return t.onHover(n)},mouseout:function(n){return t.onHoverEnd(n)}}},[e("a",{staticClass:"btn-link"},[t._v("Home")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-item",attrs:{tag:"li",to:"/about","active-class":"nav--link-active",exact:""},nativeOn:{mouseover:function(n){return t.onHover(n)},mouseout:function(n){return t.onHoverEnd(n)}}},[e("a",{staticClass:"btn-link"},[t._v("About")])])],1)])])}),[],!1,null,null,null);n.default=component.exports}}]);