import Link from "next/link";
import { FC } from "react";

const Logo: FC = () => {
  return (
    <div className="h-28 w-full">
      <Link href={"/"}>
        <img src="/images/logo.svg" className="h-full w-full" />
      </Link>
    </div>
  );
};

export default Logo;
