// 获取窗口高度
var originalHeight = document.documentElement.clientHeight || document.body.clientHeight;

// webview发生变化时重置webview高度
export default () => {
  	// 监听窗口发生变化
  	window.onresize=function(){
		// 软键盘弹起与隐藏都会引起窗口的高度发生变化
        var  resizeHeight = document.documentElement.clientHeight || document.body.clientHeight;
      	// resizeHeight < originalHeight证明窗口被挤压了
		if ( resizeHeight * 1 < originalHeight * 1) { 
        	plus.webview.currentWebview().setStyle({
            	height: originalHeight
        	});
		}
	}
}
