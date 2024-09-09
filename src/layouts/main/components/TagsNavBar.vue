<script setup lang="ts">
import { IconView, Dropdown } from "@/components/common";
import useTags from "../hooks/useTags";

const { tagList, isActiveTag, closeTags, closeTagByCommand } = useTags();
</script>

<template>
  <div v-if="tagList.length > 0" class="tag-container al-center justify-between">
    <ul class="al-center">
      <TransitionGroup name="tag">
        <li
          v-for="item in tagList"
          :key="item.path"
          class="tag-item flex-center pointer"
          :class="{ active: isActiveTag(item.path) }"
        >
          <RouterLink :to="item.path" class="mr-1">{{ item.title }}</RouterLink>
          <IconView v-show="tagList.length > 1" icon="close" @click.stop="closeTags(item.path)" />
        </li>
      </TransitionGroup>
    </ul>
    <Dropdown @command="closeTagByCommand">
      <IconView icon="more" />
      <template #menu>
        <el-dropdown-item command="closeOther">关闭其他</el-dropdown-item>
        <el-dropdown-item command="closeAll">关闭所有</el-dropdown-item>
      </template>
    </Dropdown>
  </div>
</template>

<style scoped lang="less">
.tag-container {
  width: 100%;
  height: 30px;
  padding-right: 24px;
  padding-left: 5px;
  background-color: #fff;

  .tag-item {
    position: relative;
    padding: 5px 8px;
    margin: 0 2px;
    font-size: 12px;
    color: #666;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 1px 2px rgb(0 0 0 / 0.2);
    scale: 1;
    transition: /* stylelint-disable-line */
      scale 0.2s ease,
      background-color 0.3s ease-in;

    &:not(.active):hover {
      background-color: var(--el-color-primary-light-9);
      scale: 1.05;
    }

    &.active {
      color: #fff;
      scale: 1.05;
      background-color: var(--el-color-primary);
    }
  }

  .tag-enter-active,
  .tag-leave-active {
    transition: all 0.5s;
  }

  .tag-enter-from,
  .tag-leave-to {
    opacity: 0;
    transform: scaleX(0);
  }
}
</style>
