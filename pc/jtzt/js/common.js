window.onload = function(){
    $('.picScroll-left ul li img').click(function(){
        var _src = $(this).attr('src');
        $('.fwdecon #bigimg').attr('src',_src)
    });



};