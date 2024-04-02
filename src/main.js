import './assets/main.css'
import { Icon } from '@iconify/vue'
import vClickOutside from 'click-outside-vue3'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vClickOutside)

app.component('Icon', Icon)

app.mount('#app')
