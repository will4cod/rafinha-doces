$(document).ready(function(){
    $('.events .slides > img').click(function(){
        $('.events .slides > img').removeClass('active');
        $(this).addClass('active');
        var $smallImages = $(this).attr('src');
        $('.big-screen > img').attr('src', $smallImages)
    })
})

// slides mobile
    $('.events-mobile').slick({
        arrows: false
    });