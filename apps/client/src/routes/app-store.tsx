import React, { useLayoutEffect, useState } from "react";
import { Switch } from "antd-mobile";
import { Link } from "react-router-dom";
import { forceDarkOn, forceLightOn } from "../utils/dark-theme";
import { Animation } from "../components/animation";

const data: Array<{ title: string; url: string }> = [
  {
    title: "MDN",
    url: "https://mdn.io",
  },
  {
    title: "React",
    url: "https://react.dev",
  },
  {
    title: "TypeScript",
    url: "https://www.typescriptlang.org/",
  },
  {
    title: "React Router",
    url: "https://reactrouter.com/",
  },
  {
    title: "webpack",
    url: "https://webpack.js.org/",
  },
  {
    title: "Github",
    url: "https://github.com/",
  },
  {
    title: "Tailwind CSS",
    url: "https://tailwindcss.com/",
  },
  {
    title: "Ant Design",
    url: "https://ant.design/",
  },
  {
    title: "Ant Design Mobile",
    url: "https://mobile.ant.design/",
  },
  {
    title: "ahooks",
    url: "https://ahooks.js.org/",
  },
  {
    title: "Ant Design Pro Components",
    url: "https://procomponents.ant.design/",
  },
];

export const Store = () => {
  const [isDark, setIsDark] = useState(false);

  useLayoutEffect(() => {
    setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  return (
    <div>
      <Animation></Animation>
      <div className="grid place-items-end">
        <Switch
          checked={isDark}
          checkedText="dark"
          uncheckedText="light"
          onChange={(checked) => {
            setIsDark(checked);
            if (checked) {
              forceDarkOn();
            } else {
              forceLightOn();
            }
          }}
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {data.map((item) => {
          return (
            <Link
              key={item.url}
              className="grid place-content-center text-lg border-2 rounded-sm border-black dark:border-white h-16 p-2 m-2"
              to={item.url}
              target="_blank"
            >
              <div>{item.title}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
