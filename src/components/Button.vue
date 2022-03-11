<template>
  <!-- <button class="button" @click="$emit('click', $event)"> 如果外面不用 .native  里面就要用这种方式将事件传递出去-->
  <button class="button">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.button {
  background: #767676;
  color: #fff;
  border-radius: 4px;
  border: none;
  padding: 0 16px;
  height: 40px;
  // &-wrapper 表示 createTag 的父元素
  &-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
}
</style>