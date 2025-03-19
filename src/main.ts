import './assets/css/skel-noscript.css'
import './assets/css/style.css'
import './assets/css/style-desktop.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
