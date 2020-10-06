// Кнопка наверх:
var amountScrolled = 200;

$(window).scroll(function () {
    if ($(window).scrollTop() > amountScrolled) {
        $('#back-to-top').fadeIn();
    } else {
        $('#back-to-top').fadeOut();
    }
});

$('#back-to-top').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 500);
    return false;
});

// Кнопка меню:
$(document).ready(function () {
    $('.btn-toggle').click(function () {
        $('.btn-toggle').toggleClass('active')
        $('.hidden-menu').toggleClass('show')
        $('.hidden-menu').toggleClass('hide')
    })
})

// Кнопка open-aside:
$(document).ready(function () {
    $('.open-aside').click(function () {
        $('.open-aside').toggleClass('active')
        $('.content-grid aside').toggleClass('show')
    })
})

// Меню навигации
$(document).ready(function () {
    $('header .nav .nav-link').click(function () {
        $('header .nav .nav-link').removeClass('active')
        $(this).toggleClass('active')
    })
})

// Открыть отзыв по клику на превью
$(document).ready(function () {
    $('.swiper-slide#review-link-01').click(function () {
        $('#review-popup-01').fadeIn();
        $('body').css('overflow', 'hidden');
    });

    $('.swiper-slide#review-link-02').click(function () {
        $('#review-popup-02').fadeIn();
        $('body').css('overflow', 'hidden');
    });

    $('.swiper-slide#review-link-03').click(function () {
        $('#review-popup-03').fadeIn();
        $('body').css('overflow', 'hidden');
    });

    $('.swiper-slide#review-link-04').click(function () {
        $('#review-popup-04').fadeIn();
        $('body').css('overflow', 'hidden');
    });

    // Открыть отзыв по клику на крестик
    $('.close-btn').click(function () {
        $('.bg-overlay').fadeOut();
        $('body').css('overflow', 'auto');
    });
})