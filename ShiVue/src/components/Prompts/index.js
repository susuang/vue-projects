import ShiLoading from './loading/index.js'
import ShiMessage from './message/index.js'

const install = function(Vue) {
  Vue.component(ShiLoading.name, ShiLoading)
  Vue.component(ShiMessage.name, ShiMessage)

  Vue.prototype.$message = ShiMessage.installMessage
}
export default install