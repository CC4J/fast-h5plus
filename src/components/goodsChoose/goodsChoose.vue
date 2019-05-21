<template>
    <div class="goodsChoose mui-backdrop">
        <div class="wrapper">
            <!-- 商品卡片 -->
            <div class="goods-card">
                <img v-if="selectPro.img_url" class="post" :src="selectPro.img_url">
                <div class="detail">
                    <div class="price">{{totalPrice | currency}}</div>
                    <div class="select">已选：{{selectPro.key_name}}</div>
                </div>
                <div @click="tapClose" class="close">
                    <img src="./img_close.png">
                </div>
            </div>
            <!-- 商品规格 -->
            <div class="goods-type">
                <div v-if="propertyList && propertyList.length > 0">
                    <div class="title">
                        <span></span>
                        <span>规格</span>
                    </div>
                    <div class="type">
                        <div class="type-scroll">
                            <div
                                v-for="(proItem, index) in propertyList"
                                :key="proItem.id"
                                class="type-item"
                                @click="tapPro(proItem.id, index)"
                                :class="{active: activeProId == proItem.id}"
                            >{{proItem.key_name}}&nbsp;{{proItem.price | currency}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 商品数量 -->
            <div class="goods-count">
                <span class="title">购买数量</span>
                <Count :count="count" @reduce="handleReduce" @plus="handlePlus"></Count>
            </div>
            <!-- 确定按钮 -->
            <div class="submit">
                <div @click="tapConfirm" class="submit-btn">确定</div>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from "better-scroll";
import Count from "src/components/count/count.vue";
import api from "src/config/api";
import http from "src/util/ajax";
import store from "src/store";
import { currency } from "src/util/util.js";
import mui from "src/public/js/mui.min.js";
import defGoods from "./img_def.png";

export default {
    props: ["photo", "goodsId", "action"],
    components: {
        Count
    },
    filters: {
        currency
    },
    data() {
        return {
            selectPro: {
                img_url: defGoods,
                key_name: "加载中"
            }, // 用户选择的
            count: 1, // 数量
            propertyList: [], // 规格列表
            activeProId: "" // 选中的规格id
        };
    },
    computed: {
        totalPrice: function() {
            let price = Number(this.selectPro.price) || 0;
            return (this.count * price).toFixed(2);
        }
    },
    methods: {
        tapClose() {
            // 购物车关闭
            this.$emit("close");

            // 重置数量
            this.count = 1;
        },
        initTypeScroll() {
            // 初始化规格华东
            this.TypeScroll = new BScroll(".goodsChoose .type", {
                click: true
            });
        },
        // 确认按钮点击事件
        tapConfirm() {
            if (this.action == "add") {
                // 关闭规格选择
                this.$emit("close");
                // 添加购物车，直接调用购物车接口
                http({
                    url: api.addCart,
                    data: {
                        userId: store.getUser().userId,
                        token: store.getUser().token,
                        goods_id: this.goodsId,
                        sum: this.count,
                        key: this.activeProId
                    }
                }).then(res => {
                    if (res.code == 2001) {
                        mui.toast("购物车加入成功");
                        // 触发购物车刷新事件
                        mui.fire(
                            plus.webview.getWebviewById("cart"),
                            "refreshPage",
                            {}
                        );
                        // 重置数量
                        this.count = 1;

                        // 触发购物车选择成功事件
                        this.$emit("susadd");
                    }
                });
            } else if (this.action == "buy") {
                // 直接购买时选择规格动作，直接将用户选择的数据返回过去
                this.$emit("confirm", this.selectPro, this.count);
            }
        },
        // 规格点击事件
        tapPro(id, index) {
            if (this.activeProId == id) return;
            this.activeProId = id;
            this.selectPro = this.propertyList[index];
        },
        // 购物车减一
        handleReduce() {
            this.count--;
        },
        // 购物车加一
        handlePlus() {
            this.count++;
        },
        // 查询商品规格
        getGoodsPropertyList() {
            http({
                url: api.getGoodsProperty,
                data: {
                    userId: store.getUser().userId,
                    token: store.getUser().token,
                    goods_id: this.goodsId
                }
            }).then(res => {
                if (res.code == 2001) {
                    this.propertyList = res.data;
                    this.selectPro = this.propertyList[0];
                    this.activeProId = this.propertyList[0].id;
                    this.$nextTick(() => {
                        this.initTypeScroll();
                    });
                }
            });
        }
    },
    watch: {
        goodsId: function(val) {
            // 先清除选中的数据
            this.selectPro = {
                img_url: defGoods,
                key_name: "加载中"
            };
            this.propertyList = [];
            // 再查询该商品的规格
            this.getGoodsPropertyList();
        }
    }
};
</script>

<style lang="scss" scoped>
.goodsChoose {
    .wrapper {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        background: #ffffff;
        overflow: hidden;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        .goods-card {
            padding: 24px 30px;
            display: flex;
            position: relative;
            border-bottom: 2px solid #f2f2f2;
            // min-height: 288px;
            .post {
                width: 276px;
                height: 240px;
                border: 2px solid #efefef;
                border-radius: 4px;
                margin-right: 24px;
            }
            .detail {
                width: calc(100% - 300px);
                padding-top: 40px;
                .price {
                    font-size: 36px;
                    line-height: 37px;
                    color: #ff9a42;
                    margin-bottom: 40px;
                }
                .select {
                    font-size: 30px;
                    color: #333333;
                }
            }
            .close {
                position: absolute;
                top: 0;
                right: 0;
                padding: 24px 30px 0 0;
                img {
                    width: 38px;
                    height: 38px;
                }
            }
        }
        .goods-type {
            padding: 40px 30px;
            border-bottom: 2px solid #f2f2f2;
            min-height: 390px;
            .title {
                display: flex;
                align-items: center;
                margin-bottom: 32px;
                & span:first-child {
                    width: 6px;
                    height: 24px;
                    background: #3cc1ff;
                    margin-right: 14px;
                }
                & span:last-child {
                    font-size: 34px;
                    line-height: 34px;
                    color: #333333;
                }
            }
            .type {
                height: 240px;
                overflow: hidden;
                .type-scroll {
                    font-size: 0;
                    .type-item {
                        display: inline-block;
                        height: 40px;
                        line-height: 40px;
                        font-size: 30px;
                        color: #3cc1ff;
                        border-radius: 40px;
                        background: #f6fcff;
                        padding: 0 26px;
                        margin: 0 40px 40px 0;
                        &.active {
                            background: #3cc1ff;
                            color: #ffffff;
                        }
                    }
                }
            }
        }
        .goods-count {
            padding: 40px 30px;
            border-bottom: 2px solid #f2f2f2;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .title {
                font-size: 34px;
                line-height: 34px;
                color: #333333;
            }
        }
        .submit {
            padding: 20px 0;
            display: flex;
            justify-content: center;
            box-shadow: 0 0 1px rgba(0, 0, 0, 0.35);
            .submit-btn {
                width: 500px;
                height: 66px;
                line-height: 66px;
                text-align: center;
                border-radius: 66px;
                color: #ffffff;
                background: #3fc2ff;
                font-size: 32px;
            }
        }
    }
}
</style>
