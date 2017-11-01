$(function(){
    //logo
    $('.logo-content','.header-index').animate({'opacity':1,'top':0},1000);
    //搜索
    $('.search-off').click(function(){
        $('.search-on').show(300);
        $('.search-off').hide(300);
        $('.search-on input').focus();
    });
    $('.search-on input').blur(function(){
        $('.search-on').hide(300);
        $('.search-off').show(300);
    })
    //go to top
    $('.goTop').click(function(){
        $('body,html').animate({"scrollTop":0},500);
    });
    $(window).scroll(function(){
        var _top=$(window).scrollTop();
        if(_top>=100){
            $('.top-content').stop().show(500);
        }else{
            $('.top-content').stop().hide(500);
        }
    });
    /*wow*/
    if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: true,
            live: true
        });
        wow.init();
    };




});