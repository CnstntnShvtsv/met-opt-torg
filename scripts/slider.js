var swiper01 = new Swiper('.slider-01 .swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    lazy: true,
    autoplay: {
        delay: 5000, // автоплей каждые 5с.
        disableOnInteraction: false,
    }
});

var swiper02 = new Swiper('.slider-02 .swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    lazy: true,
    slidesPerView: 4,
    autoplay: {
        delay: 5000, // автоплей каждые 5с.
        disableOnInteraction: false,
    },

    breakpoints: {
        1200: {
            slidesPerView: 2,
        },
        1560: {
            slidesPerView: 3,
        },
        1920: {
            slidesPerView: 4,
        },
    }
});