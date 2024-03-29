import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
// import fontawesome icon component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faBars, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Vue3Toasity, { type ToastContainerOptions } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

import App from './App.vue'
import router from './router'

library.add(faTwitter, faLinkedin, faBars, faEnvelope)
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Vue3Toasity, {
  autoClose: 3000
  // ...
} as ToastContainerOptions)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
