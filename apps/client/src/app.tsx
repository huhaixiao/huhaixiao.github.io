// https://reactjs.org/docs/code-splitting.html
// https://beta.reactjs.org/reference/react/Suspense
import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { Index } from "./routes";
import { Store } from "./routes/antd-mobile";

export const App = () => {
  const router = createHashRouter(
    [
      {
        path: "/",
        element: <Index />,
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
