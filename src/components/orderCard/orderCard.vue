<template>
  <div class="order-card">
    <div class="wrapper">
      <!-- 店铺名称 -->
      <div @click="tapShop" class="shop">
        <span class="name">{{order.shop_name}}</span>
        <span class="mui-icon mui-icon-arrowright"></span>
      </div>
      <!-- 内容区域 -->
      <div class="content">
        <div class="header">
          <div class="code">
            <img src="./img_icon1.png">
            <span>订单ID:{{order.order_number}}</span>
          </div>
          <span class="date">{{order.create_time}}</span>
        </div>
        <!-- 待付款 -->
        <div v-if="order.status == orderType.DFK_KEY" class="body-dfk">
          <div class="row1" v-for="goods in order.goods" :key="goods.goods_id">
            <img class="goods" :src="goods.photo" alt>
            <div class="detail">
              <div class="name">
                <span class="mui-ellipsis">{{goods.goods_title}}</span>
                <img src="./img_wzf.png" alt>
              </div>
              <div class="mj mui-ellipsis">规格:{{goods.key_name}}</div>
              <!-- <div class="mj">
                                <span>满减</span>
                                <span>0元</span>
                            </div>
                            <div class="jfdk">
                                <span>积分抵扣</span>
                                <span>0元</span>
              </div>-->
            </div>
          </div>
          <div v-if="order.coupon_price && order.coupon_price != 0" class="manjian">
            <span>满减:</span>
            <span>{{order.coupon_price}}元</span>
          </div>
          <div class="row2">
            <span class="count">共{{order.count_num}}件商品</span>
            <span class="title">合计:</span>
            <span class="price">￥{{order.need_pay}}</span>
          </div>
          <div class="row3">
            <img @click="tapCancel" class="qxdd" src="./btn_qxdd.png" alt>
            <img @click="tapPay" class="qfk" src="./btn_qfk.png" alt>
            <img @click="tapTel" class="lxsj" src="./btn_lxsj.png" alt>
          </div>
        </div>

        <!-- 待配送 -->
        <div v-if="order.status == orderType.DPS_KEY" class="body-dps">
          <div class="row1" v-for="goods in order.goods" :key="goods.goods_id">
            <img class="goods" :src="goods.photo" alt>
            <div class="detail">
              <div class="name">
                <span class="mui-ellipsis">{{goods.goods_title}}</span>
                <img src="./img_dps.png" alt>
              </div>
              <div class="mj mui-ellipsis">规格:{{goods.key_name}}</div>
              <!-- <div class="mj">
                                <span>满减</span>
                                <span>0元</span>
                            </div>
                            <div class="jfdk">
                                <span>积分抵扣</span>
                                <span>0元</span>
              </div>-->
            </div>
          </div>
          <div v-if="order.coupon_price && order.coupon_price != 0" class="manjian">
            <span>满减:</span>
            <span>{{order.coupon_price}}元</span>
          </div>
          <div class="row2">
            <div class="left">
              <span>自提码:{{order.extract_sign}}</span>
            </div>
            <div class="right">
              <span class="count">共{{order.count_num}}件商品</span>
              <span class="title">合计:</span>
              <span class="price">￥{{order.need_pay}}</span>
            </div>
          </div>
          <div class="row3">
            <img @click="tapReqCancel" class="qxdd" src="./btn_sqtk.png" alt>
            <!-- <img @click="tapDetail" class="ckxq" src="./btn_ckxq.png" alt> -->
            <img @click="tapTel" class="lxsj" src="./btn_lxsj.png" alt>
          </div>
        </div>

        <!-- 待收货 -->
        <div v-if="order.status == orderType.DSH_KEY" class="body-dsh">
          <div class="row1" v-for="goods in order.goods" :key="goods.goods_id">
            <img class="goods" :src="goods.photo" alt>
            <div class="detail">
              <div class="name">
                <span class="mui-ellipsis">{{goods.goods_title}}</span>
                <img src="./img_dsh.png" alt>
              </div>
              <div class="mj mui-ellipsis">规格:{{goods.key_name}}</div>
              <!-- <div class="mj">
                                <span>满减</span>
                                <span>0元</span>
                            </div>
                            <div class="jfdk">
                                <span>积分抵扣</span>
                                <span>0元</span>
              </div>-->
            </div>
          </div>
          <div v-if="order.coupon_price && order.coupon_price != 0" class="manjian">
            <span>满减:</span>
            <span>{{order.coupon_price}}元</span>
          </div>
          <div class="row2">
            <div class="left">
              <span>自提码:{{order.extract_sign}}</span>
            </div>
            <div class="right">
              <span class="count">共{{order.count_num}}件商品</span>
              <span class="title">合计:</span>
              <span class="price">￥{{order.need_pay}}</span>
            </div>
          </div>
          <div class="row3">
            <img @click="tapReqCancel" class="qxdd" src="./btn_sqtk.png" alt>
            <img @click="tapMakeSure" class="qrsh" src="./btn_qrsh.png" alt>
            <img @click="tapTel" class="lxsj" src="./btn_lxsj.png" alt>
          </div>
        </div>

        <!-- 待退款 -->
        <div v-if="order.status == orderType.DTK_KEY" class="body-dtk">
          <div class="row1" v-for="goods in order.goods" :key="goods.goods_id">
            <img class="goods" :src="goods.photo" alt>
            <div class="detail">
              <div class="name">
                <span class="mui-ellipsis">{{goods.goods_title}}</span>
              </div>

              <div class="count">
                <span class="title">商品件数</span>
                <span class="num">x{{goods.num}}</span>
              </div>
            </div>
          </div>
          <div class="row2">
            <div class="left">
              <img src="./img_icon2.png" alt>
              <span>等待系统处理</span>
            </div>
            <img @click="tapCancelDetail" src="./btn_ckxq_line.png" class="btn">
          </div>
        </div>

        <!-- 已付款 -->
        <div v-if="order.status == orderType.YFK_KEY" class="body-yfk">
          <div class="row1" v-for="goods in order.goods" :key="goods.goods_id">
            <img class="goods" :src="goods.photo" alt>
            <div class="detail">
              <div class="name">
                <span class="mui-ellipsis">{{goods.goods_title}}</span>
                <img src="./img_yfk.png" alt>
              </div>
              <div class="mj mui-ellipsis">规格:{{goods.key_name}}</div>
              <!-- <div class="mj">
                                <span>满减</span>
                                <span>0元</span>
                            </div>
                            <div class="jfdk">
                                <span>积分抵扣</span>
                                <span>0元</span>
              </div>-->
            </div>
          </div>
          <div v-if="order.coupon_price && order.coupon_price != 0" class="manjian">
            <span>满减:</span>
            <span>{{order.coupon_price}}元</span>
          </div>
          <div class="row2">
            <span class="count">共{{order.count_num}}件商品</span>
            <span class="title">合计:</span>
            <span class="price">￥{{order.need_pay}}</span>
          </div>
          <div class="row3">
            <img @click="tapCancel" class="qxdd" src="./btn_qxdd.png" alt>
            <!-- <img @click="tapDetail" class="ckxq" src="./btn_ckxq.png" alt> -->
            <img @click="tapTel" class="lxsj" src="./btn_lxsj.png" alt>
          </div>
        </div>

        <!-- 已退款 -->
        <div v-if="order.status == orderType.YTK_KEY" class="body-ytk">
          <div class="row1" v-for="goods in order.goods" :key="goods.goods_id">
            <img class="goods" :src="goods.photo" alt>
            <div class="detail">
              <div class="name">
                <span class="mui-ellipsis">{{goods.goods_title}}</span>
              </div>

              <div class="count">
                <span class="title">商品件数</span>
                <span class="num">x{{goods.num}}</span>
              </div>
            </div>
          </div>
          <div class="row2">
            <div class="left">
              <img src="./img_icon2.png" alt>
              <span class="title">仅退款</span>
              <span>退款成功</span>
            </div>
            <img @click="tapCancelDetail" src="./btn_ckxq_line.png" class="btn">
          </div>
        </div>

        <!-- 已完成 -->
        <div v-if="order.status == orderType.YWC_KEY" class="body-ywc">
          <div class="row1" v-for="goods in order.goods" :key="goods.goods_id">
            <img class="goods" :src="goods.photo" alt>
            <div class="detail">
              <div class="name">
                <span class="mui-ellipsis">{{goods.goods_title}}</span>
                <img src="./img_dsh.png" alt>
              </div>
              <div class="mj mui-ellipsis">规格:{{goods.key_name}}</div>
              <!-- <div class="mj">
                                <span>满减</span>
                                <span>0元</span>
                            </div>
                            <div class="jfdk">
                                <span>积分抵扣</span>
                                <span>0元</span>
              </div>-->
            </div>
            <img @click="tapEvaluate(goods)" class="wypj" src="./btn_wypj.png" alt>
          </div>
          <div v-if="order.coupon_price && order.coupon_price != 0" class="manjian">
            <span>满减:</span>
            <span>{{order.coupon_price}}元</span>
          </div>
          <div class="row2">
            <span class="count">共{{order.count_num}}件商品</span>
            <span class="title">合计:</span>
            <span class="price">￥{{order.need_pay}}</span>
          </div>
          <!-- <div class="row3">
                        <img @click="tapEvaluate" class="wypj" src="./btn_wypj.png" alt>
                        <img @click="tapDetail" class="xq" src="./btn_xq.png" alt>
          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import orderType from "src/config/orderType.js";

