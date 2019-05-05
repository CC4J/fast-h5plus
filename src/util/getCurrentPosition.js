// 获取用户经纬度
export default function (option) {
    option = option || {};
    return new Promise((resolve, reject) => {
        plus.geolocation.getCurrentPosition(
            function (pos) {
                resolve(pos)
            },
            function (err) {
                reject(err)
            },
            option
        );
    })
}