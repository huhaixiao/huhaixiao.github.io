import React, { StrictMode, Suspense } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import { ThemeContextProvider } from "../features/theme";

const Loading = () => {
  return <span>loading...</span>;
};

export const Root = () => {
  const data = useLoaderData();
  return (
    <StrictMode>
      <Suspense fallback={<Loading />}>
        <ThemeContextProvider>
          <span>this is root111</span>
          <Outlet />
        </ThemeContextProvider>
      </Suspense>
    </StrictMode>
  );
};

export const loader = () => {
  return new Promise((resolve) => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then(resolve);
  });
};
