<template>
  <layout class-prefix="xxx">
    <NumberPad />
    <Types />
    <Notes />
    <Tags />
  </layout>
</template>

<script lang="ts">
import Layout from "@/components/Layout.vue";
import Tags from "@/components/money/Tags.vue";
import Notes from "@/components/money/Notes.vue";
import Types from "@/components/money/Types.vue";
import NumberPad from "@/components/money/NumberPad.vue";
export default {
  components: { Layout, Tags, Notes, Types, NumberPad },
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

