
// Smooth scroll
uAgent = navigator.userAgent;
macOS = uAgent.match(/(iPad|iPhone|iPod|Macintosh)/g) ? true : false;
mobileIE = uAgent.indexOf('IEMobile') !== -1;
touch = false;
windowWidth = $(window).width();
windowHeight = $(window).height();
documentHeight = $(document).height();
isNewerIe = uAgent.match(/msie (9|([1-9][0-9]))/i);
isOlderIe = uAgent.match(/msie/i) && !isNewerIe;
isAncientIe = uAgent.match(/msie 6/i);
isIe = isAncientIe || isOlderIe || isNewerIe;
latestKnownScrollY = $('html').scrollTop() || $('body').scrollTop();
ticking = false;
// Smooth scroll end

$(document).ready(function () {
    if ('ontouchstart' in window || 'onmsgesturechange' in window) {
        touch = true;
    }

    var map;

    $(window).on('load', function () {
        // PRELOADER
        var preloader = $('#page-preloader');
        preloader.removeClass('pageload-loading');
        // PRELOADER END
        Parallax.initialize();
    });

    $(window).on("scroll", function () {
        latestKnownScrollY = $('html').scrollTop() || $('body').scrollTop();
        requestAnimation();
        if ($(document).width() > 1024) {
            if ($(window).scrollTop() > 100) {
                $(".navbar.main-menu").addClass("navbar-fixed");
            } else {
                $(".navbar.main-menu").removeClass("navbar-fixed");
            }
        }
        // fix menu end
    });
    $(document)
      .on('focus', 'input,textarea ', function(e) {
          $('body').addClass('fixfixed');
      })
      .on('blur', 'input,textarea ', function(e) {
          $('body').removeClass('fixfixed');
      });
    if ($(document).width() > 1024) {
        if ($(window).scrollTop() > 100) {
            $(".navbar.main-menu").addClass("navbar-fixed");
        } else {
            $(".navbar.main-menu").removeClass("navbar-fixed");
        }
    }
    // mobile menu
    // if ($(document).width() < 1025) {
    //     $(".main-menu").addClass("mobile-menu");
    // } else {
    //     $(".main-menu").removeClass("mobile-menu");
    // }

    $(window).on("resize", function () {
        windowWidth = $(window).width();
        windowHeight = $(window).height();
        Parallax.initialize();
        // if ($(document).width() < 1025) {
        //     $(".main-menu").addClass("mobile-menu");
        // } else {
        //     $(".main-menu").removeClass("mobile-menu");
        // }
    });

    $(document).on("click", ".mobile-menu-btn", function () {
        $(".main-menu").toggleClass("_menu-open");
        $(".mobile-menu-btn").toggleClass("active");
        $("html, body").toggleClass("no-scroll");
    });
    // mobile menu END

    // main block height
    if (!$('.main-section').hasClass("no-index")) {
        $('.main-section').css('height', $(window).height());
        $(window).resize(function () {
            $('.main-section').css('height', $(window).height());
        });
    }
    // main block height END
    
//Initialize all sliders
    // team slider 
        // version-1
        $(".owl-carousel.team-section-carousel.version-1").owlCarousel({
          itemsCustom : [
            [320, 1],
            [480, 2],
            [767, 3],
            [768, 3],
            [1024, 4],
            [1400, 4],
            [1600, 4]
          ],
          navigation : false
        });

        // version-2
        $(".owl-carousel.team-section-carousel.version-2").owlCarousel({
              itemsCustom : [
                [320, 1],
                [480, 2],
                [767, 2],
                [768, 2],
                [1024, 3],
                [1400, 3],
                [1600, 3]
              ],
            pagination : false,
            navigation:true,
            navigationText: [
              "<i class='fa fa-angle-left'></i>",
              "<i class='fa fa-angle-right'></i>"
            ],
        });

    // products slider 
        // version-1
        $(".owl-carousel.products-list.version-1").owlCarousel({
            singleItem : true
            //   navigation:true,
            // navigationText: [
            //   "<i class='fa fa-angle-left'></i>",
            //   "<i class='fa fa-angle-right'></i>"
            //   ],
        });
        // version-2
        $(".owl-carousel.products-list.version-2").owlCarousel({
            itemsCustom : [
            [320, 1],
            [480, 2],        
            [1600, 2]
          ]
            // navigation:true,
            // navigationText: [
            //   "<i class='fa fa-angle-left'></i>",
            //   "<i class='fa fa-angle-right'></i>"
            //   ],
        });
        // version-3
        $(".owl-carousel.products-list.version-3").owlCarousel({
            itemsCustom : [
            [320, 1],
            [480, 3],        
            [1600, 3]
          ]
            // navigation:true,
            // navigationText: [
            //   "<i class='fa fa-angle-left'></i>",
            //   "<i class='fa fa-angle-right'></i>"
            //   ],
        });
        // version-4
        $(".owl-carousel.products-list.version-4").owlCarousel({
            pagination : false,
            singleItem : true,
            navigation:true,
            navigationText: [
              "<i class='fa fa-angle-left'></i>",
              "<i class='fa fa-angle-right'></i>"
              ],
        }); 

    // customers slider version-1
    $(".owl-carousel.customers-carousel.version-1").owlCarousel({
        singleItem : true
    });

    // customers slider version-2
    $(".owl-carousel.customers-carousel.version-2").owlCarousel({
        singleItem : true
    });

    // customers slider version-3
    $(".owl-carousel.customers-carousel.version-3").owlCarousel({
        singleItem : true,
        transitionStyle : "fade",
        mouseDrag : false
    });

    // news-home slider version-1
    $(".owl-carousel.news-list.version-1").owlCarousel({
        singleItem : true,
        transitionStyle : "fade"  
    });

    // .main-section.version-4 
    var owlMainSlider = $(".main-section.version-4 .owl-carousel");
    owlMainSlider.owlCarousel({
        singleItem : true,
        pagination : false,
        navigation:true,
        navigationText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        transitionStyle : "fade" 
    });
      $(".next").click(function(){
        owlMainSlider.trigger('owl.next');
      });
      $(".prev").click(function(){
        owlMainSlider.trigger('owl.prev');
      });
//Initialize all sliders end


// footer map 
    // init google map
    function initialize() {
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 12,
            scrollwheel: false,
            center: {lat: 40.711557, lng: -74.016489}
        });

        // marker
        var marker = new google.maps.Marker({
        map: map,
        position: {lat: 40.711557, lng: -74.016489},
        title: 'Hello World!'
      });

    }
    google.maps.event.addDomListener(window, 'load', initialize);
    

    // footer map open  
        $(document).on("click", ".open-map", function () {
            $(this).addClass("_open-map");
            return false;
        });
        $(document).on("click", "#map", function () {
            return false;
        });
        $(document).on("click", "body", function () {
            $('.open-map').removeClass("_open-map");
        });
