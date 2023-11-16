import React, { useState } from "react";
import type { MouseEventHandler, ReactNode } from "react";
import { isPromise } from "../../utils/validate";

interface ButtonProps {
  loading?: boolean | "auto";
  disabled?: boolean;
  onClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void | Promise<void> | unknown;
  children?: ReactNode;
}

export const Button = (props: ButtonProps) => {
  const [innerLoading, setInnerLoading] = useState(false);
  const loading = props.loading === "auto" ? innerLoading : props.loading;
  const disabled = props.disabled || loading;
  const handleClick: MouseEventHandler<HTMLButtonElement> = async (e) => {
    if (!props.onClick) return;

    const promise = props.onClick(e);

    if (isPromise(promise)) {
      try {
        setInnerLoading(true);
        await promise;
      } catch (e) {
        setInnerLoading(false);
        throw e;
      }
    }
  };

  return (
    <button disabled={disabled} onClick={handleClick}>
      {loading ? "..." : <span>{props.children}</span>}
    </button>
  );
};
