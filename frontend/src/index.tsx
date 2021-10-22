import React from 'react';
import ReactDOM from 'react-dom';

import AppRouter from './route'
import reportWebVitals from './reportWebVitals';
import './assets/css/index.css';

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
