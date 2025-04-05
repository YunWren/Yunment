import './assets/main.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { createApp } from 'vue'

import App from './App.vue'


library.add(fas)
// import './assets/main.css'
import './styles/index.css'


createApp(App)
  .mount('#app')
