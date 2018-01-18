import Vue from 'vue';
import VueRouter from 'vue-router';
import Constant from 'constant';

//全局组件
import AppLayout from './components/layout.vue';
import Pop from './components/Prompts/index';
// 首先定义或者引入路由的组件
import Routes from './js/router.js';
Vue.use(VueRouter);
Vue.use(Pop);
Vue.component('app-layout', AppLayout);
// 接着创建路由实例
const router = new VueRouter({
  // ES6缩写语法，相当于routes:routes
  routes:Routes  
});
// 或者
const app = new Vue({
  router
}).$mount('#app')

router.beforeEach((to, from, next)=> {
    if(!Constant.isLogin){//未登入
        next({ path: '/' });
        console.info('请登入');
    }else{
        next();
    }
})