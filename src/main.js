import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import Carousel3d from 'vue-carousel-3d';
import store from '@/store'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  Carousel3d,
  render: h => h(App)
}).$mount('#app')
