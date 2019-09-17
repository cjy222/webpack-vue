import Vue from 'vue';
import App from './app.vue';
import router from './router';

const root = document.createElement('div');
document.body.appendChild(root);
console.log(process);

new Vue({
  render: (h) => h(App),
  router
}).$mount(root)