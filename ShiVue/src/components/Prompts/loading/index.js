import Vue from 'vue'
import Loading from './src/main.vue'

const loadingConstructor = Vue.extend(Loading);

Vue.prototype.$loading = function (type) {
    var loadNode = new loadingConstructor().$mount();
    let node = document.querySelector('.shi-prompt');
    if (node && node.parentNode) {
        node.parentNode.removeChild(node)
    }
    if(type === 'close'){
        let node = document.querySelector('.shi-prompt');
        if (node && node.parentNode) {
            node.parentNode.removeChild(node)
        }
    }else {
        document.querySelector('body').appendChild(loadNode.$el);
    }
};
 
['open', 'close'].forEach(function (type) {
    Vue.prototype.$loading[type] = function () {
      return Vue.prototype.$loading(type)
    }
});

export default Loading