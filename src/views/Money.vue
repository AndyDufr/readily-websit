<template>
  <layout class-prefix="xxx">
    <NumberPad :value.sync="record.amount" @update:submit="submit" />
    <Types :value.sync="record.type" />
    <div class="notes">
      <Notes
        :value="record.notes"
        filedName="备注"
        placeholder="请输入备注"
        @update:value="onUpdateNotes"
      />
    </div>
    <Tags
      :dataSource.sync="tags"
      @update:value="onUpdateTags"
      :value="record.tags"
    />
    <van-overlay :show="show" @click="show = false">
      <div class="wrapper">
        <div class="block">
          <img src="@/assets/qrcode.png" alt="" />
        </div>
      </div>
    </van-overlay>
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
import store from "@/store/myStore";
@Component({
  components: { Tags, Notes, Types, NumberPad },
})
export default class Money extends Vue {
  show = true;
  tags = tagListModel.fetch();
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  // get recordList1() {
  //   return store.recordList;
  // }
  recordList = store.recordList;
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
    store.create(this.record);
    this.record.tags = [];
    this.record.notes = "";
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
.wrapper {
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
  justify-content: center;
  height: 100%;
  z-index: 99999;
}

.block {
  width: 120px;
  height: 120px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  > img {
    width: 120px;
    height: 120px;
  }
}
</style>

