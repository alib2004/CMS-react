import { createRoot } from "react-dom/client";
import "./index.css";
import "./custom.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
createRoot(document.querySelector("body")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
