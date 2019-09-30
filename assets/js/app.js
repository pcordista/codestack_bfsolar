
$(document).ready(function () {

  $('.parallax').parallax();

  $menuLeft = $('.pushmenu-left');
  $nav_list = $('#sidebartoggle');

  $nav_list.click(function () {
    $(this).toggleClass('active');
    $('.pushmenu-push').toggleClass('pushmenu-push-toright');
    $menuLeft.toggleClass('pushmenu-open');

    if ($(this).hasClass('active')) {
      $('#sidebartoggle').html('<i class="material-icons">close</i>');
    } else {

      $('#sidebartoggle').html('<i class="material-icons">menu</i>');
    }
  });

  $(".pushmenu > a").click(function () {
    $nav_list.toggleClass('active');
    $('.pushmenu-push').toggleClass('pushmenu-push-toright');
    $menuLeft.toggleClass('pushmenu-open');

    if ($(this).hasClass('active')) {
      $('#sidebartoggle').html('<i class="material-icons">close</i>');
    } else {

      $('#sidebartoggle').html('<i class="material-icons">menu</i>');
    }
  });

  var swiper = new Swiper('.swiper-servicos', {
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-servicos-next',
      prevEl: '.swiper-servicos-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 3,
      }
    }
  });

  var swiper = new Swiper('.swiper-depoimentos', {
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-depoimentos-next',
      prevEl: '.swiper-depoimentos-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 3,
      }
    }
  });
})



