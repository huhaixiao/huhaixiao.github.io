import React, { StrictMode, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ThemeContextProvider } from "../features/theme";

const Loading = () => {
  return <span>loading...</span>;
};

export const Root = () => {
  return (
    <StrictMode>
      <Suspense fallback={<Loading />}>
        <ThemeContextProvider>
          <Outlet />
        </ThemeContextProvider>
      </Suspense>
    </StrictMode>
  );
};
