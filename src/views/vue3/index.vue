<template>
  <div>
    <div>microAppe-vue3</div>
    <micro-app
      name="appname-vue3"
      :url="url"
      baseroute="/cloud/app-vue3"
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

// import { useRouter } from 'vue-router';
import { useGo } from '@/hooks/web/usePage';
import { config } from '@/settings/childAppSetting';

const url = `${config.vue3}/child/vue3/`;
console.log('child-url', url);
const go = useGo();
// const router = useRouter();
// 基座向 子应用下发一个 'pushState' 来改变基座的路由跳转
const microAppData = {
  pushState: (appName: string, path: string) => {
    console.log(`好的 ${appName} 收你想调用我路由跳转 ${path} 的申请了`);
    removeDomScope();
    go(path);
  },
};

const handleCreate = () => {
  console.log('child-vue3 创建了');
};

const handleBeforeMount = () => {
  console.log('child-vue3 即将被渲染');
};

const handleMount = () => {
  console.log('child-vue3 已经渲染完成');
};

const handleUnmount = () => {
  console.log('child-vue3 卸载了');
};

const handleError = () => {
  console.log('child-vue3 加载出错了');
};

const handleDataChange = (e: CustomEvent) => {
  console.log('来自子应用 child-vue3 的数据:', e.detail.data);
};
</script>

<style></style>
