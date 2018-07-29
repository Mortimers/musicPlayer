import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/Index'
import Detail from '@/page/Detail'
import musicBar from '@/components/musicBar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },{
      path: '/index',
      name: 'Index',
      component: Index
    },{
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    },{
      path: '/musicbar',
      name: 'musicbar',
      component: musicBar
    }
  ]
})
