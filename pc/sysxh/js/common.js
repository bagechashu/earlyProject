$(function(){

    

	// wow.js页面效果加载
    new WOW().init();

	// header效果
	$(window).on("scroll",function(){
		if ($(this).scrollTop()>=120) {
			$("#header").addClass("mini");
		}else{
			$("#header").removeClass("mini");
		}
	});

	//二维码
    $("#sweixin").on("click",function(){
        $(this).parent("#shares").next("#fixed_weixin").addClass("show");
    });
    $('#mpbtn').click(function(){
        $("#fixed_weixin").addClass("show");
    });

     $("#fixed_weixin").on("click",function(e){
        var target  = $(e.target);           
        if(target.closest(".fixed-container").length == 0){               
        $("#fixed_weixin").removeClass("show");         
        }e.stopPropagation();
    });

     //gotop判断 开始
    // $(window).scroll(function () {
    //     var scrollTop = $(window).scrollTop();
    //     if (scrollTop >=200 ) {
    //         $("#gotop").css("display","block");
    //     }else{
    //         $("#gotop").css("display","none");
    //     }
    // });

    $("#gotop").click(function(){
        $('body,html').animate({ scrollTop: 0 }, 200);
        return false;
    });
     //gotop判断 结束


    //在线咨询
    $("#online_open").on("click",function(){
        $(this).animate({"right":-40},300);
        $(this).next("#online_lx").animate({"right":0},300);
    });

    $("#online_close").click(function(){
        $(this).parents("#online_lx").animate({"right":-200},300);
        $(this).parents("#online_lx").prev("#online_open").animate({"right":0},300);
    });



})