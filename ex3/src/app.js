import Vue from 'vue';
import VueRouter from 'vue-router';
// 首先定义或者引入路由的组件
// 方法一：直接定义路由组件
const goods = { template: '<p>goods</p>' };
const ratings = { template: '<p>ratings</p>' };
const seller = { template: '<p>seller</p>' };
Vue.use(VueRouter);
// 然后定义路由(routes)，components还可以是Vue.extend()创建的
const routes = [
  { path: '/goods', component: goods },
  { path: '/ratings', component: ratings },
  { path: '/seller', component: seller }
];
// 接着创建路由实例
const router = new VueRouter({
  // ES6缩写语法，相当于routes:routes
  routes  
});
// 或者
const app = new Vue({
  router
}).$mount('#app')