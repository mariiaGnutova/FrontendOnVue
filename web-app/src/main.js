import Vue from 'vue'
import App from './App.vue'
import './components/style-basics.scss'
import Footer from './components/Footer.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

new Vue({
  render: h => h(Footer),
}).$mount('#footer')