import Vue from 'vue'
import App from './App.vue'

import Index from './pages/index'

import "bootstrap";

Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

new Vue({
  render: h => h(Index),
}).$mount('#app')
