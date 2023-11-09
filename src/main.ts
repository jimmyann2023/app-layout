import { createApp } from 'vue';
import { setupI18n } from '@/locales';
import { setupRouter } from '@/router';
import { setupStore } from '@/store';
import App from './App.vue';
import 'uno.css';
import './style.css';

async function bootstrap() {
  const app = createApp(App);

  // 配置 store
  setupStore(app);

  // 国际化语言
  await setupI18n(app);
  // 配置路由
  setupRouter(app);

  app.mount('#app');
}

bootstrap();
