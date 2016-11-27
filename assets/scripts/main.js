"use strict";

(function() {

	function mBheader() {
		var bHeader = document.getElementById("bpage_header");
		if (!bHeader) { return; }
		if (document.body.clientWidth > 770) {
			
			window.onscroll = function() {
				if (window.scrollY >= 120) {
					console.log(window.scrollY);
					bHeader.classList.add("c_header");
				} else {
					bHeader.classList.remove("c_header");
				}
			}
		} else {
			return;
		}
	}


	function menuController() {
		
		var burgerMenu = document.querySelector("button[title='Menu']");
		var navEl = document.getElementsByTagName("nav")[0];

		function clearMenu() {
			if (navEl.id === "blog_nav" || navEl.id === "proj_nav")
				navEl.parentElement.classList.remove("nav_active");
			else
				navEl.classList.remove("nav_active");
		}
		
		function showMenu() {
			this.classList.toggle("ham_btn_active");
			
			if (navEl.classList.contains("nav_active") || navEl.parentElement.classList.contains("nav_active")) {
				clearMenu();
				return;
			} else {
				if (navEl.id === "blog_nav" || navEl.id === "proj_nav")
					navEl.parentElement.classList.add("nav_active");
				else
					navEl.classList.add("nav_active");
			}
		}

		burgerMenu.addEventListener("click", showMenu);
	}



	function AjaxReq() {
		
		var updateUrl, pageInfo, rData;
		
		function pagesReveal() {
			var revealer = document.getElementById("revealer_loader");

			var percentageCount, percentage = 0;
			
			var animCtrl = {
				play: function() {
					revealer.classList.add("rel_play");
					revealer.classList.remove("rel_pause");
					makeChanges();
				},
				pause: function() {
					revealer.classList.add("rel_pause");
					var pInter = setInterval(function() {
						if (isContentReady()) {
							animCtrl.play();
							clearInterval(pInter);
						}
					}, 50);
				}
			}

			var animStart = function(ev) {
				if (ev.target.id === "revealer_layer_1") {
					return;
				}

				percentageCount = window.setInterval(function() {
					percentage += 1;
					if (percentage === 50) {
						if(isContentReady()) {
							makeChanges();
						} else {
							animCtrl.pause();
						}
					}

					if (percentage === 100) {
						clearInterval(percentageCount);
					}
				}, 2000/100);
			};

			var animEnd = function(ev) {
				if (ev.target.id === "revealer_layer_2") {
					return;
				} else {
					clearAnim();
				}

			};

			function clearAnim() {
				revealer.classList.remove("reloading_page");
				revealer.removeEventListener("animationstart", animStart);
				revealer.removeEventListener("animationend", animEnd);
			} 

			revealer.addEventListener("animationstart", animStart);
			revealer.addEventListener("animationend", animEnd);
			revealer.classList.add("reloading_page");
		}
		
		
		function isContentReady() {
			if (typeof rData !== "object")
				return false;
			else if (rData === null)
				return;
			else
				return true;
		}
		
		
		function makeChanges() {

			if (updateUrl) history.pushState(pageInfo, pageInfo.title, pageInfo.pName);

			var requestedDocument = rData;
			var content = requestedDocument.querySelector("main");
			var contentHolder = document.querySelector("main");

			document.title = requestedDocument.title;
			contentHolder.innerHTML = content.innerHTML;
			contentHolder.id = content.id;
			

			pageInfo.title ? pageInfo.title : pageInfo["title"] = requestedDocument.title;
			
			ajax.navigation();
			
			if (document.location.pathname === "/") {
				sCaller.particlesJs();
				sCaller.pLanding();
			} else {
				sCaller.minBh();
			}
			
			sCaller.ctrlMenu();
		}
		
		
		function HttpRequests(rHref, pState) {	

			rHref ? updateUrl = true : updateUrl = false;

			if (pState && typeof pState === "object") {
				pageInfo = pState;
			} else {
				pageInfo = {
					url: rHref,
					pName: rHref
				};
			}

			var requestStatus = {
				progress: function() {	
					pagesReveal();
				}
			};

			var requestCb = {
				success: function(data) {
					rData = data;
				},
				error: function(status) {
					rData = null;
					console.log(status);
				}
			}
			
			function filterUrl(url) {
				if (!updateUrl) {
					return "index.html";
				} else {
					return url + "index.html";
				}
				
				
			}


			function makeRequest() {
				var promise = new Promise(function(resolve, reject) {

					var xhr = new XMLHttpRequest();

					xhr.addEventListener("progress", requestStatus.progress);

					xhr.open("GET", filterUrl(pageInfo.url), true);

					xhr.responseType = "document";

					xhr.onload = function() {
						if ((this.readyState === 4) && (this.status === 200))
							resolve(this.response);
						else
							reject(this.statusText);
					};

					xhr.onerror = function() { reject(this.statusText); };

					xhr.send();
				});

				return promise;
			}

			this.make = function() {
				makeRequest().then(requestCb.success).catch(requestCb.error);
			}

		}
		
		
		
		function popState() {
			return window.addEventListener("popstate", function(ev) {
				ev.preventDefault();
				if (ev.state) {
					var xhr = new HttpRequests(null, ev.state);
					xhr.make();
				}	
			});
		}
		
		
		this.navigation = function() {
			
			function processRq(ev) {
				ev.preventDefault();
				
				this.classList.add("click_feedback");
				
				var href = this.getAttribute("data-href");
				
				var xhr = new HttpRequests(href);
				xhr.make();
			}
			
			var navLinks = document.querySelectorAll(".ajx_nv");

			for (var i = 0; i < navLinks.length; i++) {
				navLinks[i].addEventListener("click", processRq);
			}
		};
		
		
		this.init = function() {
			var pageInfo = {
				url: document.location.href,
				title: document.title,
				pName: document.location.pathname
			};
			
			history.replaceState(pageInfo, pageInfo.title, pageInfo.url);
			
			this.navigation();
			
			popState();
		};
	}






	function pLandingAnim(eSelectors) {
		var sEls = document.querySelectorAll(eSelectors);
		
		for (var i = 0; i < sEls.length; i++) {
			sEls[i].classList.add("fade_in");
		}
	}


	function scptCaller() {
		this.particlesJs = function() {
			var pBg = document.getElementById("particles-bg");
			
			if (!pBg) { return; }
			
			particlesJS.load("particles-bg", 'assets/scripts/particlesjs-config.json');
			
			
		};
		
		this.pLanding = function() {
			pLandingAnim("#about_article, #s_character, #site_nav_main, #footer--container");
		};
		
		this.ctrlMenu = menuController;
		
		this.minBh = mBheader;
	}



	var ajax = new AjaxReq();
	var sCaller = new scptCaller();


	sCaller.particlesJs();
	sCaller.ctrlMenu();
	sCaller.pLanding();
	ajax.init();
	mBheader();
}());







