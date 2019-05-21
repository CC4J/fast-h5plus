import apiRoot from './api.config'

// 惠生活 JAVA API 跟路径
var serverIP = apiRoot.javaIP;

// 惠生活 PHP API 根路径
var serverIP2 = apiRoot.phpIP;


export default {
    // 获取短信验证码
    "getMobileCode": serverIP + "getMobileCode",
    // 用户注册
    "userRegister": serverIP + "userRegister",
    // 用户登录
    "userLogin": serverIP + "userLogin",
    // 找回密码
    "updateUserPassword": serverIP + "updateUserPassword",
    // 查询所有轮播图  s1: 1.服务 2.商城 3.首页 4.物业
    "selectAdvertisementApp": serverIP + "selectAdvertisementApp",
    // 获取最新版本号跟下载路径
    "checkAppUpdate": serverIP2 + "versions/index",

    // =========================================  首页 ======================================
    // 查询小区列表
    "communitylist": serverIP2 + "community/communitylist",
    // 查询天气
    "getWeather": serverIP + "getWeather",
    // 查询首页未读通知条数
    "selectByUnreadCount": serverIP + "selectByUnreadCount",
    // 查询首页最新两条通知
    "selectNoticeByTop": serverIP + "selectNoticeByTop",
    // 查询社区头条新闻
    "getNewsList": serverIP + "getNewsList",
    // 获取社区新闻头条详情
    "getNewsDetail": serverIP + "getNewsDetail",
    // 设置用户选择的社区
    "setLastCommunityId": serverIP2 + "Community/GetLastCommunityId",

    // ===================================报事报修 ==================================
    // 知识库查询
    "selectPropertyResourceByPId": serverIP + "selectPropertyResourceByPId",
    // 添加临时数据
    "insertPropertyResourceByRedis": serverIP + "insertPropertyResourceByRedis",
    // 添加工单
    "insertPropertyWorkorder": serverIP + "insertPropertyWorkorder",

    // =========================================== 商城模块 ===============================
    // 查询商城一级分类
    "getMallShopType": serverIP2 + "shopcate/index",
    // 查询商铺列表
    "getMallShopList": serverIP2 + "shopcate/shop",
    // 查询商铺商品类别
    "getShopCate": serverIP2 + "goodscate/index",
    // 根据商品类别查商品列表
    "getShopGoods": serverIP2 + "shop/detail",
    // 获取店铺形象图
    "getShopBanner": serverIP2 + "shop/photo",
    // 查询店铺优惠券
    "getShopCoupon": serverIP2 + "order/couponlist",
    // 查询店铺商品详情
    "getGoodsDetail": serverIP2 + "goods/index",
    // 查询商品规格
    "getGoodsProperty": serverIP2 + "goods/property",
    // 加入购物车
    "addCart": serverIP2 + "order/addcart",
    // 领取优惠券
    "getCoupon": serverIP2 + "order/getcoupon",
    // 生成订单
    "addOrder": serverIP2 + "order/add",
    // 优惠券领取
    "getcoupon": serverIP2 + "order/getcoupon",
    // 获取两张平台优惠券
    "getTwoTerracecoupon": serverIP2 + "coupon/Terracecoupon",
    // 查询平台券列表
    "getTerracecouponList": serverIP2 + "coupon/TerracecouponList",
    // 领取平台优惠券
    "getTerracecoupon": serverIP2 + "terracecoupon/get_coupon",

    // =========================================== 收货地址 =====================================
    // 查询收货地址
    "getOrderAddrList": serverIP2 + "order/address",
    // 查询小区楼栋信息
    "getPublicAddr": serverIP2 + "order/show",
    // 添加或修改地址
    "editOrderAddr": serverIP2 + "order/addr",
    // 删除订单
    "delOrderAddr": serverIP2 + "order/delete",
    // 设置默认定制
    "setDefOrderAddr": serverIP2 + "order/isdefault",
    // 根据 订单id查配送范围的地址
    "getAddrListByOrderId": serverIP2 + "order/conform",
    // 获取订到详情 或列表
    "getOrderData": serverIP2 + "order/order",
    // 根据订单id查可用的优惠券
    "getCouponByOrderId": serverIP2 + "order/coupon",
    // 修改订单自提状态
    "updateOrderCarry": serverIP2 + "order/order_is_carry",
    // 修改订单使用的优惠券
    "updateOrderCoupon": serverIP2 + "order/price",
    // 订单支付
    "payMallOrder": serverIP2 + "order/new_pay",
    // 查询购物车列表
    "getMallCartList": serverIP2 + "order/cart",
    // 移出购物车
    "delMallCart": serverIP2 + "order/remove",
    // 移出全部购物车
    "clearMallCart": serverIP2 + "order/remove_all",
    // 修改购物车中商品数量
    "updateCartCount": serverIP2 + "order/exit_cart",
    // 取消未支付订单
    "cancelOrder": serverIP2 + "order/cancel",
    // 订单申请退款
    "reqCancelOrder": serverIP2 + "order/refund",
    // 确认收货
    "confirmOrder": serverIP2 + "order/affirm",
    // 添加订单评论
    "addOrderComment": serverIP2 + "order/commentadd",
    // 获取退款详情
    "getOrderCancelDetail": serverIP2 + "order/OrderRefundDetails",
    // 上传评论图片
    "addComment": serverIP2 + "order/commentadd",
    // 查询商品评论
    "getCommentList": serverIP2 + "goods/evaluate",
    // ================================ 基本信息 ===================================
    // 查询用户基本信息数据
    "getUserData": serverIP2 + "user/info",
    // 个人信息修改
    "editUserData": serverIP2 + "user/edit",
    // ================================= 菜单管理模块 ===================================
    // 查询后台已有的功能模块
    "getCommunityModule": serverIP + "getCommunityModule",
    // 查用我的应用
    "getUserCommonModule": serverIP + "getUserCommonModule",
    // 编辑我的常用应用
    "editUserCommonModule": serverIP + "editUserCommonModule",
    // 增加菜单点击量
    "addModuleVisit": serverIP + "addModuleVisit",
    // ==================================== 即时通讯 =================================
    // 查询楼栋
    "getCommunityBuild": serverIP + "getCommunityBuild",
    // 根据楼栋查即时通讯用户
    "getCommunityUser": serverIP + "getCommunityUser",
    // ========================================== 平台 ==============================
    // 查询平台电话
    "getTerraceNewMobile": serverIP2 + "user/TerraceNewMobile"
}