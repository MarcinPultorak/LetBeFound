import Link from "next/link";
import { FC } from "react";

const LogoText: FC = () => {
  return (
    <Link href={"/"}>
      <div className="flex items-center gap-2 uppercase font-medium text-xs h-28 w-full">
        <img className="f-full w-full" src="/images/logo-about-us.svg" />
        <div>
          <p
            style={{
              color: "#f5793b",
            }}
          >
            let
          </p>
          <p
            style={{
              color: "#aa3982",
            }}
          >
            be
          </p>
          <p
            style={{
              color: "#20acbd",
            }}
          >
            found
          </p>
        </div>
      </div>
    </Link>
  );
};

export default LogoText;
