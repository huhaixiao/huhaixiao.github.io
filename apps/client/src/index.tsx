import "./index.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./routes/";

const root = createRoot(document.querySelector("#app") as HTMLElement);
root.render(<App />);
