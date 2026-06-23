<script setup lang="ts">
import { computed } from "vue";
import * as icons from "simple-icons";

const props = defineProps<{
  name: keyof typeof icons;
}>();

const svg = computed(() => {
  const icon = icons[props.name];
  return icon?.svg ?? "";
});
</script>

<template>
  <span v-html="svg" />
</template>
