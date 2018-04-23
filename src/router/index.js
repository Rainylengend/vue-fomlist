import Vue from 'vue'
import Router from 'vue-router'
import Editor from '@/pages/editor'
import Preview from '@/pages/preview'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Editor',
      component: Editor
    },
    {
      path: '/preview',
      name: 'Preview',
      component: Preview
    }
  ]
});
