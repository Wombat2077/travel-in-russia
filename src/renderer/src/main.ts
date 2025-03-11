import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import theme from './theme'

createApp(App)
  .use(PrimeVue, {
    theme: {
        preset: theme,
        options: {
            darkModeSelector: '.app-dark' // TODO: add dark mode
        }
    },
    
  })
  .mount('#app')
