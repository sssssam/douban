$(function() {
    $(".email").each(function() {
        $(this).focus(function() {
            $(this).css('background-color', 'rgb(250, 255, 189)')
        });
        $(this).blur(function() {
            $(this).css('background-color', '#fff')
        });
    });
    var height = $(window).height();
    var width = $(window).width();
    var bheight = $('.box').height();
    var bwidth = $('.box').width();
    console.log(height);
    $('.js-choose-district').click(function() {
        console.log($(this).attr('on'));
        if ($(this).attr('on') == 'hide') {
            $(this).attr('on', 'show');
            $('.shadow').addClass('active');
            $('.box').addClass('active');
        } else {
            $('.js-choose-district').attr('on', 'hide');
            $('.shadow').removeClass('active');
            $('.box').removeClass('active');
        }
    });
    /*$('.box').css({
        'top': -(height / 2) + (bheight / 2),
        'left': (width / 2) - (bwidth / 2)
    });*/
    $('.closer').click(function() {
        $('.js-choose-district').attr('on', 'hide');
        $('.shadow').removeClass('active');
        $('.box').removeClass('active');
        return false;
    });
    $(".GlobalPhoneList li").each(function() {
        $(this).click(function() {
            $(this).addClass('is-active').siblings().removeClass('is-active');
            var value = $(this).children('.GlobalPhoneItem-number').text();
            $('.js-choose-district').text(value);
            $('.js-choose-district').attr('on', 'hide');
            $('.shadow').removeClass('active');
            $('.box').removeClass('active');
            return false;
        })
    })
});
