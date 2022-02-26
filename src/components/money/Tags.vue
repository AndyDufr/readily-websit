<template>
  <div class="tags">
    <div class="new">
      <button>新增标签</button>
    </div>
    <ul class="current">
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
    </ul>
  </div>
</template>

<style lang="scss">
@import "~@/assets/style/help.scss";

.tags {
  font-size: 14px;
  padding: 16px;
  display: flex;
  flex-direction: column-reverse;
  flex-grow: 1;
  > .current {
    display: flex;
    flex-wrap: wrap;
    > li {
      $h: 24px;
      background: #d9d9d9;
      height: $h;
      border-radius: calc(24px / 2);
      padding: 0 16px;
      margin-right: 12px;
      line-height: $h;
      margin-top: 4px;
    }
  }
  > .new {
    padding-top: 16px;
    button {
      background: transparent;
      border: none;
      border-bottom: 1px solid;
      padding: 0 5px;
    }
  }
}
</style>