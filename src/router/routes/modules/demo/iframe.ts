import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';
import { t } from '@/hooks/web/useI18n';

const IFrame = () => import('@/views/sys/iframe/FrameBlank.vue');
const PartIFrame = () => import('/@/views/sys/part-iframe/PartFrameBlank.vue');

const iframe: AppRouteModule = {
  path: '/frame',
  name: 'Frame',
  component: LAYOUT,
  redirect: '/frame/doc',
  meta: {
    orderNo: 1000,
    icon: 'ion:tv-outline',
    title: t('routes.demo.iframe.frame'),
  },

  children: [
    {
      path: 'doc',
      name: 'Doc',
      component: IFrame,
      meta: {
        frameSrc: 'https://doc.vvbin.cn/',
        title: t('routes.demo.iframe.doc'),
      },
    },
    {
      path: 'antv',
      name: 'Antv',
      component: IFrame,
      meta: {
        frameSrc: 'https://www.antdv.com/docs/vue/introduce-cn/',
        title: t('routes.demo.iframe.antv'),
      },
    },
    {
      path: 'https://doc.vvbin.cn/',
      name: 'DocExternal',
      component: IFrame,
      meta: {
        title: t('routes.demo.iframe.docExternal'),
      },
    },
    {
      path: 'partFrame',
      name: 'PartFrame',
      component: PartIFrame,
      meta: {
        partFrameSrc: 'PartFrame',
        title: t('routes.demo.iframe.partFrame'),
      },
    },
    {
      path: 'partFrameNoCahce',
      name: 'partFrameNoCahce',
      component: () => import('/@/views/demo/part-iframe/PartIFrame.vue'),
      meta: {
        title: t('routes.demo.iframe.partFrameNoCache'),
      },
    },
  ],
};

export default iframe;
