<script setup lang="ts">
import { useI18n } from '@/hooks/useI18n';
const { t } = useI18n();
import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
  <div>
    <div>{{ t('routes.basic.login') }}</div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped></style>
