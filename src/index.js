import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/app.js';
import reportWebVitals from './reportWebVitals';
import "./styles/index.scss";
import "./styles/home.scss";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
