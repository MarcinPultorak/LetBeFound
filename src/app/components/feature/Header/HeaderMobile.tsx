import { FC } from "react";
import LogoTextMobile from "../../ui/LogoTextMobile";

const HeaderMobile: FC<{ closeMenu: () => void }> = ({ closeMenu }) => {
  const ids: string[] = ["Home", "Oferta", "Nasz proces", "O nas", "Kontakt"];

  return (
    <div
      className="fixed top-0 left-0 h-screen w-full px-10 py-20 z-50"
      style={{
        backgroundColor: "#182132",
      }}
    >
      <div className="absolute right-8 top-8">
        <img
          className="cursor-pointer"
          onClick={() => closeMenu()}
          src="/images/icon-close.svg"
        />
      </div>
      <div className="mx-auto">
        <div className="flex justify-center">
          <LogoTextMobile />
        </div>
        <ul className="flex flex-col space-y-10 items-center mt-12">
          {ids.map((id) => (
            <li className="cursor-pointer hover:text-orange-600 border-b-2 border-slate-300 hover:border-orange-600">
              <a>{id}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HeaderMobile;
