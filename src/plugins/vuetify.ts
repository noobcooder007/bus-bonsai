/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { md3 } from 'vuetify/blueprints'

// Composables
import { createVuetify } from 'vuetify'
import { es } from 'vuetify/locale'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  components,
  directives,
  blueprint: md3,
  locale: {
    locale: 'es',
    fallback: 'en',
    messages: { es }
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          "primary": "#705D00",
          "surface": "#FFF8EF",
          "on-primary": "#FFFFFF",
          "secondary": "#482D25",
          "on-secondary": "#FFFFFF",
          "error": "#BA1A1A",
          "on-error": "#FFFFFF",
          "background": "#FFF8EF",
          "on-background": "#1F1B10",
        }
      },
      dark: {
        dark: true,
        colors: {
          "primary": "#FFFFFF",
          "surface": "#161309",
          "on-primary": "#3A3000",
          "secondary": "#E7BDB1",
          "on-secondary": "#442A22",
          "error": "#FFB4AB",
          "on-error": "#690005",
          "background": "#161309",
          "on-background": "#EAE2CF"
        }
      }
    }
  },
})
