<template>
  <div>
    <micro-app name="vite-app" :url="url" iframe :data="microAppData" />
  </div>
</template>

<script lang="ts" setup>
// 目前 micro-app 对 vite 支持还不是很好 等待官网近期会出的  1.0版本的 vite demo iframe
import microApp, { removeDomScope } from '@micro-zoe/micro-app';
import { watch } from 'vue';
import { useRoute } from 'vue-router';

import { useGo } from '@/hooks/web/usePage';

const url = `${config.vite}/child/vite/`;
console.log('child-url', url);

import { config } from '@/settings/childAppSetting';

const route = useRoute();
const go = useGo();
const microAppData = {
  pushState: (appName: string, path: string) => {
    console.log(`好的 ${appName} 收你想调用我路由跳转 ${path} 的申请了`);
    removeDomScope();
    go(path);
  },
};
watch(
  () => route.path,
  () => {
    console.log('route', route.path);
    if (route.path.startsWith('app-vite')) {
      microApp.setData('vite-app', { path: route.path });
    }
  },
  {
    immediate: true,
  },
);
</script>

<style></style>
