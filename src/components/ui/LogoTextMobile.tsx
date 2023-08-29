import Link from "next/link";
import { FC } from "react";

const LogoTextMobile: FC = () => {
  return (
    <Link href={"/"}>
      <div className="flex items-center w-full gap-2 uppercase font-medium text-xs shrink-0 ">
        <img
          className="h-16 w-16"
          src="/images/logo-about-us.svg"
          alt="letbefound-logo"
        />
        <div className="text-[8px] leading-snug shrink-0">
          <div
            style={{
              color: "#f5793b",
              textShadow: "0px 1px 2px #050915",
            }}
          >
            let
          </div>
          <div
            style={{
              color: "#aa3982",
              textShadow: "0px 1px 2px #050915",
            }}
          >
            be
          </div>
          <div
            style={{
              color: "#20acbd",
              textShadow: "0px 1px 2px #050915",
            }}
          >
            found
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LogoTextMobile;
