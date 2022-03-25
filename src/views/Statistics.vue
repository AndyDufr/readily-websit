<template>
  <layout>
    <div class="view">
      <div class="header">
        <Types :value.sync="value" class-prefix="xx" />
        <!-- <Tabs :dataSource="secondArray" :value.sync="toggleType" /> -->
        <!-- <Tabs :dataSource="toggleDate" :value.sync="interval" /> -->
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
import { Component, Watch } from "vue-property-decorator";
import dayjs from "dayjs";
import deepCope from "@/lib/deepCope";
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
    /* 思路：hashTabel 是一个对象，对象并不能保证他的顺序，所以将其改为数组
        1. 创建数组前，将数据源拷贝并以今天昨天前天的顺序依次排序
        2. 初始化数组，将排序后的数组最近的一天放入 groupListTabel
        3. 便利剩下的数据(从 1 开始)，分别对每一项的时间和 groupListTabel 最后一项的 title 对比，
        是同一天，就放到 items 里，不是同一天，就新加一个 {titile:xx,items:xx} 的对象

    */
    const { recordList } = this;
    if (recordList.length === 0) return [];
    let recordListSort = deepCope(recordList)
      .filter((r) => {
        return r.type === this.value;
      })
      .sort((a, b) => {
        return dayjs(b.time).valueOf() - dayjs(a.time).valueOf();
      });

    type GroupListTabel = { title: string; items: RecordItem[] };

    // 初始化
    const groupListTabel: GroupListTabel[] = [
      {
        title: dayjs(recordListSort[0].time).format("YYYY-MM-DD"),
        items: [recordListSort[0]],
      },
    ];
    for (let i = 1; i < recordListSort.length; i++) {
      const next = recordListSort[i];
      const last = groupListTabel[groupListTabel.length - 1];
      if (dayjs(last.title).isSame(dayjs(next.time), "day")) {
        last.items.push(next);
      } else {
        groupListTabel.push({
          title: dayjs(recordListSort[i].time).format("YYYY-MM-DD"),
          items: [recordListSort[i]],
        });
      }
    }
    return groupListTabel;
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
      if (dayjs(string).isSame(dayjs(), "year")) {
        return dayjs(string).format("MM月DD日");
      } else {
        return dayjs(string).format("YYYY年MM月DD日");
      }
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