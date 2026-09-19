import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import DynamicMuiTheme from './components/DynamicMuiTheme.jsx'
import './index.css'
import { AppSettingsProvider } from './context/AppSettingsContext.jsx'
import { applyCachedThemeColorsFromStorage } from './utils/themeBranding.js'

applyCachedThemeColorsFromStorage()

createRoot(document.getElementById('root')).render(
  <AppSettingsProvider>
    <StrictMode>
      <DynamicMuiTheme>
        <App />
      </DynamicMuiTheme>
    </StrictMode>
  </AppSettingsProvider>,
)
