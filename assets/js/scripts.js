



function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
	var input, filter, ul, li, a, i;
	input = document.getElementById("myInput");
	filter = input.value.toUpperCase();
	div = document.getElementById("myDropdown");
	a = div.getElementsByTagName("a");
	for (i = 0; i < a.length; i++) {
		txtValue = a[i].textContent || a[i].innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
			a[i].style.display = "";
		} else {
			a[i].style.display = "none";
		}
	}
}
$(document).ready(function () {
	function myFunction() {
		document.getElementById("myDropdown").classList.toggle("show");
	}
	
	function filterFunction() {
		var input, filter, ul, li, a, i;
		input = document.getElementById("myInput");
		filter = input.value.toUpperCase();
		div = document.getElementById("myDropdown");
		a = div.getElementsByTagName("a");
		for (i = 0; i < a.length; i++) {
			txtValue = a[i].textContent || a[i].innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				a[i].style.display = "";
			} else {
				a[i].style.display = "none";
			}
		}
	}

    // For Equal Height Elements
    $(function () {

    	var headerH = $('.etisalat .navbar').outerHeight(),
	    		footerH = $('.footer.login-footer').outerHeight(),
	    		windowH = $(window).height(),
	    		windowW = $(window).width(),
	    		loginH = windowH - headerH - footerH,
	    		loginInnerH = $('.login-header').outerHeight(),
	    		loginFormH = loginH - loginInnerH;
	    		console.log(windowH, windowW);

    	/*function mainPageH() {
    		// hope page equal height 
	    	

	    	$('.login-section').outerHeight(loginH);
	    	$('.login-img').outerHeight(loginH);
	    	$('.login-form').outerHeight(loginFormH);
    	}

    	if (windowH > 500 && windowW > 767) {
    		mainPageH();

    		//call mainPageH once
	    	var waitForFinalEvent = (function () {
			  var timers = {};
			  return function (callback, ms, uniqueId) {
			    if (!uniqueId) {
			      uniqueId = "Don't call this twice without a uniqueId";
			    }
			    if (timers[uniqueId]) {
			      clearTimeout (timers[uniqueId]);
			    }
			    timers[uniqueId] = setTimeout(callback, ms);
			  };
			})();
	    	

			//usage of function above
			$(window).resize(function () {
			    waitForFinalEvent(function(){
			      mainPageH();

			    }, 500, "some unique string");
			});
    	} else {
    		//$('.row .item').sameHeight();
    	}*/

    	

        //
    });
    	$('.homecontainer .item').matchHeight();
//    $(".etisalat aside.sidebar .nav-stacked li").hover(function () {
//        $(this).toggleClass("result_hover");
//        $('child-menu-wrapper').toggleClass("child-menu-wrapper-hover");
//    });
//    $('.etisalat aside.sidebar .nav-stacked li').hover(function(){     
//        $(this).toggleClass('result_hover');    
//    },     
//    function(){    
//        $('child-menu-wrapper').toggleClass('child-menu-wrapper-hover');     
//    });
    (function ($) {
        $(window).on("load", function () {
            $("#content-1").mCustomScrollbar();
        });
    })(jQuery);
    // Date Picker	
    $('#datePicker1, #datePicker2, .date-picker').dcalendarpicker({

    // default: mm/dd/yyyy
  format: 'dd-mm-yyyy'
  
    });



    //display side navigation on 767
    setTimeout(function() {
    	$('body').removeClass('sideNavIn');
		$('.sidebar2').hide();
		console.log('loaded');
    }, 300)
    function checkSideNav() {
    	// check window size and perfoorm navigaton actions
	    if ( $(document).width() < 768 ) {
	    	if($("#content-1.mCustomScrollbar").length < 1) {
	    		$("#content-1").mCustomScrollbar();
	    		console.log('mmmmmm');
	    	}

	    	//$('body').addClass('sideNavIn');
	    	$('.sidebar2').height(documentH);
	    	if(document.location.href.match(/[^\/]+$/)[0] !== 'index.html') {
	    		if ($('.navbar.navbar-default').find('#sideNavToggle').length < 1) { 
		    		$('<button type="button" id="sideNavToggle"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button>').prependTo('.navbar.navbar-default .navbar-header');
		    	}
	    	}

	    	$('.slickslider').slick({
				dots: false,
				infinite: true,
				speed: 300,
				slidesToShow: 3,
				adaptiveHeight: true,
				arrows: true
			});

	    	$('#sideNavToggle').unbind('click');
			$('#sideNavToggle').on('click', function() {
				$('.sidebar2').animate({
					width: 'toggle'
				}, 700, 'linear', function() {
					$('body').toggleClass('sideNavIn');
				});
			});

	    } else {
	    	var documentH = $(document).height();
	    	$('body').removeClass('sideNavIn');
	    	$('#sideNavToggle').remove();
	    	$('.sidebar2').hide();

			if($('.slickslider').hasClass('slick-initialized')) {
				$('.slickslider').slick('unslick');
				console.log('un slickkkkk');
			}

			
	    }
    }

    checkSideNav();
    var waitForFinalEvent = (function () {
	  var timers = {};
	  return function (callback, ms, uniqueId) {
	    if (!uniqueId) {
	      uniqueId = "Don't call this twice without a uniqueId";
	    }
	    if (timers[uniqueId]) {
	      clearTimeout (timers[uniqueId]);
	    }
	    timers[uniqueId] = setTimeout(callback, ms);
	  };
	})();

	//usage of function above
	$(window).resize(function () {
	    waitForFinalEvent(function(){
	      checkSideNav();

	    }, 500, "some unique string");
	});

	

	$('.sidebar2 .nav-stacked li a').on('click', function() {
		$(this).parent('li').toggleClass('active');
	});


});

$(window).load(function(){
	setTimeout(function() {
    	$(document).scrollTop(0);
		$('body').removeClass('loading');
		setTimeout(function() {
		    $('#loaderM').fadeOut(900);
		}, 700);
    }, 750);
});

$(window).scroll(function () {
	var scroll = $(window).scrollTop();

	//>=, not <=
	if (scroll >= 50) {
			//clearHeader, not clearheader - caps H
			$("body").addClass("fixedHeader");
	} else {
			$("body").removeClass("fixedHeader");
	}
}); //missing );