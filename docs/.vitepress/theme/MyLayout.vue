<!-- .vitepress/theme/Layout.vue -->
<script setup lang="ts">
import DefaultTheme from "vitepress/theme";
import MyFooterWidget from "./MyFooterWidget.vue";

const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <!-- Inject UNDER footer -->
    <template #doc-bottom>
      <MyFooterWidget />
      <pre>doc-bottom works</pre>
    </template>
  </Layout>
</template>
