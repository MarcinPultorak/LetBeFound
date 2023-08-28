import { FC } from "react";
import LogoText from "./LogoText";
import LogoTextMobile from "./LogoTextMobile";

const Footer: FC = () => {
  return (
    <footer
      className="border-t border-zinc-600 px-5 py-5 sm:px-10"
      style={{
        backgroundColor: "#070B16",
      }}
    >
      <div className="max-w-screen-2xl mx-auto flex">
        <div className="hidden md:block">
          <LogoText />
        </div>
        <div className="block md:hidden">
          <LogoTextMobile />
        </div>
        <p className="self-center ml-auto sm:mx-auto text-xs sm:text-sm md:text-base">
          Copyright © 2023 LetBeFound
        </p>
      </div>
    </footer>
  );
};

export default Footer;
