<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import "~@/assets/style/help.scss";
@import "~@/assets/style/reset.scss";

#app {
  font-family: $font-hei;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #444;
  max-width: 500px;
  margin: 0 auto;
}
</style>
