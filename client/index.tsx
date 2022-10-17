import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

//import App from "./components/App.jsx";

//import store from "./store/store.js";


const container = document.getElementById('app') as Element;
const root = createRoot(container);

root.render(<h1>Hello from React</h1>);