import React, { StrictMode, Suspense, useLayoutEffect } from "react";
import { Outlet, Link } from "react-router-dom";
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
          <div className="p-6 grid grid-cols-2 gap-x-2">
            <a className="text-white" href="/core/" target="_blank">
              one
            </a>
            <Link className="text-white" to="checklist">
              checklist
            </Link>
          </div>
          <Outlet />
        </ThemeContextProvider>
      </Suspense>
    </StrictMode>
  );
};
