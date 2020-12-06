import Layout from '@/layout'

export default {
  path: '/home/layout',
  name: 'home',
  component: Layout,
  redirect: '/home',
  meta: {
    title: 'home',
    icon: 'icon-dingdan'
  },
  children: [
    {
      path: '/home',
      component: () => import(/* webpackChunkName: "home" */ '@/views/home/index.vue'),
      meta: {
        title: 'home'
      }
    }
  ]
}
