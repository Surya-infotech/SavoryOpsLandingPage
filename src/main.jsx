import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import DynamicMuiTheme from './components/DynamicMuiTheme.jsx'
import './index.css'
import { AuthProvider } from './Middleware/Auth.jsx'
import { AppSettingsProvider } from './context/AppSettingsContext.jsx'
import { applyCachedThemeColorsFromStorage } from './utils/themeBranding.js'

// Apply last successful theme immediately to avoid flash before API resolves.
applyCachedThemeColorsFromStorage()

createRoot(document.getElementById('root')).render(
  <AppSettingsProvider>
    <AuthProvider>
      <StrictMode>
        <DynamicMuiTheme>
          <App />
        </DynamicMuiTheme>
      </StrictMode>
    </AuthProvider>
  </AppSettingsProvider>,
)
