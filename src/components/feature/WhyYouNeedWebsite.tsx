import { FC } from "react";
import HexagonTile from "../ui/HexagonTile";
import { WhyNeedWebsiteData } from "@/data/textData";
import HexagonTileEmpty from "../ui/HexagonTileEmpty";

const WhyYouNeedWebsite: FC = () => {
  return (
    <>
      <div className="flex h-full w-full max-w-screen-lg">
        <HexagonTile data={WhyNeedWebsiteData.Tile1} />
        <HexagonTileEmpty />
      </div>
    </>
  );
};

export default WhyYouNeedWebsite;
