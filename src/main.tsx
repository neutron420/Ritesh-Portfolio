import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { registerSW } from 'virtual:pwa-register';

// Register PWA service worker
registerSW({ immediate: true });

// Set body class immediately to prevent white flash
document.body.classList.add("loaded");

createRoot(document.getElementById("root")!).render(<App />);
