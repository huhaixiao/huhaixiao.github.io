import "./index.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./pages/";
import { forceDarkOn } from "./utils/dark-theme";

forceDarkOn();
const root = createRoot(document.querySelector("#app") as HTMLElement);
root.render(<App />);
