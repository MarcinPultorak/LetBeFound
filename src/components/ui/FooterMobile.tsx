import { FC } from "react";
import Link from "next/link";
import LogoVerticalMobile from "./LogoVerticalMobile";
import LogoHorizontalMobile from "./LogoHorizontalMobile";

const FooterMobile: FC = () => {
  return (
    <footer
      className="border-t border-zinc-600 px-5 py-5 sm:px-10"
      style={{
        backgroundColor: "#070B16",
      }}
    >
      <div className="max-w-screen-2xl w-full mx-auto flex justify-between items-center">
        <div>
          <LogoHorizontalMobile />
        </div>
        <div className="text-end">
          <p className="text-xs sm:text-sm">Copyright © 2023 LetBeFound</p>
          <Link className="text-xs sm:text-sm" href={"polityka-prywatnosci"}>
            Polityka prywatności
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default FooterMobile;
