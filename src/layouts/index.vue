<script setup lang="ts">
import LayoutHeader from "./header/index.vue";
import LayoutAside from "./aside/index.vue";
import LayoutMain from "./main/index.vue";
</script>

<template>
  <div class="app-container flex-column h-full">
    <LayoutHeader />
    <div class="content-wrapper flex items-start">
      <LayoutAside />
      <LayoutMain />
    </div>
  </div>
</template>

<style lang="less" scoped>
.content-wrapper {
  height: calc(100% - 60px);
  margin-top: 2px;
}
</style>
