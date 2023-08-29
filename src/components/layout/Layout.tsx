import { FC, ReactNode } from "react";
import Footer from "../ui/Footer";
import { AnimatePresence } from "framer-motion";
import { useAppContext } from "../../providers/AppContextProvider";
import ToastBar from "../ui/ToastBar";
import FooterMobile from "../ui/FooterMobile";
import useIsMobile from "@/hooks/useIsMobile";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const { toast } = useAppContext();
  const isMobile = useIsMobile(768);

  return (
    <>
      <div className="flex min-h-screen w-full flex-1 flex-col bg-cover text-slate-300">
        <main className="flex flex-1 flex-col">{children}</main>
        {isMobile ? <FooterMobile /> : <Footer />}
      </div>
      <AnimatePresence>
        {toast?.message && (
          <ToastBar message={toast.message} type={toast.type} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Layout;
