import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App.js';
import {APIContextProvider} from './context/APIContext';

ReactDOM.render(
  <React.StrictMode>
    <APIContextProvider>
      <App />
    </APIContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
