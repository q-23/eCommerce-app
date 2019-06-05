import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import axios from 'axios';
import {store} from './store/store';

axios.defaults.baseURL = 'http://localhost:3005/products';

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
