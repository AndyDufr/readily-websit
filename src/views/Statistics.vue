<template>
  <layout>
    <Types :value.sync="value" class-prefix="xx" />
    <!-- <Tabs :dataSource="secondArray" :value.sync="toggleType" /> -->
    <Tabs :dataSource="thirdArray" :value.sync="toggleDate" />
  </layout>
</template>

<script lang="ts">
import Layout from "@/components/Layout.vue";
import Types from "@/components/money/Types.vue";
import Tabs from "@/components/Tabs.vue";
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({
  components: { Layout, Types, Tabs },
})
export default class Statistics extends Vue {
  value = "-";
  secondArray = [
    { text: "收入", value: "+" },
    { text: "支出", value: "-" },
  ];
  thirdArray = [
    { text: "按天", value: "day" },
    { text: "按周", value: "week" },
    { text: "按月", value: "month" },
  ];
  toggleDate = "day";
  toggleType = "-";
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