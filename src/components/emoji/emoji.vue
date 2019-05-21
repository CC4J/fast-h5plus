<template>
    <div class="emoji">
        <div class="emoji-content">
            <div class="cnt" v-show="activeType == 0">
                <span
                    @click="tapEmoji(emoji.img)"
                    class="emoji-item"
                    v-for="emoji in icons.emojiList.emoji"
                    :key="emoji.img"
                >
                    <img :src="emoji.img" alt>
                </span>
            </div>
            <div class="cnt" v-show="activeType == 1">
                <span
                    class="emoji-item pinup-item"
                    v-for="ajmd in icons.pinupList.ajmd"
                    :key="ajmd.img"
                    @click="tapEmoji(ajmd.img)"
                >
                    <img :src="ajmd.img" alt>
                </span>
            </div>
            <div class="cnt" v-show="activeType == 2">
                <span
                    class="emoji-item pinup-item"
                    v-for="xxy in icons.pinupList.xxy"
                    :key="xxy.img"
                    @click="tapEmoji(xxy.img)"
                >
                    <img :src="xxy.img" alt>
                </span>
            </div>
            <div class="cnt" v-show="activeType == 3">
                <span
                    @click="tapEmoji(lt.img)"
                    class="emoji-item pinup-item"
                    v-for="lt in icons.pinupList.lt"
                    :key="lt.img"
                >
                    <img :src="lt.img" alt>
                </span>
            </div>
        </div>
        <div class="emoji-menu">
            <span class="emoji-album" @click="tapType(0)" :class="{active: activeType == 0}">
                <img :src="icons.emojiList.emoji['[大笑]'].img" alt>
            </span>
            <span class="emoji-album" @click="tapType(1)" :class="{active: activeType == 1}">
                <img :src="icons.pinupList.ajmd.ajmd001.img" alt>
            </span>
            <span class="emoji-album" @click="tapType(2)" :class="{active: activeType == 2}">
                <img :src="icons.pinupList.xxy.xxy001.img" alt>
            </span>
            <span class="emoji-album" @click="tapType(3)" :class="{active: activeType == 3}">
                <img :src="icons.pinupList.lt.lt001.img" alt>
            </span>
        </div>
    </div>
</template>

<script>
import icons from "src/config/emoji.js";
export default {
    data() {
        return {
            icons,
            activeType: 0
        };
    },
    methods: {
        // 表情类型选择
        tapType(idx) {
            if (idx == this.activeType) return;
            this.activeType = idx;
        },
        // 选择表情
        tapEmoji(img) {
            this.$emit("emoji", img);
        }
    }
};
</script>

<style lang="scss" scoped>
.emoji {
    border-top: 2px solid #e2e2e2;
    transition: all 0.2s;
    .emoji-content {
        position: relative;
        width: 100%;
        height: 10rem;
        background-color: #f0f0f0;
        overflow-y: auto;
        .cnt {
            width: 600px;
            position: relative;
            display: block;
            margin: 8px auto;
            text-align: left;
            .emoji-item {
                display: inline-block;
                width: 70px;
                height: 70px;
                padding: 4px;
                vertical-align: middle;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .pinup-item {
                width: 100px;
                height: 100px;
            }
        }
    }
    .emoji-menu {
        position: relative;
        width: 100%;
        height: auto;
        padding: 0 32px;
        background: #ffffff;
        font-size: 0;
        .emoji-album {
            display: inline-block;
            width: 64px;
            height: 64px;
            text-align: center;
            line-height: 64px;
            border-right: 2px solid #f0f0f0;
            img {
                vertical-align: top;
                width: 60px;
                height: 60px;
            }
            &.active {
                background-color: #f0f0f0;
            }
        }
    }
}
</style>
