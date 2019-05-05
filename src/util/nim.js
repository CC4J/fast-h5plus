import store from 'src/store'
const SDK = require("src/public/lib/nim/NIM_Web_SDK_v6.2.0.js")
function noop() { }

export default function (cbs) {
    var user = store.getUser();
    cbs = cbs || {}
    return SDK.NIM.getInstance({
        appKey: "3af41643e6fe0c91e7bd5a3df2069c13",
        account: user.imAccount,
        token: user.imToken,
        // db: false,
        onconnect: cbs.onconnect || noop,
        onsessions: cbs.onsessions || noop,
        onfriends: cbs.onfriends || noop,
        onsyncfriendaction: cbs.onsyncfriendaction || noop,
        onsysmsgunread: cbs.onsysmsgunread || noop,
        onupdatesysmsgunread: cbs.onupdatesysmsgunread || noop,
        onofflinesysmsgs: cbs.onofflinesysmsgs || noop,
        onsysmsg: cbs.onsysmsg || noop,
        onupdatesysmsg: cbs.onupdatesysmsg || noop,
        onroamingmsgs: cbs.onroamingmsgs || noop,
        onofflinemsgs: cbs.onofflinemsgs || noop,
        onmsg: cbs.onmsg || noop,
        onupdatesession: cbs.onupdatesession || noop
    });
}