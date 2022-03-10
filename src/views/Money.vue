<template>
  <layout class-prefix="xxx">
    <NumberPad :value.sync="record.amount" @update:submit="submit" />
    <Types :value.sync="record.type" />
    <Notes :value.sync="record.notes" />
    <Tags :dataSource.sync="tags" @update:value="onUpdateTags" />
  </layout>
</template>

<script lang="ts">
import Vue from "vue";
import Layout from "@/components/Layout.vue";
import Tags from "@/components/money/Tags.vue";
import Notes from "@/components/money/Notes.vue";
import Types from "@/components/money/Types.vue";
import NumberPad from "@/components/money/NumberPad.vue";
import recordListModel from "@/models/recordList";
import tagListModel from "@/models/tagListModel";
import { Component, Watch } from "vue-property-decorator";
@Component({
  components: { Layout, Tags, Notes, Types, NumberPad },
})
export default class Money extends Vue {
  tags = tagListModel.fetch();
  record: RecordItem = {
    tags: [],
    notes: "",
    type: "-",
    amount: 0,
  };
  recordList = recordListModel.fetch();
  onUpdateTags(value: string[]): void {
    this.record.tags = value;
  }
  onUpdateNotes(value: string): void {
    this.record.notes = value;
  }

  submit(): void {
    if (this.record.tags.length === 0) {
      window.alert("请至少选择一个标签");
      return;
    }
    if (this.record.amount.toString() === "0.") {
      window.alert("请输入正确的金额");
      return;
    }
    this.record.time = new Date();
    // 此处必须要对源数据进行深拷贝之后再存入数据库
    const recordDeepCope = recordListModel.deepCope(this.record);
    this.recordList.push(recordDeepCope);
  }
  @Watch("recordList")
  onRecordListChange(): void {
    recordListModel.save(this.recordList);
  }
}
</script>

<style lang="scss">
.xxx-wrapper {
  color: inherit;
}
.xxx-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>

