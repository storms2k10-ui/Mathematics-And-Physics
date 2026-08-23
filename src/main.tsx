import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { initDeveloperInsights } from './lib/developerInsights';
import './index.css';
import 'katex/dist/katex.min.css';

// Initialize background developer insights telemetry (hidden from users)
initDeveloperInsights();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
);


