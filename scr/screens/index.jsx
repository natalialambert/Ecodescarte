import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Inicio } from "./screens/Inicio";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <Inicio />
  </StrictMode>,
);
