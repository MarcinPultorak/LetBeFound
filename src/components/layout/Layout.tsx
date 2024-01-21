import { FC, PropsWithChildren } from "react";

import { AnimatePresence } from "framer-motion";
import { useAppContext } from "../../providers/AppContextProvider";
import ToastBar from "../ui/ToastBar";

import LayoutDefault from "./LayoutDefault";
import LayoutAdminPanel from "./LayoutAdminPanel";

type LayoutProps = {
  layoutType?: LayoutType;
};

const Layout: FC<PropsWithChildren<LayoutProps>> = ({ layoutType, children }) => {
  const { toast } = useAppContext();

  const layout = () => {
    switch (layoutType) {
      case "default":
        return <LayoutDefault>{children}</LayoutDefault>;
      case "admin":
        return <LayoutAdminPanel>{children}</LayoutAdminPanel>;
      default:
        return <>{children}</>;
    }
  };

  return (
    <>
      {layout()}
      <AnimatePresence>{toast?.message && <ToastBar message={toast.message} type={toast.type} />}</AnimatePresence>
    </>
  );
};

export default Layout;

export type LayoutType = "default" | "admin";
