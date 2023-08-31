import { HexagonTileDto } from "@/interfaces/types";
import { FC } from "react";
import Image from "next/image";

type Props = {
  data: HexagonTileDto;
};

const HexagonTileStatic: FC<Props> = (props) => {
  return (
    <>
      <div
        style={{
          filter: "drop-shadow(0px 4px 20px #000)",
        }}
      >
        <div
          className="card-static aspect-square"
          style={{
            clipPath:
              "polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%)",
          }}
        >
          <div className="h-full w-full flex items-center justify-center">
            <Image
              src={`/images/${props.data.image}.png`}
              width={250}
              height={250}
              alt={`${props.data.image}`}
              className="absolute top-0 right-0 w-full h-full object-cover object-center z-0"
            />
            <div className="flex flex-col items-center justify-center px-20">
              <div className="h-0.5 w-full bg-slate-300 z-10" />
              <h2
                className="uppercase font-bold z-10 text-base tracking-[0.15em] text-center mt-2"
                style={{ WebkitTextStroke: "1px black" }}
              >
                {props.data.label}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HexagonTileStatic;
