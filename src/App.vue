<template>
  <ConfigProvider :locale="getAntdLocale">
    <AppProvider>
      <RouterView />
    </AppProvider>
  </ConfigProvider>
</template>

<script lang="ts" setup>
import { ConfigProvider } from 'ant-design-vue';
import { AppProvider } from '@/components/Application';
import { useTitle } from '@/hooks/web/useTitle';
import { useLocale } from '@/locales/useLocale';
import { useUserStore } from './store/modules/user';
import 'dayjs/locale/zh-cn';

// TODO: 这里是直接模拟登录后的情况 需要清除
console.log('准备登录');
const login = useUserStore();
login.afterLoginAction();

// support Multi-language
const { getAntdLocale } = useLocale();
// 页面变动时改变浏览器顶部的标签名字
useTitle();
</script>
