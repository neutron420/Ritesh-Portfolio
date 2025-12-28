import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Set body class immediately to prevent white flash
document.body.classList.add("loaded");

createRoot(document.getElementById("root")!).render(<App />);
