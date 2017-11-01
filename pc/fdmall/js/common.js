/**
 * Created by Administrator on 2016/9/28.
 */
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
//全部分页部分产品种类
    //关注
$('.star').hover(
    function(){
        var rel=$(this).attr('rel');
        if(rel==0){
            $(this).find('.i2').stop().animate({top:"-=17px"},170);
            $(this).find('.i1').hide(170);
        }
    },
    function(){
        var rel=$(this).attr('rel');
        if(rel==0){
            $(this).find('.i2').stop().animate({top:"22px"},170);
            $(this).find('.i1').show(170);
        }
    });
$('.star').click(function(){
    var rel=$(this).attr('rel');
    if(rel==0){
        $(this).html('<i class="i1"></i><i class="i2"></i>已关注');
        $(this).addClass('on');
        $(this).attr('rel','1');
    }if(rel==1){
        $(this).html('<i class="i1"></i><i class="i2"></i>关注');
        $(this).removeClass('on');
        $(this).attr('rel','0');
    }
});
//框
$('.box').hover(
    function(){
        $(this).find('.kuang').fadeIn(170);
    },
    function(){
        $(this).find('.kuang').fadeOut(170);
    });
//购物车
$(function() {
    var offset = $("#end").offset();
    $(".addcar").click(function(event){
        var addcar = $(this);
        var img = addcar.parent().parent().find('img').attr('src');
        var flyer = $('<img class="u-flyer" src="'+img+'">');
        flyer.fly({
            start: {
                left: event.pageX, //开始位置（必填）#fly元素会被设置成position: fixed
                top: event.pageY-$(window).scrollTop() //开始位置（必填）
            },
            end: {
                left: offset.left+10, //结束位置（必填）
                top: offset.top+10, //结束位置（必填）
                width: 0, //结束时宽度
                height: 0 //结束时高度
            },
        });
    });
});