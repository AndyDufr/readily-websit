import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from '@/components/Nav.vue'
import Icon from '@/components/Icon.vue'
import Layout from '@/components/Layout.vue'
import { Overlay } from 'vant'
import vant from 'vant'

Vue.use(vant)
Vue.use(Overlay)
Vue.component('Nav', Nav)
Vue.config.productionTip = false
Vue.component('Icon', Icon)
Vue.component('Layout', Layout)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// 解决 Andriod 浏览器短屏手机显示不全的问题
window.onload = function () {
  setTimeout(function () {
    window.scrollTo(0, 999)
  }, 0)
}

// 检查用户用什么设备打开页面
// if (document.documentElement.clientWidth > 500) {
//   window.alert('为保证浏览效果，请使用手机打开本页面')
//   const img = document.createElement('img')
//   img.src = './qrcode.png'
//   img.style.position = 'fixed'
//   img.style.left = '50%'
//   img.style.top = '50%'
//   img.style.transform = 'translate(-50%, -50%)'
//   img.style.boxShadow = '0 0 10px rgba(0,0,0,.3)'
//   document.body.appendChild(img)
// }