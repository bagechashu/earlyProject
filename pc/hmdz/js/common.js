Modernizr.load(
{
test: Modernizr.cssanimations,
yep : ['css/animate.css','js/wow.min.js'],
complete:function(){
			  if(Modernizr.cssanimations){		
			  	  adwow();	
				  $('.wow').each(function(index, element) {
					  $(this).attr({'data-wow-duration':'600ms', 'data-wow-delay':'300ms'});
					  if($(this).hasClass('mw')) $(this).addClass('fadeInUp');
				  });
				  new WOW().init();	
			  }
		  }
});	
//调用函数添加wow类
function adwow(){
	$('#header .logo').addClass('wow mw');
	$('.idxP1 .bd span').addClass('wow mw'); 
	$('#footer>div').addClass('wow mw'); 
	$('.main22 .phoList dt').addClass('wow mw'); 
	$('.main23 .actList img').addClass('wow mw'); 	
};
//初始化结束
/*************************************************************************************/
$(function(){
$('img').on('error', function () {
  $(this).prop('src','').addClass('error');
});	
lhgInt();	
popFn('InUp animatedlhg','animatedlhg');
popFn2('InUp animatedlhg','animatedlhg');
if($('.pop-close').length>0){
	$('.pop-close').hover(function(){
		$(this).addClass('rotateIn animatedlhg');
	},function(){
		$(this).removeClass('rotateIn animatedlhg');	
	});
};
selectMenu();
//窗口改变
$(window).resize(function(){
	if($('.pop-trigger').length>0){
		popFn('InUp animatedlhg','animatedlhg');
		popFn2('InUp animatedlhg','animatedlhg');
	};
});
//co-tab效果
(function(){
	if($('.co-tab').length>0){
		$('.co-tab').tab('dd','li');				
	};	
})();
//co-Time效果
(function(){
	if($('.co-Time').length>0){
		$('.co-Time').each(function(index, el) {
			var str=$(this).text();
			$(this).empty().append('<i>'+str.substr(8)+'</i><span>'+str.substr(0,7)+'</span>');
		});
	}
})();
//顶部导航效果
(function(){
	var hdb=$('#header .hdB'),ul=$('#header .hdT ul'),dl=hdb.find('dl');
	//顶部滑动导航效果
	function hdB(){
		dl.each(function(idx,ele){
			var bk=$(this).find('.bk'),dd=$(this).find('dd:not(.bk)'),ddon=$(this).find('.on'),_this=this;
			function mv(){
				if(dd.filter('.on').length>0){
					bk.stop(true).animate({'left':dd.filter('.on').position().left,'width':dd.filter('.on').outerWidth(),'opacity':100},300,'swing');
				}else{
					bk.stop(true).animate({'opacity':0},300,'swing');
				}
			};
			if(ddon.length>0){
				hdb.show(0,function(){
					$(_this).show(0,function(){
						mv();
						hdb.hide(0);
						$(this).hide(0);
					});
				});
			};
			$(this).delegate('dd:not(.bk)', 'mouseenter', function(event) {
				$(this).addClass('on').siblings(dd).removeClass('on');
				mv();
			});
			$(this).mouseleave(function(){
				if(ddon.length>0){
					if(!ddon.hasClass('on')){
						ddon.addClass('on').siblings(dd).removeClass('on');
					};
				}else{
					dd.removeClass('on');
				};
				mv();
			});
		});
	}
	//显示对应导航
	function showNav(){
		ul.delegate('li', 'mouseenter', function(event) {
			dl.eq($(this).index()).stop(true,true).slideDown(200).siblings('dl').stop(true,true).slideUp(200);
		});
		ul.mouseenter(function() {
			hdb.stop(true,true).slideDown(300);
		});
		$('#header').mouseleave(function(){
			hdb.stop(true,true).slideUp(300);
		});
	};
	hdB();
	showNav();


})();
// 首页效果
(function(){
	if($('.idxBd').length>0){
		$('.idxBanner').slide({'titCell':'.hd','mainCell':'.bd ul','autoPlay':true,'autoPage':'<span></span>'});
	};
})();
//布局兼容
if ( $.browser.msie&&$.browser.version==7.0){
	function chg(){
		$('.co-Bread').css('width',($(window).width()-$('.wrapper').width())/2+$('.co-Contain article').width());
		$('.idxBd .idxTxt .rbg').css('width',$(window).width()-(($(window).width()-$('.wrapper').width())/2+parseInt($('.idxBd .idxTxt .rbg').css('left'))));
	};
	chg();
	$(window).resize(chg);
}
//co-Bd效果
(function(){
	if($('.co-Bd').length>0){		
		//左侧鼠标效果		
		function mouseFn(){
			if(!$('.co-Contain aside dd.on').length)return;
			var asd=$('.co-Contain aside'),dl=asd.find('dl'),dd=asd.find('dd'),ddon=null;			
			function fn1(obj){
				obj.find('span').stop(true).animate({'left':25,'marginLeft':0}, 300);	
				obj.find('i').stop(true).animate({'left':'80%','marginLeft':0,'opacity':100}, 300);	
			};	
			function fn2(obj){
				obj.find('span').stop(true).animate({'left':'50%','marginLeft':obj[0].spanleft}, 300);	
				obj.find('i').stop(true).animate({'left':'50%','marginLeft':obj[0].ileft,'opacity':0}, 300);
			}
			dd.each(function(index, el) {
				var span=$(this).find('span'),i=$(this).find('i');
				$(this)[0].spanleft=-span.outerWidth()/2;
				$(this)[0].ileft=-i.outerWidth()/2;
				span.css('marginLeft',$(this)[0].spanleft);
				i.css('marginLeft',$(this)[0].ileft);
				if($(this).hasClass('on')){
				 	ddon=$(this);
				 	fn1(ddon);
				};							
			}).hover(function() {
				$(this).addClass('on').siblings('dd').removeClass('on').each(function(index, el) {
					fn2($(this));
				});
				fn1($(this));	
			}, function() {				
				$(this).removeClass('on');
				fn2($(this));									
			});	
			dl.mouseleave(function(event) {
				if(!ddon.hasClass('on')){
					ddon.addClass('on');
					fn1(ddon);
					ddon.siblings('dd').removeClass('on').each(function(index, el) {
						fn2($(this));
					});
				}
			});

		};			
		mouseFn();
	};
})();
//22页面（摄影书画页面效果）
(function(){
	if($('.main22').length>0){
		// 全局变量
		var main=$('.main22'),ul=main.find('.phoList'),li=ul.find('li');
		//布局函数		
	    function border(){
	    	li.each(function(index, el) {
	    		var a=$(this).find('a');
	    		var ai=$('<i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>').appendTo(a);	    		
	    		$.each([0,1,4,5],function(i, n) {
	    			ai.eq(n).css({'width':20,'height':3});	    			
	    		});
	    		$.each([2,3,6,7],function(i, n) {
	    			ai.eq(n).css({'width':3,'height':20});
	    		});	
	    		ai.eq(0).css({'left':-2,'top':-2});
	    		ai.eq(1).css({'right':-2,'top':-2});
	    		ai.eq(2).css({'right':-2,'top':-2});
	    		ai.eq(3).css({'right':-2,'bottom':-2});
	    		ai.eq(4).css({'right':-2,'bottom':-2});
	    		ai.eq(5).css({'left':-2,'bottom':-2});
	    		ai.eq(6).css({'left':-2,'bottom':-2});
	    		ai.eq(7).css({'left':-2,'top':-2});
	    	});

	    };
	    function imgPop(){
	    	li.each(function(index, el) {
	    		var a=$(this).find('a').addClass('pop-trigger').attr('data-trigger','#imgPop'),dataD=$(this).attr('data-def'),data=$(this).attr('data-img').split(','),pop=$(a.attr('data-trigger')),slideBox=pop.find('.imgSlide'),ul=slideBox.find('.bd'),h1=pop.find('h1');
	    		popFn('InUp animatedlhg','animatedlhg');//绑定	    		
				a.click(function(){
					var str='';
					$.each(data,function(i,n){
						str+="<li><img src='"+dataD+"' _src='"+n+"'></li>";
					});
					ul.empty().append(str);
					slideBox.slide({'effect':'fade','switchLoad':'_src'});
					//文字获取
					var str2='',dl=$(this).parents('dl');
					dl.find('dd').each(function(index, el) {
						str2+='<span>'+$(this).text()+'</span>';
					});
					h1.empty().append(str2);	
				});   	
	    	});
	    }
	    border();
	    imgPop();
	};
})();
//join展开效果
(function(){
	if($('.main41').length>0){
		var list=$('.main41 .proList');
		list.delegate('i','click',function(){					
			$(this).parents('li').toggleClass('on');
			$(this).parent('h5').siblings('.txt').slideToggle(200);
			$(this).parents('li').siblings('li').removeClass('on').children('.txt').slideUp(200).end().find('i').text('+');
			$(this).parents('li').hasClass('on')? $(this).text('-'):$(this).text('+');
		});
	}	
})();
//61页面
(function(){
	if($('.main61').length>0){
		$('.lea_mes .tol span').click(function(){			
			$(this).toggleClass('on').parents('dd').find('.txt').stop(true).slideToggle(300);
			$(this).hasClass('on')? $(this).text('收起回复↑'):$(this).text('查看回复');
		});
	}
})();
});
