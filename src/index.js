import React from "react";
import ReactDOM from "react-dom/client";
import "the-new-css-reset/css/reset.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./contexts/AppContext";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function TermsOfServicePage() {
  return (
    <div>
      <h1>Terms of Service</h1>
      <Link to="/">Back to application</Link>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/tos" element={<TermsOfServicePage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

function PageNotFound() {
  return (
    <div>
      <h1>404</h1>
      <h2>Page not found</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();