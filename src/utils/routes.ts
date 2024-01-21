import { AppRoute } from "@/types/routes";

export const adminPanelRoutes: { [key: string]: AppRoute } = {
  dashboard: {
    title: "Dashboard",
    path: "/admin",
  },
  clients: {
    title: "Klienci",
    path: "/admin/klienci",
  },
};

export const mainRoutes: { [key: string]: AppRoute } = {
  wycena: {
    title: "Wycena",
    path: "/wycena",
  },
};
