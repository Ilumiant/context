import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './global.css'
import './theme.css'
import { ThemeContextProvider } from './context/ThemeContext'
import { LanguageContextProvider } from './context/LanguageContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <LanguageContextProvider>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </LanguageContextProvider>
)
