<template>
  <div :class="prefixCls" class="relative w-full h-full px-4">Login page</div>
</template>
<script lang="ts" setup>
import { useDesign } from '@/hooks/web/useDesign';
import { useUserStore } from '@/store/modules/user';
const { prefixCls } = useDesign('login');

// TODO: 这里是直接模拟登录后的情况 需要清除
console.log('准备登录');
const login = useUserStore();
login.afterLoginAction();
</script>
