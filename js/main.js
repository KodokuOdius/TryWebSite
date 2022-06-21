$(function () {
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
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
})


// setInterval(() => {
//     if (window.innerWidth < 900) {
//         $('.long_slider').slick({
//             arrows: false,
//             dots: false,
//             slidesToShow: 3,
//             slidesToScroll: 1,
//             autoplay: true,
//             autoplaySpeed: 1000,
//         })
//     } else {
//         $('.long_slider').slick({
//             arrows: false,
//             dots: false,
//             slidesToShow: 6,
//             slidesToScroll: 1,
//             autoplay: true,
//             autoplaySpeed: 1000,
//         })
//     }
// }, 1000);


// const t = $.getScript("./js/main.js");
// console.log(t);


