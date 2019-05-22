// 订单类别维护
export default {
    DFK_KEY: 0, // 待付款

    DPS_KEY: 1, // 待配送

    DSH_KEY: 2, // 待收货

    YFK_KEY: 3, // 已付款

    DTK_KEY: 4, // 待退款

    YTK_KEY: 5, // 已退款

    YWC_KEY: 8, // 已完成

    ALL_KEY: 100, // 全部订单
    getList() {
        return [
            { id: 100, name: '全部' },
            { id: 0, name: '待付款' },
            { id: 1, name: '待配送' },
            { id: 2, name: '待收货' },
            { id: 3, name: '已付款' },
            { id: 4, name: '待退款' },
            { id: 5, name: '已退款' },
            { id: 8, name: '已完成' },
        ]
    },
    getName(key) {
        let nameObj = {
            100: '全部',
            0: '待付款',
            1: '待配送',
            2: '待收货',
            3: '已付款',
            4: '待退款',
            5: '已退款',
            8: '已完成',
        }

        if (!nameObj[key]) {
            return ''
        } else {
            return nameObj[key]
        }
    }
}