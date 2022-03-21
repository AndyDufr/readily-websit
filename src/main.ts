import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from '@/components/Nav.vue'
import Icon from '@/components/Icon.vue'
import Layout from '@/components/Layout.vue'
import tagListModel from './models/tagListModel'

window.createTag = (name: string) => {
  const result = tagListModel.create(name);
  if (result === "seccess") {
    window.alert("创建成功");
  } else if (result === "duplicated") {
    window.alert("标签名重复");
  } else {
    window.alert("标签名不能为空");
  }
}



Vue.component('Nav', Nav)
Vue.config.productionTip = false
Vue.component('Icon', Icon)
Vue.component('Layout', Layout)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
