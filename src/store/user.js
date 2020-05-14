// 换成用户信息
const APP_USER_KEY = "APP_USER_KEY"; // 用户信息换成

export default {
    // 获取用户信息
    getUser() {
        let user = plus.storage.getItem(APP_USER_KEY);
        if (user) {
            return JSON.parse(user)
        } else {
            return null;
        }
    },
    // 设置用户信息
    setUser: function (user) {
        if (!user) {
            return false
        } else {
            plus.storage.setItem(APP_USER_KEY, JSON.stringify(user));
            return true;
        }
    },
    // 清空用户信息
    removeUser: function () {
        plus.storage.removeItem(APP_USER_KEY);
    }
}