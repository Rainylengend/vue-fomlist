import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: {name: 'CreateSurvey'},
      component: () => import('@/pages/index'),
      children: [
        {
          path: 'createsurvey',
          name: 'CreateSurvey',
          component: () => import('@/pages/createsurvey')
        },
        {
          path: 'mysurvey',
          name: 'mySurvey',
          component: () => import('@/pages/mysurvey')
        },
        {
          path: 'editor',
          name: 'Editor',
          component: () => import('@/pages/editor')
        },
        {
          path: '/template',
          name: 'Template',
          component: () => import('@/pages/templatechoose')
        }
      ]
    },
    {
      path: '/preview',
      name: 'Preview',
      component: () => import('@/pages/preview')
    }
  ]
})

export default router
