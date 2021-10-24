import React from 'react';
import ReactDOM from 'react-dom';

import AppRouter from './route'
import reportWebVitals from './reportWebVitals';
import './assets/css/index.css';
import { Provider } from 'react-redux';

import store from './store/store'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
