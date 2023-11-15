<template>
  <div :class="prefixCls" class="relative w-full h-full px-4">Login page</div>
</template>
<script lang="ts" setup>
import { useDesign } from '@/hooks/web/useDesign';
const { prefixCls } = useDesign('login');
</script>
