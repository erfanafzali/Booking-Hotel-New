import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HotelsProvider } from "./context/HotelsContext.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <HotelsProvider>
        <App />
      </HotelsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