// footer map end    

// menu scrolling scrollTo
    $('.navbar-nav a[href^="#"]').bind("click", function (e) {
        var anchor = $(this);

        $('.navbar-nav > li').removeClass('active');
        $(this).parent(".navbar-nav li").addClass('active');
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 500);
        
        if($(this).parents(".main-menu").is(".mobile-menu, ._menu-open")) {
            $(".main-menu").removeClass("_menu-open");
            $(".mobile-menu-btn").removeClass("active");
            $("html, body").removeClass("no-scroll");
        }
        
        e.preventDefault();
        return false;
    });

    $("section, footer").waypoint(function (direction) {
        if (direction === "down") {
            $(".navbar-nav a[href*=#" + this.element.id + "]").parent().addClass('active').siblings().removeClass('active');
        }
    }, {
        offset: "50%"
    });
    
    $("section, footer").waypoint(function (direction) {
        if (direction === "up") {
            $(".navbar-nav a[href*=#" + this.element.id + "]").parent().addClass('active').siblings().removeClass('active');
            if(this.element.id == "main-section") {
                $(".navbar-nav > li").removeClass('active');
            }
        }
    }, {
        offset: "-1%"
    });
// anchor scroll end

// counter
    if($('.counter').length > 0) {
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    }
// counter end

// slide to bottom arrow
    $('.slide-to-bottom').click(function(){
        var $next_section = $(this).parent().next();

        TweenMax.to($(window), .6, {
            scrollTo: {
                y: $next_section.offset().top
            },
            ease: Power1.easeOut
        });
    });
// slide bottom end

//forms focus
    $(document).on("focus", ".form-control", function () {
        $(this).parent().find(".input-group-addon").addClass("focus");
    });

    $(document).on("blur", ".form-control", function () {
        $(this).parent().find(".input-group-addon").removeClass("focus");
    });
//forms focus end


// share links open
    $(document).on("click", ".share p", function () {
        $(this).toggleClass("active");
        $(this).parent().find("ul.share-links").slideToggle("active");
    });
// share links open end
    


// galleru initialize
    if($('#gallery-list').length > 0) {
        document.getElementById('gallery-list').onclick = function (event) {
            event = event || window.event;
            var target = event.target || event.srcElement,
                link = target.src ? target.parentNode : target,
                options = {index: link, event: event},
                links = this.getElementsByTagName('a');
            blueimp.Gallery(links, options);
        }
    }
// galleru initialize end

// animation
    (function($, window){
        cssAnimation = function(){
            $('.theme-section').each(function(){
                $(this).find('.theme-animation').each(function(index){
                    $(this).addClass('animation-delay-'+index);
                    $(this).waypoint(function (dir) {
                        $(this.element).addClass('animateIt');
                    }, {
                        offset: "90%",
                        triggerOnce: true
                    });
                });
            });
        }
        $(window).on('load', function () {
            cssAnimation();
        });
    })(jQuery, window);
//End animation


