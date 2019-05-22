<template>
    <div class="smallMenu">
        <img @click="tapMenu('order')" v-if="menuList.order.show" src="./img_order.png">
        <span v-if="menuList.order.show"></span>

        <img @click="tapMenu('signin')" v-if="menuList.signin.show" src="./img_qiandao.png">
        <span v-if="menuList.signin.show"></span>

        <img @click="tapMenu('search')" v-if="menuList.search.show" src="./img_search.png">
        <span v-if="menuList.search.show"></span>

        <img @click="tapMenu('message')" v-if="menuList.message.show" src="./img_msg.png">
        <span v-if="menuList.message.show"></span>

        <img @click="tapMenu('cart')" v-if="menuList.cart.show" src="./img_cart.png">
        <span v-if="menuList.cart.show"></span>
    </div>
</template>

<script>
import mui from "src/public/js/mui.min.js";
import orderType from "src/config/orderType.js";
export default {
    props: ["hide"],
    created() {
        for (var i = 0; i < this.hide.length; i++) {
            var key = this.hide[i];
            this.menuList[key].show = false;
        }
    },
    data() {
        return {
            menuList: {
                order: {
                    show: true
                },
                signin: {
                    show: true
                },
                search: {
                    show: true
                },
                message: {
                    show: true
                },
                cart: {
                    show: true
                }
            }
        };
    },
    methods: {
        tapMenu(name) {
            var menuList = {
                order: {
                    url: "./myOrder.html",
                    id: "myOrder",
                    extras: {
                        type: orderType.DFK_KEY
                    }
                },
                signin: {
                    url: "./signin.html",
                    id: "signin"
                },
                // search: {
                //     url: './search.html',
                //     id: 'search'
                // },
                message: {
                    url: "./linli.html",
                    id: "linli"
                },
                cart: {
                    url: "./cart.html",
                    id: "cart"
                }
            };
            if (menuList[name]) {
                mui.openWindow(menuList[name]);
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.smallMenu {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    img {
        width: 32px;
        height: 32px;
        margin: 0 26px;
    }
    span {
        width: 2px;
        height: 26px;
        background: #fff;
    }
    & span:last-child {
        width: 0;
    }
}
</style>
