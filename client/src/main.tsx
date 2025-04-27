import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import AOS from 'aos';

// Initialize AOS
AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true,
  mirror: false
});

createRoot(document.getElementById("root")!).render(<App />);
