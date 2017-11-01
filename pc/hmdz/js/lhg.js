// JavaScript Document
function lhgInt(){
	//before、after伪元素IE6/7兼容
	var $beforeAfter = function(dom) {		
		if (document.querySelector || !dom && dom.nodeType !== 1) return;  
		var content = dom.getAttribute("data-content") || '';     
		var before = document.createElement("before")
			, after = document.createElement("after");      
		// 内部content
		before.innerHTML = content;
		after.innerHTML = content;		
		// 前后分别插入节点		
		dom.firstChild? dom.insertBefore(before, dom.firstChild):dom.appendChild(before); 
		dom.appendChild(after);				
	};
	$(".justify,.clearfix").each(function(index, element) {
		var dom = $(this).get(0);
		$beforeAfter(dom);
	});
	//.justify-box  js实现
	$(".justify-box").each(function(index, element) {
		$(this).css({"text-align":"justify","letterSpacing":"-.15em"});
		$(this).html($(this).html().replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '').split("").join(" ").replace(/\s{3}/g, " &nbsp; "));
	});
}
/************************************************************************************************************************************************************************************************/
//下拉框模拟
function selectMenu(){
	if($('.selectMenu').length>0){	
		$('.selectMenu').each(function(index, element) {
			$('#'+$(this).attr('data-for')).val('');
			var spanW=parseInt($(this).width()-$(this).children('em').width());
			$(this).children('.select-text').css({width:spanW});
		});	
		$('.selectMenu').delegate("em,span", "click", function(){
			$(this).siblings('ul').slideToggle(100);
			$(this).parent('.selectMenu').css('z-index','101');			
		}).delegate('li','click',function(){
			var _this_=this;
			var text=$(_this_).text();
			var valText=$(_this_).attr('data-val');
			var $_this=$(_this_).parents('.selectMenu');
			var input='#'+$_this.attr('data-for');
			$_this.css('z-index','100');
			$_this.children('span').text(text);
			$(input).val(valText);
			$(_this_).parent('ul').slideToggle(100);				
		}).click(function(){
			$('.selectMenu').removeClass('on');
			$(this).addClass('on');
			$('.selectMenu:not(.on)').children('ul').slideUp(100);			
		});	       
		//return true;			
	}
};
//弹窗函数1
function popFn(showClass,hideClass){
if($('.pop-trigger').length>0){	
	$('.pop-trigger').each(function(index, element) {   
		var time=100;  //设置动画时长 卷帘效果      
		var timebg=10;//设置背景透明时长
		var json={};//数据存储
		var _this=this;						
		var $dom=$($(_this).attr('data-trigger'));
		var $popBox=$dom.children('.pop-box');
		var $popOverlay=$dom.children('.pop-overlay');
		$(_this).get(0).firstClick='true';
		$(_this).click(function(){						
			$dom.show(timebg,function(){						
			  if($(_this).get(0).firstClick=='true'){								
				json.left=parseInt(($dom.outerWidth()-$popBox.outerWidth())/2);
				json.top=parseInt(($dom.outerHeight()-$popBox.outerHeight())/2);
				json.width=parseInt($popBox.outerWidth());
				json.height=parseInt($popBox.outerHeight());									
				$popBox.css({'left':json.left,'top':json.top}).delegate('.canClose,.pop-close','click',function(){
					popHide(time,timebg);					
				})
				$popOverlay.click(function(){					
					popHide(time,timebg);						
				});	
				$(_this).get(0).firstClick='false';				
			   };
			   $popBox.css({'display':'none'}).removeClass(hideClass).addClass(showClass).slideDown(time);	
			});			
			return false;	
		});
		function popHide(time,timebg){
			$popBox.removeClass(showClass).addClass(hideClass).slideUp(time,function(){$dom.hide(timebg);}).css({'height':json.height});	
		};			
	});
};	
};
//弹窗函数2
function popFn2(showClass,hideClass){
if($('.pop-trigger2').length>0){	
	$('.pop-trigger2').each(function(index, element) {   
		var time=100;  //设置动画时长 卷帘效果      
		var timebg=10;//设置背景透明时长
		var json={};//数据存储
		var _this=this;						
		var $dom=$($(_this).attr('data-trigger')).css('height',$(document).outerHeight());
		var $popBox=$dom.children('.pop-box2');
		var $popOverlay=$dom.children('.pop-overlay2');
	    $(_this).get(0).firstClick='true';
		$(_this).click(function(){						
			$dom.show(timebg,function(){						
			  if($(_this).get(0).firstClick=='true'){								
				json.left=parseInt(($dom.outerWidth()-$popBox.outerWidth())/2);
				json.top=$(window).scrollTop()+10;				
				json.width=parseInt($popBox.outerWidth());
				json.height=parseInt($popBox.outerHeight());									
				$popBox.css({'left':json.left,'top':json.top}).delegate('.canClose,.pop-close','click',function(){
					popHide(time,timebg);					
				})
				$popOverlay.click(function(){					
					popHide(time,timebg);						
				});	
				$(_this).get(0).firstClick='false';				
			   };
			   $popBox.css({'display':'none','top':$(window).scrollTop()+10}).removeClass(hideClass).addClass(showClass).slideDown(time);	
			});								
			return false;	
		});
		function popHide(time,timebg){
			$popBox.removeClass(showClass).addClass(hideClass).slideUp(time,function(){$dom.hide(timebg);}).css({'height':json.height,'left':json.left});	
		};			
	});
};
if($('.pop2').length>0){
	$('.pop2').each(function(index, el) {
		var _this=this;
		// var popBox=$(_this).find('.pop-box2');
		var l=0;
		var t=0;	
		var obj=$('.pop2 .pop-body>h1')[0];
		var target=$(_this).find('.pop-box2')[0];
	   obj.onmousedown=function(ev){
	    var ev=ev||event;
	    var disX=ev.clientX-target.offsetLeft;
	    var disY=ev.clientY-target.offsetTop;	    
	    if(obj.setCapture) obj.setCapture();
	    document.onmousemove=function(ev){
	     var ev=ev||event;
	     var L=ev.clientX-disX;
	     var T=ev.clientY-disY;
	     if(L<0){
	     	L=0;
	     }else if(L>_this.clientWidth-target.offsetWidth){
	     	L=_this.clientWidth-target.offsetWidth;
	     }
	     if(T<10){
	     	T=10;
	     }else if(T>_this.clientHeight-(obj.offsetHeight+8)){
	     	T=_this.clientHeight-(obj.offsetHeight+8);
	     }
	     target.style.left=L+'px';
	     target.style.top=T+'px';
	    };
	    document.onmouseup=function(){
	     document.onmouseup=document.onmousemove=null;
	     if(obj.releaseCapture) obj.releaseCapture();
	    };
	    return false;
	   }				
	});
}

};



