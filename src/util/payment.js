// 支付方法
// 需要传两个参数

// payFlag 为你要支付的类型标识  
// "alipay" - 表示支付宝； "wxpay" - 表示微信支付； //"appleiap" - 表示苹果应用内支付； "qhpay" 

// payBody 为支付参数，由后台生成给到前端app使用
export default function (payFlag, payBody, susCB, errCB) {

    // 获取当前手机已安装的第三方支付通道
    plus.payment.getChannels(function (s) {

        var flag = 0;
        s.map(function (item) {
            if (item.id == payFlag) {

                if (payFlag == 'alipay') { // 支付宝支付
                    payByAlipay(item, payBody, susCB, errCB);
                } else if (payFlag == 'wxpay') { // 微信支付

                } else if (payFlag == 'qhpay') { // 苹果支付

                }

            } else {
                flag++;
            }
            if (flag == s.length) {
                plus.nativeUI.toast('您的手机暂未安装该支付软件')
            }
        });
    })
}

// 支付宝支付
function payByAlipay(item, payBody, susCB, errCB) {
    // 获取支付宝支付通道
    var aliChannel = item;
    // 开始支付
    plus.payment.request(
        aliChannel,
        payBody,
        function () {
            plus.nativeUI.toast('支付成功');
            // 支付成功后要执行的逻辑
            susCB();
        },
        function (e) { // 失败或取消支付要执行的逻辑
            errCB(e)
        }
    );
}