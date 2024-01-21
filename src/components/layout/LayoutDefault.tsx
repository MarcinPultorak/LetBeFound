import useIsMobile from "@/hooks/useIsMobile";
import { FC, PropsWithChildren } from "react";
import FooterMobile from "../ui/FooterMobile";
import Footer from "../ui/Footer";

const LayoutDefault: FC<PropsWithChildren> = ({ children }) => {
  const isMobile = useIsMobile(768);

  return (
    <div className="flex min-h-screen w-full flex-1 flex-col bg-cover text-slate-300 overflow-x-hidden">
      <main className="flex flex-1 flex-col">{children}</main>
      {isMobile ? <FooterMobile /> : <Footer />}
    </div>
  );
};

export default LayoutDefault;
