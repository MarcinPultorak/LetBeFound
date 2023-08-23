import { FC } from "react";
import ContactForm from "./ContactForm";

const Contact: FC = () => {
  return (
    <section
      className="px-5 py-10 sm:px-10 lg:py-20"
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
      <div className="max-w-4xl mx-auto">
        <ContactForm />

        <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-4 mt-6">
          <div
            className="rounded-xl p-10 border border-zinc-600"
            style={{
              backgroundColor: "rgba(7, 11, 22, 0.80)",
            }}
          >
            <img
              className="mx-auto w-9 sm:w-auto"
              src="/images/icon-email.svg"
            />
            <p className="text-center text-sm md:text-base lg:text-lg mt-10">
              kontakt@letbefound.pl
            </p>
          </div>
          <div
            className="rounded-xl p-10 border border-zinc-600"
            style={{
              backgroundColor: "rgba(7, 11, 22, 0.80)",
            }}
          >
            <img
              className="mx-auto w-9 sm:w-auto"
              src="/images/icon-phone.svg"
            />
            <div className=" text-center mt-10">
              <p className="mr-auto text-sm md:text-base lg:text-lg">
                Marcin: +48 000 000 000
              </p>
              <p className="mr-auto text-sm md:text-base lg:text-lg">
                Dawid: +48 000 000 000
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
