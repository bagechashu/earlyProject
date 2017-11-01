/**
 * Created by Administrator on 2016/9/27.
 */
jQuery(".header-slideBox").slide({mainCell:".bd ul",effect:"fold",autoPlay:true});
jQuery(".slideBox").slide({mainCell:".bd ul",effect:"fold",autoPlay:true});
jQuery(".slideTxtBox").slide({effect:"fold"});

jQuery(".picScroll-left").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"left",vis:4,trigger:"click"});
jQuery(".picScroll-left-1").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"left",vis:3,trigger:"click"});
jQuery(".picScroll-left-2").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"left",vis:8,trigger:"click"});


//顶部搜索弹出,左侧导航弹出
window.onload = function(){
    $(window).scroll(function(){
        var _top = $(window).scrollTop();
        if(_top > 600){
            $('.index-topSearch').stop().animate({top:"0px"},170);
            $('.index-leftNav').stop().animate({left:"240px"},170);
            return false;
        }else{
            $('.index-topSearch').stop().animate({top:"-50px"},170);
            $('.index-leftNav').stop().animate({left:"-65px"},170);
            return false;
        }
    });

    // 锚点设置 start
    var oNav = $('.index-leftNav');//导航壳
    var aNav = oNav.find('li');//导航
    var aDiv = $('.louceng');//楼层
    $(window).scroll(function(){
        var iTop = $(window).scrollTop();//鼠标滚动的距离
        //鼠标滑动式改变
        aDiv.each(function(){
            if($(this).offset().top-iTop<150){
                aNav.find('a').removeClass('on');
                aNav.eq($(this).index()).find('a').addClass('on');
            }
        })
    });
    //点击回到当前楼层
    aNav.click(function(){
        var t = aDiv.eq($(this).index()).offset().top;
        $('body,html').animate({"scrollTop":t-140},500);
        $(this).addClass('on').siblings().removeClass('on');
    });

};
//点击回到顶部
$('.toTop').click(function(){
    $('body,html').animate({"scrollTop":0},500);
});
//右侧边框进场
$('.index-rightNav').animate({right:"0"},500);
//右侧边框弹框
$('.index-rightNav a').hover(
    function(){
        $(this).find('.content').animate({left:"-100px"},170);
        $(this).find('.content').show();
        $(this).find('.qrBox').stop(true,true).slideDown(500);
    },
    function(){
        $(this).find('.content').animate({left:"-110px"},170);
        $(this).find('.content').hide();
        $(this).find('.qrBox').stop(true,true).slideUp(500);
    });
//购物车删除
$('.del').click(function(){
    $(this).parent().parent().remove();
});
//左侧导航效果
$('.list-title').hover(
    function(){
        $(this).stop().animate({width:"210"},170);
    },
    function(){
        $(this).stop().animate({width:"220"},170);
    }
);
//猜你喜欢动画
$('.guess').hover(
    function(){
        $(this).find('i').stop().animate({right:"1200"},0);
        $(this).find('i').stop().animate({right:"0"},830);
    },
    function(){
        $(this).find('i').stop().animate({right:"0"},0);
    }
);
//楼层展示图片
$('.louceng').find('.card').each(function(){
    $(this).hover(
        function(){$(this).find('.pic-change').animate({width:"+=10px",height:"+=10px"},170)},
        function(){$(this).find('.pic-change').animate({width:"-=10px",height:"-=10px"},170)}
    )
});

//展开收起
$('.moreA').click(function(){
    var rel=$(this).is('.on');
    if(!rel){
        $(this).prev('.choose-collapse').css('max-height','200px');
        $(this).addClass('on');
    }if(rel){
        $(this).prev('.choose-collapse').css('max-height','34px');
        $(this).removeClass('on');
    }
});
//更多选项
$('.moreRow').click(function(){
    $(this).prev('.row-group').toggle();
});
//排序
$('.root-paixu-btn').click(function(){
    $(this).siblings().removeClass('on');
    $(this).siblings().removeClass('on1');
    $(this).siblings().removeClass('on2');
    $(this).addClass('on');
    var rel=$(this).attr('rel');
    if(rel==1){
        $(this).addClass('on2');
        $(this).attr('rel','0');
        $(this).removeClass('on1');
    }if(rel==0){
        $(this).addClass('on1');
        $(this).attr('rel','1');
        $(this).removeClass('on2');
    }
});

//加的效果
$(".add").click(function(){
    var n=$(this).prev().val();
    var num=parseInt(n)+1;
    if(num==0){ return;}
    $(this).prev().val(num);
});
//减的效果
$(".jian").click(function(){
    var n=$(this).next().val();
    var num=parseInt(n)-1;
    if(num==0){ return}
    $(this).next().val(num);
});

//各类倒计时
$('.daojishi').each(function(i,e){
    var timestamp = Date.parse(new Date())/1000;
    var _time = $(e).html();
    var _ciuntTime = _time - timestamp;
    setInterval(function(){
        _ciuntTime --;
        var _d = Math.floor(_ciuntTime/86400);
        var _h = Math.floor((_ciuntTime - _d * 86400)/3600);
        var _m = Math.floor((_ciuntTime - _d * 86400 - _h * 3600)/60);
        var _s = Math.floor(_ciuntTime - _d * 86400 - _h * 3600 - _m * 60);
        var day = '<span>'+_d+'</span>' + '天';
        var hour ='<span>'+_h+'</span>' +'小时';
        var mon =  '<span>'+_m+ '</span>'+'分钟';
        var s = '<span>'+_s+ '</span>'+ '秒';
        $(e).html('本场剩余时间'+day + hour + mon + s)
    },1000);
});
$('.xianshi').each(function(i,e){
    var timestamp = Date.parse(new Date())/1000;
    var _time = $(e).html();
    var _ciuntTime = _time - timestamp;
    setInterval(function(){
        _ciuntTime --;
        var _d = Math.floor(_ciuntTime/86400);
        var _h = Math.floor((_ciuntTime - _d * 86400)/3600);
        var _m = Math.floor((_ciuntTime - _d * 86400 - _h * 3600)/60);
        var _s = Math.floor(_ciuntTime - _d * 86400 - _h * 3600 - _m * 60);
        var day = '<span>'+_d+'</span>' + '：';
        var hour ='<span>'+_h+'</span>' +'：';
        var mon =  '<span>'+_m+ '</span>'+'：';
        var s = '<span>'+_s+ '</span>';
        $(e).html('距离结束还有'+day+ hour + mon + s)
    },1000);
});
$('.shengyutime').each(function(i,e){
    var timestamp = Date.parse(new Date())/1000;
    var _time = $(e).html();
    var _ciuntTime = _time - timestamp;
    setInterval(function(){
        _ciuntTime --;
        var _d = Math.floor(_ciuntTime/86400);
        var _h = Math.floor((_ciuntTime - _d * 86400)/3600);
        var _m = Math.floor((_ciuntTime - _d * 86400 - _h * 3600)/60);
        var _s = Math.floor(_ciuntTime - _d * 86400 - _h * 3600 - _m * 60);
        var day = '<span>'+_d+'</span>' + '天';
        var hour ='<span>'+_h+'</span>' +':';
        var mon =  '<span>'+_m+ '</span>'+':';
        var s = '<span>'+_s+ '</span>';
        $(e).html('剩余'+day+ hour + mon + s)
    },1000);
});