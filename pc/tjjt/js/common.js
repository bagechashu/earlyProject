$(function(){
    //友情链接下拉
    $('.select-box').click(function(e){
        e.stopPropagation();
        $(this).find('.select').slideDown();
    });
    $('body').click(function(){
        $('.select').slideUp();
    });
    $('.select').click(function(e){
        e.stopPropagation();
        $('.select').slideUp();
    });
    //左边导航
    $('.nav-left').find('.li-1').click(function(){
        if($(this).is('.active')){
            $(this).next('ul').stop().slideUp();
            $(this).removeClass('active');
        }else{
            $(this).next('ul').stop().slideDown();
            $(this).parent().siblings().find('.li-1').removeClass('active');
            $(this).parent().siblings().find('ul').stop().slideUp();
            $(this).addClass('active');
        }
    })
    //顶部导航二级
    $('.header-index').find('.s1').hover(
        function(){
            $(this).find('ul').stop().show().animate({top:'0'},300);
        },function(){
            $(this).find('ul').stop().hide().css('top','10px');
        })



});