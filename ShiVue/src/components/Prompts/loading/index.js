import Vue from 'vue'
import Loading from './src/main.vue'

const loadingConstructor = Vue.extend(Loading);

Vue.prototype.$loading = function (tips, type) {
    var loadNode = new loadingConstructor().$mount();
    let node = document.querySelector('.shi-loading');
    if (node && node.parentNode) {
        node.parentNode.removeChild(node)
    }
    if(type === 'close'){
        let node = document.querySelector('.shi-loading');
        if (node && node.parentNode) {
            node.parentNode.removeChild(node)
        }
    }else {
        document.querySelector('#info').appendChild(loadNode.$el);
    }
};
 
['open', 'close'].forEach(function (type) {
    Vue.prototype.$loading[type] = function (tips) {
      return Vue.prototype.$loading(tips, type)
    }
});

export default Loading