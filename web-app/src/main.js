import Vue from 'vue';

import './components/style-basics.scss';
import './components/style-header.scss';
import './components/style-navi.scss';
import './components/style-jokesFilter.scss';
import './components/style-jokes.scss';
import App from './App.vue'
import router from './router';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')