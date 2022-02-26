<template>
  <nav>
    <router-link to="/money" active-class="light" class="link"
      ><Icon name="home" /> 记账
    </router-link>
    <router-link to="/labels" active-class="light" class="link"
      ><Icon name="labels" /> 标签
    </router-link>
    <router-link to="/statistics" active-class="light" class="link"
      ><Icon name="statistics" /> 统计
    </router-link>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";
import Icon from "./Icon.vue";

export default Vue.extend({
  components: { Icon },
});
</script>

<style lang="scss" scoped>
@import "~@/assets/style/help.scss";
nav {
  display: flex;
  box-shadow: 0 0 3px $color-shadow;
  justify-content: space-around;
  font-size: 12px;
  letter-spacing: 2px;

  > .link {
    width: 33.3333%;
    padding: 3px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .icon {
    height: 32px;
    width: 32px;
  }
  .light {
    color: red;
    background-color: #f5f5f5;
  }
}
</style>