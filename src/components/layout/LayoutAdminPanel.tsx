import { FC, PropsWithChildren } from "react";
import SideBar from "../feature/SideBar/SideBar";

const LayoutAdminPanel: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col text-black">
      <SideBar />
      <main className="flex w-full flex-1 flex-col bg-white pl-60">{children}</main>
    </div>
  );
};

export default LayoutAdminPanel;
