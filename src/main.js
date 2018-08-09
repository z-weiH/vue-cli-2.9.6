// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false


if(process.env.NODE_ENV === 'development') {
  // element-ui
  let ElementUI = require('element-ui');
  Vue.use(ElementUI);
  require('element-ui/lib/theme-chalk/index.css');
}

// 样式
import '@/assets/css/index.scss'

// axios
import axios from 'axios'
import './axios'
Vue.prototype.$http = axios;

// 引入 store
import store from './store'

// 引入 config
import config from './config'
Vue.prototype.$config = config;

// cookie
import cookie from 'js-cookie'
Vue.prototype.$cookie = cookie;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
