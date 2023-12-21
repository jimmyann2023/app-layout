import { LAYOUT } from '@/router/constant';
import type { AppRouteModule } from '@/router/types';

const vite: AppRouteModule = {
  path: '/app-vitets',
  name: 'vite-ts',
  component: LAYOUT,
  redirect: '/app-vitets/',
  meta: {
    orderNo: 10,
    icon: 'devicon-plain:vitest',
    title: 'vite-ts',
  },
  children: [
    {
      path: 'home',
      name: 'vite-ts-home',
      component: () => import('@/views/viteTs/index.vue'),
      meta: {
        // affix: true,
        title: 'Home',
      },
    },
    {
      path: 'page2',
      name: 'vite-ts-page2',
      component: () => import('@/views/viteTs/index.vue'),
      meta: {
        title: 'page2',
      },
    },
  ],
};

export default vite;
