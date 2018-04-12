import Layout from './website/layout.vue'

export default [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: 'components',
        redirect: 'components/wz-tables'
      },
      {
        path: 'components/wz-tables',
        component: resolve => {
          require(['../examples/wz-tables.vue'], resolve)
        }
      },
      {
        path: 'components/wz-cus-list',
        component: resolve => {
          require(['../examples/wz-cus-list.vue'], resolve)
        }
      },
      {
        path: 'components/wz-bar-progress',
        component: resolve => {
          require(['../examples/wz-bar-progress.vue'], resolve)
        }
      },
      {
        path: 'components/wz-pop-menus',
        component: resolve => {
          require(['../examples/wz-pop-menus.vue'], resolve)
        }
      },
      {
        path: 'components/wz-searcher',
        component: resolve => {
          require(['../examples/wz-searcher.vue'], resolve)
        }
      },
      {
        path: 'components/wz-sider-list',
        component: resolve => {
          require(['../examples/wz-sider-list.vue'], resolve)
        }
      }
    ]
  }
]
