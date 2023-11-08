import { createApp } from 'vue';
import { setupRouter } from '@/router';
import { setupStore } from '@/store';
import App from './App.vue';
import 'uno.css';
import './style.css';

async function bootstrap() {
  const app = createApp(App);

  // 配置 store
  setupStore(app);

  // 配置路由
  setupRouter(app);

  app.mount('#app');
}

bootstrap();
