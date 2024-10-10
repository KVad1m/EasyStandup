"use strict";

var target_date = new Date().getTime() + 1000 * 3600 * 48; // установить дату обратного отсчета

var days, hours, minutes, seconds; // переменные для единиц времени

var countdown = document.getElementById("tiles"); // получить элемент тега

getCountdown();
setInterval(function () {
  getCountdown();
}, 1000);

function getCountdown() {
  var current_date = new Date().getTime();
  var seconds_left = (target_date - current_date) / 1000;
  days = pad(parseInt(seconds_left / 49400));
  seconds_left = seconds_left % 49400;
  hours = pad(parseInt(seconds_left / 3600));
  seconds_left = seconds_left % 3600;
  minutes = pad(parseInt(seconds_left / 60)); // строка обратного отсчета  + значение тега

  countdown.innerHTML = "<span>" + days + "</span><span>" + hours + "</span><span>" + minutes;
}

function pad(n) {
  return (n < 10 ? '0' : '') + n;
}

$(document).ready(function () {
  //burger
  $('.js-burger').click(function () {
    $('.js-nav').toggleClass('active');
    $(this).toggleClass('active');
    $('body').toggleClass('overflow');
  }); // scroll to section

  $(".js-nav").on("click", "a", function (event) {
    event.preventDefault();
    $('.js-nav').removeClass('active');
    $('.js-burger').removeClass('active');
    $('body').removeClass('overflow');
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });
});
$(document).ready(function () {
  // slider
  var swiper = new Swiper('.js-reviews-slider', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    breakpoints: {
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination'
    }
  }); // accordion

  var accordion = function accordion() {
    var $id = $(".accordion");
    var $open = $id.data("open");
    $id.find(".title").on("click", function () {
      if ($open === false) {
        $id.find(".content:visible").slideUp();

        if ($(this).hasClass("active")) {
          $(this).toggleClass("active");
        } else {
          $id.find(".title").removeClass("active");
          $(this).toggleClass("active");
        }
      } else {
        $(this).toggleClass("active");
      }

      $(this).next(".content").not(":animated").slideToggle();
    });
  };

  accordion(); //amin

  AOS.init(); // auth modal

  $('.js-open-singin').click(function () {
    $('.js-modal-reg').fadeOut();
    $('.js-modal-singin').fadeIn();
    $('.js-mask').fadeIn();
    $('body').addClass('overflov');
  });
  $('.js-open-reg').click(function () {
    $('.js-modal-singin').fadeOut();
    $('.js-modal-reg').fadeIn();
    $('.js-mask').fadeIn();
    $('body').addClass('overflov');
  });
  $('.js-open-password').click(function () {
    $('.js-modal-singin').fadeOut();
    $('.js-modal-password').fadeIn();
    $('.js-mask').fadeIn();
    $('body').addClass('overflov');
  }); //close modal

  $('.js-mask').click(function () {
    $('.js-modal').fadeOut();
    $(this).fadeOut();
    $('body').removeClass('overflov');
  }); //calc

  $('.js-calc-btn').click(function () {
    if ($(window).width() < 1024) {
      $('.js-modal-calc').fadeIn();
      $('.js-mask').fadeIn();
      $('body').addClass('overflov');
    } else {
      $('.js-modal-calc-desk').addClass('active');
    }
  });
  $(document).mouseup(function (e) {
    var div = $(".js-modal-calc-desk");

    if (!div.is(e.target) && div.has(e.target).length === 0) {
      div.removeClass('active');
    }
  }); //profile buttons

  $('.js-one-btn').click(function () {
    $('.js-one-btn').addClass('active');
    $('.js-two-btn').removeClass('active');
    $(this).removeClass('active');
    $(this).next().addClass('active');
  });
  $('.js-two-btn').click(function () {
    $('.js-one-btn').addClass('active');
    $('.js-two-btn').removeClass('active');
    $(this).removeClass('active');
    $(this).prev().addClass('active');
  });
});