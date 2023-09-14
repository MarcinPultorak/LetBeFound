import { FC } from "react";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";
import Image from "next/image";
import { ContactFormDto } from "@/interfaces/types";
import { useAppContext } from "@/providers/AppContextProvider";
import useIsMobile from "@/hooks/useIsMobile";

const Contact: FC = () => {
  const { successReceived, errorReceived } = useAppContext();

  const isMobile = useIsMobile(768);

  const handleContactForm = async (payload: ContactFormDto): Promise<void> => {
    await fetch("/api/route", {
      body: JSON.stringify({
        email: payload.email,
        fullname: payload.name,
        subject: payload.topic,
        message: payload.message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    }).then((res) => {
      if (res.status == 200) {
        successReceived("Formularz został wysłany!");
        return Promise.resolve();
      } else {
        errorReceived(
          "Wystąpił błąd podczas próby wysłania formularza. Spróbuj ponownie!"
        );
        return Promise.reject();
      }
    });
  };

  return (
    <section
      id={"Kontakt"}
      className="px-5 py-10 sm:px-10 md:py-20 bg-neutral-950 relative z-0"
    >
      <Image
        src={"/images/contact-background.png"}
        alt="contact-background-image"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        fill
      />

      <h2 className="uppercase sm:text-xl md:text-xl lg:text-2xl text-center font-bold tracking-[.15em]">
        Skontaktuj się z nami!
      </h2>
      <motion.div
        viewport={{ once: true }}
        whileInView={
          isMobile ? { x: 0, opacity: 1 } : { x: [-300, 0], opacity: [0, 1] }
        }
        transition={isMobile ? { duration: 0 } : { duration: 1 }}
        className="max-w-4xl mx-auto"
      >
        <ContactForm callback={handleContactForm} />

        <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-4 mt-6">
          <div
            className="rounded-xl space-y-6 md:space-y-10 p-6 md:p-10 border border-zinc-600"
            style={{
              backgroundColor: "rgba(7, 11, 22, 0.80)",
            }}
          >
            <img
              className="mx-auto w-9 h-10 sm:w-auto"
              src="/images/icon-email.svg"
              alt="icon-email"
            />
            <p className="text-center text-sm md:text-base lg:text-lg">
              kontakt@letbefound.pl
            </p>
          </div>
          <div
            className="rounded-xl space-y-6 md:space-y-10 p-6 md:p-10 border border-zinc-600"
            style={{
              backgroundColor: "rgba(7, 11, 22, 0.80)",
            }}
          >
            <img
              className="mx-auto w-9 h-10 sm:w-auto"
              src="/images/icon-phone.svg"
              alt="icon-phone"
            />
            <div className="text-center">
              <p className="text-sm md:text-base lg:text-lg">+48 570 121 294</p>
              <p className="text-sm md:text-base lg:text-lg">+48 609 398 947</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
