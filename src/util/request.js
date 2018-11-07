import mui from 'src/public/js/mui.min.js';

export default (options) => {
  return new Promise((resolve, reject) => {
    mui.ajax(options.url, {
      data: options.data,
      type: options.type || 'POST',
      timeout: options.timeout || 5000,
      success: function (data) {
        resolve(data);
      },
      error: function (err) {
        reject(err);
      }
    })
  })
}