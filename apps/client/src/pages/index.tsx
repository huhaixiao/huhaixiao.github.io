// https://reactjs.org/docs/code-splitting.html
// https://beta.reactjs.org/reference/react/Suspense
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./home/";

export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: []
    },

  ]);

  return <RouterProvider router={router} />;
};
