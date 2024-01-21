import { FC } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import cx from "classnames";
import LogoHorizontalMobile from "@/components/ui/LogoHorizontalMobile";
import Button from "@/components/ui/Button";

type Props = {
  closeMenu: () => void;
  isFollowing: boolean;
};

const HeaderMobile: FC<Props> = ({ closeMenu, isFollowing }) => {
  const ids: string[] = ["Home", "Oferta", "Nasz proces", "O nas", "Nasze realizacje", "Kontakt"];

  return (
    <div className="fixed top-0 left-0 h-screen w-full px-10 py-20 z-50 bg-grayBlue">
      <div className={cx("absolute right-5", isFollowing ? "top-6" : "top-10")}>
        <button onClick={() => closeMenu()} title="close-mobile-menu">
          <XMarkIcon className="w-8 h-8" />
        </button>
      </div>
      <div className="mx-auto">
        <div className="flex justify-center">
          <LogoHorizontalMobile />
        </div>
        <ul className="flex flex-col space-y-10 items-center mt-12">
          {ids.map((id) => (
            <li key={id} className="cursor-pointer hover:text-orange-600 hover:border-orange-600">
              <Link href={`#${id}`} onClick={() => closeMenu()}>
                {id}
              </Link>
            </li>
          ))}
          <Button variant="orange" className="max-w-[92px] max-h-[32px] text-sm">
            <Link href={"wycena"}>Wycena</Link>
          </Button>
        </ul>
      </div>
    </div>
  );
};

export default HeaderMobile;
