import Link from "next/link";
import { FC } from "react";

const LogoHorizontalMobile: FC = () => {
  return (
    <Link href={"/"}>
      <img
        className="h-16 w-16"
        src="/images/logo_horizontal_white.svg"
        alt="letbefound-logo"
      />
    </Link>
  );
};

export default LogoHorizontalMobile;
