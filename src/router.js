import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { path: '/', component: () => import('./pages/pageA') },
    { path: '/b', component: () => import('./pages/pageB') },
    { path: '/c', component: () => import('./pages/pageC') }
  ]
})