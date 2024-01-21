import { NextPage } from "next";

export type AppPage = NextPage & {
  layoutType?: LayoutType;
};
