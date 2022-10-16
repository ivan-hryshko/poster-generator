import Vue from 'vue'
import VueRouter from 'vue-router'
import ChoosePicture from '../views/ChoosePicture.vue'
import ChooseColor from '@/views/ChooseColor.vue'
import ChooseMetaData from '@/views/ChooseMetaData.vue'
import PrintSetting from '@/views/PrintSetting.vue'
import SuccessPage from '@/views/SuccessPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: ChoosePicture
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/choose-color',
    name: 'choose-color',
    component: ChooseColor
  },
  {
    path: '/choose-meta-data',
    name: 'choose-meta-data',
    component: ChooseMetaData
  },
  {
    path: '/print-setting',
    name: 'print-setting',
    component: PrintSetting
  },
  {
    path: '/success-page',
    name: 'success-page',
    component: SuccessPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
