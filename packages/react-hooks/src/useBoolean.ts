import { useMemo } from "react";
import { useToggle } from "./useToggle";

interface Actions {
  setTrue: () => void;
  setFalse: () => void;
  set: (value: boolean) => void;
  toggle: () => void;
}

/**
 * Parameter cannot have question mark and initializer.
 */
export const useBoolean = (defaultValue: boolean = false) => {
  const [state, { set, toggle }] = useToggle(defaultValue);

  const actions: Actions = useMemo(() => {
    return {
      setTrue: () => set(true),
      setFalse: () => set(false),
      set: (v) => !!v,
      toggle,
    };
  }, []);

  return [state, actions];
};
