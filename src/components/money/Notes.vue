<template>
  <div>
    <label class="notes">
      <span class="name">{{ filedName }}</span>
      <input
        type="text"
        :placeholder="placeholder"
        :value="value"
        @input="onValueChang($event.target.value)"
        maxlength="16"
      />
    </label>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class Notes extends Vue {
  @Prop() readonly value!: string;
  @Prop({ required: true }) readonly filedName!: string;
  @Prop() readonly placeholder?: string; // 如果不传是 undefined，所以要用问号
  // value1 = this.value;
  onValueChang(value: string): void {
    this.$emit("update:value", value);
  }
  // @Watch("value")
  // updateValue(newValue: string): void {
  //   this.$emit("update:value", newValue);
  // }
}
</script>

<style lang="scss">
.notes {
  display: flex;
  align-items: center;
  font-size: 14px;
  padding-left: 16px;
  .name {
    padding-right: 16px;
  }
  input {
    height: 40px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
  }
}
</style>