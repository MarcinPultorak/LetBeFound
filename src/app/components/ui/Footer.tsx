import { FC } from "react";
import Logo from "./Logo";

const Footer: FC = () => {
  return (
    <section
      className="border-t border-zinc-600 px-10"
      style={{
        backgroundColor: "#070B16",
      }}
    >
      <div className="max-w-screen-2xl mx-auto flex">
        <div className="w-20">
          <Logo />
        </div>
        <p className="self-center mx-auto">Copyright © 2023 LetBeFound</p>
      </div>
    </section>
  );
};

export default Footer;
