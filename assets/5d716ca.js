(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{195:function(t,n,e){var content=e(209);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(60).default)("042f6aad",content,!0,{sourceMap:!1})},208:function(t,n,e){"use strict";e(195)},209:function(t,n,e){var r=e(59)(!1);r.push([t.i,"[data-animate-in][data-v-024dcc70]{opacity:0;transition:transform .8s ease,opacity .8s ease}[data-animate-in].animated[data-v-024dcc70]{opacity:1;transform:translate3d(0,26%,0);transition:transform .6s ease,opacity .6s ease}[data-animate-in=down][data-v-024dcc70]{transform:translate3d(0,-100%,0)}",""]),t.exports=r},225:function(t,n,e){"use strict";e.r(n);e(8),e(43);var r={mounted:function(){var t=this,animate=function(){document.querySelectorAll("[data-animate-in]").forEach((function(t){t.classList.add("animated")}))};"requestIdleCallback"in window?requestIdleCallback(animate):animate();var n=0,e=!1,r=function(){var r=n,o=t.$refs.headerbar,c=o.offsetHeight/2;parseInt(r)>c?o.classList.add("expanded"):o.classList.remove("expanded"),e=!1};window.addEventListener("scroll",(function(t){n=window.scrollY,e||("requestIdleCallback"in window?requestIdleCallback(r):requestAnimationFrame(r)),e=!0}))},data:function(){return{isNavShown:!1}},props:["navShown"],methods:{onToggleNav:function(){this.isNavShown=!this.isNavShown},onCloseNav:function(){this.isNavShown=!this.isNavShown}},components:{navbutton:function(){return e.e(1).then(e.bind(null,226))},navbar:function(){return e.e(2).then(e.bind(null,227))}}},o=(e(208),e(16)),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("header",{ref:"headerbar",staticClass:"header-bar header",attrs:{"data-animate-in":"down"}},[e("div",{staticClass:"header-lg"},[e("span",{staticClass:"lg-wrapper"},[e("svg",{staticStyle:{isolation:"isolate"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 40 32",width:"40",height:"32"}},[e("defs",[e("clipPath",{attrs:{id:"_clipPath_I5GH3M8cCIaePt5TZXZQwShVWoPKMD09"}},[e("rect",{attrs:{width:"40",height:"32"}})])]),e("g",{attrs:{"clip-path":"url(#_clipPath_I5GH3M8cCIaePt5TZXZQwShVWoPKMD09)"}},[e("path",{attrs:{d:" M 0 0 L 40 0 L 32 32 L 0 0 Z ",fill:"rgb(66,77,88)"}}),e("image",{attrs:{"xlink:href":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAgCAYAAABgrToAAAABDElEQVRYR83YOw7CMAyA4bgchN6MblwAIdhgitQLoE5wMzgJQUFq1bTOo4njxIMnD9/wT4azHD4AYi8qHKXEHU5yeO1AHGrzaVx/Pd7gIh+dguZZE3DEaZMGtgqady3AOe4P1KuWDpe4CVhDhxhuApbu0IabA4t16MJNwFId+nAGkLvDEJwB5OwwFLcEsnS4BWcAOTrcilsBc3YYg1sBc3UYi8OA5B2m4FZA6g5TcSiQqkMKHAqk6JAKZwMmdUiJQ4EpHVLjrMCYDnPgrMCtHebCuYDBHebEWYGhHebGOYG+DjlwTqCrQy6cD4h2yIlzArEOuXFe4LzDEjgvcOywFC4E2H5F0+kvkz4uMT+ps+s3fFup6gAAAABJRU5ErkJggg==",x:"0",y:"0",width:"40",height:"32"}})])])])]),t._v(" "),e("div",{staticClass:"header-navbar",class:{"navbar-shown":t.isNavShown}},[e("navbar",{attrs:{isNavActive:t.isNavShown},on:{"close-nav":t.onCloseNav}})],1),t._v(" "),e("div",{staticClass:"header-nav-btn"},[e("navbutton",{attrs:{isNavActive:t.isNavShown},nativeOn:{click:function(n){return t.onToggleNav(n)}}})],1)])}),[],!1,null,"024dcc70",null);n.default=component.exports}}]);