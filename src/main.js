import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Form from './components/Form.vue';
import ConfirmationPage from './components/ConfirmationPage.vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.config.productionTip = false

const routes = [
  { path: '/', component: Form },
  { path: '/confirmation', name: 'confirmation', component: ConfirmationPage,  props: true }
];

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
