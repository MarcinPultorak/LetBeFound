import { ForwardRefComponent } from "framer-motion";
import {
  FC,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  forwardRef,
} from "react";

export type InputProps = {
  label: string;
};

const Checkbox: ForwardRefRenderFunction<
  HTMLInputElement,
  InputProps & InputHTMLAttributes<HTMLInputElement>
> = ({ label, ...props }, ref) => {
  return (
    <>
      <label className="flex space-x-6">
        <input
          {...props}
          ref={ref}
          type="checkbox"
          className="w-4 h-4 sm:w-6 sm:h-6 checked:text-orange-600 bg-sky-800 bg-opacity-20 focus:ring-0 focus:outline-none focus:ring-offset-0 border border-orange-600"
        />
        <span>{label}</span>
      </label>
    </>
  );
};

export default forwardRef(Checkbox);
