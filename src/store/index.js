// "user": {
//     "userId": 1,
//     "account": "15847895648",//账号 一般为手机号
//     "face": "/attachs/2019/03/04/default.jpg",//头像
//     "poster": null,
//     "nickname": "管理员",
//     "integral": 100,//积分
//     "rankId": 0,//等级ID
//     "email": "",
//     "mobile": "15071320217",
//     "token": "b95e9f98839e4bc8b8473ea9cf837c7b",
//     "addr": null
// }

// "COMMUNITY": {
//     "community_id": "6",
//     "name": "东方物业测试社区",
//     "lat": "30.581722",
//     "lng": "114.369306",
//     "distance": "79m"
//   }

export default {
    // 保存所有应用状态
    setAllModule: function (allModule) {
        if (!allModule) {
            return false
        } else {
            if (typeof allModule == 'object') {
                localStorage.setItem('ALLMODULE', JSON.stringify(allModule))
            } else if (typeof allModule == 'string') {
                localStorage.setItem('ALLMODULE', allModule)
            }
            return true;
        }
    },
    getAllModule: function () {
        var res = localStorage.getItem('ALLMODULE');
        if (!res) {
            return null
        } else {
            return JSON.parse(res);
        }
    },
    // 保存用户信息
    setUser: function (user) {
        if (!user) {
            return false
        } else {
            if (typeof user == 'object') {
                localStorage.setItem('USER', JSON.stringify(user))
            } else if (typeof user == 'string') {
                localStorage.setItem('USER', user)
            }
            return true;
        }
    },
    getUser: function () {
        var res = localStorage.getItem('USER');
        if (!res) {
            return null
        } else {
            return JSON.parse(res);
        }
    },
    removeUser: function () {
        localStorage.removeItem('USER');
    },
    // 保存用户选择的社区信息
    setCommunity: function (myCommunity) {
        if (!myCommunity) {
            return false
        } else {
            if (typeof myCommunity == 'object') {
                localStorage.setItem('COMMUNITY', JSON.stringify(myCommunity))
            } else if (typeof myCommunity == 'string') {
                localStorage.setItem('COMMUNITY', myCommunity)
            }
            return true;
        }
    },
    getCommunity: function () {
        var res = localStorage.getItem('COMMUNITY');
        if (!res) {
            return null
        } else {
            return JSON.parse(res);
        }
    },
    // 存储离线系统消息
    setOffSysMsgs: function (sysMsgs) {
        if (!sysMsgs) {
            return false;
        } else {
            if (typeof sysMsgs == 'object') {
                localStorage.setItem('OFFSYSMSGS', JSON.stringify(sysMsgs))
            } else if (typeof sysMsgs == 'string') {
                localStorage.setItem('OFFSYSMSGS', sysMsgs)
            }
            return true;
        }
    },
    getOffSysMsgs: function () {
        var res = localStorage.getItem('OFFSYSMSGS');
        if (!res) {
            return null
        } else {
            return JSON.parse(res);
        }
    },
    // 存储最近会话信息
    setSessions: function (sessions) {
        if (!sessions) {
            return false;
        } else {
            if (typeof sessions == 'object') {
                localStorage.setItem('SESSIONS', JSON.stringify(sessions))
            } else if (typeof sessions == 'string') {
                localStorage.setItem('SESSIONS', sessions)
            }
            return true;
        }
    },
    getSessions: function () {
        var res = localStorage.getItem('SESSIONS');
        if (!res) {
            return null
        } else {
            return JSON.parse(res);
        }
    },
    // 存储用户选择的门的信息
    getDoor: function () {
        var res = localStorage.getItem('DOOR');
        if (!res) {
            return null
        } else {
            return JSON.parse(res);
        }
    },
    // 保存用户选择的门的信息
    setDoor: function (door) {
        if (!door) {
            return false
        } else {
            if (typeof door == 'object') {
                localStorage.setItem('DOOR', JSON.stringify(door))
            } else if (typeof door == 'string') {
                localStorage.setItem('DOOR', door)
            }
            return true;
        }
    },
}