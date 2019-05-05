function noop() { }
export default function (susCB, errCB, option) {
    susCB = susCB || noop;
    errCB = errCB || noop;

    if (!option) {
        option = {
            filter: "image",
            multiple: true,
            maximum: 9,
            system: false,
            onmaxed: function () {
                plus.nativeUI.toast('最多只能选择9张图片');
            }
        }
    }

    plus.gallery.pick(
        function (e) {

            // 判断是单选还是多选
            if (option.multiple) { // 多选
                if (e.files.length > 9) {
                    plus.nativeUI.toast('最多只能选择9张图片');
                    reject();
                }

                var imgViewData = [];

                e.files.map(function (item) {
                    var path = plus.io.convertLocalFileSystemURL(item);
                    imgViewData.push(path);
                });

                susCB(imgViewData)

            } else { // 单选
                susCB(plus.io.convertLocalFileSystemURL(e))
            }
        },
        function (e) {
            errCB(e)
        },
        option
    )
}