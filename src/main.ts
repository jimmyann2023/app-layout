import './styles/index.less';
import 'uno.css';
import 'ant-design-vue/dist/reset.css';
// Register icon sprite
import 'virtual:svg-icons-register';

import microApp from '@micro-zoe/micro-app';
import { createApp } from 'vue';

import { registerGlobComp } from '@/components/registerGlobComp';
import { setupGlobDirectives } from '@/directives';
import { setupI18n } from '@/locales/setupI18n';
import { router, setupRouter } from '@/router';
import { setupRouterGuard } from '@/router/guard';
import { setupStore } from '@/store';

import App from './App.vue';
import { initAppConfigStore } from './settings/initAppConfig';

microApp.start({
  'disable-memory-router': true, // 默认值false
  plugins: {
    modules: {
      'appname-vite': [
        {
          loader(code) {
            if (process.env.NODE_ENV === 'development') {
              // 这里 /basename/ 需要和子应用vite.config.js中base的配置保持一致
              code = code.replace(/(from|import)(\s*['"])(\/child\/vite\/)/g, (all) => {
                return all.replace('/child/vite/', 'http://localhost:4007/child/vite/');
              });
            }

            return code;
          },
        },
      ],
      // 解决create-react-app中sockjs-node报错的问题
      'appname-react16': [
        {
          loader(code) {
            if (process.env.NODE_ENV === 'development' && code.indexOf('sockjs-node') > -1) {
              code = code.replace('window.location.port', '4004');
            }
            return code;
          },
        },
      ],
      // 解决create-react-app中sockjs-node报错的问题
      'appname-react17': [
        {
          loader(code) {
            if (process.env.NODE_ENV === 'development' && code.indexOf('sockjs-node') > -1) {
              code = code.replace('window.location.port', '4005');
            }
            return code;
          },
        },
      ],
    },
  },
});

async function bootstrap() {
  const app = createApp(App);

  // 配置 store
  setupStore(app);

  // 初始化内部系统配置
  initAppConfigStore();

  // 注册全局组件
  registerGlobComp(app);

  // 多语言配置
  // 异步案例：语言文件可能从服务器端获取
  await setupI18n(app);

  // 配置路由
  setupRouter(app);

  // 路由守卫
  setupRouterGuard(router);

  // 注册全局指令
  setupGlobDirectives(app);

  app.mount('#app');
}

bootstrap();
