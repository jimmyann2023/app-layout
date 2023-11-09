import antdLocale from 'ant-design-vue/es/locale/zh_CN';
import { genMessage } from '../helper';

const modulesFiles = import.meta.glob<Recordable>('./zh-CN/**/*.ts', { eager: true });
console.log('modulesFiles', modulesFiles);
export default {
  message: {
    ...genMessage(modulesFiles, 'zh-CN'),
    antdLocale,
  },
};
