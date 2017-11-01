// JavaScript Document
/*参数详解
	obj:要运动的dom对象
	option中配置参数
	{
		field:运动改变的属性值（必填），
		begin:开始位置，//默认为当前位置
		change:变化量（必填），
		ease:要使用的缓动公式	，//默认为linear
		duration:运动持续时间，//默认为500				
		ftp:动画帧数，//默认为50
		onEnd:动画结束回调函数							
	}
*/
function myAn(obj,option){   
  var getCoords = function(el){
	  var box = el.getBoundingClientRect(),
	  doc = el.ownerDocument,
	  body = doc.body,
	  html = doc.documentElement,
	  clientTop = html.clientTop || body.clientTop || 0,
	  clientLeft = html.clientLeft || body.clientLeft || 0,
	  top  = box.top  + (self.pageYOffset || html.scrollTop  ||  body.scrollTop ) - clientTop,
	  left = box.left + (self.pageXOffset || html.scrollLeft ||  body.scrollLeft) - clientLeft
	  return { 'top': top, 'left': left };
  };

  var getStyle = function(el, style){
	  if(!+"\v1"){
		  style = style.replace(/\-(\w)/g, function(all, letter){
			  return letter.toUpperCase();
		  });
		  var value = el.currentStyle[style];
		  (value == "auto")&&(value = "0px" );
		  return value;
	  }else{
		  return document.defaultView.getComputedStyle(el, null).getPropertyValue(style)
	  }
  }
  var tween = {
	  easeInQuad: function(pos){
		  return Math.pow(pos, 2);
	  },

	  easeOutQuad: function(pos){
		  return -(Math.pow((pos-1), 2) -1);
	  },

	  easeInOutQuad: function(pos){
		  if ((pos/=0.5) < 1) return 0.5*Math.pow(pos,2);
		  return -0.5 * ((pos-=2)*pos - 2);
	  },

	  easeInCubic: function(pos){
		  return Math.pow(pos, 3);
	  },

	  easeOutCubic: function(pos){
		  return (Math.pow((pos-1), 3) +1);
	  },

	  easeInOutCubic: function(pos){
		  if ((pos/=0.5) < 1) return 0.5*Math.pow(pos,3);
		  return 0.5 * (Math.pow((pos-2),3) + 2);
	  },

	  easeInQuart: function(pos){
		  return Math.pow(pos, 4);
	  },

	  easeOutQuart: function(pos){
		  return -(Math.pow((pos-1), 4) -1)
	  },

	  easeInOutQuart: function(pos){
		  if ((pos/=0.5) < 1) return 0.5*Math.pow(pos,4);
		  return -0.5 * ((pos-=2)*Math.pow(pos,3) - 2);
	  },

	  easeInQuint: function(pos){
		  return Math.pow(pos, 5);
	  },

	  easeOutQuint: function(pos){
		  return (Math.pow((pos-1), 5) +1);
	  },

	  easeInOutQuint: function(pos){
		  if ((pos/=0.5) < 1) return 0.5*Math.pow(pos,5);
		  return 0.5 * (Math.pow((pos-2),5) + 2);
	  },

	  easeInSine: function(pos){
		  return -Math.cos(pos * (Math.PI/2)) + 1;
	  },

	  easeOutSine: function(pos){
		  return Math.sin(pos * (Math.PI/2));
	  },

	  easeInOutSine: function(pos){
		  return (-.5 * (Math.cos(Math.PI*pos) -1));
	  },

	  easeInExpo: function(pos){
		  return (pos==0) ? 0 : Math.pow(2, 10 * (pos - 1));
	  },

	  easeOutExpo: function(pos){
		  return (pos==1) ? 1 : -Math.pow(2, -10 * pos) + 1;
	  },

	  easeInOutExpo: function(pos){
		  if(pos==0) return 0;
		  if(pos==1) return 1;
		  if((pos/=0.5) < 1) return 0.5 * Math.pow(2,10 * (pos-1));
		  return 0.5 * (-Math.pow(2, -10 * --pos) + 2);
	  },

	  easeInCirc: function(pos){
		  return -(Math.sqrt(1 - (pos*pos)) - 1);
	  },

	  easeOutCirc: function(pos){
		  return Math.sqrt(1 - Math.pow((pos-1), 2))
	  },

	  easeInOutCirc: function(pos){
		  if((pos/=0.5) < 1) return -0.5 * (Math.sqrt(1 - pos*pos) - 1);
		  return 0.5 * (Math.sqrt(1 - (pos-=2)*pos) + 1);
	  },

	  easeOutBounce: function(pos){
		  if ((pos) < (1/2.75)) {
			  return (7.5625*pos*pos);
		  } else if (pos < (2/2.75)) {
			  return (7.5625*(pos-=(1.5/2.75))*pos + .75);
		  } else if (pos < (2.5/2.75)) {
			  return (7.5625*(pos-=(2.25/2.75))*pos + .9375);
		  } else {
			  return (7.5625*(pos-=(2.625/2.75))*pos + .984375);
		  }
	  },

	  easeInBack: function(pos){
		  var s = 1.70158;
		  return (pos)*pos*((s+1)*pos - s);
	  },

	  easeOutBack: function(pos){
		  var s = 1.70158;
		  return (pos=pos-1)*pos*((s+1)*pos + s) + 1;
	  },

	  easeInOutBack: function(pos){
		  var s = 1.70158;
		  if((pos/=0.5) < 1) return 0.5*(pos*pos*(((s*=(1.525))+1)*pos -s));
		  return 0.5*((pos-=2)*pos*(((s*=(1.525))+1)*pos +s) +2);
	  },

	  elastic: function(pos) {
		  return -1 * Math.pow(4,-8*pos) * Math.sin((pos*6-1)*(2*Math.PI)/2) + 1;
	  },

	  swingFromTo: function(pos) {
		  var s = 1.70158;
		  return ((pos/=0.5) < 1) ? 0.5*(pos*pos*(((s*=(1.525))+1)*pos - s)) :
			  0.5*((pos-=2)*pos*(((s*=(1.525))+1)*pos + s) + 2);
	  },

	  swingFrom: function(pos) {
		  var s = 1.70158;
		  return pos*pos*((s+1)*pos - s);
	  },

	  swingTo: function(pos) {
		  var s = 1.70158;
		  return (pos-=1)*pos*((s+1)*pos + s) + 1;
	  },

	  bounce: function(pos) {
		  if (pos < (1/2.75)) {
			  return (7.5625*pos*pos);
		  } else if (pos < (2/2.75)) {
			  return (7.5625*(pos-=(1.5/2.75))*pos + .75);
		  } else if (pos < (2.5/2.75)) {
			  return (7.5625*(pos-=(2.25/2.75))*pos + .9375);
		  } else {
			  return (7.5625*(pos-=(2.625/2.75))*pos + .984375);
		  }
	  },

	  bouncePast: function(pos) {
		  if (pos < (1/2.75)) {
			  return (7.5625*pos*pos);
		  } else if (pos < (2/2.75)) {
			  return 2 - (7.5625*(pos-=(1.5/2.75))*pos + .75);
		  } else if (pos < (2.5/2.75)) {
			  return 2 - (7.5625*(pos-=(2.25/2.75))*pos + .9375);
		  } else {
			  return 2 - (7.5625*(pos-=(2.625/2.75))*pos + .984375);
		  }
	  },

	  easeFromTo: function(pos) {
		  if ((pos/=0.5) < 1) return 0.5*Math.pow(pos,4);
		  return -0.5 * ((pos-=2)*Math.pow(pos,3) - 2);
	  },

	  easeFrom: function(pos) {
		  return Math.pow(pos,4);
	  },

	  easeTo: function(pos) {
		  return Math.pow(pos,0.25);
	  },

	  linear:  function(pos) {
		  return pos
	  },

	  sinusoidal: function(pos) {
		  return (-Math.cos(pos*Math.PI)/2) + 0.5;
	  },

	  reverse: function(pos) {
		  return 1 - pos;
	  },

	  mirror: function(pos, transition) {
		  transition = transition || tween.sinusoidal;
		  if(pos<0.5)
			  return transition(pos*2);
		  else
			  return transition(1-(pos-0.5)*2);
	  },

	  flicker: function(pos) {
		  var pos = pos + (Math.random()-0.5)/5;
		  return tween.sinusoidal(pos < 0 ? 0 : pos > 1 ? 1 : pos);
	  },

	  wobble: function(pos) {
		  return (-Math.cos(pos*Math.PI*(9*pos))/2) + 0.5;
	  },

	  pulse: function(pos, pulses) {
		  return (-Math.cos((pos*((pulses||5)-.5)*2)*Math.PI)/2) + .5;
	  },

	  blink: function(pos, blinks) {
		  return Math.round(pos*(blinks||5)) % 2;
	  },

	  spring: function(pos) {
		  return 1 - (Math.cos(pos * 4.5 * Math.PI) * Math.exp(-pos * 6));
	  },

	  none: function(pos){
		  return 0
	  },

	  full: function(pos){
		  return 1
	  }
  }
  var transition = function(el){
	  el.style.position = "absolute";
	  var options = arguments[1] || {},
	  begin =  options.begin,//开始位置
	  change = options.change,//变化量
	  duration = options.duration || 500,//缓动效果持续时间
	  field = options.field,//必须指定，基本上对top,left,width,height这个属性进行设置
	  ftp = options.ftp || 50,
	  onEnd = options.onEnd || function(){},
	  ease = options.ease,//要使用的缓动公式
	  end = begin + change,//结束位置
	  startTime = new Date().getTime();//开始执行的时间						
	  (function(){
		  setTimeout(function(){
			  var newTime = new Date().getTime(),//当前帧开始的时间
			  timestamp = newTime - startTime,//逝去时间
			  delta = ease(timestamp / duration);
			  el.style[field] = Math.ceil(begin + delta * change) + "px"
			  if(duration <= timestamp){
				  el.style[field] = end + "px";
				  onEnd();
			  }else{
				  setTimeout(arguments.callee,1000/ftp);							
			  }
		  },1000/ftp)
	  })()				
  };
  /*参数调整*/
  if(typeof option.begin=='undefined'){
	  switch(option.field)
	  {
		  case 'top' : option.begin=parseFloat(getCoords(obj).top); break;
		  case 'left': option.begin=parseFloat(getCoords(obj).left); break; 
		  case 'width': option.begin=parseFloat(getStyle(obj,'width')); break; 
		  case 'height': option.begin=parseFloat(getStyle(obj,'height')); break; 
	  };
  };
  if(typeof option.ease=='undefined'){
	  option.ease=tween.linear;				
  }else{				
	  option.ease=tween[option.ease];
  }			
  transition(obj,option);			
};