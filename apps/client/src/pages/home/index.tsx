import React, { StrictMode, Suspense, useLayoutEffect } from "react";
import { Outlet } from "react-router-dom";
import { ThemeContextProvider } from "../../hooks/theme";

const Loading = () => {
  return <span>loading...</span>;
};

export const Home = () => {
  useLayoutEffect(() => {
    document.body.classList.add("bg-white", "dark:bg-black");
  }, []);
  return (
    <StrictMode>
      <Suspense fallback={<Loading />}>
        <ThemeContextProvider>
          <div className="bg-black dark:bg-black"></div>
          <div className="p-6">
            <a className="text-white" href="/wiki/" target="_blank">
              one
            </a>
            <Outlet />
          </div>
        </ThemeContextProvider>
      </Suspense>
    </StrictMode>
  );
};
