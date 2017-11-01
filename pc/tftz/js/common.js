$(function(){
    /*头部轮播*/
    jQuery(".slideBox").slide({mainCell:".bd ul",effect:"left",autoPlay:3000,easing:"easeOutCirc"});
    /*view2轮播*/
    jQuery(".slideBox-1").slide({effect:"left",mainCell:".bd ul",autoPlay:true});
    /*导航顶置*/
    $(window).scroll(function(){
        var _top = $(window).scrollTop();
        //console.log(_top);
        if(_top > 398){
            $('.content-down').addClass('top');
            return false;
        }else{
            $('.content-down').removeClass('top');
            return false;
        }
    });
    /*党校 下拉透明层获取高度*/
    $('.dangxiao .li1-xiala').mouseenter(function(){
        var height=$(this).find('ul').css('height');
        $(this).find('.touming').css('height',height);
    });
    //底部友情链接
    $('.friend-more').click(function(){
        var key=$(this).is('.on');
        if(!key){
            $(this).addClass('on');
            $(this).find('span').html('收起');
            $(this).prev().css('height','auto');
        }else{
            $(this).removeClass('on');
            $(this).find('span').html('展开');
            $(this).prev().css('height','78px');
        }
    });
    /*内页左部导航*/
    $('.article-l').find('.li1').click(function(){
        var key=$(this).find('.ul2').css('display');
        if(key=='none'){
            $(this).find('.ul2').slideDown();
            $(this).siblings().find('.ul2').slideUp();
        }else{
            $(this).find('.ul2').slideUp();
        }
    });


    /*首页图片墙*/
    $('.pic-index').mouseenter(function(){
        $(this).stop().animate({width:'520px'},500);
        $(this).siblings().stop().animate({width:'130px'},500);
        $(this).addClass('on');
        $(this).siblings().removeClass('on');
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
    //三角列表
    $('.list-sanjiao').find('.fl').hover(function(){
        $(this).stop().animate({paddingLeft:'40px'},300)
    },
    function(){
        $(this).stop().animate({paddingLeft:'20px'},300)
    });







});