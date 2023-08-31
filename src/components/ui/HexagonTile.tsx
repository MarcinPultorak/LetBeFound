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
              width={500}
              height={500}
              alt={`${props.data.image}`}
              className="absolute top-0 right-0 w-full h-full object-cover object-center z-0"
            />
            <div className="flex flex-col items-center justify-center px-20">
              <div className="h-0.5 w-full bg-slate-300 z-10" />
              <h2
                className="uppercase font-bold z-10 text-lg lg:text-xl tracking-[0.15em] text-center mt-2"
                style={{ WebkitTextStroke: "1px black" }}
              >
                {props.data.label}
              </h2>
            </div>
            {props.data.demo && (
              <div className="flex items-center space-x-4 absolute z-50 bottom-12 ">
                <img
                  src="/images/icon-bulb.svg"
                  alt="icon-bulb"
                  className="w-12"
                />
                <p className="w-24 text-xs  uppercase font-bold text-orange-600">
                  Sprawdź co kryje się pod kafelkami!
                </p>
              </div>
            )}
          </div>
        </div>
        <div
          className="card-side back bg-blackPurple"
          style={{
            clipPath:
              "polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%)",
          }}
        >
          <div className="flex flex-col items-center justify-center h-full w-full px-8 xl:px-12 space-y-2">
            <div className="h-0.5 w-full bg-slate-300 z-10" />
            <p className="text-justify text-xs xl:text-sm leading-relaxed">
              {props.data.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HexagonTile;
