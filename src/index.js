import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/scss/main.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename='/sport-app-ignat' >
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

