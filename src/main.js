import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import routes from './routes';
import store from './stores';

Vue.config.productionTip = false;

Vue.use(VueRouter);
const router = new VueRouter({ routes });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  store,
});
