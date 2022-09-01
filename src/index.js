import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'
import globalEs from './translation/es/global.json'
import globalRu from './translation/ru/global.json'

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'ru',
  resources: {
    es: {
      global: globalEs
    },
    ru: {
      global: globalRu
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
)
