import React from "react";
import ReactDOM from "react-dom/client";
const { createRoot } = ReactDOM;
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import  StoreContextProvider  from "./context/StoreContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </BrowserRouter>
);
