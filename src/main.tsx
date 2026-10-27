import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from '@/App';
import '@/index.css';
import { MainWrapper } from '@/components/wrappers';
import { isDev, VITE_NO_STRICT_MODE } from '@/config';

const root = document.getElementById('root');

let content = (
  <MainWrapper>
    <App />
  </MainWrapper>
);

if (isDev && !VITE_NO_STRICT_MODE) {
  content = (
    <React.StrictMode>
      {/* Wrap content in StrictMode if development mode */}
      {content}
    </React.StrictMode>
  );
}

if (root) {
  createRoot(root).render(content);
}
