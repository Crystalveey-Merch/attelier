import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "./fonts/Quicksand/Quicksand-VariableFont_wght.ttf";
import { CartProvider } from "react-use-cart";
import { HelmetProvider } from "react-helmet-async";
import { store, persistor } from "./redux/store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <HelmetProvider>
      <React.StrictMode>
        <CartProvider>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <App />
              </LocalizationProvider>
            </PersistGate>
          </Provider>
        </CartProvider>
      </React.StrictMode>
    </HelmetProvider>
  </BrowserRouter>
);
