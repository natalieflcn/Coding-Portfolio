import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import SombraModeProvider from "./contexts/SombraModeProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SombraModeProvider>
      <App />
    </SombraModeProvider>
  </StrictMode>,
);
