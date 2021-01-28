import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import './styles/app.css';
import VueCarousel from 'vue-carousel';

Vue.use(VueCarousel);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
