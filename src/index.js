import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// INDEX se encarga de injectar los componentes recibidos de APP dentro de INDEX.HTML
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

