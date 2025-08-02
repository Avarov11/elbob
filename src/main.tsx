import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Performance optimization: Use requestIdleCallback for non-critical initialization
const renderApp = () => {
  const root = createRoot(document.getElementById('root')!);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
};

// Use requestIdleCallback if available, otherwise render immediately
if ('requestIdleCallback' in window) {
  requestIdleCallback(renderApp);
} else {
  renderApp();
}
