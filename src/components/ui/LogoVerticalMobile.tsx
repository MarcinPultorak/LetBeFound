import Link from "next/link";
import { FC } from "react";

const LogoVerticalMobile: FC = () => {
  return (
    <Link href={"/"}>
      <img
        className="h-16 w-16"
        src="/images/logo_vertical_white.svg"
        alt="letbefound-logo"
      />
    </Link>
  );
};

export default LogoVerticalMobile;
