import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './popup/index.css'
import App from './popup/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
