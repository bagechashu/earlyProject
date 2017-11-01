$(function(){
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

//轮播动画
    jQuery(".slideBox").slide({mainCell:".bd ul",effect:"fold",autoPlay:true,delayTime:1000,interTime:5000,
        startFun:function(i,c){
            if(i==0){
                jQuery(".b1-1").css({"left":525}).animate({"left":725},1000);
                jQuery(".b1-2").css({"left":1095}).animate({"left":895},1000);
            }if(i==1){
                jQuery(".b2-1").css({"left":550}).animate({"left":365},1000);
                jQuery(".b2-2").css({"left":165}).animate({"left":365},1000);
            }if(i==2){
                jQuery(".b3-2").css({"left":575}).animate({"left":775},1000);
            }
        }
    });

    /*二级导航*/
    $('.nav2').hover(
        function(){$('.nav-touming').show().stop(true,true).animate({'top':'0'},170)},
        function(){$('.nav-touming').hide().stop(true,true).animate({'top':'-40'},170)}
    );
    $('.liBig').hover(
        function(){$(this).find('.navSmall').show().stop(true,true).animate({'top':'63'},170)},
        function(){$(this).find('.navSmall').hide().stop(true,true).animate({'top':'30'},170)}
    );
    $('.li-tx','.navSmall').hover(
        function(){
            $(this).addClass('on');
            $('.bk','.navSmall').stop(true).animate({'left':$(this).position().left-5,'opacity':1},300,'swing');
        },
        function(){
            $(this).removeClass('on');
            $('.bk','.navSmall').stop(true).animate({'opacity':0},300,'swing');
        }
    );
    //判断浏览器是否支持placeholder属性
    supportPlaceholder='placeholder'in document.createElement('input');
    placeholder=function(input){
        var text = input.attr('placeholder'),
            defaultValue = input.defaultValue;
        if(!defaultValue){
            input.val(text).addClass("phcolor");
        }
        input.focus(function(){
            if(input.val() == text){
                $(this).val("");
            }
        });
        input.blur(function(){
            if(input.val() == ""){
                $(this).val(text).addClass("phcolor");
            }
        });
        //输入的字符不为灰色
        input.keydown(function(){
            $(this).removeClass("phcolor");
        });
    };
    //当浏览器不支持placeholder属性时，调用placeholder函数
    if(!supportPlaceholder){
        $('input').each(function(){
            text = $(this).attr("placeholder");
            if($(this).attr("type") == "text"){
                placeholder($(this));
            }
        });
    }
    //下拉选择
    $('.select').click(function(e){
        $('ul',this).toggle();
        $('.ultou',this).toggle();
        e.stopPropagation();
        var _this = this;

        $('ul li',this).click(function(e){
            e.stopPropagation();
            $('.address',_this).hide();
            $('.ultou',_this).hide();
            $('span',_this).html($(this).html());
        })
    });
    //二维码弹框动画
    $('.search').hover(
        function(){
            $(this).addClass('on');
            $(this).find('.search-box').show().stop().animate({bottom:"-=10px"},170);
        },function(){
            $(this).removeClass('on');
            $(this).find('.search-box').hide().stop().animate({bottom:"45px"});
        });
    //QQ弹框动画
    $('.qq').hover(
        function(){
            $(this).addClass('on');
            $(this).find('.qq-box').show().stop().animate({bottom:"-=10px"},170);
        },function(){
            $(this).removeClass('on');
            $(this).find('.qq-box').hide().stop().animate({bottom:"39px"});
        });
    //分页1的
     $('.fenye1 .num').find('a').hover(
            function(){

                 if($(this).attr('class')!="on"){
                    $(this).stop().animate({top:"-=10px"})
                 }
                
            },
            function(){
                 if($(this).attr('class')!="on"){
                     $(this).stop().animate({top:"0"})
                 }
               
            }
    );









});