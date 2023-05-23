import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./GlobalStyle/globalStyles.ts";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
