const login = { template: '<p>请登录</p>' };
const goods = { template: '<p>goods</p>' };
const ratings = { template: '<p>ratings</p>' };
const seller = { template: '<p>seller</p>' };
/*************************Page****************************/
import Login from '../page/login.vue';//Login
import page1 from '../page/page1.vue';
const routes = [
  { path: '/', redirect: '/login'},
  { path: '/login', component: Login},
  { path: '/Page1', component: page1 },
  { path: '/ratings', component: ratings },
  { path: '/seller', component: seller }
];
export default routes;