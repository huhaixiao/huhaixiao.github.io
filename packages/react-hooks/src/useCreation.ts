import { useRef, DependencyList } from "react";
import { depsAreSame } from "./utils";

export const useCreation = <T>(factory: () => T, deps: DependencyList) => {
  const { current } = useRef({
    deps,
    obj: undefined as undefined | T,
    initialized: false,
  });
  if (current.initialized === false || !depsAreSame(deps, current.deps)) {
    current.deps = deps;
    current.obj = factory();
    current.initialized = true;
  }

  return current.obj as T;
};
