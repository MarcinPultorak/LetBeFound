import Link from "next/link";
import { FC } from "react";

const LogoHorizontalMobile: FC = () => {
  return (
    <Link href={"/"}>
      <img
        className="w-48 h-full"
        src="/images/logo_horizontal_white.svg"
        alt="letbefound-logo"
      />
    </Link>
  );
};

export default LogoHorizontalMobile;
