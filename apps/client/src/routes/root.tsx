import React, { StrictMode, Suspense, useLayoutEffect } from "react";
import { Outlet } from "react-router-dom";
import { ThemeContextProvider } from "../hooks/theme";

const Loading = () => {
  return <span>loading...</span>;
};

export const Root = () => {
  return (
    <StrictMode>
      <Suspense fallback={<Loading />}>
        <ThemeContextProvider>
          <div className="bg-white dark:bg-black h-screen p-6">
            <Outlet />
          </div>
        </ThemeContextProvider>
      </Suspense>
    </StrictMode>
  );
};
