$(function(){
    //左侧弹框
    $('.navPopBtn').click(function(){
        $('.nav-pop').animate({left:'0'},170);
        $('.shadowPop').show();
        $('body').css({overflow:'hidden'});
        $('html').css({overflow:'hidden'});
    });
    $('.shadowPop').click(function(){
        $('.nav-pop').animate({left:'-4.667rem'},170);
        $('.shadowPop').hide();
        $('body').css({overflow:'auto'});
        $('html').css({overflow:'auto'});
    });
    $('.navPopClose').click(function(){
        $('.nav-pop').animate({left:'-4.667rem'},170);
        $('.shadowPop').hide();
        $('body').css({overflow:'auto'});
        $('html').css({overflow:'auto'});
    });



})