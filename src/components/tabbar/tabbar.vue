<template>
    <div class="home-tabbar">
        <ul>
            <li v-for="(item,index) in tabbarlist" :key="item.id" @click="tabbarjump(item, index)">
                <p class="pic">
                    <img :src="active == index ? item.picActive : item.picA">
                </p>
                <p :class="{'blueitem':active == index,'title':active != index}">{{item.name}}</p>
            </li>
        </ul>
        <div class="ipx-saft" v-if="isIphoneX"></div>
    </div>
</template>
<script>
import mui from "src/public/js/mui.min.js";
export default {
    props: ["active"],
    data() {
        return {
            isIphoneX: false, // 是否是iphonex
            tabbarlist: [
                {
                    picA: require("./tabbar3.png"),
                    picActive: require("./tabbar-active3.png"),
                    flag: false,
                    name: "首页",
                    id: "home",
                    url: "./home.html"
                },
                {
                    picA: require("./tabbar5.png"),
                    picActive: require("./tabbar-active5.png"),
                    flag: false,
                    name: "物业",
                    id: "property",
                    url: "./property.html"
                },
                {
                    picA: require("./tabbar2.png"),
                    picActive: require("./tabbar-active2.png"),
                    flag: false,
                    name: "商城",
                    // id: "mall",
                    // url: "./mall.html"
                    id: "mall2",
                    url: "./mall2.html"
                },
                {
                    picA: require("./tabbar1.png"),
                    picActive: require("./tabbar-active1.png"),
                    flag: false,
                    name: "服务",
                    id: "service",
                    url: "./service.html"
                },
                {
                    picA: require("./tabbar4.png"),
                    picActive: require("./tabbar-active4.png"),
                    flag: false,
                    name: "我的",
                    id: "mine",
                    url: "./mine.html"
                }
            ]
        };
    },
    methods: {
        tabbarjump(nav, idx) {
            // 导航点击事件
            if (this.active == idx) return;

            mui.openWindow({
                url: nav.url,
                id: nav.id,
                show: {
                    aniShow: "fade-in",
                    duration: 600
                }
            });
        }
    },
    created() {
        // 判断是不是iphonex系列需要留出底部安全区
        mui.plusReady(() => {
            if (mui.os.ios) {
                var isIPhoneX =
                    window.screen.width === 375 && window.screen.height === 812;
                // iPhone XS Max
                var isIPhoneXSMax =
                    window.screen.width === 414 && window.screen.height === 896;
                // iPhone XR
                var isIPhoneXR =
                    window.screen.width === 414 && window.screen.height === 896;

                if (isIPhoneX || isIPhoneXSMax || isIPhoneXR) {
                    this.isIphoneX = true;
                }
            }
        });
    }
};
</script>
<style>
.ipx-saft {
    width: 100%;
    height: 34px;
    background: #ffffff;
}
</style>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
}
.home-tabbar {
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
    width: 100%;
    box-sizing: border-box;
    position: fixed;
    z-index: 880;
    bottom: 0;
    left: 0;
    background-color: #fff;
    border-top: 1px solid #f5f5f5;
}
ul {
    // box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
    width: 100%;
    box-sizing: border-box;
    padding-top: 5px;
    // position: fixed;
    // z-index: 880;
    // bottom: 0;
    // left: 0;
    // background-color: #fff;
    // border-top: 1px solid #f5f5f5;
    height: 98px;
    li {
        display: inline-block;
        list-style: none;
        width: 20%;
        height: 98px;
        box-sizing: border-box;
        padding-top: 6px;
        p {
            text-align: center;
        }
        .pic {
            width: 100%;
            height: 50px;
            margin-bottom: 2px;
            img {
                display: block;
                width: 48px;
                height: 46px;
                margin: 0 auto;
            }
        }
        .title {
            width: 100%;
            text-align: center;
            color: #666666;
            font-size: 24px;
            line-height: 24px;
        }
        .blueitem {
            width: 100%;
            text-align: center;
            color: #3cc1ff;
            font-size: 24px;
            line-height: 24px;
        }
    }
}
</style>