import { useMemo, useState } from "react";

interface Actions<T> {
  setLeft: () => void;
  setRight: () => void;
  set: (value: T) => void;
  toggle: () => void;
}

export function useToggle<T = boolean>(): [T, Actions<T>];
export function useToggle<T>(defaultValue: T): [T, Actions<T>];
export function useToggle<D, R>(
  defaultValue: D,
  reverseValue: R
): [D | R, Actions<D | R>];
export function useToggle<D, R>(
  defaultValue = false as unknown as D,
  reverseValue?: R
) {
  const reverseValueOrigin = (
    reverseValue === undefined ? !defaultValue : reverseValue
  ) as D | R;
  const [state, setState] = useState<D | R>(defaultValue);
  const actions: Actions<D | R> = useMemo(() => {
    return {
      setLeft: () => setState(defaultValue),
      setRight: () => setState(reverseValueOrigin),
      set: (value: D | R) => setState(value),
      toggle: () =>
        setState((s) =>
          s === defaultValue ? reverseValueOrigin : defaultValue
        ),
    };
  }, []);

  return [state, actions];
}
