(window.webpackJsonp=window.webpackJsonp||[]).push([[10,5],{188:function(t,e,n){var content=n(191);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("bcdbdcde",content,!0,{sourceMap:!1})},189:function(t,e,n){var r=n(4),o=n(141).values;r({target:"Object",stat:!0},{values:function(t){return o(t)}})},190:function(t,e,n){"use strict";n(188)},191:function(t,e,n){var r=n(59)(!1);r.push([t.i,"@-webkit-keyframes reveal{0%{transform:scale(0);opacity:0}to{transform:scale(1);opacity:1}}@keyframes reveal{0%{transform:scale(0);opacity:0}to{transform:scale(1);opacity:1}}.cubes{width:inherit;height:inherit;position:relative}.cube,.cube *{position:absolute;width:40px;height:40px}.cube{opacity:0;-webkit-animation:reveal 1.5s cubic-bezier(.175,.885,.32,1.275) 0s forwards;animation:reveal 1.5s cubic-bezier(.175,.885,.32,1.275) 0s forwards}.cube.small,.cube.small *{width:25px;height:25px}.cube.small * .sides,.cube.small .sides{perspective:150px}.cube.large,.cube.large *{width:75px;height:75px}.cube.large * .sides,.cube.large .sides{perspective:450px}.sides{transform-style:preserve-3d;perspective:240px}.sides span{-webkit-backface-visibility:hidden;backface-visibility:hidden;will-change:transform;display:block}.sides span.front{transform:rotateY(0deg) translateZ(20px)}.sides span.back{transform:rotateY(-180deg) translateZ(20px)}.sides span.left{transform:rotateY(-90deg) translateZ(20px)}.sides span.right{transform:rotateY(90deg) translateZ(20px)}.sides span.top{transform:rotateX(90deg) translateZ(20px)}.sides span.bottom{transform:rotateX(-90deg) translateZ(20px)}.shadow{top:40%;background:#546e7a;display:block}",""]),t.exports=r},201:function(t,e,n){"use strict";n.r(e);n(61),n(30),n(98),n(189),n(43),n(44);var r=n(11),o=n(23);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={random:function(t,e){return Math.random()*(e-t)+t},randomInclusive:function(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t+1))+t},interpolate:function(t,e,n){return t*(1-n)+e*n},queryArray:function(t,e){return e||(e=document.body),Array.prototype.slice.call(e.querySelectorAll(t))}},h={white:{color:[255,255,255],shading:[212,168,255]},grayish:{color:[191,212,217],shading:[57,89,96]},pink:{color:[253,225,226],shading:[248,132,138]},cyanish:{color:[214,249,246],shading:[23,166,151]}},f={s:25,m:40,l:75},m=function(){return{left:d.randomInclusive(20,80),top:d.randomInclusive(15,85)}},v={isReady:!1,helper:d,animationFrame:null,palette:h,sizes:f,directions:["x","y"],cubes:[{tint:h.cyanish,size:f.m,left:d.randomInclusive(20,80),top:43},{tint:h.white,size:f.l,left:d.randomInclusive(20,80),top:d.random(12,Math.random())},l({tint:h.cyanish,size:f.m},m()),{tint:h.pink,size:f.s,left:d.randomInclusive(20,80),top:60},l({tint:h.grayish,size:f.l},m()),{tint:h.white,size:f.s,left:d.randomInclusive(20,80),top:18},l({tint:h.pink,size:f.m},m()),l({tint:h.white,size:f.m},m()),{tint:h.grayish,size:f.s,left:d.randomInclusive(20,80),top:38},{tint:h.pink,size:f.m,left:d.randomInclusive(20,80),top:80}]},y={mounted:function(){var t=this;this.$nextTick((function(){return setTimeout(t.initCubes(),800)}))},beforeDestroy:function(){cancelAnimationFrame(this.animationFrame)},data:function(){return v},methods:{initCubes:function(){var t=this;this.$set(this.$data,"cubes",this.cubes.map((function(object){return Object.assign(t.createCube(object.size),object)}))),this.cubes.forEach(this.setCubeStyles);var e=document.createDocumentFragment();this.cubes.forEach((function(t){var n=t.cube;return e.appendChild(n)})),this.$el.removeChild(this.$el.firstChild),this.$el.appendChild(e),this.isReady=!0,window.requestIdleCallback=window.requestIdleCallback||function(t){var e=Date.now();return setTimeout((function(){t({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-e))}})}),1)},requestIdleCallback(this.tick)},setState:function(t,e){return this.directions.forEach((function(n){if(t[n]+=e[n],!(Math.abs(t[n])<360)){var r=Math.max(t[n],360),o=360==r?Math.abs(t[n]):360;t[n]=r-o}}))},setCubeStyles:function(t){var e=t.cube,n=t.size,r=t.left,o=t.top;switch(Object.assign(e.style,{width:"".concat(n,"px"),height:"".concat(n,"px"),left:"".concat(r,"%"),top:"".concat(o,"%")}),n){case this.sizes.s:e.classList.add("small");break;case this.sizes.l:e.classList.add("large")}Object.assign(e.querySelector(".shadow").style,{filter:"blur(".concat(Math.round(.6*n),"px) opacity(").concat(Math.min(n,40),"%)")})},createCube:function(t){var e=this,n=this.$refs.cube.cloneNode(!0),r=document.createDocumentFragment();r.appendChild(n);var o=r.querySelector(".cube"),c=this.directions.reduce((function(object,n){var r=t>e.sizes.m?.3:.6;return object[n]=e.helper.random(-r,r),object}),{}),l=this.helper.queryArray(".sides span",o).reduce((function(object,t){return object[t.dataset.side]={side:t,hidden:!1,rotate:{x:0,y:0}},object}),{});return l.top.rotate.x=90,l.bottom.rotate.x=-90,l.left.rotate.y=-90,l.right.rotate.y=90,l.back.rotate.y=-180,{cube:o,state:{x:0,y:0},speed:c,sides:Object.values(l)}},getDistance:function(t,e){return this.directions.reduce((function(object,n){return object[n]=Math.abs(t[n]+e[n]),object}),{})},getRotation:function(t,e,n){var r=n.x?"Z":"Y",o=n.x>0?-1:1;return"\n                rotateX(".concat(t.x+n.x,"deg)\n                rotate").concat(r,"(").concat(o*(t.y+n.y),"deg)\n                translateZ(").concat(e/2,"px)\n            ")},getShading:function(t,e,n){var o=this,c=this.directions.reduce((function(object,t){var e=n[t],r=e/180;return object[t]=e>180?Math.abs(2-r):r,object}),{});if(e.x)c.y=0;else{var l=n.x;l>90&&l<270&&this.directions.forEach((function(t){return c[t]=1-c[t]}))}var d=(c.x+c.y)/2,h=t.color.map((function(e,n){return Math.round(o.helper.interpolate(e,t.shading[n],d))})),f=Object(r.a)(h,3),m=f[0],g=f[1],b=f[2];return"rgb(".concat(m,", ").concat(g,", ").concat(b,")")},shouldHide:function(t,e,n){return t?e>90&&e<270:e<90?n>90&&n<270:e<270?n<90:n>90&&n<270},updateSides:function(t){var e=this,n=t.state,r=t.speed,o=t.size,c=t.tint,l=t.sides;t.left;this.setState(n,r),l.forEach((function(object){var t=object.side,r=object.rotate,l=object.hidden,d=e.getDistance(n,r);e.shouldHide(r.x,d.x,d.y)?l||(t.hidden=!0,object.hidden=!0):(l&&(t.hidden=!1,object.hidden=!1),t.style.transform=e.getRotation(n,o,r),t.style.backgroundColor=e.getShading(c,r,d))}))},tick:function(){this.cubes.forEach(this.updateSides),this.animationFrame=requestAnimationFrame(this.tick)}}},x=(n(190),n(16)),component=Object(x.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.isReady,expression:"isReady"}],staticClass:"cubes"},[n("div",{ref:"cube",staticClass:"cube"},[n("span",{staticClass:"shadow"}),t._v(" "),t._m(0)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sides"},[n("span",{staticClass:"back",attrs:{"data-side":"back"}}),t._v(" "),n("span",{staticClass:"top",attrs:{"data-side":"top"}}),t._v(" "),n("span",{staticClass:"left",attrs:{"data-side":"left"}}),t._v(" "),n("span",{staticClass:"front",attrs:{"data-side":"front"}}),t._v(" "),n("span",{staticClass:"right",attrs:{"data-side":"right"}}),t._v(" "),n("span",{staticClass:"bottom",attrs:{"data-side":"bottom"}})])}],!1,null,null,null);e.default=component.exports},224:function(t,e,n){"use strict";n.r(e);n(8),n(38);var r=n(7),o={asyncData:function(t){},head:{title:"Walter B. Varela | Développeur d'Applications et Web",meta:[{hid:"description",name:"description",content:"@sen0rxol0 est un développeur spécialisé en développement web, full-stack web et mobile. Développeur freelance en ile de France, L'Essonne et Paris"}],link:[{rel:"canonical",href:"sen0rxol0.github.io"}]},layout:"home",mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"fr-FR"===navigator.language&&(t.dispLang="fr");case 1:case"end":return e.stop()}}),e)})))()},data:function(){return{dispLang:"en",twitterRef:"https://twitter.com/sen0rxol0",githubRef:"https://github.com/sen0rxol0"}},methods:{},components:{cubes:function(){return Promise.resolve().then(n.bind(null,201))}}},c=n(16),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-wrapper grid"},[n("div",{staticClass:"home-cubes"},[n("cubes")],1),t._v(" "),t._m(0)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"home-content grid-item",attrs:{"data-animate-in":"up"}},[n("h3",{staticClass:"home--heading-text"},[n("em",[t._v("Développeur d'Applications et Web.")])]),t._v(" "),n("p",{staticClass:"home--complementary-text"},[t._v("Je construis des applis progressives et j'écris du code évolutif avec un œil attentif sur l'expérience utilisateurs et la sécurité.")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Cubes:n(201).default})}}]);