<script setup lang="ts">
import type { IconConfig, ButtonConfig } from "./types";
import { ICON_MAP, type IconKey } from "./iconMap";

interface Props {
  icon?: IconKey;
  type: "normal" | "button";
  iconConfig: IconConfig;
  buttonConfig: ButtonConfig;
}

withDefaults(defineProps<Props>(), {
  type: "normal",
  iconConfig: () => ({}) as IconConfig,
  buttonConfig: () => ({}) as ButtonConfig
});
</script>

<template>
  <el-icon v-bind="iconConfig" v-if="type === 'normal'" class="pointer">
    <slot>
      <component v-if="icon" :is="ICON_MAP[icon]" />
    </slot>
  </el-icon>

  <el-button v-bind="buttonConfig" v-else-if="type === 'button' && icon" :icon="ICON_MAP[icon]">
    <slot></slot>
  </el-button>
</template>
