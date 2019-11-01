import Vue from 'vue';
import './components/style-basics.scss';
import './components/style-header.scss';
import './components/style-navi.scss';
import './components/style-jokes.scss';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import Navi from './components/Navi.vue';
import Jokes from './components/Jokes.vue';
import SetStyleBasis from './components/SetStyleBasis.vue';

Vue.config.productionTip = false;

new Vue ({
  render: h => h (Header),
}).$mount ('#header');

new Vue ({
  render: h => h (Footer),
}).$mount ('#footer');

new Vue ({
  render: h => h (Navi),
}).$mount ('#navi');

new Vue ({
  render: h => h (Jokes),
}).$mount ('#jokes');

new Vue ({
  render: h => h (SetStyleBasis),
}).$mount ('#setStyleBasis');