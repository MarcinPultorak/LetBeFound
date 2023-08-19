"use client";

import { FC, useEffect, useState } from "react";
import cx from "classnames";
import Button from "./Button";

const SwitchIcon: FC = () => {
  const [moveSwitch, setMoveSwitch] = useState<boolean>(false);

  useEffect(() => {
    setMoveSwitch(false);
    let interval = setInterval(() => {
      setMoveSwitch((prev) => !prev);
    }, 700);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="flex justify-center w-9 h-16 border border-orange-600 rounded-full">
        <div
          className={cx(
            "w-6 h-6 bg-orange-600 rounded-full mt-1",
            moveSwitch
              ? "transition translate-y-[30px] duration-700 ease-out opacity-0"
              : ""
          )}
        />
      </div>
      <Button onClick={() => setMoveSwitch((prev) => !prev)}>Test</Button>
    </>
  );
};

export default SwitchIcon;
