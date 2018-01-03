const routers = [
     {
        path: '/',
        component: require('../index.vue')
    },{
        path: '/page1',
        name: 'Page1',
        component: require('../page/page1.vue')
    }]
export default routers;