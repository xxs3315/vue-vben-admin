import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';

const permission: AppRouteModule = {
  path: '/s-sheet',
  name: 'S-Sheet',
  component: LAYOUT,
  meta: {
    orderNo: 10000,
    icon: 'ion:build-outline',
    title: '报表设计',
  },
  children: [
    {
      path: 'designer',
      name: 'Designer',
      meta: {
        title: '报表设计',
      },
      component: () => import('@/views/s-sheet/index.vue'),
    },
  ],
};

export default permission;
