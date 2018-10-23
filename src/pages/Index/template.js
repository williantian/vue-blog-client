import request from '@/helpers/request.js'
import auth from '@/api/auth.js'
window.auth = auth
window.request = request

export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}