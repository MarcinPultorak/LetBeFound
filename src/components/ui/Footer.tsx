import { FC } from "react";
import Link from "next/link";
import LogoHorizontal from "./LogoHorizontal";
import LogoVertical from "./LogoVertical";

const Footer: FC = () => {
  return (
    <footer
      className="border-t border-zinc-600 px-5 py-5 sm:px-10"
      style={{
        backgroundColor: "#070B16",
      }}
    >
      <div className="max-w-screen-2xl w-full mx-auto flex justify-between items-center">
        <div>
          <LogoVertical />
        </div>

        <p className="text-base">Copyright © 2023 LetBeFound</p>
        <Link className="text-base" href={"polityka-prywatnosci"}>
          Polityka prywatności
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
