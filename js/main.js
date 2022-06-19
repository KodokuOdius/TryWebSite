$(function() {
   $('.main_slider').slick({
       arrows: true,
       dots: false,
       fade: false,
       autoplay: true,
       autoplaySpeed: 3500,
       prevArrow: `<button type="button" class="slick-prev">&lsaquo;</button>`,
       nextArrow: `<button type="button" class="slick-next">&rsaquo;</button>`,
   });
});


$('.long_slider').slick({
    arrows: false,
    dots: false,
    centerPadding: '60px',
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  });