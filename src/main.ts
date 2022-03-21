import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from '@/components/Nav.vue'
import Icon from '@/components/Icon.vue'
import Layout from '@/components/Layout.vue'
import tagListModel from './models/tagListModel'
import recordList from './models/recordList'

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
window.removeTag = (id: string) => {
  return tagListModel.removeTag(id);
}
window.updateTag = (id: string, name: string) => {
  return tagListModel.updateTag(id, name);
}
// record store
window.recordList = recordList.fetch()
window.create = (record) => {
  recordList.create(record);
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
