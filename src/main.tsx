import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import AppLayout from './components/layout/appLayout'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppLayout />
  </StrictMode>,
)
