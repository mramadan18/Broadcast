$(function () {

  $(".banner .inner button").click(function () {

    $('html, body').animate({

      scrollTop: $(".wrapper.style1").offset().top

    }, 1000);

  })

    $('.tab-list li').click(function () {

      $(this).addClass('active').siblings().removeClass('active');

      $($(this).data('tab')).addClass('active').siblings().removeClass('active');

    });

    $('.header a').click(function (e) {

      e.preventDefault();

      $('.menu').toggleClass('active');

    });

    $('.fa-close').click(function () {

      $('.menu').removeClass('active')

    })

});