//自定义tab效果
(function($){
	$.fn.tab=function(titCell,mainCell){
		$(this).each(function(index, element) {
            var _this=this;
			if($(this).find(titCell).length>1){
				$(this).delegate(titCell,'click',function(){
					$(this).addClass('on').siblings().removeClass('on');
					$(_this).find(mainCell).eq($(this).index()).addClass('on').siblings().removeClass('on');
				});
			};
        });	
		return this;	
	};
})(jQuery);

//回到顶部函数
(function($){
	$.fn.backTop=function(){
		$(this).click(function(){
			$('html,body').stop(true).animate({'scrollTop':0},300);			
		});
		return this;
	};
})(jQuery);
//基本切换类名函数
(function($){
	$.fn.sibChangeClass=function(tog){
		$(this).click(function(){
			$(this).addClass(tog).siblings().removeClass(tog);			
		});
		return this;
	};
})(jQuery);
//滚动条
 // myScrollBar({
 //  'box':obox,
 //  'txt':otxt,
 //  'trunk':otrunk,
 //  'drag':odrag,
 //  'speed':20,
 //  'direction':'x',
 //  'enFn':fn结束执行函数
 // });
 function myScrollBar(option){
  var boxH=option.box.clientHeight,
  txtH=option.txt.offsetHeight,
  trunkH=option.trunk.offsetHeight,
  dragH=option.drag.offsetHeight,
  txtMinTop=boxH-txtH,
  dragMaxTop=trunkH-dragH,

  boxW=option.box.clientWidth,
  txtW=option.txt.offsetWidth,
  trunkW=option.trunk.offsetWidth,
  dragW=option.drag.offsetWidth,
  txtMinLeft=boxW-txtW,
  dragMaxLeft=trunkW-dragW,

  direction=option.direction||'y';//默认为垂直滚动条
  speed=option.speed||20,//默认滚动速度为20
  endFn=option.endFn||function(){},  
  scale=0,offset='',Min=0,Max=0,change='',dir=0,way='';
  if(direction=='x'&&boxW>txtW){
   option.trunk.style.display='none';
   option.drag.style.display='none';
   option.txt.style.height='100%';
   return;
  }else if(direction=='y'&&boxH>txtH){
   option.trunk.style.display='none';
   option.drag.style.display='none';
   option.txt.style.width='100%';
   return;
  };
  //初始化变量
  if(direction=='x'){
   offset='offsetLeft';
   Min=txtMinLeft;
   Max=dragMaxLeft;
   change='left';
  }else if(direction=='y'){
   offset='offsetTop';
   Min=txtMinTop;
   Max=dragMaxTop;
   change='top';
  }
  function wheel(obj,fnUp,fnDown){
   obj.onmousewheel = fn;
   if (obj.addEventListener) {
    obj.addEventListener('DOMMouseScroll', fn, false);
   }
   function fn(ev) {
    var ev = ev || event;
    var b = true;
    if (ev.wheelDelta) {
     b = ev.wheelDelta > 0 ? true : false;
    } else {
     b = ev.detail < 0 ? true : false;
    }
    if ( b ) {
     if(fnUp) fnUp(this,ev);
    } else {
     if(fnDown) fnDown(this,ev);
    }
    if (ev.preventDefault) {
     ev.preventDefault();
    }
    return false;
   }
  }
  // 拖拽
  function drag(obj,draging){
   obj.onmousedown=function(ev){
    var ev=ev||event;
    var disX=ev.clientX-this.offsetLeft;
    var disY=ev.clientY-this.offsetTop;
    if(obj.setCapture) obj.setCapture();
    document.onmousemove=function(ev){
     var ev=ev||event;
     var L=ev.clientX-disX;
     var T=ev.clientY-disY;
     if(draging)draging(obj,L,T);
    };
    document.onmouseup=function(){
     document.onmouseup=document.onmousemove=null;
     if(obj.releaseCapture) obj.releaseCapture();
    };
    return false;
   }
  }
  function fnUp(obj,ev){
   way='wheel';
   dir=option.txt[offset]+speed>0? 0:option.txt[offset]+speed;
   fnchange(option.txt,option.drag,Min,Max); 
  };
  function fnDown(obj,ev){
   way='wheel';
   dir=option.txt[offset]-speed<Min? Min:option.txt[offset]-speed;
   fnchange(option.txt,option.drag,Min,Max); 
  };
  function draging(obj,L,T){ 
   way='drag';  
   if(direction=='x'){
    dir=L;
   }else if(direction=='y'){
    dir=T;
   }
   if(dir<0){
    dir=0
   }else if(dir>Max){
    dir=Max;
   }
   fnchange(option.drag,option.txt,Max,Min);  
  };
  function fnchange(obj1,obj2,ma1,ma2){  	
  	scale=dir/ma1;
  	endFn(dir,ma2*scale,way);
  	obj1.style[change]=dir+'px';
  	obj2.style[change]=ma2*scale+'px';    
  };  
  wheel(option.box,fnUp,fnDown);
  drag(option.drag,draging);
 }
