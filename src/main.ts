import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import { initAppConfigStore } from '@/settings/initAppConfig';
import { setupStore } from '@/store';
import App from './App.vue';
import '@/styles/index.less';
import 'uno.css';
import 'ant-design-vue/dist/reset.css';

async function bootstrap() {
  const app = createApp(App);

  // 配置 store
  setupStore(app);

  // 初始化内部系统配置
  initAppConfigStore();

  app.use(Antd);
  app.mount('#app');
}

bootstrap();
