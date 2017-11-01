
    //顶部广告删除
    $('.guanggaohide').click(function(){
        $(this).parent().slideUp();
    });
    //顶部广告自动删除
    var num=8;
    function autoclose(){
        num--;console.log(num)
        if(num<0){
            $('.guanggao').slideUp()
        }
    }
    setInterval("autoclose()",1000);

    //首页弹出广告删除
    $('.index-guangao .i2').click(function(){
        $(this).parent().hide();
        $('.pop-shadow').hide();
        $('body').css('overflow','auto');
    });

    //聚划算
    $('.ani-martop').hover(
        function(){
            $(this).stop().animate({marginTop:"-5px"},170);
            $(this).addClass('on');
        },
        function(){
            $(this).stop().animate({marginTop:"0px"},170);
            $(this).removeClass('on');
        }
    );
    $('.ani-op').hover(
        function(){
            $(this).stop().animate({opacity:"0.8"},170);
        },
        function(){
            $(this).stop().animate({opacity:"1"},170);
        }
    );
    //秒杀倒计时
    //var addTimer = function () {
    //    var list = [],
    //        interval;
    //
    //    return function (id, time) {
    //        if (!interval)
    //            interval = setInterval(go, 1000);
    //        list.push({ ele: document.getElementById(id), time: time });
    //    };
    //    function go() {
    //        for (var i = 0; i < list.length; i++) {
    //            list[i].ele.innerHTML = getTimerString(list[i].time ? list[i].time -= 1 : 0);
    //            if (!list[i].time)
    //                list.splice(i--, 1);
    //        }
    //    }
    //    function getTimerString(time) {
    //        var not0 = !!time,
    //            d = Math.floor(time / 86400),
    //            h = Math.floor((time %= 86400) / 3600),
    //            m = Math.floor((time %= 3600) / 60),
    //            s = time % 60;
    //        if (not0)
    //            return  h + "：" + m + "：" + s ;
    //        else return "时间到";
    //    }
    //} ();
    //addTimer("timer1", 712); //设置时间
    //addTimer("timer2", 510);//设置时间
    //addTimer("timer3", 413);//设置时间






