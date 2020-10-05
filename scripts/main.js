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