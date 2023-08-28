import Link from "next/link";
import { FC } from "react";

const LogoTextMobile: FC = () => {
  return (
    <Link href={"/"}>
      <div className="flex items-center gap-2 uppercase font-medium text-xs h-16 w-16">
        <img
          className="h-full w-full"
          src="/images/logo-about-us.svg"
          alt="letbefound-logo"
        />
        <div className="text-[8px] leading-snug">
          <p
            style={{
              color: "#f5793b",
              textShadow: "0px 1px 2px #050915",
            }}
          >
            let
          </p>
          <p
            style={{
              color: "#aa3982",
              textShadow: "0px 1px 2px #050915",
            }}
          >
            be
          </p>
          <p
            style={{
              color: "#20acbd",
              textShadow: "0px 1px 2px #050915",
            }}
          >
            found
          </p>
        </div>
      </div>
    </Link>
  );
};

export default LogoTextMobile;
