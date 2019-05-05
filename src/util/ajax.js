import mui from 'src/public/js/mui.min.js';
import store from 'src/store';

export default (options) => {
  return new Promise((resolve, reject) => {
    mui.ajax(options.url, {
      data: options.data,
      type: options.type || 'POST',
      timeout: options.timeout || 5000,
      success: function (res) {
        if (res.code == 9001 || res.code == 9002 || res.code == 9003) {
          mui.toast('登录信息已失效，请重新登录');
          store.removeUser();
          setTimeout(() => {
            plus.runtime.restart();
          }, 1000);
        } else {
          resolve(res);
        }
      },
      error: function (xhr, type, errorThrown) {
        mui.toast('网络连接异常');
        reject(xhr, type, errorThrown);
      }
    })
  })
}