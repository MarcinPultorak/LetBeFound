import { FC } from "react";
import Image from "next/image";
import cx from "classnames";
import { HexagonTileDto } from "@/interfaces/types";

type Props = {
  data: HexagonTileDto;
};

const HexagonTile: FC<Props> = (props) => {
  return (
    <>
      <div className="card aspect-square">
        <div
          className="card-side front"
          style={{
            clipPath:
              "polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%)",
          }}
        >
          <div className="h-full w-full flex items-center justify-center">
            <Image
              src={`/images/${props.data.image}.png`}
              fill
              alt={`${props.data.image}`}
              className="absolute top-0 right-0 w-full h-full object-cover object-center z-0"
            />
            <div className="flex flex-col items-center justify-center px-20">
              <div className="h-0.5 w-full bg-slate-300 z-10" />
              <h2
                className="uppercase font-bold z-10 text-lg tracking-[0.15em] text-center mt-2"
                style={{ WebkitTextStroke: "1px black" }}
              >
                {props.data.label}
              </h2>
            </div>
          </div>
        </div>
        <div
          className="card-side back bg-blackPurple"
          style={{
            clipPath:
              "polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%)",
          }}
        >
          <div className="flex flex-col items-center justify-center h-full w-full px-14 space-y-4">
            <div className="h-0.5 w-full bg-slate-300 z-10" />
            <p className="text-justify text-sm leading-relaxed">
              {props.data.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HexagonTile;
