<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
  <div>
    <div class="txt">aaa</div>
    <button class="txt">bbb</button>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped lang="less">
/* namespace已经全局注入，不需要额外在引入 */
@prefix-cls: ~'@{namespace}-app-logo';

.@{prefix-cls} {
  width: 100%;
}
</style>
