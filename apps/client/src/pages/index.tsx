// https://reactjs.org/docs/code-splitting.html
// https://beta.reactjs.org/reference/react/Suspense
import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { Home } from "./home/";

export const App = () => {
  const router = createHashRouter([
    {
      path: "/",
      element: <Home />,
    }
  ]);

  return <RouterProvider router={router} />;
};
