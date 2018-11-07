<template>
  <header id="header" class="mui-bar mui-bar-nav">
      <h1 class="mui-title">
        <slot></slot>
      </h1>
      <a v-if="back" class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
      <slot name="extend"></slot>
  </header>
</template>

<script>
export default {
  props: {
    back: {
      type: Boolean,
      default: false
    }
  }
}
</script>
