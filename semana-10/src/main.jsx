import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalStyle } from './components/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { theme } from './components/Theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider  theme= {theme}>
    <GlobalStyle />
    <App />
    </ThemeProvider>
  </React.StrictMode>,
)
