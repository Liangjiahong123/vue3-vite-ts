<script setup lang="ts">
import { DropdownInstance } from "element-plus";
import type { IconKey } from "@/components/common/IconView/iconMap";
import { IconView } from "@/components/common";

type DropdownProps = Partial<DropdownInstance["$props"]>;
type DropdownEmits = DropdownInstance["$emit"];

interface Props extends /* @vue-ignore */ DropdownProps {
  icon?: IconKey;
  iconType?: "normal" | "button";
}
interface Emits extends /* @vue-ignore */ DropdownEmits {}

withDefaults(defineProps<Props>(), {
  icon: "" as IconKey
});

defineEmits<Emits>();
</script>

<template>
  <el-dropdown v-bind="$attrs">
    <slot>
      <IconView v-if="icon" :icon="icon" :type="iconType" />
    </slot>
    <template #dropdown>
      <el-dropdown-menu>
        <slot name="menu"></slot>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
