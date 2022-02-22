<template>
  <div>
    <div>当前页面不存在</div>
    <div><router-link to="/">返回首页</router-link></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "NotFound",
});
</script>
