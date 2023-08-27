import { FC } from "react";
import LogoTextMobile from "../../ui/LogoTextMobile";
import { XMarkIcon } from "@heroicons/react/20/solid";

const HeaderMobile: FC<{ closeMenu: () => void }> = ({ closeMenu }) => {
  const ids: string[] = ["Home", "Oferta", "Nasz proces", "O nas", "Kontakt"];

  return (
    <div className="fixed top-0 left-0 h-screen w-full px-10 py-20 z-50 bg-grayBlue">
      <div className="absolute right-5 top-10">
        <button onClick={() => closeMenu()}>
          <XMarkIcon className="w-8 h-8" />
        </button>
      </div>
      <div className="mx-auto">
        <div className="flex justify-center">
          <LogoTextMobile />
        </div>
        <ul className="flex flex-col space-y-10 items-center mt-12">
          {ids.map((id) => (
            <li
              key={id}
              className="cursor-pointer hover:text-orange-600 hover:border-orange-600"
            >
              <a href={`#${id}`} onClick={() => closeMenu()}>
                {id}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HeaderMobile;
