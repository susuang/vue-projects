import Vue from 'vue'
import Message from './src/main.vue'

Message.installMessage = function(type,duration) {
    if(typeof(duration) === 'number'){
        duration = duration
    }else{
        duration = 3000
    }
    var options = {
        type: type,
        duration: duration,
        isShow: true
    }
    var message = Vue.extend(Message)

    var component = new message({
        data: options
    }).$mount()
    document.querySelector('body').appendChild(component.$el)
};
['success', 'error'].forEach(function (type) {
    Message.installMessage[type] = function (duration) {
        return Message.installMessage(type,duration)
    }
});
export default Message