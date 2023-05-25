import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./GlobalStyle/globalStyles.ts";
import { BrowserRouter } from "react-router-dom";
import { AllContexts } from "./Components/allContexts/index.tsx";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <AllContexts>
        <App />
      </AllContexts>
    </BrowserRouter>
  </React.StrictMode>
);
