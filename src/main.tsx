import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'sonner'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
    <Toaster position="top-center" richColors theme="light" />
  </React.StrictMode>,
)
