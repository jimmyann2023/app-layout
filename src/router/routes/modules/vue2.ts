import { LAYOUT } from '@/router/constant';
import type { AppRouteModule } from '@/router/types';

const vue2: AppRouteModule = {
  path: '/app-vue2',
  name: 'vue2',
  component: LAYOUT,
  redirect: '/app-vue2/index',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    title: 'vue2',
  },
  children: [
    {
      path: 'index',
      name: 'Home',
      component: () => import('@/views/vue2/index.vue'),
      meta: {
        // affix: true,
        title: 'home',
      },
    },
    {
      path: 'page2',
      name: 'page2',
      component: () => import('@/views/vue2/index.vue'),
      meta: {
        title: 'about',
      },
    },
  ],
};

export default vue2;
