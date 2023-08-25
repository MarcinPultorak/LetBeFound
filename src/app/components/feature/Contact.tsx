"use client";

import { FC } from "react";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";
import { ContactFormDto } from "@/app/interfaces/types";

const Contact: FC = () => {
  const handleContactForm = async (payload: ContactFormDto): Promise<void> => {
    await fetch("/api", {
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
    })
      .then(() => {
        console.log("SUCCESS");
        return Promise.resolve;
      })
      .catch((err) => {
        console.log("ERROR");
        return Promise.reject();
      });
  };

  return (
    <section
      id={"Kontakt"}
      className="px-5 py-10 sm:px-10 md:py-20"
      style={{
        backgroundColor: "#010101",
        backgroundImage: "url(/images/contact-background.png)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h2 className="uppercase sm:text-xl md:text-xl lg:text-2xl text-center font-bold tracking-[.15em]">
        Skontaktuj się z nami!
      </h2>
      <motion.div
        whileInView={{ x: [-300, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto"
      >
        <ContactForm callback={handleContactForm} />

        <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-4 mt-6">
          <motion.div
            className="rounded-xl space-y-6 md:space-y-10 p-6 md:p-10 border border-zinc-600"
            style={{
              backgroundColor: "rgba(7, 11, 22, 0.80)",
            }}
          >
            <img
              className="mx-auto w-9 sm:w-auto"
              src="/images/icon-email.svg"
            />
            <p className="text-center text-sm md:text-base lg:text-lg">
              kontakt@letbefound.pl
            </p>
          </motion.div>
          <motion.div
            className="rounded-xl space-y-6 md:space-y-10 p-6 md:p-10 border border-zinc-600"
            style={{
              backgroundColor: "rgba(7, 11, 22, 0.80)",
            }}
          >
            <img
              className="mx-auto w-9 sm:w-auto"
              src="/images/icon-phone.svg"
            />
            <div className="text-center">
              <p className="text-sm md:text-base lg:text-lg">
                Marcin: +48 000 000 000
              </p>
              <p className="text-sm md:text-base lg:text-lg">
                Dawid: +48 000 000 000
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
