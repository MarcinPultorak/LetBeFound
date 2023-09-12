import Link from "next/link";
import { FC } from "react";

const LogoHorizontal: FC = () => {
  return (
    <Link href={"/"}>
      <img
        className="w-60"
        src="/images/logo_horizontal_white.svg"
        alt="letbefound-logo"
      />
    </Link>
  );
};

export default LogoHorizontal;
