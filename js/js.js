$(document).on('scroll', function (e) {
    $('.navbar').css('opacity', ($(document).scrollTop() / 500));
});