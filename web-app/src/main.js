import Vue from 'vue'
import App from './App.vue'
import './components/style-basics.scss'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

new Vue({
  render: h => h(Header),
}).$mount('#header')

new Vue({
  render: h => h(Footer),
}).$mount('#footer')