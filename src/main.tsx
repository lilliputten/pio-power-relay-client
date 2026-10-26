import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.tsx';
// import { AppMini } from './AppMini.tsx';

import './index.css';

const root = document.getElementById('root');

console.log('main');

if (root) {
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
