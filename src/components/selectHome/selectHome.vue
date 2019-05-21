<template>
    <div class="selectHome mui-backdrop">
        <div class="wrapper">
            <!-- 头部请选择区域 -->
            <div class="header">
                <span>请选择</span>
                <div @click="tapClose" class="close">
                    <span class="mui-icon mui-icon-closeempty"></span>
                </div>
            </div>
            <!-- 已选择内容 -->
            <div class="result">
                <div class="status">
                    <div v-if="selectArr[0]" class="icon"></div>
                    <div v-if="selectArr[0]" class="icon"></div>
                    <div v-if="selectArr[1]" class="icon"></div>
                    <div v-if="selectArr[2]" class="icon"></div>
                </div>
                <div v-if="selectArr[0]" class="item">
                    <span>{{selectArr[0].name}}</span>
                </div>
                <div v-if="selectArr[1]" class="item">
                    <span>{{selectArr[1].name}}栋</span>
                </div>
                <div v-if="selectArr[2]" class="item">
                    <span>{{selectArr[2].name}}单元</span>
                </div>
                <div v-if="selectArr[0]" class="item">
                    <span>{{getTitle(selectArr.length)}}</span>
                </div>
            </div>
            <!-- 内容选择区域 -->
            <div class="select">
                <div class="title">{{getTitle(selectArr.length)}}</div>
                <div class="content">
                    <div class="content-scroll">
                        <div
                            class="item"
                            @click="tapSelect(item)"
                            v-for="(item, index) in allSelect"
                            :key="index"
                        >{{item.name || item}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from "better-scroll";
import mui from "src/public/js/mui.min.js";
import api from "src/config/api";
import http from "src/util/ajax";
import store from "src/store";

export default {
    data() {
        return {
            selectArr: [], // 用户选择的信息
            allSelect: [] // 当前所有可查询的数据
        };
    },
    methods: {
        // 获取标题
        getTitle(len) {
            if (len == 0) {
                return "请选择小区";
            } else if (len == 1) {
                return "请选择楼栋";
            } else if (len == 2) {
                return "请选择单元";
            } else if (len == 3) {
                return "请选择门牌号";
            }
        },
        // 初始化选择区域滚动
        initSelectScroll() {
            this.selectScroll = new BScroll(".selectHome .content", {
                click: true
            });
        },
        // 关闭按钮点击事件
        tapClose() {
            // 重新查询
            this.getAllSq();
            this.$emit("close");
        },
        tapSelect(item) {
            // 获取当前步骤
            var len = this.selectArr.length;
            if (len == 0) {
                // 选小区
                this.selectArr.push(item);
                // 查询小区楼栋
                this.getAllLd();
            } else if (len == 1) {
                // 选择楼栋
                this.selectArr.push({
                    id: item,
                    name: item
                });
                // 查询所有单元
                this.getAllDy();
            } else if (len == 2) {
                // 选择单元
                this.selectArr.push({
                    id: item,
                    name: item
                });
                // 查询所有门牌
                this.getAllMp();
            } else if (len == 3) {
                // 用户已经选择了门牌号
                this.selectArr.push({
                    id: item,
                    name: item
                });
                // 触发选择结束事件
                let selectArr = this.selectArr;
                this.$emit("select", selectArr);
                this.allSelect = [];
                this.selectScroll.refresh();
                // 重新查询社区小区信息
                this.getAllSq();
            }
        },
        // 查询所有社区
        getAllSq() {
            // 每次重新查社区之后清一遍用户的选择
            this.selectArr = [];
            0;
            http({
                url: api.communitylist,
                data: {
                    userId: store.getUser().userId,
                    token: store.getUser().token,
                    lng: "104.092382",
                    lat: "30.680238",
                    p: 0,
                    sum: 9999
                }
            }).then(res => {
                if (res.code == 2001) {
                    this.allSelect = res.data.community_list;
                }
            });
        },
        // 查询所有楼栋
        getAllLd() {
            http({
                url: api.getPublicAddr,
                data: {
                    userId: store.getUser().userId,
                    token: store.getUser().token,
                    community: this.selectArr[0].community_id
                }
            }).then(res => {
                if (res.code == 2001) {
                    this.allSelect = res.data;
                } else {
                    mui.toast("当前小区暂无楼栋信息");
                    setTimeout(() => {
                        this.tapClose();
                    }, 1000);
                }
            });
        },
        // 查询所有单元
        getAllDy() {
            http({
                url: api.getPublicAddr,
                data: {
                    userId: store.getUser().userId,
                    token: store.getUser().token,
                    community: this.selectArr[0].community_id,
                    building: this.selectArr[1].id
                }
            }).then(res => {
                if (res.code == 2001) {
                    this.allSelect = res.data;
                } else {
                    mui.toast("当前小区暂无单元信息");
                    setTimeout(() => {
                        this.tapClose();
                    }, 1000);
                }
            });
        },
        // 查询所有门牌
        getAllMp() {
            http({
                url: api.getPublicAddr,
                data: {
                    userId: store.getUser().userId,
                    token: store.getUser().token,
                    community: this.selectArr[0].community_id,
                    building: this.selectArr[1].id,
                    unit: this.selectArr[2].id
                }
            }).then(res => {
                if (res.code == 2001) {
                    this.allSelect = res.data;
                } else {
                    mui.toast("当前小区暂无门牌信息");
                    setTimeout(() => {
                        this.tapClose();
                    }, 1000);
                }
            });
        }
    },
    created() {
        mui.plusReady(() => {
            // 查询所有社区
            this.getAllSq();
        });
    },
    mounted() {
        this.$nextTick(() => {
            this.initSelectScroll();
        });
    }
};
</script>

<style lang="scss" scoped>
.selectHome {
    .wrapper {
        position: fixed;
        z-index: 997;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
        .header {
            position: relative;
            width: 100%;
            height: 96px;
            line-height: 96px;
            text-align: center;
            background: #ffffff;
            font-size: 34px;
            color: #333333;
            .close {
                position: absolute;
                top: 0;
                right: 0;
                width: 96px;
                height: 96px;
                text-align: center;
                line-height: 96px;
                color: #999999;
                font-weight: 600;
            }
        }
        .result {
            background: #ffffff;
            padding: 0 30px;
            position: relative;
            .status {
                position: absolute;
                top: 12px;
                left: 30px;
                font-size: 0;
                .icon {
                    background: url(./img_top.png) no-repeat;
                    background-size: 100% 100%;
                    width: 12px;
                    height: 111px;
                }
                & .icon:last-child {
                    background: url(./img_bottom.png) no-repeat;
                    background-size: 100% 100%;
                    width: 12px;
                    height: 21px;
                }
            }
            .item {
                height: 110px;
                font-size: 32px;
                color: #333333;
                padding-left: 44px;
            }
            & .item:last-child {
                color: #40c3ff;
            }
        }
        .select {
            padding: 0 30px;
            background: #f9f9f9;
            .title {
                height: 110px;
                line-height: 110px;
                font-size: 32px;
                color: #666666;
            }
            .content {
                height: 400px;
                overflow: hidden;
                .content-scroll {
                    padding-bottom: 20px;
                    .item {
                        font-size: 32px;
                        margin-bottom: 40px;
                    }
                }
            }
        }
    }
}
</style>
