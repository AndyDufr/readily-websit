import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from '@/components/Nav.vue'
import Icon from '@/components/Icon.vue'
import Layout from '@/components/Layout.vue'

Vue.component('Nav', Nav)
Vue.config.productionTip = false
Vue.component('Icon', Icon)
Vue.component('Layout', Layout)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
