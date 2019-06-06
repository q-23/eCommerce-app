import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import axios from 'axios';
import VueRouter from 'vue-router';
import {routes} from './routes.js';
import {store} from './store/store';

axios.defaults.baseURL = 'http://localhost:3005/products';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: `history`
});


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
