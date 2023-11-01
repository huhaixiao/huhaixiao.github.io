import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import { createGlobalStyle } from "styled-components";

interface ITheme {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

const StyledTheme = createGlobalStyle<Pick<ITheme, "isDark">>`
  /*
    * :root 表示 <html> 元素
    * 优先级更高
    */
  :root {
    color-scheme: ${({ isDark }) => (isDark ? "dark" : "light")};
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

const ThemeContext = createContext<ITheme>({
  isDark: false,
  setIsDark: () => {},
});

/**
 * https://react.dev/reference/react/useContext#returns
 * 1. It is determined as the value passed to the closest
 *  SomeContext.Provider above the calling component in the tree.
 * 2. If there is no such provider
 *  then the returned value will be the defaultValue
 *  you have passed to createContext for that context.
 * @returns
 */
export const useThemeContext = () => useContext(ThemeContext);
export const ThemeContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const themeContext = useThemeContext();
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeContext.Provider
      value={{
        ...themeContext,
        isDark,
        setIsDark,
      }}
    >
      <StyledTheme isDark={isDark} />
      {children}
    </ThemeContext.Provider>
  );
};
