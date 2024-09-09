<script setup lang="ts">
import { RouteLayout } from "@/components/common";
const router = useRouter();
</script>

<template>
  <RouteLayout routeName="PluginManagement">
    插件管理
    <el-button @click="router.push('/skillsManagement/plugin/edit')"> 跳转到编辑页</el-button>
  </RouteLayout>
</template>

<style scoped lang="less"></style>
