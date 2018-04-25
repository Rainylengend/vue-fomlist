import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CreateSurvey',
      component: () => import('@/pages/createsurvey')
    },
    {
      path: '/editor/:id',
      name: 'Editor',
      component: () => import('@/pages/editor')
    },
    {
      path: '/preview',
      name: 'Preview',
      component: () => import('@/pages/preview')
    }
  ]
});
