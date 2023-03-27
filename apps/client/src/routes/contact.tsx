import React, { useCallback, useEffect, useState } from "react";
import { useToggle, useLatest } from "@huhaixiao/react-hooks";
import { Button } from "@huhaixiao/react-components";
import { useThemeContext } from "../features/theme";

export const Contact = () => {
  const { isDark, setIsDark } = useThemeContext();
  const [state, { setLeft, setRight, toggle, set }] = useToggle(
    "male",
    "female"
  );
  const [rand, setRand] = useState("");
  const latestRand = useLatest(rand);

  const showLatestRand = useCallback(() => {
    console.log(latestRand.current);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setRand(Math.random().toString().slice(0, 8));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Button
      onClick={() => {
        toggle();
        showLatestRand();
        setIsDark((state) => !state);
      }}
    >
      contact {state}
    </Button>
  );
};

export const loader = () => {
  return new Promise((resolve, reject) => {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "kminchelle",
        password: "0lelplR",
        // expiresInMins: 60, // optional
      }),
    })
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });
};
