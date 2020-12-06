import Layout from '@/layout'

export default {
  path: '/user/layout',
  name: 'user',
  component: Layout,
  redirect: '/user',
  meta: {
    title: 'user',
    icon: 'icon-dingdan'
  },
  children: [
    {
      path: '/user',
      component: () => import(/* webpackChunkName: "user" */ '@/views/user/index.vue'),
      meta: {
        title: 'user'
      }
    }
  ]
}
