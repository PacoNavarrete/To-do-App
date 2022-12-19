import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App.jsx';
import './index.css';

const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
