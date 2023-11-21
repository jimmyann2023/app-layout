<template>
  <ConfigProvider :locale="getAntdLocale" :theme="themeConfig">
    <AppProvider>
      <RouterView />
    </AppProvider>
  </ConfigProvider>
</template>

<script lang="ts" setup>
import 'dayjs/locale/zh-cn';

import { ConfigProvider } from 'ant-design-vue';
import { computed } from 'vue';

import { AppProvider } from '@/components/Application';
import { useDarkModeTheme } from '@/hooks/setting/useDarkModeTheme';
import { useTitle } from '@/hooks/web/useTitle';
import { useLocale } from '@/locales/useLocale';

const { isDark, darkTheme } = useDarkModeTheme();

const themeConfig = computed(() =>
  Object.assign(
    {
      token: {
        colorPrimary: '#0960bd',
        colorSuccess: '#55D187',
        colorWarning: '#EFBD47',
        colorError: '#ED6F6F',
        colorInfo: '#0960bd',
      },
    },
    isDark.value ? darkTheme : {},
  ),
);
// support Multi-language
const { getAntdLocale } = useLocale();
// 页面变动时改变浏览器顶部的标签名字
useTitle();
</script>
