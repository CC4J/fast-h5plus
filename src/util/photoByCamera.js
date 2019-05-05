import { resolve } from "url";
import { rejects } from "assert";

function noop() { }
export default function (susCB, errCB, index, option) {
    susCB = susCB || noop;
    errCB = errCB || noop
    // index 为 1 代表主摄像头（后置摄像头） 2 代表辅助摄像头 (前置摄像头)
    index = index || 1;
    // option 为相机拍照可接收的参数，具体参数请参考h5plus api文档
    option = option || {};
    // 创建相机对象
    var camera = plus.camera.getCamera(index);
    // 开始拍照
    camera.captureImage(
        // 成功回调
        function (path) {
            var sysPath = plus.io.convertLocalFileSystemURL(path);
            susCB(sysPath)
        },
        // 失败回调
        function (error) {
            errCB(error)
        },
        option
    );
}