<script setup lang="ts" name="SubMenu">
import MenuItem from "./MenuItem.vue";
import type { AppMenu } from "@/router/types";

interface Props {
  menuItem: AppMenu;
}
defineProps<Props>();
</script>

<template>
  <el-sub-menu :index="menuItem.path" :title="menuItem.name" class="aside-sub-menu">
    <template #title>
      <IconView :iconConfig="{ size: 20 }" :icon="menuItem.icon" />
      {{ menuItem.name }}
    </template>

    <template v-for="subMenu in menuItem.children" :key="subMenu.path">
      <SubMenu
        v-if="!!subMenu.children?.length"
        :menuItem="{ ...subMenu, path: `${menuItem.path}/${subMenu.path}` }"
      />
      <MenuItem v-else :index="`${menuItem.path}/${subMenu.path}`" :menuItem="subMenu" />
    </template>
  </el-sub-menu>
</template>

<style lang="less">
.aside-sub-menu {
  .aside-menu-item {
    margin-left: 8px;
    color: #8c8c8c;
    border-radius: 6px;

    &.is-active {
      color: #fff;
    }
  }

  .el-sub-menu__title {
    border-radius: 6px;
  }
}
</style>
