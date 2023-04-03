import React from "react";
import { createRoot } from "react-dom/client";
// import { fetchInterceptor } from "@huhaixiao/utils";
import { App } from "./app";
import "./normalize.css";
import "./main.css";
import { setup as setupDarkTheme } from './utils/dark-theme';

setupDarkTheme();
// fetchInterceptor.on();
// fetchInterceptor.add({
//   onResponse(response) {
//     const cloned = response.clone();
//     console.log(cloned);
//     response.json().then((result) => {
//       console.log({ result });
//     });
//     return cloned;
//   },
// });
const root = createRoot(document.querySelector("#app") as HTMLElement);
root.render(<App />);
