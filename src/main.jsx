import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HotelsProvider } from "./context/HotelsContext.jsx";
import { BrowserRouter } from "react-router-dom";
import BookmarkProvider from "./context/BookmarkContext.jsx";
import AuthProvider from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <BookmarkProvider>
          <HotelsProvider>
            <App />
          </HotelsProvider>
        </BookmarkProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
