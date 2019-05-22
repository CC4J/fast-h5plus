<template>
    <div class="shop-item">
        <div class="content">
            <img @click="tapShop" :src="shop.logo" alt>
            <div class="detail">
                <div @click="tapShop">
                    <div class="title mui-ellipsis">{{shop.shop_name}}</div>
                    <div class="sub-title mui-ellipsis">
                        <span class="ys">已售：{{shop.amount}}单</span>
                        <span v-if="shop.is_reight == 1" class="qs">{{shop.amount_price}}元起送</span>
                        <span v-if="shop.is_reight == 0" class="qs">不支持配送</span>
                        <span class="sc">配送时长：{{shop.delivery_time}}min</span>
                    </div>
                    <div v-if="shop.tags && shop.tags.length > 0" class="key-word">
                        <span v-for="(tag, tagIdx) in shop.tags" :key="tagIdx">{{tag}}</span>
                        <!-- <span>关键词2</span> -->
                    </div>
                </div>

                <div
                    v-if="shop.coupon_data && shop.coupon_data.length > 0"
                    class="coupon-list"
                    :class="{active: shop.open}"
                    @click="tapOpen"
                >
                    <span
                        v-for="(coupon, couponIdx) in shop.coupon_data"
                        :key="couponIdx"
                        class="coupon-item"
                    >满{{coupon.full_price}}减{{coupon.reduce_price}}</span>
                    <div class="arrow-btn">
                        <span v-show="!shop.open" class="mui-icon mui-icon-arrowdown"></span>
                        <span v-show="shop.open" class="mui-icon mui-icon-arrowup"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["shop"],
    data() {
        return {};
    },
    methods: {
        tapOpen() {
            this.shop.open = !this.shop.open;
        },
        tapShop() {
            this.$emit("tapshop", this.shop);
        }
    }
};
</script>

<style lang="scss" scoped>
.shop-item {
    background: #ffffff;
    padding: 40px 30px;
    .content {
        display: flex;
        img {
            width: 112px;
            height: 107px;
            border: 2px solid #f5f5f5;
            border-radius: 6px;
            margin-right: 24px;
        }
        .detail {
            width: calc(100% - 140px);
            .title {
                font-size: 34px;
                line-height: 34px;
                color: #0d0d0d;
                margin-bottom: 22px;
            }
            .sub-title {
                font-size: 24px;
                line-height: 26px;
                color: #999999;
                margin-bottom: 20px;
                .ys {
                    margin-right: 30px;
                }
                .qs {
                    margin-right: 30px;
                }
            }
            .key-word {
                font-size: 0;
                span {
                    color: #999999;
                    display: inline-block;
                    margin-right: 30px;
                    font-size: 24px;
                    line-height: 24px;
                    margin-bottom: 20px;
                }
            }
            .coupon-list {
                font-size: 0;
                height: 60px;
                overflow: hidden;
                position: relative;
                padding-right: 36px;
                .arrow-btn {
                    width: 36px;
                    height: 36px;
                    position: absolute;
                    top: 0;
                    right: 16px;
                    text-align: center;
                    color: #999;
                    span {
                        font-size: 36px;
                    }
                }
                .coupon-item {
                    display: inline-block;
                    height: 34px;
                    line-height: 34px;
                    padding: 0 10px;
                    border: 2px solid #ff6840;
                    color: #ff6840;
                    font-size: 20px;
                    border-radius: 2px;
                    margin: 0 24px 24px 0;
                }
                &.active {
                    height: auto;
                    overflow: auto;
                }
            }
        }
    }
}
</style>
