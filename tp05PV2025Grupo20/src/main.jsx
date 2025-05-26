import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App2 from './assets/components/App2'; // Importa App2 desde assets/components
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App2 />
  </StrictMode>
);