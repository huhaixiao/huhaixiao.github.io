import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";
import "./normalize.css";

const root = createRoot(document.querySelector("#app") as HTMLElement);
root.render(<App />);
