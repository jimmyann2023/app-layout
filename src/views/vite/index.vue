<template>
  <div>
    <micro-app
      name="appname-vite-js"
      iframe
      destroy
      :url="url"
      :data="microAppData"
      @created="handleCreate"
      @beforemount="handleBeforeMount"
      @mounted="handleMount"
      @unmount="handleUnmount"
      @error="handleError"
      @datachange="handleDataChange"
    />
  </div>
</template>

<script lang="ts" setup>
import microApp, { removeDomScope } from '@micro-zoe/micro-app';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

import { useGo } from '@/hooks/web/usePage';
const route = useRoute();

const url = 'http://localhost:4009/child/vitejs';

const go = useGo();

const microAppData = ref({
  msg: '来自基座的数据',
  pushState: (appName: string, path: string) => {
    console.log(`好的 ${appName} 收你想调用我路由跳转 ${path} 的申请了`);
    removeDomScope();
    go(path);
  },
});

const name = 'appname-vite-js';

const handleCreate = () => {
  console.log('子应用 child-vite-js 创建了');
};

const handleBeforeMount = (): void => {
  console.log('子应用 child-vite-js 即将被渲染');
};
const handleMount = () => {
  console.log('子应用 child-vite-js 已经渲染完成');

  setTimeout(() => {
    // @ts-ignore
    microAppData.value = { msg: '来自基座的新数据' };
  }, 2000);
};
const handleUnmount = () => {
  // window.eventCenterForAppNameVite = null;
  console.log('子应用 child-vite-js 卸载了');
};

const handleError = (): void => {
  console.log('子应用 child-vite-js 加载出错了');
};
const handleDataChange = (e: CustomEvent) => {
  console.log(console.log('来自子应用 child-vite-js 的数据:', e.detail.data));
};

watch(
  () => route.path,
  () => {
    if (route.path.startsWith('/app-vitejs/')) {
      microApp.setData(name, { path: route.path });
    }
  },
  {
    immediate: true,
  },
);
</script>
