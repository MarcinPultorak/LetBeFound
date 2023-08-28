import cx from "classnames";
import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from "react";
import Label from "./Label";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

export type InputProps = {
  label?: string;
  errorMessage?:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl>
    | undefined;
};

const FormInput: ForwardRefRenderFunction<
  HTMLInputElement,
  InputProps & InputHTMLAttributes<HTMLInputElement>
> = ({ label, errorMessage, ...props }, ref) => {
  return (
    <div>
      <label className="block">
        {label && <Label required={props.required}>{label}</Label>}
        <span className={cx("flex w-full items-center")}>
          <input
            {...props}
            ref={ref}
            disabled={props.disabled}
            className={cx(
              "h-12 w-full appearance-none rounded-md border bg-black px-3 text-sm text-zinc-300 focus:outline-none focus:ring-2 disabled:border-gray-200 disabled:bg-gray-50",
              errorMessage
                ? "border-red-500 text-red-500 focus:border-red-500 focus:ring-red-500"
                : "border-zinc-600 focus:ring-sky-800",
              {
                "opacity-50": props.disabled,
              }
            )}
          />
        </span>
      </label>
      {errorMessage && (
        <div className="my-2 text-xs text-red-500">{`${errorMessage}`}</div>
      )}
    </div>
  );
};

export default forwardRef(FormInput);
