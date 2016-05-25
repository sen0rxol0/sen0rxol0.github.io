"use strict";

function showActivePage() {
	var anchorEl = document.querySelectorAll("#site_nav a");
	
	for (var i = 0; i < anchorEl.length; i++) {
		
		var hrefAttr = anchorEl[i].getAttribute("href");
		if (hrefAttr === window.location.href) {
			anchorEl[i].classList.add("active_page");
		}
	}
	
	var activePage = document.querySelector(".active_page");
	
	if (!activePage) {
		anchorEl[0].classList.add("active_page");
	}
}

function handleMenuToggle() {
	var   menuIcon = document.querySelector(".menu_icon"),
		  contactLinks = document.querySelector(".footer_links"),
		  siteNav = document.querySelector("#site_nav"),
		  mainArticle = document.querySelector(".main_article"),
		  articlesWrap = document.querySelector("#articles_wrapper"),
		  aboutArticle = document.querySelector("#about_article");
	
	menuIcon.addEventListener("click", function() {
		this.classList.toggle("menu_active");
		contactLinks.classList.toggle("menu_active");
		siteNav.classList.toggle("menu_active");
		
		if (document.body.clientWidth <= 520) {
			mainArticle.classList.toggle("menu_active");
			articleWrap.classList.toggle("menu_active");
			aboutArticle.classList.toggle("menu_active");
		}
	});
	
}

function showHideHeader() {
	var mainHeader = document.getElementById("main_header");
	if (document.body.clientWidth <= 950) {
		window.onscroll = function() {
			if (window.scrollY >= 120) {
				mainHeader.classList.add("hide_header");
				document.querySelector(".menu_icon").classList.remove("menu_active");
				document.querySelector("div.footer_links").classList.remove("menu_active");
				document.getElementById("site_nav").classList.remove("menu_active");
			} else {
				mainHeader.classList.remove("hide_header");
			}
		};
	}
	
}

showActivePage();
handleMenuToggle();
showHideHeader();