webpackJsonp([1],{139:function(n,e,t){function A(n){t(176)}var o=t(17)(t(152),t(172),A,null,null);n.exports=o.exports},145:function(n,e,t){"use strict";var A={data:function(){return{isMenuOpen:!1}},methods:{ontoggleMenu:function(){this.isMenuOpen=!this.isMenuOpen},onCloseMenu:function(){this.isMenuOpen=!this.isMenuOpen}}};e.a=A},152:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var A=t(145);e.default={mixins:[A.a],components:{"menu-button":function(){return t.e(10).then(t.bind(null,146))},"nav-menu":function(){return t.e(9).then(t.bind(null,147))}}}},159:function(n,e,t){e=n.exports=t(47)(!0),e.push([n.i,"@import url(https://afeld.github.io/emoji-css/emoji.css);",""]),e.push([n.i,"/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,footer,header,nav,section{display:block}h1{font-size:2em;margin:.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:inherit;font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}[hidden],template{display:none}*{-webkit-box-sizing:border-box;box-sizing:border-box;word-wrap:wrap}:root{font-size:16px}body{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}h1{font-size:1.8rem}h2{font-size:1.6rem}h3{font-size:1.4rem}p{font-family:inherit}a{text-decoration:none;display:inline-block}button{-webkit-appearance:none;-moz-appearance:none;appearance:none;margin:0;padding:0;background-color:transparent;border:none;cursor:pointer}button,button:active,button:focus{outline:none}#main{width:100vw;max-width:100vw;height:100vh;max-height:100vh}#main .ham--btn svg{fill:#07585f}.rebuild--message{width:100%;height:100%;padding-top:5%;display:block;margin:auto}.rebuild--message h2,.rebuild--message h4{text-align:center}","",{version:3,sources:["/home/x0x018151425/Documents/personal-projects/site/layouts/main.vue"],names:[],mappings:"AAAA,4EAA4E,AAE5E,KAAK,iBAAiB,0BAA0B,6BAA6B,CAC5E,AACD,KAAK,QAAQ,CACZ,AACD,wCAAwC,aAAa,CACpD,AACD,GAAG,cAAc,cAAe,CAC/B,AACD,uBAAuB,aAAa,CACnC,AACD,OAAO,eAAe,CACrB,AACD,GAAG,+BAA+B,uBAAuB,SAAS,gBAAgB,CACjF,AACD,IAAI,gCAAiC,aAAa,CACjD,AACD,EAAE,6BAA6B,oCAAoC,CAClE,AACD,YAAY,mBAAmB,0BAA0B,yCAAyC,gCAAgC,CACjI,AACD,SAAS,oBAAmB,AAEnB,kBAAkB,CAD1B,AAGD,cAAc,gCAAiC,aAAa,CAC3D,AACD,IAAI,iBAAiB,CACpB,AACD,KAAK,sBAAsB,UAAU,CACpC,AACD,MAAM,aAAa,CAClB,AACD,QAAQ,cAAc,cAAc,kBAAkB,uBAAuB,CAC5E,AACD,IAAI,aAAc,CACjB,AACD,IAAI,SAAU,CACb,AACD,YAAY,oBAAoB,CAC/B,AACD,sBAAsB,aAAa,QAAQ,CAC1C,AACD,IAAI,iBAAiB,CACpB,AACD,eAAe,eAAe,CAC7B,AACD,sCAAsC,uBAAuB,eAAe,iBAAiB,QAAQ,CACpG,AACD,aAAa,gBAAgB,CAC5B,AACD,cAAc,mBAAmB,CAChC,AACD,qDAA2D,yBAAyB,CACnF,AACD,wHAA8H,kBAAkB,SAAS,CACxJ,AACD,4GAAkH,6BAA6B,CAC9I,AACD,SAAS,0BAA6B,CACrC,AACD,OAAO,8BAA8B,sBAAsB,cAAc,cAAc,eAAe,UAAU,kBAAkB,CACjI,AACD,SAAS,qBAAqB,uBAAuB,CACpD,AACD,SAAS,aAAa,CACrB,AACD,6BAAiC,8BAA8B,sBAAsB,SAAS,CAC7F,AACD,kFAAsF,WAAW,CAChG,AACD,cAAgB,6BAA6B,mBAAmB,CAC/D,AACD,qFAAyF,uBAAuB,CAC/G,AACD,6BAA6B,0BAA0B,YAAY,CAClE,AACD,aAAa,aAAa,CACzB,AACD,QAAQ,iBAAiB,CACxB,AACD,OAAO,oBAAoB,CAC1B,AAGD,kBAAS,YAAY,CACpB,AACD,EAAE,8BAA8B,sBAAsB,cAAc,CACnE,AACD,MAAM,cAAc,CACnB,AACD,KAAK,kCAAkC,kCAAkC,CACxE,AACD,GAAG,gBAAgB,CAClB,AACD,GAAG,gBAAgB,CAClB,AACD,GAAG,gBAAgB,CAClB,AACD,EAAE,mBAAmB,CACpB,AACD,EAAE,qBAAqB,oBAAoB,CAC1C,AACD,OAAO,wBAAwB,qBAAqB,gBAAgB,SAAS,UAAU,6BAA6B,AAAa,YAAY,cAAc,CAC1J,AACD,kCAFoH,YAAa,CAGhI,AACD,MAAM,YAAY,gBAAgB,aAAa,gBAAgB,CAC9D,AACD,oBAAoB,YAAY,CAC/B,AACD,kBAAkB,WAAW,YAAY,eAAe,cAAc,WAAW,CAChF,AACD,0CAA0C,iBAAiB,CAC1D",file:"main.vue",sourcesContent:['/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */\n@import url("https://afeld.github.io/emoji-css/emoji.css");\nhtml{line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%\n}\nbody{margin:0\n}\narticle,aside,footer,header,nav,section{display:block\n}\nh1{font-size:2em;margin:0.67em 0\n}\nfigcaption,figure,main{display:block\n}\nfigure{margin:1em 40px\n}\nhr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible\n}\npre{font-family:monospace, monospace;font-size:1em\n}\na{background-color:transparent;-webkit-text-decoration-skip:objects\n}\nabbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted\n}\nb,strong{font-weight:inherit\n}\nb,strong{font-weight:bolder\n}\ncode,kbd,samp{font-family:monospace, monospace;font-size:1em\n}\ndfn{font-style:italic\n}\nmark{background-color:#ff0;color:#000\n}\nsmall{font-size:80%\n}\nsub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline\n}\nsub{bottom:-0.25em\n}\nsup{top:-0.5em\n}\naudio,video{display:inline-block\n}\naudio:not([controls]){display:none;height:0\n}\nimg{border-style:none\n}\nsvg:not(:root){overflow:hidden\n}\nbutton,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0\n}\nbutton,input{overflow:visible\n}\nbutton,select{text-transform:none\n}\nbutton,html [type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button\n}\nbutton::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0\n}\nbutton:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText\n}\nfieldset{padding:0.35em 0.75em 0.625em\n}\nlegend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal\n}\nprogress{display:inline-block;vertical-align:baseline\n}\ntextarea{overflow:auto\n}\n[type="checkbox"],[type="radio"]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0\n}\n[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto\n}\n[type="search"]{-webkit-appearance:textfield;outline-offset:-2px\n}\n[type="search"]::-webkit-search-cancel-button,[type="search"]::-webkit-search-decoration{-webkit-appearance:none\n}\n::-webkit-file-upload-button{-webkit-appearance:button;font:inherit\n}\ndetails,menu{display:block\n}\nsummary{display:list-item\n}\ncanvas{display:inline-block\n}\ntemplate{display:none\n}\n[hidden]{display:none\n}\n*{-webkit-box-sizing:border-box;box-sizing:border-box;word-wrap:wrap\n}\n:root{font-size:16px\n}\nbody{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased\n}\nh1{font-size:1.8rem\n}\nh2{font-size:1.6rem\n}\nh3{font-size:1.4rem\n}\np{font-family:inherit\n}\na{text-decoration:none;display:inline-block\n}\nbutton{-webkit-appearance:none;-moz-appearance:none;appearance:none;margin:0;padding:0;background-color:transparent;outline:none;border:none;cursor:pointer\n}\nbutton:active,button:focus{outline:none\n}\n#main{width:100vw;max-width:100vw;height:100vh;max-height:100vh\n}\n#main .ham--btn svg{fill:#07585F\n}\n.rebuild--message{width:100%;height:100%;padding-top:5%;display:block;margin:auto\n}\n.rebuild--message h2,.rebuild--message h4{text-align:center\n}\n'],sourceRoot:""}])},172:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("main",{staticClass:"main--container",attrs:{id:"main"}},[t("menu-button",{attrs:{isMenuActive:n.isMenuOpen},nativeOn:{click:function(e){n.ontoggleMenu(e)}}}),t("transition",{attrs:{name:"nav--menu"}},[n.isMenuOpen?t("nav-menu",{attrs:{isMenuActive:"isMenuOpen"},on:{closeMenu:n.onCloseMenu}}):n._e()],1),t("nuxt")],1)},staticRenderFns:[]}},176:function(n,e,t){var A=t(159);"string"==typeof A&&(A=[[n.i,A,""]]),A.locals&&(n.exports=A.locals);t(48)("d774e836",A,!0)}});