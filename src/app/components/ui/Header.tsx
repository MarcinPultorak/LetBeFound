import { FC } from "react";
import Logo from "./Logo";

const Header: FC = () => {
  const ids: string[] = ["Home", "Oferta", "Nasz proces", "O nas", "Kontakt"];
  return (
    <header className="absolute top-0 inset-x-0 mx-auto flex max-w-screen-2xl h-28 justify-end w-full px-10">
      <div className="absolute top-8 left-10">
        <Logo />
      </div>
      <ul className="flex space-x-10 items-center">
        {ids.map((id) => (
          <li className="cursor-pointer hover:text-orange-600 hover:underline hover:underline-offset-8">
            <a>{id}</a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
