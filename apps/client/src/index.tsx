import "./index.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";
import { setup as setupDarkTheme } from "./utils/dark-theme";

setupDarkTheme();
const root = createRoot(document.querySelector("#app") as HTMLElement);
root.render(<App />);
