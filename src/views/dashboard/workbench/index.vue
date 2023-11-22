<template>
  <PageWrapper>
    <template #headerContent> <WorkbenchHeader /> </template>
    <div class="lg:flex">
      <div class="lg:w-7/10 w-full !mr-4 enter-y">workbench</div>
      <div class="lg:w-3/10 w-full enter-y">cccc</div>
    </div>
  </PageWrapper>
</template>
<script lang="ts" setup>
import { PageWrapper } from '@/components/Page';

import WorkbenchHeader from './components/WorkbenchHeader.vue';
</script>
