(function(win,doc){
	var docEl = doc.documentElement || document.body;//获取HTML标签

	//判断是移动端设备还是PC,移动 就采用'orientationchange',横竖屏事件，PC端就采用onresize，窗口改变时间
	var resize = 'orientationchange' in win ? 'orientationchange':'resize';
	function rem(){
		var w = docEl.clientWidth/720>1?720:docEl.clientWidth;
		docEl.style.fontSize= 100*(w/720)+'px';
		// console.log()	  
	}
	
	doc.addEventListener('DOMContentLoaded',rem,false);
	//监听'DOMContent事件:DOM加载完成执行,如果DOMContent事件，那么执行rem函数
	win.addEventListener(resize,rem,false);
	//win下监听resize事件,如果resize事件，那么执行rem函数
})(window,document)