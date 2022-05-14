import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './redux/store';

import './index.css';

ReactDom.render(
  <React.StrictMode>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
