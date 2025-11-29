import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./store/store";
import App from "./App";
import "./styles.css";

createRoot(document.getElementById("root")).render(
 <Provider store={store}>
  <BrowserRouter>
   <App />
  </BrowserRouter>
 </Provider>
);