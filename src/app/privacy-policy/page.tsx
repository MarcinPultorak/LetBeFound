import { FC } from "react";
import CookiesConsent from "../components/feature/CookieConsent";
import PrivacyPolicy from "../components/feature/PrivacyPolicy";

export const PrivacyPolicyPage: FC = () => {
  return (
    <>
      <PrivacyPolicy />
      {/* <CookiesConsent /> */}
    </>
  );
};

export default PrivacyPolicyPage;
