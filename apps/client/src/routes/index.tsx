import React, { StrictMode, Suspense, useLayoutEffect } from "react";
import { Outlet } from "react-router-dom";
import { ThemeContextProvider } from "../hooks/theme";

const Loading = () => {
  return <span>loading...</span>;
};

export const Index = () => {
  useLayoutEffect(() => {
    document.body.classList.add("bg-white", "dark:bg-black");
  }, []);
  return (
    <StrictMode>
      <Suspense fallback={<Loading />}>
        <ThemeContextProvider>
          <div className="bg-white dark:bg-black"></div>
          <div className="p-6">
            <Outlet />
          </div>
        </ThemeContextProvider>
      </Suspense>
    </StrictMode>
  );
};
