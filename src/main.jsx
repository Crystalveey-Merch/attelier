import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "./fonts/Quicksand/Quicksand-VariableFont_wght.ttf";
import { CartProvider } from 'react-use-cart';
import { HelmetProvider } from 'react-helmet-async'



ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <HelmetProvider>
    <React.StrictMode>
    <CartProvider>
      <App />
      </CartProvider>
    </React.StrictMode>
    </HelmetProvider>
  </BrowserRouter>
);
