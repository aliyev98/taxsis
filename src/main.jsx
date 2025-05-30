import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from "react-redux";
import store from "./redux/store/store";
import { HelmetProvider } from "react-helmet-async";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'devextreme/dist/css/dx.light.css'; 
import 'devextreme/dist/css/dx.common.css';


import React from 'react';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
)
