import { FC, useState, useEffect } from "react";
import HeaderMobile from "./HeaderMobile";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useScroll } from "framer-motion";
import cx from "classnames";
import Link from "next/link";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import LogoHorizontalMobile from "@/components/ui/LogoHorizontalMobile";
import LogoHorizontal from "@/components/ui/LogoHorizontal";
import Button from "@/components/ui/Button";

const Header: FC = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [isFollowing, setIsFollowing] = useState<boolean>(false);

  const ids: string[] = [
    "Home",
    "Oferta",
    "Nasz proces",
    "O nas",
    "Nasze realizacje",
    "Kontakt",
  ];

  const { scrollY } = useScroll();
  const activeId = useScrollSpy(ids, 81);

  useEffect(() => {
    const updateHeader = () => {
      scrollY.get() > 0 ? setIsFollowing(true) : setIsFollowing(false);
    };

    const unsubscribeY = scrollY.on("change", updateHeader);

    return () => {
      unsubscribeY();
    };
  }, [scrollY]);

  return (
    <header
      className={cx(
        "lg:inset-x-0 w-full flex-shrink-0 fixed top-0 left-0 px-5 md:px-10 z-50",
        isFollowing
          ? "bg-grayBlue h-20 shadow-black shadow-md"
          : "md:absolute md:top-0 h-28"
      )}
    >
      {isOpened && (
        <HeaderMobile
          closeMenu={() => setIsOpened(false)}
          isFollowing={isFollowing}
        />
      )}
      <div className="flex justify-between items-center h-full xl:hidden">
        <LogoHorizontalMobile />

        <button onClick={() => setIsOpened(!isOpened)} title="hamburger-menu">
          <Bars3Icon className="w-8 h-8" />
        </button>
      </div>
      <div
        className={cx(
          "relative hidden xl:flex xl:max-w-screen-2xl xl:w-full lg:h-full  xl:mx-auto xl:items-center",
          isFollowing ? "lg:justify-between items-center" : "lg:justify-end"
        )}
      >
        <div
          className={cx("", {
            "absolute top-7 left-0": !isFollowing,
          })}
        >
          {isFollowing ? <LogoHorizontalMobile /> : <LogoHorizontal />}
        </div>
        <ul className="flex space-x-10 items-center">
          {ids.map((id) => (
            <li
              key={id}
              className={cx(
                "cursor-pointer lg:hover:text-orange-600 lg:hover:underline lg:hover:underline-offset-8",
                id == activeId && "underline underline-offset-8 text-orange-600"
              )}
            >
              <Link href={`#${id}`}>{id}</Link>
            </li>
          ))}
        </ul>
        <Button
          variant="orange"
          className="max-w-[92px] max-h-[32px] ml-10 text-sm"
        >
          <Link href={"wycena"}>Wycena</Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