//Callback form validation
    $(document).on("submit", "form#callback-form, form#callback-form2", function(event) {
        event.preventDefault();
        if(!validation($(this).attr("id"))) {
            var $form = $(this),
                formData = new FormData(this);
            formData.append('type', 'contact');

            $.ajax({
                type: "POST",
                url: 'mail/',
                data: formData,
                processData: false,
                contentType: false,
                dataType: 'json',
                success: function(res) {
                    var success = $('<div class="success-block"><strong class="field-success">Success</strong></div>');
                    $form.append(success);
                    success.siblings().css('opacity','0');     
                }
            });
        }
        return false;
    });
//End Callback form validation
    
//Subscribe form validation
    $(document).on("submit", "form#subscribe-form", function(event) {
        event.preventDefault();
        if(!validation($(this).attr("id"))) {
            var $form = $(this),
                formData = new FormData(this);
            formData.append('type', 'subscribe');
            
            $.ajax({
                type: "POST",
                url: 'mail/',
                data: formData,
                processData: false,
                contentType: false,
                dataType: 'json',
                success: function(res) {
                    var success = $('<div class="success-block"><strong class="field-success">Success</strong></div>');
                    $form.append(success);
                    success.siblings().css('opacity','0');     
                }
            });
        
        }
        return false;
    });
//End subscribe form validation

//Comment form validation
    $(document).on("submit", "form#comments-form", function() {
        if(!validation($(this).attr("id"))) {
            //here your code
        }
        return false;
    });
//End comment form validation


});

(function ($) {
    "use strict";
    $.fn.resto_animated = function (inEffect, outEffect) {
        $(this).css("opacity", "0").addClass("animated").waypoint(function (dir) {
            if (dir === "down")
                $(this.element).removeClass(outEffect).addClass(inEffect).css("opacity", "1");
        }, {
            offset: "90%"
        });

        $(this).css("opacity", "0").addClass("animated").waypoint(function (dir) {
            if (dir === "up")
                $(this.element).removeClass(outEffect).addClass(inEffect).css("opacity", "1");
        }, {
            offset: "5%"
        });
    };
})(jQuery);

(function() {
    'use strict';
    var vendors = ['webkit', 'moz'];
    for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
        var vp = vendors[i];
        window.requestAnimationFrame = window[vp+'RequestAnimationFrame'];
        window.cancelAnimationFrame = (window[vp+'CancelAnimationFrame'] || window[vp+'CancelRequestAnimationFrame']);
    }
    
    if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) // iOS6 is buggy
        || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
        var lastTime = 0;
        window.requestAnimationFrame = function(callback) {
            var now = Date.now();
            var nextTime = Math.max(lastTime + 16, now);
            return setTimeout(function() { callback(lastTime = nextTime); },
                nextTime - now);
        };
        window.cancelAnimationFrame = clearTimeout;
    }
}());


function updateParallax() {
    ticking = false;
    Parallax.update();
}

function requestAnimation() {
    if (!ticking) {
        requestAnimationFrame(updateParallax);
    }
    ticking = true;
}

function validation (formId) {
    if($('form#'+ formId +' .field-success')[0] ) $('form#'+ formId +' .field-success').remove();
    $('form#'+ formId +' .field-error').remove();
    $('form#'+ formId +' .form-control').removeClass('inputError');
    var hasError = false;
    $('form#'+ formId +' .requiredField').each(function() {
        if(jQuery.trim($(this).val()) == '' || jQuery.trim($(this).val()) == jQuery.trim($(this).attr('placeholder'))){
            $(this).parent().append('<strong class="field-error">This is a required field</strong>');
            $(this).addClass('inputError');
            hasError = true;
        } else {
            if($(this).hasClass('email')) {
                var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                if(!emailReg.test(jQuery.trim($(this).val()))){
                    $(this).parent().append('<strong class="field-error">Please enter a valid email address.</strong>');
                    $(this).addClass('inputError');
                    hasError = true;
                } 
            } else if($(this).hasClass('phone')) {
                var phoneReg = /^\+?[0-9 ]*$/;
                if(!phoneReg.test(jQuery.trim($(this).val()))){
                    $(this).parent().append('<strong class="field-error">Please enter a valid phone number.</strong>');
                    $(this).addClass('inputError');
                    hasError = true;
                } 
            } else if($(this).hasClass('date')) {
                var dateReg = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;
                if(!dateReg.test(jQuery.trim($(this).val()))){
                    $(this).parent().append('<strong class="field-error">Please enter a valid date.</strong>');
                    $(this).addClass('inputError');
                    hasError = true;
                } 
            } else if($(this).hasClass('time')) {
                var dateReg = /^[0-9]{2}:[0-9]{2}$/;
                if(!dateReg.test(jQuery.trim($(this).val()))){
                    $(this).parent().append('<strong class="field-error">Please enter a valid time.</strong>');
                    $(this).addClass('inputError');
                    hasError = true;
                } 
            } else if($(this).hasClass('persons')) {
                var personsReg = /^[1-9]{1}[0-9]{0,1}$/;
                if(!personsReg.test(jQuery.trim($(this).val()))){
                    $(this).parent().append('<strong class="field-error">Please enter a valid number of persons.</strong>');
                    $(this).addClass('inputError');
                    hasError = true;
                } 
            }
        }
    });
    
    return hasError;
}
