import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import '@/styles/index.less';
import 'uno.css';
import 'ant-design-vue/dist/reset.css';
const app = createApp(App);

app.use(Antd).mount('#app');
