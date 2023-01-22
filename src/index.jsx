// LIBs
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// STORE
import { store, persistor } from './core/store';

// APPLICATION
import App from './views/App';

// CONFIG
import config from "./core/config/App.config";

// STYLESHEETs
import "./core/StyleSheets/_extends.scss";

console.log("Mode: "+process.env.NODE_ENV);
console.log("Config Path: "+config.path);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
