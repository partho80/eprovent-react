(function ($) {
  "use strict";


  /*---------------------
     Header
  ---------------------*/
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 20) {
      $('.header-area').addClass('header-bg');
    } else {
      if ($('.navbar-collapse').hasClass('show')) {} else {
        $('.header-area').removeClass("header-bg");
      }
    }
  });


  /*---------------------
      Navbar
  ----------------------*/
  $('document').ready(function () {
    $('.dropdown-menu').hover(function () {
      $(this).siblings().toggleClass("active");
    });
  });


  /*---------------------
      AOS Animation
  ---------------------*/

  $('document').ready(function () {
    AOS.init();
  });

  /*---------------------
    Counter Up
  ---------------------*/
  $('.counter').counterUp();



  /*---------------------
    Magnific Popup
  ---------------------*/
  $('.memories-popup').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });

  /*---------------------
      Video Play
  ---------------------*/
  $('.play-btn').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
    iframe: {
      markup: '<div class="mfp-iframe-scaler">' +
        '<div class="mfp-close"></div>' +
        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
        '</div>',

      srcAction: 'iframe_src',
    }
  });

  /*---------------------
    Scroll to top
  ---------------------*/
  $('body').materialScrollTop();


  /*---------------------
    PreLoader
  ---------------------*/
  $("#preloader").introLoader({

    animation: {
      name: 'cssLoader',
      options: {
        exitFx: 'slideUp',
        ease: "easeOutSine",
        style: 'dark',
        delayBefore: 700,
        exitTime: 700
      }
    }

  });

  /*---------------------
   Contact Form
  ---------------------*/
  if ($('body').find('.contact-form').length !== 0) {
    // Form 1
    $('.cf-msg').hide();
    $('form#cf button#submit').on('click', function () {

      var firstName = $('#firstName').val();
      var email = $('#email').val();
      var subjectName = $('#subjectName').val();
      var msg = $('#msg').val();
      var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

      if (!regex.test(email)) {
        alert('Please enter valid email');
        return false;
      }

      firstName = $.trim(firstName);
      subjectName = $.trim(subjectName);
      email = $.trim(email);
      msg = $.trim(msg);

      if (firstName != '' && email != '' && msg != '') {
        var values = "firstName=" + firstName + "&subjectName=" + subjectName + "&email=" + email + " &msg=" + msg;
        $.ajax({
          type: "POST",
          url: "assets/php/mail.php",
          data: values,
          success: function () {
            $('#firstName').val('');
            $('#subjectName').val('');
            $('#email').val('');
            $('#msg').val('');

            $('.cf-msg').fadeIn().html('<div class="alert alert-success"><strong>Success!</strong> Email has been sent successfully.</div>');
            setTimeout(function () {
              $('.cf-msg').fadeOut('slow');
            }, 4000);
          }
        });
      } else {
        $('.cf-msg').fadeIn().html('<div class="alert alert-danger"><strong>Warning!</strong> Please fillup the informations correctly.</div>')
      }
      return false;
    });

  }

}(jQuery));