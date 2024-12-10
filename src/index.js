import React from 'react';
import ReactDOM from 'react-dom/client'; // Cambiar a 'react-dom/client' para usar createRoot
import './index.css'; // Si tienes estilos
import App from './App';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root')); // Crear el root para React 18

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);