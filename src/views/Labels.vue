<template>
  <layout>
    <div class="tags">
      <router-link
        class="tag"
        v-for="item in tags"
        :key="item.id"
        :to="`/labels/edit/${item.id}`"
      >
        <span>{{ item.name }}</span>
        <Icon name="right" />
      </router-link>
    </div>
    <div class="createTag-wrapper">
      <!-- <button @click="createTag" class="createTag">新增标签1</button> -->
      <Button @click.native="createTag" class="createTag">新增标签</Button>
    </div>
  </layout>
</template>

<script lang="ts">
import Icon from "@/components/Icon.vue";
import Layout from "@/components/Layout.vue";
import Button from "@/components/Button.vue";

import Vue from "vue";
import { Component } from "vue-property-decorator";
import tagListModel from "@/models/tagListModel";
@Component({ components: { Layout, Icon, Button } })
export default class Labels extends Vue {
  tags = tagListModel.fetch();
  createTag(): void {
    // const name = window.prompt("请输入标签名");
    // if (name) {
    //   const result = tagListModel.create(name);
    //   if (result === "duplicated") {
    //     window.alert("标签名重复");
    //   } else if (result === "seccess") {
    //     window.alert("添加成功");
    //   }
    // } else {
    //   window.alert("标签名不能为空");
    // }
    const name = window.prompt("请输入标签名");
    if (name) {
      window.store.createTag(name);
    }
  }
}
</script>

<style lang="scss" scoped>
.tags {
  background: #fff;
  font-size: 16px;
  padding-left: 16px;
  > .tag {
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

