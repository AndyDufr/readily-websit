<template>
  <layout>
    <div>
      <Icon name="left" />
      <span>编辑标签</span>
    </div>
    <Notes
      filedName="标签名"
      placeholder="请输入标签名"
      :value.sync="tagName"
    />
  </layout>
</template>

<script lang="ts">
import tagListModel from "@/models/tagListModel";
import Notes from "@/components/money/Notes.vue";
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({
  components: { Notes },
})
export default class Edit extends Vue {
  created(): void {
    // 通过 this.$route.id 来获取地址栏中的 id。id 是在路由中的 :id 占位符来定义的
    const id = this.$route.params.id;

    tagListModel.fetch();
    const tags = tagListModel.data;
    // 通过 filter 找出数据库中 标签的 id 和地址栏的 id 一样的标签
    const tag = tags.filter((item) => item.id === id)[0];
    if (tag) {
      console.log(tag);
    } else {
      this.$router.replace("/404");
    }
  }
}
</script>