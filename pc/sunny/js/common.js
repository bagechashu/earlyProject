$(function(){
    //导航
    jQuery("#nav").slide({
        type:"menu",// 效果类型，针对菜单/导航而引入的参数（默认slide）
        titCell:".nLi", //鼠标触发对象
        targetCell:".sub", //titCell里面包含的要显示/消失的对象
        effect:"slideDown", //targetCell下拉效果
        delayTime:300 , //效果时间
        triggerTime:0, //鼠标延迟触发时间（默认150）
        returnDefault:true //鼠标移走后返回默认状态，例如默认频道是“预告片”，鼠标移走后会返回“预告片”（默认false）
    });

    //顶部轮播
    jQuery(".slideBox").slide({mainCell:".bd ul",effect:"fold",autoPlay:true});
    //公司介绍轮播
    jQuery(".picScroll-left").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"left",autoPlay:true,vis:3,trigger:"click"});
    //公司轮播hover
    $('.pic').mouseover(function(){
        $(this).children('.xiangxi-store').show();
    });
    $('.pic').mouseout(function(){
        $(this).children('.xiangxi-store').hide();
    });
    //more a标签hover
    $('.more').hover(function(){
        $(this).css('background-color','#6dba44');
        $(this).children('p').css('color','#fff');
        $(this).children('img').attr('src','images/index-more2.png')
    },function(){
        $(this).css('background-color','#fff3e3');
        $(this).children('p').css('color','#878787');
        $(this).children('img').attr('src','images/index-more1.png')
    });
    //底部more a标签hover
    $('.morePlace').hover(function(){
        $(this).css('background-color','#6dba44');
        $(this).children('p').css('color','#fff');
        $(this).children('img').attr('src','images/footer-more2.png')
    },function(){
        $(this).css('background-color','#fff');
        $(this).children('p').css('color','#878787');
        $(this).children('img').attr('src','images/footer-more1.png')
    });
    //tab
    jQuery(".slideTxtBox").slide();
    //商品特推
    $('.show-mpic').click(function(){
        var imgSrc=$(this).attr('src');
        var flag=$(this).attr('rel');
        $(this).addClass('on');
        $(this).siblings().removeClass('on');
        $('.show-pic').attr('src',imgSrc);
        if(flag==1){
            $('.showPictop1').show();
            $('.showPictop1').siblings().hide();
        }if(flag==2){
            $('.showPictop2').show();
            $('.showPictop2').siblings().hide();
        }if(flag==3){
            $('.showPictop3').show();
            $('.showPictop3').siblings().hide();
        }if(flag==4){
            $('.showPictop4').show();
            $('.showPictop4').siblings().hide();
        };
    });
    //商品特推,切换TAB时回到第一个商品
    $('.tab2 .hd li').mousemove(function(){
        $('.showPictop1').show();
        $('.showPictop1').siblings().hide();
        $('.show-mpic1').addClass('on');
        $('.show-mpic1').siblings().removeClass('on');
        var abc=$(this).attr('rel');
        if(abc==1){
            var src=$('#ul1').find('.show-mpic1').attr('src')
        }if(abc==2){
            var src=$('#ul2').find('.show-mpic1').attr('src')
        }if(abc==3){
            var src=$('#ul3').find('.show-mpic1').attr('src')
        };
        $('.show-pic').attr('src',src);
    });
    //底部QQ 微信微博
    $('.qww1').hover(function(){
        $(this).children('img').attr('src','images/f-qq.png');
    },function(){
        $(this).children('img').attr('src','images/f-qq0.png')
    });
    $('.qww2').hover(function(){
        $(this).children('img').attr('src','images/f-wb.png');
    },function(){
        $(this).children('img').attr('src','images/f-wb0.png')
    });
    $('.qww3').hover(function(){
        $(this).children('img').attr('src','images/f-wx.png');
        $('.QR').show();
    },function(){
        $(this).children('img').attr('src','images/f-wx0.png');
        $('.QR').hide();
    });













});