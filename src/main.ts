/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '../src/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router/index'

const app = createApp(App)

registerPlugins(app)

app.use(createPinia()).use(router).mount('#app')
