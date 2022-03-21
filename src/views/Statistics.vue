<template>
  <layout>
    <Types :value.sync="value" class-prefix="xx" />
    <!-- <Tabs :dataSource="secondArray" :value.sync="toggleType" /> -->
    <Tabs :dataSource="toggleDate" :value.sync="interval" />
    <ol>
      <li v-for="item in result" :key="item.id">
        {{ item }}
      </li>
    </ol>
  </layout>
</template>

<script lang="ts">
import Layout from "@/components/Layout.vue";
import Types from "@/components/money/Types.vue";
import Tabs from "@/components/Tabs.vue";
import toggleDate from "@/constants/toggleDate";
import store from "@/store/myStore";
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({
  components: { Layout, Types, Tabs },
})
export default class Statistics extends Vue {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  get recordList() {
    return store.recordList;
  }
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  get result() {
    const { recordList } = this;
    const hashTabel = {};
    for (let i = 0; i < recordList.length; i++) {
      console.log(recordList[i].time);
    }
    return [];
  }
  value = "-";
  // secondArray = [
  //   { text: "收入", value: "+" },
  //   { text: "支出", value: "-" },
  // ];
  interval = "day";
  toggleDate = toggleDate;
  // toggleType = "-";
}
</script>

<style lang="scss" scoped>
::v-deep .xx-item {
  background: #c4c4c4;
  &.selected {
    background: #fff;
    color: red;
    &::after {
      display: none;
    }
  }
}
</style>