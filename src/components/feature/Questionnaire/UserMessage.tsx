import { FC } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Link from "next/link";

const UserMessage: FC = () => {
  return (
    <>
      <div
        className="bg-sky-800 bg-opacity-20 px-5 sm:px-10 py-10 mt-10 sm:mt-16 rounded-md relative overflow-hidden flex flex-col items-center"
        style={{
          boxShadow: "10px 10px 20px 0px rgba(0, 0, 0, 0.25)",
        }}
      >
        <h2 className="uppercase  text-sm sm:text-base md:text-lg lg:text-xl text-center font-bold tracking-[.15em]">
          Formularz został pomyślnie wysłany
        </h2>
        <p className="text-center text-xs sm:text-sm md:text-base mt-4 ">
          Przygotujemy wecenę i skontaktujemy się z Tobą najszybciej jak to
          możliwe.
        </p>
        <Image
          src={"/images/succes-icon.svg"}
          width={45}
          height={45}
          alt="succes-icon"
          className="mt-6 sm:mt-8"
        />
        <Link href={"/#Home"}>
          <Button
            variant="orange"
            className="font-normal normal-case text-xs sm:text-sm md:text-base px-5 sm:px-10 mt-6 sm:mt-8"
            style={{
              boxShadow: "10px 10px 20px 0px rgba(0, 0, 0, 0.30)",
            }}
          >
            Wróć na stronę główną
          </Button>
        </Link>
      </div>
    </>
  );
};

export default UserMessage;
