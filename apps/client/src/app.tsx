// https://reactjs.org/docs/code-splitting.html
// https://beta.reactjs.org/reference/react/Suspense
import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { Root } from "./routes/root";
import { Store } from "./routes/app-store";

export const App = () => {
  const router = createHashRouter(
    [
      {
        path: "/",
        element: <Root />,
        children: [
          {
            path: "/",
            element: <Store />,
          },
        ],
      },
    ]
  );

  return <RouterProvider router={router} />;
};
