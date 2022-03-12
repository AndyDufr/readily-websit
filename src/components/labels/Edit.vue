<template>
  <layout>
    <div class="navBar">
      <Icon name="left" class="leftIcon" @click.native="goBack" />
      <span class="title">编辑标签</span>
      <span class="rightIcon"></span>
    </div>
    <div class="form-wrapper">
      <Notes
        filedName="标签名"
        placeholder="请输入标签名"
        :value="tagName.name"
        @update:value="updateTag"
      />
    </div>
    <div class="button-wrapper">
      <Button @click.native="removeTag"> 删除标签 </Button>
    </div>
  </layout>
</template>

<script lang="ts">
import tagListModel from "@/models/tagListModel";
import Notes from "@/components/money/Notes.vue";
import Button from "@/components/Button.vue";
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({
  components: { Notes, Button },
})
export default class Edit extends Vue {
  tagName?: { id: string; name: string } = undefined;
  created(): void {
    // 通过 this.$route.id 来获取地址栏中的 id。id 是在路由中的 :id 占位符来定义的
    const id = this.$route.params.id;

    tagListModel.fetch();
    const tags = tagListModel.data;
    // 通过 filter 找出数据库中 标签的 id 和地址栏的 id 一样的标签
    const tag = tags.filter((item) => item.id === id)[0];
    if (tag) {
      console.log(tag);
      this.tagName = tag;
    } else {
      this.$router.replace("/404");
    }
  }
  updateTag(name: string): void {
    if (this.tagName) tagListModel.updateTag(this.tagName.id, name);
  }
  removeTag(): void {
    if (this.tagName) tagListModel.removeTag(this.tagName.id);
    this.$router.replace("/labels");
  }
  goBack(): void {
    this.$router.back();
  }
}
</script>
<style lang="scss" scoped>
.navBar {
  text-align: center;
  font-size: 16px;
  padding: 12px 16px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > .leftIcon {
    width: 24px;
    height: 24px;
  }
  > .rightIcon {
    width: 24px;
    height: 24px;
  }
}
.form-wrapper {
  background: #fff;
  margin-top: 8px;
}
.button-wrapper {
  text-align: center;
  padding: 16px;
  margin-top: 44-16px;
}
</style>