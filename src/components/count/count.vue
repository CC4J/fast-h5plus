<template>
    <div class="count-wrapper">
        <div class="wrapper">
            <div @click="tapReduce" class="reduce">-</div>
            <div class="count">{{count}}</div>
            <div @click="tapPlus" class="plus">+</div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["count"],
    methods: {
        // 点击减1
        tapReduce() {
            if (this.count == 1) return;
            this.$emit("reduce");
        },
        // 点击加1
        tapPlus() {
            this.$emit("plus");
        }
    }
};
</script>

<style lang="scss" scoped>
.count-wrapper {
    .wrapper {
        width: 162px;
        height: 46px;
        font-size: 30px;
        color: #666666;
        border: 2px solid #e0e0e0;
        display: flex;
        border-radius: 2px;
        .reduce {
            width: 42px;
            text-align: center;
            line-height: 46px;
            border-right: 2px solid #e0e0e0;
        }
        .count {
            width: 74px;
            text-align: center;
            line-height: 46px;
        }
        .plus {
            width: 42px;
            text-align: center;
            line-height: 46px;
            border-left: 2px solid #e0e0e0;
        }
    }
}
</style>
