import React, { StrictMode, Suspense, useLayoutEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { ThemeContextProvider } from "../../hooks/theme";

const Loading = () => {g
  return <span>loading...</span>;
};

export const Home = () => {
  useLayoutEffect(() => {
    fetch("http://localhost:80")
      .then<{ foo: string }>((response) => response.json())
      .then((result) => {
        console.log({ result });
      })
      .catch((error) => {
        console.log({ error });
      });
    // document.body.classList.add("bg-white", "dark:bg-black");
  }, []);
  return (
    <StrictMode>
      <Suspense fallback={<Loading />}>
        <ThemeContextProvider>
          <div className="grid grid-cols-12">
            <a
              className="text-white m-auto block text-center"
              href="/core/"
              target="_blank"
            >
              one
            </a>
            <Link className="text-white" to="/login">
              Login
            </Link>
          </div>
          <Outlet />
        </ThemeContextProvider>
      </Suspense>
    </StrictMode>
  );
};
