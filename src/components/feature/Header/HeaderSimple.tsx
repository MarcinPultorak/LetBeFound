import LogoText from "@/components/ui/LogoText";
import LogoTextMobile from "@/components/ui/LogoTextMobile";
import useIsMobile from "@/hooks/useIsMobile";
import { FC } from "react";
import Link from "next/link";

const HeaderSimple: FC = () => {
  const isMobile = useIsMobile(768);

  return (
    <header className="px-5 md:px-10 h-20 md:h-28 flex items-center justify-between">
      {isMobile ? <LogoTextMobile /> : <LogoText />}
      <Link
        href={"/"}
        className="text-xs sm:text-sm md:text-base uppercase hover:text-orange-600 underline underline-offset-4"
      >
        Wróć na stronę główną
      </Link>
    </header>
  );
};

export default HeaderSimple;
