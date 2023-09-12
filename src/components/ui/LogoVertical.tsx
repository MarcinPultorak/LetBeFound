import Link from "next/link";
import { FC } from "react";

const LogoVertical: FC = () => {
  return (
    <Link href={"/"}>
      <img
        className="h-24 w-24"
        src="/images/logo_vertical_white.svg"
        alt="letbefound-logo"
      />
    </Link>
  );
};

export default LogoVertical;
