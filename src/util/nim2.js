import store from 'src/store';
const SDK = require("src/public/lib/nim/NIM_Web_SDK_v6.2.0.js");
import mui from "src/public/js/mui.min.js";

// nim实例对象
var nim = null;
// 数据对象
var data = {
    // 好友列表
    friends: [],
    // 会话列表
    sessions: [],
    // 消息列表
    msgs: {},
    // 系统通知列表
    sysMsgs: [],
    // 系统通知未读数
    sysMsgUnread: {}
};

// 应用缓存对象标识
var NIM = 'NIM'; // nim实例
var SysMsgUnread = "SysMsgUnread"; // 系统通知未读数

export default function () {
    nim = SDK.NIM.getInstance({
        appKey: "3af41643e6fe0c91e7bd5a3df2069c13",
        account: store.getUser().imAccount,
        token: store.getUser().imToken,
        // 连接成功
        onconnect: onConnect,
        // 连接失败
        onerror: onError,
        // 好友关系
        onfriends: onFriends,
        // 会话
        onsessions: onSessions,
        // 会话更新了
        onupdatesession: onUpdateSession,
        // 漫游消息
        onroamingmsgs: onRoamingMsgs,
        // 离线消息
        onofflinemsgs: onOfflineMsgs,
        // 收到消息
        onmsg: onMsg,
        // 系统离线通知
        onofflinesysmsgs: onOfflineSysMsgs,
        // 收到系统通知
        onsysmsg: onSysMsg,
        // 系统通知更新
        onupdatesysmsg: onUpdateSysMsg,
        // 系统通知未读数
        onsysmsgunread: onSysMsgUnread,
        // 系统通知未读数更新
        onupdatesysmsgunread: onUpdateSysMsgUnread,
        // 同步完成
        onsyncdone: onSyncDone
    });
    // 将nim存到应用缓存中
    plus.storage.setItem(NIM, nim);
}

// 连接成功
function onConnect() {
    console.log('连接成功');
}

// 连接失败
function onError(error) {
    console.log('连接失败', error);
}

// 收到好友列表
function onFriends(friends) {
    console.log('收到好友列表', friends);
    data.friends = nim.mergeFriends(data.friends, friends);
    data.friends = nim.cutFriends(data.friends, friends.invalid);
    refreshFriendsUI();
}

// 刷新好友界面
function refreshFriendsUI() {
}


// 收到会话列表
function onSessions(sessions) {
    console.log('收到会话列表', sessions);
    data.sessions = nim.mergeSessions(data.sessions, sessions);
    updateSessionsUI();
}
// 会话更新
function onUpdateSession(session) {
    console.log('会话更新了', session);
    data.sessions = nim.mergeSessions(data.sessions, session);
    updateSessionsUI();
}
// 刷新会话界面
function updateSessionsUI() {
}


// 收到漫游消息
function onRoamingMsgs(obj) {
    console.log('漫游消息', obj);
    pushMsg(obj.msgs);
}
// 收到离线消息
function onOfflineMsgs(obj) {
    console.log('离线消息', obj);
    pushMsg(obj.msgs);
}
// 收到消息
function onMsg(msg) {
    console.log('收到消息', msg.scene, msg.type, msg);
    pushMsg(msg);
}

// 合并消息
function pushMsg(msgs) {
    if (!Array.isArray(msgs)) { msgs = [msgs]; }
    var sessionId = msgs[0].sessionId;
    data.msgs = data.msgs || {};
    data.msgs[sessionId] = nim.mergeMsgs(data.msgs[sessionId], msgs);
}

// 收到离线系统通知
function onOfflineSysMsgs(sysMsgs) {
    console.log('收到离线系统通知', sysMsgs);
    pushSysMsgs(sysMsgs);
}
// 收到系统通知
function onSysMsg(sysMsg) {
    console.log('收到系统通知', sysMsg)
    pushSysMsgs(sysMsg);
}
// 更新系统通知
function onUpdateSysMsg(sysMsg) {
    pushSysMsgs(sysMsg);
}
// 合并系统通知
function pushSysMsgs(sysMsgs) {
    data.sysMsgs = nim.mergeSysMsgs(data.sysMsgs, sysMsgs);
    refreshSysMsgsUI();
}
// 收到系统通知未读数
function onSysMsgUnread(obj) {
    console.log('收到系统通知未读数', obj);
    data.sysMsgUnread = obj;
    refreshSysMsgsUI();
}
// 系统通知未读数更新了
function onUpdateSysMsgUnread(obj) {
    console.log('系统通知未读数更新了', obj);
    data.sysMsgUnread = obj;
    refreshSysMsgsUI();
}
// 刷新系统通知界面
function refreshSysMsgsUI() {
    // 保存系统通知未读数
    plus.storage.setItem(SysMsgUnread, JSON.stringify(data.sysMsgUnread))
    // 触发邻里页更新系统通知未读数
    mui.fire(
        plus.webview.getWebviewById('linli'),
        'refreshPage',
        {}
    )
}



function onSyncDone() {
    console.log('同步完成');
}