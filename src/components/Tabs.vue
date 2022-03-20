<template>
  <div>
    <ul class="tabTypes">
      <li
        v-for="item in dataSource"
        :key="item.value"
        @click="select(item)"
        :class="{
          selected: item.value === value,
        }"
      >
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class Types extends Vue {
  @Prop({ type: Array, required: true }) readonly dataSource!: DataSourceItem[];
  @Prop(String) readonly value!: string;
  @Prop(String) readonly classPrefix?: string;
  select(item: DataSourceItem): void {
    this.$emit("update:value", item.value);
  }
}
</script>
<style lang="scss" scoped>
.tabTypes {
  background: #c4c4c4;
  display: flex;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  > li {
    width: 50%;
    display: flex;
    height: 64px;
    justify-content: center;
    align-items: center;
    position: relative;
    &.selected {
      background: #fff;
      color: red;
    }
  }
}
</style>