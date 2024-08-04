import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { HotelsProvider } from "./context/HotelsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HotelsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HotelsProvider>
  </React.StrictMode>
);
