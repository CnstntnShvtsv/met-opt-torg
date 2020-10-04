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
    slidesPerView: 1,
    autoplay: {
        delay: 5000, // автоплей каждые 5с.
        disableOnInteraction: false,
    },

    breakpoints: {
        1024: {
            slidesPerView: 2,
        },
        1280: {
            slidesPerView: 3,
        },
        1536: {
            slidesPerView: 4,
        },
    }
});

var swiper03 = new Swiper('.slider-03 .swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true,
    lazy: true,
    autoplay: {
        delay: 5000, // автоплей каждые 5с.
        disableOnInteraction: false,
    }
});