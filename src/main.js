// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import '@/assets/css/common.css'
import iView from 'iview'
import 'iview/dist/styles/iview.css'


// mock数据
import '@/mock'

Vue.config.productionTip = false

// 全局使用
Vue.use(VueAwesomeSwiper)
Vue.use(iView)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
