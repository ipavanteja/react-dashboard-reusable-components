import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DataProvider } from "./components/contexts/DataProvider.jsx";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </StrictMode>
);
