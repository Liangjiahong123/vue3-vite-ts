<script setup lang="ts">
import zhCn from "element-plus/es/locale/lang/zh-cn";
import useRefState from "@/hooks/common/useRefState";

const [isRouterAlive, setIsRouterAlive] = useRefState(true);

function reload() {
  setIsRouterAlive(false);
  nextTick(() => {
    setIsRouterAlive(true);
  });
}

provide("reload", reload);
</script>

<template>
  <el-config-provider :locale="zhCn">
    <RouterView v-if="isRouterAlive" />
  </el-config-provider>
</template>

<style lang="less">
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
