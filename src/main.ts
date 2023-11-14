import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import { setupStore } from '@/store';
import App from './App.vue';
import '@/styles/index.less';
import 'uno.css';
import 'ant-design-vue/dist/reset.css';

async function bootstrap() {
  const app = createApp(App);

  // Configure store
  setupStore(app);
  app.use(Antd);
  app.mount('#app');
}

bootstrap();
