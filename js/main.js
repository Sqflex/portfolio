new WOW().init();
var mySwiper = new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 100,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
});