<template>
  <div ref="container"></div>
</template>

<script>
import echarts from "echarts";
export default {
  props: ["option"],
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  mounted() {
    const width = document.documentElement.clientWidth;
    this.$refs.container.style.width = `${width}px`;
    this.$refs.container.style.height = `${(width - 20) * 1.2}px`;
    this.chart = echarts.init(this.$refs.container, "default");
    this.chart.setOption(this.option);
  },
  watch: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    option() {
      this.chart.setOption(this.option);
    },
  },
};
</script>