export default {
  props: ["order", "orderIdx"],
  data() {
    return {
      orderType
    };
  },
  methods: {
    // 查看店铺
    tapShop() {
      this.$emit("shop", this.order.shop_id, this.order.shop_name);
    },
    // 取消未支付订单
    tapCancel() {
      this.$emit("cancel", this.order.order_id, this.orderIdx);
    },
    // 去付款
    tapPay() {
      this.$emit("pay", this.order.order_id);
    },
    tapTel() {
      // 联系商家
      this.$emit("tel", this.order.shop_tel);
    },
    // 申请退款
    tapReqCancel() {
      this.$emit("reqcancel", this.order.order_id, this.orderIdx);
    },
    // 查看订单详情
    tapDetail() {
      this.$emit("detail");
    },
    // 确认收货
    tapMakeSure() {
      this.$emit("sure", this.order.order_id, this.orderIdx);
    },
    // 退款详情
    tapCancelDetail() {
      this.$emit("canceldetail", this.order.order_id);
    },
    // 评价
    tapEvaluate(goods) {
      this.$emit("evaluate", this.order.order_id, this.order.shop_id, goods);
    }
  }
};
</script>

<style lang="scss" scoped>
.order-card {
  .wrapper {
    background: #ffffff;
    border-radius: 12px;
    overflow: hidden;
    padding: 0 17px 40px;
    .shop {
      height: 76px;
      padding: 0 7px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 2px solid #e2ecf0;
      .name {
        font-size: 26px;
        color: #333333;
      }
      .mui-icon {
        color: #999999;
        font-size: 40px;
      }
    }
    .content {
      padding: 0 7px;
      .header {
        padding-top: 22px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 36px;
        .code {
          font-size: 0;
          display: flex;
          align-items: center;
          img {
            width: 34px;
            height: 36px;
            margin-right: 8px;
          }
          span {
            font-size: 32px;
            color: #333333;
          }
        }
        .date {
          font-size: 24px;
          color: #999999;
        }
      }
      .body-dfk {
        .row1 {
          display: flex;
          margin-bottom: 72px;
          .goods {
            width: 200px;
            height: 158px;
            border: 2px solid #efefef;
            border-radius: 4px;
            margin-right: 24px;
          }
          .detail {
            width: calc(100% - 224px);
            .name {
              display: flex;
              align-items: center;
              margin-bottom: 36px;
              span {
                font-size: 32px;
                line-height: 32px;
                color: #333333;
                max-width: 250px;
                margin-right: 28px;
              }
              img {
                width: 96px;
                height: 42px;
              }
            }
            .mj {
              //   display: flex;
              //   align-items: center;
              //   justify-content: space-between;
              // width: 230px;
              font-size: 28px;
              line-height: 28px;
              color: #999999;
              margin-bottom: 24px;
              & span:first-child {
                font-size: 28px;
                line-height: 28px;
                color: #999999;
              }
              & span:last-child {
                font-size: 28px;
                line-height: 28px;
                color: #333333;
              }
            }
            .jfdk {
              display: flex;
              align-items: center;
              justify-content: space-between;
              width: 230px;
              & span:first-child {
                font-size: 28px;
                line-height: 28px;
                color: #999999;
              }
              & span:last-child {
                font-size: 28px;
                line-height: 28px;
                color: #333333;
              }
            }
          }
        }
        .row2 {
          font-size: 0;
          color: #333333;
          display: flex;
          justify-content: flex-end;
          margin-bottom: 40px;
          .count {
            font-size: 28px;
          }
          .title {
            font-size: 28px;
            margin-left: 16px;
          }
          .price {
            font-size: 28px;
            color: #ff9940;
            margin-left: 25px;
          }
        }
        .row3 {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          .qxdd {
            width: 162px;
            height: 50px;
          }
          .qfk {
            width: 140px;
            height: 50px;
            margin-left: 32px;
          }
          .lxsj {
            width: 162px;
            height: 50px;
            margin-left: 32px;
          }
        }
      }
      .body-dps {
        .row1 {
          display: flex;
          margin-bottom: 72px;
          .goods {
            width: 200px;
            height: 158px;
            border: 2px solid #efefef;
            border-radius: 4px;
            margin-right: 24px;
          }
          .detail {
            width: calc(100% - 224px);
            .name {
              display: flex;
              align-items: center;
              margin-bottom: 36px;
              span {
                font-size: 32px;
                line-height: 32px;
                color: #333333;
                max-width: 250px;
                margin-right: 28px;
              }
              img {
                width: 139px;
                height: 42px;
              }
            }
            .mj {
              //   display: flex;
              //   align-items: center;
              //   justify-content: space-between;
              // width: 230px;
              font-size: 28px;
              line-height: 28px;
              color: #999999;
              margin-bottom: 24px;
              & span:first-child {
                font-size: 28px;
                line-height: 28px;
                color: #999999;
              }
              & span:last-child {
                font-size: 28px;
                line-height: 28px;
                color: #333333;
              }
            }
            .jfdk {
              display: flex;
              align-items: center;
              justify-content: space-between;
              width: 230px;
              & span:first-child {
                font-size: 28px;
                line-height: 28px;
                color: #999999;
              }
              & span:last-child {
                font-size: 28px;
                line-height: 28px;
                color: #333333;
              }
            }
          }
        }
        .row2 {
          font-size: 0;
          color: #333333;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
          .left {
            font-size: 28px;
            color: #666666;
            line-height: 28px;
          }
          .right {
            .count {
              font-size: 28px;
            }
            .title {
              font-size: 28px;
              margin-left: 16px;
            }
            .price {
              font-size: 28px;
              color: #ff9940;
              margin-left: 25px;
            }
          }
        }
        .row3 {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          .qxdd {
            width: 162px;
            height: 50px;
          }
          .ckxq {
            width: 162px;
            height: 50px;
            margin-left: 32px;
          }
          .lxsj {
            width: 162px;
            height: 50px;
            margin-left: 32px;
          }
        }
      }
      .body-dsh {
        .row1 {
          display: flex;
          margin-bottom: 72px;
          .goods {
            width: 200px;
            height: 158px;
            border: 2px solid #efefef;
            border-radius: 4px;
            margin-right: 24px;
          }
          .detail {
            width: calc(100% - 224px);
            .name {
              display: flex;
              align-items: center;
              margin-bottom: 36px;
              span {
                font-size: 32px;
                line-height: 32px;
                color: #333333;
                max-width: 250px;
                margin-right: 28px;
              }
              img {
                width: 74px;
                height: 42px;
              }
            }
            .mj {
              //   display: flex;
              //   align-items: center;
              //   justify-content: space-between;
              // width: 230px;
              font-size: 28px;
              line-height: 28px;
              color: #999999;
              margin-bottom: 24px;
              & span:first-child {
                font-size: 28px;
                line-height: 28px;
                color: #999999;
              }
              & span:last-child {
                font-size: 28px;
                line-height: 28px;
                color: #333333;
              }
            }
            .jfdk {
              display: flex;
              align-items: center;
              justify-content: space-between;
              width: 230px;
              & span:first-child {
                font-size: 28px;
                line-height: 28px;
                color: #999999;
              }
              & span:last-child {
                font-size: 28px;
                line-height: 28px;
                color: #333333;
              }
            }
          }
        }
        .row2 {
          font-size: 0;
          color: #333333;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
          .left {
            font-size: 28px;
            color: #666666;
            line-height: 28px;
          }
          .right {
            .count {
              font-size: 28px;
            }
            .title {
              font-size: 28px;
              margin-left: 16px;
            }
            .price {
              font-size: 28px;
              color: #ff9940;
              margin-left: 25px;
            }
          }
        }
        .row3 {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          .qxdd {
            width: 162px;
            height: 50px;
          }
          .qrsh {
            width: 162px;
            height: 50px;
            margin-left: 32px;
          }
          .lxsj {
            width: 162px;
            height: 50px;
            margin-left: 32px;
          }
        }
      }
      .body-dtk {
        .row1 {
          display: flex;
          margin-bottom: 72px;
          .goods {
            width: 200px;
            height: 158px;
            border: 2px solid #efefef;
            border-radius: 4px;
            margin-right: 24px;
          }
          .detail {
            width: calc(100% - 224px);
            height: 158px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .name {
              display: flex;
              span {
                font-size: 32px;
                line-height: 32px;
                color: #333333;
                margin-right: 28px;
              }
            }
            .count {
              font-size: 0;
              display: flex;
              color: #999999;
              .title {
                font-size: 28px;
                margin-right: 70px;
              }
              .num {
                font-size: 28px;
                color: #333333;
              }
            }
          }
        }
        .row2 {
          font-size: 0;
          color: #333333;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .left {
            display: flex;
            align-items: center;
            img {
              width: 30px;
              height: 24px;
              margin-right: 16px;
            }
            span {
              color: #333333;
              font-size: 30px;
              line-height: 30px;
            }
          }
          .btn {
            width: 162px;
            height: 50px;
          }
        }
      }
      .body-yfk {
        .row1 {
          display: flex;
          margin-bottom: 72px;
          .goods {
            width: 200px;
            height: 158px;
            border: 2px solid #efefef;
            border-radius: 4px;
            margin-right: 24px;
          }
          .detail {
            width: calc(100% - 224px);
            .name {
              display: flex;
              align-items: center;
              margin-bottom: 36px;
              span {
                font-size: 32px;
                line-height: 32px;
                color: #333333;
                max-width: 250px;
                margin-right: 28px;
              }
              img {
                width: 96px;
                height: 42px;
              }
            }
            .mj {
              //   display: flex;
              //   align-items: center;
              //   justify-content: space-between;
              // width: 230px;
              font-size: 28px;
              line-height: 28px;
              color: #999999;
              margin-bottom: 24px;
              & span:first-child {
                font-size: 28px;
                line-height: 28px;
                color: #999999;
              }
              & span:last-child {
                font-size: 28px;
                line-height: 28px;
                color: #333333;
              }
            }
            .jfdk {
              display: flex;
              align-items: center;
              justify-content: space-between;
              width: 230px;
              & span:first-child {
                font-size: 28px;
                line-height: 28px;
                color: #999999;
              }
              & span:last-child {
                font-size: 28px;
                line-height: 28px;
                color: #333333;
              }
            }
          }
        }
        .row2 {
          font-size: 0;
          color: #333333;
          display: flex;
          justify-content: flex-end;
          margin-bottom: 40px;
          .count {
            font-size: 28px;
          }
          .title {
            font-size: 28px;
            margin-left: 16px;
          }
          .price {
            font-size: 28px;
            color: #ff9940;
            margin-left: 25px;
          }
        }
        .row3 {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          .qxdd {
            width: 162px;
            height: 50px;
          }
          .ckxq {
            width: 162px;
            height: 50px;
            margin-left: 32px;
          }
          .lxsj {
            width: 162px;
            height: 50px;
            margin-left: 32px;
          }
        }
      }
      .body-ytk {
        .row1 {
          display: flex;
          margin-bottom: 72px;
          .goods {
            width: 200px;
            height: 158px;
            border: 2px solid #efefef;
            border-radius: 4px;
            margin-right: 24px;
          }
          .detail {
            width: calc(100% - 224px);
            height: 158px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .name {
              display: flex;
              span {
                font-size: 32px;
                line-height: 32px;
                color: #333333;
                margin-right: 28px;
              }
            }
            .count {
              font-size: 0;
              display: flex;
              color: #999999;
              .title {
                font-size: 28px;
                margin-right: 70px;
              }
              .num {
                font-size: 28px;
                color: #333333;
              }
            }
          }
        }
        .row2 {
          font-size: 0;
          color: #333333;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .left {
            display: flex;
            align-items: center;
            img {
              width: 30px;
              height: 24px;
              margin-right: 16px;
            }
            span {
              color: #333333;
              font-size: 30px;
              line-height: 30px;
            }
            .title {
              margin-right: 22px;
            }
          }
          .btn {
            width: 162px;
            height: 50px;
          }
        }
      }
      .body-ywc {
        .row1 {
          display: flex;
          margin-bottom: 72px;
          .goods {
            width: 200px;
            height: 158px;
            border: 2px solid #efefef;
            border-radius: 4px;
            margin-right: 24px;
          }
          .detail {
            width: calc(100% - 400px);
            margin-right: 30px;
            .name {
              display: flex;
              align-items: center;
              margin-bottom: 36px;
              span {
                font-size: 32px;
                line-height: 32px;
                color: #333333;
                max-width: 250px;
                margin-right: 28px;
              }
              img {
                width: 72px;
                height: 42px;
              }
            }
            .mj {
              //   display: flex;
              //   align-items: center;
              //   justify-content: space-between;
              // width: 230px;
              font-size: 28px;
              line-height: 28px;
              color: #999999;
              margin-bottom: 24px;
              & span:first-child {
                font-size: 28px;
                line-height: 28px;
                color: #999999;
              }
              & span:last-child {
                font-size: 28px;
                line-height: 28px;
                color: #333333;
              }
            }
            .jfdk {
              display: flex;
              align-items: center;
              justify-content: space-between;
              width: 230px;
              & span:first-child {
                font-size: 28px;
                line-height: 28px;
                color: #999999;
              }
              & span:last-child {
                font-size: 28px;
                line-height: 28px;
                color: #333333;
              }
            }
          }
          .wypj {
            width: 120px;
            height: 50px;
          }
        }
        .row2 {
          font-size: 0;
          color: #333333;
          display: flex;
          justify-content: flex-end;
          // margin-bottom: 40px;
          .count {
            font-size: 28px;
          }
          .title {
            font-size: 28px;
            margin-left: 16px;
          }
          .price {
            font-size: 28px;
            color: #ff9940;
            margin-left: 25px;
          }
        }
        .row3 {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          .wypj {
            width: 162px;
            height: 50px;
          }
          .xq {
            width: 104px;
            height: 50px;
            margin-left: 32px;
          }
        }
      }
    }
  }
  .manjian {
    margin-bottom: 8px;
    text-align: right;
    span {
      font-size: 28px;
    }
    & span:first-child {
      margin-right: 16px;
    }
  }
}
</style>
