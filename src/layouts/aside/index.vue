<script setup lang="ts">
import { isEmpty } from "lodash-es";
import { useRoute } from "vue-router";
import MenuItem from "./components/MenuItem.vue";
import SubMenu from "./components/SubMenu.vue";
import { getMenus } from "@/router/menus";

const route = useRoute();
const appMenus = getMenus();
const activeMenu = computed(() => (route.meta.activeMenu as string) || route.path);
</script>

<template>
  <el-aside class="aside-wrapper">
    <el-menu class="aside-el-menu" :defaultActive="activeMenu" router collapseTransition>
      <template v-for="menu in appMenus" :key="menu.path">
        <MenuItem v-if="isEmpty(menu.children)" :menuItem="menu" />
        <SubMenu v-else :index="menu.path" :title="menu.name" :menuItem="menu" />
      </template>
    </el-menu>
  </el-aside>
</template>

<style lang="less">
.aside-wrapper {
  width: 200px;
  height: 100%;

  --el-menu-bg-color: #fff;
  --el-menu-text-color: #262626;
  --el-menu-active-color: #4d98fe;

  .aside-el-menu {
    height: 100%;
    padding: 5px 8px;
    border: none;
  }
}
</style>
