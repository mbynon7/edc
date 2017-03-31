(function ($, root, undefined) {
	
	$(function () {
		
		'use strict';

		// TURN OFF ANIMATIONS FOR MOBILE

	    AOS.init({
	      disable: function () {
		    var maxWidth = 768;
		    return window.innerWidth < maxWidth;
		  }
	    });

		// CHANGE HEADER BACKGROUND

		$(function() {
			var changeHeader = 80;
			$(window).scroll(function() {
				var scroll = getCurrentScroll();
				if (scroll >= changeHeader) {
					$('.header').addClass('scrolled');
				} else {
					$('.header').removeClass('scrolled');
				}
			});
			function getCurrentScroll() {
				return window.pageYOffset || document.documentElement.scrollTop;
			}
		});

		// SWITCH TABS
		
		$('ul.tabs li').click(function(){
			var tab_name = $(this).attr('data-tab');

			$('ul.tabs li').removeClass('current');
			$('.tab-content').removeClass('current');

			if ($("ul.tabs").hasClass("tab-menu-full")) {
			  $('ul.tabs').removeClass('tab-menu-full');
			}

			$(this).addClass('current');
			$("."+tab_name).addClass('current');
		});

		// SHOW ALL TAB BUTTONS ON MOBILE

		$(".tab-menu-ctrl").click(function(){
			$(".rotate").toggleClass("down");
		    $("ul.tabs").toggleClass("tab-menu-full");
		});

		
		// SHOW/HIDE FOOTER NAVS

		$('.footer-nav-label').click(function(){

			var nav = $(this).attr('data-nav');

			$("."+nav).slideToggle();
			$(this).toggleClass("footer-nav-open");

		});
		
		
	});
	
})(jQuery, this);