<script setup lang="ts">
import type { IconKey } from "./iconMap";
import type { IconConfig, ButtonConfig, ToolTipConfig } from "./types";
import Icon from "./Icon.vue";

interface Props {
  iconConfig?: IconConfig;
  buttonConfig?: ButtonConfig;
  toolTipConfig?: ToolTipConfig;
  icon?: IconKey;
  showToolTip?: boolean;
  type?: "normal" | "button";
}

withDefaults(defineProps<Props>(), {
  iconConfig: () => ({}) as IconConfig,
  buttonConfig: () => ({}) as ButtonConfig,
  toolTipConfig: () => ({}) as ToolTipConfig,
  showToolTip: false,
  type: "normal"
});
const emit = defineEmits(["click"]);
</script>

<template>
  <el-tooltip v-if="showToolTip" v-bind="toolTipConfig">
    <Icon
      :iconConfig="iconConfig"
      :buttonConfig="buttonConfig"
      :type="type"
      :icon="icon"
      @click="(e) => emit('click', e)"
    >
      <slot></slot>
    </Icon>
  </el-tooltip>

  <Icon
    v-else
    :iconConfig="iconConfig"
    :buttonConfig="buttonConfig"
    :type="type"
    :icon="icon"
    @click="(e) => emit('click', e)"
  >
    <slot></slot>
  </Icon>
</template>
