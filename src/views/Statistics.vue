<template>
  <layout>
    <Types class="x" :value.sync="value" />
  </layout>
</template>

<script lang="ts">
import Layout from "@/components/Layout.vue";
import Types from "@/components/money/Types.vue";
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({
  components: { Layout, Types },
})
export default class Statistics extends Vue {
  value = "-";
}
</script>

<style lang="scss" scoped>
.x ::v-deep li {
  background: #fff;
  &.selected {
    background: #c4c4c4;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: #fff;
    }
  }
}
</style>