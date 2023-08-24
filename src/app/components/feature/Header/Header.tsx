"use client";

import { FC, useState } from "react";
import LogoText from "../../ui/LogoText";
import HeaderMobile from "./HeaderMobile";
import LogoTextMobile from "../../ui/LogoTextMobile";

const Header: FC = () => {
  const ids: string[] = ["Home", "Oferta", "Nasz proces", "O nas", "Kontakt"];

  const [isOpened, setIsOpened] = useState<boolean>(false);

  const closeMenu = () => {
    setIsOpened(false);
  };

  return (
    <header className="relative md:absolute top-0 inset-x-0 h-28 w-full md:px-10">
      {isOpened && <HeaderMobile closeMenu={closeMenu} />}
      <div className="md:hidden">
        <div className="absolute top-8 left-0">
          <LogoTextMobile />
        </div>
        <img
          className="absolute right-4 top-8 sm:right-0 sm:top-10 cursor-pointer"
          onClick={() => setIsOpened(!isOpened)}
          src="/images/icon-hamburger.svg"
        />
      </div>
      <div className="relative hidden md:flex md:max-w-screen-2xl md:w-full md:h-full md:justify-end md:mx-auto">
        <div className="absolute top-8 left-0">
          <LogoText />
        </div>
        <ul className="flex space-x-10 items-center">
          {ids.map((id) => (
            <li className="cursor-pointer hover:text-orange-600 hover:underline hover:underline-offset-8">
              <a>{id}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
