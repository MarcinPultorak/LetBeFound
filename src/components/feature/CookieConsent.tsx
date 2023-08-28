import Link from "next/link";
import { FC, useCallback, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import Button from "../ui/Button";

const CookiesConsent: FC = () => {
  const [cookie, setCookie] = useCookies(["user"]);
  const [consent, setConsent] = useState(true);

  useEffect(() => {
    setConsent(cookie?.user?.consent);
  }, [cookie?.user?.consent]);

  const handleConsent = useCallback(() => {
    setCookie("user", JSON.stringify({ consent: true }), {
      path: "/",
      sameSite: true,
    });
  }, [setCookie]);

  if (!consent) {
    return (
      <div className="fixed bottom-0 w-full z-[999] bg-slate-300 text-black p-8 sm:bottom-5 sm:left-5 sm:max-w-lg sm:rounded-xl sm:shadow-2xl">
        <p className="text-sm leading-snug text-justify">
          Wykorzystujemy pliki cookies do prawidłowego działania serwisu, aby
          analizować ruch i prowadzić działania marketingowe. Więcej informacji
          znajdziesz w{" "}
          <Link
            href={"/privacy-policy"}
            className="font-bold underline hover:text-blue"
          >
            Polityce prywatności oraz polityce plików cookies
          </Link>
          . Akceptacja tego komunikatu oznacza zgodę na ich zapisywanie na Twoim
          komputerze.
        </p>
        <div className="flex space-x-5 mt-5">
          <Button onClick={handleConsent} variant="secondary">
            Odrzucam
          </Button>
          <Button onClick={handleConsent}>Potwierdzam</Button>
        </div>
      </div>
    );
  } else return null;
};

export default CookiesConsent;
