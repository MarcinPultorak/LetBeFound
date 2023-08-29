import { FC } from "react";
import HexagonTile from "../ui/HexagonTile";
import { WhyNeedWebsiteData } from "@/data/textData";

const WhyYouNeedWebsite: FC = () => {
  return (
    <>
      <HexagonTile data={WhyNeedWebsiteData.Tile1} isEmpty={false} />
    </>
  );
};

export default WhyYouNeedWebsite;
