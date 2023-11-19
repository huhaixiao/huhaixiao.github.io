import React, { StrictMode, Suspense, useLayoutEffect } from "react";
import { Outlet } from "react-router-dom";
import { ThemeContextProvider } from "../../hooks/theme";
import { createGlobalStyle } from "styled-components";
import { Link } from '../../components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: black;
  }
`;

const Loading = () => {
  return <span>loading...</span>;
};

export const Home = () => {
  useLayoutEffect(() => {
    fetch("http://101.43.180.155:8888")
      .then<{ foo: string }>((response) => response.json())
      .then((result) => {
        console.log({ result });
      })
      .catch((error) => {
        console.log({ error });
      });
  }, []);
  return (
    <>
      <GlobalStyle />
      <StrictMode>
        <Suspense fallback={<Loading />}>
          <ThemeContextProvider>
            <div className="grid grid-cols-12">
              <Link
                className="text-white m-auto block text-center"
                href="/core/"
                target="_blank"
              >
                one
              </Link>
              <Link className="text-white" to="/login">
                Login
              </Link>
            </div>
            <Outlet />
          </ThemeContextProvider>
        </Suspense>
      </StrictMode>
    </>
  );
};
