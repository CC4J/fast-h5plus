// 安卓返回键监控
var backButtonPress = 0;
import mui from  'src/public/js/mui.min.js';

export default () => {
  mui.back = function(event) {
    backButtonPress++;
    if (backButtonPress > 1) {
      plus.runtime.quit();
    } else {
      //plus.nativeUI.toast('再按一次退出应用');
      mui.toast('再按一次退出应用');
    }
    setTimeout(function() {
      backButtonPress = 0;
    }, 1000);
    return false;
  };
}