<script setup lang="ts">
interface Props {
  routeName: string;
}

defineProps<Props>();

const route = useRoute();
</script>

<template>
  <div v-if="route.name === routeName">
    <slot></slot>
  </div>
  <RouterView v-else />
</template>
