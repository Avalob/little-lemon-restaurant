import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import 'modern-normalize/modern-normalize.css';
import './index.css';
import ScrollToTop from "./components/layout/ScrollToTop";
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    >
      <ScrollToTop />
      <App />
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
