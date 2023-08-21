import React, { FC, ReactNode } from "react";

type LabelProps = {
  required?: boolean;
  children: ReactNode;
};

const Label: FC<LabelProps> = ({ required, children }) => {
  return (
    <span className="mb-2 flex cursor-pointer items-start font-bold">
      <span className="block text-xs text-zinc-300">{children}</span>
      {required && (
        <span className="my-0.5 mx-1 h-1 w-1 rounded-full bg-red-500" />
      )}
    </span>
  );
};

export default Label;
