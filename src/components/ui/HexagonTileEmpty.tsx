import { FC } from "react";

const HexagonTileEmpty: FC = () => {
  return (
    <div
      className="h-full w-full min-w-[290px] min-h-[290px] bg-blackPurple aspect-square"
      style={{
        clipPath:
          "polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%)",
      }}
    ></div>
  );
};

export default HexagonTileEmpty;
