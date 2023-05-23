import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes'
import { ThemeProvider } from '@mui/material'
import { LightTheme } from './shared/themes'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={LightTheme}>
    <React.StrictMode>
      <BrowserRouter>

        <AppRoutes />
      </BrowserRouter>
  
  </React.StrictMode >
  </ThemeProvider>
)
