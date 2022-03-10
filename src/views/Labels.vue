<template>
  <layout>
    <ol class="tags">
      <li v-for="item in tags" :key="item">
        <span>{{ item }}</span>
        <Icon name="right" />
      </li>
    </ol>
    <div class="createTag-wrapper">
      <button class="createTag" @click="createTag">新增标签</button>
    </div>
  </layout>
</template>

<script lang="ts">
import Icon from "@/components/Icon.vue";
import Layout from "@/components/Layout.vue";
import tagListModel from "@/models/tagListModel";

// 每次先提前获取一下| 这句必须在tags定义之前执行
tagListModel.fetch();

import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({ components: { Layout, Icon } })
export default class Labels extends Vue {
  tags = tagListModel.data;
  createTag(): void {
    const name = window.prompt("请输入标签名");
    if (name) {
      const result = tagListModel.create(name);
      if (result === "duplicated") {
        window.alert("标签名重复");
        return;
      } else if (result === "seccess") {
        tagListModel.create(name);
      } else {
        throw new Error("unkown");
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tags {
  background: #fff;
  font-size: 16px;
  padding-left: 16px;
  > li {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
    svg {
      color: #666;
      margin-right: 16px;
      width: 18px;
      height: 18px;
    }
  }
}
.createTag {
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

