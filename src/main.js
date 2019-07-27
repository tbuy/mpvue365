
import Vue from 'vue'
import App from './App'
import router from './biz/router'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<router-view><router-view/>'
})
