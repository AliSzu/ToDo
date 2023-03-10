import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import Card from './components/Card/Card';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <App />
);

