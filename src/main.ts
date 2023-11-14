import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import { setupI18n } from '@/locales/setupI18n';
import { setupRouter } from '@/router';
import { setupStore } from '@/store';
import { initAppConfigStore } from './settings/initAppConfig';
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

  // 多语言配置
  // 异步案例：语言文件可能从服务器端获取
  await setupI18n(app);

  // 配置路由
  setupRouter(app);

  app.use(Antd);
  app.mount('#app');
}

bootstrap();
