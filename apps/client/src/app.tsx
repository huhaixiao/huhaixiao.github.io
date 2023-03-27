// https://reactjs.org/docs/code-splitting.html
// https://beta.reactjs.org/reference/react/Suspense
import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { Root, loader as rootLoader } from "./routes/root";
import { Contact, loader as contactLoader } from "./routes/contact";

export const App = () => {
  const router = createHashRouter(
    [
      {
        path: "/",
        element: <Root />,
        loader: rootLoader,
        children: [
          {
            path: "contact",
            element: <Contact />,
            loader: contactLoader,
          },
        ],
      },
    ],
    {
      // basename: "app",
    }
  );

  return <RouterProvider router={router} />;
};
