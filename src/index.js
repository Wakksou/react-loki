import { CartProvider } from './utils/context/CartContext';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
      <Helmet>
          <title>Mexican Food</title>
          <meta name="description" content="Savourez les meilleurs plats mexicains chez vous : tacos, burritos, enchiladas. Cuisine
          authentique et livraison rapide" />
          <link rel="icon" type="image/png" href="..\public\favicon.ico" sizes="32x32" />
        </Helmet>
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
