<template>
  <div>
    <label class="notes">
      <span class="name">备注</span>
      <input type="text" placeholder="在这里输入备注" v-model="value1" />
    </label>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Watch, Prop } from "vue-property-decorator";

@Component
export default class Notes extends Vue {
  @Prop() readonly value!: string;
  value1 = this.value;
  @Watch("value1")
  updateValue(newValue: string): void {
    this.$emit("update:value", newValue);
  }
}
</script>

<style lang="scss">
.notes {
  display: flex;
  align-items: center;
  font-size: 14px;
  background: #f5f5f5;
  padding-left: 16px;
  .name {
    padding-right: 16px;
  }
  input {
    height: 64px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
  }
}
</style>