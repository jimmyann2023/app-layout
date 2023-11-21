import type { App } from 'vue';
import { Input, Layout } from 'ant-design-vue';
// import VXETable from 'vxe-table';
import { Button } from './Button';

export function registerGlobComp(app: App) {
  app.use(Input).use(Layout).use(Button);
}
