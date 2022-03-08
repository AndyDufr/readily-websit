<template>
  <layout class-prefix="xxx">
    <NumberPad :value.sync="record.amount" @update:submit="submit" />
    <Types :value.sync="record.type" />
    <Notes :value.sync="record.notes" />
    <Tags :dataSource.sync="tags" @update:value="onUpdateTags" />
    {{ record }}
  </layout>
</template>

<script lang="ts">
import Vue from "vue";
import Layout from "@/components/Layout.vue";
import Tags from "@/components/money/Tags.vue";
import Notes from "@/components/money/Notes.vue";
import Types from "@/components/money/Types.vue";
import NumberPad from "@/components/money/NumberPad.vue";

type Record = {
  tags: string[];
  notes: string;
  type: "-" | "+";
  amount: number;
  time?: Date;
};

import { Component } from "vue-property-decorator";
@Component({
  components: { Layout, Tags, Notes, Types, NumberPad },
})
export default class Money extends Vue {
  tags = ["衣", "食", "住", "行"];
  record: Record = {
    tags: [],
    notes: "",
    type: "-",
    amount: 0,
  };
  recordList: Record[] = JSON.parse(
    window.localStorage.getItem("recordList") || "[]"
  );
  onUpdateTags(value: string[]): void {
    this.record.tags = value;
  }
  onUpdateNotes(value: string): void {
    this.record.notes = value;
  }

  submit(): void {
    this.record.time = new Date();
    // 此处必须要对源数据进行深拷贝之后再存入数据库
    const recordDeepCope = JSON.parse(JSON.stringify(this.record));
    this.recordList.push(recordDeepCope);
    window.localStorage.setItem("recordList", JSON.stringify(this.recordList));
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

