import { FC, useEffect, useState } from "react";
import cx from "classnames";

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
      <div className="flex justify-center w-6 h-12 sm:w-9 sm:h-16 border border-orange-600 rounded-full">
        <div
          className={cx(
            "w-4 h-4 sm:w-6 sm:h-6 bg-orange-600 rounded-full mt-1",
            {
              "transition translate-y-[24px] sm:translate-y-[30px] duration-700":
                moveSwitch,
            }
          )}
        />
      </div>
    </>
  );
};

export default SwitchIcon;
