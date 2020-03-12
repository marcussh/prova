import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource';
import VeeValidate from 'vee-validate';

import 'bootstrap/dist/css/bootstrap.css';

Vue.use(VueResource);
Vue.use(VeeValidate);

new Vue({
  el: '#app',
  render: h => h(App)
})
