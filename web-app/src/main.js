import Vue from 'vue'
import './components/style-basics.scss'
import './components/style-header.scss'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import Navi from './components/Navi.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Header),
}).$mount('#header')

new Vue({
  render: h => h(Footer),
}).$mount('#footer')

new Vue({
  render: h => h(Navi),
}).$mount('#navi')