import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AuthProvider from './Context/AuthContext'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './Context/ThemeContext.tsx'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>
);
