<template>
  <layout>
    <div class="view">
      <div class="header">
        <Types :value.sync="value" class-prefix="xx" />
        <!-- <Tabs :dataSource="secondArray" :value.sync="toggleType" /> -->
        <Tabs :dataSource="toggleDate" :value.sync="interval" />
      </div>

      <ol class="main">
        <li v-for="(group, index) in result" :key="index">
          <h3 class="title">{{ beautify(group.title) }}</h3>
          <ol>
            <li v-for="item in group.items" :key="item.id" class="record">
              <span>{{ item.tags[0].name }}</span>
              <span :style="{ marginRight: 'auto' }" class="notesStatistics">{{
                item.notes === "" ? "无备注" : item.notes
              }}</span>
              ￥{{ item.amount }}
            </li>
          </ol>
        </li>
      </ol>
    </div>
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
import dayjs from "dayjs";
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
    type HashTabelValue = { title: string; items: RecordItem[] };
    const hashTabel: { [key: string]: HashTabelValue } = {};
    for (let i = 0; i < recordList.length; i++) {
      const date = recordList[i].time?.split("T")[0];
      if (date) {
        // 初始化
        hashTabel[date] = hashTabel[date] || { title: date, items: [] };
        hashTabel[date].items.push(recordList[i]);
      }
    }
    return hashTabel;
  }
  value = "-";
  // secondArray = [
  //   { text: "收入", value: "+" },
  //   { text: "支出", value: "-" },
  // ];
  interval = "day";
  toggleDate = toggleDate;
  // toggleType = "-";
  beautify(string: string): string {
    // const now = new Date();
    // const y = now.getFullYear();
    // const m = now.getMonth() + 1;
    // const d = now.getDay();
    // const record = new Date(Date.parse(string));
    // if (
    //   record.getFullYear() === y &&
    //   record.getMonth() + 1 === m &&
    //   record.getDay() === d
    // ) {
    //   return "今天";
    // } else {
    //   return string;
    // }
    const api = dayjs(string);
    const now = new Date();
    if (api.isSame(now, "day")) {
      return "今天";
    } else if (api.isSame(now.valueOf() - 86400 * 1000, "day")) {
      return "昨天";
    } else if (api.isSame(now.valueOf() - 86400 * 1000 * 2, "day")) {
      return "前天";
    } else {
      return dayjs(string).format("YYYY年MM月DD日");
    }
  }
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
.titlt {
  @extend %item;
}
.record {
  background: #fff;
  @extend %item;
}
%item {
  padding: 8px 16px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.notesStatistics {
  margin-right: auto;
  margin-left: 12px;
  color: #999;
}
.view {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 100%;
  height: 100%;
}
// .header {

// }
.main {
  overflow: auto;
}
</style>