<template>
    <div class="shop-comment">
        <div class="wrapper">
            <!-- 用户头像姓名 -->
            <div class="user">
                <img :src="comment.face">
                <span class="mui-ellipsis">{{comment.user_name}}</span>
            </div>
            <!-- 日期以及购买的产品 -->
            <div class="shop-buy">
                <span class="date">{{comment.create_time}}</span>
                <span class="goods mui-ellipsis">{{comment.goods_name[0]}}</span>
            </div>
            <!-- 评价内容 -->
            <div class="coment">{{comment.contents}}</div>
            <!-- 评价图片 -->
            <div class="img-group">
                <img v-for="img in comment.photo" :key="img" :src="img">
            </div>
            <!-- 评论日期以及评论数点赞数 -->
            <!-- <div class="footer">
                <div class="date">23分钟前</div>
                <div class="other">
                    <img src="./img_msg.png">
                    <span>35</span>
                    <img src="./img_zan.png">
                    <span>236</span>
                </div>
            </div>-->
        </div>
    </div>
</template>

<script>
export default {
    props: ["comment"],
    data() {
        return {};
    }
};
</script>

<style lang="scss" scoped>
.shop-comment {
    .wrapper {
        background: #ffffff;
        padding: 24px 30px 40px 30px;
        .user {
            display: flex;
            align-items: center;
            margin-bottom: 16px;
            img {
                width: 64px;
                height: 64px;
                border-radius: 50%;
                margin-right: 16px;
            }
            span {
                width: calc(100% - 80px);
                font-size: 26px;
                color: #fda437;
            }
        }
        .shop-buy {
            display: flex;
            align-items: center;
            font-size: 24px;
            color: #999999;
            margin-bottom: 10px;
            .date {
                margin-right: 22px;
            }
            .goods {
                width: calc(100% - 178px);
            }
        }
        .coment {
            font-size: 30px;
            // line-height: 36px;
            color: #0d0d0d;
            margin-bottom: 16px;
        }
        .img-group {
            img {
                width: 30.9%;
                display: inline-block;
                margin-right: 1%;
                height: 162px;
                border: 2px solid #efefef;
            }
        }
        .footer {
            padding-top: 36px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .date {
                font-size: 24px;
                color: #999999;
            }
            .other {
                display: flex;
                align-items: center;
                img {
                    margin-left: 40px;
                    width: 24px;
                    height: 22px;
                }
                span {
                    font-size: 24px;
                    color: #999999;
                    margin-left: 7px;
                }
            }
        }
    }
}
</style>
