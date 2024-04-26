import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { DataProvider, ThemeProvider } from './utils/context'
import GlobalStyle from './utils/GlobaStyled'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalStyle />
        <DataProvider>
          <App />
        </DataProvider>
    </ThemeProvider>
  </React.StrictMode>
)
