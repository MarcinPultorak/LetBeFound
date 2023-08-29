import Link from "next/link";
import { FC } from "react";

const LogoText: FC = () => {
  return (
    <Link href={"/"}>
      <div className="flex items-center gap-2 uppercase font-medium text-xs shrink-0">
        <img
          className="h-24 w-24"
          src="/images/logo-about-us.svg"
          alt="letbefound-logo"
        />
        <div>
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

export default LogoText;
