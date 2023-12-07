<template>
  <div>
    <div>microAppe</div>
    <micro-app :name="appName" :url="url" baseroute="/app-supplyChain" :data="microAppData" />
  </div>
</template>

<script lang="ts" setup>
import microApp, { removeDomScope } from '@micro-zoe/micro-app';

// import { useRouter } from 'vue-router';
import { useGo } from '@/hooks/web/usePage';
import { config } from '@/settings/childAppSetting';
// 开发环境地址
const go = useGo();
// FIXME::  目前所有 micro-app 的 child appName 需要自己定义
const appName = 'appname-supplyChain';
const url = `${config.supplyChain}/supplyChain/`;
console.log('children-url', url);

// const router = useRouter();

// 基座向 子应用下发一个 'pushState' 来改变基座的路由跳转
const microAppData = {
  pushState: (appName: string, path: string) => {
    console.log(`好的 ${appName} 收你想调用我路由跳转 ${path} 的申请了`);
    removeDomScope();
    // router.push(path);
    go(path);
  },
};
</script>

<style></style>
