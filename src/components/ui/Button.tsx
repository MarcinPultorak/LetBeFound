import cx from "classnames";

import { ButtonHTMLAttributes, FC } from "react";
import Spinner from "./Spinner";

type Props = {
  isSubmitting?: boolean;
  variant?: "primary" | "secondary" | "orange" | "sky" | "blank";
};
const Button: FC<ButtonHTMLAttributes<HTMLButtonElement> & Props> = ({
  isSubmitting,
  ...props
}) => {
  const variants: Record<string, string> = {
    blank: "",
    primary: "bg-sky-500 text-zinc-100 hover:bg-sky-800 px-5",
    secondary:
      "bg-white boder-black text-black border border-slate-400 hover:bg-slate-100",
    orange: "bg-orange-600 hover:bg-orange-500 text-zinc-100",
    sky: "bg-sky-800 hover:bg-sky-600 text-zinc-100",
  };

  return (
    <button
      {...props}
      className={cx(
        "relative flex h-14 w-full items-center justify-center whitespace-nowrap rounded-md text-base font-bold uppercase transition",
        props.className,
        variants[props.variant ?? "primary"]
      )}
      type={props.type}
      disabled={props.disabled || isSubmitting}
    >
      <>
        <Spinner
          className={cx(
            "absolute h-3 fill-current",
            isSubmitting ? "visible" : "invisible"
          )}
        />
        <span
          className={cx("flex h-full w-full items-center justify-center", {
            invisible: isSubmitting,
          })}
        >
          <span>{props.children}</span>
        </span>
      </>
    </button>
  );
};

export default Button;
