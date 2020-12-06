import Layout from '@/layout'

export default {
  path: '/house/layout',
  name: 'house',
  component: Layout,
  redirect: '/house',
  meta: {
    title: 'house',
    icon: 'icon-dingdan'
  },
  children: [
    {
      path: '/house',
      component: () => import(/* webpackChunkName: "house" */ '@/views/house/list.vue'),
      meta: {
        title: 'house'
      }
    },
    {
      path: '/house/detail',
      component: () => import(/* webpackChunkName: "house" */ '@/views/house/detail.vue'),
      meta: {
        title: 'houseDetail'
      }
    }
  ]
}
