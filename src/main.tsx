import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Menu } from './shared/components/menu'
import { AppRoutes } from './routes'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>,
)
