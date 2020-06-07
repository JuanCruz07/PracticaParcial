import Vue from 'vue'
import App from './App.vue'
import router from './routes'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'popper.js'
import 'jquery'
import './forms'
import './httpClient'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
