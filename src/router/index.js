import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


// import Layout from '@/views/layout'
import common from '@/views/common'

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({y: 0}),
  routes: [
    { path: '/login', component: () => import('@/views/login/login') },
    // { path: '/register', component: () => import('@/views/login/register') },
    // { path: '/info', component: () => import('@/views/login/info') },
    { path: '/404', component: () => import('@/views/404') },
    // { path: '/', component: () => import('@/views/home/index') },

    {
      path: '/',
      component: common,
      name: 'home',
      children: [
        {
          path: '',
          component: () => import('@/views/home/index'),
        },
        {
          path: '/well',
          redirect: '/well/base',
          component: () => import('@/views/well/index'),
          children: [
            {
              path: 'base',
              component: () => import('@/views/well/base')
            },
            {
              path: 'lithology',
              component: () => import('@/views/well/lithology')
            },
            {
              path: 'gsald',
              component: () => import('@/views/well/gsald')
            },
            {
              path: 'drilled',
              component: () => import('@/views/well/drilled')
            },
            {
              path: 'equipment',
              component: () => import('@/views/well/equipment')
            },
            {
              path: 'welldepth',
              component: () => import('@/views/well/welldepth')
            },
            {
              path: 'wellhead',
              component: () => import('@/views/well/wellhead')
            },
            {
              path: 'welldata',
              component: () => import('@/views/well/welldata')
            },
            {
              path: 'designtrack',
              component: () => import('@/views/well/designtrack')
            },
            {
              path: 'mapdisplay',
              component: () => import('@/views/well/mapdisplay')
            },
            {
              path: 'schedule',
              component: () => import('@/views/well/schedule')
            }
          ]
        },
        {
          path: '/trail',
          redirect: '/trail/profile',
          component: () => import('@/views/trail/index'),
          children: [
            {
              path: 'profile',
              component: () => import('@/views/trail/profile')
            },
            {
              path: 'migration',
              component: () => import('@/views/trail/migration')
            }
          ]
        },
        {
          path: '/record',
          redirect: '/record/bit',
          component: () => import('@/views/record/index'),
          children: [
            {
              path: 'bit',
              component: () => import('@/views/record/bit')
            },
            {
              path: 'powerdrill',
              component: () => import('@/views/record/powerdrill')
            },
            {
              path: 'centralizer',
              component: () => import('@/views/record/centralizer')
            },
            {
              path: 'assembly',
              component: () => import('@/views/record/assembly')
            },
            {
              path: 'devicefailuredata',
              component: () => import('@/views/record/devicefailuredata')
            },
            {
              path: 'drillingfluidrecording',
              component: () => import('@/views/record/drillingfluidrecording')
            },
            {
              path: 'lowpumpspeed',
              component: () => import('@/views/record/lowpumpspeed')
            },
            {
              path: 'floorburstandpressuretest',
              component: () => import('@/views/record/floorburstandpressuretest')
            },
            {
              path: 'reservoirprotection',
              component: () => import('@/views/record/reservoirprotection')
            },
            {
              path: 'drillingcoring',
              component: () => import('@/views/record/drillingcoring')
            }
          ]
        },
        {
          path: '/report',
          redirect: '/report/drilling',
          component: () => import('@/views/report/index'),
          children: [
            {
              path: 'drilling',
              component: () => import('@/views/report/drilling')
            },
            {
              path: 'drillingfluid',
              component: () => import('@/views/report/drillingfluid')
            },
            {
              path: 'iufo',
              component: () => import('@/views/report/iufo')
            },
            {
              path: 'monthly',
              component: () => import('@/views/report/monthly')
            },
            {
              path: 'annual',
              component: () => import('@/views/report/annual')
            }
          ]
        },
        {
          path: '/technical',
          redirect: '/technical/bitselection',
          component: () => import('@/views/technical/index'),
          children: [
            {
              path: 'bitselection',
              component: () => import('@/views/technical/bitselection')
            },
            {
              path: 'densitycurve',
              component: () => import('@/views/technical/densitycurve')
            },
            {
              path: 'drillingfluid',
              component: () => import('@/views/technical/drillingfluid')
            },
            {
              path: 'newprocess',
              component: () => import('@/views/technical/newprocess')
            },
            {
              path: 'remotediagnosis',
              component: () => import('@/views/technical/remotediagnosis')
            },
            {
              path: 'remotesupport',
              component: () => import('@/views/technical/remotesupport')
            },
            {
              path: 'trajectory',
              component: () => import('@/views/technical/trajectory')
            }
          ]
        }
      ]
    },
    { path: '', component: () => import('@/views/404') },
    // {
    //   path: '/',
    //   component: Layout,
    //   name: 'home',
    //   children: [
    //     {
    //       path: '',
    //       component: () => import('@/views/home/index'),
    //       meta: {
    //         title: '首页',
    //         icon: 'tree'
    //       }
    //     }
    //   ]
    // }
  ]
})
