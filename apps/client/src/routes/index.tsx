// https://reactjs.org/docs/code-splitting.html
// https://beta.reactjs.org/reference/react/Suspense
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./home/";
import { Login } from "./login";
import { ConfigProvider, theme } from "antd";
import zhCN from "antd/locale/zh_CN";
import enUS from "antd/locale/en_US";

export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "login",
          element: <Login />,
        },
      ],
    },
  ]);

  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          // Seed Token，影响范围大
          colorPrimary: "#00b96b",
          borderRadius: 2,

          // 派生变量，影响范围小
          colorBgContainer: "black",
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  );
};
