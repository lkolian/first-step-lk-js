
<!-- Initialize Swiper -->
const thumbs = new Swiper(".thumbs-slider", {
    spaceBetween: 4,
    slidesPerView: 'auto',
    freeMode: true,
    watchSlidesProgress: true,
    initialSlide:2,
    roundLengths: true,
});
const swiper = new Swiper(".slider", {
    spaceBetween: 4,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: thumbs,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    initialSlide: 2,
    roundLengths: true,
});
