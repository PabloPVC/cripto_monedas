import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import '@/assets/css/tailwind.css'
import Home from '@/views/Home'
import Error from '@/views/Error'
import About from '@/views/About'
import CoinDetail from '@/views/CoinDetail'
import { dollarFilter, percentFilter } from '@/filters'
import Chart from 'chart.js'
import Chartick from 'vue-chartkick'
import { VueSpinners } from '@saeris/vue-spinners'

Vue.use(VueSpinners)
Vue.use(Chartick.use(Chart))

Vue.filter('dollar', dollarFilter)
Vue.filter('percent', percentFilter)

Vue.config.productionTip = false

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About },
  { path: '/coin/:id', name: 'coin-detail', component: CoinDetail },
  { path: '*', name: 'error', component: Error },
]

const router = new VueRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  mode: 'history',
  routes, // short for `routes: routes`
})

Vue.use(VueRouter)

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
