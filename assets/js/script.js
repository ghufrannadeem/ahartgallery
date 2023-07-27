$(document).ready(function(){

    // Lightbox Code
    $('[data-fancybox]').fancybox({ protect: true});


    // Menu Function
    $('#nav-icon4').click(function(){
			$(".header").toggleClass('open');
			$('.main-menu').toggleClass('activeMenu');
		});


    // Partner first Slider
    $('.partner-slider-one').slick({
        dott: false,
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 10000,
        cssEase: 'linear',
      });


    // Partner Second Slider
    $('.partner-slider-two').slick({
        dott: false,
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 10000,
        cssEase: 'linear',
        rtl: true,
      });


// Testimonials Slider
    $('.testi-slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 300,
      });



      // FAQ's Function
    // jQuery(".faqs-section").on("click", ".faq-content--question", function() {
    //     jQuery(this).toggleClass("active").next().slideToggle();
    //     jQuery(".faq-content--answer").not(jQuery(this).next()).slideUp(300);
    //     jQuery(this).siblings().removeClass("active");
    //     });
    jQuery(".faq-box").on("click", "h3", function() {
        jQuery(".faq-box").removeClass("active");
        jQuery(this).parents(".faq-box").toggleClass("active").children('p').slideToggle();
        jQuery(".faq-box p").not(jQuery(this).next()).slideUp(300);
        });
    //FAQ's Function



    //Tab on Hover Function
    $.fn.tab = function(options) {
      var opts = $.extend({}, $.fn.tab.defaults, options);
      return this.each(function() {
        var obj = $(this);
  
        $(obj).find('.tabHeader li').on(opts.trigger_event_type, function() {
          $(obj).find('.tabHeader li').removeClass('active');
          $(this).addClass('active');
  
          $(obj).find('.tabContent div').hide();
          $(obj).find('.tabContent div').eq($(this).index()).show();
        })
      });
    }
    $.fn.tab.defaults = {
      trigger_event_type: 'click',
    };
    //Tab on Hover Function





});