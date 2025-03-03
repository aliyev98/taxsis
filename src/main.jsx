import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from "react-redux";
import { store } from "./redux/store/store.js";
import { HelmetProvider } from "react-helmet-async";
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
