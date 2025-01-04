/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const nestedRouter = {
  path: '/nested',
  component: Layout,
  redirect: '/nested/menu1/menu1-1',
  name: 'Nested',
  meta: {
    title: '知识图谱管理',
    icon: 'nested'
  },
  children: [
    {
      path: 'menu1',
      component: () => import('@/views/nested/menu1/index'), // Parent router-view
      // name: 'Menu1',
      name: 'Menu1',
      meta: { title: '多级菜单' },
      redirect: '/nested/menu1/menu1-1',
      children: [
        {
          path: 'menu1-1',
          component: () => import('@/views/nested/menu1/menu1-1'),
          name: 'Menu1-1',
          meta: { title: 'Menu 1-1' }
        },
        {
          path: 'menu1-2',
          component: () => import('@/views/nested/menu1/menu1-2'),
          name: 'Menu1-2',
          redirect: '/nested/menu1/menu1-2/menu1-2-1',
          meta: { title: 'Menu 1-2' },
          children: [
            {
              path: 'menu1-2-1',
              component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
              name: 'Menu1-2-1',
              meta: { title: 'Menu 1-2-1' }
            },
            {
              path: 'menu1-2-2',
              component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
              name: 'Menu1-2-2',
              meta: { title: 'Menu 1-2-2' }
            }
          ]
        },
        {
          path: 'menu1-3',
          component: () => import('@/views/nested/menu1/menu1-3'),
          name: 'Menu1-3',
          meta: { title: 'Menu 1-3' }
        }
      ]
    },
    {
      path: 'mange5',
      name: 'Mange5',
      component: () => import('@/views/knowledge_manage/abstract/index.vue'),
      meta: { title: '知识抽取' }
    },
    {
      path: 'mange2',
      name: 'mange2',
      component: () => import('@/views/knowledge_manage/fusion/test.vue'),
      meta: { title: '知识融合' }
    },
    {
      path: 'mange3',
      name: 'mange3',
      component: () => import('@/views/nested/menu2/index'),
      meta: { title: '知识计算' }
    },
    {
      path: 'mange4',
      name: 'Mange4',
      component: () => import('@/views/nested/menu2/index'),
      meta: { title: '知识管理' }
    }

  ]
}

export default nestedRouter
