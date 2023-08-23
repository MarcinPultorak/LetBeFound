import { FC } from "react";
import Logo from "./Logo";
import LogoText from "./LogoText";

const Footer: FC = () => {
  return (
    <section
      className="border-t border-zinc-600 px-5 sm:px-10 py-5"
      style={{
        backgroundColor: "#070B16",
      }}
    >
      <div className="max-w-screen-2xl mx-auto flex">
        <div className="w-12 md:w-20">
          <LogoText />
        </div>
        <p className="self-center ml-auto sm:mx-auto text-xs sm:text-sm md:text-base">
          Copyright © 2023 LetBeFound
        </p>
      </div>
    </section>
  );
};

export default Footer;
