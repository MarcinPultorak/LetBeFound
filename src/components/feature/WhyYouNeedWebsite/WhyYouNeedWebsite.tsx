import { FC } from "react";
import WhyYouNeedWebsiteDesktop from "./WhyYouNeedWebsiteDesktop";
import useIsMobile from "@/hooks/useIsMobile";
import WhyYouNeedWebsiteMobile1024 from "./WhyYouNeedWebsiteMobile1024";
import WhyYouNeedWebsiteMobile768 from "./WhyYouNeedWebsiteMobile768";

const WhyYouNeedWebsite: FC = () => {
  const isMobile1024 = useIsMobile(1024);
  const isMobile768 = useIsMobile(768);

  const display = () => {
    if (isMobile768) {
      return <WhyYouNeedWebsiteMobile768 />;
    }
    if (isMobile1024) {
      return <WhyYouNeedWebsiteMobile1024 />;
    } else {
      return <WhyYouNeedWebsiteDesktop />;
    }
  };

  return (
    <>
      <section className="py-10 px-5 sm:py-20 sm:px-10 bg-grayBlue relative">
        {display()}
      </section>
    </>
  );
};

export default WhyYouNeedWebsite;
