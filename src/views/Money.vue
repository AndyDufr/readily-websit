<template>
  <layout class-prefix="xxx">
    <NumberPad :value.sync="record.amount" @update:submit="submit" />
    <Types :value.sync="record.type" />
    <div class="notes">
      <Notes
        :value.sync="record.notes"
        filedName="备注"
        placeholder="请输入备注"
      />
    </div>
    <Tags :dataSource.sync="tags" @update:value="onUpdateTags" />
  </layout>
</template>

<script lang="ts">
import Vue from "vue";
import Tags from "@/components/money/Tags.vue";
import Notes from "@/components/money/Notes.vue";
import Types from "@/components/money/Types.vue";
import NumberPad from "@/components/money/NumberPad.vue";
import tagListModel from "@/models/tagListModel";
import { Component } from "vue-property-decorator";

@Component({
  components: { Tags, Notes, Types, NumberPad },
})
export default class Money extends Vue {
  tags = tagListModel.fetch();
  recordList = window.store.recordList;
  record: RecordItem = {
    tags: [],
    notes: "",
    type: "-",
    amount: 0,
  };

  onUpdateNotes(value: string): void {
    this.record.notes = value;
  }
  onUpdateTags(value: string[]): void {
    this.record.tags = value;
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
    window.store.create(this.record);
  }
  // @Watch("recordList")  因为所有操作都已经被封装了，所以不需要监听？？
  // onRecordListChange(): void {
  //   window.save();
  // }
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
<style lang="scss" scoped>
.notes {
  padding: 12px 0;
}
</style>

