import { createRoot } from "react-dom/client";
import "./index.css";
import "./custom.css";
import "./cms.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
createRoot(document.querySelector("#root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
