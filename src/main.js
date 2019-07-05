import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
Vue.prototype.$require = axios;
Vue.use(VueAwesomeSwiper, /* { default global options } */)
document.documentElement.style.fontSize = document.body.clientWidth / 7.5 + 'px';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
