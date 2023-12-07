import { LAYOUT } from '@/router/constant';
import type { AppRouteModule } from '@/router/types';

const vite: AppRouteModule = {
  path: '/app-vite',
  name: 'vite',
  component: LAYOUT,
  redirect: '/app-vite/viteIndex',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    title: 'vite',
  },
  children: [
    {
      path: 'viteIndex',
      name: 'viteHome',
      component: () => import('@/views/vite/index.vue'),
      meta: {
        // affix: true,
        title: 'viteHome',
      },
    },
    {
      path: 'vitePage2',
      name: 'vitepage2',
      component: () => import('@/views/vite/index.vue'),
      meta: {
        title: 'vitePage',
      },
    },
  ],
};

export default vite;
