$(function() {

    $('.info_link').on('click', function() {
        $('.info_box').toggleClass('active');
    });

    $('.info_box').on('click', function() {
        $('.info_box').toggleClass('active');
    });
});