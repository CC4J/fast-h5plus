// 注意： 若在页面初始化中使用以下方法时请在mui.plusReady的回调中使用，若不是在页面初始化的时候使用则无要求

// 所有缓存的KEY提前声明，格式如下

const USER_KEY = "user"; // 用户


export default {
    //  获取用户信息
    getUser() {
        let user = plus.storage.getItem(USER_KEY);
        if (user) {
            return JSON.parse(user)
        } else {
            return null;
        }
    },
    // 保存 or 更新 用户信息
    setUser: function (user) {
        if (!user) {
            return false
        } else {
            plus.storage.setItem(USER_KEY, JSON.stringify(user));
            return true;
        }
    }
}