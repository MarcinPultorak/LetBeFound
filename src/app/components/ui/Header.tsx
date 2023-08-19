import { FC } from "react";
import Logo from "./Logo";

const Header: FC = () => {
  const ids: string[] = ["Home", "Oferta", "Nasz proces", "O nas", "Kontakt"];
  return (
    <header className="absolute top-0 inset-x-0 h-28 w-full px-10">
      <div className="relative flex max-w-screen-2xl w-full h-full justify-end mx-auto">
        <div className="absolute top-8 left-0">
          <Logo />
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
