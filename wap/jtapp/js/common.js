
$(function(){

    //我的收藏
    var editflage = false;
    $('.bianji-btn').click(function(){

        if(!editflage){
            $(this).html('取消');
            $('.deletecon').show();
            $('.mycollection').css({'padding-bottom':'170px'});
            $('.mycollection li').addClass('padd-right');
            $('.selcectcon').show();
            editflage = true;
        }else{
            $(this).html('编辑');
            $('.mycollection').css({'padding-bottom':'0'});
            $('.deletecon').hide();
            $('.mycollection li').removeClass('padd-right').removeClass('delete');
            $('.selcectcon').hide().removeClass('on').find('input').prop('checked',false);
            editflage = false;
        }
    });

    $('.selcectcon').click(function(){
        $(this).toggleClass('on').parent().toggleClass('delete');
    });


    $('.myvotelist li').click(function(){
        $(this).addClass('on').siblings().removeClass('on');
    });


    $('.pingbtn').click(function(){
        $('.entering-modal').show().find('textarea').focus();
    });

    $('.entering-modal .modal-bg').click(function(){
        $('.entering-modal').hide();
    })

});