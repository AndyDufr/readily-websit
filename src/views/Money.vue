<template>
  <layout class-prefix="xxx">
    <NumberPad />
    <Types />
    <Notes />
    <Tags :dataSource.sync="tags" />
  </layout>
</template>

<script lang="js">
import Layout from "@/components/Layout.vue";
import Tags from '@/components/money/Tags.vue';
import Notes from "@/components/money/Notes.vue";
import Types from "@/components/money/Types.vue";
import NumberPad from "@/components/money/NumberPad.vue";
export default {
  components: { Layout, Tags, Notes, Types, NumberPad },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return {
      tags:['衣','食','住','行','1']
    }
  }
};
</script>

<style lang="scss">
.xxx-wrapper {
  color: inherit;
}
.xxx-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>

