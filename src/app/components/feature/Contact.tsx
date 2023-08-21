import { FC } from "react";
import ContactForm from "./ContactForm";

const Contact: FC = () => {
  return (
    <section
      className="px-10 py-20"
      style={{
        backgroundColor: "#010101",
        backgroundImage: "url(/images/contact-background.png)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h2 className="uppercase text-2xl text-center font-bold tracking-[.15em]">
        Skontaktuj się z nami!
      </h2>
      <div className="max-w-4xl mx-auto">
        <div
          className="rounded-xl py-20 px-10 mt-16 border border-zinc-600"
          style={{
            backgroundColor: "rgba(7, 11, 22, 0.80)",
          }}
        >
          <ContactForm />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div
            className="rounded-xl p-10 border border-zinc-600"
            style={{
              backgroundColor: "rgba(7, 11, 22, 0.80)",
            }}
          >
            <img className="mx-auto" src="/images/icon-email.svg" />
            <p className="text-center text-lg mt-10">kontakt@letbefound.pl</p>
          </div>
          <div
            className="rounded-xl p-10 border border-zinc-600"
            style={{
              backgroundColor: "rgba(7, 11, 22, 0.80)",
            }}
          >
            <img className="mx-auto" src="/images/icon-phone.svg" />
            <div className=" text-center mt-10">
              <p className="mr-auto text-lg">Marcin: +48 000 000 000</p>
              <p className="mr-auto text-lg">Dawid: +48 000 000 000</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
