<template>
  <div class="tags">
    <div class="new">
      <button @click="creat">新增标签</button>
    </div>
    <ul class="current">
      <li
        v-for="(tag, index) in dataSource"
        :key="index"
        @click="toggle(tag)"
        :class="selectTags.indexOf(tag) >= 0 && 'selected'"
      >
        <!-- :class="{selected: selectedTags.indexOf(tag)>=0}" -->
        {{ tag }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import tagListModel from "@/models/tagListModel";
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class Tags extends Vue {
  @Prop(Array) readonly dataSource: string[] | undefined;
  selectTags: string[] = [];
  toggle(tag: string): void {
    const index = this.selectTags.indexOf(tag);
    if (index >= 0) {
      this.selectTags.splice(index, 1);
    } else {
      this.selectTags.push(tag);
    }
    this.$emit("update:value", this.selectTags);
  }
  // @Watch("dataSource")
  // updateValue(newValue: string[]): void {
  //   this.$emit("update:value", newValue);
  // }
  creat(): void {
    const name = window.prompt("请输入标签名");
    if (name) {
      const result = tagListModel.create(name);
      if (result === "seccess") {
        window.alert("创建成功");
      } else if (result === "duplicated") {
        window.alert("标签名重复");
      }
    }
    // if (name === "") {
    //   window.alert("标签名不能为空");
    // } else {
    //   if (this.dataSource && this.dataSource.indexOf(name as string) < 0) {
    //     // this.dataSource.push(name as string) 外部数据不可修改
    //     this.$emit("update:dataSource", [...this.dataSource, name]);

    //   } else {
    //     window.alert("已有相同标签名");
    //   }
    // }
  }
}
</script>

<style lang="scss" scoped>
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
      $bg: #d9d9d9;
      $h: 24px;
      background: $bg;
      height: $h;
      border-radius: calc(24px / 2);
      padding: 0 16px;
      margin-right: 12px;
      line-height: $h;
      margin-top: 8px;
      min-width: 46px;
      text-align: center;
      &.selected {
        background: darken($bg, 30%);
        color: #fff;
      }
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