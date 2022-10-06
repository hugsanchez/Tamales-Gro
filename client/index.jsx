import React from "react";
import { Provider } from "react-redux";
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from "./components/App.jsx";

import store from "./store/store.js";


const container = document.getElementById('app');
const root = createRoot(container);

root.render(
  <Provider store={store}>
      <App/>
  </Provider>
);