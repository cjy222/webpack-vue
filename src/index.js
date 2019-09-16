import Vue from 'vue';
import App from './app.vue';

const root = document.createElement('div');
document.body.appendChild(root);
console.log(process);
new Vue({
  render: (h) => h(App)
}).$mount(root)