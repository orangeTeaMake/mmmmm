import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueLazyload from 'vue-lazyload'

import toast from "components/common/toast";

Vue.config.productionTip = false

//使用懒加载插件
Vue.use(VueLazyload, {
  preLoad: 1,
  loading: require("assets/img/common/loading.svg")
});

//使用自己封装的toast组件
Vue.use(toast);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
