import { LAYOUT } from '@/router/constant';
import type { AppRouteModule } from '@/router/types';

const vite: AppRouteModule = {
  path: '/app-vitejs',
  name: 'vite',
  component: LAYOUT,
  redirect: '/app-vitejs/',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    title: 'vite',
  },
  children: [
    {
      path: 'home',
      name: 'viteHome',
      component: () => import('@/views/vite/index.vue'),
      meta: {
        // affix: true,
        title: 'Home',
      },
    },
    {
      path: 'about',
      name: 'viteAbout',
      component: () => import('@/views/vite/index.vue'),
      meta: {
        title: 'About',
      },
    },
  ],
};

export default vite;
