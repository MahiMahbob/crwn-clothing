import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ShopContextProvider } from './context/shopContext';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <ShopContextProvider>
      <Router>
        <App />
      </Router>
    </ShopContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
