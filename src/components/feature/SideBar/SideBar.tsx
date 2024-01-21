import { ArrowLeftOnRectangleIcon, HomeIcon, UserIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { FC, cloneElement } from "react";
import cx from "classnames";
import { adminPanelRoutes } from "@/utils/routes";
import LogoHorizontal from "@/components/ui/LogoHorizontal";
import { useRouter } from "next/router";

const SideBar: FC = () => {
  const router = useRouter();

  const menuItems = [
    { route: adminPanelRoutes.dashboard, icon: <HomeIcon /> },
    { route: adminPanelRoutes.clients, icon: <UserIcon /> },
  ];

  return (
    <div className="fixed top-0 bg-zinc-100">
      <header className="flex h-screen w-60 shrink-0 flex-col px-6">
        <div className="py-10 flex justify-center">
          <Link href={"/"}>
            <img className="w-24 h-24" src="/images/logo.svg" alt="letbefound-logo" />
          </Link>
        </div>
        <nav className="space-y-5">
          {menuItems.map((item) => (
            <Link
              href={item.route.path}
              className={cx(
                "group flex items-center cursor-pointer space-x-3 hover:text-teal-500",
                router.asPath == item.route.path ? "text-teal-500" : "text-black"
              )}
              key={item.route.title}
            >
              {cloneElement(item.icon, {
                className: cx("h-5 w-5 text-black group-hover:text-teal-500", router.asPath == item.route.path ? "text-teal-500" : "text-black"),
              })}
              <span>{item.route.title}</span>
            </Link>
          ))}

          <button onClick={() => {}} className="group flex items-center space-x-3 hover:text-teal-500">
            {cloneElement(<ArrowLeftOnRectangleIcon />, { className: "h-5 w-5 text-black group-hover:text-teal-500" })}
            <span>Log out</span>
          </button>
        </nav>
      </header>
    </div>
  );
};

export default SideBar;
