import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import axios from 'axios'

window.axios = axios

window.axios.defaults.baseURL = 'http://localhost:8000'
window.axios.defaults.headers.common['Accept'] = 'aplication/json'
window.axios.defaults.headers.common['Content-Type'] = 'aplication/json'
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
window.axios.defaults.withCredentials = true

loadFonts()

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .mount('#app')
