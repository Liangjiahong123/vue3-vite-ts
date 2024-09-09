<script setup lang="ts">
import { storeToRefs } from "pinia";
import TagsNavBar from "./components/TagsNavBar.vue";
import { useAppStore } from "@/stores/modules/app";

const { getPageLoading } = storeToRefs(useAppStore());
</script>

<template>
  <el-main class="main-wrapper">
    <TagsNavBar />
    <el-main v-loading="getPageLoading" class="h-full">
      <RouterView>
        <template #default="{ Component, route }">
          <transition name="fade-slide" mode="out-in">
            <component :is="Component" :key="route.path" />
          </transition>
        </template>
      </RouterView>
    </el-main>
  </el-main>
</template>

<style scoped lang="less">
.main-wrapper {
  height: 100%;
  padding: 0;
  background-color: #f7f7f7;
}
</style>
