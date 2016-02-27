(function ($) {

    function addRemoveClass() {

        var $anchorLink = $("#site_nav a");

        $anchorLink.each( function(i) {

            var $href = $anchorLink.eq(i).attr("href");

            if ( $href === window.location.href ) {

                    $("a.active_page").removeClass("active_page");

                    $anchorLink.eq(i).addClass("active_page");

             } 
        });
        
        
        if ( !$anchorLink.hasClass("active_page") ) {
            
            $anchorLink.eq(0).addClass("active_page");
        }
        
       
    }
    
    
    
    function toggleMenu() {
        
        var $menuIcon     = $(".menu_icon"),
            $contactLinks = $(".footer_links"),
            $siteNav      = $("#site_nav"),
            $mainArticle  = $(".main_article"),
            $articlesWrap = $("#articles_wrapper"),
            $aboutArticle = $("#about_article");
    
        
        $menuIcon.on("click", function() {
            
            $menuIcon.toggleClass("menu_active");
            $contactLinks.toggleClass("menu_active");
            $siteNav.toggleClass("menu_active");
            
            if ( $(document).width() <= 520 ) {
                
                $mainArticle.toggleClass("menu_active");
                $articlesWrap.toggleClass("menu_active");
                $aboutArticle.toggleClass("menu_active");
                

            }
            
        });
        
    }
    
    
    function showHideHeader() {
        
        var $mainHeader = $("#main_header");
        
        var $windowScroll = $(window);
        
        if ( $(document).width() <= 950 ) {
        
            $(window).on("scroll", function() {

                //console.log($mainHeader.height());
                //console.log($(window).scrollTop());
                if ( $windowScroll.scrollTop() >= 120 ) {

                    $mainHeader.addClass("hide_header");

                    $("#footer_container .menu_active").removeClass("menu_active");
                    $("nav.menu_active").removeClass("menu_active");
                    $("article.menu_active").removeClass("menu_active");
                    
                } else {

                    $mainHeader.removeClass("hide_header");

                }

            });
        }
    
        
    }

    
    addRemoveClass();
    toggleMenu();
    showHideHeader();
    
}) (jQuery); // end of the immediately-invoked anonymous fn













