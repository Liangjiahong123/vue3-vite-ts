<script setup lang="ts">
import type { AppMenu } from "@/router/types";

interface Props {
  menuItem: AppMenu;
}
defineProps<Props>();
</script>

<template>
  <el-menu-item :index="menuItem.path" class="aside-menu-item">
    <slot>
      <IconView v-if="menuItem.icon" :iconConfig="{ size: 20 }" :icon="menuItem.icon" />
      {{ menuItem.name }}
    </slot>
  </el-menu-item>
</template>

<style lang="less">
.aside-menu-item {
  border-radius: 6px;

  &.is-active {
    color: #fff;
    background-color: #4d98fe;
  }
}
</style>
